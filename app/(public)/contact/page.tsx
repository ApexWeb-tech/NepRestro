'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  CalendarDays,
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

const contactInfo = [
  {
    id: 1,
    icon: MapPin,
    title: 'Visit Us',
    value: 'Lakeside, Pokhara, Nepal',
    description: 'Find us in the heart of Pokhara.',
    href: 'https://maps.google.com/?q=Lakeside,Pokhara,Nepal',
    linkLabel: 'Get Directions',
  },
  {
    id: 2,
    icon: Phone,
    title: 'Call Us',
    value: '+977 9800000000',
    description: 'Available during opening hours.',
    href: 'tel:+9779800000000',
    linkLabel: 'Call Now',
  },
  {
    id: 3,
    icon: Mail,
    title: 'Email Us',
    value: 'info@neprestro.com',
    description: 'We reply within 24 hours.',
    href: 'mailto:info@neprestro.com',
    linkLabel: 'Send Email',
  },
  {
    id: 4,
    icon: Clock3,
    title: 'Opening Hours',
    value: '10:00 AM – 10:00 PM',
    description: 'Open every day of the week.',
    href: null,
    linkLabel: null,
  },
];

const openingHours = [
  { day: 'Monday', hours: '10:00 AM – 10:00 PM', weekend: false },
  { day: 'Tuesday', hours: '10:00 AM – 10:00 PM', weekend: false },
  { day: 'Wednesday', hours: '10:00 AM – 10:00 PM', weekend: false },
  { day: 'Thursday', hours: '10:00 AM – 10:00 PM', weekend: false },
  { day: 'Friday', hours: '10:00 AM – 11:00 PM', weekend: false },
  { day: 'Saturday', hours: '9:00 AM – 11:00 PM', weekend: true },
  { day: 'Sunday', hours: '9:00 AM – 10:00 PM', weekend: true },
];

const faqs = [
  {
    id: 1,
    question: 'Do I need to reserve a table?',
    answer: 'Walk-ins are always welcome, but we recommend making a reservation during weekends and holidays to guarantee your table.',
  },
  {
    id: 2,
    question: 'Do you offer vegetarian options?',
    answer: 'Yes! We have a wide selection of vegetarian and vegan Nepali dishes. Ask our team for recommendations.',
  },
  {
    id: 3,
    question: 'Is parking available?',
    answer: 'Yes, convenient parking is available near the restaurant at Lakeside, Pokhara.',
  },
  {
    id: 4,
    question: 'Can I host private events?',
    answer: 'Absolutely! Contact us to discuss birthdays, family gatherings, and corporate events. We offer customized menus.',
  },
];

export default function ContactPage() {
  return (
    <main className='bg-[#111111] text-white'>

      {/* ── Hero ── */}
      <section
        className='relative overflow-hidden py-24 lg:py-28'
        style={{
          background: 'linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(24,32,50,1) 50%, rgba(15,23,42,1) 100%)',
        }}
      >
        <div
          className='absolute -left-20 -top-20 h-64 w-64 rounded-full blur-3xl'
          style={{ background: 'rgba(249,115,22,0.10)' }}
        />
        <div
          className='absolute -bottom-20 -right-20 h-64 w-64 rounded-full blur-3xl'
          style={{ background: 'rgba(245,158,11,0.08)' }}
        />

        <div className='relative z-10 mx-auto max-w-7xl px-6'>
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            animate='visible'
            className='mx-auto max-w-3xl text-center'
          >
            <motion.span
              variants={fadeInDown}
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Get In Touch
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className='heading-font mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl'
            >
              We'd Love to Hear From You
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
            >
              Have a question, want to make a reservation, or simply want to
              say hello? Our team is always happy to help.
            </motion.p>

            <motion.div variants={fadeInUp} className='mt-8'>
              <Link
                href='/reservations'
                aria-label='Reserve a table at NepRestro'
                style={{ backgroundColor: 'var(--color-primary)' }}
                className='body-font inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
              >
                <CalendarDays size={18} aria-hidden='true' />
                Reserve a Table
              </Link>
            </motion.div>

            {/* Breadcrumb */}
            <motion.div
              variants={fadeInUp}
              className='body-font mt-8 flex items-center justify-center gap-2 text-sm text-gray-500'
            >
              <span>Home</span>
              <span>/</span>
              <span style={{ color: 'var(--color-primary)' }}>Contact</span>
            </motion.div>
          </motion.div>
        </div>

        <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111111] to-transparent' />
      </section>

      {/* ── Contact Information Cards ── */}
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
              Contact Information
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'
            >
              Find Us, Call Us, or Write to Us
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className='body-font mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-400 sm:text-lg'
            >
              We're here to help with reservations, questions, and feedback.
              Reach us through any of the channels below.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  className='group rounded-2xl border p-6 text-center shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl'
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
                    {item.title}
                  </h3>

                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className='body-font mt-2 block font-semibold transition-colors duration-300 hover:text-orange-400'
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className='body-font mt-2 font-semibold'
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {item.value}
                    </p>
                  )}

                  <p className='body-font mt-2 text-sm text-gray-400'>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ── Contact Form + Opening Hours ── */}
      <section className='bg-[#0d0d0d] py-24'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid gap-12 lg:grid-cols-2'>

            {/* Left: Contact Form */}
            <motion.div
              variants={fadeInLeft}
              initial='hidden'
              whileInView='visible'
              viewport={viewport}
              className='rounded-2xl border p-6 shadow-xl sm:p-8'
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h2 className='heading-font text-2xl font-bold text-white sm:text-3xl'>
                Send Us a Message
              </h2>
              <p className='body-font mt-3 text-sm leading-7 text-gray-400'>
                Fill in the form below and we'll get back to you within 24 hours.
              </p>

              <hr className='my-6' style={{ borderColor: 'var(--color-border)' }} />

              <form className='space-y-5'>

                <div className='grid gap-5 sm:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='contact-name'
                      className='body-font mb-2 block text-sm font-medium text-gray-300'
                    >
                      Full Name <span aria-hidden='true' className='text-orange-500'>*</span>
                    </label>
                    <input
                      id='contact-name'
                      type='text'
                      placeholder='John Doe'
                      required
                      className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)', minHeight: '48px' }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='contact-email'
                      className='body-font mb-2 block text-sm font-medium text-gray-300'
                    >
                      Email Address <span aria-hidden='true' className='text-orange-500'>*</span>
                    </label>
                    <input
                      id='contact-email'
                      type='email'
                      placeholder='john@example.com'
                      required
                      className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)', minHeight: '48px' }}
                    />
                  </div>
                </div>

                <div className='grid gap-5 sm:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='contact-phone'
                      className='body-font mb-2 block text-sm font-medium text-gray-300'
                    >
                      Phone Number
                    </label>
                    <input
                      id='contact-phone'
                      type='tel'
                      placeholder='+977 98XXXXXXXX'
                      className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)', minHeight: '48px' }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='contact-subject'
                      className='body-font mb-2 block text-sm font-medium text-gray-300'
                    >
                      Subject
                    </label>
                    <input
                      id='contact-subject'
                      type='text'
                      placeholder='How can we help?'
                      className='body-font w-full rounded-xl border bg-transparent px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                      style={{ borderColor: 'var(--color-border)', minHeight: '48px' }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='contact-message'
                    className='body-font mb-2 block text-sm font-medium text-gray-300'
                  >
                    Message <span aria-hidden='true' className='text-orange-500'>*</span>
                  </label>
                  <textarea
                    id='contact-message'
                    rows={5}
                    required
                    placeholder='Write your message here...'
                    className='body-font w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40'
                    style={{ borderColor: 'var(--color-border)', minHeight: '140px' }}
                  />
                </div>

                <button
                  type='submit'
                  className='body-font w-full rounded-full py-4 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  style={{ backgroundColor: 'var(--color-primary)', minHeight: '52px' }}
                >
                  Send Message →
                </button>

                <p className='body-font text-center text-xs text-gray-500'>
                  <span aria-hidden='true' className='text-orange-500'>*</span> Required fields
                </p>

              </form>
            </motion.div>

            {/* Right: Opening Hours */}
            <motion.div
              variants={fadeInRight}
              initial='hidden'
              whileInView='visible'
              viewport={viewport}
              className='space-y-6'
            >
              {/* Hours card */}
              <div
                className='rounded-2xl border p-6 shadow-md sm:p-8'
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className='mb-6 flex items-center gap-3'>
                  <div
                    className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full'
                    style={{
                      backgroundColor: 'rgba(249,115,22,0.12)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Clock3 size={22} aria-hidden='true' />
                  </div>
                  <h3 className='heading-font text-xl font-bold text-white'>
                    Opening Hours
                  </h3>
                </div>

                <div className='space-y-3'>
                  {openingHours.map((item) => (
                    <div
                      key={item.day}
                      className='flex items-center justify-between border-b py-2 last:border-none'
                      style={{ borderColor: 'var(--color-border)' }}
                    >
                      <span
                        className='body-font text-sm'
                        style={{
                          color: item.weekend ? 'var(--color-secondary)' : '#D1D5DB',
                          fontWeight: item.weekend ? 600 : 400,
                        }}
                      >
                        {item.day}
                      </span>
                      <span
                        className='body-font text-sm font-semibold'
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className='mt-6 rounded-xl p-4'
                  style={{ backgroundColor: 'rgba(249,115,22,0.08)' }}
                >
                  <p
                    className='body-font text-xs font-medium'
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Last orders accepted 30 minutes before closing time.
                  </p>
                </div>
              </div>

              {/* Quick contact card */}
              <div
                className='rounded-2xl border p-6 shadow-md'
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <h3 className='heading-font mb-5 text-xl font-bold text-white'>
                  Quick Contact
                </h3>

                <div className='space-y-4'>
                  <a
                    href='tel:+9779800000000'
                    className='flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-md'
                    style={{ borderColor: 'var(--color-border)' }}
                    aria-label='Call NepRestro'
                  >
                    <div
                      className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full'
                      style={{
                        backgroundColor: 'rgba(249,115,22,0.12)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Phone size={18} aria-hidden='true' />
                    </div>
                    <div>
                      <p className='body-font text-xs text-gray-500'>Phone</p>
                      <p className='body-font text-sm font-semibold text-white'>
                        +977 9800000000
                      </p>
                    </div>
                  </a>

                  <a
                    href='mailto:info@neprestro.com'
                    className='flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-md'
                    style={{ borderColor: 'var(--color-border)' }}
                    aria-label='Email NepRestro'
                  >
                    <div
                      className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full'
                      style={{
                        backgroundColor: 'rgba(249,115,22,0.12)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Mail size={18} aria-hidden='true' />
                    </div>
                    <div>
                      <p className='body-font text-xs text-gray-500'>Email</p>
                      <p className='body-font text-sm font-semibold text-white'>
                        info@neprestro.com
                      </p>
                    </div>
                  </a>

                  <a
                    href='https://maps.google.com/?q=Lakeside,Pokhara,Nepal'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-md'
                    style={{ borderColor: 'var(--color-border)' }}
                    aria-label='Get directions to NepRestro on Google Maps'
                  >
                    <div
                      className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full'
                      style={{
                        backgroundColor: 'rgba(249,115,22,0.12)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <MapPin size={18} aria-hidden='true' />
                    </div>
                    <div>
                      <p className='body-font text-xs text-gray-500'>Address</p>
                      <p className='body-font text-sm font-semibold text-white'>
                        Lakeside, Pokhara, Nepal
                      </p>
                    </div>
                  </a>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Google Map ── */}
      <section className='bg-[#111111] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='mb-12 text-center'
          >
            <motion.span
              variants={fadeInDown}
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              Find Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'
            >
              Visit NepRestro
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className='body-font mx-auto mt-6 max-w-xl px-2 text-base leading-8 text-gray-400'
            >
              Conveniently located in Lakeside, Pokhara — easy to reach whether
              you're a local or visiting Nepal.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='overflow-hidden rounded-2xl border shadow-md'
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <iframe
              title='NepRestro location — Lakeside, Pokhara, Nepal'
              src='https://www.google.com/maps?q=Lakeside,Pokhara,Nepal&output=embed'
              className='h-[400px] w-full border-0 sm:h-[480px]'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />

            <div className='flex flex-col items-start justify-between gap-4 p-5 sm:flex-row sm:items-center sm:p-6'>
              <div>
                <h3 className='heading-font text-lg font-bold text-white'>
                  NepRestro
                </h3>
                <p className='body-font mt-1 text-sm text-gray-400'>
                  Lakeside, Pokhara, Nepal
                </p>
              </div>
              <a
                href='https://maps.google.com/?q=Lakeside,Pokhara,Nepal'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Open NepRestro location in Google Maps'
                style={{ backgroundColor: 'var(--color-primary)' }}
                className='body-font flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section className='bg-[#0d0d0d] py-24'>
        <div className='mx-auto max-w-4xl px-6'>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='mb-12 text-center'
          >
            <motion.span
              variants={fadeInDown}
              className='body-font inline-block rounded-full px-4 py-2 text-sm font-semibold'
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
              }}
            >
              FAQ
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl'
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className='body-font mx-auto mt-6 max-w-xl px-2 text-base leading-8 text-gray-400'
            >
              Here are answers to some of the questions our guests ask most often.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='space-y-4'
          >
            {faqs.map((faq) => (
              <motion.details
                key={faq.id}
                variants={staggerItem}
                className='group rounded-2xl border p-5 transition-all duration-300 ease-out sm:p-6'
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <summary className='heading-font flex cursor-pointer list-none items-center justify-between text-base font-semibold text-white sm:text-lg'>
                  {faq.question}
                  <span
                    className='ml-4 flex-shrink-0 text-2xl transition-transform duration-300 group-open:rotate-45'
                    style={{ color: 'var(--color-primary)' }}
                    aria-hidden='true'
                  >
                    +
                  </span>
                </summary>
                <p className='body-font mt-4 text-sm leading-7 text-gray-400 sm:text-base'>
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Reservation CTA ── */}
      <section className='bg-[#111111] py-24'>
        <div className='mx-auto max-w-7xl px-6'>
          <motion.div
            variants={fadeInUp}
            initial='hidden'
            whileInView='visible'
            viewport={viewport}
            className='relative overflow-hidden rounded-3xl border px-6 py-12 text-center shadow-md sm:px-8 sm:py-16'
            style={{
              background: 'linear-gradient(135deg, rgba(249,115,22,0.10), rgba(245,158,11,0.06))',
              borderColor: 'var(--color-border)',
            }}
          >
            <div
              className='absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl'
              style={{ background: 'rgba(249,115,22,0.15)' }}
            />

            <div className='relative z-10'>
              <h2 className='heading-font text-2xl font-bold text-white sm:text-3xl'>
                Planning to Visit Us?
              </h2>
              <p className='body-font mx-auto mt-4 max-w-xl px-2 text-base leading-7 text-gray-400'>
                Reserve your table in advance and we'll have everything ready
                for a perfect dining experience.
              </p>
              <Link
                href='/reservations'
                aria-label='Reserve a table at NepRestro'
                style={{ backgroundColor: 'var(--color-primary)' }}
                className='body-font mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
              >
                <CalendarDays size={18} aria-hidden='true' />
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}