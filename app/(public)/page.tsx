import Image from 'next/image';
import Link from 'next/link';
import { UtensilsCrossed, CalendarDays, ArrowRight } from 'lucide-react';

const featuredDishes = [
  {
    id: 1,
    name: 'Chicken Momo',
    description: 'Steamed Nepali dumplings filled with juicy chicken and traditional spices.',
    price: 'Rs. 250',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Buff Sekuwa',
    description: 'Traditional Nepali grilled buffalo meat marinated with local herbs.',
    price: 'Rs. 450',
    image: 'https://images.pexels.com/photos/37058646/pexels-photo-37058646.jpeg',
  },
  {
    id: 3,
    name: 'Thakali Khana Set',
    description: 'Rice, lentils, vegetables, pickle and curry served in authentic style.',
    price: 'Rs. 550',
    image: 'https://images.pexels.com/photos/36885753/pexels-photo-36885753.jpeg',
  },
];

const features = [
  {
    title: 'Authentic Flavors',
    description: 'Traditional Nepali recipes crafted with premium ingredients and modern finesse.',
  },
  {
    title: 'Warm Service',
    description: 'Friendly hospitality that makes every visit feel like a celebration.',
  },
  {
    title: 'Stylish Setting',
    description: 'A contemporary dining space inspired by Nepalese culture and comfort.',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sagar K.',
    quote: 'The best momo I have had in Kathmandu. Great atmosphere and service.',
  },
  {
    id: 2,
    name: 'Priya R.',
    quote: 'A beautiful restaurant with delicious dishes and a friendly team.',
  },
  {
    id: 3,
    name: 'Anish P.',
    quote: 'The Thakali set was unforgettable. Highly recommended!',
  },
];

export default function HomePage() {
  return (
    <main className='bg-[#111111] text-white'>

      {/* ── HERO ── */}
      <section className='relative flex min-h-[calc(100vh-88px)] items-center overflow-hidden bg-gradient-to-br from-[#1b120d] via-[#111111] to-[#24180f] py-16'>

        {/* Radial glow overlay */}
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.12),transparent_60%)]' />

        {/* Decorative glow #1 — orange, top right, behind image */}
        <div className='absolute top-10 right-10 h-96 w-96 rounded-full bg-orange-500/20 blur-[100px]' />

        {/* Decorative glow #2 — yellow, bottom left */}
        <div className='absolute bottom-0 left-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[100px]' />

        <div className='relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10'>
          <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-2'>

            {/* Left: text */}
            <div>
              <div className='inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-medium tracking-wide text-orange-300 backdrop-blur-sm transition-all duration-300 hover:scale-105'>
                <UtensilsCrossed className='h-4 w-4' />
                <span>Authentic Nepali Cuisine</span>
              </div>

              <div className='max-w-2xl'>
                <h1 className='mt-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl'>
                  Experience{' '}
                  <span className='text-orange-500 transition-colors duration-300 hover:text-orange-400'>
                    Authentic
                  </span>
                  <br />
                  Nepali Cuisine
                </h1>
              </div>

              <div className='max-w-xl'>
                <p className='mt-8 text-base leading-7 text-gray-300 transition-all duration-300 hover:text-gray-200 md:text-lg md:leading-8'>
                  Discover authentic Nepali flavors crafted from fresh, locally sourced ingredients. From traditional family recipes to modern culinary creations, every dish is prepared with passion to create an unforgettable dining experience.
                </p>
              </div>

              {/* Premium CTA Buttons */}
              <div className='mt-10 flex flex-wrap items-center gap-5'>
                <Link
                  href='/reservations'
                  aria-label='Reserve a table'
                  className='group inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 hover:shadow-orange-500/30'
                >
                  <CalendarDays className='h-5 w-5' />
                  Reserve Table
                </Link>
                <Link
                  href='/menu'
                  aria-label='Explore the menu'
                  className='group inline-flex items-center gap-2 rounded-full border border-gray-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-orange-500 hover:bg-orange-500/10'
                >
                  Explore Menu
                  <ArrowRight className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
                </Link>
              </div>
            </div>

            {/* ── Right: PREMIUM hero image ── */}
            <div className='relative flex items-center justify-center py-12 lg:py-0'>

              {/* Glow behind image */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='h-80 w-80 rounded-full bg-orange-500/20 blur-3xl md:h-96 md:w-96' />
              </div>

              {/* Decorative ring */}
              <div className='absolute h-[420px] w-[420px] rounded-full border border-orange-500/20 md:h-[520px] md:w-[520px]' />

              {/* Small floating decorative circles */}
              <div className='absolute top-6 right-6 h-5 w-5 rounded-full bg-orange-400 md:top-10 md:right-10' />
              <div className='absolute bottom-10 left-6 h-3 w-3 rounded-full bg-yellow-400 md:bottom-16 md:left-10' />

              {/* The image itself */}
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
      <section className='relative overflow-hidden bg-[#1a1a1a] px-6 py-20'>
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
            <h2 className='mb-4 text-4xl font-black md:text-5xl'>
              Our{' '}
              <span className='text-orange-400'>BEST FOOD</span>
            </h2>
            <p className='max-w-md text-slate-400 leading-relaxed'>
              From savory momos to hearty Thakali sets — discover the flavors that define our menu and keep our guests coming back.
            </p>
            <div className='mt-8 flex items-center gap-4'>
              <div className='h-px w-16 bg-orange-500/40' />
              <div className='h-px w-8 bg-white/10' />
              <div className='h-px w-4 bg-white/5' />
            </div>
            <Link
              href='/menu'
              className='mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/5'
            >
              Check it out →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className='bg-[#111111] px-6 py-24'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400'>Why Choose Us</p>
            <h2 className='text-4xl font-bold text-white'>A dining experience that feels both familiar and special.</h2>
          </div>

          <div className='grid gap-6 md:grid-cols-3'>
            {features.map((feature) => (
              <div
                key={feature.title}
                className='group rounded-3xl border border-white/5 bg-[#1a1a1a] p-8 transition hover:-translate-y-1 hover:border-orange-500/20 hover:bg-[#1f1f1f]'
              >
                <div className='mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 text-2xl text-orange-400 transition group-hover:bg-orange-500/20'>
                  🍽️
                </div>
                <h3 className='mb-3 text-xl font-semibold text-white'>{feature.title}</h3>
                <p className='leading-relaxed text-slate-400'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED DISHES ── */}
      <section className='bg-[#0d0d0d] px-6 py-24'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400'>Featured Dishes</p>
            <h2 className='text-4xl font-bold text-white'>Taste our most beloved Nepalese dishes.</h2>
            <p className='mt-4 text-slate-400'>From savory momos to hearty Thakali sets.</p>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {featuredDishes.map((dish) => (
              <div key={dish.id} className='group overflow-hidden rounded-3xl bg-[#1a1a1a] border border-white/5 transition hover:border-orange-500/20'>
                <div className='relative h-52 overflow-hidden'>
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className='object-cover transition duration-500 group-hover:scale-105'
                  />
                </div>
                <div className='p-6'>
                  <div className='mb-2 flex items-center justify-between'>
                    <span className='text-sm font-semibold uppercase tracking-wider text-orange-400'>{dish.name}</span>
                    <span className='rounded-full bg-orange-500/15 px-3 py-1 text-xs font-medium text-orange-300'>{dish.price}</span>
                  </div>
                  <p className='text-sm leading-relaxed text-slate-400'>{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className='bg-[#111111] px-6 py-24'>
        <div className='mx-auto max-w-7xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400'>What Guests Say</p>
          <h2 className='mb-12 text-4xl font-bold text-white'>Loved by diners from near and far.</h2>
          <div className='grid gap-6 md:grid-cols-3'>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='rounded-3xl border border-white/5 bg-[#1a1a1a] p-8 text-left transition hover:border-orange-500/10'
              >
                <p className='mb-6 leading-relaxed text-slate-300'>"{testimonial.quote}"</p>
                <div className='font-semibold text-orange-400'>{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className='bg-[#0d0d0d] px-6 py-24'>
        <div className='mx-auto max-w-7xl text-center'>
          <h2 className='text-4xl font-bold text-white'>Ready to taste Nepal?</h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-400'>
            Reserve a table or browse our menu to start planning your perfect meal.
          </p>
          <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link
              href='/reservations'
              className='rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600'
            >
              Book a Table
            </Link>
            <Link
              href='/menu'
              className='rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10'
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}