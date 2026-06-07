export default function ReservationForm() {
  return (
    <form className='space-y-6'>
      <div className='grid gap-5 md:grid-cols-2'>
        <label className='block'>
          <span className='text-sm font-semibold text-slate-700'>Full Name</span>
          <input
            type='text'
            placeholder='John Doe'
            className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
          />
        </label>

        <label className='block'>
          <span className='text-sm font-semibold text-slate-700'>Email</span>
          <input
            type='email'
            placeholder='john@example.com'
            className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
          />
        </label>
      </div>

      <div className='grid gap-5 md:grid-cols-2'>
        <label className='block'>
          <span className='text-sm font-semibold text-slate-700'>Phone</span>
          <input
            type='tel'
            placeholder='+977 98XXXXXXX'
            className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
          />
        </label>

        <label className='block'>
          <span className='text-sm font-semibold text-slate-700'>Guests</span>
          <select className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5 Guests</option>
            <option>6+ Guests</option>
          </select>
        </label>
      </div>

      <div className='grid gap-5 md:grid-cols-2'>
        <label className='block'>
          <span className='text-sm font-semibold text-slate-700'>Date</span>
          <input
            type='date'
            className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
          />
        </label>

        <label className='block'>
          <span className='text-sm font-semibold text-slate-700'>Time</span>
          <input
            type='time'
            className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
          />
        </label>
      </div>

      <label className='block'>
        <span className='text-sm font-semibold text-slate-700'>Special Requests</span>
        <textarea
          rows={4}
          placeholder='Let us know your preferences...'
          className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
        />
      </label>

      <button
        type='submit'
        className='w-full rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600'
      >
        Confirm Reservation
      </button>
    </form>
  );
}
