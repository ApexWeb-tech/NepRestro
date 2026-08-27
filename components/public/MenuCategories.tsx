'use client';

import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  staggerItem,
  viewport,
} from '@/lib/animations';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'momo', label: 'Momo' },
  { id: 'thakali', label: 'Thakali Set' },
  { id: 'noodles', label: 'Noodles' },
  { id: 'snacks', label: 'Snacks' },
  { id: 'beverages', label: 'Beverages' },
  { id: 'desserts', label: 'Desserts' },
];

export default function MenuCategories() {
  return (
    <section className='bg-[#111111] py-10'>
      <div className='mx-auto max-w-7xl px-6'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
          className='mx-auto max-w-5xl'
        >
          {/* Title */}
          <motion.h2
            variants={fadeInDown}
            className='heading-font mb-3 text-center text-2xl font-bold text-white sm:text-3xl'
          >
            Browse by Category
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className='body-font mb-8 text-center text-sm text-gray-400 sm:text-base'
          >
            Choose your favorite category and discover authentic Nepali dishes.
          </motion.p>

          {/* Category Buttons — horizontal scroll on mobile */}
          <motion.div
            variants={staggerContainer}
            className='flex gap-3 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                variants={staggerItem}
                aria-label={`Filter by ${category.label}`}
                className={`body-font flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:px-6 sm:py-3 sm:text-base ${
                  index === 0
                    ? 'text-white shadow-md hover:scale-105 hover:shadow-lg'
                    : 'border text-white hover:-translate-y-1 hover:border-orange-500 hover:bg-white/5'
                }`}
                style={
                  index === 0
                    ? { backgroundColor: 'var(--color-primary)' }
                    : { borderColor: 'var(--color-border)' }
                }
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}