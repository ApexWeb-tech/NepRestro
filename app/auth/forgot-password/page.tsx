import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <main className='min-h-screen bg-slate-50 py-20'>
      <section className='mx-auto w-full max-w-xl rounded-3xl bg-white p-10 shadow-xl'>
        <h1 className='mb-4 text-3xl font-bold'>Forgot Password</h1>
        <p className='mb-8 text-gray-600'>Enter your email and we'll send you a reset link.</p>
        <form className='space-y-5'>
          <label className='block'>
            <span className='text-sm font-medium text-slate-700'>Email</span>
            <input className='mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500' type='email' placeholder='you@example.com' />
          </label>
          <button type='submit' className='w-full rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600'>Send reset link</button>
        </form>
        <p className='mt-6 text-center text-sm text-slate-600'>Remembered your password? <Link href='/auth/login' className='font-semibold text-orange-500'>Sign in</Link></p>
      </section>
    </main>
  );
}
