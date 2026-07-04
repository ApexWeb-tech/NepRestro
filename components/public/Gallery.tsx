import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop',
    alt: 'Steamed Chicken Momo',
    title: 'Steamed Chicken Momo',
    subtitle: 'Authentic Nepali Favorite',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop',
    alt: 'Traditional Thakali Set',
    title: 'Traditional Thakali Set',
    subtitle: 'Rich Local Flavors',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/37058646/pexels-photo-37058646.jpeg',
    alt: 'Freshly Grilled Sekuwa',
    title: 'Freshly Grilled Sekuwa',
    subtitle: 'Perfectly Charred',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
    alt: 'Modern Restaurant Interior',
    title: 'Elegant Dining Area',
    subtitle: 'Comfort Meets Tradition',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    alt: 'Homemade Nepali Dessert',
    title: 'Homemade Desserts',
    subtitle: 'Sweet Ending',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop',
    alt: 'Chef Preparing Authentic Nepali Cuisine',
    title: 'Expert Chefs',
    subtitle: 'Crafting Every Dish',
  },
];

export default function Gallery() {
  return (
    <section className='bg-[#0d0d0d] py-20 lg:py-24'>
      <div className='mx-auto max-w-7xl px-6'>

        {/* ── Section Header ── */}
        <div className='mb-16 text-center'>

          {/* Badge */}
          <span
            className='inline-block rounded-full px-3 py-2 text-xs font-semibold sm:px-4 sm:text-sm'
            style={{
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-secondary)',
            }}
          >
            Our Gallery
          </span>

          {/* Heading */}
          <h2 className='heading-font mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'>
            A Feast for Your Eyes
          </h2>

          {/* Subtitle */}
          <p className='body-font mx-auto mt-6 max-w-3xl px-2 text-base leading-7 text-gray-400 sm:px-0 sm:text-lg sm:leading-8'>
            Explore our delicious dishes, elegant interiors, and the warm atmosphere
            that makes every visit to NepRestro a memorable dining experience.
          </p>

        </div>

        {/* ── Gallery Grid ── */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className='group relative aspect-square cursor-pointer overflow-hidden rounded-2xl'
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
                quality={90}
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
              />

              {/* Dark gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

              {/* Title & subtitle */}
              <div className='absolute bottom-0 left-0 right-0 translate-y-6 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                <h3 className='heading-font text-xl font-bold text-white'>
                  {image.title}
                </h3>
                <p className='body-font mt-2 text-sm text-gray-200'>
                  {image.subtitle}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}