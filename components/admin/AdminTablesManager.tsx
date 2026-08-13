"use client";

import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '../../lib/supabase/client';
import type { Table } from '../../types/table';
import TableCard from '../tables/TableCard';

const tableStatusOptions: Table['status'][] = ['available', 'reserved', 'occupied', 'maintenance'];
const statusColor: Record<Table['status'], string> = {
  available: 'bg-emerald-100 text-emerald-800',
  reserved: 'bg-amber-100 text-amber-800',
  occupied: 'bg-slate-100 text-slate-900',
  maintenance: 'bg-rose-100 text-rose-700',
};

export default function AdminTablesManager() {
  const [tables, setTables] = useState<Table[]>([]);
  const [name, setName] = useState('');
  const [seats, setSeats] = useState('2');
  const [status, setStatus] = useState<Table['status']>('available');
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editTableData, setEditTableData] = useState<Table | null>(null);
  const [editName, setEditName] = useState('');
  const [editSeats, setEditSeats] = useState('');
  const [editStatus, setEditStatus] = useState<Table['status']>('available');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const loadTables = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('tables').select('*').order('seats', { ascending: true });
    setLoading(false);

    if (error) {
      toast.error('Unable to load tables.');
      return;
    }

    setTables(data ?? []);
  };

  useEffect(() => {
    loadTables();
    const tableChannel = supabase
      .channel('tables-updates')
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
      supabase.removeChannel(tableChannel);
    };
  }, []);

  const summary = useMemo(
    () => ({
      total: tables.length,
      available: tables.filter((table) => table.status === 'available').length,
      reserved: tables.filter((table) => table.status === 'reserved').length,
      occupied: tables.filter((table) => table.status === 'occupied').length,
      maintenance: tables.filter((table) => table.status === 'maintenance').length,
    }),
    [tables]
  );

  const createTable = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setActionLoading(true);

    const parsedSeats = Number(seats);
    if (!name.trim() || !parsedSeats || parsedSeats < 1) {
      toast.error('Please enter a valid name and seating capacity.');
      setActionLoading(false);
      return;
    }

    const { error } = await supabase.from('tables').insert([{ name: name.trim(), seats: parsedSeats, status }]);
    setActionLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    setName('');
    setSeats('2');
    setStatus('available');
    toast.success('Table added successfully.');
    await loadTables();
  };

  const updateTable = async (tableId: string, updates: Partial<Table>, message: string) => {
    setActionLoading(true);
    const { error } = await supabase.from('tables').update(updates).eq('id', tableId);
    setActionLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success(message);
    await loadTables();
  };

  const openEditModal = (table: Table) => {
    setEditTableData(table);
    setEditName(table.name);
    setEditSeats(table.seats.toString());
    setEditStatus(table.status);
    setEditModalOpen(true);
  };

  const confirmEditTable = async () => {
    if (!editTableData) return;

    const parsedSeats = Number(editSeats);
    if (!editName.trim() || !parsedSeats || parsedSeats < 1) {
      toast.error('Please enter a valid name and seating capacity.');
      return;
    }

    setActionLoading(true);
    const { error } = await supabase
      .from('tables')
      .update({ name: editName.trim(), seats: parsedSeats, status: editStatus })
      .eq('id', editTableData.id);
    setActionLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success('Table updated successfully.');
    setEditModalOpen(false);
    await loadTables();
  };

  const deleteTable = async () => {
    if (!deleteConfirmId) return;

    setActionLoading(true);
    const { error } = await supabase.from('tables').delete().eq('id', deleteConfirmId);
    setActionLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success('Table removed successfully.');
    setDeleteConfirmOpen(false);
    setDeleteConfirmId(null);
    await loadTables();
  };

  return (
    <section className='space-y-8'>
      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <div className='mb-6'>
          <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Table management</p>
          <h1 className='mt-3 text-4xl font-bold'>Manage Restaurant Tables</h1>
          <p className='mt-3 text-gray-600'>Keep table inventory and seating status up to date for smooth floor operations.</p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
          {[
            { label: 'Tables', value: summary.total },
            { label: 'Available', value: summary.available },
            { label: 'Reserved', value: summary.reserved },
            { label: 'Occupied', value: summary.occupied },
            { label: 'Maintenance', value: summary.maintenance },
          ].map((metric) => (
            <div key={metric.label} className='rounded-3xl border border-slate-200 bg-slate-50 p-5'>
              <p className='text-sm uppercase tracking-[0.3em] text-slate-500'>{metric.label}</p>
              <p className='mt-2 text-3xl font-semibold text-slate-900'>{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <div className='grid gap-8 lg:grid-cols-[1.2fr_0.8fr]'>
          <div>
            <h2 className='text-2xl font-semibold text-slate-950'>Table inventory</h2>
            <p className='mt-2 text-sm text-slate-500'>Review current dining tables and update seat counts or status.</p>
          </div>

          <form onSubmit={createTable} className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
            <p className='mb-4 text-sm uppercase tracking-[0.3em] text-orange-500'>Add new table</p>
            <label className='mb-4 block text-sm font-semibold text-slate-700'>Table name</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder='Table 1'
              className='mb-4 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500'
            />
            <label className='mb-4 block text-sm font-semibold text-slate-700'>Seats</label>
            <input
              type='number'
              min={1}
              value={seats}
              onChange={(event) => setSeats(event.target.value)}
              className='mb-4 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500'
            />
            <label className='mb-4 block text-sm font-semibold text-slate-700'>Status</label>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as Table['status'])}
              className='mb-6 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500'
            >
              {tableStatusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              type='submit'
              disabled={actionLoading}
              className='w-full rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:opacity-60'
            >
              {actionLoading ? 'Saving...' : 'Add table'}
            </button>
          </form>
        </div>
      </div>

      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <div className='mb-6 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2 className='text-2xl font-semibold text-slate-950'>Table roster</h2>
            <p className='mt-2 text-sm text-slate-500'>Tables are kept in sync with live reservation assignment and status updates.</p>
          </div>
        </div>

        {loading ? (
          <div className='rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center text-slate-700'>Loading table inventory...</div>
        ) : (
          <div className='space-y-4'>
            {tables.map((table) => (
              <div key={table.id} className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
                <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
                  <div>
                    <h3 className='text-xl font-semibold text-slate-900'>{table.name}</h3>
                    <p className='mt-1 text-sm text-slate-600'>{table.seats} seats</p>
                    <span className={`mt-2 inline-block rounded-full px-3 py-1 text-sm font-semibold ${statusColor[table.status]}`}>
                      {table.status}
                    </span>
                  </div>

                  <div className='grid gap-2 sm:grid-cols-3 lg:grid-cols-4'>
                    {tableStatusOptions.map((st) => (
                      <button
                        key={st}
                        type='button'
                        disabled={actionLoading || st === table.status}
                        onClick={() => updateTable(table.id, { status: st }, 'Table status updated.')}
                        className='rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-60'
                      >
                        {st}
                      </button>
                    ))}
                    <button
                      type='button'
                      disabled={actionLoading}
                      onClick={() => openEditModal(table)}
                      className='rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-blue-600 transition hover:border-blue-300 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60'
                    >
                      Edit
                    </button>
                    <button
                      type='button'
                      disabled={actionLoading}
                      onClick={() => {
                        setDeleteConfirmId(table.id);
                        setDeleteConfirmOpen(true);
                      }}
                      className='rounded-full border border-rose-300 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600 transition hover:border-rose-400 hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Table Modal */}
      {editModalOpen && editTableData && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
          <div className='w-full max-w-md rounded-2xl bg-white p-6 shadow-xl'>
            <h2 className='text-xl font-bold text-slate-900'>Edit Table</h2>

            <div className='mt-4 space-y-4'>
              <div>
                <label className='block text-sm font-semibold text-slate-700'>Table Name</label>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className='mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-slate-700'>Seats</label>
                <input
                  type='number'
                  min={1}
                  value={editSeats}
                  onChange={(e) => setEditSeats(e.target.value)}
                  className='mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-slate-700'>Status</label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value as Table['status'])}
                  className='mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500'
                >
                  {tableStatusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='mt-6 flex gap-3'>
              <button
                onClick={() => setEditModalOpen(false)}
                disabled={actionLoading}
                className='flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-60'
              >
                Cancel
              </button>
              <button
                onClick={confirmEditTable}
                disabled={actionLoading}
                className='flex-1 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60'
              >
                {actionLoading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmOpen && deleteConfirmId && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
          <div className='w-full max-w-md rounded-2xl bg-white p-6 shadow-xl'>
            <h2 className='text-xl font-bold text-rose-600'>Delete Table?</h2>
            <p className='mt-2 text-sm text-slate-600'>
              This will permanently remove the table from your inventory. Make sure no active reservations are using this table.
            </p>

            <div className='mt-6 flex gap-3'>
              <button
                onClick={() => setDeleteConfirmOpen(false)}
                disabled={actionLoading}
                className='flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-60'
              >
                Keep it
              </button>
              <button
                onClick={deleteTable}
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
