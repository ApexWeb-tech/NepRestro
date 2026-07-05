import Image from 'next/image';
import Link from 'next/link';
import { UtensilsCrossed, CalendarDays, ArrowRight } from 'lucide-react';
import FeaturedDishes from '@/components/public/FeaturedDishes';
import WhyChooseUs from '@/components/public/WhyChooseUs';
import Gallery from '@/components/public/Gallery';
import Testimonials from '@/components/public/Testimonials';

/*
  ────────────────────────────────────────────
  TYPOGRAPHY GUIDE (Phase 2, Step 5)
  ────────────────────────────────────────────
  Hero Title     → Playfair → text-5xl md:text-6xl lg:text-7xl
  Section Title  → Playfair → text-3xl md:text-4xl lg:text-5xl
  Card Title     → Playfair → text-xl md:text-2xl
  Subtitle/Body  → Inter    → text-base md:text-lg
  Buttons        → Inter    → text-base font-semibold
  Small Text     → Inter    → text-sm
  ────────────────────────────────────────────

  COLOR GUIDE (Phase 3, Step 4)
  ────────────────────────────────────────────
  Primary Button   → var(--color-primary)
  Button Hover     → var(--color-primary-hover)
  Ratings          → var(--color-secondary)
  Background       → var(--color-background)
  Cards            → var(--color-surface)
  Heading          → var(--color-heading)
  Paragraph        → var(--color-text)
  Border           → var(--color-border)
  Success          → var(--color-success)
  ────────────────────────────────────────────

  SPACING GUIDE (Phase 4, Step 1)
  ────────────────────────────────────────────
  Badge → Heading       mt-6
  Heading → Description mt-8
  Description → Buttons mt-10
  Section padding       py-24
  Container             mx-auto max-w-7xl px-6
  Button gap            gap-5
  Card grid gap         gap-8
  ────────────────────────────────────────────
*/

export default function HomePage() {
  return (
    <main className='bg-[#111111] text-white'>

      {/* ── HERO ── */}
      <section
        style={{ backgroundColor: 'var(--color-background)' }}
        className='relative flex min-h-[calc(100vh-88px)] items-center overflow-hidden bg-gradient-to-br from-[#1b120d] via-[#111111] to-[#24180f] py-16'
      >
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.12),transparent_60%)]' />
        <div className='absolute top-10 right-10 h-96 w-96 rounded-full bg-orange-500/20 blur-[100px]' />
        <div className='absolute bottom-0 left-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[100px]' />

        <div className='relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10'>
          <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-2'>

            <div>
              <div className='body-font inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-medium tracking-wide text-orange-300 backdrop-blur-sm transition-all duration-300 hover:scale-105'>
                <UtensilsCrossed className='h-4 w-4' />
                <span>Authentic Nepali Cuisine</span>
              </div>

              <div className='max-w-2xl'>
                <h1 className='heading-font mt-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl'>
                  Experience{' '}
                  <span
                    style={{ color: 'var(--color-primary)' }}
                    className='transition-colors duration-300 hover:text-orange-400'
                  >
                    Authentic
                  </span>
                  <br />
                  Nepali Cuisine
                </h1>
              </div>

              <div className='max-w-xl'>
                <p
                  style={{ color: 'var(--color-text)' }}
                  className='body-font mt-8 text-base leading-7 transition-all duration-300 hover:text-gray-200 md:text-lg md:leading-8'
                >
                  Discover authentic Nepali flavors crafted from fresh, locally sourced ingredients. From traditional family recipes to modern culinary creations, every dish is prepared with passion to create an unforgettable dining experience.
                </p>
              </div>

              <div className='mt-10 flex flex-wrap items-center gap-5'>
                <Link
                  href='/reservations'
                  aria-label='Reserve a table'
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  className='body-font group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 hover:shadow-orange-500/30 md:text-lg'
                >
                  <CalendarDays className='h-5 w-5' />
                  Reserve Table
                </Link>
                <Link
                  href='/menu'
                  aria-label='Explore the menu'
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-heading)',
                  }}
                  className='body-font group inline-flex items-center gap-2 rounded-full border px-8 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-orange-500 hover:bg-orange-500/10 md:text-lg'
                >
                  Explore Menu
                  <ArrowRight className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
                </Link>
              </div>
            </div>

            <div className='relative flex items-center justify-center py-12 lg:py-0'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='h-80 w-80 rounded-full bg-orange-500/20 blur-3xl md:h-96 md:w-96' />
              </div>
              <div className='absolute h-[420px] w-[420px] rounded-full border border-orange-500/20 md:h-[520px] md:w-[520px]' />
              <div className='absolute top-6 right-6 h-5 w-5 rounded-full bg-orange-400 md:top-10 md:right-10' />
              <div className='absolute bottom-10 left-6 h-3 w-3 rounded-full bg-yellow-400 md:bottom-16 md:left-10' />
              <div className='relative z-10 h-[340px] w-[340px] animate-float transition-all duration-500 hover:scale-105 md:h-[460px] md:w-[460px]'>
                <Image
                  src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'
                  alt='Best Nepali food'
                  fill
                  className='rounded-full object-cover shadow-2xl drop-shadow-[0_20px_40px_rgba(249,115,22,0.35)] ring-4 ring-orange-500/20'
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111111] to-transparent' />
      </section>

      {/* ── OUR BEST FOOD ── */}
      <section className='relative overflow-hidden bg-[#1a1a1a] px-6 py-24'>
        <div className='mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center'>
          <div className='relative h-72 w-72 flex-shrink-0 md:h-80 md:w-80'>
            <Image
              src='https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop'
              alt='Our best food'
              fill
              className='rounded-3xl object-cover shadow-2xl'
            />
          </div>
          <div className='flex-1 md:pl-12'>
            <h2 className='heading-font text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
              Our{' '}
              <span style={{ color: 'var(--color-primary)' }}>BEST FOOD</span>
            </h2>
            <p className='body-font mt-4 max-w-md text-base leading-7 text-slate-400 md:text-lg'>
              From savory momos to hearty Thakali sets — discover the flavors that define our menu and keep our guests coming back.
            </p>
            <div className='mt-8 flex items-center gap-4'>
              <div className='h-px w-16 bg-orange-500/40' />
              <div className='h-px w-8 bg-white/10' />
              <div className='h-px w-4 bg-white/5' />
            </div>
            <Link
              href='/menu'
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-heading)',
              }}
              className='body-font mt-6 inline-flex items-center gap-2 rounded-full border px-8 py-3 text-base font-semibold transition hover:bg-white/5'
            >
              Check it out →
            </Link>
          </div>
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

      {/* ── CTA ── */}
      <section className='bg-[#0d0d0d] px-6 py-24'>
        <div className='mx-auto max-w-7xl text-center'>
          <h2 className='heading-font text-3xl font-bold text-white sm:text-4xl lg:text-5xl'>Ready to taste Nepal?</h2>
          <p className='body-font mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 md:text-lg'>
            Reserve a table or browse our menu to start planning your perfect meal.
          </p>
          <div className='mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row'>
            <Link
              href='/reservations'
              style={{ backgroundColor: 'var(--color-primary)' }}
              className='body-font rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 md:text-lg'
            >
              Book a Table
            </Link>
            <Link
              href='/menu'
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-heading)',
              }}
              className='body-font rounded-full border px-8 py-4 text-base font-semibold transition hover:bg-white/10 md:text-lg'
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}