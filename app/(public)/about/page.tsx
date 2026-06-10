import Image from 'next/image';
import Link from 'next/link';

const story = [
  'Restro was founded to bring authentic Nepali cuisine to every table with warm hospitality and bold flavor.',
  'We combine premium ingredients, family recipes, and creative presentation to make each meal memorable.',
  'Our goal is to create a welcoming restaurant where friends, families, and travelers can enjoy delicious food together.',
];

const values = [
  {
    title: 'Real Recipes',
    description: 'Classic Nepali dishes cooked with fresh ingredients, balanced spice, and true regional taste.',
  },
  {
    title: 'Comfort & Style',
    description: 'A modern dining room inspired by Nepali heritage, perfect for casual dinners and special occasions.',
  },
  {
    title: 'Friendly Service',
    description: 'Attentive staff delivering a warm welcome and personalized dining experience to every guest.',
  },
];

export default function AboutPage() {
  return (
    <main className='bg-slate-50 text-slate-900'>
      <section className='relative min-h-[55vh] overflow-hidden'>
        <Image
          src='https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop'
          alt='Restaurant interior'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-slate-950/70' />

        <div className='relative z-10 mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 text-center text-white'>
          <p className='mb-4 inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-orange-100'>Our Story</p>
          <h1 className='text-5xl font-black leading-tight md:text-6xl'>Nepali flavors crafted with heart, hospitality, and unforgettable care.</h1>
          <p className='mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-200'>At Restro, every dish is inspired by tradition and served with thoughtful hospitality, inviting you to savor Nepal in every bite.</p>
          <div className='mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link href='/menu' className='rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600'>Explore the Menu</Link>
            <Link href='/reservations' className='rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950'>Reserve a Table</Link>
          </div>
        </div>
      </section>

      <section className='px-6 py-24'>
        <div className='mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
          <div>
            <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500'>About Restro</p>
            <h2 className='mb-6 text-4xl font-bold text-slate-950'>An inviting restaurant with a modern take on Nepali tradition.</h2>
            {story.map((paragraph, index) => (
              <p key={index} className='mb-6 max-w-xl text-lg leading-relaxed text-slate-600'>{paragraph}</p>
            ))}
          </div>

          <div className='space-y-6 rounded-[2rem] bg-white p-6 shadow-xl'>
            <div className='overflow-hidden rounded-[1.75rem]'>
              <Image
                src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop'
                alt='Dining experience'
                width={1200}
                height={800}
                className='h-full w-full object-cover'
              />
            </div>
            <div className='rounded-[1.5rem] bg-slate-950 p-8 text-white'>
              <p className='text-sm uppercase tracking-[0.35em] text-orange-300'>Our promise</p>
              <h3 className='mt-4 text-3xl font-bold'>Fresh ingredients, joyful hospitality, and memorable meals.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-slate-950 px-6 py-24 text-white'>
        <div className='mx-auto max-w-7xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300'>What We Offer</p>
          <h2 className='mb-12 text-4xl font-bold'>A modern restaurant grounded in Nepali culinary tradition.</h2>
          <div className='grid gap-6 md:grid-cols-3'>
            {values.map((value) => (
              <div key={value.title} className='rounded-[2rem] border border-white/10 bg-white/5 p-8'>
                <h3 className='mb-4 text-2xl font-semibold text-white'>{value.title}</h3>
                <p className='leading-relaxed text-slate-300'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='px-6 py-24'>
        <div className='mx-auto max-w-4xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-500'>Join Us</p>
          <h2 className='mb-6 text-4xl font-bold text-slate-950'>Ready for a memorable meal?</h2>
          <p className='mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600'>Book a table or explore our menu to experience the flavors and warmth of Restro.</p>
          <Link href='/reservations' className='inline-flex rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600'>Reserve Now</Link>
        </div>
      </section>
    </main>
  );
}
