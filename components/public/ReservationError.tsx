'use client';

import { motion } from 'framer-motion';
import { CircleAlert } from 'lucide-react';
import { fadeInUp, staggerContainer, viewport } from '@/lib/animations';

export default function ReservationError() {
  return (
    <section className='flex min-h-[60vh] items-center justify-center py-24 px-6'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={viewport}
        className='mx-auto w-full max-w-lg rounded-3xl border p-10 text-center shadow-xl'
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        {/* Error Icon */}
        <motion.div variants={fadeInUp}>
          <div
            className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full'
            style={{
              backgroundColor: 'rgba(249,115,22,0.12)',
              color: 'var(--color-primary)',
            }}
          >
            <CircleAlert size={42} />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className='heading-font text-3xl font-bold text-white'
        >
          Unable to Complete Reservation
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeInUp}
          className='body-font mt-3 font-semibold'
          style={{ color: 'var(--color-primary)' }}
        >
          Something went wrong.
        </motion.p>

        {/* Divider */}
        <motion.hr
          variants={fadeInUp}
          className='my-6'
          style={{ borderColor: 'var(--color-border)' }}
        />

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className='body-font leading-7 text-gray-400'
        >
          We were unable to process your reservation at this time.
          Please try again in a few moments or contact us directly if
          the issue persists.
        </motion.p>

        {/* Details box */}
        <motion.div
          variants={fadeInUp}
          className='mt-6 rounded-2xl p-5 text-left'
          style={{ backgroundColor: 'rgba(249,115,22,0.08)' }}
        >
          <p
            className='body-font text-sm font-medium'
            style={{ color: 'var(--color-primary)' }}
          >
            What you can do:
          </p>
          <ul className='body-font mt-3 space-y-2 text-sm text-gray-400'>
            <li className='flex items-start gap-2'>
              <span style={{ color: 'var(--color-primary)' }}>•</span>
              Check your internet connection and try again.
            </li>
            <li className='flex items-start gap-2'>
              <span style={{ color: 'var(--color-primary)' }}>•</span>
              Call us directly at +977 9800000000.
            </li>
            <li className='flex items-start gap-2'>
              <span style={{ color: 'var(--color-primary)' }}>•</span>
              Email us at info@neprestro.com.
            </li>
          </ul>
        </motion.div>

        {/* Button */}
        <motion.div variants={fadeInUp} className='mt-8'>
          <button
            type='button'
            onClick={() => window.location.reload()}
            style={{ backgroundColor: 'var(--color-primary)' }}
            className='body-font w-full rounded-full py-4 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
          >
            Try Again
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}