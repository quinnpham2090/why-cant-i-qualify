# Attorney Review Packet — "Why Can't I Qualify?"

Prepared from the Stage 1 audit (see `AUDIT-STAGE1-HANDOFF.md` at the repo
root) and Stage 2 implementation. Purpose: give counsel everything needed to
close the compliance gate (EXECUTION-PLAN.md Phase 6) in one pass.

## 1. Deviations and findings requiring sign-off

| # | Finding | Current state | Decision needed |
|---|---|---|---|
| 1 | **Testimonials shipped despite deferral** (EXECUTION-PLAN §11 deferred them pending this gate) | Disclosed on-page as "illustrative composites, not customer reviews"; gated behind `NEXT_PUBLIC_TESTIMONIALS_ENABLED` (default off) | (a) Clear wording under FTC 16 CFR 255, or (b) confirm removal. Feature flag controls launch state |
| 2 | **Reg Z payment footnote** | Now reads: "Payment estimates include principal and interest, estimated property taxes, homeowners insurance, HOA dues where applicable, and mortgage insurance where applicable. Your actual payment may be higher…" (Reg Z §1026.24 companion notice per EXECUTION-PLAN §0 constraint #2) | Approve exact wording |
| 3 | **FL license display**: "Licensed in the State of Florida — Florida Office of Financial Regulation (OFR), License #MLD1991" (`src/config/disclosures.ts`) | Operator-confirmed number; format unverified | Confirm license class, number format, and required phrasing under FL Ch. 494 |
| 4 | **Footer missing business phone + email** (FL §494.0026(2) requires name, business address, phone, email of broker and originator) | Address + NMLS IDs present; phone/email pending from operator; Footer wired to render them from `disclosures.ts` | Supply exact contact details; confirm placement satisfies §494.0026(2) |
| 5 | **Legal pages were placeholders** | Privacy/Terms now carry real but self-drafted text; GLBA notice is part of privacy page | Full attorney review of `src/app/privacy`, `terms`, `accessibility`, `do-not-sell` |
| 6 | **Adverse-action posture** (FLR §7.1 vs SLR §2.7 tension — documented in 11-Compliance) | Implemented as EDUCATIONAL posture: neutral tiers, no "you do not qualify" output, no credit data, no notices machinery | Confirm the educational posture is defensible for this exact UX, or scope the Reg B/FCRA notice build |
| 7 | **Exact credit score collected** (research docs said "band only") | Self-reported 300–850 input, −20 haircut, disclosed; band alternative still offered | Confirm acceptable |
| 8 | **No GLBA "notice"** — FDBOR treats lead-gen as in-scope (in effect since 7/1/2024) | Privacy page discloses collection/use/retention; no GLBA-styled notice | Confirm whether a GLBA privacy notice must be delivered (vs merely posted) at lead capture |
| 9 | **CAN-SPAM postal address** in consumer confirmation email | `List-Unsubscribe` header present; footer carries NMLS but **no physical address** | Supply the postal address to embed in the email footer |
| 10 | **Retention**: `diagnostic_results` (full financial snapshot per lead) retained indefinitely | MAP 24-month retention documented for consents; nothing for diagnostics | Set retention period + deletion trigger for `diagnostic_results` |
| 11 | **TCPA consent text** | Single un-pre-checked checkbox, exact text stored with IP/UA (`TCPA_CONSENT_TEXT`); no SMS sending exists yet | Pre-approve wording for when SMS launches (FTSA $500/violation, treble in FL) |

## 2. Citation corrections already applied in docs (context for counsel)

Per the compliance-digest flags: FDBOR is **in effect** (repeal claim stale);
§494.00295 is repealed — use §494.0025(4)/(9) + Rule 69V-40.011; there is no
"in general" Reg Z exemption; the "seven MAP categories" premise is wrong; FCC
one-to-one consent rule vacated 1/24/2025, revoke-all delayed to 4/11/2026.
All compliance docs still carry "reverify citations" caveats — treat statutory
cites in this packet as a starting point for verification, not gospel.

## 3. Deliverables expected back

1. Approved/revised copy for items 1–4 and 9 (ready to paste into
   `src/config/disclosures.ts`).
2. Reviewed privacy policy + terms (rendered from `src/app/privacy`, `terms`).
3. Written position on adverse-action posture (item 6).
4. Retention ruling for `diagnostic_results` (item 10).
5. Sign-off memo suitable for the repo record (`CHANGELOG` entry).

## 4. What the product intentionally does NOT do (attorney should verify this list is accurate)

- No SSN, no DOB, no document uploads, no credit pull of any kind.
- No pre-approval, approval, denial, guarantee, or likelihood percentage —
  neutral tiers only (Strong fit → Limited fit), enforced by
  `compliance/copy-lint.mjs` in CI over every string in `src/`.
- No outcome gating on the lead form; no AI in the pipeline (deterministic
  engine only, version-stamped for recordkeeping).
- All estimates labeled educational; assumptions disclosed on the results page.
