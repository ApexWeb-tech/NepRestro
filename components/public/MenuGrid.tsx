import Image from 'next/image';
import { Star } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'Chicken Momo',
    description: 'Steamed dumplings stuffed with seasoned chicken, served with our signature spicy tomato chutney.',
    price: 'Rs. 280',
    rating: 4.9,
    featured: true,
    category: 'momo',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Buff Momo',
    description: 'Tender buffalo dumplings with aromatic spices, paired with house-made sesame dipping sauce.',
    price: 'Rs. 260',
    rating: 4.8,
    featured: false,
    category: 'momo',
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d29a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Thakali Set',
    description: 'Authentic Thakali meal with rice, lentils, seasonal vegetables, pickle, and slow-cooked curry.',
    price: 'Rs. 650',
    rating: 5.0,
    featured: true,
    category: 'thakali',
    image: 'https://images.pexels.com/photos/36885753/pexels-photo-36885753.jpeg',
  },
  {
    id: 4,
    name: 'Chicken Chowmein',
    description: 'Stir-fried noodles with fresh vegetables and tender chicken in a savory Nepali-style sauce.',
    price: 'Rs. 320',
    rating: 4.7,
    featured: false,
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Sel Roti Set',
    description: 'Traditional Nepali rice doughnut served with yogurt, achar, and seasonal sides.',
    price: 'Rs. 220',
    rating: 4.8,
    featured: true,
    category: 'snacks',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Mango Lassi',
    description: 'Chilled blend of fresh Nepali mangoes, creamy yogurt, and a hint of cardamom.',
    price: 'Rs. 180',
    rating: 4.9,
    featured: false,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function MenuGrid() {
  return (
    <section className='bg-[#111111] pb-24'>
      <div className='mx-auto max-w-7xl px-6'>

        {/* ── Menu Grid ── */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {menuItems.map((item) => (
            <div
              key={item.id}
              className='group flex cursor-pointer flex-col rounded-2xl border shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-2xl'
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              {/* Image */}
              <div className='relative h-48 overflow-hidden rounded-t-2xl sm:h-56'>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className='object-cover transition-transform duration-500 ease-out group-hover:scale-110'
                  quality={90}
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                />
                {/* Hover overlay */}
                <div className='absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20' />
              </div>

              {/* Content */}
              <div className='flex flex-1 flex-col p-5 sm:p-6'>

                {/* Rating & Badge row */}
                <div className='flex items-center justify-between'>
                  <span
                    className='body-font flex items-center gap-1 text-sm font-semibold'
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    <Star size={14} fill='currentColor' />
                    {item.rating}
                  </span>

                  {item.featured && (
                    <span
                      className='body-font rounded-full px-2.5 py-1 font-semibold transition-all duration-300 group-hover:scale-105 sm:px-3'
                      style={{
                        fontSize: '11px',
                        backgroundColor: 'rgba(249,115,22,0.15)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      Chef's Special
                    </span>
                  )}
                </div>

                {/* Dish name */}
                <h3 className='heading-font mt-4 text-lg font-bold text-white sm:mt-5 sm:text-xl'>
                  {item.name}
                </h3>

                {/* Description */}
                <p className='body-font mt-3 line-clamp-3 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7'>
                  {item.description}
                </p>

                {/* Price — pushed to bottom */}
                <div className='mt-auto pt-6'>
                  <span
                    className='body-font text-xl font-bold transition-all duration-300 group-hover:tracking-wide sm:text-2xl'
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.price}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}