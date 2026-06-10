import type { Metadata } from 'next';

type PageProps = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: 'Table Details | Restro Admin',
};

export default function TableDetailPage({ params }: PageProps) {
  return (
    <section className='rounded-3xl bg-white p-8 shadow-xl'>
      <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>Table detail</p>
      <h1 className='mt-3 text-3xl font-bold'>Table #{params.id}</h1>
      <p className='mt-4 text-gray-600'>Review availability and seating for table {params.id}.</p>
    </section>
  );
}
