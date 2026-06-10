export type TableStatus = 'available' | 'reserved' | 'occupied' | 'maintenance';

export type Table = {
  id: string;
  name: string;
  seats: number;
  status: TableStatus;
  created_at: string;
  updated_at?: string | null;
};