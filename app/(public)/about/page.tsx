import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 px-6 text-center text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            About Restro
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            Our Story
          </h1>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Who We Are
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              Passion for Great Food & Hospitality
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Restro was founded with a simple vision — to create a
              place where people can enjoy unforgettable meals,
              exceptional service, and warm hospitality.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Our chefs combine fresh ingredients, modern culinary
              techniques, and authentic flavors to craft dishes that
              bring people together.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              Whether you are joining us for a casual lunch, family
              dinner, or special celebration, we strive to make every
              dining experience memorable.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop"
              alt="Restaurant Dining"
              className="h-[550px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Our Mission
          </p>

          <h2 className="mb-8 text-4xl font-bold">
            Creating Memorable Dining Experiences
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            We believe food is more than just a meal — it’s an
            experience. Our mission is to deliver exceptional taste,
            outstanding service, and a welcoming atmosphere that keeps
            our guests coming back.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="mb-5 text-5xl">🍽️</div>

            <h3 className="mb-4 text-2xl font-bold">
              Premium Dishes
            </h3>

            <p className="leading-relaxed text-gray-600">
              Crafted using fresh ingredients and creative culinary
              techniques by experienced chefs.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="mb-5 text-5xl">👨‍🍳</div>

            <h3 className="mb-4 text-2xl font-bold">
              Expert Chefs
            </h3>

            <p className="leading-relaxed text-gray-600">
              Our talented culinary team brings years of passion and
              expertise to every dish served.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="mb-5 text-5xl">✨</div>

            <h3 className="mb-4 text-2xl font-bold">
              Elegant Atmosphere
            </h3>

            <p className="leading-relaxed text-gray-600">
              Enjoy a modern and welcoming environment designed for
              comfort and unforgettable moments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Visit Us
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Experience Restro Today
          </h2>

          <p className="mb-10 text-lg text-gray-300">
            Join us for delicious food, warm hospitality, and memorable
            dining moments.
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
    </main>
  );
}