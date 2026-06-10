"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, inviteCode }),
      });

      let payload;
      try {
        payload = await response.json();
      } catch {
        payload = { error: 'Server returned an invalid response.' };
      }

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to register');
      }

      setMessage('Account created successfully. Please sign in.');
      setEmail('');
      setPassword('');
      setInviteCode('');
      router.push('/auth/login');
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='min-h-screen bg-slate-50 py-20'>
      <section className='mx-auto w-full max-w-xl rounded-3xl bg-white p-10 shadow-xl text-black'>
        <h1 className='mb-4 text-3xl font-bold'>Register</h1>
        <p className='mb-8 text-gray-600'>Create a secure staff account using your invite code.</p>
        <form onSubmit={handleSubmit} className='space-y-5'>
          <label className='block'>
            <span className='text-sm font-medium text-slate-700'>Email</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500' type='email' placeholder='you@example.com' required />
          </label>
          <label className='block'>
            <span className='text-sm font-medium text-slate-700'>Password</span>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500' type='password' placeholder='Enter password' required />
          </label>
          <label className='block'>
            <span className='text-sm font-medium text-slate-700'>Invite Code</span>
            <input value={inviteCode} onChange={(e) => setInviteCode(e.target.value)} className='mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500' type='text' placeholder='Enter invite code' required />
          </label>
          {message && <p className='text-sm text-green-600'>{message}</p>}
          {error && <p className='text-sm text-red-600'>{error}</p>}
          <button disabled={loading} type='submit' className='w-full rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600'>
            {loading ? 'Creating...' : 'Create account'}
          </button>
        </form>
        <p className='mt-6 text-center text-sm text-slate-600'>Already have an account? <Link href='/auth/login' className='font-semibold text-orange-500'>Sign in</Link></p>
      </section>
    </main>
  );
}
