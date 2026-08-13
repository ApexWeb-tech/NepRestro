import { supabase } from '../supabase/client';

export async function fetchWithUserInfo(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const { data: { user } } = await supabase.auth.getUser();

  const headers = new Headers(options.headers || {});

  if (user?.email) {
    headers.set('x-user-email', user.email);
  }

  if (user?.user_metadata?.name) {
    headers.set('x-user-name', user.user_metadata.name);
  }

  if (user?.user_metadata?.role) {
    headers.set('x-user-role', user.user_metadata.role);
  }

  return fetch(url, {
    ...options,
    headers,
  });
}
