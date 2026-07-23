'use client';

import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  viewport,
} from '@/lib/animations';

export default function MenuHero() {
  return (
    <section
      className='relative overflow-hidden py-24'
      style={{
        background: 'linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 100%)',
      }}
    >
      <div
        className='absolute -left-24 -top-24 h-80 w-80 rounded-full blur-3xl'
        style={{ background: 'rgba(249,115,22,0.10)' }}
      />
      <div
        className='absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl'
        style={{ background: 'rgba(245,158,11,0.08)' }}
      />

      <div className='relative z-10 mx-auto max-w-7xl px-6'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
          className='mx-auto max-w-4xl text-center'
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
            Authentic Nepali Cuisine
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className='heading-font mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl'
          >
            Explore Our Menu
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className='body-font mx-auto mt-6 max-w-3xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
          >
            From traditional Nepali favorites to modern street food,
            every dish is prepared with fresh ingredients, authentic
            recipes, and a passion for unforgettable dining.
          </motion.p>

          {/* Trust message */}
          <motion.p
            variants={fadeInUp}
            className='body-font mt-6 text-sm font-medium'
            style={{ color: 'var(--color-secondary)' }}
          >
            Fresh Ingredients • Authentic Recipes • Made with Love
          </motion.p>

        </motion.div>
      </div>

    </section>
  );
}