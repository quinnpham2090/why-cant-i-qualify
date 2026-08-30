-- Migration 003 — lead scoring + admin dashboard (Stage 2 Phase 4).
--
-- lead_score / lead_tier: Part 8 §8.2 0–100 model, computed server-side at
--   capture time. Nullable: legacy rows and diagnostic-only rows have none.
-- status: the operator pipeline (Part 8 §8.7). Free-text on purpose — the
--   dashboard offers the canonical values but the MLO can type anything.
-- last_contacted_at: dashboard "Last Contact" column.
-- next_action: dashboard "Next Action" column.
--
-- HOW TO APPLY: Supabase Dashboard -> SQL Editor -> paste and run, or
-- `supabase db execute --linked < this file`.

alter table public.leads add column if not exists lead_score int;
alter table public.leads add column if not exists lead_tier text;
alter table public.leads add column if not exists last_contacted_at timestamptz;
alter table public.leads add column if not exists next_action text;

-- Status already exists in the base schema (default 'new'); index it together
-- with the new tier for dashboard filters.
create index if not exists leads_lead_tier_idx on public.leads (lead_tier);
create index if not exists leads_score_idx on public.leads (lead_score desc nulls last);
