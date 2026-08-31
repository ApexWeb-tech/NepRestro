'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`body-font sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#111111]/98 shadow-lg shadow-black/20 backdrop-blur-md'
          : 'border-b border-white/5 bg-[#111111]/95 backdrop-blur-sm'
      }`}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>

        {/* Logo */}
        <Link
          href='/'
          aria-label='NepRestro — go to homepage'
          className='group flex items-center gap-2 transition-opacity duration-300 hover:opacity-90'
        >
          <div
            className='flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'
            style={{ backgroundColor: 'rgba(249,115,22,0.15)' }}
          >
            <UtensilsCrossed
              size={18}
              style={{ color: 'var(--color-primary)' }}
              aria-hidden='true'
            />
          </div>
          <span className='heading-font text-xl font-extrabold tracking-tight text-white'>
            Nep<span style={{ color: 'var(--color-primary)' }}>Restro</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label='Main navigation' className='hidden items-center gap-8 md:flex'>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className='body-font relative text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#111111] rounded'
                style={{
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                }}
              >
                {link.label}
                {/* Active indicator */}
                {isActive && (
                  <motion.span
                    layoutId='nav-active'
                    className='absolute -bottom-1 left-0 right-0 h-0.5 rounded-full'
                    style={{ backgroundColor: 'var(--color-primary)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className='hidden items-center md:flex'>
          <Link
            href='/reservations'
            aria-label='Reserve a table at NepRestro'
            style={{ backgroundColor: 'var(--color-primary)' }}
            className='body-font rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#111111]'
          >
            Reserve Table
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type='button'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls='mobile-menu'
          onClick={() => setOpen(!open)}
          className='flex h-11 w-11 items-center justify-center rounded-xl text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#111111] md:hidden'
        >
          <span className='text-xl' aria-hidden='true'>
            {open ? '✕' : '☰'}
          </span>
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          id='mobile-menu'
          role='navigation'
          aria-label='Mobile navigation'
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className='border-t border-white/5 bg-[#111111] px-6 pb-6 pt-4 md:hidden'
        >
          <div className='flex flex-col gap-1'>
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className='body-font flex min-h-[48px] items-center rounded-xl px-4 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500'
                  style={{
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                    backgroundColor: isActive ? 'rgba(249,115,22,0.08)' : 'transparent',
                  }}
                >
                  {isActive && (
                    <span
                      className='mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full'
                      style={{ backgroundColor: 'var(--color-primary)' }}
                      aria-hidden='true'
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}

            <Link
              href='/reservations'
              aria-label='Reserve a table at NepRestro'
              style={{ backgroundColor: 'var(--color-primary)' }}
              className='body-font mt-3 flex min-h-[48px] items-center justify-center rounded-xl px-4 text-base font-semibold text-white transition-all duration-300 ease-out hover:bg-orange-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#111111]'
            >
              Reserve Table
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}