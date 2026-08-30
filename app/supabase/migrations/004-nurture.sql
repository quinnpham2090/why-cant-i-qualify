-- Migration 004 — nurture tracking (Stage 2 Phase 5).
--
-- last_nurture_at: timestamp of the last successful nurture send — drives the
--   monthly cadence (send the evergreen when >= 30 days have passed).
-- nurture_status (from migration 002) doubles as the sequence position:
--   'none' -> 'day_0' -> 'day_2' -> 'day_5' -> 'day_10' -> 'day_21' -> 'monthly'
--   'unsubscribed' halts everything (CAN-SPAM).
-- unsubscribed_at: recordkeeping for opt-out requests.
--
-- HOW TO APPLY: Supabase Dashboard -> SQL Editor -> paste and run, or
-- `supabase db execute --linked < this file`.

alter table public.leads add column if not exists last_nurture_at timestamptz;
alter table public.leads add column if not exists unsubscribed_at timestamptz;
