import Link from 'next/link';
import { MapPin, Phone, Mail, Clock3 } from 'lucide-react';

// lucide-react removed brand/logo icons (Facebook, Instagram, Twitter, Youtube)
// in recent versions, so we provide lightweight inline replacements that
// match lucide's stroke-based style and accept the same `size` prop.
type IconProps = { size?: number; className?: string };

function Facebook({ size = 18, className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
    </svg>
  );
}

function Instagram({ size = 18, className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
    </svg>
  );
}

function Twitter({ size = 18, className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C4 15.5 2.5 12.4 2.5 9.5c1.5 1 3.2 1.5 5 1.5C4.9 8.6 3.9 4.6 6 2c2.2 2.6 5.4 4.3 9 4.5-.2-.6-.3-1.3-.3-2C14.7 2.1 16.8.5 19 1.5c1.1.1 2-.4 2.6-1.1-.3.9-.9 1.7-1.7 2.2C20.7 2.4 21.4 2.1 22 4z' />
    </svg>
  );
}

function Youtube({ size = 18, className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' />
      <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' />
    </svg>
  );
}

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/menu', label: 'Our Menu' },
  { href: '/contact', label: 'Contact' },
  { href: '/reservations', label: 'Reservations' },
];

const menuLinks = [
  { href: '/menu', label: 'Momo' },
  { href: '/menu', label: 'Thakali Set' },
  { href: '/menu', label: 'Noodles' },
  { href: '/menu', label: 'Snacks' },
  { href: '/menu', label: 'Beverages' },
  { href: '/menu', label: 'Desserts' },
];

const contactDetails = [
  {
    id: 1,
    icon: MapPin,
    value: 'Lakeside, Pokhara, Nepal',
  },
  {
    id: 2,
    icon: Phone,
    value: '+977 9800000000',
  },
  {
    id: 3,
    icon: Mail,
    value: 'info@neprestro.com',
  },
  {
    id: 4,
    icon: Clock3,
    value: '10:00 AM – 10:00 PM Daily',
  },
];

const socialLinks = [
  {
    id: 1,
    icon: Facebook,
    href: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    id: 2,
    icon: Instagram,
    href: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    id: 3,
    icon: Twitter,
    href: 'https://twitter.com',
    label: 'Twitter',
  },
  {
    id: 4,
    icon: Youtube,
    href: 'https://youtube.com',
    label: 'YouTube',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='relative overflow-hidden pt-20'
      style={{
        background: 'linear-gradient(180deg, var(--color-background) 0%, #0a0f1e 100%)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Decorative glow — top left */}
      <div
        className='absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl'
        style={{ background: 'rgba(249,115,22,0.08)' }}
      />

      {/* Decorative glow — top right */}
      <div
        className='absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl'
        style={{ background: 'rgba(245,158,11,0.06)' }}
      />

      <div className='relative z-10 mx-auto max-w-7xl px-6'>

        {/* ── Top Grid ── */}
        <div className='grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4'>

          {/* Column 1: Brand */}
          <div>
            <Link
              href='/'
              className='heading-font text-3xl font-extrabold tracking-tight'
              style={{ color: 'var(--color-primary)' }}
            >
              RESTRO
            </Link>

            <p className='body-font mt-6 leading-8 text-gray-400'>
              Authentic Nepali cuisine crafted with fresh ingredients,
              traditional recipes, and warm hospitality — served with love
              from the heart of Nepal.
            </p>

            {/* Social Links */}
            <div className='mt-8 flex gap-4'>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                    className='flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500'
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <Icon
                      size={18}
                      className='text-gray-400 transition-colors duration-300 hover:text-white'
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              className='heading-font text-xl font-bold'
              style={{ color: 'var(--color-heading)' }}
            >
              Quick Links
            </h3>

            <hr className='my-6' style={{ borderColor: 'var(--color-border)' }} />

            <ul className='space-y-4'>
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className='body-font flex items-center gap-2 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-orange-400'
                  >
                    <span
                      className='h-1.5 w-1.5 rounded-full flex-shrink-0'
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Menu */}
          <div>
            <h3
              className='heading-font text-xl font-bold'
              style={{ color: 'var(--color-heading)' }}
            >
              Our Menu
            </h3>

            <hr className='my-6' style={{ borderColor: 'var(--color-border)' }} />

            <ul className='space-y-4'>
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='body-font flex items-center gap-2 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-orange-400'
                  >
                    <span
                      className='h-1.5 w-1.5 flex-shrink-0 rounded-full'
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3
              className='heading-font text-xl font-bold'
              style={{ color: 'var(--color-heading)' }}
            >
              Contact Us
            </h3>

            <hr className='my-6' style={{ borderColor: 'var(--color-border)' }} />

            <ul className='space-y-5'>
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className='flex items-start gap-3'>
                    <div
                      className='mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full'
                      style={{
                        backgroundColor: 'rgba(249,115,22,0.12)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <span className='body-font text-sm leading-6 text-gray-400'>
                      {item.value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div
          className='flex flex-col items-center justify-between gap-4 border-t py-8 text-center sm:flex-row sm:text-left'
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p className='body-font text-sm text-gray-500'>
            © {currentYear} NepRestro. All rights reserved.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-6'>
            <Link
              href='/contact'
              className='body-font text-sm text-gray-500 transition-colors duration-300 hover:text-orange-400'
            >
              Privacy Policy
            </Link>
            <Link
              href='/contact'
              className='body-font text-sm text-gray-500 transition-colors duration-300 hover:text-orange-400'
            >
              Terms of Service
            </Link>
            <Link
              href='/contact'
              className='body-font text-sm text-gray-500 transition-colors duration-300 hover:text-orange-400'
            >
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}