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

create policy "Allow authenticated staff to manage tables" on tables for select, insert, update, delete using (
  auth.role() = 'authenticated' and auth.jwt() -> 'user_metadata' ->> 'role' = 'staff'
);

create policy "Allow authenticated staff to manage reservations" on reservations for select, update, delete using (
  auth.role() = 'authenticated' and auth.jwt() -> 'user_metadata' ->> 'role' = 'staff'
);

create policy "Allow public reservation creation" on reservations for insert with (true);

create policy "Allow reservation owners to view their reservations" on reservations for select using (
  auth.role() = 'authenticated' and email = auth.email()
);
