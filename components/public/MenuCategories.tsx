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
  { id: 'all', label: 'All', active: true },
  { id: 'momo', label: 'Momo', active: false },
  { id: 'thakali', label: 'Thakali Set', active: false },
  { id: 'noodles', label: 'Noodles', active: false },
  { id: 'snacks', label: 'Snacks', active: false },
  { id: 'beverages', label: 'Beverages', active: false },
  { id: 'desserts', label: 'Desserts', active: false },
];

export default function MenuCategories() {
  return (
    <section className='bg-[#111111] py-12'>
      <div className='mx-auto max-w-7xl px-6'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
          className='mx-auto max-w-5xl text-center'
        >
          {/* Title */}
          <motion.h2
            variants={fadeInDown}
            className='heading-font text-3xl font-bold text-white'
          >
            Browse by Category
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className='body-font mt-4 text-gray-400'
          >
            Choose your favorite category and discover authentic Nepali dishes.
          </motion.p>

          {/* Category Buttons */}
          <motion.div
            variants={staggerContainer}
            className='mt-10 flex flex-wrap justify-center gap-4'
          >
            {categories.map((category) =>
              category.active ? (
                <motion.button
                  key={category.id}
                  variants={staggerItem}
                  aria-label={`Filter by ${category.label}`}
                  className='body-font rounded-full px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:px-6 sm:py-3'
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {category.label}
                </motion.button>
              ) : (
                <motion.button
                  key={category.id}
                  variants={staggerItem}
                  aria-label={`Filter by ${category.label}`}
                  className='body-font rounded-full border px-5 py-2.5 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:px-6 sm:py-3'
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  {category.label}
                </motion.button>
              )
            )}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}