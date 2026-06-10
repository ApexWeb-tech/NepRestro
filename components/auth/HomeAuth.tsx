"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase/client';

export default function HomeAuth() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push('/admin/dashboard');
      } else {
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

        setMode('login');
        setMessage('Account created successfully. Please log in.');
        setInviteCode('');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mx-auto mt-8 w-full max-w-md rounded-2xl bg-white/90 p-6 shadow-lg backdrop-blur text-black'>
      <div className='mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <h3 className='text-lg font-semibold text-black'>{mode === 'login' ? 'Staff sign in' : 'Staff invite code registration'}</h3>
          <p className='text-sm text-slate-600'>Use this form only for staff dashboard access.</p>
        </div>
        <div className='flex gap-2'>
          <button
            type='button'
            className={`px-3 py-1 rounded-full text-sm ${mode === 'login' ? 'bg-orange-500 text-white' : 'bg-white'}`}
            onClick={() => {
              setMode('login');
              setError(null);
              setMessage(null);
            }}
          >
            Login
          </button>
          <button
            type='button'
            className={`px-3 py-1 rounded-full text-sm ${mode === 'register' ? 'bg-orange-500 text-white' : 'bg-white'}`}
            onClick={() => {
              setMode('register');
              setError(null);
              setMessage(null);
            }}
          >
            Register
          </button>
        </div>
      </div>

      <form onSubmit={submit} className='space-y-3'>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' required className='w-full rounded-lg border border-slate-200 px-3 py-2' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' required className='w-full rounded-lg border border-slate-200 px-3 py-2' />

        {mode === 'register' && (
          <input
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            type='text'
            placeholder='Invite code'
            required
            className='w-full rounded-lg border border-slate-200 px-3 py-2'
          />
        )}

        {message && <div className='text-sm text-green-600'>{message}</div>}
        {error && <div className='text-sm text-red-600'>{error}</div>}

        <div className='flex items-center justify-between gap-3'>
          <button disabled={loading} type='submit' className='flex-1 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white'>
            {loading ? 'Please wait...' : mode === 'login' ? 'Sign in' : 'Create account'}
          </button>
        </div>
      </form>
    </div>
  );
}
