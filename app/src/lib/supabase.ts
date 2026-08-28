import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client (uses the service-role key to bypass RLS for
 * trusted inserts). Only import this from server code (route handlers, server
 * components). NEVER expose the service-role key to the client.
 */
export function getSupabaseServer() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null; // not configured yet
  return createClient(url, key, { auth: { persistSession: false } });
}

/** Whether Supabase is configured (lets the site degrade gracefully pre-setup). */
export function isSupabaseConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}
