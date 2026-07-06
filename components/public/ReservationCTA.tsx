import Link from 'next/link';

export default function ReservationCTA() {
  return (
    <section
      className='relative overflow-hidden py-24'
      style={{
        background: 'linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 100%)',
      }}
    >
      {/* Decorative glow — top left */}
      <div
        className='absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl'
        style={{ background: 'rgba(249,115,22,0.12)' }}
      />

      {/* Decorative glow — bottom right */}
      <div
        className='absolute -bottom-20 -right-20 h-72 w-72 rounded-full blur-3xl'
        style={{ background: 'rgba(245,158,11,0.10)' }}
      />

      {/* Content above glows */}
      <div className='relative z-10 mx-auto max-w-7xl px-6'>

        {/* ── Section Header ── */}
        <div className='mb-16 text-center'>

          {/* Badge */}
          <span
            className='inline-block rounded-full px-4 py-2 text-sm font-semibold'
            style={{
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-secondary)',
            }}
          >
            Reserve Your Table
          </span>

          {/* Heading */}
          <h2 className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl'>
            Reserve Your Table for an Unforgettable Dining Experience
          </h2>

          {/* Subtitle */}
          <p className='body-font mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg'>
            Whether you're planning a family dinner, a celebration, or a casual meal
            with friends, we're ready to welcome you with authentic Nepali cuisine,
            exceptional service, and a memorable dining experience.
          </p>

          {/* Trust message */}
          <p
            className='body-font mt-4 text-sm font-medium'
            style={{ color: 'var(--color-secondary)' }}
          >
            Quick • Easy • Instant Confirmation
          </p>

        </div>

        {/* ── Two Column Layout ── */}
        <div className='grid gap-12 lg:grid-cols-2'>

          {/* ── Left Column: Restaurant Information ── */}
          <div
            className='rounded-2xl border p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.03)',
            }}
          >
            <h3 className='heading-font text-2xl font-bold text-white'>
              Visit NepRestro
            </h3>
            <p className='body-font mt-3 text-gray-400'>
              We'd love to welcome you. Here's everything you need before your visit.
            </p>

            <div className='mt-10 space-y-8'>

              {/* Address */}
              <div className='flex items-start gap-4'>
                <div
                  className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-xl'
                  style={{
                    backgroundColor: 'rgba(249,115,22,0.12)',
                    color: 'var(--color-primary)',
                  }}
                >
                  📍
                </div>
                <div>
                  <h4 className='heading-font text-lg font-semibold text-white'>
                    Visit Us
                  </h4>
                  <p className='body-font mt-1 text-gray-400'>
                    New Road, Kathmandu, Nepal
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className='flex items-start gap-4'>
                <div
                  className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-xl'
                  style={{
                    backgroundColor: 'rgba(249,115,22,0.12)',
                    color: 'var(--color-primary)',
                  }}
                >
                  📞
                </div>
                <div>
                  <h4 className='heading-font text-lg font-semibold text-white'>
                    Call Us
                  </h4>
                  <p className='body-font mt-1 text-gray-400'>
                    +977 9800000000
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className='flex items-start gap-4'>
                <div
                  className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-xl'
                  style={{
                    backgroundColor: 'rgba(249,115,22,0.12)',
                    color: 'var(--color-primary)',
                  }}
                >
                  🕒
                </div>
                <div>
                  <h4 className='heading-font text-lg font-semibold text-white'>
                    Opening Hours
                  </h4>
                  <p className='body-font mt-1 whitespace-pre-line text-gray-400'>
                    {`Sun – Fri\n10:00 AM – 10:00 PM\n\nSaturday\n11:00 AM – 11:00 PM`}
                  </p>
                </div>
              </div>

            </div>

            {/* Reservation note */}
            <div
              className='mt-10 rounded-xl p-5'
              style={{ backgroundColor: 'rgba(34,197,94,0.12)' }}
            >
              <p
                className='body-font text-sm font-medium'
                style={{ color: 'var(--color-success)' }}
              >
                🍽 Walk-ins are welcome, but we recommend reserving your table in advance
                for weekends and special occasions.
              </p>
            </div>

          </div>

          {/* ── Right Column: Reservation Action Card ── */}
          <div
            className='rounded-2xl border p-8 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl'
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.03)',
            }}
          >
            {/* Heading */}
            <h3 className='heading-font text-2xl font-bold text-white'>
              Ready for a Great Meal?
            </h3>

            {/* Description */}
            <p className='body-font mt-4 leading-8 text-gray-400'>
              Reserve your favorite table in less than a minute and enjoy authentic
              Nepali hospitality with your family and friends.
            </p>

            {/* Buttons */}
            <div className='mt-8'>
              <Link
                href='/reservations'
                className='body-font block w-full rounded-full px-6 py-4 text-center font-semibold text-white transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl active:scale-95'
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Reserve a Table
              </Link>

              <Link
                href='/menu'
                className='body-font mt-4 block w-full rounded-full border px-6 py-4 text-center font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/5'
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-primary)',
                }}
              >
                View Menu
              </Link>
            </div>

            {/* Divider */}
            <hr
              className='my-8'
              style={{ borderColor: 'var(--color-border)' }}
            />

            {/* Trust Badges */}
            <div className='space-y-4'>
              <p
                className='body-font flex items-center gap-3 text-sm'
                style={{ color: 'var(--color-success)' }}
              >
                ✅ Instant Confirmation
              </p>
              <p
                className='body-font flex items-center gap-3 text-sm'
                style={{ color: 'var(--color-success)' }}
              >
                ✅ Easy Online Booking
              </p>
              <p
                className='body-font flex items-center gap-3 text-sm'
                style={{ color: 'var(--color-success)' }}
              >
                ✅ No Booking Fee
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}