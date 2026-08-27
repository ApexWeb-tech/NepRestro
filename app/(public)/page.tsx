'use client';

import Image from 'next/image';
import Link from 'next/link';
import { UtensilsCrossed, CalendarDays, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FeaturedDishes from '@/components/public/FeaturedDishes';
import WhyChooseUs from '@/components/public/WhyChooseUs';
import Gallery from '@/components/public/Gallery';
import Testimonials from '@/components/public/Testimonials';
import ReservationCTA from '@/components/public/ReservationCTA';
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  viewport,
} from '@/lib/animations';

export default function HomePage() {
  return (
    <main className='bg-[#111111] text-white'>

      {/* ── HERO ── */}
      <section
        className='relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden py-16'
        style={{
          background: 'linear-gradient(135deg, #1b120d 0%, #111111 50%, #24180f 100%)',
        }}
      >
        {/* Background glows */}
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.12),transparent_60%)]' />
        <div className='absolute right-10 top-10 h-80 w-80 rounded-full bg-orange-500/15 blur-[120px]' />
        <div className='absolute bottom-0 left-0 h-72 w-72 rounded-full bg-yellow-500/8 blur-[100px]' />

        <div className='relative z-10 mx-auto w-full max-w-7xl px-6'>
          <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20'>

            {/* Left: Text */}
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              animate='visible'
            >
              {/* Badge */}
              <motion.div variants={fadeInDown}>
                <div className='body-font inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-medium tracking-wide text-orange-300 backdrop-blur-sm'>
                  <UtensilsCrossed className='h-4 w-4' aria-hidden='true' />
                  <span>Authentic Nepali Cuisine</span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeInUp}
                className='heading-font mt-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl'
              >
                Experience{' '}
                <span style={{ color: 'var(--color-primary)' }}>
                  Authentic
                </span>
                <br />
                Nepali Cuisine
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className='body-font mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg'
              >
                Discover authentic Nepali flavors crafted from fresh, locally
                sourced ingredients. From traditional family recipes to modern
                culinary creations, every dish is prepared with passion.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={fadeInUp}
                className='mt-10 flex flex-wrap items-center gap-4'
              >
                <Link
                  href='/reservations'
                  aria-label='Reserve a table at NepRestro'
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  className='body-font inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                >
                  <CalendarDays className='h-5 w-5' aria-hidden='true' />
                  Reserve Table
                </Link>

                <Link
                  href='/menu'
                  aria-label='Explore our menu'
                  className='body-font group inline-flex items-center gap-2 rounded-full border px-8 py-4 text-base font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500/10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-heading)',
                  }}
                >
                  Explore Menu
                  <ArrowRight className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' aria-hidden='true' />
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={fadeInUp}
                className='mt-10 flex flex-wrap items-center gap-6'
              >
                {[
                  { value: '10K+', label: 'Happy Guests' },
                  { value: '15+', label: 'Years Experience' },
                  { value: '25+', label: 'Signature Dishes' },
                ].map((stat) => (
                  <div key={stat.label} className='text-center'>
                    <p
                      className='heading-font text-2xl font-bold'
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {stat.value}
                    </p>
                    <p className='body-font text-xs text-gray-500'>{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              variants={scaleIn}
              initial='hidden'
              animate='visible'
              className='relative flex items-center justify-center py-8 lg:py-0'
            >
              {/* Glow behind image */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='h-80 w-80 rounded-full bg-orange-500/20 blur-3xl' />
              </div>

              {/* Decorative ring */}
              <div className='absolute h-[420px] w-[420px] rounded-full border border-orange-500/15 md:h-[500px] md:w-[500px]' />

              {/* Decorative dots */}
              <div className='absolute right-8 top-8 h-4 w-4 rounded-full bg-orange-400' />
              <div className='absolute bottom-12 left-8 h-3 w-3 rounded-full bg-yellow-400' />
              <div className='absolute left-16 top-20 h-2 w-2 rounded-full bg-orange-300/60' />

              {/* Food image */}
              <div className='relative z-10 h-[320px] w-[320px] animate-float md:h-[440px] md:w-[440px]'>
                <Image
                  src='https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop'
                  alt='Authentic Nepali momo — steamed dumplings'
                  fill
                  className='rounded-full object-cover shadow-2xl drop-shadow-[0_20px_40px_rgba(249,115,22,0.30)] ring-4 ring-orange-500/20'
                  priority
                  sizes='(max-width: 768px) 320px, 440px'
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#111111] to-transparent' />
      </section>

      {/* ── OUR BEST FOOD ── */}
      <section className='bg-[#1a1a1a] px-6 py-20 lg:py-24'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row md:items-center'>

          <motion.div
            variants={fadeInLeft}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='relative h-64 w-64 flex-shrink-0 sm:h-72 sm:w-72 md:h-80 md:w-80'
          >
            <Image
              src='https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop'
              alt='Freshly prepared Nepali noodles'
              fill
              className='rounded-3xl object-cover shadow-2xl'
              sizes='(max-width: 768px) 256px, 320px'
            />
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='flex-1 text-center md:pl-12 md:text-left'
          >
            <span
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Our Specialty
            </span>

            <h2 className='heading-font mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
              Our{' '}
              <span style={{ color: 'var(--color-primary)' }}>Best Food</span>
            </h2>

            <p className='body-font mt-5 max-w-md text-base leading-8 text-gray-400 md:text-lg'>
              From savory momos to hearty Thakali sets — discover the flavors
              that define our menu and keep our guests coming back.
            </p>

            <div className='mt-8 flex items-center justify-center gap-3 md:justify-start'>
              <div className='h-px w-14 bg-orange-500/50' />
              <div className='h-px w-8 bg-white/10' />
              <div className='h-px w-4 bg-white/5' />
            </div>

            <Link
              href='/menu'
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-heading)',
              }}
              className='body-font mt-7 inline-flex items-center gap-2 rounded-full border px-8 py-3 text-base font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500/10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
            >
              View Full Menu
              <ArrowRight className='h-4 w-4' aria-hidden='true' />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ── FEATURED DISHES ── */}
      <FeaturedDishes />

      {/* ── WHY CHOOSE US ── */}
      <WhyChooseUs />

      {/* ── GALLERY ── */}
      <Gallery />

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── RESERVATION CTA ── */}
      <ReservationCTA />

    </main>
  );
}