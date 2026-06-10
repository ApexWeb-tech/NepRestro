"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StaffForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('Staff');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch('/api/auth/create-staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, password, position }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to create staff account.');
      }

      setMessage('Staff account created successfully.');
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setPosition('Staff');

      // optionally, redirect to staff list after creation
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'An error occurred while creating the staff account.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label htmlFor='name' className='mb-2 block text-sm font-medium text-slate-700'>Full name</label>
        <input
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500'
          placeholder='Ramesh Thapa'
        />
      </div>

      <div>
        <label htmlFor='email' className='mb-2 block text-sm font-medium text-slate-700'>Email</label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500'
          placeholder='staff@example.com'
        />
      </div>

      <div>
        <label htmlFor='phone' className='mb-2 block text-sm font-medium text-slate-700'>Phone</label>
        <input
          id='phone'
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500'
          placeholder='+977 98XXXXXXXX'
        />
      </div>

      <div>
        <label htmlFor='position' className='mb-2 block text-sm font-medium text-slate-700'>Role</label>
        <select
          id='position'
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500'
        >
          <option>Staff</option>
          <option>Host</option>
          <option>Manager</option>
        </select>
      </div>

      <div>
        <label htmlFor='password' className='mb-2 block text-sm font-medium text-slate-700'>Temporary password</label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500'
          placeholder='Create a temporary password'
        />
      </div>

      {message && <div className='rounded-3xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-700'>{message}</div>}
      {error && <div className='rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700'>{error}</div>}

      <button
        type='submit'
        disabled={loading}
        className='w-full rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60'
      >
        {loading ? 'Creating staff...' : 'Create staff account'}
      </button>
    </form>
  );
}
