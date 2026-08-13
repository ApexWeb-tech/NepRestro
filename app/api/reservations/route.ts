import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabase/server';
import { sendReservationEmail, sendReservationStatusChangeEmail } from '../../../lib/email/resend';
import { logChange, getChanges, extractUserInfo } from '../../../lib/audit/logging';

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

      // Send pending confirmation email
      try {
        await sendReservationStatusChangeEmail(email, {
          name,
          status: 'pending',
          date,
          time,
          guests: parsedGuests,
          reservationId: data.id,
          reason: 'Table inventory is being configured',
        });
      } catch (emailError) {
        console.error('Email sending failed but reservation was created:', emailError);
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

  // Send confirmation email
  try {
    await sendReservationEmail(email, {
      name,
      date,
      time,
      guests: parsedGuests,
      tableName: assignedTable.name,
      reservationId: data.id,
    });
  } catch (emailError) {
    console.error('Email sending failed but reservation was created:', emailError);
  }

  // Log the change
  try {
    const userInfo = extractUserInfo(req);
    await logChange({
      action: 'create',
      entityType: 'reservation',
      entityId: data.id,
      changedByEmail: userInfo.email,
      changedByName: userInfo.name,
      changedByRole: userInfo.role,
      changes: getChanges(undefined, {
        name,
        email,
        phone,
        guests: parsedGuests,
        date,
        time,
        requests,
        status: 'confirmed',
        table_id: assignedTable.id,
      }),
      ipAddress: userInfo.ip,
    });
  } catch (logError) {
    console.error('Failed to log reservation creation:', logError);
  }

  return NextResponse.json({ reservation: data });
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { reservationId, status, reason } = body;

    if (!reservationId || !status) {
      return NextResponse.json(
        { error: 'Reservation ID and status are required.' },
        { status: 400 }
      );
    }

    const validStatuses = ['pending', 'confirmed', 'seated', 'completed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` },
        { status: 400 }
      );
    }

    // Get the current reservation
    const { data: reservation, error: fetchError } = await supabaseAdmin
      .from('reservations')
      .select('*')
      .eq('id', reservationId)
      .single();

    if (fetchError || !reservation) {
      return NextResponse.json(
        { error: 'Reservation not found.' },
        { status: 404 }
      );
    }

    // Don't allow status changes for completed reservations
    if (reservation.status === 'completed') {
      return NextResponse.json(
        { error: 'Cannot change status of a completed reservation.' },
        { status: 400 }
      );
    }

    // Don't allow status changes for cancelled reservations
    if (reservation.status === 'cancelled' && status !== 'cancelled') {
      return NextResponse.json(
        { error: 'Cannot change status of a cancelled reservation.' },
        { status: 400 }
      );
    }

    // Update the reservation status
    const { data: updatedReservation, error: updateError } = await supabaseAdmin
      .from('reservations')
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq('id', reservationId)
      .select('*, table:tables(id,name,seats,status)')
      .single();

    if (updateError) {
      return NextResponse.json(
        { error: updateError.message },
        { status: 500 }
      );
    }

    // Send status change email notification
    try {
      await sendReservationStatusChangeEmail(reservation.email, {
        name: reservation.name,
        status,
        date: reservation.date,
        time: reservation.time,
        guests: reservation.guests,
        reservationId: reservation.id,
        reason: reason || undefined,
      });
    } catch (emailError) {
      console.error('Failed to send status change email:', emailError);
      // Don't fail the request if email fails, but log it
    }

    // Log the change
    try {
      const userInfo = extractUserInfo(req);
      await logChange({
        action: 'update',
        entityType: 'reservation',
        entityId: reservationId,
        changedByEmail: userInfo.email,
        changedByName: userInfo.name,
        changedByRole: userInfo.role,
        changes: getChanges(reservation, {
          ...reservation,
          status,
          updated_at: new Date().toISOString(),
        }),
        reason: reason || undefined,
        ipAddress: userInfo.ip,
      });
    } catch (logError) {
      console.error('Failed to log status change:', logError);
    }

    return NextResponse.json({
      reservation: updatedReservation,
      message: `Reservation status updated to ${status} and customer notified via email.`,
    });
  } catch (error) {
    console.error('Error updating reservation:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  // Alias PUT to PATCH
  return PATCH(req);
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { reservationId, reason } = body;

    if (!reservationId) {
      return NextResponse.json(
        { error: 'Reservation ID is required.' },
        { status: 400 }
      );
    }

    // Check permissions - only manager and admin can delete
    const userInfo = extractUserInfo(req);
    const allowedRoles = ['manager', 'admin'];
    if (!allowedRoles.includes(userInfo.role)) {
      return NextResponse.json(
        { error: 'Only managers and admins can delete reservations.' },
        { status: 403 }
      );
    }

    // Get the reservation before deleting
    const { data: reservation, error: fetchError } = await supabaseAdmin
      .from('reservations')
      .select('*')
      .eq('id', reservationId)
      .single();

    if (fetchError || !reservation) {
      return NextResponse.json(
        { error: 'Reservation not found.' },
        { status: 404 }
      );
    }

    // Delete the reservation
    const { error: deleteError } = await supabaseAdmin
      .from('reservations')
      .delete()
      .eq('id', reservationId);

    if (deleteError) {
      return NextResponse.json(
        { error: deleteError.message },
        { status: 500 }
      );
    }

    // Send cancellation email
    try {
      await sendReservationStatusChangeEmail(reservation.email, {
        name: reservation.name,
        status: 'cancelled',
        date: reservation.date,
        time: reservation.time,
        guests: reservation.guests,
        reservationId: reservation.id,
        reason: reason || 'Your reservation has been cancelled.',
      });
    } catch (emailError) {
      console.error('Failed to send cancellation email:', emailError);
    }

    // Log the deletion
    try {
      await logChange({
        action: 'delete',
        entityType: 'reservation',
        entityId: reservationId,
        changedByEmail: userInfo.email,
        changedByName: userInfo.name,
        changedByRole: userInfo.role,
        reason: reason || 'Reservation deleted',
        ipAddress: userInfo.ip,
      });
    } catch (logError) {
      console.error('Failed to log deletion:', logError);
    }

    return NextResponse.json({
      success: true,
      message: 'Reservation deleted and customer notified via email.',
    });
  } catch (error) {
    console.error('Error deleting reservation:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
