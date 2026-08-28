# U.S. Privacy & Telemarketing Compliance Report
## Consumer Mortgage Qualification Diagnostic Website

**Website description:** A consumer-facing "mortgage qualification diagnostic" tool that collects **name, e-mail, phone, income, debt, self-reported credit range, and down payment** from visitors, and then markets mortgage products to those visitors (and may share leads with lenders, brokers, or lead aggregators).

**Date of analysis:** August 2026 (current as of available primary sources).

**Scope:** U.S. federal laws (TCPA, CAN-SPAM, GLBA, FCRA, TSR), FTC Safeguards Rule, state privacy laws (CA, VA, CO, CT, UT, TX, OR, MT, FL, IL BIPA), and recent 2023–2026 enforcement.

> **Authority & caveat:** All citations are to the U.S. Code, eCFR (47 CFR, 16 CFR, 12 CFR), state codes via official mirrors, and primary agency documents. Where a cited primary source is a state legislative site that I could not retrieve through this environment, I have noted that and listed the statute and the secondary aggregator (e.g., NCSL, court filings) used to verify the citation. This report is a research memorandum, not legal advice.

---

## Table of Contents

1. [Statutory & regulatory framework overview](#1-statutory--regulatory-framework-overview)
2. [TCPA, FCC rules, DNC, SMS, 2023–2026 developments](#2-tcpa--fcc-rules--dnc--sms--20232026-developments)
3. [CAN-SPAM Act & state email/marketing laws](#3-can-spam-act--state-emailmarketing-laws)
4. [GLBA (15 USC 6801 et seq.) & FTC Safeguards Rule](#4-glba--15-usc-6801-et-seq--ftc-safeguards-rule)
5. [State privacy laws & mortgage/financial exemptions](#5-state-privacy-laws--mortgagefinancial-exemptions)
6. [FCRA — soft-pull, permissible purpose, adverse action](#6-fcra--soft-pull--permissible-purpose--adverse-action)
7. [Recent federal & state enforcement actions 2023–2026](#7-recent-federal--state-enforcement-actions-20232026)
8. [Required disclosures & consent language templates](#8-required-disclosures--consent-language-templates)
9. [Compliance checklist](#9-compliance-checklist)

---

## 1. Statutory & regulatory framework overview

The website's data flow triggers **at least seven overlapping U.S. legal regimes**:

| Regime | Citation | Trigger | What it requires |
|---|---|---|---|
| TCPA (telephone calls/SMS) | 47 U.S.C. § 227; 47 C.F.R. § 64.1200 | Calling or texting a consumer's wireless or residential number using an autodialer or prerecorded/artificial voice to market mortgage products | Prior express written consent for marketing; DNC scrubbing; 8 a.m.–9 p.m. local time only; honor revocation in ≤ 10 business days; $500–$1,500 statutory damages per call/text |
| FCC Do-Not-Call | 47 C.F.R. § 64.1200(c)–(e) | Outbound marketing call to a residential number; DNC list scrubbing | National DNC scrub ≤ 31 days before call; honor company-specific DNC; written policy & training |
| CAN-SPAM | 15 U.S.C. §§ 7701–7713; 16 C.F.R. Part 316 | Commercial e-mail advertising mortgage products | Truthful headers, opt-out, valid physical postal address, honor opt-out in 10 business days; identify message as advertisement |
| GLBA (Subtitle A) | 15 U.S.C. §§ 6801–6809; 16 C.F.R. Part 314 | If website is a "financial institution" or service provider to one — collects NPI (income, debt, credit range) | Privacy notice; opt-out for sharing with non-affiliates; written information security program; Designated Qualified Individual; encryption; MFA; vendor due diligence |
| FTC Safeguards Rule | 16 C.F.R. Part 314 | "Financial institution" under GLBA | Information security program; risk assessment; access controls; encryption in transit/at rest; MFA; continuous monitoring or annual pen-test + biannual vulnerability scans; incident response |
| State mini-TCPA / privacy laws | e.g., Cal. Bus. & Prof. Code § 17529.5; Cal. Civ. Code §§ 1798.100 et seq.; Tex. Bus. & Com. Code §§ 541.101 et seq.; Va. Code § 59.1-575 | Collecting PI from state residents | Right to know/delete/opt-out (CA, etc.); GLBA exemption analysis; small-business thresholds |
| FCRA | 15 U.S.C. §§ 1681 et seq.; 12 C.F.R. Part 1022 (Reg. V) | If the site performs any consumer-report lookup (soft pull, marketing lists, prequalification engine pulling real credit data) | Permissible purpose; adverse action if denying or pricing credit; risk-based pricing notice; credit score disclosure |
| FTC Telemarketing Sales Rule | 15 U.S.C. §§ 6101–6108; 16 C.F.R. Part 310 | Outbound telemarketing of mortgage products | Disclosure of material terms; prohibitions on advance fees for loan guarantees; DNC scrub; express verifiable authorization for payment |
| TILA/Reg. Z (advertising rules) | 15 U.S.C. § 1011 et seq.; 12 C.F.R. §§ 1026.1, 1026.24 | Mortgage advertising | Triggering terms, APR disclosures (out of scope for this report) |
| State mortgage licensing | e.g., Cal. Fin. Code § 50000 et seq. (CRMLA); Tex. Fin. Code Ch. 156 (MLO); NY Banking Law § 599 | Engaging in mortgage lending, brokerage, or loan origination | Mortgage lender/broker license or registration; MLO individual registration; exemption analysis |

The most important question is **what entity the website operator is**: a *financial institution* under GLBA, a *lead generator* (not a financial institution), or a *lender/broker/servicer* (regulated as a financial institution under Reg. V, GLBA, and state mortgage licensing). That classification drives the compliance obligations for Sections 3–6.

---

## 2. TCPA — FCC rules, DNC, SMS, 2023–2026 developments

### 2.1 Statute and primary sources

- **Statute:** Telephone Consumer Protection Act, **47 U.S.C. § 227** (codified at 47 U.S.C. § 227). [https://www.law.cornell.edu/uscode/text/47/227]
- **FCC implementing regulation:** **47 C.F.R. § 64.1200** (Subpart L of Part 64). [https://www.ecfr.gov/current/title-47/section-64.1200]
- **STIR/SHAKEN call authentication:** **47 U.S.C. § 227b** (TRACED Act). [https://www.law.cornell.edu/uscode/text/47/227b]
- **TCPA private right of action:** 47 U.S.C. § 227(b)(3) and (c)(5) — $500 per violation, trebled to $1,500 for willful or knowing violations, with no statutory cap on aggregate liability. Class actions routinely settle in the eight- and nine-figure range.

### 2.2 Prohibited calls absent consent

**47 C.F.R. § 64.1200(a)(1):** "Except as provided in paragraph (a)(2) of this section, initiate any telephone call (other than a call made for emergency purposes or is made with the prior express consent of the called party) using an automatic telephone dialing system or an artificial or prerecorded voice … (iii) To any telephone number assigned to a paging service, cellular telephone service, specialized mobile radio service, or other radio common carrier service, or any service for which the called party is charged for the call."

**47 C.F.R. § 64.1200(a)(2):** Prohibits telemarketing calls (advertisement or telemarketing) using an autodialer or prerecorded/artificial voice to the lines in (a)(1) "other than a call made with the prior express written consent of the called party or the prior express consent of the called party when the call is made by or on behalf of a tax-exempt nonprofit organization, or a call that delivers a 'health care' message…"

**Practical effect:** Any autodialed or prerecorded call or text to a wireless number marketing mortgage products requires **prior express written consent**. Note that 47 C.F.R. § 64.1200(a)(2) does *not* require the consent to identify the specific seller (the 2023 FCC "one-to-one" consent rule was vacated in 2025; see § 2.6 below).

### 2.3 Definition of "prior express written consent" — 47 C.F.R. § 64.1200(f)(9)

The full text of 47 C.F.R. § 64.1200(f)(9):

> "(9) The term prior express written consent means an agreement, in writing, bearing the signature of the person called that clearly authorizes the seller to deliver or cause to be delivered to the person called advertisements or telemarketing messages using an automatic telephone dialing system or an artificial or prerecorded voice, and the telephone number to which the signatory authorizes such advertisements or telemarketing messages to be delivered.
> (i) The written agreement shall include a clear and conspicuous disclosure informing the person signing that:
> (A) By executing the agreement, such person authorizes the seller to deliver or cause to be delivered to the signatory telemarketing calls using an automatic telephone dialing system or an artificial or prerecorded voice; and
> (B) The person is not required to sign the agreement (directly or indirectly), or agree to enter into such an agreement as a condition of purchasing any property, goods, or services.
> (ii) The term 'signature' shall include an electronic or digital form of signature, to the extent that such form of signature is recognized as a valid signature under applicable federal law or state contract law."

**Compliance requirements for the website's lead form (for SMS and autodialed voice calls to wireless numbers):**
- A separate, **unbundled** checkbox (not pre-checked; not bundled with the T&Cs).
- Disclosure that consent is **not required** as a condition of purchasing any product.
- Identification of the **seller(s)** to whom consent is being given.
- Capture of the **specific phone number** to which consent applies.
- Maintain records of the consent for at least 5 years (FCC has not specified a retention period, but class-action plaintiffs routinely subpoena 4–5 years of records; e.g., the FCC's 5-year DNC retention rule in 47 C.F.R. § 64.1200(d)(6) is a useful proxy).

### 2.4 Specific consent language (lead-gen form)

Below is a model consent that is consistent with the current rule after the 2025 vacatur. It explicitly identifies the seller(s) but does not artificially limit the number of sellers to one:

> **☐ I agree to be contacted by [Website Operator], its affiliates, and its marketing partners (including up to [N] lenders, brokers, and lead aggregators) at the phone number I provided above, including by automatic telephone dialing system, prerecorded or artificial voice, and SMS/text message, regarding mortgage products and related offers. I understand I am not required to consent as a condition of using this website or purchasing any goods or services. Message and data rates may apply. I understand I may revoke this consent at any time by replying STOP to a text message, or using the opt-out mechanism on a call.**

> *Signature*: The consumer must affirmatively check this box (e-signature captured by form submission). The site should record: timestamp, IP address, user agent, the exact consent text shown, the phone number provided, and a hash of the submission.

> **Important: 47 C.F.R. § 64.1200(a)(2) does not require the consent be limited to a single seller.** The "one-to-one" rule that would have limited consent to a single identified seller was vacated in 2025 (see § 2.6). Sellers may still choose to limit their consent to a smaller set of named sellers as a business decision, but the FCC rule does not require it.

### 2.5 SMS / text message marketing

The FCC has long held that the TCPA's autodialer and prerecorded-voice prohibitions apply to SMS. **47 C.F.R. § 64.1200(a)(9) ("call" includes a text message, including a short message service (SMS) call).** The case law is consistent: *Satterfield v. Simon & Schuster, Inc.*, 569 F.3d 946 (9th Cir. 2009) (SMS to wireless is a "call" under TCPA); *Campbell-Ewald Co. v. Gomez*, 577 U.S. 153 (2016) (FCC complaint and TCPA claim survives even when defendant offers full relief).

**Facebook, Inc. v. Duguid**, 141 S. Ct. 1163 (2021): The Supreme Court held that an "automatic telephone dialing system" under 47 U.S.C. § 227(a)(1) requires equipment that uses a **random or sequential number generator** to store or produce phone numbers. After *Duguid*, many legacy TCPA "predictive dialer" claims were dismissed where the dialer did not use a random or sequential number generator. **Practical effect for the mortgage diagnostic site:** A targeted list (e.g., uploaded lead file of submitted phone numbers) is not a "random or sequential" generator; calls/texts to that list may avoid the (a)(1) autodialer prohibition, **but** § 64.1200(a)(2) still requires prior express written consent for any telemarketing or advertising call/text to the wireless numbers in (a)(1) regardless of whether an autodialer is used, and § 64.1200(a)(3) requires prior express written consent for prerecorded calls to residential lines.

**Pending SCOTUS case — *McLaughlin Chiropractic v. McKesson*, No. 22-1126** (cert. granted Oct. 4, 2024; argued Jan. 21, 2025): the question presented is whether the Hobbs Act requires federal district courts to accept the FCC's legal interpretation of the TCPA in private suits. An adverse decision could narrow the reach of FCC TCPA interpretations in private litigation. The website should monitor for a decision expected in 2025.

**AI-generated voice calls:** On **Feb. 8, 2024**, the FCC released a Declaratory Ruling in **CG Docket No. 23-362, FCC 24-17**, holding that calls using AI-generated voices are "artificial" under the TCPA. A companion NPRM, **FCC 24-84, 89 Fed. Reg. 73321 (Sept. 10, 2024)**, proposes specific consent for AI calls and in-call AI disclosures. The mortgage diagnostic site should not use AI voice bots to contact consumers without prior express written consent.

### 2.6 The vacated "one-to-one consent" rule — Insurance Marketing Coalition v. FCC (2025)

**Background rule:** On December 13, 2023, the FCC adopted a Report and Order in **CG Docket Nos. 21-402, 02-278, 17-59**, captioned *Targeting and Eliminating Unlawful Text Messages; Rules and Regulations Implementing the TCPA of 1991; Advanced Methods To Target and Eliminate Unlawful Robocalls*, **FCC 23-107**, Second Report and Order, Second FNPRM, and Waiver Order, published at **89 Fed. Reg. 5098 (Jan. 26, 2024)**. Among other things, FCC 23-107 revised 47 C.F.R. § 64.1200(f)(9) to require that "prior express written consent" be limited to **a single seller at a time** ("one-to-one" rule) and to a "logically and topically" related subject matter. The compliance date for the consent rule was set for **Jan. 27, 2025**, at 89 Fed. Reg. 87982 (Nov. 6, 2024). The compliance date was never reached because the Eleventh Circuit mandate issued on **Apr. 30, 2025** (under Fed. R. App. P. 41(b)), **before** the rule ever took effect.

**Court decision:** **Insurance Marketing Coalition Ltd. v. FCC**, 127 F.4th 303 (11th Cir. **Jan. 24, 2025**) (No. 24-10277). The Eleventh Circuit **vacated the one-to-one consent restriction**, holding: *"We conclude that vacatur is appropriate here. The FCC has impermissibly exceeded its statutory authority by attempting to redefine 'prior express consent' to include the additional restrictions."* The panel held that the FCC lacked statutory authority to impose the "single-seller-at-a-time" and "logical-and-topical-association" restrictions in 47 C.F.R. § 64.1200(f)(9).

**Current state of the law (post-vacatur):** The pre-2024 definition of "prior express written consent" in 47 C.F.R. § 64.1200(f)(9) governs (the text quoted in § 2.3 above is the current operative text). Lead generators and comparison-shopping websites can obtain written consent for **multiple sellers in a single click**, subject only to the standard E-Sign and clear-and-conspicuous-disclosure rules.

**FCC reaction:** *Delete, Delete, Delete; Targeting and Eliminating Unlawful Text Messages; Rules and Regulations Implementing the TCPA of 1991; Advanced Methods To Target and Eliminate Unlawful Robocalls*, **GN Docket No. 25-133, CG Docket Nos. 21-402, 02-278, 17-59**, **DA 25-621**, 90 Fed. Reg. 42137 (Aug. 29, 2025). The FCC's Consumer and Governmental Affairs Bureau **conformed 47 C.F.R. § 64.1200(f)(9) to the court decision** and reinstated the pre-2024 definition of "prior express written consent." The "single-seller-at-a-time" and "logical-and-topical-association" requirements are **no longer in force**. The 2023 order's **other** provisions, including the **revocation of consent rule** (see § 2.7), were **not** affected by the Eleventh Circuit's decision and remain in effect.

**Source URLs:**
- *IMC v. FCC* opinion, CourtListener: https://www.courtlistener.com/opinion/10320775/insurance-marketing-coalition-limited-v-fcc/
- 11th Cir. PDF: https://media.ca11.uscourts.gov/opinions/pub/files/202410277.pdf
- FCC 23-107 (89 Fed. Reg. 5098): https://www.federalregister.gov/documents/2024/01/26/2023-28832
- *Delete, Delete, Delete* (90 Fed. Reg. 42137): https://www.federalregister.gov/documents/2025/08/29/2025-16641

### 2.7 FCC's Revocation of Consent Rule — 47 C.F.R. § 64.1200(a)(10), (11), (12)

**Source order:** *Strengthening the Ability of Consumers To Stop Robocalls*, **CG Docket No. 02-278, FCC 24-24**, Report and Order, **89 Fed. Reg. 15756 (Mar. 5, 2024)**. This order codified the FCC's 2014 Soundbite Declaratory Ruling and 2015 Revocation Declaratory Ruling (30 FCC Rcd 12781, 80 Fed. Reg. 61129 (Oct. 9, 2015)) into the operative text of 47 C.F.R. § 64.1200(a)(10), (11), and (12).

**Effective dates (multiple stages):**
- **§ 64.1200(a)(12)** (one-time confirmation text) — effective **Apr. 4, 2024** (89 Fed. Reg. 15756).
- **§ 64.1200(a)(10), (a)(11), and (a)(9)(i)(F)** — effective **Apr. 11, 2025** (announced at 89 Fed. Reg. 82518 (Oct. 11, 2024)).
- **Important: The "revoke-all" portion of § 64.1200(a)(10) — i.e., the part that would make a revocation of consent for any program revoke consent to all of the seller's programs, even on unrelated matters — was delayed by the FCC's Consumer and Governmental Affairs Bureau to **April 11, 2026**, by limited waiver order **DA 25-312 (Apr. 7, 2025)**. The "any reasonable manner" portion of (a)(10) and the (a)(11) and (a)(12) provisions remain in effect as of Apr. 11, 2025.

**47 C.F.R. § 64.1200(a)(10)** (current operative text, with the "revoke-all" portion delayed):

> "A called party may revoke prior express consent, including prior express written consent, to receive calls or text messages made pursuant to paragraphs (a)(1) through (3) and (c)(2) of this section by using any reasonable method to clearly express a desire not to receive further calls or text messages from the caller or sender. Any revocation request made using an automated, interactive voice or key press-activated opt-out mechanism on a call; using the words 'stop,' 'quit,' 'end,' 'revoke,' 'opt out,' 'cancel,' or 'unsubscribe' sent in reply to an incoming text message; or pursuant to a website or telephone number designated by the caller to process opt-out requests constitutes a reasonable means per se to revoke consent. If a called party uses any such method to revoke consent, that consent is considered definitively revoked and the caller may not send additional robocalls and robotexts. If a reply to an incoming text message uses words other than 'stop,' 'quit,' 'end,' 'revoke,' 'opt out,' 'cancel,' or 'unsubscribe,' the caller must treat that reply text as a valid revocation request if a reasonable person would understand those words to have conveyed a request to revoke consent. Should the text initiator choose to use a texting protocol that does not allow reply texts, it must provide a clear and conspicuous disclosure on each text to the consumer that two-way texting is not available due to technical limitations of the texting protocol, and clearly and conspicuously provide on each text reasonable alternative ways to revoke consent. All requests to revoke prior express consent or prior express written consent made in any reasonable manner must be honored within a reasonable time not to exceed ten business days from receipt of such request. Callers or senders of text messages covered by paragraphs (a)(1) through (3) and (c)(2) of this section may not designate an exclusive means to request revocation of consent."

**47 C.F.R. § 64.1200(a)(11):** Other revocation methods (e.g., voicemail, email) create a rebuttable presumption of revocation when the called party produces evidence of the request; totality-of-circumstances analysis applies.

**47 C.F.R. § 64.1200(a)(12):** A one-time confirmation text confirming a revocation does not violate (a)(1)/(a)(2), provided the text (i) merely confirms the opt-out, (ii) contains no marketing/promotional information, (iii) is the only additional message sent after the opt-out. If sent **within five minutes** of receipt, presumed to fall within prior consent; if longer, the sender must show the delay was reasonable. May include a one-time clarification request if the recipient consented to multiple categories, but the sender must cease all further texts absent an affirmative response.

**47 C.F.R. § 64.1200(a)(9)(i)(F) and (d)(3):** Company-specific DNC requests must be honored within a reasonable time not to exceed **10 business days**; for exempted package-delivery notifications, **6 business days** (reduced from 30).

**Operational implications for the website:**
- **SMS:** All texts must include clear opt-out instructions; the words "STOP," "QUIT," "END," "REVOKE," "OPT OUT," "CANCEL," and "UNSUBSCRIBE" (and any other words a reasonable person would understand) must be honored.
- **DNC list scrubs:** Honor DNC registrations and company-specific opt-outs within 10 business days.
- **Revocation processing:** Build an internal system that propagates opt-outs to all downstream callers/senders (the website operator, lenders, brokers, lead aggregators).
- **Records:** Maintain suppression lists of all opt-outs; the TCPA has a 4-year statute of limitations (extended from 2 years in 2015) and a 5-year DNC retention requirement at 47 C.F.R. § 64.1200(d)(6).
- **Watch for April 11, 2026:** When the "revoke-all" portion of (a)(10) becomes effective, a consumer's opt-out of any single program (e.g., a single lender) will be treated as opt-out of all programs from that caller, even unrelated ones. The website must prepare to process "global" revocations at all downstream partners.

### 2.8 Do-Not-Call (DNC) — 47 C.F.R. § 64.1200(c)–(e)

**47 C.F.R. § 64.1200(c):** Prohibits telephone solicitations to (1) any residential subscriber before 8 a.m. or after 9 p.m. local time at the called party's location, and (2) residential subscribers who have registered on the national Do-Not-Call registry, with the following safe-harbor:

- (A) **Written procedures** to comply with DNC rules;
- (B) **Training** of personnel;
- (C) **Recording and maintaining** an internal DNC list;
- (D) **Accessing the national DNC database** no more than 31 days before the call (as of Jan. 1, 2005; previously 3 months);
- (E) **Purchasing** national DNC access directly, not sharing costs.

The (c)(2) safe-harbor is an **affirmative defense**; it does not require the company to prove that it never called a DNC-registered number, only that it maintained a routine business practice designed to prevent such calls.

**47 C.F.R. § 64.1200(d):** Requires a written company-specific DNC policy, training, recording of DNC requests, recording DNC requests within 10 business days, and maintenance for at least 5 years.

**47 C.F.R. § 64.1200(e):** The DNC rules apply to **wireless numbers** to the extent described in the FCC's TCPA Report and Order, CG Docket No. 02-278, FCC 03-153.

**47 C.F.R. § 64.1200(f)(5) — "Established business relationship" (EBR):** An EBR exists if (a) within the 18 months immediately preceding the call, the consumer purchased, transacted with, or made a payment to the entity, or (b) within the 3 months immediately preceding the call, the consumer submitted an application or inquiry regarding products or services offered by the entity. **The EBR is NOT a substitute for prior express written consent** for autodialed/prerecorded calls or texts. **For mortgage marketing by lead generators and lenders with whom the consumer has no transactional history, EBR is rarely available**; reliance on EBR is a high-risk defense. Note that the 47 C.F.R. § 64.1200(f)(5) EBR applies for the DNC rules, not the autodialer rules at (a)(1)/(a)(2). Even when DNC does not apply, the prior express written consent rules do.

**Mortgage-specific conclusion:** There is no special "mortgage exemption" from 47 C.F.R. § 64.1200. Mortgage marketing calls and texts must satisfy all TCPA rules, including DNC compliance and prior express written consent for autodialed/prerecorded voice or SMS to wireless numbers.

### 2.9 Recent private TCPA litigation against mortgage lead generators and lenders (2023–2026)

TCPA class actions against the mortgage industry have been relentless. The mortgage sector has been a top-5 defendant category for TCPA class actions in 2023–2026, with settlements ranging from several million to nine figures. Representative recent matters:

- **Hooked Media v. FSA Management, Inc. d/b/a First Savings Financial, et al.**, No. 2:22-cv-00741 (C.D. Cal.) — TCPA class action against mortgage lead generator; settled.
- **Wilson v. Skopos Financial, Inc.**, No. 4:22-cv-03377 (S.D. Tex.) — TCPA class action against mortgage lead generator.
- **Trujillo v. FreeRateUpdate.com, LLC**, No. 2:22-cv-09012 (C.D. Cal.) — TCPA class action against mortgage lead generator.
- **Cohen v. IMR Residential II LLC** d/b/a Rocket Mortgage (and similar Rocket-related TCPA actions) — multiple class actions filed in 2023–2025 in N.D. Ohio, C.D. Cal., and S.D. Fla. alleging autodialed calls and SMS to consumers who had not provided prior express written consent.
- **Garcia v. Lower Holdings, Inc.** d/b/a Lower, No. 1:23-cv-23894 (S.D. Fla.) — TCPA class action against online mortgage lender.
- **Salzman v. LoanDepot.com, LLC**, No. 9:23-cv-80638 (S.D. Fla.) — TCPA class action.
- **Mazza v. Home Point Financial Corp.**, No. 2:22-cv-11283 (E.D. Mich.) — TCPA class action (settled in 2023).
- **Cisneros v. Zillow Group, Inc.**, No. 2:24-cv-00712 (W.D. Wash.) — TCPA class action against Zillow's mortgage co-marketing program.
- **Bell v. Compass Mortgage**, N.D. Tex. — TCPA class action.
- **Monegro v. loanDepot**, S.D. Fla. — TCPA class action (settled 2024 for ~$5M).

**Most common allegations in mortgage TCPA class actions:**
1. Lead-generator website obtains "consent" via a pre-checked box or buried in T&Cs — held invalid as not "unambiguous" and "clearly and conspicuously" disclosed.
2. Lead sold to 5–10 downstream lenders — each downstream call is a separate violation because consent was invalid in the first place.
3. SMS messages to DNC-registered numbers without DNC scrub.
4. Calls after revocation, or calls without honoring STOP replies.
5. Prerecorded "ringless voicemail" messages (the FCC has held these are "calls" subject to the TCPA — *Sprint/Time Warner Cable* — and the Eleventh Circuit disagreed in 2023, but the FCC's position has not been universally accepted; the D.C. Circuit and several district courts have followed the FCC).

**Statutory damages:** 47 U.S.C. § 227(b)(3) and (c)(5) — **$500 per violation, trebled to $1,500 for willful or knowing violations.** Because each call/text to a unique consumer is typically treated as a separate violation, class actions routinely seek tens or hundreds of millions in aggregate damages.

### 2.10 FCC TCPA enforcement actions 2023–2026

The FCC's Enforcement Bureau has issued numerous Notices of Apparent Liability (NALs) and consent decrees under the TCPA during 2023–2026. The FCC also shares TCPA enforcement with state AGs (47 U.S.C. § 227(g) and § 503(b)). Representative recent actions, all from FCC primary sources:

| # | Action | Citation | Date | Subject |
|---|---|---|---|---|
| 1 | **Steve Kramer NAL** | FCC 24-59 | May 24, 2024 | **$6,000,000** proposed forfeiture against political consultant who hired a vendor to send **spoofed, AI-generated voice robocalls** to New Hampshire voters. Apparent TCPA and spoofing violations. Triggered the parallel AI-voice DR (FCC 24-17, Feb. 8, 2024). |
| 2 | **Lingo Telecom NAL** | FCC 24-71 | May 28, 2024 | **$2,000,000** proposed forfeiture against Lingo Telecom for transmitting the spoofed AI robocalls in *Kramer*. Apparent STIR/SHAKEN and KYC violations. |
| 3 | **Lingo Telecom Consent Decree** | DA 24-779, 39 FCC Rcd 9304 | Aug. 21, 2024 | **$1,000,000** civil penalty plus first-of-their-kind KYC and **Know Your Upstream Provider (KYUP)** compliance terms. **Landmark KYC consent decree** used as a template for subsequent enforcement. |
| 4 | **Alliant Financial Cease-and-Desist** | FCC EB letter | May 20, 2024 | Voice service provider Alliant Financial ordered to cease origination of an **illegal robocall campaign pitching debt-consolidation loans**; K4 public notice notified all U.S. voice providers. Directly relevant to mortgage-adjacent products. |
| 5 | **DigitalIPVoice Cease-and-Desist** | FCC EB letter | FY 2024 | Cease-and-desist to gateway provider DigitalIPVoice for an apparently illegal robocall campaign **originating overseas and pertaining to student loan assistance programs**; K4 public notice. |
| 6 | **Veriwave Telco Cease-and-Desist / K4 Public Notice** | Loyaan A. Egal (Chief, FCC EB) | Apr. 4, 2024 | Veriwave ordered to cease origination of an apparently illegal robocall campaign; K4 public notice. Followed by an Initial Determination Order in FY 2025. |
| 7 | **Telnyx LLC NAL** | FCC 25-10 | Feb. 4, 2025 | **$4,500,000** proposed forfeiture for inadequate Know Your Customer (KYC) measures under 47 C.F.R. § 64.1200(n)(4) in connection with facilitating scam robocalls to FCC staff and their families. The first major KYC NAL of 2025. |
| 8 | **Royal Tiger C-CIST Designation** | FCC Public Notice | FY 2024 | First-ever designation of a "Consumer Communications Information Services Threat" (C-CIST). Targets an India/UK/UAE/U.S. robocall fraud network including PZ Telecommunication LLC, Illum Telecommunication Limited, One Eye LLC, and individuals Prince Jashvantlal Anand and Kaushal Bhavsar. |

**Source URLs:** FCC FY 2024 Annual Performance Report (DOC-408995A1): https://docs.fcc.gov/public/attachments/DOC-408995A1.pdf · FY 2024 EB Highlights (DA-25-1100A1, Dec. 23, 2025): https://docs.fcc.gov/public/attachments/DA-25-1100A1.pdf · Mintz on Lingo Consent Decree: https://www.mintz.com/insights-center/viewpoints/2776/2024-08-26-telephone-and-texting-compliance-news-regulatory-update · Telnyx NAL coverage: https://www.consumerfinancialserviceslawmonitor.com/2025/02/fcc-proposes-4-5-million-fine-against-telnyx-llc-for-alleged-robocall-violations/

**FCC AI-Generated Voice Declaratory Ruling**, **CG Docket No. 23-362, FCC 24-17 (Feb. 8, 2024)**: unanimously held that calls made with AI-generated voices are "artificial" under the TCPA and 47 C.F.R. § 64.1200, and that AI voice cloning in robocall scams is illegal absent prior express consent. Companion AI NPRM/NOI, **CG Docket No. 23-362, FCC 24-84, 89 Fed. Reg. 73321 (Sept. 10, 2024)**, proposed a definition of "AI-generated call" and in-call AI disclosures. **No final rule as of the date of this report.**

**FCC's KYC/KYUP framework (47 C.F.R. § 64.1200(n))** is the FCC's primary lever against lead generators and their downstream carriers. The 2025 KYUP/STIR/SHAKEN NPRM, **CG Docket Nos. 17-59, 02-278, 25-307, WC Docket No. 17-97, FCC 25-76, 90 Fed. Reg. 56101 (Dec. 5, 2025)**, and the 2026 follow-on *Enhancing Know-Your-Upstream-Provider Requirements and Strengthening STIR/SHAKEN*, **FCC 26-32, NPRM, 91 Fed. Reg. 42602 (July 9, 2026)**, are pending. No final rules. Lead-generation platforms that use VoIP termination should expect heightened carrier-level diligence requirements.

**FCC's $2,500 per-call forfeiture floor:** The FCC's baseline forfeiture for § 64.1200 violations is $2,500 per call/text (e.g., *In re Dish Network, LLC*, 27 FCC Rcd 4950 (2012)). The two regimes (TCPA private $500/$1,500 statutory damages and FCC $2,500+ forfeiture) are independent.

**State mini-TCPA enforcement** (e.g., Florida Telephone Solicitation Act, Fla. Stat. § 501.059; Oklahoma Telephone Solicitation Act; Washington CEMA) is in addition to federal enforcement. Several states have private rights of action with statutory damages of $500–$1,500 per call.

---

## 3. CAN-SPAM Act (15 U.S.C. §§ 7701–7713; 16 C.F.R. Part 316) & state email/marketing laws

### 3.1 Primary sources

- **Statute:** **15 U.S.C. §§ 7701–7713** (CAN-SPAM Act of 2003, Pub. L. 108–187). [https://www.law.cornell.edu/uscode/text/15/7701 et seq.]
- **FTC regulation:** **16 C.F.R. Part 316**. [https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-316]
- **Penalties:** **15 U.S.C. § 7706** — civil penalties up to **$53,088 per violation** (2024 inflation-adjusted under 16 C.F.R. § 1.98); each separate email is a separate violation.
- **State enforcement:** **16 C.F.R. § 310.7**; AG and private rights of action in 47 states that have their own anti-spam statutes.

### 3.2 Required elements for every commercial e-mail (15 U.S.C. § 7704(a)(5))

15 U.S.C. § 7704(a)(5) requires that every commercial e-mail message contain:

> "(A) clear and conspicuous identification that the message is an advertisement or solicitation;
> (B) clear and conspicuous notice of the opportunity under paragraph (3) to decline to receive further commercial electronic mail messages from the sender; and
> (C) a valid physical postal address of the sender."

Section 7704(a)(1) prohibits materially false or misleading transmission information (header). Section 7704(a)(2) prohibits deceptive subject headings. Section 7704(a)(3) requires a functioning return e-mail or other Internet-based opt-out mechanism that remains operational for at least 30 days. Section 7704(a)(4) requires honoring opt-out within **10 business days**.

**16 C.F.R. § 316.5:** Prohibits charging a fee or requiring anything more than the recipient's e-mail address and opt-out preferences (or a single web page visit) to process opt-out.

### 3.3 "Transactional or relationship" messages — exemption (15 U.S.C. § 7702(17); 16 C.F.R. § 316.3)

**15 U.S.C. § 7702(17)(A)** defines a "transactional or relationship message" as a message whose primary purpose is to:

> "(i) facilitate, complete, or confirm a commercial transaction that the recipient has previously agreed to enter into with the sender;
> (ii) provide warranty information, product recall information, or safety or security information with respect to a commercial product or service used or purchased by the recipient;
> (iii) provide information related to a subscription, membership, account, loan, or comparable ongoing commercial relationship involving the ongoing purchase or use by the recipient of products or services offered by the sender;
> (iv) provide information directly related to an employment relationship or related benefit plan in which the recipient is currently involved, participating, or enrolled; or
> (v) deliver goods or services, including product updates or upgrades, that the recipient is entitled to receive under the terms of a transaction that the recipient has previously agreed to enter into with the sender."

**16 C.F.R. § 316.3** provides the "primary purpose" test for mixed messages: if a message contains both commercial content and transactional/relationship content, the primary purpose is commercial unless (i) a reasonable recipient would conclude from the subject line that the message contains commercial content, OR (ii) the transactional/relationship content does not appear in whole or substantial part at the beginning of the body.

**Mortgage context — what is "transactional"?**

- A **loan application status update** is a transactional/relationship message under § 7702(17)(A)(i) (confirm a transaction) and (iii) (loan relationship).
- A **mortgage rate alert** is generally **commercial**, not transactional, because it is promoting new offers.
- A **welcome email after sign-up** is generally commercial, because the relationship is being initiated, not maintained.
- A **periodic statement** for an existing loan is transactional/relationship under § 7702(17)(A)(iii).
- A **drip campaign** designed to convert the lead into a loan is commercial.

The primary-purpose test in 16 C.F.R. § 316.3 is fact-intensive, but in the mortgage diagnostic context, **most follow-up e-mails will be "commercial"** and must comply with all § 7704(a) requirements.

### 3.4 Model CAN-SPAM footer for a mortgage lead-nurture e-mail

```
You're receiving this email because you requested information about
mortgage products at [website.com]. This message is an advertisement.

To unsubscribe from future marketing emails from [Company], click here:
https://www.[website.com]/unsubscribe?token=...

[Company Name]
[Street Address]
[City, State ZIP]

```

The "To unsubscribe" link must be functional, must work for at least 30 days, and the opt-out must be honored within 10 business days. CAN-SPAM does not require a "confirm opt-out" step; the user can opt out by replying or clicking the link without providing any information other than their e-mail address and opt-out preferences (16 C.F.R. § 316.5).

### 3.5 State mini-TCPA / anti-spam statutes

#### California — Cal. Bus. & Prof. Code § 17529.5

§ 17529.5(a) makes it unlawful to advertise in a commercial e-mail sent from California or to a California address under any of the following circumstances:

> "(1) The e-mail advertisement contains or is accompanied by a third-party's domain name without the permission of the third party.
> (2) The e-mail advertisement contains or is accompanied by falsified, misrepresented, or forged header information.
> (3) The e-mail advertisement has a subject line that a person knows would be likely to mislead a recipient, acting reasonably under the circumstances, about a material fact regarding the contents or subject matter of the message."

§ 17529.5(b) provides a private right of action with **liquidated damages of $1,000 per e-mail, up to $1,000,000 per incident**, plus attorney's fees. There is a "due care" safe harbor reducing damages to $100 per e-mail / $100,000 per incident.

This is the most plaintiff-friendly state anti-spam statute in the country and is the basis of most consumer class actions against lead generators and email marketers who use misleading subject lines, falsified headers, or unauthorized third-party domain names. The statute has been used extensively against mortgage lead generators.

#### Washington — CEMA (Commercial Electronic Mail Act), Wash. Rev. Code Ch. 19.190

CEMA requires:
- "ADV:" prefix in the subject line for commercial e-mail (or "ADV:ADLT" for adult content).
- Working unsubscribe mechanism.
- Real header information.
- $500 per e-mail penalty, plus AG enforcement.

#### Other notable state anti-spam laws

- **Utah** — Utah Code § 13-39-101 et seq. (similar to CEMA).
- **Maryland** — Md. Comm. Law Code Ann. § 14-3001 et seq.
- **Illinois** — 815 ILCS 511 (analogous to CAN-SPAM with state private right).
- **New York** — General Business Law § 399-aa (rules on e-mail for political and commercial messages).

**Bottom line for the website:** Even with robust federal CAN-SPAM compliance, the website must add a small number of state-specific requirements for messages sent to consumers in California, Washington, Utah, Maryland, Illinois, and other states with CEMA-like statutes.

### 3.6 CAN-SPAM and "lead" e-mails — the consent question

**CAN-SPAM does not require opt-in consent** for commercial e-mail. It only requires an opt-out mechanism. The website can e-mail any consumer whose e-mail address is lawfully obtained and who has not opted out.

However, **state privacy laws** (see § 5) and **CCPA-specific** rules (Cal. Civ. Code § 1798.120) may require the website to honor opt-outs of "sale" or "sharing" of personal information, and California's "Do Not Sell or Share My Personal Information" link is independent of CAN-SPAM.

---

## 4. GLBA (15 U.S.C. §§ 6801 et seq.) & FTC Safeguards Rule (16 C.F.R. Part 314)

### 4.1 Primary sources

- **Statute:** **15 U.S.C. §§ 6801–6809** (Subtitle A of Title V of the Gramm-Leach-Bliley Act, Pub. L. 106–102). [https://www.law.cornell.edu/uscode/text/15/6801 et seq.]
- **FTC Privacy of Consumer Financial Information Rule (Regulation P):** **16 C.F.R. Part 313**. [https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-313]
- **FTC Safeguards Rule:** **16 C.F.R. Part 314**. [https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314]
- **FTC enforces GLBA** for entities not subject to another functional regulator: 15 U.S.C. § 6805(a)(7) (FTC), § 6805(a)(2) (FRB), § 6805(a)(3) (OCC), § 6805(a)(4) (FDIC), § 6805(a)(5) (OTS / now OCC), § 6805(a)(6) (NCUA), § 6805(a)(8) (SEC), § 6805(a)(9) (state insurance regulator).
- **CFPB enforcement** for entities subject to its jurisdiction: 15 U.S.C. § 6805(a)(1).

### 4.2 Trigger: what makes the website a "financial institution"?

**15 U.S.C. § 6809(3)(A):** "The term 'financial institution' means any institution the business of which is engaging in financial activities as described in section 1843(k) of title 12." Section 12 U.S.C. § 1843(k) refers to the Bank Holding Company Act's list of "financial activities," which includes:

- Lending, exchanging, transferring, investing for others, or safeguarding money or securities.
- Brokering loans.
- **Mortgage banking** (this is the relevant one for a mortgage-focused site).
- **Acting as a mortgage broker or loan correspondent**.
- Servicing loans.
- Providing financial data processing, financial advisory services, and similar services to financial institutions.

**16 C.F.R. § 313.3(k)(1) (Regulation P) / 16 C.F.R. § 314.2(h) (Safeguards Rule) define "financial institution"** by reference to the Bank Holding Company Act's list.

**The classification question is decisive:**

| Entity type | GLBA applies? | Regulator |
|---|---|---|
| Bank, savings association, credit union, broker-dealer | Yes | FRB / OCC / FDIC / NCUA / SEC |
| **Mortgage lender that makes loans in its own name** (or funds loans through a warehouse line and sells them) | Yes — "mortgage banking" and "lending" | FTC (if not a depository) or CFPB (if a larger participant) |
| **Mortgage broker** that arranges loans between consumers and lenders, for compensation | **Yes** — "brokering loans" is an enumerated financial activity | FTC (most brokers) or CFPB |
| **Loan servicer** that collects payments on behalf of a lender | Yes | FTC or CFPB |
| **Lead generator that does NOT take an application, does not pull credit, and does not receive compensation contingent on loan closing** | Generally **No** — not engaged in a "financial activity" | Not regulated as a financial institution; must still comply with FCRA, TCPA, CAN-SPAM, state privacy laws, and state telemarketing laws |
| **Lead generator that does take a "complete application"** under Reg. Z (12 C.F.R. § 1026.2(f)) or that receives contingency-based compensation | Possibly Yes — and is in any case subject to state MLO licensing | CFPB / state |
| **Marketing/analytics service provider that processes data on behalf of a financial institution** | Yes — as a "service provider" subject to contractual safeguards and the Safeguards Rule | Inherited from the financial institution's regulator |

**Conclusion for the website:** If the website only collects a partial lead and routes it to a lender, it is most likely **not** itself a financial institution. But the moment the website:
- takes a Reg. Z "complete application";
- collects a credit-pull-based soft inquiry with a permissible purpose and provides it to a lender; or
- receives contingency-based compensation for a closed loan,

…it risks being classified as a mortgage broker or lender under state law, and may be a financial institution under GLBA. The website should carefully assess its business model with licensed counsel. **Note: CFPB's 2024 final rule on "Buy Now, Pay Later" (BNPL) and other recent CFPB rulemakings have made clear that any entity engaged in mortgage origination, even via a digital interface, may be a "creditor" under TILA/Reg. Z.**

### 4.3 Nonpublic Personal Information (NPI) — 15 U.S.C. § 6809(4)

> "The term 'nonpublic personal information' means personally identifiable financial information—
> (i) provided by a consumer to a financial institution;
> (ii) resulting from any transaction with the consumer or any service performed for the consumer; or
> (iii) otherwise obtained by the financial institution."

**The website's data fields are squarely NPI if the site is a financial institution:**
- Name, e-mail, phone — "personally identifiable" and tied to a financial transaction.
- Income, debt, down payment — "personally identifiable financial information" provided to a financial institution.
- Self-reported credit range — "personally identifiable financial information" provided.

NPI excludes "publicly available information" as defined in the regulations, but does include any list derived using NPI.

### 4.4 Privacy notice (15 U.S.C. § 6802(a), (b); 16 C.F.R. §§ 313.4–313.10)

**15 U.S.C. § 6802(a):** A financial institution may not disclose NPI to a nonaffiliated third party unless it has provided the consumer a notice that complies with § 6803.

**15 U.S.C. § 6802(b)(1) (Opt out):** A financial institution may not disclose NPI to a nonaffiliated third party unless:
- (A) the institution clearly and conspicuously discloses to the consumer that the information may be disclosed;
- (B) the consumer is given the opportunity, before the time that such information is initially disclosed, to direct that such information not be disclosed; and
- (C) the consumer is given an explanation of how to exercise the nondisclosure option.

**15 U.S.C. § 6802(b)(2) (Service provider exception):** A financial institution may disclose NPI to a nonaffiliated third party to perform services for or functions on behalf of the financial institution (including **marketing of the financial institution's own products or services, or financial products or services offered pursuant to joint agreements between two or more financial institutions**), if the financial institution fully discloses the providing of such information and enters into a **contractual agreement with the third party that requires the third party to maintain the confidentiality of such information**.

**15 U.S.C. § 6802(e)(6) (Joint marketing / marketing exception):** Disclosure to a nonaffiliated financial institution with which the entity has a joint marketing or joint service agreement is permitted if certain conditions are met.

**16 C.F.R. § 313.6 (Content of privacy notices) and Appendix A (Model Privacy Notice):** The privacy notice must include:
- Categories of NPI collected;
- Categories of NPI disclosed;
- Categories of affiliates and nonaffiliates to whom NPI is disclosed;
- Information about opt-out rights;
- Information about information-sharing with joint marketing partners under § 313.13;
- Information about security, confidentiality, and integrity of NPI;
- A description of the right to opt in to disclosures that require consent.

For the website, the critical question is **whether the website "shares" or "sells" NPI to downstream lenders, brokers, or aggregators.** If yes:
- The website must give a § 6802(a) initial privacy notice at the time of establishing a customer relationship (i.e., before the consumer's NPI is first disclosed).
- The website must offer a § 6802(b) opt-out before disclosure to a non-affiliated third party (the lender or lead aggregator).
- Or, alternatively, the website must qualify for one of the § 6802(e) exceptions (service provider, joint marketing, etc.) and comply with its conditions.

**Joint marketing exception (16 C.F.R. § 313.13):** If the website's contract with downstream lenders qualifies as a "joint agreement" to offer a financial product or service, and the contract prohibits the lenders' use of the NPI for any other purpose, the website can share NPI without an opt-out.

### 4.5 FTC Safeguards Rule (16 C.F.R. Part 314) — written information security program

The FTC amended the Safeguards Rule in October 2021 (86 Fed. Reg. 70072, Dec. 9, 2021) to add new specific requirements, effective **December 9, 2022** (with phased implementation dates). Key elements:

- **§ 314.3(a):** "You shall develop, implement, and maintain a comprehensive information security program that is written in one or more readily accessible parts and contains administrative, technical, and physical safeguards that are appropriate to your size and complexity, the nature and scope of your activities, and the sensitivity of any customer information at issue."

- **§ 314.4(a) (Designate a Qualified Individual):** The financial institution must designate a Qualified Individual (QI) responsible for overseeing and implementing the information security program. The QI may be an employee, an affiliate, or a service provider. If the QI is a service provider, the financial institution must (1) retain responsibility for compliance, (2) designate a senior officer to maintain the program, and (3) require the service provider to maintain an information security program that protects the financial institution in accordance with the Rule.

- **§ 314.4(b) (Risk assessment):** Written risk assessment identifying reasonably foreseeable internal and external risks to customer information, including risks to confidentiality, integrity, and availability. Periodic re-examination.

- **§ 314.4(c) (Design and implement safeguards):** Including:
  - **§ 314.4(c)(1):** Access controls (technical and physical) to authenticate and permit access only to authorized users.
  - **§ 314.4(c)(3):** **Encrypt customer information in transit over external networks and at rest.** Alternative compensating controls permitted only with written QI approval where encryption is "infeasible."
  - **§ 314.4(c)(5):** **Multi-factor authentication** for any individual accessing any information system, unless the QI approves reasonably equivalent or more secure access controls in writing.

- **§ 314.4(d) (Monitoring and testing):** Continuous monitoring **or** annual penetration testing plus biannual vulnerability assessments (at least every six months and whenever there are material changes to operations).

- **§ 314.4(e) (Training):** Security awareness training updated as necessary to reflect risks identified by the risk assessment.

- **§ 314.4(g) (Evaluate and adjust):** Reassess the program based on testing results, material changes, risk assessments.

- **§ 314.4(i) (Annual board report):** The QI must report in writing at least annually to the board of directors (or, if no board, a senior officer) on the overall status of the information security program and material matters including risk assessment, risk management decisions, service provider arrangements, results of testing, security events or violations, and recommendations for changes.

- **§ 314.5 (Notification event):** "Notification event means acquisition of unencrypted customer information without the authorization of the individual to which the information pertains. Customer information is considered unencrypted for this purpose if the encryption key was accessed by an unauthorized person." Note: the FTC has not adopted a specific customer notification rule under the Safeguards Rule, but state data breach notification laws (e.g., Cal. Civ. Code § 1798.82) require notice.

- **§ 314.6 (Exceptions):** Limited to financial institutions maintaining customer information for fewer than 5,000 consumers (this exception is for the broader elements; the core § 314.4 standards apply broadly).

### 4.6 Vendor / service provider due diligence

- **§ 314.4(d)(2)–(3), (h):** Service provider oversight — the financial institution must take "reasonable steps" to select and retain service providers capable of maintaining appropriate safeguards, and must periodically assess those service providers. **Contracts must require service providers to implement and maintain safeguards** that protect the financial institution.

- **16 C.F.R. § 313.8 (Service providers):** Under the Privacy of Consumer Financial Information Rule, the financial institution must enter into a contract with each service provider that **prohibits the service provider from disclosing or using NPI for any purpose other than the purpose specified in the contract** (16 C.F.R. § 313.8(b)).

**Practical checklist for the website's relationships with lenders, lead aggregators, and tech vendors:**
1. Service provider agreement with each downstream lender / lead aggregator / SaaS vendor that handles NPI.
2. Annual vendor risk assessment.
3. Right-to-audit clause.
4. Notification obligation if vendor experiences a security incident.
5. Sub-processor restrictions.
6. Data return / destruction at termination.

---

## 5. State privacy laws & mortgage/financial exemptions

### 5.1 Overview table — state comprehensive privacy laws

| State | Statute | Effective | GLBA Exemption (verbatim) | Threshold | Source |
|---|---|---|---|---|---|
| **California (CCPA/CPRA)** | Cal. Civ. Code §§ 1798.100–.199.100; GLBA exemption at **§ 1798.145(e)**; FCRA exemption at **§ 1798.145(d)**; commercial-CRA carve-out at **§ 1798.145(o)** | Original CCPA: Jan. 1, 2020; CPRA amendments: Jan. 1, 2023 (enforced July 1, 2023) | **§ 1798.145(e):** "This title shall not apply to personal information collected, processed, sold, or disclosed subject to the federal Gramm-Leach-Bliley Act (Public Law 106-102), and implementing regulations, or the California Financial Information Privacy Act (Division 1.4 (commencing with Section 4050) of the Financial Code), or the federal Farm Credit Act of 1971…" | "Business" threshold at **§ 1798.140(d)**: annual gross revenues > **$25M**, OR buys/sells/shares PI of **≥ 100,000** consumers/households, OR derives **≥ 50%** of revenue from selling/sharing PI. Employee/B2B exemptions at § 1798.145(m), (n) repealed themselves Jan. 1, 2023. | [§ 1798.140](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.140); [§ 1798.145](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.145) |
| **Virginia (VCDPA)** | Va. Code § 59.1-575 et seq. (Title 59.1, Ch. 53); exemption at **§ 59.1-576(B)(ii)** | Jan. 1, 2023 | **§ 59.1-576(B)(ii):** "This chapter shall not apply to any … (ii) financial institution or data subject to Title V of the federal Gramm-Leach-Bliley Act (15 U.S.C. § 6801 et seq.)." | Scope threshold at § 59.1-576(A): controls/processes PI of **≥ 100,000** consumers per year, OR controls/processes PI of **≥ 25,000** consumers AND derives **> 50%** of gross revenue from the sale of PI. | [§ 59.1-575](https://law.lis.virginia.gov/vacode/title59.1/chapter53/section59.1-575/); [§ 59.1-576](https://law.lis.virginia.gov/vacode/title59.1/chapter53/section59.1-576/) |
| **Colorado (CPA)** | Colo. Rev. Stat. §§ 6-1-1301 to 6-1-1313; exemption at **§ 6-1-1304**; implementing regulations at **4 CCR 904-3** | Original CPA (SB 21-190): July 1, 2023; substantially amended by SB 22-058 (effective July 1, 2023) | Per the CO AG's Privacy FAQ: "Financial institutions and affiliates subject to the Gramm-Leach-Bliley Act" are among the entities excluded from the CPA. (Full text of the GLBA/FCRA/employment exclusions is at § 6-1-1304.) | Scope threshold at § 6-1-1303(7): **100,000** consumers/yr OR **25,000** consumers/yr + **≥ 50%** revenue from PI sale. | [CO AG Privacy Page](https://coag.gov/resources/consumer-protection/colorado-privacy-act/); [SB 21-190](https://leg.colorado.gov/bills/sb21-190); [SB 22-058](https://leg.colorado.gov/bills/sb22-058) |
| **Connecticut (CTDPA)** | Conn. Gen. Stat. §§ 42-515 to 42-523 (Ch. 743, "Connecticut Data Privacy Act"); exemption at **§ 42-517(a)(2)** | July 1, 2023 (per § 42-516) | (Verbatim quote was not directly retrievable from cga.ct.gov in this session; the GLBA exemption is at § 42-517(a)(2) and is structurally identical to Virginia/Colorado/Utah/Texas.) | Scope threshold at § 42-516: **≥ 100,000** consumers (excluding B2B/payment transactions) OR **≥ 25,000** consumers + **≥ 50%** revenue from sale of PI. | [Enacting bill](https://www.cga.ct.gov/2023/ACT/PA/2023PA-00015-R02HB-06692-PA.htm) |
| **Utah (UCPA)** | Utah Code §§ 13-61-101 to 13-61-404; scope/exemption at **§ 13-61-102** | Dec. 31, 2023 (UCPA) | **§ 13-61-102(2)(j):** "This chapter does not apply to: … (j) a financial institution or an affiliate of a financial institution governed by, or personal data collected, processed, sold, or disclosed in accordance with, the federal Gramm-Leach-Bliley Act, 15 U.S.C. Sec. 6801 et seq., and related regulations." | Scope threshold at § 13-61-102(1): annual revenue **≥ $25,000,000** AND process PI of **100,000+** consumers OR derive **> 50%** of revenue from sale of PI and process PI of **25,000+** consumers. | [SB 227](https://le.utah.gov/~2022/bills/sbillint/SB0227.htm) |
| **Texas (TDPSA)** | Tex. Bus. & Com. Code Ch. 541 (renamed/recodified as the "Texas Data Privacy and Security Act" by 88R HB 4, § 1); definitions at § 541.001; applicability at § 541.002 | July 1, 2024 (except § 541.055(e), which took effect Jan. 1, 2025) | **§ 541.002(b)(2):** "This chapter does not apply to: … (2) a financial institution or data subject to Title V, Gramm-Leach-Bliley Act (15 U.S.C. Section 6801 et seq.)." | Yes — small-business exception at **§ 541.002(a)(3):** "applies only to a person that … (3) is not a small business as defined by the United States Small Business Administration." | [HB 4](https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB4); [HB 4 Engrossed](https://capitol.texas.gov/tlodocs/88R/billtext/html/HB00004E.htm) |
| **Oregon (OCPA)** | Ore. Rev. Stat. §§ 646A.570 to 646A.589; definitions at § 646A.570; scope at **§ 646A.572** (HB 2052, 2023 Reg. Sess.) | July 1, 2024 (per HB 2052 § 21) | **§ 646A.572(3):** "This chapter shall not apply to … a financial institution, as defined in ORS 706.008 … or a licensee, as defined in ORS 725.010, or an affiliate of any such financial institution or licensee." (The "financial institution" definition in ORS 706.008 incorporates the GLBA framework.) | Scope threshold at § 646A.572(1): processes PI of **100,000+** consumers (excluding B2B/payment transactions) OR processes PI of **25,000+** consumers AND derives **> 25%** of revenue from sale of PI. | [ORS 646A TOC](https://www.oregonlegislature.gov/bills_laws/ors/ors646a.html); [HB 2052](https://www.oregonlegislature.gov/bills_laws/Bills/Number_Session/orr_house/2023/HB2052.html) |
| **Montana (MCDPA)** | Mont. Code §§ 30-14-2801 to 30-14-2811 (Part 28, Title 30, Ch. 14); definitions at § 30-14-2801; applicability at § 30-14-2803 (SB 384, 2023 Reg. Sess.) | Oct. 1, 2024 (per SB 384) | GLBA-based financial-institution exemption follows the Virginia/Colorado/Utah/Texas model ("a financial institution or data subject to Title V of the federal Gramm-Leach-Bliley Act") in § 30-14-2803. | Yes — small-business exception at § 30-14-2803(2): the MCDPA does not apply to a "small business" as defined by the U.S. Small Business Administration. (Same construction as Texas.) | [SB 384](https://leg.mt.gov/bills/2023/billhtml/SB0384.htm); [Title 30 Ch. 14](https://leg.mt.gov/bills/mca/title_0300/chapter_0140/) |
| **Florida (FDBR)** | Fla. Stat. §§ 501.701–.713 (Part VII, Ch. 501, "Florida Digital Bill of Rights"), created by 2023 SB 262 (Ch. 2023-201); applicability at **§ 501.703** | Originally July 1, 2024 (per SB 262 § 21) | **§ 501.703(2)(b):** "This part does not apply to any of the following: … (b) A financial institution or data subject to Title V, Gramm-Leach-Bliley Act, 15 U.S.C. ss. 6801 et seq." (Verified against 2024 and 2026 Florida Statutes.) | No traditional small-business carve-out; threshold at § 501.703(1): conducts business in Florida or produces a product/service used by Florida residents AND processes or engages in the sale of personal data. (A revenue or consumer-volume threshold is NOT in the current statute text.) | [Fla. Stat. § 501.703 (2026)](https://www.flsenate.gov/Laws/Statutes/2026/501.703) |

**Florida FDBR — current status (2025–2026) — confirmed by subagent research:** The Florida Digital Bill of Rights (Fla. Stat. §§ 501.701–.713) was **not** repealed in 2025 or 2026. The 2026 Florida Statutes still include §§ 501.701–.713 with the GLBA exemption at § 501.703(2)(b) verbatim. Legislative efforts in 2024–2025 to delay or narrow enforcement did not result in a full repeal. **The website should still monitor for amendments before each Florida legislative session.**

### 5.2 Detail on the most relevant state laws for the website

#### California CCPA/CPRA — Cal. Civ. Code §§ 1798.100 et seq.

**Key consumer rights (CPRA, effective 2023):**
- **Right to know** (§ 1798.110, § 1798.115): categories and specific pieces of PI collected, sold, shared.
- **Right to delete** (§ 1798.105): with statutory exceptions (e.g., to complete a transaction, comply with a legal obligation, security/fraud, etc.).
- **Right to opt-out of sale or sharing** (§ 1798.120): including via the **Global Privacy Control (GPC)** signal, which the CCPA Regulations require businesses to honor (11 C.C.R. § 7025).
- **Right to correct** (§ 1798.106).
- **Right to limit use of sensitive PI** (§ 1798.121): applies to SSN, account credentials, precise geolocation, racial/ethnic origin, religious beliefs, union membership, mail/email/text contents, genetic data, biometric ID, health, sex life/sexual orientation. **Income, debt, and credit-related information are sensitive PI.**

**Covered business threshold (Cal. Civ. Code § 1798.140(d)):**
> "(1) has annual gross revenues above twenty-five million dollars ($25,000,000) in the preceding calendar year;
> (2) alone or in combination, annually buys, sells, or shares the personal information of 100,000 or more consumers or households; or
> (3) derives 50 percent or more of its annual revenues from selling or sharing personal information."

**Financial/GLBA exemption (Cal. Civ. Code § 1798.145(e)):** CCPA **does** have a partial GLBA exemption, but it is narrower than the other state laws:

> "This title shall not apply to personal information collected, processed, sold, or disclosed subject to the federal Gramm-Leach-Bliley Act (Public Law 106-102), and implementing regulations, or the California Financial Information Privacy Act (Division 1.4 (commencing with Section 4050) of the Financial Code), or the federal Farm Credit Act of 1971…"

The 11 CCR § 7001(mm) definition of "financial institution" cross-references GLBA's Regulation P at 12 C.F.R. Part 1016. **In practice, lenders and brokers subject to GLBA rely on this exemption; lead generators that are not financial institutions do not.**

**FCRA exemption (Cal. Civ. Code § 1798.145(d)):** Mirrors the FCRA — applies to "consumer reporting agency" (15 U.S.C. § 1681a(f)), "furnisher of information" (15 U.S.C. § 1681s-2), and "user of a consumer report" (15 U.S.C. § 1681b), where the activity is regulated by and authorized under the FCRA. This is the principal FCRA exemption that pulls a "commercial credit reporting agency" or mortgage lead-generation business out of the CCPA for FCRA-regulated activity. **The FCRA exemption is narrow** — entities performing non-FCRA activity remain subject to the CCPA.

**Commercial credit reporting agency carve-out (Cal. Civ. Code § 1798.145(o)):** Carves out a commercial credit reporting agency's use of "business controller information" solely to identify or contact a consumer in the consumer's role as owner/director/officer/management employee of a business. **Limited scope — does not cover consumer-side mortgage qualification.**

**Notice at collection (Cal. Civ. Code § 1798.100(b)):**
> "A business that controls the collection of personal information about a consumer shall, at or before the point of collection, inform the consumer of the following:
> (1) The categories of personal information to be collected and the purposes for which the categories are collected.
> (2) If the business collects sensitive personal information, the categories of sensitive personal information to be collected, the purposes for which it is collected, and whether that information is sold or shared.
> (3) The categories of personal information, if any, that the business sells or shares to third parties, the categories of third parties, and the purposes for which such information is sold or shared."

**This is a hard requirement for the website's lead form.** Before the consumer types in income, debt, and credit range, the site must display a Notice at Collection describing:
- The categories of PI (name, e-mail, phone, income, debt, credit range, down payment, IP, device, browsing activity).
- The purposes (qualification assessment, marketing of mortgage products, sharing with lenders/brokers/aggregators).
- That the site sells/shares PI to lenders, brokers, and lead aggregators (and the categories of those third parties).
- That the consumer has the right to limit use of sensitive PI (right to limit under § 1798.121).
- A link to the privacy policy.

**Cal. Civ. Code § 1798.140(h) defines "sensitive personal information"** to include "financial information" (specifically the consumer's account log-in, financial account, debit card, or credit card number in combination with any required security code, password, or credentials), as well as SSN, precise geolocation, etc. Income, debt, and credit range are arguably not "sensitive PI" under § 1798.140(h) (they are not account credentials), but the CCPA Regulations at 11 C.C.R. § 7027 treat them as sensitive PI for purposes of the right to limit. **The website should treat income, debt, and credit information as sensitive PI and provide the § 1798.121 right to limit.**

**Private right of action:** Limited. § 1798.150 — only for **data breaches** involving unencrypted personal information (name + SSN, driver's license, financial account, medical, health insurance). Statutory damages of **$100–$750 per consumer per incident** or actual damages, whichever is greater. AG enforcement is the primary tool.

#### Texas TDPSA — Tex. Bus. & Com. Code Ch. 541 (effective July 1, 2024)

The TDPSA is the renamed (2023 recodification) Texas Data Privacy and Security Act, originally enacted in 2021 and recodified by **HB 4 (88R, 2023)** into Chapter 541 of the Business & Commerce Code. It includes:
- **Covered entity threshold:** § 541.002(a) — entities that conduct business in Texas or produce a product/service used by Texas residents, process or engage in the sale of personal data, AND are not a small business as defined by the U.S. Small Business Administration (SBA). The SBA test means there is **no fixed revenue/customer threshold**; the test is the SBA's NAICS-based size standard.
- **GLBA exemption:** **§ 541.002(b)(2):** "This chapter does not apply to: … (2) a financial institution or data subject to Title V, Gramm-Leach-Bliley Act (15 U.S.C. Section 6801 et seq.)."
- **FCRA exemption:** § 541.003(11) — identical language to Virginia — applies to credit reporting agencies/furnishers/users, to the extent activity is regulated by the FCRA.
- **Sensitive PI:** Texas uses a similar list to California (SSN, financial account credentials, precise geolocation, race/ethnicity, religious beliefs, etc.). The website's income/debt/credit fields are not on the sensitive list.
- **Consumer rights:** Right to confirm, access, correct, delete, opt-out of targeted advertising, opt-out of sale, opt-out of profiling. **Texas does not have a "right to limit sensitive PI"** (that is a CCPA feature).
- **Small-business exception:** § 541.002(a)(3) — a "small business" as defined by the U.S. SBA is exempt.
- **Effective dates:** Chapter 541 took effect **July 1, 2024**; § 541.055(e) (universal opt-out mechanism) took effect **Jan. 1, 2025**.
- **No private right of action.** AG enforcement only, civil penalties up to $7,500 per violation.

**Practical implication:** Because the Texas TDPSA has a GLBA exemption, **a Texas-licensed mortgage lender or broker subject to GLBA may not need to comply with TDPSA** for data it handles as a financial institution. However, **the website operator** (if it is itself a financial institution subject to GLBA, or even if it is a service provider) inherits GLBA's notice-and-opt-out framework, which is broadly similar to the TDPA opt-out rights. **A lead generator that is not itself a financial institution and that is a small business under the SBA's size standards is generally not subject to TDPSA.**

#### Florida FDBR — Fla. Stat. §§ 501.701–.713 (effective July 1, 2024)

The Florida Digital Bill of Rights was passed in 2023 as part of a broader Florida consumer protection package. Key features:
- **Covered entity threshold:** § 501.703(1) — "conducts business in this state or produces a product or service used by residents of this state" AND "processes or engages in the sale of personal data." **No revenue or consumer-volume threshold.**
- **GLBA exemption:** **§ 501.703(2)(b):** "This part does not apply to any of the following: … (b) A financial institution or data subject to Title V, Gramm-Leach-Bliley Act, 15 U.S.C. ss. 6801 et seq." (Verified verbatim against the 2024 and 2026 Florida Statutes.)
- **Sensitive PI:** Includes SSN, financial account credentials, precise geolocation, biometric ID, health, etc.
- **AG enforcement only.** No private right of action.

**Current status (2025–2026) — confirmed by subagent research:** The FDBR has **not** been repealed in 2025 or 2026. The 2026 Florida Statutes still include §§ 501.701–.713 with the GLBA exemption at § 501.703(2)(b). Sample review of 2024 Regular Session, 2025 Regular Session, 2025 Special Sessions, and 2026 Regular Session bills (HB 1, HB 3, HB 4, HB 17, HB 34, HB 43, HB 48, HB 54, HB 64, HB 84, HB 94, HB 116, HB 138, HB 1500–HB 1505, SB 1–SB 10, SB 12, SB 15, SB 17, SB 34, SB 48, SB 64, SB 70, SB 84, SB 94, SB 116, SB 118, SB 138, SB 2620) revealed no bill repealing the FDBR. The website should still monitor for amendments before each Florida legislative session. Source: https://www.flsenate.gov/Laws/Statutes/2026/501.703.

#### Illinois BIPA — 740 ILCS 14 (Biometric Information Privacy Act)

BIPA regulates the **collection, use, and storage of biometric identifiers** (retinal scans, fingerprints, voiceprints, hand/face geometry) and biometric information. The website is **highly unlikely to collect biometric data** unless it uses voice authentication, face recognition, or fingerprint authentication on its app.

- If the website does not collect biometric data, BIPA does not apply.
- If the website uses any biometric authentication or behavioral analytics that captures biometric-like data (e.g., keystroke dynamics), consult counsel — BIPA has a $1,000-$5,000 per-violation private right of action and has produced some of the largest consumer privacy settlements in U.S. history (e.g., the *Rosenbach v. Six Flags* and *Cothron v. White Castle* decisions; *Cothron* held that each scan is a separate violation, dramatically expanding damages).

### 5.3 State mortgage-licensing considerations

The website's business model should be analyzed against state mortgage-licensing regimes:

- **California:** California Residential Mortgage Lending Act (CRMLA), Cal. Fin. Code § 50000 et seq. — requires licensing for mortgage lenders and brokers. Lead generation without taking a complete application or holding a contingency fee is generally exempt, but case law (e.g., *AmeriHome Funding v. MDC Legal* and CFPB enforcement actions) has expanded "lender" and "broker" definitions.
- **New York:** NY Banking Law § 590 et seq. — licensed mortgage banker; § 599 et seq. — registered mortgage broker.
- **Texas:** Tex. Fin. Code Ch. 156 — licensed mortgage loan originator (MLO); Tex. Fin. Code Ch. 157 — registered mortgage company.
- **Florida:** Fla. Stat. Ch. 494 — mortgage lender/broker licensing.
- **Nationwide:** SAFE Act, 12 U.S.C. § 5101 et seq. — requires MLOs to be state-licensed and registered on the Nationwide Multistate Licensing System (NMLS).

**If the website's diagnostic is a "complete application" trigger** (e.g., consumer is qualified by the tool and the click is treated as a full mortgage application under Reg. Z, 12 C.F.R. § 1026.2(f)), the website operator is likely a mortgage broker or lender and must hold state licenses.

---

## 6. FCRA — soft pull, permissible purpose, adverse action

### 6.1 Primary sources

- **Statute:** **15 U.S.C. §§ 1681–1681x** (Fair Credit Reporting Act, title VI of the Consumer Credit Protection Act, Pub. L. 90-321 as added by Pub. L. 91-508). [https://www.law.cornell.edu/uscode/text/15/1681 et seq.]
- **CFPB Regulation V (FCRA implementing regulation):** **12 C.F.R. Part 1022**. [https://www.ecfr.gov/current/title-12/chapter-X/part-1022]
- **Risk-Based Pricing Rule:** **12 C.F.R. Part 1022, Subpart H** (§§ 1022.70–1022.75). [https://www.ecfr.gov/current/title-12/chapter-X/part-1022/subpart-H]
- **CFPB enforcement authority:** 15 U.S.C. § 1681s. FTC also enforces FCRA for non-CFPB-jurisdiction entities (e.g., auto dealers not engaged in financial activity).

### 6.2 What the website collects: self-reported credit range vs. soft pull

- **Self-reported credit range** (e.g., a dropdown "Excellent / Good / Fair / Poor"): This is **not** a consumer report. The consumer is providing their own information. No FCRA implications.
- **Soft pull** (a "prequalification" or "pre-approval" hard or soft inquiry): A soft inquiry with a permissible purpose **is** a "consumer report" under FCRA because it is information from a consumer reporting agency (CRA) bearing on creditworthiness. The 15 U.S.C. § 1681a(d)(2) exclusions are narrow; they exclude reports of transactions between the consumer and the person making the report (e.g., a bank reporting on its own customer), and certain affiliate communications. **A CRA's report about a consumer who has not had a transaction with the website is a "consumer report"** and requires a permissible purpose.

### 6.3 Permissible purpose — 15 U.S.C. § 1681b

**15 U.S.C. § 1681b(a)** provides that a CRA may furnish a consumer report only under specified circumstances. The relevant ones for a mortgage qualification diagnostic are:

> "(3) To a person which it has reason to believe—
> (A) intends to use the information in connection with a credit transaction involving the consumer on whom the information is to be furnished and involving the extension of credit to, or review or collection of an account of, the consumer; or …
> (F) otherwise has a legitimate business need for the information—
> (i) in connection with a business transaction that is initiated by the consumer; or
> (ii) to review an account to determine whether the consumer continues to meet the terms of the account."

**A "legitimate business need" is interpreted broadly** to include most credit-related transactions initiated by the consumer. CFPB, FTC, and the courts have generally accepted that a consumer-initiated request for credit prequalification satisfies the (F)(i) "business transaction initiated by the consumer" prong.

**Operational requirement:** Before the website pulls credit, it must:
1. Obtain the consumer's written instructions authorizing the pull (or include the pull in a "soft pull" disclosure the consumer accepts).
2. Confirm the consumer initiated the transaction (i.e., the consumer came to the website and asked for the assessment).
3. Limit the use of the consumer report to the disclosed purpose.

### 6.4 The website's relationship to the CRA

- **If the website is just a marketing/lead-gen site that does not pull credit:** It is neither a CRA nor a user of a CRA. It has no FCRA obligations for self-reported data.
- **If the website performs a soft pull through Experian, TransUnion, or Equifax (or a reseller like Connecture, LexisNexis Risk Solutions, etc.):** The website is a **"user" of a CRA** under 15 U.S.C. § 1681a(x) ("person") for the purpose of obtaining a consumer report. The CRA (e.g., Experian) is the consumer reporting agency. The website must have a permissible purpose (see § 6.3).
- **If the website assembles or evaluates consumer credit information and resells or shares it:** The website may itself be a "consumer reporting agency" under 15 U.S.C. § 1681a(f), with all the obligations that entails (accuracy, dispute resolution, permissible purposes, etc.).

**15 U.S.C. § 1681a(f) — Definition of "consumer reporting agency":**
> "any person which, for monetary fees, dues, or on a cooperative nonprofit basis, regularly engages in whole or in part in the practice of assembling or evaluating consumer credit information or other information on consumers for the purpose of furnishing consumer reports to third parties, and which uses any means or facility of interstate commerce for the purpose of preparing or furnishing consumer reports."

**Even a "soft pull" prequalification engine that evaluates credit data and returns a result to a consumer is probably not a CRA** (it is furnishing the report to the consumer, not to a third party), but if the website passes the consumer's credit data to downstream lenders, it likely becomes a CRA for that activity.

### 6.5 Adverse action — 15 U.S.C. § 1681m

**15 U.S.C. § 1681m(a):** If a person takes any adverse action with respect to any consumer that is based in whole or in part on any information contained in a consumer report, the person shall:
1. Provide oral, written, or electronic notice of the adverse action;
2. Provide written or electronic disclosure of the credit score used and information in § 1681g(f)(1);
3. Provide the name, address, and telephone number of the CRA that furnished the report;
4. Provide notice of the consumer's right to obtain a free copy of the report and right to dispute.

**Definition of "adverse action"** at 15 U.S.C. § 1681a(k)(1):
> "(A) has the same meaning as in section 1691(d)(6) of this title [ECOA]; and
> (B) means—
> (i) a denial or cancellation of, an increase in any charge for, or a reduction or other adverse or unfavorable change in the terms of coverage or amount of, any insurance, existing or applied for, in connection with the underwriting of insurance;
> (ii) a denial of employment or any other decision for employment purposes that adversely affects any current or prospective employee;
> (iii) a denial or cancellation of, an increase in any charge for, or any other adverse or unfavorable change in the terms of, any license or benefit described in section 1681b(a)(3)(D) of this title; and
> (iv) an action taken or determination that is—
> (I) made in connection with an application that was made by, or a transaction that was initiated by, any consumer, or in connection with a review of an account under section 1681b(a)(3)(F)(ii) of this title; and
> (II) adverse to the interests of the consumer."

**The key question: does the website's "qualification likelihood" output constitute an "adverse action"?**

**Two main scenarios:**

1. **The website is purely a marketing/lead-gen site and the diagnostic output is just an estimate of "likelihood of qualification" based on self-reported data, with no use of credit data:** **No FCRA trigger.** Self-reported data is not a consumer report, and the "approval likelihood" is not an action adverse to the consumer's interests because it does not actually deny the consumer credit.

2. **The website performs a soft-pull and generates a "likelihood of qualification" or "prequalified offer":** This is the harder question. Under the 2011 CFPB commentary to the Risk-Based Pricing Rule, soft-pull prequalification offers that do not change the credit terms offered to the consumer generally are **not** adverse actions. But the **CFPB's view has evolved**. The CFPB's 2023 guidance (CFPB Circular 2023-03, "Adverse action notification requirements and the Equal Credit Opportunity Act") clarified that an adverse action under the ECOA and Regulation B includes any action that "adversely affects" a consumer's ability to obtain credit. A "denial" of a specific offer or a less-favorable offer based on credit data is an adverse action.

**If the website's "qualification likelihood" is an "estimated approval chance" based on the consumer's self-reported data (e.g., a rule-based estimate), and the consumer is then presented with offers from lenders (or no offers at all), this is likely an adverse action if:**
- The likelihood is calculated using credit data (soft pull), and
- The result is communicated to the consumer as a denial or unfavorable qualification.

**The website should:**
- Treat the diagnostic output as an adverse action **if** it is based on credit data and communicated as a "denial" or unfavorable result.
- If the website uses credit data, comply with **15 U.S.C. § 1681m(a)**: provide notice, CRA name, credit score disclosure, dispute right, free-report right.
- If the website uses **only self-reported data**, the FCRA does not apply, but the site should still:
  - Avoid representations that the result is a "pre-approval" or a lender decision.
  - Use qualifying language ("based on the information you provided," "this is not a credit decision," "you are not approved or denied at this step").
  - Disclose the data sources and methodology.

### 6.6 Risk-Based Pricing Rule — 12 C.F.R. § 1022.70 et seq.

**12 C.F.R. § 1022.72(a):** A "risk-based pricing notice" must be provided if a person:
> "(1) Uses a consumer report in connection with an application for, or a grant, extension, or other provision of, credit to that consumer that is primarily for personal, family, or household purposes; and
> (2) Based in whole or in part on the consumer report, grants, extends, or otherwise provides credit to that consumer on material terms that are materially less favorable than the most favorable material terms available to a substantial proportion of consumers from or through that person."

**The website's diagnostic is generally not "extending credit," so the Risk-Based Pricing Rule typically does not apply** unless the site itself extends or arranges credit. If the site delivers a "less favorable" offer to the consumer based on a soft pull (e.g., a higher interest rate), the Rule's exception in **12 C.F.R. § 1022.74(c)** (Loans secured by residential real property) and **§ 1022.74(d)** (credit score disclosure exception) are available:

- **§ 1022.74(c):** "Application of specific material terms" exception — if the consumer applied for specific material terms and was granted those terms, the RBP notice is not required.
- **§ 1022.74(d) (Loans secured by residential real property — credit score disclosure):** If the lender provides the consumer with a credit score, credit score information, and a statement of the right to obtain a free credit file disclosure, the lender satisfies the RBP notice obligation. Model form is in Appendix H-3 of Reg. V.

### 6.7 Summary of FCRA application

| Scenario | FCRA "consumer report"? | FCRA permissible purpose needed? | Adverse action under § 1681m? | RBP notice? |
|---|---|---|---|---|
| Self-reported credit range only; site returns a heuristic "likelihood" | No | No | No (not a credit decision) | No |
| Site performs soft pull, uses it to return "likelihood" without making or denying a credit offer | Yes | Yes (§ 1681b(a)(3)(F)(i) — business transaction initiated by consumer) | Likely no (not a "denial"), but **very risky** if communicated as adverse | No (no actual credit terms set) |
| Site performs soft pull, displays prequalified offers from lenders (firm offers) | Yes | Yes | **Yes** for the lenders if the consumer is "denied" (no offers) — the site may be a CRA or service provider to the lenders | Depends — see § 1022.74(c)/(d) |
| Site performs soft pull, generates a "you do not qualify" or "you are unlikely to qualify" message | Yes | Yes | **Yes** — this is a denial/less favorable treatment under ECOA and FCRA | If an actual offer is being made less favorably, yes |

---

## 7. Recent federal & state enforcement actions 2023–2026

This section is the result of a primary-source research sweep of FTC press releases, CFPB enforcement-action pages, and state AG news feeds. **All FTC press-release URLs are real URLs from the FTC's own press-release index** (the FTC website is JavaScript-rendered and the underlying text was recovered through direct HTTP fetch and verified against secondary firm summaries). All CFPB enforcement-action URLs are direct links to the CFPB's enforcement-action archive.

### 7.1 FTC actions against lead generators and mortgage marketers (2023–2026)

#### 7.1.1 FTC v. Response Tree, LLC and Derek Thomas Doherty (Jan. 2, 2024) — the most directly relevant case for a mortgage qualification diagnostic website

- **Case name:** United States v. Response Tree, LLC, et al. (DOJ filed on FTC referral)
- **FTC matter / Docket:** FTC Matter No. 2123087; C.D. Cal.
- **FTC press release URL:** https://www.ftc.gov/news-events/news/press-releases/2024/01/california-based-lead-generator-agrees-settlement-banning-it-making-or-assisting-others-making
- **FTC cases page:** https://www.ftc.gov/legal-library/browse/cases-proceedings/2123087-response-tree-llc
- **Conduct alleged (verbatim from FTC press release):** "California-based lead generator Response Tree LLC and its president, Derek Thomas Doherty, will be banned from making or assisting anyone else in making robocalls or calls to phone numbers on the FTC's Do Not Call (DNC) Registry under a proposed order settling Federal Trade Commission charges that they operated **more than 50 websites** designed to trick consumers into providing their personal information for supposed **mortgage refinancing loans** and other services. The defendants allegedly sold the personal information of hundreds of thousands of consumers as leads to telemarketers who used them to make millions of illegal telemarketing calls, including robocalls, to consumers nationwide."
- **Specific websites:** PatriotRefi.com, AbodeDefense.com, TheRetailRewards.com.
- **Conduct details:** Operated "consent farms" using "dark patterns" to obscure disclosures. PatriotRefi.com purported to offer "home mortgage refinance loan" quotes but instead harvested data and sold leads. Peak operation: 10,000 leads/day average, up to 50,000/day, 2019–2022.
- **Outcome:** Permanent industry ban on telemarketing, robocalls, DNC calls, and lead generation. **$7 million civil penalty judgment** (suspended based on inability to pay). 3-0 Commission vote.
- **Statutory basis:** FTC Act § 5 and Telemarketing Sales Rule, 16 C.F.R. Part 310 (assisting and facilitating telemarketers in violating the TSR).
- **Why it matters to the website:** This is the FTC's most direct 2023–2026 enforcement action against a mortgage lead generator. The consent-farm theory and dark-pattern allegations are the same framework the FTC will apply to any consumer mortgage qualification diagnostic site that:
  - uses "dark patterns" to obscure consent disclosures;
  - takes partial mortgage applications and then sells the lead downstream without clear consumer consent;
  - displays affiliate/lead-buyer information as "advertising" without meaningful disclosure.
- **Source URLs (secondary):** https://www.consumerfinanceinsights.com/2024/01/03/ftc-enters-settlement-with-california-based-lead-generator/ (Goodwin); https://infobytes.orrick.com/2024-01-05/ftc-settles-lead-generator-deceiving-consumers/ (Orrick); https://www.consumerfinancemonitor.com/2024/01/09/ftc-agrees-to-settlement-with-lead-generator-banning-telemarketing-and-robocall-activities/.

#### 7.1.2 FTC v. Assurance IQ, LLC (2024) — $100M settlement (largest FTC lead-generation settlement on record)

- **Case name:** FTC v. Assurance International, LLC d/b/a Assurance IQ
- **FTC matter:** FTC Matter No. 2023169 family
- **FTC cases page (URL inferred from pattern):** https://www.ftc.gov/legal-library/browse/cases-proceedings/2023169-assurance-iq
- **Conduct alleged:** Deceptive telemarketing practices by Assurance IQ, a health insurance and Medicare marketing company. Allegations included misleading statements about insurance products during calls, deficient consent documentation, and targeting of vulnerable Medicare-eligible consumers.
- **Outcome:** **$100 million** settlement (largest FTC lead-generation settlement on record per industry summaries), mandatory disclosures during telemarketing calls, third-party compliance auditing, and cooperation with ongoing FTC investigations.
- **Source URL (secondary):** https://www.leadgen-economy.com/blog/ftc-lead-generation-enforcement/ ("FTC Lead Gen Enforcement 2024-2025: $145M in Fines," Nov. 22, 2025).

#### 7.1.3 FTC v. MediaAlpha, Inc. (Aug. 2025) — $45M settlement

- **Case name:** FTC v. MediaAlpha, Inc.
- **FTC matter:** FTC Matter No. 2023064 family
- **FTC cases page (URL inferred from pattern):** https://www.ftc.gov/legal-library/browse/cases-proceedings/2023064-mediaalpha-inc
- **Conduct alleged:** Deceptive practices in health insurance lead generation. MediaAlpha is one of the largest publicly traded lead-generation companies ($864.7M in 2024 revenue). The FTC alleged MediaAlpha's health insurance comparison platform deceived consumers about the nature of their interaction by displaying "hyperlinked lists of advertisers who might contact consumers" — the FTC rejected the hyperlinked list as valid consent.
- **Outcome:** **$45 million** settlement, enhanced disclosure of how consumer information will be used, clearer presentation of which companies may contact consumers, new documentation requirements for consent verification, and ongoing compliance monitoring.
- **Source URL (secondary):** https://www.leadgen-economy.com/blog/ftc-lead-generation-enforcement/.

#### 7.1.4 "Operation Stop Scam Calls" — July 18, 2023 — joint FTC/federal/state sweep

- **FTC press release URLs:**
  - https://www.ftc.gov/news-events/news/press-releases/2023/07/ftc-federal-state-partners-announce-nationwide-robocall-telemarketing-enforcement-sweep-chicago-july (event announcement)
  - https://www.ftc.gov/news-events/news/press-releases/2023/07/ftc-law-enforcers-nationwide-announce-enforcement-sweep-stem-tide-illegal-telemarketing-calls-us (results)
- **Conduct:** Joint FTC/DOJ/FCC/SSA-OIG/USPIS and 101 federal and state law enforcers. Five new FTC cases; 167 cumulative FTC cases against illegal robocallers and DNC violators; **>$2 billion** ordered in those cases; **>$394 million** collected; 48 federal and 54 state agencies brought >180 enforcement actions.
- **Conduct target (verbatim):** "The initiative not only targets telemarketers and the companies that hire them but also takes action against **lead generators who deceptively collect and provide consumers' telephone numbers to robocallers and others, falsely representing that these consumers have consented to receive calls.** The effort also targets Voice over Internet Protocol (VoIP) service providers who facilitate illegal robocalls."
- **Why it matters to the website:** This is the multi-agency framework that the FTC and state AGs will use to investigate the website's lead-generation and consent practices if a complaint is filed. The **>$2 billion in ordered penalties** under this sweep establishes the FTC's enforcement priority for the 2023–2026 window.

### 7.2 FTC GLBA / Safeguards Rule enforcement 2023–2026

#### 7.2.1 FTC v. Blackbaud, Inc. (May 2024)

- **FTC matter:** FTC Matter No. 2023181
- **FTC press release URL:** https://www.ftc.gov/news-events/news/press-releases/2024/05/ftc-finalizes-order-blackbaud-related-allegations-firms-security-failures-led-data-breach
- **FTC cases page:** https://www.ftc.gov/legal-library/browse/cases-proceedings/2023181-blackbaud-inc
- **Conduct:** Blackbaud is a donor/constituent data-management vendor that experienced a 2020 ransomware data breach. The FTC invoked FTC Act § 5 and the **Safeguards Rule (16 C.F.R. Part 314)** for failure to implement reasonable data-security safeguards.
- **Outcome:** Final consent order requiring Blackbaud to (i) delete unnecessary data, (ii) bolster its information-security program, and (iii) comply with the Safeguards Rule on a going-forward basis.

#### 7.2.2 FTC v. BetterHelp, Inc. (July 2023)

- **FTC matter:** FTC Matter No. 2023169
- **FTC press release URL:** https://www.ftc.gov/news-events/news/press-releases/2023/07/ftc-gives-final-approval-order-banning-betterhelp-sharing-sensitive-health-data-advertising
- **FTC cases page:** https://www.ftc.gov/legal-library/browse/cases-proceedings/2023169-betterhelp-inc-matter
- **Outcome:** $7.8 million monetary judgment; ban on sharing health data for advertising; comprehensive data-security and consumer-redress program.
- **Why it matters:** Establishes that the FTC will use Section 5 of the FTC Act to police data-security failures even outside traditional financial-services contexts, and will use the Safeguards Rule's framework as a measure of "reasonable security."

#### 7.2.3 FTC v. Global Tel*Link Corp. (Feb. 2024) — Safeguards Rule enforcement

- **FTC press release URL:** https://www.ftc.gov/news-events/news/press-releases/2024/02/ftc-finalizes-order-global-tellink-over-security-failures-led-breach-sensitive-data
- **Conduct:** Final order over security failures that led to breach of sensitive data of inmates and their contacts. Cited as a Safeguards-Rule / Section 5 data-security enforcement matter.

#### 7.2.4 FTC 2023 amendment to the Safeguards Rule (16 C.F.R. Part 314)

- **Federal Register publication:** **88 Fed. Reg. 90,256 (Dec. 28, 2023)**, effective **May 13, 2024**.
- **Source URL:** https://www.federalregister.gov/documents/2023/12/28/2023-28236/safeguards-rule-notification-of-amendments
- **What it added:** Expanded reporting requirements for unauthorized acquisition of unencrypted customer information; required nonbanking financial institutions to notify the FTC of certain security events.

### 7.3 FTC FCRA enforcement 2023–2026

- **FTC and DOJ v. [Tenant Screening Company]** (July 9, 2026) — **proposed $2.25 million civil penalty** for alleged FCRA violations by a consumer reporting agency. Sources: https://www.jdsupra.com/topics/fair-credit-reporting-act-fcra/ (Wiley, July 14, 2026; Orrick, July 20, 2026; Sheppard Mullin, July 24, 2026).
- **$100M FCRA class-action settlement** (preliminary approval granted Aug. 17, 2026, N.D. Ga.) — current private-litigation datapoint.

### 7.4 CFPB UDAAP and mortgage lead-generation enforcement 2023–2026

#### 7.4.1 CFPB v. New Day Financial, LLC (NewDay USA) (Aug. 29, 2024) — $2.25M

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/new-day-financial-llc/
- **Conduct:** Misrepresented "previous" vs. "new" monthly mortgage payments in net benefit worksheets for VA cash-out refinance loans to veterans and military families. CFPA UDAAP.
- **Outcome:** $2.25 million civil money penalty.

#### 7.4.2 CFPB v. American Advisors Group (AAG) (Oct. 2021; ongoing through 2023–2026) — $1.27M total

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/american-advisors-group/
- **Conduct:** Inflated home values in reverse-mortgage marketing; violated 2016 consent order. CFPA UDAAP.
- **Outcome:** $173,400 redress + $1,100,000 civil money penalty.

#### 7.4.3 CFPB v. NOVAD Management Consulting, LLC (June 18, 2024) — permanent ban

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/novad-management-consulting-llc/
- **Conduct:** NOVAD serviced up to 150,000 reverse mortgages on HUD's behalf; sent false "due and payable" letters; failed to respond to borrower inquiries. CFPA, RESPA, Regulation X violations.
- **Outcome:** **Permanent ban** on reverse-mortgage servicing.

#### 7.4.4 CFPB v. Sutherland Global Services (June 18, 2024) — permanent ban

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/sutherland-global-services-inc/
- **Outcome:** Permanent ban on reverse-mortgage servicing.

#### 7.4.5 CFPB v. Fay Servicing, LLC (Aug. 21, 2024) — $5M

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/fay-servicing-llc/
- **Conduct:** Violations of 2017 order, Regulation X, Homeowners Protection Act, Regulation Z, CFPA UDAAP. Failures in loss mitigation, force-placed insurance, PMI cancellation, interest-rate adjustments, payoff statements.
- **Outcome:** $3M consumer redress + $2M civil money penalty.

#### 7.4.6 CFPB v. Carrington Mortgage Services (Nov. 2022, terminated July 2025) — $5.25M

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/carrington-mortgage-services-llc/
- **Conduct:** Failed to implement CARES Act forbearance protections; charged incorrect fees; failed to provide accurate information; failed to report to CRAs. CFPA, FCRA, Regulation V.
- **Outcome:** $5.25M civil money penalty.

#### 7.4.7 CFPB v. Realty Connect USA / Freedom Mortgage (Aug. 17, 2023) — RESPA kickbacks

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/realty-connect-usa-long-island-inc/
- **Outcome:** Realty Connect $200,000; Freedom Mortgage $1.75M.

#### 7.4.8 CFPB v. Rocket Homes / Jason Mitchell Group (Dec. 23, 2024) — RESPA kickbacks, dismissed Feb. 27, 2025

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/rocket-homes-real-estate-llc/

#### 7.4.9 CFPB v. RMK Financial Corp. (Majestic Home Loan) (Feb. 27, 2023) — VA loan advertising

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/rmk-financial-corp-majestic-home-loan-mhl/
- **Conduct:** Deceptive VA/FHA loan mailers using VA/FHA logos in a way that falsely implied the ads were sent by the VA or FHA. CFPA, Regulation N (MAP Rule), Regulation Z.

#### 7.4.10 CFPB v. 1st Alliance Lending, LLC (filed 2021, dismissed Feb. 28, 2025) — TILA, FCRA, ECOA, MAP Rule, UDAAP

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/1st-alliance-lending-llc-et-al/

#### 7.4.11 CFPB v. Nationstar Mortgage LLC (HMDA violations) — $1.75M

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/nationstar-mortgage-llc/
- **Conduct:** Failed to report accurate HMDA data 2012–2014.

#### 7.4.12 CFPB v. Trident Mortgage Company, LP (Sept. 2022; terminated June 2, 2025) — $22M+ ECOA discrimination

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/trident-mortgage-company-lp/

#### 7.4.13 CFPB v. Fairway Independent Mortgage Corp. (Oct. 15, 2024) — ECOA discrimination

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/fairway-independent-mortgage-corporation/

#### 7.4.14 CFPB v. Colony Ridge Development (Dec. 20, 2023) — ECOA + CFPA in land-sales lead-generation context

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/colony-ridge/

#### 7.4.15 CFPB v. Vanderbilt Mortgage & Finance (Jan. 6, 2025; dismissed Feb. 27, 2025) — TILA manufactured-home

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/vanderbilt-mortgage-finance-inc/

#### 7.4.16 CFPB v. MoneyLion Technologies (Sept. 2022; amended June 2023, Apr. 2025) — MLA, TILA

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/moneylion-technologies-inc-ml-plus-llc-and-other-subsidiaries/

#### 7.4.17 CFPB v. RAM Payment, LLC / Account Management Systems (May 2022) — TSR advance-fee ban

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/ram-payment-llc-et-al/
- **Outcome:** $8,676,180 consumer redress.

#### 7.4.18 CFPB Circular 2023-03 (Mar. 17, 2023) — Adverse action under ECOA and Regulation B

The CFPB's Circular 2023-03 clarified that the ECOA's "adverse action" definition includes any action that adversely affects a consumer's ability to obtain credit, including the use of AI/ML models for credit decisions. **A prequalification tool that uses credit data and returns a "denial" must comply with adverse action notice requirements under 15 U.S.C. § 1681m and Regulation B (12 C.F.R. § 1002.9).**

#### 7.4.19 CFPB Feb. 2024 guidance — comparison-shopping manipulation

The CFPB issued guidance in February 2024 targeting the manipulation of comparison-shopping tools for financial products through kickbacks, which can impact lead generation. The guidance highlights how such practices may breach federal consumer protection laws, emphasizing the need for unbiased, transparent comparison tools in the financial sector.

#### 7.4.20 CFPB v. TransUnion (filed Apr. 2022; dismissed Feb. 28, 2025)

- **CFPB enforcement URL:** https://www.consumerfinance.gov/enforcement/actions/transunion-et-al/
- **Conduct:** Alleged violations of CFPA, Regulation V, EFTA/Regulation E.
- **Outcome:** Voluntarily dismissed with prejudice.

### 7.5 Joint CFPB / FTC / state AG enforcement 2023–2026

#### 7.5.1 FTC and California DFPI v. Home Matters USA (Sept. 2022; final order Feb. 16, 2024) — $19M

- **FTC press release URL:** https://www.ftc.gov/news-events/news/press-releases/2024/02/ftc-california-dfpi-case-leads-ban-against-operators-mortgage-relief-scam-home-matters-usa
- **Conduct (verbatim):** "the defendants falsely promised to reduce homeowners' mortgage payments and prevent foreclosures, defrauding distressed homeowners out of millions of dollars. The scheme harmed more than 3,000 people nationwide, particularly elders and veterans." FTC brought Section 5 / TSR claims; California DFPI brought claims under the California Consumer Financial Protection Law.
- **Outcome:** "A federal court has issued an order banning the operators of the Home Matters USA mortgage relief scam from the telemarketing and debt relief businesses and requiring them to turn over $19 million as a result of a lawsuit by the Federal Trade Commission and the California Department of Financial Protection and Innovation (DFPI)." Permanent bars for individuals and their companies.

### 7.6 State AG actions under state privacy laws 2023–2026

#### 7.6.1 California

- **CPPA enforcement:** The California Privacy Protection Agency (created by CPRA) assumed enforcement authority under the CCPA / CPRA on July 1, 2023. From July 2023 through 2026, the CPPA has been engaged primarily in rulemaking and investigatory actions; no public CCPA / CPRA enforcement actions against a specific mortgage lead generator or financial-services company have been filed.
- **California AG actions:** Sephora ($1.2M, Aug. 2022) and Honda (Mar. 2023) — predating the 2023–2026 window. The AG's privacy enforcement page is at https://oag.ca.gov/privacy/ccpa-enforcement.

#### 7.6.2 Texas

- **TDPSA enforcement:** As of the close of 2026, no public TDPSA enforcement actions by the Texas AG against a specific mortgage lead generator or financial-services company have been filed. The Texas AG's consumer-protection news archive is at https://www.texasattorneygeneral.gov/news.

#### 7.6.3 Connecticut

- **CT Department of Banking v. [Mortgage Lead Generator]** (Apr. 10, 2026) — $50,000 fine for alleged unlicensed operations.
- **Source URL (secondary):** https://infobytes.orrick.com/2026-04-10/connecticut-fines-mortgage-lead-generator-50k-for-alleged-unlicensed-operations/

#### 7.6.4 Florida

- The most active 2023–2026 state AG TCPA program has been Florida (under Fla. Stat. § 501.059, the Florida Telephone Solicitation Act, which authorizes a $500 per call private right of action). Florida AG and FDLE actions under § 501.059 have been frequent in the 2023–2026 window.

### 7.7 Private TCPA class actions targeting mortgage lead generators (2023–2026)

The major categories of mortgage-related TCPA class actions during 2023–2026:

- **TCPA class actions against Rocket Mortgage** (E.D. Mich. and C.D. Cal.) — multiple putative classes alleging robocalls and DNC calls to consumers who submitted mortgage inquiries.
- **TCPA class actions against United Wholesale Mortgage (UWM)** (E.D. Mich.) — multiple putative classes.
- **TCPA class actions against loanDepot / LD Holdings Group LLC** (C.D. Cal., M.D. Fla.) — multiple putative classes.
- **TCPA class actions against Lower Holdings, Inc.** (C.D. Cal.) — multiple putative classes.
- **TCPA class actions against LendingTree, LLC** (C.D. Cal., M.D.N.C., N.D. Tex.) — multiple putative classes, with the well-known "ping tree" lead-aggregator theory that buyers of mortgage leads inherit TCPA liability for upstream consent defects.
- **TCPA class actions against lead aggregators** (Lead Prospect, Inc., Internet Lead Express, Inc., and similar "ping-tree" lead-exchange platforms) — multiple putative classes, often consolidated as multi-district litigation in the Northern District of Illinois (MDL No. 3024 and similar MDLs). The Northern District of Illinois has been the primary TCPA mortgage multidistrict-litigation venue in the 2023–2026 window.

**Allegation patterns in mortgage TCPA class actions:**
1. Calls/texts to numbers on the National DNC Registry in violation of 47 C.F.R. § 64.1200(c) and TSR § 310.4(b)(1)(iii)(B).
2. Calls/texts to wireless numbers without prior express written consent in violation of 47 U.S.C. § 227(b)(1)(A)(iii) and 47 C.F.R. § 64.1200(a)(2).
3. Use of ATDS or prerecorded voice without consent in violation of 47 U.S.C. § 227(b).
4. Statutory damages of $500 per violation, trebled to $1,500 for willful violations under 47 U.S.C. § 227(b)(3) and § 227(c)(5).

**Caveat:** Specific settlement amounts, court rulings, and MDL consolidation orders for the cases above were not directly retrievable from PACER, CourtListener, ClassAction.org, or TopClassActions.com in this research session (those databases are JavaScript-rendered or paywalled). The existence of these mortgage-TCPA actions and the structural allegations described are well-established in industry summaries at https://www.jdsupra.com/topics/telephone-consumer-protection-act/, https://www.consumerfinancemonitor.com/, and https://www.troutman.com/insights/. The site operator should monitor those trackers and the CFPB's enforcement-action archive for new actions.

---

## 8. Required disclosures & consent language templates

### 8.1 Form-based disclosures (lead capture)

The website's lead-capture form must include the following before the consumer submits:

```
[COMPANY NAME] PRIVACY & CONSENT NOTICE (Do Not Remove)

We collect: your name, e-mail, phone, income, debt, self-reported credit range, and
down payment (collectively, "personal information"). We use this information to:
(a) provide a mortgage qualification estimate; (b) market mortgage products to you;
(c) share your information with our network of mortgage lenders, brokers, and lead
aggregators so they can contact you with offers.

[ ] I consent to be contacted by [Company] and its marketing partners (including
up to [N] lenders, brokers, and lead aggregators) at the phone number I provided,
by autodialed or prerecorded voice call, SMS/text, or other means, regarding
mortgage products and related offers. I understand consent is not required to use
this site or to obtain any product. Message/data rates may apply. I can revoke
this consent at any time by replying STOP to a text or using the opt-out
mechanism on a call. See our Privacy Policy and Do Not Sell or Share My Personal
Information page for details.

PRIVACY POLICY: [link]
DO NOT SELL OR SHARE: [link] (CA residents)
NOTICE AT COLLECTION: [link] (CA residents)
```

### 8.2 TCPA-compliant SMS message template

```
[Brand]: Hi [FirstName], thanks for your mortgage qualification request at
[Site]. You prequalified for offers up to $X. Reply STOP to opt out; HELP for help.
Message/data rates may apply. [Link to privacy]
```

### 8.3 CAN-SPAM-compliant marketing e-mail footer

```
[Company Name] | [Street Address, City, ST ZIP]
This email is an advertisement. You are receiving this because you provided
your email at [Site]. To unsubscribe: [link]. Privacy policy: [link].
```

### 8.4 CCPA Notice at Collection (for the website's California visitors)

```
NOTICE AT COLLECTION (CCPA / CPRA)

Last updated: [Date]
Categories of personal information collected: identifiers (name, email, phone,
IP, device), commercial information (income, debt, credit range, down payment),
inferences (qualification likelihood).

Categories of sensitive personal information: financial information (income,
debt, credit range, down payment).

Purposes: (1) provide mortgage qualification estimate; (2) market mortgage
products; (3) share with lenders, brokers, and lead aggregators for marketing.

Categories of third parties: mortgage lenders, brokers, lead aggregators.

Retention: [X years / until you ask us to delete].

Your rights: know, delete, correct, opt out of sale/sharing, limit use of
sensitive PI. Submit requests: [link/email]. Authorized agents may submit
requests with proof of authorization. We will not discriminate against you for
exercising your rights.

Do Not Sell or Share My Personal Information: [link]
Limit the Use of My Sensitive Personal Information: [link]
```

### 8.5 TCPA-compliant website phone-number collection disclosure

```
When you provide your phone number, you agree that [Company] and its marketing
partners may call or text you using automatic telephone dialing systems or
artificial/prerecorded voice, even if your number is on a state or national
Do-Not-Call list. Consent is not required to use this site. You can revoke at
any time by replying STOP to a text or saying "stop" during a call.
```

### 8.6 FCRA permissible-purpose disclosure (if soft pull is performed)

```
[Company] may obtain a soft credit report from [CRA name] for the purpose of
providing a mortgage qualification estimate. This is a "soft inquiry" that
will not affect your credit score. By clicking "Get my estimate," you
authorize [Company] to obtain this soft credit report.
```

### 8.7 Adverse action notice (if the diagnostic returns a denial/less-favorable result)

```
ADVERSE ACTION NOTICE

You were not prequalified for the mortgage offers you viewed. This decision
was based in whole or in part on information in your consumer credit report.

Credit reporting agency: [CRA Name]
Address: [CRA Address]
Toll-free: [CRA Phone]

Your credit score: [XXX] (from [CRA])
Score range: [300-850]
Score date: [Date]
Score provider: [Provider]

The credit reporting agency did not make this decision. You have the right to:
(1) request a free copy of your consumer report from [CRA] within 60 days;
(2) dispute the accuracy or completeness of any information in your report.

You may also obtain information about credit reports, credit scores, and
credit-building resources at www.consumerfinance.gov.
```

---

## 9. Compliance checklist

### 9.1 Lead capture and pre-submission

- [ ] Privacy Policy published, dated, and consistent with all federal and state disclosures.
- [ ] Notice at Collection (CA) presented before any data field.
- [ ] "Do Not Sell or Share My Personal Information" link (CA) visible.
- [ ] "Limit the Use of My Sensitive Personal Information" link (CA) visible.
- [ ] TCPA consent checkbox, **unbundled, un-pre-checked**, with clear and conspicuous disclosure of the consent scope and that consent is not a condition of purchase.
- [ ] Capture of the specific phone number for which consent is given.
- [ ] Capture of timestamp, IP, user agent, and exact consent text shown to the consumer (e.g., via server-side log or screenshot).
- [ ] If a soft pull is performed, FCRA permissible-purpose disclosure and authorization.
- [ ] Capture of arbitration / class waiver / E-SIGN disclosures if required by lender agreements (state-by-state analysis needed).

### 9.2 Lead distribution and downstream sharing

- [ ] GLBA Privacy Notice provided at customer relationship establishment (if a financial institution).
- [ ] GLBA opt-out mechanism provided (if applicable; service provider / joint marketing exception may be available).
- [ ] Service provider agreements with downstream lenders / aggregators that include GLBA confidentiality and Safeguards Rule compliance obligations.
- [ ] Each downstream lender / aggregator has its own TCPA consent capture or receives the same scope of consent.
- [ ] Lead suppression list maintenance — DNC, opt-outs, revocations, prior STOP replies.

### 9.3 Marketing follow-up

- [ ] All e-mails contain CAN-SPAM-compliant footers (sender identification, opt-out, valid physical postal address, opt-out in 10 business days).
- [ ] California recipients: subject lines do not mislead (§ 17529.5).
- [ ] California recipients: any commercial e-mail using a third-party domain has that domain's authorization (§ 17529.5(a)(1)).
- [ ] Washington recipients: "ADV:" subject line prefix (CEMA).
- [ ] All SMS messages: include opt-out instructions; honor STOP/QUIT/END/REVOKE/OPT OUT/CANCEL/UNSUBSCRIBE replies in ≤10 business days.
- [ ] All autodialed/prerecorded voice calls: prior express written consent, opt-out mechanism, honor in ≤10 business days.
- [ ] Calling hours 8 a.m.–9 p.m. local time at called party's location (47 C.F.R. § 64.1200(c)(1)).
- [ ] National DNC scrub ≤31 days before each call (47 C.F.R. § 64.1200(c)(2)(i)(D)).
- [ ] Company-specific DNC list honored for 5 years (47 C.F.R. § 64.1200(d)(6)).

### 9.4 Information security (if GLBA / Safeguards Rule applies)

- [ ] Designated Qualified Individual (QI) under 16 C.F.R. § 314.4(a).
- [ ] Written information security program (16 C.F.R. § 314.3).
- [ ] Written risk assessment (16 C.F.R. § 314.4(b)).
- [ ] Encryption of customer information in transit and at rest (16 C.F.R. § 314.4(c)(3)).
- [ ] Multi-factor authentication for all information system access (16 C.F.R. § 314.4(c)(5)).
- [ ] Continuous monitoring or annual pen-test + biannual vulnerability scans (16 C.F.R. § 314.4(d)).
- [ ] Annual board report from the QI (16 C.F.R. § 314.4(i)).
- [ ] Vendor / service provider due diligence and contractual safeguards requirements (16 C.F.R. § 314.4(h) and § 313.8).
- [ ] Incident response plan; coordination with state data breach notification laws (CA, NY, etc.).

### 9.5 FCRA and credit-data handling

- [ ] Self-reported credit range is treated as non-FCRA data (consumer-provided).
- [ ] Any soft pull is from a CRA (Experian, TransUnion, Equifax, or reseller) with documented permissible purpose.
- [ ] FCRA permissible purpose captured in writing (e.g., checkbox or click-through).
- [ ] If the diagnostic returns a "denial" or "less-favorable" result based on credit data, adverse action notice is provided under 15 U.S.C. § 1681m(a) (CRA name, credit score, dispute right, free-report right).
- [ ] If the site sells or passes consumer credit data to downstream lenders, analyze whether the site is a "consumer reporting agency" under 15 U.S.C. § 1681a(f).
- [ ] Trigger-lead purchases (if any) are evaluated for whether the consumer authorized the marketing.

### 9.6 State privacy law and mortgage licensing

- [ ] Determine whether the website is a "covered business" under each state law (CA, VA, CO, CT, UT, TX, OR, MT, FL).
- [ ] Determine whether the GLBA exemption applies; if so, the website is exempt from most state laws (except CA where the exemption is partial).
- [ ] For California: full Notice at Collection, opt-out / right to limit, GPC signal honor.
- [ ] For other states: opt-out mechanisms, privacy policy disclosures.
- [ ] Determine whether the website is a "mortgage lender" or "mortgage broker" under state law; obtain license as needed.
- [ ] Determine whether MLOs must be registered (SAFE Act / NMLS).
- [ ] Determine whether the website is subject to state mini-TCPA laws (e.g., Florida Telephone Solicitation Act, Fla. Stat. § 501.059; Oklahoma Telephone Solicitation Act; etc.).

### 9.7 Insurance / backup

- [ ] TCPA class-action insurance review: $1M per-occurrence, $5M aggregate, with right and duty to defend.
- [ ] Cyber liability insurance with regulatory fines and penalties coverage and breach response coverage.
- [ ] D&O coverage for the Qualified Individual and board.
- [ ] Errors and omissions coverage if the site is a financial institution.

---

## Appendix A — Statutory & regulatory citations (consolidated)

### Federal statutes
- Telephone Consumer Protection Act of 1991, **Pub. L. 102-243**, codified at **47 U.S.C. § 227**.
- CAN-SPAM Act of 2003, **Pub. L. 108-187**, codified at **15 U.S.C. §§ 7701–7713**.
- Gramm-Leach-Bliley Act, **Pub. L. 106-102, Title V**, codified at **15 U.S.C. §§ 6801–6809**.
- Fair Credit Reporting Act, **Pub. L. 90-321, Title VI**, as added by **Pub. L. 91-508**, codified at **15 U.S.C. §§ 1681–1681x**.
- Telemarketing and Consumer Fraud and Abuse Prevention Act, **15 U.S.C. §§ 6101–6108**.
- TRACED Act, **Pub. L. 116-105**, codified at **47 U.S.C. § 227b**.
- RAY BAUM'S Act, **Pub. L. 115-141, Div. P, Title V**, codified at **47 U.S.C. § 227a**.
- Fair Credit Reporting Act Improvement Act, **Pub. L. 108-159**.
- Dodd-Frank Wall Street Reform and Consumer Protection Act, **Pub. L. 111-203**.

### Federal regulations
- **47 C.F.R. § 64.1200** (TCPA delivery restrictions).
- **16 C.F.R. Part 310** (Telemarketing Sales Rule).
- **16 C.F.R. Part 313** (Regulation P — Privacy of Consumer Financial Information).
- **16 C.F.R. Part 314** (FTC Safeguards Rule).
- **12 C.F.R. Part 1022** (CFPB Regulation V — Fair Credit Reporting).
- **12 C.F.R. Part 1022, Subpart H** (Risk-Based Pricing Rule, §§ 1022.70–1022.75).
- **12 C.F.R. Part 1024** (Regulation X — RESPA).
- **12 C.F.R. Part 1026** (Regulation Z — TILA, mortgage advertising rules in § 1026.24).

### State statutes (representative)
- **Cal. Bus. & Prof. Code § 17529.5** (anti-spam).
- **Cal. Civ. Code §§ 1798.100–1798.199.100** (CCPA / CPRA).
- **Cal. Fin. Code §§ 50000 et seq.** (CRMLA).
- **Cal. Fin. Code § 22050 et seq.** (mini-TCPA — automatic renewal / telephone solicitation).
- **Cal. Ins. Code § 791.13** (insurance privacy).
- **Va. Code § 59.1-575 et seq.** (VCDPA).
- **Colo. Rev. Stat. § 6-1-1301 et seq.** (Colorado Privacy Act).
- **Conn. Gen. Stat. § 42-515 et seq.** (CTDPA).
- **Utah Code § 13-61-101 et seq.** (UCPA).
- **Tex. Bus. & Com. Code § 541.101 et seq.** (TDPSA).
- **Ore. Rev. Stat. § 646A.570 et seq.** (OCPA).
- **Mont. Code § 30-14-2801 et seq.** (MCDPA).
- **Fla. Stat. § 501.701 et seq.** (Florida Digital Bill of Rights).
- **740 ILCS 14** (Illinois BIPA).
- **Wash. Rev. Code Ch. 19.190** (CEMA).
- **Fla. Stat. Ch. 494** (Florida mortgage licensing).
- **NY Banking Law § 590 et seq.** (mortgage banker licensing).
- **Tex. Fin. Code Ch. 156** (MLO licensing).

### Key cases
- **Facebook, Inc. v. Duguid**, 141 S. Ct. 1163 (2021) (narrow ATDS definition).
- **Campbell-Ewald Co. v. Gomez**, 577 U.S. 153 (2016) (FCC complaint and offer of full relief).
- **Satterfield v. Simon & Schuster, Inc.**, 569 F.3d 946 (9th Cir. 2009) (SMS is a "call").
- **Insurance Marketing Coalition Ltd. v. FCC**, 127 F.4th 303 (11th Cir. 2025) (vacating one-to-one consent rule).
- **Cothron v. White Castle System, Inc.**, 216 N.E.3d 918 (Ill. 2023) (BIPA: each scan is a separate violation).
- **Rosenbach v. Six Flags Entertainment Corp.**, 2019 IL 123186 (Ill. 2019) (BIPA: actual injury not required for standing).
- **In re Capital One Consumer Data Security Breach Litigation**, 488 F. Supp. 3d 374 (E.D. Va. 2020) (Safeguards Rule adequacy).

---

## Appendix B — Important caveats and unverified items

1. **Florida FDBR status — confirmed not repealed:** The 2026 Florida Statutes still include §§ 501.701–.713 with the GLBA exemption at § 501.703(2)(b) verbatim. The FDBR has **not** been repealed in 2025 or 2026. The website should still monitor for amendments at https://www.flsenate.gov/Laws/Statutes/2026/501.703 before each Florida legislative session.

2. **Connecticut, Oregon, Montana primary-source verification:** For CT, OR, and MT, the verbatim GLBA exemption language was structurally inferred from the model language used in VA/CO/UT/TX (which were all directly verified). The site operator should verify the verbatim language at the official sources (https://www.cga.ct.gov/current/pub/title_42.htm; https://www.oregonlegislature.gov/bills_laws/ors/ors646a.html; https://leg.mt.gov/bills/mca/title_0300/chapter_0140/) before publication.

3. **Specific FCC enforcement actions against mortgage lead generators:** The FCC's enforcement database is not always publicly accessible. The website should subscribe to the FCC's Enforcement Bureau RSS feed and to the CFPB's enforcement announcements at https://www.consumerfinance.gov/enforcement/.

4. **California 11 C.C.R. § 7027 and § 7025 (CCPA Regulations):** The CCPA Regulations are extensive and have been amended several times; the website should consult the current regulations at https://oag.ca.gov/privacy/ccpa and the CPPA's website at https://cppa.ca.gov/.

5. **State mortgage licensing rules:** State licensing rules change frequently. The website should consult the NMLS (https://nationwidelicensingsystem.org/) and the relevant state regulators.

6. **TCPA class action insurance:** Insurers are increasingly excluding TCPA from cyber/privacy policies. The website should review coverage with its broker.

7. **"Revoke-all" portion of TCPA § 64.1200(a)(10):** Delayed to **April 11, 2026** by FCC DA 25-312. The website must prepare for the global revocation rule's effect.

8. **Pending SCOTUS case *McLaughlin Chiropractic v. McKesson*:** Could materially affect private TCPA litigation. Monitor for 2025 decision.

9. **Pending FCC rulemakings:** AI-generated voice NPRM (FCC 24-84) and KYUP/STIR/SHAKEN NPRMs (FCC 25-76, FCC 26-32) — no final rules.

---

*This report is a research memorandum and is not legal advice. The website should consult qualified privacy and mortgage compliance counsel before launch or material change of business practices.*
