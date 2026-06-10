import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className='min-h-screen bg-slate-50 py-20'>
      <section className='mx-auto w-full max-w-xl rounded-3xl bg-white p-10 shadow-xl'>
        <h1 className='mb-4 text-3xl font-bold'>Log in</h1>
        <p className='mb-8 text-gray-600'>Access your Restro account to manage your bookings and profile.</p>
        <form className='space-y-5'>
          <label className='block'>
            <span className='text-sm font-medium text-slate-700'>Email</span>
            <input className='mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500' type='email' placeholder='you@example.com' />
          </label>
          <label className='block'>
            <span className='text-sm font-medium text-slate-700'>Password</span>
            <input className='mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500' type='password' placeholder='Enter password' />
          </label>
          <button type='submit' className='w-full rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600'>Sign in</button>
        </form>
        <p className='mt-6 text-center text-sm text-slate-600'>Forgot your password? <Link href='/auth/forgot-password' className='font-semibold text-orange-500'>Reset it</Link></p>
      </section>
    </main>
  );
}
