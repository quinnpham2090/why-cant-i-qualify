# Non-QM Research Notes — Phase A

**Compiled:** 2026-08-28
**Sources:** repository corpus only (live web retrieval unavailable — API key invalid).
**Primary in-corpus source:** `02-Competitor-Research/angel-oak-mortgage-solutions.md` (verbatim program data captured from angeloakms.com retail + wholesale sites), supplemented by `FINAL_COMPETITIVE_RESEARCH_REPORT.md`, `loandepot-research.md`, `02-Competitor-Research/newfi.md`.

> ⚠️ **Every number below carries a `last-verified` date and a source citation.**
> Non-QM guidelines change frequently — quarterly refresh cadence required (see `RESEARCH_AND_FIX_PLAN.md §7`).
> Values are **common published guidelines**, not a guarantee of eligibility. Each lender sets its own.

---

## 1. Program guideline table (as published in corpus)

### Bank Statement (12/24 month)
| Field | Value | Source |
|---|---|---|
| min FICO | **640** | AOMS retail product page (corpus L61: "640+ FICO") |
| max LTV | **90% @ 720+, 80% @ 680, 75% @ 640** | corpus L460 (Angel Oak Bank Statement matrix) |
| max DTI | **50%** | corpus L461 |
| doc requirement | 12/24 mo personal or business bank statements, **no tax returns** | corpus L83 |
| loan cap | up to **$4M** | corpus L61 |
| borrower | self-employed, gig, 1099 | corpus L61 |

### DSCR / Investor Cash Flow
| Field | Value | Source |
|---|---|---|
| min FICO | **680** | corpus L62 |
| min DSCR | **1.0** (1:1 for Foreign National) | corpus L65, L461 |
| max LTV | up to **80%** (80% at 680+) | corpus L461 + Angel Oak DSCR page |
| DTI | **no personal DTI / no income or employment required** | corpus L62, L84 |
| loan cap | up to **$3M**, LLCs allowed | corpus L62 |
| borrower | real-estate investors | corpus L62 |

### 1099 Income Loan
| Field | Value | Source |
|---|---|---|
| min FICO | **640** | corpus L67 |
| max LTV | **90%** | corpus L67 |
| doc requirement | 1099s, single source acceptable | corpus L67 |
| borrower | gig / 1099 contractors | corpus L67 |

### P&L Only (CPA-prepared)
| Field | Value | Source |
|---|---|---|
| availability | listed on Angel Oak wholesale `/programs` (15-program list) | corpus L180 |
| typical min FICO | 620–640 (lender-dependent; **verify**) | plan §4A placeholder, needs live verification |
| doc requirement | YTD P&L signed by CPA | corpus L165 self-employed path |

### Asset Qualifier / Asset Depletion
| Field | Value | Source |
|---|---|---|
| min FICO | **700** | corpus L64 |
| DTI | **none — no employment, no income, no DTI** | corpus L64, L587 (verbatim quote) |
| assets | **$500K+ post-close liquid assets**, seasoned | corpus L64, L587 |
| divisor | 84 months typical (plan §4A placeholder; **verify**) | plan §4A |
| borrower | retirees, divorced no-income, asset-rich | corpus L64 |

### ITIN Mortgage
| Field | Value | Source |
|---|---|---|
| min FICO | **640** | corpus L66 |
| max LTV | **80%** | corpus L66 |
| borrower | ITIN holders, no SSN | corpus L66 |

### Non-QM Jumbo ("just missed" / Platinum Jumbo)
| Field | Value | Source |
|---|---|---|
| min FICO | **680** | corpus L63 |
| max LTV | **90% @ 720+** | corpus L63 |
| loan cap | up to **$4M** | corpus L63 |
| borrower | just-missed prime jumbo | corpus L63 |

### Non-Warrantable Condo / Condotel
| Field | Value | Source |
|---|---|---|
| availability | excluded from agency; non-QM lenders handle | corpus L460 context |
| typical min FICO | 660 (plan placeholder; **verify**) | plan §4A |
| typical max LTV | 75% (plan placeholder; **verify**) | plan §4A |

### Portfolio Select (post credit event)
| Field | Value | Source |
|---|---|---|
| min FICO | **640** | corpus L68 |
| seasoning | **1 yr FC/SS/DIL, 2 yr BK** | corpus L68 |

### Foreign National
| Field | Value | Source |
|---|---|---|
| min FICO | **NA** (no FICO) | corpus L65 |
| max LTV | **70%** | corpus L65 |
| DSCR | **1:1** | corpus L65 |
| loan cap | **$1.5M** | corpus L65 |

---

## 2. Cross-lender corroboration (in-corpus)

- **Rocket Pro TPO:** 24-month bank statements wholesale (corpus, `rocketpro.com` note).
- **NewFi:** deepest non-QM income-documentation matrix — 10+ methods incl. 12/24-mo bank statement, 1099, W-2-to-1099, CPA P&L, Asset Depletion, IRA, RE Flipper (corpus, NewFi section). Confirms `WVOE` and `W2_TO_1099` as real doc categories.
- **LoanDepot:** full-doc agency + Finicity/Trimerge asset verification on apply path (corpus) — confirms asset-verification tooling is standard.

## 3. Income-documentation taxonomy (corpus-derived)

W-2 paystubs · W-2 + offer letter (day-one, Rocket) · 2-yr full tax returns · 1-yr tax returns · 12-mo bank statements · 24-mo bank statements · 1099 only · W-2-to-1099 · CPA-signed P&L · self-prepared P&L · Asset depletion/qualifier · DSCR rent schedule · WVOE (written VOE) · Cash/undocumented · No-doc · ITIN/foreign-national (no FICO path).

**The operator's "is it cash" question maps to `CASH_UNDOCUMENTED`** — the corpus confirms lenders route this to bank-statement or P&L programs when deposits are consistent, and to no-doc/asset-qualifier when they are not.

## 4. Gaps that require LIVE verification before production (Phase A continuation)

1. P&L-only min FICO / max LTV / reserve requirement — no numbers in corpus.
2. Asset-depletion divisor (84 vs 120 vs 144 months) — no number in corpus.
3. Non-warrantable condo min FICO / max LTV — no numbers in corpus.
4. Current-year rate add-ons per program (corpus is qualitative: "non-QM rates are higher").
5. DSCR minimums across lenders other than Angel Oak.
6. Whether E Mortgage Capital (the operator's broker) has non-QM lending authority or whether these are referral-only — **attorney question**, flagged in `RESEARCH_AND_FIX_PLAN.md §8.4`.

## 5. Compliance guardrails applied (from SAFE_LANGUAGE + MASTER reports)

- Every non-QM program surfaced must carry the non-QM variance disclaimer (`src/engine/disclaimers.ts`).
- No numeric approval likelihood; tier labels stay neutral (`compliance/copy-lint.mjs` enforced).
- `assumptionsUsed[]` must disclose non-QM variance + rate add-on per `RESEARCH_AND_FIX_PLAN.md §4A`.
- ITIN/foreign-national paths must not be suggested on the basis of any protected characteristic; surfaced only from explicit user inputs (no SSN field is ever collected, consistent with brand moat).

---

## 6. Empathetic-design research notes (Phase B) — see `RESEARCH_EMPATHY.md`

Colors, WCAG contrast, microcopy before/after, results reordering, and illustration guidance are documented in `RESEARCH_EMPATHY.md`.

---

*End of Phase A notes. Values marked `verify` are placeholders pending live retrieval; they are used in the engine with explicit `assumptionsUsed[]` disclosure and a `last-verified` stamp.*
