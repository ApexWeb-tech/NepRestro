import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Sharma',
    role: 'Food Blogger',
    initials: 'SS',
    rating: 5,
    review: 'The best momo I have ever had! Everything was fresh, authentic, and beautifully presented. We will definitely come back again.',
    verified: true,
  },
  {
    id: 2,
    name: 'Raj Patel',
    role: 'Regular Customer',
    initials: 'RP',
    rating: 5,
    review: 'Amazing atmosphere and authentic Nepali flavors. The service was warm and attentive. Highly recommended!',
    verified: true,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Tourist',
    initials: 'EC',
    rating: 5,
    review: 'One of the best dining experiences during my trip to Nepal. The food was outstanding and the staff were so friendly.',
    verified: false,
  },
  {
    id: 4,
    name: 'Aarav Thapa',
    role: 'Local Food Lover',
    initials: 'AT',
    rating: 5,
    review: 'The Thakali Set is absolutely delicious. Great service too! This is my go-to restaurant for authentic Nepali food.',
    verified: false,
  },
  {
    id: 5,
    name: 'Olivia Wilson',
    role: 'Travel Vlogger',
    initials: 'OW',
    rating: 5,
    review: 'Beautiful interior and unforgettable food. Perfect for families and groups. I featured it in my Nepal travel vlog!',
    verified: true,
  },
  {
    id: 6,
    name: 'Sita Gurung',
    role: 'Family Customer',
    initials: 'SG',
    rating: 5,
    review: 'Friendly staff and excellent food quality. The portions are generous and the prices are fair. We visit every month.',
    verified: false,
  },
];

export default function Testimonials() {
  return (
    <section className='bg-[#111111] py-24'>
      <div className='mx-auto max-w-7xl px-6'>

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
            Testimonials
          </span>

          {/* Heading */}
          <h2 className='heading-font mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl'>
            What Our Customers Say
          </h2>

          {/* Subtitle */}
          <p className='body-font mx-auto mt-6 max-w-3xl px-2 text-base leading-8 text-gray-400 sm:text-lg'>
            Hear from our happy guests who have enjoyed authentic Nepali cuisine,
            warm hospitality, and memorable dining experiences at NepRestro.
          </p>

        </div>

        {/* ── Testimonials Grid ── */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
              className='group rounded-2xl border p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-xl sm:p-8'
            >
              <div className='flex h-full flex-col'>

                {/* Quote Icon — Step 9.4 */}
                <div className='mb-4'>
                  <Quote
                    size={28}
                    style={{ color: 'var(--color-primary)' }}
                  />
                </div>

                {/* Star Rating */}
                <div className='mb-6 flex items-center gap-1'>
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill='currentColor'
                      style={{ color: 'var(--color-secondary)' }}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className='body-font text-base italic leading-8 text-gray-300'>
                  "{testimonial.review}"
                </p>

                {/* Divider */}
                <hr
                  className='my-8'
                  style={{ borderColor: 'var(--color-border)' }}
                />

                {/* Customer Info — pushed to bottom */}
                <div className='mt-auto flex items-center gap-4'>

                  {/* Initials Avatar */}
                  <div
                    style={{ backgroundColor: 'var(--color-primary)' }}
                    className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-base font-bold text-white transition-transform duration-300 ease-out group-hover:scale-110 sm:h-14 sm:w-14 sm:text-lg'
                  >
                    {testimonial.initials}
                  </div>

                  {/* Name & Role */}
                  <div>
                    <div className='flex items-center gap-2'>
                      <h3 className='heading-font text-lg font-semibold text-white transition-colors duration-300 group-hover:text-orange-400 sm:text-xl'>
                        {testimonial.name}
                      </h3>
                      {testimonial.verified && (
                        <span
                          style={{ backgroundColor: 'var(--color-primary)' }}
                          className='body-font rounded-full px-2 py-1 text-xs font-semibold text-white'
                        >
                          Verified
                        </span>
                      )}
                    </div>
                    <p
                      className='body-font text-sm font-medium'
                      style={{ color: 'var(--color-secondary)' }}
                    >
                      {testimonial.role}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}