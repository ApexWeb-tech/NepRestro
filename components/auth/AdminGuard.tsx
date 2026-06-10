"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase/client';

export default function AdminGuard({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function check() {
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;

      const user = data?.session?.user;
      if (!user || user.user_metadata?.role !== 'staff') {
        router.replace('/auth/login');
        return;
      }

      setChecking(false);
    }

    check();

    return () => {
      mounted = false;
    };
  }, [router]);

  if (checking) return <div className='min-h-screen flex items-center justify-center'>Checking authentication...</div>;

  return <>{children}</>;
}
