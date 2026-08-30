-- Migration 002 — soft-capture support (Stage 2 Phase 3).
--
-- capture_type:   'hard' = the full lead form (name+email+consent+diagnostic).
--                 'soft' = the "email my results" ask (name+email only).
--                 Legacy rows (before this migration) stay NULL and are
--                 treated as 'hard' by the admin dashboard.
-- nurture_status: tracks the 5-email sequence (Phase 5 cron). 'none' until
--                 the first send; 'unsubscribed' halts all nurture sends.
--
-- HOW TO APPLY: Supabase Dashboard -> SQL Editor -> paste and run, or
-- `supabase db execute --linked < this file`.

alter table public.leads add column if not exists capture_type text;
alter table public.leads add column if not exists nurture_status text not null default 'none';

-- Backfill: rows that predate the column were hard captures.
update public.leads set capture_type = 'hard' where capture_type is null;

-- Admin-dashboard query paths.
create index if not exists leads_capture_type_idx on public.leads (capture_type);
create index if not exists leads_nurture_status_idx on public.leads (nurture_status);
