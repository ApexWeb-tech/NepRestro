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

  const deleteTable = async (tableId: string) => {
    const confirmed = window.confirm('Remove this table from the inventory?');
    if (!confirmed) return;
    setActionLoading(true);
    const { error } = await supabase.from('tables').delete().eq('id', tableId);
    setActionLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success('Table removed successfully.');
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
          <div className='grid gap-6 xl:grid-cols-3'>
            {tables.map((table) => (
              <TableCard
                key={table.id}
                table={table}
                onStatusChange={(tableId, nextStatus) => updateTable(tableId, { status: nextStatus }, 'Table status updated.')}
                onDelete={deleteTable}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
