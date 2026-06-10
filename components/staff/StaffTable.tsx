type StaffUser = {
  id: string;
  email: string;
  created_at?: string;
  last_sign_in_at?: string | null;
  user_metadata?: {
    name?: string;
    phone?: string;
    position?: string;
    role?: string;
  };
};

export default function StaffTable({ staffUsers }: { staffUsers: StaffUser[] }) {
  return (
    <div className='overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm'>
      <table className='min-w-full divide-y divide-slate-200'>
        <thead className='bg-slate-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-[0.15em] text-slate-500'>Name</th>
            <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-[0.15em] text-slate-500'>Email</th>
            <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-[0.15em] text-slate-500'>Role</th>
            <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-[0.15em] text-slate-500'>Position</th>
            <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-[0.15em] text-slate-500'>Phone</th>
            <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-[0.15em] text-slate-500'>Last sign-in</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-slate-200 bg-white'>
          {staffUsers.length === 0 ? (
            <tr>
              <td colSpan={6} className='px-6 py-10 text-center text-sm text-slate-500'>No staff accounts found.</td>
            </tr>
          ) : (
            staffUsers.map((user) => (
              <tr key={user.id} className='hover:bg-slate-50'>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-slate-900'>
                  {user.user_metadata?.name ?? '—'}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-slate-900'>{user.email}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-slate-900'>{user.user_metadata?.role ?? 'staff'}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-slate-900'>{user.user_metadata?.position ?? 'Staff'}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-slate-900'>{user.user_metadata?.phone ?? '—'}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-slate-900'>{user.last_sign_in_at ?? 'Never'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
