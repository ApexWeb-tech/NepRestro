import Link from 'next/link';
import StaffForm from '../../../../components/staff/StaffForm';

export default function AdminStaffCreatePage() {
  return (
    <section className='rounded-3xl bg-white p-8 shadow-xl'>
      <div className='mb-8'>
        <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Add Staff</p>
        <h1 className='mt-3 text-4xl font-bold'>Create New Team Member</h1>
        <p className='mt-4 text-gray-600'>Fill out the staff form to add a new employee and create their dashboard login.</p>
      </div>
      <StaffForm />
      <Link href='/admin/staff' className='mt-8 inline-flex rounded-full bg-slate-100 px-5 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-200'>Back to staff list</Link>
    </section>
  );
}
