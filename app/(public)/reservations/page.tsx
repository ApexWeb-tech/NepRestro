'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarDays, UtensilsCrossed } from 'lucide-react';
import ReservationForm from '../../../components/public/ReservationForm';
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  viewport,
} from '@/lib/animations';

export default function ReservationPage() {
  return (
    <main className='bg-[#111111] text-white'>

      {/* ── Step 1: Premium Hero ── */}
      <section className='relative flex min-h-[60vh] items-center justify-center overflow-hidden'>

        {/* Background Image */}
        <Image
          src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop'
          alt='NepRestro Restaurant Dining Area'
          fill
          className='object-cover'
          priority
        />

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/65' />

        {/* Decorative orange glow */}
        <div
          className='absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl'
          style={{ background: 'rgba(249,115,22,0.15)' }}
        />
        <div
          className='absolute right-0 top-0 h-64 w-64 rounded-full blur-3xl'
          style={{ background: 'rgba(245,158,11,0.10)' }}
        />

        {/* Hero Content */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
          className='relative z-10 mx-auto max-w-4xl px-6 text-center'
        >
          {/* Decorative accent — icon + line */}
          <motion.div
            variants={fadeInDown}
            className='mb-6 flex items-center justify-center gap-3'
          >
            <div className='h-px w-12 bg-orange-400/60' />
            <UtensilsCrossed
              size={20}
              style={{ color: 'var(--color-primary)' }}
            />
            <div className='h-px w-12 bg-orange-400/60' />
          </motion.div>

          {/* Badge */}
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

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className='heading-font mt-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl'
          >
            Reserve Your Table
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className='body-font mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300'
          >
            Experience authentic Nepali cuisine in a warm, elegant atmosphere.
            Reserve your table today and let us make your dining experience
            unforgettable.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className='mt-10'>
            <a
              href='#reservation-form'
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('reservation-form')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className='body-font inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <CalendarDays size={20} />
              Book Your Table
            </a>
          </motion.div>

        </motion.div>

        {/* Bottom fade */}
        <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111111] to-transparent' />
      </section>

      {/* ── Booking Section ── */}
      <section id='reservation-form' className='px-6 py-24'>
        <div className='mx-auto grid max-w-7xl gap-12 xl:grid-cols-[1.05fr_0.95fr]'>

          {/* Left: Info Cards */}
          <motion.div
            variants={staggerContainer}
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

            <div className='grid gap-6 sm:grid-cols-2'>
              {[
                { label: 'Opening Hours', value: 'Monday - Sunday\n10:00 AM - 10:00 PM' },
                { label: 'Location', value: '123 Restaurant Street\nKathmandu, Nepal' },
                { label: 'Phone', value: '+977 9800000000' },
                { label: 'Email', value: 'reservations@restro.com' },
              ].map((item) => (
                <div
                  key={item.label}
                  className='rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40'
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <p
                    className='body-font text-sm uppercase tracking-[0.35em]'
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.label}
                  </p>
                  <p className='body-font mt-3 whitespace-pre-line text-lg text-gray-300'>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Reservation Form — backend untouched */}
          <motion.div
            variants={fadeInUp}
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