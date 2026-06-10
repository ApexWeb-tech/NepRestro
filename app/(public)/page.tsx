import Image from 'next/image';
import Link from 'next/link';
import HomeAuth from '../../components/auth/HomeAuth';

const featuredDishes = [
  {
    id: 1,
    name: 'Chicken Momo',
    description: 'Steamed Nepali dumplings filled with juicy chicken and traditional spices.',
    price: 'Rs. 250',
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d29a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Buff Sekuwa',
    description: 'Traditional Nepali grilled buffalo meat marinated with local herbs.',
    price: 'Rs. 450',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Thakali Khana Set',
    description: 'Rice, lentils, vegetables, pickle and curry served in authentic style.',
    price: 'Rs. 550',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop',
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
    <main className='bg-slate-50 text-slate-900'>
      <section className='relative min-h-[90vh] overflow-hidden'>
        <Image
          src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop'
          alt='Restaurant hero'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/30 to-slate-950/80' />

        <div className='relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-24 text-center text-white'>
          <div className='mx-auto mb-8 inline-flex rounded-full bg-white/10 px-5 py-3 text-sm font-medium uppercase tracking-[0.35em] text-orange-200 ring-1 ring-white/15'>
            Authentic Nepali dining
          </div>

          <h1 className='mx-auto max-w-4xl text-5xl font-black leading-tight md:text-7xl'>Bold Nepalese flavors served in a warm, modern setting.</h1>

          <p className='mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-200'>Discover handcrafted dishes, fresh ingredients, and unforgettable hospitality at Restro.</p>

          <div className='mx-auto mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link href='/menu' className='rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600'>View Menu</Link>
            <Link href='/reservations' className='rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950'>Reserve a Table</Link>
          </div>
          <div className='mt-6'>
            <HomeAuth />
          </div>
        </div>
      </section>

      <section className='px-6 py-24'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500'>Why Choose Us</p>
            <h2 className='text-4xl font-bold text-slate-950'>A dining experience that feels both familiar and special.</h2>
          </div>

          <div className='grid gap-6 md:grid-cols-3'>
            {features.map((feature) => (
              <div key={feature.title} className='group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-2xl'>
                <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-3xl text-orange-500 transition group-hover:bg-orange-100'>🍽️</div>
                <h3 className='mb-3 text-2xl font-semibold text-slate-900'>{feature.title}</h3>
                <p className='leading-relaxed text-slate-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-slate-950 px-6 py-24 text-white'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 grid gap-10 lg:grid-cols-2 lg:items-center'>
            <div>
              <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300'>Featured Dishes</p>
              <h2 className='text-4xl font-bold'>Taste our most beloved Nepalese dishes.</h2>
              <p className='mt-6 max-w-2xl leading-relaxed text-slate-300'>From savory momos to hearty Thakali sets, discover the flavors that define our menu.</p>
            </div>
            <div className='grid gap-6 sm:grid-cols-2'>
              {featuredDishes.map((dish) => (
                <div key={dish.id} className='overflow-hidden rounded-[2rem] bg-slate-900 shadow-xl'>
                  <div className='relative h-48'>
                    <Image src={dish.image} alt={dish.name} fill className='object-cover transition duration-500 hover:scale-105' />
                  </div>
                  <div className='p-6'>
                    <div className='mb-2 flex items-center justify-between text-sm uppercase tracking-[0.25em] text-orange-300'>
                      <span>{dish.name}</span>
                      <span className='rounded-full bg-orange-500/15 px-3 py-1 text-orange-200'>{dish.price}</span>
                    </div>
                    <p className='text-sm leading-relaxed text-slate-300'>{dish.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 py-24'>
        <div className='mx-auto max-w-7xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500'>What Guests Say</p>
          <h2 className='mb-12 text-4xl font-bold text-slate-950'>Loved by diners from near and far.</h2>
          <div className='grid gap-6 md:grid-cols-3'>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft'>
                <p className='mb-6 text-slate-700'>“{testimonial.quote}”</p>
                <div className='font-semibold text-slate-900'>{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 px-6 py-24 text-white'>
        <div className='mx-auto max-w-7xl text-center'>
          <h2 className='text-4xl font-bold'>Ready to taste Nepal?</h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-orange-100'>Reserve a table or browse our menu to start planning your perfect meal.</p>
          <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link href='/reservations' className='rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800'>Book a Table</Link>
            <Link href='/menu' className='rounded-full border border-white/50 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950'>Explore Menu</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
