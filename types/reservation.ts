export type ReservationStatus = 'pending' | 'confirmed' | 'seated' | 'completed' | 'cancelled';

export type Reservation = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  guests: number;
  date: string;
  time: string;
  requests?: string | null;
  status: ReservationStatus;
  table_id?: string | null;
  created_at: string;
  updated_at?: string | null;
  table?: {
    id: string;
    name: string;
    seats: number;
    status: TableStatus;
  } | null;
};

export type TableStatus = 'available' | 'reserved' | 'occupied' | 'maintenance';