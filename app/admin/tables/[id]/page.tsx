import type { Metadata } from 'next';
import Link from 'next/link';
import { supabaseAdmin } from '../../../../lib/supabase/server';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const metadata: Metadata = {
  title: 'Table Details | Restro Admin',
};

export default async function TableDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [{ data: table, error: tableError }, { data: reservations, error: reservationError }] = await Promise.all([
    supabaseAdmin.from('tables').select('*').eq('id', id).single(),
    supabaseAdmin
      .from('reservations')
      .select('id,name,email,guests,date,time,status')
      .eq('table_id', id)
      .order('date', { ascending: true })
      .order('time', { ascending: true }),
  ]);

  if (tableError || !table) {
    return (
      <section className='rounded-3xl bg-white p-8 shadow-xl'>
        <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Table detail</p>
        <h1 className='mt-3 text-3xl font-bold'>Table not found</h1>
        <p className='mt-4 text-gray-600'>We could not locate a table with ID {id}.</p>
        <Link href='/admin/tables' className='mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800'>Back to tables</Link>
      </section>
    );
  }

  return (
    <section className='space-y-8'>
      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Table detail</p>
            <h1 className='mt-3 text-4xl font-bold'>{table.name}</h1>
          </div>
          <Link href='/admin/tables' className='inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800'>Back to table roster</Link>
        </div>

        <div className='mt-8 grid gap-6 lg:grid-cols-2'>
          <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
            <h2 className='text-lg font-semibold text-slate-900'>Table overview</h2>
            <p className='mt-4 text-sm text-slate-600'>Capacity: <span className='font-medium text-slate-900'>{table.seats}</span></p>
            <p className='mt-2 text-sm text-slate-600'>Status: <span className='font-medium text-slate-900'>{table.status}</span></p>
            <p className='mt-2 text-sm text-slate-600'>Created: <span className='font-medium text-slate-900'>{new Date(table.created_at).toLocaleDateString()}</span></p>
          </div>

          <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
            <h2 className='text-lg font-semibold text-slate-900'>Upcoming reservations</h2>
            {reservationError ? (
              <p className='mt-4 text-sm text-rose-600'>Unable to load reservations.</p>
            ) : reservations && reservations.length > 0 ? (
              <ul className='mt-4 space-y-4'>
                {reservations.map((reservation) => (
                  <li key={reservation.id} className='rounded-3xl bg-white p-4 shadow-sm'>
                    <p className='text-sm font-semibold text-slate-900'>{reservation.name}</p>
                    <p className='mt-1 text-sm text-slate-600'>{reservation.guests} guests · {new Date(reservation.date).toLocaleDateString()} at {reservation.time}</p>
                    <p className='mt-1 text-xs uppercase tracking-[0.2em] text-slate-500'>{reservation.status}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='mt-4 text-sm text-slate-600'>No reservations are currently assigned to this table.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
