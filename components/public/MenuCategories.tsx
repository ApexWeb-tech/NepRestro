const categories = [
  { id: 'all', label: 'All', active: true },
  { id: 'momo', label: 'Momo', active: false },
  { id: 'thakali', label: 'Thakali Set', active: false },
  { id: 'noodles', label: 'Noodles', active: false },
  { id: 'snacks', label: 'Snacks', active: false },
  { id: 'beverages', label: 'Beverages', active: false },
  { id: 'desserts', label: 'Desserts', active: false },
];

export default function MenuCategories() {
  return (
    <section className='bg-[#111111] py-12'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mx-auto max-w-5xl text-center'>

          {/* Title */}
          <h2 className='heading-font text-3xl font-bold text-white'>
            Browse by Category
          </h2>

          {/* Description */}
          <p className='body-font mt-4 text-gray-400'>
            Choose your favorite category and discover authentic Nepali dishes.
          </p>

          {/* Category Buttons */}
          <div className='mt-10 flex flex-wrap justify-center gap-4'>
            {categories.map((category) =>
              category.active ? (
                <button
                  key={category.id}
                  aria-label={`Filter by ${category.label}`}
                  className='body-font rounded-full px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:px-6 sm:py-3'
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {category.label}
                </button>
              ) : (
                <button
                  key={category.id}
                  aria-label={`Filter by ${category.label}`}
                  className='body-font rounded-full border px-5 py-2.5 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:px-6 sm:py-3'
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  {category.label}
                </button>
              )
            )}
          </div>

        </div>
      </div>
    </section>
  );
}