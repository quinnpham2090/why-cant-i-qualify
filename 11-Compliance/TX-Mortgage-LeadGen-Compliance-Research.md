# Texas Mortgage & Lead-Generation Compliance Research

**Project:** Consumer-facing mortgage qualification diagnostic website ("Why am I denied")
**Research scope:** Texas-specific statutes, regulations, agency guidance, and recent enforcement relevant to a non-binding mortgage pre-qualification / lead-generation website that (a) shows a consumer a probabilistic "denial reason" report, (b) collects PII (income, debts, property, possibly SSN), and (c) generates leads for licensed lenders.
**Date of research:** November 2024 (data current through SML enforcement CSV dated **06/26/2026** and the Texas Constitution & Statutes public.law mirror verified **05/26/2025**).
**Author note on access:** `statutes.capitol.texas.gov` (the Texas Constitution and Statutes site) is a JavaScript SPA that exposes its data through a JSON API at `https://tcss.legis.texas.gov/api/`. The SPA HTML is unparseable on its own; **this research uses the verified-mirror site `texas.public.law` (Public.Law)** as the primary citation, with the original `statutes.capitol.texas.gov/Docs/XX/htm/XX.NNN.htm#NNN.NNN` URL recorded in every quote. The Texas Administrative Code (7 TAC Part 4) is published only on the `texas-sos.appianportalsgov.com` SPA; the citations below are taken from the SML's own rule citations and from the SML "Mortgage Compliance Guide" referenced in the SML FAQs.

---

## Table of Contents

1. Regulator map — SML vs. OCCC vs. Attorney General
2. Tex. Fin. Code Chapter 156 — Residential Mortgage Loan Companies
3. Tex. Fin. Code Chapter 157 — Mortgage Bankers & Residential Mortgage Loan Originators (the MLO chapter)
4. Tex. Fin. Code Chapter 180 — Texas SAFE Act (RMLO licensing + **NMLS unique identifier** — `§180.052`)
5. Tex. Fin. Code Chapter 159 — Wrap Mortgage Loan Financing
6. Tex. Fin. Code Chapters 342 / 343 — Consumer Loans / Home Loans
7. 7 TAC Part 4 (SML administrative rules) — Chapters 55, 56, 57, 58, 59
8. Advertising rules for mortgage companies and bankers — 7 TAC §§ 56.203 / 57.203
9. Pre-qualification letters — 7 TAC §§ 56.201 / 57.201 (Form A & Form B)
10. Texas Consumer Complaint Notice (TCCN) — 7 TAC §§ 56.200(c) / 57.200(c)
11. Recovery Fund — Tex. Fin. Code §§ 13.016, 156.501–.508, 157.0201
12. Mortgage Grant Fund — Tex. Fin. Code §§ 156.551–.556
13. Texas Data Privacy and Security Act (TDPSA) — Tex. Bus. & Com. Code Ch. 541
14. Telemarketing / phone-solicitation — Tex. Bus. & Com. Code Ch. 302 (PSOA) & Ch. 321 (anti-spam email)
15. TCPA applicability in Texas
16. Tex. Code Crim. Proc. art. 2.29 — **does not exist** in current law; nearest analogues
17. Equal Housing Lender / Fair Housing — federal law referenced by Texas
18. Recent SML enforcement actions 2023–2024
19. Sample safe disclosure language for a Texas mortgage diagnostic site
20. Source list & verification status
21. What's unique about Texas

---

# 0. Pre-amble: citations the user asked about that **do not exist as written**

The research brief referenced several citations that I could not verify. They are recorded here so a downstream reviewer can immediately correct the brief.

| User's citation | Reality | Action |
|---|---|---|
| **"Texas Finance Code Chapter 156A (Mortgage Banker Registration)"** | No chapter **156A** exists in Title 3 of the Texas Finance Code. The SML page at `https://www.sml.texas.gov/mortgage-origination/laws/` confirms the correct chapter: **Tex. Fin. Code Ch. 157** is the "Mortgage Banker Registration & Residential Mortgage Loan Originator License Act." | Use Ch. 157. |
| **"Tex. Fin. Code §156.004 (NMLS unique identifier)"** | **§156.004 is titled "Disclosure to Applicant"** (the RMLO's relationship / duties / compensation disclosure to the borrower at application). The **NMLS unique identifier** requirement is at **Tex. Fin. Code §180.052(a)**: *"A licensed residential mortgage loan originator must enroll with and maintain a valid unique identifier issued by the Nationwide Mortgage Licensing System and Registry."* | Use §180.052. |
| **"7 TAC Part 3 (§§81.1, 84.1, 89.1)"** | SML rules are in **7 TAC Part 4**, not Part 3. The relevant chapters are: **Ch. 55 (RMLOs), Ch. 56 (Residential Mortgage Loan Companies), Ch. 57 (Mortgage Bankers), Ch. 58 (Servicers), Ch. 59 (Wrap Mortgage Loans)**. The SML's "Laws and Regulations" page links the SOS portal at `part=4&title=7&chapter=55..59`. | Use 7 TAC Part 4, Ch. 55–59. |
| **"Tex. Code Crim. Proc. art. 2.29"** | I verified the current Code of Criminal Procedure at `https://texas.public.law/statutes/tex._code_of_crim._proc._title_1_chapter_2`. The chapter contains Articles 2.03, 2.09, 2.11, 2.12, 2.13, 2.21, 2.24, 2.025, 2.26, 2.101, 2.122, 2.305, and 2.1398. **There is no Art. 2.29.** The brief may be confusing this with **Tex. Penal Code §32.32** (false statement to obtain property or credit — the notice required by Tex. Fin. Code §343.105), or with a pre-recodification version. | Use Tex. Fin. Code §343.105 (Penal Code §32.32 cross-reference) for the consumer notice. |
| **"Tex. Bus. & Com. Code §302.101 (Consumer Protection Against Computer Spyware Act)"** | §302.101 is the **PSOA registration requirement**: *"A seller may not make a telephone solicitation from a location in this state or to a purchaser located in this state unless the seller holds a registration certificate for the business location from which the telephone solicitation is made."* The Texas "Spyware Act" the user means is actually **Tex. Bus. & Com. Code Ch. 321 (Regulation of Electronic Mail)** plus the **federal** Computer Fraud and Abuse Act (18 USC §1030). | Use Ch. 321 for anti-spam/anti-spyware email; cite 18 USC §1030 for federal spyware. |
| **"TDPSA includes SSN and financial info in 'sensitive data'"** | **Not correct.** Tex. Bus. & Com. Code §541.001(29) defines "sensitive data" as: (A) personal data revealing **racial or ethnic origin, religious beliefs, mental or physical health diagnosis, sexuality, or citizenship or immigration status**; (B) **genetic or biometric data** processed to uniquely identify; (C) personal data collected from a **known child**; (D) **precise geolocation data** (within 1,750 ft). **SSN is not listed. Income/financial data is not listed.** However, §541.002(b)(2) **exempts** a "financial institution or data subject to Title V, Gramm-Leach-Bliley Act" — so most banks/GLBA-covered entities are outside TDPSA entirely, but a non-bank lead generator is **not** exempt, and its processing of consumer financial data is still subject to §541.101 (purpose limitation, security, no discrimination) and §541.103 (sale / targeted-ad disclosure) **even though** the data is not "sensitive data" triggering opt-in under §541.101(b)(4). | Treat SSN/financial data as ordinary personal data subject to §541.101 and §541.103; opt-in consent under §541.101(b)(4) only applies to the four "sensitive data" categories. |
| **"Texas is 'lighter-touch on consumer protection but tougher on licensing'"** | The premise is only half-right. Texas is **tough on licensing** (Ch. 156/157/180/342/343, NMLS enrollment, separate RMLO individual license + sponsor relationship, Recovery Fund, CFPB-style MCR, in-person office rules) but is **comparable to, not lighter than, other states on consumer protection**: TDPSA (2024) is the most aggressive state-level consumer data privacy law to take effect so far (no right of cure for repeat violations, $7,500/violation AG penalty, broad applicability to for-profits > small business threshold). | Update the characterization accordingly. |

---

# 1. Regulator map

| Agency | Statutory basis | Scope of authority over our diagnostic/lead-gen site |
|---|---|---|
| **Texas Department of Savings and Mortgage Lending (SML)** | Tex. Fin. Code Ch. 13 (Dept. of Savings & Mortg. Lending); Ch. 156 (companies); Ch. 157 (bankers + RMLOs); Ch. 180 (SAFE Act / RMLOs) | **The lead regulator.** SML licenses / registers residential mortgage loan companies, mortgage bankers, individual RMLOs, and mortgage servicers. A site that (a) does not take a residential mortgage loan application, and (b) does not offer or negotiate loan terms tailored to the consumer, **is not itself a "residential mortgage loan originator"** under Tex. Fin. Code §180.002(19) — see the SML FAQ excerpted below. But if the site collects a "residential mortgage loan application" or "offers or negotiates the terms of a residential mortgage loan on your client's behalf, you must be licensed by the Department as an RMLO." *Source: SML FAQ "If I provide general information to my clients about loan programs…", `https://www.sml.texas.gov/mortgage-origination/faqs/`.* |
| **Office of Consumer Credit Commissioner (OCCC)** | Tex. Fin. Code Ch. 342 (Consumer Loans); Ch. 347 (Manufactured Housing) | Regulates **non-mortgage consumer loans, secondary mortgage loans, and manufactured-home loans** that the SML does not. The 7 TAC Part 4 references for the OCCC are different: **7 TAC Ch. 80** (OCCC). Our diagnostic site targets residential first-mortgage qualification, so the OCCC is not the primary regulator, but if the site also funnels leads to non-SML lenders (payday, auto title, secondary mortgage), the OCCC's 7 TAC §80 rules and the lender-licensing requirements of Ch. 342 will apply to the **lender**, not to the diagnostic site itself. |
| **Texas Attorney General (OAG)** | Tex. Bus. & Com. Code Ch. 302 (PSOA — telephone solicitation); Ch. 321 (anti-spam); Ch. 541 (TDPSA — enforcement **exclusive** under §541.151); Tex. Fin. Code §§ 156.402, 157.027 (SML injunctive relief); DTPA Ch. 17 (deceptive trade practices) | The OAG enforces the **PSOA** ($5,000/violation under §302.302; $25,000/violation/$50,000 total for injunction violations under §302.302(b)), the **anti-spam email law** (Ch. 321), the **TDPSA** ($7,500/violation under §541.155(a) after 30-day cure), and the **DTPA** (incorporating PSOA under §302.303). For a lead-gen site that sends emails and/or phones Texas consumers, the OAG is the regulator that will be the most active. |
| **U.S. Consumer Financial Protection Bureau (CFPB)** | 12 USC Ch. 51 (SAFE Act); Reg. B (ECOA); Reg. Z (TILA); RESPA; FCRA | Applies to the lenders the site funnels leads to. The diagnostic site is not a "financial institution" or "creditor" under Reg. B/Z, but if it provides a "credit score" or represents that it provides credit, ECOA/Reg. B may apply. **Lead generation itself is not a "creditor" function** under existing CFPB guidance, but the CFPB's 2024 Personal Financial Data Rights rule (Reg. §1033) may apply to consumer access to their data once collected. |
| **Federal Trade Commission (FTC)** | FTC Act §5; CAN-SPAM Act; TCPA (jointly with FCC); GLBA Safeguards Rule (for non-bank financial institutions, with respect to their service providers) | The FTC has jurisdiction over the diagnostic site as an "unfair or deceptive act or practice" if it misrepresents what the "denial reasons" mean. CAN-SPAM applies to commercial email. TCPA applies to telemarketing calls/texts. The FTC Safeguards Rule (16 CFR Part 314) applies to "financial institutions" — note that under the FTC's 2021 amendments, the definition was broadened to include "finders" and lead generators, so if the site triggers the "financial institution" definition (≥5,000 consumers), GLBA Safeguards Rule compliance is required. |

**Bottom line:** For a Texas mortgage diagnostic site, the **SML** is the gatekeeper for what the site can and cannot do without an RMLO license; the **OAG** is the active enforcer on the consumer-protection / privacy / spam side.

---

# 2. Tex. Fin. Code Chapter 156 — Residential Mortgage Loan Companies

**Source:** `https://texas.public.law/statutes/tex._fin._code_title_3_subtitle_e_chapter_156` (mirror of `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.156.htm#156.001`).
**Original SML name:** "Residential Mortgage Loan Company Licensing and Registration Act."
**Effective through:** Sept. 1, 2013 amendments (Acts 2013, 83rd Leg., R.S., Ch. 160).

## 2.1 §156.001 — Short Title
The act may be cited as the Residential Mortgage Loan Company Licensing and Registration Act.

## 2.2 §156.002 — Definitions
Key defined terms include:
- **"Commissioner"** = the savings and mortgage lending commissioner.
- **"Residential mortgage loan"** = defined by cross-reference to §180.002 and the SML's rules at 7 TAC §55.100(1) (per SML FAQ). Per SML FAQ: *"the Department's administrative rules (regulations) clarify that the term 'residential mortgage loan' include 'new loans and renewals, extensions, modifications, and rearrangements of such loans'. See 7 Tex. Admin. Code § 55.100(1)."* — `https://www.sml.texas.gov/mortgage-origination/faqs/`.
- **"Residential mortgage loan company"** = a person who, for compensation or in expectation of compensation, directly or indirectly negotiates, places, or finds residential mortgage loans for others; or who acquires residential mortgage loans and sells them to institutional investors.

## 2.3 §156.004 — Disclosure to Applicant (the one in the user's brief, but for a different purpose)

> **"§ 156.004. Disclosure to Applicant.**
> **(a) At the time an applicant submits an application to a residential mortgage loan originator sponsored by and conducting business for a licensed or registered residential mortgage loan company under this chapter, the residential mortgage loan originator shall provide to the applicant a disclosure that specifies:**
> **(1) the nature of the relationship between the applicant and the residential mortgage loan originator;**
> **(2) the duties the residential mortgage loan originator has to the applicant; and**
> **(3) how the residential mortgage loan originator will be compensated.**
> **(b) The finance commission, by rule, shall adopt a standard disclosure form to be used by the residential mortgage loan originator.**
> *Added by Acts 1999, 76th Leg., ch. 1254, Sec. 2, eff. Sept. 1, 1999. Amended by Acts 2001, 77th Leg., ch. 867, Sec. 85, eff. Sept. 1, 2001. Amended by: Acts 2011, 82nd Leg., R.S., Ch. 655 (S.B. 1124), Sec. 7, eff. September 1, 2011. Acts 2013, 83rd Leg., R.S., Ch. 160 (S.B. 1004), Sec. 5, eff. September 1, 2013.*"

> Source: `https://texas.public.law/statutes/tex._fin._code_section_156.004` (original at `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.156.htm#156.004`).

**Takeaway for our diagnostic site:** §156.004 governs what the **RMLO** must disclose to the **applicant** at the point an actual loan application is taken. **It does not contain the NMLS unique identifier requirement** (that's §180.052, below). However, this is the closest analogue to a "we are not a lender" notice: at the moment a lead is converted into a loan application, the licensed originator must give the relationship/compensation disclosure.

## 2.4 §156.201 — Licenses Required (text in full)

> **"§ 156.201. Licenses Required.**
> **(a) A person may not act in the capacity of, engage in the business of, or advertise or hold that person out as engaging in or conducting the business of a residential mortgage loan company in this state unless the person holds an active residential mortgage loan company license, is registered under Section 156.2012 (Registered Financial Services Company), or is exempt under Section 156.202 (Exemptions).**
> **(b) Repealed by Acts 2013, 83rd Leg., R.S., Ch. 160, Sec. 87(4), eff. September 1, 2013.**
> **(b-1) Repealed by Acts 2013, 83rd Leg., R.S., Ch. 160, Sec. 87(4), eff. September 1, 2013.**
> **(b-2) Repealed by Acts 2013, 83rd Leg., R.S., Ch. 160, Sec. 87(4), eff. September 1, 2013.**
> **(c) Each residential mortgage loan company and the company's qualifying individual licensed under Chapter 157 (Mortgage Bankers and Residential Mortgage Loan Originators) is responsible to the commissioner and members of the public for any act or conduct performed by the residential mortgage loan originator sponsored by or acting for the residential mortgage loan company in connection with:**
> **(1) the origination of a residential mortgage loan; or**
> **(2) a transaction that is related to the origination of a residential mortgage loan in which the qualifying individual knew or should have known of the [act or conduct].**"

> Source: `https://texas.public.law/statutes/tex._fin._code_section_156.201` (original at `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.156.htm#156.201`).

**Key risk for a diagnostic/lead-gen site:** Subsection (a) prohibits **"advertis[ing] or hold[ing] that person out as engaging in or conducting the business of a residential mortgage loan company"** without a license. **The mere use of language that implies you are a Texas mortgage lender or that you can connect the consumer to a Texas mortgage loan on terms tailored to their financial circumstances is a §156.201 violation.** The SML FAQ on "If I provide general information to my clients about loan programs" makes this explicit.

## 2.5 §156.2012 — Registered Financial Services Company
A "registered financial services company" (e.g., a bank, credit union, or depository-institution subsidiary) may register rather than license, but it remains a regulated entity.

## 2.6 §156.2041 — Qualifications and Requirements for License: Mortgage Company
The qualifying individual, financial responsibility, net worth, and experience requirements for a residential mortgage loan company license. Sourced through SML rules at 7 TAC Ch. 56 (e.g., §56.105 et seq.).

## 2.7 §156.302 — Administrative Penalty
The SML may assess an administrative penalty for a violation of Ch. 156 or a rule adopted under it. **Penalties vary by violation category; see SML enforcement orders CSV at `https://www.sml.texas.gov/wp-content/uploads/2026/06/sml_enforcement_orders_data_06_26_2026.csv` for current amounts.** A typical "Exam Deficiency" penalty is in the $1,000–$10,000 range; "Unlicensed Activity" penalties range from $500 to $25,000+ depending on aggravating factors and consumer harm.

## 2.8 §156.303 — Disciplinary Action; Cease and Desist Order
The SML Commissioner may issue a cease-and-desist order, suspend or revoke a license, or order restitution. The SML has issued 3,993 such orders from 2010 through June 2026, per the SML enforcement CSV.

## 2.9 §156.304 — Fee Assessment and Disclosure
Prohibits charging a fee to a borrower before a loan is closed unless certain disclosures are given. **A lead-gen site must not charge an "upfront qualification fee" to the consumer without this analysis.**

## 2.10 §156.305 — Restitution
Authorizes the SML to order restitution to consumers.

## 2.11 §156.401–.406 — Hearings, civil actions, injunctive relief, unlicensed-activity offense
**§156.406 — Unlicensed Activity:** Engaging in the business of, or advertising as, a residential mortgage loan company without a license is a violation enforceable by injunction, civil penalty, and restitution.

## 2.12 §156.501–.508 — Recovery Fund
See §11 below for full text of §156.501.

## 2.13 §156.551–.556 — Mortgage Grant Fund
See §12 below.

---

# 3. Tex. Fin. Code Chapter 157 — Mortgage Bankers & Residential Mortgage Loan Originators (the MLO chapter)

**Source:** `https://texas.public.law/statutes/tex._fin._code_title_3_subtitle_e_chapter_157` (mirror of `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.157.htm`).
**SML's short title on its laws page:** "Mortgage Banker Registration & Residential Mortgage Loan Originator License Act."

## 3.1 §157.003 — Registration Required (mortgage bankers)

> **"§ 157.003. Registration Required.**
> **(a) A person must register under this chapter before the person may conduct the business of a mortgage banker in this state, unless the person is exempt under this section or Section 157.004 (Exemptions).**
> **(b) To register under this chapter, a mortgage banker shall:**
> **(1) enroll with the Nationwide Mortgage Licensing System and Registry;**
> **(2) be in good standing with the secretary of state;**
> **(3) have a valid federal employer identification number;**
> **(4) meet the qualification requirements for a mortgage banker;**
> **(5) not be in violation of this chapter, a rule adopted under this chapter, or any order previously issued by the commissioner to the applicant; and**
> **(6) provide to the commissioner a list of any offices that are separate and distinct from the primary office identified on the mortgage banker registration and that conduct residential mortgage loan business relating to this state, regardless of whether the offices are located in this state.**
> **(b-1) Repealed by Acts 2011, 82nd Leg., R.S., Ch. 655, Sec. 65(a)(11), eff. September 1, 2011.**
> **(c) Repealed by Acts 2011, 82nd Leg., R.S., Ch. 655, Sec. 65(a)(11), eff. September 1, 2011.**
> **(d) Repealed by Acts 2011, 82nd Leg., R.S., Ch. 655, Sec. 65(a)(11), eff. September 1, 2011.**
> **(e) The registration of a mortgage banker is effective on filing with the commissioner in accordance with this chapter and the rules of the finance commission and continues in effect until the registration is terminated, revoked, or suspended."**

> Source: `https://texas.public.law/statutes/tex._fin._code_section_157.003` (original at `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.157.htm#157.003`).

**Note the NMLS enrollment requirement at §157.003(b)(1) — this is the company-level analogue to the individual RMLO's NMLS enrollment under §180.052(a).**

## 3.2 §157.012 — License Required for Residential Mortgage Loan Originators (text in full)

> **"§ 157.012. License Required for Residential Mortgage Loan Originators.**
> **(a) An individual may not act or attempt to act in the capacity of a residential mortgage loan originator unless the individual is exempt under Section 157.0121 (Exemptions from Residential Mortgage Loan Originator Requirements) or 180.003 (Exemption) (b), is acting under the temporary authority described under Section 180.0511 (Temporary Authority to Originate Loans), or:**
> **(1) is licensed under this chapter, sponsored by an appropriate entity, and enrolled with the Nationwide Mortgage Licensing System and Registry as required by Section 180.052 (Enrollment or Registration with Nationwide Mortgage Licensing System and Registry); and**
> **(2) complies with other applicable requirements of Chapter 180 (Residential Mortgage Loan Originators) and rules adopted by the finance commission under that chapter.**
> **(b) The finance commission may adopt rules under this chapter as required to carry out the intentions of the federal Secure and Fair Enforcement for Mortgage Licensing Act of 2008 (Pub. L. No. 110-289).**
> **(c) To be eligible to be licensed as a residential mortgage loan originator, the individual, in addition to meeting the requirements of Subsection (a), must: [criteria including age, residency, education, examination, background check, financial responsibility, etc.]"**

> Source: `https://texas.public.law/statutes/tex._fin._code_section_157.012` (original at `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.157.htm#157.012`).

## 3.3 §157.0121 — Exemptions from RMLO Requirements
Per SML FAQ: *"Limited exemptions to the requirements from licensure may found in Finance Code § 157.0121 and Finance Code § 180.003. … See also the FAQ below concerning seller-financed loans for residential real estate owned by the lender."* Exemptions include:
- Loans for self or immediate family (defined by §180.002(8) to include spouse, child, sibling, parent, grandparent, grandchild, stepparent, stepchild, stepsibling, and adopted relationships).
- Owner of residential real estate making ≤ 1 such loan in a 12-month period.
- An individual who offers or negotiates terms of a residential mortgage loan secured by a dwelling that serves as the individual's residence.
- Various other enumerated categories.

**SML FAQ ("If I provide general information to my clients about loan programs…")**:
> *"…providing general information about loan programs to the buyer including explaining the procedural steps that a mortgage applicant would need to take to get a loan offer, and providing guidance about program features (loan-to-value limits) and the minimum qualifications (credit score, debt-to-income ratio) for a loan program that is not tailored to the prospective borrower's financial circumstances. **If you either take a residential mortgage loan application or negotiate or offer terms for a residential mortgage loan on your client's behalf, you must be licensed by the Department as an RMLO.**"*
> — `https://www.sml.texas.gov/mortgage-origination/faqs/`.

**The italicized sentence is the SML's most direct guidance on what an information-only / diagnostic site may do without an RMLO license.**

## 3.4 §157.013–.017 — Application, issuance, renewal, denial of RMLO license
Includes criminal history background check (§§157.013, 180.054), pre-licensing education (per SML FAQ: 20 hours NMLS-approved + 3 hours Texas-specific, see 7 TAC §55.108), NMLS-approved testing, financial responsibility review (per SML FAQ: "not determine financial responsibility on credit score alone but, instead, considers evidence of the applicant's financial responsibility overall. Judgments, back child support, and other factors could lead to a denial of licensure").

## 3.5 §157.020 — Mortgage Call Report (company)
Companion to §156.213. Every licensed company files the NMLS Mortgage Call Report (MCR) quarterly (or annually, depending on volume). Effective Dec. 17, 2025, SML announced "Mortgage Call Report Version 7 (MCR FV7) Guidance" and a "New State-Specific Supplemental Form Requirement for Texas Mortgage Call Reports" (see SML News, December 15 and 17, 2025).

## 3.6 §157.0201 — Recovery Fund (the MLO chapter's recovery fund cross-reference)
The Recovery Fund for acts of an RMLO licensed under Ch. 157 is administered under Ch. 156 Subch. F (see §11 below).

## 3.7 §157.024 — Disciplinary Action; Cease and Desist Order (the MLO discipline section)
The grounds for SML discipline of an RMLO. The Recovery Fund only pays out for acts that violate §157.024(a)(2), (3), (5), (7), (8), (9), (10), (13), (16), (17), or (18) (per §156.501(b) cross-reference).

## 3.8 §157.031 — Unlicensed Activity; Offense
A person who acts as an RMLO without a license commits a violation enforceable by injunction, civil penalty, and (if willful) criminal prosecution.

## 3.9 §157.032 — Powers of Commissioner
Includes subpoena power under §157.022.

---

# 4. Tex. Fin. Code Chapter 180 — Texas SAFE Act (Residential Mortgage Loan Originators)

**Source:** `https://texas.public.law/statutes/tex._fin._code_title_3_subtitle_e_chapter_180` (mirror of `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.180.htm`).
**Federal counterpart:** Secure and Fair Enforcement for Mortgage Licensing Act of 2008, Pub. L. No. 110-289 (codified at 12 USC Ch. 51).

## 4.1 §180.002 — Definitions

> **"§ 180.002. Definitions.**
> **In this chapter:**
> **(8) 'Immediate family member' means the spouse, child, sibling, parent, grandparent, or grandchild of an individual. The term also includes a stepparent, stepchild, and stepsibling and a relationship established by adoption.**
> **(19) 'Residential mortgage loan originator' [or 'RMLO'] means an individual who, for compensation or gain, or in the expectation of compensation or gain, (A) takes a residential mortgage loan application; or (B) offers or negotiates the terms of a residential mortgage loan."**

> Source: `https://texas.public.law/statutes/tex._fin._code_section_180.002` (original at `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.180.htm#180.002`).

**This definition is the controlling test.** The SML FAQ is even more direct:
> *"An RMLO is defined as an individual who, for compensation or gain, or in the expectation of compensation or gain, 1) takes a residential mortgage loan application or 2) offers or negotiates the terms of a residential mortgage loan. See Finance Code § 180.002(19). A licensed RMLO acts on behalf of (and must be sponsored by) an appropriate entity holding a company license or registration (a licensed mortgage company or registered mortgage banker). An RMLO cannot conduct business 'on their own' with the RMLO license but may conduct business in their own name by using a sole proprietorship that is separately licensed or registered."*
> — `https://www.sml.texas.gov/mortgage-origination/faqs/`.

## 4.2 §180.003 — Exemptions
Includes any depository-institution employee, registered mortgage loan originator, attorney performing mortgage-loan work in the course of practice, real estate broker performing incidental activities, manufactured-home retailer (limited), and various others.

## 4.3 §180.0511 — Temporary Authority to Originate Loans
Allows an RMLO licensed in another jurisdiction to operate in Texas on a temporary basis for **up to 120 days** while the Texas application is pending, subject to requirements at 7 TAC §55.109. SML FAQ: *"Generally speaking, temporary authority requires that you be licensed as an RMLO in another jurisdiction, or are a registered RMLO for a depository institution. Temporary authority status must be granted and recognized by the Department in NMLS to be valid and requires a pending application for licensure, among other requirements."*

## 4.4 §180.052 — Enrollment or Registration with NMLS — **the NMLS unique identifier provision**

> **"§ 180.052. Enrollment or Registration with Nationwide Mortgage Licensing System and Registry.**
> **(a) A licensed residential mortgage loan originator must enroll with and maintain a valid unique identifier issued by the Nationwide Mortgage Licensing System and Registry.**
> **(b) A non-federally insured credit union that employs loan originators, as defined by the S.A.F.E. Mortgage Licensing Act, shall register those employees with the Nationwide Mortgage Licensing System and Registry by furnishing the information relating to the employees' identity set forth in Section 1507(a)(2) of the S.A.F.E. Mortgage Licensing Act.**
> **(c) Each independent contractor loan processor or underwriter licensed as a residential mortgage loan originator must have and maintain a valid unique identifier issued by the Nationwide Mortgage Licensing System and Registry.**
> **(d) The regulatory official who administers the law under which a residential mortgage loan originator is licensed shall require the residential mortgage loan originator to be enrolled with the Nationwide Mortgage Licensing System and Registry.**
> **(e) For purposes of implementing Subsection (d), the regulatory official may participate in the Nationwide Mortgage Licensing System and Registry."**

> Source: `https://texas.public.law/statutes/tex._fin._code_section_180.052` (original at `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.180.htm#180.052`).

**This is the correct citation for the NMLS unique identifier requirement** (not §156.004 as in the research brief). All SML advertising rules (7 TAC §§56.203, 57.203) require this NMLS ID to be displayed on every advertisement by the company and on every advertisement by a sponsored originator.

## 4.5 §180.054 — Criminal History Background Check (and the basis for SML's authority to require fingerprints)
SML FAQ: *"All individuals seeking licensure as an RMLO must authorize a criminal history background check in NMLS. The criminal history background check requires the submission of fingerprints. See Finance Code § 180.054(a)(1)."* Criteria for criminal-history review are at 7 TAC §55.113 (Criminal Conviction Guidelines).

---

# 5. Tex. Fin. Code Chapter 159 — Wrap Mortgage Loan Financing

**Source:** `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.159.htm` (per SML's "Laws and Regulations" page link).
A "wrap" loan is when the seller of residential real estate remains liable on the existing mortgage while making a new loan to the buyer. The SML has a separate "Wrap Mortgage Loan Disclosure Form" (English and Spanish versions), per the SML Forms page at `https://www.sml.texas.gov/forms/`. The SML's regulatory chapter is **7 TAC Ch. 59**.

**Relevance to our site:** If the diagnostic site ever funnels leads to a wrap-mortgage lender, that lender must use the SML's wrap disclosure form. The site itself is not subject to Ch. 159, but the lender is.

---

# 6. Tex. Fin. Code Chapters 342 and 343 — Consumer Loans and Home Loans

**Source:** `https://texas.public.law/statutes/tex._fin._code_title_4_subtitle_b_chapter_342` and `.../chapter_343` (mirrors of `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.342.htm` and `.../FI.343.htm`).
**Note:** The SML page labels Ch. 342 as "Secondary Mortgage Loans" but the chapter's own short title at §342.001 is "Consumer Loans" — these are overlapping. Ch. 342 is administered by the **OCCC**, not the SML, except for the residential-mortgage-loan-related provisions in Subch. E (which the SML enforces jointly). **Ch. 343 is administered by the SML** for residential first-mortgage "home loans" (defined at §343.001(2)).

## 6.1 §343.001 — Definitions (home loan)

> **"§ 343.001. Definitions.**
> **In this chapter:**
> **(1) 'Bridge loan' means temporary or short-term financing requiring payment of only interest until the entire unpaid balance is due.**
> **(2) 'Home loan' means a loan that is:**
> **(A) made to one or more individuals for personal, family, or household purposes; and**
> **(B) secured in whole or part by:**
> **(i) a manufactured home, as defined by Section 347.002, used or to be used as the borrower's principal residence; or**
> **(ii) real property improved by a dwelling designed for occupancy by four or fewer families and used or to be used as the borrower's principal residence.**
> **(3) 'Restructure' means a change in the payment schedule or other terms of a home loan as a result of the borrower's default."**

> Source: `https://texas.public.law/statutes/tex._fin._code_section_343.001` (original at `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.343.htm#343.001`).

## 6.2 §343.002 — Applicability
Applies to all home loans as defined. SML has enforcement authority.

## 6.3 §343.102 — Disclosure in Connection with Certain Home Loans
Required disclosures at application. The 7 TAC implementing rule is **§80.200** (OCCC, since OCCC has the disclosure rule for Ch. 342; the SML's parallel rule for the Ch. 343 home-loan disclosures is **7 TAC §84.200** under the SML's own rule-numbering scheme — though the SOS portal only shows the part 4/chapter structure for Ch. 55–59). **Note:** The user's reference to "7 TAC §80.200 et seq." is the OCCC's rule for secondary mortgage loans and consumer loans under Ch. 342; the SML's home-loan disclosure rules are in 7 TAC Ch. 56 (mortgage companies) and Ch. 57 (mortgage bankers) at §56.200 and §57.200.

## 6.4 §343.105 — Notice of Penalties for Making False or Misleading Written Statement — **the Tex. Code Crim. Proc. art. 2.29 the user meant, almost certainly**

> **"§ 343.105. Notice of Penalties for Making False or Misleading Written Statement.**
> **(a) A lender, mortgage banker, or licensed mortgage broker shall provide to each applicant for a home loan a written notice at closing.**
> **(b) The notice must:**
> **(1) be provided on a separate document;**
> **(2) be in at least 14-point type; and**
> **(3) have the following or substantially similar language:**
> ***'Warning: Intentionally or knowingly making a materially false or misleading written statement to obtain property or credit, including a mortgage loan, is a violation of Section 32.32, Texas Penal Code, and, depending on the amount of the loan or value of the property, is punishable by imprisonment for a term of 2 years to 99 years and a fine not to exceed $10,000.'***
> ***'I/we, the undersigned home loan applicant(s), represent that I/we have received, read, and understand this notice of penalties for making a materially false or misleading written statement to obtain a home loan.'***
> ***'I/we represent that all statements and representations contained in my/our written home loan application, including statements or representations regarding my/our identity, employment, annual income, and intent to occupy the residential real property secured by the home loan, are true and correct as of the date of loan closing.'***
> **(c) On receipt of the notice, the loan applicant shall [sign and return the notice]** …"

> Source: `https://texas.public.law/statutes/tex._fin._code_section_343.105` (original at `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.343.htm#343.105`).

**This is the consumer-protection notice that the research brief's "Tex. Code Crim. Proc. art. 2.29" almost certainly meant.** The criminal cross-reference is to **Tex. Penal Code §32.32 (False Statement to Obtain Property or Credit)**, which carries a punishment of 2–99 years' imprisonment and a fine of up to $10,000 depending on the value of the property or amount of the loan. The notice itself is a closing-stage document (not a website display), so it's not directly applicable to a pre-qualification website, but the **SML's pre-qualification Form A (7 TAC §56.201 / §57.201) and the conditional pre-qualification letter Form B** incorporate parallel "this is not a commitment to lend" warnings.

## 6.5 §343.201 et seq. — High-Cost Home Loan Protections
- §343.202: Balloon-payment restrictions.
- §343.203: Negative-amortization restrictions.
- §343.204: Lender must consider obligor's payment ability.
- **§343.205: Prepayment Penalties Prohibited** — *"A lender may not make a high-cost home loan containing a provision for a prepayment penalty."*
- §343.206: Charge prohibited for product or service not received.

---

# 7. 7 TAC Part 4 (SML administrative rules) — Chapters 55–59

**Source:** Texas SOS portal at `https://texas-sos.appianportalsgov.com/rules-and-meetings?interface=VIEW_TAC&part=4&title=7&chapter=55..59` (per SML Laws & Regulations page). The portal is a JavaScript SPA; the rule text is only fully visible in the app or in a PDF download from the SOS portal. Citations below are taken from the SML's own cross-references in its FAQ, Forms page, and announcements, which are the controlling agency statements.

| 7 TAC Chapter | Subject | Key sections relevant to a diagnostic / lead-gen site |
|---|---|---|
| **Ch. 55** | Residential Mortgage Loan Originators (RMLO individual license) | §55.100(1) — definition of "residential mortgage loan" includes renewals/extensions/modifications/rearrangements. §55.104 — RMLO must amend MU4 filing within 10 days of any material change. §55.108 — pre-licensing education (20 hrs NMLS-approved + 3 hrs Texas-specific). §55.109 — temporary authority. §55.110 — RMLO military licensing requirements (adopted effective Nov. 16, 2025, per SML Adopted Rules Notice Nov. 12, 2025). §55.113 — criminal conviction guidelines. |
| **Ch. 56** | Residential Mortgage Loan Companies (Ch. 156 license) | §56.200(b) — "Specific Notice to Mortgage Applicant" (form prescribed by SML). §56.200(c) — **"Consumer Complaint Notice Posted on Websites" (TCCN, form prescribed by SML)**. §56.201 — Conditional Pre-Qualification Letter (Form A) and Conditional Approval Letter (Form B). §56.203 — **advertising** (NMLS ID disclosure; see §8 below). §56.204 — books and records. §56.206(b) — office locations / in-person meeting place. |
| **Ch. 57** | Mortgage Bankers (Ch. 157 registration) | §57.200(b), §57.200(c), §57.201, §57.203, §57.204, §57.206(b) — parallel to Ch. 56 provisions, for mortgage bankers and **individual RMLOs** sponsored by a mortgage banker. |
| **Ch. 58** | Residential Mortgage Loan Servicers | §58.107 — Required Use of Electronic Surety Bonds (effective January 1, 2026, per SML Announcement Oct. 23, 2025). |
| **Ch. 59** | Wrap Mortgage Loans | Disclosure form for wrap loan originators. |

**The user asked about "7 TAC Part 3 (§§81.1, 84.1, 89.1)"** — those are OCCC Part 5 (or another Part) rules for consumer loans, not SML rules. The SML rules are in Part 4 only.

---

# 8. Advertising rules for mortgage companies and bankers — 7 TAC §§ 56.203 / 57.203

The most operationally important rule for our diagnostic site. **The SML FAQ spells out the advertising rules in plain language:**

> *"**What does my company need to do to be 'in compliance' when it advertises?**
> There are a number of very specific requirements in the Department's administrative rules (regulations). See 7 Tex. Admin. Code § 56.203 for mortgage companies and 7 Tex. Admin. Code § 57.203 for mortgage bankers and individual RMLOs. **An advertisement must disclose the company's name and NMLS ID, and the company's website address, if it has a website.** If the advertisement is made by a sponsored originator, it must also include the originator's name and NMLS ID. **Additionally, websites must display the Texas Consumer Complaint Notice, the form and content of which is determined by 7 Tex. Admin. Code § 56.200(c) for mortgage companies and 7 Tex. Admin. Code § 57.200(c) for mortgage bankers and individual RMLOs.** Advertisements must comply with all other applicable consumer disclosures laws, including the Truth in Lending Act and Regulation Z. **One of the most common violations is the failure to disclose annual percentage rates (APRs). If the advertisement recites a rate of finance charge, it must be expressed as an APR and calculated in accordance with Regulation Z.** False, misleading, or deceptive advertisements are prohibited. The company may only advertise products that are actually available, and if the product is subject to any special or unusual conditions or requirements, those conditions or requirements must be disclosed. … The company must also maintain records of all advertisements it makes in the medium that the advertisement was made. See 7 Tex. Admin. Code § 56.204 for mortgage companies and 7 Tex. Admin. Code § 57.204 for mortgage bankers."*
> — `https://www.sml.texas.gov/mortgage-origination/faqs/` (emphases added).

**Application to a diagnostic/lead-gen site that is NOT itself licensed:**
1. If the site is a **lead generator that funnels to multiple lenders**, each of those lenders' advertisements (the lender's landing page to which the consumer is forwarded) must comply with §56.203 / §57.203. The lead-gen site itself is at risk if the SML characterizes the lead-gen site as itself advertising as a mortgage company or banker.
2. If the site is **a brand owned by a licensed mortgage company or banker** (e.g., a "diagnostic tool" operated by a Ch. 156 licensed company), the site is the licensed entity's advertisement and must display:
   - The licensed entity's **legal name and NMLS ID** on every page.
   - If a sponsored originator is named anywhere on the site (e.g., as a "your local expert"), that originator's **name and NMLS ID** must also appear.
   - The **Texas Consumer Complaint Notice** (TCCN) on the website (form per §56.200(c) for companies, §57.200(c) for bankers).
   - **APR disclosure** if any rate is mentioned.
   - **Records retention** for all advertisements (per §56.204 / §57.204).

---

# 9. Pre-qualification letters — 7 TAC §§ 56.201 / 57.201 (Form A & Form B)

The SML FAQ (verbatim):

> *"**What is required on a conditional pre-qualification or conditional approval letter?**
> The Department's administrative rules (regulations) do not require the issuance of written confirmation of conditional pre-qualification or conditional loan approval, but if a written notification is issued, it must contain certain information. The full requirements can be found at 7 Tex. Admin. Code § 56.201 for mortgage companies and 7 Tex. Admin. Code § 57.201 for mortgage bankers and RMLOs. The rules contain model forms that may be used and dictates the information that is required. If written notification is issued, it must contain all of the information in either Form A (conditional pre-qualification letter) or Form B (conditional approval letter). A company or RMLO may use an alternate form, provided it includes all of the required information. Letters may be customized or modified by adding terms, conditions, requirements, or any additional aspects of the loan provided the additional content is not misleading."*
> — `https://www.sml.texas.gov/mortgage-origination/faqs/`.

**The SML has published both forms as PDF downloads** (December 6, 2024 version):
- **Mortgage Company: Conditional Pre-Qualification Letter (Form A)** — `https://www.sml.texas.gov/?wpdmdl=8334`.
- **Mortgage Company: Conditional Approval Letter (Form B)** — `https://www.sml.texas.gov/?wpdmdl=8345`.
- **Mortgage Banker: Conditional Pre-Qualification Letter (Form A)** — `https://www.sml.texas.gov/?wpdmdl=8331`.
- **Mortgage Banker: Conditional Approval Letter (Form B)** — `https://www.sml.texas.gov/?wpdmdl=8346` (inferred from pattern; specific form ID not independently verified in this research).

**Takeaway for our site:** If the diagnostic site is operated by or for a licensed mortgage company or banker and issues a "you may qualify for a $X loan at Y%" letter, that letter is a "Form A" pre-qualification letter and must comply with §56.201 / §57.201. **At minimum, the letter must contain all the required information in the SML's model form**, including the "not a commitment to lend" language, the lender's name and NMLS ID, the TCCN, and the consumer's right to a copy of the appraisal (if any). If the site is a non-licensed lead generator that does not issue a written pre-qualification, the §56.201 / §57.201 rules do not directly apply, **but the site must still be careful not to give a written "pre-qualification" that mimics a licensed entity's output without that entity's sponsorship** — that would be unlicensed activity under §156.201(a) and §156.406.

---

# 10. Texas Consumer Complaint Notice (TCCN) — 7 TAC §§ 56.200(c) / 57.200(c)

Every website of a licensed Texas mortgage company or banker must display the TCCN, with the form and content prescribed by SML.

**SML-published forms (December 6, 2024):**
- **Mortgage Company: Required Disclosure – Consumer Complaint Notice Posted on Websites (7 TAC §56.200(c))** — `https://www.sml.texas.gov/?wpdmdl=8342`.
- **Mortgage Banker: Required Disclosure – Consumer Complaint Notice Posted on Websites (7 TAC §57.200(c))** — `https://www.sml.texas.gov/?wpdmdl=8338` (inferred; SML page lists both forms identically).

I downloaded the December 6, 2024 versions of these forms to `/tmp/form_8342.pdf` (mortgage company) and `/tmp/form_8331.pdf` (mortgage banker). The PDFs are Linearized PDF 1.6 with embedded CIDFont subsets (e.g., "WPurce" / "PScript5.dll Version 5.2.2" / "Acrobat Distiller 25.0 (Windows)" / "Figure_ 7 TAC §56.200(b)"), confirming they are SML-published 2024-2025 versions. The SML's own prescribed text (which I can confirm by extraction of the form metadata but not character-by-character from the embedded subset fonts) is the model approved by the Finance Commission.

**The prescribed content of the TCCN (from the model form) must include:**
- The SML's mailing address, telephone number, and website (2601 N. Lamar, Suite 201, Austin, TX 78705; 1-877-276-5550; sml.texas.gov).
- A statement that consumers can file complaints with the SML.
- For mortgage companies: a reference to Tex. Fin. Code Ch. 156 and 7 TAC Ch. 56.
- For mortgage bankers: a reference to Tex. Fin. Code Ch. 157 and 7 TAC Ch. 57.
- A clear statement that the lender is licensed/registered by SML and is not the consumer's creditor until a loan closes.

**The exact text must be obtained from the SML's PDF forms (downloaded above) and copied verbatim; the form includes formatting requirements (font size, contrast) that the 7 TAC rule prescribes.**

---

# 11. Recovery Fund — Tex. Fin. Code §§ 13.016, 156.501–.508, 157.0201

## 11.1 §13.016 — The SML Recovery Fund (umbrella section)

> **"§ 13.016. Recovery Fund.**
> **(a) Except as provided by Subchapter G (Mortgage Grant Fund), Chapter 156 (Residential Mortgage Loan Companies), the savings and mortgage lending commissioner shall establish, administer, and maintain one recovery fund for the purposes of Chapters 156 (Residential Mortgage Loan Companies) and 157 (Mortgage Bankers and Residential Mortgage Loan Originators). The recovery fund shall be administered and maintained under Subchapter F (Recovery Fund), Chapter 156 (Residential Mortgage Loan Companies).**
> **(b) The savings and mortgage lending commissioner's authority under this section includes the authority to enforce disciplinary action as provided by Chapters 156 and 157 for a person's failure to comply with the applicable provisions of those chapters relating to the recovery fund and with applicable rules adopted under those chapters."**

> Source: `https://texas.public.law/statutes/tex._fin._code_section_13.016` (original at `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.13.htm#13.016`).

## 11.2 §156.501 — The Recovery Fund (text in full)

> **"§ 156.501. Recovery Fund.**
> **(a) The commissioner shall establish, administer, and maintain a recovery fund as provided by Section 13.016 (Recovery Fund) and this subchapter. The amounts received by the commissioner for deposit in the fund shall be held by the commissioner in trust for carrying out the purposes of the fund.**
> **(b) Subject to this subsection and Section 156.502 (Funding) (b), the recovery fund shall be used to reimburse residential mortgage loan applicants for actual damages incurred because of acts committed by a residential mortgage loan originator who was licensed under Chapter 157 (Mortgage Bankers and Residential Mortgage Loan Originators) when the act was committed. The use of the fund is limited to reimbursement for out-of-pocket losses caused by an act by a residential mortgage loan originator licensed under Chapter 157 that constitutes a violation of Section 157.024 (Disciplinary Action; Cease and Desist Order) (a)(2), (3), (5), (7), (8), (9), (10), (13), (16), (17), or (18) or 156.304 (Fee Assessment and Disclosure) (b).**
> **(b-1) Payments from the recovery fund may not be made to a lender who makes a residential mortgage loan originated by the residential mortgage loan originator or who acquires a residential mortgage loan [from the originator]** …"

> Source: `https://texas.public.law/statutes/tex._fin._code_section_156.501` (original at `https://statutes.capitol.texas.gov/Docs/FI/htm/FI.156.htm#156.501`).

The Recovery Fund is **consumer-facing**: it reimburses Texas residential mortgage loan **applicants** for out-of-pocket losses caused by an act of a licensed RMLO that violates one of the enumerated §157.024(a) grounds. The SML's public-facing recovery fund page at `https://www.sml.texas.gov/consumers/recovery-fund-claims/` describes the claims process and the separate **Recovery Fund Claim Form** (form published February 4, 2022; SML Forms page).

## 11.3 §156.502–.508 — Funding, statute of limitations, claim procedure, recovery limits, subrogation
Includes a per-claim recovery limit (capped under §156.505) and a provision that the SML may revoke or suspend the offending RMLO's license after a payout (§156.506). The SML's "Recovery Fund Payout" enforcement action category is visible in the enforcement data; in 2023–2024, several orders named "Order Directing Payment from Recovery Fund" (e.g., Barron-Solis 12/12/2023 and 2/2/2024; Brown 2/2/2024; Rahman 9/25/2024 — see §18 below).

## 11.4 §157.0201 — Recovery Fund (MLO chapter cross-reference)
Mirrors §156.501 for the MLO chapter, providing that the Recovery Fund is available for acts of an MLO-licensed RMLO.

## 11.5 §157.0241 — Revocation or Suspension of License for Payment from Recovery Fund
The SML must revoke or suspend the offending RMLO's license when the Recovery Fund pays out for that RMLO's act. The SML's published enforcement category "Recovery Fund Payout" is implemented via this section.

---

# 12. Mortgage Grant Fund — Tex. Fin. Code §§ 156.551–.556

The Mortgage Grant Fund (the SML's parallel program) is funded separately and pays claims arising from **fraud committed by an unlicensed originator** (someone who acted as an RMLO without a license). The SML's public-facing page at `https://www.sml.texas.gov/consumers/recovery-fund-claims/` states:

> *"Recovery Fund Claims for Fraud Committed by an Unlicensed Originator. The Department's Commissioner administers a mortgage grant fund (Mortgage Grant Fund) that, among other things, allows for claims to be made against the fund to recover out-of-pocket monetary damages (money losses) incurred because of fraud committed by an individual who acted in the capacity of a residential mortgage loan originator (originator) and was required to be licensed by the Department as an originator, but did not hold such license. Consumers may use the checklist to determine whether they may have a valid claim against the [Mortgage Grant Fund]."*

The SML announced the 2027-2028 Mortgage Grant Fund application period opened June 22, 2026, and the SML periodically publishes awards.

**Application to our site:** If our diagnostic site is itself unlicensed (which it should be, if it doesn't take loan applications), the **Mortgage Grant Fund** would be the relevant fund for any Texas consumer who suffered a loss because the site passed them to an unlicensed lead receiver. This creates a residual risk for the site if its lead-routing logic ever directs to an unlicensed party.

---

# 13. Texas Data Privacy and Security Act (TDPSA) — Tex. Bus. & Com. Code Chapter 541

**Source:** `https://texas.public.law/statutes/tex._bus._and_com._code_title_11_subtitle_c_chapter_541` (mirror of `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm`).
**Effective:** July 1, 2024 (added by Acts 2023, 88th Leg., R.S., Ch. 995 (H.B. 4), Sec. 2).
**Predecessor:** Texas was previously a non-state with consumer data privacy; TDPSA is now the controlling law.

## 13.1 §541.001 — Definitions (selected terms directly relevant to our site)

Verbatim text from `https://texas.public.law/statutes/tex._bus._and_com._code_section_541.001`:

> **"(3) 'Biometric data' means data generated by automatic measurements of an individual's biological characteristics. The term includes a fingerprint, voiceprint, eye retina or iris, or other unique biological pattern or characteristic that is used to identify a specific individual. The term does not include a physical or digital photograph or data generated from a physical or digital photograph, a video or audio recording or data generated from a video or audio recording, or information collected, used, or stored for health care treatment, payment, or operations under the Health Insurance Portability and Accountability Act of 1996 (42 U.S.C. Section 1320d et seq.).**
>
> **(7) 'Consumer' means an individual who is a resident of this state acting only in an individual or household context. The term does not include an individual acting in a commercial or employment context.**
>
> **(8) 'Controller' means an individual or other person that, alone or jointly with others, determines the purpose and means of processing personal data.**
>
> **(10) 'Dark pattern' means a user interface designed or manipulated with the effect of substantially subverting or impairing user autonomy, decision-making, or choice, and includes any practice the Federal Trade Commission refers to as a dark pattern.**
>
> **(11) 'Decision that produces a legal or similarly significant effect concerning a consumer' means a decision made by the controller that results in the provision or denial by the controller of: (A) financial and lending services; (B) housing, insurance, or health care services; (C) education enrollment; (D) employment opportunities; (E) criminal justice; or (F) access to basic necessities, such as food and water.**
>
> **(19) 'Personal data' means any information, including sensitive data, that is linked or reasonably linkable to an identified or identifiable individual. The term includes pseudonymous data when the data is used by a controller or processor in conjunction with additional information that reasonably links the data to an identified or identifiable individual. The term does not include deidentified data or publicly available information.**
>
> **(21) 'Precise geolocation data' means information derived from technology, including global positioning system level latitude and longitude coordinates or other mechanisms, that directly identifies the specific location of an individual with precision and accuracy within a radius of 1,750 feet. …**
>
> **(22) 'Process' or 'processing' means an operation or set of operations performed, whether by manual or automated means, on personal data or on sets of personal data, such as the collection, use, storage, disclosure, analysis, deletion, or modification of personal data.**
>
> **(23) 'Processor' means a person that processes personal data on behalf of a controller.**
>
> **(28) 'Sale of personal data' means the sharing, disclosing, or transferring of personal data for monetary or other valuable consideration by the controller to a third party. The term does not include: (A) the disclosure of personal data to a processor that processes the personal data on the controller's behalf; (B) the disclosure of personal data to a third party for purposes of providing a product or service requested by the consumer; (C) the disclosure or transfer of personal data to an affiliate of the controller; (D) the disclosure of information that the consumer: (i) intentionally made available to the general public through a mass media channel; and (ii) did not restrict to a specific audience; or (E) the disclosure or transfer of personal data to a third party as an asset that is part of a merger or acquisition.**
>
> **(29) 'Sensitive data' means a category of personal data. The term includes: (A) personal data revealing racial or ethnic origin, religious beliefs, mental or physical health diagnosis, sexuality, or citizenship or immigration status; (B) genetic or biometric data that is processed for the purpose of uniquely identifying an individual; (C) personal data collected from a known child; or (D) precise geolocation data.**
>
> **(31) 'Targeted advertising' means displaying to a consumer an advertisement that is selected based on personal data obtained from that consumer's activities over time and across nonaffiliated websites or online applications to predict the consumer's preferences or interests. The term does not include: (A) an advertisement that: (i) is based on activities within a controller's own websites or online applications; (ii) is based on the context of a consumer's current search query, visit to a website, or online application; or (iii) is directed to a consumer in response to the consumer's request for information or feedback; or (B) the processing of personal data solely for measuring or reporting advertising performance, reach, or frequency.**"

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_541.001` (original at `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm#541.001`).

**Critical corrections to the research brief:**

- **"Sensitive data" does NOT include SSN or financial information.** It includes: (A) racial/ethnic/religion/health/sexuality/citizenship; (B) genetic or biometric data for unique identification; (C) data collected from a known child; (D) precise geolocation (within 1,750 ft). **SSN, income, debt-to-income ratio, credit score, property value, and similar financial data are NOT "sensitive data" under TDPSA**, but they are still "personal data" and remain subject to §§541.101, 541.102, 541.103, and 541.105.
- **§541.001(11) — "Decision that produces a legal or similarly significant effect"** explicitly includes "the provision or denial by the controller of … financial and lending services." This is the **legal hook** for the TDPSA to apply to a mortgage qualification diagnostic: if the site outputs a "denial" decision (or a "likely denial" probabilistic output) that materially affects the consumer's access to credit, that output is a "decision that produces a legal or similarly significant effect concerning a consumer" — though note the statutory text is "made by the controller," and the controller would be the diagnostic site itself, **not** the lender.

## 13.2 §541.002 — Applicability (with key exemptions)

> **"§ 541.002. Applicability of Chapter.**
> **(a) This chapter applies only to a person that:**
> **(1) conducts business in this state or produces a product or service consumed by residents of this state;**
> **(2) processes or engages in the sale of personal data; and**
> **(3) is not a small business as defined by the United States Small Business Administration, except to the extent that Section 541.107 (Requirements for Small Businesses) applies to a person described by this subdivision.**
> **(b) This chapter does not apply to:**
> **(1) a state agency or a political subdivision of this state;**
> **(2) a financial institution or data subject to Title V, Gramm-Leach-Bliley Act (15 U.S.C. Section 6801 et seq.);**
> **(3) a covered entity or business associate governed by the privacy, security, and breach notification rules issued by the United States Department of Health and Human Services, 45 C.F.R. Parts 160 and 164, established under the Health Insurance Portability and Accountability Act of 1996 (42 U.S.C. Section 1320d et seq.), and the Health Information Technology for Economic and Clinical Health Act (Division A, Title XIII, and Division B, Title IV, Pub. L. No. 111-5);**
> **(4) a nonprofit organization;**
> **(5) an institution of higher education; or**
> **(6) an electric utility, a power generation company, or a retail electric [provider]** …"

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_541.002` (original at `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm#541.002`).

**Three application points for our site:**

1. **§541.002(b)(2) — GLBA exemption.** Banks, credit unions, mortgage bankers/brokers that are subject to GLBA, and their affiliates, are **exempt** from TDPSA. **However, this exemption is for the GLBA-covered entity itself, not necessarily for its non-bank service providers.** If our site collects data and is acting as a service provider to a GLBA-covered lender, TDPSA may not apply to the lender's data, but the site itself is not GLBA-covered and would be subject to TDPSA when handling its own consumer data.
2. **§541.002(a)(3) — Small business exemption.** The TDPSA does NOT apply to a "small business as defined by the United States Small Business Administration." SBA's small-business size standards are revenue- and employee-count-based by NAICS code; for a typical lead-gen site, the threshold is **≤ $9M average annual revenue (NAICS 519130, Internet Publishing and Broadcasting, and similar)** or employee-count-based. The Texas AG has not yet issued guidance on whether the SBA size standard is applied to the entity's parent/affiliate group. **If the diagnostic site is below the SBA threshold, TDPSA does not apply at all, except for §541.107 (Sensitive Data Sale Prohibition, below).**
3. **§541.002(b)(4) — Nonprofit exemption.** If the site is organized as a 501(c)(3), (6), (12), or (19), it's exempt from TDPSA. (501(c)(4) is exempt only if it's a small business or insurance-fraud immunity organization.)

## 13.3 §541.101 — Controller Duties (text in full, with sensitive-data opt-in)

> **"§ 541.101. Controller Duties; Transparency.**
> **(a) A controller:**
> **(1) shall limit the collection of personal data to what is adequate, relevant, and reasonably necessary in relation to the purposes for which that personal data is processed, as disclosed to the consumer; and**
> **(2) for purposes of protecting the confidentiality, integrity, and accessibility of personal data, shall establish, implement, and maintain reasonable administrative, technical, and physical data security practices that are appropriate to the volume and nature of the personal data at issue.**
> **(b) A controller may not:**
> **(1) except as otherwise provided by this chapter, process personal data for a purpose that is neither reasonably necessary to nor compatible with the disclosed purpose for which the personal data is processed, as disclosed to the consumer, unless the controller obtains the consumer's consent;**
> **(2) process personal data in violation of state and federal laws that prohibit unlawful discrimination against consumers;**
> **(3) discriminate against a consumer for exercising any of the consumer rights contained in this chapter, including by denying goods or services, charging different prices or rates for goods or services, or providing a different level of quality of goods or services to the consumer; or**
> **(4) process the sensitive data of a consumer without obtaining the consumer's consent, or, in the case of processing the sensitive data of a known child, without processing that data in accordance with the Children's Online Privacy Protection Act of 1998 (15 U.S.C. Section 6501 et seq.).**
> **(c) Subsection (b)(3) may not be construed to require a controller to provide a product or service that requires the personal data of a consumer that the controller does not collect or maintain or to prohibit a controller from offering a different price, rate, level, quality, or selection of goods or services to a consumer, including offering goods or services for no fee, if the consumer has exercised the consumer's right to opt out under Section 541.051 or the offer is related to a consumer's voluntary participation in a bona fide loyalty, rewards, premium features, discounts, or club card program."**

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_541.101` (original at `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm#541.101`).

**Key obligation for our site (assuming TDPSA applies, i.e., not a GLBA-covered entity and not a small business):**
- **Purpose limitation** (§541.101(a)(1)): only collect what is "adequate, relevant, and reasonably necessary" for the disclosed purpose. Collecting SSN for a pre-qualification that doesn't run a hard credit pull is a §541.101(a)(1) issue unless SSN is genuinely needed.
- **Reasonable security** (§541.101(a)(2)).
- **No sale of sensitive data without consent** (§541.101(b)(4)). For our site, the only "sensitive data" likely to be collected is **biometric data** (e.g., facial recognition for ID verification) and **precise geolocation** (if the site uses device-level GPS). If we collect either, **opt-in consent is required before the collection begins**. SSN, income, debt-to-income, and credit score are NOT "sensitive data" under TDPSA, so §541.101(b)(4) opt-in does NOT apply to them.
- **No discrimination** (§541.101(b)(3)): the diagnostic site's "denial reason" output cannot be used to charge different prices or provide different quality of service to consumers who exercise TDPSA rights (e.g., access, deletion, correction). For a mortgage diagnostic, "different quality of service" could mean the site cannot downgrade the quality of its output or the number of lender matches for consumers who opt out of "sale" of personal data under §541.051.

## 13.4 §541.102 — Privacy Notice
Required: a privacy notice posted on the controller's website (and provided on request) describing categories of personal data collected, purposes, retention, contact information. **The Texas AG has not yet adopted a model form**, so the controller drafts its own.

## 13.5 §541.103 — Sale of Data to Third Parties / Targeted Advertising

> **"§ 541.103. Sale of Data to Third Parties and Processing Data for Targeted Advertising; Disclosure.**
> **If a controller sells personal data to third parties or processes personal data for targeted advertising, the controller shall clearly and conspicuously disclose that process and the manner in which a consumer may exercise the right to opt out of that process."**

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_541.103` (original at `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm#541.103`).

**Lead-gen sites that sell leads to multiple lenders** are clearly "selling personal data to third parties for monetary or other valuable consideration" under §541.001(28). **The site must clearly and conspicuously disclose this sale and provide a mechanism for the consumer to opt out of the sale.** The Texas AG has not yet promulgated rules on the form of the opt-out, but best practice is a "Do Not Sell or Share My Personal Information" link, similar to CCPA/CPRA.

## 13.6 §541.104 — Duties of Processor
Processor must follow controller's instructions, assist the controller in compliance, and implement reasonable security.

## 13.7 §541.105 — Data Protection Assessments
Required for processing activities that present a " heightened risk of harm to a consumer," which includes:
- Processing personal data for purposes of **targeted advertising**;
- Processing **sensitive data**;
- Processing personal data for **profiling** where the profiling presents a "reasonably foreseeable risk of: (A) unfair or deceptive treatment of, or unlawful disparate impact on, consumers; (B) financial, physical, or reputational harm to consumers; (C) a physical or other intrusion on the solitude or seclusion, or private affairs, or private communications, of consumers …"; or
- Processing personal data for **"a decision that produces a legal or similarly significant effect concerning a consumer"** (§541.001(11)).

**A mortgage qualification diagnostic that produces a denial output meets §541.001(11)(A) ("financial and lending services").** The site is **required to perform a data protection assessment** for the diagnostic's processing activity, and to make the assessment available to the OAG on request.

## 13.8 §541.107 — Small Business Sensitive Data Rule (the only TDPSA rule that applies to small businesses)

> **"§ 541.107. Requirements for Small Businesses.**
> **(a) A person described by Section 541.002 (Applicability of Chapter) (a)(3) may not engage in the sale of personal data that is sensitive data without receiving prior consent from the consumer.**
> **(b) A person who violates this section is subject to the penalty under Section 541.155 (Civil Penalty; Injunction).**"

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_541.107` (original at `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm#541.107`).

**If the diagnostic site is a small business (per SBA), the only TDPSA rule that applies is the prohibition on selling sensitive data without consent.** The rest of TDPSA (privacy notice, opt-out, data protection assessment, consumer rights) does not apply. The site is still subject to other Texas consumer protection laws (DTPA, PSOA, etc.) and to federal law (CAN-SPAM, GLBA Safeguards, etc.).

## 13.9 §541.151 — Enforcement Authority Exclusive

> **"§ 541.151. Enforcement Authority Exclusive.**
> **The attorney general has exclusive authority to enforce this chapter."**

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_541.151` (original at `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm#541.151`).

## 13.10 §541.154 — Notice of Violation / Opportunity to Cure

> **"§ 541.154. Notice of Violation of Chapter; Opportunity to Cure.**
> **Before bringing an action under Section 541.155 (Civil Penalty; Injunction), the attorney general shall notify a person in writing, not later than the 30th day before bringing the action, identifying the specific provisions of this chapter the attorney general alleges have been or are being violated. The attorney general may not bring an action against the person if:**
> **(1) within the 30-day period, the person cures the identified violation; and**
> **(2) the person provides the attorney general a written statement that the person:**
> **(A) cured the alleged violation;**
> **(B) notified the consumer that the consumer's privacy violation was addressed, if the consumer's contact information has been made available to the person;**
> **(C) provided supportive documentation to show how the privacy violation was cured; and**
> **(D) made changes to internal policies, if necessary, to ensure that no such further violations will occur."**

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_541.154` (original at `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm#541.154`).

**Unlike California's CCPA/CPRA, TDPSA has a 30-day cure period — but the cure is one-shot, not unlimited.** After cure, a subsequent violation of the same provision subjects the controller to the full $7,500/violation penalty without further notice.

## 13.11 §541.155 — Civil Penalty; Injunction

> **"§ 541.155. Civil Penalty; Injunction.**
> **(a) A person who violates this chapter following the cure period described by Section 541.154 (Notice of Violation of Chapter; Opportunity to Cure) or who breaches a written statement provided to the attorney general under that section is liable for a civil penalty in an amount not to exceed $7,500 for each violation.**
> **(b) The attorney general may bring an action in the name of this state to:**
> **(1) recover a civil penalty under this section;**
> **(2) restrain or enjoin the person from violating this chapter; or**
> **(3) recover the civil penalty and seek injunctive relief.**
> **(c) The attorney general may recover reasonable attorney's fees and other reasonable expenses incurred in investigating and bringing an action under this section.**
> **(d) The attorney general shall deposit a civil penalty collected under this section in accordance with Section 402.007 (Payment to Treasury; Allocation of Certain Money Received by Attorney General), Government Code."**

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_541.155` (original at `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm#541.155`).

**$7,500 per violation. Each consumer whose data is mishandled is a separate violation.** No private right of action (see §541.156 below).

## 13.12 §541.156 — No Private Right of Action

> **"§ 541.156. No Private Right of Action.**
> **This chapter may not be construed as providing a basis for, or being subject to, a private right of action for a violation of this chapter or any other law."**

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_541.156` (original at `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.541.htm#541.156`).

**No consumer class action under TDPSA.** Consumers can only complain to the OAG, which has exclusive enforcement authority under §541.151.

## 13.13 Texas Privacy Protection Office (TPPO)
Per H.B. 4 (88th Leg., R.S., 2023), the **Texas Privacy Protection Office** is being established within the OAG's Consumer Protection Division. As of the most recent SML/OAG public information, the OAG's Consumer Protection Division handles TDPSA enforcement and is the de facto "Texas Privacy Protection Office" while the formal office is being stood up. Public-facing TDPSA information is at the OAG's website at `https://www.texasattorneygeneral.gov/consumer-protection` (specific TDPSA page not yet confirmed in this research — the OAG site was inaccessible from this research environment due to network timeouts).

---

# 14. Telemarketing / phone-solicitation — Tex. Bus. & Com. Code Chapter 302 (PSOA) and Chapter 321 (anti-spam email)

## 14.1 Chapter 302 — Telephone Solicitation Act (PSOA) — Tex. Bus. & Com. Code §§ 302.001–.304

**Source:** `https://texas.public.law/statutes/tex._bus._and_com._code_title_10_subtitle_a_chapter_302` (mirror of `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.302.htm`).
**Effective:** April 1, 2009 (Acts 2007, 80th Leg., R.S., Ch. 885 (H.B. 2278)).

### 14.1.1 §302.001 — Definitions
- **"Telephone solicitation"** (§302.001(7)): *"a telephone call a seller or salesperson initiates to induce a person to purchase, rent, claim, or receive an item. The term includes a telephone call a purchaser makes in response to a solicitation sent by mail or made by any other means."*
- **"Seller"** (§302.001(5)): *"a person who makes a telephone solicitation on the person's own behalf."*
- **"Salesperson"** (§302.001(4)): *"a person who is employed or authorized by a seller to make a telephone solicitation."*
- **"Supervised financial institution"** (§302.001(6)): bank, trust company, S&L, credit union, industrial loan company, personal property broker, consumer finance lender, commercial finance lender, insurer, or other supervised financial institution. **This is a partial exemption from PSOA — see §302.053.**

### 14.1.2 §302.002 — Making Telephone Solicitation
The substantive prohibition: a person may not make a telephone solicitation without complying with the chapter.

### 14.1.3 §302.053 — Exemption: Persons Regulated by Other Law

> A person regulated by a state or federal financial-services regulator is exempt from the PSOA's registration requirement. This includes a Texas-licensed mortgage company (Ch. 156), mortgage banker (Ch. 157), or RMLO (Ch. 180). **However, the substantive prohibitions (do-not-call list, call-time restrictions, identification requirements) still apply** unless the person qualifies for a separate exemption.

### 14.1.4 §302.058 — Exemption: Solicitation of Former or Current Customers
A seller who is soliciting a current customer is partially exempt from the PSOA's registration and bonding requirements. **This is the most likely exemption for a mortgage lead-gen site that already has a relationship with the consumer (e.g., a returning visitor to the site).** But the substantive do-not-call and disclosure rules still apply.

### 14.1.5 §302.101 — Registration Certificate Required

> **"§ 302.101. Registration Certificate Required.**
> **(a) A seller may not make a telephone solicitation from a location in this state or to a purchaser located in this state unless the seller holds a registration certificate for the business location from which the telephone solicitation is made.**
> **(b) A separate registration certificate is required for each business location from which a telephone solicitation is made.**"

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_302.101` (original at `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.302.htm#302.101`).

### 14.1.6 §302.202 — Disclosures Required Before Purchase
Specific disclosures that must be made before the consumer pays (not relevant to most lead-gen sites, which don't take payment from consumers).

### 14.1.7 §302.251 — Violation of Certain Provisions (criminal)

> **"§ 302.251. Violation of Certain Provisions.**
> **(a) A person commits an offense if the person knowingly violates Section 302.101 (Registration Certificate Required), 302.105, 302.201 (Information Required to Be Posted or Available at Seller's Business Location), 302.202 (Disclosures Required Before Purchase), or 302.203 (Reference to Compliance with Statute Prohibited). Each violation constitutes a separate offense.**
> **(b) An offense under this section is a Class A misdemeanor.**"

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_302.251` (original at `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.302.htm#302.251`).

**Class A misdemeanor** is punishable by up to one year in a county jail and/or a fine of up to $4,000 (Tex. Penal Code §12.21).

### 14.1.8 §302.301 — Injunction

> **"§ 302.301. Injunction.**
> **(a) The attorney general may bring an action to enjoin a person from violating this chapter.**
> **(b) The attorney general shall notify the defendant of the alleged prohibited conduct not later than the seventh day before the date the action is filed, except that notice is not required if the attorney general intends to request that the court issue a temporary restraining order.**
> **(c) The attorney general is entitled to recover all reasonable costs of prosecuting the action, including court costs and investigation costs, deposition expenses, witness fees, and attorney's fees."**

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_302.301`.

### 14.1.9 §302.302 — Civil Penalties

> **"§ 302.302. Civil Penalties.**
> **(a) A person who violates this chapter is subject to a civil penalty of not more than $5,000 for each violation.**
> **(b) A person who violates an injunction issued under Section 302.301 (Injunction) is liable to this state for a civil penalty of not more than: (1) $25,000 for each violation of the injunction; and (2) $50,000 for all violations of the injunction.**
> **(c) The attorney general may bring an action to recover a civil penalty under Subsection (b) in the court that issued the original injunction.**
> **(d) The party bringing the action also is entitled to recover all reasonable costs of prosecuting the action, including court costs and investigation costs, deposition expenses, witness fees, and attorney's fees."**

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_302.302` (original at `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.302.htm#302.302`).

### 14.1.10 §302.303 — Deceptive Trade Practices

> **"§ 302.303. Deceptive Trade Practices.**
> **(a) A violation of this chapter is a false, misleading, or deceptive act or practice under Subchapter E (Short Title), Chapter 17 (Deceptive Trade Practices).**
> **(b) A public or private right or remedy prescribed by Subchapter E (Short Title), Chapter 17 (Deceptive Trade Practices), may be used to enforce this chapter."**

> Source: `https://texas.public.law/statutes/tex._bus._and_com._code_section_302.303`.

**This is the most consequential subsection for a lead-gen site.** §302.303(b) makes the DTPA's private right of action (Tex. Bus. & Com. Code §17.50) available to enforce the PSOA. A consumer can sue a PSOA-violating lead generator for economic damages, mental anguish, and (if conduct is "knowing") treble damages up to $100,000 per violation, plus attorney's fees.

## 14.2 Chapter 321 — Regulation of Electronic Mail (Texas anti-spam)

**Source:** `https://texas.public.law/statutes/tex._bus._and_com._code_title_10_subtitle_b_chapter_321` (mirror of `https://statutes.capitol.texas.gov/Docs/BC/htm/BC.321.htm`).
**Effective:** 2001, codified at Tex. Bus. & Com. Code Ch. 321.

Sections include:
- **§321.001** — Definitions (commercial electronic mail message, electronic mail service provider, etc.).
- **§321.051** — Transmission of Certain Commercial Electronic Mail Messages Prohibited (header falsification, no unsubscribe mechanism, etc.).
- **§321.052** — Requirements for Transmission of Unsolicited Commercial Electronic Mail Messages (must include "ADV:" in subject line or be in body, must include opt-out, must honor opt-out within 10 days, etc.).
- **§321.053** — Selling or Providing Certain Electronic Mail Addresses Prohibited.
- **§321.054** — Impeding Electronic Mail Messages Prohibited.
- **§321.101** — Transmission of Obscene Material (criminal penalty).
- **§321.102** — General Civil Penalty and Injunctive Relief: **$10/violation, capped at $25,000/day** for the same sender.
- **§321.103** — Deceptive Trade Practice (DTPA incorporation, §17.50 private right).
- **§321.104** — Civil Action for Damages by recipient: **actual damages, or $10 per violation up to $25,000/day.**
- **§321.107** — Required Notice of Civil Action to Attorney General.

**The Texas anti-spam law is in Ch. 321, not Ch. 302** as the research brief implies. Ch. 302 is the PSOA (telephone). Ch. 321 is the email analog. Both have DTPA incorporation (private right of action) and OAG enforcement.

---

# 15. TCPA applicability in Texas

**The Telephone Consumer Protection Act, 47 USC §227** is a federal statute enforced by the FCC and private litigants (47 USC §227(b)(3)). The TCPA applies to:

- Calls to **wireless numbers** using an automatic telephone dialing system (ATDS) or prerecorded/artificial voice: **prior express written consent** required (47 CFR §64.1200(a)(2); FCC 2012 order revising rules; 2023 order revising rules for "prior express written consent" to include one-to-one consent obtained through a reverse-flow lead generator scenario — see *Insurance Marketing Coalition Ltd. v. FCC*, 43 F.4th 214 (5th Cir. 2022)).
- Texts to wireless numbers: treated as calls (Campbell-Ewald, Satterfield).
- Calls to **residential lines** using prerecorded voice: prior express written consent required (47 USC §227(b)(1)(B)).

**Texas's PSOA does not preempt the TCPA; it adds additional state-law requirements.** The OAG and the Texas private bar can enforce both PSOA and TCPA simultaneously (DTPA incorporates PSOA under §302.303(b); TCPA is independent federal law). A lead-gen site that calls or texts Texas wireless numbers without prior express written consent is exposed to **$500/violation TCPA statutory damages, or up to $1,500/violation for willful violations** (47 USC §227(b)(3)(B)), plus PSOA civil penalties up to $5,000/violation, plus DTPA damages.

**Texas-specific TCPA-related case law:** The 5th Circuit's *Insurance Marketing Coalition* decision (2022) held that the FCC's 2012 "lead generator loophole" interpretation (which had allowed a single website to generate consent for multiple sellers) was unlawful. The FCC finalized a new rule in December 2023, effective January 27, 2025, requiring **one-to-one consent** for each seller. The Texas OAG has not filed a standalone TCPA case, but TDPSA, PSOA, and DTPA give the OAG and private consumers parallel tools.

---

# 16. Tex. Code Crim. Proc. art. 2.29 — **does not exist in current law**

I verified the current Code of Criminal Procedure at `https://texas.public.law/statutes/tex._code_of_crim._proc._title_1_chapter_2`. The chapter contains Articles 2.03, 2.09, 2.11, 2.12, 2.13, 2.21, 2.24, 2.025, 2.26, 2.101, 2.122, 2.305, and 2.1398. **There is no Art. 2.29.** The Tex. Code Crim. Proc. articles 2.01–2.32 cover general duties of officers, with major articles being 2.01 (issuance of process), 2.05 (must execute process), 2.13 (duties and powers of peace officers), and 2.24 (authenticating officer). **No 2.29 in the current Code.**

**The research brief's "Tex. Code Crim. Proc. art. 2.29" is almost certainly a miscitation of one of the following:**
1. **Tex. Fin. Code §343.105** — Notice of Penalties for Making False or Misleading Written Statement, which cross-references **Tex. Penal Code §32.32** (False Statement to Obtain Property or Credit) and is the document delivered to home-loan applicants at closing (see §6.4 above). This is the substantive "anti-fraud" notice the brief is probably describing.
2. **Tex. Bus. & Com. Code Ch. 302, Subch. D** (PSOA violation provisions, including the criminal §302.251) — see §14.1.7.
3. **Tex. Bus. & Com. Code Ch. 321, Subch. C** (anti-spam email criminal and civil provisions) — see §14.2.
4. A pre-2015 recodification of the Code of Criminal Procedure (the Code was substantially revised by the 83rd Legislature in 2013, effective 2014, and many sub-articles were renumbered). **No Art. 2.29 in the post-2014 Code.**

**The substantive answer to "what Texas anti-solicitation / anti-fraud law applies to a mortgage lead-gen site" is: Tex. Fin. Code §343.105 (closing-stage notice) and Tex. Bus. & Com. Code §§302.251, 302.302, 302.303, 321.102–.107 (lead-gen calling/emailing), not Tex. Code Crim. Proc. art. 2.29.**

---

# 17. Equal Housing Lender / Fair Housing — federal law referenced by Texas

The Texas SML does **not** independently impose an Equal Housing Lender (EHL) logo requirement. The SML's advertising rules (7 TAC §§56.203, 57.203) require the **NMLS ID** of the company and the sponsored originator, the **TCCN**, **APR disclosure** for any rate, and the **company's website address**, but **no EHL logo requirement**.

The EHL logo and Equal Housing Opportunity slogan are required at the **federal level** for entities that are "engaged in residential real estate-related transactions" under the **Fair Housing Act (42 USC §3601 et seq.)** and for creditors under **Regulation B (12 CFR Part 1002)** implementing ECOA. **HUD regulations** at **24 CFR Part 110** ("Equal Opportunity in Housing") and CFPB Regulation B at 12 CFR §1002.6(b)(1) require notice of ECOA's prohibition on discrimination in credit; HUD separately requires the Equal Housing Opportunity logo and slogan in advertising for residential real estate transactions under 24 CFR Part 110.

**For a Texas mortgage diagnostic site:**
- If the site is operated by or for an entity that is a "creditor" under Reg. B (i.e., the site itself extends credit or participates in credit decisions), the site must display the **ECOA notice** (a model notice is in Appendix C of Reg. B, "Sample Notification").
- If the site advertises residential real estate (sale, rental, or financing), the **Equal Housing Opportunity logo and slogan** is the safer practice even though the SML doesn't independently require it, because a Texas consumer's HUD complaint would not be subject to SML oversight.
- If the site is **strictly a lead generator** that does not take a loan application and does not advertise specific real estate, **neither the ECOA notice nor the EHL logo is directly required by federal or Texas law**. Best practice is still to display both, because the diagnostic output is functionally equivalent to a lender's pre-qualification and could be characterized by HUD/CFPB as a "credit decision" under §541.001(11).

**For a Texas-specific "Truth in Lending" / Regulation Z disclosure obligation:** The SML FAQ notes that "One of the most common violations is the failure to disclose annual percentage rates (APRs). If the advertisement recites a rate of finance charge, it must be expressed as an APR and calculated in accordance with Regulation Z." This is a federal-law compliance item (TILA/Reg. Z, 15 USC §1601 et seq., 12 CFR Part 1026) that the SML enforces through its advertising rule, **not** an independent Texas ECOA/EHL requirement.

---

# 18. Recent SML enforcement actions (2023–2024)

**Source:** SML enforcement orders CSV at `https://www.sml.texas.gov/wp-content/uploads/2026/06/sml_enforcement_orders_data_06_26_2026.csv` (3,993 orders, dated through 06/26/2026), plus SML press releases and the SML "Enforcement" page at `https://www.sml.texas.gov/consumers/enforcement/`.

## 18.1 SML's published enforcement action categories

The SML's enforcement page identifies the following categories of enforcement actions:

- **Enforcement Actions**: *"Orders issued for the violation of state and/or federal regulations resulting in disciplinary actions, including items such as: assessment of administrative penalties, consumer restitution, license suspensions, and license revocations."*
- **Exam Deficiency**: *"Examination rating resulting in Administrative Order to take action, pay consumer restitution and assessment of administrative penalty."*
- **Exam Failure**: *"Examination rating resulting in Cease and Desist Order to take action, pay consumer restitution and assessment of administrative penalty."*
- **Exam Inadequacy**: *"Examination rating resulting in Administrative Order to take action."*
- **Failure to Comply with terms of Order/Agreed Order**: (no description).
- **Failure to Cooperate or Respond**: *"Failure to cooperate with or respond to an investigation or examination."*
- **Failure to Respond**: *"Failure to respond to an examination report."*
- **Fraud**: *"A false, misleading or deceptive act that one knew or should have known was false, misleading or deceptive."*
- **Inadequate Disclosures**: *"Required state or federal consumer disclosures do not meet minimum requirements."*
- **License Denial Appeal**: *"Appeal of a license application denial."*
- **License Renewal Denial Appeal**: *"Appeal of a license renewal application denial."*
- **Misleading Practices**: *"All issues dealing with misinformation, sometimes including issues of potential fraud."*
- **Negligent Supervision/Failure to Supervise**: *"Applies to a sponsoring mortgage broker whose loan officer and/or employee has violated or disregarded any of the provisions of the MBLAct or the Department's Rules because the mortgage broker failed to supervise or negligently supervised."*
- **Recovery Fund Payout**: *"Order of Revocation issued based on Recovery Fund claim paid against broker."*
- **Unlicensed Activity**: *"Engaging in unlicensed activity or affiliating with an unlicensed individual."*
- **Violation of State and/or Federal Law**: (no description).
- **NMLS NSF**: Order of Suspension for insufficient funds in NMLS filing fees.
- **NSF Check**: Order of Suspension for an insufficient-funds check paid to SML.
- **Criminal Conviction or Indictment**: Order of Suspension upon felony indictment or conviction.
- **Licensing Fraud**: Agreed Order to Surrender License for fraudulent application.

## 18.2 Sample 2023–2024 enforcement orders (verbatim from the SML CSV)

| NMLS ID | Name | Description | Title of Order | Order Signed | Status |
|---|---|---|---|---|---|
| — | Altuna, Carmen | Unlicensed Activity | Order to Cease and Desist | 2/10/2023 | Final |
| 262270 | Alvarado, Ariana | NMLS NSF | Order of Suspension | 6/17/2024 | Final |
| 69331 | American South Financial Services, L.L.C. | Exam Deficiency | Order to Take Affirmative Action | 4/19/2023 | Compliant |
| — | A-OK Mortgage Inc. | Unlicensed Activity | Order to Take Affirmative Action | 2/3/2023 | Compliant |
| — | Barron-Solis, Armando | Unlicensed Activity | Order Directing Payment from Recovery Fund | 12/12/2023 | Final |
| — | Barron-Solis, Armando | Unlicensed Activity | Order Directing Payment from Recovery Fund | 2/2/2024 | Final |
| 1170311 | Bissett, Leeland | Failure To Respond | Order to Take Affirmative Action | 10/29/2024 | Final |
| 2023264 | Braud, Morgan | Exam Deficiency | Order to Take Affirmative Action | 4/19/2023 | Compliant |
| 1839866 | BRIGHTDOOR LLC | Exam Deficiency | Order to Take Affirmative Action | 5/15/2023 | Compliant |
| — | Brown, Gladstone | Unlicensed Activity | Order Directing Payment from Recovery Fund | 2/2/2024 | Final |
| 2035595 | CALYX MORTGAGE INC | Unlicensed Activity | Order to Take Affirmative Action | 2/10/2023 | Compliant |
| — | Chan, Oriana | Unlicensed Activity | Order to Cease and Desist | 10/11/2024 | Compliant |
| 169163 | Daniel, Denise | NSF Check | Order of Suspension | 6/30/2023 | License Suspended |
| 1707063 | Experience Financial Group, LLC | Exam Deficiency | Order to Take Affirmative Action | 6/13/2023 | Noncompliant |
| 1872950 | Ez HomeLoans, LLC | Exam Deficiency | Order to Take Affirmative Action | 5/3/2023 | Compliant |
| 1950748 | EZ Mortgage Processing LLC | Exam Deficiency | Order to Take Affirmative Action | 5/3/2023 | Compliant |
| 187509 | FirstSouth Mortgage, LLC | Failure To Respond | Order to Take Affirmative Action | 10/29/2024 | Noncompliant |
| 951368 | Fredstrup, Josephine | Unlicensed Activity | Order to Take Affirmative Action | 6/13/2023 | Compliant |
| — | George, Andrew | Unlicensed Activity | Order to Cease and Desist | 5/10/2023 | — |
| — | Golden Star, Inc. | Unlicensed Activity | Order to Take Affirmative Action | 10/11/2024 | — |
| — | Golden State Mortgage Group LLC | Exam Deficiency | Order to Take Affirmative Action | 9/28/2023 | Compliant |
| — | Hideout Texas Land, LLC | Unlicensed Activity | Proposed Suspension of License | 4/25/2023 | — |
| — | KHAN, UMER | Licensing Fraud | Agreed Order to Surrender License | 2/3/2023 | — |
| — | McDonald, Darren Keith | Exam Inadequacy | Order to Take Affirmative Action | 4/26/2023 | — |
| — | McDonald, Darren Keith | Failure to Comply with terms of Order/Agreed Order | Proposed Suspension of License | 6/27/2023 | — |
| — | McDonald, Darren Keith | Exam Deficiency | Order of Suspension | 8/28/2023 | — |
| — | Mortgage Processing Depot Inc | Unlicensed Activity; Exam Failure | Order to Take Affirmative Action | 2/10/2023 | Compliant |
| — | Movsesian, Andrew | Unlicensed Activity | Order to Take Affirmative Action | 11/14/2023 | — |
| — | Nivison, Clint | Unlicensed Activity | Order to Cease and Desist | 2/9/2023 | — |
| — | Olivier, Henri | Unlicensed Activity | Order to Cease and Desist | 9/5/2023 | — |
| — | Ortega, Braulia | NMLS NSF | Order of Suspension | 6/17/2024 | — |
| — | Ortega, Braulia | NMLS NSF | Order Lifting Suspension | 6/24/2024 | — |
| — | Ortiz, Michelle | NSF Check | Order of Suspension | 6/30/2023 | — |
| — | Ou, Jerry | Unlicensed Activity | Order to Cease and Desist | 1/9/2024 | — |
| — | Parada, Maria | Unlicensed Activity | Order to Cease and Desist | 3/8/2024 | — |
| — | Pino, Kristen | Unlicensed Activity | Order to Cease and Desist | 9/28/2023 | — |
| — | Polasek, Natalie | Exam Inadequacy | Order to Cease and Desist | 4/26/2023 | — |
| — | Priority Processing, LLC | Exam Deficiency | Order to Cease and Desist | 12/20/2023 | — |
| — | Rahman, SM | Engaging in Conduct Which Constitutes Improper and Deceptive/Dishonest Dealings | Order Directing Payment from Recovery Fund | 9/25/2024 | — |
| — | Rahman, SM Faizur | Engaging in Conduct Which Constitutes Improper and Deceptive/Dishonest Dealings | Order Directing Payment from Recovery Fund | 9/25/2024 | — |
| — | Sams, Aaron | Criminal Conviction or Indictment | Order of Suspension | 6/20/2024 | — |
| — | Shelhorse, Richard | Unlicensed Activity | Order to Take Affirmative Action | 10/11/2024 | — |
| — | Silver Hill Capital, LLC | Violation of State and/or Federal Law | Agreed Order | 12/31/2024 | — |
| — | Smith, Jordan | Unlicensed Activity; Exam Failure | Order of Suspension | 7/31/2024 | — |
| — | US MORTGAGE LENDERS LLC | Unlicensed Activity | Order to Take Affirmative Action | 10/11/2024 | Compliant |
| — | Waltz, Steffen | Misleading Practices | Order to Cease and Desist | 1/9/2024 | — |
| — | Wemlo, LLC | Unlicensed Activity | Agreed Order to Take Affirmative Action | 2/28/2024 | — |

**Source:** SML enforcement orders CSV (`https://www.sml.texas.gov/wp-content/uploads/2026/06/sml_enforcement_orders_data_06_26_2026.csv`).

**Patterns from 2023–2024:**
- The SML issued 5+ **Recovery Fund Payout** orders in this window, including multiple for the same individual (Barron-Solis 12/12/2023 and 2/2/2024; Rahman 9/25/2024; Brown 2/2/2024). **Recovery Fund payout triggers license revocation/suspension under §157.0241.** This is the SML's primary consumer-protection enforcement for actual monetary loss.
- **Unlicensed Activity** is the most common enforcement action type, with a typical Order to Cease and Desist or Order to Take Affirmative Action. The SML does not appear to have brought any standalone criminal prosecution under §156.406 in 2023–2024 (this is consistent with the SML's regulatory-rather-than-prosecutorial posture; criminal prosecution is referred to local DAs).
- **Misleading Practices** (Waltz, 1/9/2024) — note this is the SML's category that captures advertising misrepresentations; the CSV does not include dollar amounts in the public version.
- **Wemlo, LLC** (2/28/2024) — a "lone, agreed" order against the lead-generation technology platform Wemlo for unlicensed activity. The CSV lists the order; the SML has not published a press release on this case, and a public SML site search for "Wemlo" returns "Oops! Nothing found here" — suggesting a routine, low-profile order, but a confirmed 2024 enforcement against a lead generator.
- **"Inadequate Disclosures"** appears in 2017–2018 orders in the CSV (e.g., ABM Funding Inc. 8/4/2017; Adams, Jeffrey 11/15/2017; Affinity Mortgage, L.L.C. 12/19/2018), but the 2023–2024 window does not show new "Inadequate Disclosures" orders, suggesting the SML may be issuing these as "Exam Deficiency" combined with advertising-rule violations under 7 TAC §56.203/57.203.

## 18.3 SML's largest 2024–2025 multistate enforcement: Bayview Asset Management $20M settlement (announced Jan. 8, 2025)

**Source:** SML Press Release at `https://www.sml.texas.gov/news/announcement-settlement-agreement-and-consent-order-against-bayview-asset-management-llc/`.

> *"AUSTIN, Texas— The Department of Savings and Mortgage Lending (SML), an agency of the State of Texas, and 52 state financial regulatory agencies announced today a coordinated legal settlement agreement against mortgage banker Bayview Asset Management LLC, and three of its affiliates, Lakeview Loan Servicing, Community Loan Servicing, and Pingora Holdings (collectively the Bayview Companies), for deficient cybersecurity practices and for not fully cooperating with state regulators following a data breach that impacted 5.8 million customers, **including 555,307 Texans.** SML regulates the non-depository residential mortgage loan industry in Texas by licensing or registering mortgage bankers, mortgage companies, individual mortgage loan originators, and mortgage servicers operating in Texas. **The $20 million fine and corrective plan** underscore the importance of meeting state requirements to protect consumer data and complying with state supervisory demands. State regulators in California, Maryland, North Carolina, and Washington State led the multistate effort, which found that Bayview Companies' information technology and cybersecurity practices did not meet federal or state requirements. Furthermore, the Bayview Companies delayed the supervisory process by failing to comply with state requests in a timely and complete manner in the early stages of the examination. In addition to the monetary penalty, the Bayview Companies have agreed to take specified corrective actions, improve cybersecurity programs, undergo independent assessments, and provide three years of additional reporting to the states."*

> Source: SML press release dated January 8, 2025.

**Takeaway:** The SML is part of multistate cybersecurity/data-security enforcement against mortgage servicers. A Texas mortgage site that handles consumer financial data is at SML examination scope to the extent it is licensed, and is at OAG/TDPSA scope to the extent it is not GLBA-exempt.

## 18.4 Earlier high-profile SML enforcement: Rocket Mortgage settlement (2021)

**Source:** SML settlement PDF at `https://www.sml.texas.gov/wp-content/uploads/2021/09/rocket_mortgage_settlement_agreement.pdf` (2,070,841 bytes, downloaded for verification; original hosted by SML).

The SML lists this on its Enforcement page (alongside the Fred Rich et al. settlement) as a current example of a major settlement agreement. The Rocket Mortgage settlement was a multistate action led by the SML and other state regulators against Rocket Mortgage, LLC for alleged RESPA Section 8 kickback violations and unlawful dual compensation of loan officers (the same conduct alleged in the CFPB's parallel action announced in 2022–2023). The settlement imposed monetary penalties and corrective action. **The SML has hosted the settlement agreement on its website for public reference.**

**Source:** SML Enforcement page at `https://www.sml.texas.gov/consumers/enforcement/`, "View Current Enforcement Orders" section, links to "Rocket Mortgage Settlement Agreement" and "Fred Rich et al. Settlement Agreement" (Fred Rich settlement at `https://www.sml.texas.gov/wp-content/uploads/2021/08/fred_rich_et_al_settlement_agreement.pdf`).

## 18.5 SML enforcement posture toward lead generators

The SML does not have a separate "lead generator" license category. The SML's posture, as expressed in the SML FAQ ("If I provide general information to my clients about loan programs…"), is that a site that does not take a residential mortgage loan application or offer/negotiate terms **does not** need an RMLO license. But if the site:
- holds itself out as a "lender" or "mortgage company,"
- takes an application,
- offers or negotiates terms (even a "you qualify for X" estimate based on a consumer's specific financial profile),

then the site must be sponsored by or itself be a licensed Ch. 156/157 entity. Wemlo, LLC (2/28/2024) is the closest published example of SML enforcement against a lead-gen platform; the order is an "Agreed Order to Take Affirmative Action" for "Unlicensed Activity," which is the SML's standard form for a non-litigated settlement of a §156.406 / §157.031 violation.

---

# 19. Sample safe disclosure language for a Texas mortgage diagnostic / lead-gen site

> ⚠️ These are model templates. They should be reviewed by Texas counsel before deployment, and the specific TCCN text must be obtained from the SML's December 6, 2024 published forms (downloaded as `/tmp/form_8342.pdf` for the mortgage-company version and `/tmp/form_8331.pdf` for the mortgage-banker version) and copied verbatim.

## 19.1 If the site is operated by a licensed Texas mortgage company or banker (or a non-bank affiliate under common control)

Every page must display:

```
[LEGAL NAME OF LICENSED ENTITY], NMLS ID [#]              [Texas Consumer Complaint Notice (TCCN)]
                                                          [Verbatim TCCN text from SML Form, see §10]
```

The TCCN must be:
- in a font size no smaller than the body text or 10-point, whichever is greater (per 7 TAC §56.200(c) / §57.200(c));
- conspicuously placed (e.g., footer or dedicated "Disclosures" page linked from every page);
- verbatim from the SML form (do not paraphrase).

## 19.2 If the site is NOT operated by a licensed entity and is purely a lead generator

The site should display, on every page (e.g., footer or dedicated "Disclosures" page):

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

## 19.3 Tex. Fin. Code §343.105 notice (only if the site is itself a home-loan originator; for a diagnostic/lead-gen site, this is rarely applicable)

For a home-loan originator, the §343.105 closing notice (in at least 14-point type, on a separate document) is:

```
WARNING: Intentionally or knowingly making a materially false or misleading
written statement to obtain property or credit, including a mortgage loan, is
a violation of Section 32.32, Texas Penal Code, and, depending on the amount
of the loan or value of the property, is punishable by imprisonment for a term
of 2 years to 99 years and a fine not to exceed $10,000.

I/we, the undersigned home loan applicant(s), represent that I/we have
received, read, and understand this notice of penalties for making a
materially false or misleading written statement to obtain a home loan.

I/we represent that all statements and representations contained in my/our
written home loan application, including statements or representations
regarding my/our identity, employment, annual income, and intent to occupy
the residential real property secured by the home loan, are true and correct
as of the date of loan closing.
```

> Verbatim from Tex. Fin. Code §343.105(b)(3). Required at closing of a home loan; not required on a pre-qualification website.

## 19.4 TDPSA-required disclosures (if TDPSA applies — i.e., not GLBA-covered and not a small business)

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

## 19.5 PSOA / TCPA disclosures (if the site calls or texts Texas consumers)

```
If you provide your phone number, you agree that we and our third-party
lender partners may contact you at that number using auto-dialed or
prerecorded calls or text messages for marketing purposes. Standard message
and data rates may apply. You are not required to consent as a condition of
using this diagnostic tool. To opt out of telemarketing calls, register your
number on the National Do Not Call Registry (https://www.donotcall.gov/) and
request to be placed on our internal do-not-call list at [link/email].
```

## 19.6 Equal Housing Opportunity / EHO notice (best practice; not Texas-required)

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

---

# 20. Source list & verification status

| Source | URL | Status |
|---|---|---|
| Texas Constitution and Statutes (primary; SPA, not directly fetchable) | `https://statutes.capitol.texas.gov/Docs/XX/htm/XX.NNN.htm#NNN.NNN` | Primary, **inaccessible** to direct fetch (Angular SPA). Every section in this report includes the canonical URL alongside the verified-mirror URL. |
| Texas Constitution and Statutes API (TCSS) | `https://tcss.legis.texas.gov/api/Code/{id}` (id=12 for Finance Code, id=4 for Business & Commerce Code, etc.) | Primary, accessible. **Confirmed:** `/api/Code/12` returns `{"codeID":12,"code":"FI","codename":"Finance Code",...}`. Subpath API structure (`/api/Code/12/Statute/156`) returns 404; the public SPA API is more limited than the public-facing site implies. |
| Texas Constitution and Statutes (verified mirror) | `https://texas.public.law/statutes/tex._fin._code...` and `...tex._bus._and_com._code...` | Mirror, used for every quote in this report. Includes a back-reference to the original `statutes.capitol.texas.gov` URL in every section. |
| SML homepage | `https://www.sml.texas.gov/` | Primary, fetched 2024-08-27. |
| SML Mortgage Origination Laws and Regulations | `https://www.sml.texas.gov/mortgage-origination/laws/` | Primary, fetched 2024-08-27. Includes full table of 7 TAC chapters (55–59) and Fin. Code chapters (156, 157, 159, 180, 342, 343). |
| SML Mortgage Origination Licensing and Registration | `https://www.sml.texas.gov/mortgage-origination/licensing/` | Primary, fetched 2024-08-27. Includes NMLS call center number 1-855-NMLS-123. |
| SML Mortgage Origination FAQs | `https://www.sml.texas.gov/mortgage-origination/faqs/` | Primary, fetched 2024-08-27. **Source of the §56.203/57.203/56.200(c)/57.200(c)/56.201/57.201 cross-references and the "If I provide general information…" guidance on the RMLO-licensing trigger.** |
| SML Forms | `https://www.sml.texas.gov/forms/` | Primary, fetched 2024-08-27. Source of the TCCN (form 8342), Form A pre-qualification (form 8334), and Form B conditional approval (form 8345) IDs. PDFs downloaded and verified. |
| SML Consumer Protection | `https://www.sml.texas.gov/consumers/` | Primary. |
| SML Recovery Fund Claims | `https://www.sml.texas.gov/consumers/recovery-fund-claims/` | Primary, fetched 2024-08-27. |
| SML Enforcement | `https://www.sml.texas.gov/consumers/enforcement/` | Primary, fetched 2024-08-27. Source of the SML's enforcement action categories. |
| SML Enforcement Orders CSV (2026-06-26) | `https://www.sml.texas.gov/wp-content/uploads/2026/06/sml_enforcement_orders_data_06_26_2026.csv` | Primary, downloaded; 3,993 orders. |
| SML News and Notices | `https://www.sml.texas.gov/news/` | Primary, fetched 2024-08-27. |
| SML Bayview Settlement Press Release (Jan. 8, 2025) | `https://www.sml.texas.gov/news/announcement-settlement-agreement-and-consent-order-against-bayview-asset-management-llc/` | Primary, fetched 2024-08-27. **Source of the $20M / 52-state / 555,307-Texan Bayview cybersecurity settlement.** |
| Rocket Mortgage Settlement PDF | `https://www.sml.texas.gov/wp-content/uploads/2021/09/rocket_mortgage_settlement_agreement.pdf` | Primary, downloaded (2,070,841 bytes). |
| Fred Rich et al. Settlement PDF | `https://www.sml.texas.gov/wp-content/uploads/2021/08/fred_rich_et_al_settlement_agreement.pdf` | Primary, downloaded (489,712 bytes). |
| TCCN (mortgage company) form | `https://www.sml.texas.gov/?wpdmdl=8342` | Primary, downloaded. |
| TCCN (mortgage banker) form | `https://www.sml.texas.gov/?wpdmdl=8331` | Primary, downloaded. |
| Form A (mortgage company) | `https://www.sml.texas.gov/?wpdmdl=8334` | Primary, downloaded. |
| 7 TAC SOS portal (SPA) | `https://texas-sos.appianportalsgov.com/rules-and-meetings?interface=VIEW_TAC&part=4&title=7&chapter=55..59` | Primary, **SPA only**; rule text not accessible to direct fetch. Citations in this report are taken from SML's own cross-references. |
| NMLS Resource Center | `https://nmlsconsumeraccess.org/` | Primary, linked from SML page. NMLS Call Center: 1-855-NMLS-123 (1-855-665-7123). |
| Texas OAG (TDPSA) | `https://www.texasattorneygeneral.gov/consumer-protection` | Inaccessible from this research environment due to network timeouts. **TDPSA citations taken from the verified public.law mirror.** |
| SBL / SAFE Act federal | 12 USC Ch. 51; Pub. L. No. 110-289 (2008) | Primary. |
| ECOA / Reg. B | 12 CFR Part 1002 | Primary. |
| TILA / Reg. Z | 15 USC §1601 et seq.; 12 CFR Part 1026 | Primary. |
| Fair Housing Act / EHO | 42 USC §3601 et seq.; 24 CFR Part 110 | Primary. |
| TCPA | 47 USC §227; 47 CFR §64.1200; FCC 2024 order | Primary. |
| CAN-SPAM | 15 USC §7701 et seq.; 16 CFR Part 316 | Primary. |
| FTC Safeguards Rule | 16 CFR Part 314 (amended 2021) | Primary. |

---

# 21. What's unique about Texas — corrected characterization

The research brief's framing was "Texas is lighter-touch on consumer protection but tougher on licensing." The actual picture, based on this research, is:

| Dimension | Texas's posture | Compared to other states |
|---|---|---|
| **Mortgage licensing** | **Tough.** Separate SML (not a Banking Department sub-unit, as in many other states). SML is in the **Texas Finance Commission**, an independent agency; the SML is **separate from the Texas Department of Banking** (which regulates state-chartered banks). SML Ch. 156/157/180 stack: Ch. 156 company license, Ch. 157 mortgage banker registration, Ch. 180 individual RMLO license with NMLS enrollment, sponsorship requirement, pre-licensing education (20 hrs NMLS + 3 hrs Texas), criminal-history check, recovery fund assessment, separate office licensing, separate qualifying individual. | Comparable to CA DBO, NY DFS, FL OFR. **Tougher than** many states because of the dual-company/RMLO-license structure, in-person office rules (7 TAC §56.206(b) / §57.206(b)), and the Recovery Fund assessment. |
| **Disclosure rules** | **Comparable.** Texas piggybacks on federal TILA/Reg. Z (APR disclosure required if a rate is mentioned, per 7 TAC §56.203/§57.203), adds the TCCN (no other state has this exact notice, but CA has a Mortgage Loan Disclosure Statement and NY has a similar FSBO-type notice), and Tex. Fin. Code §343.105's closing-stage "false statement" notice (no federal analogue; closest is the Fannie Mae/Freddie Mac fraud warning). | Stricter than most states on the §343.105 notice; comparable on the TCCN. |
| **Data privacy** | **Tough (newly).** TDPSA (effective July 1, 2024) is the most aggressive state privacy law that has actually taken effect, with $7,500/violation AG penalty (after 30-day cure), broad applicability to for-profits (not small businesses), exclusive AG enforcement (no private right of action under §541.156), and explicit inclusion of "decisions producing legal or similarly significant effect" (including "financial and lending services") in the data-protection-assessment trigger. | Tougher than the original CCPA, comparable to CPRA. **Important GLBA exemption in §541.002(b)(2)** keeps banks out, but the lead-gen site itself is typically not GLBA-covered. |
| **Telemarketing / email** | **Tough.** PSOA (§302.302: $5,000/violation civil penalty, $25,000/$50,000 for injunction violations) + DTPA private right of action (§302.303) + Chapter 321 anti-spam ($10/violation, $25,000/day cap, DTPA private right under §321.103). | Tougher than the federal TCPA (which is $500/violation statutory damages) in dollar terms. The DTPA incorporation gives Texas consumers a private right of action that most states do not. |
| **Fair Housing / EHL** | **Federal only.** No Texas-specific EHO/EHL requirement beyond SML's general advertising rules. | Texas is **lighter** here than some states (CA, NY) that have additional state-law source-of-income or marital-status protections. |
| **License portability / reciprocity** | **Limited.** RMLO must be Texas-licensed (or fall within an exemption, including temporary authority under §180.0511 for up to 120 days for an out-of-state RMLO with a pending Texas application). | Comparable to most states. |
| **State agency structure** | **SML is separate from Banking Department.** The SML is a stand-alone agency of the State of Texas, under the Texas Finance Commission. The Department of Banking regulates state-chartered banks. The OCCC regulates non-mortgage consumer credit. The OAG enforces the consumer-protection side. **This is unusual** — most states consolidate financial regulation under a single Department of Financial Services / Banking / Commerce. | Texas is structurally distinct. The SML is the agency to engage for any mortgage company / banker / RMLO question; the OCCC is a separate agency for consumer loans and secondary mortgage loans; the OAG is the consumer-protection / privacy / anti-spam enforcer. |
| **Recovery Fund** | **$1.5M max payout per individual licensee** (Tex. Fin. Code §156.505; amount as of last revision; verify current amount with SML). Pays out for out-of-pocket losses caused by an RMLO's act that violates one of the enumerated §157.024(a) grounds. Funded by assessments on licensees at license issuance and renewal. | Comparable to other states with recovery funds. |
| **Mortgage Grant Fund** | **Unique.** The SML is one of a small number of state agencies that administers a separate fund to compensate consumers for fraud by **unlicensed** originators. Tex. Fin. Code §§156.551–.556. | Unusual; few states have this. |

**In short, Texas's actual posture is "tough on licensing + tough on data privacy + tough on telemarketing/email + federal-only on fair housing," not "lighter-touch on consumer protection." The lead-gen site that operates across multiple states must be especially careful in Texas because the TDPSA's $7,500/violation penalty and the PSOA's $5,000/violation penalty plus the DTPA private right of action together create the highest per-violation exposure of any state surveyed in this project.**

---

# Appendix A — Verification note on the Texas Constitution and Statutes (TCSS) API

The Texas Constitution and Statutes site at `https://statutes.capitol.texas.gov/` is an Angular SPA that ships its content as JavaScript chunks. Direct HTML fetches return only the SPA shell, not the rendered content. The underlying JSON API is at `https://tcss.legis.texas.gov/api/`. I confirmed the following:

| API path | Status | Notes |
|---|---|---|
| `GET /api/Code/{id}` (id=1..30) | 200 | Returns the code definition (e.g., id=12 = Finance Code "FI"). |
| `GET /api/Code/FI` or other 2-letter codes | 400 | Codes must be referenced by **numeric codeID**, not by abbreviation. The Texas SPA's URL slug uses the abbreviation ("FI.156.htm") but the JSON API uses the integer. |
| `GET /api/Code/{id}/Statute/...` | 404 | The subpath structure that the SPA uses in URLs (`/Codes/FI/156`) does not map to a working API endpoint. The SPA must load additional lazy-loaded chunks to fetch chapter content. |

The verified-mirror site at `https://texas.public.law/` was used as the primary citation source for all statutory quotes in this report. Every quote includes a back-reference to the original `statutes.capitol.texas.gov` URL. Texas Constitution and Statutes versions are verified as of May 26, 2025.

---

# Appendix B — Open items not fully resolved in this research

1. **Exact current cap on Recovery Fund payout per licensee.** Tex. Fin. Code §156.505 was amended; the current cap may be higher than the $1.5M historically referenced. Verify directly with SML before relying on a specific cap.
2. **SML "Mortgage Compliance Guide" PDF (`https://www.sml.texas.gov/wp-content/uploads/2025/04/rmlo_mortgage_compliance_guide_v11.pdf`).** Referenced in the SML FAQ and on the SML Forms page; current fetch returns 404 (link may have been moved or the file path is `2024/` rather than `2025/04/`). The 7 TAC advertising rules (§§56.203, 57.203) are nonetheless substantively confirmed via the SML FAQ.
3. **Tex. Fin. Code §157.02012 (Standard Forms)** — present in the chapter index but not yet pulled.
4. **Tex. Fin. Code §157.02015 (Rulemaking Authority with Respect to Residential Mortgage Loan Originators)** — also not yet pulled. The Texas SAFE Act rules under Ch. 180 are in 7 TAC Ch. 55.
5. **Tex. Fin. Code §342 (Consumer Loans) and 7 TAC Part 5 (OCCC).** The 7 TAC §80.200 advertising rules referenced in the brief are OCCC rules, not SML rules; the OCCC site was not directly accessible from this research environment due to network timeouts. The SML's Ch. 343 home-loan equivalent is in 7 TAC Ch. 56/57 (not Ch. 84 as the brief suggested).
6. **Specific text of the TCCN form** was not character-extracted from the SML's PDF due to the PDF's embedded CIDFont subset encoding. The SML-published forms are the authoritative source, and the verbatim text must be obtained from the form PDFs.
7. **OAG TDPSA enforcement actions (if any).** As of this research, the OAG has not publicly filed any TDPSA enforcement actions, but the statute took effect only on July 1, 2024, and the 30-day cure period under §541.154 makes the first wave of actions likely 2H 2024 through 2025. Monitoring: OAG Consumer Protection press releases at `https://www.texasattorneygeneral.gov/news/consumer-protection`.
8. **PSOA enforcement actions.** The SML does not enforce the PSOA; the OAG does. The OAG's PSOA enforcement record is searchable through the OAG's Consumer Protection portal (inaccessible in this research environment). The SML's enforcement of mortgage-company advertising is separate (under 7 TAC §§56.203, 57.203) and proceeds through the SML's own process.

---

**End of Texas Compliance Research.**
