'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  UtensilsCrossed,
  Clock3,
  Phone,
  Info,
  Users,
} from 'lucide-react';
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  viewport,
} from '@/lib/animations';

const infoCards = [
  {
    id: 1,
    icon: Clock3,
    title: 'Opening Hours',
    content: (
      <p className='body-font mt-3 leading-7 text-gray-400'>
        Monday – Sunday<br />
        10:00 AM – 10:00 PM
      </p>
    ),
  },
  {
    id: 2,
    icon: Phone,
    title: 'Need Assistance?',
    content: (
      <div className='mt-3 space-y-1'>
        <p className='body-font text-gray-400'>+977 9800000000</p>
        <p className='body-font text-gray-400'>info@neprestro.com</p>
      </div>
    ),
  },
  {
    id: 3,
    icon: Info,
    title: 'Reservation Guidelines',
    content: (
      <ul className='body-font mt-3 space-y-2 text-gray-400'>
        <li className='flex items-start gap-2'>
          <span style={{ color: 'var(--color-primary)' }}>•</span>
          Please arrive 10 minutes early.
        </li>
        <li className='flex items-start gap-2'>
          <span style={{ color: 'var(--color-primary)' }}>•</span>
          Reservations are held for 15 minutes.
        </li>
        <li className='flex items-start gap-2'>
          <span style={{ color: 'var(--color-primary)' }}>•</span>
          Special requests are accommodated when possible.
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    icon: Users,
    title: 'Group Dining',
    content: (
      <div className='body-font mt-3 space-y-1 text-gray-400'>
        <p>Suitable for:</p>
        <ul className='mt-2 space-y-1'>
          <li className='flex items-start gap-2'>
            <span style={{ color: 'var(--color-primary)' }}>•</span>
            Couples
          </li>
          <li className='flex items-start gap-2'>
            <span style={{ color: 'var(--color-primary)' }}>•</span>
            Families
          </li>
          <li className='flex items-start gap-2'>
            <span style={{ color: 'var(--color-primary)' }}>•</span>
            Groups up to 20 guests
          </li>
        </ul>
        <p className='mt-3 text-sm text-gray-500'>
          For larger events, please contact us directly.
        </p>
      </div>
    ),
  },
];

export default function ReservationPage() {
  return (
    <main className='bg-[#111111] text-white'>

      {/* ── Step 1: Premium Hero ── */}
      <section className='relative flex min-h-[60vh] items-center justify-center overflow-hidden'>

        <Image
          src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop'
          alt='NepRestro Restaurant Dining Area'
          fill
          className='object-cover'
          priority
        />

        <div className='absolute inset-0 bg-black/65' />

        <div
          className='absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl'
          style={{ background: 'rgba(249,115,22,0.15)' }}
        />
        <div
          className='absolute right-0 top-0 h-64 w-64 rounded-full blur-3xl'
          style={{ background: 'rgba(245,158,11,0.10)' }}
        />

        <motion.div
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
          className='relative z-10 mx-auto max-w-4xl px-6 text-center'
        >
          <motion.div
            variants={fadeInDown}
            className='mb-6 flex items-center justify-center gap-3'
          >
            <div className='h-px w-12 bg-orange-400/60' />
            <UtensilsCrossed size={20} style={{ color: 'var(--color-primary)' }} />
            <div className='h-px w-12 bg-orange-400/60' />
          </motion.div>

          <motion.span
            variants={fadeInDown}
            className='body-font inline-block rounded-full px-5 py-2 text-sm font-semibold'
            style={{
              backgroundColor: 'rgba(249,115,22,0.15)',
              color: 'var(--color-secondary)',
            }}
          >
            Table Reservations
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className='heading-font mt-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl'
          >
            Reserve Your Table
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className='body-font mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300'
          >
            Experience authentic Nepali cuisine in a warm, elegant atmosphere.
            Reserve your table today and let us make your dining experience
            unforgettable.
          </motion.p>

          <motion.div variants={fadeInUp} className='mt-10'>
            <a
              href='#reservation-form'
              className='body-font inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <CalendarDays size={20} />
              Book Your Table
            </a>
          </motion.div>
        </motion.div>

        <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111111] to-transparent' />
      </section>

      {/* ── Steps 2 & 3: Form + Info Cards ── */}
      <section id='reservation-form' className='py-24'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid items-start gap-12 lg:grid-cols-2'>

            {/* ── Left: Premium Form Card ── */}
            <motion.div
              variants={fadeInLeft}
              initial='hidden'
              whileInView='visible'
              viewport={viewport}
              className='rounded-3xl border p-8 shadow-xl md:p-10'
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              {/* Icon + Heading */}
              <div className='mb-6 flex items-center gap-4'>
                <div
                  className='flex h-14 w-14 items-center justify-center rounded-full'
                  style={{ backgroundColor: 'rgba(249,115,22,0.12)' }}
                >
                  <CalendarDays size={28} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h2
                    className='heading-font text-3xl font-bold'
                    style={{ color: 'var(--color-heading)' }}
                  >
                    Reserve a Table
                  </h2>
                  <p className='body-font mt-1 text-sm text-gray-400'>
                    Fill in the details below and we'll prepare the perfect
                    dining experience for you.
                  </p>
                </div>
              </div>

              <hr className='mb-8' style={{ borderColor: 'var(--color-border)' }} />

              {/* Form Fields */}
              <div className='space-y-6'>

                {/* Row 1: Name & Email */}
                <div className='grid gap-6 md:grid-cols-2'>
                  <div>
                    <label className='body-font mb-2 block text-sm font-medium text-gray-300'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      placeholder='John Doe'
                      aria-label='Full Name'
                      className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)' }}
                    />
                  </div>
                  <div>
                    <label className='body-font mb-2 block text-sm font-medium text-gray-300'>
                      Email
                    </label>
                    <input
                      type='email'
                      placeholder='john@example.com'
                      aria-label='Email Address'
                      className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)' }}
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Guests */}
                <div className='grid gap-6 md:grid-cols-2'>
                  <div>
                    <label className='body-font mb-2 block text-sm font-medium text-gray-300'>
                      Phone
                    </label>
                    <input
                      type='tel'
                      placeholder='+977 98XXXXXXXX'
                      aria-label='Phone Number'
                      className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)' }}
                    />
                  </div>
                  <div>
                    <label className='body-font mb-2 block text-sm font-medium text-gray-300'>
                      Guests
                    </label>
                    <select
                      aria-label='Number of Guests'
                      className='body-font w-full rounded-xl border bg-[#1e293b] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)' }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Date & Time */}
                <div className='grid gap-6 md:grid-cols-2'>
                  <div>
                    <label className='body-font mb-2 block text-sm font-medium text-gray-300'>
                      Date
                    </label>
                    <input
                      type='text'
                      placeholder='DD/MM/YYYY'
                      aria-label='Reservation Date'
                      onFocus={(e) => { e.target.type = 'date'; }}
                      onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                      className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)' }}
                    />
                  </div>
                  <div>
                    <label className='body-font mb-2 block text-sm font-medium text-gray-300'>
                      Time
                    </label>
                    <input
                      type='text'
                      placeholder='HH:MM'
                      aria-label='Reservation Time'
                      onFocus={(e) => { e.target.type = 'time'; }}
                      onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                      className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)' }}
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className='body-font mb-2 block text-sm font-medium text-gray-300'>
                    Special Requests
                  </label>
                  <textarea
                    rows={4}
                    placeholder='Let us know your preferences, dietary requirements, or any special occasion...'
                    aria-label='Special Requests'
                    className='body-font w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                    style={{ borderColor: 'var(--color-border)' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type='button'
                  className='body-font w-full rounded-full py-4 text-base font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  Reserve Your Table
                </button>

                <p className='body-font text-center text-sm text-gray-500'>
                  ✅ Free cancellation up to 24 hours before your booking
                </p>

              </div>
            </motion.div>

            {/* ── Right: Step 3 Info Cards ── */}
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='visible'
              viewport={viewport}
              className='space-y-6'
            >
              {infoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    variants={staggerItem}
                    className='rounded-2xl border p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl'
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      borderColor: 'var(--color-border)',
                    }}
                  >
                    <div className='flex items-start gap-4'>
                      <div
                        className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full'
                        style={{
                          backgroundColor: 'rgba(249,115,22,0.12)',
                          color: 'var(--color-primary)',
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <div className='flex-1'>
                        <h3 className='heading-font text-lg font-bold text-white'>
                          {card.title}
                        </h3>
                        {card.content}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Group Booking CTA ── */}
      <section className='pb-24 px-6'>
        <div className='mx-auto max-w-7xl'>
          <motion.div
            variants={fadeInUp}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='relative overflow-hidden rounded-3xl border px-8 py-16 text-center shadow-md'
            style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(245,158,11,0.08))',
              borderColor: 'var(--color-border)',
            }}
          >
            <div
              className='absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl'
              style={{ background: 'rgba(249,115,22,0.15)' }}
            />
            <div className='relative z-10'>
              <h2 className='heading-font text-3xl font-bold text-white sm:text-4xl'>
                Need help with a group booking?
              </h2>
              <p className='body-font mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-400'>
                Reach out to our team directly for large groups, private events,
                and customized menus.
              </p>
              <Link
                href='/contact'
                className='body-font mt-10 inline-flex rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}