# Why Can't I Qualify — Mortgage Readiness Check

A free, educational mortgage-readiness tool for Florida home buyers. Seven
short steps produce an honest, plain-language snapshot: an estimated price and
payment range, a per-pillar readiness breakdown, the obstacles that matter
most, and the programs (NACA, Section 184, non-QM, FL-specific) that fit the
situation. No credit pull, no Social Security number, no lead resale.

**Status: pre-launch.** Legal pages, testimonials, and license display are
gated behind attorney sign-off (see `compliance/ATTORNEY-PACKET.md`).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript strict
- Tailwind CSS v4 (`@theme inline` design tokens in `src/app/globals.css`)
- Vitest (engine + validation tests), ESLint (eslint-config-next)
- Supabase (Postgres; writes via service role only)
- Resend (transactional + nurture email), Cloudflare Turnstile (anti-spam)
- Deployed on Vercel (cron for the nurture sequence via `vercel.json`)

## Layout

```
src/
  engine/        Pure TS diagnostic engine (no React, fully unit-tested)
  components/    Questionnaire wizard, ResultsView, capture forms, footer
  app/           Routes: /, /check, /how-it-works, /book, /blog, legal pages,
                 /admin/leads (auth-gated), /api/*
  lib/           Validation, save/resume, scoring, email, blog, nurture
  config/        disclosures.ts — single source of truth for legal identity
  content/blog/  Markdown articles (parsed at build time)
supabase/        schema.sql + numbered migrations (apply in order)
compliance/      Copy-lint gate, attorney packet
```

## Commands

```bash
npm run dev         # dev server
npm run build       # production build
npm test            # vitest (engine + validation + scoring)
npm run lint        # eslint
npm run copy-lint   # forbidden-claims gate + non-QM data freshness check
npx tsc --noEmit    # typecheck
```

All five checks must pass before any deploy. `npm test` regenerates
`BORROWER_STRESS_TEST.md` as a side effect — that is expected.

## Environment variables

Copy `.env.example` → `.env.local` and fill in. Every variable is documented
in `SECURITY_SETUP.md`, including Vercel setup order, Turnstile enablement,
Supabase migration steps, and admin-key handling. Required for full function:
`SUPABASE_*`, `RESEND_API_KEY`, `EMAIL_TO`. Optional at launch: Turnstile,
`NEXT_ADMIN_API_KEY` (lead dashboard), `NURTURE_CRON_SECRET` (email sequence).

## Database

`supabase/schema.sql` is the base schema. Apply the numbered migrations in
order (`001-drop-anon-policies.sql` … `004-nurture.sql`) — they are written to
run in the Supabase SQL editor as-is. The app writes with the service-role key
only; anon policies are intentionally dropped in migration 001.

## Compliance gates (build-time)

- `npm run copy-lint` scans user-facing strings for prohibited claims
  ("approved", "guarantee", urgency/bait patterns) and fails the build on a
  match. Negation-aware disclaimers pass.
- The same script verifies non-QM program data was re-verified within 90 days
  (`src/engine/non-qm.ts`, `lastVerified`).

## Engine rules

`src/engine` is pure and deterministic: same inputs → same result, versioned
via `ENGINE_VERSION`. Any behavior change must ship with fixture tests
(`src/engine/__tests__/fixtures.test.ts`) and, when it changes outcomes, a
stress-test review (`src/engine/__tests__/borrower-stress.test.ts`).
