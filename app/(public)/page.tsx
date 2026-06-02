import Link from "next/link";

const featuredDishes = [
  {
    id: 1,
    name: "Chicken Momo",
    description:
      "Steamed Nepali dumplings filled with juicy chicken and spices.",
    price: "Rs. 250",
    image:
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Buff Sekuwa",
    description:
      "Traditional Nepali grilled buffalo meat with local spices.",
    price: "Rs. 450",
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Thakali Khana Set",
    description:
      "Authentic Nepali thali with rice, lentils, vegetables, pickle, and curry.",
    price: "Rs. 550",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 px-6 text-center text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Welcome to Restro
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Authentic Nepali Food &
            <span className="block text-orange-400">
              Memorable Experiences
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Experience traditional Nepali flavors with a modern dining
            atmosphere in the heart of the city.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/menu"
              className="rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Explore Menu
            </Link>

            <Link
              href="/reservation"
              className="rounded-full border border-white px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              About Us
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              A Taste of Nepal
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              At Restro, we bring together authentic Nepali flavors,
              warm hospitality, and unforgettable dining experiences.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              From steaming momos to traditional Thakali sets, every
              dish is prepared with fresh ingredients and passion.
            </p>

            <Link
              href="/about"
              className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Learn More
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
              alt="Restaurant Interior"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Featured Dishes
            </p>

            <h2 className="text-4xl font-bold">
              Most Popular Nepali Meals
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">
                      {dish.name}
                    </h3>

                    <span className="font-bold text-orange-500">
                      {dish.price}
                    </span>
                  </div>

                  <p className="text-gray-600">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/menu"
              className="inline-flex rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Reservation
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Reserve Your Table Today
          </h2>

          <p className="mb-10 text-lg text-gray-300">
            Enjoy authentic Nepali dishes with family and friends in a
            warm and welcoming atmosphere.
          </p>

          <Link
            href="/reservation"
            className="inline-flex rounded-full bg-orange-500 px-10 py-4 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Make Reservation
          </Link>
        </div>
      </section>
    </main>
  );
}