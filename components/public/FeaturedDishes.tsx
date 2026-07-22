'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  staggerItem,
  viewport,
} from '@/lib/animations';

const featuredDishes = [
  {
    id: 1,
    name: 'Chicken Momo',
    description: 'Soft steamed dumplings stuffed with seasoned chicken, served with authentic Nepali achar.',
    price: 'Rs. 250',
    rating: 5,
    badge: "Chef's Special",
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop',
    href: '/menu',
  },
  {
    id: 2,
    name: 'Buff Sekuwa',
    description: 'Traditional Nepali grilled buffalo meat marinated with local herbs and spices.',
    price: 'Rs. 450',
    rating: 5,
    badge: 'Most Popular',
    image: 'https://images.pexels.com/photos/37058646/pexels-photo-37058646.jpeg',
    href: '/menu',
  },
  {
    id: 3,
    name: 'Thakali Khana Set',
    description: 'Authentic Nepali Thakali meal with rice, lentils, vegetables, pickle and curry.',
    price: 'Rs. 550',
    rating: 5,
    badge: 'Best Seller',
    image: 'https://images.pexels.com/photos/36885753/pexels-photo-36885753.jpeg',
    href: '/menu',
  },
];

export default function FeaturedDishes() {
  return (
    <section className='bg-[#0d0d0d] py-24'>
      <div className='mx-auto max-w-7xl px-6'>

        {/* ── Section Header ── */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
          className='mb-16 text-center'
        >
          <motion.p
            variants={fadeInDown}
            className='body-font mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400'
          >
            Featured Dishes
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className='heading-font text-3xl font-bold text-white sm:text-4xl lg:text-5xl'
          >
            Taste our most beloved Nepalese dishes.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className='body-font mx-auto mt-4 max-w-2xl px-2 text-base leading-7 text-gray-400 sm:text-lg'
          >
            Discover our chef's carefully selected signature dishes, prepared with
            fresh ingredients and authentic Nepali flavors.
          </motion.p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
          className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
        >
          {featuredDishes.map((dish) => (
            <motion.div key={dish.id} variants={staggerItem}>
              <Link
                href={dish.href}
                className='group flex flex-col overflow-hidden rounded-2xl border shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                {/* Image */}
                <div className='relative aspect-[4/3] overflow-hidden rounded-t-2xl'>
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                    quality={90}
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
                  <div className='absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                </div>

                {/* Content */}
                <div className='flex h-full flex-col space-y-4 p-5 sm:p-6'>

                  {/* Badge */}
                  {dish.badge && (
                    <span
                      style={{ backgroundColor: 'var(--color-secondary)' }}
                      className='body-font inline-block rounded-full px-3 py-1 text-xs font-semibold text-white'
                    >
                      {dish.badge}
                    </span>
                  )}

                  {/* Dish Name */}
                  <h3 className='heading-font text-xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-400 sm:text-2xl'>
                    {dish.name}
                  </h3>

                  {/* Description */}
                  <p className='body-font line-clamp-3 text-base leading-7 text-gray-400'>
                    {dish.description}
                  </p>

                  {/* Bottom */}
                  <div className='mt-auto space-y-4'>
                    <hr style={{ borderColor: 'var(--color-border)' }} />

                    {/* Rating & Price */}
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-1'>
                        {[...Array(dish.rating)].map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            fill='currentColor'
                            style={{ color: 'var(--color-secondary)' }}
                          />
                        ))}
                      </div>
                      <span
                        style={{ color: 'var(--color-primary)' }}
                        className='body-font text-xl font-bold'
                      >
                        {dish.price}
                      </span>
                    </div>

                    {/* CTA */}
                    <div
                      style={{ backgroundColor: 'var(--color-primary)' }}
                      className='body-font block w-full rounded-full py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600 active:scale-95 sm:py-3.5'
                    >
                      View Details
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}