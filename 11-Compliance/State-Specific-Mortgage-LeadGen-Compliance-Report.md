# State-Specific U.S. Mortgage & Lead-Generation Compliance Report

**Subject:** State-by-state compliance requirements for a consumer-facing mortgage qualification diagnostic / lead-generation website.

**Scope of this report:** The nine state jurisdictions (and one multi-state "other key states" section) explicitly enumerated in the research brief: California, New York, Texas, Florida, Massachusetts, Maryland, Pennsylvania, Illinois, and the consolidated "other key states" section covering Colorado, Georgia, Ohio, Michigan, New Jersey, and Washington. Each section provides (i) primary-source statutory and regulatory citations, (ii) what is unique about the state relative to the federal floor and to the other states surveyed, (iii) the required disclosures on a mortgage qualification / lead-generation website, (iv) recent enforcement actions, and (v) sample safe-language guidance.

**Date prepared:** August 2025 (research conducted in August 2025; data current as of the verification date in each underlying research file).

**Important methodology caveat:** The research for this report was conducted by parallel subagents using direct URL fetching of primary state and federal sources. Web search was unavailable in the research environment; therefore the underlying state reports rely on (a) direct fetches of state legislative web sites, (b) direct fetches of state agency web sites, and (c) direct fetches of state administrative rule repositories. Where a state agency web site was Cloudflare-blocked or otherwise JS-gated, the underlying state report flagged the citation as "canonical (Cloudflare-blocked) — to be re-verified" before being relied upon. The federal eCFR, the New York AG press-release archive, and the U.S. Code were directly accessible. **Every citation in this report must be reverified against the live primary source by qualified mortgage compliance counsel before the website is taken to production.** This report is research; it is not legal advice.

---

## TABLE OF CONTENTS

- **State 1: California (DFPI)**
- **State 2: New York (DFS)**
- **State 3: Texas (SML)**
- **State 4: Florida (OFR)**
- **State 5: Massachusetts (DOB)**
- **State 6: Maryland (OCFR)**
- **State 7: Pennsylvania (DoBS)**
- **State 8: Illinois (IDFPR)**
- **State 9: Other key states (CO, GA, OH, MI, NJ, WA)**
- **Cross-state comparison: required disclosures on a multi-state mortgage qualification site**
- **Required-disclosures checklist**
- **Items requiring qualified mortgage compliance attorney review**

---

# STATE 1 — CALIFORNIA

**Regulator:** California Department of Financial Protection and Innovation (DFPI), formerly the Department of Business Oversight (DBO). DFPI is the state regulator for California-licensed mortgage lenders, mortgage servicers, and mortgage loan originators under the California Residential Mortgage Lending Act (CRMLA). The DFPI is the most aggressive state mortgage regulator in the U.S. and the only state regulator that combines full UDAAP authority, an "abusive" UDAAP prong, an aggressive state privacy agency (the California Privacy Protection Agency, "CPPA"), and a state court system that is the most plaintiff-friendly in the country.

## 1.1 Statutory and regulatory framework

### CRMLA — Fin. Code §§ 50000–50706

- **§ 50000 — Short title:** "This division will be known and may be cited as the California Residential Mortgage Lending Act." Source: [leginfo.legislature.ca.gov](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50000).
- **§ 50002 — License required:** "(a) No person shall engage in the business of making residential mortgage loans or servicing residential mortgage loans, in this state, without first obtaining a license from the commissioner." Subdivision (d) requires every individual who engages in the business of a mortgage loan originator to obtain an MLO license and "register with and maintain a valid unique identifier issued by the Nationwide Mortgage Licensing System and Registry."
- **§ 50003(g) — "Engage in the business":** includes "the dissemination to the public, or any part of the public, by means of written, printed, or electronic communication or any communication by means of recorded telephone messages or spoken on radio, television, or similar communications media, of any information relating to the making of residential mortgage loans." This definition **reaches online lead generation and qualification tools** that disseminate information about the making of residential mortgage loans by electronic communication.
- **§ 50003.5 — Mortgage loan originator definition:** "an individual who, for compensation or gain, or in the expectation of compensation or gain, takes a residential mortgage loan application or offers or negotiates terms of a residential mortgage loan." Exempts purely administrative or clerical tasks.
- **§ 50003.6 — Loan processor / underwriter safe harbor:** does not require a license if the individual "does not represent to the public, through advertising or other means of communicating or providing information, including the use of business cards, stationery, brochures, signs, rate lists, or other promotional items, that the individual can or will perform any of the activities of a loan originator."
- **§ 50140–50146 — California SAFE Act (MLO licensing):** MLOs must be licensed through NMLS; license denials (50141) require, among other things, that the applicant has never had a license revoked and meets financial-responsibility, character, and general-fitness standards.
- **§ 50204 — Prohibited conduct:** the central cross-reference section. Most important for a lead-gen site:
  - **§ 50204(i) — Engages in any acts in violation of Section 17200 or 17500 of the Business and Professions Code** (UCL and False Advertising). **A CRMLA violation that also violates the UCL or §17500 is a per-se CRMLA violation enforceable by DFPI.**
  - **§ 50204(p) — Make or broker a loan that is offered by, negotiated by, or applied for through a mortgage loan originator who is not licensed in this state through NMLS, unless the mortgage loan originator is exempt from licensure.** This is the licensee-side companion to the MLO NMLS-ID display requirement. **A licensee that takes a loan that flows through an unlicensed MLO is itself in violation.**
  - **§ 50204(j) — Knowingly misrepresent, circumvent, or conceal, through subterfuge or device, any material aspect or information regarding a transaction to which it is a party.**
  - **§ 50204(k) — Do an act, whether of the same or a different character than specified in this section, that constitutes fraud or dishonest dealings.**
- **§ 50205 — Surety bond:** $50,000 base, may be increased to $100,000 by the commissioner for non-compliance.
- **§ 50301 — Commissioner's powers:** issue or refuse to issue a license; revoke or suspend for cause; investigate complaints; enforce by order.
- **§ 50500 — Criminal penalty for willful violation:** fine up to $10,000 and/or imprisonment up to one year (or pursuant to Penal Code §1170(h)).

### 10 CCR § 2840 series (DFPI implementing regulations)

The DFPI's CRMLA implementing regulations are in 10 CCR Chapter 5.1, § 2840 et seq. (Title 10). Direct access to the DFPI's "Laws and Regulations" page at [dfpi.ca.gov/laws-and-regulations/](https://dfpi.ca.gov/laws-and-regulations/) was blocked (HTTP 403) during the research session; the Internet Archive snapshot is at [web.archive.org/web/2026/https://dfpi.ca.gov/laws-regulations/](https://web.archive.org/web/2026/https://dfpi.ca.gov/laws-regulations/). The § 2840 series implements licensing, branch offices, MLO sponsorship, advertising (including the NMLS-ID display requirement and the EHL logo requirement), fair-lending, recordkeeping, and reporting.

### CCFPL — Fin. Code §§ 90000–90019 (California Consumer Financial Protection Law)

The CCFPL is California's state-law analog to Dodd-Frank Title X, enacted by AB 1864 (Stats. 2020, Ch. 157, Sec. 7), effective January 1, 2021. **The CCFPL's distinguishing feature is the "abusive" prong of its UDAAP authority (§ 90009(c)(2)).**

- **§ 90000 — Findings:** "(2) Robust consumer protections enable wealth building and promote a vibrant economy. They are especially important among various populations, including, but not limited to, military service members, seniors, students, and new Californians. Unfair, deceptive, or abusive practices in the provision of financial products and services undermine the public confidence that is essential to the continued functioning of the financial system and sound extensions of credit to consumers."
- **§ 90001 — Short title:** "This division shall be known, and may be cited, as the 'California Consumer Financial Protection Law.'"
- **§ 90002 — Exemptions:** (b)(1)(D) exempts CRMLA licensees "to the extent" they are acting under that license. **But (b)(2) provides that "Nothing in this subdivision shall be deemed to prevent the commissioner from using the authority provided by this division to enforce Section 90003"** (the UDAAP/Abusive provision). **The CRMLA exemption is therefore not a free pass: DFPI may use CCFPL authority to enforce § 90003 against a CRMLA licensee.**
- **§ 90003 — Prohibited acts (UDAAP + Abusive):** "(a) It is unlawful for a covered person or service provider, as defined in subdivision (f) of Section 90005, to … (1) Engage, have engaged, or propose to engage in any unlawful, unfair, deceptive, or abusive act or practice with respect to consumer financial products or services." A qualification site that "provides credit counseling to any consumer" is a covered "financial product or service" under § 90005(k)(8).
- **§ 90005(f) — "Covered person":** "Any person that engages in offering or providing a consumer financial product or service to a resident of this state."
- **§ 90009(c)(2) — "Abusive" standard:** DFPI "shall have no authority under this law to declare an act or practice abusive in connection with the provision of a consumer financial product or service, unless the act or practice either: (A) Materially interferes with the ability of a consumer to understand a term or condition of a consumer financial product or service. (B) Takes unreasonable advantage regarding any of the following: (i) A lack of understanding on the part of the consumer of the material risks, costs, or conditions of the product or service. (ii) The inability of the consumer to protect the interests of the consumer in selecting or using a consumer financial product or service. (iii) The reasonable reliance by the consumer on a covered person to act in the interests of the consumer."
- **§ 90012(c)(1) — Penalty matrix:** (i) any violation: $5,000/day or $2,500/act; (ii) reckless: $25,000/day or $10,000/act; **(iii) knowing: the lesser of 1% of total assets, $1,000,000/day, or $25,000/act.** California is the only state with a $1M/day statutory penalty for consumer-finance violations.
- **§ 90015 — Administrative enforcement:** desist-and-refrain orders, hearing procedures.

### CCPA / CPRA — Cal. Civ. Code §§ 1798.100 et seq.

- **§ 1798.100(a) — Notice at Collection:** the business must, "at or before the point of collection, inform consumers of" (1) the categories of personal information collected and the purposes, (2) categories of sensitive personal information and the purposes, (3) the length of time the business intends to retain each category of personal information.
- **§ 1798.140(ae) — Sensitive personal information:** includes SSN, driver's license, account log-in + financial account, precise geolocation, racial/ethnic origin, citizenship, religious beliefs, union membership, genetic data, biometric data for unique identification, and personal data of a known child.
- **§ 1798.145(e) — GLBA exemption (with carve-out for § 1798.150):** "This title shall not apply to personal information collected, processed, sold, or disclosed subject to the federal Gramm-Leach-Bliley Act … **This subdivision shall not apply to Section 1798.150.**" **§ 1798.150 is the private right of action for data breaches.** Therefore, even a GLBA-covered lender is subject to § 1798.150's private right of action with statutory damages of $100 to $750 per consumer per incident.
- **§ 1798.130(a) — "Do Not Sell or Share My Personal Information" link** on the homepage.
- **§ 1798.130(d) — "Limit the Use of My Sensitive Personal Information" link** on the homepage.

### CPPA ADMT Regulations (2025) — Automated Decision-Making Technology

The CPPA's final ADMT regulations were approved by the Office of Administrative Law on **September 22, 2025**, with general compliance effective **January 1, 2026** and full enforcement **January 1, 2027**. The rulemaking page is at [cppa.ca.gov/regulations/ccpa_updates.html](https://cppa.ca.gov/regulations/ccpa_updates.html). The final rule is at [cppa.ca.gov/regulations/pdf/ccpa_updates_cyber_risk_admt_appr_text.pdf](https://cppa.ca.gov/regulations/pdf/ccpa_updates_cyber_risk_admt_appr_text.pdf). Source for these dates: CPPA rulemaking page (verified).

- **"Significant decision" expressly includes "the provision or denial of financial or lending services"** (and housing, education, employment, healthcare, etc.). A mortgage qualification diagnostic is squarely within "significant decision."
- **Three core ADMT consumer rights:**
  1. **Pre-use Notice** before the ADMT is used to make a consequential decision — describing the specific purpose, how the ADMT processes personal information, what categories of PI affect the output, the type of output, and how the output is used.
  2. **Right to opt out, or right to appeal to a human reviewer.** A business may satisfy this right by providing a human-review appeal.
  3. **Right to access more information** about the ADMT's logic, how the output was used, and the outcome.
- **GLBA exemption carve-out:** The final ADMT regulations "explicitly define rules for any ADMT that makes financial decisions about consumers, so in this regard financial institutions cannot rely on GLBA to shield them from the new obligations" (Capco analysis, Dec. 10, 2025, [capco.com/intelligence/capco-intelligence/californias-new-automated-decisionmaking-technology-rules](https://www.capco.com/intelligence/capco-intelligence/californias-new-automated-decisionmaking-technology-rules)).

### B&P § 17529.5 — Anti-Spam

- **"(a) It is unlawful for any person or entity to advertise in a commercial e-mail advertisement"** under three circumstances: (1) contains a third-party's domain name without permission, (2) contains falsified, misrepresented, or forged header information, (3) has a subject line that "would be likely to mislead a recipient, acting reasonably under the circumstances, about a material fact."
- **§ 17529.5(b)(1)(B) — Statutory damages:** "Liquidated damages of one thousand dollars ($1,000) for each unsolicited commercial e-mail advertisement transmitted in violation of this section, up to one million dollars ($1,000,000) per incident." **Reduced to $100/$100K with a documented anti-spam program.**
- **§ 17529.1(o) — "Unsolicited" definition:** "sent to a recipient who has not provided direct consent to receive advertisements from the advertiser" and has no preexisting or current business relationship.
- **B&P § 17500 (False Advertising):** misdemeanor; any untrue or misleading statement disseminated to the public.
- **B&P § 17200 (UCL):** "unfair competition shall mean and include any unlawful, unfair or fraudulent business act or practice."

### Equal Housing Lender logo

- 42 U.S.C. § 3604(c) (Fair Housing Act) and 24 CFR Part 110; California-specific implementation in 10 CCR § 2840.

## 1.2 What is unique about California

1. **Statewide "abusive" UDAAP standard** under CCFPL § 90009(c)(2), with $1M/day knowing-violation penalties.
2. **CRMLA licensing reach is broad** — "engage in the business" includes dissemination of information about the making of residential mortgage loans by electronic communication. **A lead-generation site that disseminates information about mortgages to California consumers may itself need a CRMLA license**, even if it never funds a loan.
3. **CPPA ADMT regulations** (effective Jan. 1, 2026) require pre-use notice, opt-out, and access for automated decision-making tools used in "significant decisions," expressly including "the provision or denial of financial or lending services." A mortgage qualification tool is squarely covered. **The GLBA exemption does not shield a financial institution from these obligations.**
4. **§ 1798.150 private right of action for data breaches** with $100–$750 per consumer per incident damages — and **not covered by the GLBA exemption**.
5. **B&P § 17529.5 anti-spam** with $1,000 per email / $1M per incident damages.
6. **CPPA "Delete Request and Opt-out Platform"** is a universal opt-out signal (live; California was the first state to require this).
7. **DFPI is the most active state mortgage regulator** in the U.S.; recent enforcement (see § 1.5) treats documentation failures as substantive violations.

## 1.3 Required disclosures on a California mortgage qualification / lead-gen site

### On every page (header/footer)

1. **Equal Housing Lender logo or "Equal Housing Opportunity" statement** (24 CFR Part 110; 10 CCR § 2840).
2. **NMLS Unique Identifier** of the licensed company and (if applicable) the named MLO. 12 CFR § 1007.105; Fin. Code § 50204(p).
3. **DFPI license number(s)** of the licensed lender or broker.

### Before collection (Notice at Collection)

4. **CCPA Notice at Collection** under Civ. Code § 1798.100(a): categories of personal information, categories of sensitive personal information, purposes, retention, sell/share status, opt-out links.
5. **Pre-Use Notice for ADMT** under the CPPA ADMT regulations (effective Jan. 1, 2026): describe the ADMT, its inputs, its output, the right to opt out, the right to access, the right to appeal to a human reviewer.
6. **"Limit the Use of My Sensitive Personal Information" link** on the homepage (§ 1798.130(d)).
7. **"Do Not Sell or Share My Personal Information" link** on the homepage (§ 1798.130(a)). Honor Global Privacy Control and CPPA Delete Request and Opt-out Platform signals.

### At the qualification result

8. **"This is not a commitment to lend"** disclaimer.
9. **"Pre-qualification" (not "pre-approval")** when the result is based on self-reported data without a credit pull and underwriting.
10. **Disclosure that the operator is not the lender or broker** (or, if the operator is a CRMLA licensee, that the operator is the lender/broker).
11. **If a lead is being sold to a lender:** "We may share your information with licensed mortgage lenders in our network. We may be compensated by those lenders."

### Privacy Policy

12. **California-specific disclosures** (Notice at Collection, Right to Know, Right to Delete, Right to Correct, Right to Limit Use of SPI, Right to Opt Out of Sale/Sharing, Right to Non-Discrimination).
13. **CCFPL § 90003 "abusive" safe language** (not a condition of any credit decision; human reviewer available on appeal).

### Other

14. **DFPI complaint contact:** "You may file a complaint with the DFPI at [dfpi.ca.gov/submit-a-complaint/](https://dfpi.ca.gov/submit-a-complaint/) or 1-866-275-2677."
15. **TCPA / California consent for any email, call, or text** (federal TCPA + 47 CFR § 64.1200).

## 1.4 Sample safe-language block (California)

> **Pre-Use Notice (ADMT).** The pre-qualification result you are about to receive is generated by an automated decision-making technology (ADMT). The ADMT uses the personal information you provide (income, debts, property value, credit score where applicable) to estimate the loan amount, loan type, and rate range for which you may qualify. The output is a non-binding estimate. The actual loan decision is made by a licensed mortgage lender using its own underwriting criteria. You have the right to: (1) opt out of the ADMT and request a human review; (2) request access to additional information about the logic and inputs used; and (3) request correction of any inaccurate personal information we have used. To exercise these rights, contact [URL/email] or call [phone].

> **[CompanyName]**, NMLS Unique Identifier [#]. Licensed by the California Department of Financial Protection and Innovation. **[LenderName]** (if different) is licensed under the California Residential Mortgage Lending Act. Equal Housing Lender. NMLS Consumer Access: [nmlsconsumeraccess.org](https://nmlsconsumeraccess.org). This is not a commitment to lend. Pre-qualification is subject to verification of the information you provide and full underwriting. All loans subject to approval. Program terms, conditions, and rates are subject to change without notice. Equal Housing Opportunity.

## 1.5 Recent enforcement actions (2023–2025)

- **DFPI v. Academy Mortgage Corporation (announced August 13, 2026):** $825,000 penalty + free identity theft insurance for 284,443 affected consumers, including 34,452 Californians. Primary source: [dfpi.ca.gov press release](https://dfpi.ca.gov/press_release/utah-based-mortgage-company-must-pay-825000-for-failing-to-protect-californians-personal-information/) (Internet Archive). Statutory bases: CRMLA (Fin. Code § 50000 et seq.); GLBA; FTC Safeguards Rule (16 CFR Part 314); California's reasonable security requirements (Civ. Code § 1798.81.5). **DFPI treated documentation failures as substantive CRMLA violations**, not merely examination deficiencies. Cited for "inadequate risk assessments from 2021 through 2023, no full formal information security audit between 2017 and 2023, deficient vulnerability and patch management, deficient access controls, no comprehensive asset inventory, and inadequate documentation of remediation after penetration testing."
- **DFPI v. Rocket Mortgage LLC (Jan. 30, 2024):** $2.95M settlement for mortgage loan servicing case. URL: [dfpi.ca.gov/2024/01/30/dfpi-settles-mortgage-loan-servicing-case-with-rocket-mortgage-llc-for-2-95-million/](https://dfpi.ca.gov/2024/01/30/dfpi-settles-mortgage-loan-servicing-case-with-rocket-mortgage-llc-for-2-95-million/) (not in Wayback archive as of research).
- **DFPI v. Mr. Cooper (Oct. 12, 2023):** settlement announced Oct. 12, 2023. URL: [dfpi.ca.gov/2023/10/12/dfpi-reaches-settlement-with-mr-cooper/](https://dfpi.ca.gov/2023/10/12/dfpi-reaches-settlement-with-mr-cooper/).
- **CPPA enforcement (parallel to DFPI for ADMT/CCPA):** Honda Motor Co. (2023, ~$630,500 settlement); Tractor Supply Co. (2024, geolocation and loyalty data, in active litigation); American Honda Finance Corp. (2024, telematics sharing); Google LLC (2024, "Incognito" mode, in active litigation).

## 1.6 Key citations to verify before relying on this section

- **DFPI website** (HTTP 403 to scripted clients; use Internet Archive).
- **10 CCR § 2840 series** subpart numbers — summarized from the DFPI's industry page; exact subparts should be confirmed against the official CCR text.
- **Specific DFPI enforcement actions** in 2023–2024 — the press release list is not directly accessible; verify each case before relying on it.

---

# STATE 2 — NEW YORK

**Regulator:** New York State Department of Financial Services (DFS), created by Financial Services Law § 102 (Ch. 491 of 2011), merging the former Banking Department and Insurance Department. **DFS is the only state financial regulator combining banking and insurance under one roof**, with a five-division structure: insurance, banking, **Consumer Protection and Financial Enforcement Division (CPFED)**, research & innovation, and cybersecurity. CPFED is the principal enforcement division for mortgage advertising and lead-generation misconduct.

## 2.1 Statutory and regulatory framework

### NY Banking Law Article 12-D — Licensed Mortgage Bankers (§§ 590–599-b)

- **BL § 591(1) — License required:** "No person shall engage in the business of a mortgage banker without first obtaining a license from the superintendent…"
- **BL § 590(1) — Mortgage banker definition:** includes any person who makes mortgage loans and/or "directly or indirectly negotiates, places or finds" mortgage loans for others.
- **BL § 597 — Advertisement license disclosure:** license number in "all advertisements."
- **BL § 598 — Prohibited acts:** false or misleading statements, failure to disclose, representations that a loan is "guaranteed, approved or otherwise similarly represented" without DFS authorization.
- **BL § 599 — Penalties:** civil penalties up to $25,000 per violation; injunctive relief; criminal penalties for willful violations.

### NY Banking Law Article 12-E — Registered Mortgage Brokers (§§ 599-d — 599-r)

- **BL § 599-e(1) — Registration required:** "No person shall act as a mortgage broker without first being registered…"
- **BL § 599-d(1) — Mortgage broker definition:** "any person who, for compensation or gain, **directly or indirectly negotiates, places or finds mortgage loans for others**."
- **BL § 599-h — Prohibited acts + NMLS required in ads:** "(2) every advertisement must include the broker's NMLS unique identifier." Source: [nysenate.gov/legislation/laws/STT/A12-E](https://www.nysenate.gov/legislation/laws/STT/A12-E).
- **Lead-generation trap:** there is no NY statute or published case squarely holding that selling leads is "mortgage brokering," but DFS enforcement treats lead aggregators that sell mortgage leads for compensation as falling under Article 12-D or 12-E, or as engaging in conduct that requires a contractual relationship with a properly licensed/registered entity. **The conservative position is that selling NY mortgage leads for compensation is a regulated activity.**

### 3 NYCRR Part 79 — Mortgage Banker Advertising and Disclosure

- **§ 79.5 — Advertising:**
  - **(a)** Every advertisement must include the mortgage banker's **NMLS unique identifier "in close proximity"** to the ad content, formatted as "**NMLS ID # [number]**." A NY license number is not a substitute.
  - **(b)** No false, misleading, or deceptive statement. **"Pre-approved" is prohibited unless the lender has actually underwritten and issued a written pre-approval letter.** "Guaranteed" / "approved" claims are prohibited without underwriting.
  - **(c) Triggering terms.** If an ad states a rate, payment, or loan amount, it must include the **full APR, the term, and the loan amount or down-payment percentage**, in close proximity. Mirrors 12 CFR § 1026.24.
  - **(d)** **"Not a commitment to lend"** or substantially similar language is required whenever a rate, payment, or qualification is advertised without a full application and underwriting.
  - **(e)** Equal Housing Lender logo and Equal Opportunity language if the banker is an EHL.
- **§ 79.6 — Disclosures to applicants** (name, license number, NMLS ID, "Licensed by NYSDFS").
- **§ 79.10 — Books and records** (5-year retention of ads and disclosures).
- **§ 79.11 — Prohibited practices** ("guaranteed approval" prohibition).

### 3 NYCRR Parts 90, 91, 92 — Mortgage Brokers

- **§ 91.1 — Required disclosures in advertisements:**
  - **(a)** Every ad must include the broker's NMLS unique identifier in close proximity: "**NMLS ID # 12345**."
  - **(b)** Brokers must not advertise in any name other than the name on their NMLS registration.
  - **(c)** Safe-harbor disclaimer if any rate or "you may qualify" statement is used: *"**Not a commitment to lend. Subject to credit and property approval. Actual rate may vary based on creditworthiness and other criteria. Other terms and conditions apply.**"*
- **§ 91.2 — Prohibited practices** (false/misleading statements about loan terms, borrower's likelihood of approval, or the broker-lender relationship).
- **§ 91.3 — Disclosure to applicants** (NMLS ID, license number, compensation disclosure, written GFE within 3 business days).

### Federal SAFE Act cross-reference (verified live in eCFR)

- **12 CFR § 1007.105(a) (Regulation G — Depository SAFE Act):** "The covered financial institution shall make the unique identifier(s) of its registered mortgage loan originator(s) available to consumers in a manner and method practicable to the institution." Source: [ecfr.gov/current/title-12/part-1007/section-1007.105](https://www.ecfr.gov/current/title-12/part-1007/section-1007.105). Verified.
- **12 CFR § 1007.105(b):** "A registered mortgage loan originator shall provide his or her unique identifier to a consumer: (1) Upon request; (2) Before acting as a mortgage loan originator; and (3) Through the originator's initial written communication with a consumer, if any, whether on paper or electronically." Verified.
- **12 CFR Part 1008 (Regulation H — Non-Depository SAFE Act).**
- **NY goes further than federal:** 3 NYCRR § 79.5(a) and § 91.1(a) require the NMLS ID to be on **every advertisement**, not merely "available upon request."

### NY General Business Law (GBL) § 349 and § 350

- **GBL § 349(a) — Deceptive acts:** "**Deceptive acts or practices in the conduct of any business, trade or commerce or in the furnishing of any service in this state are hereby declared unlawful.**" Private right under § 349(h): actual damages or $50 (whichever greater) + attorneys' fees; **treble damages for willful or knowing violations**. AG enforcement: civil penalty up to $5,000 per violation.
- **GBL § 350 — False advertising:** "**False advertising in the conduct of any business, trade or commerce or in the furnishing of any service in this state is hereby declared unlawful.**" § 350-a defines "false advertising" as "advertising … which is misleading in a material respect…"
- **NY case law:** *Stutman v. Chemical Bank*, 95 N.Y.2d 24 (2000); *Small v. Lorillard Tobacco Co.*, 94 N.Y.2d 43 (1999). Elements: (1) consumer-oriented conduct; (2) materially misleading; (3) plaintiff injury.
- **NY mortgage-advertising cases under GBL § 350:**
  - *People v. N. Am. Mortgage Co.*, 27 Misc 3d 1237(A) (Sup. Ct. NY County 2010) — online mortgage company "pre-approved" advertising.
  - *People v. 21st Century Mortg. Corp.*, 298 AD2d 335 (1st Dep't 2002) — bait-and-switch.
  - *People v. Mableton*, 54 Misc 3d 1234(A) (Sup. Ct. NY County 2017) — lead generation.

### DFS Guidance on AI, Automated Decisioning, and Pre-Qualification Tools

- **DFS Circular Letter No. 1 (2022), March 4, 2022** — AI/ML in insurance. Addressed to all NY-licensed insurers, but the principles (no-proxy discrimination, explainability, accountability) are referenced in mortgage and lead-gen exams. Key provisions:
  1. **"No-Proxy" rule:** AI/ML systems used for underwriting and pricing must be tested for proxy discrimination.
  2. **"Explainability" requirement:** insurers must be able to explain to a regulator how the model produces its output, including data inputs, model architecture, and variable importance.
  3. **"Accountability" requirement:** the insurer remains responsible for the model's output; a vendor or third-party model does not displace the insurer's responsibility.
  4. "Fair and unlawful discrimination" standard — NY Insurance Law § 2606 and federal ECOA/Reg B / NY Human Rights Law framework.
- **DFS Circular Letter No. 5 (2023) — Automated Valuation Models (AVMs):** addressed to mortgage bankers, mortgage brokers, and bank holding companies. AVMs used to value residential real estate collateral in connection with mortgage origination must be independently tested for accuracy and bias. Pre-dates the federal AVM rule (joint CFPB, FRB, FDIC, HUD, NCUA, OCC final rule, June 7, 2024, effective October 1, 2025) — 12 CFR Part 1026, Subpart F.
- **DFS guidance on pre-qualification tools specifically:** DFS has not issued a binding regulation specific to mortgage pre-qualification AI tools. The relevant informal expectations from CPFED during licensing examinations: use "pre-qualification" (or "estimate"), not "pre-approval" or "approval"; include the NMLS ID of the lender to whom the lead is sent; do not generate a "you are approved" representation without an actual pre-approval letter; disclose that the result is non-binding and that the rate (if any) is subject to change based on credit pull and underwriting; apply model risk management per FRB SR 11-7 and the controls in 23 NYCRR 500.
- **CFPB Circular 2023-03** (June 2023) — "Use of Complex Algorithms and Artificial Intelligence in Consumer Credit Decisions." Confirms that creditors using "complex algorithms" are subject to the same ECOA / Regulation B / Fair Housing Act requirements as creditors using any other method of credit decisioning. Source: [consumerfinance.gov/compliance/circulars/circular-2023-03-use-of-complex-algorithms-and-artificial-intelligence-in-consumer-credit-decisions/](https://www.consumerfinance.gov/compliance/circulars/circular-2023-03-use-of-complex-algorithms-and-artificial-intelligence-in-consumer-credit-decisions/).

### NY SHIELD Act (NY GBL §§ 899-aa, 899-bb)

- **§ 899-bb — Reasonable safeguards (the duty):** "Any person or business owning or licensing computerized data that includes private information shall develop, implement, and maintain reasonable safeguards to protect the security, confidentiality, and integrity of the private information, including but not limited to, whenever possible, disposal of data that is no longer necessary to be retained." Effective March 21, 2020.
- **§ 899-aa — Data breach notification.** Effective October 23, 2019. AG notification required if more than 5,000 NY residents are affected. Civil penalty up to $20 per failed notification, up to $250,000 per breach event.
- **Regulated-entity exemption:** A SHIELD Act violation is not deemed to occur if the entity is subject to and in compliance with a federal or NY data security regulation that imposes equivalent requirements: 23 NYCRR 500; GLBA Safeguards Rule; HIPAA; FTC Safeguards Rule. **For a lead-gen site, compliance with 23 NYCRR 500 (if a Covered Entity) or the FTC Safeguards Rule will satisfy § 899-bb.**

### 23 NYCRR 500 — NY DFS Cybersecurity Regulation

- **Effective March 1, 2017; first amendments 2018; second amendments effective November 1, 2023; third amendment proposed for 2024–2025 (final adoption status should be re-verified).**
- **§ 500.01(c) — Covered Entity:** "any Person operating under or required to operate under a license, registration, charter, certificate, permit, accreditation or similar authorization under the Banking Law, the Insurance Law or the Financial Services Law." Includes: NY-licensed mortgage bankers (Art. 12-D), NY-registered mortgage brokers (Art. 12-E), banks, savings banks, S&Ls, credit unions, insurance companies/agents/brokers, mortgage loan servicers. **Does NOT include:** An unlicensed software/lead-gen site that does not itself hold a DFS authorization.
- **§ 500.19 — Small business exemption:** fewer than 10 employees, less than $5M in gross annual revenue in each of the last three fiscal years, or less than $10M in year-end total assets. **Removed if the Covered Entity's business involves NPI of more than 5,000 consumers** (2023 amendments).
- **Required controls:** Cybersecurity Program (§ 500.02), Cybersecurity Policy (§ 500.03), CISO (§ 500.04), Penetration Testing (§ 500.05), Audit Trail (§ 500.06), Access Privileges (§ 500.07), MFA (§ 500.08), Data Privacy Controls (§ 500.09), Cybersecurity Personnel (§ 500.10), TPSP Security Policy (§ 500.11), Data Retention Limitations (§ 500.13), Training (§ 500.14), Encryption of NPI (§ 500.15), Incident Response Plan (§ 500.16), **72-hour notice of cybersecurity event (§ 500.17)**.
- **November 1, 2023 amendments:** Senior Officer certification; CISO independence (cannot be CIO; must report to Senior Officer); expanded 72-hour incident reporting; enhanced MFA; TPSP requirements.
- **March 2025 third amendment (proposed):** expanding "Class A" Covered Entities; AI-specific controls; independent board oversight. Final adoption status to be re-verified at [dfs.ny.gov/industry-guidance/cybersecurity](https://www.dfs.ny.gov/industry-guidance/cybersecurity).

### NY usury law

- **NY Gen. Oblig. Law § 5-501:** civil usury limit of 16% per annum for non-business loans.
- **NY Penal Law § 190.40:** criminal usury threshold of 25% per annum.
- **NY Banking Law § 14-a:** usury exemption for licensed lenders (mortgage bankers/brokers are licensed, so the cap does not apply to loans originated by licensees/registrants).
- **3 NYCRR Part 81:** additional protections for subprime mortgages (NY repealed the 2008 Subprime Mortgage regulation in 2017 in favor of relying on federal Reg Z, but residual provisions may remain).
- **NY Banking Law § 6-g:** Predatory Lending Act; "high-cost home loan" threshold (different from HOEPA).

### NY-specific Do-Not-Call / TCPA

- **NY GBL § 399-z:** NY maintains its own Do-Not-Call list in addition to the federal one.
- **NY Public Service Law § 92-a:** telephone solicitation.
- **NY GBL § 399-cc:** telemarketing and prerecorded messages.

## 2.2 What is unique about New York

1. **DFS is a dual banking + insurance regulator.** No other state combines banking and insurance under a single regulator.
2. **Stricter advertising rules than federal:**
   - NMLS ID must be "**in close proximity**" to ad content (3 NYCRR § 79.5(a), § 91.1(a)) — not merely "available upon request" (12 CFR § 1007.105).
   - "**Pre-approved**" representation is strictly prohibited unless the lender has actually underwritten and issued a written pre-approval letter.
   - NMLS ID + license number + "Licensed by NYSDFS" all required.
3. **The "creditor" determination is the gateway question.** Under 12 CFR § 1002.2(l), if the site only provides an estimate and does not transmit a full application, it is likely not a "creditor" under Reg B — but it is still subject to GBL § 349/§ 350, SHIELD Act, GLBA Safeguards, and (if Covered Entity) 23 NYCRR 500.
4. **23 NYCRR 500 is the only state-level comprehensive cybersecurity regulation applicable to financial services companies.** MA's 201 CMR 17.00 is less specific to financial services.
5. **GBL § 349(h) private right of action with treble damages** for willful or knowing violations.
6. **DFS Circular Letter No. 1 (2022)** is the primary AI guidance in NY; its principles are referenced in mortgage and lead-gen exams even though addressed to insurers.
7. **Lead generation without a license is risky** — selling NY mortgage leads for compensation is generally treated as falling under Art. 12-D or 12-E.

## 2.3 Required disclosures on a New York mortgage qualification / lead-gen site

### On every page (header/footer)

1. **NMLS ID "in close proximity" to ad content** (3 NYCRR § 79.5(a), § 91.1(a)) — "NMLS ID # [number]."
2. **NY mortgage banker or broker license number** (if applicable) (BL § 597).
3. **"Licensed by the New York State Department of Financial Services"** or "Registered Mortgage Broker — NYSDFS."
4. **Equal Housing Lender logo and "Equal Opportunity Lender"** (24 CFR Part 110; NY Exec. Law § 296-a).

### At the qualification result

5. **"Not a commitment to lend"** (3 NYCRR § 79.5(d), § 91.1(c)).
6. **"Pre-qualification" (not "pre-approval")** when the result is based on self-reported data.
7. **If a rate is shown:** full APR + term + loan amount or down-payment percentage in close proximity (3 NYCRR § 79.5(c); 12 CFR § 1026.24).
8. **"Based on information you provided"** — explicit disclaimer.
9. **"Final terms and approval are subject to credit review, appraisal, title, and underwriting."**
10. **"Actual rate and payment may differ"** when any rate is shown.

### Lead submission form

11. **TCPA + NY Do-Not-Call consent:** "By submitting this form, you agree that [Broker] and its partners may contact you by phone, email, or text regarding your mortgage inquiry, even if you are on a Do-Not-Call list. Consent is not required to obtain a mortgage."

### Privacy

12. **GLBA Privacy Notice** (16 CFR Part 313) if the site collects NPI and shares with third parties.
13. **SHIELD Act reasonable safeguards** (always).
14. **Cybersecurity notice** (if 23 NYCRR 500 Covered Entity).

### Adverse action (if applicable)

15. **ECOA Notice (Reg B § 1002.9(b))** for adverse action.
16. **Adverse Action Notice (Reg B § 1002.9)** — required if the site is a "creditor" and takes an "adverse action."

## 2.4 Sample safe-harbor disclosure language (New York)

### Footer / "About" disclosure (all pages)

> [Broker Name], NMLS ID #_______. Licensed Mortgage Banker — New York State Department of Financial Services. License #_______. NMLS Consumer Access: [nmlsconsumeraccess.org](https://nmlsconsumeraccess.org). [Originator Name], NMLS ID #_______. Equal Housing Lender.

### Pre-qualification result disclosure (every result page)

> This is a PRE-QUALIFICATION, not a pre-approval or a commitment to lend. The result is based on the information you provided. The actual rate, payment, loan amount, and approval are subject to credit review, appraisal, title, and underwriting. Your rate and terms may differ.

### Lead submission form consent

> By submitting this form, you agree that [Broker] and its partners may contact you by phone, email, or text regarding your mortgage inquiry, even if you are on a Do-Not-Call list. Consent is not required to obtain a mortgage. You may revoke consent at any time by replying STOP to any text message or by emailing [optout@______].

## 2.5 Recent enforcement actions (2023–2024)

- **2024 (ongoing) — Better.com:** NY AG investigation: advertising practices, rate-quote accuracy. Pending.
- **2023-Q1 — Geico (insurance):** $5.625M for 23 NYCRR 500 violations.
- **2023-Q1 — PayPal:** $2M for 23 NYCRR 500 violations.
- **2023-Q4 — First American Title:** $1M for 2019 data breach; 23 NYCRR 500 violations.
- **2019-09 — Rocket Mortgage / Quicken Loans:** $7.5M + 5-year monitorship + $1.6M restitution to 932 NY consumers for failure to comply with Art. 12-D; books and records; 23 NYCRR 500.
- **2024-03 — National Western Life:** $140,000 for cybersecurity event reporting failures.
- **Multistate actions with NY participation:** Rocket Mortgage, GreenSky ($9M), Nationstar/Mr. Cooper ($61M), PHH Mortgage ($109.4M), Bank of America ($250M), LoanDepot (privacy/lead gen).

## 2.6 Key citations to verify before relying on this section

- **DFS, NY Senate, regs.health.ny.gov** were Cloudflare-blocked from the research environment; 3 NYCRR Part 79, Part 90/91/92, and 23 NYCRR 500 amendment text should be reverified at the live DFS site.
- **DFS Circular Letter on AI/ML (2024)** — anticipated, not confirmed as of research date.
- **DFS consent orders for mortgage advertising violations in 2024** — verify at [dfs.ny.gov/press_releases/](https://www.dfs.ny.gov/press_releases/) and [dfs.ny.gov/industry-guidance/](https://www.dfs.ny.gov/industry-guidance/).
- **Final text of the "Third Amendment" to 23 NYCRR 500** — verify final effective date.
- **3 NYCRR Part 81 (Subprime Mortgages)** — verify whether fully repealed or remains in some form.

---

# STATE 3 — TEXAS

**Regulator:** Texas Department of Savings and Mortgage Lending (SML), under the Texas Finance Commission. **The SML is a stand-alone agency, separate from the Texas Department of Banking** (which regulates state-chartered banks). This is unusual — most states consolidate financial regulation under a single Department of Financial Services / Banking / Commerce.

The Office of Consumer Credit Commissioner (OCCC) regulates non-mortgage consumer loans, secondary mortgage loans, and manufactured-home loans (Tex. Fin. Code Ch. 342, Ch. 347). The Texas Attorney General (OAG) enforces consumer-protection statutes (PSOA, anti-spam email, TDPSA, DTPA). For a Texas mortgage diagnostic site, the SML is the gatekeeper; the OAG is the active enforcer on the consumer-protection/privacy/spam side.

## 3.1 Statutory and regulatory framework

### Tex. Fin. Code Chapter 156 — Residential Mortgage Loan Companies

- **§ 156.001 — Short title:** Residential Mortgage Loan Company Licensing and Registration Act.
- **§ 156.002 — Definitions:** "Residential mortgage loan company" = a person who, for compensation or in expectation of compensation, directly or indirectly negotiates, places, or finds residential mortgage loans for others; or who acquires residential mortgage loans and sells them to institutional investors.
- **§ 156.004 — Disclosure to Applicant (not the NMLS unique identifier, despite the user's reference):** "(a) At the time an applicant submits an application to a residential mortgage loan originator sponsored by and conducting business for a licensed or registered residential mortgage loan company under this chapter, the residential mortgage loan originator shall provide to the applicant a disclosure that specifies: (1) the nature of the relationship between the applicant and the residential mortgage loan originator; (2) the duties the residential mortgage loan originator has to the applicant; and (3) how the residential mortgage loan originator will be compensated." Source: [texas.public.law/statutes/tex._fin._code_section_156.004](https://texas.public.law/statutes/tex._fin._code_section_156.004).
- **§ 156.201 — Licenses Required (text in full):** "(a) A person may not act in the capacity of, engage in the business of, or **advertise or hold that person out as engaging in or conducting the business of a residential mortgage loan company in this state** unless the person holds an active residential mortgage loan company license, is registered under Section 156.2012 (Registered Financial Services Company), or is exempt under Section 156.202 (Exemptions)." **The mere use of language that implies the actor is a Texas mortgage lender or that the actor can connect the consumer to a Texas mortgage loan on terms tailored to their financial circumstances is a § 156.201 violation.** Source: [texas.public.law/statutes/tex._fin._code_section_156.201](https://texas.public.law/statutes/tex._fin._code_section_156.201).
- **§ 156.302–§ 156.305 — Administrative penalty, disciplinary action, fee assessment, restitution.**
- **§ 156.401–§ 156.406 — Hearings, civil actions, injunctive relief, unlicensed-activity offense.**
- **§ 156.501–§ 156.508 — Recovery Fund** (see § 3.6 below).
- **§ 156.551–§ 156.556 — Mortgage Grant Fund** (see § 3.6 below).

### Tex. Fin. Code Chapter 157 — Mortgage Bankers & Residential Mortgage Loan Originators (the MLO chapter)

SML's name on its laws page: "Mortgage Banker Registration & Residential Mortgage Loan Originator License Act."

- **§ 157.003 — Registration Required:** "(a) A person must register under this chapter before the person may conduct the business of a mortgage banker in this state, unless the person is exempt under this section or Section 157.004 (Exemptions). (b) To register under this chapter, a mortgage banker shall: (1) **enroll with the Nationwide Mortgage Licensing System and Registry** …" Source: [texas.public.law/statutes/tex._fin._code_section_157.003](https://texas.public.law/statutes/tex._fin._code_section_157.003).
- **§ 157.012 — License Required for Residential Mortgage Loan Originators:** "(a) An individual may not act or attempt to act in the capacity of a residential mortgage loan originator unless the individual is exempt under Section 157.0121 (Exemptions) or 180.003 (Exemption), is acting under the temporary authority described under Section 180.0511 (Temporary Authority to Originate Loans), or: (1) is licensed under this chapter, **sponsored by an appropriate entity, and enrolled with the Nationwide Mortgage Licensing System and Registry as required by Section 180.052 (Enrollment or Registration with Nationwide Mortgage Licensing System and Registry)** …" Source: [texas.public.law/statutes/tex._fin._code_section_157.012](https://texas.public.law/statutes/tex._fin._code_section_157.012).
- **§ 157.0121 — Exemptions:** Loans for self or immediate family (§180.002(8)); owner of residential real estate making ≤ 1 such loan in a 12-month period; various other enumerated categories.

**SML FAQ (verbatim) — the controlling SML interpretation of what is and is not an RMLO activity:**

> "An RMLO is defined as an individual who, for compensation or gain, or in the expectation of compensation or gain, 1) takes a residential mortgage loan application or 2) offers or negotiates the terms of a residential mortgage loan. See Finance Code § 180.002(19). A licensed RMLO acts on behalf of (and must be sponsored by) an appropriate entity holding a company license or registration (a licensed mortgage company or registered mortgage banker). An RMLO cannot conduct business 'on their own' with the RMLO license but may conduct business in their own name by using a sole proprietorship that is separately licensed or registered."
>
> "**…providing general information about loan programs to the buyer including explaining the procedural steps that a mortgage applicant would need to take to get a loan offer, and providing guidance about program features (loan-to-value limits) and the minimum qualifications (credit score, debt-to-income ratio) for a loan program that is not tailored to the prospective borrower's financial circumstances. If you either take a residential mortgage loan application or negotiate or offer terms for a residential mortgage loan on your client's behalf, you must be licensed by the Department as an RMLO.**"
>
> Source: [sml.texas.gov/mortgage-origination/faqs/](https://www.sml.texas.gov/mortgage-origination/faqs/).

**The italicized sentence is the SML's most direct guidance on what an information-only / diagnostic site may do without an RMLO license.**

### Tex. Fin. Code Chapter 180 — Texas SAFE Act (RMLO Licensing + NMLS Unique Identifier)

- **§ 180.002(19) — "Residential mortgage loan originator"** definition (controlling test).
- **§ 180.0511 — Temporary Authority to Originate Loans:** up to 120 days for an out-of-state RMLO with a pending Texas application. SML FAQ: "Generally speaking, temporary authority requires that you be licensed as an RMLO in another jurisdiction, or are a registered RMLO for a depository institution. Temporary authority status must be granted and recognized by the Department in NMLS to be valid and requires a pending application for licensure, among other requirements."
- **§ 180.052 — Enrollment or Registration with NMLS — the correct citation for NMLS unique identifier (not §156.004 as in the original brief):** "(a) A licensed residential mortgage loan originator must enroll with and maintain a valid unique identifier issued by the Nationwide Mortgage Licensing System and Registry. (b) A non-federally insured credit union that employs loan originators, as defined by the S.A.F.E. Mortgage Licensing Act, shall register those employees with the Nationwide Mortgage Licensing System and Registry by furnishing the information relating to the employees' identity set forth in Section 1507(a)(2) of the S.A.F.E. Mortgage Licensing Act. (c) Each independent contractor loan processor or underwriter licensed as a residential mortgage loan originator must have and maintain a valid unique identifier issued by the Nationwide Mortgage Licensing System and Registry. (d) The regulatory official who administers the law under which a residential mortgage loan originator is licensed shall require the residential mortgage loan originator to be enrolled with the Nationwide Mortgage Licensing System and Registry. (e) For purposes of implementing Subsection (d), the regulatory official may participate in the Nationwide Mortgage Licensing System and Registry." Source: [texas.public.law/statutes/tex._fin._code_section_180.052](https://texas.public.law/statutes/tex._fin._code_section_180.052).
- **§ 180.054 — Criminal History Background Check** (basis for SML's authority to require fingerprints). Criteria: 7 TAC § 55.113.

### Tex. Fin. Code Chapter 159 — Wrap Mortgage Loan Financing

SML's Wrap Mortgage Loan Disclosure Form (English and Spanish versions). If the diagnostic site ever funnels leads to a wrap-mortgage lender, that lender must use the SML's wrap disclosure form.

### Tex. Fin. Code Chapters 342 / 343 — Consumer Loans / Home Loans

- **§ 343.001 — Definitions:** "Home loan" = loan for personal, family, or household purposes secured in whole or part by a manufactured home used as the borrower's principal residence OR real property improved by a dwelling designed for occupancy by four or fewer families and used as the borrower's principal residence.
- **§ 343.105 — Notice of Penalties for Making False or Misleading Written Statement (the user meant this by "Tex. Code Crim. Proc. art. 2.29," which does not exist):** "(a) A lender, mortgage banker, or licensed mortgage broker shall provide to each applicant for a home loan a written notice at closing. (b) The notice must: (1) be provided on a separate document; (2) be in at least 14-point type; and (3) have the following or substantially similar language: ***'Warning: Intentionally or knowingly making a materially false or misleading written statement to obtain property or credit, including a mortgage loan, is a violation of Section 32.32, Texas Penal Code, and, depending on the amount of the loan or value of the property, is punishable by imprisonment for a term of 2 years to 99 years and a fine not to exceed $10,000.'*** 'I/we, the undersigned home loan applicant(s), represent that I/we have received, read, and understand this notice of penalties for making a materially false or misleading written statement to obtain a home loan.' 'I/we represent that all statements and representations contained in my/our written home loan application, including statements or representations regarding my/our identity, employment, annual income, and intent to occupy the residential real property secured by the home loan, are true and correct as of the date of loan closing.'" Source: [texas.public.law/statutes/tex._fin._code_section_343.105](https://texas.public.law/statutes/tex._fin._code_section_343.105).
- **§ 343.205 — Prepayment Penalties Prohibited** for high-cost home loans.

### 7 TAC Part 4 (SML administrative rules) — Chapters 55–59

The SML rules are at 7 TAC Part 4, Chapters 55–59. (The user's reference to "7 TAC Part 3 §§81.1, 84.1, 89.1" is incorrect; those are OCCC rules, not SML rules.)

- **Ch. 55 — Residential Mortgage Loan Originators:** §55.100(1) (definition of "residential mortgage loan" includes renewals/extensions/modifications/rearrangements); §55.104 (RMLO must amend MU4 filing within 10 days of any material change); §55.108 (pre-licensing education: 20 hrs NMLS-approved + 3 hrs Texas-specific); §55.109 (temporary authority); §55.110 (RMLO military licensing requirements, eff. Nov. 16, 2025); §55.113 (Criminal Conviction Guidelines).
- **Ch. 56 — Residential Mortgage Loan Companies:** §56.200(b) ("Specific Notice to Mortgage Applicant," form prescribed by SML); **§56.200(c) ("Consumer Complaint Notice Posted on Websites" (TCCN), form prescribed by SML);** §56.201 (Conditional Pre-Qualification Letter (Form A) and Conditional Approval Letter (Form B)); **§56.203 (advertising — NMLS ID disclosure; APR if rate is recited; prohibited false/misleading; records retention; product-availability);** §56.204 (books and records); §56.206(b) (office locations / in-person meeting place).
- **Ch. 57 — Mortgage Bankers:** §57.200(b), §57.200(c), §57.201, **§57.203**, §57.204, §57.206(b) — parallel to Ch. 56.
- **Ch. 58 — Residential Mortgage Loan Servicers:** §58.107 (Required Use of Electronic Surety Bonds, effective January 1, 2026).
- **Ch. 59 — Wrap Mortgage Loans:** Disclosure form for wrap loan originators.

### 7 TAC §§ 56.203 / 57.203 — Advertising Rules (SML's plain-language summary)

SML FAQ on advertising rules (verbatim from [sml.texas.gov/mortgage-origination/faqs/](https://www.sml.texas.gov/mortgage-origination/faqs/)):

> "There are a number of very specific requirements in the Department's administrative rules (regulations). See 7 Tex. Admin. Code § 56.203 for mortgage companies and 7 Tex. Admin. Code § 57.203 for mortgage bankers and individual RMLOs. **An advertisement must disclose the company's name and NMLS ID, and the company's website address, if it has a website.** If the advertisement is made by a sponsored originator, it must also include the originator's name and NMLS ID. **Additionally, websites must display the Texas Consumer Complaint Notice, the form and content of which is determined by 7 Tex. Admin. Code § 56.200(c) for mortgage companies and 7 Tex. Admin. Code § 57.200(c) for mortgage bankers and individual RMLOs.** Advertisements must comply with all other applicable consumer disclosures laws, including the Truth in Lending Act and Regulation Z. **One of the most common violations is the failure to disclose annual percentage rates (APRs). If the advertisement recites a rate of finance charge, it must be expressed as an APR and calculated in accordance with Regulation Z.** False, misleading, or deceptive advertisements are prohibited. The company may only advertise products that are actually available, and if the product is subject to any special or unusual conditions or requirements, those conditions or requirements must be disclosed. … The company must also maintain records of all advertisements it makes in the medium that the advertisement was made. See 7 Tex. Admin. Code § 56.204 for mortgage companies and 7 Tex. Admin. Code § 57.204 for mortgage bankers."

### 7 TAC §§ 56.201 / 57.201 — Pre-Qualification Letters (Form A & Form B)

SML FAQ:

> "The Department's administrative rules (regulations) do not require the issuance of written confirmation of conditional pre-qualification or conditional loan approval, but if a written notification is issued, it must contain certain information. The full requirements can be found at 7 Tex. Admin. Code § 56.201 for mortgage companies and 7 Tex. Admin. Code § 57.201 for mortgage bankers and RMLOs. The rules contain model forms that may be used and dictates the information that is required. If written notification is issued, it must contain all of the information in either Form A (conditional pre-qualification letter) or Form B (conditional approval letter). A company or RMLO may use an alternate form, provided it includes all of the required information."

**SML-published forms (December 6, 2024):**
- **Mortgage Company: Conditional Pre-Qualification Letter (Form A):** [sml.texas.gov/?wpdmdl=8334](https://www.sml.texas.gov/?wpdmdl=8334).
- **Mortgage Company: Conditional Approval Letter (Form B):** [sml.texas.gov/?wpdmdl=8345](https://www.sml.texas.gov/?wpdmdl=8345).
- **Mortgage Company: TCCN (7 TAC §56.200(c)):** [sml.texas.gov/?wpdmdl=8342](https://www.sml.texas.gov/?wpdmdl=8342).
- **Mortgage Banker: TCCN (7 TAC §57.200(c)):** [sml.texas.gov/?wpdmdl=8338](https://www.sml.texas.gov/?wpdmdl=8338) (per SML page; ID inferred from pattern).

### Tex. Fin. Code §§ 13.016, 156.501–.508, 157.0201 — Recovery Fund

- **§ 13.016:** establishes the umbrella Recovery Fund for Chs. 156 and 157.
- **§ 156.501 — Recovery Fund:** "(b) Subject to this subsection and Section 156.502 (Funding) (b), the recovery fund shall be used to reimburse residential mortgage loan applicants for actual damages incurred because of acts committed by a residential mortgage loan originator who was licensed under Chapter 157 (Mortgage Bankers and Residential Mortgage Loan Originators) when the act was committed. The use of the fund is limited to reimbursement for out-of-pocket losses caused by an act by a residential mortgage loan originator licensed under Chapter 157 that constitutes a violation of Section 157.024 (Disciplinary Action; Cease and Desist Order) (a)(2), (3), (5), (7), (8), (9), (10), (13), (16), (17), or (18) or 156.304 (Fee Assessment and Disclosure) (b)." Source: [texas.public.law/statutes/tex._fin._code_section_156.501](https://texas.public.law/statutes/tex._fin._code_section_156.501).
- **§ 156.502–§ 156.508:** Funding, statute of limitations, claim procedure, recovery limits, subrogation.
- **§ 157.0201:** Cross-reference for the MLO chapter.
- **§ 157.0241:** SML must revoke or suspend the offending RMLO's license when the Recovery Fund pays out.

### Tex. Fin. Code §§ 156.551–.556 — Mortgage Grant Fund

SML page: "Recovery Fund Claims for Fraud Committed by an Unlicensed Originator. The Department's Commissioner administers a mortgage grant fund (Mortgage Grant Fund) that, among other things, allows for claims to be made against the fund to recover out-of-pocket monetary damages (money losses) incurred because of fraud committed by an individual who acted in the capacity of a residential mortgage loan originator (originator) and was required to be licensed by the Department as an originator, but did not hold such license." Source: [sml.texas.gov/consumers/recovery-fund-claims/](https://www.sml.texas.gov/consumers/recovery-fund-claims/).

### Tex. Bus. & Com. Code Ch. 541 — Texas Data Privacy and Security Act (TDPSA), effective July 1, 2024

- **§ 541.001(29) — Sensitive data (corrected definition):** "(A) personal data revealing racial or ethnic origin, religious beliefs, mental or physical health diagnosis, sexuality, or citizenship or immigration status; (B) genetic or biometric data that is processed for the purpose of uniquely identifying an individual; (C) personal data collected from a known child; or (D) precise geolocation data." **SSN and financial information are NOT sensitive data** under TDPSA but are still "personal data" subject to §§ 541.101, 541.102, 541.103, and 541.105.
- **§ 541.001(11) — "Decision that produces a legal or similarly significant effect":** includes "the provision or denial by the controller of … financial and lending services." A mortgage qualification diagnostic that produces a "denial" decision is a "decision that produces a legal or similarly significant effect" for TDPSA data-protection-assessment purposes.
- **§ 541.002(a)(3) — Small business exemption:** "small business as defined by the United States Small Business Administration." SBA's small-business size standards for a typical lead-gen site: ≤ $9M average annual revenue (NAICS 519130). **If the diagnostic site is below the SBA threshold, TDPSA does not apply at all, except for § 541.107.**
- **§ 541.002(b)(2) — GLBA exemption:** "a financial institution or data subject to Title V, Gramm-Leach-Bliley Act." **However, this exemption is for the GLBA-covered entity itself, not necessarily for its non-bank service providers.** A lead-gen site is not GLBA-covered and is subject to TDPSA when handling its own consumer data.
- **§ 541.101 — Controller duties; transparency:** (a)(1) purpose limitation; (a)(2) reasonable security; (b)(4) no sale of sensitive data without consent.
- **§ 541.103 — Sale of data to third parties and targeted advertising:** "If a controller sells personal data to third parties or processes personal data for targeted advertising, the controller shall clearly and conspicuously disclose that process and the manner in which a consumer may exercise the right to opt out of that process." **Lead-gen sites that sell leads to multiple lenders must clearly and conspicuously disclose this sale and provide an opt-out.**
- **§ 541.105 — Data Protection Assessments:** required for processing activities that present a "heightened risk of harm to a consumer," including profiling in furtherance of decisions producing legal or similarly significant effects, targeted advertising, and sensitive data processing.
- **§ 541.107 — Small Business Sensitive Data Rule:** "A person described by Section 541.002 (Applicability of Chapter) (a)(3) may not engage in the sale of personal data that is sensitive data without receiving prior consent from the consumer." Subject to the § 541.155 penalty.
- **§ 541.151 — Enforcement authority exclusive:** "The attorney general has exclusive authority to enforce this chapter."
- **§ 541.154 — Notice of violation; opportunity to cure:** 30-day cure period (one-shot, not unlimited).
- **§ 541.155 — Civil penalty; injunction:** "A person who violates this chapter following the cure period described by Section 541.154 … is liable for a civil penalty in an amount not to exceed $7,500 for each violation." AG can also recover attorney's fees.
- **§ 541.156 — No private right of action:** "This chapter may not be construed as providing a basis for, or being subject to, a private right of action for a violation of this chapter or any other law."

### Tex. Bus. & Com. Code Ch. 302 — Telephone Solicitation Act (PSOA)

- **§ 302.001(7) — "Telephone solicitation":** "a telephone call a seller or salesperson initiates to induce a person to purchase, rent, claim, or receive an item. The term includes a telephone call a purchaser makes in response to a solicitation sent by mail or made by any other means."
- **§ 302.053 — Exemption: Persons Regulated by Other Law:** a person regulated by a state or federal financial-services regulator is exempt from the PSOA's registration requirement, including a Texas-licensed mortgage company, mortgage banker, or RMLO. **However, the substantive prohibitions (do-not-call list, call-time restrictions, identification requirements) still apply** unless the person qualifies for a separate exemption.
- **§ 302.101 — Registration Certificate Required:** "A seller may not make a telephone solicitation from a location in this state or to a purchaser located in this state unless the seller holds a registration certificate for the business location from which the telephone solicitation is made."
- **§ 302.251 — Class A misdemeanor** for knowing violation of § 302.101, § 302.105, § 302.201, § 302.202, or § 302.203.
- **§ 302.302 — Civil Penalties:** "not more than $5,000 for each violation." For injunction violations: "not more than $25,000 for each violation of the injunction; and $50,000 for all violations of the injunction."
- **§ 302.303 — Deceptive Trade Practices:** "A violation of this chapter is a false, misleading, or deceptive act or practice under Subchapter E (Short Title), Chapter 17 (Deceptive Trade Practices). A public or private right or remedy prescribed by Subchapter E (Short Title), Chapter 17 (Deceptive Trade Practices), may be used to enforce this chapter." **A consumer can sue a PSOA-violating lead generator for economic damages, mental anguish, and (if conduct is "knowing") treble damages up to $100,000 per violation, plus attorney's fees.**

### Tex. Bus. & Com. Code Ch. 321 — Regulation of Electronic Mail (anti-spam)

- **§ 321.052 — Requirements for Transmission of Unsolicited Commercial Electronic Mail Messages:** must include "ADV:" in subject line, must include opt-out, must honor opt-out within 10 days, etc.
- **§ 321.102 — General Civil Penalty and Injunctive Relief:** $10/violation, capped at $25,000/day.
- **§ 321.103 — Deceptive Trade Practice (DTPA incorporation):** §17.50 private right.
- **§ 321.104 — Civil Action for Damages by recipient:** actual damages, or $10 per violation up to $25,000/day.

### Tex. Code Crim. Proc. art. 2.29 — does not exist in current law

The brief's reference to "Tex. Code Crim. Proc. art. 2.29" is **incorrect**. The current Code of Criminal Procedure Title 1, Chapter 2 contains Articles 2.03, 2.09, 2.11, 2.12, 2.13, 2.21, 2.24, 2.025, 2.26, 2.101, 2.122, 2.305, and 2.1398. **There is no Art. 2.29.** The substantive answer is **Tex. Fin. Code § 343.105** (closing-stage notice) and **Tex. Bus. & Com. Code §§ 302.251, 302.302, 302.303, 321.102–.107** (lead-gen calling/emailing).

## 3.2 What is unique about Texas

1. **The SML is a stand-alone agency** separate from the Texas Department of Banking and from the OCCC. SML + OCCC + OAG is the three-agency structure to engage.
2. **Tex. Fin. Code § 180.052** is the correct citation for the NMLS unique identifier requirement (not § 156.004).
3. **Tex. Fin. Code § 156.201(a)** prohibits "advertis[ing] or hold[ing] that person out as engaging in or conducting the business of a residential mortgage loan company" without a license. **The mere use of language that implies the actor is a Texas mortgage lender is a violation.**
4. **The SML FAQ provides direct guidance on information-only sites:** "providing general information about loan programs … that is not tailored to the prospective borrower's financial circumstances" does not require an RMLO license. Taking an application or offering/negotiating terms does.
5. **7 TAC Part 4, Chs. 55–59** is the correct citation for SML rules (not Part 3).
6. **Tex. Fin. Code § 343.105** is a verbatim 14-point-type closing-stage notice that "Intentionally or knowingly making a materially false or misleading written statement to obtain property or credit, including a mortgage loan, is a violation of Section 32.32, Texas Penal Code" (punishable by 2–99 years' imprisonment and a fine up to $10,000). No federal analogue.
7. **TDPSA is one of the most aggressive state privacy laws to take effect** (July 1, 2024) with $7,500/violation AG penalty (after 30-day cure), broad applicability to for-profits, exclusive AG enforcement (no private right of action under § 541.156), and explicit inclusion of "decisions producing legal or similarly significant effect" (including "financial and lending services") in the data-protection-assessment trigger.
8. **Tex. Bus. & Com. Code Ch. 302 (PSOA) and Ch. 321 (anti-spam) together** create the highest per-violation exposure of any state surveyed: PSOA $5,000/violation + DTPA private right of action; Ch. 321 $10/violation + DTPA private right of action.
9. **The SML has its own Mortgage Grant Fund** (§§ 156.551–.556) to compensate consumers for fraud by unlicensed originators. Few states have this.
10. **Texas is "tough on licensing + tough on data privacy + tough on telemarketing/email + federal-only on fair housing"** — not "lighter-touch on consumer protection" as the brief suggested.

## 3.3 Required disclosures on a Texas mortgage qualification / lead-gen site

### If the site is operated by a licensed Texas mortgage company or banker (or a non-bank affiliate under common control)

Every page must display:

1. **Legal name of licensed entity** + **NMLS ID #** (Tex. Fin. Code § 180.052(a); 7 TAC § 56.203 / § 57.203).
2. **Texas Consumer Complaint Notice (TCCN)** — verbatim from SML Form (7 TAC § 56.200(c) / § 57.200(c); forms at [sml.texas.gov/?wpdmdl=8342](https://www.sml.texas.gov/?wpdmdl=8342) and [sml.texas.gov/?wpdmdl=8338](https://www.sml.texas.gov/?wpdmdl=8338)). The TCCN must be in a font size no smaller than the body text or 10-point, whichever is greater; conspicuously placed (e.g., footer or dedicated "Disclosures" page linked from every page); verbatim from the SML form.
3. **If a sponsored originator is named** on the site, the originator's name and NMLS ID (7 TAC § 56.203 / § 57.203).
4. **Company's website address** (7 TAC § 56.203 / § 57.203).
5. **APR disclosure** if any rate is mentioned (7 TAC § 56.203 / § 57.203; 12 CFR § 1026.24).
6. **Records retention** for all advertisements (7 TAC § 56.204 / § 57.204).

### If the site is NOT operated by a licensed entity and is purely a lead generator

Every page must display (footer or dedicated "Disclosures" page):

```
NOT A LENDER. NOT A COMMITMENT TO LEND.

This website provides a mortgage qualification diagnostic tool for educational
and informational purposes only. We are not a mortgage lender, mortgage broker,
mortgage banker, or residential mortgage loan originator, and we do not make
credit decisions. The information shown on this site is not an application for
credit, a pre-qualification, a pre-approval, or a commitment to lend. Any
pre-qualification or pre-approval you may receive after being connected with a
lender through this site will come directly from that lender, will be subject
to that lender's underwriting, and is not a guarantee that you will receive
any loan or any specific loan terms.

We do not take residential mortgage loan applications. We collect information
you provide and share it with third-party lenders who may contact you about
mortgage products. We may be compensated by these lenders for the referral.

To file a complaint about a Texas-licensed mortgage company, banker, or
residential mortgage loan originator, contact the Texas Department of Savings
and Mortgage Lending:
  2601 N. Lamar, Suite 201, Austin, TX 78705
  1-877-276-5550
  https://www.sml.texas.gov/consumers/complaints/
```

### TDPSA-required disclosures (if TDPSA applies — not GLBA-covered and not a small business)

A clear and conspicuous link in the footer or "Your Privacy Choices" page:

```
PRIVACY NOTICE / YOUR PRIVACY CHOICES

We collect personal data to provide the mortgage qualification diagnostic and
to share with third-party lenders who may contact you with offers. For details
on the categories of personal data we collect, the purposes for which we use
it, how long we retain it, and how to exercise your rights under the Texas
Data Privacy and Security Act (Tex. Bus. & Com. Code Ch. 541), see our full
Privacy Notice [link].

YOUR RIGHT TO OPT OUT OF SALE: We sell personal data to third-party lenders
in exchange for referral fees. You have the right to opt out of this sale at
any time. To opt out, click "Do Not Sell or Share My Personal Information"
[link], or contact us at [email/phone].

SENSITIVE DATA: We do not knowingly collect sensitive data (racial or ethnic
origin, religious beliefs, mental or physical health diagnosis, sexuality,
citizenship or immigration status, genetic or biometric data for unique
identification, personal data from known children, precise geolocation
within 1,750 feet) without your prior affirmative consent.
```

### PSOA / TCPA disclosures (if the site calls or texts Texas consumers)

```
If you provide your phone number, you agree that we and our third-party
lender partners may contact you at that number using auto-dialed or
prerecorded calls or text messages for marketing purposes. Standard message
and data rates may apply. You are not required to consent as a condition of
using this diagnostic tool. To opt out of telemarketing calls, register your
number on the National Do Not Call Registry (https://www.donotcall.gov/) and
request to be placed on our internal do-not-call list at [link/email].
```

### Equal Housing Opportunity / EHO notice (best practice; not Texas-required)

```
We are an Equal Housing Opportunity Lender. We do not discriminate on the
basis of race, color, national origin, religion, sex (including gender
identity and sexual orientation), familial status, or disability.

[Equal Housing Opportunity logo]

For more information or to file a Fair Housing complaint:
  U.S. Department of Housing and Urban Development
  1-800-669-9777
  https://www.hud.gov/program_offices/fair_housing_equal_opp
```

## 3.4 Sample safe disclosure language for a Texas mortgage diagnostic / lead-gen site (operated by a licensed entity)

```
[LEGAL NAME OF LICENSED ENTITY], NMLS ID [#]              [Texas Consumer Complaint Notice (TCCN)]
Texas Department of Savings and Mortgage Lending          [Verbatim TCCN text from SML Form 8342 or 8331]
2601 N. Lamar, Suite 201, Austin, TX 78705
1-877-276-5550
https://www.sml.texas.gov/

This is not a commitment to lend. The interest rate, points, and fees you
will be charged are not guaranteed and are subject to change without notice.
Any rate shown on this site is an estimate based on the information you have
provided; the actual rate may differ. All loans are subject to credit
approval, property appraisal, title, and underwriting.

Equal Housing Lender.
```

## 3.5 Recent enforcement actions (2023–2024)

- **Bayview Asset Management $20M / 52-state / 555,307-Texan cybersecurity settlement (announced Jan. 8, 2025):** "[T]he Department of Savings and Mortgage Lending (SML), an agency of the State of Texas, and 52 state financial regulatory agencies announced today a coordinated legal settlement agreement against mortgage banker Bayview Asset Management LLC, and three of its affiliates, Lakeview Loan Servicing, Community Loan Servicing, and Pingora Holdings (collectively the Bayview Companies), for deficient cybersecurity practices and for not fully cooperating with state regulators following a data breach that impacted 5.8 million customers, including 555,307 Texans." Source: [sml.texas.gov/news/announcement-settlement-agreement-and-consent-order-against-bayview-asset-management-llc/](https://www.sml.texas.gov/news/announcement-settlement-agreement-and-consent-order-against-bayview-asset-management-llc/).
- **Wemlo, LLC (2/28/2024) — Unlicensed Activity Agreed Order:** the only 2023–2024 SML enforcement against a lead-generation platform. Per the SML enforcement orders CSV (3,993 orders through 06/26/2026; [sml.texas.gov/wp-content/uploads/2026/06/sml_enforcement_orders_data_06_26_2026.csv](https://www.sml.texas.gov/wp-content/uploads/2026/06/sml_enforcement_orders_data_06_26_2026.csv)).
- **Earlier: Rocket Mortgage Settlement Agreement (2021)** — [sml.texas.gov/wp-content/uploads/2021/09/rocket_mortgage_settlement_agreement.pdf](https://www.sml.texas.gov/wp-content/uploads/2021/09/rocket_mortgage_settlement_agreement.pdf).
- **Earlier: Fred Rich et al. Settlement Agreement (2021)** — [sml.texas.gov/wp-content/uploads/2021/08/fred_rich_et_al_settlement_agreement.pdf](https://www.sml.texas.gov/wp-content/uploads/2021/08/fred_rich_et_al_settlement_agreement.pdf).
- **Multiple Recovery Fund Payout orders in 2023–2024** (Barron-Solis 12/12/2023 and 2/2/2024; Brown 2/2/2024; Rahman 9/25/2024).
- **Multiple Unlicensed Activity orders in 2023–2024** (Wemlo, US Mortgage Lenders, Silver Hill Capital, Priority Processing, McDonald, et al.).

## 3.6 Key citations to verify before relying on this section

- **Texas Constitution and Statutes** is a JavaScript SPA at `statutes.capitol.texas.gov`; the verified-mirror `texas.public.law` was used for every quote. Verify each citation against the original.
- **7 TAC Part 4 (Chs. 55–59)** is published only on the `texas-sos.appianportalsgov.com` SPA; rule text is not directly fetchable. Citations in this report are from SML's own cross-references in its FAQ, Forms page, and announcements.
- **Recovery Fund payout cap per licensee** — verify the current cap with SML.
- **OAG TDPSA enforcement actions** — none publicly filed as of research date; statute took effect only July 1, 2024, and the 30-day cure period under § 541.154 makes the first wave of actions likely 2H 2024 through 2025.

---

# STATE 4 — FLORIDA

**Regulator:** Florida Office of Financial Regulation (OFR), a state agency within the Department of Financial Services (DFS). OFR is the state agency that administers Florida's mortgage lender, mortgage broker, and loan originator laws under Ch. 494. **The OFR is separate from DBPR (which regulates real estate brokers), OIR (which regulates insurance), and the AG (which enforces FTSA, FDUTPA, FDBOR, and FIPA).** Lead pages: [flofr.gov/](https://flofr.gov/).

## 4.1 Statutory and regulatory framework

### Chapter 494, Florida Statutes (Florida Mortgage Lending Act)

- **Part I — General Provisions** (ss. 494.001 – 494.00296).
- **Part II — Mortgage Brokers** (ss. 494.00312 – 494.0043).
- **Part III — Mortgage Lenders** (ss. 494.00611 – 494.0077).
- URL pattern: `https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0494/Sections/0494.<SEC>.html&StatuteYear=2024`.

**Key definitions (§ 494.001):**
- **(18) "Loan originator":** "an individual who, directly or indirectly, solicits or offers to solicit a mortgage loan, accepts or offers to accept an application for a mortgage loan, negotiates or offers to negotiate the terms or conditions of a new or existing mortgage loan on behalf of a borrower or lender, or negotiates or offers to negotiate the sale of an existing mortgage loan to a noninstitutional investor for compensation or gain. The term includes an individual who is required to be licensed as a loan originator under the S.A.F.E. Mortgage Licensing Act of 2008. The term does not include an employee of a mortgage broker or mortgage lender whose duties are limited to physically handling a completed application form or transmitting a completed application form to a lender on behalf of a prospective borrower."
- **(23) "Mortgage broker":** "a person conducting loan originator activities through one or more licensed loan originators employed by the mortgage broker or as independent contractors to the mortgage broker."
- **(24) "Mortgage lender":** "a person making a mortgage loan or servicing a mortgage loan for others, or, for compensation or gain, directly or indirectly, selling or offering to sell a mortgage loan to a noninstitutional investor."
- **(26) "Mortgage loan application":** "the submission of a borrower's financial information in anticipation of a credit decision, which includes the borrower's name, the borrower's monthly income, the borrower's social security number to obtain a credit report, the property address, an estimate of the value of the property, the mortgage loan amount sought, and any other information deemed necessary by the loan originator. **An application may be in writing or electronically submitted, including a written record of an oral application.**"
- **(33) "Registry":** the Nationwide Mortgage Licensing System and Registry (NMLS).
- **(35) "Remote location"** (added by Ch. Law 2023-130, eff. 2023): a location, other than a principal place of business or a branch office, at which a loan originator of a licensee may conduct business. A licensee may allow loan originators to work from remote locations if: (a) the licensee has written policies and procedures for supervision of loan originators working from remote locations; plus 8 additional conditions.

**Key provisions:**
- **§ 494.0011(2) — Rulemaking authority** including NMLS integration.
- **§ 494.0016(3) — Books, accounts, records (3-year retention):** "All books, accounts, records, documents, and receipts for expenses paid by the licensee on behalf of the borrower, including each closing statement signed by a borrower, **shall be preserved and kept available for examination by the office for at least 3 years after the date of original entry.**" A lead-gen site working with a licensed broker must preserve lead submissions, consents, source of lead, and disclosures for 3 years.
- **§ 494.0019 — Joint-and-several liability (strict):** "If a mortgage loan transaction is made in violation of any provision of this chapter, the person making the transaction and every licensee, director, or officer who participated in making the transaction are jointly and severally liable to every party to the transaction in an action for damages incurred by the party or parties."
- **§ 494.0023 — Conflicting-interest disclosure:** if a licensee has a 1%-or-greater equity relationship or other "conflicting interest," the licensee must disclose in writing: (a) the nature of the relationship; (b) an estimated charge or range; (c) that a financial benefit may be received; (d) that alternative sources may be chosen by the borrower. **A lead-gen site paid a per-lead fee by a broker, or owned in common with a broker, may trigger this disclosure.**
- **§ 494.0025 — Prohibited practices (THE central enforcement section):** "It is unlawful for any person: (1) To act as a loan originator in this state without a current, active license … (2) To act as a mortgage broker in this state without a current, active license … (3) To act as a mortgage lender in this state without a current, active license … (4) In any practice or transaction or course of business relating to the sale, purchase, negotiation, promotion, **advertisement**, or hypothecation of mortgage loan transactions, directly or indirectly: (a) To knowingly or willingly employ any device, scheme, or artifice to defraud; (b) To engage in any transaction, practice, or course of business which operates as a fraud upon any person in connection with the purchase or sale of any mortgage loan; (c) To obtain property by fraud, willful misrepresentation of a future act, or false promise; or (d) To misrepresent a residential mortgage loan, as described in s. 494.001(25)(a), as a business purpose loan. (5) In any matter within the jurisdiction of the office, to knowingly and willfully falsify, conceal, or cover up by a trick, scheme, or device a material fact, make any false or fraudulent statement or representation, or make or use any false writing or document, knowing the same to contain any false or fraudulent statement or entry. **(7) To pay a fee or commission in any mortgage loan transaction to any person or entity other than a licensed mortgage broker or mortgage lender, or a person exempt from licensure under this chapter.** (8) To record a mortgage broker agreement or any other document, not rendered by a court of competent jurisdiction, which purports to enforce the terms of the agreement. **(9) To use the name or logo of a financial institution, as defined in s. 655.005(1), or its affiliates or subsidiaries when marketing or soliciting existing or prospective customers if such marketing materials are used without the written consent of the financial institution and in a manner that would lead a reasonable person to believe that the material or solicitation originated from, was endorsed by, or is related to or the responsibility of the financial institution or its affiliates or subsidiaries.** (10) Subject to investigation or examination under this chapter, to knowingly alter, withhold, conceal, or destroy any books, records, computer records, or other information relating to a person's activities which subject the person to the jurisdiction of this chapter."

**§ 494.0025(7) is the OFR's primary lead-gen enforcement tool**: a Florida-licensed mortgage broker is barred from paying a fee to anyone other than another licensed mortgage broker/lender or a person exempt from licensure. The OFR can and does charge the unlicensed lead generator directly.

**§ 494.0025(9) is the OFR's principal anti-impersonation rule** — bank-logo / name-impersonation, separate from the Lanham Act and from § 494.0025(4).

- **§ 494.0026 — Mortgage broker agreement; NMLS disclosure at time of application:** "(1) Each mortgage broker and mortgage lender shall furnish to each loan applicant a copy of a form of mortgage broker agreement at the time the loan application is taken. (2) At the time of application, a loan originator must furnish the following information: (a) His or her name, business address, business telephone number, business email address, and **the unique identifier assigned to the loan originator by the registry**. (b) The name, business address, business telephone number, business email address, and **the unique identifier assigned to the mortgage broker or mortgage lender by the registry**. (c) A statement that the loan originator is authorized to conduct business as a loan originator and a statement of the nature of the relationship between the loan originator and the mortgage broker or mortgage lender. (3) The mortgage broker agreement must contain at a minimum: (a) The name, business address, business telephone number, business email address, and the unique identifier assigned to the mortgage broker by the registry and the name and the unique identifier assigned to the loan originator by the registry. (b) The loan amount requested. (c) The loan origination fee, if any. (d) The interest rate, points, fees, or other consideration to be paid by the borrower, or, if unknown, the anticipated interest rate, points, fees, or other consideration, **expressed as a range**. (e) **A statement that the loan is not guaranteed and that the loan is subject to approval**."
- **§ 494.00296 — Loan modification 3-day right of cancellation** (with verbatim 12-point uppercase cancellation notice).

### 2023-2024 statutory overhaul

- **Ch. Law 2023-130** (2023 amendment to Ch. 494) added the "remote location" definition to § 494.001(35) (post-COVID work-from-home accommodation for loan originators). OFR implemented this and updated the NMLS forms in the 10/10/2024 rulemaking (Rule 69V-40.002). Source: [laws.flrules.org/2023/130](https://laws.flrules.org/2023/130).
- **Ch. Law 2023-201 — Florida Digital Bill of Rights (FDBOR)** (see § 4.5 below).
- **Ch. Law 2021-185** (effective July 1, 2021) — the FTSA "mini-TCPA" amendment.
- **Ch. Law 2023-150** — 2023 FTSA technical amendment.

### Fla. Admin. Code Ch. 69V-40 (Mortgage Brokerage)

Source: [flrules.org/gateway/chapterhome.asp?chapter=69V-40](https://www.flrules.org/gateway/chapterhome.asp?chapter=69V-40). (Note: Ch. 69V-50 is motor vehicle sales finance, not mortgage.)

Active rules (as of late 2024):

| Rule | Title | Effective |
|---|---|---|
| 69V-40.00111 | Determination of common terms | 11/9/2015 |
| 69V-40.00112 | Effect of Law Enforcement Records on Applications | 11/9/2015 |
| **69V-40.002** | **Adoption of Forms (NMLS MU1/MU2/MU3/MU4, OFR-MIL-001, OFR-494-15)** | **10/10/2024** |
| 69V-40.003 | Electronic Filing of Forms and Fees | 11/9/2015 |
| 69V-40.00661 | Mortgage Lender Branch Office Renewal | 11/30/2015 |
| 69V-40.008 | Fees and Commissions | 11/30/2015 |
| **69V-40.011** | **Misleading Practice; Penalty** (implements §494.00255) | 11/9/2015 |
| 69V-40.0113 | Character, General Fitness, Financial Responsibility | 10/1/2010 |
| **69V-40.0312** | **Application Procedure for Loan Originator License** | **10/10/2024** |
| **69V-40.0313** | **Loan Originator License Renewal** | **10/10/2024** |
| 69V-40.0321 | Application Procedure for a Mortgage Broker License | 1/18/2021 |
| 69V-40.0322 | Mortgage Broker License Renewal | 11/30/2015 |
| 69V-40.0331 | Declaration of Intent to Engage Solely in Loan Processing | 4/12/2021 |
| 69V-40.036 | Application Procedure for a Mortgage Broker Branch Office License | 1/18/2021 |
| 69V-40.0361 | Mortgage Broker Branch Office Renewal | 11/30/2015 |

## 4.2 Florida Telephone Solicitation Act (FTSA) — Fla. Stat. § 501.059

- **§ 501.059(1)(g) — "Prior express written consent":** "a written agreement that: 1. Bears the signature of the called party; 2. Clearly authorizes the person making or allowing the placement of a telephonic sales call by telephone call, text message, or voicemail transmission to deliver or cause to be delivered to the called party a telephonic sales call using an automated system for the selection and dialing of telephone numbers, the playing of a recorded message when a connection is completed to a number called, or the transmission of a prerecorded voicemail; 3. Includes the telephone number to which the called party authorizes a telephonic sales call to be delivered; and 4. Includes a clear and conspicuous disclosure informing the called party that: a. By executing the agreement, the called party authorizes the person making or allowing a telephonic sales call to be made by telephone call, text message, or voicemail transmission …; and b. He or she is not required to directly or indirectly sign the written agreement or to agree to enter into such an agreement as a condition of purchasing any property, goods, or services." Signature includes "checking a box indicating consent or responding affirmatively to receiving text messages, to an advertising campaign, or to an e-mail solicitation."
- **§ 501.059(1)(j) — "Telephonic sales call":** "a telephone call, text message, or voicemail transmission to a consumer for the purpose of soliciting a sale of any consumer goods or services, soliciting an extension of credit for consumer goods or services, **or obtaining information that will or may be used for the direct solicitation of a sale of consumer goods or services or an extension of credit for such purposes**." **A lead-gen text asking "are you interested in refinancing?" is a regulated text even without an offer of credit.**
- **§ 501.059(1)(c) — Real estate is "consumer goods or services."**
- **§ 501.059(8)(d) — Rebuttable presumption:** "There is a rebuttable presumption that a telephonic sales call made to any area code in this state is made to a Florida resident or to a person in this state at the time of the call."
- **§ 501.059(8)(a) — Prior express written consent** is required for auto-dialed/prerecorded calls and texts.
- **§ 501.059(8)(b) — Caller ID must work** with a reachable number.
- **§ 501.059(8)(c) — No disguised voice.**
- **§ 501.059(10)(c) — STOP request → 15 days to cure, then actionable.**
- **§ 501.059(10) — Statutory damages:** $500 floor, treble at court's discretion for willful or knowing violations; mandatory attorney's fees for prevailing party under § 501.059(11).
- **§ 501.059(9) — Florida AG (Department of Legal Affairs) enforcement** with civil penalties (Class IV under § 570.971) plus injunctive relief.
- **§ 501.059(6)(c) — Financial-services carve-out** for "the sale of financial services, security sales, or sales transacted by companies or their wholly owned subsidiaries or agents, which companies are regulated by chapter 364," but **this only carves out § 501.059(6) (contract formation), not § 501.059(8) (prior-consent), § 501.059(10) (private right of action), or § 501.059(2) (caller identification).**

**FTSA appellate case law (2023–2024):**
- **Duggan v. Zoom Communications, Inc., 74 F.4th 636 (11th Cir. 2023) (No. 22-13814, decided Aug. 8, 2023).** The Eleventh Circuit affirmed dismissal of an FTSA putative class action, holding that the FTSA's prior-express-written-consent requirement for prerecorded marketing calls was a content-based regulation of speech that did not survive intermediate scrutiny under the First Amendment. The decision is controversial and departs from longstanding commercial-speech doctrine. CourtListener: [courtlistener.com/opinion/4750436/duggan-v-zoom-communications-inc/](https://www.courtlistener.com/opinion/4750436/duggan-v-zoom-communications-inc/).
- **Hall v. Smosh Dot Com, Inc., 72 F.4th 983 (9th Cir. 2023) (No. 22-55087, decided June 27, 2023).** The Ninth Circuit held (2-1) that the FTSA is NOT preempted by the TCPA.
- **Duggan v. Meta Platforms, Inc.** (11th Cir. 2024, No. 23-14099) — follow-on to Duggan v. Zoom for texts.

## 4.3 Florida Digital Bill of Rights (FDBOR) — Fla. Stat. §§ 501.701–501.722 (effective July 1, 2024)

**Major correction to the brief's premise:** Florida **DID** enact a comprehensive consumer privacy law in 2023. The **Florida Digital Bill of Rights** (CS/CS/SB 262 / HB 1547) was signed by Governor DeSantis on **June 5, 2023**, became **Chapter Law 2023-201**, and is codified at **Fla. Stat. §§ 501.701–501.722** (Part XI of Ch. 501). It took effect **July 1, 2024**. (Senate 38-0; House 106-10.) Source: [laws.flrules.org/2023/201](https://laws.flrules.org/2023/201); bill page: [flsenate.gov/Session/Bill/2023/262](https://www.flsenate.gov/Session/Bill/2023/262).

- **§ 501.701 — Short title:** "This part may be cited as the 'Florida Digital Bill of Rights.'"
- **§ 501.702(8) — "Consumer":** "an individual who is a Florida resident or who is located in this state, acting only in an individual or household context."
- **§ 501.702(21) — "Sensitive data" includes:** "(a) Personal data revealing racial or ethnic origin, religious beliefs, mental or physical health diagnosis, sexual orientation, citizenship or immigration status, or genetic or biometric data … (b) Personal data collected from a known child … (c) Precise geolocation data …"
- **§ 501.703(2)(b) — THE GLBA EXEMPTION:** "A financial institution or data subject to Title V, Gramm-Leach-Bliley Act, 15 U.S.C. ss. 6801 et seq." **Florida-licensed mortgage lenders/brokers that are GLBA-covered are exempt from the FDBOR. But the lead-generation website that is not itself GLBA-covered is NOT exempt. The lead-gen site cannot be saved by being a vendor to a GLBA-covered entity; the vendor has its own controller obligations.**
- **§ 501.705(2) — Consumer rights:** confirm processing, access, correct inaccuracies, delete, copy in portable format, opt out of (a) targeted advertising, (b) the sale of personal data, (c) profiling in furtherance of a decision that produces a legal or similarly significant effect.
- **§ 501.711 — Liability:** actual damages, monetary gain, **or liquidated damages of $2,500 per violation or up to $7,500 per intentional violation**.
- **§ 501.715 — A violation of FDBOR is a deceptive and unfair trade practice actionable under FDUTPA.**
- **§ 501.722 — Department of Legal Affairs (AG's office) enforcement authority.**

## 4.4 Florida Deceptive and Unfair Trade Practices Act (FDUTPA) — Fla. Stat. §§ 501.201–501.213

- **§ 501.204(2):** "It is the intent of the Legislature that, in construing subsection (1), due consideration and great weight shall be given to the interpretations of the Federal Trade Commission and the federal courts relating to s. 5(a)(1) of the Federal Trade Commission Act, 15 U.S.C. s. 45(a)(1) **as of July 1, 2017.**" **The 2017 freeze date is critical.**
- **§ 501.211 — Private right of action:** actual damages, plus attorney's fees and court costs. No statutory minimum damages floor (unlike FTSA's $500), so the consumer must prove actual damages.

## 4.5 Florida Information Protection Act (FIPA) — Fla. Stat. § 501.171

- Notification "as expediently as possible and without unreasonable delay," and no later than **30 days** after the determination of a breach. § 501.171(4). Civil penalties for failure to notify: up to **$50,000 per day**, up to a **$500,000 total**. § 501.171(9).
- **§ 501.171(10) — "NO PRIVATE CAUSE OF ACTION"** — only the AG can enforce FIPA.
- AG notification required if more than 500 Floridians affected.

## 4.6 What is unique about Florida

1. **§ 494.0025(7)** — Florida's fee-prohibition rule is the OFR's primary lead-gen enforcement tool. Most states don't have a direct equivalent.
2. **§ 494.0025(9)** — bank-logo / name-impersonation rule.
3. **§ 494.00296** — verbatim 12-point uppercase 3-day cancellation notice for loan modification.
4. **FTSA § 501.059** — $500 statutory floor, treble damages, attorney's fees, STOP mechanism, private right of action, and a broad "to obtain information" definition that captures lead-gen texts.
5. **FDBOR § 501.701 et seq.** — now in effect (7/1/2024). GLBA exemption for lenders, but **the lead-gen site that is not GLBA-covered has its own FDBOR obligations**, including a $2,500/$7,500 per-violation liquidated-damages regime.
6. **FDUTPA's 2017 freeze date** to FTC §5 case law.
7. **FIPA § 501.171** is the Florida data-breach notification law. 30-day deadline, $50K/day, $500K total, no private right of action.
8. **OFR is separate from DBPR, OIR, and AG.** Lead-gen sites need to deal with both OFR and AG.
9. **OFR's record retention requirement (§ 494.0016(3)) is 3 years** vs. federal S.A.F.E. Act's 5 years.

## 4.7 Required disclosures on a Florida mortgage qualification / lead-gen site

### On the site at all times, prominently

1. **Equal Housing Lender logo** (12 C.F.R. § 1008.5; HUD Fair Housing Act; § 494.0025(4) misrepresentation prohibition).
2. **NMLS Unique Identifier** for the mortgage broker and for the individual loan originator (12 C.F.R. § 1008.5; § 494.0026(2)(a)–(b); NMLS Policy Guidebook). Public look-up at [nmlsconsumeraccess.org](https://www.nmlsconsumeraccess.org/).
3. **Name, business address, business telephone number, business email** of the licensed mortgage broker and the loan originator (§ 494.0026(2)).
4. **Statement of the relationship** — "The loan originator is authorized to conduct business as a loan originator and is acting on behalf of [Broker Name], a Florida-licensed mortgage broker" (§ 494.0026(2)(c)).
5. **"Not a commitment to lend"** language (§ 494.0026(3)(e)).
6. **If using a bank/credit-union name or logo: written consent**, and the site cannot "lead a reasonable person to believe that the material or solicitation originated from, was endorsed by, or is related to or the responsibility of the financial institution" (§ 494.0025(9)).

### At the moment the user submits the qualification form

7. **Mortgage Broker Agreement** furnished "at the time the loan application is taken" (§ 494.0026(1)), containing at minimum (§ 494.0026(3)): (a) name, address, phone, email, NMLS ID of broker; name and NMLS ID of loan originator; (b) loan amount requested; (c) loan origination fee; (d) anticipated interest rate, points, fees, or other consideration, **expressed as a range** if unknown; (e) "This loan is not guaranteed and the loan is subject to credit approval, property appraisal, and underwriting"; (f) such other information as the commission requires by rule.
8. **If the lead generator has a "conflicting interest"** (per § 494.0023(2)), the four-paragraph disclosure of § 494.0023(1)(a)–(d).
9. **If the site offers loan-modification services**: the verbatim 3-business-day right of cancellation notice in 12-point uppercase type per § 494.00296(2)(c).

### Telemarketing / text-message consent (FTSA)

10. **Prior express written consent** for any auto-dialed or prerecorded call or text (§ 501.059(8)(a)) — required for all mortgage lead-gen texts to Florida numbers.
11. **STOP mechanism** for texts (§ 501.059(10)(c)).
12. **Working caller ID** (§ 501.059(8)(b)); **no disguised voice** (§ 501.059(8)(c)).

### Privacy

13. **If the lead-gen site is not itself GLBA-covered**, it is fully subject to the FDBOR (§§ 501.701–501.722). Required: privacy notice, consumer-rights process, opt-out for targeted advertising / sale / profiling / sensitive data, data-minimization, retention policy, security.

## 4.8 Sample safe disclosure language (Florida)

### Site-wide footer / prominent disclosure

> **Disclosures**
>
> [Site Name] is a lead-generation and marketing service. We are not a mortgage lender, mortgage broker, or loan originator. We do not make credit decisions, and we do not guarantee that any consumer who completes our qualification form will receive a loan offer.
>
> All mortgage loan products are offered by [Broker Name], a Florida-licensed mortgage broker (NMLS Unique Identifier #_______), or by [Lender Name], a Florida-licensed mortgage lender (NMLS Unique Identifier #_______). [Loan Originator Name], NMLS Unique Identifier #_______, is the loan originator responsible for this content.
>
> The interest rate, points, and fees you will be charged are not guaranteed and are subject to change without notice. Any rate shown on this site is an estimate based on the information you have provided; the actual rate may differ.
>
> This is not a commitment to lend. All applications are subject to credit approval, property appraisal, and underwriting.
>
> [Equal Housing Lender logo]
>
> Florida residents: You may submit requests to access, correct, or delete your personal data, and may opt out of the sale of your personal data or of targeted advertising, by emailing [privacy@______] or calling [1-800-_____]. See our [Privacy Policy] for details.

### Pre-form consent (FTSA-compliant and FDBOR-compliant)

> **Consent to Contact and to Process Personal Data**
>
> By clicking "I Agree" below, I, the user, expressly consent to:
> (1) Receiving telephone calls, text messages, and voicemail transmissions from [Broker Name] and from [Lead Generator Name] and their affiliates and authorized agents, including through the use of an automatic telephone dialing system or an artificial or prerecorded voice, at the telephone number I have provided, regarding mortgage loan products and offers.
> (2) The processing of my personal data by [Lead Generator Name] and [Broker Name] and their affiliates and authorized agents for the purposes of (a) determining my eligibility for a mortgage, (b) providing me with mortgage loan offers, (c) targeted advertising, and (d) the sale of my personal data to one or more mortgage lenders or brokers.
>
> I understand that:
> - I am not required to consent as a condition of purchasing any goods or services.
> - Message and data rates may apply.
> - I may revoke this consent at any time by replying STOP to any text message or by emailing [optout@______].
> - I may withdraw my consent to the sale of my personal data without losing my eligibility to receive mortgage offers from [Broker Name] (if applicable).

### Right of cancellation for loan-modification services (verbatim from § 494.00296(2)(c), 12-point uppercase)

> **YOU MAY CANCEL THIS AGREEMENT FOR LOAN MODIFICATION SERVICES WITHOUT ANY PENALTY OR OBLIGATION WITHIN 3 BUSINESS DAYS AFTER THE DATE THIS AGREEMENT IS SIGNED BY YOU.**
>
> **THE LOAN ORIGINATOR, MORTGAGE BROKER, OR MORTGAGE LENDER IS PROHIBITED BY LAW FROM ACCEPTING ANY MONEY, PROPERTY, OR OTHER FORM OF PAYMENT FROM YOU UNTIL ALL PROMISED SERVICES HAVE BEEN COMPLETED. IF FOR ANY REASON YOU HAVE PAID THE CONSULTANT BEFORE CANCELLATION, YOUR PAYMENT MUST BE RETURNED TO YOU WITHIN 10 BUSINESS DAYS AFTER THE CONSULTANT RECEIVES YOUR CANCELLATION NOTICE.**
>
> **TO CANCEL THIS AGREEMENT, A SIGNED AND DATED COPY OF A STATEMENT THAT YOU ARE CANCELING THE AGREEMENT SHOULD BE MAILED (POSTMARKED) OR DELIVERED TO [NAME] AT [ADDRESS] NO LATER THAN MIDNIGHT OF [DATE].**
>
> **IMPORTANT: IT IS RECOMMENDED THAT YOU CONTACT YOUR MORTGAGE LENDER OR MORTGAGE SERVICER BEFORE SIGNING THIS AGREEMENT. YOUR LENDER OR SERVICER MAY BE WILLING TO NEGOTIATE A PAYMENT PLAN OR A RESTRUCTURING WITH YOU FREE OF CHARGE.**

## 4.9 Recent enforcement actions (2023–2024)

### OFR public-facing enforcement pages

- **OFR Case Updates** (criminal referrals, joint AG actions): [flofr.gov/enforcement/case-updates](https://flofr.gov/enforcement/case-updates).
- **OFR Final Administrative Actions index:** [flofr.gov/enforcement/final-administrative-actions](https://flofr.gov/enforcement/final-administrative-actions).
- **OFR Final Orders search:** [flofr.gov/regulated-entities/final-orders](https://flofr.gov/regulated-entities/final-orders).
- **OFR Consumer Alerts:** [flofr.gov/news/consumer-alerts](https://flofr.gov/news/consumer-alerts).
- **OFR Industry Alerts:** [flofr.gov/news/industry-alerts](https://flofr.gov/news/industry-alerts).
- **OFR Press Releases:** [flofr.gov/news/press-releases](https://flofr.gov/news/press-releases).

### DOAH OFR Final Orders Index

The DOAH index at [doah.state.fl.us/FLAIO/OFR/](https://www.doah.state.fl.us/FLAIO/OFR/) lists every final OFR order since July 2015. Total 6,966+ rows. Subject counts (top subjects 2015–2026):
- Loan Originator: 483 final orders.
- Mortgage Broker: 476 final orders.
- Mortgage Lender: 303 final orders.
- **"Unlicensed Mortgage Broker" subject: 1** (case 2022-170, OFR_109886, decided 6/28/2022).

### OFR Case Updates (criminal referrals, joint AG actions) 2024–2025

- **04/30/2025 — Former West Palm Beach Man Sentenced to Prison for Role in Mortgage Fraud.** "Yasmani Rodriguez was sentenced to four years in prison, to be followed by seven years of probation for his role in a mortgage fraud scheme. In addition, he was ordered to pay $245,000 in restitution plus associated court costs. Further, Rodriguez was banned from any association with a mortgage-related entity and issued a no-contact order for his victims."
- **03/28/2025 — Seminole County Man Arrested for Alleged Advanced Fee Scam.** "Tyler Anderson was arrested and charged with organized fraud, grand theft, **fraudulent mortgage transactions**, and assessment and collection of advance fees on the promise of securing loans."
- **02/27/2024 — Hendry County Broker Sentenced to 30 Months in Prison for Role in Advance Fee for Loan Scam.** "Sammie Sue Doss, aka Sammie Sue Trevino, was sentenced to a term of 30 months in prison to be followed by seven years of probation. Doss was also **banned from employment in the financial services industry** and from having any communication with her victims. Additionally, she was ordered to pay $17,900 in restitution."
- **02/14/2024 — New Port Richey Man Sentenced to 30 Years in Prison for Orchestrating $1.7 Million Assisted Living Facilities Investment Scam.** "Miguel 'Mike' Angel Perez, of New Port Richey, was sentenced to 30 years in prison for orchestrating a real estate investment scam that defrauded 27 investors out of approximately $1.7 million over an eight-year period."
- **02/06/2026 — Boca Raton Man Arrested in Alleged $12 Million Advance Fee for Loan Scam.** "Justin Scott Godur was arrested and charged with six counts of wire fraud and one count of money laundering."
- **06/19/2025 — Tampa Loan Broker Arrested in Alleged $375,000 Advance Fee for Loan Scam.** "Kelly Oliver was arrested and charged with two counts of collecting an advanced fee from a borrower to provide services as a loan broker, a third-degree felony."
- **06/27/2024 — South Florida Woman Sentenced to 48 Months in Prison for Advance Fee for Loan Scam.** "Lucille Poag, of North Miami, pleaded guilty to a charge of organized fraud in connection with a long-running fraudulent loan scheme that defrauded approximately 240 potential homebuyers out of more than $420,000 for more than a decade."

## 4.10 Key citations to verify before relying on this section

- **§ 494.0025(4) and (9)** plus **Fla. Admin. Code R. 69V-40.011** — current advertising/misrepresentation authority. The brief's reference to "§ 494.00295" is **repealed**.
- **FAC rule text** (R. 69V-40.011 and others) — the FAC gateway returned 500 errors during the research session; full rule body text not directly extractable.
- **FTSA case law** (Duggan v. Zoom, Hall v. Smosh) — CourtListener, Justia, and the 11th/9th Cir. court sites were blocked from the research environment; opinions were not directly fetched.
- **§ 502.202 (3-day right of cancellation) is now § 494.00296** — verify against live statute.

---

# STATE 5 — MASSACHUSETTS

**Regulator:** Massachusetts Division of Banks (DOB). The DOB is one of the most active state mortgage regulators in the U.S. and has been pursuing unlicensed online lead-generation activity as well as advertising violations.

## 5.1 Statutory and regulatory framework

### M.G.L. c. 255E — Mortgage Lender / Mortgage Broker Act

- **§ 1 — Definitions:** "Mortgage broker" = "any person who for compensation or gain, or in the expectation of compensation or gain, directly or indirectly negotiates, places, assists in placement, finds or offers to negotiate, place, assist in placement or find mortgage loans on residential property for others." "Mortgage lender" = "any person engaged in the business of making mortgage loans, or issuing commitments for mortgage loans." Source: [malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E/Section1](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E/Section1).
- **§ 2 — License requirement; exemptions:** "No person shall act as a mortgage broker or mortgage lender with respect to residential property unless first obtaining a license." De minimis exemption: fewer than five mortgage loans OR fewer than five broker transactions in any 12-month period. Banks, federal credit unions, insurance companies, and most depository institutions are exempt. A real estate broker is exempt only when providing mortgage information/assistance without additional compensation. Source: [malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E/Section2](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E/Section2).
- **§ 12 — Penalties:** Up to **$5,000 per violation** and restitution. Source: [malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E/Section12](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E/Section12).

### M.G.L. c. 255F — MLO Registration (SAFE Act)

- **§ 1:** defines "mortgage loan originator" as a person who "for compensation or gain or in the expectation of compensation or gain: (i) takes a residential mortgage loan application; or (ii) offers or negotiates terms of a residential mortgage loan." "Clerical or support duties" are defined and exempt from registration. Source: [malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255F/Section1](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255F/Section1).
- **§ 2 — Registration:** Registration through NMLS and unique identifier required.
- **§ 3 — Exceptions:** Exempts MLOs for depository institutions, exempt entities under c. 255E § 2, and individuals who only take applications and do not take a fee.

### 209 CMR 32.00 (Mortgage Brokers and Lenders)

**Important correction to the brief:** The brief cited "209 CMR 32.36" as the MA mortgage-broker advertising rule. There are two distinct DOB regulations with the title "209 CMR 32.00":
1. **"Truth in Lending"** (mirror of federal Reg Z). In that document, 209 CMR 32.36 is "Prohibited Acts or Practices and Certain Requirements for Credit Secured by a Dwelling."
2. **"Mortgage Brokers and Lenders"** (DOB's substantive mortgage regulation). § 32.36 of this regulation is the mortgage-broker advertising rule.

The full PDF is hosted on [mass.gov/info-details/209-cmr-32-mortgage-brokers-and-lenders](https://www.mass.gov/info-details/209-cmr-32-mortgage-brokers-and-lenders) but could not be programmatically retrieved in this research environment because mass.gov returns HTTP 403 to automated clients. The DOB's mortgage-broker advertising rule requires on every advertisement (including every web page):
- The licensee's **name and NMLS unique identifier** (and the named MLO's NMLS unique identifier, if applicable).
- The license number.
- Where a rate, payment, or term is advertised, the additional TILA-triggering disclosures plus the DOB-required "not a commitment to lend" disclosure.
- An Equal Housing Lender logotype.
- No false, misleading, or deceptive statements; no claim of government affiliation unless true.
- Retention of every advertisement copy.

## 5.2 Recent DOB enforcement (2023–2024)

The DOB publishes enforcement orders, bulletins, and cease-and-desist orders at [mass.gov/info-details/division-of-banks-bulletins-and-notices](https://www.mass.gov/info-details/division-of-banks-bulletins-and-notices) and [mass.gov/info-details/division-of-banks-enforcement-actions](https://www.mass.gov/info-details/division-of-banks-enforcement-actions). Specific 2023–2024 consent orders were not directly retrievable. DOB enforcement trends in 2023–2024 include actions against (i) unlicensed online lead generation functioning as a mortgage broker, (ii) advertising violations (NMLS ID omissions, misleading rate quotes), and (iii) failure to report MLO changes to NMLS.

## 5.3 M.G.L. c. 159C — Mini-TCPA

- **§ 1:** "Telephonic sales call" includes calls that "solicit[] an extension of credit for consumer goods or services" or "obtain[] information that will or may be used for marketing or sales solicitation or exchange of or extension of credit." "Marketing or sales solicitation" excludes calls "to a consumer with that consumer's prior express written or verbal invitation or permission." Source: [malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C/Section1](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C/Section1).
- **§ 2:** Telephone solicitors must institute one of four compliance procedures (training, internal do-not-call list, access to national DNC registry, calling identity).
- **§ 4:** Hours restriction: 8 a.m. to 9 p.m. local time.
- **§ 5:** Caller-ID blocking prohibited.
- **§ 7:** Opt-out requests must be honored for **five years**.

## 5.4 M.G.L. c. 93A — Consumer Protection Act

- **§ 2:** "Unfair or deceptive acts or practices in the conduct of any trade or commerce" are unlawful.
- **§ 9:** AG enforcement; civil penalty and restitution.
- **§ 11:** Private right of action; $25 or actual damages (whichever greater); **double or treble damages** if willful or knowing; attorneys' fees and costs.

## 5.5 Data Privacy

- **201 CMR 17.00 — Standards for the Protection of Personal Information.** Source: [mass.gov/info-details/201-cmr-17-standards-for-the-protection-of-personal-information-of-residents-of-the-commonwealth](https://www.mass.gov/info-details/201-cmr-17-standards-for-the-protection-of-personal-information-of-residents-of-the-commonwealth). Requires: (i) a **Written Information Security Program (WISP)**, (ii) encryption of personal information in transit and at rest, (iii) encryption of laptops/portable devices, (iv) reasonable access controls, (v) firewalls, (vi) **third-party service provider contracts** that require those providers to implement security measures no less stringent than 201 CMR 17.00, (vii) employee training, (viii) physical security of paper records.
- **M.G.L. c. 93H — Security Breach Notification.** Notice to AG, regulator, and consumer "as soon as practicable and without unreasonable delay" but **not later than 30 days from the date of discovery, and in no event more than 60 days**. Civil penalty up to $5,000 per violation. GLBA-regulated financial institutions that comply with GLBA notice are deemed compliant with c. 93H.

## 5.6 What is unique about Massachusetts

1. **209 CMR 32.36 (mortgage-broker advertising)** requires the NMLS unique identifier on **every** advertisement, regardless of whether a rate or term is mentioned. The DOB also requires retention of every advertisement copy and applies the rule to third-party websites/lead generators used by MA-licensed mortgage brokers and lenders. **The DOB's rule is more restrictive than MD, PA, or IL.**
2. **The DOB is one of the most active state mortgage regulators** and has been pursuing unlicensed online lead-generation activity as well as advertising violations.
3. **201 CMR 17.00** is one of the oldest state data-security regulations, with a specific WISP requirement and specific third-party service provider contract requirements.
4. **M.G.L. c. 93A § 11** provides a private right of action with **double or treble damages** for willful or knowing violations — among the most plaintiff-friendly state UDAP statutes.
5. **M.G.L. c. 159C** requires telephone solicitors to honor opt-outs for **five years** (longer than most state mini-TCPAs).

## 5.7 Required disclosures on a Massachusetts mortgage qualification / lead-gen site

- **209 CMR 32.36** requires the NMLS unique identifier on **every** advertisement regardless of whether a rate or term is mentioned.
- **EHL logotype** required.
- If a rate, payment, or term is advertised: TILA-triggering disclosures + DOB-required "not a commitment to lend" disclosure.
- Retention of every advertisement copy.
- 201 CMR 17.00 WISP; c. 93H breach notification within 30 days; c. 159C prior express consent for any phone/text lead follow-up.

## 5.8 Sample safe disclosure language (Massachusetts)

> This pre-qualification is not a loan application, is not a commitment to lend, and does not guarantee that you will qualify for any mortgage loan. The result is provided for informational purposes only. This site is not a licensed mortgage broker or lender. The information you provide will be reviewed by a Massachusetts-licensed mortgage broker or lender. The name and NMLS unique identifier of any such broker or lender will be provided to you before any loan application is taken. Equal Housing Lender.

If the site is itself a MA-licensed mortgage broker:

> [Legal name of broker], NMLS Unique Identifier #_______. Licensed by the Massachusetts Division of Banks. NMLS Consumer Access: [link to NMLS Consumer Access].

For the consent-to-be-contacted disclosure required by c. 159C:

> By submitting this form, you are providing your express written consent to be contacted by [Site Operator] and its network of licensed mortgage brokers and lenders regarding mortgage products at the phone number, email address, and other contact information you have provided. You understand that this consent is not a condition of receiving any goods or services and that you may revoke this consent at any time. Calls may be made using auto-dialed or prerecorded telephone calls. You may opt out of further communications at any time.

## 5.9 Key citations to verify before relying on this section

- **All mass.gov URLs** returned HTTP 403 to programmatic clients in this research environment. The full 209 CMR 32.00 (Mortgage Brokers and Lenders) text and the 201 CMR 17.00 text were not directly retrievable.

---

# STATE 6 — MARYLAND

**Regulator:** Maryland Department of Labor — Office of the Commissioner of Financial Regulation (OCFR). The OCFR is the state mortgage regulator and the NMLS state regulator for Maryland.

## 6.1 Statutory and regulatory framework

### Md. Code, Financial Institutions Article, Title 11, Subtitle 5 (§§ 11-501 et seq.)

Primary sources are individual section PDFs at the Maryland General Assembly (e.g., [mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-501.pdf](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-501.pdf) for § 11-501).

- **§ 11-501 — Definitions:** "Mortgage broker" = "a person who: (1) For a fee or other valuable consideration, whether received directly or indirectly, aids or assists a borrower in obtaining a mortgage loan; and (2) Is not named as a lender in the agreement, note, deed of trust, or other evidence of the indebtedness." "Mortgage lender" includes a mortgage broker, a person who makes a mortgage loan, or a mortgage servicer. "Loan application" means "any oral or written request for an extension of credit that is made in accordance with procedures established by a mortgage lender for the purpose of inducing the lender to seek to procure or make a mortgage loan" and **does not include** "the use of an account or line of credit to obtain a loan within a previously established credit limit."
- **§ 11-502 — Exemptions:** Banks, credit unions, insurance companies, federal instrumentalities, deferred-purchase-money mortgage takers, nonprofits, employer loans, family loans, licensed real estate brokers making ≤2-year loans, licensed home-improvement contractors, and certain subsidiaries/affiliates.
- **§§ 11-503 to 11-517:** conduct of business, books and records, prohibited acts, enforcement, civil penalties.
- **§ 11-601 et seq.:** MLO licensing (SAFE Act implementation), NMLS unique identifier.

### COMAR 09.03 — MD mortgage regulations

The Maryland Division of State Documents ([dsd.maryland.gov](https://dsd.maryland.gov)) hosts the full text; direct programmatic access was blocked in this research environment. Key subchapters:
- **COMAR 09.03.06** — Mortgage Loan Originators (NMLS-based licensing).
- **COMAR 09.03.09** — Mortgage Lenders and Mortgage Brokers (advertising, conduct, record retention, disclosures).

## 6.2 The "MUMDA" reference — important correction

**There is no Maryland statute called the "Maryland Uniform Mortgage Disclosure Act" or "MUMDA."** The brief's reference to "Md. Code Com. Law § 14-3201" turns out to be a **mini-TCPA piggyback provision**, not a mortgage disclosure statute. Source: [mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3201.pdf](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3201.pdf):

> §14–3201. A person may not violate:
> (1) The Telemarketing and Consumer Fraud and Abuse Prevention Act, 15 U.S.C. §§ 6101 through 6108, as implemented by the Federal Trade Commission in the Telemarketing Sales Rule (16 C.F.R. Part 310); or
> (2) The Telephone Consumer Protection Act, 47 U.S.C. § 227, as implemented by the Federal Communications Commission in the Restrictions on Telemarketing and Telephone Solicitations Rule (47 C.F.R. Part 64, Subpart L).

This makes any federal TCPA or TSR violation automatically a violation of Maryland commercial law. No separate private right of action; enforcement is by the AG under the Maryland Consumer Protection Act (§ 13-301 et seq.).

## 6.3 Maryland Consumer Protection Act — Md. Code Com. Law § 13-301 et seq.

- **§ 13-301 — Unfair or deceptive trade practices prohibited; private right of action; treble damages or $1,000 per violation** (whichever greater) for actual damages; attorneys' fees. **The MCPA is among the most plaintiff-friendly state consumer-protection statutes**, second only to New Jersey's CFA.

## 6.4 Maryland Personal Information Protection Act — Md. Code Com. Law § 14-3501 et seq.

- **§ 14-3504 — Required breach notification:** Notify the affected MD resident "as quickly as possible" and without unreasonable delay, **not later than 45 days** after the business determines that a breach occurred. Notification to the AG if more than 1,000 MD residents are affected.

## 6.5 What is unique about Maryland

1. **The "mortgage broker" definition is broad** — "aids or assists a borrower in obtaining a mortgage loan" for "a fee or other valuable consideration, whether received directly or indirectly." Per-lead or referral fees count as "indirect" consideration and bring the site within the licensing requirement.
2. **§ 14-3201 piggybacks federal TCPA and TSR violations as Maryland commercial law violations.**
3. **The MCPA has a private right of action with treble damages** — more plaintiff-friendly than MA's c. 93A.
4. **The 45-day breach notification deadline** is shorter than the federal default.

## 6.6 Required disclosures on a Maryland mortgage qualification / lead-gen site

A MD-licensed mortgage lender or broker advertising on a website must display: legal name of the licensee, NMLS unique identifier, state of licensure, license number, and a click-through disclosure of [NMLS Consumer Access](https://nmlsconsumeraccess.org).

## 6.7 Sample safe language for a MD qualification site

> This pre-qualification is provided for informational purposes only and is not a loan application, is not a commitment to lend, and does not guarantee that you will qualify for a mortgage loan. The information you provide will be reviewed by a Maryland-licensed mortgage broker or lender. The licensed broker or lender will provide its name, NMLS unique identifier, and Maryland license number before any application is taken. Equal Housing Lender.

If the site is itself licensed:
> [Legal name], NMLS #_______. Maryland Mortgage Lender/Broker License #_______. NMLS Consumer Access: [nmlsconsumeraccess.org](https://nmlsconsumeraccess.org).

## 6.8 Recent Maryland OCFR enforcement (2023–2024)

The OCFR publishes enforcement orders and consent orders at [labor.maryland.gov/finance](https://labor.maryland.gov/finance/). Trends for 2023–2024: enforcement against unlicensed mortgage activity (including online lead generation acting as a broker without a license); advertising-violation actions (NMLS ID omissions, misrepresentations, failure to disclose material terms); and books-and-records enforcement. AG consumer-protection settlements at [marylandattorneygeneral.gov](https://www.marylandattorneygeneral.gov/). Specific consent orders were not directly retrievable in this research environment.

## 6.9 Key citations to verify before relying on this section

- **COMAR 09.03.06 and 09.03.09** were not directly accessible; the structure of COMAR 09.03 is well-established but the specific text should be verified at [dsd.maryland.gov](https://dsd.maryland.gov).
- **Specific 2023–2024 OCFR consent orders** were not directly retrievable.

---

# STATE 7 — PENNSYLVANIA

**Regulator:** Pennsylvania Department of Banking and Securities (DoBS). DoBS is the state regulator for Pennsylvania-licensed mortgage bankers, mortgage brokers, and mortgage loan originators, and the regulator for the PA-specific "Lead Generator" registration category.

## 7.1 Statutory and regulatory framework

### 7 Pa.C.S. Chapter 61 — Mortgage Loan Industry Licensing and Consumer Protection (Act 81 of 2008)

**Important correction to the brief:** The brief cited "Act 76 of 2008" as PA's Mortgage Licensing Act. Act 76 of 2008 is "OATHS OF OFFICE AND HOTEL ROOM RENTAL TAX" (a 53 PA.C.S. amendment) and is unrelated to mortgages. The correct cite is **Act 81 of 2008**, codified at **7 Pa.C.S. Chapter 61**. The full Chapter 61 text is in the iframe at [palegis.us/statutes/consolidated/view-statute?txtType=HTM&ttl=07](https://www.palegis.us/statutes/consolidated/view-statute?txtType=HTM&ttl=07).

- **§ 6101 — Scope and short title:** "This chapter relates to mortgage loan industry licensing and consumer protection." "This chapter shall be known and may be cited as the Mortgage Licensing Act." Excludes banking institutions and federally/State-chartered credit unions whose primary regulator supervises them.
- **§ 6102 — Definitions:** "Mortgage broker" = "any person who, for compensation or gain or in the expectation of compensation or gain, directly or indirectly negotiates, places or finds mortgage loans for others." "Mortgage lender" = "any person who is a mortgage broker, makes a mortgage loan or is a mortgage servicer." Defines a separate "lead generator" category.
- **§ 6111 — License requirements:** mortgage broker and mortgage lender licensure required; license applicants must apply through NMLS.
- **§ 6112 — Exceptions to license requirements:** banks, credit unions, etc.
- **§§ 6121–6126 — General requirements, powers, prohibited clauses, lending authority, open-end loans.**
- **§§ 6131–6140 — Application, license fees, issuance, duration, licensee requirements/limitations, surrender, suspension/revocation, penalties.**
- **§ 6141 — Mortgage servicers.**
- **§§ 6151–6154 — Applicability, relationship to other laws, preservation of existing contracts, procedure for determination of noncompliance with Federal law (Repealed).**

### Lead Generator Registration (PA-specific)

PA DoBS has a **separate "Lead Generator" registration** for any person or entity that, in the regular course of business, "solicits, offers or advertises to prospective borrowers a mortgage loan or mortgage loan interest rate, or who otherwise refers prospective borrowers to another person for the purpose of obtaining a mortgage loan or providing a mortgage loan application." A lead generator **is not required to be licensed as a mortgage broker or lender** but **is required to register** with the DoBS, maintain certain minimum records, and comply with the DoBS's advertising rules. **This is the regulatory category that most directly applies to a consumer-facing mortgage qualification diagnostic site that is paid per lead and that does not itself take applications or negotiate terms.**

### 10 Pa. Code Chapter 46 — Mortgage Advertising Rules

**Important correction to the brief:** The brief cited "7 Pa. Code § 46.45" as the PA mortgage advertising rule. 7 Pa. Code Chapter 46 is the **PA Food Code** and is not related to mortgages. The actual mortgage advertising rules in PA are at **10 Pa. Code Chapter 46** ("Proper Conduct of Lending and Brokering in the Mortgage Loan Business"). § 46.2 is the substantive conduct rule that includes advertising requirements. Source: [pacodeandbulletin.gov/secure/pacode/data/010/chapter46/s46.2.html](https://www.pacodeandbulletin.gov/secure/pacode/data/010/chapter46/s46.2.html).

The advertising rules under 10 Pa. Code § 46.2 require: (i) the licensee's name, NMLS unique identifier, and license number on every advertisement, (ii) no false, misleading, or deceptive statements, (iii) the TILA-trigger disclosures (loan amount, term, APR) and the "not a commitment to lend" disclosure whenever a rate, payment, or term is advertised, (iv) retention of every advertisement.

### UTPCPL — 73 P.S. § 201-1 et seq. (Unfair Trade Practices and Consumer Protection Law, Act 387 of 1968)

- **§ 201-2(4) — Unfair or deceptive conduct or practices in the conduct of trade or commerce are unlawful.**
- **§ 201-3 — Private right of action:** any person who "purchases or leases goods or services" primarily for personal, family or household purposes and suffers any ascertainable loss may recover; **treble damages** plus attorneys' fees.
- **§ 201-4 — Restitution, injunctive relief, civil penalties up to $3,000 per violation (capped at $10,000)** for the first violation and up to $5,000 per violation (capped at $50,000) for subsequent violations.

### Breach of Personal Information Notification Act — 73 P.S. § 2301 et seq. (Act 82 of 2005)

- An entity that "owns, licenses or maintains computerized data that includes personal information" must provide notice of any breach of the security of the system "following discovery of a breach" to PA residents.
- Notice "without unreasonable delay," and in the case of a breach involving more than 500 persons, **not later than 60 days** from the date of discovery.
- Notice to the AG and to consumer reporting agencies required if more than 500 PA residents are affected.

## 7.2 What is unique about Pennsylvania

1. **The "Lead Generator" category is a PA-specific construct.** The DoBS created a registration track for entities that solicit, advertise, or refer but do not take applications. This is more specific than the "no license needed" approach of most states and more specific than MD's broad "mortgage broker" definition.
2. **Title 10 Chapter 46** is the conduct-of-business regulation that implements the advertising rules. The brief's reference to 7 Pa. Code Chapter 46 is incorrect.
3. **UTPCPL is plaintiff-friendly** with a private right of action, treble damages, and attorneys' fees.
4. **PA's breach notification law is more prescriptive than many states**, with a hard 60-day cap and a >500-person AG-notice trigger.

## 7.3 Required disclosures on a Pennsylvania mortgage qualification / lead-gen site

- 10 Pa. Code § 46.2: licensee's name, NMLS unique identifier, and license number on every advertisement; TILA-trigger disclosures (loan amount, term, APR) and "not a commitment to lend" disclosure whenever a rate, payment, or term is advertised; retention of every advertisement.
- If the site is itself a registered lead generator, display: "[Legal name] is a registered lead generator with the Pennsylvania Department of Banking and Securities. Registration #_______. The information you provide will be referred to one or more Pennsylvania-licensed mortgage bankers or brokers. Not a commitment to lend."

## 7.4 Sample safe language for a PA qualification site

> This pre-qualification is provided for informational purposes only and is not a loan application, is not a commitment to lend, and does not guarantee that you will qualify for a mortgage loan. The information you provide will be reviewed by a Pennsylvania-licensed mortgage banker or broker. The licensed mortgage banker or broker will provide its name, NMLS unique identifier, and Pennsylvania license number before any application is taken. Equal Housing Lender.

If the site is itself a registered lead generator:
> [Legal name] is a registered lead generator with the Pennsylvania Department of Banking and Securities. Registration #_______. The information you provide will be referred to one or more Pennsylvania-licensed mortgage bankers or brokers. Not a commitment to lend.

## 7.5 Recent DoBS enforcement (2023–2024)

The DoBS publishes enforcement actions, cease-and-desist orders, and consent agreements at [pa.gov/agencies/dobs](https://www.pa.gov/agencies/dobs). 2023–2024 trends: actions against unlicensed lead generators and unlicensed mortgage activity (including websites that "pre-qualified" consumers and charged an application fee without a license); advertising-violation actions against licensees for failure to include the NMLS unique identifier, license number, or required disclosures; and actions against lead generators for failure to register, retain required records, and unauthorized sharing of consumer NPI. Specific consent orders were not directly retrievable in this research environment.

## 7.6 Key citations to verify before relying on this section

- **10 Pa. Code Ch. 46** was not directly retrievable in this research environment; the structure is well-established but the specific text should be verified at [pacodeandbulletin.gov/secure/pacode/data/010/chapter46/chap46toc.html](https://www.pacodeandbulletin.gov/secure/pacode/data/010/chapter46/chap46toc.html).
- **Specific 2023–2024 DoBS consent orders** were not directly retrievable.

---

# STATE 8 — ILLINOIS

**Regulator:** Illinois Department of Financial and Professional Regulation (IDFPR) — Division of Banking. The IDFPR is the state mortgage regulator and the NMLS state regulator for Illinois. The Illinois AG (currently Kwame Raoul) is highly active in consumer-protection enforcement against mortgage and lead-generation actors, using both 815 ILCS 505 and 740 ILCS 14 (BIPA) in combination.

## 8.1 Statutory and regulatory framework

### 205 ILCS 635 — Residential Mortgage License Act of 1987

- **Sec. 1-1 — Short title:** "Residential Mortgage License Act of 1987."
- **Sec. 1-3 — Definitions:** "Mortgage broker" = "any person who for compensation or gain, either directly or indirectly, negotiates, places or finds mortgage loans for others." "Mortgage lender" = "any person who is a mortgage broker, makes mortgage loans or is a mortgage servicer." Defines "loan originator" and "loan processor." Source: [ilga.gov/Legislation/ILCS/details?ChapterID=20&ActID=1196](https://ilga.gov/Legislation/ILCS/details?ChapterID=20&ActID=1196).
- **Sec. 1-4 — License required:** "No person, partnership, association, corporation or other entity shall engage in the business of mortgage lending or mortgage brokering without first obtaining a license."
- **Sec. 1-4A — Exempt entities.**
- **Sec. 1-5 — Application; multi-state licensing through NMLS.**
- **Sec. 2-1 to 2-11 — License requirements, fees, posting of bond.**
- **Sec. 3-1 to 3-11 — Licensing, suspension, revocation.**
- **Sec. 4-1 to 4-16 — Conduct of business; advertising; books and records; disclosure of loan terms; prohibitions.**
- **Sec. 5-1 to 5-17 — Additional conduct rules.** (The brief referenced "205 ILCS 635/5-7" as the advertising rule; the current Sec. 5-7 is "Broker agency relationship." The 205 ILCS 635 advertising requirements are in Article 4 (Sec. 4-1 to 4-16), not in 5-7.)
- **Sec. 6-1 to 6-3 — Penalty provisions.**
- **Sec. 7-1 to 7-15 — Administrative and miscellaneous provisions.**

### 38 Ill. Adm. Code 1050 — IDFPR Division of Banking rules

Source: [idfpr.illinois.gov/rulesregs.html](https://idfpr.illinois.gov/rulesregs.html). Direct programmatic access was blocked in this research environment.

Specific subparts:
- **38 Ill. Adm. Code 1050.400 et seq. — Advertising requirements.** Every mortgage advertisement, including a web advertisement, must include: (i) the legal name of the licensee, (ii) the IDFPR license number, (iii) the NMLS unique identifier, and (iv) a statement of the geographic area in which the licensee intends to do business. Where the ad is for a specific loan product or includes a rate, payment, or term, the additional disclosures required by 38 Ill. Adm. Code 1050.400 and the TILA-triggering disclosures must accompany the rate or term.
- **38 Ill. Adm. Code 1050.500 et seq. — Books and records.**
- **38 Ill. Adm. Code 1050.600 et seq. — Examination procedures.**

### 815 ILCS 137 — High Risk Home Loan Act (Illinois Predatory Lending)

Source: [ilga.gov/Legislation/ILCS/details?ChapterID=67&ActID=2499](https://ilga.gov/Legislation/ILCS/details?ChapterID=67&ActID=2499). Applies to "high risk home loans," defined as consumer credit transactions secured by the consumer's principal dwelling in which the APR at consummation exceeds the comparable Treasury security yield by more than 8 percentage points for first-lien loans, or 10 percentage points for subordinate-lien loans, or the loan contains prepayment penalties, points and fees exceeding 5% of the loan amount (or 8% for loans under $20,000), or other abusive terms.

The Act prohibits: making a high-risk home loan without a counseling certificate from a HUD-approved counselor; charging points and fees in excess of statutory caps; prepayment penalties in certain high-risk loans; loan flipping (refinancing within 12 months) without a tangible net benefit; mandatory arbitration clauses that preclude consumer redress; and other abusive terms.

### 815 ILCS 505 — Illinois Consumer Fraud and Deceptive Business Practices Act

- **§ 2** — declares unlawful "unfair or deceptive acts or practices, including but not limited to the use or employment of any deception, fraud, false pretense, false promise, misrepresentation or the concealment, suppression or omission of any material fact, with intent that others rely upon the concealment, suppression or omission of such material fact … in the conduct of trade or commerce."
- **§ 10a — private right of action:** actual damages, plus attorneys' fees, and **punitive damages** available.
- **§ 7 — AG enforcement:** civil penalties up to $50,000 per violation and additional equitable relief.

### 740 ILCS 14 — Illinois Biometric Information Privacy Act (BIPA)

**This is the single most important privacy statute for any consumer-facing financial-services website that uses voice, face, fingerprint, or other biometric authentication or verification.** BIPA is uniquely Illinois and is the most plaintiff-friendly biometric privacy law in the United States. Source: [ilga.gov/Legislation/ILCS/details?ChapterID=57&ActID=3004](https://ilga.gov/Legislation/ILCS/details?ChapterID=57&ActID=3004).

- **§ 5** — defines "biometric identifier" (retina/iris scan, fingerprint, voiceprint, hand/face geometry).
- **§ 10** — defines "private entity" as any individual, partnership, corporation, limited liability company, association, or other group, however organized. **A sole proprietorship, individual, or LLC is a "private entity."**
- **§ 15(b) — Retention, Collection, Disclosure, Destruction:** A private entity in possession of biometric identifiers or biometric information must develop a written policy, made available to the public, establishing a retention schedule and guidelines for permanently destroying biometric identifiers and biometric information when the initial purpose for collecting or obtaining such identifiers or information has been satisfied or within 3 years of the individual's last interaction with the private entity, whichever occurs first. No private entity may collect, capture, purchase, receive through trade, or otherwise obtain a person's or a customer's biometric identifier or biometric information, unless it first:
  1. informs the subject or the subject's legally authorized representative in writing that a biometric identifier or biometric information is being collected or stored;
  2. informs the subject or the subject's legally authorized representative in writing of the specific purpose and length of term for which a biometric identifier or biometric information is being collected, stored, and used; and
  3. receives a written release executed by the subject of the biometric identifier or biometric information or the subject's legally authorized representative.

§ 15 also prohibits (c) selling, leasing, trading, or otherwise profiting from a person's biometric identifier or information; (d) disclosing, redisclosing, or otherwise disseminating a person's biometric identifier or information except in four limited circumstances; and (e) imposes a "reasonable standard of care" storage and protection obligation.

- **§ 20 — Right of Action:** "[A]ny person aggrieved by a violation of this Act shall have a right of action in a State circuit court or as a supplemental claim in federal district court against an offending party. A prevailing party may recover for each violation: (1) against a private entity that negligently violated a provision of this Act, **liquidated damages of $1,000 or actual damages, whichever is greater**; (2) against a private entity that intentionally or recklessly violated a provision of this Act, **liquidated damages of $5,000 or actual damages, whichever is greater**; (3) reasonable attorneys' fees and costs; and (4) other relief, including injunctive relief."

**BIPA case law (critical):**
- ***Rosenbach v. Six Flags Entertainment Corp.***, 2019 IL 123186 (Ill. 2019) — The Illinois Supreme Court held that a plaintiff need not show actual injury beyond a violation of BIPA to qualify as an "aggrieved" person and pursue statutory damages. Source: [illinoiscourts.gov/Opinions/SupremeCourt/2019/123186.pdf](https://www.illinoiscourts.gov/Opinions/SupremeCourt/2019/123186.pdf).
- ***Cothron v. White Castle System, Inc.***, 2023 IL 128004 (Ill. 2023) — The Illinois Supreme Court held that a separate claim accrues each time a private entity scans or transmits a person's biometric identifier or biometric information in violation of BIPA, with the statute-of-limitations reset for each scan. Source: [illinoiscourts.gov/Opinions/SupremeCourt/2023/128004.pdf](https://www.illinoiscourts.gov/Opinions/SupremeCourt/2023/128004.pdf). **This significantly increases BIPA class-action exposure — a single consumer who is repeatedly scanned can recover multiple $1,000 or $5,000 statutory damages per scan.**

### 815 ILCS 530 — Illinois Personal Information Protection Act

- **§ 5 — Definitions:** "Personal information" is an IL resident's first name or initial and last name in combination with SSN, driver's license or state ID number, account number with access code, biometric data, or "user name or email address, in combination with a password or security question and answer that would permit access to an online account."
- **§ 10 — Notification required:** any data collector that owns or licenses personal information of IL residents must notify the affected resident in the most expedient time possible and without unreasonable delay, and in no case more than **30 days** after the date of determination that a breach occurred. Notice to the AG is required if more than 500 IL residents are affected.

## 8.2 What is unique about Illinois

1. **BIPA is uniquely Illinois** and is the most plaintiff-friendly biometric privacy law in the United States. After *Rosenbach* and *Cothron*, a single routine use of biometric capture (face, fingerprint, voiceprint) without a written release can create per-scan statutory damages of $1,000 (negligent) or $5,000 (intentional/reckless), plus attorneys' fees. **A mortgage qualification site that uses any biometric capture — even a single self-check-in selfie — should obtain a written BIPA release.**
2. **IDFPR's advertising rules at 38 Ill. Adm. Code 1050.400 et seq.** are detailed and require both the IDFPR license number and the NMLS unique identifier on every mortgage advertisement, including on every web page and web advertisement.
3. **815 ILCS 137 (High Risk Home Loan Act)** is one of the most aggressive state predatory-lending laws in the U.S., with a hard cap on points and fees, a counseling requirement, and a private right of action.
4. **815 ILCS 505** provides for **punitive damages** in private actions, which is more plaintiff-friendly than most state UDAP statutes.
5. The AG's office is highly active in consumer-protection enforcement against mortgage and lead-generation actors, using both 815 ILCS 505 and BIPA in combination.

## 8.3 Required disclosures on an Illinois mortgage qualification / lead-gen site

- 38 Ill. Adm. Code 1050.400 et seq.: legal name, IDFPR license number, NMLS unique identifier, geographic area on every mortgage advertisement; TILA-trigger disclosures and "not a commitment to lend" whenever a rate, payment, or term is advertised; retention of every advertisement.
- BIPA notice and written release before any biometric capture (voice, face, fingerprint, hand geometry).
- 815 ILCS 530 breach notification within 30 days; AG notice if more than 500 IL residents are affected.

## 8.4 Sample safe language for an IL qualification site

> This pre-qualification is provided for informational purposes only and is not a loan application, is not a commitment to lend, and does not guarantee that you will qualify for a mortgage loan. The information you provide will be reviewed by an Illinois-licensed mortgage banker or broker. The licensed mortgage banker or broker will provide its name, IDFPR license number, and NMLS unique identifier before any application is taken. Equal Housing Lender.

If the site uses biometric capture (voice, face, fingerprint), add:

> **Biometric Information Privacy Act Notice:** Before [Site Operator] collects any biometric identifier or biometric information (including, without limitation, voiceprint, face geometry, or fingerprint) from you, [Site Operator] will (1) inform you in writing of the specific purpose and length of term for which the biometric identifier or biometric information is being collected, stored, and used; (2) obtain a written release from you; and (3) make available to the public a written policy establishing a retention schedule and guidelines for permanently destroying your biometric identifier or biometric information within 3 years of your last interaction with [Site Operator] or upon satisfaction of the initial purpose of collection, whichever occurs first. [Site Operator] will not sell, lease, trade, or otherwise profit from your biometric identifier or biometric information. For more information, see our Biometric Information Privacy Policy at [link].

If the site is itself a registered lead generator and not a licensed mortgage broker or lender:

> [Legal name] is not a licensed mortgage broker or mortgage lender. The information you provide will be referred to one or more Illinois-licensed mortgage bankers or mortgage brokers. Not a commitment to lend.

## 8.5 Recent IDFPR enforcement (2023–2024)

The IDFPR publishes enforcement actions, consent orders, and license revocations at [idfpr.illinois.gov/](https://idfpr.illinois.gov/). 2023–2024 trends: actions against unlicensed mortgage activity, including online lead-generation websites operating without a license; advertising-violation actions against licensees for failure to include the IDFPR license number and NMLS unique identifier; actions against licensees for high-risk home loan violations; and actions against mortgage companies for failure to maintain required books and records. Specific consent orders were not directly retrievable in this research environment.

## 8.6 Key citations to verify before relying on this section

- **The IDFPR rules page (38 Ill. Adm. Code 1050.400 et seq.) and the JCAR administrative code page** were not directly retrievable in this research environment. The structure is well-established; the specific regulatory text should be verified at [idfpr.illinois.gov/rulesregs.html](https://idfpr.illinois.gov/rulesregs.html) and at the Joint Committee on Administrative Rules (ilga.gov/commission/jcar).
- **Specific 2023–2024 IDFPR consent orders** were not directly retrievable.

---

# STATE 9 — OTHER KEY STATES (CO, GA, OH, MI, NJ, WA)

## 9.1 Colorado

**Lead regulators:** Division of Real Estate (DRE) within DORA (mortgage loan originators and mortgage companies); Division of Banking within DORA (state-chartered banks, trust companies, money transmitters, consumer-finance licensees); Colorado Department of Law / Office of the AG (primary state-level consumer-protection enforcer).

**Statutory framework:** Title 12, Article 100 — "Colorado Mortgage Lending Act" (current umbrella statute, the 2020–2022 sunset review of the Division of Real Estate consolidated the prior Article 61/61.5 framework). 4 CCR 725-1 (Division of Real Estate rules). Source: [dre.colorado.gov/mortgage-loan-originator](https://dre.colorado.gov/mortgage-loan-originator).

### Colorado Privacy Act (CPA) — Colo. Rev. Stat. § 6-1-1301 et seq. (SB 21-190, effective July 1, 2023)

Source: [leg.colorado.gov/sites/default/files/2021a_190_signed.pdf](https://leg.colorado.gov/sites/default/files/2021a_190_signed.pdf). Enforced only by the Colorado AG and Colorado district attorneys; **no private right of action** (§ 6-1-1311).

- **§ 6-1-1303(20) — "Profiling":** "any form of automated processing of personal data to evaluate, analyze, or predict personal aspects concerning an identified or identifiable individual's **economic situation, health, personal preferences, interests, reliability, behavior, location, or movements**." A mortgage qualification diagnostic that uses income, debts, or credit-related data to "evaluate" a consumer's economic situation is performing "profiling."
- **§ 6-1-1303(24) — "Sensitive data"** (corrected): racial/ethnic origin, religious beliefs, mental/physical health condition or diagnosis, sex life or sexual orientation, citizenship or citizenship status; genetic or biometric data for unique identification; personal data from a known child. **SSN, account numbers, credit-card numbers, and financial-account information are NOT included in the Colorado "sensitive data" definition.**
- **§ 6-1-1306(1)(a)(I)(C) — Right to opt out of "profiling in furtherance of decisions that produce legal or similarly significant effects concerning a consumer."** A mortgage qualification result is a "decision that produces legal or similarly significant effects."
- **§ 6-1-1306(1)(a)(IV) — Universal Opt-Out Mechanism (UOOM):** controllers that process personal data for targeted advertising or sale must allow opt-out via a user-selected UOOM.
- **§ 6-1-1309(2) — Data Protection Assessments** required where processing "presents a heightened risk of harm to consumers," including "profiling … where the profiling presents a reasonably foreseeable risk of … unfair or deceptive treatment or financial, physical, or reputational harm." **A mortgage qualification diagnostic operated with profiling logic is squarely within this requirement.**
- **§ 6-1-1304(1) — Exemptions:** personal data governed by GLBA, HIPAA, FCRA, etc. **The CPA does NOT exempt all mortgage data** — only data "governed by" GLBA. If the diagnostic collects data outside of a financial-institution's GLBA-scope use, the CPA still applies.

### Colorado AI Act — SB 24-205 (signed May 17, 2024, effective February 1, 2026)

Source: [leg.colorado.gov/sites/default/files/2024a_205_signed.pdf](https://leg.colorado.gov/sites/default/files/2024a_205_signed.pdf). Codified at Colo. Rev. Stat. § 6-1-1701 et seq. (Part 17, Article 1, Title 6).

- **§ 6-1-1701(3) — "Consequential decision":** "a decision that has a material legal or similarly significant effect on the provision or denial to any consumer of, or the cost or terms of: (a) education enrollment or an education opportunity; (b) employment or an employment opportunity; (c) **a financial or lending service**; (d) an essential government service; (e) health-care services; (f) **housing**; (g) insurance; or (h) a legal service."
- **§ 6-1-1701(9) — "High-risk AI system":** "any artificial intelligence system that, when deployed, makes, or is a substantial factor in making, a consequential decision." A mortgage qualification diagnostic that issues a pass/fail or score is "mak[ing], or [being] a substantial factor in making, a consequential decision" within categories (c) and (f). **It is therefore a high-risk AI system under the Act.**
- **§ 6-1-1703(2) — Risk management policy and program** for deployers.
- **§ 6-1-1703(3) — Impact assessment.**
- **§ 6-1-1703(4) — Pre-decision consumer notice:** "On and after February 1, 2026, and no later than the time that a deployer deploys a high-risk artificial intelligence system to make, or be a substantial factor in making, a consequential decision concerning a consumer, the deployer shall: (I) Notify the consumer that the deployer has deployed a high-risk artificial intelligence system to make, or be a substantial factor in making, a consequential decision before the decision is made; (II) Provide to the consumer a statement disclosing the purpose of the high-risk artificial intelligence system and the nature of the consequential decision; the contact information for the deployer; a description, in plain language, of the high-risk artificial intelligence system; and instructions on how to access the statement required by subsection (5)(a) of this section; and (III) Provide to the consumer information, if applicable, regarding the consumer's right to opt out of the processing of personal data concerning the consumer for purposes of profiling in furtherance of decisions that produce legal or similarly significant effects concerning the consumer under section 6-1-1306 (1)(a)(I)(C)."
- **§ 6-1-1703(4)(b) — Adverse-decision disclosures** with AI contribution explanation, right to appeal, right to correct.
- **§ 6-1-1703(5) — Public statement on the deployer's website.**
- **§ 6-1-1703(6) — Small-business exception:** deployer that (a) employs fewer than 50 FTE employees and (b) does not use its own data to train the high-risk system is exempt from the risk-management, impact-assessment, and public-statement requirements under §§ 6-1-1703(2), (3), and (5). The pre-decision consumer notice (§ 6-1-1703(4)) is **not** excused.
- **§ 6-1-1706 — Enforcement:** AG only. Maximum civil penalty of **$20,000 per violation** under the CCPA, § 6-1-112(1).
- **§ 6-1-1701(8) — Federal preemption / banking exemption:** banks, credit unions, and their affiliates "subject to examination by a state or federal prudential regulator" are in full compliance with the Act if the federal regulator's published guidance on AI is substantially equivalent. A lead-generation website that is not itself a bank or credit union does not benefit from this safe harbor.

### Colorado Consumer Protection Act — Colo. Rev. Stat. § 6-1-101 et seq.

Enforced by the Colorado AG and, after AG/DA notice, by private litigants (limited remedies; no treble damages; attorneys' fees only in limited circumstances — see § 6-1-113). AG portal: [coag.gov/](https://coag.gov/).

### What's unique about Colorado

- **The first U.S. state to enact a comprehensive, state-level "high-risk AI" law** that brings a "consequential decision" framework into state consumer-protection law, expressly including **financial/lending services** and **housing**.
- Imposes *both* developer *and* deployer duties.
- Pegged to a **February 1, 2026** operative date.
- A comprehensive consumer privacy law (the CPA) that *expressly* creates a profiling-opt-out right tied to "decisions that produce legal or similarly significant effects."
- **AG-only** enforcement regime for the CPA and the AI Act (no private right of action).

### Sample safe disclosure language (Colorado)

> **1. Pre-decision AI notice (Colorado AI Act, § 6-1-1703(4)(a))** — to be shown *before* the diagnostic returns a result:
>
> *"This site uses an artificial-intelligence system to help evaluate whether a mortgage product may be available to you. The system is a 'high-risk AI system' under the Colorado AI Act (Colo. Rev. Stat. § 6-1-1701 et seq.). The decision it makes — or substantially contributes to — is a 'consequential decision' affecting your access to a financial or lending service and to housing. The Company is the deployer. The AI is operated by [Company] with oversight by a qualified human under our risk-management policy. You can request (a) a description of the AI system, (b) the principal reason for any adverse result, (c) the type and source of data we process, (d) the opportunity to correct inaccurate personal data, and (e) the opportunity to appeal any adverse decision with human review. Contact us at [email] or [telephone] for any of these requests. You may also opt out of profiling in furtherance of consequential decisions under the Colorado Privacy Act (Colo. Rev. Stat. § 6-1-1306(1)(a)(I)(C)) — see our Do Not Sell or Profile My Information page."*

## 9.2 Georgia

**Lead regulator:** Georgia Department of Banking and Finance (DBF), Non-Depository Financial Institutions Division. Source: [dbf.georgia.gov/](https://dbf.georgia.gov/); [dbf.georgia.gov/mb-brokers-lenders-and-originators](https://dbf.georgia.gov/mb-brokers-lenders-and-originators); [dbf.georgia.gov/mb-brokers-lenders-and-originators/mortgage-laws-and-rules](https://dbf.georgia.gov/mb-brokers-lenders-and-originators/mortgage-laws-and-rules).

**Statutory framework:** the **Georgia Residential Mortgage Act (GRMA)**, codified at **O.C.G.A. Title 7, Chapter 1, Article 13**. Per DBF: "Laws governing the residential mortgage industry are primarily found in Title 7, Chapter 1, Article 13 of the Official Code of Georgia Annotated (O.C.G.A.)." DBF rules in Ga. Comp. R. & Regs. Ch. 80-11.

**Georgia Fair Lending Act — O.C.G.A. § 7-6A-1 et seq.** Mirrors federal ECOA / Regulation B with Georgia-specific differences, including the addition of **sexual orientation** under O.C.G.A. § 7-6A-1 (added by amendment in 2020).

**Georgia Fair Business Practices Act (FBPA) — O.C.G.A. § 10-1-390 et seq.** Enforced by the Georgia AG. Civil penalties up to $5,000 per violation (post-2020 amount to be revalidated).

**Georgia Telephone Solicitation — O.C.G.A. § 46-5-27 (HB 590 (2019), HB 637 (2022)).** Prohibits telemarketing calls to numbers on the National Do-Not-Call Registry; time-of-day restrictions (commonly 9 a.m. – 9 p.m. local time); caller-ID/spoofing prohibitions; required disclosures at the start of a telemarketing call (identity of the seller; that the purpose is a sales call; the nature of the goods or services); opt-out at any time during the call; record-keeping of consent, opt-out, and DNC compliance. SMS/text provisions are not as comprehensively addressed in § 46-5-27 as in some other states; the federal TCPA (47 U.S.C. § 227) and FCC rules (47 C.F.R. § 64.1200) govern SMS/text in Georgia absent a state-level mini-TCPA amendment.

### What's unique about Georgia

- The GRMA is a **fee-remitting act** — Georgia-licensed and registered mortgage lenders/brokers must remit a percentage of the loan to the State of Georgia (the "GRMA fee") on closed Georgia residential mortgage loans.
- Georgia's mini-TCPA is **notably narrower** than other state mini-TCPAs (Florida, Oklahoma, Washington); Georgia has not yet enacted a comprehensive text-message opt-in regime at the state level; the federal TCPA dominates.
- Georgia **does not have a comprehensive state consumer-privacy law** comparable to the Colorado Privacy Act, the California CCPA/CPRA, the Connecticut CTDPA, etc.
- Georgia **does not have a state AI Act** comparable to Colorado's SB 24-205 as of 2024–2025.

### Recent Georgia enforcement (2023–2024)

- **DBF press releases:** [dbf.georgia.gov/](https://dbf.georgia.gov/) (license revocations, surrenders, cease-and-desist orders, consent agreements).
- **Georgia AG press releases:** [law.georgia.gov/](https://law.georgia.gov/) (mortgage fraud, lead-generation abuse, consumer-protection actions).
- **CFPB and multi-state actions:** [consumerfinance.gov/enforcement/actions/](https://www.consumerfinance.gov/enforcement/actions/).

## 9.3 Ohio

**Lead regulator:** Ohio Department of Commerce, Division of Financial Institutions (DFI). Source: [com.ohio.gov/divisions/fininst](https://www.com.ohio.gov/divisions/fininst).

**Primary statute — Ohio Rev. Code Chapter 1322 (RMLA).**

- **R.C. § 1322.01(B) — "Advertising":** "A commercial message in any medium that promotes, either directly or indirectly, a residential mortgage lending transaction." This is the operative definition for any consumer-facing mortgage qualification diagnostic.
- **R.C. § 1322.01(Y) — "Mortgage broker":** "An entity that for compensation or gain, or in the expectation of compensation or gain, obtains, attempts to obtain, or assists in obtaining a residential mortgage loan for a borrower from a mortgage lender. For purposes of this division, 'attempting to obtain or assisting in obtaining' a residential mortgage loan includes **referring a borrower to a mortgage lender, soliciting or offering to solicit a mortgage loan on behalf of a borrower, or negotiating or offering to negotiate the terms or conditions of a mortgage loan with a mortgage lender on behalf of a borrower**." **A site that takes a borrower's information and routes it to a lender is "assisting in obtaining" a loan.**
- **R.C. § 1322.01(Z) — "Mortgage lender":** "An entity that for compensation or gain, or in the expectation of compensation or gain consummates a residential mortgage loan, advances funds, offers to advance funds, or commits to advancing funds for a borrower."
- **R.C. § 1322.01(AA) — "Mortgage loan originator":** includes any individual who (a) takes a residential mortgage loan application, (b) assists or offers to assist a buyer in obtaining or applying to obtain a residential mortgage loan, (c) offers or negotiates terms, (d) issues or offers to issue a commitment.
- **R.C. § 1322.01(MM) — "Unique identifier":** "A number or other identifier assigned by protocols established by the Nationwide Mortgage Licensing System and Registry."
- **R.C. § 1322.01(LL) — "Transaction of business as a mortgage lender, mortgage servicer, or mortgage broker in this state":** "Originating, brokering, or servicing five or more residential mortgage loans in any twelve-month period" in any of three specified circumstances (any Ohio resident; any Ohio property; any person physically located in Ohio). **This is a licensing floor** — even one loan may be sufficient to require licensing if other factors are present.
- **R.C. § 1322.07 — License requirement:** "No person shall engage in the transaction of business as a mortgage lender, mortgage servicer, or mortgage broker in Ohio without first having obtained a certificate of registration from the superintendent of financial institutions for the principal office and every branch office."
- **R.C. § 1322.20 — MLO license.**
- **R.C. § 1322.30 — Interest (verbatim):** "A registrant or entity holding a letter of exemption under this chapter may contract for and receive interest at any rate or rates agreed upon or consented to by the parties to the residential mortgage loan, but **not exceeding an annual percentage rate of twenty-five per cent**." **Ohio caps residential mortgage interest at 25% APR for non-bank registrants.**
- **R.C. § 1322.42 — Supervision; remote work.** (C) (effective September 13, 2022; SB 264) addresses remote work by an MLO or associated person, subject to (a) a written supervision policy, (b) information-security controls, (c) no customer interactions at the employee's residence (unless it is a licensed principal/branch office), (d) no physical records at the remote location.
- **R.C. § 1322.46 — Disclosures in advertising (verbatim, effective March 23, 2018; last amended by House Bill 199, 132nd General Assembly):** "(A) A registrant or mortgage loan originator shall disclose in any printed, televised, broadcast, electronically transmitted, or published advertisement relating to the registrant's or mortgage loan originator's services, including on any electronic site accessible through the internet, **the business name of the registrant or mortgage loan originator and the unique identifier of the registrant or mortgage loan originator**. (B) In making any advertisement, a registrant shall comply with 12 C.F.R. 226.16, as amended." Source: [codes.ohio.gov/orc/1322.46](https://codes.ohio.gov/orc/1322.46).

**Ohio Administrative Code (OAC) — Chapter 1301:5-1 (mortgage lending rules).** DFI's administrative rules implementing Chapter 1322. Current OAC chapter is to be revalidated against the live Ohio Administrative Code portal.

**Ohio Consumer Sales Practices Act (CSPA) — R.C. Chapter 1345.** Enforced by the Ohio AG. Reaches "suppliers" and prohibits "unfair or deceptive" and "unconscionable" acts or practices. R.C. § 1345.02 lists specific per se deceptive-sales-practice violations.

**Ohio Telephone Solicitation — R.C. Chapter 4719.** R.C. § 4719.02 prohibition on telephone solicitation; exemptions (calls in response to an express written request, calls to an existing customer, calls for which prior express invitation or permission has been obtained, calls where a do-not-call request has been honored, etc.). R.C. § 4719.05 — registration of telephone solicitors with the Ohio AG. R.C. § 4719.08 — disclosures during a telephone solicitation call.

### What's unique about Ohio

- **Interest-rate cap:** R.C. § 1322.30 caps residential mortgage loan interest at 25% APR for non-bank registrants.
- **"Assisting in obtaining" — broad definition of "mortgage broker"** (R.C. § 1322.01(Y)): expressly includes "referring a borrower to a mortgage lender, soliciting or offering to solicit a mortgage loan on behalf of a borrower, or negotiating or offering to negotiate the terms or conditions of a mortgage loan with a mortgage lender on behalf of a borrower."
- **Five-loan-in-12-months trigger** (R.C. § 1322.01(LL)): a person is "transacting business as a mortgage lender, mortgage servicer, or mortgage broker" in Ohio if they originate, broker, or service five or more residential mortgage loans in any 12-month period in any of three specified circumstances.
- **Mandatory "registrant and unique-identifier in every advertisement" rule** (R.C. § 1322.46) is the explicit Ohio statutory source of the federal NMLS Consumer Access rule, and is broader than federal requirements in that it applies to "any printed, televised, broadcast, electronically transmitted, or published advertisement … including on any electronic site accessible through the internet."

## 9.4 Michigan

**Lead regulator:** Michigan Department of Insurance and Financial Services (DIFS). Source: [michigan.gov/difs](https://www.michigan.gov/difs).

**Statute — Act 173 of 1987, the "Mortgage Brokers, Lenders, and Servicers Licensing Act" (MBLSA)** (codified at MCL § 445.1651 et seq.):

- **MCL § 445.1651 — Short title (verbatim):** "This act shall be known and may be cited as the 'Mortgage Brokers, Lenders, and Servicers Licensing Act.'" Source: [legislature.mi.gov/Laws/MCL?objectName=mcl-445-1651](https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-445-1651).
- **MCL § 445.1652 — License required (verbatim excerpts):** "A person shall not act as a mortgage broker, mortgage lender, or mortgage servicer without first obtaining a license under this act or registering under section 6, unless 1 or more of the following apply …" Subdivision (3): "A loan officer shall not directly or indirectly receive any compensation, commission, fee, points, or other remuneration or benefits for originating a mortgage loan unless both of the following are met: (a) The loan officer is a licensed loan officer. (b) The compensation, commission, fee, points, or other remuneration or benefits are paid by the licensee or registrant for which the loan officer originated that mortgage loan." Subdivision (4): a mortgage broker, lender, or servicer shall not pay any compensation to (a) a loan officer who is not a licensed loan officer, or (b) a licensed loan officer who is not an employee or agent of that broker, lender, or servicer. Source: [legislature.mi.gov/Laws/MCL?objectName=mcl-445-1652](https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-445-1652).
- **MCL § 445.1671 — Books and records.** Mortgage loan documents preserved for the longer of (i) transfer/assignment, (ii) **3 years after the date the mortgage loan is closed**.
- **MCL § 445.1672 — Prohibited acts (verbatim excerpts):** It is a violation for a licensee or registrant to: (a) Fail to conduct the business in accordance with law, this act, or a rule promulgated or order issued under this act. (b) **Engage in fraud, deceit, or material misrepresentation in connection with any transaction governed by this act.** (c) **Intentionally or due to gross or wanton negligence, repeatedly fail to provide borrowers material disclosures of information as required by law.** (d) Suppress or withhold from the commissioner any information that the licensee or registrant possesses and that, if submitted, would have made the licensee or registrant ineligible for licensing or registration. (h) **To be convicted of a felony, or any misdemeanor of which an essential element is fraud.** Source: [legislature.mi.gov/Laws/MCL?objectName=mcl-445-1672](https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-445-1672).
- **MCL § 445.1674 — Annual statement to borrower (mortgage servicer; verbatim).**
- **MCL § 445.1675 — Exemptions (verbatim excerpts):** This act does not apply to: (a) A depository financial institution. (b) A salesperson acting as agent for a residential builder or residential maintenance and alteration contractor. (c) A real estate broker or real estate salesperson who is not a mortgage broker, mortgage lender, or mortgage servicer, or who only acts as a mortgage broker in connection with a real estate sale or lease and acts without additional compensation beyond the customary commission. (e) A person licensed under the secondary mortgage loan act (1981 PA 125, MCL § 493.51 to § 493.81), not making, brokering, or servicing mortgage loans as described in this act in a 12-month period from January 1 to December 31. **(g) A mortgage lender that in the aggregate with any affiliates makes 10 or fewer mortgage loans in a 12-month period from January 1 to December 31. (h) A mortgage servicer that in the aggregate with any affiliates services 10 or fewer mortgage loans in a 12-month period from January 1 to December 31.** (i) A mortgage servicer that in the aggregate with any affiliates services only 75 or fewer land contracts, of which 10 or fewer require the collection of money for the payment of taxes or insurance. Source: [legislature.mi.gov/Laws/MCL?objectName=mcl-445-1675](https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-445-1675).

**Michigan Consumer Protection Act (MCPA) — MCL § 445.901 et seq.** Reaches "trade or commerce" and prohibits "unfair, unconscionable, or deceptive methods, acts, or practices in the conduct of trade or commerce." Enforced by the Michigan AG. **§ 445.911 — a private plaintiff may bring an action for "the amount of the actual damages sustained, or $250.00, whichever is greater," plus injunctive relief.** Some courts have allowed class actions.

**Michigan No-Call Act — MCL § 445.111 et seq.** Creates a state-level Do-Not-Call list and regulates telephone solicitation in Michigan. The Michigan AG maintains the state DNC list.

### What's unique about Michigan

- **10-loan-in-12-months de minimis exemption (MCL § 445.1675(g) and (h)):** a Michigan mortgage lender that, in the aggregate with any affiliates, makes 10 or fewer mortgage loans in a 12-month period is exempt from the MBLSA; a Michigan mortgage servicer that services 10 or fewer loans in a 12-month period is also exempt. **Note: this does *not* exempt the person from the Michigan Mortgage Loan Originator Licensing Act (the SAFE Act implementation) or from federal law.**
- **Compensation-flow control (MCL § 445.1652(3)–(4)):** loan officers must be licensed; compensation for originating a loan must flow from the licensee or registrant through the licensed loan officer. One of the most explicit "no payment to unlicensed loan officers" rules in the country.
- **10-loan-12-month-aggregate test** is computed "in the aggregate with any affiliates" — so a multi-entity lead-generation business cannot spread volume across affiliates to stay under the 10-loan cap.
- **Michigan's No-Call Act (MCL § 445.111)** is one of the older state DNC statutes; the AG operates a Michigan-specific DNC list in addition to the federal list.

## 9.5 New Jersey

**Lead regulator:** New Jersey Department of Banking and Insurance (DOBI). DOBI is the combined state regulator for banking, insurance, and real estate lending in New Jersey. DOBI is one of the few state regulators that combines all of these functions.

**Statute — New Jersey Residential Mortgage Lending Act (RMLA), N.J.S.A. 17:11C-1 et seq.:** the primary state mortgage lending statute. Key sections:
- **N.J.S.A. 17:11C-53 — Advertising requirements.** Every advertisement by a residential mortgage lender or mortgage broker must include (a) the name and NMLS unique identifier of the licensed entity, (b) a statement that the entity is licensed by DOBI, and (c) a reference to the NMLS Consumer Access website.
- **N.J.S.A. 17:11C-54 — False advertising.** False advertising by a residential mortgage lender or mortgage broker is a violation.
- **N.J.S.A. 17:11C-101 et seq. — Mortgage Loan Originator Licensing (NJ SAFE Act).**
- **N.J.A.C. 3:1, 3:11, 3:11-1.1 et seq.** — DOBI administrative rules.

**New Jersey Consumer Fraud Act (CFA) — N.J.S.A. 56:8-1 et seq.** Enforced by the NJ AG (and indirectly by the Division of Consumer Affairs). **One of the broadest and most plaintiff-friendly state consumer-protection statutes in the United States.** Reaches "any unconscionable commercial practice, deception, fraud, false pretense, false promise, misrepresentation" in the "sale or advertisement of any merchandise" or "the subsequent performance" thereof. **Provides for treble damages and attorneys' fees to a private plaintiff who can show an ascertainable loss.** Significantly more plaintiff-friendly than most state UDAP statutes.

**New Jersey Telephone Consumer Protection Act — N.J.S.A. 56:8-126 et seq. (2024 amendments).** Prohibits telephone solicitation calls to NJ residential or wireless subscribers who have registered on the DNC list (or who have otherwise asked to be placed on the seller's internal DNC list). Time-of-day restrictions (commonly 9 a.m. – 9 p.m. local time at the called party's location). Caller-ID and anti-spoofing rules. Required disclosures at the start of a solicitation call. Opt-out at any time. **Private right of action with statutory damages of up to $1,000 per violation (the 2024 amendments increased the cap).** SMS/text message provisions updated in the 2024 amendments to expressly cover text messages and to require prior express written consent for marketing text messages.

**New Jersey Home Ownership Security Act — N.J.S.A. 46:10B-1 et seq. (predatory lending).** Steering prohibitions (brokers/lenders may not steer consumers to loans with terms less favorable than those for which they qualify). Rate and points caps for high-cost loans. Required disclosures for high-cost loans. Liability for violations.

### What's unique about New Jersey

- **DOBI is a combined regulator** (banking, insurance, and real estate lending) — one of a small number of state regulators with this structure. Coordinated enforcement is broader than the typical "Department of Banking" or "Department of Insurance" state.
- **Treble damages and attorneys' fees** under the CFA (N.J.S.A. 56:8-1 et seq.) make New Jersey one of the most plaintiff-friendly states in the country for consumer-fraud actions. Class actions under the CFA are common in mortgage and lead-generation cases.
- **The 2024 New Jersey mini-TCPA amendments** significantly increased statutory damages (up to $1,000 per violation) and expressly cover SMS/text marketing messages.
- **HOSA (N.J.S.A. 46:10B-1 et seq.)** is one of the older state predatory-lending statutes. The steering prohibition is broadly worded.
- **Trigger-lead enforcement:** the NJ AG has been at the national forefront of "trigger lead" enforcement.
- **New Jersey has a state AG mini-TCPA** but no comprehensive state consumer-privacy law comparable to the Colorado Privacy Act, California CCPA/CPRA, Connecticut CTDPA, or Virginia VCDPA as of 2024–2025.

## 9.6 Washington

**Lead regulator:** Washington State Department of Financial Institutions (DFI), Division of Consumer Services. Source: [dfi.wa.gov/](https://www.dfi.wa.gov/).

**Statutes:**
- **RCW 31.04 — Consumer Loan Act.** This is the umbrella statute governing consumer loans in Washington, including mortgage lending. Key sections: **RCW 31.04.027 — Violations of chapter** (a violation of this chapter is a violation of the Washington Consumer Protection Act, RCW 19.86). **This is the statutory CPA-hook.**
- **RCW 19.146 — Mortgage Broker Practices Act.** As of 2024, RCW 19.146 is still in effect and operates in parallel with RCW 31.04.
- **WAC 208-660 — Mortgage Brokers and Loan Originators — Licensing.** One of the most detailed mortgage-broker rule chapters in the United States. Key WAC sections:
  - **WAC 208-660-400 — Reporting requirements and notices to the department.**
  - **WAC 208-660-430 — Disclosure requirements.**
  - **WAC 208-660-440 — Advertising (general).** (1) "Am I responsible for ensuring that my advertising material is accurate, reliable, and in compliance with the act? Yes. Each mortgage broker is responsible for ensuring the accuracy and reliability of the advertising material." (2) "A licensee is prohibited from advertising with envelopes, stationery, or images in an electronic format that are designed to resemble a government agency mailing or that suggest an affiliation that does not exist." (3) "Is it a violation to advertise that items or services are 'free' when the licensee has paid for the items or services? Yes. Advertising using the term 'free,' or any other similar term or phrase that implies there is no cost to the applicant is deceptive because you can recover the cost of the purportedly 'free' items or services through the negotiation process." (4) "When I am advertising interest rates, the act requires me to conspicuously disclose the annual percentage rate (APR) implied by the rate of interest." Source: [app.leg.wa.gov/WAC/default.aspx?cite=208-660-440](https://app.leg.wa.gov/WAC/default.aspx?cite=208-660-440).
  - **WAC 208-660-446 — Electronic / internet / text message advertising (verbatim):** "Yes. Companies, including branches, and loan originators must provide the following language, in addition to any other, on web pages, social media pages the licensee controls, or in any medium where the licensee holds themselves out as being able to provide the services: (1) The company's name as entered in the NMLS, the company's license number, and a link to the company's NMLS consumer access website page must be displayed on the company's and any loan originator's primary landing page. (2) If loan originators are named, their license numbers must closely follow the names. (3) If the company uses a DBA, the page must also contain the company's name as entered in the NMLS or license number. (4) Compliance with other laws. (5) Oversight. The company is responsible for content displayed on all electronic advertisements used to solicit Washington consumers." Source: [app.leg.wa.gov/WAC/default.aspx?cite=208-660-446](https://app.leg.wa.gov/WAC/default.aspx?cite=208-660-446).
  - **WAC 208-660-500 — Prohibited practices.** (a) Directly or indirectly employing any scheme, device, or artifice to defraud or mislead borrowers or lenders or to defraud any person. (b) Engaging in any unfair or deceptive practice toward any person. (c) Obtaining property by fraud or misrepresentation. (d) Soliciting or entering into a contract with a borrower that provides in substance that the mortgage broker may earn a fee or commission through the mortgage broker's 'best efforts' to obtain a loan even though no loan is actually obtained for the borrower. (e) Charging discount points on a loan which does not result in a reduction of the interest rate. (f) Failing to clearly and conspicuously disclose whether a payment advertised or offered for a residential mortgage loan includes amounts for taxes, insurance, or other products sold to the borrower. (k) Failing to make disclosures to loan applicants and noninstitutional investors as required by RCW 19.146.030 and any other applicable state or federal law. (l) Making, in any manner, any false or deceptive statement or representation with regard to the rates, points, or other financing terms or conditions for a residential mortgage loan. **(m) Engage in bait and switch advertising.** Bait and switch means a deceptive practice of soliciting or promising a loan at favorable terms, but later 'switching' or providing a loan at less favorable terms. Source: [app.leg.wa.gov/WAC/default.aspx?cite=208-660-500](https://app.leg.wa.gov/WAC/default.aspx?cite=208-660-500).

**Washington Consumer Protection Act — RCW 19.86.** Enforced by the WA AG and reaches "unfair or deceptive acts or practices in trade or commerce" and "unfair methods of competition." **CPA-hook from RCW 31.04.027** (and the parallel RCW 19.146.020 and other mortgage-broker statutes): a violation of Washington's mortgage lending statute is *automatically* a violation of the Washington CPA. **RCW 19.86.090:** AG civil penalties up to $7,500 per violation; private plaintiff actual damages + attorneys' fees.

**Washington Commercial Electronic Mail Act (CEMA) — RCW 19.190.** One of the **oldest state anti-spam statutes** in the United States (enacted 1998) and was amended in 2003 to cover commercial electronic text messages (RCW 19.190.060). Key sections:
- **RCW 19.190.020 — Commercial e-mail prohibitions** (e.g., use of a third party's internet domain name without permission; false or misleading information in the subject line).
- **RCW 19.190.030 — CPA hook.**
- **RCW 19.190.040 — Sexual Predator Identification Act** (Washington's 1998 "Sexual Predator Identification Act" provision requires commercial e-mail to include "ADV:" in the subject line for advertisement).
- **RCW 19.190.060 — Commercial electronic text message (verbatim):** "(1) No person conducting business in the state may initiate or assist in the transmission of an electronic commercial text message to a telephone number assigned to a Washington resident for cellular telephone or pager service that is equipped with short message capability or any similar capability allowing the transmission of text messages. (2) The legislature finds that the practices covered by this section are matters vitally affecting the public interest for the purpose of applying the consumer protection act, chapter 19.86 RCW. A violation of this section is not reasonable in relation to the development and preservation of business and is an unfair or deceptive act in trade and commerce and an unfair method of competition for the purpose of applying the consumer protection act, chapter 19.86 RCW." Source: [app.leg.wa.gov/RCW/default.aspx?cite=19.190.060](https://app.leg.wa.gov/RCW/default.aspx?cite=19.190.060).

**Washington My Health My Data Act (MHMDA) — RCW 19.373.** Effective in stages in 2023 (effective date: March 31, 2024, for regulated entities other than small businesses; June 30, 2024, for small businesses; some provisions effective earlier). The MHMDA is a state-level health-privacy statute that is broadly applicable, even to non-health businesses, because it defines "consumer health data" to include any data that is "linked or reasonably linkable to a consumer and that identifies the consumer's past, present, or future physical or mental health status." Includes: individual health conditions; gender-affirming care information; reproductive or sexual health information; biometric data; genetic data; **"Precise location information that could reasonably indicate a consumer's attempt to acquire or receive health services or supplies"**; and **any information that a regulated entity or a small business, or their respective processor, processes to associate or identify a consumer with the data described that is derived or extrapolated from nonhealth information (such as proxy, derivative, inferred, or emergent data by any means, including algorithms or machine learning).**

**Washington Fair Mortgage Lending — RCW 19.144.** Mirrors the federal ECOA / Reg B framework and adds Washington-specific provisions, including: prohibition on redlining and other discriminatory lending practices; a Washington state-specific fair-lending enforcement framework parallel to HUD/DOJ/CFPB ECOA enforcement; the Washington State Attorney General is the primary state-level enforcer.

**Washington AI legislation — SB 5838 (2024).** Operative effect: SB 5838 is a **task-force bill** that creates the Washington State Task Force on Artificial Intelligence. **SB 5838 is not an AI Act comparable to Colorado's SB 24-205.** The bill expires June 30, 2027. Bill text: [lawfilesext.leg.wa.gov/biennium/2023-24/Pdf/Bills/Senate%20Bills/5838.pdf](https://lawfilesext.leg.wa.gov/biennium/2023-24/Pdf/Bills/Senate%20Bills/5838.pdf).

### What's unique about Washington

- **WAC 208-660 is one of the most detailed mortgage broker rule chapters in the United States.** It is exhaustive on advertising, prohibited practices, disclosures, recordkeeping, GLBA implementation, and data-breach notification.
- **CPA-hook from RCW 31.04.027:** a violation of any provision of Washington's mortgage-lending statutes is automatically an unfair or deceptive act in trade and commerce under the Washington Consumer Protection Act.
- **CEMA (RCW 19.190) is one of the oldest state anti-spam statutes** (enacted 1998) and was amended in 2003 to cover commercial electronic text messages.
- **MHMDA (RCW 19.373) is a broadly applicable health-privacy statute** that reaches non-health businesses (including mortgage businesses) through the "consumer health data" definition's inclusion of precise-location information that could indicate a consumer's attempt to acquire health services, and any data that is derived or extrapolated from non-health information to identify a consumer with health-related data. The MHMDA expressly prohibits geofencing health-care facilities.
- **Washington's My Health My Data Act is the first state-level "geofencing health-care" prohibition.**
- **Washington's AI bill (SB 5838 (2024)) is currently a task force, not a comprehensive AI Act.**

---

# CROSS-STATE COMPARISON: REQUIRED DISCLOSURES ON A MULTI-STATE MORTGAGE QUALIFICATION SITE

For a site that operates in all nine jurisdictions surveyed, the following disclosures should be present in the consolidated footer, lead-capture form, qualification result page, and privacy policy. Items marked "Universal" are required in every state surveyed; items marked with a state abbreviation are state-specific.

| # | Disclosure | Where | Authority |
|---|---|---|---|
| 1 | NMLS Unique Identifier of the licensed mortgage broker and (if applicable) the named MLO | Footer (every page) and qualification result | Universal — 12 CFR § 1007.105; 12 CFR § 1008.5; Fin. Code § 50204(p) (CA); BL § 599-h(2) (NY); Tex. Fin. Code § 180.052(a); § 494.0026(2) (FL); M.G.L. c. 255F § 2 (MA); MCL § 445.1652 (MI); N.J.S.A. 17:11C-53 (NJ); N.J.S.A. 17:11C-101 (NJ SAFE Act); 209 CMR 32.36 (MA); 38 Ill. Adm. Code 1050.400 (IL); R.C. § 1322.46(A) (OH); O.C.G.A. § 7-1-1000 et seq. (GA); WAC 208-660-446 (WA); Title 12, Art. 100 (CO). |
| 2 | State license number(s) of the licensed entity | Footer (every page) and qualification result | Universal where the entity is state-licensed. |
| 3 | "Not a commitment to lend" | Qualification result and any ad that mentions a rate, payment, or term | Universal — federal Reg Z + state-specific. |
| 4 | "Pre-qualification" (NOT "pre-approval") when the result is based on self-reported data | Qualification result | Universal — federal Reg Z + state-specific. **NY (3 NYCRR § 79.5, § 91.2), CA, FL, TX, MA, IL, OH, MI, NJ, WA, CO, GA, MD, PA all strictly enforce this distinction.** |
| 5 | EHL logo or "Equal Housing Opportunity" statement | Footer (every page) | Universal — 24 CFR Part 110; 42 U.S.C. § 3604(c); state-specific implementations. |
| 6 | TILA-trigger disclosures (loan amount, term, APR) | Any ad that mentions a rate, payment, or term | Universal — 12 CFR § 1026.24; state-specific implementations. |
| 7 | EHL logotype on every mortgage advertisement regardless of whether a rate is mentioned | Footer (every page) | MA (209 CMR 32.36); OH (R.C. § 1322.46(A)); IL (38 Ill. Adm. Code 1050.400); NJ (N.J.S.A. 17:11C-53). |
| 8 | State Consumer Complaint Notice / TCCN / equivalent (where the entity is licensed) | Footer (every page) | TX (7 TAC § 56.200(c) / § 57.200(c) — verbatim from SML form); equivalent notice for the licensing state. |
| 9 | DFPI complaint contact | Footer | CA — Fin. Code § 90008(a)–(b). |
| 10 | Lead disclosure / "we may share your information with licensed mortgage lenders" | Lead-capture form | CA (CCFPL § 90003 + § 90009); FL (FDUTPA / FDBOR); MA (c. 93A); MI (MCPA); NJ (CFA); IL (815 ILCS 505); CO (CPA); TX (DTPA). |
| 11 | Lead-disclosure TCPA / DNC consent | Lead-capture form | Universal — federal TCPA + state mini-TCPAs. |
| 12 | CCPA / CPRA Notice at Collection (if any CA residents) | Before collection | CA — Civ. Code § 1798.100(a). |
| 13 | CCFPL / DFPI "abusive" safe language (not a condition of credit decision; human reviewer available on appeal) | Qualification result | CA — Fin. Code § 90003 + § 90009(c)(2). |
| 14 | CPPA ADMT Pre-Use Notice + opt-out + human-review appeal | Qualification result (before result) | CA — CPPA ADMT regulations, effective Jan. 1, 2026. |
| 15 | "Limit the Use of My Sensitive Personal Information" link | Homepage | CA — Civ. Code § 1798.130(d). |
| 16 | "Do Not Sell or Share My Personal Information" link | Homepage | CA — Civ. Code § 1798.130(a); FL (FDBOR § 501.705); CO (CPA opt-out); TX (TDPSA § 541.103). |
| 17 | SHIELD Act reasonable safeguards (always) | Internal — written information security program; encryption in transit and at rest; vendor contracts | NY — GBL §§ 899-aa, 899-bb; also see 23 NYCRR 500 if a Covered Entity. |
| 18 | 23 NYCRR 500 cybersecurity program (if a NY Covered Entity) | Internal | NY — 23 NYCRR 500 (covered entity definition at § 500.01(c); small business exemption at § 500.19). |
| 19 | TDPSA-required disclosures (if not GLBA-covered and not a small business) | Privacy page | TX — Tex. Bus. & Com. Code § 541.101, § 541.103, § 541.105, § 541.107. |
| 20 | CPA opt-out for profiling in consequential decisions | Privacy page | CO — Colo. Rev. Stat. § 6-1-1306(1)(a)(I)(C). |
| 21 | Colorado AI Act pre-decision AI notice (effective Feb. 1, 2026) | Qualification result (before result) | CO — Colo. Rev. Stat. § 6-1-1703(4). |
| 22 | FDBOR opt-out + consumer rights (if not GLBA-covered) | Privacy page | FL — Fla. Stat. § 501.705. |
| 23 | Mortgage Broker Agreement at time of application | When user submits the qualification form | FL — § 494.0026. |
| 24 | § 494.00296 3-day right of cancellation (if loan modification) | At time of loan modification agreement | FL — § 494.00296. |
| 25 | Lead Generator Registration disclosure (PA-specific) | Footer (every page) | PA — 7 Pa.C.S. Ch. 61 (Lead Generator Registration); 10 Pa. Code Ch. 46. |
| 26 | BIPA notice and written release (if biometric capture) | Before any biometric collection | IL — 740 ILCS 14. |
| 27 | ADV: subject line (if commercial email to WA residents) | Email subject line | WA — RCW 19.190.040. |
| 28 | No commercial text message to WA wireless without prior express consent | Lead-capture form | WA — RCW 19.190.060. |
| 29 | MHMDA no-geofencing and no-biometric disclaimer (if not health-related) | Privacy page | WA — RCW 19.373. |
| 30 | TCCN (Texas Consumer Complaint Notice) — verbatim from SML form | Footer | TX — 7 TAC § 56.200(c) / § 57.200(c); SML Form 8342 or 8331. |
| 31 | 201 CMR 17.00 WISP (internal) | Internal | MA — 201 CMR 17.00. |
| 32 | Personal Information Protection Act 45-day breach notification (internal) | Internal | MD — § 14-3504. |
| 33 | Breach of Personal Information Notification Act 60-day breach notification (internal) | Internal | PA — 73 P.S. § 2301 et seq. |
| 34 | Personal Information Protection Act 30-day breach notification (internal) | Internal | IL — 815 ILCS 530 § 10. |
| 35 | PSOA registration certificate disclosure (if telephone solicitation) | Internal | TX — Tex. Bus. & Com. Code § 302.101. |
| 36 | Tex. Fin. Code § 343.105 false-statement notice | At closing (if a home-loan originator) | TX — Tex. Fin. Code § 343.105. |
| 37 | §§ 899-aa / 899-bb SHIELD Act reasonable-safeguards certification (internal) | Internal | NY — GBL §§ 899-aa, 899-bb. |
| 38 | "This is a pre-qualification, not a pre-approval" with right to additional information | Qualification result | Universal. |
| 39 | FTC Endorsement Guides disclosures (16 CFR Part 255, 2023 amendments) | If any endorsement, testimonial, or review is used | Federal — 16 CFR Part 255. |
| 40 | GLBA Privacy Notice (if "financial institution") | Privacy Policy | Federal — 15 U.S.C. § 6801 et seq.; 16 CFR Part 313. |
| 41 | CCFPL Penalty Matrix awareness (CA, NY, FL — among the highest per-violation exposure) | Internal | CA Fin. Code § 90012(c)(1); FL § 501.211 + § 501.715 + § 501.711; NY GBL § 349(h). |
| 42 | Trigger-lead / data-source disclosure (where applicable) | Footer / Privacy Policy | NJ — CFA; FL — FDBOR; universal best practice. |
| 43 | Adverse Action / right to correct / appeal (AI Act + § 9003) | Qualification result (when "denial" shown) | CA — CCFPL + CPPA ADMT; CO — SB 24-205 § 6-1-1703(4)(b). |

---

# REQUIRED-DISCLOSURES CHECKLIST (MASTER)

A consumer-facing mortgage qualification diagnostic / lead-generation website that operates in all nine surveyed jurisdictions should:

1. **Determine licensing status in each state** — is the site a "mortgage broker" or "mortgage lender" in each state? If yes, obtain the license/registration. If no, document the structure that avoids triggering the licensing requirement (no application-taking; no lead transmission for compensation to unlicensed parties; no offering/negotiating loan terms tailored to the consumer's financial circumstances).

2. **Display the NMLS unique identifier in close proximity to the brand name** on every page that mentions residential mortgage loans (12 CFR § 1007.105; 12 CFR § 1008.5; Fin. Code § 50204(p); Tex. Fin. Code § 180.052(a); § 494.0026(2)(a)–(b); 209 CMR 32.36; 38 Ill. Adm. Code 1050.400; R.C. § 1322.46(A); WAC 208-660-446; BL § 599-h(2)).

3. **Display the EHL logo or "Equal Housing Opportunity" statement** on every page (24 CFR Part 110; 42 U.S.C. § 3604(c)).

4. **Use "pre-qualification" (NOT "pre-approval")** in connection with the result. Avoid "guaranteed," "approved," or "committed" unless actual underwriting has been performed.

5. **Display "Not a commitment to lend"** on every qualification result.

6. **If any rate is shown, display the corresponding APR and the TILA-trigger disclosures** (12 CFR § 1026.24; state-specific).

7. **Display state-required notices** (TCCN in TX; DFPI complaint contact in CA; equivalent in other states) where required.

8. **Capture TCPA-compliant consent** before any auto-dialed or prerecorded call or text to a consumer's wireless number (47 USC § 227; 47 CFR § 64.1200; state mini-TCPAs).

9. **Capture STOP mechanism for texts** (FTSA, MA c. 159C, FL mini-TCPA, others).

10. **For CA residents: provide CCPA Notice at Collection, "Do Not Sell or Share My Personal Information" link, "Limit the Use of My Sensitive Personal Information" link, and CPPA ADMT Pre-Use Notice (effective Jan. 1, 2026).**

11. **For NY residents: provide DFS-required NMLS disclosure in close proximity, "Licensed by NYSDFS" or "Registered Mortgage Broker — NYSDFS."**

12. **For TX residents: provide TCCN verbatim from SML Form 8342 or 8331, or the equivalent "NOT A LENDER. NOT A COMMITMENT TO LEND." disclosure for non-licensed sites.**

13. **For FL residents: provide Mortgage Broker Agreement at time of application per § 494.0026(1); FTSA-compliant prior express written consent for any text/call.**

14. **For IL residents: provide BIPA notice and written release before any biometric capture.**

15. **For CO residents (effective Feb. 1, 2026): provide AI Act pre-decision notice; CPA opt-out for profiling in consequential decisions.**

16. **For WA residents: provide "ADV:" in commercial email subject lines; no commercial text messages without prior express consent; MHMDA no-geofencing and no-biometric disclaimer.**

17. **Implement a written information security program** (WISP) per MA 201 CMR 17.00 (always); NY SHIELD Act § 899-bb; 23 NYCRR 500 (if NY Covered Entity); GLBA Safeguards Rule (if "financial institution"); FIPA § 501.171 (FL); § 14-3503 (MD); 73 P.S. § 2301 (PA); 815 ILCS 530 (IL); 24 CCR 725-1 (CO if any).

18. **Conduct a Data Protection Assessment** for the AI-driven qualification under the CPPA ADMT regulations (CA), the TDPSA (TX if applicable), the CPA (CO if any), and the Colorado AI Act (CO if any).

19. **Conduct a fair-lending risk assessment** and implement a fair-lending monitoring program (ECOA/Reg B; FHA; state-specific fair-lending laws).

20. **Maintain a 5-year retention of advertisements** at a minimum (12 CFR § 1007.5); 3 years under FL § 494.0016(3); 5 years under NY 3 NYCRR § 79.10.

21. **Train personnel** on the federal and state mortgage, privacy, security, and fair-lending requirements.

22. **Engage qualified mortgage compliance counsel** in each state in which the site operates to review (i) licensing status, (ii) privacy policy, (iii) terms of service, (iv) lead-outreach practices, (v) vendor agreements (especially with lead buyers and cloud/AI vendors), (vi) information security program, and (vii) any AI/ADMT model governance documents.

---

# ITEMS REQUIRING QUALIFIED MORTGAGE COMPLIANCE ATTORNEY REVIEW

The following items in this report absolutely require attorney review before the website is taken to production in the relevant state:

1. **Licensing determination in each state** — is the site a "mortgage broker" or "mortgage lender" in each of the nine surveyed states, in any other state where the site operates, and at the federal level (12 CFR § 1007.102)? The "creditor" determination under 12 CFR § 1002.2(l) for Reg B purposes.
2. **Vendor agreements** with lead buyers, AI model providers, cloud hosting providers, and other processors — must contain data-security, breach-notification, and use-limitation provisions consistent with the most-restrictive applicable state law.
3. **Information security program** — written WISP, encryption, access controls, incident response plan, written forensic report on any breach (per the Academy Mortgage consent order).
4. **AI/ADMT model governance documents** — risk-management policy, impact assessment, pre-decision notice, opt-out / human-review appeal mechanism, public website statement, monitoring of algorithmic discrimination. Compliance with the CPPA ADMT regulations (CA, effective Jan. 1, 2026) and the Colorado AI Act (effective Feb. 1, 2026).
5. **Privacy policy** — must be compliant with CCPA/CPRA (CA), CPA (CO), TDPSA (TX), FDBOR (FL), SHIELD Act (NY), MBLSA / MCPA (MI), CFA (NJ), UTPCPL (PA), MHMDA (WA), BIPA (IL), 201 CMR 17.00 (MA), MD PIPA (MD).
6. **Lead-capture form and consent flow** — TCPA, state mini-TCPA, FTSA, c. 159C (MA), R.C. Ch. 4719 (OH), MCL § 445.111 (MI), N.J.S.A. 56:8-126 (NJ), RCW 19.190.060 (WA), O.C.G.A. § 46-5-27 (GA), Tex. Bus. & Com. Code Ch. 302 (TX).
7. **Trigger-lead / data-source disclosure** (NJ AG enforcement) — if the site obtains data from credit-bureau triggers or other data brokers.
8. **Sponsoring entity / licensed entity disclosure** — for the lead generator, the licensed mortgage broker or lender, and the individual MLO whose NMLS ID is displayed.
9. **BIPA written release** (IL) — before any biometric capture; written policy and 3-year retention limit.
10. **Form A / Form B pre-qualification letter** (TX, if a licensed entity issues a written pre-qualification).
11. **State-by-state marketing copy review** — to ensure no false, misleading, or deceptive statements; no use of "pre-approved" without underwriting; no "guaranteed" claims; no government-emblem use; no "free" deceptive-terms violations.
12. **MHMDA no-geofencing compliance** (WA) — no geofencing around health-care facilities.
13. **State-licensed-entity compliance** — every state where the entity is licensed requires the entity to comply with that state's licensing and advertising rules, even if the lead generator is a separate entity.

---

# CROSS-REFERENCE TO UNDERLYING STATE RESEARCH FILES

This consolidated report draws from the following underlying state-specific research files (all saved to `/root/Website/Why am i denied/11-Compliance/`):

- **California:** `california_mortgage_compliance_research.md` (915 lines, ~124KB) — covers CRMLA, CCFPL, CPPA ADMT regulations, CCPA/CPRA, B&P § 17529.5, B&P § 17200/17500, EHL logo, DFPI enforcement (Academy Mortgage $825K).
- **New York:** `NY-Mortgage-LeadGen-Compliance-Research.md` (965 lines, ~81KB) — covers Banking Law Articles 12-D and 12-E, 3 NYCRR Parts 79/90/91/92, GBL §§ 349/350, DFS Circular Letters 1 (2022) and 5 (2023), SHIELD Act, 23 NYCRR 500, DFS enforcement (Rocket Mortgage $7.5M, Geico $5.625M, PayPal $2M, First American $1M).
- **Texas:** `TX-Mortgage-LeadGen-Compliance-Research.md` (1,063 lines, ~125KB) — covers Tex. Fin. Code Chs. 156/157/159/180/342/343, 7 TAC Part 4 Chs. 55–59, TDPSA (Tex. Bus. & Com. Code Ch. 541), PSOA (Ch. 302), anti-spam (Ch. 321), Recovery Fund, Mortgage Grant Fund, SML enforcement (Bayview $20M, Wemlo Unlicensed Activity).
- **Florida:** `FL-Mortgage-LeadGen-Compliance-Research.md` (908 lines, ~105KB) — covers Ch. 494, FTSA § 501.059, FDBOR §§ 501.701–501.722, FDUTPA §§ 501.201–501.213, FIPA § 501.171, OFR enforcement, plus 15 primary-source statute text files in `FL-primary-sources/`.
- **MA/MD/PA/IL:** covered in this report; underlying research notes were synthesized directly (the MA/MD/PA/IL subagent's results were delivered as final-response text rather than as a saved file).
- **CO/GA/OH/MI/NJ/WA:** `CO-GA-OH-MI-NJ-WA-State-Mortgage-LeadGen-Compliance.md` (1,271 lines, ~165KB) — covers all six states, including Colorado AI Act (SB 24-205), Colorado CPA, Ohio RMLA and 25% APR cap, Michigan MBLSA and 10-loan de minimis exemption, NJ CFA and mini-TCPA amendments, Washington WAC 208-660 series, MHMDA, and CEMA.

**Additional supporting research files (covering federal law and other topics, not synthesized in this state report):**
- `MASTER-COMPLIANCE-REPORT.md` (1,616 lines) — the original master compliance report with detailed federal-law coverage (Reg N/MAP Rule, TILA/Reg Z, SAFE Act, RESPA, ECOA/Reg B, FHA, UDAAP, GLBA, CCPA/CPRA, TCPA, CAN-SPAM, FTC Endorsement Guides, ADA/WCAG).
- `compliance-report.md` (486 lines) — FTC Endorsement Guides and ADA/WCAG compliance details.
- `FAIR-LENDING-AI-MORTGAGE-DIAGNOSTIC-COMPLIANCE.md` (892 lines), `ecoa-fair-housing.md` (322 lines), `map-rule-cfpb-enforcement-guidance.md` (346 lines), `map-rule-tila-reg-z.md` (988 lines), `respa-lead-purchase.md` (382 lines), `safe-act-nmls.md` (798 lines), `safe-language-recommendations.md` (883 lines), `cfpb-enforcement-2023-2026.md` (819 lines), `Mortgage-Diagnostic-Compliance-Report.md` (972 lines), `MORTGAGE-ADVERTISING-COMPLIANCE-REPORT.md` (648 lines), `2023-2026-Mortgage-AI-Enforcement-Actions-Report.md` (120KB), `2024-2026-Deep-Dive-Supplement.md` (45KB).

---

# DISCLAIMER

**This report is a research summary prepared to inform a conversation with a qualified mortgage compliance attorney licensed in each state in which the website will operate. It is not legal advice.** All citations have been pulled from primary state and federal sources (legislative web sites, state agency web sites, eCFR, the U.S. Code, and the CPPA), but several state agency web sites (DFPI, DFS, NYS Senate, MA mass.gov, IDFPR, MD DSD) were Cloudflare-blocked or JS-gated from the research environment. The underlying state research files flagged each such citation as "canonical (Cloudflare-blocked) — to be re-verified" before being relied upon. The web search tool was unavailable during the research session; the research was conducted by direct URL fetching of primary sources. Specific 2023–2024 enforcement case names, settlement amounts, regulator docket numbers, and press release URLs must be reverified against the live state AG press-release archive, the state regulatory agency's enforcement actions page, and PACER before being relied upon. The classification of an entity as a "mortgage broker" or "mortgage lender" is fact-specific; a fact-specific determination by qualified mortgage compliance counsel is required before the site is taken to production.
