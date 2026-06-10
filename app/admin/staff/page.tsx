import Link from 'next/link';
import StaffTable from '../../../components/staff/StaffTable';
import { supabaseAdmin } from '../../../lib/supabase/server';

export default async function AdminStaffPage() {
  const { data, error } = await supabaseAdmin.auth.admin.listUsers();

  const staffUsers = (data?.users ?? [])
    .filter((user: any) => user?.user_metadata?.role === 'staff' && user?.id && user?.email)
    .map((user: any) => ({
      id: user.id,
      email: user.email,
      created_at: user.created_at,
      last_sign_in_at: user.last_sign_in_at,
      user_metadata: user.user_metadata,
    }));

  return (
    <section className='space-y-8'>
      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Staff Management</p>
        <h1 className='mt-3 text-4xl font-bold'>Team Members</h1>
        <p className='mt-4 text-gray-600'>Manage restaurant staff and create new team members.</p>
        <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm text-slate-600'>Showing {staffUsers.length} staff account{staffUsers.length === 1 ? '' : 's'}.</p>
            {error && <p className='mt-2 text-sm text-red-600'>{error.message}</p>}
          </div>
          <Link href='/admin/staff/create' className='inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700'>Add New Staff Member</Link>
        </div>
      </div>
      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <StaffTable staffUsers={staffUsers} />
      </div>
    </section>
  );
}
