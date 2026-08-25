import type { Metadata } from 'next';
import Link from 'next/link';
import { supabaseAdmin } from '../../../../lib/supabase/server';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const metadata: Metadata = {
  title: 'Reservation Details | Restro Admin',
};

export default async function ReservationDetailPage({ params }: PageProps) {
  const { id } = await params;

  const { data: reservation, error } = await supabaseAdmin
    .from('reservations')
    .select('*, table:tables(name,seats,status)')
    .eq('id', id)
    .single();

  if (error || !reservation) {
    return (
      <section className='rounded-3xl bg-white p-8 shadow-xl'>
        <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Reservation detail</p>
        <h1 className='mt-3 text-3xl font-bold'>Reservation not found</h1>
        <p className='mt-4 text-gray-600'>We could not locate a reservation with ID {id}.</p>
        <Link href='/admin/reservations' className='mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800'>Back to reservations</Link>
      </section>
    );
  }

  return (
    <section className='space-y-8'>
      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Reservation detail</p>
            <h1 className='mt-3 text-4xl font-bold'>Reservation for {reservation.name}</h1>
          </div>
          <Link href='/admin/reservations' className='inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800'>Back to bookings</Link>
        </div>

        <div className='mt-8 grid gap-6 lg:grid-cols-2'>
          <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
            <h2 className='text-lg font-semibold text-slate-900'>Guest details</h2>
            <p className='mt-4 text-sm text-slate-600'>Name: <span className='font-medium text-slate-900'>{reservation.name}</span></p>
            <p className='mt-2 text-sm text-slate-600'>Email: <span className='font-medium text-slate-900'>{reservation.email}</span></p>
            <p className='mt-2 text-sm text-slate-600'>Phone: <span className='font-medium text-slate-900'>{reservation.phone ?? 'Not provided'}</span></p>
            <p className='mt-2 text-sm text-slate-600'>Guests: <span className='font-medium text-slate-900'>{reservation.guests}</span></p>
          </div>

          <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
            <h2 className='text-lg font-semibold text-slate-900'>Booking details</h2>
            <p className='mt-4 text-sm text-slate-600'>Date: <span className='font-medium text-slate-900'>{new Date(reservation.date).toLocaleDateString()}</span></p>
            <p className='mt-2 text-sm text-slate-600'>Time: <span className='font-medium text-slate-900'>{reservation.time}</span></p>
            <p className='mt-2 text-sm text-slate-600'>Status: <span className='font-medium text-slate-900'>{reservation.status}</span></p>
            <p className='mt-2 text-sm text-slate-600'>Table: <span className='font-medium text-slate-900'>{reservation.table?.name ?? 'Not assigned'}</span></p>
          </div>
        </div>

        <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6'>
          <h2 className='text-lg font-semibold text-slate-900'>Special requests</h2>
          <p className='mt-4 text-sm leading-7 text-slate-700'>{reservation.requests || 'No special requests were provided.'}</p>
        </div>
      </div>
    </section>
  );
}
