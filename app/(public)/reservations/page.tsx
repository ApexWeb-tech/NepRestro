'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ReservationForm from '../../../components/public/ReservationForm';
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  viewport,
} from '@/lib/animations';

export default function ReservationPage() {
  return (
    <main className='bg-[#111111] text-white'>

      {/* ── Hero ── */}
      <section className='relative min-h-[55vh] overflow-hidden'>
        <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop")] bg-cover bg-center' />
        <div className='absolute inset-0 bg-slate-950/75' />

        <motion.div
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
          className='relative z-10 mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 text-center text-white'
        >
          <motion.p
            variants={fadeInDown}
            className='mb-4 inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-orange-100'
          >
            Reserve a Table
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className='heading-font text-5xl font-black leading-tight md:text-6xl'
          >
            Secure your table for a delicious Nepali dining experience.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className='body-font mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-200'
          >
            Tell us your preferred date and time, and we'll prepare a warm welcome
            for your group.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Booking Section ── */}
      <section className='px-6 py-24'>
        <div className='mx-auto grid max-w-7xl gap-12 xl:grid-cols-[1.05fr_0.95fr]'>

          {/* Left: Info Cards */}
          <motion.div
            variants={fadeInLeft}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='rounded-[2rem] p-10 shadow-xl'
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <p
              className='body-font mb-4 text-sm font-semibold uppercase tracking-[0.35em]'
              style={{ color: 'var(--color-primary)' }}
            >
              Plan Your Visit
            </p>
            <h2 className='heading-font mb-8 text-3xl font-bold text-white'>
              Booking is easy and fast.
            </h2>

            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='visible'
              viewport={viewport}
              className='grid gap-6 sm:grid-cols-2'
            >
              <motion.div
                variants={staggerItem}
                className='rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40'
                style={{ borderColor: 'var(--color-border)' }}
              >
                <p
                  className='body-font text-sm uppercase tracking-[0.35em]'
                  style={{ color: 'var(--color-primary)' }}
                >
                  Opening Hours
                </p>
                <p className='body-font mt-3 text-lg text-gray-300'>
                  Monday - Sunday<br />10:00 AM - 10:00 PM
                </p>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className='rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40'
                style={{ borderColor: 'var(--color-border)' }}
              >
                <p
                  className='body-font text-sm uppercase tracking-[0.35em]'
                  style={{ color: 'var(--color-primary)' }}
                >
                  Location
                </p>
                <p className='body-font mt-3 text-lg text-gray-300'>
                  123 Restaurant Street<br />Kathmandu, Nepal
                </p>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className='rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40'
                style={{ borderColor: 'var(--color-border)' }}
              >
                <p
                  className='body-font text-sm uppercase tracking-[0.35em]'
                  style={{ color: 'var(--color-primary)' }}
                >
                  Phone
                </p>
                <p className='body-font mt-3 text-lg text-gray-300'>
                  +977 9800000000
                </p>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className='rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40'
                style={{ borderColor: 'var(--color-border)' }}
              >
                <p
                  className='body-font text-sm uppercase tracking-[0.35em]'
                  style={{ color: 'var(--color-primary)' }}
                >
                  Email
                </p>
                <p className='body-font mt-3 text-lg text-gray-300'>
                  reservations@restro.com
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Reservation Form — backend untouched */}
          <motion.div
            variants={fadeInRight}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='rounded-[2rem] p-10 shadow-xl'
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <h2 className='heading-font mb-8 text-3xl font-bold text-white'>
              Reserve Your Table
            </h2>
            <ReservationForm />
          </motion.div>

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
            {/* Decorative glow */}
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