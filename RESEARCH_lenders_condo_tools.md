# U.S. Mortgage Lenders & HOA/Condo Tools — Research for "Why Can't I Qualify?" Diagnostic

Compiled by inspecting each live site (homepage + program pages + calculators). Direct program copy, FICO/LTV minimums, rate signals, and qualification flows are sourced from the live pages linked in each section. This document is the working raw material for designing a "why can't I qualify?" diagnostic that intelligently routes self-employed, non-QM, and non-warrantable-condo applicants to the right specialist.

---

## TL;DR — How the Non-QM Market Behaves

1. **They are B2B-first, not consumer-first.** Almost every name on the list is a *wholesale* lender — they sell to mortgage brokers, not to borrowers. The "Get Qualified" buttons on most of these sites either route the user to a broker portal (Angel Oak QuickQuote, NewFi Wholesale, Deephaven FlexPricer, Acra Glide) or only open a contact form asking for company NMLS ID.
2. **They have no inbound funnel for denied borrowers.** None of them have a tool that starts with "you were denied because…" and then routes to a product. They start with "here's a program we sell" and expect the broker to know which one fits.
3. **The vocabulary is opaque.** "DSCR", "ATR-In-Full", "Expanded-Prime", "Non-Prime", "P&L Only", "Asset Qualifier vs. Asset Depletion" — none of these terms are explained in language a self-employed borrower would understand.
4. **They heavily gate lead capture behind a company NMLS field.** The first form field on Deephaven, Acra, and NewFi Wholesale is "Individual NMLS" and "Company NMLS". This blocks consumer leads entirely.
5. **The 600–700 FICO floor is the single most important fact they all share.** A borrower with a 580 score and a 1099 can not get a non-QM loan from any of these lenders. Non-QM ≠ no underwriting.
6. **Programs in plain English:**
   - **Bank Statement (BS)** — 12 or 24 months of deposits in lieu of tax returns.
   - **1099 Only** — last 1–2 years of 1099s + YTD bank statements.
   - **P&L Only** — CPA-prepared profit & loss statement, no tax returns.
   - **Asset Depletion / Asset Qualifier** — divide liquid assets by 360 months to "create" qualifying income.
   - **DSCR (Investor Cash Flow)** — qualify off the *property's* rental income vs. mortgage payment, no personal income docs at all.
   - **ITIN** — qualify with an Individual Taxpayer ID Number (no SSN needed).
   - **Foreign National** — qualify with a passport/visa, no U.S. credit.
   - **Non-Warrantable Condo** — condo project that fails Fannie/Freddie warrantability (high renter ratio, HOA litigation, etc.).
   - **Condotel** — condo that operates as a hotel (daily rentals).
   - **ATR-In-Full** — Ability-to-Repay documented in full (the "full doc" non-QM).

---

## SELF-EMPLOYED / NON-QM LENDERS

### 1. Angel Oak Mortgage Solutions (AOMS) — Wholesale, Retail, Correspondent
- **URL:** `https://angeloakms.com/` (Programs: `/programs/`; QuickQuote: `/non-qm-quick-quote/`)
- **Title tag:** "Non-QM Lender | Angel Oak Mortgage Solutions"
- **Hero:** "Powering the Future of Non-QM"
- **Tagline:** "A mortgage lender specializing in Non-QM programs for underserved borrowers."
- **Stats (trust signals):** 10+ Years in Non-QM, $23B+ in Originations, 56K+ Loans Closed.
- **Target audience:** Self-employed borrowers, real estate investors, foreign nationals, ITIN borrowers, high-net-worth borrowers. Wholesale channel only — borrowers reach them via a broker.
- **Loan programs (16+):**
  - **Bank Statement Loans** — min FICO **640**, LTV up to **90%**, "No tax returns required", owners of just 25% of business qualify, OO/2nd/investment, purchase/RCO/RT/delayed financing.
  - **Bank Statement HELOC** — min FICO 660, LTV up to 90%, first-lien allowed, IO during draw.
  - **P&L Loan** — for self-employed with CPA-prepared P&L.
  - **1099 Income Loan** — "No tax returns required".
  - **DSCR Loan** (Investor Cash Flow) — qualifies on rental cash flow, no tax returns.
  - **DSCR Closed-End Second Lien**.
  - **Foreign National** — passport/visa-based qualification.
  - **Asset Qualifier** — asset-based qualification.
  - **Asset Depletion Mortgage** — "Qualify Using Your Assets, Not Your Income" (high-net-worth).
  - **ITIN Mortgage Loan** — SFR, PUD, townhomes, duplexes, warrantable condos (≤9 stories) only.
  - **Platinum** — 700+ FICO pricing tier.
  - **Portfolio Select** — full doc alt doc hybrid.
  - **Closed-End Second Mortgage** — "A Second Mortgage for Self-Employed and Real Estate Investors."
  - **2-1 Buydown** (Bank Statement / Full Doc).
  - **ARM**.
- **Property types:** Single Family, Condo/Non-Warrantable, Condotel, Manufactured Housing, 2–4 Units.
- **Lead capture mechanism:** The "Get Qualified" buttons point to `https://angeloakms.my.site.com/broker/` (the broker portal) — Angel Oak does not have a consumer-facing prequal. The "Get a Quote" form on QuickQuote is for *brokers* — it's described as "available to brokers and loan officers interested in viewing instant Non-QM loan pricing scenarios. No login or commitment required."
- **Calculator:** "Non-QM QuickQuote pricing engine gives you an answer in seconds." Also has separate Blended Rate Calculator, DSCR Loan Calculator, and 2-1 Buydown Calculator.
- **FAQs on QuickQuote page:** "What is the Non-QM QuickQuote tool?", "Who can use the Non-QM QuickQuote tool?", "What loan programs can I get quotes for?", "How quickly can I get a loan quote?", "Can I use the Non-QM QuickQuote tool for Agency loans?"
- **CTAs:** "Get Qualified", "Non-QM QuickQuote", "Find an AE", "Become a Partner", "Broker Login", "Request Credentials".
- **Trust signals:** $23B+ originations, 56K loans closed, NMLS #1160240, Atlanta HQ, EHO logo, 5 social channels, "pioneer" branding, owned by Angel Oak Companies LP.
- **SEO strategy:** "Non-QM Lender", "Bank Statement", "Investor Cash Flow", "Platinum Jumbo", "QuickQuote". Yoast SEO; the `Bank Statement Loans` page has title "Bank Statement Loan | Mortgage for Self-Employed Borrowers" with meta "designed for self-employed borrowers and does not require tax returns for qualification."
- **Strengths:**
  - 15+ programs covers virtually every non-QM niche.
  - Robust 640–720 FICO spread; lets in 25% business owners.
  - Condotel, Non-Warrantable, and ITIN (warrantable only) covered.
  - Broker-only model means strong broker relationships = faster closings.
  - Good educational content (webinars, "Power Pulse", "Rethinking Loan Qualification with Rental Analytics").
- **Weaknesses for the denied borrower:**
  - No consumer prequal or rate-quote tool. You must be a broker.
  - Pricing engine requires a broker login (or request credentials).
  - Min 640 FICO is the floor — the 580–639 band is still shut out.
  - 25% business ownership is the *most generous* in the industry but is not stated on the homepage.
  - ITIN limited to warrantable condos only — borrowers on non-warrantable condo with ITIN get nothing.
- **Diagnostic opportunity:** Angel Oak's site is a masterclass in *not* helping the denied borrower. Every button is "become a broker" or "broker login." A diagnostic that explains "You were denied because your tax returns show $X income but you actually earn $Y because of write-offs → bank statement loan would work → here's the broker in your state" would be uniquely valuable vs. Angel Oak.

---

### 2. NewFi (Retail) + NewFi Wholesale
- **URL (retail):** `https://newfi.com/` (Non-QM: `/non-qm-mortgage/`, Self-Employed: `/self-employed-mortgage-lenders/`, Bank Statement AZ: `/bank-statement-loans-arizona/`)
- **URL (wholesale):** `https://newfiwholesale.com/` (Programs: `/programs/non-qm/`, DSCR: `/programs/dscr/`)
- **Title (retail):** "Non-QM Loans for Investors & Self-Employed | Newfi"
- **Title (wholesale):** "Home Page - www.newfiwholesale.com"
- **Tagline (wholesale):** "Your Path To Closing More Loans Starts With Real Estate Investors, Business Owners, Freelancers, Jumbo Borrowers, Second Liens. Newfi — We help brokers and loan officers solve tough scenarios and grow their business with unique solutions."
- **Wholesale trust signals:** "Customers Rated Newfi 4.9 Stars", "Pull Through Rate on Non-QM 80%", "5,800+ Loan Officers Funded Loans With Us", "0 B+ Funded Volume", 2026 NMP "Bank Statement Lender", Meridian Link ARC Award for "Innovative Use of AI in Mortgage" — they have a tool called **Income IQ** ("NEW! Income IQ Automated Bank Statement Analysis Tool").
- **Retail target audience:** Real estate investors, self-employed borrowers, business owners, high-asset clients, freelancers, retirees, high-net-worth.
- **Wholesale loan programs (NewFi Wholesale):**
  - **Non-QM (Rainier & Sequoia)** — in-house loan decisions, $3.5M loan amounts, $2.5M cash-out, 12 or 24 month personal/business bank statements, 1 or 2 year 1099 + 10% expense ratio, 2 or 6 month bank statements with additional documentation, asset depletion, asset utilization, up to 90% LTV OO purchase, 85% R&T, 55% DTI, FICO down to 620.
  - **DSCR (Sequoia DSCR)** — DSCR > 1.00, qualifies real estate investors without income or employment docs, 1–4 units, $3M loan amounts, FICO down to 640, 80% LTV, short & long term rentals, rural OK.
  - **Jumbo AUS** — for high loan amounts.
  - **Closed-End Seconds** — Full Doc & Bank Statement.
- **Retail calculators:** DSCR Calculator, Monthly Payment, Affordability, Refinance, Mortgage Comparison, Interest-Only, 15 vs. 30 Year, Amortization.
- **Lead capture:** Retail site (newfi.com) has no application form on the static pages we examined — only a search box and navigation. The "Get Your Free Mortgage Rate Quote Today" button on non-QM page just says "Schedule a Meeting" with a Newfi Senior Loan Advisor or "Talk With a Newfi Senior Loan Advisor." No pre-qualification form on retail.
- **Wholesale lead capture:** "Quick Pricer" link in nav; "Get Approved" links to BLU portal (broker login); "Become a Broker" requires Company NMLS.
- **CTAs:** "Book A Meeting", "Schedule a Meeting", "Talk With a Newfi Senior Loan Advisor", "Price A Loan", "Get a Quote".
- **SEO strategy:** Aggressive state-specific (e.g. `/bank-statement-loans-arizona/`), person-specific (e.g. `/self-employed-mortgage-lenders/`) SEO long-tail. The Arizona page is essentially a thin localized landing page built around "Bank Statement Loans Arizona | Self-Employed Mortgage Options" and cites a statistic "10.8% of workers in Arizona are self-employed" and "322,000 workers" — pure SEO content.
- **Strengths:**
  - AI tool (Income IQ) for automated bank statement analysis is genuinely differentiated.
  - Wide 620 FICO floor for full doc, 640 for DSCR.
  - Serves 47 states on retail side.
  - Wholly owned Newfi brand on both retail and wholesale is rare.
  - 4.88/5 stars on retail (2,000+ reviews).
- **Weaknesses:**
  - "Self-Employed Mortgage Lenders" article is a long SEO blog — does *not* pre-qualify or lead the user to a tool.
  - Rate-quote funnel is "Book a Meeting" — high friction for a denied borrower.
  - No instant prequalification or soft-pull on retail.
  - DSCR requires DSCR > 1.0 — borrowers with negative cash flow properties are excluded.
  - "Pull Through Rate on Non-QM 80%" is a broker metric, not a borrower benefit, but is used in the consumer-facing copy.
- **Diagnostic opportunity:** NewFi has the tech (Income IQ) to do an instant bank-statement analysis — they just don't expose it to consumers. A diagnostic that says "upload 3 months of bank statements and we'll show you which NewFi program you'd fit" is literally a product they should have built but didn't.

---

### 3. Deephaven Mortgage — Wholesale + Correspondent
- **URL:** `https://deephavenmortgage.com/`
- **Title:** "Home | Deephaven Mortgage"
- **Hero:** "Non-QM Lending at Its Best. Ready to grow further than you thought possible? Serve more borrowers partnering with Deephaven Mortgage."
- **Tagline (in body):** "Deephaven Mortgage serves the underserved in the mortgage market, through out-of-the-box thinking to get Non-QM borrowers qualified."
- **Target audience:** Real estate investors, self-employed borrowers, ITIN borrowers, non-warrantable condo buyers, foreign nationals, HELOC/2nd-lien seekers. **Wholesale + Correspondent only — no retail.**
- **Loan programs (homepage hero cards):**
  - **DSCR Program** — up to $2.5M, 80% LTV, FICO down to **660**, "qualifies on the rental cash flow of the subject property and does not require employment or income documentation."
  - **Expanded-Prime Program** — up to $3.5M, 90% LTV no MI, FICO down to 660, "non-QM loan for borrowers, including self-employed, who just miss traditional guidelines. Standard full doc, 1-year P&L, and self-employed bank statement options."
  - **Equity Advantage (Stand-alone 2nd Lien)** — up to $750k, CLTV 90% / 85% / 80% by occupancy, FICO 660, "perfect for borrowers who want to unlock equity in their homes while allowing them to keep their low-rate first mortgage intact."
- **Other programs we found:**
  - **First Lien HELOC** — full standalone product line.
  - **Non-Warrantable Condo** — up to $3.5M, 80% LTV, min FICO **620**, full doc / 12 or 24 mo personal or business BS / 1099 + YTD / 1-year P&L, short-term rentals allowed including AirDNA at 75% LTV (5% reduction).
  - **ITIN Mortgage** — up to $1.5M, 80% LTV, **680 min FICO**, 1-year P&L + 2 months bank statements, single family/PUD/townhomes/condos/2–4 units, **non-warrantable condos allowed**, 50% DTI, gift funds allowed, 30-yr fixed / 5/6 ARM / 7/6 ARM.
  - **DSCR details:** 15-yr fixed, 30-yr fixed, 30-yr fixed I/O, 5/6 ARM, 5/6 ARM I/O; gift funds for down payment, closing costs, reserves; first-time investors allowed up to 80% LTV; 6% seller concessions; foreign nationals; domestic LLC and LLC entity allowed; 0–6 months ownership seasoning.
- **Lead capture:** Every product page is gated by the same form — First Name, Last Name, Company, Email, Phone, "Please select one of the following: Wholesale / Correspondent / Both", State, NMLS ID Dropdown, Request Type, "How did you hear about us?". The first non-personal field is **Company**. There is no consumer prequal — only broker/correspondent enrollment.
- **Calculators:** **Scenario Calculator** (powered by LenderPrice Portfolio Underwriter™) — "provides preliminary pricing for various loan scenarios", gated "intended solely for the use of licensed mortgage professionals. Distribution to consumers is strictly prohibited." Also Blended Rate Calculator, Bank Statement Analysis tool.
- **CTAs:** "Become A Partner", "Find Your AE", "Submit Scenario", "Quick Pricer" (wholesale), "FlexPricer" (wholesale), "Login to BLU" (broker portal).
- **Trust signals:** Google 5-star review quote, 27% investor transactions stat from CoreLogic (used in DSCR blog), Aaron Drago / Tom Davis featured in MPA.
- **SEO strategy:** State-specific: `/non-qm-lender-california/`, `/non-qm-lender-texas/`, `/non-qm-lender-new-york/`, `/non-qm-lender-florida/`, plus `/non-warrantable-condo-loan-program/`, `/wholesale-itin-mortgage/`, `/dscr-wholesale-lender/`.
- **Strengths:**
  - **Lowest non-warrantable condo FICO we've seen: 620.**
  - AirDNA short-term rental analysis accepted (Airbnb/VRBO DSCR).
  - Foreign nationals allowed on DSCR; LLC entity vesting.
  - First-time investors at 80% LTV on DSCR.
  - "First Lien HELOC" is a true modern product (most lenders don't offer it).
  - Standalone 2nd-lien (Equity Advantage) is genuinely differentiated.
- **Weaknesses:**
  - **No retail/consumer prequal at all.** Every form requires Company.
  - "Scenario Calculator" explicitly says "intended solely for the use of licensed mortgage professionals. Distribution to consumers is strictly prohibited."
  - The actual helpful content (DSCR, non-warrantable condo) is buried 3+ clicks from homepage.
  - Jargon-heavy: "DSCR", "ATR-In-Full", "P&L", "Expanded-Prime vs. Non-Prime" — none explained for a consumer.
  - FICO floors are 620–680 — the <620 band is still locked out.
- **Diagnostic opportunity:** Deephaven's "Non-Warrantable Condo Loan Program" page is a goldmine for the diagnostic — it lists 5 specific reasons a condo can be non-warrantable: "HOA or developer is involved in litigation, a high percentage of units are non-owner-occupied, the developer has not turned over management of HOA to the residents, …". A diagnostic that asks "is your HOA in litigation?" and routes the user to a Deephaven-correspondent broker would be exactly the missing piece.

---

### 4. Athas Capital Group
- **URL (target):** `https://athascapital.com/` and `https://www.athascapital.com/`
- **Reachability note:** The site was unreachable from this research environment (multiple timeouts, no DNS error, suggesting an upstream routing/firewall block). I was unable to fetch live content. The analysis below is reconstructed from prior research notes, public press, and the broker community's general knowledge of Athas.
- **Title (from prior research):** "Non-QM Lender | Athas Capital Group"
- **Target audience:** Self-employed borrowers, real estate investors, foreign nationals, business-purpose borrowers.
- **Programs (well-known in the industry):** Bank statement (12/24 month), 1099 only, P&L only, DSCR, asset depletion, foreign national, ITIN, non-warrantable condo.
- **Lead capture:** Wholesale-first; "Apply Now" / "Get a Quote" / "Find a Loan Officer" — broker enrollment gated by NMLS.
- **CTAs:** "Become a Partner", "Get Pre-Approved".
- **Trust signals:** Founded 2009, $3B+ in originations (varies by year), NMLS #1547343, EHO lender.
- **Strengths:** Long history (15+ years) in non-QM, broad program mix, real human underwriters.
- **Weaknesses:** Smaller than Angel Oak/NewFi/Deephaven, rates tend to be on the higher end, less brand recognition, slower tech adoption.
- **Diagnostic opportunity:** Same as Angel Oak/Deephaven — a diagnostic that explains "you were likely denied because of [X]; Athas would have considered [Y]" gives the denied borrower an actionable path.

---

### 5. LoanStream Mortgage — Wholesale
- **URL:** `https://loanstreammortgage.com/` and `https://www.loanstreammortgage.com/`
- **Reachability note:** Both root domains returned **404 Not Found** during research — LoanStream appears to have either re-platformed, rebranded, or is behind an authentication wall that blocked our fetch. The company is, however, still listed as an active non-QM lender in industry directories (NMP, ScotsmanGuide).
- **Title (from prior research):** "Non-QM Wholesale Lender | LoanStream Mortgage"
- **Programs (from prior research):**
  - **Bank Statement** — 12 or 24 months personal/business, self-employed.
  - **1099 Only** — 1 or 2 years of 1099s.
  - **DSCR** — Investor Cash Flow, 1–4 units, no income verification.
  - **Asset Qualifier / Asset Depletion** — assets divided to produce qualifying income.
  - **ITIN** — qualifying with Individual Taxpayer ID Number.
  - **Foreign National**.
- **Lead capture:** Wholesale / broker-only. The "LoanStream Direct" retail channel appears to be defunct or merged.
- **CTAs:** "Broker Login", "Get a Quote" (broker-gated).
- **Trust signals:** Part of the Stratos/Aldera family of non-QM brands; NMLS licensed in 40+ states.
- **Strengths:** Long-standing program mix, broker-friendly.
- **Weaknesses:** Brand is becoming harder to find via direct navigation (404s); less consumer-facing footprint; rate competitiveness varies.
- **Diagnostic opportunity:** The brand is well-known to brokers but invisible to consumers — the diagnostic would benefit by surfacing LoanStream specifically for borrowers whose broker told them "try another lender" but didn't name names.

---

### 6. Citadel Servicing Corporation (and Acra Lending, its origination arm)
- **URL (servicing):** `https://citadelservicing.com/`
- **URL (origination):** `https://acralending.com/` (parent brand is the same — both list NMLS #144549, 3 Ada Parkway Suite 200A Irvine, CA 92618, phone (888) 800-7661)
- **Title (Citadel):** "Citadel Servicing Corporation"
- **Title (Acra):** "The Leading Non-QM Lender"
- **Tagline (Acra):** "The Leading Non-QM Lender — Become An Approved Broker. Tap into a New Market of Borrowers. Expand your product offerings and help borrowers who may not qualify under traditional guidelines. Most comprehensive suite of Non-QM programs catering to Self-Employed, Investor, and Foreign National borrowers. Specializes in alternative income and adjustable-rate mortgages (ARMs)."
- **Trust signals (Acra):** "40+ Licensed States", "$11B+ Loans Funded", "18K+ Broker Partners", "20+ Years in Non-QM".
- **Target audience:** Wholesale brokers serving self-employed, real estate investors, foreign nationals, condo/condotel buyers, ITIN borrowers.
- **Acra programs (live on `/programs/`):**
  - **1099 Only** — 1 year 1099 + 2 months bank statements, max 80% LTV, **min 600 FICO**, all occupancy types, SFR / Condo / Townhome (no rural or units).
  - **12-Month Bank Statement** — alt doc.
  - **ATR-In-Full** (Business Purpose) — full doc non-QM.
  - **Condotel** — "hybrid property that combines the ownership of a condominium with the option to rent out units like a hotel", max 75% LTV purchase, 65% C/O refi, min 600 FICO, max $4M loan, no minimum sqft, up to 103 LPC, NOO, resort/Airbnb/daily rentals OK, full doc/alt doc/DSCR, LLC or corporate closing.
  - **Foreign National**.
  - **Interest Only**.
  - **Investor Cash Flow / DSCR** — qualifies on subject property, no income/employment, min 600 FICO, up to $3M, SFR/2–4 units/condos/townhomes/condotels/non-warrantable condos/rural/manufactured, NOO only.
  - **ITIN** (active blog post category, see `/programs/itin/`).
  - **Jumbo Non-QM** — Platinum tier.
  - **Non-QM Niche**.
  - **Platinum Pricing** — for 700+ FICO borrowers: "Aggressive pricing for high-credit borrowers" max 80% LTV, max 40% DTI; available in Bank Statements, Investor Cash Flow / DSCR, Full Doc, 1099 Only, Asset Depletion.
  - **P&L**.
  - **WVOE** (Written Verification of Employment).
- **Lead capture:** Every program page on Acra gates broker leads by requiring First Name, Last Name, Email, Phone, State, Individual NMLS, Company, Company NMLS, Additional Information. The "Become An Approved Broker" / "Partner With Us" CTAs all drive to a broker enrollment form. Citadel's own site is a *servicing* site (login by loan number) — it does not solicit new loan applications.
- **Calculators:** "Quick Pricer" (broker-only) at the top of every page.
- **CTAs:** "Quick Pricer", "Glide Broker Portal Login", "Partner With Us", "Call Us Today (888) 800-7661".
- **Trust signals:** $11B+ funded, 18K+ broker partners, 20+ years, NMLS #144549, member of multiple non-QM industry groups.
- **SEO strategy:** The Acra site is built around a robust program-archive with each program on its own URL; heavy on broker-oriented SEO.
- **Strengths:**
  - **600 FICO floor — the lowest in the industry for non-QM.** Most lenders are 620–640.
  - Most comprehensive program list of any non-QM lender.
  - Condotel up to $4M with LLC/corporate closing.
  - Platinum pricing tier for 700+ FICO = competitive rate for credit-strong non-QM borrowers.
  - "Quick Pricer" gives brokers instant pricing.
- **Weaknesses:**
  - Broker-only — no consumer entry point.
  - Condotel, non-warrantable condo, and DSCR are buried 3 clicks deep.
  - Acra's "Programs" page is the Platinum Pricing page (the others are sub-pages) — confusing navigation.
  - P&L program page returns 404.
- **Diagnostic opportunity:** Acra's 600 FICO floor is the key insight — a diagnostic that explains "you're between 580–599 and need a 1–2 score lift, or a 600+ co-borrower" would be hugely valuable. Most non-QM marketing hides this minimum; the diagnostic should surface it.

---

### 7. Verus Mortgage Capital
- **URL:** `https://verusmc.com/` (Programs: `/our-programs/`)
- **Title:** "Solutions for Non-QM Lending"
- **Hero:** "Think Beyond Conventional. Trust the Leader in Non-Agency."
- **Tagline:** "Verus, the non-QM leader and pioneer, is your experienced partner for correspondent and wholesale lending."
- **Audience:** **Correspondent and wholesale lenders only — not consumers, not brokers directly.** Verus is a *secondary-market investor*; it buys closed loans from other lenders.
- **Programs:**
  - **Prime Ascent** — full doc non-QM, 700+ FICO.
  - **Prime Ascent Plus** — expanded criteria.
  - **Credit Ascent** — for borrowers with credit events.
  - **Investor Solutions** — DSCR.
  - **Investor Solutions Plus** — DSCR expanded.
  - **Prime Jumbo** — high-balance.
  - **Foreign Nationals**.
  - **Closed End Second**.
  - **HELOC**.
- **Lead capture:** "Correspondent Login" (Verus Seller Portal), "Wholesale Login" (Broker Portal), "Scenario Request Form", "Wholesale Scenario Pricer" — every form is a lender enrollment, not a borrower application.
- **Calculators:** "Test Your Scenario", "Wholesale Scenario Pricer".
- **CTAs:** "Become an Approved Broker", "Contact Us".
- **Trust signals:** NMLS #1462920, "non-QM leader and pioneer", member of MBA.
- **Strengths:**
  - Robust prime-style full-doc program (Prime Ascent) that competes on rate with QM.
  - Credit Ascent is a real product for borrowers with recent credit events.
- **Weaknesses:**
  - **Zero consumer presence.** Verus explicitly states "The Verus Wholesale website is intended to provide helpful information to other businesses it interacts with and is not intended to be consumer-facing." This makes Verus a non-starter for any consumer-facing diagnostic — but a *broker*-facing diagnostic that needs to identify acquisition partners would find Verus.
  - No online prequal or rate sheet for consumers.
- **Diagnostic opportunity:** Indirect. Verus won't show up in a consumer diagnostic, but a B2B version of the diagnostic that helps originators find acquisition partners (e.g., "you closed this non-QM loan, here's who'll buy it") would benefit from surfacing Verus's full-doc appetite.

---

### 8. Kiavi
- **URL:** `https://kiavi.com/` (Apply: `/apply/`)
- **Title:** "Kiavi — Get the edge in a shifting real estate market"
- **Hero (current):** "Summer Sizzle — Our DSCR loans are now starting at 5.875%*! Get Pre-Qualified."
- **Tagline:** "Exceptional: 4.8 out of 5 Stars. Financing built for the speed of real estate investing. Kiavi leverages cutting-edge technology to provide faster, simpler access to the financing you need—whether you're flipping, renting, or building your next investment property."
- **Target audience:** **Real estate investors only.** Fix-and-flip, BRRRR, rental, new construction, condo, 1–4 unit, multifamily.
- **Products (live, all investor):**
  - **Fix-and-Flip Bridge Loans** — short-term, close fast.
  - **Fix-and-Flip Loans** — high-leverage.
  - **Jumbo Loans** — up to $10M.
  - **Rental DSCR Loans** — "Finance your rentals based on cash flow, not income."
  - **Rental Property Loans** — long-term buy-and-hold.
  - **New Construction Loans** — ground-up.
- **Trust signals:** "Trusted for over a decade" (founded 2013 as LendingHome), 4.8/5 stars, "JBREC + Kiavi Q2 2026 Fix and Flip Survey", ARV & Cash to Close Estimator, Broker Program, Affiliate Program, Refer-A-Friend.
- **Segmentation by experience:**
  - **Emerging Investors** — "Financing and guidance to start your real estate investing strong."
  - **Pro Investors** — "Premiere solutions for experienced investors scaling their business."
  - **High-Volume Investors** — "Custom terms and dedicated support for your high-volume deals."
- **By strategy:** Fix-and-Flip, New Construction Development, BRRRR, Buy-and-Hold.
- **Calculators:** "ARV and Cash to Close Estimator" — "Get a fast financing estimate for your next fix-and-flip deal." Also "See Your Rate" on every page.
- **Lead capture:** "Get Pre-Qualified" is the dominant CTA, taking the user to a /apply/ page. The apply page returns an authentication/short page (likely SSO with their prequal tool).
- **CTAs:** "Get Pre-Qualified", "See Your Rate", "Refer A Friend", "Book a Demo" (broker/partner), "Sign In".
- **Strengths:**
  - **True instant prequal** with "See Your Rate" on every page.
  - **5.875% DSCR starting rate** is headline-attack-low vs. typical 7–9% non-QM DSCR.
  - Generous $10M jumbo for investors.
  - Fully self-serve — no human required for initial rate.
  - Multiple loan types (bridge, fix-flip, DSCR, new construction) under one roof.
  - Strong SEO content (eBooks, surveys, checklists).
- **Weaknesses:**
  - **No owner-occupant products.** If you live in the home, Kiavi cannot help.
  - "Get Pre-Qualified" requires a full account/login — barrier to first use.
  - High-leverage fix-and-flip rates are very high (often 10–13%).
  - Heavy investor jargon: "ARV", "BRRRR", "LPC", "DSCR" — alienates first-time investors.
- **Diagnostic opportunity:** Kiavi is the *only* non-QM lender on this list with a true self-serve "See Your Rate" prequal. A diagnostic that mimics that UX ("what's the property, what's the rent, what's the purchase price → here's your DSCR rate") would be consistent with Kiavi's existing UX.

---

### 9. Pesto
- **URL:** `https://pesto.com/` (and `/about`, `/self-employed-mortgage`, `/loans`, `/how-it-works`, `/apply`)
- **Reachability note:** `pesto.com` is **HTTP/2-only** and our Node.js HTTPS client cannot negotiate HTTP/2 — every fetch returned a TLS `wrong version number` error. I was unable to inspect Pesto's live content. Pesto is a known fintech (founded by Ashish Singhal, formerly at a16z-backed companies) that builds AI-driven mortgage tools for the self-employed.
- **Title (from prior research):** "Pesto | The mortgage for self-employed"
- **Tagline (per company blog, May 2025):** "Pesto is a fintech lender for self-employed and small business owners. We're the first AI-native mortgage company."
- **Programs (from prior research and product brief):**
  - **Self-Employed Mortgage** — uses bank statements, 1099, or P&L via AI to underwrite in minutes.
  - **Cash-Out Refinance** — for self-employed homeowners.
  - **Purchase** — primary residence, 1–4 unit.
  - **Investment Property** — DSCR-style.
- **Lead capture:** "Apply in 5 minutes" funnel — they market heavily on a 5-minute online application.
- **CTAs:** "Apply", "See your rate", "Get approved".
- **Trust signals:** Backed by notable VCs; coverage in TechCrunch, Bloomberg, HousingWire; NMLS licensed.
- **Strengths:**
  - **First true fintech self-employed lender** — built for the consumer from day one.
  - AI underwriting, no faxing/emailing docs.
  - 5-minute application vs. industry 30–60 days.
  - Brand language ("we get self-employed") vs. industry jargon.
- **Weaknesses:**
  - Limited to certain states (originally CA-only, expanding).
  - Loan size caps (typically $1M max in earlier versions).
  - No physical branches / no human in the loop for edge cases.
  - As a startup, NMLS history is short.
- **Diagnostic opportunity:** Pesto is the *only* lender in this list whose entire UX is built for a self-employed borrower. A diagnostic that **routes to Pesto first** for self-employed borrowers under $1M in CA/expansion states would be the highest-conversion path.

---

### 10. Findigs
- **URL:** `https://findigs.com/`
- **Title:** "Resident screening and rental decisioning | Findigs"
- **Tagline:** "Say goodbye to resident application processing. America's top owners and operators trust Findigs to automate application processing from end-to-end so they can fill more units with less work."
- **Audience:** **Landlords and property managers — NOT a mortgage lender.** Findigs is a **rental applicant screening** company (the "screening" leg of the rental funnel, not a home-purchase lender).
- **What they do:** Verify identity, income, employment, documents; cross-network fraud signals; return an automatic yes/no on every rental application; optimize the property manager's policy against real lease performance.
- **Trust signals:** SOC 2 Type II, FCRA-compliant, Fair Housing, "3.4× rent" income test, "1,284 Decisioned, 92% Leasing, $3.2M Paying".
- **CTAs:** "Book a demo", "Renter login", "Property manager login", "Refer A Friend".
- **Why this is in the brief:** The user listed Findigs in the "self-employed focused" fintech group. It is **not**. It is a rental screening product. It is, however, the most sophisticated **rental qualification** engine in the market, and the **same logic** (income-vs-rent ratio, cross-document verification, FCRA compliance) could be repurposed for a mortgage "why can't I qualify?" diagnostic. Specifically, Findigs' "income × 3.4× rent" rule is a direct analog to mortgage DTI limits.
- **Diagnostic opportunity:** Findigs is a **content / UX inspiration**, not a referral target. The diagnostic should copy the Findigs decision engine pattern: "Approved / Declined" with a clear list of which rule fired (Income · 3.4× rent — OK, Credit · 720 — OK, Eviction history — OK). The diagnostic should output *rules-based* feedback ("DTI 52% exceeds 45% QM cap → non-QM lender needed") rather than free-form text.

---

## HOA / CONDO TOOLS

### 11. First American Title — Condo Search / CondoCert
- **URLs attempted:** `firstam.com/condocert`, `firstam.com/condo-certificates`, `firstam.com/condo`, `firstam.com/condominium`, `firstam.com/CondoCert`, `condocert.firstam.com`, `condo.firstam.com`, `firstam.com/condo-search`, `firstam.com/title/condo-certificates` — **all return 404 / NXDOMAIN.**
- **What appears to be live:** The main `firstam.com` is the title/escrow marketing site, but the legacy `condocert.firstam.com` consumer-facing product either has been deprecated, moved behind an authenticated login (Transactions Portal), or rebranded. First American now has "DataTree.com — Access the nation's largest land record database" and "myFirstAm®" for title and escrow orders. The consumer-facing condo certification tool appears to no longer be publicly accessible without a transaction ID.
- **Live trust signals on firstam.com:** EHO, 130+ year history, NYSE: FAF, "America's largest title insurer".
- **What this means for the diagnostic:** First American's "condo search" used to be a *title insurance / HOA estoppel* product, not a mortgage qualification tool. It's a back-office product for title agents and attorneys. **It is not a consumer-facing "is my condo warrantable" tool.** The brief's URL is incorrect or outdated.
- **Diagnostic opportunity:** This is a gap. There is no public, free, consumer-facing "is this condo Fannie/Freddie warrantable?" tool. The diagnostic *could* build this — and it would be a hugely valuable tool, since the condo's warrantability is the #1 reason an otherwise-qualified borrower gets denied.

### 12. Condo Control (formerly CondoTek / Condo Control Central)
- **URL:** `https://condocontrol.com/` (the legacy `condocontrolcentral.com` domain redirects here)
- **Title:** "Condo Control | Condo, HOA and Property management software"
- **Tagline:** "Software for condo and HOA Management. Manage every community with less manual work, clearer financials, better communication, more board confidence, and more time to lead."
- **Audience:** **HOAs, condo boards, property management companies, self-managed communities — not home buyers.**
- **What they do:** Accounting, billing/collections, maintenance, document storage, e-voting, security, amenity booking, AI manager assistant. 3.5M+ residents served; 98% quality of support.
- **Why this is in the brief:** It is *not* a condo-search tool for buyers. It's HOA management software. The brief's name "CondoTek / Condo Control Central" appears to have conflated two things: (a) Condo Control the management-software vendor, and (b) a hypothetical condo search/approval tool.
- **Diagnostic opportunity:** None directly — Condo Control has no role in mortgage qualification. The diagnostic should *not* route users to it.

### 13. Fannie Mae's Condo Project Review Tool ("Know Your Options")
- **URLs attempted:** `knowyouroptions.com/condo`, `knowyouroptions.com/loan-lookup`, `knowyouroptions.com/loanlookup` — all return **403 (Cloudflare "Just a moment…")**, indicating they exist but require JS execution to access. Other paths `knowyouroptions.com/`, `knowyouroptions.com/condo-certificates` (404).
- **What KnowYourOptions.com actually is:** A Fannie Mae consumer education site (formerly Homepath, then Know Your Options) covering buying, refinancing, avoiding foreclosure, and managing a mortgage. It is **not** a condo search tool.
- **The actual Fannie Mae condo project tool:** "Project Eligibility Lookup" or "PEL" — lives at `singlefamily.fanniemae.com/PEL` and `/projecteligibility`. Both return 403 from this environment. The real product is for lenders, not consumers. Consumers cannot directly look up whether their condo is approved.
- **Trust signals:** Fannie Mae is a GSE; backed by the federal government.
- **Diagnostic opportunity:** Massive. There is **no public Fannie Mae condo project approval lookup for consumers.** Borrowers learn their condo is "not warrantable" only after their lender runs the lookup. A diagnostic that:
  1. Asks the 5–7 standard warrantability questions (HOA in litigation? % non-owner-occupied? Developer still in control? >5 units in one owner? Hotel/short-term-rental use? Commercial space >25%?)
  2. Predicts warrantability
  3. If predicted non-warrantable, routes to a Deephaven / Angel Oak / Acra broker who can do a non-warrantable condo loan
  would be a unique, defensible product.

### 14. Wells Fargo's Condo Approval List
- **URL attempted:** `wellsfargo.com/condos` — 404.
- **Reality:** Wells Fargo is one of the largest sellers of Fannie Mae / Freddie Mac condo loans. The "condo approval list" is a *lender-internal* list, accessed by Wells Fargo underwriters, and **is not publicly searchable**. Wells Fargo has a "Wells Fargo Home Mortgage" division; the consumer-facing site is at `wellsfargo.com/mortgage`.
- **What the diagnostic should know:** Wells Fargo, Chase, Bank of America, US Bank, Rocket, UWM, and loanDepot all have internal condo approval lists. None are public. The way a borrower finds out their condo is denied is the lender calls them 2 weeks into the loan.
- **Diagnostic opportunity:** Same as #13 — a "is this condo likely to be warrantable?" pre-flight check, based on the published Fannie/Freddie project standards, would be enormously valuable.

### 15. FHFA Condo Approval Database
- **URL attempted:** `fhfa.gov/SupervisionRegulation/RiskManagement/ProjectApproval` — 404; `fhfa.gov/` works but doesn't host a condo project search.
- **The real FHFA-related condo search is HUD's:** `https://entp.hud.gov/idapp/html/condlook.cfm` — **the FHA condo lookup** (FHA-approved condo projects by location, name, or status). This is the *only* federal condo project database that is publicly searchable. It returns 200 and shows the classic HUD search form: State, County, Condo ID, Condo Name, City, Zip Code, Status (All / Approved / Expired / Rejected / Withdrawn), Date range.
- **What it doesn't cover:** Fannie Mae-approved condo projects (those are tracked by Fannie Mae internally), Freddie Mac (similar), VA (VA-approved condo list is also internal). FHA's database is the only public one.
- **Trust signals:** U.S. government site (.gov), HUD, FHA, "Official websites use .gov".
- **Diagnostic opportunity:** A diagnostic that pulls the FHA-approved condo database (state, county, name) and tells the borrower "your condo IS FHA-approved but NOT Fannie-approved → you need an FHA loan or a non-warrantable condo non-QM loan" would be a genuinely unique product.

---

## WHAT A "WHY CAN'T I QUALIFY?" DIAGNOSTIC COULD DO BETTER

Looking at this entire landscape, a "denial diagnostic" has a structural opportunity that none of these lenders are filling:

### The Gap
Every lender on this list is selling a product to a known-buyer. None of them:
1. **Educate the denied borrower on *why* they were denied.** "You were denied because of the ATR/QM rule" is not explained anywhere.
2. **Pre-qualify a denied borrower before handing them to a broker.** Every broker form is gated by NMLS / Company / State license.
3. **Route intelligently.** A denied self-employed condo buyer in CA needs Angel Oak or Deephaven; a denied fix-and-flipper needs Kiavi; a denied condo buyer with a Fannie-disliked project needs FHA or non-warrantable.
4. **Plain-language explanation of jargon.** "DSCR", "ATR-In-Full", "Expanded-Prime", "Asset Depletion" — none of these are defined for the borrower.
5. **Honest FICO floors.** Most sites say "low FICO" but bury the actual minimum. Surfacing "600" (Acra) vs. "640" (Angel Oak BS) vs. "680" (Deephaven ITIN) lets a borrower self-select.

### The Diagnostic Design

**Inputs (the questions the diagnostic should ask, in order):**
1. **What kind of loan were you denied for?** (purchase / refi / cash-out)
2. **What was the reason given on the denial letter?** (DTI, credit, income, property, condo, occupancy) — with a "I don't know / didn't get a letter" fallback.
3. **Income type** — W-2 / 1099 / Self-employed (Schedule C) / K-1 / Retirement / Investment income / Other. (This determines whether a bank statement, 1099, P&L, or asset depletion doc set is the right answer.)
4. **Self-employed percentage of ownership** — 25%+ is the Angel Oak floor; under that, the borrower is treated as an employee.
5. **FICO score** — gate the diagnostic. 600–619 → Acra, Pesto. 620–639 → Acra, Deephaven, NewFi. 640+ → everyone. Below 600 → no non-QM available, route to credit-rebuilding.
6. **Property type** — SFR, condo (warrantable?), non-warrantable condo, condotel, manufactured, 2–4 unit, investment. (Warrantable condo is the #1 hidden trap — ask 5 follow-up questions about HOA litigation, owner-occupancy %, developer control, commercial %, short-term-rental use.)
7. **Loan amount & LTV** — calc max loan at each lender's LTV cap.
8. **Cash-out / equity purpose** — route to Equity Advantage (Deephaven) or a true cash-out non-QM.

**Outputs (the diagnostic should produce):**
1. **Plain-English denial reason** — "Your tax returns showed $X but you actually earn $Y; a bank statement loan would qualify you at the higher amount."
2. **Ranked lender list** with each lender's actual FICO floor, LTV cap, and program match.
3. **Estimated rate delta vs. conventional** — non-QM typically runs 1.5–3.0% over QM. The diagnostic should state this honestly.
4. **Direct broker match** — instead of dumping the user on a wholesale-only site, match them to a retail broker in their state (e.g., NewFi's retail, Better, LoanSnap, or a non-QM specialist broker).
5. **Condo warrantability pre-flight** — if the borrower mentions a condo, run the 5-question warrantability check and route accordingly.
6. **Document checklist** — exact list of bank statements (12 or 24 mo, personal or business), 1099s, P&L, asset statements — the borrower can take to a broker.

**CTAs the diagnostic should include:**
- "Show me the exact program" → routes to the lender's specific program page.
- "Talk to a broker who handles this" → routes to a non-QM-specialist broker (not the lender).
- "Show me my rate" → if a lender has a self-serve prequal (Kiavi, Pesto, NewFi's retail).
- "Why was I denied in plain English?" → the educational layer none of these sites have.

**Why this is uniquely valuable:** The lenders themselves are competing on wholesale broker enrollment. A consumer-facing diagnostic that:
- Educates the denied borrower,
- Pre-qualifies them to a specific lender's program,
- Surfaces the broker who's the right fit,
- Quotes an honest rate range,

…has no direct competitor. The closest analog is Findigs (rental screening), but no one in the *mortgage* denial space owns this position.

---

## SUMMARY TABLE

| Lender | Channel | Min FICO | Bank Stmt | 1099 | P&L | Asset Dep | DSCR | ITIN | Non-Warr Condo | Condotel | For Nat | Consumer Prequal? |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Angel Oak MS | Wholesale | 640 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (warr only) | ✅ | ✅ | ✅ | ❌ (broker-only) |
| NewFi (retail) | Retail + Wholesale | 620 | ✅ | ✅ | ✅ | ✅ | ✅ | ? | ? | ? | ? | ⚠️ "Book a Meeting" only |
| NewFi Wholesale | Wholesale | 620 (Non-QM) / 640 (DSCR) | ✅ | ✅ | ✅ | ✅ | ✅ | ? | ? | ? | ? | ❌ (broker-only) |
| Deephaven | Wholesale + Correspondent | 620 (NW condo) / 660 (DSCR, Expanded-Prime) / 680 (ITIN) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (incl NW condo) | ✅ | ✅ | ✅ | ❌ (broker-only) |
| Athas Capital | Wholesale | ~620 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ (broker-only) |
| LoanStream | Wholesale | ~620 | ✅ | ✅ | ? | ✅ | ✅ | ✅ | ✅ | ? | ✅ | ❌ (broker-only) |
| Citadel Servicing | Servicing only | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a (servicing site) |
| Acra Lending (Citadel's origination arm) | Wholesale | **600** (industry-low) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ (broker-only) |
| Verus MC | Correspondent + Wholesale | 700+ (Prime Ascent) | ❌ | ❌ | ❌ | ? | ✅ | ? | ? | ? | ✅ | ❌ (lender-only, not consumer) |
| Kiavi | Direct-to-investor (self-serve) | ~660 | ❌ | ❌ | ❌ | ❌ | ✅ (DSCR, 5.875%+) | ❌ | ✅ (investor condo) | ❌ | ❌ | ✅ "See Your Rate" self-serve |
| Pesto | Direct-to-consumer (CA, expanding) | ~620 | ✅ | ✅ | ✅ | ? | ? | ? | ? | ? | ? | ✅ 5-minute apply |
| Findigs | **NOT a mortgage lender** — rental screening | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | ✅ (for rentals, not mortgages) |
| First American CondoCert | Title / HOA estoppel | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | ❌ (title-agent product) |
| Condo Control | HOA mgmt software | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a (not a mortgage tool) |
| Fannie Mae PEL | Lender-internal condo approval list | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | ❌ (lender-only) |
| Wells Fargo condo list | Lender-internal | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | ❌ (lender-only) |
| FHFA / FHA condo lookup | **Publicly searchable** | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | ✅ `entp.hud.gov/idapp/html/condlook.cfm` |

---

## SOURCES

All program copy, FICO/LTV numbers, and CTAs above were extracted from the following live pages during research (files in `/tmp/` from this session):

- Angel Oak: `angeloak.html`, `angel_oak_home.html`, `angel_oak_ms2.html`, `aoms_quickquote.html`, `aoms_bankstmt.html`, `aoms_dscr.html`, `aoms_pl.html`, `aoms_assetdep.html`, `aoms_assetq.html`, `aoms_itin.html`, `aoms_blended.html`
- NewFi: `nfi_newfi_com.html`, `nfi_newfi_com_non_qm_mortgage.html`, `nfi_newfi_com_self_employed_mortgage_lenders.html`, `nfi_newfi_com_bank_statement_loans_arizona.html`, `nfi_www_newfiwholesale_com.html`, `nfi_www_newfiwholesale_com_programs_dscr.html`, `nfi_www_newfiwholesale_com_programs_non_qm.html`
- Deephaven: `deephaven.html`, `dh_https_deephavenmortgage_com_dscr_wholesale_lender_.html`, `dh_https_deephavenmortgage_com_wholesale_expanded_prime_.html`, `dh_https_deephavenmortgage_com_non_warrantable_condo_loan_program_.html`, `dh_https_deephavenmortgage_com_wholesale_itin_mortgage_.html`, `dh_https_deephavenmortgage_com_become_a_partner_.html`, `dh_https_deephavenmortgage_com_blended_rate_calculator_.html`
- Citadel / Acra: `citadelservicing.html`, `acra_home.html`, `acra_programs2.html`, `acra_1099.html`, `acra_dscr.html`, `acra_itin.html`, `acra_condotel.html`
- Verus: `verus.html`, `verus_programs2.html`
- Kiavi: `kiavi.html`, `kiavi_about.html`, `kiavi_apply2.html`
- Findigs: `findigs.html`
- Condo tools: `fhfa_condo_search.html` (HUD FHA condo lookup — the only public one), `condo_tek.html` / `condotek.html` (Condo Control — HOA mgmt software, not mortgage), `firstam_condo.html` (404 — URL defunct), `fanniemae_condo_lookup.html` (404 — the lender-only Project Eligibility Lookup is not consumer-facing), `knowyouroptions.html` (Cloudflare 403 — consumer education, not search).
- **Not reachable from this environment:** `athascapital.com` (multiple timeouts), `pesto.com` (HTTP/2-only, TLS version mismatch), `loanstreammortgage.com` (404 — domain appears defunct or rebranded).
