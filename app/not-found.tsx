'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import { staggerContainer, fadeInDown, fadeInUp, viewport } from '@/lib/animations';

export default function NotFound() {
  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111111] px-6 text-white'>

      {/* Decorative glows */}
      <div
        className='absolute -left-24 -top-24 h-80 w-80 rounded-full blur-3xl'
        style={{ background: 'rgba(249,115,22,0.10)' }}
      />
      <div
        className='absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl'
        style={{ background: 'rgba(245,158,11,0.08)' }}
      />

      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='visible'
        className='relative z-10 mx-auto max-w-2xl text-center'
      >
        {/* Icon */}
        <motion.div variants={fadeInDown} className='mb-6 flex justify-center'>
          <div
            className='flex h-20 w-20 items-center justify-center rounded-full'
            style={{ backgroundColor: 'rgba(249,115,22,0.12)' }}
          >
            <UtensilsCrossed size={40} style={{ color: 'var(--color-primary)' }} />
          </div>
        </motion.div>

        {/* 404 Number */}
        <motion.h1
          variants={fadeInUp}
          className='heading-font text-8xl font-extrabold md:text-9xl'
          style={{ color: 'var(--color-primary)' }}
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className='heading-font mt-6 text-3xl font-bold text-white md:text-4xl'
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className='body-font mx-auto mt-6 max-w-md text-base leading-8 text-gray-400 sm:text-lg'
        >
          Looks like this table is currently unavailable. Let's get you back to something delicious.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'
        >
          <Link
            href='/'
            style={{ backgroundColor: 'var(--color-primary)' }}
            className='body-font inline-flex w-full items-center justify-center rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto'
          >
            Back to Home
          </Link>

          <Link
            href='/menu'
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-primary)',
            }}
            className='body-font inline-flex w-full items-center justify-center rounded-full border px-8 py-4 font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/5 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto'
          >
            Explore Menu
          </Link>
        </motion.div>

      </motion.div>
    </main>
  );
}