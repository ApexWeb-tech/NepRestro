"use client";

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '../../lib/supabase/client';
import { fetchWithUserInfo } from '../../lib/api/client';
import type { Reservation } from '../../types/reservation';
import type { Table } from '../../types/table';
import type { UserRole } from '../../types/auth';
import { hasPermission } from '../../types/auth';

const statusColors: Record<Reservation['status'], string> = {
  pending: 'bg-amber-100 text-amber-800',
  confirmed: 'bg-emerald-100 text-emerald-800',
  seated: 'bg-slate-100 text-slate-900',
  completed: 'bg-sky-100 text-sky-800',
  cancelled: 'bg-rose-100 text-rose-800',
};

const statusOptions: Reservation['status'][] = ['pending', 'confirmed', 'seated', 'completed', 'cancelled'];

function formatDate(dateValue: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(dateValue));
}

function formatTime(value: string) {
  return value ? new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' }).format(new Date(`1970-01-01T${value}`)) : '';
}

export default function AdminReservationsManager() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [tables, setTables] = useState<Table[]>([]);
  const [filter, setFilter] = useState<'all' | Reservation['status']>('all');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>('staff');
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [statusModalData, setStatusModalData] = useState<{
    reservationId: string;
    newStatus: Reservation['status'];
  } | null>(null);
  const [statusReason, setStatusReason] = useState('');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleteReason, setDeleteReason] = useState('');

  useEffect(() => {
    // Get user role from session
    const getUserRole = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.user_metadata?.role) {
        setUserRole(user.user_metadata.role as UserRole);
      }
    };
    getUserRole();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [reservationResult, tableResult] = await Promise.all([
      supabase
        .from('reservations')
        .select('*, table:tables(id,name,seats,status)')
        .order('date', { ascending: false })
        .order('time', { ascending: false }),
      supabase.from('tables').select('*').order('seats', { ascending: true }),
    ]);

    if (reservationResult.error) {
      toast.error('Unable to load reservations.');
    }
    if (tableResult.error) {
      toast.error('Unable to load tables.');
    }

    setReservations(reservationResult.data ?? []);
    setTables(tableResult.data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
    const reservationChannel = supabase
      .channel('reservation-updates')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'reservations' },
        (payload) => {
          const record = (payload.new ?? payload.old) as Reservation;
          if (!record) return;
          setReservations((current) => {
            if (payload.eventType === 'INSERT' && payload.new) {
              return [...current, payload.new as Reservation];
            }
            if (payload.eventType === 'UPDATE' && payload.new) {
              return current.map((reservation) =>
                reservation.id === (payload.new as Reservation).id ? (payload.new as Reservation) : reservation
              );
            }
            if (payload.eventType === 'DELETE' && payload.old) {
              return current.filter((reservation) => reservation.id !== (payload.old as Reservation).id);
            }
            return current;
          });
        }
      )
      .subscribe();

    const tableChannel = supabase
      .channel('table-updates')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'tables' },
        (payload) => {
          if (payload.eventType === 'INSERT' && payload.new) {
            setTables((current) => [...current, payload.new as Table]);
            return;
          }
          if (payload.eventType === 'UPDATE' && payload.new) {
            setTables((current) =>
              current.map((table) => (table.id === (payload.new as Table).id ? (payload.new as Table) : table))
            );
            return;
          }
          if (payload.eventType === 'DELETE' && payload.old) {
            setTables((current) => current.filter((table) => table.id !== (payload.old as Table).id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(reservationChannel);
      supabase.removeChannel(tableChannel);
    };
  }, []);

  const visibleReservations = useMemo(() => {
    return reservations.filter((reservation) => {
      const queryTerm = query.toLowerCase();
      const matchesQuery =
        queryTerm === '' ||
        reservation.name.toLowerCase().includes(queryTerm) ||
        reservation.email.toLowerCase().includes(queryTerm) ||
        reservation.phone?.toLowerCase().includes(queryTerm) ||
        reservation.table?.name.toLowerCase().includes(queryTerm) ||
        reservation.status.toLowerCase().includes(queryTerm);
      const matchesFilter = filter === 'all' || reservation.status === filter;
      return matchesQuery && matchesFilter;
    });
  }, [filter, query, reservations]);

  const summary = useMemo(
    () => ({
      total: reservations.length,
      pending: reservations.filter((reservation) => reservation.status === 'pending').length,
      confirmed: reservations.filter((reservation) => reservation.status === 'confirmed').length,
      seated: reservations.filter((reservation) => reservation.status === 'seated').length,
      cancelled: reservations.filter((reservation) => reservation.status === 'cancelled').length,
    }),
    [reservations]
  );

  const updateReservation = async (id: string, updates: Partial<Reservation>, successMessage: string) => {
    setActionLoading(true);
    const { error } = await supabase.from('reservations').update(updates).eq('id', id).select();
    setActionLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success(successMessage);
    await loadData();
  };

  const assignTable = async (reservationId: string, tableId: string) => {
    await updateReservation(reservationId, { table_id: tableId }, 'Table assignment updated.');
  };

  const setStatus = async (reservationId: string, status: Reservation['status']) => {
    setStatusModalData({ reservationId, newStatus: status });
    setStatusReason('');
    setStatusModalOpen(true);
  };

  const confirmStatusChange = async () => {
    if (!statusModalData) return;

    setActionLoading(true);
    try {
      const response = await fetchWithUserInfo('/api/reservations', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reservationId: statusModalData.reservationId,
          status: statusModalData.newStatus,
          reason: statusReason || undefined,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        toast.error(error.error || 'Failed to update status');
        setActionLoading(false);
        return;
      }

      toast.success('Status updated and customer notified via email!');
      setStatusModalOpen(false);
      setStatusModalData(null);
      await loadData();
    } catch (error) {
      toast.error('Error updating reservation');
    } finally {
      setActionLoading(false);
    }
  };

  const deleteReservation = async () => {
    if (!deleteConfirmId) return;

    setActionLoading(true);
    try {
      const response = await fetchWithUserInfo('/api/reservations', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reservationId: deleteConfirmId,
          reason: deleteReason || 'Your reservation has been cancelled.',
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        toast.error(error.error || 'Failed to delete reservation');
        setActionLoading(false);
        return;
      }

      toast.success('Reservation deleted and customer notified!');
      setDeleteConfirmOpen(false);
      setDeleteConfirmId(null);
      await loadData();
    } catch (error) {
      toast.error('Error deleting reservation');
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <section className='space-y-8'>
      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <div className='mb-6'>
          <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Reservations</p>
          <h1 className='mt-3 text-4xl font-bold'>Manage Bookings</h1>
          <p className='mt-3 text-gray-600'>Track incoming reservations, assign tables, and update statuses in real time.</p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
          {[
            { label: 'Total', value: summary.total },
            { label: 'Pending', value: summary.pending },
            { label: 'Confirmed', value: summary.confirmed },
            { label: 'Seated', value: summary.seated },
            { label: 'Cancelled', value: summary.cancelled },
          ].map((card) => (
            <div key={card.label} className='rounded-3xl border border-slate-200 bg-slate-50 p-5'>
              <p className='text-sm uppercase tracking-[0.3em] text-slate-500'>{card.label}</p>
              <p className='mt-2 text-3xl font-semibold text-slate-900'>{card.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <div className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold text-slate-950'>Reservation list</h2>
            <p className='mt-2 text-sm text-slate-500'>Filtered by status, guest, or table assignment.</p>
          </div>
          <div className='grid gap-3 sm:grid-cols-2'>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search reservations'
              className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
            />
            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value as typeof filter)}
              className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
            >
              <option value='all'>All statuses</option>
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className='rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center text-slate-700'>Loading reservations...</div>
        ) : visibleReservations.length === 0 ? (
          <div className='rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-700'>No reservations match the current filter.</div>
        ) : (
          <div className='space-y-6'>
            {visibleReservations.map((reservation) => (
              <div key={reservation.id} className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
                <div className='flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between'>
                  <div className='max-w-2xl'>
                    <div className='flex flex-wrap gap-2'>
                      <span className='rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700'>{formatDate(reservation.date)}</span>
                      <span className='rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700'>{formatTime(reservation.time)}</span>
                      <span className='rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700'>{reservation.guests} Guests</span>
                      <span className={`rounded-full px-3 py-1 text-sm font-semibold ${statusColors[reservation.status]}`}>
                        {reservation.status}
                      </span>
                    </div>
                    <h3 className='mt-4 text-xl font-semibold text-slate-950'>{reservation.name}</h3>
                    <p className='mt-1 text-sm text-slate-600'>{reservation.email} · {reservation.phone ?? 'No phone provided'}</p>
                    <p className='mt-3 text-sm text-slate-700'>{reservation.requests || 'No special requests.'}</p>
                    <p className='mt-4 text-sm text-slate-600'>Assigned table: <span className='font-semibold'>{reservation.table?.name ?? 'Not assigned'}</span></p>
                  </div>

                  <div className='grid gap-3 sm:w-64'>
                    <Link
                      href={`/admin/reservations/${reservation.id}`}
                      className='inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
                    >
                      View details
                    </Link>
                    <select
                      value={reservation.table_id ?? ''}
                      onChange={(event) => assignTable(reservation.id, event.target.value)}
                      className='w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:bg-white'
                    >
                      <option value='' disabled>
                        Assign table
                      </option>
                      {tables.map((table) => (
                        <option key={table.id} value={table.id}>
                          {table.name} · {table.seats} seats
                        </option>
                      ))}
                    </select>
                    <div className='grid gap-2'>
                      {statusOptions.map((status) => (
                        <button
                          key={status}
                          type='button'
                          disabled={actionLoading || status === reservation.status}
                          onClick={() => setStatus(reservation.id, status)}
                          className='rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-60'
                        >
                          Set {status}
                        </button>
                      ))}
                    </div>
                    {hasPermission(userRole, 'delete_reservations') && (
                      <button
                        type='button'
                        disabled={actionLoading}
                        onClick={() => {
                          setDeleteConfirmId(reservation.id);
                          setDeleteReason('');
                          setDeleteConfirmOpen(true);
                        }}
                        className='rounded-full border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 transition hover:border-rose-400 hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60'
                      >
                        Delete reservation
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Status Change Modal */}
      {statusModalOpen && statusModalData && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
          <div className='w-full max-w-md rounded-2xl bg-white p-6 shadow-xl'>
            <h2 className='text-xl font-bold text-slate-900'>Change Reservation Status</h2>
            <p className='mt-2 text-sm text-slate-600'>
              Set status to <span className='font-semibold capitalize'>{statusModalData.newStatus}</span>
            </p>

            <div className='mt-4'>
              <label className='block text-sm font-semibold text-slate-700'>Reason (optional)</label>
              <textarea
                value={statusReason}
                onChange={(e) => setStatusReason(e.target.value)}
                placeholder='e.g., Table has been prepared, customer called in...'
                className='mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-orange-500'
                rows={3}
              />
            </div>

            <div className='mt-6 flex gap-3'>
              <button
                onClick={() => setStatusModalOpen(false)}
                disabled={actionLoading}
                className='flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-60'
              >
                Cancel
              </button>
              <button
                onClick={confirmStatusChange}
                disabled={actionLoading}
                className='flex-1 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60'
              >
                {actionLoading ? 'Updating...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmOpen && deleteConfirmId && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
          <div className='w-full max-w-md rounded-2xl bg-white p-6 shadow-xl'>
            <h2 className='text-xl font-bold text-rose-600'>Delete Reservation?</h2>
            <p className='mt-2 text-sm text-slate-600'>
              This will permanently delete the reservation and send a cancellation email to the customer.
            </p>

            <div className='mt-4'>
              <label className='block text-sm font-semibold text-slate-700'>Cancellation Reason (optional)</label>
              <textarea
                value={deleteReason}
                onChange={(e) => setDeleteReason(e.target.value)}
                placeholder='e.g., Customer requested cancellation, table no longer available...'
                className='mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-rose-500'
                rows={3}
              />
            </div>

            <div className='mt-6 flex gap-3'>
              <button
                onClick={() => setDeleteConfirmOpen(false)}
                disabled={actionLoading}
                className='flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-60'
              >
                Keep it
              </button>
              <button
                onClick={deleteReservation}
                disabled={actionLoading}
                className='flex-1 rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-60'
              >
                {actionLoading ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
