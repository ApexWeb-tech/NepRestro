const features = [
  {
    title: 'Authentic Flavors',
    description: 'Traditional Nepali recipes crafted with premium ingredients and modern finesse.',
  },
  {
    title: 'Warm Service',
    description: 'Friendly hospitality that makes every visit feel like a celebration.',
  },
  {
    title: 'Stylish Setting',
    description: 'A contemporary dining space inspired by Nepalese culture and comfort.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className='bg-[#111111] py-24'>
      <div className='mx-auto max-w-7xl px-6'>

        <div className='mb-16 text-center'>
          <p className='body-font mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400'>Why Choose Us</p>
          <h2 className='heading-font text-3xl font-bold text-white sm:text-4xl lg:text-5xl'>
            A dining experience that feels both familiar and special.
          </h2>
        </div>

        <div className='grid gap-8 md:grid-cols-3'>
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
              className='group rounded-2xl border p-8 transition hover:-translate-y-1 hover:border-orange-500/40'
            >
              <div className='mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 text-2xl text-orange-400 transition group-hover:bg-orange-500/20'>
                🍽️
              </div>
              <h3 className='heading-font text-xl font-semibold text-white sm:text-2xl'>{feature.title}</h3>
              <p className='body-font mt-3 text-base leading-7 text-slate-400 md:text-lg'>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}