"use client";

import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '../../lib/supabase/client';
import type { AuditLog } from '../../types/audit';

type SortField = 'created_at' | 'action' | 'entity_type' | 'changed_by_email';
type SortOrder = 'asc' | 'desc';

function formatDate(dateValue: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateValue));
}

const actionColors: Record<string, string> = {
  create: 'bg-green-100 text-green-800',
  update: 'bg-blue-100 text-blue-800',
  delete: 'bg-red-100 text-red-800',
};

const entityColors: Record<string, string> = {
  reservation: 'bg-purple-100 text-purple-800',
  table: 'bg-orange-100 text-orange-800',
  staff: 'bg-indigo-100 text-indigo-800',
  settings: 'bg-gray-100 text-gray-800',
};

export default function AuditLogManager() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchEmail, setSearchEmail] = useState('');
  const [filterAction, setFilterAction] = useState<'all' | 'create' | 'update' | 'delete'>('all');
  const [filterEntity, setFilterEntity] = useState<'all' | 'reservation' | 'table' | 'staff' | 'settings'>('all');
  const [sortField, setSortField] = useState<SortField>('created_at');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('audit_logs').select('*').order('created_at', { ascending: false });

    if (error) {
      toast.error('Failed to load audit logs');
      setLoading(false);
      return;
    }

    setLogs((data ?? []) as AuditLog[]);
    setLoading(false);
  };

  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const matchesEmail = searchEmail === '' || log.changed_by_email.toLowerCase().includes(searchEmail.toLowerCase());
      const matchesAction = filterAction === 'all' || log.action === filterAction;
      const matchesEntity = filterEntity === 'all' || log.entity_type === filterEntity;

      return matchesEmail && matchesAction && matchesEntity;
    });
  }, [logs, searchEmail, filterAction, filterEntity]);

  const sortedLogs = useMemo(() => {
    const sorted = [...filteredLogs];
    sorted.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [filteredLogs, sortField, sortOrder]);

  return (
    <section className='space-y-8'>
      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <p className='text-sm uppercase tracking-[0.3em] text-orange-500'>System</p>
        <h1 className='mt-3 text-4xl font-bold'>Audit Logs</h1>
        <p className='mt-3 text-gray-600'>Track all changes made by staff and managers to reservations, tables, and settings.</p>
      </div>

      <div className='rounded-3xl bg-white p-8 shadow-xl'>
        <div className='mb-6 grid gap-4 lg:grid-cols-3'>
          <div>
            <label className='block text-sm font-semibold text-slate-700'>Search by Email</label>
            <input
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
              placeholder='user@example.com'
              className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-slate-700'>Filter by Action</label>
            <select
              value={filterAction}
              onChange={(e) => setFilterAction(e.target.value as typeof filterAction)}
              className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
            >
              <option value='all'>All actions</option>
              <option value='create'>Created</option>
              <option value='update'>Updated</option>
              <option value='delete'>Deleted</option>
            </select>
          </div>
          <div>
            <label className='block text-sm font-semibold text-slate-700'>Filter by Entity</label>
            <select
              value={filterEntity}
              onChange={(e) => setFilterEntity(e.target.value as typeof filterEntity)}
              className='mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white'
            >
              <option value='all'>All entities</option>
              <option value='reservation'>Reservations</option>
              <option value='table'>Tables</option>
              <option value='staff'>Staff</option>
              <option value='settings'>Settings</option>
            </select>
          </div>
        </div>

        <div className='mb-6 flex flex-wrap gap-2'>
          <span className='text-sm text-slate-600'>
            Sort by:{' '}
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value as SortField)}
              className='inline rounded border border-slate-200 px-2 py-1 text-sm outline-none'
            >
              <option value='created_at'>Date</option>
              <option value='action'>Action</option>
              <option value='entity_type'>Entity Type</option>
              <option value='changed_by_email'>User Email</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className='ml-2 inline rounded border border-slate-200 px-2 py-1 text-sm transition hover:bg-slate-100'
            >
              {sortOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}
            </button>
          </span>
        </div>

        {loading ? (
          <div className='rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center text-slate-700'>Loading audit logs...</div>
        ) : sortedLogs.length === 0 ? (
          <div className='rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-700'>
            No audit logs match the current filters.
          </div>
        ) : (
          <div className='space-y-4'>
            {sortedLogs.map((log) => (
              <div
                key={log.id}
                className='rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300'
              >
                <div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between'>
                  <div className='flex flex-1 flex-wrap gap-2'>
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${actionColors[log.action]}`}>
                      {log.action.toUpperCase()}
                    </span>
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${entityColors[log.entity_type]}`}>
                      {log.entity_type}
                    </span>
                    <span className='inline-block rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-700'>
                      {log.changed_by_role}
                    </span>
                  </div>
                  <div className='text-sm text-slate-600'>{formatDate(log.created_at)}</div>
                </div>

                <div className='mt-3 grid gap-2 text-sm'>
                  <p className='text-slate-700'>
                    <strong>By:</strong> {log.changed_by_name} ({log.changed_by_email})
                  </p>
                  <p className='text-slate-700'>
                    <strong>Entity ID:</strong> {log.entity_id}
                  </p>
                  {log.reason && (
                    <p className='text-slate-700'>
                      <strong>Reason:</strong> {log.reason}
                    </p>
                  )}
                </div>

                {log.changes && Object.keys(log.changes).length > 0 && (
                  <div className='mt-4'>
                    <button
                      onClick={() => setExpandedLogId(expandedLogId === log.id ? null : log.id)}
                      className='text-sm font-semibold text-blue-600 transition hover:text-blue-700'
                    >
                      {expandedLogId === log.id ? '▼ Hide' : '► Show'} Changes
                    </button>

                    {expandedLogId === log.id && (
                      <div className='mt-3 space-y-2 rounded-lg bg-slate-100 p-4'>
                        {Object.entries(log.changes).map(([field, change]) => (
                          <div key={field} className='border-b border-slate-200 pb-2 last:border-0'>
                            <p className='text-sm font-semibold text-slate-900'>{field}</p>
                            <div className='mt-1 grid gap-1 text-xs'>
                              <p className='text-slate-600'>
                                <strong>From:</strong>{' '}
                                <span className='font-mono'>{JSON.stringify(change.old_value)}</span>
                              </p>
                              <p className='text-slate-600'>
                                <strong>To:</strong>{' '}
                                <span className='font-mono'>{JSON.stringify(change.new_value)}</span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
