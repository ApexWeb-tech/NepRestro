'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CircleCheckBig } from 'lucide-react';
import { fadeInUp, staggerContainer, viewport } from '@/lib/animations';

export default function ReservationSuccess() {
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
        {/* Success Icon */}
        <motion.div variants={fadeInUp}>
          <div
            className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full'
            style={{
              backgroundColor: 'rgba(34,197,94,0.12)',
              color: 'var(--color-success)',
            }}
          >
            <CircleCheckBig size={42} />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className='heading-font text-3xl font-bold text-white'
        >
          Reservation Confirmed!
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeInUp}
          className='body-font mt-3 font-semibold'
          style={{ color: 'var(--color-success)' }}
        >
          Thank you for choosing NepRestro.
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
          We have received your reservation. A confirmation email will be sent
          once your booking is confirmed by our team.
        </motion.p>

        {/* Details box */}
        <motion.div
          variants={fadeInUp}
          className='mt-6 rounded-2xl p-5 text-left'
          style={{ backgroundColor: 'rgba(34,197,94,0.08)' }}
        >
          <p
            className='body-font text-sm font-medium'
            style={{ color: 'var(--color-success)' }}
          >
            What happens next?
          </p>
          <ul className='body-font mt-3 space-y-2 text-sm text-gray-400'>
            <li className='flex items-start gap-2'>
              <span style={{ color: 'var(--color-success)' }}>✓</span>
              Our team will review your booking.
            </li>
            <li className='flex items-start gap-2'>
              <span style={{ color: 'var(--color-success)' }}>✓</span>
              You will receive a confirmation email shortly.
            </li>
            <li className='flex items-start gap-2'>
              <span style={{ color: 'var(--color-success)' }}>✓</span>
              Your table will be prepared before your arrival.
            </li>
          </ul>
        </motion.div>

        {/* Button */}
        <motion.div variants={fadeInUp} className='mt-8'>
          <Link
            href='/'
            style={{ backgroundColor: 'var(--color-primary)' }}
            className='body-font inline-flex w-full items-center justify-center rounded-full py-4 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
          >
            Back to Home
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}