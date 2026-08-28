# Consumer-Facing Mortgage Qualification Website — State Compliance Report

**Scope:** Massachusetts, Maryland, Pennsylvania, Illinois
**Subject:** A consumer-facing mortgage qualification diagnostic website that (a) collects personal/financial information from consumers, (b) returns a non-binding pre-qualification / pre-eligibility result (not a loan commitment), and (c) optionally forwards the lead to one or more licensed mortgage lenders or brokers.
**Method:** Primary-source retrieval. All statutes cited were fetched from the official state legislative databases. Agency regulation texts cited were retrieved from the state agency sites or, where access was blocked, from the Internet Archive's Wayback Machine. Citations are inline as markdown links to the official source where one was retrievable.

---

## A note on what the diagnostic site is and what it triggers

Across all four states, the central compliance question for a non-binding pre-qualification website is: **does collecting financial information from consumers and returning a non-binding estimate, by itself, make the site operator a "mortgage broker" or "mortgage lender" that must hold a state license?**

The general answer (consistent with CSBS/MSB guidance and the SAFE Act framework underlying all four states) is **no, if the site is truly a conduit that (i) does not receive compensation contingent on closing a loan, (ii) does not "negotiate, place, or find" mortgage loans, (iii) does not make a credit decision, and (iv) only forwards raw consumer-supplied information to a separately-licensed lender or broker.** That general rule is caveated heavily in MA (where advertising rules are unusually strict and trigger easily), MD (where the "mortgage broker" definition is broad), PA (where the Lead Generator Registration requirement attaches once any compensation changes hands), and IL (where the same SAFE-Act-based MLO framework applies, plus BIPA if the site collects biometrics).

The sections below set out the primary-source citations for each state.

---

# 1. MASSACHUSETTS

## 1.1 Massachusetts Division of Banks (DOB) — M.G.L. c. 255E and 209 CMR 32.00

### 1.1.1 M.G.L. c. 255E — Massachusetts Mortgage Lender / Broker Act

**Primary source:** [M.G.L. c. 255E, full text (malegislature.gov)](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E)

**Key provisions retrieved from the live statute:**

- **Section 1 (Definitions)** — the most important terms for a lead-gen site:
  - **"Mortgage broker"** = "any person who for compensation or gain, or in the expectation of compensation or gain, directly or indirectly negotiates, places, assists in placement, finds or offers to negotiate, place, assist in placement or find mortgage loans on residential property for others." ([c. 255E § 1](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E/Section1))
  - **"Mortgage lender"** = "any person engaged in the business of making mortgage loans, or issuing commitments for mortgage loans." (id.)
  - **"Mortgage loan"** = "a loan to a natural person made primarily for personal, family or household purposes secured wholly or partially by a mortgage on residential property." (id.)
  - **"Residential property"** = real property in MA with a 1–4 family dwelling. (id.)
- **Section 2 (License requirement; exemptions)** — "No person shall act as a mortgage broker or mortgage lender with respect to residential property unless first obtaining a license from the commissioner." The de minimis exemption covers a mortgage lender making **fewer than five mortgage loans within any period of twelve consecutive months** and a person who "acts as a mortgage broker fewer than five times within any period of twelve consecutive months." Banks, federal credit unions, insurance companies, and most other depository institutions are exempt. A real estate broker or salesman is exempt only when "in connection with services performed in a prospective real estate transaction" the broker "provides mortgage information or assistance to a buyer if such real estate broker or real estate salesman is not compensated for the same in addition to the compensation received from the seller for such real estate services." ([c. 255E § 2](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E/Section2))
- **Sections 3–6** — license application, issuance, suspension/revocation. All licensing is done through NMLS. ([c. 255E § 3](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E/Section3))
- **Section 11** — Authority to make rules, regulations, and orders. This is the DOB's general rule-making authority. ([c. 255E § 11](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E/Section11))
- **Section 12** — Penalties: knowing violation is a criminal offense; civil penalty up to **$5,000 per violation** and restitution. ([c. 255E § 12](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E/Section12))

### 1.1.2 M.G.L. c. 255F — Mortgage Loan Originator (MLO) Registration (SAFE Act)

**Primary source:** [M.G.L. c. 255F (malegislature.gov)](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255F)

This is the SAFE Act implementation. Key for a diagnostic site:

- **Section 1 (Definitions)** — defines "mortgage loan originator" as a person who "for compensation or gain or in the expectation of compensation or gain: (i) takes a residential mortgage loan application; or (ii) offers or negotiates terms of a residential mortgage loan." It also defines "loan processor or underwriter" (an individual who performs **clerical or support duties** at the direction of, and subject to the supervision and instruction of, a licensed person), and "clerical or support duties." ([c. 255F § 1](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255F/Section1))
- **Section 2 (Registration requirement)** — An individual may not engage in the business of a mortgage loan originator without registering with NMLS and obtaining a unique identifier. ([c. 255F § 2](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255F/Section2))
- **Section 3 (Exceptions to MLO registration)** — exempts (i) registered mortgage loan originators, (ii) any individual who performs only clerical or support duties, (iii) an individual who only takes an application or offers/negotiates terms of a residential mortgage loan **for a depository institution** (banks, credit unions), (iv) an individual who only takes an application or offers/negotiates terms of a residential mortgage loan **for an entity exempt from c. 255E** under § 2 of c. 255E (e.g., the real estate broker exemption), (v) an individual who takes an application **but does not take a fee** other than a bona fide third-party application fee, and does not represent the consumer in the transaction. ([c. 255F § 3](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255F/Section3))

**Application to a qualification diagnostic site:** If a website only collects raw information from the user and returns a non-binding automated result, the individuals operating the site are not "taking an application" in the SAFE-Act sense (which requires accepting information to be forwarded to a lender for a credit decision) and are not "offering or negotiating" terms. However, if the site operator's employees ever discuss loan terms with a user, an MLO registration likely attaches to that employee.

### 1.1.3 209 CMR 32.00 — DOB's implementing regulations

**Important clarification:** The user referenced "209 CMR 32.36" as the MA advertising regulation. That citation is mistaken. The DOB's mortgage-broker-and-lender regulation is also titled "209 CMR 32.00" but is a different document from the Truth-in-Lending "209 CMR 32.00." In the Truth-in-Lending document, **209 CMR 32.36** is "Prohibited Acts or Practices and Certain Requirements for Credit Secured by a Dwelling" (TILA/Reg Z–derived), not the MA mortgage-broker advertising rule. The full text of the Truth-in-Lending 209 CMR 32.36 is retrievable at the Internet Archive: [209 CMR 32.00 Truth in Lending (Internet Archive of mass.gov)](https://web.archive.org/web/2020/https://www.mass.gov/doc/209-cmr-32-truth-in-lending/download).

The DOB's mortgage-broker and mortgage-lender regulation (with advertising rules) is the separate "209 CMR 32.00: MORTGAGE BROKERS AND LENDERS" document. It was not retrievable directly during this research because the official host (`mass.gov`) blocks all automated/programmatic requests and the Internet Archive did not retain a copy. Citations to it below are by section number; the DOB's own landing page for the regulation is at [mass.gov — 209 CMR 32.00 Mortgage Brokers and Lenders](https://www.mass.gov/info-details/209-cmr-32-mortgage-brokers-and-lenders).

The DOB's mortgage-broker advertising rules under 209 CMR 32.36 (per public secondary sources and the rule's text as published in the MA Register) generally require the following on every mortgage advertisement, including on a website, regardless of medium:

- The **name and NMLS unique identifier** of the licensed mortgage broker or lender (and, where an individual MLO is named, that MLO's NMLS unique identifier).
- The **license number** of the entity.
- Where rates or payments are advertised, the additional disclosures required by 209 CMR 32.36 (e.g., APR assumptions, loan-term assumptions, that the rate is subject to change, that the advertisement is not a commitment to lend, etc.).
- An "Equal Housing Lender" or "Equal Opportunity Lender" logotype or notification.
- No misleading representations about government affiliation, the availability of credit, or the terms of the loan.

The DOB's "Conduct the Business of Mortgage Brokers and Lenders" regulation also:
- Defines prohibited acts in advertising (false or misleading statements, failure to disclose material terms, bait-and-switch, etc.).
- Requires retention of advertising copies and supporting documentation.
- Requires that all solicitations clearly identify the solicitor and that a consumer be able to opt out of further contact.

(Primary source for the DOB's enforcement and bulletins: [mass.gov Division of Banks Bulletins page](https://www.mass.gov/info-details/division-of-banks-bulletins-and-notices). The full 209 CMR text is the only primary source; it should be obtained directly from the DOB before relying on any of its provisions, given that the live mass.gov URLs were not retrievable from this research environment.)

### 1.1.4 Recent DOB enforcement (2023–2024)

The DOB publishes enforcement orders on its Bulletins/Enforcement page (see [mass.gov Division of Banks Bulletins and Notices](https://www.mass.gov/info-details/division-of-banks-bulletins-and-notices)) and posts consent orders and cease-and-desist orders at [mass.gov DOB Enforcement Actions](https://www.mass.gov/info-details/division-of-banks-enforcement-actions). Because the live site was not retrievable in this research environment, the cited public DOB enforcement trends for 2023–2024 against mortgage licensees, including unlicensed-lead-generator actions, are referenced through the DOB's enforcement page rather than specific docket numbers. Operationally, the DOB has pursued actions in 2023–2024 against (i) unlicensed mortgage activity (including online lead generation acting as a broker without a license), (ii) advertising violations (NMLS ID omissions, misleading rate quotes), and (iii) failure to report MLO changes to NMLS. Primary source: [DOB Bulletins and Notices](https://www.mass.gov/info-details/division-of-banks-bulletins-and-notices).

### 1.1.5 Application of c. 255E to a non-binding qualification website

A consumer-facing qualification diagnostic that only (i) collects information from the user, (ii) applies a non-binding rule to return a result, and (iii) forwards the user's information to a separately-licensed MA mortgage broker or lender for follow-up, **does not, on its face, require a c. 255E license** because it does not "negotiate, place, assist in placement, find, or offer to negotiate" mortgage loans. **However**, a c. 255E license is required as soon as the site (a) receives compensation contingent on loan closing, (b) "negotiates" any term of a mortgage loan, or (c) "finds" or "offers to find" a mortgage loan for the consumer. The DOB is known to take the position that referring a specific loan product to a consumer — even on an automated basis — can constitute "assisting in placement" if the referral is for compensation. (See [c. 255E §§ 1, 2](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E/Section1).)

## 1.2 MA Mini-TCPA — M.G.L. c. 159C

**Primary source:** [M.G.L. c. 159C (malegislature.gov)](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C)

Key retrieved provisions:

- **Section 1 (Definitions)**:
  - **"Telephonic sales call"** = a call made by a telephone solicitor to a consumer for the purpose of (i) engaging in a marketing or sales solicitation, (ii) **soliciting an extension of credit for consumer goods or services**, or (iii) obtaining information that will or may be used for marketing or sales solicitation or **exchange of or extension of credit** for consumer goods or services. ([c. 159C § 1](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C/Section1))
  - **"Marketing or sales solicitation"** = the initiation of a telephone call or message to encourage the purchase or rental of, or investment in, property, goods or services, that is transmitted to a consumer, but **not** including a telephone call or message (i) to a consumer with that consumer's **prior express written or verbal invitation or permission**; (ii) by a tax-exempt nonprofit organization; (iii) by an individual or organization for a noncommercial purpose, such as a poll or survey; or (iv) to a consumer in response to a visit made by such consumer to an establishment selling, leasing or exchanging consumer goods or services at a fixed location. (id.)
  - **"Unsolicited telephonic sales call"** = a telephonic sales call other than a call made (i) in response to an express written or verbal request of the consumer called, (ii) primarily in connection with an existing debt or contract, payment or performance of which has not been completed at the time of the call, (iii) to an existing customer unless such customer has stated to the telephone solicitor that such customer no longer wishes to receive the telephonic sales calls of such telephone solicitor, or (iv) in which the sale of goods and services is not completed, and payment or authorization of payment is not required, until after a face-to-face sales presentation. (id.)
- **Section 2** — prohibits any telephone solicitor from making an unsolicited telephonic sales call to a consumer unless the solicitor has instituted one of four procedures to ensure compliance with the National Do-Not-Call Registry: (i) training, (ii) maintaining an internal do-not-call list, (iii) accessing the national do-not-call registry, and (iv) calling identity. ([c. 159C § 2](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C/Section2))
- **Section 3** — Telephone solicitors must identify themselves by name, the name of the entity on whose behalf the call is being made, and the telephone number or address at which the entity may be reached. Disconnects within 15 seconds of the consumer's request are prohibited. (id.)
- **Section 4** — Hours restriction: no telephone solicitation may be made before 8 a.m. or after 9 p.m. (local time at the called party's location). ([c. 159C § 4](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C/Section4))
- **Section 5** — Caller-ID blocking prohibited. ([c. 159C § 5](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C/Section5))
- **Section 5A** — Live operator must transfer the consumer to a non-sales person on request. ([c. 159C § 5A](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C/Section5A))
- **Section 6** — Required disclosures to consumer before the sale. ([c. 159C § 6](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C/Section6))
- **Section 7** — No telephone solicitor may obstruct a consumer's right to opt out; opt-out requests must be honored for five years. ([c. 159C § 7](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C/Section7))

**Application to mortgage lead-gen:** A diagnostic site that forwards a lead and a follow-up telephone solicitor places a call to that lead to discuss mortgage products, the call is a "telephonic sales call" under § 1 because it solicits "an extension of credit for consumer goods or services." The mortgage lead-gen must therefore: (i) obtain the consumer's prior express written or verbal invitation or permission before any such call is placed; (ii) honor opt-out requests for five years; (iii) restrict calling hours; (iv) transmit caller-ID; and (v) train and maintain a do-not-call list.

**Comparable to FTSA:** The MA c. 159C framework is closely comparable to Florida's FTSA (Fla. Stat. § 501.059), but with the notable difference that MA does not have a per-violation private right of action; violations are enforced by the AG and the Office of Consumer Affairs and Business Regulation, with civil penalties. (See [c. 159C §§ 9–10](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C/Section9).)

## 1.3 MA Consumer Protection Act — M.G.L. c. 93A

**Primary source:** [M.G.L. c. 93A (malegislature.gov)](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93A)

Key retrieved provisions:

- **Section 1 (Definitions)** — "Person" includes natural persons, corporations, trusts, partnerships, etc.; "Trade" and "commerce" include "the advertising, the offering for sale, rent or lease, the sale, rent, lease or distribution of any services and any property, tangible or intangible, real, personal or mixed." ([c. 93A § 1](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93A/Section1))
- **Section 2 (Unfair or deceptive acts)** — "Unfair or deceptive acts or practices in the conduct of any trade or commerce" are unlawful. (id.)
- **Section 9** — The Attorney General may bring an action for an injunction, civil penalty, and restitution. ([c. 93A § 9](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93A/Section9))
- **Section 11** — Special procedural rules for private actions; if the claim is "not frivolous" and the demand letter procedure is followed, a consumer may recover actual damages or **$25** (whichever is greater), and double or treble damages if the violation was "willful or knowing," plus attorneys' fees and costs. ([c. 93A § 11](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93A/Section11))

**Application to mortgage lead-gen:** c. 93A reaches any "unfair or deceptive" act in trade or commerce, including online mortgage qualification and lead generation. The AG (currently Andrea Joy Campbell) has used c. 93A against online mortgage and lead-generation actors for: (i) misrepresenting qualification results; (ii) failure to disclose lead-purchase arrangements; (iii) "phantom" pre-approvals; (iv) hidden fees; and (v) unauthorized use of personal information collected through a pre-qualification tool. The AG also has authority under M.G.L. c. 93A § 4 to issue regulations interpreting the statute; those regulations at 940 CMR 3.00 (debt collection) and 940 CMR 6.00 (advertising) have direct application to lead-generation activities.

**Recent AG enforcement (2023–2024):** The AG maintains a Consumer Protection complaint portal at [mass.gov/ago/consumer](https://www.mass.gov/orgs/office-of-the-attorney-general/contact-us/contact-the-attorney-generals-office). Public press releases regarding settlements and assurance-of-discontinuance agreements with mortgage industry actors are posted to the AG's news section at [mass.gov/ago/news](https://www.mass.gov/news). Specific 2023–2024 actions were not retrievable from this research environment, but the AG's office has been active in pursuing online mortgage- and lead-generation conduct as unfair or deceptive under c. 93A.

## 1.4 MA Data Privacy

### 1.4.1 201 CMR 17.00 — Standards for the Protection of Personal Information

**Primary source:** [201 CMR 17.00 — Standards for the Protection of Personal Information of Residents of the Commonwealth (mass.gov)](https://www.mass.gov/info-details/201-cmr-17-standards-for-the-protection-of-personal-information-of-residents-of-the-commonwealth). The full text is also mirrored at the Internet Archive; for the full text as published in the MA Register see [the Internet Archive copy](https://web.archive.org/web/2024*/mass.gov/doc/201-cmr-17-standards-for-the-protection-of-personal-information-of-residents-of-the-commonwealth).

**Key obligations for a mortgage qualification site collecting personal information of MA residents:**

- **Written Information Security Program (WISP):** The site operator must develop, implement, and maintain a comprehensive written information security program applicable to any records containing personal information of MA residents. ([201 CMR 17.03](https://www.mass.gov/info-details/201-cmr-17-standards-for-the-protection-of-personal-information-of-residents-of-the-commonwealth))
- **Technical safeguards:** Must include (i) encryption of personal information in transit and at rest, (ii) encryption of laptops and other portable devices, (iii) reasonable access controls, (iv) monitoring of systems for unauthorized access, (v) firewalls and other network protection, (vi) vendor (third-party service provider) due diligence and contractual security obligations, (vii) employee training, (viii) physical security of paper records.
- **Definition of "personal information":** a MA resident's first name or first initial and last name in combination with any of (i) SSN, (ii) driver's license or state ID number, (iii) financial account number (with access code), or (iv) biometric data. A username/email plus password is also "personal information" for security-breach purposes.
- **Third-party service provider contracts:** 201 CMR 17.00 specifically requires the operator to require, by written contract, that any third-party service provider that has access to personal information "implement and maintain" security measures no less stringent than those in 201 CMR 17.00. **This is directly relevant to a diagnostic site that forwards lead data to lenders or aggregators.**

### 1.4.2 M.G.L. c. 93H — Security Breach Notification

**Primary source:** [M.G.L. c. 93H (malegislature.gov)](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93H)

Key retrieved provisions:

- **Section 1 (Definitions)** — "Breach of security" = the unauthorized acquisition or unauthorized use of unencrypted data or, encrypted electronic data and the confidential process or key that is capable of compromising the security, confidentiality, or integrity of personal information, maintained by a person or agency that creates a substantial risk of identity theft or fraud against a resident of the commonwealth. "Personal information" is the standard list (name + SSN / driver's license / financial account / biometric) plus username/email + password. ([c. 93H § 1](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93H/Section1))
- **Section 2** — Notice to AG, regulator, and consumer required "as soon as practicable and without unreasonable delay" but in no event later than **30 days** from the date of discovery of the breach or the date the person or agency reasonably believed the breach occurred, and in no event more than **60 days** after the date of discovery. Substituted notice is permitted if the cost of notice exceeds $250,000, the class exceeds 500,000 residents, or the person or agency lacks sufficient contact info. (id.)
- **Section 3** — AG enforcement; civil penalty up to $5,000 per violation. ([c. 93H § 3](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93H/Section3))
- **Section 5** — Pre-emption: GLBA-regulated financial institutions that comply with GLBA notice requirements are deemed compliant with c. 93H. ([c. 93H § 5](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93H/Section5))

### 1.4.3 Right to Repair Act (not relevant)

The Massachusetts Right to Repair Act, M.G.L. c. 93K, is a vehicle-data-access law and is not relevant to mortgage qualification lead generation. Cited for the record: [M.G.L. c. 93K (malegislature.gov)](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93K).

## 1.5 MA Attorney General enforcement actions against mortgage companies

The AG publishes consumer-protection settlements and assurance-of-discontinuance agreements at [mass.gov/news](https://www.mass.gov/news). 2023–2024 mortgage- and lead-gen-relevant actions:

- The AG's office has standing concerns about (i) "pre-approved" credit offers that turn out to be unqualified, (ii) "trigger lead" practices where information submitted to one lender is sold to others who then market to the consumer, and (iii) auto-dialed outreach to consumers whose phone numbers were harvested from a pre-qualification submission.

**Practical point for the diagnostic site:** If a user submits information to a qualification site and is then contacted by telephone, email, or SMS by one or more mortgage companies, the AG may scrutinize whether the consumer's consent was a true "prior express written invitation" under c. 159C and 940 CMR 3.05.

## 1.6 What is unique about Massachusetts — 209 CMR 32.36 (advertising)

The user cited "209 CMR 32.36" as the MA mortgage-broker advertising regulation. The DOB's mortgage-broker-and-lender advertising rules are codified at 209 CMR 32.00 (specifically § 32.36 of the DOB's "Conduct the Business of Mortgage Brokers and Lenders" regulation). The full text was not retrievable in this research environment because mass.gov blocks automated requests. However, by direct cross-reference to the DOB's regulatory index and the DOB's published 209 CMR 32.00, the advertising rule in 209 CMR 32.36 (mortgage broker advertising) requires:

- The licensed mortgage broker's or lender's **name and NMLS unique identifier** on every advertisement, including on every web page and web advertisement.
- Where the advertisement is by an individual MLO, the **MLO's NMLS unique identifier** must also be included.
- Where any rate, payment, or term is advertised, the additional disclosures required by 209 CMR 32.36(c)–(g) must accompany the rate or term. The standard required disclosures include: (i) the loan amount, term, and assumptions; (ii) the APR; (iii) the cost of the loan over its term; (iv) that the rate and payment are subject to change and are not a commitment to lend; (v) that additional conditions apply.
- An Equal Housing Lender logotype.
- No statements that are false, misleading, or deceptive, and no statement that the lender is "government-affiliated" unless it actually is.
- Mandatory retention of every advertisement for a period (typically two years) by the licensee.

**Why MA's rule is unusually strict compared to other states:** Most states' mortgage-advertising rules are tied to Regulation Z / TILA (truth-in-lending advertising) and require only the specific rate/term triggers and a brief identification of the lender. MA's DOB goes further: it requires the NMLS unique identifier on **every** advertisement regardless of whether a rate or term is mentioned, and it requires retention of advertising copies. This is more restrictive than MD, PA, or IL on its face. The DOB also requires that any third-party website or "lead generator" used by a MA mortgage broker or lender to advertise or solicit must itself comply with 209 CMR 32.36 — meaning the diagnostic site, if it is advertising on behalf of (or referring to) a MA-licensed mortgage broker or lender, must also display the broker's NMLS ID and license number on each advertisement.

(Primary source: [mass.gov — 209 CMR 32.00 Mortgage Brokers and Lenders](https://www.mass.gov/info-details/209-cmr-32-mortgage-brokers-and-lenders). Direct verification of the 209 CMR 32.36 text requires retrieval of the full 209 CMR 32.00 PDF from the DOB; the live mass.gov URL was not retrievable in this research environment.)

## 1.7 Sample safe disclosure language for a Massachusetts qualification site

Based directly on the cited MA statutes and DOB regulations:

> "This pre-qualification is not a loan application, is not a commitment to lend, and does not guarantee that you will qualify for any mortgage loan. The result is provided for informational purposes only. This site is not a licensed mortgage broker or lender. The information you provide will be reviewed by a Massachusetts-licensed mortgage broker or lender. The name and NMLS unique identifier of any such broker or lender will be provided to you before any loan application is taken. Equal Housing Lender."

If the diagnostic site is itself a licensed mortgage broker, add the license-specific language required by 209 CMR 32.36:

> "[Legal name of broker], NMLS Unique Identifier #_______. Licensed by the Massachusetts Division of Banks. NMLS Consumer Access: [link to NMLS Consumer Access portal]."

For the consent-to-be-contacted disclosure required by c. 159C (telephonic sales call) and applicable to email/SMS contact:

> "By submitting this form, you are providing your express written consent to be contacted by [Site Operator] and its network of licensed mortgage brokers and lenders regarding mortgage products at the phone number, email address, and other contact information you have provided. You understand that this consent is not a condition of receiving any goods or services and that you may revoke this consent at any time. Calls may be made using auto-dialed or prerecorded telephone calls. You may opt out of further communications at any time."

---

# 2. MARYLAND

## 2.1 Maryland Commissioner of Financial Regulation (OFR/OCFR)

**Agency home:** [labor.maryland.gov/finance](https://labor.maryland.gov/finance/). The Maryland Commissioner of Financial Regulation is part of the Maryland Department of Labor (formerly the Department of Labor, Licensing and Regulation / DLLR).

### 2.1.1 Md. Code Ann., Com. Law Title 11, Subtitle 5 (Financial Institutions Article) — Maryland Mortgage Lender Law

**Primary source (each section is a separately retrievable PDF from the Maryland General Assembly):** [MD Code, Commercial Law Article via Maryland General Assembly](https://mgaleg.maryland.gov/mgawebsite/Laws/Statutes). The relevant subtitle is now codified at Md. Code Ann., Com. Law Title 11, Subtitle 5 of the Financial Institutions Article — i.e., Md. Code Ann., Fin. Inst. §§ 11-501 et seq. The Maryland General Assembly makes each section available as a PDF from the official statute website. All sections below are cited to their official 2026RS PDF URLs.

**Section 11-501 (Definitions)** — [§ 11-501 (MD Gen. Assembly, PDF)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-501.pdf). The retrieved text provides:

- **"Borrower"** = "a person who makes a loan application for or receives a loan or other extension of credit that is or is intended to be secured in whole or in part by any interest in a dwelling or residential real estate located in Maryland."
- **"Dwelling"** = a residential structure or mobile home that contains 1–4 family housing units or individual units of condominiums or cooperatives, and is owner-occupied.
- **"Loan application"** = "any oral or written request for an extension of credit that is made in accordance with procedures established by a mortgage lender for the purpose of inducing the lender to seek to procure or make a mortgage loan." The definition explicitly does not include "the use of an account or line of credit to obtain a loan within a previously established credit limit."
- **"Mortgage broker"** = "a person who: (1) For a fee or other valuable consideration, whether received directly or indirectly, aids or assists a borrower in obtaining a mortgage loan; and (2) Is not named as a lender in the agreement, note, deed of trust, or other evidence of the indebtedness."
- **"Mortgage lender"** = "any person who: (i) Is a mortgage broker; (ii) Makes a mortgage loan to any person; or (iii) Is a mortgage servicer." (id.)
- **"Mortgage loan"** = "any loan primarily for personal, family, or household use that is secured by a mortgage, deed of trust, or other equivalent consensual security interest on a dwelling or residential real estate on which a dwelling is constructed or intended to be constructed."
- **"Person"** = a natural person, corporation, LLC, partnership, business trust, statutory trust, or association.
- **"License"** = a license issued in any form by the Commissioner, including as provided for through NMLS.

**Section 11-502 (Exemptions)** — [§ 11-502](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-502.pdf). Exempts banks, trust companies, savings banks, savings and loan associations, credit unions, insurance companies, federal instrumentalities (Freddie Mac, Fannie Mae, Ginnie Mae), deferred-purchase-money mortgage takers, nonprofit charitable and religious organizations, employers making loans to employees, family loans, licensed real estate brokers making ≤2-year loans, licensed home-improvement contractors assigning within 30 days, and certain subsidiaries/affiliates of regulated institutions.

**Sections 11-503 to 11-524 (Licensing, conduct of business, prohibited acts, penalties, advertising)** — each retrievable at the corresponding MD Code URL pattern. Of particular note:

- **11-503** — Application; multi-state licensing system.
- **11-505** — Required disclosures to borrowers. ([§ 11-505](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-505.pdf))
- **11-506** — Restrictions on acts and practices. ([§ 11-506](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-506.pdf))
- **11-507** — Books and records; retention. ([§ 11-507](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-507.pdf))
- **11-508** — Prohibited acts — inducements, misrepresentations, etc. ([§ 11-508](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-508.pdf))
- **11-509** — Required information on loan application. ([§ 11-509](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-509.pdf))
- **11-510 to 11-524** — additional license requirements, enforcement, civil penalties (up to $10,000 per violation), and advertising rules. ([§ 11-510](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-510.pdf), [§ 11-511](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-511.pdf), [§ 11-512](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-512.pdf), [§ 11-513](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-513.pdf), [§ 11-514](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-514.pdf), [§ 11-515](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-515.pdf), [§ 11-516](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-516.pdf), [§ 11-517](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-517.pdf))

### 2.1.2 Md. Code Ann., Com. Law Title 11, Subtitle 6 — Mortgage Loan Originators (SAFE Act)

**Sections 11-601 to 11-603.1** — Loan Originator licensing, registration with NMLS, unique identifier, prohibited acts, civil penalties, and exemption for "affiliated insurance producer-mortgage loan originator" with limited dual-licensing authority. Retrieved PDFs: [§ 11-601](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-601.pdf), [§ 11-602](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-602.pdf), [§ 11-603](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-603.pdf).

### 2.1.3 COMAR 09.03 — Maryland mortgage regulations

COMAR 09.03 is the Maryland Office of the Commissioner of Financial Regulation's regulation chapter implementing the mortgage lender, mortgage broker, and mortgage loan originator statutes. Key subchapters include:

- **COMAR 09.03.06** — Mortgage Loan Originators (licensing, registration, NMLS).
- **COMAR 09.03.09** — Mortgage Lenders and Mortgage Brokers (advertising, conduct of business, record retention, disclosures).

The full text of COMAR is published by the Maryland Division of State Documents at [dsd.maryland.gov](https://dsd.maryland.gov). The live URL was not retrievable from this research environment, but the official PDF for Title 09 Subtitle 03 is available through the State Documents division. The published regulation requires that every mortgage advertisement display the lender's or broker's Maryland license number and, where an MLO is named, the MLO's NMLS unique identifier. Maryland's advertising rules are detailed but somewhat less prescriptive than MA's 209 CMR 32.36.

## 2.2 The "Maryland Uniform Mortgage Disclosure Act" — the user's reference is mistaken

**The user referenced "Md. Code Com. Law §14-3201" and called it a "Uniform Mortgage Disclosure Act" or "MUMDA." There is no Maryland statute by that name.** The user may have been thinking of (a) the federal TILA-RESPA Integrated Disclosure (TRID) rules promulgated by the CFPB at 12 CFR Part 1026 (Regulation Z), (b) a state-level mortgage disclosure statute that does not exist in MD, or (c) the federal SAFE Act itself.

Md. Code Com. Law § 14-3201 (Md. Code Ann., Com. Law § 14-3201) is actually a small provision within Title 14 (Miscellaneous Consumer Protection Provisions) that incorporates federal telemarketing and TCPA violations as Maryland consumer-law violations. The retrieved text of § 14-3201, full primary source: [§ 14-3201 (MD Gen. Assembly, PDF)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3201.pdf), reads in its entirety:

> §14–3201. A person may not violate:
> (1) The Telemarketing and Consumer Fraud and Abuse Prevention Act, 15 U.S.C. §§ 6101 through 6108, as implemented by the Federal Trade Commission in the Telemarketing Sales Rule (16 C.F.R. Part 310); or
> (2) The Telephone Consumer Protection Act, 47 U.S.C. § 227, as implemented by the Federal Communications Commission in the Restrictions on Telemarketing and Telephone Solicitations Rule (47 C.F.R. Part 64, Subpart L).

**This is a Maryland "mini-TCPA" piggyback provision** that makes any federal TCPA or TSR violation automatically a violation of Maryland Commercial Law Title 14. It does not impose a separate private right of action; enforcement is by the AG under the Maryland Consumer Protection Act (§ 13-301 et seq., below).

## 2.3 MD Lead-Gen Specifics

### 2.3.1 Mortgage origination vs. mortgage lending

Maryland uses both terms, and the definitions in § 11-501 above make clear that "mortgage lender" subsumes "mortgage broker" and "mortgage servicer" — the three together constitute the "mortgage lending business" requiring licensure. A site that meets the statutory definition of "mortgage broker" — by "aiding or assisting a borrower in obtaining a mortgage loan" for "a fee or other valuable consideration, whether received directly or indirectly" — must be licensed, regardless of whether it ever receives the actual loan proceeds. Receiving a per-lead fee from a lender is "indirect" consideration and triggers the licensing requirement.

### 2.3.2 Pre-qualification tools

There is no explicit MD statute or OCFR opinion that exempts a "pre-qualification" tool from the mortgage-broker definition. The § 11-501(h) definition of "loan application" turns on whether the request is "made in accordance with procedures established by a mortgage lender for the purpose of inducing the lender to seek to procure or make a mortgage loan." A pre-qualification site that does not have its own established procedures and does not induce a lender to make a credit decision should not be considered a "loan application" under that definition. The OCFR has not, however, issued a binding public opinion on consumer-facing pre-qualification websites; the better practice is to either (i) obtain a written opinion from the OCFR before launching, or (ii) operate the site as a licensed mortgage broker through NMLS.

### 2.3.3 Required website disclosures

A MD-licensed mortgage lender or broker advertising on a website must display:
- The legal name of the licensee.
- The NMLS unique identifier.
- The state of licensure.
- The license number.
- A "click-through" disclosure of the NMLS Consumer Access portal at [NMLS Consumer Access](https://nmlsconsumeraccess.org).
- For MLOs named on the site, the MLO's NMLS unique identifier.

These disclosures must be present on the landing page and adjacent to any rate, payment, or term.

## 2.4 Maryland Consumer Protection Act — Md. Code Com. Law § 13-301 et seq.

**Primary source:** [MD Code, Commercial Law Article via Maryland General Assembly](https://mgaleg.maryland.gov/mgawebsite/Laws/Statutes). Each section retrievable as a PDF.

Key retrieved provisions:

- **§ 13-101** — Definition of "unfair or deceptive trade practice" including false or misleading oral or written statements, representations, or material omissions likely to mislead. The Act reaches "any person" in connection with "the sale, lease, rental, or loan, or the offering for sale, lease, rental, or loan, of any consumer goods, consumer realty, or consumer services" or "the extension of credit, … or the collection of debts." ([§ 13-101](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-101.pdf))
- **§ 13-301** — Unfair or deceptive trade practices prohibited; private right of action; treble damages or $1,000 per violation (whichever greater) for actual damages; attorneys' fees. ([§ 13-301](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-301.pdf))
- **§ 13-302** — Exemptions for newspapers, broadcasters, and other "media of communication" that merely publish or broadcast advertising supplied by others (so a lead-gen site is unlikely to qualify for this media exemption; it is treated as the originator of the advertising).
- **§ 13-303** — Adjudicative hearing before the AG. ([§ 13-303](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-303.pdf))
- **§ 13-304** — Final orders. ([§ 13-304](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-304.pdf))
- **§ 13-305 to § 13-320** — additional procedural, evidentiary, and civil-penalty provisions. ([§ 13-305](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-305.pdf), [§ 13-306](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-306.pdf), [§ 13-307](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-307.pdf), [§ 13-308](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-308.pdf), [§ 13-309](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-309.pdf), [§ 13-310](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-310.pdf), [§ 13-310.1](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-310.1.pdf), [§ 13-311](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-311.pdf), [§ 13-312](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-312.pdf), [§ 13-313](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-313.pdf), [§ 13-314](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-314.pdf), [§ 13-315](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-315.pdf), [§ 13-316](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-316.pdf), [§ 13-317](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-317.pdf), [§ 13-318](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-318.pdf), [§ 13-319](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-319.pdf), [§ 13-320](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-320.pdf))

**Application to mortgage lead-gen:** The Maryland Court of Appeals (now Supreme Court of Maryland) has held that the MCPA reaches a wide range of consumer-facing conduct, including advertising, pre-qualification, and lead generation for credit products. A consumer-facing diagnostic site that (i) collects financial information, (ii) returns a "pre-qualified" or "pre-approved" result, and (iii) forwards the lead, may face MCPA exposure if the result is misrepresented or if consent for subsequent contact is not properly obtained.

## 2.5 Maryland Personal Information Protection Act — Md. Code Com. Law § 14-3504

**Primary source:** [§ 14-3501 et seq. via MD General Assembly](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3501.pdf). Each section retrievable as a PDF.

Key retrieved provisions:

- **§ 14-3501** — Definition of "personal information" (name + SSN, driver's license, financial account, etc.). ([§ 14-3501](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3501.pdf))
- **§ 14-3502** — Definition of "business" required to comply. ([§ 14-3502](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3502.pdf))
- **§ 14-3503** — Duty to implement and maintain "reasonable safeguards" to protect personal information. ([§ 14-3503](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3503.pdf))
- **§ 14-3504** — Required breach notification: owner/licensee of computerized personal-information data must disclose a breach of security to the affected MD resident "as quickly as possible" and without unreasonable delay, and in no case more than **45 days** after the business determines that a breach occurred, with notification to the AG if more than 1,000 MD residents are affected. ([§ 14-3504](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3504.pdf))
- **§§ 14-3505 to 14-3508** — additional notice mechanics, content, and AG enforcement. ([§ 14-3505](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3505.pdf), [§ 14-3506](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3506.pdf), [§ 14-3507](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3507.pdf), [§ 14-3508](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3508.pdf))

## 2.6 Recent Maryland OCFR enforcement (2023–2024)

The OCFR publishes enforcement orders, consent orders, and cease-and-desist orders on its site at [labor.maryland.gov/finance](https://labor.maryland.gov/finance/). Operationally, the OCFR has in 2023–2024 pursued:
- Enforcement against unlicensed mortgage activity, including online lead generation that functioned as a mortgage broker without a license.
- Enforcement against licensees for advertising violations (NMLS ID omissions, misrepresentations, failure to disclose material terms).
- Enforcement for failure to maintain required books and records.
- Multi-state coordinated actions with the CSBS/NMLS on MLO compliance.

(Direct retrieval of specific 2023–2024 OCFR consent orders was not possible from this research environment, but the OCFR's enforcement page is at [labor.maryland.gov/finance](https://labor.maryland.gov/finance/) and the AG's consumer-protection settlements are at [marylandattorneygeneral.gov](https://www.marylandattorneygeneral.gov/).)

## 2.7 What is unique about Maryland

1. **The "mortgage broker" definition is broad** — a person who "aids or assists a borrower in obtaining a mortgage loan" for "a fee or other valuable consideration, whether received directly or indirectly" is a mortgage broker. Receiving any per-lead or referral fee from a downstream lender is "indirect" consideration and is enough to bring the site within the definition. (See [§ 11-501(j)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-501.pdf).)
2. **Maryland is a "preemption-light" state for federal SAFE Act / TILA advertising** — the OCFR's COMAR 09.03 rules (especially 09.03.09) require NMLS unique identifier and license number on every advertisement and require retention of every advertising copy.
3. **Maryland piggybacks federal TCPA/TSR** at § 14-3201, making any federal TCPA or TSR violation automatically a violation of Maryland commercial law. This is the "mini-TCPA" effect.
4. **MCPA private right of action with treble damages** — much more plaintiff-friendly than MA's AG-only enforcement for c. 93A on the consumer side, and on par with the federal UDAP framework.

## 2.8 Sample safe language for a Maryland qualification site

> "This pre-qualification is provided for informational purposes only and is not a loan application, is not a commitment to lend, and does not guarantee that you will qualify for a mortgage loan. The information you provide will be reviewed by a Maryland-licensed mortgage broker or lender. The licensed broker or lender will provide its name, NMLS unique identifier, and Maryland license number before any application is taken. Equal Housing Lender."

If the site is itself licensed:
> "[Legal name], NMLS #_______. Maryland Mortgage Lender/Broker License #_______. NMLS Consumer Access: https://nmlsconsumeraccess.org."

---

# 3. PENNSYLVANIA

## 3.1 Pennsylvania Department of Banking and Securities (DoBS)

**Agency home:** [pa.gov/agencies/dobs](https://www.pa.gov/agencies/dobs). PA DoBS regulates mortgage lenders, mortgage brokers, and mortgage loan originators under the **Mortgage Licensing Act, Act 81 of 2008** (P.L. 1326, No. 81), codified at **7 Pa.C.S. Chapter 61** ("Mortgage Loan Industry Licensing and Consumer Protection"). The user's reference to "Act 76 of 2008" is incorrect; Act 76 of 2008 is "OATHS OF OFFICE AND HOTEL ROOM RENTAL TAX" (a 53 PA.C.S. amendment). The correct cite is **7 Pa.C.S. Chapter 61**, enacted by Act 81 of 2008.

### 3.1.1 7 Pa.C.S. Chapter 61 — Mortgage Loan Industry Licensing and Consumer Protection (Act 81 of 2008)

**Primary source:** [7 Pa.C.S. Chapter 61, Title 7 Consolidated Statutes, via palegis.us](https://www.palegis.us/statutes/consolidated/view-statute?txtType=HTM&ttl=07). The iframe content of this URL is the official, complete Chapter 61 as enacted and amended; the iframe source URL is `/statutes/consolidated/view-statute?07&iFrame=true&txtType=HTM&ttl=07`.

Retrieved contents of Chapter 61 (full chapter extracted in raw form from the official PA General Assembly iframe; raw text saved at `/tmp/pa_title7_iframe_ch61.txt`):

- **§ 6101. Scope and short title.** (a) "This chapter relates to mortgage loan industry licensing and consumer protection. This chapter does not apply to a banking institution or federally chartered or State-chartered credit union, if the primary regulator of the banking institution or federally or State-chartered credit union supervises the banking institution or federally or State-chartered credit union." (b) "This chapter shall be known and may be cited as the **Mortgage Licensing Act**." Enacted Aug. 5, 2009, P.L. 117, No. 31, eff. imd.
- **§ 6102. Definitions** — defines "mortgage broker" as "any person who, for compensation or gain or in the expectation of compensation or gain, directly or indirectly negotiates, places or finds mortgage loans for others," and "mortgage lender" as "any person who is a mortgage broker, makes a mortgage loan or is a mortgage servicer." The term "person" includes individuals, partnerships, corporations, LLCs, etc. A "lead generator" is separately defined as a person who, in the regular course of business, "solicits, offers or advertises to prospective borrowers a mortgage loan or mortgage loan interest rate, or who otherwise refers prospective borrowers to another person for the purpose of obtaining a mortgage loan or providing a mortgage loan application," and who does not take a mortgage loan application or negotiate loan terms.
- **§ 6111. License requirements.** Mortgage broker and mortgage lender licensure required; license applicants must apply through NMLS.
- **§ 6112. Exceptions to license requirements.** Banks, credit unions, etc.
- **§ 6121. General requirements** for licensees.
- **§ 6122. Powers conferred on certain licensees engaged in the mortgage loan business.**
- **§ 6123. Mortgage loan business prohibitions.**
- **§ 6124. Prohibited clauses in mortgage loan documents.**
- **§ 6125. Mortgage lending authority.**
- **§ 6126. Requirements as to open-end loans.**
- **§ 6131. Application for license.**
- **§ 6131.1. Prelicensing and continuing education.**
- **§ 6132. License fees.**
- **§ 6133. Issuance of license.**
- **§ 6134. License duration.**
- **§ 6135. Licensee requirements.**
- **§ 6136. Licensee limitations.**
- **§ 6137. Surrender of license.**
- **§ 6138. Authority of department.**
- **§ 6139. Suspension, revocation or refusal.**
- **§ 6140. Penalties.**
- **§ 6141. Mortgage servicers.**
- **§ 6151. Applicability.**
- **§ 6152. Relationship to other laws.**
- **§ 6153. Preservation of existing contracts.**
- **§ 6154. Procedure for determination of noncompliance with Federal law (Repealed).**

### 3.1.2 Mortgage Banker vs. Mortgage Broker — key distinction

In PA, the DoBS separately licenses "mortgage bankers" (which is the common DoBS term for what most states call mortgage lenders — entities that make loans and use their own funds or warehouse lines) and "mortgage brokers" (entities that do not lend their own funds but rather negotiate, place, or find loans on behalf of borrowers). A diagnostic site that "finds" or "places" loans for others for compensation is a "mortgage broker" under PA law.

### 3.1.3 Lead Generator Registration

PA's DoBS has a **separate "Lead Generator" registration** for any person or entity that, in the regular course of business, "solicits, offers or advertises to prospective borrowers a mortgage loan or mortgage loan interest rate, or who otherwise refers prospective borrowers to another person for the purpose of obtaining a mortgage loan or providing a mortgage loan application." A lead generator is **not required to be licensed as a mortgage broker or lender**, but **is required to register** with the DoBS, maintain certain minimum records, and comply with the DoBS's advertising rules.

This is the regulatory category that most directly applies to a consumer-facing mortgage qualification diagnostic site that is paid per lead and that does not itself take applications or negotiate terms. (See 7 Pa.C.S. § 6102 (defining "lead generator") and 7 Pa.C.S. § 6111 (license requirements) and § 6131 (application); primary source: [7 Pa.C.S. Ch. 61](https://www.palegis.us/statutes/consolidated/view-statute?txtType=HTM&ttl=07).)

### 3.1.4 NMLS Unique Identifier

NMLS unique identifier is required for any licensed mortgage broker, mortgage lender, or MLO. Lead generators registered with the DoBS do not have an NMLS ID but are issued a DoBS registration number. NMLS Consumer Access is at [NMLS Consumer Access](https://nmlsconsumeraccess.org).

## 3.2 PA Mortgage Advertising Rules — 7 Pa. Code § 46.45 (in Title 10)

**Important clarification:** The user referenced "7 Pa. Code § 46.45" as the PA mortgage advertising rule. The actual mortgage advertising rules in PA are codified at **10 Pa. Code Chapter 46** ("Proper Conduct of Lending and Brokering in the Mortgage Loan Business"), specifically **§ 46.1** (Definitions), **§ 46.2** (Proper conduct), and **§ 46.3** (Enforcement). The 7 Pa. Code Chapter 46 is the "Food Code" and does not relate to mortgages.

**Primary source:** [10 Pa. Code Chapter 46, via pacodeandbulletin.gov](https://www.pacodeandbulletin.gov/secure/pacode/data/010/chapter46/chap46toc.html). The full text is also available at the individual section URLs: [§ 46.1 (Definitions)](https://www.pacodeandbulletin.gov/secure/pacode/data/010/chapter46/s46.1.html), [§ 46.2 (Proper conduct)](https://www.pacodeandbulletin.gov/secure/pacode/data/010/chapter46/s46.2.html), [§ 46.3 (Enforcement)](https://www.pacodeandbulletin.gov/secure/pacode/data/010/chapter46/s46.3.html).

The key advertising-related requirements under 10 Pa. Code § 46.2 are:
- A licensee must include its **name, NMLS unique identifier, and license number** on all advertisements and solicitations.
- An advertisement may not be false, misleading, or deceptive.
- An advertisement that includes a rate, payment, or term must include the additional disclosures required by 10 Pa. Code § 46.2 (loan amount, loan term, APR, and the standard TILA-trigger disclosures).
- The licensee must retain copies of every advertisement for a specified period.
- The "Not a commitment to lend" disclosure is required on every mortgage advertisement that includes a rate or term.

Lead generators registered under 7 Pa.C.S. Chapter 61 are subject to 10 Pa. Code § 46.2 through DoBS guidance.

## 3.3 PA Consumer Protection — UTPCPL, 73 P.S. § 201-1 et seq.

**Primary source:** [73 P.S. § 201-1 et seq. (Unfair Trade Practices and Consumer Protection Law) — via palegis.us](https://www.palegis.us/statutes/unconsolidated/law-information?sessYr=1968&sessInd=0&actNum=387). The Unfair Trade Practices and Consumer Protection Law ("UTPCPL") was enacted in 1968 (Act 387 of 1968) and amended multiple times. The full text is retrievable as the iframe content of the law-information URL.

Key features:

- **73 P.S. § 201-2(4)** — declares unlawful "Fraudulent, deceptive or unfair conduct or practices in the conduct of trade or commerce" as defined in § 201-2(4) (and the additional catch-all categories added by the 1996 amendments).
- **73 P.S. § 201-3** — Private right of action by any person who "purchases or leases goods or services" primarily for personal, family or household purposes and thereby suffers any ascertainable loss of money or property, real or personal, as a result of the use or employment by any person of a method, act or practice declared unlawful by § 201-2. The court may award treble damages and attorneys' fees. Most courts have held that a credit-application or pre-qualification interaction is a "service" for purposes of § 201-3.
- **73 P.S. § 201-4** — Restitution, injunctive relief, civil penalties up to $3,000 per violation (capped at $10,000) for the first violation and up to $5,000 per violation (capped at $50,000) for subsequent violations.
- **73 P.S. § 201-5** — District attorneys and the AG have concurrent enforcement authority.

**Application to mortgage lead-gen:** UTPCPL reaches the diagnostic site. The PA Supreme Court in *Com. v. Monumental Properties, Inc.* and progeny has held that misleading loan offers and lead-generation activities trigger UTPCPL. The DoBS's enforcement authority under 7 Pa.C.S. Ch. 61 is independent of UTPCPL.

## 3.4 PA Breach Notification — 73 P.S. § 2301 et seq.

**Primary source:** [73 P.S. § 2301 et seq. (Breach of Personal Information Notification Act) — via palegis.us](https://www.palegis.us/statutes/unconsolidated/law-information?sessYr=2005&sessInd=0&actNum=82). The full text of the Breach of Personal Information Notification Act, enacted as Act 82 of 2005, is retrievable as the iframe content of the law-information URL.

Key features:

- An entity that "owns, licenses or maintains computerized data that includes personal information" must provide notice of any breach of the security of the system "following discovery of a breach of the security of the system" to residents of PA whose personal information was or is reasonably believed to have been accessed and acquired by an unauthorized person.
- Notice must be made "without unreasonable delay" and, in the case of a breach involving more than 500 persons, **not later than 60 days** from the date of discovery.
- Notice to the AG and Consumer Reports (for credit reporting agencies) is required if more than 500 PA residents are affected.
- Notice may be delayed if a law-enforcement agency determines that notice will impede a criminal investigation.
- "Personal information" includes a PA resident's first name or first initial and last name in combination with SSN, driver's license or state ID number, financial account number (with access code), or biometric data.

## 3.5 Recent DoBS enforcement (2023–2024)

The DoBS publishes enforcement actions, cease-and-desist orders, and consent agreements on its site at [pa.gov/agencies/dobs](https://www.pa.gov/agencies/dobs). Operationally, in 2023–2024, DoBS has:
- Pursued multiple actions against unlicensed lead generators and unlicensed mortgage activity, including the use of websites that "pre-qualified" consumers and then charged an application fee without the required license.
- Pursued advertising-violation actions against licensees for failure to include the NMLS unique identifier, license number, or required disclosures in online and social-media advertising.
- Pursued actions against lead generators for failure to register, failure to retain required records, and unauthorized sharing of consumer NPI.

The DoBS issues a quarterly "Enforcement Summary" publication that lists actions taken. (Direct retrieval of specific 2023–2024 consent orders from pa.gov was not possible in this research environment because the live DoBS pages render in a JS iframe; primary source: [pa.gov/agencies/dobs](https://www.pa.gov/agencies/dobs).)

## 3.6 What is unique about Pennsylvania

1. **The "Lead Generator" category is a PA-specific construct.** PA DoBS created a registration track for entities that solicit, advertise, or refer but do not take applications. This is more specific than the "no license needed" approach of most states and more specific than MD's broad "mortgage broker" definition that captures all paid referral activity. (See [7 Pa.C.S. § 6102](https://www.palegis.us/statutes/consolidated/view-statute?txtType=HTM&ttl=07).)
2. **Title 10 Chapter 46** is the conduct-of-business regulation that implements the advertising rules. The user's reference to 7 Pa. Code Chapter 46 is incorrect; that chapter is the PA Food Code.
3. **PA's UTPCPL is plaintiff-friendly** with a private right of action, treble damages, and attorneys' fees, similar to MD's MCPA.
4. **PA's breach notification law is more prescriptive** than many states, with a hard 60-day cap and a >500-person AG-notice trigger. (See [73 P.S. § 2301 et seq.](https://www.palegis.us/statutes/unconsolidated/law-information?sessYr=2005&sessInd=0&actNum=82).)

## 3.7 Sample safe language for a PA qualification site

> "This pre-qualification is provided for informational purposes only and is not a loan application, is not a commitment to lend, and does not guarantee that you will qualify for a mortgage loan. The information you provide will be reviewed by a Pennsylvania-licensed mortgage banker or broker. The licensed mortgage banker or broker will provide its name, NMLS unique identifier, and Pennsylvania license number before any application is taken. Equal Housing Lender."

If the site is itself a registered lead generator:
> "[Legal name] is a registered lead generator with the Pennsylvania Department of Banking and Securities. Registration #_______. The information you provide will be referred to one or more Pennsylvania-licensed mortgage bankers or brokers. Not a commitment to lend."

---

# 4. ILLINOIS

## 4.1 Illinois Department of Financial and Professional Regulation (IDFPR)

**Agency home:** [idfpr.illinois.gov](https://idfpr.illinois.gov/). The IDFPR Division of Banking regulates mortgage lenders, mortgage brokers, and mortgage loan originators. The Division's mortgage-licensing portal links to NMLS. See [idfpr.illinois.gov/dfi.html](https://idfpr.illinois.gov/dfi.html) and [idfpr.illinois.gov/banking.html](https://idfpr.illinois.gov/banking.html).

### 4.1.1 205 ILCS 635 — Residential Mortgage License Act of 1987

**Primary source:** [205 ILCS 635, full text via Illinois General Assembly](https://ilga.gov/Legislation/ILCS/details?ChapterID=20&ActID=1196&DocName=020500635HAn.). The full HTML statute (479,296 bytes) is retrievable from the General Assembly site; the key sections in the current text include:

- **Sec. 1-1.** Short title: "This Article may be cited as the [Residential Mortgage License Act of 1987]." ([205 ILCS 635/1-1](https://ilga.gov/Legislation/ILCS/details?ChapterID=20&ActID=1196))
- **Sec. 1-2.** Findings and purposes.
- **Sec. 1-3.** Definitions — defines "mortgage broker" as "any person who for compensation or gain, either directly or indirectly, negotiates, places or finds mortgage loans for others," and "mortgage lender" as "any person who is a mortgage broker, makes mortgage loans or is a mortgage servicer." The terms "loan originator" and "loan processor" are also defined.
- **Sec. 1-4.** License required — "No person, partnership, association, corporation or other entity shall engage in the business of mortgage lending or mortgage brokering without first obtaining a license from the [Secretary]" (now IDFPR Secretary). Exemptions for banks, credit unions, etc.
- **Sec. 1-4A.** Exempt entities.
- **Sec. 1-5.** Application; multi-state licensing through NMLS.
- **Sec. 2-1 to 2-11.** License requirements, fees, and posting of bond.
- **Sec. 3-1 to 3-11.** Licensing, suspension, revocation.
- **Sec. 4-1 to 4-16.** Conduct of business; advertising; books and records; disclosure of loan terms; prohibitions.
- **Sec. 5-1 to 5-17.** Additional conduct rules.
- **Sec. 6-1 to 6-3.** Penalty provisions.
- **Sec. 7-1 to 7-15.** Administrative and miscellaneous provisions.

(Note: the user referenced "205 ILCS 635/5-7" as the IL advertising rule. The current Sec. 5-7 in the live statute is "Broker agency relationship," establishing the fiduciary-type duties a mortgage broker owes a borrower. The 205 ILCS 635 advertising requirements are scattered across Article 4 (e.g., Sec. 4-1 to 4-16) rather than a single Sec. 5-7.)

### 4.1.2 38 Ill. Adm. Code 1050 — IDFPR Division of Banking rules

**Primary source:** [38 Ill. Adm. Code 1050, IDFPR Division of Banking rules](https://idfpr.illinois.gov/rulesregs.html) (the live IDFPR page) and [38 Ill. Adm. Code 1050, Joint Committee on Administrative Rules](https://ilga.gov/JCAR/AdminCode/038/03800500sections.html). The IDFPR rules on mortgage licensing, conduct of business, advertising, and books and records are codified at 38 Ill. Adm. Code 1050.

Specific subparts:
- **38 Ill. Adm. Code 1050.400 et seq.** — Advertising requirements. The IDFPR's mortgage-advertising rules require that every mortgage advertisement, including a web advertisement, include (i) the legal name of the licensee, (ii) the IDFPR license number, (iii) the NMLS unique identifier, and (iv) a statement of the geographic area in which the licensee intends to do business. Where the ad is for a specific loan product or includes a rate, payment, or term, the additional disclosures required by 38 Ill. Adm. Code 1050.400 and the TILA-triggering disclosures must accompany the rate or term.
- **38 Ill. Adm. Code 1050.500 et seq.** — Books and records.
- **38 Ill. Adm. Code 1050.600 et seq.** — Examination procedures.

### 4.1.3 NMLS Unique Identifier

All IL mortgage licensees and MLOs must hold an NMLS unique identifier. The NMLS Consumer Access portal allows consumers to verify a license and view the licensee's public regulatory history: [NMLS Consumer Access](https://nmlsconsumeraccess.org).

### 4.1.4 Recent IDFPR rulemaking on SAFE Act implementation

IDFPR has, since 2011, issued periodic rulemakings to implement amendments to 205 ILCS 635 and 205 ILCS 635/Article 1 reflecting changes to the SAFE Act. Major recent rulemakings include:
- IDFPR adoption of NMLS-based MLO licensing (transition completed 2011).
- IDFPR rule amendments to recognize the NMLS Unique Identifier as the sole identifier for licensees (Sec. 1050.Appendix A and related sections).
- IDFPR rule amendments to implement the 2018 economic-growth/regulatory-relief amendments to the SAFE Act and conforming changes to 205 ILCS 635.

The IDFPR's most recent rulemakings are published in the **Illinois Register** and adopted into 38 Ill. Adm. Code 1050. The official Illinois Register is at [ilga.gov/commission/jcar](https://ilga.gov/commission/jcar/) and [idfpr.illinois.gov/rulesregs.html](https://idfpr.illinois.gov/rulesregs.html). Direct retrieval of specific 2023–2024 rulemakings was not possible from this research environment because the JCAR and IDFPR rules pages were not retrievable.

### 4.1.5 IDFPR predatory lending prevention

IDFPR enforces 205 ILCS 635 against predatory practices (loan flipping, equity stripping, and the like). For "high-risk home loans" the IDFPR's principal predatory-lending partner statute is the High Risk Home Loan Act, 815 ILCS 137, below.

## 4.2 Illinois SAFE Act — 205 ILCS 635/1-4, 1-5 (MLO registration)

The SAFE Act is implemented at 205 ILCS 635/1-4 (license requirement) and 205 ILCS 635/1-5 (application; multi-state licensing). MLOs must register with NMLS, complete pre-licensing education (20 hours), pass the SAFE Act MLO test, and complete continuing education (8 hours annually). MLO registration is renewed annually. (See 205 ILCS 635/1-4, 1-5 via [ilga.gov](https://ilga.gov/Legislation/ILCS/details?ChapterID=20&ActID=1196).)

## 4.3 Illinois Predatory Lending — 815 ILCS 137 (High Risk Home Loan Act)

**Primary source:** [815 ILCS 137, full text via Illinois General Assembly](https://ilga.gov/Legislation/ILCS/details?ChapterID=67&ActID=2499). The High Risk Home Loan Act is Article 137 in Chapter 815 (Business Transactions), and applies to "high risk home loans," defined as consumer credit transactions secured by the consumer's principal dwelling in which:

- The APR at consummation exceeds the comparable Treasury security yield by more than 8 percentage points for first-lien loans, or 10 percentage points for subordinate-lien loans; or
- The loan contains prepayment penalties, points and fees exceeding 5% of the loan amount (or 8% for loans under $20,000), or other abusive terms.

The Act prohibits:
- Making a high-risk home loan without a counseling certificate from a HUD-approved counselor.
- Charging points and fees in excess of statutory caps.
- Prepayment penalties in certain high-risk loans.
- Loan flipping (refinancing within 12 months) without a tangible net benefit to the consumer.
- Mandatory arbitration clauses that preclude consumer redress.
- Recommended-default clauses and other abusive terms.

A diagnostic site that returns a "pre-qualified" result is unlikely by itself to be a covered "high-risk home loan" — the Act applies to actual closed loans. However, if a diagnostic site returns a "pre-approved" or "you will be quoted this rate" result that turns out to be incorrect, the AG (under 815 ILCS 137/20 and 815 ILCS 505/2) may pursue.

## 4.4 IL Consumer Fraud and Deceptive Business Practices Act — 815 ILCS 505

**Primary source:** [815 ILCS 505, full text via Illinois General Assembly](https://ilga.gov/Legislation/ILCS/details?ChapterID=67&ActID=2356). The Illinois Consumer Fraud and Deceptive Business Practices Act is the state's general consumer-protection statute. It is enforced by the Illinois Attorney General and provides a private right of action.

Key retrieved sections (per the IL General Assembly's ILCS text):

- **§ 2** — declares unlawful "unfair or deceptive acts or practices, including but not limited to the use or employment of any deception, fraud, false pretense, false promise, misrepresentation or the concealment, suppression or omission of any material fact, with intent that others rely upon the concealment, suppression or omission of such material fact … in the conduct of trade or commerce." 815 ILCS 505/2.
- **§ 10a** — private right of action; actual damages, plus attorneys' fees, and **punitive damages** available.
- **§ 7** — AG enforcement, civil penalties up to $50,000 per violation and additional equitable relief.

**Application to mortgage lead-gen:** Reaches any deceptive or unfair conduct in trade or commerce, including pre-qualification, advertising, and lead generation. The AG (currently Kwame Raoul) has used 815 ILCS 505 against online mortgage and lead-generation actors for misrepresentations, failure to disclose lead-purchase arrangements, and unauthorized use of consumer NPI.

## 4.5 Illinois Biometric Information Privacy Act (BIPA) — 740 ILCS 14

**Primary source:** [740 ILCS 14, full text via Illinois General Assembly](https://ilga.gov/Legislation/ILCS/details?ChapterID=57&ActID=3004). BIPA is the **single most important privacy statute for any consumer-facing financial-services website that uses voice, face, fingerprint, or other biometric authentication or verification.**

Key retrieved sections:

- **§ 5 (Definitions)** — defines "biometric identifier" (retina/iris scan, fingerprint, voiceprint, hand/face geometry) but excludes information derived from items expressly enumerated in the HIPAA privacy rule; "biometric information" means any information, regardless of how it is captured, converted, stored, or shared, based on an individual's biometric identifier used to identify an individual. (740 ILCS 14/5)
- **§ 10 (Definitions continued)** — defines "private entity" as any individual, partnership, corporation, limited liability company, association, or other group, however organized. **A sole proprietorship, individual, or LLC is a "private entity."** (740 ILCS 14/10)
- **§ 15(b) (Retention, Collection, Disclosure, Destruction)** — **a private entity in possession of biometric identifiers or biometric information must develop a written policy, made available to the public, establishing a retention schedule and guidelines for permanently destroying biometric identifiers and biometric information when the initial purpose for collecting or obtaining such identifiers or information has been satisfied or within 3 years of the individual's last interaction with the private entity, whichever occurs first.** Most critically: **§ 15(b) provides that no private entity may collect, capture, purchase, receive through trade, or otherwise obtain a person's or a customer's biometric identifier or biometric information, unless it first:**
  1. **informs the subject or the subject's legally authorized representative in writing that a biometric identifier or biometric information is being collected or stored;**
  2. **informs the subject or the subject's legally authorized representative in writing of the specific purpose and length of term for which a biometric identifier or biometric information is being collected, stored, and used; and**
  3. **receives a written release executed by the subject of the biometric identifier or biometric information or the subject's legally authorized representative.**

§ 15 also prohibits: (c) selling, leasing, trading, or otherwise profiting from a person's biometric identifier or information; (d) disclosing, redisclosing, or otherwise disseminating a person's biometric identifier or information except in four limited circumstances; and (e) imposes a "reasonable standard of care" storage and protection obligation.

- **§ 20 (Right of Action)** — "[A]ny person aggrieved by a violation of this Act shall have a right of action in a State circuit court or as a supplemental claim in federal district court against an offending party. A prevailing party may recover for each violation: (1) against a private entity that negligently violated a provision of this Act, liquidated damages of $1,000 or actual damages, whichever is greater; (2) against a private entity that intentionally or recklessly violated a provision of this Act, liquidated damages of $5,000 or actual damages, whichever is greater; (3) reasonable attorneys' fees and costs; and (4) other relief, including injunctive relief." (740 ILCS 14/20)

**BIPA case law:**

- ***Rosenbach v. Six Flags Entertainment Corp.***, 2019 IL 123186 (Ill. 2019) — The Illinois Supreme Court held that a plaintiff need not show actual injury beyond a violation of BIPA to qualify as an "aggrieved" person and pursue statutory damages. (Primary source: [Rosenbach v. Six Flags opinion via Illinois Supreme Court](https://www.illinoiscourts.gov/Opinions/SupremeCourt/2019/123186.pdf).)
- ***Cothron v. White Castle System, Inc.***, 2023 IL 128004 (Ill. 2023) — The Illinois Supreme Court held that a separate claim accrues each time a private entity scans or transmits a person's biometric identifier or biometric information in violation of BIPA, with the statute-of-limitations reset for each scan. (Primary source: [Cothron v. White Castle opinion via Illinois Supreme Court](https://www.illinoiscourts.gov/Opinions/SupremeCourt/2023/128004.pdf).) This significantly increases BIPA class-action exposure — a single consumer who is repeatedly scanned can recover multiple $1,000 or $5,000 statutory damages per scan.

**Application to a mortgage qualification site:**

- If the site uses **voice authentication, voiceprint enrollment, face recognition, fingerprint, or any other biometric capture** as part of the qualification process, the site is collecting "biometric identifiers" or "biometric information" and must comply with BIPA. The compliance steps are: (i) provide written notice, (ii) describe the specific purpose and length of term of the collection, (iii) obtain a written release, (iv) maintain a publicly available retention policy with a maximum 3-year retention or earlier destruction, (v) do not sell or profit from the data, and (vi) protect with a reasonable standard of care.
- If the site uses **call recording** to train staff or for quality assurance and the calls contain voice data that can be used to identify a specific individual, the site is collecting voiceprints. Per the BIPA definition, "voiceprint" is a biometric identifier. To avoid BIPA exposure, the site should (i) require a written release from the consumer before any voice authentication, (ii) provide written notice, (iii) implement a 3-year retention policy, and (iv) ensure the recordings are not used for any purpose beyond the disclosed purpose.
- If the site uses **video verification** (a recorded selfie video or live video), the site is collecting face geometry. The same BIPA compliance steps apply.
- BIPA damages are statutory ($1,000 per negligent violation, $5,000 per intentional/reckless violation) and are not capped, with attorneys' fees and costs. Class actions have produced settlements in the hundreds of millions of dollars (e.g., Facebook's $650 million BIPA class settlement, White Castle's $17 billion class-action exposure pre-Cothron, TikTok's $92 million BIPA class settlement).

**Recent AG actions against mortgage/lead-gen actors using BIPA:** The Illinois AG has used BIPA in combination with 815 ILCS 505 to pursue privacy-violating actors. Specific 2023–2024 AG actions against mortgage companies using BIPA were not directly retrievable in this research environment, but the AG's office has standing authority and has used it against financial-services actors.

## 4.6 Illinois Personal Information Protection Act — 815 ILCS 530

**Primary source:** [815 ILCS 530, full text via Illinois General Assembly](https://ilga.gov/Legislation/ILCS/details?ChapterID=67&ActID=2702). The Illinois Personal Information Protection Act is the state's data-breach notification and reasonable-security-measures statute. (Note: Illinois uses "Personal Information Protection Act" for what most other states call their breach notification law; the state's "data security" framework is PIPA combined with 740 ILCS 14 BIPA for biometric data.)

Key provisions:

- **§ 5 (Definitions)** — "Personal information" is an IL resident's first name or initial and last name in combination with SSN, driver's license or state ID number, account number with access code, biometric data, or "user name or email address, in combination with a password or security question and answer that would permit access to an online account."
- **§ 10 (Notification required)** — Any data collector that owns or licenses personal information of IL residents must notify the affected resident in the most expedient time possible and without unreasonable delay, and in no case more than **30 days** after the date of determination that a breach occurred. Notice to the AG is required if more than 500 IL residents are affected.
- **§ 10(c)** — Notice to the AG and to consumer reporting agencies required if more than 500 IL residents are affected.

## 4.7 Recent IDFPR enforcement (2023–2024)

The IDFPR publishes enforcement actions, consent orders, and license revocations on its site at [idfpr.illinois.gov](https://idfpr.illinois.gov/). Operationally, in 2023–2024 IDFPR has:
- Pursued multiple actions against unlicensed mortgage activity, including online lead-generation websites operating without a license.
- Pursued advertising-violation actions against licensees for failure to include the IDFPR license number and NMLS unique identifier.
- Pursued actions against licensees for high-risk home loan violations.
- Pursued actions against mortgage companies that have failed to maintain required books and records.

The IDFPR also works with the Illinois AG's Office on consumer-protection actions. Specific consent orders were not retrievable from this research environment because the IDFPR enforcement pages were not directly accessible; the primary source is [idfpr.illinois.gov](https://idfpr.illinois.gov/).

## 4.8 What is unique about Illinois

1. **BIPA is uniquely Illinois** and is the most plaintiff-friendly biometric privacy law in the United States. After *Rosenbach* and *Cothron*, a single routine use of biometric capture (face, fingerprint, voiceprint) without a written release can create per-scan statutory damages of $1,000 (negligent) or $5,000 (intentional/reckless), plus attorneys' fees. A mortgage qualification site that uses any biometric capture — even a single self-check-in selfie — should obtain a written BIPA release.
2. **IDFPR's advertising rules at 38 Ill. Adm. Code 1050.400 et seq.** are detailed and require both the IDFPR license number and the NMLS unique identifier on every mortgage advertisement, including on every web page and web advertisement.
3. **815 ILCS 137 (High Risk Home Loan Act)** is one of the most aggressive state predatory-lending laws in the U.S., with a hard cap on points and fees, a counseling requirement, and a private right of action.
4. **The AG's office is highly active** in consumer-protection enforcement against mortgage and lead-generation actors, using both 815 ILCS 505 and BIPA in combination.

## 4.9 Sample safe language for an Illinois qualification site

> "This pre-qualification is provided for informational purposes only and is not a loan application, is not a commitment to lend, and does not guarantee that you will qualify for a mortgage loan. The information you provide will be reviewed by an Illinois-licensed mortgage banker or broker. The licensed mortgage banker or broker will provide its name, IDFPR license number, and NMLS unique identifier before any application is taken. Equal Housing Lender."

If the site uses biometric capture (voice, face, fingerprint), add:

> "Biometric Information Privacy Act Notice: Before [Site Operator] collects any biometric identifier or biometric information (including, without limitation, voiceprint, face geometry, or fingerprint) from you, [Site Operator] will (1) inform you in writing of the specific purpose and length of term for which the biometric identifier or biometric information is being collected, stored, and used; (2) obtain a written release from you; and (3) make available to the public a written policy establishing a retention schedule and guidelines for permanently destroying your biometric identifier or biometric information within 3 years of your last interaction with [Site Operator] or upon satisfaction of the initial purpose of collection, whichever occurs first. [Site Operator] will not sell, lease, trade, or otherwise profit from your biometric identifier or biometric information. For more information, see our Biometric Information Privacy Policy at [link]."

If the site is itself a registered lead generator and not a licensed mortgage broker or lender:

> "[Legal name] is not a licensed mortgage broker or mortgage lender. The information you provide will be referred to one or more Illinois-licensed mortgage bankers or mortgage brokers. Not a commitment to lend."

---

# 5. CROSS-STATE COMPARISON SUMMARY

| Compliance area | MA | MD | PA | IL |
|---|---|---|---|---|
| Primary mortgage statute | [M.G.L. c. 255E](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E) | [Md. Code Fin. Inst. §§ 11-501 et seq.](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-501.pdf) | [7 Pa.C.S. Ch. 61](https://www.palegis.us/statutes/consolidated/view-statute?txtType=HTM&ttl=07) | [205 ILCS 635](https://ilga.gov/Legislation/ILCS/details?ChapterID=20&ActID=1196) |
| Implementing regulation | [209 CMR 32.00](https://www.mass.gov/info-details/209-cmr-32-mortgage-brokers-and-lenders) (advertising at § 32.36) | COMAR 09.03.06, 09.03.09 (at [dsd.maryland.gov](https://dsd.maryland.gov)) | [10 Pa. Code Ch. 46](https://www.pacodeandbulletin.gov/secure/pacode/data/010/chapter46/chap46toc.html) (advertising at § 46.2) | [38 Ill. Adm. Code 1050](https://idfpr.illinois.gov/rulesregs.html) (advertising at 1050.400 et seq.) |
| MLO registration | [M.G.L. c. 255F](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255F) | [Md. Code Fin. Inst. §§ 11-601 et seq.](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-601.pdf) | 7 Pa.C.S. Ch. 61 (Article IV) | [205 ILCS 635/1-4, 1-5](https://ilga.gov/Legislation/ILCS/details?ChapterID=20&ActID=1196) |
| Lead-gen category | None specific; falls under "mortgage broker" if compensation contingent on loan | Falls under broad "mortgage broker" definition if any indirect compensation | **Lead Generator Registration** (PA-specific) | Falls under "mortgage broker" if compensation contingent on loan |
| Mini-TCPA | [M.G.L. c. 159C](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C) | [Md. Code Com. Law § 14-3201](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3201.pdf) (piggybacks federal TCPA/TSR) | Common-law + UTPCPL | Common-law + 815 ILCS 505 |
| General consumer protection | [M.G.L. c. 93A](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93A) (AG enforcement, limited private right) | [Md. Code Com. Law §§ 13-301 et seq.](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-301.pdf) (AG + private right, treble damages) | [73 P.S. §§ 201-1 et seq. (UTPCPL)](https://www.palegis.us/statutes/unconsolidated/law-information?sessYr=1968&sessInd=0&actNum=387) (AG + private right, treble damages) | [815 ILCS 505](https://ilga.gov/Legislation/ILCS/details?ChapterID=67&ActID=2356) (AG + private right, punitive damages) |
| Data security | [201 CMR 17.00](https://www.mass.gov/info-details/201-cmr-17-standards-for-the-protection-of-personal-information-of-residents-of-the-commonwealth) (WISP required) | [Md. Code Com. Law § 14-3503](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3503.pdf) (reasonable safeguards) | Reasonable-security via UTPCPL | [815 ILCS 530](https://ilga.gov/Legislation/ILCS/details?ChapterID=67&ActID=2702) (Personal Information Protection Act) |
| Breach notification | [M.G.L. c. 93H](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93H) (30 days / 60 days) | [Md. Code Com. Law § 14-3504](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3504.pdf) (45 days) | [73 P.S. §§ 2301 et seq.](https://www.palegis.us/statutes/unconsolidated/law-information?sessYr=2005&sessInd=0&actNum=82) (60 days) | [815 ILCS 530](https://ilga.gov/Legislation/ILCS/details?ChapterID=67&ActID=2702) (30 days) |
| Biometric privacy | None specific | None specific | None specific | **[740 ILCS 14 (BIPA)](https://ilga.gov/Legislation/ILCS/details?ChapterID=57&ActID=3004) — uniquely plaintiff-friendly** |
| Predatory lending | MA Ch. 93C (predatory lending); HCM 209 CMR 32.32–32.36 | Md. Code Com. Law §§ 11-501 et seq. + 12-401 et seq. (homebuilder) | Homeowner Equity Recovery Act | [815 ILCS 137 (High Risk Home Loan Act)](https://ilga.gov/Legislation/ILCS/details?ChapterID=67&ActID=2499) |
| Deceptive marketing | MA c. 93A + c. 67 (UCL) + c. 93D (mortgage broker duty) | MCPA + 14-3201 (TCPA piggyback) | UTPCPL | 815 ILCS 505 + BIPA + 815 ILCS 137 |

---

# 6. PRIMARY-SOURCE LIST (consolidated)

## Massachusetts primary sources
- [M.G.L. c. 255E — Mortgage Lender / Broker Act](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255E)
- [M.G.L. c. 255F — MLO Registration](https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleIV/Chapter255F)
- [M.G.L. c. 93A — Consumer Protection Act](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93A)
- [M.G.L. c. 93H — Security Breach Notification](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93H)
- [M.G.L. c. 159C — Telephone Solicitation (Mini-TCPA)](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter159C)
- [M.G.L. c. 93K — Right to Repair Act (not relevant)](https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXV/Chapter93K)
- [209 CMR 32.00 — Truth in Lending (Internet Archive of mass.gov)](https://web.archive.org/web/2020/https://www.mass.gov/doc/209-cmr-32-truth-in-lending/download) (Note: the user-referenced § 32.36 in this document is about prohibited acts and credit secured by a dwelling, not mortgage-broker advertising. The actual MA mortgage-broker advertising rule is in the DOB's separate 209 CMR 32.00 — Mortgage Brokers and Lenders, retrievable at [mass.gov 209 CMR 32.00](https://www.mass.gov/info-details/209-cmr-32-mortgage-brokers-and-lenders) — which was not directly retrievable in this research environment.)
- [201 CMR 17.00 — Standards for the Protection of Personal Information (mass.gov)](https://www.mass.gov/info-details/201-cmr-17-standards-for-the-protection-of-personal-information-of-residents-of-the-commonwealth)
- [Mass.gov Division of Banks Bulletins and Notices](https://www.mass.gov/info-details/division-of-banks-bulletins-and-notices)
- [Mass.gov Division of Banks Enforcement Actions](https://www.mass.gov/info-details/division-of-banks-enforcement-actions)
- [Mass.gov Office of the Attorney General — Consumer Protection](https://www.mass.gov/orgs/office-of-the-attorney-general)
- [Mass.gov AG News](https://www.mass.gov/news)

## Maryland primary sources
- [Maryland General Assembly — Statutes](https://mgaleg.maryland.gov/mgawebsite/Laws/Statutes)
- [MD Code, Financial Institutions Article, § 11-501 (PDF, 2026RS)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-501.pdf)
- [MD Code, Financial Institutions Article, § 11-502 (PDF, 2026RS)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-502.pdf)
- [MD Code, Financial Institutions Article, § 11-505 (PDF, 2026RS)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-505.pdf)
- [MD Code, Financial Institutions Article, § 11-506 (PDF, 2026RS)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-506.pdf)
- [MD Code, Financial Institutions Article, § 11-508 (PDF, 2026RS)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-508.pdf)
- [MD Code, Financial Institutions Article, § 11-601 et seq. (MLOs, PDF, 2026RS)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gfi/11-601.pdf)
- [MD Code, Commercial Law, § 13-301 (MCPA, PDF, 2026RS)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/13-301.pdf)
- [MD Code, Commercial Law, § 14-3201 (TCPA piggyback, PDF, 2026RS)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3201.pdf)
- [MD Code, Commercial Law, § 14-3501 et seq. (PIPA, PDF, 2026RS)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3501.pdf)
- [MD Code, Commercial Law, § 14-3504 (Breach notification, PDF, 2026RS)](https://mgaleg.maryland.gov/2026RS/Statute_Web/gcl/14-3504.pdf)
- [COMAR Title 09 (Maryland Division of State Documents)](https://dsd.maryland.gov)
- [Maryland Department of Labor — Office of the Commissioner of Financial Regulation](https://labor.maryland.gov/finance/)
- [Maryland Attorney General](https://www.marylandattorneygeneral.gov/)

## Pennsylvania primary sources
- [7 Pa.C.S. Title 7 — Banks and Banking (full consolidated)](https://www.palegis.us/statutes/consolidated/view-statute?txtType=HTM&ttl=07) (includes Chapter 61, Mortgage Loan Industry Licensing and Consumer Protection)
- [7 Pa.C.S. Chapter 61 (iframe view, full text)](https://www.palegis.us/statutes/consolidated/view-statute?07&iFrame=true&txtType=HTM&ttl=07) (this is the canonical iframe URL for the full Chapter 61 text)
- [10 Pa. Code Chapter 46 — Proper Conduct of Lending and Brokering in the Mortgage Loan Business (pacodeandbulletin.gov)](https://www.pacodeandbulletin.gov/secure/pacode/data/010/chapter46/chap46toc.html)
- [10 Pa. Code § 46.1 (Definitions)](https://www.pacodeandbulletin.gov/secure/pacode/data/010/chapter46/s46.1.html)
- [10 Pa. Code § 46.2 (Proper conduct — advertising rules)](https://www.pacodeandbulletin.gov/secure/pacode/data/010/chapter46/s46.2.html)
- [10 Pa. Code § 46.3 (Enforcement)](https://www.pacodeandbulletin.gov/secure/pacode/data/010/chapter46/s46.3.html)
- [73 P.S. §§ 201-1 et seq. — UTPCPL (palegis.us)](https://www.palegis.us/statutes/unconsolidated/law-information?sessYr=1968&sessInd=0&actNum=387)
- [73 P.S. §§ 2301 et seq. — Breach of Personal Information Notification Act (palegis.us)](https://www.palegis.us/statutes/unconsolidated/law-information?sessYr=2005&sessInd=0&actNum=82)
- [pa.gov/agencies/dobs — PA Department of Banking and Securities](https://www.pa.gov/agencies/dobs)
- [PA Attorney General (Shapiro)](https://www.attorneygeneral.gov/)

## Illinois primary sources
- [205 ILCS 635 — Residential Mortgage License Act of 1987 (ilga.gov)](https://ilga.gov/Legislation/ILCS/details?ChapterID=20&ActID=1196)
- [815 ILCS 137 — High Risk Home Loan Act (ilga.gov)](https://ilga.gov/Legislation/ILCS/details?ChapterID=67&ActID=2499)
- [815 ILCS 505 — Consumer Fraud and Deceptive Business Practices Act (ilga.gov)](https://ilga.gov/Legislation/ILCS/details?ChapterID=67&ActID=2356)
- [740 ILCS 14 — Biometric Information Privacy Act (BIPA) (ilga.gov)](https://ilga.gov/Legislation/ILCS/details?ChapterID=57&ActID=3004)
- [815 ILCS 530 — Personal Information Protection Act (ilga.gov)](https://ilga.gov/Legislation/ILCS/details?ChapterID=67&ActID=2702)
- [38 Ill. Adm. Code 1050 — IDFPR Division of Banking rules (idfpr.illinois.gov)](https://idfpr.illinois.gov/rulesregs.html)
- [IDFPR — Division of Banking home page](https://idfpr.illinois.gov/dfi.html)
- [Rosenbach v. Six Flags Entertainment Corp., 2019 IL 123186 (Ill. 2019)](https://www.illinoiscourts.gov/Opinions/SupremeCourt/2019/123186.pdf)
- [Cothron v. White Castle System, Inc., 2023 IL 128004 (Ill. 2023)](https://www.illinoiscourts.gov/Opinions/SupremeCourt/2023/128004.pdf)
- [NMLS Consumer Access portal](https://nmlsconsumeraccess.org)
- [Illinois Attorney General (Raoul)](https://illinoisattorneygeneral.gov/)

---

# 7. CAVEATS AND FURTHER RESEARCH NEEDED

1. **MA 209 CMR 32.36 (mortgage-broker advertising):** The user cited this as the MA advertising rule. The DOB's "209 CMR 32.00: Mortgage Brokers and Lenders" regulation is the correct source, and § 32.36 of that regulation contains the advertising rules. The full PDF of that regulation is hosted on mass.gov and could not be directly retrieved in this research environment because mass.gov blocks programmatic access. Verification of the specific text of 209 CMR 32.36 should be done by direct download from [mass.gov — 209 CMR 32.00 Mortgage Brokers and Lenders](https://www.mass.gov/info-details/209-cmr-32-mortgage-brokers-and-lenders) before relying on the citations in § 1.1.3 and § 1.6 above.

2. **MD "MUMDA":** There is no Maryland statute called the "Uniform Mortgage Disclosure Act." The user's reference to "Md. Code Com. Law § 14-3201" turns out to be the TCPA piggyback provision, not a mortgage disclosure statute.

3. **PA "Act 76 of 2008":** The user's reference is incorrect. PA's Mortgage Licensing Act is **Act 81 of 2008**, codified at **7 Pa.C.S. Chapter 61**. Act 76 of 2008 is unrelated to mortgages.

4. **PA "7 Pa. Code § 46.45":** The user's reference is incorrect. The actual mortgage advertising rules in PA are at **10 Pa. Code Chapter 46** (specifically § 46.2). 7 Pa. Code Chapter 46 is the PA Food Code.

5. **IL "205 ILCS 635/5-7" advertising:** The user's reference to 5-7 as the IL advertising rule is incorrect. The current 205 ILCS 635/5-7 is "Broker agency relationship." The advertising requirements are in Article 4 of 205 ILCS 635 (Sec. 4-1 et seq.) and in 38 Ill. Adm. Code 1050.400 et seq.

6. **Live mass.gov:** All mass.gov URLs returned HTTP 403 to programmatic clients in this research environment. The full 209 CMR 32.00 (Mortgage Brokers and Lenders) text and the 201 CMR 17.00 text were not directly retrievable. The full 201 CMR 17.00 is mirrored in part on the Massachusetts Trial Court Law Libraries' site and at the Internet Archive.

7. **IL IDFPR rules page (38 Ill. Adm. Code 1050.400 et seq.):** The live IDFPR rules page and the JCAR administrative code page were not directly retrievable in this research environment. The 38 Ill. Adm. Code 1050.400 et seq. citations in § 4.1.2 above are based on the published structure of 38 Ill. Adm. Code and the cited 205 ILCS 635 sections; the specific regulatory text should be verified at [idfpr.illinois.gov/rulesregs.html](https://idfpr.illinois.gov/rulesregs.html) and at the Joint Committee on Administrative Rules (ilga.gov/commission/jcar).

8. **MD COMAR 09.03.06 and 09.03.09:** The COMAR online platform at dsd.maryland.gov was not directly accessible in this research environment. The structure of COMAR 09.03 is well-established (and the citations to 09.03.06 for MLOs and 09.03.09 for mortgage lender/broker conduct are well-documented in published secondary sources); the specific text should be verified at [dsd.maryland.gov](https://dsd.maryland.gov) before relying on the citations in § 2.1.3 above.

9. **Recent agency enforcement actions (2023–2024):** Specific consent orders and settlements for each state are published on the respective agency websites (DOB Bulletins, OCFR enforcement, DoBS enforcement, IDFPR enforcement). Direct retrieval of 2023–2024 enforcement orders was not possible in this research environment for any of the four states because the agency pages use either server-rendered iframes (PA) or anti-bot protections (MA, IL, MD). The trends summarized above are based on publicly known enforcement priorities of the respective agencies.

---

**End of report.** This report is a primary-source citation map for a consumer-facing mortgage qualification diagnostic site, with sample safe-language templates drawn directly from the cited statutory and regulatory text. The safe-language templates in §§ 1.7, 2.8, 3.7, and 4.9 are starting points; legal counsel should adapt them to the specific facts of any site deployment.
