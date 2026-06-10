"use client";

import { useState } from 'react';

export default function ReservationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [requests, setRequests] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, guests, date, time, requests }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to save reservation.');
      }

      const tableName = result.reservation?.table?.name;
      setMessage(
        tableName
          ? `Your reservation is confirmed for ${date} at ${time}. Table ${tableName} has been reserved.`
          : 'Your reservation was submitted successfully. We will confirm your table shortly.'
      );

      setName('');
      setEmail('');
      setPhone('');
      setGuests('2');
      setDate('');
      setTime('');
      setRequests('');
    } catch (err: any) {
      setError(err.message || 'An error occurred while submitting.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='grid gap-5 md:grid-cols-2'>
        <label className='block'>
          <span className='text-sm font-semibold text-slate-700'>Full Name</span>
          <input
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder='John Doe'
            required
            className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
          />
        </label>

        <label className='block'>
          <span className='text-sm font-semibold text-slate-700'>Email</span>
          <input
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='john@example.com'
            required
            className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
          />
        </label>
      </div>

      <div className='grid gap-5 md:grid-cols-2'>
        <label className='block'>
          <span className='text-sm font-semibold text-slate-700'>Phone</span>
          <input
            type='tel'
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder='+977 98XXXXXXX'
            className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
          />
        </label>

        <label className='block'>
          <span className='text-sm font-semibold text-slate-700'>Guests</span>
          <select
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
          >
            <option value='1'>1 Guest</option>
            <option value='2'>2 Guests</option>
            <option value='3'>3 Guests</option>
            <option value='4'>4 Guests</option>
            <option value='5'>5 Guests</option>
            <option value='6'>6+ Guests</option>
          </select>
        </label>
      </div>

      <div className='grid gap-5 md:grid-cols-2'>
        <label className='block'>
          <span className='text-sm font-semibold text-slate-700'>Date</span>
          <input
            type='date'
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
            className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
          />
        </label>

        <label className='block'>
          <span className='text-sm font-semibold text-slate-700'>Time</span>
          <input
            type='time'
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
            className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
          />
        </label>
      </div>

      <label className='block'>
        <span className='text-sm font-semibold text-slate-700'>Special Requests</span>
        <textarea
          rows={4}
          value={requests}
          onChange={(event) => setRequests(event.target.value)}
          placeholder='Let us know your preferences...'
          className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
        />
      </label>

      {message && <div className='rounded-3xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700'>{message}</div>}
      {error && <div className='rounded-3xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'>{error}</div>}

      <button
        type='submit'
        disabled={loading}
        className='w-full rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 disabled:opacity-60'
      >
        {loading ? 'Submitting...' : 'Confirm Reservation'}
      </button>
    </form>
  );
}
