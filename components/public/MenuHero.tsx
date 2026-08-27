'use client';

import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
} from '@/lib/animations';

export default function MenuHero() {
  return (
    <section
      className='relative overflow-hidden py-24 lg:py-28'
      style={{
        background: 'linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(24,32,50,1) 50%, rgba(15,23,42,1) 100%)',
      }}
    >
      {/* Glows */}
      <div
        className='absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl'
        style={{ background: 'rgba(249,115,22,0.10)' }}
      />
      <div
        className='absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl'
        style={{ background: 'rgba(245,158,11,0.08)' }}
      />

      <div className='relative z-10 mx-auto max-w-7xl px-6'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
          className='mx-auto max-w-3xl text-center'
        >
          {/* Badge */}
          <motion.span
            variants={fadeInDown}
            className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
            style={{
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-secondary)',
            }}
          >
            Our Menu
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className='heading-font mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl'
          >
            Authentic Flavors of Nepal
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
          >
            Traditional recipes, fresh ingredients, and a passion for
            unforgettable dining — explore every dish we have crafted for you.
          </motion.p>

          {/* Trust line */}
          <motion.p
            variants={fadeInUp}
            className='body-font mt-5 text-sm font-medium'
            style={{ color: 'var(--color-secondary)' }}
          >
            Fresh Ingredients • Authentic Recipes • Made with Love
          </motion.p>

        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111111] to-transparent' />
    </section>
  );
}