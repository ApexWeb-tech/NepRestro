import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Restro Admin',
  description: 'Admin dashboard for Restro Demo',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900'>
      <div className='mx-auto min-h-screen max-w-7xl px-6 py-10'>
        <header className='mb-10 rounded-3xl bg-white p-6 shadow-sm'>
          <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Admin Panel</p>
              <h1 className='text-3xl font-semibold'>Restro Dashboard</h1>
            </div>
            <nav className='flex flex-wrap gap-3'>
              <Link href='/admin/dashboard' className='rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white'>Dashboard</Link>
              <Link href='/admin/reservations' className='rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800'>Reservations</Link>
              <Link href='/admin/staff' className='rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800'>Staff</Link>
              <Link href='/admin/tables' className='rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800'>Tables</Link>
              <Link href='/admin/settings' className='rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800'>Settings</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
