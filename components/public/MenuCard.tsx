type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className='rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-2xl'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <h3 className='text-xl font-semibold text-slate-900'>{item.name}</h3>
          <p className='mt-3 text-sm leading-relaxed text-slate-500'>{item.description}</p>
        </div>
        <span className='rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600'>
          {item.price}
        </span>
      </div>
    </div>
  );
}
