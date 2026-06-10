import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className='bg-slate-50 text-slate-900'>
      <section className='relative min-h-[55vh] overflow-hidden'>
        <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop")] bg-cover bg-center' />
        <div className='absolute inset-0 bg-slate-950/75' />

        <div className='relative z-10 mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 text-center text-white'>
          <p className='mb-4 inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-orange-100'>Contact Us</p>
          <h1 className='text-5xl font-black leading-tight md:text-6xl'>Questions, feedback, or reservations? Let's connect.</h1>
          <p className='mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-200'>Our team is ready to help with menu inquiries, private events, and table reservations.</p>
        </div>
      </section>

      <section className='px-6 py-24'>
        <div className='mx-auto grid max-w-7xl gap-12 xl:grid-cols-[1.1fr_0.9fr]'>
          <div className='space-y-8 rounded-[2rem] bg-white p-10 shadow-xl'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.35em] text-orange-500'>Visit Us</p>
              <h2 className='mt-3 text-3xl font-bold text-slate-950'>We're here for every meal and every question.</h2>
            </div>

            <div className='grid gap-6 sm:grid-cols-2'>
              <div className='rounded-3xl border border-slate-200 p-6'>
                <p className='text-sm uppercase tracking-[0.35em] text-orange-500'>Address</p>
                <p className='mt-3 text-lg text-slate-700'>123 Restaurant Street<br />Kathmandu, Nepal</p>
              </div>
              <div className='rounded-3xl border border-slate-200 p-6'>
                <p className='text-sm uppercase tracking-[0.35em] text-orange-500'>Phone</p>
                <p className='mt-3 text-lg text-slate-700'>+977 9800000000</p>
              </div>
              <div className='rounded-3xl border border-slate-200 p-6'>
                <p className='text-sm uppercase tracking-[0.35em] text-orange-500'>Email</p>
                <p className='mt-3 text-lg text-slate-700'>contact@restro.com</p>
              </div>
              <div className='rounded-3xl border border-slate-200 p-6'>
                <p className='text-sm uppercase tracking-[0.35em] text-orange-500'>Hours</p>
                <p className='mt-3 text-lg text-slate-700'>Monday - Sunday<br />10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>

          <div className='rounded-[2rem] bg-white p-10 shadow-xl'>
            <h2 className='mb-8 text-3xl font-bold text-slate-950'>Send a Message</h2>
            <form className='space-y-6'>
              <div>
                <label htmlFor='name' className='mb-2 block text-sm font-medium text-slate-700'>Full Name</label>
                <input id='name' type='text' placeholder='Your name' className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500' />
              </div>
              <div>
                <label htmlFor='email' className='mb-2 block text-sm font-medium text-slate-700'>Email Address</label>
                <input id='email' type='email' placeholder='you@example.com' className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500' />
              </div>
              <div>
                <label htmlFor='message' className='mb-2 block text-sm font-medium text-slate-700'>Message</label>
                <textarea id='message' rows={6} placeholder='How can we help?' className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-orange-500' />
              </div>
              <button type='submit' className='inline-flex rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600'>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className='bg-slate-950 px-6 py-24 text-white'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-12 text-center'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300'>Find Us</p>
            <h2 className='text-4xl font-bold'>Visit Restro in Kathmandu</h2>
          </div>
          <div className='overflow-hidden rounded-[2rem] border border-white/10'>
            <iframe title='Restaurant location' className='h-[520px] w-full border-0' src='https://maps.google.com/maps?q=Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed' loading='lazy' />
          </div>
        </div>
      </section>

      <section className='px-6 py-24'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl font-bold text-slate-950'>Need help planning a visit?</h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600'>Reach out directly and our team will assist with menu recommendations, group bookings, and special requests.</p>
          <Link href='/reservations' className='mt-10 inline-flex rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600'>Book a Table</Link>
        </div>
      </section>
    </main>
  );
}
