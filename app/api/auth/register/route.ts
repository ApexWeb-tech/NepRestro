import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const inviteCode = process.env.AUTH_INVITE_CODE;

export async function POST(req: NextRequest) {
  if (!supabaseUrl || !serviceRoleKey || !inviteCode) {
    return NextResponse.json(
      {
        error: 'Authentication server is not configured. Please set SUPABASE_SERVICE_ROLE_KEY and AUTH_INVITE_CODE in .env.local.',
      },
      { status: 500 }
    );
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);
  const body = await req.json();
  const { email, password, inviteCode: submittedCode } = body ?? {};

  if (!email || !password || !submittedCode) {
    return NextResponse.json({ error: 'Email, password, and invite code are required.' }, { status: 400 });
  }

  if (submittedCode !== inviteCode) {
    return NextResponse.json({ error: 'Invalid invite code.' }, { status: 403 });
  }

  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { role: 'staff' },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ user: data.user });
}
