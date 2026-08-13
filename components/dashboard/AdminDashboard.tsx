"use client";

import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '../../lib/supabase/client';
import type { Reservation } from '../../types/reservation';
import type { Table } from '../../types/table';

interface DashboardStats {
  totalReservations: number;
  totalTables: number;
  occupancyRate: number;
  revenue: number;
  reservationsByStatus: Record<string, number>;
  tablesByStatus: Record<string, number>;
  upcomingReservations: Reservation[];
  recentReservations: Reservation[];
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function formatDate(dateValue: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(dateValue));
}

function formatTime(value: string) {
  return value ? new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' }).format(new Date(`1970-01-01T${value}`)) : '';
}

const statusColors: Record<string, string> = {
  pending: 'bg-amber-100 text-amber-800',
  confirmed: 'bg-emerald-100 text-emerald-800',
  seated: 'bg-slate-100 text-slate-900',
  completed: 'bg-sky-100 text-sky-800',
  cancelled: 'bg-rose-100 text-rose-800',
  available: 'bg-emerald-100 text-emerald-800',
  reserved: 'bg-amber-100 text-amber-800',
  occupied: 'bg-slate-100 text-slate-900',
  maintenance: 'bg-rose-100 text-rose-700',
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalReservations: 0,
    totalTables: 0,
    occupancyRate: 0,
    revenue: 0,
    reservationsByStatus: {},
    tablesByStatus: {},
    upcomingReservations: [],
    recentReservations: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true);

      const [reservationsResult, tablesResult] = await Promise.all([
        supabase.from('reservations').select('*').order('date', { ascending: true }),
        supabase.from('tables').select('*'),
      ]);

      if (reservationsResult.error || tablesResult.error) {
        toast.error('Failed to load dashboard data');
        setLoading(false);
        return;
      }

      const reservations = (reservationsResult.data ?? []) as Reservation[];
      const tables = (tablesResult.data ?? []) as Table[];

      // Calculate stats
      const reservationsByStatus = {
        pending: reservations.filter((r) => r.status === 'pending').length,
        confirmed: reservations.filter((r) => r.status === 'confirmed').length,
        seated: reservations.filter((r) => r.status === 'seated').length,
        completed: reservations.filter((r) => r.status === 'completed').length,
        cancelled: reservations.filter((r) => r.status === 'cancelled').length,
      };

      const tablesByStatus = {
        available: tables.filter((t) => t.status === 'available').length,
        reserved: tables.filter((t) => t.status === 'reserved').length,
        occupied: tables.filter((t) => t.status === 'occupied').length,
        maintenance: tables.filter((t) => t.status === 'maintenance').length,
      };

      const occupiedTables = tablesByStatus.occupied + tablesByStatus.reserved;
      const occupancyRate = tables.length > 0 ? Math.round((occupiedTables / tables.length) * 100) : 0;

      // Estimate revenue (assuming $50 per completed reservation)
      const completedReservations = reservations.filter((r) => r.status === 'completed').length;
      const revenue = completedReservations * 50;

      // Get upcoming and recent reservations
      const now = new Date();
      const upcoming = reservations
        .filter((r) => r.status !== 'cancelled' && new Date(`${r.date}T${r.time}`) > now)
        .slice(0, 5);

      const recent = reservations.filter((r) => r.status === 'completed').slice(-5).reverse();

      setStats({
        totalReservations: reservations.length,
        totalTables: tables.length,
        occupancyRate,
        revenue,
        reservationsByStatus,
        tablesByStatus,
        upcomingReservations: upcoming,
        recentReservations: recent,
      });

      setLoading(false);
    };

    loadDashboardData();

    // Subscribe to real-time updates
    const reservationChannel = supabase
      .channel('dashboard-reservations')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'reservations' }, () => loadDashboardData())
      .subscribe();

    const tableChannel = supabase
      .channel('dashboard-tables')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tables' }, () => loadDashboardData())
      .subscribe();

    return () => {
      supabase.removeChannel(reservationChannel);
      supabase.removeChannel(tableChannel);
    };
  }, []);

  if (loading) {
    return (
      <section className='space-y-8'>
        <div className='rounded-3xl bg-white p-8 shadow-xl text-center text-slate-600'>Loading dashboard...</div>
      </section>
    );
  }

  return (
    <section className='space-y-8'>
      {/* Header */}
      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Dashboard</p>
        <h1 className='mt-3 text-4xl font-bold'>Restaurant Overview</h1>
        <p className='mt-3 text-gray-600'>Real-time insights on reservations, table occupancy, and revenue.</p>
      </div>

      {/* Key Metrics */}
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
          <p className='text-sm uppercase tracking-[0.3em] text-slate-500'>Total Reservations</p>
          <p className='mt-3 text-4xl font-bold text-slate-900'>{stats.totalReservations}</p>
        </div>
        <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
          <p className='text-sm uppercase tracking-[0.3em] text-slate-500'>Tables</p>
          <p className='mt-3 text-4xl font-bold text-slate-900'>{stats.totalTables}</p>
        </div>
        <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
          <p className='text-sm uppercase tracking-[0.3em] text-slate-500'>Occupancy Rate</p>
          <p className='mt-3 text-4xl font-bold text-slate-900'>{stats.occupancyRate}%</p>
          <div className='mt-4 h-2 w-full rounded-full bg-slate-200'>
            <div className='h-full rounded-full bg-orange-500' style={{ width: `${stats.occupancyRate}%` }} />
          </div>
        </div>
        <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
          <p className='text-sm uppercase tracking-[0.3em] text-slate-500'>Estimated Revenue</p>
          <p className='mt-3 text-4xl font-bold text-slate-900'>{formatCurrency(stats.revenue)}</p>
        </div>
      </div>

      {/* Status Breakdown */}
      <div className='grid gap-8 lg:grid-cols-2'>
        <div className='rounded-3xl bg-white p-8 shadow-xl'>
          <h2 className='text-2xl font-semibold text-slate-900'>Reservation Status</h2>
          <div className='mt-6 space-y-4'>
            {Object.entries(stats.reservationsByStatus).map(([status, count]) => (
              <div key={status} className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${statusColors[status]}`}>
                    {status}
                  </span>
                  <span className='text-sm text-slate-600'>{count} bookings</span>
                </div>
                <span className='text-lg font-bold text-slate-900'>
                  {stats.totalReservations > 0 ? Math.round((count / stats.totalReservations) * 100) : 0}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='rounded-3xl bg-white p-8 shadow-xl'>
          <h2 className='text-2xl font-semibold text-slate-900'>Table Status</h2>
          <div className='mt-6 space-y-4'>
            {Object.entries(stats.tablesByStatus).map(([status, count]) => (
              <div key={status} className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${statusColors[status]}`}>
                    {status}
                  </span>
                  <span className='text-sm text-slate-600'>{count} tables</span>
                </div>
                <span className='text-lg font-bold text-slate-900'>
                  {stats.totalTables > 0 ? Math.round((count / stats.totalTables) * 100) : 0}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming and Recent Reservations */}
      <div className='grid gap-8 lg:grid-cols-2'>
        <div className='rounded-3xl bg-white p-8 shadow-xl'>
          <h2 className='mb-6 text-2xl font-semibold text-slate-900'>Upcoming Reservations</h2>
          {stats.upcomingReservations.length === 0 ? (
            <p className='text-sm text-slate-600'>No upcoming reservations.</p>
          ) : (
            <div className='space-y-4'>
              {stats.upcomingReservations.map((reservation) => (
                <div key={reservation.id} className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <h3 className='font-semibold text-slate-900'>{reservation.name}</h3>
                      <p className='mt-1 text-sm text-slate-600'>
                        {formatDate(reservation.date)} at {formatTime(reservation.time)}
                      </p>
                      <p className='mt-1 text-sm text-slate-600'>{reservation.guests} guests</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[reservation.status]}`}>
                      {reservation.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='rounded-3xl bg-white p-8 shadow-xl'>
          <h2 className='mb-6 text-2xl font-semibold text-slate-900'>Recent Completed Dinners</h2>
          {stats.recentReservations.length === 0 ? (
            <p className='text-sm text-slate-600'>No completed reservations yet.</p>
          ) : (
            <div className='space-y-4'>
              {stats.recentReservations.map((reservation) => (
                <div key={reservation.id} className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <h3 className='font-semibold text-slate-900'>{reservation.name}</h3>
                      <p className='mt-1 text-sm text-slate-600'>
                        {formatDate(reservation.date)} at {formatTime(reservation.time)}
                      </p>
                      <p className='mt-1 text-sm text-slate-600'>{reservation.guests} guests</p>
                    </div>
                    <span className='rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800'>Completed</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
