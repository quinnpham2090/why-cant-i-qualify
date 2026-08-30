-- ============================================================
-- Why Can't I Qualify? — Supabase schema (V1)
-- Run in: Supabase Dashboard -> SQL Editor
-- Tables: leads, consents, diagnostic_results
-- Design: anon has NO access (policies removed by migration 001 — the public
--         anon key is discoverable by anyone). The server route writes with
--         the service role, which bypasses RLS. This keeps PII locked down
--         while closing the direct-to-DB spam channel.
-- Retention: MAP Rule 12 CFR 1014.5 requires keeping advertising /
--         consent records >= 24 months. Do not add hard-delete jobs
--         shorter than that without attorney sign-off.
-- ============================================================

create extension if not exists "pgcrypto";

-- ---------- leads ----------
-- NOTE: this base schema mirrors migrations 001-005 for fresh installs.
-- Existing deployments apply the numbered migrations instead (002 capture/
-- nurture columns, 003 scoring columns, 004 nurture timestamps, 005 audit).
create table if not exists public.leads (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  name            text not null,
  email           text not null,
  phone           text,
  zip             text,
  preferred_time  text,
  source          text not null default 'readiness-check',
  state           text not null default 'FL',
  composite_tier  text,
  engine_version  text,
  status          text not null default 'new',
  capture_type    text,
  nurture_status  text not null default 'none',
  lead_score      int,
  lead_tier       text,
  last_contacted_at timestamptz,
  next_action     text,
  last_nurture_at timestamptz,
  unsubscribed_at timestamptz,
  activity_log    text[] not null default '{}'
);

-- ---------- consents ----------
-- One row per consent surface shown, for MAP/TCPA recordkeeping.
create table if not exists public.consents (
  id               uuid primary key default gen_random_uuid(),
  lead_id          uuid not null references public.leads(id) on delete cascade,
  consent_type     text not null,            -- 'tcpa' | 'lead_transfer' | 'educational'
  consent_text     text not null,            -- exact text displayed
  consent_version  text not null default '1.0',
  consented_at     timestamptz not null default now(),
  ip               text,
  user_agent       text
);

-- ---------- diagnostic_results ----------
-- Inputs + outputs + engine version, for reproducibility/audit.
create table if not exists public.diagnostic_results (
  id              uuid primary key default gen_random_uuid(),
  lead_id         uuid references public.leads(id) on delete set null,
  created_at      timestamptz not null default now(),
  inputs          jsonb not null,
  result          jsonb not null,
  engine_version  text not null
);

-- ---------- funnel_events ----------
-- Anonymous product analytics (FIX_PLAN V1.6 P10 acceptance: completion-rate
-- measurement). The client sends NO PII and no financial figures — only event
-- names, wizard step, and coarse enum answers (lib/funnel.ts). Public insert
-- only; reads are service-role.
create table if not exists public.funnel_events (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  event_name   text not null,
  step         int,
  meta         jsonb,
  client_ts    timestamptz
);

-- ---------- Row Level Security ----------
alter table public.leads               enable row level security;
alter table public.consents            enable row level security;
alter table public.diagnostic_results  enable row level security;
alter table public.funnel_events       enable row level security;

-- anon INSERT policies were REMOVED by supabase/migrations/001-drop-anon-policies.sql
-- (Stage 2 Phase 1.5): the public anon key is discoverable by anyone, and
-- `check (true)` inserts let it bypass the app's rate limiting, field caps,
-- consent enforcement, and Turnstile. All writes flow through the server-only
-- service role, which bypasses RLS — the app loses nothing.
--
-- drop policy "anon_insert_leads" on public.leads;
-- drop policy "anon_insert_consents" on public.consents;
-- drop policy "anon_insert_results" on public.diagnostic_results;
-- drop policy "anon_insert_funnel_events" on public.funnel_events;

-- Indexes for the MLO dashboard / follow-up queries (service role).
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx      on public.leads (status);
create index if not exists consents_lead_id_idx  on public.consents (lead_id);
