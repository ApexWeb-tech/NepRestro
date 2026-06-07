import Image from 'next/image';

const menuCategories = [
  {
    title: '🥟 Momo Classics',
    items: [
      { name: 'Buff Momo', description: 'Steamed buffalo dumplings with traditional spices.', price: 'Rs. 180' },
      { name: 'Chicken Momo', description: 'Juicy chicken dumplings served with achar.', price: 'Rs. 220' },
      { name: 'Jhol Momo', description: 'Momos served in spicy sesame-tomato broth.', price: 'Rs. 250' },
      { name: 'C Momo', description: 'Crispy fried momos tossed in Kathmandu-style sauce.', price: 'Rs. 280' },
    ],
  },
  {
    title: '🍜 Street Favorites',
    items: [
      { name: 'Chatpate', description: 'Spiced puffed rice with fresh vegetables.', price: 'Rs. 120' },
      { name: 'Pani Puri', description: 'Crispy shells with tangy tamarind water.', price: 'Rs. 150' },
      { name: 'Aloo Chop', description: 'Crispy potato patties dipped in chutney.', price: 'Rs. 100' },
      { name: 'Sekuwa', description: 'Grilled marinated meat with Nepali herbs.', price: 'Rs. 350' },
    ],
  },
  {
    title: '🍛 Nepali Classics',
    items: [
      { name: 'Dal Bhat Set', description: 'Rice, lentils, veggies, curry and pickle.', price: 'Rs. 450' },
      { name: 'Newari Khaja Set', description: 'Beaten rice platter with spicy sides.', price: 'Rs. 550' },
      { name: 'Thukpa', description: 'Himalayan noodle soup with herbs.', price: 'Rs. 280' },
      { name: 'Choila', description: 'Spicy grilled meat with Newari flavor.', price: 'Rs. 320' },
    ],
  },
  {
    title: '🥤 Refreshments',
    items: [
      { name: 'Masala Tea', description: 'Spiced milk tea with bold flavor.', price: 'Rs. 60' },
      { name: 'Lassi', description: 'Creamy yogurt drink served chilled.', price: 'Rs. 120' },
      { name: 'Lemon Soda', description: 'Fresh lemon with sparkling soda.', price: 'Rs. 100' },
      { name: 'Mango Shake', description: 'Sweet and creamy mango milkshake.', price: 'Rs. 180' },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className='bg-slate-50 text-slate-900'>
      <section className='relative min-h-[55vh] overflow-hidden'>
        <Image src='https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1600&auto=format&fit=crop' alt='Restaurant menu' fill className='object-cover' priority />
        <div className='absolute inset-0 bg-slate-950/70' />

        <div className='relative z-10 mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 text-center text-white'>
          <p className='mb-4 inline-flex rounded-full bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-orange-100'>Our Menu</p>
          <h1 className='text-5xl font-black leading-tight md:text-6xl'>Bold Nepali flavors for every appetite.</h1>
          <p className='mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-200'>Explore handcrafted dishes from street snacks to hearty sets, all prepared with care and local ingredients.</p>
        </div>
      </section>

      <section className='px-6 py-24'>
        <div className='mx-auto max-w-7xl space-y-20'>
          {menuCategories.map((category) => (
            <div key={category.title}>
              <div className='mb-10 flex items-center justify-between gap-6 rounded-[2rem] bg-white p-8 shadow-xl'>
                <h2 className='text-3xl font-bold text-slate-950'>{category.title}</h2>
                <span className='rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600'>Popular choice</span>
              </div>
              <div className='grid gap-6 md:grid-cols-2'>
                {category.items.map((item) => (
                  <div key={item.name} className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl'>
                    <div className='mb-4 flex items-center justify-between gap-4'>
                      <h3 className='text-xl font-semibold text-slate-900'>{item.name}</h3>
                      <span className='text-sm font-semibold text-orange-500'>{item.price}</span>
                    </div>
                    <p className='text-slate-600'>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-slate-950 px-6 py-24 text-white'>
        <div className='mx-auto max-w-4xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300'>Chef's Recommendation</p>
          <h2 className='mb-6 text-4xl font-bold'>Try our signature Jhol Momo</h2>
          <p className='mx-auto max-w-2xl text-lg leading-relaxed text-slate-300'>A beloved Nepali classic — soft momos bathed in a fragrant sesame and tomato broth that will warm your taste buds.</p>
        </div>
      </section>
    </main>
  );
}
