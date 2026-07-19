import Image from 'next/image';
import {
  Award,
  Users,
  UtensilsCrossed,
  Clock3,
  Trophy,
  Medal,
  BadgeCheck,
} from 'lucide-react';

const features = [
  {
    id: 1,
    icon: '🥬',
    title: 'Fresh Ingredients',
    description: 'We prepare every dish using fresh vegetables, premium meats, and locally sourced ingredients.',
  },
  {
    id: 2,
    icon: '🍲',
    title: 'Authentic Recipes',
    description: 'Traditional Nepali recipes prepared with techniques passed down through generations.',
  },
  {
    id: 3,
    icon: '🤝',
    title: 'Warm Hospitality',
    description: 'Our friendly team ensures every guest feels welcomed, comfortable, and valued.',
  },
  {
    id: 4,
    icon: '⭐',
    title: 'Premium Experience',
    description: 'A cozy atmosphere, attentive service, and beautifully presented dishes make every visit memorable.',
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
    bio: 'Focused on maintaining exceptional quality and consistency while supporting every dish served to our guests.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop',
  },
];

const statistics = [
  {
    id: 1,
    icon: Clock3,
    number: '15+',
    title: 'Years of Experience',
  },
  {
    id: 2,
    icon: UtensilsCrossed,
    number: '25+',
    title: 'Signature Dishes',
  },
  {
    id: 3,
    icon: Users,
    number: '10K+',
    title: 'Happy Customers',
  },
  {
    id: 4,
    icon: Award,
    number: '12+',
    title: 'Awards Won',
  },
];

const awards = [
  {
    id: 1,
    icon: Trophy,
    title: 'Best Nepali Restaurant',
    year: '2024',
    description: 'Awarded for preserving authentic Nepali flavors while delivering exceptional dining experiences.',
  },
  {
    id: 2,
    icon: BadgeCheck,
    title: 'Excellence in Hospitality',
    year: '2023',
    description: 'Recognized for outstanding customer service and warm hospitality.',
  },
  {
    id: 3,
    icon: Medal,
    title: "Chef's Choice Award",
    year: '2022',
    description: 'Honoring our dedication to traditional recipes crafted with premium ingredients.',
  },
];

export default function AboutPage() {
  return (
    <main className='bg-[#111111] text-white'>

      {/* ── About Hero ── */}
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
          <div className='mx-auto max-w-4xl text-center'>

            <span
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              About NepRestro
            </span>

            <h1 className='heading-font mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl'>
              Discover the Story Behind Every Delicious Dish
            </h1>

            <p className='body-font mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg'>
              At NepRestro, every meal tells a story. Inspired by traditional Nepali
              recipes and warm hospitality, we are passionate about creating memorable
              dining experiences for every guest who walks through our doors.
            </p>

          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className='bg-[#111111] py-24'>
        <div className='mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2'>

          <div className='relative overflow-hidden rounded-3xl'>
            <Image
              src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop'
              alt='NepRestro Restaurant interior'
              width={700}
              height={700}
              className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
            />
          </div>

          <div className='flex flex-col justify-center'>

            <span
              className='body-font inline-block w-fit rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Our Story
            </span>

            <h2 className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'>
              Bringing the Taste of Nepal to Every Table
            </h2>

            <p className='body-font mt-6 leading-8 text-gray-400'>
              NepRestro began with a simple dream — to share the authentic flavors of Nepal
              with everyone who appreciates fresh ingredients, traditional recipes, and
              heartfelt hospitality.
            </p>

            <p className='body-font mt-5 leading-8 text-gray-400'>
              Inspired by family recipes passed down through generations, our chefs prepare
              every dish with care, combining tradition with modern presentation while
              preserving the true taste of Nepali cuisine.
            </p>

            <p className='body-font mt-5 leading-8 text-gray-400'>
              Today, NepRestro has become a welcoming place for families, friends, and
              travelers seeking memorable dining experiences, warm service, and food made
              with passion.
            </p>

            <div
              className='mt-8 rounded-2xl border-l-4 p-5'
              style={{
                borderColor: 'var(--color-primary)',
                backgroundColor: 'rgba(249,115,22,0.08)',
              }}
            >
              <p className='body-font italic text-gray-300'>
                "Every dish tells a story, and every guest becomes part of our family."
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className='bg-[#0d0d0d] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <div className='mb-16 text-center'>
            <span
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Our Purpose
            </span>

            <h2 className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'>
              Guided by Passion, Driven by Tradition
            </h2>

            <p className='body-font mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg'>
              Everything we do is inspired by our commitment to authentic Nepali cuisine,
              exceptional hospitality, and creating meaningful experiences for every guest.
            </p>
          </div>

          <div className='grid gap-8 lg:grid-cols-2'>

            <div
              className='group rounded-3xl border p-8 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div
                className='mb-6 flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-transform duration-300 group-hover:scale-110'
                style={{ backgroundColor: 'rgba(249,115,22,0.12)' }}
              >
                🎯
              </div>
              <h3 className='heading-font text-2xl font-bold text-white'>Our Mission</h3>
              <hr className='my-6' style={{ borderColor: 'var(--color-border)' }} />
              <p className='body-font leading-8 text-gray-400'>
                To preserve the rich culinary traditions of Nepal while delivering
                outstanding hospitality, ensuring every guest enjoys authentic flavors,
                quality ingredients, and memorable dining experiences.
              </p>
            </div>

            <div
              className='group rounded-3xl border p-8 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div
                className='mb-6 flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-transform duration-300 group-hover:scale-110'
                style={{ backgroundColor: 'rgba(249,115,22,0.12)' }}
              >
                🌏
              </div>
              <h3 className='heading-font text-2xl font-bold text-white'>Our Vision</h3>
              <hr className='my-6' style={{ borderColor: 'var(--color-border)' }} />
              <p className='body-font leading-8 text-gray-400'>
                To become the leading destination for authentic Nepali cuisine, where
                tradition meets innovation and every visitor leaves with unforgettable
                memories and a desire to return.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── Why Choose NepRestro ── */}
      <section className='bg-[#111111] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <div className='mb-16 text-center'>
            <span
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Why Choose Us
            </span>

            <h2 className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'>
              Experience the True Taste of Nepal
            </h2>

            <p className='body-font mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg'>
              Every visit to NepRestro is built on authentic flavors, exceptional service,
              and a commitment to providing an unforgettable dining experience.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {features.map((feature) => (
              <div
                key={feature.id}
                className='group flex h-full flex-col rounded-3xl border p-8 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div
                  className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl transition-transform duration-300 group-hover:scale-110'
                  style={{ backgroundColor: 'rgba(249,115,22,0.12)' }}
                >
                  {feature.icon}
                </div>
                <h3 className='heading-font text-xl font-bold text-white'>
                  {feature.title}
                </h3>
                <p className='body-font mt-4 flex-grow leading-7 text-gray-400'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Meet Our Chefs ── */}
      <section className='bg-[#0d0d0d] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <div className='mb-16 text-center'>
            <span
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Our Team
            </span>

            <h2 className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'>
              Meet the Passion Behind Every Plate
            </h2>

            <p className='body-font mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg'>
              Our talented chefs combine traditional Nepali recipes with years of culinary
              experience to create unforgettable dining experiences.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {chefs.map((chef) => (
              <div
                key={chef.id}
                className='group overflow-hidden rounded-3xl border shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className='relative h-80 overflow-hidden'>
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
                    quality={90}
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
                </div>

                <div className='flex h-full flex-col p-8'>
                  <h3 className='heading-font text-2xl font-bold text-white'>
                    {chef.name}
                  </h3>
                  <p
                    className='body-font mt-2 font-semibold'
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {chef.role}
                  </p>
                  <p className='body-font mt-5 flex-grow leading-7 text-gray-400'>
                    {chef.bio}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Restaurant Statistics ── */}
      <section className='bg-[#111111] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <div className='mb-16 text-center'>
            <span
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Our Achievements
            </span>

            <h2 className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'>
              Our Journey in Numbers
            </h2>

            <p className='body-font mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg'>
              Every meal served and every guest welcomed has helped shape the story of
              NepRestro. Here are a few milestones we're proud of.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {statistics.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className='group flex flex-col items-center rounded-3xl border p-8 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  <div
                    className='mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'
                    style={{
                      backgroundColor: 'rgba(249,115,22,0.12)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon size={30} />
                  </div>

                  <h3
                    className='heading-font text-4xl font-bold'
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {stat.number}
                  </h3>

                  <p className='body-font mt-3 text-gray-400'>
                    {stat.title}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Awards & Recognition ── */}
      <section className='bg-[#0d0d0d] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          {/* Section Header */}
          <div className='mb-16 text-center'>
            <span
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Recognition
            </span>

            <h2 className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'>
              Awards & Recognition
            </h2>

            <p className='body-font mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg'>
              Over the years, our commitment to authentic Nepali cuisine and exceptional
              hospitality has been recognized by our community and industry.
            </p>
          </div>

          {/* Awards Grid */}
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {awards.map((award) => {
              const Icon = award.icon;
              return (
                <div
                  key={award.id}
                  className='group rounded-3xl border p-8 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  {/* Icon */}
                  <div
                    className='mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'
                    style={{
                      backgroundColor: 'rgba(249,115,22,0.12)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon size={30} />
                  </div>

                  {/* Year */}
                  <span
                    className='body-font text-sm font-semibold'
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {award.year}
                  </span>

                  {/* Title */}
                  <h3 className='heading-font mt-3 text-2xl font-bold text-white'>
                    {award.title}
                  </h3>

                  {/* Description */}
                  <p className='body-font mt-4 leading-7 text-gray-400'>
                    {award.description}
                  </p>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}