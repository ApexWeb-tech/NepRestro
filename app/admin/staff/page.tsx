import Link from 'next/link';

export default function AdminStaffPage() {
  return (
    <section className='rounded-3xl bg-white p-8 shadow-xl'>
      <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Staff Management</p>
      <h1 className='mt-3 text-4xl font-bold'>Team Members</h1>
      <p className='mt-4 text-gray-600'>Manage restaurant staff and create new team members.</p>
      <Link href='/admin/staff/create' className='mt-8 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700'>Add New Staff Member</Link>
    </section>
  );
}
