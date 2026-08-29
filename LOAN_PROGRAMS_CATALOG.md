# Loan Program Catalog — Every Path to US Residential Financing

**Compiled:** 2026-08-29 · **Scope:** All mortgage/financing programs available to US citizens, green-card holders, and visa holders — QM, non-QM, foreign national, hard money, private, government, community, and creative structures.
**Purpose:** Feasibility map for the readiness engine's next expansion (residency gating + program surface area).
**Stamps:** Rows carry `last-verified 2026-08-29` (researched today) or `standard guideline` (well-established, still verify at quote time). This file joins the P20 quarterly-refresh cadence.

---

## 0. Residency taxonomy (the gating key)

The single most important missing question in the app. Every program below is tagged with which residency classes qualify:

| Code | Status | SSN? | Program access |
|---|---|---|---|
| **CIT** | US citizen (incl. US nationals) | Yes | Everything |
| **PR** | Lawful permanent resident (green card) | Yes | Everything CIT can get (agency, non-QM, DPA); VA via own service |
| **NPR-EAD** | Non-permanent resident **with** work authorization + SSN (H-1B, L-1, O-1, TN, E-2, asylum-pending w/ EAD, DACA w/ EAD) | Yes | Conventional (Fannie/Freddie), non-QM, portfolio, DPA varies; **FHA: NO LONGER ELIGIBLE** (2024/25 HUD change); USDA only w/ specific EAD codes; VA via own service only |
| **NPR-NOEAD** | Visa holder **without** work authorization (B-1/B-2, F-1 no CPT/OPT) | Usually no | Foreign-national programs, hard money, crypto-backed; conventional generally not (no ability-to-repay) |
| **ITIN** | Lives/works in US, files with ITIN, no SSN | No | ITIN programs, select non-QM, hard money, portfolio/community banks |
| **FN** | Foreign national — lives abroad or transient, no US status | No | Foreign-national non-QM, FN-DSCR, hard money, crypto-backed, select portfolio |
| **DACA** | Deferred action w/ EAD | Yes | Conventional per Fannie/Freddie guidance (SSN + EAD + 2-yr history); FHA: verify current HUD stance post-2025 change |

**⚠️ Critical policy change (researched today):** HUD removed **all non-permanent residents** (H-1B, L-1, F-1, etc.) from FHA Title I, Title II, *and* HECM eligibility — previously a mainstay path for visa buyers. Conventional (Fannie/Freddie) is now the primary agency lane for NPR-EAD. ([Scotsman Guide](https://www.scotsmanguide.com/news/loan-options-for-visa-holders/), [Supreme Lending](https://blog.supremelending.com/fha-changes-for-non-permanent-residents-what-you-need-to-know-and-why-its-not-the-end-of-the-road/)) Related: USCIS cut max EAD validity to 18 months for several categories as of Dec 5 2025 ([Phillips Lytle](https://phillipslytle.com/uscis-reduces-maximum-validity-periods-for-certain-employment-authorization-documents/)) — underwriters now scrutinize remaining work authorization length on NPR files.

---

## A. Conventional QM — Fannie Mae & Freddie Mac (`standard guideline`)

| # | Program | Down / LTV | FICO | Residency | Notes |
|---|---|---|---|---|---|
| A1 | Conventional 97% (Fannie/Freddie standard) | 3% down, 97 LTV | 620+ | CIT, PR, NPR-EAD, DACA | Fixed/ARM; PMI until 20% equity; first-time OR repeat (Freddie HomeOne = first-time only) |
| A2 | **HomeReady** (Fannie) | 3% down | 620+ | CIT, PR, NPR-EAD | Income ≤80% AMI of tract; non-occupant co-borrower allowed; canceled PMI at 20% |
| A3 | **Home Possible** (Freddie) | 3% down | 620+ | same | Freddie's HomeReady twin; income limits; $2,500 underwriting credit available |
| A4 | Conventional 95/90/85/80 | 5–20% down | 620+ | same | The workhorse; PMI rate varies by FICO/LTV |
| A5 | Conventional jumbo (agency "jumbo-conforming" is A4 above limit) | 10–20% down | 700+ | same | See Section D for true jumbo |
| A6 | Non-occupant co-borrower conventional | 5% down w/ non-occ | 620+ | CIT/PR/NPR-EAD | Family (or close w/ restrictions) non-occupant on owner-occupied 1-unit |
| A7 | Fannie/Freddie **foreign income** refi/purchase for US expats | 20–25% down | 700+ | CIT (living abroad) | Foreign income documented per agency alt-doc rules; portfolio lenders fill gaps |
| A8 | **Freddie CHOICEHome** (MH Advantage manufactured) | 3–5% down | 620+ | CIT, PR, NPR-EAD | Manufactured titled as real property, doubles as Section D row |
| A9 | Co-op share loans (NYC etc.) | 10–20% down | 640+ | CIT, PR, NPR-EAD | Portfolio heavy; Fannie co-op eligible |

---

## B. Government-insured / guaranteed (`standard guideline` unless sourced)

| # | Program | Down / LTV | FICO | Residency | Notes |
|---|---|---|---|---|---|
| B1 | **FHA standard** | 3.5% down (10% if 500–579) | 500+ (580 for 3.5%) | CIT, PR **only now** | MIP 1.75% UFMIP + annual; 2026 model change removed NPR ([Scotsman](https://www.scotsmanguide.com/news/loan-options-for-visa-holders/)) |
| B2 | **FHA with non-occupant co-borrower** | 3.5% down | 500+ | CIT, PR | Max 75% LTV if non-occupant is unrelated; family = full LTV |
| B3 | FHA **streamline refi** | no appraisal | 580+ (practically 640+) | CIT, PR | Existing FHA only; net-tangible-benefit test |
| B4 | FHA **203(k) Standard & Streamlined** | 3.5% of purchase+reno | 580+ | CIT, PR | Renovation financing; Streamlined caps $35k ([HUD](https://www.hud.gov/hud-partners/single-family-mortgage-programs-203k), [loanDepot](https://www.loandepot.com/home-loans/203k)) |
| B5 | FHA Title I property improvement | up to $25k single function | n/a | CIT, PR | Non-mortgage home-improvement insurance |
| B6 | **VA purchase** | 0% down, no MI | 580–620 typical (no official min) | CIT-veterans, PR-veterans | Funding fee 1.25–3.3% (exempt: disability ≥10%); entitlement; jumbo-VA above limits w/ partial entitlement |
| B7 | **VA IRRRL (streamline)** | 0 | n/a | same | Existing VA only; net benefit + recoupment test |
| B8 | **VA cash-out** | up to 100% LTV | 580–620 | same | Also refinances non-VA into VA |
| B9 | **VA renovation/rehab** (pilot, growing lender menu) | 0% down possible | 580–620 | same | Purchase + repairs one loan ([Veterans United](https://www.veteransunited.com/valoans/va-rehab-loans/)) |
| B10 | **VA NADL — Native American Direct Loan** | 0% down | no min | Enrolled members of federally recognized tribes (CIT/PR) | VA lends DIRECTLY; on federal-trust land OK ([VA/Freddie](https://myhome.freddiemac.com/blog/homebuying/exploring-mortgage-options-for-native-homebuyers)) |
| B11 | **HUD Section 184 Indian Home Loan Guarantee** | 2.25% down (1.25% >$50k) | no hard min | Enrolled tribal members CIT/PR | On- and off-trust-land; 1.5%/2.25% guarantee fee ([HUD](https://www.hud.gov/section184)) |
| B12 | **USDA Guaranteed (502)** | 0% down | 640 (GUS) | CIT, PR, NPR-EAD w/ EAD codes A1/A3/A5/A10/C11 | Rural-eligible areas + income ≤115% AMI; 1% upfront + 0.35% annual |
| B13 | **USDA Direct (502)** | 0% down + payment assistance | flexible | CIT, PR (limited aliens) | Low/very-low income; subsidized rates as low as 1%; direct from RD ([USDA RD](https://www.rd.usda.gov/programs-services/single-family-housing-programs/single-family-housing-direct-home-loans)) |
| B14 | **USDA 504 repair** | grant up to $10k / 1% loan | n/a | 62+ homeowner | Health/safety repairs |
| B15 | **USDA 523 mutual self-help** | sweat equity = down | n/a | CIT, PR | Groups build together; 502 financing |
| B16 | **HECM reverse mortgage** | n/a (equity out) | 620-ish financial assessment | CIT, PR only (post-2025) | 62+; HECM for Purchase exists; non-borrowing spouse rules |
| B17 | **VA Specially Adapted Housing (SAH/SHA) grants** | grant, not loan | n/a | Disabled veterans | Buy/build/modify; combines with VA loan |

---

## C. Affordable / community / housing-finance

| # | Program | Down | Residency | Notes |
|---|---|---|---|---|
| C1 | **NACA "Best in America"** | **0 down, 0 closing, 0 PMI, below-market fixed** | CIT, PR, NPR-EAD w/ work auth | Membership org; counseling + volunteer commitments; no FICO used — payment-based; purchase & restructure ([NACA](https://www.naca.com/naca-programs/)) |
| C2 | NACA **HAND renovation** | 0 down | same | Buy-and-rehab w/ payment-free first 6 months when uninhabitable |
| C3 | NACA **City One-Dollar Program** | $1 | same | City-partner vacant-home title transfer + rehab financing |
| C4 | **Habitat for Humanity** | sweat equity + 0% mortgage | CIT, PR, NPR-EAD typically | Income-limited; affiliate-run |
| C5 | NeighborWorks / NHS homebuyer + IDA matched savings | varies | same | HUD-approved counseling networks |
| C6 | **State HFA bond programs** (e.g., Florida Housing) | 0–4% via DPA | CIT, PR; some allow NPR w/ PR | Below-market rate + DPA; MCC (below) ([Florida Housing](https://www.floridahousing.gov)) |
| C7 | **Mortgage Credit Certificate (MCC)** | n/a — 20–50% interest tax credit | CIT, PR | Stacks with most first mortgages; annual cap; recapture tax caveat |
| C8 | **Chenoa Fund DPA** (nationwide, ex-NY) | 3.5% via 2nd lien (repayable or forgivable) | CIT, PR (FHA frame) | CBC Mortgage Agency; education course for lower scores ([Chenoa](https://chenoafund.org/lender/programs/)) |
| C9 | **Good Neighbor Next Door** | 50% off HUD REO, $100 down | Teachers PreK-12, LEO, firefighters, EMTs (CIT/PR) | 3-yr occupancy covenant ([HUD GNND](https://www.hud.gov/topics/good_neighbor_next_door)) |
| C10 | City/county DPA + Employer-Assisted Housing | varies | varies | Local programs (Miami-Dade, Tampa, Orlando all run cycles); hospitals/universities offer EAH |
| C11 | **Hometown Heroes** (FL) | up to ~$25–50k 0% second | front-line occupations (FL) | Funding cycles open/close; verify current round before quoting |
| C12 | FL **HFA Preferred + FL Assist / FL HLP** | 3–5% + $10–15k second | CIT, PR | State geofence relevant: FL Assist $15k 0% deferred; FL HLP $10k 3% amortizing |
| C13 | **Shared-equity / deed-restricted** (community land trusts) | discounted purchase | CIT, PR, ITIN often | Below-market resale restrictions; CLTs statewide |

---

## D. Jumbo / non-conforming (QM)

2026 conforming baseline **$832,750**, high-cost ceiling **$1,249,125**; anything above is jumbo ([FHFA](https://www.fhfa.gov/data/conforming-loan-limit), [Fifth Third](https://www.53.com/content/fifth-third/en/financial-insights/personal/home-ownership/what-is-a-jumbo-loan.html)).

| # | Program | Down / LTV | FICO | Residency | Notes |
|---|---|---|---|---|---|
| D1 | Agency jumbo (portfolio) | 10–20% down to $3M | 700–740 | CIT, PR, NPR-EAD | Bank-held; overlays vary |
| D2 | Super jumbo ($2–20M) | 20–30% down | 720+ | CIT, PR, NPR-EAD, selective FN | Private banks; relationship pricing |
| D3 | Jumbo interest-only | 30% down typical | 720+ | same | IO 10 yrs then amortize |
| D4 | Jumbo **foreign national** | 25–35% down | no US FICO (intl report) | FN | Rare but exists at private banks w/ deposits |
| D5 | Asset-based jumbo | 30–40% down | 700+ | CIT, PR, NPR-EAD | AUM-based qualification; bridges to Section E |

---

## E. Non-QM (researched today — core engine territory)

Sources: [Third Coast Non-QM menu](https://mortgage.thirdcoast.bank/NonQMLoans.html) (rich published matrix incl. DSCR/Bank Statement/Foreign National/ITIN tiers), [MMC Lending](https://www.mmclending.com/loan-products/non-qm-loans), [Truss FG foreign national](https://trussfinancialgroup.com/blog/foreign-national-loan-program), plus in-corpus Angel Oak/NewFi/Acra research (`RESEARCH_NON_QM.md`, verified live 2026-08-28).

| # | Program | Typical LTV / down | FICO | Residency | Notes |
|---|---|---|---|---|---|
| E1 | **Bank statement 12/24-mo** | 75–90% LTV | 640+ | CIT, PR, NPR-EAD, ITIN( some) | 75–100% of deposits as income; add-ons for expenses |
| E2 | **P&L only (CPA-prepared)** | 80% LTV | 640–720 | CIT, PR, NPR-EAD | 90% of P&L net; 2-mo business statements ([Angel Oak live verify](https://angeloakms.com/programs/pl-loan/)) |
| E3 | **1099-only** | 80–90% LTV | 640+ | same | Gig/contractor; single source OK |
| E4 | **WVOE (written VOE only)** | 80% LTV | 660+ | CIT, PR, NPR-EAD | No tax returns at all |
| E5 | **Asset depletion / asset qualifier** | 65–70% LTV | 700+ | CIT, PR, NPR-EAD | $500k+ liquid; ÷84 mo as income (divisor varies 60–120) |
| E6 | **DSCR investor cash-flow** | 75–80% LTV | 620–680 | CIT, PR, NPR-EAD, FN (see E12) | Rent/PITIA ≥1.0; <1.0 possible w/ more down; no personal DTI |
| E7 | **No-Doc / no-ratio** | 60–65% LTV | 680+ | CIT, PR | Income not stated; pure asset/credit |
| E8 | **ITIN mortgage** | 65–80% LTV (15–25% down) | 620–700 or no score | ITIN | Cross-border credit accepted; individual TIN; growing lender set ([Movement](https://movement.com/loans/itin), [Sunrise Banks Pathway2Home](https://sunrisebanks.com/stories/sunrise-banks-pathway2home-itin-mortgages-home-loans-for-borrowers-without-a-social-security-number/), [JVM guide](https://www.jvmlending.com/blog/itin-mortgage-loans-a-comprehensive-guide/)) |
| E9 | **Non-warrantable condo / condotel** | 75–90% LTV | 640+ | CIT, PR, NPR-EAD | Litigation/investor-share buildings; DSCR variant to 85% ([Angel Oak condos](https://angeloakms.com/angel-oak-non-qm-condominium-loans/)) |
| E10 | **Non-QM jumbo / expanded** | 80% to $3–4M | 680+ | CIT, PR, NPR-EAD | "Just-missed prime" |
| E11 | **Foreign national purchase (full-doc alt)** | 65–75% LTV | no US FICO or 660 | FN, NPR-NOEAD | Intl credit report, 12-mo reserves, foreign income; EAD not required |
| E12 | **Foreign-national DSCR** | 65–75% LTV | 660 or **no score** | FN | Investment only; no income verification; LLC closings; RON e-closing ([Third Coast](https://mortgage.thirdcoast.bank/NonQMLoans.html)) |
| E13 | **Interest-only non-QM** | 70–80% | 660+ | CIT, PR, NPR-EAD | Cash-flow strategy |
| E14 | **Crypto-income qualification** (select non-QM) | 65–75% | 680+ | CIT, PR | 12–24 mo exchange statements; conservative haircut |
| E15 | **Portfolio Select / post-event seasoning** | 75–85% LTV | 640+ | CIT, PR, NPR-EAD | 1-yr FC/SS/DIL, 2-yr BK ([Angel Oak Portfolio Select, live-verified](https://angeloakms.com/programs/portfolio-select-mortgage-program/)) |

---

## F. Foreign national & visa-specific (beyond E11/E12)

| # | Program | Residency | Notes |
|---|---|---|---|
| F1 | Conventional **NPR-EAD path** | NPR-EAD, DACA w/ EAD | Valid visa + SSN + 2-yr US credit; job-offer continuity letters; doc list: EAD (I-765), I-797, I-94 ([LoanSimple allowed statuses](https://support.loansimple.com/support/solutions/articles/153000196580-allowable-immigration-status-non-permanent-resident), [Newcastle guide](https://www.newcastle.loans/mortgage-guide/non-permanent-resident)) |
| F2 | FHA **was** the NPR path — **now closed** | — | Post-change redirect: conventional or non-QM ([Scotsman](https://www.scotsmanguide.com/news/loan-options-for-visa-holders/)) |
| F3 | Foreign national portfolio (private banks) | FN w/ US deposits | Relationship-led: AUM + deposit balances offset thin files |
| F4 | US-expat conventional w/ foreign income | CIT abroad | Fannie foreign-income documentation; 6–12 mo reserves |
| F5 | International private banks (HSBC/Citi intl) | CIT/PR/FN | Multi-jurisdiction underwriting; high minimums |

---

## G. Hard money / bridge / private / fix-flip / land

Terminology map (researched today — [Stormfield](https://stormfieldcapital.com/bridge-hard-money-fix-and-flip-private-loans/), [Gelt](https://geltfinancial.com/bridge-loan/bridge-loans-vs-hard-money-loans-2026/), [TaliMar](https://www.talimarfinancial.com/los-angeles-bridge-lender/)): **fix-and-flip = purpose, bridge = timing, hard money = underwriting style, private = who funds it.**

| # | Program | Leverage | Term | Residency | Notes |
|---|---|---|---|---|---|
| G1 | Fix & flip (bridge rehab) | 80–90% LTC / 65–75% ARV | 6–18 mo IO | CIT, PR, ITIN, FN (entity) | Rehab holdback in draws; 1–3 pts + 9–14% |
| G2 | Ground-up construction bridge | 75–85% LTC | 12–18 mo | same | Builder exit via sale |
| G3 | Bridge / cash-out refi | 60–70% LTV | 6–24 mo | same | Foreclosure bailout, BRRRR exits |
| G4 | Transactional funding (double-close) | 100% of 1 day | 1–3 days | any | EMD/back-to-back closings |
| G5 | Land / lot loan | 30–50% down | 3–15 yr | CIT, PR (ITIN via portfolio) | Recourse; portfolio banks |
| G6 | **Farm Credit System** land/ag loans | 15–35% down | 5–30 yr | CIT, PR | Rural land w/ ag use; cooperative membership; rural home w/ acreage |
| G7 | Private/family note | negotiated | negotiated | any | Amortized or balloon; SEC-crowdfunding debt funds fill middle market |
| G8 | Hard-money **DSCR takeout→perm** | varies | varies | same | Refinance path out of bridge (pairs with E6) |

---

## H. Crypto-backed (researched today)

| # | Program | Collateral | Residency | Notes |
|---|---|---|---|---|
| H1 | **Milo crypto-backed mortgage** | BTC/ETH in insured custody | CIT, PR, **international borrowers** | Finance up to ~100% of purchase w/ sufficient collateral; rates from ~7%; no US credit needed for intl ([Milo](https://www.milo.io/)) |
| H2 | **Ledn BTC-backed loans** | Bitcoin | global | Cash loan *against* BTC (not a property mortgage) — used for down payment or all-cash purchase then refi ([Ledn](https://www.ledn.io/borrowing), [Ledn mortgages post](https://www.ledn.io/post/mortgages)) |
| H3 | Margin-free self-custody variants | varies | varies | Emerging; verify insurance/custody model before client recommendation |

---

## I. Renovation & construction

| # | Program | Down | Residency | Notes |
|---|---|---|---|---|
| I1 | FHA 203(k) Standard | 3.5% of cost+reno | CIT, PR | Structural/essential repairs; consultant |
| I2 | FHA Streamlined 203(k) | 3.5% | CIT, PR | ≤$35k non-structural |
| I3 | **Fannie HomeStyle Renovation** | 5% typical | CIT, PR, NPR-EAD | Any property type incl. 2nd home/investor w/ 20–25% down |
| I4 | **Freddie CHOICERenovation** | 3–5% | CIT, PR, NPR-EAD | Freddie's HomeStyle twin |
| I5 | VA renovation (pilot) | 0% | veteran CIT/PR | Single-close purchase+repairs |
| I6 | Construction-to-perm **one-time close** (FHA/VA/USDA/conv) | 3.5% / 0% / 0% / 5–20% | per base program | Rate locked pre-construction; single closing |
| I7 | Two-close construction | 10–20% | CIT, PR, NPR-EAD | Cheaper rate risk split; portfolio |
| I8 | Owner-builder construction | 20%+ | CIT, PR | Rare; portfolio only |

---

## J. Specialty property & tenure

| # | Program | Residency | Notes |
|---|---|---|---|
| J1 | Manufactured — FHA Title II (real property) | CIT, PR | Double-wide+, post-1976, permanent foundation, owned/approved land |
| J2 | Manufactured — **Fannie MH Advantage / Freddie CHOICEHome** | CIT, PR, NPR-EAD | 3–5% down modern MH |
| J3 | Manufactured — VA | veteran CIT/PR | 0% down; foundation + land requirements |
| J4 | Manufactured — **chattel (home-only)** loans (21st, Vanderbilt, Triad) | CIT, PR, ITIN | Land-lease communities; personal-property loan 6.5–12%, 15–23 yr |
| J5 | Modular (built to local code) | — | Treated as SFR under any program |
| J6 | Condotel / non-warrantable (see E9) | — | — |
| J7 | Co-op share loans (see A9) | — | — |
| J8 | Barndominium / container / dome | CIT, PR | Portfolio/commercial only |
| J9 | Log homes | CIT, PR | FHA/conv OK w/ comps; portfolio fallback |
| J10 | Mixed-use (live-work 2–8 units) | CIT, PR, NPR-EAD | DSCR menu (Third Coast matrix) |
| J11 | Timeshare/deeded fractional | n/a | Generally *no* mortgage financing; cash |

---

## K. Refinance & equity products

| # | Program | Residency | Notes |
|---|---|---|---|
| K1 | Conventional rate/term & cash-out refi | CIT, PR, NPR-EAD | 80% LTV cash-out primary (90–100% select non-QM) |
| K2 | FHA streamline (B3), VA IRRRL (B7) | — | — |
| K3 | HELOC / closed-end HELOAN | CIT, PR, NPR-EAD, ITIN (portfolio) | 80–90% CLTV; investor to 75% |
| K4 | **Home Equity Investment / shared appreciation** (Hometap, Point, Unison) | homeowner CIT/PR | Not debt — investor takes % of future appreciation; CFPB flags risk ([Hometap](https://www.hometap.com/), [CFPB issue spotlight](https://www.consumerfinance.gov/data-research/research-reports/issue-spotlight-home-equity-contracts-market-overview/)) |
| K5 | HECM / HECM-for-Purchase (B16) | CIT, PR | 62+ |
| K6 | PACE energy assessment | property-based | FL is active; tiles into tax bill; **not assumed by buyer** — escrow payoff at sale |

---

## L. Professional / employment-tied

| # | Program | Residency | Notes |
|---|---|---|---|
| L1 | **Doctor/physician loans** (BofA, USFCU, Huntington, etc.) | CIT, PR, **many allow NPR-EAD w/ offer letter** | 0–5% down to $850k–$1.5M; MD/DO/DDS/CRNA/PA/PharmD; excludes condo-heavy overlays; no PMI ([BofA](https://www.bankofamerica.com/mortgage/doctor-loan/), [USFCU 100% to $850k](https://www.usfcu.com/medical)) |
| L2 | Attorney/CPA/professional portfolios | CIT, PR | Select credit unions |
| L3 | Employer-assisted housing | employee | Hospitals/universities; forgivable advances |
| L4 | relocation buy-before-sell (Homeward, Knock, Orchard, Flyhomes) | CIT/PR mainly | Cash offer + leaseback; fees 1–2.5%; risk: two mortgages briefly |

---

## M. Creative / ownership structures (`verify legality per state`)

| # | Structure | Residency | Notes |
|---|---|---|---|
| M1 | **Seller financing / promissory note** | any | Dodditch-AMC nuance: seller-lender limits (1 property/yr owner-financed w/o license); FL servicer licensing caveat |
| M2 | **Contract for deed / land contract** | any, incl. ITIN/FN | Buyer has equitable title only; FL statutory form exists |
| M3 | Lease-option / rent-to-own | any | Option fee + premium rent; watch predatory terms |
| M4 | Lease-purchase platforms (Home Partners, Dream America) | CIT/PR mostly | Corporate landlord buys; tenant buys later at formula price |
| M5 | **Assumable FHA/VA** | any qualifying | Take over seller's 2–3% rate; VA entitlement entanglement; investor assumption triggers due-on-sale |
| M6 | Intra-family mortgage (National Family Mortgage etc.) | family | Serviced AFR-rate notes; gift-tax interplay |
| M7 | Non-occupant co-borrower (A6/B2) | — | Conventional/FHA allow; VA/USDA effectively don't |
| M8 | Gift of equity (family sale) | family | Equity as down payment; conventional caps, FHA full |
| M9 | Community land trust resale | varies | Price caps embedded |

---

## N. Grants & assistance (no repayment)

| # | Program | Residency | Notes |
|---|---|---|---|
| N1 | VA SAH/SHA + TRA (B17) | veterans | Modify for disability |
| N2 | HUD Good Neighbor Next Door (C9) | teachers/LEO/fire/EMS | 50% discount |
| N3 | USDA 504 elderly repair grant (B14) | 62+ | $10k grant / $20k combined |
| N4 | IDA matched savings (C5) | low-income | 1:1 to 3:1 match into purchase |
| N5 | City $1 lots (C3) | varies | Detroit/Flint model; FL cities vary |
| N6 | Utility/energy rebates (tied to EEM) | any | Stack with FHA EEM add-on |

---

## O. Eligibility matrix (quick cross-reference)

| Program family | CIT | PR | NPR-EAD | NPR-noEAD | ITIN | FN |
|---|---|---|---|---|---|---|
| Conventional QM (A) | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| FHA (B1–B5) | ✅ | ✅ | ❌ *(2025 change)* | ❌ | ❌ | ❌ |
| VA (B6–B10) | ✅ svc | ✅ svc | ✅ if veteran | ❌ | ❌ | ❌ |
| USDA (B12–B15) | ✅ | ✅ | ✅ EAD A1/A3/A5/A10/C11 | ❌ | ❌ | ❌ |
| HECM (B16) | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Section 184 / NADL (B10/B11) | tribal | tribal | tribal | ❌ | ❌ | ❌ |
| Non-QM core (E1–E7, E10, E13–E15) | ✅ | ✅ | ✅ | ❌ | ✅ (some) | ❌ |
| ITIN programs (E8) | n/a | n/a | ❌ (has SSN) | ❌ | ✅ | ❌ |
| Foreign national (E11/E12, D4, F3) | ❌ (use A7) | ❌ (use A) | ❌ | ✅ | ❌ | ✅ |
| Hard money / bridge (G) | ✅ | ✅ | ✅ | ✅ (entity) | ✅ | ✅ |
| Crypto-backed (H) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Chattel MH (J4) | ✅ | ✅ | some | ❌ | ✅ (some) | ❌ |
| DPA/HFA (C) | ✅ | ✅ | varies | ❌ | varies | ❌ |
| Seller finance / land contract (M1/M2) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## P. App impact — what this changes in the engine (proposed, not yet built)

**Engine coverage today:** `conventional_conf/jumbo, fha, va, usda` + non-QM `bank_statement, pandl_only, dscr, asset_qualifier, itin, non_qm_jumbo, non_warrantable` — 12 types, **no residency gate**.

**Gaps the catalog exposes:**

1. **Residency question (P1-critical).** Add `residencyStatus: CIT | PR | NPR_EAD | NPR_NO_EAD | ITIN | FN | DACA` to `EngineInputs` + wizard step 1. Gates: FHA (block NPR), USDA (EAD-code note), VA (veteran + status), ITIN/foreign-national paths (already flagged `isItinBorrower` — extend with full enum).
2. **FHA policy change** — the engine's FHA gate is currently correct only for CIT/PR; must hard-block NPR-EAD and surface the conventional redirect.
3. **New LoanTypes worth surfacing** (readiness-adjacent): `home_ready`/`home_possible` (income-limit question), `dpa_assisted_fha`, `mcc`, `renovation_203k`/`homestyle`, `construction_otc`, `chattel_manufactured`, `foreign_national`, `fn_dscr`, `portfolio_select` (already half-modeled via obstacles), `bridge`/`hard_money` (flag-only, refer to MLO), `physician`, `section_184` (tribal affiliation question), `naca` (counseling referral).
4. **Refi purpose paths** — engine is purchase-shaped; `LoanPurpose.REFI_*` exists but no streamline/IRRRL/HECM logic.
5. **FL HFA layer** — Florida Housing programs map cleanly onto the geofence and belong in strengths/next-steps copy.
6. **Non-QM residency expansion** — non-QM core should accept NPR-EAD explicitly (currently silent = de facto yes), ITIN subset documented.

*Estimate: residency enum + FHA/USDA/VA gates ≈ 0.5 day; new LoanType rows with floors ≈ 1 day; question wiring ≈ 0.5 day.*

---

*Method: live web research 2026-08-29 via Firecrawl keyless search (sources cited inline); agency/GSE program facts marked `standard guideline` are well-established but every LTV/FICO/limit row must be re-verified at quote time against the current program guide. This catalog is educational and is not a commitment to lend.*
