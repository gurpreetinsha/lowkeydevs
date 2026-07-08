import { getSupabaseClient } from './supabase';
import type { User } from '@supabase/supabase-js';

export interface VerifyAdminResult {
  isAuthenticated: boolean;
  isAdmin: boolean;
  user: User | null;
}

/**
 * Verifies that the request is authenticated and that the user possesses the 'admin' role.
 * Automatically refreshes the session cookies if the access token is expired and a refresh token is present.
 */
export async function verifyAdmin(cookies: any, locals?: any): Promise<VerifyAdminResult> {
  const accessToken = cookies.get('sb-access-token')?.value;
  const refreshToken = cookies.get('sb-refresh-token')?.value;

  if (!accessToken) {
    return { isAuthenticated: false, isAdmin: false, user: null };
  }

  const supabase = getSupabaseClient(locals);
  if (!supabase) {
    return { isAuthenticated: false, isAdmin: false, user: null };
  }

  try {
    // 1. Validate the access token with Supabase Auth
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (!error && user) {
      // User token is valid, now check if they have the admin role
      const isAdmin = await checkAdminRole(supabase, user.id);
      return { isAuthenticated: true, isAdmin, user };
    }

    // 2. If access token is invalid/expired, attempt to refresh session if refresh token is present
    if (refreshToken) {
      const { data: refreshData, error: refreshError } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      if (!refreshError && refreshData.user && refreshData.session) {
        const newSession = refreshData.session;
        
        // Update the cookies with the new session tokens
        cookies.set('sb-access-token', newSession.access_token, {
          path: '/',
          secure: true,
          httpOnly: true,
          sameSite: 'strict',
          maxAge: newSession.expires_in,
        });
        cookies.set('sb-refresh-token', newSession.refresh_token, {
          path: '/',
          secure: true,
          httpOnly: true,
          sameSite: 'strict',
          maxAge: newSession.expires_in,
        });

        const isAdmin = await checkAdminRole(supabase, refreshData.user.id);
        return { isAuthenticated: true, isAdmin, user: refreshData.user };
      }
    }
  } catch (err) {
    console.error('Error during admin verification:', err);
  }

  return { isAuthenticated: false, isAdmin: false, user: null };
}

/**
 * Checks if the specified user has the 'admin' role in the database.
 */
async function checkAdminRole(supabase: any, userId: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .single();

    if (error || !data) {
      return false;
    }

    return data.role === 'admin';
  } catch (err) {
    console.error('Error checking admin role in DB:', err);
    return false;
  }
}
