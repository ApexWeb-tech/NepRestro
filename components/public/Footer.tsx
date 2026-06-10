import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-slate-950 text-slate-200'>
      <div className='mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3'>
        <div>
          <h2 className='mb-4 text-3xl font-bold text-orange-400'>RESTRO</h2>
          <p className='text-slate-400'>
            A modern Nepali restaurant focused on bold flavors, warm hospitality, and unforgettable dining moments.
          </p>
        </div>

        <div>
          <h3 className='mb-4 text-xl font-semibold text-white'>Explore</h3>
          <div className='flex flex-col gap-3 text-slate-400'>
            <Link href='/'>Home</Link>
            <Link href='/menu'>Menu</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>

        <div>
          <h3 className='mb-4 text-xl font-semibold text-white'>Contact</h3>
          <div className='space-y-2 text-slate-400'>
            <p>Kathmandu, Nepal</p>
            <p>+977 9800000000</p>
            <p>contact@restro.com</p>
          </div>
        </div>
      </div>

      <div className='border-t border-slate-800 py-6 text-center text-sm text-slate-500'>
        © 2026 Restro. All rights reserved.
      </div>
    </footer>
  );
}
