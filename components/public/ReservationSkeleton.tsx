export default function ReservationSkeleton() {
  return (
    <main className='bg-[#111111] text-white'>

      {/* ── Hero Skeleton ── */}
      <section className='relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#1a1a1a]'>
        <div className='relative z-10 mx-auto max-w-4xl px-6 text-center'>

          {/* Accent line + icon */}
          <div className='mb-6 flex items-center justify-center gap-3'>
            <div className='h-px w-12 bg-white/10' />
            <div className='h-5 w-5 rounded-full bg-white/10 animate-pulse' />
            <div className='h-px w-12 bg-white/10' />
          </div>

          {/* Badge */}
          <div className='mx-auto h-8 w-40 rounded-full bg-white/10 animate-pulse' />

          {/* Heading */}
          <div className='mx-auto mt-6 h-12 w-80 rounded-xl bg-white/10 animate-pulse sm:h-14 sm:w-96' />

          {/* Description line 1 */}
          <div className='mx-auto mt-6 h-5 w-full max-w-xl rounded-lg bg-white/10 animate-pulse' />

          {/* Description line 2 */}
          <div className='mx-auto mt-3 h-5 w-3/4 max-w-md rounded-lg bg-white/10 animate-pulse' />

          {/* CTA Button */}
          <div className='mx-auto mt-10 h-14 w-52 rounded-full bg-white/10 animate-pulse' />

        </div>
      </section>

      {/* ── Form + Info Cards Skeleton ── */}
      <section className='py-24'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid items-start gap-12 lg:grid-cols-2'>

            {/* Left: Form Card Skeleton */}
            <div
              className='rounded-3xl border p-8 shadow-xl md:p-10'
              style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
            >
              {/* Icon + Heading */}
              <div className='mb-6 flex items-center gap-4'>
                <div className='h-14 w-14 flex-shrink-0 rounded-full bg-white/10 animate-pulse' />
                <div className='flex-1 space-y-2'>
                  <div className='h-7 w-48 rounded-lg bg-white/10 animate-pulse' />
                  <div className='h-4 w-64 rounded bg-white/10 animate-pulse' />
                </div>
              </div>

              <div className='mb-8 h-px bg-white/10' />

              <div className='space-y-6'>

                {/* Row 1 */}
                <div className='grid gap-6 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <div className='h-4 w-24 rounded bg-white/10 animate-pulse' />
                    <div className='h-12 w-full rounded-xl bg-white/10 animate-pulse' />
                  </div>
                  <div className='space-y-2'>
                    <div className='h-4 w-16 rounded bg-white/10 animate-pulse' />
                    <div className='h-12 w-full rounded-xl bg-white/10 animate-pulse' />
                  </div>
                </div>

                {/* Row 2 */}
                <div className='grid gap-6 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <div className='h-4 w-16 rounded bg-white/10 animate-pulse' />
                    <div className='h-12 w-full rounded-xl bg-white/10 animate-pulse' />
                  </div>
                  <div className='space-y-2'>
                    <div className='h-4 w-20 rounded bg-white/10 animate-pulse' />
                    <div className='h-12 w-full rounded-xl bg-white/10 animate-pulse' />
                  </div>
                </div>

                {/* Row 3 */}
                <div className='grid gap-6 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <div className='h-4 w-12 rounded bg-white/10 animate-pulse' />
                    <div className='h-12 w-full rounded-xl bg-white/10 animate-pulse' />
                  </div>
                  <div className='space-y-2'>
                    <div className='h-4 w-12 rounded bg-white/10 animate-pulse' />
                    <div className='h-12 w-full rounded-xl bg-white/10 animate-pulse' />
                  </div>
                </div>

                {/* Textarea */}
                <div className='space-y-2'>
                  <div className='h-4 w-36 rounded bg-white/10 animate-pulse' />
                  <div className='h-28 w-full rounded-xl bg-white/10 animate-pulse' />
                </div>

                {/* Submit Button */}
                <div className='h-14 w-full rounded-full bg-white/10 animate-pulse' />

                {/* Note */}
                <div className='mx-auto h-4 w-64 rounded bg-white/10 animate-pulse' />

              </div>
            </div>

            {/* Right: Info Cards Skeleton */}
            <div className='space-y-6'>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className='rounded-2xl border p-6 shadow-md'
                  style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                >
                  <div className='flex items-start gap-4'>
                    <div className='h-12 w-12 flex-shrink-0 rounded-full bg-white/10 animate-pulse' />
                    <div className='flex-1 space-y-3'>
                      <div className='h-5 w-40 rounded-lg bg-white/10 animate-pulse' />
                      <div className='h-4 w-full rounded bg-white/10 animate-pulse' />
                      <div className='h-4 w-3/4 rounded bg-white/10 animate-pulse' />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Benefits Skeleton ── */}
      <section className='bg-[#0d0d0d] py-24'>
        <div className='mx-auto max-w-7xl px-6'>

          {/* Section Header */}
          <div className='mb-16 flex flex-col items-center gap-4'>
            <div className='h-8 w-40 rounded-full bg-white/10 animate-pulse' />
            <div className='h-10 w-72 rounded-xl bg-white/10 animate-pulse' />
            <div className='h-5 w-96 rounded-lg bg-white/10 animate-pulse' />
            <div className='h-5 w-80 rounded-lg bg-white/10 animate-pulse' />
          </div>

          {/* Benefits Grid */}
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className='rounded-2xl border p-8 text-center shadow-md'
                style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
              >
                <div className='mx-auto mb-6 h-14 w-14 rounded-full bg-white/10 animate-pulse' />
                <div className='mx-auto h-6 w-36 rounded-lg bg-white/10 animate-pulse' />
                <div className='mx-auto mt-4 h-4 w-full rounded bg-white/10 animate-pulse' />
                <div className='mx-auto mt-2 h-4 w-4/5 rounded bg-white/10 animate-pulse' />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FAQ Skeleton ── */}
      <section className='py-24'>
        <div className='mx-auto max-w-5xl px-6'>

          {/* Section Header */}
          <div className='mb-16 flex flex-col items-center gap-4'>
            <div className='h-8 w-16 rounded-full bg-white/10 animate-pulse' />
            <div className='h-10 w-80 rounded-xl bg-white/10 animate-pulse' />
            <div className='h-5 w-96 rounded-lg bg-white/10 animate-pulse' />
          </div>

          {/* FAQ Items */}
          <div className='space-y-4'>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className='rounded-2xl border p-6 shadow-md'
                style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
              >
                <div className='flex items-center justify-between'>
                  <div className='h-5 w-3/4 rounded-lg bg-white/10 animate-pulse' />
                  <div className='h-5 w-5 rounded bg-white/10 animate-pulse' />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}