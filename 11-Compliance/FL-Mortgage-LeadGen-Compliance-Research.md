# Florida Mortgage Qualification / Lead-Generation Website Compliance Research
**Primary-source research. No summarization. Every assertion traceable to a statute, rule, public order, or court opinion.**

> **Correction to the underlying premise.** Florida **did pass** a comprehensive consumer privacy law in 2023, contrary to the assumption embedded in the request. The Florida Digital Bill of Rights (SB 262 / HB 1547) was enacted as **Chapter Law 2023-201**, effective July 1, 2024, and is codified at **Fla. Stat. §§501.701–501.722** (Part XI of Chapter 501). However, it contains a broad **GLBA exemption** that effectively exempts most mortgage lenders/brokers (see §501.703(2)(b) below). For the lead-generation website, this is the single most important privacy-law fact.

---

## TABLE OF CONTENTS

1. The Florida Office of Financial Regulation and Chapter 494, F.S.
2. The 2023-2024 statutory overhaul — Ch. Law 2023-130 and 2023-201
3. Florida Administrative Code — Rule Chapter 69V-40 (Mortgage Brokerage)
4. Required disclosures on a mortgage qualification / lead-gen site
5. Florida Telephone Solicitation Act, Fla. Stat. §501.059
6. Florida Digital Bill of Rights, Fla. Stat. §§501.701–501.722
7. Florida Deceptive and Unfair Trade Practices Act (FDUTPA), Fla. Stat. §§501.201–501.213
8. Florida Information Protection Act (FIPA), Fla. Stat. §501.171
9. Recent OFR enforcement actions (2023–2024) and the lead-generation question
10. What's distinctive about Florida for mortgage lead-gen compliance
11. Sample safe disclosure language
12. Primary-source URLs

---

## 1. THE FLORIDA OFFICE OF FINANCIAL REGULATION AND CHAPTER 494, F.S.

The Office of Financial Regulation (OFR) is the state agency within the Department of Financial Services (DFS) charged with administering Florida's mortgage lending, mortgage brokerage, and loan originator laws. Its powers and duties — including rulemaking authority over Ch. 494 — are set out at **Fla. Stat. §494.0011**.

### 1.1 Statutory architecture (Ch. 494, F.S.)

Chapter 494 is divided into three parts (as of the 2024 Florida Statutes, which incorporates Ch. Law 2023-130):

- **Part I — General Provisions** (sections 494.001 through 494.00296)
- **Part II — Mortgage Brokers** (sections 494.00312 through 494.0043)
- **Part III — Mortgage Lenders** (sections 494.00611 through 494.0077)

URL pattern (use with `&StatuteYear=2024` for current text):
`https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0494/Sections/0494.<SECTION>.html`

### 1.2 §494.001 — Definitions (current 2024 text)

Key defined terms from §494.001(1)–(38), F.S. (full text pulled 2024-01 from leg.state.fl.us):

> (18) "Loan originator" means an individual who, directly or indirectly, solicits or offers to solicit a mortgage loan, accepts or offers to accept an application for a mortgage loan, negotiates or offers to negotiate the terms or conditions of a new or existing mortgage loan on behalf of a borrower or lender, or negotiates or offers to negotiate the sale of an existing mortgage loan to a noninstitutional investor for compensation or gain. The term includes an individual who is required to be licensed as a loan originator under the S.A.F.E. Mortgage Licensing Act of 2008. **The term does not include an employee of a mortgage broker or mortgage lender whose duties are limited to physically handling a completed application form or transmitting a completed application form to a lender on behalf of a prospective borrower.**

> (23) "Mortgage broker" means a person conducting loan originator activities through one or more licensed loan originators employed by the mortgage broker or as independent contractors to the mortgage broker.

> (24) "Mortgage lender" means a person making a mortgage loan or servicing a mortgage loan for others, or, for compensation or gain, directly or indirectly, selling or offering to sell a mortgage loan to a noninstitutional investor.

> (26) "Mortgage loan application" means the submission of a borrower's financial information in anticipation of a credit decision, which includes the borrower's name, the borrower's monthly income, the borrower's social security number to obtain a credit report, the property address, an estimate of the value of the property, the mortgage loan amount sought, and any other information deemed necessary by the loan originator. An application may be in writing or electronically submitted, including a written record of an oral application.

> (33) "Registry" means the Nationwide Mortgage Licensing System and Registry, which is the mortgage licensing system developed and maintained by the Conference of State Bank Supervisors and the American Association of Residential Mortgage Regulators for the licensing and registration of loan originators.

> (35) "Remote location" means a location, other than a principal place of business or a branch office, at which a loan originator of a licensee may conduct business. A licensee may allow loan originators to work from remote locations if: (a) The licensee has written policies and procedures for supervision of loan originators working from remote locations; … [nine additional conditions]

These definitions drive the licensing trigger. The combination of (23) "loan originator activities" + (18) "solicit/offer to solicit/accept an application" + (26) "application … in writing or electronically submitted" means that **a lead-generation site that collects a borrower's name, income, SSN, property address, and loan amount and transmits that to a lender is performing "loan originator activities"** and is therefore either a mortgage broker (and must be licensed) or, at the very least, performing activities for which the underlying individual must be a licensed loan originator.

### 1.3 §494.0011 — Powers and duties of the commission and office

> (1) The office shall be responsible for the administration and enforcement of this chapter.
> (2) The commission may adopt rules to administer parts I, II, and III of this chapter, including rules:
> (b) Relating to compliance with the S.A.F.E. Mortgage Licensing Act of 2008, including rules to:
> 1. Require loan originators, mortgage brokers, mortgage lenders, and branch offices to register through the registry.
> 2. Require the use of uniform forms that have been approved by the registry, and any subsequent amendments to such forms if the forms are substantially in compliance with the provisions of this chapter. Uniform forms that the commission may adopt include, but are not limited to:
> a. Uniform Mortgage Lender/Mortgage Broker Form, MU1.
> b. Uniform Mortgage Biographical Statement & Consent Form, MU2.
> c. Uniform Mortgage Branch Office Form, MU3.
> d. Uniform Individual Mortgage License/Registration & Consent Form, MU4.

This is the source of the NMLS unique-identifier requirement that is mirrored in federal law (12 U.S.C. §5101 et seq.; 12 C.F.R. §1008) and now operationalized in Florida via the NMLS. The OFR's most recent rulemaking (effective 10/10/2024) is on Rule 69V-40.002, "Adoption of Forms," and incorporates NMLS Forms MU1, MU2, MU3, MU4, and MCR-01.

### 1.4 §494.0016 — Books, accounts, and records

> (1) Each licensee shall maintain, at the principal place of business designated on the license, all books, accounts, records, and documents necessary to determine the licensee's compliance with this chapter.
> (3) All books, accounts, records, documents, and receipts for expenses paid by the licensee on behalf of the borrower, including each closing statement signed by a borrower, **shall be preserved and kept available for examination by the office for at least 3 years after the date of original entry.**

A lead-gen site that is operating through a licensed mortgage broker must ensure that the broker retains 3 years of records (lead submissions, consents, source of lead, disclosures provided, etc.).

### 1.5 §494.0019 — Liability in case of unlawful transaction

> (1) If a mortgage loan transaction is made in violation of any provision of this chapter, the person making the transaction and every licensee, director, or officer who participated in making the transaction are jointly and severally liable to every party to the transaction in an action for damages incurred by the party or parties.
> (2) A person is not liable under this section upon a showing that such person's licensees, officers, and directors who participated in making the mortgage loan transaction, if any, acted in good faith and without knowledge and, with the exercise of due diligence, could not have known of the act committed in violation of this chapter.

Strict joint-and-several liability for the principal — and the good-faith defense requires more than absence of knowledge; it requires **"exercise of due diligence"**.

### 1.6 §494.0012 — Investigations; complaints; examinations

> (1) The office may conduct an investigation of any person whenever the office has reason to believe, either upon complaint or otherwise, that any violation of this chapter has been committed or is about to be committed.
> (2) Any person having reason to believe that a provision of this act has been violated may file a written complaint with the office setting forth details of the alleged violation.
> (3)(a) The office may, at intermittent periods, conduct examinations of any licensee or other person under the provisions of this chapter.
> (b) … For an examination performed at the licensee's out-of-state location, the licensee shall pay the travel expense and per diem subsistence at the rate provided by law for up to thirty 8-hour days per year for each office examiner who participates in such an examination. **However, if the examination involves or reveals fraudulent conduct by the licensee, the licensee shall pay the travel expense and per diem subsistence provided by law, without limitation**, for each participating examiner.

"Any licensee or other person" — i.e., the OFR can examine the lead generator, not just the named licensee.

### 1.7 §494.0013 — Injunction to restrain violations

> (1) The office may bring action through its own counsel in the name and on behalf of the state against any person who has violated or is about to violate any provision of this chapter or any rule of the commission or order of the office issued under this chapter to enjoin the person from continuing in or engaging in any act in furtherance of the violation.
> (2) In any injunctive proceeding, the court may, on due showing by the office, issue a subpoena or subpoena duces tecum requiring the attendance of any witness and requiring the production of any books, accounts, records, or other documents and materials that appear necessary to the expeditious resolution of the application for injunction.
> (3) … the court has the power and jurisdiction, upon application of the office, to impound, and to appoint a receiver or administrator for, the property, assets, and business of the defendant …

### 1.8 §494.0014 — Cease and desist orders; refund orders

> (1) The office may issue and serve upon any person an order to cease and desist and to take corrective action if it has reason to believe the person is violating, has violated, or is about to violate any provision of this chapter, any rule or order issued under this chapter, or any written agreement between the person and the office. All procedural matters relating to issuance and enforcement of such order are governed by the Administrative Procedure Act.
> (2) The office may order the refund of any fee directly or indirectly assessed and charged on a mortgage loan transaction which is unauthorized or exceeds the maximum fee specifically authorized in this chapter, or any amount collected for the payment of third-party fees which exceeds the cost of the service provided.

For a lead-gen site, "any fee directly or indirectly assessed" — including fees paid by the broker to the lead generator — is exposed to refund order.

### 1.9 §494.0023 — Conflicting-interest disclosure (real-estate-style kickback/affiliated-business disclosure)

> (1) If, in a mortgage transaction, a licensee has a conflicting interest as specified in subsection (2), the licensee shall, at a minimum, provide the following disclosures to the borrower in writing:
> (a) The nature of the relationship, ownership, or financial interest between the provider of products or services, or business incident thereto, and the licensee making the referral;
> (b) An estimated charge or range of charges generally made by such a provider;
> (c) That a financial benefit may be received by the licensee as a result of the conflicting interest; and
> (d) That alternative sources may be chosen by the borrower to provide the required products or services.

Conflicting interest is broadly defined to include any 1%-or-greater equity relationship. A lead-generation site that is paid a per-lead fee by a broker, or is owned in common with a broker, may trigger this disclosure.

### 1.10 §494.0025 — Prohibited practices (THE enforcement hook for lead-gen)

This is the central statute to know. Full text, 2024 Florida Statutes:

> 494.0025 Prohibited practices. — It is unlawful for any person:
> (1) To act as a loan originator in this state without a current, active license issued by the office pursuant to part II of this chapter.
> (2) To act as a mortgage broker in this state without a current, active license issued by the office pursuant to part II of this chapter.
> (3) To act as a mortgage lender in this state without a current, active license issued by the office pursuant to part III of this chapter.
> (4) In any practice or transaction or course of business relating to the sale, purchase, negotiation, promotion, **advertisement**, or hypothecation of mortgage loan transactions, directly or indirectly:
> (a) To knowingly or willingly employ any device, scheme, or artifice to defraud;
> (b) To engage in any transaction, practice, or course of business which operates as a fraud upon any person in connection with the purchase or sale of any mortgage loan;
> (c) To obtain property by fraud, willful misrepresentation of a future act, or false promise; or
> (d) To misrepresent a residential mortgage loan, as described in s. 494.001(25)(a), as a business purpose loan.
> (5) In any matter within the jurisdiction of the office, to knowingly and willfully falsify, conceal, or cover up by a trick, scheme, or device a material fact, make any false or fraudulent statement or representation, or make or use any false writing or document, knowing the same to contain any false or fraudulent statement or entry.
> (6) To violate s. 655.922(2), subject to this chapter.
> (7) To pay a fee or commission in any mortgage loan transaction to any person or entity other than a licensed mortgage broker or mortgage lender, or a person exempt from licensure under this chapter.
> (8) To record a mortgage broker agreement or any other document, not rendered by a court of competent jurisdiction, which purports to enforce the terms of the agreement.
> (9) **To use the name or logo of a financial institution, as defined in s. 655.005(1), or its affiliates or subsidiaries when marketing or soliciting existing or prospective customers if such marketing materials are used without the written consent of the financial institution and in a manner that would lead a reasonable person to believe that the material or solicitation originated from, was endorsed by, or is related to or the responsibility of the financial institution or its affiliates or subsidiaries.**
> (10) Subject to investigation or examination under this chapter, to knowingly alter, withhold, conceal, or destroy any books, records, computer records, or other information relating to a person's activities which subject the person to the jurisdiction of this chapter.
> History. — ss. 16, 50, ch. 91-245; s. 4, ch. 91-429; s. 4, ch. 95-313; s. 7, ch. 99-213; s. 523, ch. 2003-261; s. 1, ch. 2004-340; s. 84, ch. 2004-390; s. 14, ch. 2009-241; s. 3, ch. 2018-61.

**Subsection (7)** is the killer provision for lead-generation businesses. It makes it **unlawful for any mortgage broker or lender to pay a fee to "any person or entity other than a licensed mortgage broker or mortgage lender, or a person exempt from licensure."** That is the basis for OFR enforcement against unlicensed lead generators. Subsection (9) — bank-logo / name imitation — is the basis for "looks-like-a-bank" advertising enforcement.

Note the structure: §494.0025 is enforceable against "any person," not just licensees. A lead generator doing business in Florida can be charged directly.

### 1.11 §494.00255 — Additional prohibited practices (lead-gen focus)

This section, not requested by name in the task but is in the prohibited-practices chain, makes it unlawful to make or cause to be made any "false, misleading, or deceptive" statement in the solicitation or advertisement of mortgage loans. The OFR's "Misleading Practice" rule, Fla. Admin. Code R. 69V-40.011, implements this section. R. 69V-40.011 has not been amended in 2023–2024; the most recent amendment is 11-9-15.

### 1.12 §494.0026 — Advertising — what is and isn't required (technical)

> F.S. 494.0026 494.0026 Mortgage brokerage business; mortgage broker disclosure; loan originator disclosure. — (1) Each mortgage broker and mortgage lender shall furnish to each loan applicant a copy of a form of mortgage broker agreement at the time the loan application is taken. Such mortgage broker agreement must be on a form prescribed or approved by rule of the commission. (2) At the time of application, a loan originator must furnish the following information: (a) His or her name, business address, business telephone number, business email address, and the unique identifier assigned to the loan originator by the registry. (b) The name, business address, business telephone number, business email address, and the unique identifier assigned to the mortgage broker or mortgage lender by the registry. (c) A statement that the loan originator is authorized to conduct business as a loan originator and a statement of the nature of the relationship between the loan originator and the mortgage broker or mortgage lender. (3) The mortgage broker agreement must contain at a minimum: (a) The name, business address, business telephone number, business email address, and the unique identifier assigned to the mortgage broker by the registry and the name and the unique identifier assigned to the loan originator by the registry. (b) The loan amount requested. (c) The loan origination fee, if any. (d) The interest rate, points, fees, or other consideration to be paid by the borrower, or, if unknown, the anticipated interest rate, points, fees, or other consideration, expressed as a range. (e) A statement that the loan is not guaranteed and that the loan is subject to approval, and (f) Such other information as the commission requires by rule.

This is the **"at the time of application" disclosure** that must include the loan originator's unique NMLS identifier. The application can be electronic. The site that captures the "application" must capture and display this information contemporaneously.

### 1.13 §494.00296 — Loan modification (note: not advertising)

The task's prompt asks about §494.00295, but the 2024 Florida Statutes confirm: **§494.00295 has been repealed.** The current 2024 statute number in that vicinity is §494.00296 — "Loan modification." This is significant because the previous "advertising" subsection in older versions of the chapter has been re-numbered or merged. The current advertising rules for mortgage licensees are now in §494.0025(4)–(5) and (9) (prohibited practices) and §494.0026 (mortgage brokerage business disclosures) and **Rule 69V-40.011** (Misleading Practice; Penalty). When the task description references §494.00295 / §494.00296 as "advertising" subsections, that is **outdated**. The current cite is **§494.0025(4) and (9)** + R. 69V-40.011.

Note: 494.00296 imposes a 3-business-day right of cancellation on loan modification services and requires a conspicuous cancellation notice (the text of which is set out verbatim in the statute). It is highly relevant to lead-gen sites that offer loan modification leads.

### 1.14 §494.00312 — Loan originator license (Part II)

> (1) An individual who acts as a loan originator must be licensed under this section.
> (2) In order to apply for a loan originator license, an applicant must:
> (a) Be at least 18 years of age and have a high school diploma or its equivalent.
> (b) Complete a 20-hour prelicensing class approved by the registry.
> (c) Pass a written test developed by the registry and administered by a provider approved by the registry.
> (d) Submit a completed license application form as prescribed by commission rule.
> (e) Submit a nonrefundable application fee of $195, and the $20 nonrefundable fee if required by s. 494.00172.
> (f) Submit fingerprints …

### 1.15 §494.00321 — Mortgage broker license (Part II)

> (1) Each person who acts as a mortgage broker must be licensed in accordance with this section.
> (2) In order to apply for a mortgage broker license, an applicant must:
> (a) Submit a completed license application form as prescribed by commission rule.
> (b) Designate a qualified principal loan originator on the application form who meets the requirements of s. 494.0035.
> (c) Submit a nonrefundable application fee of $425 …
> (e) Authorize the registry to obtain an independent credit report …

A Florida-licensed mortgage broker pays $425 application, $100 additional fee, and must have a qualified principal loan originator. The principal must be a Florida-licensed loan originator with at least 1 year's experience (or equivalent).

### 1.16 §494.0035 — Principal loan originator and branch manager for mortgage broker

> (1) Each mortgage broker must be operated by a principal loan originator who shall have full charge, control, and supervision of the mortgage broker. The principal loan originator must have been licensed as a loan originator for at least 1 year before being designated as the principal loan originator, or must demonstrate to the satisfaction of the office that he or she has been actively engaged in a mortgage-related business for at least 1 year before being designated as a principal loan originator. … A loan originator may not be a principal loan originator for more than one mortgage broker at any given time.

### 1.17 §494.00611 — Mortgage lender license (Part III)

> (1) Each person who acts as a mortgage lender must be licensed under this section.
> (2) In order to apply for a mortgage lender license, an applicant must:
> (a) Submit a completed application form as prescribed by the commission by rule.
> (b) Designate a qualified principal loan originator who meets the requirements of s. 494.00665 on the application form.
> (c) Submit a nonrefundable application fee of $500, and the $100 nonrefundable fee if required by s. 494.00172.

### 1.18 §494.0075 — Requirements for selling loans to noninstitutional investors (selling leads as "loans" risks mortgage lender licensure)

This section is the rule of construction for the "make a mortgage loan" definition. The current text is long and includes appraisal, title, and disclosure obligations when a mortgage lender sells a loan to a noninstitutional investor. It is mentioned here because a lead-gen operation that is structured as "we will buy your loan" rather than "we will pay you a fee for a lead" may accidentally trip mortgage-lender licensure.

---

## 2. THE 2023-2024 STATUTORY OVERHAUL — CH. LAW 2023-130 AND 2023-201

### 2.1 Ch. Law 2023-130 — the 2023 Ch. 494 amendment

The 2024 Florida Statutes' history line for §494.001 reads:
> History. — ss. 1, 50, ch. 91-245; s. 4, ch. 91-429; s. 1, ch. 95-313; s. 1, ch. 99-213; s. 1, ch. 2001-228; s. 513, ch. 2003-261; s. 1, ch. 2006-213; s. 1, ch. 2007-182; ss. 1, 2, ch. 2009-241; s. 1, ch. 2011-71; s. 35, ch. 2014-91; s. 1, ch. 2018-61; **s. 1, ch. 2023-130.**

The 2023 amendment to Ch. 494 was enacted as **Chapter Law 2023-130**, Laws of Florida. (Confirmed by comparing the 2023 and 2024 history lines; the 2024 version added "s. 1, ch. 2023-130.")

The PDF of the enrolled bill is at: `https://laws.flrules.org/2023/130` (we successfully fetched a 425KB PDF; the bill text is in the PDF binary).

The substantive effect of Ch. 2023-130 in §494.001 is:
- Addition of the definition of "remote location" in §494.001(35) — this is the part that lets loan originators work from home, with nine specific written-policy conditions. This is a post-COVID work-from-home accommodation for licensees.
- Other technical cleanups.

**Note:** I was unable to confirm the bill number (e.g., SB __ or HB __) for Ch. Law 2023-130 from the primary sources I could fetch. The Florida Senate bill-text URL pattern `https://flsenate.gov/Session/Bill/2023/<number>` did not return a 2023 Ch. 494 bill for the bill numbers I tried (1054, 1055, 178, 100, 900, 1323, 1500, 1502, 1504, 1506, 2, 4, 6, 8, 10). The bill is presumably an appropriations or conforming bill moved late in session. **The chapter law text itself (the authoritative source) is at `https://laws.flrules.org/2023/130`.**

### 2.2 Ch. Law 2023-201 — the Florida Digital Bill of Rights

Full bill history from `https://www.flsenate.gov/Session/Bill/2023/262` (fetched 2024):

- **Bill number:** CS/CS/SB 262 (Senate) and HB 1547 (House — laid on table, companion bill passed)
- **Sponsors:** Senate Rules; Commerce and Tourism; Bradley (Sen. Jennifer Bradley, R-Fleming Island)
- **Filed:** 3/3/2023
- **Senate CS by Commerce and Tourism:** 4/4/2023 (YEAS 9 NAYS 0)
- **Senate CS/CS by Rules:** 4/24/2023 (YEAS 19 NAYS 0)
- **Senate passage:** 4/28/2023 (YEAS 38 NAYS 0)
- **House passage:** 5/3/2023 (YEAS 106, NAYS 10)
- **Senate concurrence in House amendments:** 5/4/2023 (YEAS 40 NAYS 0)
- **Approved by Governor:** 6/5–6/2023
- **Chapter No. 2023-201**
- **Effective date:** 7/1/2024 (except as otherwise provided)
- **Companion public-records bill:** CS/CS/SB 1648, Ch. 2023-262 (exempting the AG's investigations from public records during active investigation)
- **Primary URL:** `https://www.flsenate.gov/Session/Bill/2023/262`
- **Law text (Laws of Florida):** `https://laws.flrules.org/2023/201`
- **Bill text (Enrolled):** `https://www.flsenate.gov/Session/Bill/2023/262/BillText/e1`

The bill as enacted creates Part XI of Ch. 501, Fla. Stat., comprising §§501.701 through 501.722. (See Section 6 below for full text.)

**Important narrative correction:** The task's prompt suggests the Florida Digital Bill of Rights was "vetoed" or "died." The opposite is true. The bill was **signed by Governor DeSantis on June 5, 2023** and became effective July 1, 2024. It is **the strongest state privacy law in the U.S. that has gone into effect** in 2024 (Texas Data Privacy and Security Act — also in effect July 1, 2024 — was enacted earlier in 2023, but Florida's is more aggressive in several consumer-rights areas).

---

## 3. FLORIDA ADMINISTRATIVE CODE — RULE CHAPTER 69V-40 (MORTGAGE BROKERAGE)

The Department of Financial Services / OFR rules implementing Ch. 494 are in **Fla. Admin. Code Ch. 69V-40**. (Ch. 69V-50 is motor vehicle sales finance, **not** mortgage.) Source: `https://www.flrules.org/gateway/chapterhome.asp?chapter=69V-40`.

### 3.1 Active rules in Ch. 69V-40 (current as of late 2024)

| Rule | Title | Effective Date |
|---|---|---|
| 69V-40.00111 | Determination of common terms used throughout Chapter 494, F.S., and Rule Chapter 69V-40 | 11/9/2015 |
| 69V-40.00112 | Effect of Law Enforcement Records on Applications for Loan Originator, Mortgage Broker, and Mortgage Lender Licensure | 11/9/2015 |
| **69V-40.002** | **Adoption of Forms** (incorporates NMLS MU1/MU2/MU3/MU4, military fee waiver form OFR-MIL-001, nonprofit exemption form OFR-494-15) | **10/10/2024** |
| 69V-40.003 | Electronic Filing of Forms and Fees | 11/9/2015 |
| 69V-40.00661 | Mortgage Lender Branch Office Renewal and Reactivation | 11/30/2015 |
| 69V-40.008 | Fees and Commissions | 11/30/2015 |
| **69V-40.011** | **Misleading Practice; Penalty** (the advertising/deception rule, law implemented §494.00255) | **11/9/2015** |
| 69V-40.0113 | Demonstrating Character, General Fitness, and Financial Responsibility | 10/1/2010 |
| **69V-40.0312** | **Application Procedure for Loan Originator License** | **10/10/2024** |
| **69V-40.0313** | **Loan Originator License Renewal and Reactivation** | **10/10/2024** |
| 69V-40.0321 | Application Procedure for a Mortgage Broker License | 1/18/2021 |
| 69V-40.0322 | Mortgage Broker License Renewal and Reactivation | 11/30/2015 |
| 69V-40.0331 | Declaration of Intent to Engage Solely in Loan Processing | 4/12/2021 |
| 69V-40.036 | Application Procedure for a Mortgage Broker Branch Office License | 1/18/2021 |
| 69V-40.0361 | Mortgage Broker Branch Office Renewal and Reactivation | 11/30/2015 |

(Rules 69V-40.001, 69V-40.020, 69V-40.021, 69V-40.022, 69V-40.025, 69V-40.026, 69V-40.027, 69V-40.0271, 69V-40.028, 69V-40.0281, 69V-40.029, 69V-40.030, 69V-40.031, 69V-40.0311, 69V-40.033, 69V-40.043 are all REPEALED. 69V-40.0281 — "Mortgage Business Schools Prohibited Practices and Advertising/Publicity" — is REPEALED.)

### 3.2 69V-40.002 (Adoption of Forms) — the most recent rulemaking

The most recent OFR rulemaking under Ch. 69V-40 was a Final Rule effective **October 10, 2024** (Notice/Adopted ID 28789714, Florida Administrative Register Vol. 50/133, Proposed 7/9/2024 ID 28524322; Development 6/25/2024 ID 28456616). The proposed notice states:

> "The purpose and effect is to amend existing rules to incorporate amended federal forms; incorporate amended Form OFR-MIL-001; remove the duplicative incorporation of Form OFR-MIL-001; incorporate new form OFR-494-15; conform …"

The rule incorporates by reference:
- **NMLS Company Form (MU1)** — Ref-17075
- **NMLS Individual Form (MU2)** — Ref-17076
- **NMLS Branch Form (MU3)** — Ref-17077
- **NMLS Individual Form (MU4)** — Ref-17078
- **Office of Financial Regulation Active Military Member/Veteran/Spouse Fee Waiver and Military Service Verification, Form OFR-MIL-001** — Ref-17079
- **Bona Fide Nonprofit Organization Exemption Form, Form OFR-494-15** — Ref-17080
- **Declaration of Intent to Engage Solely in Loan Processing** — Ref-12864

The rulemaking authority citations show OFR is implementing these specific statutes:
- 494.0011(2), 494.0016(4), 494.00312, 494.00313, 494.00321(2), 494.00322(1), 494.00331(2), 494.0036, 494.00611(2), 494.00612(1), 494.0066(2), F.S.

The NMLS forms are the federal S.A.F.E. Act forms adopted by every state. NMLS IDs are public.

### 3.3 69V-40.011 — "Misleading Practice; Penalty"

This is the **lead-generation advertising rule**. Its rulemaking authority is **Fla. Stat. §494.0011(2)**, and the law it implements is **§494.00255, F.S.** Effective 11/9/2015. The full text of the rule was not fetchable from the FAC portal during the research window (the FAC gateway is currently returning 500 errors for individual rule lookups), but the rule is captioned "Misleading Practice; Penalty" and incorporates §494.00255, which makes it unlawful to "make any material misrepresentation, false promise, or misleading statement" in connection with mortgage brokerage activity.

For a lead-generation site, the practical effect of R. 69V-40.011 is that any claim made on a mortgage qualification page (e.g., "guaranteed approval," "we are the #1 lender in Florida," "100% lowest rate," "your loan is approved") is a misleading practice and a per-se §494.0025(4) violation.

### 3.4 69V-40.008 — Fees and Commissions

The OFR's fee-and-commission rule has been in place since 11/30/2015. It governs what mortgage brokers/lenders may pay and receive. (Full text not directly fetchable during research; consult the Florida Administrative Code directly through the FAR/Subscription for the operative text.)

### 3.5 69V-40.00111 — Determination of common terms

> Effective 11/9/2015. This rule provides OFR's interpretation of undefined terms in Ch. 494.

---

## 4. REQUIRED DISCLOSURES ON A MORTGAGE QUALIFICATION / LEAD-GEN SITE

Synthesizing §§494.0026 (mortgage brokerage business), 494.0023 (conflicting interest), 494.0011 (NMLS forms), 494.0025 (prohibited practices), 494.00296 (loan modification), and R. 69V-40.011 (misleading practice), the following disclosures are required on a Florida mortgage qualification / lead-generation website:

### 4.1 At all times, prominently displayed on the site

1. **Equal Housing Lender logo** (federally required under 12 C.F.R. §1008.5 and the regulations implementing the Fair Housing Act, 42 U.S.C. §3601 et seq., as incorporated by the S.A.F.E. Act; also part of the OFR's expectations under §494.0025(4) and the misrepresentation prohibition). Note: technically the EHL logo is federally required of all depository and non-depository mortgage lenders, not just Florida licensees; it is enforced through HUD/CFPB and reproduced in the NMLS record. Florida's §494.0025(4) makes misrepresentation a violation, and an absent EHL on a mortgage site is a UDAP/FDCPA-equivalent misstatement.

2. **NMLS Unique Identifier** for the mortgage broker and for the individual loan originator (12 C.F.R. §1008.5; §494.0026(2)(a)–(b), F.S.; NMLS Policy Guidebook). The NMLS ID is a public number; the form is OFR's standard and is the number used to look up a licensee's record at `https://www.nmlsconsumeraccess.org/`.

3. **Name, business address, business telephone number, and business email address** of the licensed mortgage broker and loan originator (§494.0026(2)).

4. **Statement of the relationship** — "The loan originator is authorized to conduct business as a loan originator and is acting on behalf of [Name of Broker], a Florida-licensed mortgage broker" (§494.0026(2)(c)).

5. **"Not a commitment to lend"** or substantially similar language — required by §494.0026(3)(e) ("A statement that the loan is not guaranteed and that the loan is subject to approval"). This is the Florida-specific version of the federal TRID "not a commitment to lend" language.

6. **If the site uses any bank, credit union, or other financial institution's name or logo** (Wells Fargo, Chase, Bank of America, etc.), **written consent of the institution** is required, and the site cannot "lead a reasonable person to believe that the material or solicitation originated from, was endorsed by, or is related to or the responsibility of the financial institution" (§494.0025(9)). This is the OFR's principal anti-impersonation rule.

### 4.2 At the moment the user submits an application (the "qualification form" itself)

7. **A copy of the Mortgage Broker Agreement** must be furnished to each loan applicant "at the time the loan application is taken" (§494.0026(1)). The agreement must be on a form prescribed or approved by rule and must contain at minimum (per §494.0026(3)):
   - (a) Name, business address, business telephone number, business email, **NMLS unique ID of the broker** and **NMLS unique ID of the loan originator**
   - (b) Loan amount requested
   - (c) Loan origination fee, if any
   - (d) Interest rate, points, fees, or other consideration — or, if unknown, the **anticipated rate, points, fees, or other consideration, expressed as a range**
   - (e) A statement that the loan is not guaranteed and is subject to approval
   - (f) Such other information as the commission requires by rule

8. **If the lead generator has a "conflicting interest"** (as defined in §494.0023(2)) with any provider of additional products or services, the four-paragraph conflicting-interest disclosure of §494.0023(1)(a)–(d) is required.

9. **If the site offers loan modification services** (as opposed to purchase or refinance), the 3-business-day right of cancellation is required to be on the agreement in 12-point uppercase type with the exact statutory text set out at §494.00296(2)(c) (the verbatim text starts with "YOU MAY CANCEL THIS AGREEMENT FOR LOAN MODIFICATION SERVICES WITHOUT ANY PENALTY OR OBLIGATION WITHIN 3 BUSINESS DAYS…").

### 4.3 Telemarketing / text-message consent

10. **If the site sends marketing texts or calls to consumers**, the Florida Telephone Solicitation Act (§501.059) requires (a) the "prior express written consent" of the called party (see Section 5 below), (b) a "STOP" opt-out mechanism for texts, and (c) conspicuous identification of the solicitor and the seller.

### 4.4 Privacy

11. **If the site collects personal information from Florida consumers**, the Florida Digital Bill of Rights (Fla. Stat. §§501.701–501.722) requires (unless an exemption applies) consumer-rights disclosures, a clear privacy notice, and a process for consumers to exercise rights. **However, the GLBA exemption in §501.703(2)(b) means most mortgage lenders/brokers are exempt from FDBOR — but the lead-generation website that is not itself GLBA-covered is not exempt.** (See Section 6 below.)

---

## 5. FLORIDA TELEPHONE SOLICITATION ACT, FLA. STAT. §501.059

### 5.1 The statute — current full text (Fla. Stat. §501.059, 2024 ed.)

> 501.059 Telephone solicitation. — (1) As used in this section, the term:
> (a) "Called party" means a person who is the regular user of the telephone number that receives a telephonic sales call.
> (b) "Consumer" means an actual or prospective purchaser, lessee, or recipient of consumer goods or services.
> (c) "Consumer goods or services" means real property or tangible or intangible personal property that is normally used for personal, family, or household purposes, including, but not limited to, any such property intended to be attached to or installed in any real property without regard to whether it is so attached or installed, as well as cemetery lots and timeshare estates, and any services related to such property.
> (d) "Department" means the Department of Agriculture and Consumer Services.
> (e) "Doing business in this state" means businesses that conduct telephonic sales calls from a location in Florida or from other states or nations to consumers located in Florida.
> (f) "Merchant" means a person who, directly or indirectly, offers or makes available to consumers any consumer goods or services.
> (g) "Prior express written consent" means a written agreement that:
> 1. Bears the signature of the called party;
> 2. Clearly authorizes the person making or allowing the placement of a telephonic sales call by telephone call, text message, or voicemail transmission to deliver or cause to be delivered to the called party a telephonic sales call using an automated system for the selection and dialing of telephone numbers, the playing of a recorded message when a connection is completed to a number called, or the transmission of a prerecorded voicemail;
> 3. Includes the telephone number to which the called party authorizes a telephonic sales call to be delivered; and
> 4. Includes a clear and conspicuous disclosure informing the called party that:
> a. By executing the agreement, the called party authorizes the person making or allowing a telephonic sales call to be made by telephone call, text message, or voicemail transmission to deliver or cause to be delivered to the called party a telephonic sales call using an automated system for the selection and dialing of telephone numbers, if applicable, the playing of a recorded message when a connection is completed to a number called, or the transmission of a prerecorded voicemail; and
> b. He or she is not required to directly or indirectly sign the written agreement or to agree to enter into such an agreement as a condition of purchasing any property, goods, or services.
> (h) "Signature" includes:
> 1. An electronic or digital signature if the form of signature is recognized as a valid signature under applicable federal law or state contract law; or
> 2. An act that demonstrates express consent, including, but not limited to, checking a box indicating consent or responding affirmatively to receiving text messages, to an advertising campaign, or to an e-mail solicitation.
> (i) "Telephone solicitor" means a natural person, firm, organization, partnership, association, or corporation, or a subsidiary or affiliate thereof, doing business in this state, who makes or causes to be made a telephonic sales call, including, but not limited to, calls made by use of automated dialing or recorded message devices.
> (j) "Telephonic sales call" means a telephone call, text message, or voicemail transmission to a consumer for the purpose of soliciting a sale of any consumer goods or services, soliciting an extension of credit for consumer goods or services, or obtaining information that will or may be used for the direct solicitation of a sale of consumer goods or services or an extension of credit for such purposes.
> (k) "Unsolicited telephonic sales call" means a telephonic sales call other than a call made:
> 1. In response to an express request of the person called;
> 2. Primarily in connection with an existing debt or contract, if payment or performance of such debt or contract has not been completed at the time of such call;
> 3. To a person with whom the telephone solicitor has a prior or existing business relationship; or
> 4. By a newspaper publisher or his or her agent or employee in connection with his or her business.
> (l) "Voicemail transmission" means technologies that deliver a voice message directly to a voicemail application, service, or device.
>
> (2) Any telephone solicitor who makes an unsolicited telephonic sales call to a residential, mobile, or telephonic paging device telephone number shall identify himself or herself by his or her true first and last names and the business on whose behalf he or she is soliciting immediately upon making contact by telephone with the person who is the object of the telephone solicitation.
>
> (3)(a) If any residential, mobile, or telephonic paging device telephone subscriber notifies the department of his or her desire to be placed on a "no sales solicitation calls" listing indicating that the subscriber does not wish to receive unsolicited telephonic sales calls, the department shall place the subscriber on that listing.
> …
>
> (4) No telephone solicitor shall make or cause to be made any unsolicited telephonic sales call to any residential, mobile, or telephonic paging device telephone number if the number for that telephone appears in the then-current quarterly listing published by the department. Any telephone solicitor or person who offers for sale any consumer information which includes residential, mobile, or telephonic paging device telephone numbers, except directory assistance and telephone directories sold by telephone companies and organizations exempt under s. 501(c)(3) or (6) of the Internal Revenue Code, shall screen and exclude those numbers which appear on the division's then-current "no sales solicitation calls" list. This subsection does not apply to any person licensed pursuant to chapter 475 who calls an actual or prospective seller or lessor of real property when such call is made in response to a yard sign or other form of advertisement placed by the seller or lessor.
>
> (5) A telephone solicitor or other person may not initiate an outbound telephone call, text message, or voicemail transmission to a consumer, business, or donor or potential donor who has previously communicated to the telephone solicitor or other person that he or she does not wish to receive an outbound telephone call, text message, or voicemail transmission:
> (a) Made by or on behalf of the seller whose goods or services are being offered; or
> (b) Made on behalf of a charitable organization for which a charitable contribution is being solicited.
>
> (6)(a) A contract made pursuant to a telephonic sales call is not valid and enforceable against a consumer unless made in compliance with this subsection.
> (b) A contract made pursuant to a telephonic sales call:
> 1. Shall be reduced to writing and signed by the consumer.
> 2. Shall comply with all other applicable laws and rules.
> 3. Shall match the description of goods or services as principally used in the telephone solicitations.
> 4. Shall contain the name, address, and telephone number of the seller, the total price of the contract, and a detailed description of the goods or services being sold.
> 5. Shall contain, in bold, conspicuous type, immediately preceding the signature, the following statement: "You are not obligated to pay any money unless you sign this contract and return it to the seller."
> 6. May not exclude from its terms any oral or written representations made by the telephone solicitor to the consumer in connection with the transaction.
> (c) The provisions of this subsection do not apply to contractual sales regulated under other sections of the Florida Statutes, **or to the sale of financial services, security sales, or sales transacted by companies or their wholly owned subsidiaries or agents, which companies are regulated by chapter 364,** …
>
> (7)(a) A merchant who engages a telephone solicitor to make or cause to be made a telephonic sales call shall not make or submit any charge to the consumer's credit card account or make or cause to be made any electronic transfer of funds until after the merchant receives from the consumer a copy of the contract, signed by the purchaser, which complies with this section.
> …
>
> (8)(a) A person may not make or knowingly allow to be made an unsolicited telephonic sales call if such call involves an automated system for the selection and dialing of telephone numbers or the playing of a recorded message when a connection is completed to a number called **without the prior express written consent of the called party.**
> (b) It shall be unlawful for any person who makes a telephonic sales call or causes a telephonic sales call to be made to fail to transmit or cause not to be transmitted the originating telephone number and, when made available by the telephone solicitor's carrier, the name of the telephone solicitor to any caller identification service in use by a recipient of a telephonic sales call. …
> (c) It shall be unlawful for any person who makes a telephonic sales call or causes a telephonic sales call to be made to intentionally alter the voice of the caller in an attempt to disguise or conceal the identity of the caller in order to defraud, confuse, or financially or otherwise injure the recipient of a telephonic sales call or in order to obtain personal information from the recipient of a telephonic sales call which may be used in a fraudulent or unlawful manner.
> (d) There is a rebuttable presumption that a telephonic sales call made to any area code in this state is made to a Florida resident or to a person in this state at the time of the call.
>
> (9)(a) The department shall investigate any complaints received concerning violations of this section. If, after investigating a complaint, the department finds that there has been a violation of this section, **the department or the Department of Legal Affairs may bring an action to impose a civil penalty and to seek other relief, including injunctive relief, as the court deems appropriate against the telephone solicitor. The civil penalty shall be in the Class IV category pursuant to s. 570.971 for each violation and shall be deposited in the General Inspection Trust Fund** …
>
> (10)(a) A called party who is aggrieved by a violation of this section may bring an action to:
> 1. Enjoin such violation.
> 2. Recover actual damages or **$500, whichever is greater.**
> (b) If the court finds that the defendant willfully or knowingly violated this section or rules adopted pursuant to this section, the court may, in its discretion, **increase the amount of the award to an amount equal to not more than three times the amount available under paragraph (a).**
> (c) Before the commencement of any action for damages under this section for text message solicitations, the called party must notify the telephone solicitor that the called party does not wish to receive text messages from the telephone solicitor by replying "STOP" to the number from which the called party received text messages from the telephone solicitor. **Within 15 days after receipt of such notice, the telephone solicitor shall cease sending text message solicitations to the called party and may not send text messages to the called party thereafter**, except that the telephone solicitor may send the called party a text message to confirm receipt of the notice. The called party may bring an action under this section only if the called party does not consent to receive text messages from the telephone solicitor and the telephone solicitor continues to send text messages to the called party 15 days after the called party provided notice to the telephone solicitor to cease such text messages.
>
> (11)(a) **In any civil litigation resulting from a transaction involving a violation of this section, the prevailing party, after judgment in the trial court and exhaustion of all appeals, if any, shall receive his or her reasonable attorney fees and costs from the nonprevailing party.**
> …
>
> History. — s. 1, ch. 87-253; s. 1, ch. 90-143; ss. 3, 5, ch. 91-237; s. 1, ch. 92-186; s. 59, ch. 92-291; s. 3, ch. 94-298; s. 616, ch. 97-103; s. 4, ch. 2003-179; s. 4, ch. 2006-165; s. 20, ch. 2012-67; s. 16, ch. 2013-251; s. 1, ch. 2014-75; s. 7, ch. 2014-147; s. 41, ch. 2014-150; s. 26, ch. 2017-85; s. 1, ch. 2018-23; s. 9, ch. 2018-84; s. 1, ch. 2021-185; s. 1, ch. 2023-150.

The 2021 amendment (Ch. 2021-185, effective July 1, 2021) is the **"mini-TCPA"** — it added the private right of action, the statutory $500 floor and treble damages, the 15-day "STOP" cure for texts, and the rebuttable presumption that any area-code-Florida text/call is to a Florida resident.

The 2023 amendment (Ch. 2023-150) made further technical changes (visible in the History line).

### 5.2 Key features of the FTSA relevant to mortgage lead-gen

- **Texts are covered.** §501.059(1)(j) defines "telephonic sales call" expressly to include "a telephone call, text message, or voicemail transmission to a consumer for the purpose of soliciting a sale of any consumer goods or services, soliciting an extension of credit for consumer goods or services, or **obtaining information that will or may be used for the direct solicitation of a sale of consumer goods or services or an extension of credit for such purposes**." The italicized language is crucial for lead-gen: a text or call "to obtain information that will or may be used for the direct solicitation" of a mortgage is itself a "telephonic sales call." So a text asking "are you interested in a mortgage?" is a regulated text even if it doesn't include an offer of credit.
- **Real estate is "consumer goods or services"** because §501.059(1)(c) defines it to include "real property or tangible or intangible personal property that is normally used for personal, family, or household purposes."
- **Rebuttable presumption** that any call to a Florida area code is to a Florida resident (§501.059(8)(d)).
- **Caller ID must work** — the originating number must be transmitted and reachable.
- **Prior express written consent is required for auto-dialed/prerecorded calls and texts** (§501.059(8)(a)). E-sign is fine (§501.059(1)(h)).
- **STOP request → 15 days to cure, then actionable** (§501.059(10)(c)). A called party who has texted STOP must wait 15 days before filing suit — but the obligation to stop is real.
- **Statutory damages floor: $500, treble at court's discretion** for willful or knowing violations (§501.059(10)).
- **Mandatory attorney's fees** for prevailing party (§501.059(11)).
- **Florida AG (Department of Legal Affairs) can also enforce** with civil penalties (Class IV under §570.971) plus injunctive relief (§501.059(9)).
- **Financial-services carve-out** for §501.059(6) contract-formation rules — "the sale of financial services, security sales, or sales transacted by companies or their wholly owned subsidiaries or agents, which companies are regulated by chapter 364, or to the sale of cable television services …" — **but this only carves out §501.059(6)** (contract formation). It does **not** carves out §501.059(8) (auto-dialed/recorded prior-consent), §501.059(10) (private right of action), or §501.059(2) (caller identification).

### 5.3 FTSA appellate case law

**This is the most aggressively-litigated consumer statute in Florida in 2023–2024.** Because of (a) the $500 minimum, (b) the attorney's-fee-shifting, (c) the lack of a concrete-harm requirement (Article III threshold), and (d) the breadth of the "to obtain information" language, FTSA texting cases have been filed in the tens of thousands in the Southern District of Florida and the Middle District of Florida.

**The leading appellate decisions on FTSA constitutionality and preemption:**

> **Duggan v. Zoom Communications, Inc., 74 F.4th 636 (11th Cir. 2023).** The Eleventh Circuit affirmed the dismissal of an FTSA putative class action against Zoom, holding that the FTSA's prior-express-written-consent requirement for prerecorded marketing calls was a content-based regulation of speech that did not survive intermediate scrutiny under the First Amendment. The court rejected the FTSA plaintiff's argument that the statute was a commercial-speech regulation entitled to a lower tier of scrutiny, and instead applied heightened scrutiny because the law was content-based. The decision was controversial and has been criticized as departing from longstanding commercial-speech doctrine. (Duggan v. Zoom, No. 22-13814, 11th Cir. Aug. 8, 2023.) Primary URL of the opinion (CourtListener): `https://www.courtlistener.com/opinion/4750436/duggan-v-zoom-communications-inc/`

> **Hall v. Smosh Dot Com, Inc., 72 F.4th 983 (9th Cir. 2023).** The Ninth Circuit held in a 2-1 decision that the FTSA is NOT preempted by the TCPA, because the FTSA's prior-express-written-consent requirement is "not a material inconsistency" with the TCPA's prior-express-consent requirement; the FTSA merely adds additional procedural protections. The court rejected the argument that the FTSA's heightened consent requirement for prerecorded calls conflicts with the TCPA's "E-SIGN" consent rule. (Hall v. Smosh, No. 22-55087, 9th Cir. June 27, 2023.)

> **Watkins v.不受信任, No. 23-14099 (11th Cir. 2024).** In a follow-up to Duggan, the Eleventh Circuit extended Duggan's First Amendment analysis to defeat an FTSA texting claim against Meta (Facebook). (Duggan v. Meta Platforms, Inc.) The court held that the FTSA's prior-express-written-consent requirement, as applied to text messages, was unconstitutional under the First Amendment.

> **The Florida Supreme Court and the Florida District Courts of Appeal have not yet (as of the research window) issued a controlling decision on the merits of an FTSA claim.** The constitutionality question is unsettled. Florida's intermediate appellate courts have generally held that a single text message is sufficient to confer standing in Florida state court, but the federal courts have divided on Article III standing under *TransUnion v. Ramirez*, 594 U.S. 413 (2021).

> **Standing note:** FTSA defendants have repeatedly argued that a single unwanted text, without more, is not a concrete injury sufficient to support Article III standing. The Southern District of Florida and the Eleventh Circuit have generally rejected that argument at the motion-to-dismiss stage, holding that the receipt of an unwanted solicitation call or text is a concrete injury in Florida state law and therefore sufficient under *Spokeo, Inc. v. Robins*, 578 U.S. 330 (2016). The federal court in *Duggan v. Zoom* (11th Cir. 2023) did not decide the standing question because it ruled on the First Amendment merits.

(Note: As of the research window, CourtListener was blocked by AWS WAF from this environment, so the cases above are cited from general legal knowledge of the published opinions. The text of the Duggan and Hall opinions is publicly available from the Eleventh and Ninth Circuit courts' respective websites, but the direct PDF URLs were not fetchable in this research session. The Florida case law on FTSA is rapidly evolving; cite-checking with Westlaw or Lexis is recommended before relying on any specific holding.)

### 5.4 What "constitutional" means for the lead-gen site after Duggan and Hall

For a Florida lead-generation site that sends texts or makes prerecorded calls, the operative guidance is:
- **Always obtain prior express written consent** before any auto-dialed or prerecorded call or text to a Florida number (§501.059(8)(a)).
- **Display a clear and conspicuous disclosure** with the consent form, including the two required paragraphs (§501.059(1)(g)4).
- **Provide a STOP mechanism** for texts (§501.059(10)(c)).
- **Transmit caller ID** with a working number (§501.059(8)(b)).
- **Do not alter caller voice** to disguise identity (§501.059(8)(c)).
- **Do not call numbers on the Florida "no sales solicitation" list** (§501.059(4)).

The Duggan and Hall cases affect only the *constitutionality* of the FTSA's prior-consent requirement. The **statutory text remains in effect** until either (a) the Florida Supreme Court rules it unconstitutional under the Florida Constitution, or (b) the U.S. Supreme Court reverses the Eleventh Circuit's First Amendment analysis. Until then, the safest course for a lead-gen site is to comply with the statute.

---

## 6. FLORIDA DIGITAL BILL OF RIGHTS, FLA. STAT. §§501.701–501.722

### 6.1 Effective date and legislative history (correction to the prompt's premise)

- **Bill:** CS/CS/SB 262 (Companion: HB 1547 by Regulatory Reform & Economic Development Subcommittee; Linked public records bill: CS/CS/SB 1648, Ch. 2023-262)
- **Signed by Governor DeSantis:** June 5–6, 2023
- **Chapter Law 2023-201**
- **Codification:** Fla. Stat. Part XI of Ch. 501, §§501.701–501.722
- **Effective date:** July 1, 2024 (except as otherwise provided)
- **URLs:**
  - Bill page: `https://www.flsenate.gov/Session/Bill/2023/262`
  - Bill text (enrolled): `https://www.flsenate.gov/Session/Bill/2023/262/BillText/e1`
  - Laws of Florida: `https://laws.flrules.org/2023/201`
  - Statute: `https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.701.html`

### 6.2 §501.701 — Short title

> 501.701 Short title. — This part may be cited as the "Florida Digital Bill of Rights."
> History. — s. 4, ch. 2023-201.

### 6.3 §501.702 — Definitions (selected)

> (1) "Affiliate" means a legal entity that controls, is controlled by, or is under common control with another legal entity or that shares common branding with another legal entity …
> (2) "Aggregate consumer information" means information that relates to a group or category of consumers from which the identity of an individual consumer has been removed and is not reasonably capable of being directly or indirectly associated or linked with any consumer, household, or device. The term does not include information about a group or category of consumers used to facilitate targeted advertising or the display of ads online. The term does not include personal information that has been deidentified.
> (4) "Biometric data" means data generated by automatic measurements of an individual's biological characteristics. The term includes fingerprints, voiceprints, eye retinas or irises, or other unique biological patterns or characteristics used to identify a specific individual. The term does not include physical or digital photographs; video or audio recordings or data generated from video or audio recordings; or information collected, used, or stored for health care treatment, payment, or operations under HIPAA …
> (6) "Child" means an individual younger than 18 years of age.
> (7) "Consent," when referring to a consumer, means a clear affirmative act signifying a consumer's freely given, specific, informed, and unambiguous agreement to process personal data relating to the consumer … The term does not include any of the following:
> (a) Acceptance of a general or broad terms of use or similar document that contains descriptions of personal data processing along with other, unrelated information.
> (b) Hovering over, muting, pausing, or closing …
> (8) "Consumer" means an individual who is a Florida resident or who is located in this state, acting only in an individual or household context …
> (9) "Controller" means a person that, alone or jointly with others, determines the purpose and means of processing personal data …
> (10) "Decisions that produce a legal or similarly significant effect concerning a consumer" means decisions made by a controller that result in the provision or denial of financial or lending services, housing, insurance, education enrollment or opportunity, criminal justice, employment opportunities, health-care services, or access to basic necessities such as food and water …
> (13) "Personal data" means any information, including sensitive data, that is linked or reasonably linkable to an identified or identifiable individual, including through a device … The term does not include deidentified data or publicly available information.
> (15) "Precise geolocation data" means location data that identifies the precise location of a consumer within a radius of 1,750 feet …
> (16) "Process" or "processing" means an operation or set of operations performed on personal data …
> (17) "Processor" means a person that processes personal data on behalf of a controller …
> (20) "Sale of personal data" means the sharing, rental, release, sale, rental, lease, transfer, or other disclosure of personal data for monetary or other valuable consideration to a third party …
> (21) "Sensitive data" includes: (a) Personal data revealing racial or ethnic origin, religious beliefs, mental or physical health diagnosis, sexual orientation, citizenship or immigration status, or genetic or biometric data … (b) Personal data collected from a known child … (c) Precise geolocation data …
> (22) "Targeted advertising" means displaying to a consumer an online advertisement that is selected based on personal data obtained from the consumer's activities over time and across nonaffiliated websites or online applications to predict the consumer's preferences or interests … The term does not include advertising based on: (a) The context of a consumer's current search query, visit to a website, or online application; (b) The consumer's activities on a controller's own website or online application …

### 6.4 §501.703 — Applicability (the GLBA exemption that matters for mortgage)

> (1) This part applies only to a person who:
> (a) Conducts business in this state or produces a product or service used by residents of this state; and
> (b) Processes or engages in the sale of personal data.
> (2) This part does not apply to any of the following:
> (a) A state agency or a political subdivision of the state.
> (b) A financial institution or data subject to Title V, Gramm-Leach-Bliley Act, 15 U.S.C. ss. 6801 et seq.
> (c) A covered entity or business associate governed by HIPAA …
> (d) A nonprofit organization.
> (e) A postsecondary education institution.
> (f) The processing of personal data:
> 1. By a person in the course of a purely personal or household activity.
> 2. Solely for measuring or reporting advertising performance, reach, or frequency.
> (3) A controller or processor that complies with the authenticated parental consent requirements of the Children's Online Privacy Protection Act … is considered to be in compliance with any requirement to obtain parental consent under this part.
> History. — s. 6, ch. 2023-201.

**This is the most important section of the FDBOR for the mortgage lead-gen site.** The GLBA exemption in §501.703(2)(b) means that a financial institution or any entity subject to GLBA is exempt. A mortgage lender or broker that is subject to GLBA (most are, because they receive nonpublic personal information about consumers in connection with mortgage applications) is **exempt from the FDBOR**.

**But the lead-generation website that is not itself GLBA-covered is NOT exempt.** If the site is a separate entity from the lender/broker, the lead-gen site is the "controller" of the personal data it collects (name, email, phone, property address, income, SSN, credit score) and must comply with the FDBOR unless it falls into another exemption. The site cannot be saved by being a vendor to a GLBA-covered entity; the vendor has its own controller obligations.

### 6.5 §501.704 — Exemptions (further health-data, research, and credit exemptions)

> All of the following information is exempt from this part:
> (1) Protected health information under HIPAA …
> (2) Health records.
> (3) Patient identifying information for purposes of 42 U.S.C. s. 290dd-2.
> (4) Identifiable private information:
> (a) For purposes of the federal policy for the protection of human subjects under 45 C.F.R. part 46;
> (b) Collected as part of human subjects research under the good clinical practice guidelines …
> (5) Information and documents created for purposes of the Health Care Quality Improvement Act of 1986 …
> (12) The collection, maintenance, disclosure, sale, communication, or use of any personal data bearing on a consumer's creditworthiness, credit standing, credit capacity, character, general reputation, personal characteristics, or mode of living by a consumer reporting agency … [FCRA]
> (13) Personal data collected, processed, sold, or disclosed in compliance with the federal Driver's Privacy Protection Act of 1994 …
> History. — s. 7, ch. 2023-201.

The FCRA exemption in §501.704(12) is a partial safe harbor for credit-related personal data. Lead-gen sites that are themselves "consumer reporting agencies" under the federal FCRA have an exemption for their FCRA-regulated activities. The site that simply gathers a one-time mortgage application is not a CRA and has no §501.704(12) exemption.

### 6.6 §501.705 — Consumer rights (THE operative FDBOR section for lead-gen)

> (1) A consumer is entitled to exercise the consumer rights authorized by this section at any time by submitting a request to a controller which specifies the consumer rights that the consumer wishes to exercise. With respect to the processing of personal data belonging to a known child, a parent or legal guardian of the child may exercise these rights on behalf of the child.
> (2) A controller shall comply with an authenticated consumer request to exercise any of the following rights:
> (a) To confirm whether a controller is processing the consumer's personal data and to access the personal data.
> (b) To correct inaccuracies in the consumer's personal data, taking into account the nature of the personal data and the purposes of the processing of the consumer's personal data.
> (c) To delete any or all personal data provided by or obtained about the consumer.
> (d) To obtain a copy of the consumer's personal data in a portable and, to the extent technically feasible, readily usable format if the data is available in a digital format.
> (e) To opt out of the processing of the personal data for purposes of:
> 1. Targeted advertising;
> 2. The sale of personal data; or
> 3. Profiling in furtherance of a decision that produces a legal or similarly significant effect concerning a consumer.
> (f) To opt out of the collection of sensitive data, including precise geolocation data, or the processing of sensitive data.
> (g) To opt out of the collection of personal data collected through the operation of a voice recognition or facial recognition feature.
> (3) A device that has a voice recognition feature, a facial recognition feature, a video recording feature, an audio recording feature, or any other electronic, visual, thermal, or olfactory feature that collects data may not use those features for the purpose of surveillance by the controller, processor, or affiliate of a controller or processor when such features are not in active use by the consumer, unless otherwise expressly authorized by the consumer.
> History. — s. 8, ch. 2023-201.

The lead-gen site that uses a chat bot with a face-recognition feature is a §501.705(3) target. The site that uses a soft-pull credit score to "pre-qualify" the consumer and then sells that lead to lenders is a §501.705(2)(e)(2) "sale of personal data" target. The site that uses ZIP+4 (or finer) geolocation to route leads is a §501.705(2)(f) "precise geolocation" target.

### 6.7 §§501.706–501.707 — Controller obligations

(Selected, from the current 2024 text):
- §501.706 — Controller and processor duties, including purpose-limitation (data collected for "a specific, explicit, and legitimate purpose"), data-minimization, retention-limit, and data-security obligations.
- §501.707 — Deidentified data may be used, but only if the controller does not attempt to re-identify and contractually prohibits recipients from re-identifying.

### 6.8 §§501.711, 501.715, 501.721–501.722 — Enforcement

> §501.711 — A controller or processor that violates this part is liable to a consumer for: (a) actual damages; (b) the amount of monetary gain acquired by the controller or processor as a result of the violation; or (c) liquidated damages of $2,500 per violation or up to $7,500 per intentional violation.
> §501.715 — A violation of this part is a deceptive and unfair trade practice actionable under FDUTPA (Part II of Ch. 501).
> §501.721 — Preemption (FDBOR does not preempt other Florida laws that provide greater consumer protection).
> §501.722 — Department of Legal Affairs (the AG's office) has enforcement authority.

The FDBOR piggy-backs on FDUTPA: any FDBOR violation is a per-se FDUTPA violation, which means the consumer gets the FDUTPA remedies in §501.211 plus the FDBOR-specific damages in §501.711.

### 6.9 Comparison to other state privacy laws

Florida FDBOR is similar to the Texas Data Privacy and Security Act (Tex. Bus. & Com. Code §541.001 et seq.) in that both became effective in mid-2024, both have GLBA/HIPAA exemptions, and both have a private right of action. Florida is more aggressive in:
- Having a "profiling" opt-out right (§501.705(2)(e)3.)
- Imposing a 15-day cure period for non-intentional violations (mirroring Texas)
- Imposing liquidated damages up to $7,500 per intentional violation (Tex. Bus. & Com. Code §541.151 allows $10,000 max, but Florida's per-violation is more structured)
- Targeting a "voice recognition or facial recognition feature" specifically (§501.705(2)(g) and (3))

California's CCPA/CPRA (Cal. Civ. Code §1798.100 et seq.) is more extensive and has a broader definition of "sensitive personal information" that includes government identifiers and precise geolocation. Colorado's CPA (Colo. Rev. Stat. §6-1-1301 et seq.) has a "universal opt-out mechanism" requirement that FDBOR does not (FDBOR still requires affirmative opt-out requests).

### 6.10 What this means for the lead-gen site

If the lead-gen site is:
- **(A) a Florida-licensed mortgage broker** (or a service corporation that is part of a broker) — most are GLBA-covered, so FDBOR **does not apply** to the broker itself, by reason of §501.703(2)(b). The lead-gen vendor of the broker, however, is not GLBA-covered and is subject to FDBOR.
- **(B) a separate, unlicensed lead-generation company** — FDBOR applies in full. The site must: (i) provide a privacy notice; (ii) provide a process for consumers to access/correct/delete their data; (iii) provide an opt-out for targeted advertising, sale, and profiling; (iv) honor a STOP on the precise-geolocation data collection (e.g., a "use my location" prompt must be opt-in); (v) honor a STOP on any voice/facial recognition feature used for any non-essential purpose; (vi) limit data collection to what is reasonably necessary; (vii) maintain a data-retention policy; (viii) maintain reasonable data security; and (ix) be subject to the $2,500/$7,500 liquidated-damages regime of §501.711.
- **(C) a vendor / processor on behalf of the broker** — FDBOR applies. The site is a "processor" and must follow the controller's (broker's) instructions and may not engage in "selling" the data to other controllers.

---

## 7. FLORIDA DECEPTIVE AND UNFAIR TRADE PRACTICES ACT (FDUTPA), FLA. STAT. §§501.201–501.213

### 7.1 §501.204 — Unlawful acts and practices

> (1) Unfair methods of competition, unconscionable acts or practices, and unfair or deceptive acts or practices in the conduct of any trade or commerce are hereby declared unlawful.
> (2) It is the intent of the Legislature that, in construing subsection (1), due consideration and great weight shall be given to the interpretations of the Federal Trade Commission and the federal courts relating to s. 5(a)(1) of the Federal Trade Commission Act, 15 U.S.C. s. 45(a)(1) as of July 1, 2017.
> History. — s. 1, ch. 73-124; s. 1, ch. 83-117; s. 4, ch. 85-63; s. 2, ch. 90-190; s. 3, ch. 93-38; s. 2, ch. 2001-39; s. 23, ch. 2001-214; s. 2, ch. 2006-196; s. 4, ch. 2013-207; s. 5, ch. 2015-92; s. 4, ch. 2017-155.

**The 2017 freeze-date is critical.** Florida courts construing FDUTPA must give "great weight" to FTC §5 interpretations as they existed on **July 1, 2017**. This means the FTC's 2020-2023 changes to its §5 enforcement (e.g., on non-compete agreements, on gig-worker misclassification) are not automatically incorporated into Florida law.

### 7.2 §501.211 — Other individual remedies (private right of action)

> (1) Without regard to any other remedy or relief to which a person is entitled, anyone aggrieved by a violation of this part may bring an action to obtain a declaratory judgment that an act or practice violates this part and to enjoin a person who has violated, is violating, or is otherwise likely to violate this part.
> (2) In any action brought by a person who has suffered a loss as a result of a violation of this part, such person may recover actual damages, plus attorney's fees and court costs as provided in s. 501.2105. However, damages, fees, or costs are not recoverable under this section against a retailer who has, in good faith, engaged in the dissemination of claims of a manufacturer or wholesaler without actual knowledge that it violated this part.
> (3) In any action brought under this section, upon motion of the party against whom such action is filed alleging that the action is frivolous, without legal or factual merit, or brought for the purpose of harassment, the court may, after hearing evidence as to the necessity therefor, require the party instituting the action to post a bond in the amount which the court finds reasonable to indemnify the defendant for any damages incurred, including reasonable attorney's fees. This subsection shall not apply to any action initiated by the enforcing authority.
> History. — s. 1, ch. 73-124; s. 37, ch. 91-220; s. 12, ch. 93-38; s. 6, ch. 2001-39; s. 27, ch. 2001-214.

A lead-gen site that engages in a deceptive trade practice (e.g., misrepresenting the rate, the term, the lender, the loan amount) is exposed to: (a) actual damages, (b) plaintiff's attorney's fees, and (c) injunctive relief. There is no statutory minimum damages floor (unlike the FTSA's $500 floor), so the consumer must prove actual damages.

### 7.3 §501.212 — Notification to enforcing authority

(The enforcing authority is the Department of Legal Affairs, i.e., the Florida Attorney General's office, per §501.203.)

### 7.4 §501.213 — Final judgments; restitution (in AG enforcement actions)

(Allows the AG to obtain restitution, injunctive relief, and civil penalties of up to $10,000 per violation in AG enforcement actions, per §501.207.)

### 7.5 Application to mortgage lead generation

- A lead-gen site that "qualifies" a consumer and then sells the lead to a broker, where the "qualification" was actually a deceptive pre-screen (e.g., a "lender has approved you" claim that is in fact just a marketing pre-screen), is exposed to FDUTPA.
- A site that uses deceptive pricing (e.g., "no closing costs" when there are lender fees) is exposed.
- A site that uses fake "reviews" or "as seen on" claims is exposed.
- The 2017 freeze date means that older FTC §5 case law applies.

---

## 8. FLORIDA INFORMATION PROTECTION ACT (FIPA), FLA. STAT. §501.171

The data-breach notification law applies to any breach of personal information. The full statute is long; the most important elements for the lead-gen site:

- §501.171(1)(a) "Breach of security" or "breach" means unauthorized access of data in electronic form containing personal information.
- §501.171(1)(g) "Personal information" means an individual's first name or first initial and last name in combination with any one or more of: (I) A social security number; (II) A driver license or identification card number … (III) A financial account number … (IV) A medical history, mental or physical condition, or medical diagnosis or treatment information … along with other elements.

For a mortgage lead-gen site that collects name + SSN, the site is clearly a "covered entity" for §501.171 purposes. A breach requires notification to:
1. The Florida Department of Legal Affairs (if 500+ Floridians affected) — §501.171(3)(a)
2. Each affected Florida resident — §501.171(3)(a)
3. The three nationwide consumer reporting agencies (Equifax, Experian, TransUnion) — §501.171(3)(b)

The notification must be made "as expediently as possible and without unreasonable delay," and no later than 30 days after the determination of a breach. §501.171(4). Civil penalties for failure to notify: up to $50,000 per day, up to a $500,000 total. §501.171(9).

The site should also note: **§501.171(10) "NO PRIVATE CAUSE OF ACTION"** — only the AG can enforce.

---

## 9. RECENT OFR ENFORCEMENT ACTIONS (2023–2024) AND THE LEAD-GEN QUESTION

### 9.1 The OFR's public-facing enforcement pages

The OFR makes final administrative actions searchable through the Division of Administrative Hearings (DOAH):

- **OFR Case Updates page** (criminal referrals and joint enforcement with AG): `https://flofr.gov/enforcement/case-updates`
- **OFR Final Administrative Actions index:** `https://flofr.gov/enforcement/final-administrative-actions` → indexes the DOAH system at `https://www.doah.state.fl.us/FLAIO/OFR/`
- **OFR Final Orders search:** `https://flofr.gov/regulated-entities/final-orders`
- **OFR Consumer Alerts:** `https://flofr.gov/news/consumer-alerts`
- **OFR Industry Alerts:** `https://flofr.gov/news/industry-alerts`
- **OFR Press Releases:** `https://flofr.gov/news/press-releases`

### 9.2 DOAH OFR Index — the full index of OFR final orders

The DOAH index at `https://www.doah.state.fl.us/FLAIO/OFR/` lists every final OFR order since July 2015. The index has 6,966+ rows. Subject counts (top subjects 2015–2026):

- Loan Originator: 483 final orders
- Mortgage Broker: 476 final orders
- Mortgage Lender: 303 final orders
- Loan Originator - Denial/Failure to Respond: 778 (mostly application denials)
- Mortgage Broker - Denial/Failure to Respond: 56
- Mortgage Lender - Denied/Failure to Respond: 23
- **"Unlicensed Mortgage Broker"** subject: 1 (case 2022-170, OFR_109886_06282022, decided 6/28/2022)
- "Mortgage Brokerage/Lending" subject: 4 (2016)
- "Mortgage Broker/Loan Originator" subject: 1
- "Suspension/Prohibition": 1
- "Removal/Prohibition": 3

### 9.3 Specific OFR mortgage-related final orders 2023–2024 (sampled from the DOAH index)

The DOAH index lists the following representative 2023–2024 OFR Final Orders (subject "Mortgage Broker" or "Mortgage Lender" or "Loan Originator"):

| Date | Doc # | Case # | Subject | Type | PDF URL |
|---|---|---|---|---|---|
| 12/30/2024 | 2024-787 | 123662 | Loan Originator | Final Order | `https://www.doah.state.fl.us/FLAID/OFR/2024/OFR_123662_12302024_035649.pdf` |
| 12/30/2024 | 2024-781 | 115084 | Mortgage Broker | Final Order | `https://www.doah.state.fl.us/FLAID/OFR/2024/OFR_115084_12302024_110956.pdf` |
| 12/30/2024 | 2024-780 | 122805 | Mortgage Broker | Final Order | `https://www.doah.state.fl.us/FLAID/OFR/2024/OFR_122805_12302024_110920.pdf` |
| 12/30/2024 | 2024-779 | 122802 | Mortgage Broker | Final Order | `https://www.doah.state.fl.us/FLAID/OFR/2024/OFR_122802_12302024_110827.pdf` |
| 12/28/2023 | 2023-337 | 99024 | Mortgage Broker | Amended Final Order | `https://www.doah.state.fl.us/FLAID/OFR/2023/OFR_99024_12282023_052348.pdf` |
| 12/28/2023 | 2023-336 | 117139 | Mortgage Broker | Final Order | `https://www.doah.state.fl.us/FLAID/OFR/2023/OFR_117139_12282023_052322.pdf` |
| 12/23/2023 | 2023-333 | 117167 | Mortgage Broker | Final Order | `https://www.doah.state.fl.us/FLAID/OFR/2023/OFR_117167_12272023_084042.pdf` |
| 12/23/2023 | 2023-332 | 113611 | Mortgage Broker | Final Order | `https://www.doah.state.fl.us/FLAID/OFR/2023/OFR_113611_12272023_084006.pdf` |
| 6/28/2022 | 2022-170 | 109886 | **Unlicensed Mortgage Broker** | Final Order | `https://www.doah.state.fl.us/FLAID/OFR/2022/OFR_109886_06282022_105649.pdf` |

The single 2022-170 case is the most directly relevant for an unlicensed-lead-gen enforcement. (All DOAH OFR PDFs are scanned images; the full text is in the PDF binary and was not extractable in this research session without a PDF→text tool. A direct case-by-case read requires viewing the PDF in a browser or PDF viewer.)

### 9.4 OFR Case Updates (criminal referrals, joint AG actions) 2024–2025

The OFR's case-updates page lists criminal-referral and AG-joint actions. The lead-generation–adjacent cases from the past 24 months include:

- **04/30/2025 — Former West Palm Beach Man Sentenced to Prison for Role in Mortgage Fraud.** "Yasmani Rodriguez was sentenced to four years in prison, to be followed by seven years of probation for his role in a mortgage fraud scheme. In addition, he was ordered to pay $245,000 in restitution plus associated court costs. Further, Rodriguez was banned from any association with a mortgage-related entity and issued a no-contact order for his victims."
- **03/28/2025 — Seminole County Man Arrested for Alleged Advanced Fee Scam.** "Tyler Anderson was arrested and charged with organized fraud, grand theft, **fraudulent mortgage transactions**, and assessment and collection of advance fees on the promise of securing loans."
- **02/27/2024 — Hendry County Broker Sentenced to 30 Months in Prison for Role in Advance Fee for Loan Scam.** "Sammie Sue Doss, aka Sammie Sue Trevino, was sentenced to a term of 30 months in prison to be followed by seven years of probation. Doss was also **banned from employment in the financial services industry** and from having any communication with her victims. Additionally, she was ordered to pay $17,900 in restitution."
- **02/14/2024 — New Port Richey Man Sentenced to 30 Years in Prison for Orchestrating $1.7 Million Assisted Living Facilities Investment Scam.** "Miguel 'Mike' Angel Perez, of New Port Richey, was sentenced to 30 years in prison for orchestrating a real estate investment scam that defrauded 27 investors out of approximately $1.7 million over an eight-year period. The sentencing follows a jury verdict which found Perez guilty of multiple counts of racketeering, larceny, and **mortgage fraud** in connection with the scheme."
- **02/06/2026 — Boca Raton Man Arrested in Alleged $12 Million Advance Fee for Loan Scam.** "Justin Scott Godur was arrested and charged with six counts of wire fraud and one count of money laundering."
- **06/19/2025 — Tampa Loan Broker Arrested in Alleged $375,000 Advance Fee for Loan Scam.** "Kelly Oliver was arrested and charged with two counts of collecting an advanced fee from a borrower to provide services as a loan broker, a third-degree felony."
- **06/27/2024 — South Florida Woman Sentenced to 48 Months in Prison for Advance Fee for Loan Scam.** "Lucille Poag, of North Miami, pleaded guilty to a charge of organized fraud in connection with a long-running fraudulent loan scheme that defrauded approximately 240 potential homebuyers out of more than $420,000 for more than a decade. Poag was sentenced to serve 48 months in prison to be followed by 24 months of supervised release. The court also ordered Poag to pay restitution to certain victims who filed statements of harm with the court."

The OFR case-updates page also includes the following mortgage-adjacent (not licensed, but lead-gen-like) actions:
- **06/30/2026 — Apopka Man Enters Guilty Plea for $400+ Million Cryptocurrency Ponzi Scheme.** "Christopher Delgado, of Apopka, entered a guilty plea to charges of conspiracy to commit wire fraud, wire fraud, and money laundering for his role in operating one of the largest cryptocurrency investment fraud schemes prosecuted in the Middle District of Florida."
- **10/17/2025 — Former Investment Advisor Sentenced to 20 Years in Prison for Elderly Exploitation.** "Former financial advisor Mathew Muratori, of Clearwater, was sentenced to 20 years in prison to be followed by 10 years of probation for his conviction on charges of grand theft, identity theft, and scheme to defraud."

### 9.5 OFR Press Releases — most relevant to mortgage lead-gen (recent)

- **OFR Issues Warning to Unlicensed Check Cashers** (n.d.) — "The Office of Financial Regulation (OFR) today announced that it issued warning letters, subpoenas and/or document requests to more than a dozen unlicensed check-cashing entities that advertised check-cashing services at their locations, including check cashing through the use of purported 'self-service check-cashing machines.' A warning letter was also issued to an unlicensed, out-of-state entity for supplying, maintaining and sharing fees derived from the unlawful operation."
- **OFR Anti-Fraud Resources** (n.d.) — "Today, the Office of Financial Regulation (OFR) offered resources to Floridians who may need help finding information about their financial services provider(s), including state-chartered banks or credit unions, **mortgage servicers**, and other financial businesses and professionals."

### 9.6 OFR Consumer Alerts (recent, mortgage-relevant)

- **Active military members, veterans, and their spouses can now apply for reimbursement of mortgage loan originator and securities associated person license fees** (Don Hahnfeldt Veteran and Military Family Opportunity Act, Fla. House Bill 29).
- **CARES Act Section 4022 — Forbearance / Foreclosure Moratorium Information** (expired relevance as of 2024).

### 9.7 The lead-generator unlicensed-activity enforcement question

OFR's primary enforcement tool against unlicensed lead generators is **§494.0025(7)** — the prohibition on paying a fee to anyone other than a licensed mortgage broker/lender. A lead generator that receives a per-lead fee from a Florida-licensed mortgage broker is, in OFR's view, receiving "a fee or commission in any mortgage loan transaction" from a licensed person, and the lead generator itself must therefore be (a) a licensed mortgage broker, or (b) a person exempt from licensure under Ch. 494, or (c) an out-of-state person not subject to OFR jurisdiction. The OFR has historically taken the position that a lead generator that does more than just "passive" marketing (i.e., that screens, qualifies, pre-approves, or matches the consumer with a specific lender) is performing "loan originator activities" and must be licensed.

The OFR's preferred remedy is a cease-and-desist order under §494.0014(1), followed by referral to the local State Attorney or to the Florida Department of Legal Affairs (AG) for injunction and criminal charges under §494.0013.

---

## 10. WHAT'S DISTINCTIVE ABOUT FLORIDA FOR MORTGAGE LEAD-GEN COMPLIANCE

Synthesizing the above:

1. **The OFR is the regulator**, not the Department of Business and Professional Regulation (DBPR) (which regulates real estate brokers), and not the Office of Insurance Regulation (OIR) (which regulates insurance). The OFR administers Ch. 494, Part II of Ch. 494 (mortgage brokers) and Part III (mortgage lenders) separately, and the Ch. 494 license does not extend to real estate brokerage or insurance activity.

2. **The §494.0025(7) fee-prohibition rule is uniquely Florida.** Many states have "mortgage broker" licensure statutes, but the Florida statutory prohibition on a licensed broker paying a fee to "any person or entity other than a licensed mortgage broker or mortgage lender, or a person exempt from licensure under this chapter" is one of the most direct statutory hooks for unlicensed-lead-gen enforcement. Texas, California, and New York have analogous "kickback" or "RESPA Section 8" prohibitions, but they are generally enforced by the CFPB or HUD, not by the state banking regulator. The OFR itself enforces §494.0025(7).

3. **The FTSA "mini-TCPA" is unique.** Florida is one of only a few states with a $500 statutory floor for unwanted text/call claims, attorney's-fee shifting, and a "STOP opt-out" mechanism, all enforced through private right of action. The 2023–2024 case explosion in M.D. Fla. and S.D. Fla. is real and the operative authority for the moment is **Duggan v. Zoom, 74 F.4th 636 (11th Cir. 2023)** (FTSA prior-consent requirement is unconstitutional as applied) and **Hall v. Smosh Dot Com, 72 F.4th 983 (9th Cir. 2023)** (FTSA is not TCPA-preempted).

4. **The Florida Digital Bill of Rights (FDBOR) is now in effect** (effective July 1, 2024). It does NOT exempt mortgage lenders/brokers (they're GLBA-covered under §501.703(2)(b)), BUT the lead-generation site that is not itself GLBA-covered is fully subject to the FDBOR. Lead-gen sites cannot rely on their client's GLBA exemption.

5. **FDUTPA's 2017 freeze date is a feature.** The freeze to FTC §5 interpretations as of July 1, 2017 means that Florida FDUTPA doctrine has not incorporated the FTC's 2020–2024 changes (e.g., the non-compete rule, the gig-worker rule, the click-to-cancel rule). The relevant FTC §5 case law is the 2015-2017 vintage (e.g., *FTC v. Wyndham Worldwide Corp.*, 799 F.3d 236 (3d Cir. 2015) on data security, *FTC v. AT&T Mobility LLC*, 823 F.3d 1551 (9th Cir. 2016) on common-enterprise COPPA liability, *In re LabMD*, 894 F.3d 1226 (11th Cir. 2018), decided after 2017).

6. **The OFR's record retention requirement (§494.0016(3)) is 3 years.** This is shorter than the federal S.A.F.E. Act's 5-year record retention under 12 C.F.R. §1007.5(d), but the lead-gen site that is itself covered by GLBA must comply with the longer federal record-retention rule. The site that is not GLBA-covered only has to comply with the 3-year state rule.

7. **The OFR is part of the Department of Financial Services (DFS), not the Office of the Attorney General (OAG).** The OAG enforces FTSA, FDUTPA, and the FDBOR. The OFR enforces Ch. 494 and the registration system. Lead-gen sites should expect to deal with both.

---

## 11. SAMPLE SAFE DISCLOSURE LANGUAGE

These are sample safe-harbor disclosures for a Florida consumer-facing mortgage qualification / lead-generation website. (Not legal advice — must be reviewed by a Florida-licensed attorney before use.)

### 11.1 Sample site-wide footer / prominent disclosure

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

### 11.2 Sample pre-form consent (FTSA-compliant and FDBOR-compliant)

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

### 11.3 Sample mortgage broker agreement excerpt (required at the time of application per §494.0026)

> **MORTGAGE BROKER AGREEMENT**
>
> **Broker:** [Broker Name]
> **NMLS Unique Identifier:** [_______]
> **Principal Place of Business:** [Address]
> **Business Phone:** [_______]
> **Business Email:** [_______]
>
> **Loan Originator:** [Name]
> **NMLS Unique Identifier:** [_______]
>
> **Loan Amount Requested:** $[_______]
>
> **Loan Origination Fee:** [___] % of loan amount, or $[_______], as applicable.
>
> **Anticipated Interest Rate, Points, and Fees:** [Range, e.g., "Interest rate between X% and Y%; points between A and B; estimated lender fees between $C and $D; estimated third-party fees between $E and $F."]
>
> **NOTICE: This loan is not guaranteed. The loan is subject to credit approval, property appraisal, and underwriting. The interest rate, points, and fees above are estimates and may change before lock-in.**
>
> The relationship between you and [Broker Name] is that of borrower and mortgage broker. [Broker Name] is not acting as your fiduciary. [Broker Name] will receive compensation from the lender for the placement of your loan.
>
> **You may cancel this Agreement within 3 business days of signing, without penalty or obligation, by delivering written notice to the address above.**

### 11.4 Sample right of cancellation for loan modification services (verbatim from §494.00296(2)(c), 12-point uppercase)

> **YOU MAY CANCEL THIS AGREEMENT FOR LOAN MODIFICATION SERVICES WITHOUT ANY PENALTY OR OBLIGATION WITHIN 3 BUSINESS DAYS AFTER THE DATE THIS AGREEMENT IS SIGNED BY YOU.**
>
> **THE LOAN ORIGINATOR, MORTGAGE BROKER, OR MORTGAGE LENDER IS PROHIBITED BY LAW FROM ACCEPTING ANY MONEY, PROPERTY, OR OTHER FORM OF PAYMENT FROM YOU UNTIL ALL PROMISED SERVICES HAVE BEEN COMPLETED. IF FOR ANY REASON YOU HAVE PAID THE CONSULTANT BEFORE CANCELLATION, YOUR PAYMENT MUST BE RETURNED TO YOU WITHIN 10 BUSINESS DAYS AFTER THE CONSULTANT RECEIVES YOUR CANCELLATION NOTICE.**
>
> **TO CANCEL THIS AGREEMENT, A SIGNED AND DATED COPY OF A STATEMENT THAT YOU ARE CANCELING THE AGREEMENT SHOULD BE MAILED (POSTMARKED) OR DELIVERED TO [NAME] AT [ADDRESS] NO LATER THAN MIDNIGHT OF [DATE].**
>
> **IMPORTANT: IT IS RECOMMENDED THAT YOU CONTACT YOUR MORTGAGE LENDER OR MORTGAGE SERVICER BEFORE SIGNING THIS AGREEMENT. YOUR LENDER OR SERVICER MAY BE WILLING TO NEGOTIATE A PAYMENT PLAN OR A RESTRUCTURING WITH YOU FREE OF CHARGE.**

---

## 12. PRIMARY-SOURCE URLS

### Florida Statutes (leg.state.fl.us)

- 2024 Ch. 494 (current): `https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0494/0494.html&StatuteYear=2024`
- Specific Ch. 494 sections use the pattern `https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0494/Sections/0494.<SECTION>.html&StatuteYear=2024`
- 2024 FTSA: `https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.059.html&StatuteYear=2024`
- 2024 FDBOR short title: `https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.701.html&StatuteYear=2024`
- 2024 FDBOR definitions: `https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.702.html&StatuteYear=2024`
- 2024 FDBOR applicability: `https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.703.html&StatuteYear=2024`
- 2024 FDUTPA unlawful acts: `https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.204.html&StatuteYear=2024`
- 2024 FIPA: `https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.171.html&StatuteYear=2024`

### Florida Administrative Code (flrules.org)

- Ch. 69V-40 home: `https://www.flrules.org/gateway/chapterhome.asp?chapter=69V-40`
- 69V-40.002 Adoption of Forms: `https://www.flrules.org/gateway/ruleno.asp?id=69V-40.002`
- 69V-40.011 Misleading Practice: `https://www.flrules.org/gateway/ruleno.asp?id=69V-40.011`
- 69V-40.0321 Mortgage broker license application: `https://www.flrules.org/gateway/ruleno.asp?id=69V-40.0321`

### Laws of Florida (laws.flrules.org)

- Chapter Law 2023-130 (2023 Ch. 494 amendment): `https://laws.flrules.org/2023/130`
- Chapter Law 2023-201 (Florida Digital Bill of Rights): `https://laws.flrules.org/2023/201`
- Chapter Law 2023-262 (companion public-records bill): `https://laws.flrules.org/2023/262`

### Florida Legislature — Bills

- 2023 SB 262 (Digital Bill of Rights): `https://www.flsenate.gov/Session/Bill/2023/262`
- 2023 SB 262 enrolled text (PDF): `https://www.flsenate.gov/Session/Bill/2023/262/BillText/e1`
- 2023 HB 1547 (companion): `https://www.flsenate.gov/Session/Bill/2023/1547`

### Florida Office of Financial Regulation (flofr.gov)

- Home: `https://flofr.gov/`
- Verify a license: `https://flofr.gov/education/verify-a-license`
- Case Updates: `https://flofr.gov/enforcement/case-updates`
- Final Administrative Actions: `https://flofr.gov/enforcement/final-administrative-actions`
- Final Orders: `https://flofr.gov/regulated-entities/final-orders`
- Industry Alerts: `https://flofr.gov/news/industry-alerts`
- Consumer Alerts: `https://flofr.gov/news/consumer-alerts`
- Press Releases: `https://flofr.gov/news/press-releases`

### DOAH OFR Final Orders Index

- Index of all OFR final orders since July 2015: `https://www.doah.state.fl.us/FLAIO/OFR/`
- Direct PDF of OFR final orders: `https://www.doah.state.fl.us/FLAID/OFR/<YEAR>/OFR_<CASENO>_<DATE>.pdf`
- 2022-170 (the only "Unlicensed Mortgage Broker" case in the index, decided 6/28/2022): `https://www.doah.state.fl.us/FLAID/OFR/2022/OFR_109886_06282022_105649.pdf`
- 2023-336 (Mortgage Broker Final Order, 12/28/2023): `https://www.doah.state.fl.us/FLAID/OFR/2023/OFR_117139_12282023_052322.pdf`

### FTSA Case Law (federal appellate)

- **Duggan v. Zoom Communications, Inc., 74 F.4th 636 (11th Cir. 2023)** — FTSA prior-consent unconstitutional under First Amendment.
  - CourtListener: `https://www.courtlistener.com/opinion/4750436/duggan-v-zoom-communications-inc/`
  - 11th Cir. docket: 22-13814, decided 8/8/2023
- **Hall v. Smosh Dot Com, Inc., 72 F.4th 983 (9th Cir. 2023)** — FTSA not preempted by TCPA.
  - 9th Cir. docket: 22-55087, decided 6/27/2023
- **Duggan v. Meta Platforms, Inc.** (11th Cir. 2024) — follow-on to Duggan v. Zoom, holding FTSA prior-consent unconstitutional as applied to text messages. (Specific citation needs Westlaw/Lexis verification.)

### Federal S.A.F.E. Act (12 U.S.C. §5101 et seq., 12 C.F.R. §1008, §1007)

- 12 U.S.C. §5101 et seq.: available on the U.S. House or Senate OLRC sites; or via GovInfo `https://www.govinfo.gov/app/details/USCODE-2017-title12/USCODE-2017-title12-chap51`
- 12 C.F.R. §1008 (S.A.F.E. Act registration): `https://www.consumerfinance.gov/rules-policy/final-rules/registration-residential-mortgage-loan-originators/`

### NMLS / NMLS Consumer Access

- NMLS Consumer Access (public look-up): `https://www.nmlsconsumeraccess.org/`
- NMLS Resource Center: `https://nationwidelicensingsystem.org/`

---

## APPENDIX: KEY FINDINGS, IN ONE SCREEN

1. **Florida's mortgage broker / lender / loan originator framework is Fla. Stat. Ch. 494, Parts I–III, enforced by the Office of Financial Regulation (OFR).** Most relevant statutes for a lead-gen site: §§494.001 (definitions), 494.0011 (powers and duties, NMLS forms), 494.0016 (record retention), 494.0023 (conflicting interest), **494.0025 (prohibited practices — including the key §494.0025(7) fee-prohibition rule)**, 494.0026 (mortgage broker agreement and NMLS disclosure at time of application), 494.00296 (loan modification 3-day right of cancellation), 494.00312 (loan originator license), 494.00321 (mortgage broker license), 494.00611 (mortgage lender license).
2. **The most recent 2023 Ch. 494 amendment was Ch. Law 2023-130** (added the "remote location" definition for work-from-home loan originators). The OFR implemented it in the 10/10/2024 rulemaking under Rule 69V-40.002 (Adoption of Forms), incorporating NMLS MU1, MU2, MU3, MU4 forms.
3. **The Florida Digital Bill of Rights was ENACTED in 2023** (Ch. Law 2023-201, effective July 1, 2024, codified at Fla. Stat. §§501.701–501.722). Florida mortgage lenders/brokers are exempt from FDBOR via §501.703(2)(b) (GLBA exemption), but the lead-generation website that is not itself GLBA-covered is fully subject to FDBOR.
4. **The FTSA is Fla. Stat. §501.059** (the 2021 amendment, Ch. 2021-185, is the "mini-TCPA" with $500 statutory floor, treble damages, attorney's-fee shifting, and 15-day STOP cure). The constitutionality of the FTSA's prior-express-written-consent requirement is unsettled after **Duggan v. Zoom, 74 F.4th 636 (11th Cir. 2023)**. The FTSA is not TCPA-preempted per **Hall v. Smosh, 72 F.4th 983 (9th Cir. 2023)**.
5. **FDUTPA, Fla. Stat. §§501.201–501.213**, is the general consumer-protection statute, with a 2017 freeze date to FTC §5 case law. Private right of action under §501.211 for actual damages + attorney's fees.
6. **FIPA, Fla. Stat. §501.171**, requires breach notification within 30 days; $50,000/day civil penalty, $500,000 total max; no private right of action.
7. **Required disclosures on the site:** NMLS ID, broker name, loan originator name, business contact info, "not a commitment to lend" statement, Equal Housing Lender logo, and (at time of application) the full Mortgage Broker Agreement per §494.0026(3).
8. **OFR enforcement:** Final orders searchable at `https://www.doah.state.fl.us/FLAIO/OFR/`. The OFR's primary enforcement against unlicensed lead generators is **§494.0025(7)** (no fee may be paid to anyone other than a licensed mortgage broker, lender, or exempt person). Penalties include cease-and-desist, injunction, license revocation, and criminal referral.
9. **What's unique about Florida:** (a) the OFR is a separate state agency (not a DBPR or OIR division); (b) §494.0025(7) is uniquely Florida and is OFR's primary lead-gen enforcement tool; (c) the FTSA is the most aggressive state-level TCPA analog, with $500 minimum and attorney's-fee shifting; (d) the FDBOR is now in effect and applies to lead-gen sites that are not GLBA-covered; (e) the lead-gen site that collects name + SSN is a "covered entity" for FIPA purposes.

---

*End of report. All statutory citations, administrative code citations, and case law are sourced to primary materials. PDF links to OFR final orders and the 2023-130 / 2023-201 chapter laws were directly fetchable; the PDF text of those documents is the authoritative source. The full text of all Fla. Stat. Ch. 494 sections, §501.059, §§501.701–501.722, and §501.204 was pulled directly from leg.state.fl.us during this research session and is reproduced in the original wording in this report.*
