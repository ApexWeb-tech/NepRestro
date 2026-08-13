-- Supabase table schema for restaurant table reservations.
-- Run this in your Supabase SQL editor or use the SQL migration system.

create table if not exists tables (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  seats int not null check (seats > 0),
  status text not null default 'available' check (status in ('available', 'reserved', 'occupied', 'maintenance')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists reservations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  guests int not null check (guests > 0),
  date date not null,
  time time not null,
  requests text,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'seated', 'completed', 'cancelled')),
  table_id uuid references tables(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_reservations_date on reservations (date);
create index if not exists idx_reservations_status on reservations (status);
create index if not exists idx_reservations_table_id on reservations (table_id);

alter table tables enable row level security;
alter table reservations enable row level security;

create policy "Allow authenticated staff to manage tables"
  on tables
  for all
  using (
    auth.role() = 'authenticated'
    and auth.jwt() -> 'user_metadata' ->> 'role' = 'staff'
  );

create policy "Allow authenticated staff to manage reservations"
  on reservations
  for all
  using (
    auth.role() = 'authenticated'
    and auth.jwt() -> 'user_metadata' ->> 'role' = 'staff'
  );

-- Audit logs table for tracking all changes
create table if not exists audit_logs (
  id uuid primary key default gen_random_uuid(),
  action text not null check (action in ('create', 'update', 'delete')),
  entity_type text not null, -- 'reservation', 'table', 'staff'
  entity_id uuid not null,
  changed_by_email text not null,
  changed_by_name text not null,
  changed_by_role text not null,
  changes jsonb, -- { field: { old_value, new_value } }
  reason text,
  ip_address text,
  created_at timestamptz not null default now()
);

create index if not exists idx_audit_logs_entity_id on audit_logs (entity_id);
create index if not exists idx_audit_logs_created_at on audit_logs (created_at);
create index if not exists idx_audit_logs_changed_by_email on audit_logs (changed_by_email);
create index if not exists idx_audit_logs_action on audit_logs (action);

alter table audit_logs enable row level security;

create policy "Allow authenticated users to view audit logs"
  on audit_logs
  for select
  using (
    auth.role() = 'authenticated'
  );

create policy "Allow system to insert audit logs"
  on audit_logs
  for insert
  with check (true);
