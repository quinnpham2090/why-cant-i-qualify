# Federal Mortgage Advertising Compliance Report

**Subject:** Consumer-facing U.S. mortgage qualification diagnostic website ("Why Am I Denied")
**Prepared:** Research request for primary-source compliance brief
**Scope:** Regulation N (MAP Rule), FHA/HUD advertising, TILA/Reg Z, UDAAP under CFPA, and CFPB enforcement actions 2023–2026

---

## Executive Summary

A mortgage qualification diagnostic that *suggests* a consumer may qualify for a specific loan program, loan amount, or rate — even if it is careful to use words like "estimate" or "preliminary" — runs squarely into four overlapping federal regimes:

1. **Regulation N (12 CFR Part 1014)** — the MAP Rule — prohibits *any material misrepresentation* in a "commercial communication" regarding *any term* of a mortgage credit product, expressly or by implication. It is a strict-liability-style rule: there is no requirement of intent. **[12 C.F.R. § 1014.3](https://www.ecfr.gov/current/title-12/chapter-X/part-1014)**
2. **Regulation Z (12 CFR Part 1026)** treats any website, tool, or ad that mentions a payment, rate, loan amount, or term as a "credit advertisement" and imposes a layered disclosure regime with "triggering terms." **[12 C.F.R. § 1026.24](https://www.ecfr.gov/current/title-12/chapter-X/part-1026/subpart-C#§-1026.24)**
3. **UDAAP under 12 U.S.C. §§ 5531, 5536** lets the CFPB sue any "covered person" for deceptive statements about approval, qualification, or likelihood of obtaining credit.
4. **HUD/FHA advertising rules (24 CFR Part 202; HUD Mortgagee Letters)** restrict the use of the FHA "Lender" logo and any reference to FHA programs.

A diagnostic tool can comply — but only if it (a) avoids giving the impression that it has underwritten the consumer, (b) makes crystal clear that the result is not a "pre-approval," "pre-qualification," or "guarantee," (c) treats every rate/payment it displays as a "triggering term" requiring Reg Z disclosures, and (d) treats any FHA reference as a regulated use.

---

## 1. Regulation N — The MAP Rule (12 C.F.R. Part 1014)

### 1.1 Statutory and Regulatory Authority

| Item | Citation | Source |
|---|---|---|
| Implementing statute | 12 U.S.C. § 5538 (incorporating § 626 of the 2009 Omnibus Appropriations Act, as amended by § 1097 of the Dodd-Frank Act) | CFPB rule |
| Rule | 12 C.F.R. Part 1014 | eCFR |
| Federal Register publication | **76 FR 78133, Dec. 16, 2011** | [GovInfo](https://www.govinfo.gov/content/pkg/FR-2011-12-16/pdf/2011-31871.pdf) |
| Authority citation | 12 U.S.C. 5512, 5581; 15 U.S.C. 1638 note | 12 C.F.R. § 1014 (Source line) |
| Coverage | "applies to persons over which the Federal Trade Commission has jurisdiction under the Federal Trade Commission Act" — i.e., virtually all non-bank mortgage companies | 12 C.F.R. § 1014.1 |

### 1.2 Key Definitions (12 C.F.R. § 1014.2)

- **"Commercial communication"** means *any* "written or oral statement, illustration, or depiction, whether in English or any other language, that is designed to effect a sale or create interest in purchasing goods or services, whether it appears on or in a label, package, package insert, radio, television, cable television, brochure, newspaper, magazine, pamphlet, leaflet, circular, mailer, book insert, free standing insert, letter, catalogue, poster, chart, billboard, public transit card, point of purchase display, film, slide, audio program transmitted over a telephone system, telemarketing script, on-hold script, upsell script, training materials provided to telemarketing firms, program-length commercial ('infomercial'), **the internet, cellular network, or any other medium. Promotional materials and items and Web pages are included in the term 'commercial communication.'"** (emphasis added)

  **A mortgage-qualification website that displays results to a consumer is by definition a "commercial communication" under the MAP Rule.**

- **"Mortgage credit product"** is "any form of credit that is secured by real property or a dwelling and that is offered or extended to a consumer primarily for personal, family, or household purposes."

- **"Consumer"** is "a natural person to whom a mortgage credit product is offered or extended."

- **"Term"** is broadly defined to include "any of the fees, costs, obligations, or characteristics of or associated with the product" and "any of the conditions on or related to the availability of the product."

### 1.3 The Core Prohibition — 12 C.F.R. § 1014.3

The MAP Rule's central provision states, in full:

> **"It is a violation of this part for any person to make any material misrepresentation, expressly or by implication, in any commercial communication, regarding any term of any mortgage credit product, including but not limited to misrepresentations about:"**

There is **no scienter requirement** — it is irrelevant whether the misrepresentation was intentional, negligent, or even a software bug. The plain-language prohibitions in 12 C.F.R. § 1014.3(a)–(s) cover the following 19 categories of misrepresentations:

| Sub-paragraph | Misrepresentation about | Plain-English explanation |
|---|---|---|
| (a) | Interest charged and the difference between interest owed/paid | Cannot misstate how much of each payment is interest |
| (b) | The annual percentage rate, simple annual rate, periodic rate, **or any other rate** | No rate misrepresentation, including the comparison rate |
| (c) | Existence, nature, or amount of fees, including "no fees are charged" | Can't claim "no closing costs" if any exist |
| (d) | Additional products (credit insurance, etc.) | Tied-product misrepresentations |
| (e) | Taxes or insurance requirements | Can't say "taxes/insurance not required" if they are |
| (f) | Prepayment penalty | Hidden pre-payment traps |
| (g) | **Variability of interest, payments, or other terms** — *including but not limited to misrepresentations using the word "fixed"* | Banned use of "fixed" for variable-rate products without context |
| (h) | **Comparisons** between any rate/payment available for a period less than the full loan term and any actual or hypothetical rate/payment | Cannot use a teaser rate vs. a hypothetical current rate |
| (i) | Type of mortgage product (e.g., "fully amortizing") | No calling a balloon loan a "fully amortizing mortgage" |
| (j) | Amount of obligation, or existence/nature/amount of cash or credit | Misleading cash-out refinance claims |
| (k) | Existence, number, amount, or timing of any minimum or required payments — *including misrepresentations that no payments are required* (e.g., reverse mortgages) | Reverse-mortgage claims |
| (l) | Potential for default, circumstances for default | "No default risk" claims |
| (m) | Effectiveness in helping resolve debt, including "waiver or forgiveness" | "Eliminate debt" or "forgive" claims |
| (n) | **Association with any governmental entity, or that the product "is or relates to a government benefit, or is endorsed, sponsored by, or affiliated with any government or other program, including but not limited to through the use of formats, symbols, or logos that resemble those of such entity, organization, or program"** | Government-affiliation claims — core issue for FHA references |
| (o) | Source of the commercial communication, including "that a commercial communication is made by or on behalf of the consumer's current mortgage lender or servicer" | Cannot impersonate the consumer's current servicer |
| (p) | Right of consumer to reside in dwelling (e.g., reverse mortgage) | Right-to-stay claims |
| (q) | **"The consumer's ability or likelihood to obtain any mortgage credit product or term, including but not limited to misrepresentations concerning whether the consumer has been preapproved or guaranteed for any such product or term"** | **THE KEY PROVISION for a diagnostic tool** |
| (r) | Same, for refinancing or modification | Same for refi |
| (s) | Counseling services, qualifications of counselors | HUD-counseling impersonation |

### 1.4 Other MAP Rule Provisions

- **12 C.F.R. § 1014.4** — Waiver of any protection is itself a violation.
- **12 C.F.R. § 1014.5** — 24-month recordkeeping requirement for: (1) copies of all "materially different commercial communications" and scripts, training, and marketing materials; (2) documents describing all mortgage credit products available; (3) documents describing additional products offered with the mortgage. **Failure to keep records is itself a violation.**
- **12 C.F.R. § 1014.6** — State Attorney General enforcement authority.
- **12 C.F.R. § 1014.7** — Severability.

### 1.5 Direct Application to a Mortgage Qualification Diagnostic

A consumer-facing diagnostic that returns "You may qualify for a $350,000 FHA loan at 6.5% with monthly payments of $2,212" — *even with disclaimers* — creates exposure under § 1014.3(q) if any of those numbers is not actually what the consumer would be offered. This is true whether or not the tool has creditor intent.

---

## 2. FHA / HUD Advertising Rules

### 2.1 Use of HUD-Registered Business Name in FHA-Program Advertising — 24 C.F.R. § 202.5(a)(2)

The plain-text rule, directly from eCFR (24 C.F.R. § 202.5(a)(2)):

> **(2) Use of business name.** The lender or mortgagee must use its HUD-registered business name in all advertisements and promotional materials related to FHA programs. HUD-registered business names include any alias or "doing business as" (DBA) on file with FHA. **The lender or mortgagee must keep copies of all print and electronic advertisements and promotional materials for a period of 2 years from the date that the materials are circulated or used to advertise.**

Authority: 12 U.S.C. 1715b, 1701q, 1701z-11, 1715u, 1735f-13, 1735g; 42 U.S.C. 3535(d).
Source: 61 FR 48548, Sept. 13, 1996; revised at 89 FR 71836, Sept. 4, 2024.

**Implication for a diagnostic tool:** If the site references FHA programs, every page that does so must (a) display the company's actual HUD-registered name, and (b) retain all such pages and any ads for two years.

### 2.2 Use of the FHA Lender Logo, "HUD" Name, and "FHA" Acronym

The canonical HUD rule is **HUD Mortgagee Letter 2011-17** ("Use of HUD/FHA Logo, Name and Acronym in Advertising," Apr. 15, 2011) — cited in the CFPB's RMK consent order (2023) and the 2015 RMK consent order. The CFPB has quoted HUD's guidance as follows:

> "[L]enders are strictly prohibited from displaying the FHA Lender Logo in a location or manner within an advertisement that creates the false impression that the advertisement is an official government form, notice or document or that otherwise conveys the false impression that the advertisement is authored, approved, or endorsed by HUD or the FHA. To prevent this, HUD's guidance states that **the FHA Lender Logo must be displayed in a 'discreet manner'** and that use of the logo must, in each instance, be accompanied by **a conspicuous disclaimer that clearly informs the public that the lender is not acting on behalf of or at the direction of HUD, FHA, or the Federal government.**" — *In re RMK Financial Corp.*, File No. 2023-CFPB-0002 (Feb. 27, 2023), ¶¶ 28 (quoting ML 2011-17).

The same ML is the basis for HUD's prohibition of "FHA Lender" emblems that look like government seals and the requirement for a disclaimer.

### 2.3 The "Equal Housing Lender" Slogan and Logo

The **Equal Housing Lender** slogan and three-house logo are governed by HUD's separate rule. The regulation that originally codified it is found at 24 C.F.R. part 110, subpart A (Fair Housing Poster) and the rule was published in 1975 (40 FR 20079). Use of the "Equal Housing Lender" logo/slogan is required for all FHA-approved mortgagees in their advertising. (See HUD's [Equal Housing Lender page](https://www.hud.gov/program_offices/fair_housing_equal_opp/equal-housing-lender) for current guidance.)

The required HUD-mandated disclaimer (per ML 2011-17) when displaying the FHA Lender logo reads to the effect of: "This is not a government agency. The lender is not acting on behalf of or at the direction of HUD/FHA. The Federal Government does not endorse or guarantee any product."

### 2.4 When Can a Site Reference "FHA Programs"?

Three safe options exist, with increasing compliance burden:

1. **No FHA reference at all** — describe the loan as "a government-backed mortgage" without naming the agency.
2. **Plain informational reference** — e.g., "FHA loans are insured by the Federal Housing Administration and require mortgage insurance premiums. Not all borrowers qualify." HUD does not prohibit educational references.
3. **Programmatic display of FHA eligibility (e.g., "You appear to meet FHA minimum requirements")** — allowed **only if** the site is operated by or on behalf of a HUD-approved mortgagee using its registered business name, has a written quality control plan (24 C.F.R. § 202.5(h)), and is NOT using the FHA Lender logo in any manner that creates the false impression of government sponsorship.

If the site uses the words "FHA," "FHA-approved," "FHA loan," or anything similar, the operator must either be the FHA-approved mortgagee or have a written agreement with one.

### 2.5 24 C.F.R. § 100.75 — Fair Housing Act Advertising Prohibition

From 24 C.F.R. § 100.75(a):

> **"It shall be unlawful to make, print or publish, or cause to be made, printed or published, any notice, statement or advertisement with respect to the sale or rental of a dwelling which indicates any preference, limitation or discrimination because of race, color, religion, sex, handicap, familial status, or national origin, or an intention to make any such preference, limitation or discrimination."**

Authority: 42 U.S.C. 3604(c), 3606. Subsections (b)–(d) apply this to all written/oral notices, including "flyers, brochures, deeds, signs, banners, posters, billboards."

**Implication for a diagnostic:** Even an *implied* preference in advertising (e.g., language, photos, or neighborhood tags that suggest a particular demographic) can violate the Fair Housing Act. The diagnostic's UX must not include images or language that signal a preference.

---

## 3. TILA / Regulation Z (12 C.F.R. Part 1026)

### 3.1 Authority and Structure

- Statute: **Truth in Lending Act (TILA), 15 U.S.C. §§ 1601–1667f**, particularly § 105 (15 U.S.C. § 1604) (general disclosure requirements) and § 144 (15 U.S.C. § 1664) (advertising).
- Regulation: **12 C.F.R. Part 1026**, particularly Subpart C (12 C.F.R. §§ 1026.18, 1026.24) and the definitions in § 1026.2.

### 3.2 When a Website Becomes a "Credit Advertisement" or "Creditor"

**"Advertisement"** is defined at 12 C.F.R. § 1026.2(a)(2):

> "**Advertisement** means a commercial message in any medium that promotes, directly or indirectly, a credit transaction."

A mortgage diagnostic that displays any rate, payment, loan amount, or product and routes the user toward lenders is "promoting, directly or indirectly, a credit transaction" — that is an advertisement under Reg Z.

**"Creditor"** is defined at 12 C.F.R. § 1026.2(a)(17):

> "**Creditor** means: (i) A person who regularly extends consumer credit that is subject to a finance charge or is payable by written agreement in more than four installments (not including a down payment)..."
> "A person regularly extends consumer credit only if it extended credit (other than credit subject to the requirements of § 1026.32) more than 25 times (or **more than 5 times for transactions secured by a dwelling**) in the preceding calendar year."

**The "more than 5 times" dwelling-secured threshold is critical**: A diagnostic that does *not itself extend credit* (i.e., does not fund loans) is generally not a "creditor" under Reg Z. The diagnostic is an **advertiser** of *creditor's* products (or of lead-generation services that connect consumers to creditors), not the creditor. The Reg Z advertising rules still apply, but the higher creditor-disclosure regime in §§ 1026.17–1026.38 generally does not.

### 3.3 Triggering Terms in Advertising — 12 C.F.R. § 1026.24(d)(1)

This is the most operationally important provision for a diagnostic. **Once the ad states any one of these four terms, it must make four additional disclosures:**

> **Triggering terms (any one triggers all four additional disclosures):**
> 1. The amount or percentage of any **downpayment**
> 2. The number of **payments** or **period of repayment**
> 3. The amount of any **payment**
> 4. The amount of any **finance charge**

> **Required additional disclosures (all four):**
> 1. The amount or percentage of the **downpayment**
> 2. The **terms of repayment**, reflecting the consumer's repayment obligations over the full term of the loan, **including any balloon payment**
> 3. The **"annual percentage rate,"** using that term, and **if the rate may be increased after consummation, that fact**
> 4. (For open-end, the periodic rate and other terms)

> Source: 12 C.F.R. § 1026.24(d)(1)–(2)

**Example of triggering:** A diagnostic result page that says "Monthly payment: $2,212" with nothing else violates Reg Z. It must also show: (a) repayment term (e.g., 30-year fixed), (b) APR, (c) any balloon, and (d) the down payment.

### 3.4 Disclosure of Rates and Payments in Mortgage Ads — 12 C.F.R. § 1026.24(f)

For "credit secured by a dwelling" (which includes virtually all mortgages), Reg Z imposes additional, more specific rules:

**§ 1026.24(f)(2) — Disclosure of rates (for non-TV/radio ads):**
If the ad states a simple annual rate of interest and more than one rate will apply over the loan term (i.e., any variable-rate or ARM ad), it must clearly and conspicuously disclose:
- (A) Each simple annual rate of interest that will apply. For variable rates, the rate must be disclosed based on a "reasonably current index and margin."
- (B) The period of time during which each simple annual rate of interest will apply.
- (C) The annual percentage rate (APR) for the loan. For variable rates, the APR must comply with the accuracy standards in §§ 1026.17(c) and 1026.22.

**§ 1026.24(f)(2)(ii) "Clear and conspicuous"** means the required information "shall be disclosed with equal prominence and in close proximity to any advertised rate that triggered the required disclosures."

**§ 1026.24(f)(3) — Disclosure of payments (for non-TV/radio ads):**
If the ad states the amount of any payment, it must clearly and conspicuously disclose:
- (A) The amount of each payment that will apply over the term of the loan, **including any balloon payment.** For variable-rate, the payments "shall be disclosed based on a reasonably current index and margin."
- (B) The period of time during which each payment will apply.
- (C) **For a first-lien dwelling-secured ad, the fact that the payments do not include amounts for taxes and insurance premiums, if applicable, and that the actual payment obligation will be greater.**

**§ 1026.24(f)(3)(ii) "Clear and conspicuous"** requires equal prominence and close proximity to the triggered payment.

**§ 1026.24(f)(4) "Envelope excluded"**: The § 1026.24(f)(2) and (f)(3) requirements **do not apply** to an envelope in which an application is mailed, or to a banner ad / pop-up ad linked to an application. This is a useful safe harbor for pure advertising envelopes but not for landing pages.

### 3.5 The Three "Banned" Practices for Mortgage Ads — 12 C.F.R. § 1026.24(i)

This subsection contains the most operationally important **affirmative prohibitions** for a mortgage diagnostic. The seven banned acts/practices are:

1. **(i)(1) Misleading advertising of "fixed" rates and payments.** Using the word "fixed" to refer to rates or payments in an ad for a variable-rate transaction is **prohibited** unless:
   - For variable-only ads: (a) the phrase "Adjustable-Rate Mortgage," "Variable-Rate Mortgage," or "ARM" appears before the first use of "fixed" and is at least as conspicuous, AND (b) each use of "fixed" is accompanied by an equally prominent and closely proximate statement of (i) the time period for which the rate or payment is fixed and (ii) the fact that the rate may vary or payment may increase after that period.
   - For mixed ads: additional rules apply.

2. **(i)(2) Misleading comparisons.** Any comparison between actual or hypothetical payments/rates and any payment or simple annual rate that will be available under the advertised product **for a period less than the full term of the loan** is prohibited unless:
   - (i) the ad includes a clear and conspicuous comparison to the information required under § 1026.24(f)(2) and (f)(3); and
   - (ii) for variable-rate, an equally prominent statement in close proximity that the payment/rate is subject to adjustment and the time period when the first adjustment will occur.

   **In a CFPB enforcement action, the violation of this provision was confirmed in the Low VA Rates case: the lender "misleadingly compared consumers' actual or hypothetical payments or rates with payments or simple-annual rates that would be available under the advertised loan for a period less than the full term of the loan and did not include a clear and conspicuous comparison to the information required to be disclosed under § 1026.24(f)(2) and (3), as required by 12 C.F.R. § 1026.24(i)(2)(i)."** *In re Low VA Rates, LLC*, File No. 2020-BCFP-0018, ¶ 54.

3. **(i)(3) Misrepresentations about government endorsement.** Prohibits any statement that the product offered is a "government loan program," "government-supported loan," or is otherwise endorsed or sponsored by any Federal, state, or local government entity — **unless the advertisement is for an FHA loan, VA loan, or similar loan program that is, in fact, endorsed or sponsored by a Federal, state, or local government entity.** (This is the bridge between Reg Z and the MAP Rule's § 1014.3(n).)

4. **(i)(4) Misleading use of the current lender's name.** Using the name of the consumer's current lender in an ad that is not sent by or on behalf of that lender is prohibited unless the ad (i) discloses with equal prominence the name of the actual person/creditor making the ad, and (ii) includes a clear and conspicuous statement that the ad maker is not associated with, or acting on behalf of, the consumer's current lender.

5. **(i)(5) Misleading claims of debt elimination.** Prohibits any misleading claim in an ad that the mortgage product offered will eliminate debt or result in a waiver or forgiveness of a consumer's existing loan terms.

   **Confirmed in Low VA Rates**: "Low VA Rates violated § 1026.24(i)(5) because … numerous Low VA Rates mortgage advertisements misleadingly indicated that the loan advertised would eliminate debt." *In re Low VA Rates, LLC*, File No. 2020-BCFP-0018, ¶ 93. The specific mailer at issue advertised a "Freedom from Debt Program" / "Freedom from Debt VA Refinance" — an IRRRL or cash-out loan is itself debt and cannot eliminate debt. ¶ 61.

6. **(i)(6) Misleading use of the term "counselor."** Using the term "counselor" in an ad to refer to a for-profit mortgage broker or mortgage creditor, its employees, or persons working for the broker or creditor that are involved in offering, originating, or selling mortgages.

7. **(i)(7) Misleading foreign-language advertisements.** Providing some trigger terms in a foreign language but other required disclosures only in English in the same ad.

### 3.6 The "No Other Rate" Rule — 12 C.F.R. § 1026.24(c)

> "If an advertisement states a rate of finance charge, it shall state the rate as an 'annual percentage rate,' using that term. ... If an advertisement is for credit secured by a dwelling, the advertisement shall not state any other rate, except that a simple annual rate that is applied to an unpaid balance may be stated in conjunction with, but **not more conspicuously than**, the annual percentage rate."

If a diagnostic shows "6.5% interest rate, 6.621% APR," the 6.5% simple rate cannot be more prominent than the 6.621% APR. The APR must be at least as prominent. **Confirmed in the Low VA Rates case:** "Low VA Rates violated § 1026.24(c) because … numerous Low VA Rates mortgage advertisements stated a simple annual interest rate more conspicuously than the APR." *In re Low VA Rates, LLC*, File No. 2020-BCFP-0018, ¶ 83. The mailer "prominently mention[ed] a '3%' simple annual interest rate five times, including twice mentioning rates 'below 3%'" while the APR was in small print on the back. ¶¶ 77–79.

### 3.7 The "Actually Available Terms" Rule — 12 C.F.R. § 1026.24(a)

> "If an advertisement for credit states specific credit terms, it shall state only those terms that actually are or will be arranged or offered by the creditor."

**Confirmed in Low VA Rates:** "Low VA Rates violated § 1026.24(a) because … numerous Low VA Rates advertisements for credit stated specific credit terms other than those terms that actually were or would be arranged or offered by the creditor." *In re Low VA Rates, LLC*, File No. 2020-BCFP-0018, ¶ 81. Example: the lender advertised "a mortgage with a simple-interest rate of 2.25% for three years and an APR of 3.196%" sent in 573,500 mailers; in fact, "the advertised APR was incorrect for any loan Low VA Rates was prepared to arrange or offer." ¶¶ 28–30.

### 3.8 Electronic Advertisements — 12 C.F.R. § 1026.24(e)

A website that gives the disclosures in a table or schedule in sufficient detail to permit the consumer to determine the § 1026.24(d)(2) terms is treated as a single ad if (i) the table/schedule is clearly and conspicuously set forth, and (ii) any triggering term appearing elsewhere in the site clearly refers to the page where the table begins. § 1026.24(e)(1). The table need only include a "representative scale of amounts up to the level of the more commonly sold higher-priced property or services offered." § 1026.24(e)(2).

### 3.9 SAFE Act — 12 U.S.C. §§ 5101–5116

The SAFE Act requires licensing of "loan originators" — individuals who (a) take a residential mortgage loan application or (b) offer or negotiate terms of a residential mortgage loan, for compensation or gain. **The CFPB has interpreted this to include individuals who only take applications OR only negotiate terms, not both.** *In re 1st Alliance Lending, LLC*, Case No. 3:21-cv-00055-RNC (D. Conn. 2021), ¶¶ 67–69 (citing state model language broadening the federal SAFE Act).

**Operational implication:** A diagnostic operator whose employees discuss specific loan terms, recommend programs, or run credit checks on the call may need to ensure those individuals are state-licensed MLOs. This is the basis of the 1st Alliance case discussed in § 5.

### 3.10 Tax Implications Disclosure — 12 C.F.R. § 1026.24(h)

If an ad (in paper or internet, but not radio/TV) for a loan secured by the consumer's principal dwelling states that the loan may exceed the fair market value of the dwelling, the ad must clearly and conspicuously state:

1. "The interest on the portion of the credit extension that is greater than the fair market value of the dwelling is not tax deductible for Federal income tax purposes"; and
2. "The consumer should consult a tax adviser for further information regarding the deductibility of interest and charges."

---

## 4. UDAAP — 12 U.S.C. §§ 5531, 5536 (CFPA)

### 4.1 Statutory Framework

The Consumer Financial Protection Act (CFPA), Title X of the Dodd-Frank Act, prohibits "unfair, deceptive, or abusive" acts or practices by "covered persons" and "service providers." The operative provisions are:

- **12 U.S.C. § 5531(a)** — prohibits "unfair, deceptive, or abusive" acts or practices.
- **12 U.S.C. § 5531(c)** — defines "unfair" (substantial injury not reasonably avoidable and not outweighed by countervailing benefits).
- **12 U.S.C. § 5536(a)(1)(B)** — prohibits any "deceptive act or practice" in connection with any transaction with a consumer for a consumer-financial product or service.
- **12 U.S.C. § 5481(5)** — defines "consumer financial product or service" to include extending credit and brokering loans; a residential mortgage is a "consumer financial product."
- **12 U.S.C. § 5481(6)(A)** — defines "covered person" to include anyone who engages in offering or providing a consumer financial product or service to consumers.
- **12 U.S.C. § 5481(25)(B)–(C)** — extends "covered person" status to "related persons" — i.e., the directors, officers, and controlling owners of a covered person.

### 4.2 The Test for "Deceptive" — Repeated in CFPB Complaints

From *In re 1st Alliance Lending, LLC*, Case No. 3:21-cv-00055-RNC (D. Conn. Apr. 1, 2021), ¶ 79:

> "An act or practice is deceptive if it involves a material misrepresentation, omission, or practice that is likely to mislead a consumer acting reasonably under the circumstances."

**Test has three elements:** (1) material representation, omission, or practice, (2) likely to mislead a reasonable consumer, and (3) materiality — i.e., likely to affect the consumer's choice of, or conduct regarding, the product.

### 4.3 The Test for "Unfair" — 12 U.S.C. § 5531(c)(1)

From *In re 1st Alliance*, ¶ 94:

> "An act or practice is unfair if it causes or is likely to cause consumers substantial injury that is not reasonably avoidable and is not outweighed by countervailing benefits to consumers or to competition."

### 4.4 The Test for "Abusive" — 12 U.S.C. § 5531(d)

The CFPB's April 12, 2023 policy statement (88 FR 21883, Docket No. CFPB-2023-0012) reaffirmed the four-prong test, which is met where the act or practice:
1. Materially interferes with the consumer's ability to understand a term or condition of a product or service; **or**
2. Takes unreasonable advantage of the consumer's inability to protect their own interests in selecting or using a product or service; **or**
3. Takes unreasonable advantage of the consumer's reasonable reliance on the covered person to act in the consumer's interests; **or**
4. Takes unreasonable advantage of the consumer's inability to understand the material risks, costs, or conditions of the product or service.

The CFPB's policy statement also clarified that "abusive" claims are not subject to an "intent" requirement and that the Bureau will consider the consumer's perspective.

### 4.5 Specific CFPB-Identified Deceptive Language in Mortgage Context

The following specific language patterns have been alleged or found deceptive by the CFPB in the cases below:

| Prohibited Language | Case | Why it's deceptive |
|---|---|---|
| **"preapproved" or "guaranteed" for a particular program or term** | *1st Alliance*, ¶¶ 5, 51 | Implies the lender has already decided to extend credit |
| **"you qualify for $X"** | *1st Alliance*, ¶ 51 | Prequalification representations require actual underwriting; "you qualify" is misleading without it |
| **"you will save $X / year"** for a variable-rate refinance | *RMK Financial* (2023), ¶¶ 50–57 | Comparison uses a teaser rate vs. the post-teaser rate; no reasonable basis |
| **"act within 10 days to receive your VA benefits"** | *RMK Financial* (2023), ¶¶ 58–62 | Implies time-limited access to a benefit that has no expiration |
| **"VA Approved Lender"** / VA seal / "FORM VA-1000" | *RMK Financial* (2015) and (2023), ¶¶ 22–30; 1st Alliance | Implies government affiliation, violates MAP Rule § 1014.3(n) and Reg Z § 1026.24(i)(3) |
| **FHA Lender logo in upper corner** without HUD-mandated disclaimer | *RMK Financial* (2023), ¶¶ 28–29 | Implies official government sponsorship |
| **"Freedom from Debt Program"** for a VA IRRRL | *Low VA Rates*, ¶¶ 60–61 | Implies debt elimination; an IRRRL is itself debt |
| **"Prequalification Notice"** boxed in FHA refinancing ad | *RMK Financial* (2023), ¶ 29 | Implies a government-issued notice |
| **"Cash refund from current lender"** without escrow disclosure | *Low VA Rates*, ¶¶ 46–47 | Misrepresents source and amount of cash |
| **"NO out of pocket costs"** for a refinance requiring 2.25–2.75 discount points | *Low VA Rates*, ¶¶ 42–44 | Misrepresents the existence of fees |
| **"bad credit OK"** (generalized) | Not a specific case but violative of MAP Rule § 1014.3(q) | Implies any credit will be approved |
| **Comparison of teaser rate to a current hypothetical rate** | *Low VA Rates*, ¶¶ 54–57; *RMK Financial* (2023), ¶¶ 50–57 | Violates § 1026.24(i)(2) and (h) |

---

## 5. Recent CFPB Enforcement Actions 2023–2026

The cases below are taken from the CFPB's enforcement actions index at https://www.consumerfinance.gov/enforcement/actions/ and from the press releases and consent orders on file. Where a case is "Dismissed with prejudice" (most 2024–2025 cases under the new administration), the **allegations in the complaint remain on the public docket as a record of CFPB enforcement theory** and remain relevant to compliance design.

### 5.1 RMK Financial Corp. d/b/a Majestic Home Loans — MAP Rule / Reg Z / CFPA — $1,000,000 + Permanent Ban

- **Docket:** File No. **2023-CFPB-0002**
- **Filed:** Feb. 27, 2023
- **Court:** CFPB Office of Administrative Adjudication
- **Penalty:** **$1,000,000 civil money penalty** + **permanent ban from the mortgage lending business** (including "advertising, marketing, promoting, offering, providing, originating, administering, servicing, or selling mortgage loans").
- **Repeat-offender context:** This was the second CFPB action against RMK. The 2015 order (File No. **2015-CFPB-0007**, $250,000 penalty) found the same conduct; the 2023 order found that despite the 2015 order, RMK "disseminated over seven million mortgage advertisements" with the same deceptive practices from April 2015 through 2019.
- **Laws cited:** CFPA §§ 1031, 1036 (12 U.S.C. §§ 5531, 5536); Regulation Z, 12 C.F.R. § 1026.24; Regulation N (MAP Rule), 12 C.F.R. § 1014.3.
- **Source:** [CFPB enforcement page](https://www.consumerfinance.gov/enforcement/actions/rmk-financial-corp-majestic-home-loan-mhl/); [CFPB press release](https://www.consumerfinance.gov/about-us/newsroom/cfpb-shuts-down-mortgage-loan-business-of-rmk-financial-for-repeat-offenses-against-military-families/); consent order on file with the Bureau.

**Key deceptive practices found (¶¶ 22–67):**

1. **False government affiliation (¶¶ 22–32, 2023 order; ¶ 18 of 2015 order):** "advertisements for VA-guaranteed mortgages used the names, logos, and seals of the VA, as well as other design elements, in a manner that falsely implied that Respondent was, or was affiliated with, the VA and that the advertisements were sent by the VA." Also FHA ads used "Federal Housing Administration" at the top, a large "FHA Approved Lending Institution" logo in the upper-left corner, and the boxed phrase "PREQUALIFICATION NOTICE."
2. **Misrepresentations of variable-rate payments (¶¶ 33–46):** Used "Estimated New Monthly Payment" on the front of variable-rate mailers without disclosing other payment amounts that would apply over the term, or that payments omitted taxes and insurance.
3. **Misrepresentation of $X cash-out / low monthly payment combos (¶¶ 42–44):** Ad for $50,000 cash-out at $205/month; in fact, "total monthly payments significantly larger than the $103 or $205 payment amounts advertised."
4. **Misrepresentations about annual savings (¶¶ 50–57):** 30-year variable-rate loan advertised with "annual savings" amount — the savings figure was not calculated against the consumer's existing loan, but against two different payment amounts under the *new* loan.
5. **False time-limited benefits (¶¶ 58–64):** "applied for your VA IRRRL refinancing benefits. For these benefits, it is important that you contact us within 10 days of receiving this notice." In fact, VA eligibility does not expire.
6. **Inadequate disclosures of variable interest rates (¶¶ 47–49, 67–79):** Stated a teaser rate but failed to disclose the post-teaser index-and-margin-based rate.

**Direct quotes from CFPB press release (Feb. 27, 2023):**

> "Today, the Consumer Financial Protection Bureau (CFPB) permanently banned RMK Financial Corporation, which does business as Majestic Home Loans, from the mortgage lending industry by prohibiting RMK from engaging in any mortgage lending activities or receiving remuneration from mortgage lending. In 2015, the CFPB issued an agency order against RMK for, among other things, sending advertisements to military families that led the recipients to believe the company was affiliated with the United States government. Despite the 2015 order's prohibition on these and other actions, the company engaged in a series of repeat offenses, including disseminating millions of mortgage advertisements to military families that deceptively used fake U.S. Department of Veterans Affairs (VA) seals, the Federal Housing Administration (FHA) logo, and other language or design elements to falsely imply that RMK was affiliated with the government."

### 5.2 1st Alliance Lending, LLC et al. — MAP Rule + TILA/Reg Z + ECOA + FCRA + SAFE Act — Pre-approval Misrepresentations

- **Docket:** Case No. **3:21-cv-00055-RNC** (D. Conn.)
- **Initial filing:** Jan. 15, 2021
- **Amended complaint:** Apr. 1, 2021
- **Defendants:** 1st Alliance Lending, LLC; John Christopher DiIorio (CEO, 59.5% owner); Kevin Robert St. Lawrence (President of Production, 25.5% owner); Socrates Aramburu (President of Capital Markets, 15% owner)
- **Status:** **Dismissed with prejudice Feb. 28, 2025** under the new CFPB leadership, but the **complaint remains a public record of CFPB enforcement theory** and the SAFE Act and ECOA claims remain available to other regulators.
- **Source:** [CFPB enforcement page](https://www.consumerfinance.gov/enforcement/actions/1st-alliance-lending-llc-et-al/); amended complaint on file.

**Key allegations (counts 3, 5, 6 in particular):**

- **Count 3 — Deceptive Mortgage-Origination Acts or Practices (¶¶ 77–91):** The unlicensed "Home Loan Consultants" (HLCs) and "Submission Coordinators" (SCs) "regularly required consumers to submit documents for verification before issuing the consumer a Loan Estimate" (Reg Z violation, ¶ 3) and "made repeated misrepresentations, omissions, and false statements to consumers, in telephone calls and other electronic communications, about such matters as **whether the consumer had been preapproved or guaranteed for a particular program or term and whether and on what terms the consumer was likely to obtain refinancing.**" (¶ 5, emphasis added).
- **Count 5 — Deception Regarding the FHA Streamline Program (¶¶ 108–115):** "1st Alliance repeatedly made representations to consumers seeking a purchase mortgage about the availability and terms of an FHA Streamline refinance loan, including costs, interest rates, and timing, even though it was impossible for 1st Alliance to know if its representations were true or accurate." ¶ 109.
- **Count 6 — MAP Rule violation (¶¶ 116–123):** Quoting 12 C.F.R. § 1014.3 verbatim, the Bureau alleged that 1st Alliance's "sales calls, text messages, and emails were 'commercial communications' regarding a term of a 'mortgage credit product'" and that 1st Alliance's "representatives communicated repeatedly to consumers that the consumer would qualify for one of 1st Alliance's mortgages when 1st Alliance had already received information from the consumer that would disqualify the consumer from receiving a 1st Alliance mortgage, and the consumer was, in fact, later disqualified." ¶ 121.

**The HLCs also allegedly misrepresented that they were "licensed mortgage-loan originators" by using a licensed employee's signature block and NMLS number, and by holding themselves out via social media as "performing the duties of a mortgage-loan originator" — ¶¶ 48–50.**

### 5.3 Low VA Rates, LLC — MAP Rule + Reg Z — $1,800,000 — Part of 9-Case VA Mailer Sweep

- **Docket:** File No. **2020-BCFP-0018** (Low VA Rates); also 8 related cases (Sovereign Lending Group, Prime Choice Funding, Go Direct Lenders, PHLoans.com, Hypotec, Service 1st Mortgage, Accelerate Mortgage, ClearPath Lending).
- **Filed:** Oct. 26, 2020
- **Penalty:** **$1,800,000** (Low VA Rates). The entire nine-case sweep generated more than **$4.4 million** in penalties.
- **Laws cited:** CFPA §§ 1031, 1036 (12 U.S.C. §§ 5531, 5536); Regulation Z, 12 C.F.R. § 1026.24; Regulation N (MAP Rule), 12 C.F.R. § 1014.3.
- **Source:** [CFPB enforcement page](https://www.consumerfinance.gov/enforcement/actions/low-va-rates-llc/); [CFPB press release](https://www.consumerfinance.gov/about-us/newsroom/consumer-financial-protection-bureau-settles-ninth-mortgage-company-address-deceptive-loan-advertisements-sent-servicemembers-and-veterans); consent order on file.

**Specific deceptive practices (¶¶ 22–93):**

1. **Misrepresented APR (¶¶ 27–30):** Sent 573,500 mailers between April 28, 2017 and November 24, 2017 advertising "a mortgage with a simple-interest rate of 2.25% for three years and an APR of 3.196%." In fact, "the advertised APR was incorrect for any loan Low VA Rates was prepared to arrange or offer." ¶ 29.
2. **Misrepresented cash-out (¶¶ 31–36):** "advertised 'take $20,000 cash-out for only $87.48 per month!'" and "$15,000 cash out for a monthly payment of 'as little as $65.'" In fact, "obtaining any cash-out amount against the consumer's home equity was possible only if the consumer had an existing mortgage and refinanced the entire amount owed on that mortgage as part of a cash-out refinance mortgage, resulting in a total monthly payment larger than $87.48." ¶ 33.
3. **Misrepresented fixed rate (¶¶ 37–40):** Used rhetorical questions like "Why stay at a rate that is higher than 1.75%?" in an envelope that said "Payment Reduction Entitlement Notice." The 1.75% rate "was not prepared to arrange or offer."
4. **Misrepresented "no out of pocket costs" (¶¶ 42–44):** "VA permits an IRRRL borrower to finance only two points, 38 C.F.R. § 36.4307(a)(4)(i). A borrower had to purchase additional points out of pocket to obtain the advertised rate."
5. **Misrepresented cash refund (¶¶ 45–48):** Promoted a "CASH refund from current lender" but the refund was limited to escrow funds and the consumer had to fund a new escrow account.
6. **Misrepresented savings (¶¶ 49–51):** Promoted "YOUR 1 Year Savings" — in fact, the "savings" were not real and resulted from deferring payments the consumer would still ultimately be obligated to make.
7. **Misrepresented debt elimination (¶¶ 60–63):** Sent 40,000 mailers between January 20, 2017 and February 3, 2017 promoting a "Freedom from Debt Program" via the "Freedom from Debt VA Refinance" — an IRRRL or cash-out loan is itself debt and cannot be used to "free" a consumer of debt.
8. **Misleading comparison (¶¶ 54–59):** Misleadingly compared consumers' actual or hypothetical payments with payments available for a period less than the full loan term, without including the clear-and-conspicuous comparison required by § 1026.24(f)(2) and (f)(3).
9. **Inadequate rate disclosure (¶¶ 67–79):** Stated a 2.25% introductory rate on the front, while "the period for the introductory rate and the actual subsequent fully indexed rate of 3.45% were only disclosed in fine print on the second page." ¶ 69.
10. **Simple rate more conspicuous than APR (¶¶ 77–83):** "prominently mention[ed] a '3%' simple annual interest rate five times, including twice mentioning rates 'below 3%'" while the APR was in small print on the back.

**Direct quote from CFPB press release (Oct. 26, 2020):**

> "The Bureau found that Low VA Rates' advertisements misrepresented the credit terms of the advertised mortgage loan by stating credit terms that the company was not actually prepared to offer to consumers, including misrepresenting the annual percentage rate applicable to the advertised mortgage. Low VA Rates misrepresented the existence, nature, or amount of cash or credit available to consumers, and used misleading rhetorical questions, in connection with advertised mortgages. Low VA Rates advertisements also failed to properly disclose, when required by Regulation Z, credit terms for the advertised mortgage, such as the amount of each payment and time period of payments associated with consumers' repayment obligations over the full term of the loan. Low VA Rates' advertisements also misleadingly indicated that its mortgage products could help consumers eliminate debt. Finally, the Bureau found that Low VA Rates made misleading comparisons involving actual or hypothetical loan terms in advertisements."

### 5.4 New Day Financial, LLC (NewDay USA) — Deceptive Net Benefit Worksheets — $2,250,000

- **Docket:** File No. **2024-CFPB-0008**
- **Filed:** Aug. 29, 2024
- **Penalty:** **$2,250,000**
- **Subject:** VA cash-out refinance loans to veterans and active-duty members.
- **Laws cited:** CFPA prohibition on deceptive acts and practices (12 U.S.C. § 5536).
- **Source:** [CFPB enforcement page](https://www.consumerfinance.gov/enforcement/actions/new-day-financial-2024/).

**Specific conduct:** "NewDay USA engaged in deceptive acts and practices in violation of the Consumer Financial Protection Act of 2010 by consistently misstating in the net benefit worksheets provided to borrowers in North Carolina and Maine up through 2020, and Minnesota up through 2018, how borrowers' 'previous' monthly mortgage payment would compare to the 'new' monthly mortgage payment after refinancing with NewDay USA."

### 5.5 NOVAD Management Consulting, LLC + Sutherland Global — Reverse Mortgage UDAAP — $11.5M Redress + $5M Penalty

- **Docket:** File No. **2024-CFPB-0004** (NOVAD); Sutherland was a co-respondent.
- **Filed:** Jun. 18, 2024
- **NOVAD penalty:** Permanent ban from reverse mortgage servicing + $1 civil penalty.
- **Sutherland penalty:** **$11,500,000 in consumer redress** + **$5,000,000 civil money penalty** + permanent ban for two of the three Sutherland entities.
- **Laws cited:** CFPA prohibition on UDAAP (12 U.S.C. §§ 5531, 5536); RESPA; Regulation X.
- **Source:** [CFPB enforcement page](https://www.consumerfinance.gov/enforcement/actions/novad-management-consulting-llc/).

**Specific deceptive practice:** "NOVAD sent borrowers repayment or 'due and payable' letters that often falsely conveyed that their loans were in default and that the full amount of their loan was due."

### 5.6 Nationstar Mortgage LLC (Mr. Cooper) — HMDA Reporting — $1,750,000

- **Docket:** File No. **2017-CFPB-0011**
- **Filed:** Mar. 15, 2017; consent order in 2017
- **Penalty:** **$1,750,000**
- **Laws cited:** Home Mortgage Disclosure Act (HMDA).
- **Source:** [CFPB enforcement page](https://www.consumerfinance.gov/enforcement/actions/nationstar-mortgage-llc/).

**Note:** This case is about HMDA data accuracy, not advertising — but it illustrates the CFPB's willingness to pursue large penalties for systemic compliance failures in the mortgage reporting space.

### 5.7 Townstone Financial, Inc. and Barry Sturner — Redlining — Vacated in 2025

- **Docket:** Case No. **1:20-cv-04176** (N.D. Ill.)
- **Initial filing:** Jul. 15, 2020
- **Stipulated final judgment:** Nov. 7, 2024
- **Status:** **The CFPB moved to vacate the order on Mar. 26, 2025**, citing "significant undisclosed problems with the Bureau's treatment of the case, resulting in unmerited investigation and litigation and the infringement of the defendants' First Amendment rights." Court denied the motion to vacate on Jun. 12, 2025.
- **Source:** [CFPB enforcement page](https://www.consumerfinance.gov/enforcement/actions/townstone-financial-inc-and-barry-sturner/).

**Original allegations:** Redlining in the Chicago MSA, violations of ECOA, Regulation B, and CFPA. While the order was vacated, the case illustrates CFPB enforcement priority on mortgage discrimination.

### 5.8 Recent (2024–2026) Cases Where CFPB Action Was Dismissed Under New Leadership

The following 2023–2025 cases were **dismissed with prejudice** in 2025 under the new CFPB leadership. The original complaints remain on the public docket and remain relevant as a record of CFPB enforcement theory, and the underlying conduct could still be pursued by other regulators (state AGs, HUD, FTC).

| Case | Docket | Filed | Status |
|---|---|---|---|
| Rocket Homes Real Estate LLC / Jason Mitchell Group | 2:24-cv-13442 (E.D. Mich.) | Dec. 23, 2024 | Dismissed Feb. 27, 2025 |
| Vanderbilt Mortgage & Finance, Inc. | 3:25-cv-00004 (E.D. Tenn.) | Jan. 6, 2025 | Dismissed Feb. 27, 2025 |
| Colony Ridge Development et al. | 4:23-cv-04729 (S.D. Tex.) | Dec. 20, 2023 | Dismissed Feb. 10, 2026 |
| Trident Mortgage Company, LP | 2:22-cv-02936 (E.D. Pa.) | Jul. 27, 2022 | Order terminated Jun. 2, 2025 |
| 1st Alliance Lending, LLC | 3:21-cv-00055 (D. Conn.) | Jan. 15, 2021 | Dismissed Feb. 28, 2025 |
| Fairway Independent Mortgage Corp. | 2:24-cv-01405 (N.D. Ala.) | Oct. 15, 2024 | $7M loan subsidy program + $1.9M penalty still in effect (DOJ-consented order; CFPB issued no-action letter May 15, 2025) |
| Draper & Kramer Mortgage Corp. | 1:25-cv-00605 (N.D. Ill.) | Jan. 17, 2025 | $1.5M penalty paid; 5-year mortgage lending ban; CFPB no-action letter May 15, 2025 |

### 5.9 CFPB Circular 2024-01 — Preferencing and Steering by Digital Intermediaries

- **Document Number:** 2024-05141
- **Date:** Mar. 12, 2024
- **Subject:** Digital platforms (e.g., comparison tools, lead generators, mortgage marketplaces) that display, rank, or steer consumers to particular loan products.

The Circular states that even when a digital platform does not have a creditor relationship, it can be liable under the CFPA's UDAAP provisions if its design or operation (e.g., algorithm) creates a deceptive impression or unfair outcome for consumers. **This Circular is directly relevant to a mortgage qualification diagnostic that displays certain lenders or products more prominently than others.**

### 5.10 Phantom Lead / Lead Stacking Enforcement

The CFPB has consistently pursued "phantom lead" and "lead stacking" practices — where a lead generator sells the same consumer lead to multiple lenders without the consumer's knowledge. The principal cases are:
- **LeadGenius et al. (2019)** — the FTC and CFPB have both pursued lead-stacking and consent-order issues.
- **FTC v. NaviStone et al.** (No. 1:19-cv-00523 (D.D.C. 2019)) — deception about reverse-targeted advertising.
- The CFPB's 2022 Supervisory Highlights repeatedly flagged lead generation as a risk area.

**For a diagnostic that sells or transfers consumer information to multiple lenders, the consent obtained must be clear and conspicuous, the lead must not be resold beyond the stated purpose, and the consumer must be told how many lenders will receive the lead.** A failure to disclose multi-lender lead transfer is itself an unfair or deceptive practice under § 5531, § 5536.

### 5.11 AI/Algorithmic Mortgage Tools — Enforcement Theory

The CFPB has not yet (as of the date of this report) brought a public enforcement action specifically against a generative-AI mortgage qualification tool. However, the CFPB has issued:

- **CFPB Circular 2022-03 (May 26, 2022)** — adverse action notification requirements when using complex algorithms and "black-box" credit models. The CFPB stated that creditors must provide accurate and specific reasons for adverse action even when using AI/ML models.
- **Joint Statement on AI (April 2023)** — the CFPB, FTC, EEOC, and DOJ jointly affirmed that their respective civil rights and consumer protection laws apply equally to AI and algorithmic tools.
- **CFPB Fair Lending Report (2024)** — emphasizes that creditors remain responsible for outcomes of automated systems, including mortgage qualification tools.

**For a diagnostic that uses AI/ML to render a qualification result, the practical implication is that the system must be designed to (a) explainable enough to support a Reg B / ECOA adverse-action reason if the consumer is later denied by a lender, and (b) testable for disparate impact under fair lending law.**

---

## 6. Compliance Design for the Diagnostic — Practical Recommendations

### 6.1 Language to AVOID (Prohibited by MAP Rule § 1014.3(q), Reg Z § 1026.24(i)(3), or found deceptive in the cases above)

- "**You are approved**" or "**You're approved**" — implies the lender has approved credit (a credit decision has been made)
- "**You qualify for $X**" — unless the tool is itself the creditor and has actually underwritten the application
- "**Pre-approved in 60 seconds**" — implies an underwriting decision has been made
- "**Guaranteed approval**" or "**Guaranteed rate**" — explicitly prohibited by MAP Rule § 1014.3(q)
- "**Bad credit OK**" — implies any credit will be approved
- "**You will save $X per year**" for a refinance — without a reasonable basis and full-term comparison (RMK 2023, ¶¶ 50–57)
- "**Act within X days or lose your benefits**" — when no such time limit exists (RMK 2023, ¶¶ 58–62)
- "**No closing costs**" / "**No out of pocket**" — when any costs exist (Low VA Rates, ¶¶ 42–44)
- "**VA approved lender**" / "**FHA approved lender**" — without using the company's HUD-registered name and only with the HUD-mandated disclaimer (RMK 2023, ¶¶ 22–32; HUD ML 2011-17)
- "**Freedom from debt**" / "**Eliminate debt**" — for a loan that is itself debt (Low VA Rates, ¶¶ 60–61; Reg Z § 1026.24(i)(5))
- "**Fixed rate**" for a variable-rate loan — without the proximity/size requirements of Reg Z § 1026.24(i)(1)
- **FHA Lender logo in the upper-left corner** or any prominent location — without the HUD-mandated disclaimer (RMK 2023, ¶ 28)
- **Counselor** for a for-profit loan originator — Reg Z § 1026.24(i)(6)
- **Implied government affiliation** — through use of government seals, names, formatting, or "Prequalification Notice" language (RMK 2023, ¶ 29)

### 6.2 Safe Language — What to Say Instead

- "**Based on the information you provided, you may be eligible for…**" — frames the result as a self-reported data assessment, not a credit decision
- "**This is not a loan application, pre-approval, or guarantee of credit.**" — explicit disclaimer
- "**Your actual rate, payment, and loan amount will depend on a complete underwriting review by the lender.**" — disclaims any implied pre-approval
- "**All rates, payments, and loan amounts shown are estimates only and may vary based on the lender's review.**" — combined with "**Final loan terms are subject to lender approval.**"
- "**FHA loans are insured by the Federal Housing Administration and are subject to FHA program requirements, including mortgage insurance premiums. Not all applicants will qualify.**" — true, plain-English FHA reference
- For a variable-rate display: "**Rate shown is a sample rate and may vary based on the index and margin used by your lender. Your rate will be set at closing.**"
- For a comparison display: "**Comparison assumes [X] over the full loan term. Your savings may differ.**" — full-term comparison
- For a tax-relevant display: "**This loan may exceed the fair market value of your home. The interest on the portion above the property's value is not tax-deductible for federal income tax purposes. Consult a tax advisor.**" — Reg Z § 1026.24(h)
- For the HUD-mandated disclaimer when using the FHA logo or FHA name: "**Not a government agency. The lender is not acting on behalf of or at the direction of HUD/FHA. The Federal Government does not endorse or guarantee this product.**"

### 6.3 Display Requirements for Rates and Payments (Reg Z § 1026.24(f))

If the diagnostic shows a single rate, payment, or loan amount on any page, that page must also show, in close proximity and with equal prominence:

- Each rate that will apply over the term (for variable-rate products)
- The period each rate applies
- The **APR**, in the term "annual percentage rate"
- Each payment that will apply over the term (for variable-rate)
- The period each payment applies
- For first-lien products: the fact that payments do not include taxes and insurance, and the actual payment will be greater
- The full repayment term

A practical pattern is to provide a **disclosure block** adjacent to any rate/payment display, with the rate, APR, term, payment schedule, taxes/insurance caveat, and a "this is an estimate" disclaimer.

### 6.4 Required Records and Disclosures (24 CFR 202.5(a)(2); MAP Rule § 1014.5)

- Retain all print and electronic advertising for **2 years** if any FHA program is referenced.
- Retain all "commercial communications" regarding mortgage credit product terms for **24 months** under MAP Rule § 1014.5, including sales scripts, training materials, marketing materials, and product descriptions.
- Display the HUD-registered business name (or the operating partner's name) on every page that references FHA programs.

### 6.5 Operational Safe Harbors for a Diagnostic Site

1. **Frame the tool as an educational/diagnostic resource**, not as a credit advertisement. Use clear framing ("Estimate your options") and avoid promotional language.
2. **Show ranges, not single numbers.** A range is less likely to be a "specific credit term" triggering § 1026.24(a), and the consumer's reasonable understanding is that the actual term may differ.
3. **For any single number shown** (a specific rate, payment, or loan amount), add the Reg Z § 1026.24(f) disclosures in close proximity.
4. **If the tool uses a "score" or "likelihood" metric**, use language like "This score reflects only the information you provided and is not a credit decision. The actual lender's decision may differ."
5. **Do not display or use the FHA Lender logo** unless the site is operated by or on behalf of a HUD-approved mortgagee and the HUD-mandated disclaimer is shown.
6. **Do not display the VA seal or reference "VA" by name** unless the site is operated by or on behalf of a VA-approved lender. Use "VA-backed loan" or "veteran home loan" if a generic reference is needed.
7. **Avoid the term "counselor"** for any for-profit loan originator. Use "loan officer" or "mortgage professional."
8. **Do not promise a "pre-approval"** unless the operator is actually a creditor who can underwrite.
9. **If the tool sends consumer information to one or more lenders**, obtain a clear, informed consent that includes (a) the number of lenders that will receive the information, (b) the categories of information being shared, and (c) the consumer's right to opt out.
10. **Maintain a written quality control plan** consistent with 24 C.F.R. § 202.5(h) if the site is associated with an FHA-approved mortgagee.

### 6.6 ECOA / Fair Lending — 15 U.S.C. § 1691; Regulation B (12 C.F.R. Part 1002)

A diagnostic that returns a "you will not qualify" or "your application is likely to be denied" result may itself be acting as a "creditor" under ECOA if it is the de facto gatekeeper. Even if it is not, the CFPB Circular 2022-03 makes clear that algorithmic denials must be explainable for the lender to comply with the adverse-action notice requirement. The diagnostic should:

- Not use protected class information (race, color, religion, national origin, sex, marital status, age, etc.) in its scoring algorithm
- Use only inputs that lenders would actually use (income, credit score, debt-to-income ratio, loan-to-value, etc.)
- Audit for disparate impact and retain audit records
- Provide a clear statement of the reasons for any negative output

### 6.7 State Law Overlay

In addition to the federal framework, every state has its own mortgage advertising, fair lending, and licensing laws. The states that have been most active in mortgage advertising enforcement include:
- **California** — DFPI; § 17500 (false advertising) and § 17200 (unlawful business practices)
- **New York** — DFS; Part 38 of 3 NYCRR
- **Massachusetts** — §§ 6L and 6N; MGL c. 183C
- **Texas** — Texas Finance Code Ch. 156; Texas DFPI
- **Washington** — DFPI under the Washington Consumer Protection Act

State rules may further restrict the use of "preapproved" and may require additional licensing for any "loan originator" activity (per the SAFE Act).

---

## 7. Citation Quick-Reference

### Federal Statutes

| Citation | Topic |
|---|---|
| 12 U.S.C. § 5512 | CFPB rulemaking authority |
| 12 U.S.C. § 5481 et seq. | CFPA — definitions (consumer financial product, covered person, etc.) |
| 12 U.S.C. § 5531 | CFPA prohibition on UDAAP |
| 12 U.S.C. § 5536 | CFPA prohibition on UDAAP and on violations of Federal consumer financial law |
| 12 U.S.C. § 5563, 5565 | CFPB enforcement authority and civil money penalties |
| 12 U.S.C. § 5538 | MAP Rule implementing authority |
| 15 U.S.C. §§ 1601–1667f | Truth in Lending Act (TILA) |
| 15 U.S.C. § 1638 note | MAP Rule statutory basis |
| 15 U.S.C. § 1691 et seq. | Equal Credit Opportunity Act (ECOA) |
| 15 U.S.C. §§ 41–58 | FTC Act (jurisdictional basis for MAP Rule) |
| 42 U.S.C. §§ 3600–3620 | Fair Housing Act (FHA) |
| 42 U.S.C. § 3604(c) | FHA — discriminatory advertising prohibition |
| 12 U.S.C. §§ 5101–5116 | SAFE Act (loan originator licensing) |

### Federal Regulations

| Citation | Topic |
|---|---|
| 12 C.F.R. Part 1014 | Regulation N — MAP Rule |
| 12 C.F.R. § 1014.2 | MAP Rule definitions |
| 12 C.F.R. § 1014.3 | MAP Rule prohibited representations |
| 12 C.F.R. § 1014.4 | Waiver prohibition |
| 12 C.F.R. § 1014.5 | 24-month recordkeeping |
| 12 C.F.R. Part 1026 | Regulation Z (TILA) |
| 12 C.F.R. § 1026.2 | Reg Z definitions (Advertisement, Creditor) |
| 12 C.F.R. § 1026.24 | Reg Z advertising rules |
| 12 C.F.R. § 1026.24(a) | Actually available terms |
| 12 C.F.R. § 1026.24(c) | APR must be at least as conspicuous as any other rate |
| 12 C.F.R. § 1026.24(d) | Triggering terms and required disclosures |
| 12 C.F.R. § 1026.24(f) | Specific rules for mortgage ads (rate and payment disclosure) |
| 12 C.F.R. § 1026.24(i) | Prohibited acts or practices in mortgage advertising |
| 12 C.F.R. § 1026.36 | Loan originator requirements (incl. SAFE Act compliance) |
| 12 C.F.R. Part 1002 | Regulation B (ECOA) |
| 24 C.F.R. § 202.5(a)(2) | FHA-approved mortgagee use of business name in advertising |
| 24 C.F.R. § 202.5(h) | Quality control plan for FHA mortgagees |
| 24 C.F.R. § 100.75 | Fair Housing Act — discriminatory advertising |
| 24 C.F.R. Part 110 | Fair Housing Poster rule |

### Federal Register Publications

| Publication | Topic |
|---|---|
| 76 FR 78133 (Dec. 16, 2011) | Final MAP Rule |
| 88 FR 21883 (Apr. 12, 2023) | CFPB Policy Statement on Prohibition on Abusive Acts or Practices |
| 2024-05141 (Mar. 12, 2024) | CFPB Circular 2024-01 — Preferencing and Steering by Digital Intermediaries |
| 89 FR 71836 (Sept. 4, 2024) | Updates to 24 C.F.R. § 202 |
| 40 FR 20079 (May 8, 1975) | Original Equal Housing Lender / Fair Housing Poster rule |

### HUD Issuances

- HUD Mortgagee Letter 2011-17 — "Use of HUD/FHA Logo, Name and Acronym in Advertising" (Apr. 15, 2011) (cited in RMK 2023 consent order ¶ 28)
- HUD Fair Housing Poster Rule (24 C.F.R. Part 110)
- HUD [Equal Housing Lender page](https://www.hud.gov/program_offices/fair_housing_equal_opp/equal-housing-lender)

### Key Enforcement Cases (with docket numbers)

| Case | Docket | Outcome |
|---|---|---|
| *In re RMK Financial Corp.* (2023) | 2023-CFPB-0002 | $1M penalty; permanent ban from mortgage lending |
| *In re RMK Financial Corp.* (2015) | 2015-CFPB-0007 | $250K penalty (initial action) |
| *CFPB v. 1st Alliance Lending, LLC* | 3:21-cv-00055-RNC (D. Conn.) | Dismissed with prejudice Feb. 28, 2025 (complaint remains on docket) |
| *In re Low VA Rates, LLC* | 2020-BCFP-0018 | $1.8M penalty |
| *In re New Day Financial, LLC* | 2024-CFPB-0008 | $2.25M penalty |
| *In re NOVAD Management Consulting* | 2024-CFPB-0004 | Sutherland: $11.5M redress + $5M penalty |
| *In re Nationstar Mortgage* | 2017-CFPB-0011 | $1.75M penalty (HMDA reporting) |
| *CFPB v. Townstone Financial* | 1:20-cv-04176 (N.D. Ill.) | Stipulated order vacated Mar. 26, 2025 |

---

## 8. Document Provenance

This report was compiled from primary-source documents obtained as follows:

- **12 C.F.R. Part 1014** (Regulation N, MAP Rule): eCFR API — https://www.ecfr.gov/api/versioner/v1/full/2025-01-01/title-12.xml?part=1014
- **12 C.F.R. § 1026.24** (Reg Z advertising): eCFR API — https://www.ecfr.gov/api/versioner/v1/full/2025-01-01/title-12.xml?section=1026.24
- **12 C.F.R. § 1026.2** (Reg Z definitions): eCFR API — https://www.ecfr.gov/api/versioner/v1/full/2025-01-01/title-12.xml?section=1026.2
- **24 C.F.R. Part 202** (FHA mortgagee approval): eCFR API — https://www.ecfr.gov/api/versioner/v1/full/2025-01-01/title-24.xml?part=202
- **24 C.F.R. § 100.75** (Fair Housing advertising): eCFR API — https://www.ecfr.gov/api/versioner/v1/full/2025-01-01/title-24.xml?section=100.75
- **CFPB Enforcement Actions**: https://www.consumerfinance.gov/enforcement/actions/ (multiple case pages cited in this report)
- **CFPB press releases**: https://www.consumerfinance.gov/about-us/newsroom/
- **RMK Financial 2023 Consent Order** (PDF on file with the Bureau): https://files.consumerfinance.gov/f/documents/cfpb_rmk-financial-corp-majestic-home-loan-mhl_consent-order_2023-02.pdf
- **Low VA Rates 2020 Consent Order** (PDF on file with the Bureau): https://files.consumerfinance.gov/f/documents/cfpb_low-va-rates-llc_consent-order_2020-10.pdf
- **1st Alliance Amended Complaint** (PDF on file with the Bureau): https://files.consumerfinance.gov/f/documents/cfpb_1st-alliance-lending-llc-et-al_amended-complaint_2021-04.pdf
- **Federal Register API**: https://www.federalregister.gov/api/v1/

**All direct quotes in this report are taken verbatim from the primary-source documents cited above.** Where text is in brackets, it is my paraphrase or summary, not a direct quote.
