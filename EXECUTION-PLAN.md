# EXECUTION PLAN — "Why Can't I Qualify?" V1

**Status:** PLAN ONLY — no build performed yet.
**Derived from:** the AUDIT (this session) of `00-Executive-Summary.md`, `16-Final-Recommendation/final-recommendation.md`, `SAFE_LANGUAGE_COMPLIANCE_REPORT.md`, `11-Compliance/MASTER-COMPLIANCE-REPORT.md`, plus `04-Diagnostic-Engine/*`.
**Operator decisions (this session):**

| Decision | Value |
|---|---|
| Launch state (V1) | **Florida** — geofenced |
| Build tooling | **DeepSeek Harness + LLMs** (no Lovable) |
| Stack | **Next.js (App Router, TypeScript) + Supabase + Vercel** — free tiers |
| Contact channels (V1) | **Email + Cal.com booking. NO SMS in V1.** |
| Legal | Internal company attorney review gate before publishing (external attorney step deferred by operator) |
| Cost policy | Free tiers first |
| Code location | `git@github.com:quinnpham2090/why-cant-i-qualify.git` (same repo as planning docs; code in `app/` subdirectory) |

---

## 0. Binding compliance constraints (from the audit — non-negotiable in code)

These are encoded as build-time rules, not aspirations:

1. **Forbidden-word gate.** No shipping copy may contain: `approved`, `pre-approved`, `guarantee(d)`, `100%`, `instant approval`, `everyone qualifies`, `bad credit ok`, `we'll get you approved`, or synonyms — enforced by a lint script over all UI strings (SAFE report §12; MAP Rule § 1014.3(q)). Safe equivalents: "you may prequalify", "educational estimate", "may be a good candidate".
2. **Ranges only, never single numbers.** All dollar outputs rendered as low–mid–high ranges (rule-engine-spec §2 `Range`), with the Reg Z "taxes and insurance not included / actual payment will be greater" notice attached wherever a payment or dollar figure appears (Reg Z § 1026.24(f)(3)(i)(C); SAFE §3).
3. **Standard disclaimer block** (SAFE §11.6) rendered in the same viewport as every result; EHL + NMLS footer on every page (MASTER §22.1).
4. **No numeric "approval likelihood" score shown to consumers as a probability.** Composite tiers use SAFE's neutral labels: `Strong fit / Good fit / Some considerations / Limited fit`. The 0–100 engine score stays internal (audit finding: `likely_approved`/`likely_denied` labels in rule-engine-spec test fixtures are per-se MAP violations and must be renamed).
5. **No gating on the engine output.** A "Limited fit" result still gets the same CTA to talk to the MLO (avoids Reg B "credit decision" characterization).
6. **Deterministic engine only in V1.** No AI/LLM output anywhere in the V1 product surface (audit: AI explanation layer deferred to V2 with model card + bias audit + human review).
7. **No credit pull of any kind.** Remove/ignore `consent_to_soft_pull` from the V1 input schema. Self-reported credit band only (keeps FCRA/Reg B exposure at the "educational" posture).
8. **Florida geofence.** State dropdown in the questionnaire offers FL only in V1; any non-FL visitor sees an "available in Florida only" notice. Expanding states requires the licensing gate (§7).
9. **TCPA/CCPA blocks wired before any form can submit** (see Phase 4): un-pre-checked consent checkbox, "consent is not a condition", revocation text, FL FTSA-aware language, CCPA Notice at Collection link + Do-Not-Sell link (audit: shipping capture forms without these is the single largest dollar exposure).
10. **24-month recordkeeping from day one** (MAP § 1014.5): every submission stores the exact consent text shown + timestamp + IP + user-agent in Supabase.
11. **Hidden haircuts disclosed.** The engine's −20 FICO haircut and income haircuts must appear in the results "how we calculated this" disclosure (audit §6.1 — material-omission doctrine).
12. **Attorney gate before any public traffic.** Nothing is indexed or advertised until §11 sign-off. Preview via Vercel password-protected preview or robots-disallowed staging.

---

## 1. Phase 0 — Bootstrap (prerequisites)

**0.1 Inputs I still need from you (paste when ready):**

- MLO full name (as licensed) + individual **NMLS ID**
- Company legal name + DBA (if any) + company **NMLS ID**
- **Florida license number** (FL Office of Financial Regulation) + the exact licensed capacity (mortgage broker vs. mortgage lender license — this changes the required footer wording)
- Registered business physical address (CAN-SPAM + footer requirement)
- Domain status: is `whycantiqualify.com` (or chosen variant) purchased? Registrar? (Cloudflare recommended, ~$10/yr)
- Emails to use: transactional sender (e.g., `hello@`), attorney-facing contact, Cal.com account email

**0.2 Accounts to create (all free tier):**

| Service | Purpose | Free tier limits that matter |
|---|---|---|
| GitHub | Repo (code in `app/`) | Private repo fine |
| Vercel | Hosting/build | Hobby: 100 GB bandwidth/mo — ample for V1 |
| Supabase | Postgres + auth + storage | Free: 2 projects, 500 MB DB, paused after 1 week of API inactivity — **mitigate in 6.4** |
| Resend | Transactional email | 3,000 emails/mo, 100/day |
| Cal.com | Appointment booking | Free tier (single user) |
| Cloudflare Turnstile | Anti-spam on forms | Free |
| Cloudflare Web Analytics (or Umami on free host) | Analytics | Free; privacy-friendly; no cookie banner needed |
| Brevo (backup) | Nurture sequences | Free 300 emails/day — used only if a free plan can't do sequences |

**0.3 Repo layout (added inside the existing repo):**

```
why-cant-i-qualify/
├── (existing 16 planning folders + research docs — untouched)
├── EXECUTION-PLAN.md            ← this file (or moved to repo root)
└── app/                         ← the Next.js application
    ├── src/app/                 # routes: /, /check/*, /results, /privacy, /terms, /accessibility, /do-not-sell
    ├── src/engine/              # deterministic diagnostic engine (port of 04-Diagnostic-Engine)
    ├── src/content/             # all UI copy as typed constants (lint-gated)
    ├── src/components/
    ├── src/lib/supabase/
    ├── compliance/
    │   ├── copy-lint.ts         # forbidden-word gate (CI)
    │   ├── disclosure-map.md    # which disclosure renders where
    │   └── CHANGELOG-copy.md    # every copy change logged (MAP recordkeeping aid)
    └── .github/workflows/ci.yml # build + copy-lint + typecheck
```

---

## 2. Phase 1 — Core engine (Days 1–3)

Pure TypeScript port of `04-Diagnostic-Engine/rule-engine-spec.md` — no I/O, fully unit-tested.

1. Port modules: `inputs → income → debt → piti → affordability → cash → credit → property → documentation → obstacles → scorer → output`.
2. Port all 8 test fixtures **with renamed tier labels** (`strong_fit / good_fit / some_considerations / limited_fit`); golden-file snapshots of full `DiagnosticResult` for each fixture.
3. FL-specific table entries: FL effective property-tax rate, FL hazard-insurance default (higher coastal baseline), no state income tax note.
4. Disclosure-of-assumptions output: the result object gains an explicit `assumptions_used[]` array (rate assumption, haircuts applied, tax/insurance estimates) that the results page renders — satisfies constraint 11.
5. CI: engine tests + copy-lint run on every push.

**Exit criteria:** all fixtures pass; zero forbidden words in any string table; assumptions array populated for every fixture.

## 3. Phase 2 — Site shell & content architecture (Days 3–5)

1. Next.js App Router scaffold, Tailwind, mobile-first (60–70% of mortgage search is mobile per the master plan).
2. Global footer component: EHL logo, "Equal Housing Lender", company + MLO NMLS, FL OFR license line, NMLS Consumer Access link, "Not a commitment to lend", compensation disclosure, links: Privacy / Terms / Accessibility / Do Not Sell. (MASTER §16.5 footer template, adapted to single-state.)
3. Landing page sections per Final Rec §16.1.6: hero, trust bar ("No credit pull. No SSN. ~5 minutes. 100% educational. Licensed MLO NMLS #…"), what-you-get, who-it's-for (3 audiences), how-it-works, FAQ, about-the-MLO, bottom CTA.
4. All hero/tagline copy taken from SAFE-report-safe phrasing only ("Get a free, no-credit-pull mortgage readiness snapshot…" + immediate disclaimer proximity).
5. SEO foundation: metadata, sitemap, robots (disallow /results), FAQ/Article JSON-LD, Open Graph.

**Exit criteria:** static shell renders on mobile; footer passes the MASTER §22.1 checklist; copy-lint green.

## 4. Phase 3 — Questionnaire + results (Days 5–8)

1. Multi-step questionnaire (9 required + conditional inputs from Final Rec §16.1.7), progress bar, Turnstile-protected, progress persisted to Supabase (anonymous session id — no account needed).
2. Never-asked fields enforced in schema: no SSN, DOB, full address, bank info, employer name.
3. Results page: range headline (never single figure), confidence chip, 7-pillar scorecard with SAFE neutral labels, primary obstacle card, secondary obstacles, strengths, eligible programs (with VA/USDA non-affiliation disclaimers from rule-engine-spec §4.12), "What-if" scenarios, assumptions-disclosure panel, standard disclaimer block in-viewport.
4. No probability badges, no gating: every result shows the same two CTAs.

**Exit criteria:** fixtures T1–T8 reproduce expected tiers through the live UI; disclaimer visible without scrolling past the result.

## 5. Phase 4 — Lead capture, email, booking (Days 8–11)

1. **Hard capture only in V1** (name, email, phone, ZIP, preferred time) — audit recommends deferring soft-capture email-only mode until attorney confirms newsletter-consent language; single consent surface = simpler TCPA record.
2. Before the submit button: TCPA consent block (MASTER §10.8 template, un-pre-checked checkbox, FL FTSA-aware) + lead-transfer disclosure + CCPA Notice at Collection link (CA residents may still arrive) + "We may be compensated" line.
3. Supabase tables: `leads`, `consents` (exact text + version + timestamp + IP + UA), `diagnostic_results` (inputs + outputs + engine version) — 24-month retention policy written into the Privacy Policy.
4. Resend transactional emails: confirmation-to-consumer (with disclaimer block + revocation instructions), notification-to-MLO (with consent record attached).
5. Nurture sequence (5 emails / 21 days per Final Rec) drafted in `content/emails/`, copy-lint gated, loaded into whichever free tool survives the test (Brevo vs Kit free limits).
6. Cal.com embed on booking step ("Schedule a free 15-minute review"); booking requires the hard-capture record so every calendar event carries a consent trail.
7. No SMS: Twilio not configured; no "text me my results" CTA anywhere in V1 (constraint 9, audit Tier-1 TCPA risk).

**Exit criteria:** end-to-end test submission → consent row + lead row + both emails + Cal.com event; STOP/unsubscribe honored paths documented.

## 6. Phase 5 — Compliance hardening (Days 11–14)

1. Legal pages drafted in `content/legal/` from MASTER §24 templates: Privacy Policy (GLBA-aware, CCPA Notice at Collection, 24-month retention statement), Terms of Use, Accessibility Statement (WCAG 2.1 AA target), Do-Not-Sell/Share page.
2. WCAG pass: contrast 4.5:1, keyboard-only full-flow test, labels on every input, focus states, reduced-motion respect, alt text; run axe + WAVE; fix findings.
3. FL advertising checklist verification against `11-Compliance/FL-Mortgage-LeadGen-Compliance-Research.md` (license-number display format, designation wording, FTSA). Flag every uncertain item into a single `compliance/OPEN-QUESTIONS-FOR-ATTORNEY.md`.
4. Security basics: Supabase RLS on leads/consents, Turnstile keys server-side validated, no API keys in client bundle, rate limit on submit endpoint.
5. Recordkeeping: copy CHANGELOG + versioned consent text + engine-version stamping on stored results.

**Exit criteria:** axe/WAVE zero serious; OPEN-QUESTIONS doc complete; staging URL ready.

## 7. Phase 6 — Attorney review gate (blocking)

1. Hand your attorney: staging URL, `compliance/disclosure-map.md`, `OPEN-QUESTIONS-FOR-ATTORNEY.md`, all email templates, the exact consent text, and this plan's constraint list (§0).
2. No launch activity until written sign-off. Fixes from review get applied, copy-lint re-run, CHANGELOG updated.
3. **Expansion gates unlocked only after sign-off + license verification:** each new state = (a) license confirmed in that state, (b) state disclosure row added, (c) geofence widened. SMS unlocked only after attorney-approved TCPA/FTSA consent flow + Twilio. AI explanation layer (V2) only after model documentation + bias review per audit §6.5.

## 8. Phase 7 — Launch (post sign-off)

1. Connect domain, enforce HTTPS, production robots.txt (allow), submit sitemap to Google Search Console.
2. Free listings first (per "free services" policy): Google Business Profile, NMLS Consumer Access profile completeness, 3–5 SEO articles from Final Rec Phase-2 list published (each copy-linted).
3. Analytics (Cloudflare Web Analytics) + funnel events: start / complete / capture / booking.
4. Paid ads deferred (out of free-tier scope) until you opt in.

## 9. Phase 8 — Post-launch (week 2+)

- Weekly: check funnel events, fix drop-off, answer nothing publicly without copy-lint.
- Monthly: nurture sequence performance; Supabase free-tier activity safeguard; back up DB dump.
- V1.5 candidates (from master plan, each needs its own mini-audit): What-if simulator expansion, soft-capture mode, second state.

---

## 10. Free-tier risk register

| Risk | Mitigation |
|---|---|
| Supabase free project pauses after ~1 week of API inactivity | Scheduled ping (Vercel cron, free) hitting a health endpoint; DB dump nightly in Phase 8 |
| Resend 100 emails/day cap | V1 volumes far below; upgrade path = $20/mo, approved only by you |
| Vercel Hobby limits (bandwidth/serverless) | Static-heavy design keeps usage minimal; Pro only if traffic demands |
| Free plan nurture limits (Kit/Brevo) | Sequence lives in plain files; provider is swappable without copy changes |
| Single free-domain SSL/CDN | Cloudflare free tier in front if needed |

## 11. Out of scope for V1 (explicit)

SMS/Twilio · AI explanation layer · scenario simulator beyond 3 what-ifs · multi-state pages · hard credit pull · loan application · mobile app · lead selling/stacking · protected-class data · paid ads · testimonials section (deferred until FTC Part 255 language is attorney-cleared).

---

## 12. Immediate next actions

1. You: paste the Phase-0.1 identifiers (NMLS IDs, FL license #, entity name, address) + confirm domain status.
2. You: create (or confirm existing) Vercel / Supabase / Resend / Cal.com accounts — or authorize me to generate config templates you can click through.
3. You: say "go" (and pick autonomous vs step-by-step from the earlier options) — I then execute Phase 1.

**Reminder:** this plan is not legal advice; the attorney gate in Phase 6 is the launch condition.

---

## 13. V1.5 → V1.6 fix pass — status log (FIX_PLAN_FINAL_REVIEW.md)

Applied 2026-08-28. Source review: `FIX_PLAN_FINAL_REVIEW.md` (20-item priority matrix).

| Item | Status | Notes |
|---|---|---|
| P1 income-feedback gap | ✅ Applied | `qualifyingIncome = max(incomeRes.monthly, best non-QM estimate)` feeds DTI; DSCR/asset-qualifier override debt+payment sub-scores on coverage bands; disclosed via `qualifying_income_non_qm` / `dscr_coverage` assumptions. NQM3 diagnostic: qualifyingIncome $5,952/mo, DTI 34.1%. |
| P2 caps + rate limit | ✅ Applied | `src/lib/rate-limit.ts` (5/min/IP, pruned Map) + field caps (name 120/email 254/phone 20/zip 10), 32KB body cap → 413, ZIP format check, `Retry-After` on 429. Verified live: 6th POST → 429, 49k name → 413. |
| P3 credit-event question | ✅ Applied | Wizard step 3 asks event type + years-since (0–10, 0.5 steps); NQM5 fixture added (16 tests total, all passing). |
| P4 placeholder floors | ✅ Applied (with residual) | Live retrieval 2026-08-28: Angel Oak P&L (640 w/stmts → 80% LTV; P&L-only 720), NewFi CPA P&L (80% LTV), Acra (660/80%), Angel Oak non-warrantable condo (90%/85% LTV tiers, 640 inherited). `verify:true` count 2 → 0; `RESEARCH_NON_QM.md §4` updated. Residual: reserves/rate add-ons/asset divisor remain broker-portal-only (QuickQuote/BLU) — still conservative, still disclosed. |
| P5 official EHL mark | ✅ Applied | `EHLMark.tsx` now draws the official EHO geometry (square border + trapezoid roof + equal-sign slabs) in the footer, neutral color, text fallback kept. hud.gov/Wikimedia asset fetches are blocked from this environment; attorney to swap in the exact HUD binary at the P5 review if desired. |
| P6 legal SEO + sitemap/robots | ✅ Applied | Unique descriptions on 4 legal pages; `sitemap.ts` (4 URLs), `robots.ts` (disallow `/api/`, sitemap ref), `metadataBase` set. Verified live via curl. |
| P7 non-QM pricing footnote | ✅ Applied | Range table shows the 0.75–1.75 pt note whenever a non-QM program is eligible; QM-only results unaffected. |
| P8 Turnstile | ⏳ Operator | Code path verified (missing token → 422 with secret set, live-tested). **Domain purchase deferred by operator pending compliance-team review**; rate limit + caps cover the gap meanwhile. |
| P9 Vercel deploy | ⏳ Operator | Dashboard action per plan §9. `NEXT_PUBLIC_SITE_URL` added to `.env.example` for cutover. |
| P10 questionnaire wizard | ✅ Applied | 4 steps with Next/Back, per-step validation, sticky progress, `aria-current="step"`, `aria-live` announcements, `aria-invalid` + per-field errors, maxLengths. **Funnel events added** (`/api/event` → `funnel_events`): start / step_complete / complete / results_viewed / capture_start / capture_success / book_click — no PII, no financial figures; run `supabase/schema.sql` funnel_events section to activate storage (route 204s gracefully until then). |
| P11 sanitize name | ✅ Applied | Route slices to 60 then escapes (`escapeHtml` exported from email.ts); subject truncates again at 60. |
| P12 lowercase + List-Unsubscribe | ✅ Applied | Email trimmed+lowercased before insert/send; `List-Unsubscribe` header on both Resend sends. |
| P13 co-borrower | ✅ Applied | Engine now actually weights it: income summed into qualifying income; credit = lower-of-two after haircut (disclosed). Questionnaire asks income + tier. |
| P14 pillar icons | ✅ Applied | 7 distinct pillar icons (briefcase/scale/gauge/wallet/house-calendar/home/document-check) + dedicated rising-steps strength icon replacing the reused checkmark. |
| P15 hero illustration | ✅ Applied | Inline `HeroIllustration.tsx` (contemplative figure by window, warm palette) — no third-party asset/license; subject-neutral for FH Act review. |
| P16 OG image + favicon | ✅ Applied | `opengraph-image.tsx` (1200×630, warm palette, NMLS) + `icon.svg` EHO tile. OG tags verified live. |
| P17 dark mode | ⏸ Deferred | Per plan §17. |
| P18 testimonials | ⏸ Deferred | Per plan §18 (FTC Part 255 attorney gate). |
| P19 remaining engine fields | ✅ Applied | HOA fee, flood zone, documented gift funds (+ amount), first-time-buyer — all wired to engine paths that already consumed them; each disclosed when it changes the estimate. `selfEmployedNetIncome2yrAvg` remains an engine-only input (no UI question; the income-documentation question covers the intent). |
| P20 refresh cadence | ✅ Applied | `npm run copy-lint` now fails when any `NON_QM_PROGRAMS.lastVerified` is >90 days old; currently 7/7 fresh. Calendar reminder is an operator task. |

**Gate status:** tsc 0 · eslint 0 · copy-lint OK (40 files) + non-qm-refresh OK · vitest 16/16 · `next build` clean · API smoke-tested (413/429/422/ZIP paths) · sitemap/robots/OG verified by curl. Smoke-test lead rows deleted from Supabase.

**Still required before public launch:** attorney sign-off (Phase 6), P4 broker-portal fields (reserves/rate) or a documented decision to keep them as disclosed planning values, Turnstile keys (deferred with domain pending compliance-team review), Vercel deploy, run the `funnel_events` section of `supabase/schema.sql`.
