-- Migration 001 — remove anon INSERT policies (Stage 2 Phase 1.5).
--
-- WHY: the public anon key is, by design, embedded in the client bundle and
-- discoverable by anyone. The original schema granted `anon` INSERT on all
-- four tables with `check (true)`, which let any visitor bypass the app's
-- rate limiting, field caps, consent enforcement, and Turnstile by POSTing
-- straight to Supabase's REST endpoint with the public key.
--
-- The application NEVER writes as `anon`: `/api/lead` and `/api/event` use
-- the server-only SUPABASE_SERVICE_ROLE_KEY, which bypasses RLS. Dropping
-- these policies therefore breaks nothing in the app while closing the
-- direct-to-DB spam channel.
--
-- HOW TO APPLY: Supabase Dashboard -> SQL Editor -> paste and run, or
-- `supabase db execute --linked < this file`.

drop policy if exists "anon_insert_leads" on public.leads;
drop policy if exists "anon_insert_consents" on public.consents;
drop policy if exists "anon_insert_results" on public.diagnostic_results;
drop policy if exists "anon_insert_funnel_events" on public.funnel_events;

-- RLS stays ENABLED on all four tables. With no policies, anon/authenticated
-- roles have no access at all; only the service role (server code) writes.
alter table public.leads              enable row level security;
alter table public.consents           enable row level security;
alter table public.diagnostic_results enable row level security;
alter table public.funnel_events      enable row level security;

-- Verification: this should return zero rows.
--   select * from pg_policies where policyname like 'anon_insert%';
