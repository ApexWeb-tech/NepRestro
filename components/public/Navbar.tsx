'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
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

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

        {/* Logo */}
        <Link
          href='/'
          aria-label='NepRestro — go to homepage'
          className='text-2xl font-extrabold tracking-tight text-orange-400 transition-opacity duration-300 hover:opacity-80'
        >
          RESTRO
        </Link>

        {/* Desktop Nav */}
        <nav aria-label='Main navigation' className='hidden items-center gap-10 md:flex'>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                }}
                className='text-sm font-medium transition-colors duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#111111] rounded'
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className='hidden items-center gap-4 md:flex'>
          <Link
            href='/reservations'
            style={{ backgroundColor: 'var(--color-primary)' }}
            className='rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#111111]'
          >
            Book Table
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type='button'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls='mobile-menu'
          onClick={() => setOpen(!open)}
          className='rounded p-2 text-2xl text-slate-300 transition-colors duration-300 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#111111] md:hidden'
        >
          {open ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          id='mobile-menu'
          role='navigation'
          aria-label='Mobile navigation'
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
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  style={{
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                  }}
                  className='rounded-2xl px-4 py-3 transition-colors duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500'
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href='/reservations'
              style={{ backgroundColor: 'var(--color-primary)' }}
              className='mt-3 rounded-2xl px-4 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-orange-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#111111]'
            >
              Book Table
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}