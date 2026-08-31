# System Stress Test — 200 Scenarios

> **Generated:** 2026-08-31T06:58:39.685Z · **Engine:** runDiagnostic (deterministic, no I/O) + computeLeadScore + POST /api/lead (mocked persistence)
> **Composition:** 66 hand-picked edge scenarios (EX-*) + 134 systematic grid walks (SYS-*)

## Summary

- **Scenarios:** 200 · **unique input fingerprints:** 200
- **Engine crashes:** 0 · **non-finite values:** 0 · **range inversions:** 0 · **tier-band mismatches:** 0 · **determinism failures:** 0
- **API storage:** 200/200 accepted (mocked Supabase + Resend) · junk batch: 10/10 correctly rejected with 4xx
- **Composite tiers:** limited_fit 75 · workable 51 · good_fit 40 · strong_fit 20 · some_considerations 14
- **Composite score:** min 35 · p50 58 · p90 85 · max 94
- **Back-end DTI:** p10 23% · p50 60% · p90 138% · max 357269%
- **Engine timing:** avg 0.41ms · p95 1.16ms · max 19.19ms
- **Empty eligiblePrograms:** 0 scenarios · **DTI back<front inversions:** 0 · **monotonic variant violations:** 0 (of 160 variant checks)

## Tier × Purpose cross-tab

| Purpose | strong fit | good fit | workable | some considerations | limited fit |
|---|---|---|---|---|---|
| purchase | 6 | 14 | 28 | 7 | 31 |
| refinance rate term | 5 | 9 | 6 | 1 | 9 |
| refinance cash out | 4 | 10 | 5 | 3 | 7 |
| renovation | 2 | 4 | 6 | 2 | 14 |
| construction otc | 3 | 3 | 6 | 1 | 14 |

## Findings (9)

| Severity | Code | Count | Example scenario | Detail (first occurrence) |
|---|---|---|---|---|
| LOW | DTI_EXTREME | 9 | EX-001 | back-end 357269% |

### Affected scenarios per code

- **DTI_EXTREME** (9): EX-001, EX-002, EX-033, SYS-009, SYS-014, SYS-080, SYS-109, SYS-127, SYS-134

## Fixes and improvements applied from this stress run

1. **API crash on `null` body (HIGH, fixed):** `POST /api/lead` threw a 500 on a JSON `null` body (found by the junk batch). The route now rejects non-object bodies with 400 before any property access.
2. **`estimatedPiti` mid outside its own range (HIGH, fixed):** low/high spanned the 36%→50% DTI affordability band while mid was the target-price payment, so scenarios paying well under or over their own DTI capacity rendered a mid outside the range (e.g. "$1,300 – $2,100 / about $400"). The range now keys low/high to the confidence spread around the user's actual payment, matching the T17 presentation-width design used by `maxLoanRange`.
3. **Absurd DTI percentages at near-zero income (LOW, fixed in the UI):** income "$1" (form-valid) produced "357269%". The results cards now read "Exceeds income" when the ratio is above 1. The engine math is unchanged — the composite score already collapses such profiles to limited_fit.
4. **Known edge, accepted:** the 9 DTI_EXTREME scenarios are all near-zero-income profiles. The questionnaire requires income > 0; only a deliberately mistyped tiny income reaches them, and the "> 100%" display now degrades gracefully.

## Slowest scenarios

- SYS-134 — 19.19ms — grid walk 134: renovation, $2800/mo commission, FICO 520, debt $2200, down 20.0% of $350000, townhome
- SYS-133 — 3.98ms — grid walk 133: refinance cash out, $14000/mo self employed, FICO 700, debt $2200, down 20.0% of $285000, condo warrantable
- SYS-132 — 3.28ms — grid walk 132: refinance rate term, $4200/mo retired fixed, FICO 700, debt $3500, down 20.0% of $285000, condo warrantable
- SYS-131 — 3.26ms — grid walk 131: purchase, $4200/mo retired fixed, FICO 740, debt $3500, down 20.0% of $220000, condo nonwarrantable
- SYS-130 — 2.74ms — grid walk 130: construction otc, $4200/mo variable hourly, FICO 620, debt $400, down 20.0% of $550000, multi 2 4
- SYS-129 — 1.77ms — grid walk 129: renovation, $4200/mo social security, FICO 580, debt $3500, down 10.0% of $350000, multi 2 4
- SYS-128 — 1.51ms — grid walk 128: refinance cash out, $14000/mo self employed, FICO 620, debt $3500, down 3.5% of $350000, condo warrantable
- SYS-127 — 1.35ms — grid walk 127: refinance rate term, $2800/mo self employed, FICO 580, debt $3500, down 0.0% of $220000, condo warrantable
- SYS-126 — 1.20ms — grid walk 126: purchase, $5800/mo retired fixed, FICO 660, debt $0, down 20.0% of $550000, condo nonwarrantable
- SYS-125 — 1.16ms — grid walk 125: construction otc, $14000/mo variable hourly, FICO 800, debt $1000, down 3.5% of $220000, condo nonwarrantable
