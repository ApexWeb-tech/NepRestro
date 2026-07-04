import {
  ChefHat,
  Leaf,
  Clock3,
  House,
  CalendarCheck,
  UtensilsCrossed,
} from 'lucide-react';

const features = [
  {
    icon: UtensilsCrossed,
    title: 'Authentic Recipes',
    description: 'Traditional recipes prepared using authentic spices and time-honored Nepali cooking techniques.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We use carefully selected local ingredients to deliver fresh flavors in every bite.',
  },
  {
    icon: ChefHat,
    title: 'Expert Chefs',
    description: 'Our experienced chefs craft every dish with passion, skill, and culinary precision.',
  },
  {
    icon: Clock3,
    title: 'Fast Service',
    description: 'Enjoy quick and attentive service that never compromises on quality or care.',
  },
  {
    icon: House,
    title: 'Cozy Ambience',
    description: 'Relax in a warm and welcoming atmosphere that is perfect for every occasion.',
  },
  {
    icon: CalendarCheck,
    title: 'Easy Reservations',
    description: 'Book your favorite table online anytime with our simple reservation system.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className='bg-[#111111] py-20 lg:py-24'>
      <div className='mx-auto max-w-6xl px-6'>

        {/* ── Section Header ── */}
        <div className='mb-16 text-center'>

          {/* Badge — Step 8.3: responsive sizing */}
          <span
            className='inline-block rounded-full px-3 py-2 text-xs font-semibold sm:px-4 sm:text-sm'
            style={{
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-secondary)',
            }}
          >
            Why Choose Us
          </span>

          {/* Heading — Step 8.2: added leading-tight */}
          <h2 className='heading-font mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'>
            Experience the Best of Nepali Hospitality
          </h2>

          {/* Subtitle — Step 8.4: responsive padding and line height */}
          <p className='body-font mx-auto mt-6 max-w-3xl px-2 text-base leading-7 text-gray-400 sm:px-0 sm:text-lg sm:leading-8'>
            From authentic recipes and locally sourced ingredients to warm hospitality
            and unforgettable dining experiences, we bring the rich flavors of Nepal
            to every table.
          </p>

        </div>

        {/* ── Feature Grid — Step 8.5: gap-6 lg:gap-8 ── */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
                className='group flex h-full flex-col rounded-2xl border p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:bg-slate-800/80 hover:shadow-2xl sm:p-6 lg:p-8'
              >
                {/* Icon circle — Step 8.7: responsive size */}
                <div className='mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 sm:h-16 sm:w-16'>
                  <Icon
                    className='h-7 w-7 text-orange-500 transition-all duration-300 group-hover:rotate-6 group-hover:text-white sm:h-8 sm:w-8'
                  />
                </div>

                {/* Title — Step 8.8: responsive sizing */}
                <h3 className='heading-font text-center text-lg font-bold text-white transition-colors duration-300 group-hover:text-[var(--color-primary)] sm:text-xl lg:text-2xl'>
                  {feature.title}
                </h3>

                {/* Description — Step 8.9: responsive line height */}
                <p className='body-font mt-3 text-center text-sm leading-6 text-gray-300 sm:text-base sm:leading-7'>
                  {feature.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}