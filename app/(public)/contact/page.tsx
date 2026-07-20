'use client';

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
} from 'lucide-react';

const contactInfo = [
  {
    id: 1,
    icon: MapPin,
    title: 'Visit Us',
    value: 'Lakeside, Pokhara, Nepal',
    description: 'Enjoy authentic Nepali cuisine in the heart of Pokhara.',
  },
  {
    id: 2,
    icon: Phone,
    title: 'Call Us',
    value: '+977 9800000000',
    description: 'We\'re happy to assist with reservations and inquiries.',
  },
  {
    id: 3,
    icon: Mail,
    title: 'Email Us',
    value: 'info@neprestro.com',
    description: 'Send us your questions anytime.',
  },
  {
    id: 4,
    icon: Clock3,
    title: 'Opening Hours',
    value: '10:00 AM – 10:00 PM',
    description: 'Open every day, including weekends.',
  },
];

const openingHours = [
  { day: 'Monday', hours: '10:00 AM – 10:00 PM' },
  { day: 'Tuesday', hours: '10:00 AM – 10:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM – 10:00 PM' },
  { day: 'Thursday', hours: '10:00 AM – 10:00 PM' },
  { day: 'Friday', hours: '10:00 AM – 11:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 11:00 PM' },
  { day: 'Sunday', hours: '9:00 AM – 10:00 PM' },
];

export default function ContactPage() {
  return (
    <main className='bg-[#111111] text-white'>

      {/* ── Step 1: Contact Hero ── */}
      <section
        className='relative overflow-hidden py-28 lg:py-36'
        style={{
          background: 'linear-gradient(135deg, var(--color-background) 0%, var(--color-surface) 100%)',
        }}
      >
        <div
          className='absolute -left-28 -top-28 h-80 w-80 rounded-full blur-3xl'
          style={{ background: 'rgba(249,115,22,0.10)' }}
        />
        <div
          className='absolute -bottom-28 -right-28 h-80 w-80 rounded-full blur-3xl'
          style={{ background: 'rgba(245,158,11,0.08)' }}
        />

        <div className='relative z-10 mx-auto max-w-5xl px-6 text-center'>

          {/* Badge */}
          <span
            className='body-font inline-flex rounded-full px-5 py-2 text-sm font-semibold'
            style={{
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-secondary)',
            }}
          >
            Contact Us
          </span>

          {/* Heading */}
          <h1 className='heading-font mt-8 text-4xl font-bold text-white sm:text-5xl lg:text-6xl'>
            We'd Love to Hear From You
          </h1>

          {/* Description */}
          <p className='body-font mx-auto mt-8 max-w-3xl px-2 text-base leading-8 text-gray-400 sm:text-lg'>
            Whether you have a question, want to reserve a table, or simply want to
            learn more about NepRestro, our team is always happy to help. Get in touch
            with us through the contact details below.
          </p>

          {/* Breadcrumb */}
          <div className='body-font mt-10 flex items-center justify-center gap-2 text-sm text-gray-400'>
            <span>Home</span>
            <span>/</span>
            <span style={{ color: 'var(--color-primary)' }}>Contact</span>
          </div>

        </div>
      </section>

      {/* ── Step 2: Contact Information Cards ── */}
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
              Get In Touch
            </span>

            <h2 className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'>
              Contact Information
            </h2>

            <p className='body-font mx-auto mt-6 max-w-3xl px-2 text-base leading-8 text-gray-400 sm:text-lg'>
              Reach us through any of the following channels. Our team is always ready to
              help you with reservations, questions, or feedback.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className='group rounded-3xl border p-8 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  <div
                    className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110'
                    style={{
                      backgroundColor: 'rgba(249,115,22,0.12)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className='heading-font text-xl font-bold text-white'>
                    {item.title}
                  </h3>

                  <p
                    className='body-font mt-3 font-semibold'
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.value}
                  </p>

                  <p className='body-font mt-4 text-sm leading-7 text-gray-400'>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Step 3: Contact Form (UI Only) ── */}
      <section className='bg-[#0d0d0d] pb-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <div className='grid gap-12 lg:grid-cols-2'>

            {/* Left info */}
            <div className='flex flex-col justify-center'>
              <span
                className='body-font inline-block w-fit rounded-full px-4 py-2 text-sm font-semibold'
                style={{
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-secondary)',
                }}
              >
                Send a Message
              </span>

              <h2 className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'>
                We'd Love to Hear From You
              </h2>

              <p className='body-font mt-6 text-base leading-8 text-gray-400 sm:text-lg'>
                Whether you're planning a family dinner, celebrating a special occasion,
                or simply have a question about our menu, our team is ready to assist you.
              </p>
            </div>

            {/* Right form card */}
            <div
              className='rounded-3xl border p-8 shadow-md'
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <form className='space-y-6'>

                {/* Row 1: Name & Email */}
                <div className='grid gap-6 sm:grid-cols-2'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                    style={{ borderColor: 'var(--color-border)' }}
                  />
                  <input
                    type='email'
                    placeholder='Email Address'
                    className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                    style={{ borderColor: 'var(--color-border)' }}
                  />
                </div>

                {/* Row 2: Phone & Subject */}
                <div className='grid gap-6 sm:grid-cols-2'>
                  <input
                    type='tel'
                    placeholder='Phone Number'
                    className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                    style={{ borderColor: 'var(--color-border)' }}
                  />
                  <input
                    type='text'
                    placeholder='Subject'
                    className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                    style={{ borderColor: 'var(--color-border)' }}
                  />
                </div>

                {/* Message */}
                <textarea
                  rows={6}
                  placeholder='Write your message...'
                  className='body-font w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-white outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                  style={{ borderColor: 'var(--color-border)' }}
                />

                {/* Submit button */}
                <button
                  type='submit'
                  className='body-font w-full rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>

        </div>
      </section>

      {/* ── Step 4: Google Map Section ── */}
      <section className='bg-[#111111] pb-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <div className='mb-12 text-center'>
            <span
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Find Us
            </span>

            <h2 className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'>
              Visit NepRestro
            </h2>

            <p className='body-font mx-auto mt-6 max-w-3xl px-2 text-base leading-8 text-gray-400 sm:text-lg'>
              Conveniently located in the heart of Pokhara, we're easy to reach whether
              you're a local resident or visiting Nepal.
            </p>
          </div>

          <div
            className='overflow-hidden rounded-3xl border shadow-md'
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            {/* Map */}
            <iframe
              title='NepRestro Location'
              src='https://www.google.com/maps?q=Pokhara,Nepal&output=embed'
              className='h-[500px] w-full border-0'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />

            {/* Location footer */}
            <div className='flex flex-col items-center justify-between gap-4 p-6 text-center sm:flex-row sm:text-left'>
              <div>
                <h3 className='heading-font text-xl font-bold text-white'>
                  NepRestro
                </h3>
                <p className='body-font mt-2 text-gray-400'>
                  Lakeside, Pokhara, Nepal
                </p>
              </div>
              <a
                href='https://maps.google.com/?q=Pokhara,Nepal'
                target='_blank'
                rel='noopener noreferrer'
                className='body-font rounded-full px-6 py-3 font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg'
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Open in Google Maps
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Step 5: Opening Hours ── */}
      <section className='bg-[#0d0d0d] pb-24'>
        <div className='mx-auto max-w-4xl px-6'>

          <div className='mb-12 text-center'>
            <span
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Opening Hours
            </span>

            <h2 className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'>
              We're Open Every Day
            </h2>

            <p className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-400 sm:text-lg'>
              Visit us any day of the week and enjoy authentic Nepali cuisine in a warm
              and welcoming atmosphere.
            </p>
          </div>

          {/* Schedule card */}
          <div
            className='rounded-3xl border p-8 shadow-md'
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            {openingHours.map((item) => {
              const isWeekend = item.day === 'Saturday' || item.day === 'Sunday';
              return (
                <div
                  key={item.day}
                  className='flex items-center justify-between border-b py-4 last:border-none'
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <span
                    className='body-font text-base'
                    style={{
                      color: isWeekend ? 'var(--color-secondary)' : '#D1D5DB',
                      fontWeight: isWeekend ? 600 : 400,
                    }}
                  >
                    {item.day}
                  </span>
                  <span
                    className='body-font font-semibold'
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.hours}
                  </span>
                </div>
              );
            })}

            {/* Notice */}
            <div
              className='mt-8 rounded-2xl p-5 text-center'
              style={{ backgroundColor: 'rgba(249,115,22,0.10)' }}
            >
              <p
                className='body-font text-sm font-medium'
                style={{ color: 'var(--color-primary)' }}
              >
                🍽️ Last orders are accepted 30 minutes before closing time.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}