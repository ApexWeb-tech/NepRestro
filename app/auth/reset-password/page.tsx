import Link from 'next/link';

export default function ResetPasswordPage() {
  return (
    <main className='min-h-screen bg-slate-50 py-20'>
      <section className='mx-auto w-full max-w-xl rounded-3xl bg-white p-10 shadow-xl'>
        <h1 className='mb-4 text-3xl font-bold'>Reset Password</h1>
        <p className='mb-8 text-gray-600'>Choose a new password for your account.</p>
        <form className='space-y-5'>
          <label className='block'>
            <span className='text-sm font-medium text-slate-700'>New Password</span>
            <input className='mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500' type='password' placeholder='New password' />
          </label>
          <label className='block'>
            <span className='text-sm font-medium text-slate-700'>Confirm Password</span>
            <input className='mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500' type='password' placeholder='Confirm password' />
          </label>
          <button type='submit' className='w-full rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600'>Update password</button>
        </form>
        <p className='mt-6 text-center text-sm text-slate-600'>Back to <Link href='/auth/login' className='font-semibold text-orange-500'>sign in</Link></p>
      </section>
    </main>
  );
}
