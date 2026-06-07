'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        <Link href='/' className='text-2xl font-extrabold tracking-tight text-orange-500'>
          RESTRO
        </Link>

        <nav className='hidden items-center gap-8 md:flex'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='font-medium text-slate-700 transition hover:text-orange-500'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='hidden items-center gap-4 md:flex'>
          <Link
            href='/reservations'
            className='rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600'
          >
            Book Table
          </Link>
        </div>

        <button
          type='button'
          aria-label='Toggle menu'
          onClick={() => setOpen(!open)}
          className='text-3xl text-slate-700 md:hidden'
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className='border-t border-slate-200 bg-white px-6 py-4 md:hidden'>
          <div className='flex flex-col gap-2'>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className='rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-slate-100'
              >
                {link.label}
              </Link>
            ))}

            <Link
              href='/reservations'
              className='mt-3 rounded-2xl bg-orange-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-orange-600'
            >
              Book Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
