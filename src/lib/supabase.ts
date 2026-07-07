import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let cachedClient: SupabaseClient | null = null;

export function getSupabaseClient(locals?: any): SupabaseClient | null {
  if (cachedClient) {
    return cachedClient;
  }

  const supabaseUrl =
    locals?.runtime?.env?.SUPABASE_URL ||
    import.meta.env.SUPABASE_URL ||
    process.env.SUPABASE_URL ||
    '';
  const supabaseServiceRoleKey =
    locals?.runtime?.env?.SUPABASE_SERVICE_ROLE_KEY ||
    import.meta.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    '';

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.warn(
      'Supabase environment variables (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY) are missing.'
    );
    return null;
  }

  const client = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  cachedClient = client;
  return client;
}

// Export for backward compatibility (e.g., in Node/tests where static env is available)
export const supabase = getSupabaseClient();

