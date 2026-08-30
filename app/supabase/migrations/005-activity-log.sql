-- Migration 005 — lead activity audit trail (Stage 4 QA fix 4).
--
-- activity_log: JSON-string entries (one per admin change: status and/or
--   next_action) stored in a text[] to match the original Stage 2 plan.
--   The admin API appends on every successful PATCH and keeps the newest
--   100 entries (see src/app/api/admin/leads/route.ts).
--
-- HOW TO APPLY: Supabase Dashboard -> SQL Editor -> paste and run, or
-- `supabase db execute --linked < this file`.

alter table public.leads add column if not exists activity_log text[] not null default '{}';
