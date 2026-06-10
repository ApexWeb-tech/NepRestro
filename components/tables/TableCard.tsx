import type { Table } from '../../types/table';

type TableCardProps = {
  table: Table;
  onStatusChange?: (tableId: string, status: Table['status']) => void;
  onDelete?: (tableId: string) => void;
};

const statusColor: Record<Table['status'], string> = {
  available: 'bg-emerald-100 text-emerald-700',
  reserved: 'bg-amber-100 text-amber-700',
  occupied: 'bg-slate-100 text-slate-900',
  maintenance: 'bg-rose-100 text-rose-700',
};

export default function TableCard({ table, onStatusChange, onDelete }: TableCardProps) {
  return (
    <article className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <p className='text-sm uppercase tracking-[0.35em] text-orange-500'>Table</p>
          <h2 className='mt-2 text-2xl font-semibold text-slate-950'>{table.name}</h2>
        </div>
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusColor[table.status]}`}>
          {table.status}
        </span>
      </div>

      <div className='mt-6 grid gap-3 sm:grid-cols-2'>
        <div>
          <p className='text-sm text-slate-500'>Capacity</p>
          <p className='mt-1 text-lg font-semibold text-slate-900'>{table.seats} guests</p>
        </div>
        <div>
          <p className='text-sm text-slate-500'>Created</p>
          <p className='mt-1 text-lg text-slate-900'>{new Date(table.created_at).toLocaleDateString()}</p>
        </div>
      </div>

      {onStatusChange || onDelete ? (
        <div className='mt-6 flex flex-col gap-3'>
          {onStatusChange && (
            <select
              value={table.status}
              onChange={(event) => onStatusChange(table.id, event.target.value as Table['status'])}
              className='w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:bg-white'
            >
              <option value='available'>Available</option>
              <option value='reserved'>Reserved</option>
              <option value='occupied'>Occupied</option>
              <option value='maintenance'>Maintenance</option>
            </select>
          )}
          {onDelete && (
            <button
              type='button'
              onClick={() => onDelete(table.id)}
              className='w-full rounded-full border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-100'
            >
              Remove table
            </button>
          )}
        </div>
      ) : null}
    </article>
  );
}
