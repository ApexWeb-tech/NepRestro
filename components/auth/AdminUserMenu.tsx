"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase/client';

export default function AdminUserMenu() {
  const router = useRouter();
  const [user, setUser] = useState<{ email?: string | null; user_metadata?: { name?: string } } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        setError(error.message);
      } else if (data.user) {
        setUser(data.user);
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.push('/auth/login');
  };

  if (loading) {
    return <div className='rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600'>Loading...</div>;
  }

  return (
    <div className='flex flex-col gap-3 rounded-full bg-slate-100 px-4 py-3 text-sm text-slate-800 sm:flex-row sm:items-center'>
      <div>
        <div className='font-semibold text-slate-900'>{user?.user_metadata?.name ?? user?.email ?? 'Staff user'}</div>
        <div className='text-xs text-slate-600'>{user?.email ?? 'No email available'}</div>
      </div>
      <button
        type='button'
        onClick={handleLogout}
        className='rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200'
      >
        Logout
      </button>
      {error && <div className='text-xs text-red-600'>{error}</div>}
    </div>
  );
}
