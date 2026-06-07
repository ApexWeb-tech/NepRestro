import Link from 'next/link';

export default function AdminReservationsPage() {
  return (
    <section className='rounded-3xl bg-white p-8 shadow-xl'>
      <div className='mb-6'>
        <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Reservations</p>
        <h1 className='mt-3 text-4xl font-bold'>Manage Bookings</h1>
      </div>
      <p className='mb-8 text-gray-600'>View current reservations and assign tables to guests.</p>
      <div className='space-y-4'>
        <Link href='/admin/reservations/123' className='inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700'>View example reservation</Link>
      </div>
    </section>
  );
}
