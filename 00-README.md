# PROJECT INDEX — "Why Can't I Qualify?" Master Planning Document

> A complete research, strategy, design, and specification package for a consumer-facing mortgage qualification diagnostic lead-generation website.

## Start Here

📄 **`00-Executive-Summary.md`** — 5,000 words. Read this first. TL;DR + 15-section summary.

📄 **`16-Final-Recommendation/final-recommendation.md`** — 6,000 words. The "should I build this?" answer + step-by-step plan.

📄 **`11-Compliance/MASTER-COMPLIANCE-REPORT.md`** — 30,000 words. CRITICAL. Read before launch.

## Document Map (16 Parts)

### 📊 Research & Analysis
- **`01-Market-Research/market-research.md`** — U.S. mortgage market analysis, denial rates, pain points
- **`02-Competitor-Research/competitor-analysis.md`** — Master analysis of 10 direct lenders (Rocket, Better, UWM, Caliber, Chase, BofA, Wells, Guild, NewRez, LoanDepot)
- **`02-Competitor-Research/`** — Individual competitor analyses
  - `NerdWallet_Mortgage_Affordability_Calculator_Analysis.md`
  - `angel-oak-mortgage-solutions.md`, `tomo-mortgage.md`, `newfi.md`
  - `CNN-Money-Mortgage-Calculator-Analysis.md`, `KIPLINGER_MORTGAGE_CALCULATOR_ANALYSIS.md`
  - `bank-of-america-mortgage.md`
- **`10-SEO/keyword-research-affordability-qualification.md`** — SEO keyword research
- **`10-SEO/seo-strategy.md`** — Keyword strategy and content architecture
- **`SEO/research/state-intent-mortgage-keywords.md`** — Per-state keyword research, HFA master list
- **`mortgage-keyword-research.md`** — "Specific obstacles" keyword research
- **`mortgage_lead_economics_report.md`** — 808-line, 21-source economics report
- **`mortgage_economics_executive_summary.md`** — Economics condensed summary

### 🎯 Product Definition
- **`03-Product-Definition/product-concept.md`** — Product concept, inputs, outputs, forbidden wording, disclosures
- **`04-Diagnostic-Engine/`** — Complete diagnostic engine specification
  - `README.md` — File index
  - `diagnostic-framework.md` — High-level 7-pillar philosophy
  - `framework.md` — Citation-backed canonical reference (824 lines)
  - `thresholds.md` — 20 machine-friendly lookup tables
  - `calculations.md` — Full math with worked example
  - `rule-engine-spec.md` — Implementation spec with pseudocode

### 🎨 UX & User Journey
- **`05-UX-Journey/user-journey.md`** — Complete user journey, copy, microcopy guidelines
- **`06-Result-Scenarios/result-scenarios.md`** — 11 result scenarios with full explanations
- **`07-Lead-Funnel/lead-funnel-design.md`** — Full funnel architecture, nurture sequences
- **`08-Lead-Scoring/lead-scoring-system.md`** — Lead scoring, tiers, notification format

### 🌍 Strategy
- **`09-Localization/localization-strategy.md`** — State-specific page strategy
- **`10-SEO/seo-strategy.md`** — SEO content architecture, keyword strategy

### 💻 Technology
- **`12-Technology/technology-stack.md`** — Stack comparison, recommendation
- **`13-AI-Architecture/ai-architecture.md`** — AI use cases, safe architecture, fallbacks
- **`14-MVP/mvp-specification.md`** — V1, V2, V3 specifications

### 💰 Economics
- **`15-Business-Economics/business-economics.md`** — Funnel math, P&L, sensitivity analysis
- **`mortgage_lead_economics_report.md`** — Detailed channel economics
- **`mortgage_economics_executive_summary.md`** — Economics summary

### 🏛 Compliance (CRITICAL)
- **`11-Compliance/MASTER-COMPLIANCE-REPORT.md`** — Master 30,000-word compliance report
- **`11-Compliance/MORTGAGE-ADVERTISING-COMPLIANCE-REPORT.md`** — Federal advertising compliance
- **`11-Compliance/NY-Mortgage-LeadGen-Compliance-Research.md`** — State-specific (NY)
- **`11-Compliance/compliance-report.md`** — FTC Endorsement Guides + ADA/WCAG detail
- **`SAFE_LANGUAGE_COMPLIANCE_REPORT.md`** — 7 claim-by-claim safe language analysis
- **`MAP_Rule_TILA_Advertising_Comprehensive_Report.md`** — MAP Rule + TILA Reg Z deep dive
- **`MAP_Rule_12_CFR_1014_Report.md`** — MAP Rule citation reference
- **`RESPA_RESEARCH_REPORT.md`** — RESPA Section 8 research

### 🎯 Final Recommendation
- **`16-Final-Recommendation/final-recommendation.md`** — Final answer + step-by-step plan

### Top-level Research (additional)
- **`BETTER_COM_RESEARCH_REPORT.md`** — Better.com deep dive
- **`CONSUMER_GOV_ANALYSIS.md`** — Consumer.gov analysis
- **`Guild_Mortgage_Competitive_Analysis.md`** — Guild Mortgage
- **`loandepot-research.md`** — LoanDepot
- **`loanai_research_report.md`** — Loanai
- **`caliber_analysis.md`** — Caliber
- **`uwm_competitive_analysis.md`** — UWM
- **`wells-fargo-competitive-analysis.md`** — Wells Fargo
- **`RESEARCH_lenders_condo_tools.md`** — Condo lending research
- **`RESEARCH_realtor_mortgage_calculator.md`** — Realtor.com calculator
- **`RESEARCH_zillow_mortgage_calculator.md`** — Zillow calculator
- **`redfin-calculator-research.md`** — Redfin
- **`smartasset_research.md`** — SmartAsset
- **`research_regz/REG_Z_MORTGAGE_ADVERTISING_REPORT.md`** — Reg Z detail

---

## Quick Stats

- **Total words of research and strategy:** ~150,000+
- **Total files:** 80+ documents
- **Sub-agents used:** 7 parallel research agents
- **Primary sources cited:** Federal Reserve, MBA, HMDA, Fannie Mae, Freddie Mac, FHA, VA, USDA, CFPB, FTC, FCC, NMLS, ECOA, FCRA, RESPA, TILA, MAP Rule, 50 State Regulators, WordStream 2026, STRATMOR 2024, Cotality 2026, Refinex Media 2026, LeadGen Economy 2025, LendingTree Q2 2025 earnings, Zillow investor relations, MBA Q3 2025 Performance Report, Meta Business Help Center, 30+ competitor sites, 15+ state HFA programs

## Critical Compliance Note

⚠️ **The web_search tool was unavailable to all research subagents during the initial research session.** All citations are drawn from training data and direct fetches of primary sources, but **must be re-verified against live primary sources** (eCFR, PACER, regulator websites) before any business decision or filing.

**Specifically re-verify before launch:**
- All current-year regulatory figures (conforming loan limits, FHA MIP, VA funding fee, USDA guarantee fee)
- Recent CFPB enforcement actions (2024-2025)
- State-specific advertising rules for each state you operate in
- 2024-2025 rate ranges and market data
- Current mortgage advertising rules under your state's regulator

## Headline Findings (TL;DR)

### Market Opportunity
- 30-yr fixed: 6.66% (Aug 2026), projected 6.0-6.8% through 2026 — rate plateau
- ~9-12% denial rate on purchase applications
- ~70% of households can't afford median home in their market
- Self-employed borrowers systematically underserved (2-3x denial rate vs. W-2)
- "Why was I denied" searches up 200-400% YoY

### The Gap
**No major competitor offers a no-SSN, no-credit-pull, anonymous, educational mortgage qualification diagnostic.** All competitors require SSN + DOB before any useful information. Nobody tells a denied borrower WHY.

### Compliance Risk
- Mortgage advertising is among the most regulated industries in the U.S.
- MAP Rule, Reg Z, Reg B, RESPA, FCRA, TCPA, GLBA, CCPA/CPRA all apply simultaneously
- 18 items absolutely require mortgage compliance attorney review before launch
- AI in mortgage decisions is under active CFPB/FTC scrutiny

### Economics
- **WordStream 2026 mortgage median CPL: $74.44**
- **Production cost/loan: $11,109** (MBA Q3 2025)
- **MLO commission: 50-100 bps (0.50-1.00%)**, 75 bps common anchor
- **Lead-to-funded: 2-4%** (operational excellence)
- **Solo MLO break-even: 30-100 funded loans/year** depending on channel mix
- **Speed-to-contact is biggest lever**: 1-min response = 391% higher conversion

### Recommended Tech Stack
- **V1:** Lovable + Supabase + Vercel + Resend + Twilio + Cal.com + Plausible
- **Cost:** $100-150/month
- **Launch time:** 1-2 weeks

### Recommended Path
- **V1:** 1 home state, simple funnel, 8-15 questions, deterministic engine, 3-5 SEO articles
- **V2:** Add AI explanations, scenario simulator, 5-10 state pages
- **V3:** 50 state pages, programmatic SEO, advanced features

### Expected Returns (Year 1)
- Conservative: $75-150K revenue, ROI positive month 6-9
- Expected: $150-400K revenue, ROI positive month 4-6
- Excellent: $500K+ revenue, ROI positive month 3-4

---

## Quick Start (For the MLO)

1. **Read** `00-Executive-Summary.md` (5 min)
2. **Read** `16-Final-Recommendation/final-recommendation.md` (15 min)
3. **Read** `SAFE_LANGUAGE_COMPLIANCE_REPORT.md` and `11-Compliance/MASTER-COMPLIANCE-REPORT.md` (1-2 hours, critical)
4. **Book** a 2-hour compliance attorney consultation
5. **Decide** on home state, brand name
6. **Set up** accounts (Supabase, Vercel, Plausible, Resend, Cal.com, Twilio, ConvertKit)
7. **Build** V1 in Lovable using `04-Diagnostic-Engine/framework.md` and `05-UX-Journey/user-journey.md` as spec
8. **Write** 3-5 SEO articles
9. **Get** compliance review
10. **Launch**

## What This Document Is

This is a **complete master planning document** for a consumer-facing mortgage qualification diagnostic lead-generation website. It is the result of:

1. 7 parallel research subagents covering market, competitors, compliance, SEO, business economics, technology, and diagnostic logic
2. Direct fetches and analyses of 30+ competitor sites, 15+ state HFA programs, 100+ primary regulatory sources
3. Synthesis into a coherent product, UX, and engineering spec
4. Step-by-step development plan for a non-technical MLO

## What This Document Is Not

- **Not legal advice.** Consult a qualified mortgage compliance attorney.
- **Not financial advice.** Validate business model with your CPA.
- **Not a guarantee of success.** Real-world execution depends on many factors.
- **Not a complete site.** This is the planning document. The actual site must be built, designed, content-written, compliance-reviewed, and tested.

---

*Last updated: 2025*
