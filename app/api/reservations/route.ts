import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabase/server';

function parseTime(value: string) {
  const [hours, minutes] = value.split(':').map(Number);
  return Number.isFinite(hours) && Number.isFinite(minutes) ? hours * 60 + minutes : NaN;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, guests, date, time, requests } = body ?? {};

  if (!name || !email || !guests || !date || !time) {
    return NextResponse.json({ error: 'Name, email, guests, date, and time are required.' }, { status: 400 });
  }

  const parsedGuests = Number(guests);
  if (!parsedGuests || parsedGuests < 1) {
    return NextResponse.json({ error: 'Guest count must be at least 1.' }, { status: 400 });
  }

  const requestedDate = new Date(`${date}T${time}`);
  if (Number.isNaN(requestedDate.getTime())) {
    return NextResponse.json({ error: 'Invalid date or time format.' }, { status: 400 });
  }

  if (requestedDate < new Date()) {
    return NextResponse.json({ error: 'Cannot book a reservation in the past.' }, { status: 400 });
  }

  const requestedMinutes = parseTime(time);
  if (Number.isNaN(requestedMinutes)) {
    return NextResponse.json({ error: 'Invalid time format.' }, { status: 400 });
  }

  const { data: tables, error: tableError } = await supabaseAdmin
    .from('tables')
    .select('*')
    .gte('seats', parsedGuests)
    .order('seats', { ascending: true });

  if (tableError) {
    if (tableError.message?.includes('Could not find the table')) {
      const { data, error } = await supabaseAdmin
        .from('reservations')
        .insert([
          {
            name,
            email,
            phone,
            guests: parsedGuests,
            date,
            time,
            requests,
            status: 'pending',
            table_id: null,
          },
        ])
        .select('*')
        .single();

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({
        reservation: data,
        warning: 'Table inventory is not configured yet. Your reservation has been saved as pending and will be assigned once tables are available.',
      });
    }

    return NextResponse.json({ error: tableError.message }, { status: 500 });
  }

  if (!tables?.length) {
    return NextResponse.json({ error: 'No tables are configured for the requested guest count.' }, { status: 400 });
  }

  const { data: existingReservations, error: reservationError } = await supabaseAdmin
    .from('reservations')
    .select('table_id,date,time,status')
    .eq('date', date)
    .in('status', ['pending', 'confirmed', 'seated']);

  if (reservationError) {
    return NextResponse.json({ error: reservationError.message }, { status: 500 });
  }

  const blockedTableIds = new Set(
    (existingReservations ?? [])
      .filter((reservation) => reservation.table_id)
      .filter((reservation) => {
        const currentMinutes = parseTime(reservation.time);
        return !Number.isNaN(currentMinutes) && Math.abs(currentMinutes - requestedMinutes) < 90;
      })
      .map((reservation) => reservation.table_id as string)
  );

  const assignedTable = tables.find((table) => !blockedTableIds.has(table.id));

  if (!assignedTable) {
    return NextResponse.json(
      {
        error: 'We could not find an available table for that date and time. Please choose a different slot or contact the restaurant.',
      },
      { status: 409 }
    );
  }

  const { data, error } = await supabaseAdmin
    .from('reservations')
    .insert([
      {
        name,
        email,
        phone,
        guests: parsedGuests,
        date,
        time,
        requests,
        status: 'confirmed',
        table_id: assignedTable.id,
      },
    ])
    .select('*, table:tables(id,name,seats,status)')
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ reservation: data });
}
