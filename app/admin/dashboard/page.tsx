import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <section className='rounded-3xl bg-white p-8 shadow-xl'>
      <div className='mb-6'>
        <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Admin Dashboard</p>
        <h1 className='mt-3 text-4xl font-bold'>Welcome back, Admin</h1>
      </div>
      <p className='mb-8 text-gray-600'>Manage reservations, staff, tables, and site settings from this dashboard.</p>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {[
          { label: 'Reservations', href: '/admin/reservations' },
          { label: 'Staff', href: '/admin/staff' },
          { label: 'Tables', href: '/admin/tables' },
          { label: 'Settings', href: '/admin/settings' },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className='rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:border-orange-400 hover:bg-orange-50'
          >
            <span className='block text-lg font-semibold'>{card.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
