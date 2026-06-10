import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
	// allow runtime to continue; requests will fail if env not set
	console.warn('Supabase environment variables are not set. Auth will not work until they are configured.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

