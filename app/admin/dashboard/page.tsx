import Link from 'next/link';
import AdminDashboard from '../../../components/dashboard/AdminDashboard';

export default function AdminDashboardPage() {
  return (
    <div className='space-y-8'>
      <AdminDashboard />

      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <h2 className='mb-6 text-2xl font-semibold text-slate-900'>Quick Access</h2>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
          {[
            { label: 'Reservations', href: '/admin/reservations', description: 'Manage bookings' },
            { label: 'Staff', href: '/admin/staff', description: 'Manage team' },
            { label: 'Tables', href: '/admin/tables', description: 'Manage inventory' },
            { label: 'Audit Logs', href: '/admin/logs', description: 'Track changes' },
            { label: 'Settings', href: '/admin/settings', description: 'Configure app' },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className='rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-orange-400 hover:bg-orange-50'
            >
              <span className='block text-lg font-semibold text-slate-900'>{card.label}</span>
              <span className='block text-sm text-slate-600'>{card.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
