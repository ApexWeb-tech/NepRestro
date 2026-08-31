'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewport,
} from '@/lib/animations';

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
  { id: 1, icon: MapPin, value: 'Lakeside, Pokhara, Nepal', href: 'https://maps.google.com/?q=Lakeside,Pokhara,Nepal' },
  { id: 2, icon: Phone, value: '+977 9800000000', href: 'tel:+9779800000000' },
  { id: 3, icon: Mail, value: 'info@neprestro.com', href: 'mailto:info@neprestro.com' },
  { id: 4, icon: Clock3, value: '10:00 AM – 10:00 PM Daily', href: null },
];

const socialLinks = [
  { id: 1, icon: Share2, href: 'https://facebook.com', label: 'Visit our Facebook page' },
  { id: 2, icon: Camera, href: 'https://instagram.com', label: 'Visit our Instagram page' },
  { id: 3, icon: MessageCircle, href: 'https://twitter.com', label: 'Visit our Twitter page' },
  { id: 4, icon: PlayCircle, href: 'https://youtube.com', label: 'Visit our YouTube channel' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='relative overflow-hidden pt-20'
      style={{
        background: 'linear-gradient(180deg, var(--color-background) 0%, #080e1a 100%)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Decorative glows */}
      <div
        className='absolute -left-24 -top-24 h-64 w-64 rounded-full blur-3xl'
        style={{ background: 'rgba(249,115,22,0.07)' }}
      />
      <div
        className='absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl'
        style={{ background: 'rgba(245,158,11,0.05)' }}
      />

      <div className='relative z-10 mx-auto max-w-7xl px-6'>

        {/* ── Newsletter Strip ── */}
        <motion.div
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
          className='mb-16 rounded-2xl border p-6 sm:p-8'
          style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(245,158,11,0.05))',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
            <div className='text-center md:text-left'>
              <h3 className='heading-font text-xl font-bold text-white sm:text-2xl'>
                Stay Updated with NepRestro
              </h3>
              <p className='body-font mt-2 text-sm text-gray-400'>
                Subscribe for latest offers, new dishes, and special events.
              </p>
            </div>

            <div className='flex w-full max-w-sm flex-col gap-3 sm:flex-row'>
              <label htmlFor='footer-email' className='sr-only'>
                Email address for newsletter
              </label>
              <input
                id='footer-email'
                type='email'
                placeholder='Your email address'
                className='body-font flex-1 rounded-full border bg-transparent px-5 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                style={{ borderColor: 'var(--color-border)' }}
              />
              <button
                type='button'
                aria-label='Subscribe to newsletter'
                className='body-font rounded-full px-5 py-3 text-sm font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── Top Grid ── */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
          className='grid gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-4'
        >

          {/* Column 1: Brand */}
          <motion.div variants={staggerItem}>
            <Link
              href='/'
              aria-label='NepRestro — go to homepage'
              className='group inline-flex items-center gap-2'
            >
              <div
                className='flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'
                style={{ backgroundColor: 'rgba(249,115,22,0.15)' }}
              >
                <UtensilsCrossed size={18} style={{ color: 'var(--color-primary)' }} aria-hidden='true' />
              </div>
              <span className='heading-font text-xl font-extrabold tracking-tight text-white'>
                Nep<span style={{ color: 'var(--color-primary)' }}>Restro</span>
              </span>
            </Link>

            <p className='body-font mt-5 text-sm leading-7 text-gray-400'>
              Authentic Nepali cuisine crafted with fresh ingredients,
              traditional recipes, and warm hospitality — made with love
              from the heart of Nepal.
            </p>

            {/* Social Links */}
            <div className='mt-6 flex gap-3'>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                    className='group flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#111111]'
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <Icon
                      size={16}
                      className='text-gray-400 transition-colors duration-300 group-hover:text-white'
                      aria-hidden='true'
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={staggerItem}>
            <h3
              className='heading-font text-base font-bold uppercase tracking-wider'
              style={{ color: 'var(--color-heading)' }}
            >
              Quick Links
            </h3>
            <hr className='my-4' style={{ borderColor: 'var(--color-border)' }} />
            <ul className='space-y-3'>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='body-font flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 ease-out hover:translate-x-1 hover:text-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500 rounded'
                  >
                    <span
                      className='h-1 w-1 flex-shrink-0 rounded-full'
                      style={{ backgroundColor: 'var(--color-primary)' }}
                      aria-hidden='true'
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Our Menu */}
          <motion.div variants={staggerItem}>
            <h3
              className='heading-font text-base font-bold uppercase tracking-wider'
              style={{ color: 'var(--color-heading)' }}
            >
              Our Menu
            </h3>
            <hr className='my-4' style={{ borderColor: 'var(--color-border)' }} />
            <ul className='space-y-3'>
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='body-font flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 ease-out hover:translate-x-1 hover:text-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500 rounded'
                  >
                    <span
                      className='h-1 w-1 flex-shrink-0 rounded-full'
                      style={{ backgroundColor: 'var(--color-primary)' }}
                      aria-hidden='true'
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={staggerItem}>
            <h3
              className='heading-font text-base font-bold uppercase tracking-wider'
              style={{ color: 'var(--color-heading)' }}
            >
              Contact Us
            </h3>
            <hr className='my-4' style={{ borderColor: 'var(--color-border)' }} />
            <ul className='space-y-4'>
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className='flex items-start gap-3'>
                    <div
                      className='mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full'
                      style={{
                        backgroundColor: 'rgba(249,115,22,0.10)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Icon size={14} aria-hidden='true' />
                    </div>
                    <span className='body-font text-sm leading-6 text-gray-400'>
                      {item.value}
                    </span>
                  </div>
                );

                return (
                  <li key={item.id}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className='block rounded transition-opacity duration-300 hover:opacity-80 focus:outline-none focus:ring-1 focus:ring-orange-500'
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

        </motion.div>

        {/* ── Bottom Bar ── */}
        <motion.div
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
          className='flex flex-col items-center justify-between gap-4 border-t py-8 sm:flex-row'
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p className='body-font text-xs text-gray-500'>
            © {currentYear} NepRestro. All rights reserved. Made with ❤️ in Nepal.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6'>
            {/* Note: These pages don't exist yet — flagged for Step 9 content cleanup */}
            <span className='body-font text-xs text-gray-600'>
              Privacy Policy
            </span>
            <span className='body-font text-xs text-gray-600'>
              Terms of Service
            </span>

            <button
              type='button'
              aria-label='Scroll back to top of page'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='body-font flex items-center gap-1 rounded-full border px-4 py-2 text-xs font-semibold text-gray-400 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500 hover:text-orange-400 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#111111]'
              style={{ borderColor: 'var(--color-border)' }}
            >
              ↑ Back to Top
            </button>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}