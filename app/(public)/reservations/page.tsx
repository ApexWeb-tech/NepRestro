'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarDays,
  UtensilsCrossed,
  Clock3,
  Phone,
  Info,
  Users,
  CalendarCheck,
  ChefHat,
  Sparkles,
  Plus,
  Minus,
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
        Monday – Sunday
        <br />
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

const benefits = [
  {
    id: 1,
    icon: CalendarCheck,
    title: 'Guaranteed Table',
    description: 'Your table will be prepared before you arrive.',
  },
  {
    id: 2,
    icon: ChefHat,
    title: 'Freshly Prepared Meals',
    description: 'Every dish is prepared using fresh ingredients and traditional recipes.',
  },
  {
    id: 3,
    icon: Users,
    title: 'Perfect for Groups',
    description: 'Comfortable seating for families, friends, and celebrations.',
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Warm Hospitality',
    description: 'Experience attentive service in a welcoming Nepali atmosphere.',
  },
];

const faqs = [
  {
    id: 1,
    question: 'Do I need to reserve in advance?',
    answer: 'Walk-ins are welcome, but reservations are recommended during weekends and holidays.',
  },
  {
    id: 2,
    question: 'How long will my reservation be held?',
    answer: 'We hold reservations for 15 minutes after the scheduled time.',
  },
  {
    id: 3,
    question: 'Can I request a specific table?',
    answer: 'Yes. We will do our best to accommodate your request based on availability.',
  },
  {
    id: 4,
    question: 'Can I cancel or change my reservation?',
    answer: 'Yes. Reservations can be modified or cancelled before your scheduled arrival.',
  },
];

// ── Custom animation variants with refined timing ──
const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ReservationPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <main className='bg-[#111111] text-white'>

      {/* ── Step 1: Premium Hero ── */}
      <section className='relative flex min-h-[55vh] items-center justify-center overflow-hidden md:min-h-[60vh]'>

        <Image
          src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop'
          alt='NepRestro Restaurant Dining Area'
          fill
          className='object-cover'
          priority
          sizes='100vw'
        />

        <div className='absolute inset-0 bg-black/65' />

        <div
          className='absolute bottom-0 left-0 h-48 w-48 rounded-full blur-3xl md:h-64 md:w-64'
          style={{ background: 'rgba(249,115,22,0.15)' }}
        />
        <div
          className='absolute right-0 top-0 h-48 w-48 rounded-full blur-3xl md:h-64 md:w-64'
          style={{ background: 'rgba(245,158,11,0.10)' }}
        />

        {/* Hero uses custom heroStagger for 0.15s delay between elements */}
        <motion.div
          variants={heroStagger}
          initial='hidden'
          animate='visible'
          className='relative z-10 mx-auto max-w-4xl px-6 py-16 text-center md:py-24'
        >
          {/* 1. Accent */}
          <motion.div
            variants={heroItem}
            className='mb-6 flex items-center justify-center gap-3'
          >
            <div className='h-px w-8 bg-orange-400/60 sm:w-12' />
            <UtensilsCrossed size={18} style={{ color: 'var(--color-primary)' }} />
            <div className='h-px w-8 bg-orange-400/60 sm:w-12' />
          </motion.div>

          {/* 2. Badge */}
          <motion.span
            variants={heroItem}
            className='body-font inline-block rounded-full px-4 py-2 text-xs font-semibold sm:px-5 sm:text-sm'
            style={{
              backgroundColor: 'rgba(249,115,22,0.15)',
              color: 'var(--color-secondary)',
            }}
          >
            Table Reservations
          </motion.span>

          {/* 3. Heading */}
          <motion.h1
            variants={heroItem}
            className='heading-font mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl'
          >
            Reserve Your Table
          </motion.h1>

          {/* 4. Description */}
          <motion.p
            variants={heroItem}
            className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-300 sm:text-lg'
          >
            Experience authentic Nepali cuisine in a warm, elegant atmosphere.
            Reserve your table today and let us make your dining experience
            unforgettable.
          </motion.p>

          {/* 5. CTA */}
          <motion.div variants={heroItem} className='mt-8 md:mt-10'>
            <a
              href='#reservation-form'
              style={{ backgroundColor: 'var(--color-primary)' }}
              className='body-font inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:px-8 sm:py-4 sm:text-lg'
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
          <div className='grid items-start gap-8 lg:grid-cols-2 lg:gap-12'>

            {/* ── Left: Form Card — fadeInLeft ── */}
            <motion.div
              variants={fadeInLeft}
              initial='hidden'
              whileInView='visible'
              viewport={viewport}
              className='rounded-3xl border p-6 shadow-xl sm:p-8 md:p-10'
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className='mb-6 flex items-start gap-4 sm:items-center'>
                <div
                  className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14'
                  style={{ backgroundColor: 'rgba(249,115,22,0.12)' }}
                >
                  <CalendarDays size={24} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h2
                    className='heading-font text-2xl font-bold sm:text-3xl'
                    style={{ color: 'var(--color-heading)' }}
                  >
                    Reserve a Table
                  </h2>
                  <p className='body-font mt-1 text-sm text-gray-400'>
                    Fill in the details and we will prepare the perfect
                    dining experience for you.
                  </p>
                </div>
              </div>

              <hr className='mb-6 md:mb-8' style={{ borderColor: 'var(--color-border)' }} />

              <div className='space-y-5 md:space-y-6'>

                <div className='grid gap-5 sm:grid-cols-2'>
                  <div>
                    <label className='body-font mb-2 block text-sm font-medium text-gray-300'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      placeholder='John Doe'
                      aria-label='Full Name'
                      className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)', minHeight: '48px' }}
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
                      style={{ borderColor: 'var(--color-border)', minHeight: '48px' }}
                    />
                  </div>
                </div>

                <div className='grid gap-5 sm:grid-cols-2'>
                  <div>
                    <label className='body-font mb-2 block text-sm font-medium text-gray-300'>
                      Phone
                    </label>
                    <input
                      type='tel'
                      placeholder='+977 98XXXXXXXX'
                      aria-label='Phone Number'
                      className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)', minHeight: '48px' }}
                    />
                  </div>
                  <div>
                    <label className='body-font mb-2 block text-sm font-medium text-gray-300'>
                      Guests
                    </label>
                    <select
                      aria-label='Number of Guests'
                      className='body-font w-full rounded-xl border bg-[#1e293b] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)', minHeight: '48px' }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className='grid gap-5 sm:grid-cols-2'>
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
                      style={{ borderColor: 'var(--color-border)', minHeight: '48px' }}
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
                      style={{ borderColor: 'var(--color-border)', minHeight: '48px' }}
                    />
                  </div>
                </div>

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

                <button
                  type='button'
                  className='body-font w-full rounded-full py-4 text-base font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  style={{ backgroundColor: 'var(--color-primary)', minHeight: '52px' }}
                >
                  Reserve Your Table
                </button>

                <p className='body-font text-center text-sm text-gray-500'>
                  Free cancellation up to 24 hours before your booking
                </p>

              </div>
            </motion.div>

            {/* ── Right: Info Cards — staggered ── */}
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='visible'
              viewport={viewport}
              className='space-y-4 sm:space-y-6'
            >
              {infoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    variants={staggerItem}
                    className='rounded-2xl border p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl sm:p-6'
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      borderColor: 'var(--color-border)',
                    }}
                  >
                    <div className='flex items-start gap-4'>
                      <div
                        className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12'
                        style={{
                          backgroundColor: 'rgba(249,115,22,0.12)',
                          color: 'var(--color-primary)',
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <h3 className='heading-font text-base font-bold text-white sm:text-lg'>
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

      {/* ── Step 4: Reservation Benefits ── */}
      <section className='bg-[#0d0d0d] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='mb-16 text-center'
          >
            <motion.span
              variants={fadeInDown}
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Why Reserve With Us
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl'
            >
              Why Reserve With Us?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
            >
              Enjoy a seamless dining experience with priority seating,
              personalized service, and authentic Nepali hospitality.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.id}
                  variants={staggerItem}
                  className='flex flex-col rounded-2xl border p-6 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl lg:p-8'
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  <div
                    className='mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110'
                    style={{
                      backgroundColor: 'rgba(249,115,22,0.12)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 className='heading-font text-lg font-bold text-white lg:text-xl'>
                    {benefit.title}
                  </h3>
                  <p className='body-font mt-3 flex-grow text-sm leading-7 text-gray-400 lg:text-base'>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ── Step 5: FAQ Section ── */}
      <section className='py-24'>
        <div className='mx-auto max-w-5xl px-6'>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='mb-16 text-center'
          >
            <motion.span
              variants={fadeInDown}
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              FAQ
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
            >
              Find quick answers to common questions about reservations, seating,
              and dining at NepRestro.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='space-y-4'
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                variants={staggerItem}
                className='overflow-hidden rounded-2xl border shadow-md transition-all duration-300 ease-out'
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: openId === faq.id
                    ? 'var(--color-primary)'
                    : 'var(--color-border)',
                }}
              >
                <button
                  type='button'
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-${faq.id}`}
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className='flex w-full items-center justify-between px-5 py-4 text-left transition-all duration-300 ease-out hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:px-6 sm:py-5'
                  style={{ minHeight: '56px' }}
                >
                  <span className='heading-font pr-4 text-base font-semibold text-white sm:text-lg'>
                    {faq.question}
                  </span>
                  {/* Icon rotates smoothly via motion */}
                  <motion.span
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className='flex-shrink-0'
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {openId === faq.id
                      ? <Minus size={20} />
                      : <Plus size={20} />
                    }
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      id={`faq-${faq.id}`}
                      key={`faq-content-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className='px-5 pb-5 sm:px-6 sm:pb-6'>
                        <hr
                          className='mb-4'
                          style={{ borderColor: 'var(--color-border)' }}
                        />
                        <p className='body-font text-sm leading-7 text-gray-400 sm:text-base'>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Group Booking CTA ── */}
      <section className='px-6 pb-24'>
        <div className='mx-auto max-w-7xl'>
          <motion.div
            variants={fadeInUp}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='relative overflow-hidden rounded-3xl border px-6 py-12 text-center shadow-md sm:px-8 sm:py-16'
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
              <h2 className='heading-font text-2xl font-bold text-white sm:text-3xl lg:text-4xl'>
                Need help with a group booking?
              </h2>
              <p className='body-font mx-auto mt-4 max-w-2xl px-2 text-base leading-relaxed text-gray-400 sm:text-lg'>
                Reach out to our team directly for large groups, private events,
                and customized menus.
              </p>
              <Link
                href='/contact'
                style={{ backgroundColor: 'var(--color-primary)' }}
                className='body-font mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:mt-10 sm:px-8 sm:py-4'
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