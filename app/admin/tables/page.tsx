import Link from 'next/link';

export default function AdminTablesPage() {
  return (
    <section className='rounded-3xl bg-white p-8 shadow-xl'>
      <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Table Management</p>
      <h1 className='mt-3 text-4xl font-bold'>Manage Dining Tables</h1>
      <p className='mt-4 text-gray-600'>Review table assignments and seating availability.</p>
      <Link href='/admin/tables/101' className='mt-8 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700'>View example table</Link>
    </section>
  );
}
