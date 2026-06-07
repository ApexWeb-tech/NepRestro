import Link from 'next/link';

export default function ReservationPage() {
  return (
    <main className='bg-slate-50 text-slate-900'>
      <section className='relative min-h-[55vh] overflow-hidden'>
        <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop")] bg-cover bg-center' />
        <div className='absolute inset-0 bg-slate-950/75' />

        <div className='relative z-10 mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 text-center text-white'>
          <p className='mb-4 inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-orange-100'>Reserve a Table</p>
          <h1 className='text-5xl font-black leading-tight md:text-6xl'>Secure your table for a delicious Nepali dining experience.</h1>
          <p className='mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-200'>Tell us your preferred date and time, and we’ll prepare a warm welcome for your group.</p>
        </div>
      </section>

      <section className='px-6 py-24'>
        <div className='mx-auto grid max-w-7xl gap-12 xl:grid-cols-[1.05fr_0.95fr]'>
          <div className='rounded-[2rem] bg-white p-10 shadow-xl'>
            <p className='mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500'>Plan Your Visit</p>
            <h2 className='mb-8 text-3xl font-bold text-slate-950'>Booking is easy and fast.</h2>
            <div className='grid gap-6 sm:grid-cols-2'>
              <div className='rounded-3xl border border-slate-200 p-6'>
                <p className='text-sm uppercase tracking-[0.35em] text-orange-500'>Opening Hours</p>
                <p className='mt-3 text-lg text-slate-700'>Monday - Sunday<br />10:00 AM - 10:00 PM</p>
              </div>
              <div className='rounded-3xl border border-slate-200 p-6'>
                <p className='text-sm uppercase tracking-[0.35em] text-orange-500'>Location</p>
                <p className='mt-3 text-lg text-slate-700'>123 Restaurant Street<br />Kathmandu, Nepal</p>
              </div>
              <div className='rounded-3xl border border-slate-200 p-6'>
                <p className='text-sm uppercase tracking-[0.35em] text-orange-500'>Phone</p>
                <p className='mt-3 text-lg text-slate-700'>+977 9800000000</p>
              </div>
              <div className='rounded-3xl border border-slate-200 p-6'>
                <p className='text-sm uppercase tracking-[0.35em] text-orange-500'>Email</p>
                <p className='mt-3 text-lg text-slate-700'>reservations@restro.com</p>
              </div>
            </div>
          </div>

          <div className='rounded-[2rem] bg-white p-10 shadow-xl'>
            <h2 className='mb-8 text-3xl font-bold text-slate-950'>Reserve Your Table</h2>
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='mb-2 block text-sm font-medium text-slate-700'>Full Name</label>
                <input id='name' type='text' placeholder='Your full name' className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500' />
              </div>
              <div>
                <label htmlFor='email' className='mb-2 block text-sm font-medium text-slate-700'>Email</label>
                <input id='email' type='email' placeholder='you@example.com' className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500' />
              </div>
              <div>
                <label htmlFor='phone' className='mb-2 block text-sm font-medium text-slate-700'>Phone</label>
                <input id='phone' type='tel' placeholder='+977 98XXXXXXXX' className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500' />
              </div>
              <div className='grid gap-6 md:grid-cols-2'>
                <div>
                  <label htmlFor='date' className='mb-2 block text-sm font-medium text-slate-700'>Date</label>
                  <input id='date' type='date' className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500' />
                </div>
                <div>
                  <label htmlFor='time' className='mb-2 block text-sm font-medium text-slate-700'>Time</label>
                  <input id='time' type='time' className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500' />
                </div>
              </div>
              <div>
                <label htmlFor='guests' className='mb-2 block text-sm font-medium text-slate-700'>Guests</label>
                <select id='guests' className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500'>
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5 People</option>
                  <option>6+ People</option>
                </select>
              </div>
              <button type='submit' className='inline-flex w-full justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600'>Book Now</button>
            </form>
          </div>
        </div>
      </section>

      <section className='bg-white px-6 py-24'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl font-bold text-slate-950'>Need help with a group booking?</h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600'>Reach out to our team directly for large groups, private events, and customized menus.</p>
          <Link href='/contact' className='mt-10 inline-flex rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800'>Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
