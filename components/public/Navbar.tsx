'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/contact', label: 'Contact us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`body-font sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-[#111111]/98 shadow-lg shadow-black/20 backdrop-blur-md border-white/10'
          : 'bg-[#111111]/95 backdrop-blur-sm border-white/5'
      }`}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-5'>
        <Link href='/' className='text-2xl font-extrabold tracking-tight text-orange-400'>
          RESTRO
        </Link>

        <nav className='hidden items-center gap-10 md:flex'>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                }}
                className='text-sm font-medium transition-colors duration-300 hover:text-orange-500'
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className='hidden items-center gap-4 md:flex'>
          <Link
            href='/reservations'
            style={{ backgroundColor: 'var(--color-primary)' }}
            className='rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:bg-orange-600'
          >
            Book Table
          </Link>
        </div>

        <button
          type='button'
          aria-label='Toggle menu'
          onClick={() => setOpen(!open)}
          className='text-2xl text-slate-300 md:hidden'
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className='border-t border-white/5 bg-[#111111] px-6 py-4 md:hidden'
        >
          <div className='flex flex-col gap-2'>
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                  }}
                  className='rounded-2xl px-4 py-3 transition-colors duration-300 hover:bg-white/5'
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href='/reservations'
              style={{ backgroundColor: 'var(--color-primary)' }}
              className='mt-3 rounded-2xl px-4 py-3 text-center font-semibold text-white transition hover:bg-orange-600'
            >
              Book Table
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}