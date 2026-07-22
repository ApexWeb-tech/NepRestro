'use client';

import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  UtensilsCrossed,
  Share2,
  Camera,
  MessageCircle,
  PlayCircle,
} from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/menu', label: 'Our Menu' },
  { href: '/contact', label: 'Contact' },
  { href: '/reservations', label: 'Reservations' },
];

const menuLinks = [
  { href: '/menu', label: 'Momo' },
  { href: '/menu', label: 'Thakali Set' },
  { href: '/menu', label: 'Noodles' },
  { href: '/menu', label: 'Snacks' },
  { href: '/menu', label: 'Beverages' },
  { href: '/menu', label: 'Desserts' },
];

const contactDetails = [
  {
    id: 1,
    icon: MapPin,
    value: 'Lakeside, Pokhara, Nepal',
  },
  {
    id: 2,
    icon: Phone,
    value: '+977 9800000000',
  },
  {
    id: 3,
    icon: Mail,
    value: 'info@neprestro.com',
  },
  {
    id: 4,
    icon: Clock3,
    value: '10:00 AM – 10:00 PM Daily',
  },
];

const socialLinks = [
  {
    id: 1,
    icon: Share2,
    href: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    id: 2,
    icon: Camera,
    href: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    id: 3,
    icon: MessageCircle,
    href: 'https://twitter.com',
    label: 'Twitter',
  },
  {
    id: 4,
    icon: PlayCircle,
    href: 'https://youtube.com',
    label: 'YouTube',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='relative overflow-hidden pt-20'
      style={{
        background: 'linear-gradient(180deg, var(--color-background) 0%, #0a0f1e 100%)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Decorative glow — top left */}
      <div
        className='absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl'
        style={{ background: 'rgba(249,115,22,0.08)' }}
      />

      {/* Decorative glow — top right */}
      <div
        className='absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl'
        style={{ background: 'rgba(245,158,11,0.06)' }}
      />

      <div className='relative z-10 mx-auto max-w-7xl px-6'>

        {/* ── Newsletter Strip ── */}
        <div
          className='mb-16 rounded-3xl border p-8 md:p-10'
          style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.10), rgba(245,158,11,0.06))',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>

            <div className='text-center md:text-left'>
              <h3 className='heading-font text-2xl font-bold text-white'>
                Stay Updated with NepRestro
              </h3>
              <p className='body-font mt-3 text-gray-400'>
                Subscribe to receive our latest offers, new dishes, and special events.
              </p>
            </div>

            <div className='flex w-full max-w-md flex-col gap-3 sm:flex-row'>
              <input
                type='email'
                placeholder='Enter your email address'
                aria-label='Email address for newsletter'
                className='body-font flex-1 rounded-full border bg-transparent px-5 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                style={{ borderColor: 'var(--color-border)' }}
              />
              <button
                type='button'
                aria-label='Subscribe to newsletter'
                className='body-font rounded-full px-6 py-3 font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Subscribe
              </button>
            </div>

          </div>
        </div>

        {/* ── Top Grid ── */}
        <div className='grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4'>

          {/* Column 1: Brand */}
          <div>
            <Link
              href='/'
              className='heading-font inline-flex items-center gap-2 text-3xl font-extrabold tracking-tight'
              style={{ color: 'var(--color-primary)' }}
            >
              <UtensilsCrossed size={28} />
              RESTRO
            </Link>

            <p className='body-font mt-6 leading-8 text-gray-400'>
              Authentic Nepali cuisine crafted with fresh ingredients,
              traditional recipes, and warm hospitality — served with love
              from the heart of Nepal.
            </p>

            {/* Social Links */}
            <div className='mt-8 flex gap-4'>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Visit our ${social.label} page`}
                    className='group flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <Icon
                      size={18}
                      className='text-gray-400 transition-colors duration-300 group-hover:text-white'
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              className='heading-font text-xl font-bold'
              style={{ color: 'var(--color-heading)' }}
            >
              Quick Links
            </h3>

            <hr className='my-6' style={{ borderColor: 'var(--color-border)' }} />

            <ul className='space-y-4'>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='body-font flex items-center gap-2 text-gray-400 transition-all duration-300 ease-out hover:translate-x-1 hover:text-orange-400'
                  >
                    <span
                      className='h-1.5 w-1.5 flex-shrink-0 rounded-full'
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Menu */}
          <div>
            <h3
              className='heading-font text-xl font-bold'
              style={{ color: 'var(--color-heading)' }}
            >
              Our Menu
            </h3>

            <hr className='my-6' style={{ borderColor: 'var(--color-border)' }} />

            <ul className='space-y-4'>
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='body-font flex items-center gap-2 text-gray-400 transition-all duration-300 ease-out hover:translate-x-1 hover:text-orange-400'
                  >
                    <span
                      className='h-1.5 w-1.5 flex-shrink-0 rounded-full'
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3
              className='heading-font text-xl font-bold'
              style={{ color: 'var(--color-heading)' }}
            >
              Contact Us
            </h3>

            <hr className='my-6' style={{ borderColor: 'var(--color-border)' }} />

            <ul className='space-y-5'>
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className='flex items-start gap-3'>
                    <div
                      className='mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full'
                      style={{
                        backgroundColor: 'rgba(249,115,22,0.12)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <span className='body-font text-sm leading-6 text-gray-400'>
                      {item.value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div
          className='flex flex-col items-center justify-between gap-6 border-t py-8 sm:flex-row'
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p className='body-font text-sm text-gray-500'>
            © {currentYear} NepRestro. All rights reserved. Made with ❤️ in Nepal.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-6'>
            <Link
              href='/contact'
              className='body-font text-sm text-gray-500 transition-colors duration-300 hover:text-orange-400'
            >
              Privacy Policy
            </Link>
            <Link
              href='/contact'
              className='body-font text-sm text-gray-500 transition-colors duration-300 hover:text-orange-400'
            >
              Terms of Service
            </Link>
            <Link
              href='/contact'
              className='body-font text-sm text-gray-500 transition-colors duration-300 hover:text-orange-400'
            >
              Cookie Policy
            </Link>

            {/* Back to Top */}
            <button
              type='button'
              aria-label='Back to top'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='body-font flex items-center gap-1 rounded-full border px-4 py-2 text-sm font-semibold text-gray-400 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
              style={{ borderColor: 'var(--color-border)' }}
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}