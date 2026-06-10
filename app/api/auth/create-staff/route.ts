import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(req: NextRequest) {
  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { error: 'Server is not configured. Set SUPABASE_SERVICE_ROLE_KEY in .env.local.' },
      { status: 500 }
    );
  }

  const body = await req.json();
  const { name, email, phone, password, position } = body ?? {};

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: 'Name, email, and password are required.' },
      { status: 400 }
    );
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);
  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      role: 'staff',
      name,
      phone,
      position,
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ user: data.user });
}
