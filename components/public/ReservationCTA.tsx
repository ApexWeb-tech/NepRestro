'use client';

import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  CalendarCheck,
  CheckCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  viewport,
} from '@/lib/animations';

const restaurantInfo = [
  {
    id: 1,
    title: 'Visit Us',
    value: 'New Road, Kathmandu, Nepal',
    icon: MapPin,
    multiline: false,
  },
  {
    id: 2,
    title: 'Call Us',
    value: '+977 9800000000',
    icon: Phone,
    multiline: false,
  },
  {
    id: 3,
    title: 'Opening Hours',
    value: 'Sun – Fri\n10:00 AM – 10:00 PM\n\nSaturday\n11:00 AM – 11:00 PM',
    icon: Clock,
    multiline: true,
  },
];

const trustBadges = [
  'Instant Confirmation',
  'Easy Online Booking',
  'No Booking Fee',
];

export default function ReservationCTA() {
  return (
    <section
      className='relative overflow-hidden py-24'
      style={{
        background: 'linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 100%)',
      }}
    >
      <div
        className='absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl'
        style={{ background: 'rgba(249,115,22,0.12)' }}
      />
      <div
        className='absolute -bottom-20 -right-20 h-72 w-72 rounded-full blur-3xl'
        style={{ background: 'rgba(245,158,11,0.10)' }}
      />

      <div className='relative z-10 mx-auto max-w-7xl px-6'>

        {/* ── Section Header ── */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
          className='mb-16 text-center'
        >
          <motion.span
            variants={fadeInDown}
            className='inline-block rounded-full px-4 py-2 text-sm font-semibold'
            style={{
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-secondary)',
            }}
          >
            Reserve Your Table
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl'
          >
            Reserve Your Table for an Unforgettable Dining Experience
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className='body-font mx-auto mt-6 max-w-3xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
          >
            Whether you're planning a family dinner, a celebration, or a casual meal
            with friends, we're ready to welcome you with authentic Nepali cuisine,
            exceptional service, and a memorable dining experience.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className='body-font mt-4 text-sm font-medium'
            style={{ color: 'var(--color-secondary)' }}
          >
            Quick • Easy • Instant Confirmation
          </motion.p>
        </motion.div>

        {/* ── Two Column Layout ── */}
        <div className='grid gap-12 lg:grid-cols-2'>

          {/* Left Column */}
          <motion.div
            variants={fadeInLeft}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='rounded-2xl border p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl sm:p-8'
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.03)',
            }}
          >
            <h3 className='heading-font text-2xl font-bold text-white'>
              Visit NepRestro
            </h3>
            <p className='body-font mt-3 text-gray-400'>
              We'd love to welcome you. Here's everything you need before your visit.
            </p>

            <div className='mt-10 space-y-8'>
              {restaurantInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className='flex items-start gap-4'>
                    <div
                      className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12'
                      style={{ backgroundColor: 'rgba(249,115,22,0.12)' }}
                    >
                      <Icon size={20} style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <div>
                      <h4 className='heading-font text-lg font-semibold text-white'>
                        {item.title}
                      </h4>
                      <p className={`body-font mt-1 text-gray-400 ${item.multiline ? 'whitespace-pre-line' : ''}`}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className='mt-10 flex items-start gap-3 rounded-xl p-5'
              style={{ backgroundColor: 'rgba(34,197,94,0.12)' }}
            >
              <CalendarCheck
                size={18}
                className='mt-0.5 flex-shrink-0'
                style={{ color: 'var(--color-success)' }}
              />
              <p
                className='body-font text-sm font-medium'
                style={{ color: 'var(--color-success)' }}
              >
                Walk-ins are welcome, but we recommend reserving your table in advance
                for weekends and special occasions.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={fadeInRight}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='rounded-2xl border p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl sm:p-8'
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.03)',
            }}
          >
            <h3 className='heading-font text-2xl font-bold text-white'>
              Ready for a Great Meal?
            </h3>

            <p className='body-font mt-4 leading-8 text-gray-400'>
              Reserve your favorite table in less than a minute and enjoy authentic
              Nepali hospitality with your family and friends.
            </p>

            <div className='mt-8'>
              <Link
                href='/reservations'
                aria-label='Reserve a table at NepRestro'
                className='body-font block w-full rounded-full px-6 py-3 text-center font-semibold text-white transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:py-4'
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Reserve a Table
              </Link>

              <Link
                href='/menu'
                aria-label='View our menu'
                className='body-font mt-4 block w-full rounded-full border px-6 py-3 text-center font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:py-4'
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-primary)',
                }}
              >
                View Menu
              </Link>
            </div>

            <hr className='my-8' style={{ borderColor: 'var(--color-border)' }} />

            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='visible'
              viewport={viewport}
              className='space-y-4'
            >
              {trustBadges.map((badge) => (
                <motion.p
                  key={badge}
                  variants={staggerItem}
                  className='body-font flex items-center gap-3 text-sm sm:text-base'
                  style={{ color: 'var(--color-success)' }}
                >
                  <CheckCircle size={16} style={{ color: 'var(--color-success)' }} />
                  {badge}
                </motion.p>
              ))}
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}