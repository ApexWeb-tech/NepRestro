import Image from 'next/image';

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
              className='inline-block rounded-full px-4 py-2 text-sm font-semibold'
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

          {/* Left: Image */}
          <div className='relative overflow-hidden rounded-3xl'>
            <Image
              src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop'
              alt='NepRestro Restaurant'
              width={700}
              height={700}
              className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
            />
          </div>

          {/* Right: Story */}
          <div className='flex flex-col justify-center'>

            <span
              className='inline-block w-fit rounded-full px-4 py-2 text-sm font-semibold'
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

          {/* Section Header */}
          <div className='mb-16 text-center'>

            <span
              className='inline-block rounded-full px-4 py-2 text-sm font-semibold'
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

          {/* Two-Card Grid */}
          <div className='grid gap-8 lg:grid-cols-2'>

            {/* Mission Card */}
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

              <h3 className='heading-font text-2xl font-bold text-white'>
                Our Mission
              </h3>

              <hr
                className='my-6'
                style={{ borderColor: 'var(--color-border)' }}
              />

              <p className='body-font leading-8 text-gray-400'>
                To preserve the rich culinary traditions of Nepal while delivering
                outstanding hospitality, ensuring every guest enjoys authentic flavors,
                quality ingredients, and memorable dining experiences.
              </p>
            </div>

            {/* Vision Card */}
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

              <h3 className='heading-font text-2xl font-bold text-white'>
                Our Vision
              </h3>

              <hr
                className='my-6'
                style={{ borderColor: 'var(--color-border)' }}
              />

              <p className='body-font leading-8 text-gray-400'>
                To become the leading destination for authentic Nepali cuisine, where
                tradition meets innovation and every visitor leaves with unforgettable
                memories and a desire to return.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}