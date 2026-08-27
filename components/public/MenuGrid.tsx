'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewport,
} from '@/lib/animations';
import EmptyState from '@/components/ui/EmptyState';

const menuItems = [
  {
    id: 1,
    name: 'Chicken Momo',
    description: 'Steamed dumplings stuffed with seasoned chicken, served with our signature spicy tomato chutney.',
    price: 'Rs. 280',
    rating: 4.9,
    featured: true,
    category: 'momo',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Buff Momo',
    description: 'Tender buffalo dumplings with aromatic spices, paired with house-made sesame dipping sauce.',
    price: 'Rs. 260',
    rating: 4.8,
    featured: false,
    category: 'momo',
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d29a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Thakali Set',
    description: 'Authentic Thakali meal with rice, lentils, seasonal vegetables, pickle, and slow-cooked curry.',
    price: 'Rs. 650',
    rating: 5.0,
    featured: true,
    category: 'thakali',
    image: 'https://images.pexels.com/photos/36885753/pexels-photo-36885753.jpeg',
  },
  {
    id: 4,
    name: 'Chicken Chowmein',
    description: 'Stir-fried noodles with fresh vegetables and tender chicken in a savory Nepali-style sauce.',
    price: 'Rs. 320',
    rating: 4.7,
    featured: false,
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Sel Roti Set',
    description: 'Traditional Nepali rice doughnut served with yogurt, achar, and seasonal sides.',
    price: 'Rs. 220',
    rating: 4.8,
    featured: true,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Mango Lassi',
    description: 'Chilled blend of fresh Nepali mangoes, creamy yogurt, and a hint of cardamom.',
    price: 'Rs. 180',
    rating: 4.9,
    featured: false,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function MenuGrid() {
  const showEmpty = false; // flip to true to preview EmptyState

  return (
    <section className='bg-[#111111] pb-24 pt-4'>
      <div className='mx-auto max-w-7xl px-6'>

        {showEmpty ? (
          <EmptyState
            title='No Dishes Found'
            description='We could not find any dishes in this category. Try selecting another category.'
            actionLabel='View All Dishes'
            actionHref='/menu'
          />
        ) : (
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
          >
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className='group flex cursor-pointer flex-col overflow-hidden rounded-2xl border shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-2xl'
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                {/* Image */}
                <div className='relative h-48 overflow-hidden sm:h-52'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className='object-cover transition-transform duration-500 ease-out group-hover:scale-110'
                    quality={80}
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
                  <div className='absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/15' />
                </div>

                {/* Content */}
                <div className='flex flex-1 flex-col p-5 sm:p-6'>

                  {/* Rating & Badge */}
                  <div className='flex items-center justify-between'>
                    <span
                      className='body-font flex items-center gap-1 text-sm font-semibold'
                      style={{ color: 'var(--color-secondary)' }}
                    >
                      <Star size={13} fill='currentColor' aria-hidden='true' />
                      {item.rating}
                    </span>

                    {item.featured && (
                      <span
                        className='body-font rounded-full px-2.5 py-1 font-semibold transition-all duration-300 group-hover:scale-105'
                        style={{
                          fontSize: '11px',
                          backgroundColor: 'rgba(249,115,22,0.15)',
                          color: 'var(--color-primary)',
                        }}
                      >
                        Chef's Special
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className='heading-font mt-4 text-lg font-bold text-white sm:text-xl'>
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className='body-font mt-2 line-clamp-2 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7'>
                    {item.description}
                  </p>

                  {/* Price */}
                  <div className='mt-auto pt-5'>
                    <span
                      className='body-font text-xl font-bold transition-all duration-300 group-hover:tracking-wide sm:text-2xl'
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {item.price}
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Menu CTA */}
        <motion.div
          variants={fadeInUp}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
          className='mt-20 rounded-3xl border px-8 py-12 text-center'
          style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.10), rgba(245,158,11,0.06))',
            borderColor: 'var(--color-border)',
          }}
        >
          <h2 className='heading-font text-2xl font-bold text-white sm:text-3xl'>
            Ready to Experience Nepali Flavors?
          </h2>
          <p className='body-font mx-auto mt-4 max-w-xl text-base leading-8 text-gray-400'>
            Reserve your table today and enjoy freshly prepared Nepali dishes
            in a warm, welcoming atmosphere.
          </p>
          <Link
            href='/reservations'
            style={{ backgroundColor: 'var(--color-primary)' }}
            className='body-font mt-8 inline-flex rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
          >
            Reserve a Table
          </Link>
        </motion.div>

      </div>
    </section>
  );
}