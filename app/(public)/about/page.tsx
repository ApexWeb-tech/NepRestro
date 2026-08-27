'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  UtensilsCrossed,
  Clock3,
  Trophy,
  Medal,
  BadgeCheck,
  CalendarDays,
  Leaf,
  ChefHat,
  Heart,
  Star,
} from 'lucide-react';
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  viewport,
} from '@/lib/animations';

const features = [
  {
    id: 1,
    icon: UtensilsCrossed,
    title: 'Authentic Recipes',
    description: 'Traditional Nepali recipes prepared with techniques passed down through generations.',
  },
  {
    id: 2,
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'Every dish uses fresh, locally sourced vegetables, premium meats, and quality spices.',
  },
  {
    id: 3,
    icon: Heart,
    title: 'Warm Hospitality',
    description: 'Our friendly team ensures every guest feels welcomed, comfortable, and truly valued.',
  },
  {
    id: 4,
    icon: ChefHat,
    title: 'Expert Chefs',
    description: 'Our experienced chefs bring years of culinary skill and genuine passion to every plate.',
  },
];

const chefs = [
  {
    id: 1,
    name: 'Chef Ram Bahadur',
    role: 'Head Chef',
    bio: 'With over 15 years of experience, Chef Ram specializes in authentic Nepali cuisine and traditional Himalayan flavors.',
    image: 'https://images.unsplash.com/photo-1583394293214-0d2b3a4f3a47?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Chef Maya Gurung',
    role: 'Pastry Chef',
    bio: 'Expert in traditional Nepali desserts and modern pastry creations crafted with local ingredients.',
    image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Chef Suman Thapa',
    role: 'Sous Chef',
    bio: 'Focused on maintaining exceptional quality and consistency across every dish served to our guests.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop',
  },
];

const statistics = [
  { id: 1, icon: Clock3, number: '15+', title: 'Years of Experience' },
  { id: 2, icon: UtensilsCrossed, number: '25+', title: 'Signature Dishes' },
  { id: 3, icon: Users, number: '10K+', title: 'Happy Customers' },
  { id: 4, icon: Star, number: '4.9', title: 'Average Rating' },
];

const awards = [
  {
    id: 1,
    icon: Trophy,
    title: 'Best Nepali Restaurant',
    year: '2024',
    description: 'Recognized for preserving authentic Nepali flavors and delivering exceptional dining experiences.',
  },
  {
    id: 2,
    icon: BadgeCheck,
    title: 'Excellence in Hospitality',
    year: '2023',
    description: 'Awarded for outstanding customer service, warm hospitality, and community engagement.',
  },
  {
    id: 3,
    icon: Medal,
    title: "Chef's Choice Award",
    year: '2022',
    description: 'Honoring our dedication to traditional recipes crafted with premium, locally sourced ingredients.',
  },
];

export default function AboutPage() {
  return (
    <main className='bg-[#111111] text-white'>

      {/* ── About Hero ── */}
      <section
        className='relative overflow-hidden py-28 lg:py-36'
        style={{
          background: 'linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(24,32,50,1) 50%, rgba(15,23,42,1) 100%)',
        }}
      >
        <div
          className='absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl'
          style={{ background: 'rgba(249,115,22,0.10)' }}
        />
        <div
          className='absolute -bottom-20 -right-20 h-72 w-72 rounded-full blur-3xl'
          style={{ background: 'rgba(245,158,11,0.08)' }}
        />

        <div className='relative z-10 mx-auto max-w-7xl px-6'>
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            animate='visible'
            className='mx-auto max-w-4xl text-center'
          >
            <motion.span
              variants={fadeInDown}
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              About NepRestro
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className='heading-font mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl'
            >
              A Taste of Nepal,{' '}
              <span style={{ color: 'var(--color-primary)' }}>
                A Story Worth Sharing
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
            >
              Authentic flavors, traditional recipes, and warm Nepali hospitality —
              discover the story behind every dish we serve.
            </motion.p>
          </motion.div>
        </div>

        <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111111] to-transparent' />
      </section>

      {/* ── Our Story ── */}
      <section className='bg-[#111111] py-24'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid items-center gap-16 lg:grid-cols-2'>

            <motion.div
              variants={fadeInLeft}
              initial='hidden'
              whileInView='visible'
              viewport={viewport}
              className='relative overflow-hidden rounded-3xl'
            >
              <Image
                src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop'
                alt='NepRestro warm restaurant dining atmosphere'
                width={700}
                height={500}
                className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='visible'
              viewport={viewport}
            >
              <motion.span
                variants={fadeInDown}
                className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
                style={{
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-secondary)',
                }}
              >
                Our Story
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'
              >
                From Nepal's Kitchens to Your Table
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className='body-font mt-6 max-w-2xl leading-8 text-gray-400'
              >
                NepRestro was born from a simple dream — to share the authentic
                flavors of Nepal with everyone who appreciates fresh ingredients,
                traditional recipes, and heartfelt hospitality.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className='body-font mt-5 max-w-2xl leading-8 text-gray-400'
              >
                Inspired by family recipes passed down through generations, our
                chefs prepare every dish with care — combining tradition with modern
                presentation while preserving the true taste of Nepali cuisine.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className='body-font mt-5 max-w-2xl leading-8 text-gray-400'
              >
                Today, NepRestro has become a welcoming home for families, friends,
                and travelers seeking memorable dining experiences and food made
                with genuine passion.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className='mt-8 rounded-2xl border-l-4 p-5'
                style={{
                  borderColor: 'var(--color-primary)',
                  backgroundColor: 'rgba(249,115,22,0.06)',
                }}
              >
                <p className='body-font italic text-gray-300'>
                  "Every dish tells a story, and every guest becomes part of our family."
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className='bg-[#0d0d0d] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='mb-16 text-center'
          >
            <motion.span
              variants={fadeInDown}
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Our Purpose
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'
            >
              Guided by Passion, Driven by Tradition
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
            >
              Everything we do is rooted in our commitment to authentic Nepali
              cuisine, exceptional hospitality, and meaningful guest experiences.
            </motion.p>
          </motion.div>

          <div className='grid gap-8 lg:grid-cols-2'>

            <motion.div
              variants={fadeInLeft}
              initial='hidden'
              whileInView='visible'
              viewport={viewport}
              className='group rounded-3xl border p-8 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div
                className='mb-6 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'
                style={{
                  backgroundColor: 'rgba(249,115,22,0.12)',
                  color: 'var(--color-primary)',
                }}
              >
                <UtensilsCrossed size={28} aria-hidden='true' />
              </div>
              <h3 className='heading-font text-2xl font-bold text-white'>
                Our Mission
              </h3>
              <hr className='my-5' style={{ borderColor: 'var(--color-border)' }} />
              <p className='body-font max-w-lg leading-8 text-gray-400'>
                To preserve the rich culinary traditions of Nepal while delivering
                outstanding hospitality — ensuring every guest enjoys authentic
                flavors, quality ingredients, and an experience worth returning for.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial='hidden'
              whileInView='visible'
              viewport={viewport}
              className='group rounded-3xl border p-8 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div
                className='mb-6 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'
                style={{
                  backgroundColor: 'rgba(249,115,22,0.12)',
                  color: 'var(--color-primary)',
                }}
              >
                <Star size={28} aria-hidden='true' />
              </div>
              <h3 className='heading-font text-2xl font-bold text-white'>
                Our Vision
              </h3>
              <hr className='my-5' style={{ borderColor: 'var(--color-border)' }} />
              <p className='body-font max-w-lg leading-8 text-gray-400'>
                To become the most loved destination for authentic Nepali cuisine,
                where tradition meets modern hospitality and every visitor leaves with
                unforgettable memories and a reason to return.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Why Choose NepRestro ── */}
      <section className='bg-[#111111] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='mb-16 text-center'
          >
            <motion.span
              variants={fadeInDown}
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'
            >
              Experience the True Taste of Nepal
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
            >
              Every visit to NepRestro is built on authentic flavors, exceptional
              service, and a genuine commitment to memorable dining.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  variants={staggerItem}
                  className='group flex flex-col rounded-2xl border p-8 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  <div
                    className='mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'
                    style={{
                      backgroundColor: 'rgba(249,115,22,0.12)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon size={26} aria-hidden='true' />
                  </div>
                  <h3 className='heading-font text-lg font-bold text-white'>
                    {feature.title}
                  </h3>
                  <p className='body-font mt-3 flex-grow text-sm leading-7 text-gray-400'>
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ── Meet Our Chefs ── */}
      <section className='bg-[#0d0d0d] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='mb-16 text-center'
          >
            <motion.span
              variants={fadeInDown}
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Our Team
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'
            >
              Meet the Passion Behind Every Plate
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
            >
              Our talented chefs combine traditional Nepali recipes with years of
              culinary experience to deliver unforgettable dining experiences.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
          >
            {chefs.map((chef) => (
              <motion.div
                key={chef.id}
                variants={staggerItem}
                className='group overflow-hidden rounded-2xl border shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className='relative h-72 overflow-hidden'>
                  <Image
                    src={chef.image}
                    alt={`${chef.name} — ${chef.role} at NepRestro`}
                    fill
                    className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
                    quality={80}
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='heading-font text-xl font-bold text-white'>
                    {chef.name}
                  </h3>
                  <p
                    className='body-font mt-1 text-sm font-semibold'
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {chef.role}
                  </p>
                  <p className='body-font mt-4 text-sm leading-7 text-gray-400'>
                    {chef.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Restaurant Statistics ── */}
      <section className='bg-[#111111] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='mb-16 text-center'
          >
            <motion.span
              variants={fadeInDown}
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Our Milestones
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'
            >
              NepRestro in Numbers
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
            >
              Every meal served and every guest welcomed has shaped the story of
              NepRestro. Here are a few milestones we're proud of.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
          >
            {statistics.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  variants={staggerItem}
                  className='group flex flex-col items-center rounded-2xl border p-8 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  <div
                    className='mb-5 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'
                    style={{
                      backgroundColor: 'rgba(249,115,22,0.12)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon size={28} aria-hidden='true' />
                  </div>
                  <p
                    className='heading-font text-4xl font-extrabold'
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {stat.number}
                  </p>
                  <p className='body-font mt-2 text-sm text-gray-400'>
                    {stat.title}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ── Awards & Recognition ── */}
      <section className='bg-[#0d0d0d] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='mb-16 text-center'
          >
            <motion.span
              variants={fadeInDown}
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Recognition
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'
            >
              Awards & Recognition
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
            >
              Our commitment to authentic Nepali cuisine and genuine hospitality
              has been recognized by our community and the wider industry.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
          >
            {awards.map((award) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={award.id}
                  variants={staggerItem}
                  className='group rounded-2xl border p-8 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  <div
                    className='mb-5 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'
                    style={{
                      backgroundColor: 'rgba(249,115,22,0.12)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon size={28} aria-hidden='true' />
                  </div>
                  <span
                    className='body-font text-sm font-semibold'
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {award.year}
                  </span>
                  <h3 className='heading-font mt-2 text-xl font-bold text-white'>
                    {award.title}
                  </h3>
                  <p className='body-font mt-3 text-sm leading-7 text-gray-400'>
                    {award.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ── Reservation CTA ── */}
      <section
        className='relative overflow-hidden py-24'
        style={{
          background: 'linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(24,32,50,1) 100%)',
        }}
      >
        <div
          className='absolute -left-16 -top-16 h-64 w-64 rounded-full blur-3xl'
          style={{ background: 'rgba(249,115,22,0.10)' }}
        />
        <div
          className='absolute -bottom-16 -right-16 h-64 w-64 rounded-full blur-3xl'
          style={{ background: 'rgba(245,158,11,0.08)' }}
        />

        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
          className='relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center'
        >
          <motion.span
            variants={fadeInDown}
            className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
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
            Ready to Experience Nepali Hospitality?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className='body-font mt-6 max-w-xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
          >
            Join us for an unforgettable meal. Whether it's a quiet dinner or a
            celebration, our team is ready to welcome you.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className='mt-10 flex flex-col items-center gap-4 sm:flex-row'
          >
            <Link
              href='/reservations'
              aria-label='Reserve a table at NepRestro'
              style={{ backgroundColor: 'var(--color-primary)' }}
              className='body-font inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
            >
              <CalendarDays size={20} aria-hidden='true' />
              Reserve Your Table
            </Link>

            <Link
              href='/menu'
              aria-label='Explore our menu'
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-primary)',
              }}
              className='body-font inline-flex items-center gap-2 rounded-full border px-8 py-4 font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/5 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
            >
              <UtensilsCrossed size={20} aria-hidden='true' />
              Explore Menu
            </Link>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className='body-font mt-6 text-sm text-gray-500'
          >
            Open daily • Fresh ingredients • Easy reservations
          </motion.p>
        </motion.div>
      </section>

    </main>
  );
}