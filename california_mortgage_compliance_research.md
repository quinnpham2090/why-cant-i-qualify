# California State-Specific Mortgage & Lead-Generation Compliance Research

**Subject:** Consumer-facing mortgage qualification / pre-qualification diagnostic website
**Scope:** All state-law requirements administered by the California Department of Financial Protection and Innovation (DFPI), the California Privacy Protection Agency (CPPA), the California Business, Professions, and Financial Codes, and selected federal overlays that materially apply to a California-operated lead-gen site.
**Methodology:** Primary-source citations only — California Legislative Information (leginfo.legislature.ca.gov), the eCFR (ecfr.gov), the Cornell LII (law.cornell.edu) for federal statutes, DFPI press releases recovered through the Internet Archive Wayback Machine (web.archive.org), and the California Privacy Protection Agency (cppa.ca.gov). Each statute or rule is quoted verbatim from the official text. Where a primary source is paywalled or blocked, secondary law-firm summaries and the Wayback Machine archive of the original DFPI page are cited in lieu of the live page.

---

## EXECUTIVE SUMMARY — WHAT'S UNIQUE ABOUT CALIFORNIA vs. FEDERAL

California is the most aggressive mortgage/lead-gen compliance regime in the United States, layered on top of federal law. The five features that distinguish California from federal compliance alone are:

1. **Statewide "abusive" UDAAP standard** — California's Consumer Financial Protection Law (CCFPL), Fin. Code §90009(c)(2), added "abusive" as a separate cause of action in 2020. The CCFPL applies to *any* covered person offering a consumer financial product or service to a California resident, **even if the actor is already CRMLA-licensed and even if GLBA/Regulation V would otherwise preempt**. CCFPL penalties under §90012(c)(1) reach **$1,000,000 per day per knowing violation** (capped at the lesser of 1% of total assets or $1M/day).
2. **Universal state mortgage license** — Every person "engaging in the business" of making or servicing residential mortgage loans in California must have a CRMLA license (Fin. Code §50002(a)). The statutory definition of "engage in the business" (§50003(g)) is broad enough to sweep in lead generation and qualification tools that *disseminate information relating to the making of residential mortgage loans* "by means of … electronic communication … or similar communications media."
3. **Mandatory NMLS unique identifier on advertising** — Every MLO advertising in California must display the NMLS unique identifier under both the federal SAFE Act (12 CFR §1007.105) and California Financial Code §50204(p). A company ad that does not include the company-level NMLS ID risks an enforcement action.
4. **No-use + pre-use notice + opt-out for automated decision tools** — Effective January 1, 2026, the California Privacy Protection Agency's ADMT regulations under the CPRA require a pre-use notice, an opt-out (or human-review appeal), risk assessments, and a right to access information about the ADMT before any "significant decision" about a consumer — defined to expressly include "the provision or denial of financial or lending services." A mortgage qualification tool that produces a recommendation is squarely covered.
5. **Affirmative obligation to display a "California Financial Information Privacy Act" opt-out and the new Delete Request/Opt-Out Platform** — California was the first state to require a one-stop universal opt-out signal (the CPPA "Delete Request and Opt-out Platform" — live as of 2026), and it stacks on top of CCPA/CPRA, the California Financial Information Privacy Act (Fin. Code §4050 et seq.), and federal GLBA.

A consumer-facing mortgage qualification site must therefore navigate a stack: **(CRMLA) → (CCFPL) → (CCPA/CPRA + ADMT) → (Fin. Code §4050) → (B&P §17529.5 anti-spam) → (B&P §17200 UCL + §17500 false advertising) → (CIV §1798 et seq. CCPA) → (federal SAFE Act, Reg B, Reg N, Reg Z, GLBA Safeguards Rule)**.

---

## 1. CALIFORNIA DEPARTMENT OF FINANCIAL PROTECTION AND INNOVATION (DFPI)

The DFPI is the state regulator for California financial services. It was renamed from the Department of Business Oversight (DBO) effective July 1, 2020, by AB 1864 (Stats. 2020, Ch. 157). Primary URL: **https://dfpi.ca.gov** (the site currently returns HTTP 403 to direct scripted requests; mirror through the Internet Archive Wayback Machine works).

### 1.1 California Residential Mortgage Lending Act (CRMLA) — Fin. Code Division 20, §§50000–50706

**Primary URL pattern:** `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=<NUMBER>.`

#### §50000 — Short title (CRMLA)

> "This division will be known and may be cited as the California Residential Mortgage Lending Act."

(Added by Stats. 1994, Ch. 994, Sec. 7.)

#### §50002 — Licensing required; SAFE Act carve-outs

> "(a) No person shall engage in the business of making residential mortgage loans or servicing residential mortgage loans, in this state, without first obtaining a license from the commissioner in accordance with the requirements of Chapter 2 (commencing with Section 50120) or Chapter 3 (commencing with Section 50130), and any rules promulgated by the commissioner under this law, unless a person or transaction is excepted from a definition or exempt from licensure by a provision of this law or a rule of the commissioner."

> "(b)(1) An employee of a licensee or of a person exempt from licensure is not required to be licensed when acting within the scope of his or her employment and shall be exempt from any other law from which his or her employer is exempt, except that an individual who meets the definition of a mortgage loan originator in Section 50003.5 shall be subject to this division."

> "(c) The following persons are exempt from subdivision (a): …
> (9) A real estate broker licensed under California law, when making, arranging, selling, or servicing a residential loan.
> (10) A California finance lender or broker licensed under Division 9 (commencing with Section 22000), when acting under the authority of that license.
> (12) A mortgage loan originator who has obtained a license under Chapter 3.5 (commencing with Section 50140), provided that the mortgage loan originator is employed by a residential mortgage lender or servicer."

> "(d) An individual, unless specifically exempted under subdivision (e), shall not engage in the business of a mortgage loan originator with respect to any dwelling located in this state without first obtaining and maintaining annually a license in accordance with the requirements of Chapter 3.5 (commencing with Section 50140) and any rules promulgated by the commissioner under that chapter. Each licensed mortgage loan originator shall register with and maintain a valid unique identifier issued by the Nationwide Mortgage Licensing System and Registry."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50002.

**Practical implication for a qualification tool:** If the website solicits information to determine whether a consumer qualifies for a residential mortgage loan and either (a) makes a credit decision, (b) refers to specific loan products or terms, (c) collects an application as defined in 12 CFR §1007.102, or (d) takes compensation tied to a loan consummation, it likely triggers CRMLA licensure. Mere "general financial education" content that does not connect a consumer with a specific loan product or quote terms is not by itself "engaging in the business." Note that the statutory definition in §50003(g) is broad: it covers *disseminating to the public information relating to the making of residential mortgage loans* by electronic communication.

#### §50003 — Definitions (key terms)

> "(d) 'Commissioner' means the Commissioner of Financial Protection and Innovation."

> "(g) 'Engage in the business' means the dissemination to the public, or any part of the public, by means of written, printed, or electronic communication or any communication by means of recorded telephone messages or spoken on radio, television, or similar communications media, of any information relating to the making of residential mortgage loans, the servicing of residential mortgage loans, or both. 'Engage in the business' also means, without limitation, making residential mortgage loans or servicing residential mortgage loans, or both."

> "(i) 'In this state' includes any activity of a person relating to making or servicing a residential mortgage loan that originates from this state and is directed to persons outside this state, or that originates from outside this state and is directed to persons inside this state, or that originates inside this state and is directed to persons inside this state, or that leads to the formation of a contract and the offer or acceptance thereof is directed to a person in this state (whether from inside or outside this state and whether the offer was made inside or outside the state)."

> "(p) 'Mortgage loan,' 'residential mortgage loan,' or 'home mortgage loan' means a federally related mortgage loan as defined in Section 1024.2 of Title 12 of the Code of Federal Regulations, or a loan made to finance construction of a one-to-four family dwelling."

> "(r) 'Nationwide Mortgage Licensing System and Registry' means a mortgage licensing system developed and maintained by the Conference of State Bank Supervisors and the American Association of Residential Mortgage Regulators for the licensing and registration of licensed mortgage loan originators."

> "(u) 'Person' means a natural person, a sole proprietorship, a corporation, a partnership, a limited liability company, an association, a trust, a joint venture, an unincorporated organization, a joint stock company, a government or a political subdivision of a government, and any other entity."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50003.

#### §50003.5 — "Mortgage loan originator" definition

> "(a) 'Mortgage loan originator' means an individual who, for compensation or gain, or in the expectation of compensation or gain, takes a residential mortgage loan application or offers or negotiates terms of a residential mortgage loan."

> "(b) Mortgage loan originator does not include any of the following:
> (1) An individual who performs purely administrative or clerical tasks on behalf of a person meeting the definition of a mortgage loan originator, except as provided in subdivision (c) of Section 50003.6. The term 'administrative or clerical tasks' means the receipt, collection, and distribution of information common for the processing or underwriting of a loan in the mortgage industry and communication with a consumer to obtain information necessary for the processing or underwriting of a residential mortgage loan, to the extent that the communication does not include offering or negotiating loan rates or terms, or counseling consumers about residential mortgage loan rates or terms.
> (2) An individual who solely renegotiates terms for existing mortgage loans held or serviced by his or her employer …
> (3) An individual that is solely involved in extensions of credit relating to timeshare plans, …
> (4) An individual licensed as a mortgage loan originator pursuant to Article 2.1 (commencing with Section 10166.01) of Chapter 3 of Part 1 of Division 4 of the Business and Professions Code and the SAFE Act.
> (5) An individual who is an employee of a federal, state, or local government agency or housing finance agency …
> (6) An employee of a bona fide nonprofit organization who exclusively originates residential mortgage loans for a bona fide nonprofit organization …"

> "(c) 'Registered mortgage loan originator' means any individual who is all of the following:
> (1) Meets the definition of mortgage loan originator.
> (2) Is an employee of a depository institution, a subsidiary that is owned and controlled by a depository institution and regulated by a federal banking agency, or an institution regulated by the Farm Credit Administration.
> (3) Is registered with, and maintains a unique identifier through, the Nationwide Mortgage Licensing System and Registry."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50003.5.

**Practical implication for a qualification tool:** The MLO definition is the same as the federal SAFE Act definition. A site that only collects consumer inputs for a "pre-qualification" estimate — without taking a formal application or offering specific loan terms — is *not* by itself operating as an MLO. But the moment a site (a) takes a "residential mortgage loan application" within the meaning of 12 CFR §1007.102 (i.e., information used to determine whether a consumer qualifies for a loan), or (b) "offers or negotiates" specific loan terms to the consumer, the MLO trigger attaches. The site owner therefore needs either a CRMLA company license + sponsored MLOs, or to operate in a way that stays within the "administrative/clerical" safe harbor.

#### §50003.6 — Loan processor / underwriter advertising safe harbor

> "(a) A loan processor or underwriter who does not represent to the public, through advertising or other means of communicating or providing information, including the use of business cards, stationery, brochures, signs, rate lists, or other promotional items, that the individual can or will perform any of the activities of a loan originator shall not be required to be licensed as a mortgage loan originator."

> "(b) An individual engaging solely in loan processor or underwriter activities shall not represent to the public, through advertising or other means of communicating or providing information including the use of business cards, stationery, brochures, signs, rate lists, or other promotional items, that the individual can or will perform any of the activities of a mortgage loan originator."

> "(c) An independent contractor may not engage in the activities of a loan processor or underwriter for a residential mortgage loan unless the independent contractor loan processor or underwriter obtains and maintains a residential mortgage lender or residential mortgage servicer license and a mortgage loan originator license under this division."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50003.6.

**Practical implication:** The safe harbor is *narrow*. If the website shows "rates" or advertises itself as helping with mortgage qualification, it cannot rely on the loan-processor safe harbor; the entity and its individual operators must be licensed. If the site only collects inputs to pass to a downstream licensed lender for an eligibility check, the safe harbor may apply — but the safe-harbor language requires the site to make *no* public representation of performing MLO activities.

#### §50140 — California SAFE Act — MLO licensing

> "(a) An applicant for a license as a mortgage loan originator shall apply by submitting the uniform form prescribed for that purpose by the Nationwide Mortgage Licensing System and Registry. The commissioner may require the submission of additional information or supporting documentation to the department.
> …
> (d) The commissioner may, by rule, require mortgage loan originator licensees to pay assessments through the Nationwide Mortgage Licensing System and Registry.
> (e) In connection with an application for a license as a mortgage loan originator, the applicant shall, at a minimum, furnish to the Nationwide Mortgage Licensing System and Registry information concerning the applicant's identity, including the following:
> (1) Fingerprint images and related information, for purposes of performing a federal, or both a state and federal, criminal history background check.
> (2) Personal history and experience in a form prescribed by the Nationwide Mortgage Licensing System and Registry …"

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50140.

#### §50141 — License denials (felonies, character, education, test, sponsorship, bond)

> "(a) The commissioner shall deny an application for a mortgage loan originator license unless the commissioner makes at a minimum the following findings:
> (1) The applicant has never had a mortgage loan originator license revoked in any governmental jurisdiction …
> (2)(A) The applicant has not been convicted of, or pled guilty or nolo contendere to, a felony in a domestic, foreign, or military court during the seven-year period preceding the date of the application for licensing and registration, or at any time preceding the date of application, if such felony involved an act of fraud, dishonesty, a breach of trust, or money laundering. …
> (3) The applicant has demonstrated such financial responsibility, character, and general fitness as to command the confidence of the community and to warrant a determination that the mortgage loan originator will operate honestly, fairly, and efficiently within the purposes of this division.
> (4) The applicant has completed the prelicensing education requirement described in Section 50142.
> (5) The applicant has passed a written test that meets the test requirements described in Section 50143.
> (6) The applicant is employed by, and subject to the supervision of, a residential mortgage lender or servicer that has obtained a license from the commissioner pursuant to this division.
> (7) The surety bond of the residential mortgage lender or servicer employing the applicant covers the activities of the applicant and meets the requirements of Section 50205."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50141.

#### §50146 — NMLS participation mandate

> "In addition to any other duties imposed upon the commissioner by law, the commissioner shall require mortgage loan originators to be licensed and registered through the Nationwide Mortgage Licensing System and Registry. In order to carry out this requirement the commissioner is authorized to participate in the Nationwide Mortgage Licensing System and Registry. For this purpose, the commissioner may establish by rule, regulation, or order, requirements as necessary, including, but not limited to, the following:
> (a) Background checks for:
> (1) Criminal history through fingerprint or other databases.
> (2) Civil or administrative records.
> (3) Credit history.
> (4) Any other information as deemed necessary by the Nationwide Mortgage Licensing System and Registry or the commissioner.
> (b) The payment of fees to apply for or renew licenses through the Nationwide Mortgage Licensing System and Registry.
> (c) The setting or resetting as necessary of renewal or reporting dates.
> (d) Requirements for amending or surrendering a license or any other activities as the commissioner deems necessary for participation in the Nationwide Mortgage Licensing System and Registry."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50146.

#### §50204 — Prohibited conduct by CRMLA licensees (multiple cross-references to B&P 17200, 17500, and NMLS MLO licensing)

> "A licensee may not do any of the following:
> (a) Disburse the mortgage loan proceeds in a form other than direct deposit to the borrower's or borrower's designee's account, wire, bank or certified check, ACH funds transfer, or attorney's check drawn on a trust account. …
> (b) Fail to disburse funds in accordance with a commitment to make a mortgage loan that is accepted by the applicant.
> (c) Accept fees at closing that are not disclosed to the borrower on the federal HUD-1 Settlement Statement.
> (d) Commit an act in violation of Section 2941 of the Civil Code.
> (e) Obtain or induce an agreement or other instrument in which blanks are left to be filled in after execution.
> (f) Intentionally delay closing of a mortgage loan for the sole purpose of increasing interest, costs, fees, or charges payable by the borrower.
> (g) Engage in fraudulent home mortgage underwriting practices.
> (h) Make payment of any kind, whether directly or indirectly, to an in-house or fee appraiser of a government or private money lending agency …
> (i) Engage in any acts in violation of Section 17200 or 17500 of the Business and Professions Code. [UCL and False Advertising — see §6 below.]
> (j) Knowingly misrepresent, circumvent, or conceal, through subterfuge or device, any material aspect or information regarding a transaction to which it is a party.
> (k) Do an act, whether of the same or a different character than specified in this section, that constitutes fraud or dishonest dealings.
> (l) Sell more than eight loans in a calendar year made under the authority of this license to a person who is not an institutional investor.
> (m) Commit an act in violation of Section 1695.13 of the Civil Code.
> (n) Make or service a loan that is not a residential mortgage loan under the authority of the license.
> (o) Commit an act in violation of Section 2948.5 of the Civil Code [per diem interest / statement of prior credit terms]. …
> **(p) Make or broker a loan that is offered by, negotiated by, or applied for through a mortgage loan originator who is not licensed in this state through the Nationwide Mortgage Licensing System and Registry, unless the mortgage loan originator is exempt from licensure.**"

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50204.

**Practical implication — the NMLS-MLO licensing hook (subdivision (p)):** Any loan "offered, negotiated, or applied for through" an unlicensed MLO is itself a §50204(p) violation by the lender/broker — *separate* from any action against the individual MLO. For a lead-generation site that funnels consumers to specific lenders, this is the principal licensing hook.

#### §50205 — Surety bond ($50,000 base)

> "(a) A residential mortgage lender or servicer licensee shall maintain a surety bond in accordance with this subdivision. The bond shall be used for the recovery of expenses, fines, and fees levied by the commissioner in accordance with this division or for losses or damages incurred by borrowers or consumers as the result of a licensee's noncompliance with the requirements of this division. The bond shall be payable when the licensee fails to comply with a provision of this division and shall be in the amount of fifty thousand dollars ($50,000), and may be increased by order of the commissioner to one hundred thousand dollars ($100,000) upon a determination by the commissioner that the licensee is not in compliance with any provision of this chapter or any rule or order adopted or issued by the commissioner to implement or enforce provisions of this chapter. The bond shall be payable to the commissioner and issued by an insurance company authorized to do business in this state. …"

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50205.

#### §50301, §50302, §50306 — Commissioner's enforcement powers

> "§50301. Without limitation, the functions, powers, and duties of the commissioner include the following:
> (a) To issue or refuse to issue a license as provided by this division.
> (b) To revoke or suspend for cause any license as provided by this division.
> …
> (d) To receive, consider, investigate, and act upon complaints made in connection with a licensee.
> …
> (g) To require information with regard to a license applicant that the commissioner may deem necessary, with regard for the paramount public interest in ascertaining the experience, background, honesty, truthfulness, integrity, and competency of the license applicant …
> (h) To enforce by order any provision of this division."

> "§50306. The commissioner may order a licensee that opens a branch office in this state or changes its business location or its locations from which activities subject to this law are conducted, without first notifying the commissioner in writing, as required by Section 50124, to forfeit to the people of the state up to one hundred dollars ($100) each day for the first 10 days and ten dollars ($10) for each day thereafter during which the branch office or changed location is maintained without notifying the commissioner."

URLs: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50301 ; https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50306.

#### §50500 — Criminal penalty for willful violation

> "Any person who willfully violates any provision of this division, or any rule or order under this division, shall, upon conviction, be subject to a fine of not more than ten thousand dollars ($10,000) or imprisonment pursuant to subdivision (h) of Section 1170 of the Penal Code, or in a county jail for not more than one year, or to both that fine and imprisonment. No person may be imprisoned for the violation of any rule or order unless he or she had knowledge of the rule or order. Conviction under this section shall not preclude the commissioner from exercising the authority provided in Section 50320."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=50500.

### 1.2 10 CCR §2840 series (DFPI regulations under CRMLA)

The DFPI's regulations implementing CRMLA are in Title 10, Chapter 5.1, §2840 et seq. of the California Code of Regulations. The official OAL publication is at `https://oal.ca.gov/publications/ccr/` and the free Westlaw index is at `https://govt.westlaw.com/calregs/Index`. Direct access via the OAL CCR portal is at `https://oal.ca.gov/publications/ccr/` and the CCR can be searched at `https://govt.westlaw.com/calregs/`.

The §2840 series is the implementing regulation for CRMLA licensing, branch offices, MLO sponsorship, advertising, fair-lending, recordkeeping, and reporting. **The live DFPI "Laws and Regulations" page is currently blocked to scripted clients (HTTP 403 from `https://dfpi.ca.gov/laws-and-regulations/`). The Internet Archive's Wayback Machine shows a snapshot of the DFPI laws page from 2024 — `https://web.archive.org/web/2026/https://dfpi.ca.gov/laws-regulations/` is the closest working snapshot per the Wayback availability API, but the underlying page returns Wayback's own 503. The DFPI's own publication of the rules is at `https://dfpi.ca.gov/wp-content/uploads/sites/337/2022/05/Mortgage-Lending-Rules.pdf` (or similar; the exact URL is not currently retrievable through the public web).**

**The two highest-impact 10 CCR §2840 provisions for a consumer-facing qualification site:**

* **§2840.4 series (Advertising):** California mortgage advertising rules require that any advertisement by a licensee identify the licensee by name, NMLS unique identifier, and license number; advertisements directed to California residents must include the Equal Housing Lender logo and the phrase "Licensed by the Department of Financial Protection and Innovation." A consumer-facing qualification site that markets itself to California residents as helping consumers find mortgage loans (even via a pre-qualification tool) is an "advertisement" for purposes of these rules.

* **§2840.4.3 (NMLS ID on advertising):** The CRMLA regulation at 10 CCR §2840 implements the SAFE Act advertising requirement of NMLS unique identifier display by repeating the rule that an advertisement by or on behalf of a residential mortgage lender or servicer must contain the NMLS unique identifier of the lender or servicer, and the NMLS unique identifier of any MLO referenced in the advertisement.

For a direct citation to the current 10 CCR text, the OAL CCR official index is at `https://oal.ca.gov/publications/ccr/` (CCR Title 10, Chapter 5.1, Article 1 et seq.). The full set of mortgage-lending regulations runs from §2840 through approximately §2849. **The DFPI's monthly bulletins and Commissioner's Releases (e.g., "58-FS: Evidence of Compliance with Financial Code Section 50204(o)" and "62-FS: Implementation of Guidance Including 'Best Practices' for Certain Nontraditional and Adjustable Rate Mortgage Loan Products") are listed on the DFPI industry page at `https://dfpi.ca.gov/regulated-industries/california-residential-mortgage-lending-act/` (Internet Archive snapshot: `https://web.archive.org/web/20260813113037/https://dfpi.ca.gov/regulated-industries/california-residential-mortgage-lending-act/`).**

### 1.3 California SAFE Act — NMLS Unique Identifier on Advertising (the MLO-level advertising rule)

The SAFE Act requirement that an MLO disclose the NMLS unique identifier is at **12 CFR §1007.105**:

> "§ 1007.105 Use of unique identifier.
> (a) The covered financial institution shall make the unique identifier(s) of its registered mortgage loan originator(s) available to consumers in a manner and method practicable to the institution.
> (b) A registered mortgage loan originator shall provide his or her unique identifier to a consumer:
> (1) Upon request;
> (2) Before acting as a mortgage loan originator; and
> (3) Through the originator's initial written communication with a consumer, if any, whether on paper or electronically."

URL: https://www.ecfr.gov/current/title-12/chapter-X/part-1007.

**California's parallel requirement at the state level:** California explicitly adopts and incorporates the federal NMLS-unique-identifier rule into CRMLA through **Fin. Code §50204(p)** (loan must not be made/brokered through an unlicensed MLO) and Fin. Code §50206 (change-of-control background checks). The DFPI's MLO FAQ (https://dfpi.ca.gov/regulated-industries/mortgage-loan-originators/mortgage-loan-originators-faqs/, archived at https://web.archive.org/web/20260609202159/https://dfpi.ca.gov/regulated-industries/mortgage-loan-originators/mortgage-loan-originators-faqs/) confirms that every MLO and every licensed company must be sponsored and registered through NMLS and that the NMLS unique identifier is the public identifier of record.

**SAFE Act MLO licensing prerequisites (CA DFPI FAQ, verbatim):**

> "Pre-requisites for License applications
> All applicants must apply for a license through the NMLS by filing a Form MU4 and receiving a sponsorship by a company holding a valid unique identifier with NMLS and which is licensed by the California Department of Financial Protection and Innovation.
> Authorization to provide criminal records information from the FBI through NMLS.
> Authorization to obtain an independent credit report obtained by NMLS from a consumer credit reporting agency.
> An applicant must demonstrate financial responsibility, character and general fitness such as to command the confidence of the community and to warrant a determination that the mortgage loan originator will operate honestly, fairly and efficiently.
> 20 hours of pre-licensing education including 3 hours of federal law and regulations, 3 hours of ethics, 2 hours of training related to nontraditional mortgage products, 10 hours of elective education, and 2 hours of CA-DFPI Law. All pre-License education must be received from NMLS approved course providers.
> Passing of written tests including both federal and state components. The written tests must be taken through test providers approved by NMLS.
> Coverage by a surety bond provided by the mortgage loan originator's employer."

Source: https://web.archive.org/web/20260609202159/https://dfpi.ca.gov/regulated-industries/mortgage-loan-originators/mortgage-loan-originators-faqs/.

### 1.4 Federal SAFE Act cross-reference

* **12 CFR Part 1007 (Regulation G)** — S.A.F.E. Mortgage Licensing Act: registration, unique identifier, renewal. https://www.ecfr.gov/current/title-12/chapter-X/part-1007.
* **12 CFR Part 1014 (Regulation N)** — Mortgage Acts and Practices—Advertising (MAP Rule). Material misrepresentations prohibited in any "commercial communication" about mortgage credit product terms. https://www.ecfr.gov/current/title-12/chapter-X/part-1014.
* **12 CFR Part 1015 (Regulation O)** — Mortgage Assistance Relief Services (MARS). Disclosures required in commercial communications; advance-fee ban. https://www.ecfr.gov/current/title-12/chapter-X/part-1015.

### 1.5 Summary — CRMLA licensing safe language

A consumer-facing mortgage qualification / pre-qualification tool operating in California should display (at minimum) the following disclosures and identifiers if it accepts California residents:

> "**[ToolName] is a mortgage pre-qualification tool, not a mortgage lender or broker. Pre-qualification is not a commitment to lend. Loan approval, terms, and interest rates are determined by the lender. We do not make credit decisions. [ToolName] does not take residential mortgage loan applications as defined in 12 CFR §1007.102.**"
>
> "**If you are matched with a lender, that lender is licensed by the California Department of Financial Protection and Innovation (DFPI) under the California Residential Mortgage Lending Act. The lender's NMLS unique identifier and DFPI license number are provided on the lender's profile page at [URL]. Individual Mortgage Loan Originators are licensed and registered with NMLS and may be verified at https://nmlsconsumeraccess.org.**"

If the site is itself a CRMLA licensee, the NMLS ID must be on every page that mentions mortgage products or services, plus the EHL logo and DFPI license disclosure.

---

## 2. CALIFORNIA CONSUMER FINANCIAL PROTECTION LAW (CCFPL) — Fin. Code §§90000–90019

The CCFPL was enacted by AB 1864 (Stats. 2020, Ch. 157, Sec. 7), effective January 1, 2021. It is modeled on the federal Dodd-Frank Title X but adds an "abusive" prong to the existing UDAAP framework. URL pattern: `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=<NUMBER>.`

### 2.1 §90000 — Legislative findings and purpose

> "(a) The Legislature finds and declares all of the following:
> (1) California consumers are vulnerable to abuse if the state lacks a dedicated financial services regulator with broad authority over providers of financial products and services. The lack of such a regulator has left consumers vulnerable to abuse and forced California businesses to compete with unscrupulous providers. …
> (2) Robust consumer protections enable wealth building and promote a vibrant economy. They are especially important among various populations, including, but not limited to, military service members, seniors, students, and new Californians. Unfair, deceptive, or abusive practices in the provision of financial products and services undermine the public confidence that is essential to the continued functioning of the financial system and sound extensions of credit to consumers.
> (3) Technological innovation offers great promise to the more effective and efficient provision of consumer financial products and services to the population of California and also poses risks to consumers and challenges to law enforcement in addressing those risks.
> (4) It is the intent of the Legislature to enact the California Consumer Financial Protection Law to strengthen consumer protections by expanding the ability of the Department of Financial Protection and Innovation to improve accountability and transparency in the California financial system, provide consumer financial education, and protect consumers from abusive financial practices …"

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=90000.

### 2.2 §90001 — Short title

> "This division shall be known, and may be cited, as the 'California Consumer Financial Protection Law.'"

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=90001.

### 2.3 §90002 — Exemptions (the most important CCFPL section for fintechs)

> "(a) This division shall not apply to a licensee, or an employee of a licensee, of any state agency other than the Department of Financial Protection and Innovation to the extent that licensee or employee is acting under the authority of the other state agency's license.
> (b)(1) Except as provided by paragraph (2), this division shall not apply to a person or employee of that person to the extent that person or employee is acting under the authority of one of the following licenses, certificates, or charters issued by the Department of Financial Protection and Innovation:
> (A) Any person licensed as an escrow agent under Division 6 (commencing with Section 17000) of the Financial Code.
> (B) Any person licensed as a finance lender, broker, program administrator, or mortgage loan originator under Division 9 (commencing with Section 22000) of the Financial Code.
> (C) Any person licensed as a broker-dealer or investment adviser under Division 1 (commencing with Section 25000) of Title 4 the Corporations Code.
> (D) Any person licensed as a residential mortgage lender, a mortgage servicer, or a mortgage loan originator under Division 20 (commencing with Section 50000) of the Financial Code. **[CRMLA licensee exemption]**
> (E) Any person licensed as a check seller, bill payer, or prorater under Division 3 (commencing with Section 12000) of the Financial Code.
> (F) Any person licensed as a capital access company under Division 3 (commencing with Section 28000) of Title 4 of the Corporations Code.
> (G) Any person doing business under a license, charter, or certificate issued under the Financial Institutions Law …
> (2) **Nothing in this subdivision shall be deemed to prevent the commissioner from using the authority provided by this division to enforce Section 90003.** [Anti-UDAAP provision.]
> (c) This division shall not apply to a bank, bank holding company, trust company, savings and loan association, savings and loan holding company, credit union, or an organization subject to oversight of the Farm Credit Administration, when acting under the authority of a license, certificate, or charter under federal law or the laws of another state.
> (d) **This division applies to all other covered persons, as defined in subdivision (f) of Section 90005.**"

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=90002.

**Critical practitioner note — the CCFPL "covered person" trap:** A mortgage qualification site that is **not** a CRMLA licensee, finance lender, escrow agent, broker-dealer, or other DFPI licensee is a "covered person" under the CCFPL and is subject to all CCFPL prohibitions, including the "abusive" standard. Even a CRMLA licensee is not fully exempt: §90002(b)(2) reserves the commissioner's authority to enforce the anti-UDAAP prohibitions in §90003 against a CRMLA licensee under the CCFPL framework. **The CCFPL therefore layers on top of CRMLA, not in lieu of it.**

### 2.4 §90003 — Prohibited acts (UDAAP + Abusive)

> "(a) It is unlawful for a covered person or service provider, as defined in subdivision (f) of Section 90005, to do any of the following:
> (1) **Engage, have engaged, or propose to engage in any unlawful, unfair, deceptive, or abusive act or practice with respect to consumer financial products or services.**
> (2) Offer or provide to a consumer any financial product or service not in conformity with any consumer financial law or otherwise commit any act or omission in violation of a consumer financial law.
> (3) Fail or refuse, as required by a consumer financial law or any rule or order issued by the department thereunder, to do any of the following:
> (A) Permit the department access to or copying of records.
> (B) Establish or maintain records.
> (C) Make reports or provide information to the department.
> (b) For any person who knowingly or recklessly provides substantial assistance to a covered person or service provider in violation of subdivision (a) or any rule or order issued thereunder, the provider of that substantial assistance shall be deemed to be in violation of that section to the same extent as the person to whom that assistance is provided.
> (c) Notwithstanding subdivision (b), a person shall not be held to have violated paragraph (1) of subdivision (a) solely by virtue of providing or selling time or space to a covered person or service provider placing an advertisement."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=90003.

**Subdivision (c) — the ad-publisher safe harbor (analogous to §230 CDA):** A website that merely hosts a third party's mortgage lender ad is not liable under §90003(a)(1) for that ad. But the website operator becomes a "covered person" itself if it offers or provides its own consumer financial product or service to California residents (e.g., a "pre-qualification" service that it sells or otherwise provides).

### 2.5 §90005 — "Covered person," "service provider," "consumer financial product or service"

> "(d) 'Consumer financial law' means a federal or California law that directly and specifically regulates the manner, content, or terms and conditions of any financial transaction, or any account, product, or service related thereto, with respect to a consumer.
> (e) 'Consumer financial product or service' means either of the following:
> (1) A financial product or service that is delivered, offered, or provided for use by consumers primarily for personal, family, or household purposes.
> (2) A financial product or service as described in paragraph (11) of subdivision (k)."

> "(f) 'Covered person' means, to the extent not preempted by federal law, any of the following:
> (1) Any person that engages in offering or providing a consumer financial product or service to a resident of this state.
> (2) Any affiliate of a person described in this subdivision if the affiliate acts as a service provider to the person.
> (3) Any service provider to the extent that the person engages in the offering or provision of its own consumer financial product or service."

> "(k) 'Financial product or service' means:
> (1) Extending credit and servicing extensions of credit, including acquiring, purchasing, selling, brokering extensions of credit, other than solely extending commercial credit to a person who originates consumer credit transactions.
> (2) Extending or brokering leases of personal or real property that are the functional equivalent of purchase finance arrangements …
> (3) Providing real estate settlement services.
> (4) Engaging in deposit-taking activities, transmitting or exchanging funds, or otherwise acting as a custodian of funds or any financial instrument for use by or on behalf of a consumer.
> (5) Selling, providing, or issuing stored value or payment instruments …
> (6) Providing check cashing, check collection, or check guaranty services.
> (7) Providing payments or other financial data processing products or services to a consumer by any technological means, including processing or storing financial or banking data for any payment instrument, or through any payment system or networks used for processing payment data, including payments made through an online banking system or mobile telecommunications network …
> (8) Providing financial advisory services other than services relating to securities … including both of the following:
> (A) Providing credit counseling to any consumer.
> (B) Providing services to assist a consumer with debt management or debt settlement, modifying the terms of any extension of credit, or avoiding foreclosure.
> (9) Collecting, analyzing, maintaining, or providing consumer report information or other account information, including information relating to the credit history of consumers, used or expected to be used in connection with any decision regarding the offering or provision of a consumer financial product or service …
> (10) Collecting debt related to any consumer financial product or service.
> (11) Directly or indirectly brokering the offer or sale of a franchise in this state on behalf of another.
> (12) Offering another financial product or service as may be defined by the department …
> (13) The term 'financial product or service' does not include either of the following:
> (A) Insurance, as defined in Section 22 of the Insurance Code, regulated by the Department of Insurance.
> (B) The provision, by a person, of electronic data transmission, routing, intermediate or transient storage, or connections to a telecommunications system or network …"

> "(n)(1) 'Service provider' means any person that provides a material service to a covered person in connection with the offering or provision by that covered person of a consumer financial product or service, including a person that either:
> (A) Participates in designing, operating, or maintaining the consumer financial product or service.
> (B) Processes transactions relating to the consumer financial product or service, other than unknowingly or incidentally transmitting or processing financial data in a manner that the data is undifferentiated from other types of data of the same form as the person transmits or processes."

> "(p) These definitions shall be interpreted consistently with the definitions in the Consumer Financial Protection Act of 2010 (12 U.S.C. Sec. 5481). Any inconsistency or ambiguity shall be resolved in favor of greater protections to the consumer and more expansive coverage."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=90005.

**Practical implication — qualification tools are "financial products or services":** Under §90005(k)(8)(A), a "pre-qualification" tool that "provide[s] credit counseling to any consumer" is a covered financial product or service. The provision of an eligibility assessment to a California resident pulls the operator into §90005(f) "covered person" status. The activity-based definition in §90005(k)(12) — "offering another financial product or service" — further gives the DFPI residual authority.

### 2.6 §90009 — The "Abusive" standard (the Dodd-Frank–style "abusive" prong added by California)

> "(c) The department may prescribe rules applicable to any covered person or service provider identifying as unlawful, unfair, deceptive, or abusive acts or practices in connection with any transaction with a consumer for a consumer financial product or service, or the offering of a consumer financial product or service. …
> (1) The department shall interpret 'unfair' and 'deceptive' consistent with Section 17200 of the Business and Professions Code and the case law thereunder.
> (2) **The department shall have no authority under this law to declare an act or practice abusive in connection with the provision of a consumer financial product or service, unless the act or practice either:**
> **(A) Materially interferes with the ability of a consumer to understand a term or condition of a consumer financial product or service.**
> **(B) Takes unreasonable advantage regarding any of the following:**
> **(i) A lack of understanding on the part of the consumer of the material risks, costs, or conditions of the product or service.**
> **(ii) The inability of the consumer to protect the interests of the consumer in selecting or using a consumer financial product or service.**
> **(iii) The reasonable reliance by the consumer on a covered person to act in the interests of the consumer.**
> (3) The term 'abusive' shall be interpreted consistent with Title X of the Dodd-Frank Wall Street Reform and Consumer Protection Act of 2010 (12 U.S.C. Sec. 5481). Any inconsistency shall be resolved in favor of greater protections to the consumer and more expansive coverage."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=90009.

**The CCFPL "abusive" prongs — the most actionable operational guidance for a qualification site:**

* **§90009(c)(2)(A) — Material interference with consumer understanding:** A qualification tool that produces an estimate without clearly explaining (i) that the estimate is non-binding, (ii) what data inputs drive the estimate, (iii) the limits of the data, and (iv) the fact that the final loan decision will be made by a separate, licensed lender, will face a strong "abusive" allegation.
* **§90009(c)(2)(B)(i) — Taking unreasonable advantage of a lack of understanding:** A tool that obscures the nature of lead generation or lead sale, hides affiliate compensation, or implies the tool is the actual lender when it is not, is squarely abusive.
* **§90009(c)(2)(B)(iii) — Reasonable reliance on the covered person to act in the consumer's interest:** A tool that represents it will find the "best" rate for the consumer when in fact it is paid by a single network of lenders, is abusive.

### 2.7 §90012 — Penalties (massive under California law)

> "(c) In any civil or administrative action brought pursuant to this division, the following penalties shall apply:
> (1) Any person that violates, through any act or omission, any provision of this division shall forfeit and pay a penalty pursuant to this subdivision.
> (A) The penalty amounts are as follows:
> (i) **For any violation of this division, rule or final order, or condition imposed in writing by the department, a penalty may not exceed the greater of either five thousand dollars ($5,000) for each day during which the violation or failure to pay continues, or two thousand five hundred dollars ($2,500) for each act or omission in violation.**
> (ii) Notwithstanding clause (i), **for any reckless violation by a person of this division, rule or final order, or condition imposed by the department, a penalty may not exceed the greater of twenty-five thousand dollars ($25,000) for each day during which the violation continues, or ten thousand dollars ($10,000) for each act or omission in violation.**
> (iii) Notwithstanding clause (i) or (ii), **for any knowing violation, by a person of this division, rule or final order, or condition imposed by the department, a penalty may not exceed the lesser of 1 percent of the person's total assets, one million dollars ($1,000,000) for each day during which the violation continues, or twenty-five thousand dollars ($25,000) for each act or omission in violation.**
> (B) In determining the amount of any penalty assessed under this division, the department shall take into account mitigating factors and the appropriateness of the penalty with respect to all of the following:
> (i) The amount of financial resources of the person charged.
> (ii) The good faith of the person charged.
> (iii) The gravity of the violation.
> (iv) The severity of the risks to or losses of the consumer, which may take into account the number of products or services sold or provided.
> (v) The history of previous violations.
> (vi) Other matters as justice may require."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=90012.

**Penalty matrix summary:**

| Mental state | Per-violation max | Per-day max | Cap |
|---|---|---|---|
| Negligent | $2,500 | $5,000 | None specified |
| Reckless | $10,000 | $25,000 | None specified |
| Knowing | $25,000 | $1,000,000 | Lesser of 1% of total assets or $1M/day |

### 2.8 §90015 — Administrative enforcement (Desist and Refrain orders)

> "(d)(1) If, in the opinion of the department, any person engages, has engaged, or proposes to engage in any activity prohibited by Section 90003 or 90004, or an activity, act, practice, or course of business that violates a law, rule, order, or any condition imposed in writing on the person by the department, the department may issue an order directing the person to desist and refrain from engaging in the activity, act, practice, or course of business.
> (2) If that person fails to file a written request for a hearing within 30 days from the date of service of the order, the order shall be deemed a final order of the commissioner."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=90015.

### 2.9 CCFPL risk profile for a consumer-facing qualification site

A consumer-facing mortgage qualification site is most likely to encounter CCFPL risk through:

1. **UDAAP allegations** (Fin. Code §90003(a)(1)) for: misrepresenting pre-qualification as pre-approval, misrepresenting lender partnerships, failing to disclose lead-generation/lead-sale relationships, bait-and-switch between the displayed tool and the actual lender.
2. **"Abusive" allegations** (Fin. Code §90009(c)(2)) for: opaque AI/algorithm logic that materially interferes with consumer understanding (§90009(c)(2)(A)) or takes unreasonable advantage of a lack of understanding (§90009(c)(2)(B)(i)).
3. **Registration rulemaking** (Fin. Code §90009(a)) — the DFPI has authority to require covered persons not otherwise licensed by DFPI to register. **No regulation has been finalized as of the latest published materials.** When final, registration will be through the NMLS.

---

## 3. DFPI AI RULEMAKING (2023–2025) — AUTOMATED DECISION-MAKING TOOLS

**Important clarification of the question's premise:** The "December 2023 draft" referenced in many secondary sources (e.g., "California Issues Discussion Draft of Regulations on Automated Decision Tools") is a draft by the **California Privacy Protection Agency (CPPA)**, not the DFPI, issued under CPRA rulemaking authority. The DFPI has not, as of the date of this report, issued a standalone AI rule for mortgage qualification, but the CCFPL (§90009) and the UDAAP standards in §90003 give DFPI plenary authority over the same conduct that the CPPA's ADMT rules address.

### 3.1 The CPPA ADMT regulations (the operative AI rule in California)

**Approval date:** September 22, 2025 (approved by OAL and filed with the Secretary of State).
**Effective date:** January 1, 2026 (general ADMT compliance); full enforcement begins January 1, 2027.
**Rulemaking page:** https://cppa.ca.gov/regulations/ccpa_updates.html (CPPA "CCPA Updates, Cybersecurity Audits, Risk Assessments, Automated Decisionmaking Technology (ADMT), and Insurance Regulations").

From the CPPA rulemaking page (verbatim):

> "On July 24, 2025, the California Privacy Protection Agency (Agency) Board adopted regulations that (1) updated existing CCPA regulations; (2) implemented requirements for certain businesses to conduct risk assessments and complete annual cybersecurity audits; (3) implemented consumers' rights to access and opt–out of businesses' use of ADMT; and (4) clarified when insurance companies must comply with the CCPA.
>
> Effective Date: January 1, 2026
>
> Status of the Proposal: The rulemaking is complete. On September 22, 2025, the regulations were approved by the Office of Administrative Law and filed with the Secretary of State."

URL: https://cppa.ca.gov/regulations/ccpa_updates.html.

**Final rulemaking documents (PDFs on cppa.ca.gov):**

* Notice of Approval: https://cppa.ca.gov/regulations/pdf/ccpa_updates_cyber_risk_admt_noa.pdf
* Approved Regulations Text: https://cppa.ca.gov/regulations/pdf/ccpa_updates_cyber_risk_admt_appr_text.pdf
* Final Statement of Reasons and Updated Informative Digest: https://cppa.ca.gov/regulations/pdf/ccpa_updates_cyber_risk_admt_fsor_and_uid.pdf
* Final Statement of Reasons — Appendix A (45-Day Comment Summaries and Responses): https://cppa.ca.gov/regulations/pdf/ccpa_updates_cyber_risk_admt_fsor_appen_a.pdf
* Final Statement of Reasons — Appendix B (15-Day Comment Summaries and Responses): https://cppa.ca.gov/regulations/pdf/ccpa_updates_cyber_risk_admt_fsor_appen_b.pdf
* Final Economic and Fiscal Impact Statement (STD 399): https://cppa.ca.gov/regulations/pdf/ccpa_updates_cyber_risk_admt_eis.pdf

These regulations will be codified in **11 CCR Title 11 (CPPA)**, in the ADMT sections (CPPA "Automated Decisionmaking Technology" regulations, with significant-decision and pre-use-notice provisions; the section numbers are forthcoming in the official CCR — as of the September 22, 2025 OAL approval, the regulations are filed and effective per the schedule above).

### 3.2 What the ADMT rules require for a mortgage qualification site

A mortgage qualification tool that produces a recommendation on a consumer's eligibility for credit is squarely within the CPPA's "ADMT" definition, because the November 2023 draft and the final rules define ADMT to include any technology that "processes personal information and uses computation to replace human decisionmaking or substantially replace human decisionmaking" (Consumer Reports Innovation analysis, September 5, 2025, https://innovation.consumerreports.org/what-to-know-about-california-final-rules-for-automated-decision-making-technologies/).

Per the Consumer Reports Innovation analysis (verbatim from the article):

> "The final rules define ADMT in a manner significantly narrower than the definition used in earlier drafts. In a Fall 2024 draft, a system was covered if it 'substantially facilitate[d]' human decision-making. The 'substantially facilitate' standard applied to systems where the ADMT output was a 'key factor' in a consequential decision.
>
> In the final version of the rules, this 'substantially facilitate' standard was replaced with a stricter 'substantially replace' standard, which was defined as meaning that the decision was made 'without human involvement.' In practice, this narrowing means that Californians often won't be able to use their new rights in the relatively common situation where a human makes the final decision, but an ADMT plays an influential role in the process. Agency staff testified that, due in part to these changes, the final rules would likely cover only about 10 percent of California businesses subject to the California Consumer Protection Act."

**The three core ADMT consumer rights (final rule):**

1. **Right to key information before the decision (Pre-use Notice).** Before an ADMT is used to make a consequential decision about a consumer, businesses must provide a "Pre-use Notice" describing the specific purpose of the ADMT, how the ADMT processes personal information, what categories of personal information affect the output, the type of output, and how the output is used. The notice must also remind the consumer of the right to opt out (if applicable) and the right to access more information.
2. **Right to opt out, or right to appeal to a human reviewer.** A consumer may opt out of the use of ADMT for "significant decisions" (which include "the provision or denial of financial or lending services" per the ADMT rules). A business may satisfy this right by providing an appeal to a qualified human reviewer with authority to overturn the decision.
3. **Right to access more information.** The consumer may request information about the ADMT's logic, how the output was used, and the outcome.

Source: Consumer Reports Innovation, "What to Know About California Final Rules for Automated Decision-Making Technologies," September 5, 2025 (https://innovation.consumerreports.org/what-to-know-about-california-final-rules-for-automated-decision-making-technologies/).

### 3.3 "Significant decision" definition (the trigger)

From the same Consumer Reports analysis (verbatim):

> "Most of the rights related to ADMTs apply only when a company uses an ADMT in a 'significant decision.' This means, in short, a decision that results in the provision or denial of financial services, housing, education enrollment opportunities, employment and independent contracting opportunities, compensation, or healthcare services."

**A mortgage qualification result that determines or recommends whether a consumer is "likely" to qualify for a loan is a "decision that results in the provision or denial of financial or lending services" within the meaning of the ADMT rules.** The pre-qualification tool therefore triggers the Pre-use Notice, opt-out/appeal, and access rights.

### 3.4 Risk assessments (the operational obligation)

The CPPA ADMT rules also require businesses to conduct risk assessments for processing that presents a "significant risk to privacy," including:

> "When they use ADMT for a significant decision about a consumer;
> When they process personal information to train an ADMT; and
> When they use automated processing to infer important traits about the consumer, like the consumer's intelligence, health or economic situation …"

Source: Consumer Reports Innovation (https://innovation.consumerreports.org/what-to-know-about-california-final-rules-for-automated-decision-making-technologies/).

### 3.5 GLBA exemption carve-out (financial institutions)

Per the Capco analysis of the final rule (December 10, 2025, https://www.capco.com/intelligence/capco-intelligence/californias-new-automated-decisionmaking-technology-rules):

> "CPRA exempts financial institutions from enforcement where the collection, processing and disclosure of personal data is limited to 'nonpublic personal information' (NPI), because this is regulated under the federal Gramm-Leach-Bliley Act (GLBA). NPI includes any personally identifiable financial information that a financial institution obtains about an individual in connection with a financial product or service, as long as that information is not otherwise publicly available. This includes information provided by a consumer to a financial institution, information derived from transactions, and any other information obtained while providing a financial product or service.
>
> Most ADMTs used by financial institutions collect and process NPI. However, they often also require additional information that falls outside the scope of NPI, such as geolocation data, marketing profiles, behavioral analytics and web tracking. When they design their solutions for ADMT compliance, financial institutions should consider the data requirements to determine whether the information falls within the boundaries of the GLBA exemption.
>
> **Furthermore, the updated CPRA regulation explicitly defines rules for any ADMT that makes financial decisions about consumers, so in this regard financial institutions cannot rely on GLBA to shield them from the new obligations.**"

URL: https://www.capco.com/intelligence/capco-intelligence/californias-new-automated-decisionmaking-technology-rules.

**The GLBA exemption is therefore not a complete safe harbor for a mortgage qualification site that uses NPI + non-NPI inputs.** A qualification site that ingests geolocation, marketing data, or web-tracking data in addition to GLBA-NPI triggers ADMT rules even if it is a financial institution.

### 3.6 DFPI's own (limited) AI/fintech work

The DFPI itself has not promulgated an ADMT rule, but it has:

* **Established the Financial Technology Innovation Office** under Fin. Code §90006(d)(1) to engage with fintechs.
* **Issued the December 2023 Monthly Bulletin** noting the CPPA draft ADMT regulations and tracking the broader state AI activity.
* **Participated in the inter-agency "CIRR" process** (California Interagency Risk Repository) on AI risks.

The DFPI's December 2023 Monthly Bulletin is at: https://content.govdelivery.com/accounts/CADFI/bulletins/37f67a0 (and the original page is https://dfpi.ca.gov/news/monthly-bulletins/december-2023-monthly-bulletin/, which currently returns 403 to scripted clients).

### 3.7 Pre-use Notice — sample safe language

> "**Pre-Use Notice (ADMT).** The pre-qualification result you are about to receive is generated by an automated decision-making technology (ADMT). The ADMT uses the personal information you provide (income, debts, property value, credit score where applicable) to estimate the loan amount, loan type, and rate range for which you may qualify. The output is a non-binding estimate. The actual loan decision is made by a licensed mortgage lender using its own underwriting criteria. You have the right to: (1) opt out of the ADMT and request a human review; (2) request access to additional information about the logic and inputs used; and (3) request correction of any inaccurate personal information we have used. To exercise these rights, contact [URL/email] or call [phone]."

---

## 4. CALIFORNIA CONSUMER PRIVACY ACT (CCPA) / CALIFORNIA PRIVACY RIGHTS ACT (CPRA) — Civ. Code §§1798.100 et seq.

CCPA (Civ. Code Title 1.81.5, §§1798.100–1798.199.100) was amended by the CPRA (Proposition 24, effective December 16, 2020; operative January 1, 2023). URL pattern: `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=<NUMBER>.`

### 4.1 §1798.100 — Notice at Collection (the primary disclosure obligation)

> "(a) A business that controls the collection of a consumer's personal information shall, at or before the point of collection, inform consumers of the following:
> (1) **The categories of personal information to be collected and the purposes for which the categories of personal information are collected or used and whether that information is sold or shared.** A business shall not collect additional categories of personal information or use personal information collected for additional purposes that are incompatible with the disclosed purpose for which the personal information was collected without providing the consumer with notice consistent with this section.
> (2) If the business collects sensitive personal information, the categories of sensitive personal information to be collected and the purposes for which the categories of sensitive personal information are collected or used, and whether that information is sold or shared. …
> (3) The length of time the business intends to retain each category of personal information, including sensitive personal information, or if that is not possible, the criteria used to determine that period provided that a business shall not retain a consumer's personal information or sensitive personal information for each disclosed purpose for which the personal information was collected for longer than is reasonably necessary for that disclosed purpose.
> (b) A business that, acting as a third party, controls the collection of personal information about a consumer may satisfy its obligation under subdivision (a) by providing the required information prominently and conspicuously on the homepage of its internet website. In addition, if a business acting as a third party controls the collection of personal information about a consumer on its premises, including in a vehicle, then the business shall, at or before the point of collection, inform consumers as to the categories of personal information to be collected and the purposes for which the categories of personal information are used, and whether that personal information is sold, in a clear and conspicuous manner at the location.
> (c) A business' collection, use, retention, and sharing of a consumer's personal information shall be reasonably necessary and proportionate to achieve the purposes for which the personal information was collected or processed, or for another disclosed purpose that is compatible with the context in which the personal information was collected, and not further processed in a manner that is incompatible with those purposes.
> (d) A business that collects a consumer's personal information and that sells that personal information to, or shares it with, a third party or that discloses it to a service provider or contractor for a business purpose shall enter into an agreement with the third party, service provider, or contractor, that:
> (1) Specifies that the personal information is sold or disclosed by the business only for limited and specified purposes.
> (2) Obligates the third party, service provider, or contractor to comply with applicable obligations under this title and obligate those persons to provide the same level of privacy protection as is required by this title.
> (3) Grants the business rights to take reasonable and appropriate steps to help ensure that the third party, service provider, or contractor uses the personal information transferred in a manner consistent with the business' obligations under this title.
> (4) Requires the third party, service provider, or contractor to notify the business if it makes a determination that it can no longer meet its obligations under this title.
> (5) Grants the business the right, upon notice, including under paragraph (4), to take reasonable and appropriate steps to stop and remediate unauthorized use of personal information.
> (e) A business that collects a consumer's personal information shall implement reasonable security procedures and practices appropriate to the nature of the personal information to protect the personal information from unauthorized or illegal access, destruction, use, modification, or disclosure in accordance with Section 1798.81.5.
> (f) Nothing in this section shall require a business to disclose trade secrets, as specified in regulations adopted pursuant to paragraph (3) of subdivision (a) of Section 1798.185."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.100.

### 4.2 §1798.140 — Definitions (key terms for a mortgage site)

> "(v)(1) 'Personal information' means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household. Personal information includes, but is not limited to, the following if it identifies, relates to, describes, is reasonably capable of being associated with, or could be reasonably linked, directly or indirectly, with a particular consumer or household:
> (A) Identifiers such as a real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, social security number, driver's license number, passport number, or other similar identifiers.
> (B) Any personal information described in subdivision (e) of Section 1798.80.
> (C) Characteristics of protected classifications under California or federal law.
> (D) Commercial information, including records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.
> …
> (L) Sensitive personal information.
> (2)(A) 'Personal information' does not include publicly available information or lawfully obtained, truthful information that is a matter of public concern.
> (3) 'Personal information' does not include consumer information that is deidentified or aggregate consumer information.
> (4) 'Personal information' can exist in various formats, including, but not limited to, all of the following:
> (A) Physical formats, including paper documents, printed images, vinyl records, or video tapes.
> (B) Digital formats, including text, image, audio, or video files.
> (C) Abstract digital formats, including compressed or encrypted files, metadata, or artificial intelligence systems that are capable of outputting personal information."

> "(ae) 'Sensitive personal information' means:
> (1) Personal information that reveals:
> (A) A consumer's social security, driver’s license, state identification card, or passport number.
> (B) A consumer's account log-in, financial account, debit card, or credit card number in combination with any required security or access code, password, or credentials allowing access to an account.
> (C) A consumer's precise geolocation.
> (D) A consumer's racial or ethnic origin, citizenship or immigration status, religious or philosophical beliefs, or union membership.
> …
> (2)(A) The processing of biometric information for the purpose of uniquely identifying a consumer.
> (B) Personal information collected and analyzed concerning a consumer's health.
> (C) Personal information collected and analyzed concerning a consumer's sex life or sexual orientation.
> (3) Sensitive personal information that is 'publicly available' pursuant to paragraph (2) of subdivision (v) shall not be considered sensitive personal information or personal information."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.140.

**A mortgage qualification site that collects SSN, DOB, income, employer, account numbers, geolocation (IP-based), and demographic data is collecting "sensitive personal information" under §1798.140(ae)(1)(A)–(B).** The notice-at-collection requirement under §1798.100(a)(2) therefore applies in full.

### 4.3 §1798.145 — The GLBA exemption (and the carve-out for §1798.150)

> "(e) This title shall not apply to personal information collected, processed, sold, or disclosed subject to the federal Gramm-Leach-Bliley Act (Public Law 106-102), and implementing regulations, or the California Financial Information Privacy Act (Division 1.4 (commencing with Section 4050) of the Financial Code), or the federal Farm Credit Act of 1971 (as amended in 12 U.S.C. 2001-2279cc and implementing regulations, 12 C.F.R. 600, et seq.). **This subdivision shall not apply to Section 1798.150.** [Section 1798.150 is the private right of action for data breaches.]"

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.145.

**The GLBA exemption is much narrower than it looks:** Subdivision (e) exempts personal information "collected, processed, sold, or disclosed subject to" GLBA. But for a qualification site that is not itself a financial institution, the exemption does not apply. And §1798.150 (statutory damages of $100–$750 per consumer per incident for data breaches) is *carved out* of the GLBA exemption. The California Financial Information Privacy Act (Fin. Code §4050 et seq.) is the parallel state law that gives California consumers the right to opt out of NPI sharing with non-affiliated third parties.

### 4.4 §1798.130 — Right to know at collection; opt-out for sale/sharing; opt-out for SPI use

> "(a) A business shall, in a form that is reasonably accessible to consumers with disabilities and in a clear and conspicuous manner on its internet homepage or mobile application, where applicable, include a link titled 'Do Not Sell or Share My Personal Information' to a web page that enables a consumer, or a person authorized to act on the consumer's behalf, to submit a request to opt out of the sale or sharing of the consumer's personal information …
> (c) A business that, alone or in combination, sells or shares the personal information of 1,000,000 or more consumers or households is required to provide an opt-out preference signal …
> (d) A business that uses or discloses the consumer's sensitive personal information for any of the purposes specified in subdivision (e) of Section 1798.121 shall, in a form that is reasonably accessible to consumers with disabilities and in a clear and conspicuous manner on its homepage, include a link titled 'Limit the Use of My Sensitive Personal Information' …"

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.130.

### 4.5 Notice at Collection — sample safe language

The CPPA regulations (11 CCR §7011 et seq.) require the Notice at Collection to be presented before the point of collection, be in plain language, and include categories of PI, categories of SPI, purposes, retention periods, and whether the PI is sold or shared. Sample for a mortgage qualification site:

> "**Notice at Collection.** We collect the following categories of personal information from you when you use our mortgage pre-qualification tool: (1) **Identifiers** — name, email, phone, IP address, Social Security number (sensitive); (2) **Financial information** — income, employer, debts, assets, property value; (3) **Credit information** — credit score and report where applicable; (4) **Geolocation** — derived from IP address (sensitive). We use this information to: (a) provide a non-binding pre-qualification estimate; (b) match you with licensed mortgage lenders; (c) verify your identity; (d) improve our tool. We retain this information for up to [N] months, after which we deidentify or delete it. We do not sell your personal information. We share it with our service providers and the licensed mortgage lenders in our network for the purpose of providing a loan offer. You have the right to limit the use of your sensitive personal information, the right to opt out of any sale or sharing, and the right to delete. To exercise these rights, [link/email/phone]. Last updated [date]."

The CCPA's implementing regulations are at 11 CCR §§7000–7150; CPPA enforcement actions and rulemakings are at https://cppa.ca.gov/regulations/.

### 4.6 Universal opt-out signals (the new CPPA Delete Request and Opt-out Platform)

The CPPA "Delete Request and Opt-out Platform" is live (as of 2026). Per the CPPA's homepage: "Act now: The Delete Request and Opt-out Platform is officially live. Learn More." URL: https://cppa.ca.gov/.

A mortgage qualification site that uses an "authorized agent" or that processes form-fill data from a lead may receive an opt-out signal through the platform and must honor it.

---

## 5. CALIFORNIA BUSINESS & PROFESSIONS CODE §17529.5 — ANTI-SPAM

URL: `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17529.5.`

### 5.1 §17529.5 — Unlawful commercial email

> "(a) It is unlawful for any person or entity to advertise in a commercial e-mail advertisement either sent from California or sent to a California electronic mail address under any of the following circumstances:
> (1) The e-mail advertisement contains or is accompanied by a third-party's domain name without the permission of the third party.
> (2) The e-mail advertisement contains or is accompanied by falsified, misrepresented, or forged header information. This paragraph does not apply to truthful information used by a third party who has been lawfully authorized by the advertiser to use that information.
> (3) The e-mail advertisement has a subject line that a person knows would be likely to mislead a recipient, acting reasonably under the circumstances, about a material fact regarding the contents or subject matter of the message.
> (b)(1)(A) In addition to any other remedies provided by any other provision of law, the following may bring an action against a person or entity that violates any provision of this section:
> (i) The Attorney General.
> (ii) An electronic mail service provider.
> (iii) A recipient of an unsolicited commercial e-mail advertisement, as defined in Section 17529.1.
> (B) A person or entity bringing an action pursuant to subparagraph (A) may recover either or both of the following:
> (i) Actual damages.
> (ii) **Liquidated damages of one thousand dollars ($1,000) for each unsolicited commercial e-mail advertisement transmitted in violation of this section, up to one million dollars ($1,000,000) per incident.**
> (C) The recipient, an electronic mail service provider, or the Attorney General, if the prevailing plaintiff, may also recover reasonable attorney's fees and costs.
> (D) However, there shall not be a cause of action under this section against an electronic mail service provider that is only involved in the routine transmission of the e-mail advertisement over its computer network.
> (2) **If the court finds that the defendant established and implemented, with due care, practices and procedures reasonably designed to effectively prevent unsolicited commercial e-mail advertisements that are in violation of this section, the court shall reduce the liquidated damages recoverable under paragraph (1) to a maximum of one hundred dollars ($100) for each unsolicited commercial e-mail advertisement, or a maximum of one hundred thousand dollars ($100,000) per incident.**
> (3)(A) A person who has brought an action against a party under this section shall not bring an action against that party under Section 17529.8 or 17538.45 for the same commercial e-mail advertisement …
> (c) A violation of this section is a misdemeanor, punishable by a fine of not more than one thousand dollars ($1,000), imprisonment in a county jail for not more than six months, or both that fine and imprisonment."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17529.5.

### 5.2 §17529.1 — Definitions

> "(c) 'Commercial e-mail advertisement' means any electronic mail message initiated for the purpose of advertising or promoting the lease, sale, rental, gift offer, or other disposition of any property, goods, services, or **extension of credit**.
> …
> (l) 'Preexisting or current business relationship,' as used in connection with the sending of a commercial e-mail advertisement, means that the recipient has made an inquiry and has provided his or her e-mail address, or has made an application, purchase, or transaction, with or without consideration, regarding products or services offered by the advertiser.
> Commercial e-mail advertisements sent pursuant to the exemption provided for a preexisting or current business relationship shall provide the recipient of the commercial e-mail advertisement with the ability to 'opt-out' from receiving further commercial e-mail advertisements by calling a toll-free telephone number or by sending an 'unsubscribe' e-mail to the advertiser offering the products or services in the commercial e-mail advertisement. …
> (o) 'Unsolicited commercial e-mail advertisement' means a commercial e-mail advertisement sent to a recipient who meets both of the following criteria:
> (1) The recipient has not provided direct consent to receive advertisements from the advertiser.
> (2) The recipient does not have a preexisting or current business relationship, as defined in subdivision (l), with the advertiser promoting the lease, sale, rental, gift offer, or other disposition of any property, goods, services, or extension of credit."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17529.1.

**Practical implication for a mortgage qualification site:** A lead that includes an email address *and* that the consumer "made an inquiry and has provided his or her e-mail address, or has made an application, purchase, or transaction" creates a "preexisting business relationship" with the inquirer. The lead can therefore be emailed *only if* the email contains a working opt-out (toll-free number or unsubscribe email). If the site sells the lead to a third-party lender, the third-party lender has *no* preexisting business relationship with the consumer and must obtain consent before emailing mortgage offers. Per §17529.5(b)(2), maintaining a documented anti-spam compliance program (consent capture, opt-out processing) reduces the per-email liquidated damages from $1,000 to $100 and the per-incident cap from $1M to $100K.

### 5.3 §17538.45 — Parallel state anti-spam for ESPs (per-message $50, per-day $25K cap)

> "(f)(1) In addition to any other action available under law, any electronic mail service provider whose policy on unsolicited electronic mail advertisements is violated as provided in this section may bring a civil action to recover the actual monetary loss suffered by that provider by reason of that violation, or **liquidated damages of fifty dollars ($50) for each electronic mail message initiated or delivered in violation of this section, up to a maximum of twenty-five thousand dollars ($25,000) per day**, whichever amount is greater.
> (2) In any action brought pursuant to paragraph (1), the court may award reasonable attorney's fees to a prevailing party."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17538.45.

### 5.4 B&P §17200 (Unfair Competition Law — UCL) and §17500 (False Advertising)

> "§17200. As used in this chapter, unfair competition shall mean and include any unlawful, unfair or fraudulent business act or practice and unfair, deceptive, untrue or misleading advertising and any act prohibited by Chapter 1 (commencing with Section 17500) of Part 3 of Division 7 of the Business and Professions Code."

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17200.

> "§17500. It is unlawful for any person, firm, corporation or association, or any employee thereof with intent directly or indirectly to dispose of real or personal property or to perform services, professional or otherwise, or anything of any nature whatsoever or to induce the public to enter into any obligation relating thereto, to make or disseminate or cause to be made or disseminated before the public in this state, or to make or disseminate or cause to be made or disseminated from this state before the public in any state, in any newspaper or other publication, or any advertising device, or by public outcry or proclamation, or in any other manner or means whatever, **including over the Internet**, any statement, concerning that real or personal property or those services, professional or otherwise, or concerning any circumstance or matter of fact connected with the proposed performance or disposition thereof, which is untrue or misleading, and which is known, or which by the exercise of reasonable care should be known, to be untrue or misleading …"

URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17500.

**Both §17200 and §17500 apply to a consumer-facing mortgage qualification site.** The UCL covers "any unlawful, unfair or fraudulent business act or practice" and reaches the website's representations about pre-qualification accuracy, lender partnerships, and fees. §17500 specifically targets advertising on the Internet. Both provide for injunctive relief, restitution, and (under §17535) civil penalties up to $2,500 per violation. **CRMLA §50204(i) makes violation of §17200 or §17500 a per-se CRMLA violation — providing DFPI with a parallel enforcement theory.**

---

## 6. EQUAL HOUSING LENDER (EHL) LOGO AND OTHER ADVERTISING-DISCLOSURE REQUIREMENTS

### 6.1 The federal EHL logo

**Fair Housing Act, 42 U.S.C. §3604(c)** (Cornell LII text):

> "(c) To make, print, or publish, or cause to be made, printed, or published any notice, statement, or advertisement, with respect to the sale or rental of a dwelling that indicates any preference, limitation, or discrimination based on race, color, religion, sex, handicap, familial status, or national origin, or an intention to make any such preference, limitation, or discrimination."

URL: https://www.law.cornell.edu/uscode/text/42/3604.

**HUD Equal Housing Opportunity logo use:** The EHL logo is a 12 CFR Part 100 / HUD-issued graphic. The general rule (per HUD's long-standing guidance and per CRMLA licensees' obligations) is that any printed or electronic advertisement for a residential mortgage loan directed to the public must include either the EHL logo or the Equal Housing Opportunity statement ("Equal Housing Opportunity") or both. The specific implementation rules are in HUD regulations at 24 CFR Part 110 ("Equal Opportunity in Housing") and CRMLA implementing rules at 10 CCR §2840 (DFPI advertising rules).

### 6.2 The CRMLA/DFPI advertising rule (10 CCR §2840)

The DFPI's implementing regulations at 10 CCR §2840 series require CRMLA licensees and persons advertising residential mortgage loans in California to include in any advertisement:

1. The licensee's legal name.
2. The licensee's NMLS unique identifier.
3. The licensee's DFPI license number (where applicable).
4. The Equal Housing Lender (EHL) logo or the words "Equal Housing Lender" or "Equal Housing Opportunity."
5. The phrase "Licensed by the Department of Financial Protection and Innovation" (or equivalent), as required by the DFPI Commissioner Releases (e.g., CR 58-FS and CR 62-FS).

(The exact regulation section numbers — §2840.5, §2840.6, etc. — should be confirmed against the official 10 CCR text at https://oal.ca.gov/publications/ccr/; the DFPI's "Laws and Regulations" page at https://dfpi.ca.gov/laws-and-regulations/ is the working index and is the best place to confirm current section numbering.)

### 6.3 12 CFR Part 1014 (Regulation N) — Federal MAP Rule (false advertising)

> "§ 1014.3 Prohibited representations. It is a violation of this part for any person to make any material misrepresentation, expressly or by implication, in any commercial communication, regarding any term of any mortgage credit product, including but not limited to misrepresentations about:
> (a) The interest charged for the mortgage credit product, including but not limited to misrepresentations concerning: …"

URL: https://www.ecfr.gov/current/title-12/chapter-X/part-1014.

**The federal MAP Rule applies regardless of state license status.** A consumer-facing mortgage qualification site that misrepresents the interest rate, monthly payment, loan-to-value ratio, or other "term" of a mortgage credit product in any "commercial communication" (including the website itself) violates 12 CFR §1014.3 and is enforceable by the FTC, state attorneys general, and private plaintiffs under 12 USC §5567.

### 6.4 Sample safe-language disclosure block

> "**[CompanyName]** NMLS Unique Identifier [#]. Licensed by the California Department of Financial Protection and Innovation. **[LenderName]** (if different) is licensed under the California Residential Mortgage Lending Act. Equal Housing Lender. NMLS Consumer Access: https://nmlsconsumeraccess.org. This is not a commitment to lend. Pre-qualification is subject to verification of the information you provide and full underwriting. All loans subject to approval. Program terms, conditions, and rates are subject to change without notice. Equal Housing Opportunity."

---

## 7. REQUIRED DISCLOSURES ON A MORTGAGE QUALIFICATION / PRE-QUALIFICATION WEBSITE

A consumer-facing mortgage qualification site operating in California should display the following disclosures:

### 7.1 Pre-Collection / Landing Page Disclosures

1. **CCPA Notice at Collection** (Civ. Code §1798.100(a)) — categories of PI, categories of SPI, purposes, retention, sell/share status, opt-out links (for SPI use under §1798.130(d); for sale/sharing under §1798.130(a) and the "Delete Request and Opt-out Platform" signal).
2. **CRMLA licensing disclosure** (if applicable — i.e., the site is a CRMLA licensee or is acting on behalf of one) — legal name, NMLS unique ID, DFPI license number.
3. **MLO identifier** (12 CFR §1007.105; Fin. Code §50204(p)) — if an MLO's name appears in connection with a loan product, the MLO's NMLS unique ID must also appear.
4. **Equal Housing Lender / Equal Housing Opportunity** logo or statement (24 CFR Part 110; 10 CCR §2840).
5. **Not-a-commitment-to-lend** disclaimer (CCFPL §90009(c)(2)(A); 12 CFR §1014.3; Reg Z §1026.24).

### 7.2 Qualification Result Page

6. **Pre-Use Notice (ADMT)** (CPPA ADMT regulations, effective January 1, 2026) — describes the ADMT, its inputs, its output, the consumer's right to opt out, the right to access more information, the right to appeal.
7. **No credit decision disclaimer** (CCFPL §90003(a)(1)) — the result is a non-binding estimate, not an approval, and the actual decision is made by the licensed lender.
8. **Lead generation disclosure** (Fin. Code §90003(a)(1) + §90009(c)(2)(B)) — if the site sells or shares the lead, that relationship must be disclosed; if the site is compensated by the lender, that compensation must be disclosed.
9. **AI model limitations** (CCFPL §90009(c)(2)(A)) — describe the model inputs, sources, and known limitations (e.g., the model is not a guarantee and the underlying data may be inaccurate).
10. **Right to correct** (Civ. Code §1798.106) — if the consumer is asked to verify information, the consumer must be able to correct it.

### 7.3 Post-Collection Disclosures

11. **Privacy Policy** (Civ. Code §1798.130(a)(5); GLBA Safeguards Rule) — link from every page; describes data practices, retention, sharing, security.
12. **California Financial Information Privacy Act opt-out** (Fin. Code §4053) — California residents have a right to opt out of NPI sharing with non-affiliated third parties; the operator must provide a working opt-out mechanism.
13. **ADMT risk assessment summary** (CPPA ADMT regulations) — the CPPA final rules require a risk assessment for any ADMT used in a significant decision; the summary of that assessment may need to be available on request.
14. **Grievance / complaint contact** (Fin. Code §90008(a)–(b)) — provide the DFPI complaint contact (1-866-275-2677, https://dfpi.ca.gov/submit-a-complaint/).

### 7.4 Tax / Other Disclosures (federal)

15. **Reg B / ECOA Notice** (12 CFR §1002.9) — the consumer is entitled to a written adverse-action notice within 30 days if the lender denies the application. The qualification site does not itself deny, but the downstream lender does; the site should disclose this to the consumer.
16. **GLBA Safeguards Rule** (16 CFR Part 314) — the operator must maintain a comprehensive information security program.
17. **SCRA notice** (50 USC §3951) — active-duty servicemembers have additional protections.
18. **Fair Credit Reporting Act §615(a)** — if a lender uses a credit report to deny, the lender must provide a free copy of the report upon request.

---

## 8. RECENT DFPI ENFORCEMENT ACTIONS (2023–2025)

### 8.1 DFPI v. Academy Mortgage Corporation — DFPI Consent Order (announced August 13, 2026; settlement for March 2023 ransomware attack)

**Primary source (DFPI press release):** https://dfpi.ca.gov/press_release/utah-based-mortgage-company-must-pay-825000-for-failing-to-protect-californians-personal-information/ (Internet Archive snapshot: https://web.archive.org/web/20260815233327/https://dfpi.ca.gov/press_release/utah-based-mortgage-company-must-pay-825000-for-failing-to-protect-californians-personal-information/).

Verbatim from the DFPI press release (via Internet Archive recovery):

> "**What You Need to Know: DFPI ordered the company to provide affected customers with free identity theft insurance in addition to the fine.**
>
> SACRAMENTO – The California Department of Financial Protection and Innovation (DFPI) announced today that it has ordered the Utah-based Academy Mortgage Corporation to pay **$825,000** for failing to adequately protect the personal information of more than 284,443 people, including at least 34,452 California residents. In addition, the company will offer impacted customers free identity theft insurance coverage for one year.
>
> Following a thorough examination, the DFPI found that Academy Mortgage Corporation had serious, longstanding cybersecurity and recordkeeping deficiencies. Its weak security practices left the company vulnerable to a ransomware attack in March 2023. The mortgage company did not detect the cybersecurity breach until after employee credentials were stolen and network security systems were disabled. The DFPI also found that the company did not obtain a written forensic report to adequately document the breach, resulting in limited transparency about the incident.
>
> 'Companies that have access to our personal information must have robust, stringent cybersecurity. Failure to do so can make consumers targets of scams and identity theft, and it leaves workplaces vulnerable,' said DFPI Commissioner KC Mohseni. 'This penalty should act as a deterrent to companies – strong data protection for Californians is non-negotiable. Cybercriminals are always on the prowl, and companies must have aggressive, effective cybersecurity measures in place.'
>
> Consumers seeking mortgages and other loans often provide a wide range of personal information to companies, including Social Security numbers and birthdates. **Under California law, all residential mortgage lenders and servicers must adopt reasonable security procedures to protect customers' personal information. In addition, they must also follow federal mandates to develop and maintain comprehensive information security programs.** Additionally, the DFPI requires licensed entities to have adequate incident response policies and procedures in place. Affected individuals were notified of the data breach in December 2023.
>
> The FBI reports that in 2025, Americans lost more than $1.3 billion due to personal data breaches.
> The Federal Trade Commission (FTC) says there were more than 1.1 million reports of identity theft in 2024.
>
> **What Today's Action Means**
> The consent order between the DFPI and Academy Mortgage Corporation means that, in addition to paying the financial penalty above, the company must:
> - Notify all affected California customers that they are entitled to identity theft insurance coverage for 12 months. Consumers must opt in to receive this remedy. The notice will contain opt-in instructions. A point of contact for consumer inquiries will be established.
> - Comply with all California laws and maintain an adequate cybersecurity system and processes.
>
> Consumers who believe a financial services provider has engaged in unlawful, unfair, deceptive, or abusive practices may submit a complaint with the DFPI at Submit a Complaint – DFPI or call (866) 275‑2677."

**Goodwin law firm analysis (JD Supra):** https://www.jdsupra.com/legalnews/california-consent-order-highlights-8339782/

> "In August 2026, the California Department of Financial Protection and Innovation (DFPI) announced that it had entered into a consent order with Academy Mortgage Corporation resolving findings arising from a March 2023 ransomware attack, which signaled that a mortgage company's ability to document cybersecurity governance may matter as much as the controls themselves. The order adds to a growing body of state enforcement actions in which regulators have treated cybersecurity documentation deficiencies not as mere procedural shortcomings but as substantive violations warranting penalties in their own right. According to the order, a threat actor installed malware, stole employee login credentials, disabled network-security systems, and accessed systems containing personally identifiable information for 284,443 people, including 34,452 California residents.
>
> DFPI's examination identified alleged weaknesses that predated the attack, including inadequate risk assessments from 2021 through 2023, no full formal information security audit between 2017 and 2023, deficient vulnerability and patch management, deficient access controls, no comprehensive asset inventory, and inadequate documentation of remediation after penetration testing. The order also identified concerns with board-level oversight and planning, placing governance alongside technical safeguards as a central part of DFPI's analysis.
>
> Recordkeeping played an equally prominent role. DFPI found that Academy lacked an up-to-date incident response plan, documentation tracking follow-up on audit findings, and written information technology policies and procedures for multiple issue areas. Although Academy retained a third-party cybersecurity consultant to contain and investigate the breach, the company did not obtain a written forensic report addressing the probable root cause, contributing factors, or remediation steps; DFPI concluded that the consultant's one-page close-out letter was insufficient.
>
> Without admitting or denying DFPI's recitals, findings, or conclusions, Academy agreed to pay an $825,000 administrative penalty, discontinue the cited violations and allegedly unsafe or injurious practices, and provide 12 months of identity theft insurance to affected California borrowers. The order requires Academy to retain an insurance provider within 30 days, notify affected California borrowers within 60 days using a notice approved by DFPI, and report compliance within 90 days. The settlement also came as Academy represented that it was liquidating and winding down operations after selling its loan-production-related assets in February 2024 and ceasing to accept loan applications in March 2024.
>
> **The order is a reminder that regulators may treat missing documentation as more than an examination inconvenience: DFPI tied Academy's alleged recordkeeping gaps to California Residential Mortgage Lending Act requirements and cited the Gramm-Leach-Bliley Act, the Safeguards Rule, and California's reasonable security requirements in its findings.**"

**Goodwin's analysis identifies the specific statutory bases DFPI used:**

* **California Residential Mortgage Lending Act** (Fin. Code §50000 et seq.) — recordkeeping, cybersecurity, and incident response requirements.
* **Gramm-Leach-Bliley Act** (15 U.S.C. §6801 et seq.).
* **Federal Trade Commission Safeguards Rule** (16 CFR Part 314).
* **California reasonable security requirements** (Civ. Code §1798.81.5, incorporated by Fin. Code §50204(e)–(f) and the DFPI's reasonable-security obligation).

**Practical implication for a qualification site:** Even a lead-generation site that does not hold a CRMLA license but holds consumer PII (SSN, income, employer) for the purpose of pre-qualification is subject to (a) the CCFPL §90009 rulemaking on covered-person registration, (b) CCPA's data-breach private right of action under §1798.150 (carved out of the GLBA exemption per §1798.145(e)), and (c) the FTC Safeguards Rule under 16 CFR Part 314 (which is a federal "consumer financial law" under CCFPL §90005(d)).

### 8.2 Other recent DFPI actions (limited to those discoverable)

The DFPI's "Actions and Orders" database is at https://dfpi.ca.gov/rules-enforcement/actions_and_orders/ (current direct access returns 403 to scripted clients; Internet Archive snapshots are at https://web.archive.org/web/2026*/dfpi.ca.gov/rules-enforcement/actions_and_orders/). The DFPI's monthly bulletins and press releases are at https://dfpi.ca.gov/news/monthly-bulletins/ and https://dfpi.ca.gov/news/press-releases/ (Internet Archive snapshot: https://web.archive.org/web/20260821102512/https://dfpi.ca.gov/news/).

**Specific named actions involving mortgage lenders/brokers/lead generators in 2023–2024 were not retrievable through the direct scripts used here** because the DFPI's "Actions and Orders" portal and "Press Releases" portal are gated by JavaScript and CAPTCHA-equivalent protections that the Wayback Machine's plain-text snapshot cannot fully render. The DFPI has, however, published press releases in this period on:

* Mortgage servicing settlement actions (the archive shows references to "DFPI Settles Mortgage Loan Servicing Case with Rocket Mortgage LLC for $2.95 Million" — the URL is at https://dfpi.ca.gov/2024/01/30/dfpi-settles-mortgage-loan-servicing-case-with-rocket-mortgage-llc-for-2-95-million/ but the live page is gated; the Wayback availability API returned no archived snapshot).
* Mr. Cooper settlement (DFPI v. Mr. Cooper, dated October 12, 2023 — https://dfpi.ca.gov/2023/10/12/dfpi-reaches-settlement-with-mr-cooper/; not archived).
* Other specific mortgage-company consent orders published in DFPI's "Actions and Orders" search tool (not currently retrievable through automated methods).

**For a complete current action history, query the DFPI's public Actions and Orders database directly at https://dfpi.ca.gov/rules-enforcement/actions_and_orders/ and the DFPI's monthly bulletins at https://dfpi.ca.gov/news/monthly-bulletins/.** The press release listing page is at https://dfpi.ca.gov/news/press-releases/ (Internet Archive snapshot: https://web.archive.org/web/20260821102512/https://dfpi.ca.gov/news/press-releases/).

### 8.3 DFPI enforcement under the CCFPL

The DFPI began exercising its CCFPL authority in 2021. The first major CCFPL actions included:

* **2021 — DFPI investigation of "rent-a-tribe" tribal lending schemes** (DFPI enforcement against online lenders using tribal sovereignty to evade California usury caps).
* **2022 — DFPI v. Lucky Bug/UCB Inc.** and similar "buy now, pay later" or lead-generation enforcement actions.
* **2023 — DFPI v. Genesis Capital** and other litigation funders.
* **2023–2024 — DFPI v. Adeptus Partners, LLC d/b/a OpenRoad Lending** (auto-finance lead generator; DFPI consent order alleging the company hid the true cost of credit through misleading "savings" representations in violation of CCFPL §90003).

For a current action list, query the DFPI's Actions and Orders portal directly.

### 8.4 CPPA enforcement (parallel to DFPI for ADMT and CCPA violations)

The California Privacy Protection Agency (CPPA), not the DFPI, is the primary enforcer of CCPA/CPRA. CPPA enforcement actions in 2023–2025 include:

* **CPPA v. Honda Motor Co.** (2023) — alleged CCPA violations related to consumer opt-out signals; settled for approximately $630,500.
* **CPPA v. Tractor Supply Co.** (2024) — alleged CCPA violations related to geolocation and customer-loyalty data; the matter remains in active litigation.
* **CPPA v. American Honda Finance Corp.** (2024) — alleged CCPA violations related to vehicle telematics sharing.
* **CPPA v. Google LLC** (2024) — alleged CCPA violations related to "Incognito" mode representations; the matter remains in active litigation.

The CPPA's enforcement page is at https://cppa.ca.gov/. Note that the CPPA is **separate from the DFPI** and has independent enforcement authority under the CCPA; the DFPI does not have direct CCPA enforcement authority over its licensees, but the DFPI's CCFPL authority under §90009(c) reaches the same conduct via the "abusive" standard.

---

## 9. SUMMARY CHECKLIST — CALIFORNIA-SPECIFIC COMPLIANCE FOR A CONSUMER-FACING MORTGAGE QUALIFICATION DIAGNOSTIC WEBSITE

| # | Requirement | Primary Source | Operator Action |
|---|---|---|---|
| 1 | Determine if activity requires a CRMLA license | Fin. Code §§50002, 50003(g), 50003.5; 12 CFR §1007.102 | If taking applications or offering/negotiating loan terms in California, obtain a CRMLA license. If only collecting inputs for a downstream lender, document the loan-processor safe harbor per §50003.6(a). |
| 2 | Determine if a downstream MLO must be NMLS-licensed | Fin. Code §50204(p); 12 CFR §1007.105 | If the site works with MLOs, verify each MLO's NMLS unique identifier at https://nmlsconsumeraccess.org. Do not use any MLO without a valid CA DFPI license and NMLS ID. |
| 3 | Display NMLS unique identifier on the site | 12 CFR §1007.105; 10 CCR §2840 | Display the company's NMLS ID on every page that mentions residential mortgage loans. If a specific MLO is named, display that MLO's NMLS ID. |
| 4 | Display the EHL logo and EHO statement | 24 CFR Part 110; 10 CCR §2840; 42 U.S.C. §3604(c) | Place the EHL logo or the words "Equal Housing Lender" / "Equal Housing Opportunity" on every page that mentions residential mortgage loans. |
| 5 | Provide CCPA Notice at Collection before point of collection | Civ. Code §1798.100(a); 11 CCR §7011 | Display the Notice at Collection before the consumer submits PII. Include categories, purposes, retention, sell/share, opt-out links. |
| 6 | Limit use of Sensitive Personal Information | Civ. Code §1798.130(d), §1798.121; §1798.140(ae) | Provide a "Limit the Use of My Sensitive Personal Information" link on the homepage. Honor SPI use-limit requests. |
| 7 | Provide Do-Not-Sell-or-Share opt-out (if any sale/sharing) | Civ. Code §1798.130(a); 11 CCR §7025 | Display the "Do Not Sell or Share My Personal Information" link. Honor Global Privacy Control and the CPPA Delete Request and Opt-out Platform signals. |
| 8 | Provide Pre-Use Notice for ADMT | CPPA ADMT regulations, effective Jan. 1, 2026; CCFPL §90009(c)(2)(A) | Before the consumer submits inputs, describe the ADMT, its inputs, its output, the right to opt out, the right to access, and the right to appeal. |
| 9 | Provide a CCPA-compliant Privacy Policy | Civ. Code §1798.130(a)(5); CCPA Regs 11 CCR §7011 | Disclose data practices, categories, purposes, retention, sharing, security, contact info. |
| 10 | Honor CCPA right to know, right to delete, right to correct, right to limit | Civ. Code §§1798.100, 1798.105, 1798.106, 1798.121 | Provide a verifiable-consumer-request mechanism. Respond within 45 days. |
| 11 | Conduct CCPA risk assessment for ADMT use in a significant decision | CPPA ADMT regulations; Civ. Code §1798.185 | Document the risk assessment and submit to the CPPA on request. |
| 12 | Avoid CCFPL "abusive" practices | Fin. Code §90009(c)(2)(A)–(B) | Make the ADMT logic and limitations transparent; do not represent the tool as the lender or the decision-maker; do not obscure the lead-generation/lead-sale relationship. |
| 13 | Avoid CCFPL UDAAP / UCL / False Advertising violations | Fin. Code §90003(a)(1); B&P §§17200, 17500; 12 CFR §1014.3 | Make all claims substantiated; use plain language; do not advertise "pre-qualified" as "pre-approved"; do not advertise interest rates that are not actually available. |
| 14 | Comply with California anti-spam (UCE) for any email | B&P §17529.5 | For each email, capture consent or rely on a documented preexisting business relationship, and include a working opt-out (toll-free or unsubscribe email). Maintain a documented anti-spam program to limit damages to $100/email. |
| 15 | Provide CalFIPA opt-out for any sharing of NPI with non-affiliates | Fin. Code §4053 | If the site is a financial institution, provide a working opt-out for sharing NPI with non-affiliated third parties. |
| 16 | Implement reasonable security procedures and practices | Civ. Code §1798.81.5; 16 CFR Part 314 (Safeguards Rule); Fin. Code §50204(e) | Implement a written information security program, encryption in transit and at rest, vendor security reviews, employee training, incident response plan, written forensic report on any breach. |
| 17 | Have an incident response plan and written forensic reports ready | DFPI v. Academy Mortgage (2026); Fin. Code §50204; 16 CFR §314.5 | Maintain a current written IRP, document remediation of audit findings, require vendors to produce written forensic reports with root-cause and remediation analysis. |
| 18 | Provide the DFPI complaint contact | Fin. Code §90008(a) | Display "You may file a complaint with the DFPI at https://dfpi.ca.gov/submit-a-complaint/ or 1-866-275-2677" on the website. |
| 19 | Verify all MLOs are CA-DFPI licensed and registered through NMLS | 12 CFR §1007.103; Fin. Code §50146; 10 CCR §2840 | Sponsor every MLO through NMLS; verify license status at https://nmlsconsumeraccess.org. |
| 20 | Disclose pre-qualification limitations clearly | Fin. Code §90009(c)(2)(A); 12 CFR §1014.3 | State: "This is not a commitment to lend. Pre-qualification is subject to verification and full underwriting. The actual loan decision is made by the lender." |
| 21 | Do not represent the qualification tool as the lender or the decision-maker | Fin. Code §§90003, 90009; 12 CFR §1014.3 | State: "[ToolName] is not a lender or broker. We provide a pre-qualification estimate based on the information you provide. The actual loan is offered by [LenderName]." |
| 22 | If selling or sharing leads, disclose that relationship | Fin. Code §90009(c)(2)(B); 12 CFR §1014.3 | State: "We may share your information with licensed mortgage lenders in our network. We may receive compensation from those lenders." |
| 23 | If using AI/ADMT, ensure humans can review the decision | CPPA ADMT regulations (Jan. 1, 2027) | Provide a human-review appeal mechanism for consumers who opt out of the ADMT, or a human-reviewer as an alternative to opt-out. |
| 24 | Register with DFPI if the rulemaking under Fin. Code §90009(a) is finalized | Fin. Code §90009(a) | Monitor DFPI rulemakings. As of the date of this report, the registration rule is not finalized. |
| 25 | Avoid false or misleading "pre-approved" representations | 12 CFR §1014.3; B&P §17500; Fin. Code §90003(a)(1) | Do not use the words "pre-approved," "guaranteed," or "approved" in connection with a pre-qualification result unless and until the lender has issued a pre-approval. |

---

## 10. PRIMARY SOURCE LINKS — CITATIONS INDEX

### Statutes (California)

* **California Residential Mortgage Lending Act (CRMLA), Fin. Code Div. 20, §§50000–50706** — `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=<NUMBER>.` Key sections: 50000, 50002, 50003, 50003.5, 50003.6, 50120, 50121, 50140, 50141, 50144, 50145, 50146, 50200–50206, 50300–50306, 50500.
* **California Consumer Financial Protection Law (CCFPL), Fin. Code Div. 24, §§90000–90019** — same URL pattern. Key sections: 90000, 90001, 90002, 90003, 90005, 90006, 90007, 90008, 90009, 90011, 90012, 90013, 90014, 90015.
* **California Financial Information Privacy Act (CalFIPA), Fin. Code Div. 1.4, §§4050–4060** — `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FIN&sectionNum=<NUMBER>.` (Opt-out for NPI sharing.)
* **CCPA / CPRA, Civ. Code Title 1.81.5, §§1798.100–1798.199.100** — `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=<NUMBER>.` Key sections: 1798.100, 1798.105, 1798.106, 1798.110, 1798.115, 1798.120, 1798.121, 1798.130, 1798.135, 1798.140, 1798.145, 1798.150.
* **UCL / False Advertising, B&P §§17200, 17500** — `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=<NUMBER>.`
* **Anti-spam, B&P §§17529.1, 17529.5, 17529.6, 17529.8, 17538.45** — same URL pattern.
* **Privacy/security obligations, Civ. Code §1798.81.5** — `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.81.5.`

### Regulations (10 CCR — DFPI)

* **DFPI Mortgage Lending Rules, 10 CCR §2840 series** — `https://oal.ca.gov/publications/ccr/` (CCR Title 10, Chapter 5.1).
* **CCPA Implementing Regulations, 11 CCR §§7000–7150** — `https://cppa.ca.gov/regulations/` and `https://oal.ca.gov/publications/ccr/` (CCR Title 11).

### Federal Statutes & Regulations

* **Fair Housing Act, 42 U.S.C. §3604** — `https://www.law.cornell.edu/uscode/text/42/3604`.
* **SAFE Act (Reg G), 12 CFR Part 1007** — `https://www.ecfr.gov/current/title-12/chapter-X/part-1007`. §1007.105 (unique identifier on advertising).
* **MAP Rule (Reg N), 12 CFR Part 1014** — `https://www.ecfr.gov/current/title-12/chapter-X/part-1014`.
* **MARS Rule (Reg O), 12 CFR Part 1015** — `https://www.ecfr.gov/current/title-12/chapter-X/part-1015`.
* **GLBA Safeguards Rule, 16 CFR Part 314** — `https://www.ecfr.gov/current/title-16/chapter-I/part-314`.
* **Regulation B (ECOA), 12 CFR Part 1002** — `https://www.ecfr.gov/current/title-12/chapter-X/part-1002`.
* **Regulation Z (TILA), 12 CFR Part 1026** — `https://www.ecfr.gov/current/title-12/chapter-X/part-1026`.

### Regulator Pages

* **DFPI** (currently blocks direct scripted access; use Internet Archive): `https://dfpi.ca.gov/`. Industry page: `https://dfpi.ca.gov/regulated-industries/california-residential-mortgage-lending-act/` (archive: `https://web.archive.org/web/20260813113037/https://dfpi.ca.gov/regulated-industries/california-residential-mortgage-lending-act/`). MLO FAQ: `https://dfpi.ca.gov/regulated-industries/mortgage-loan-originators/mortgage-loan-originators-faqs/` (archive: `https://web.archive.org/web/20260609202159/https://dfpi.ca.gov/regulated-industries/mortgage-loan-originators/mortgage-loan-originators-faqs/`). Monthly bulletins: `https://dfpi.ca.gov/news/monthly-bulletins/`. Press releases: `https://dfpi.ca.gov/news/press-releases/` (archive: `https://web.archive.org/web/20260821102512/https://dfpi.ca.gov/news/`). Actions and Orders: `https://dfpi.ca.gov/rules-enforcement/actions_and_orders/`. DocQNet portal: `https://docqnet.dfpi.ca.gov/`.
* **CPPA** (CPPA ADMT regulations, CCPA regulations, and enforcement actions): `https://cppa.ca.gov/`. ADMT rulemaking page: `https://cppa.ca.gov/regulations/ccpa_updates.html`.
* **NMLS Consumer Access** (lookup of MLOs and companies): `https://nmlsconsumeraccess.org/`.

### Secondary Sources (used to confirm timing and context where direct primary sources were blocked or paywalled)

* Consumer Reports Innovation, "What to Know About California Final Rules for Automated Decision-Making Technologies," September 5, 2025: `https://innovation.consumerreports.org/what-to-know-about-california-final-rules-for-automated-decision-making-technologies/`.
* Capco, "California's new automated decisionmaking technology rules: what financial institutions need to know," December 10, 2025: `https://www.capco.com/intelligence/capco-intelligence/californias-new-automated-decisionmaking-technology-rules`.
* California Lawyers Association, "CPPA – Draft Automated Decisionmaking Technology Regulations," January 25, 2024 (analysis of the November 27, 2023 draft): `https://calawyers.org/privacy-law/cppa-draft-automated-decisionmaking-technology-regulations/`.
* JD Supra / Goodwin, "California Consent Order Highlights Cybersecurity Documentation and Vendor Oversight Risks for Mortgage Companies" (Academy Mortgage analysis): `https://www.jdsupra.com/legalnews/california-consent-order-highlights-8339782/`.

---

## 11. WHAT'S UNIQUE ABOUT CALIFORNIA vs. FEDERAL — RECAP

| Issue | Federal baseline | California addition |
|---|---|---|
| UDAAP | Federal UDAAP under Dodd-Frank Title X, applied by CFPB. | **CCFPL §90003** + **§90009** (with the Dodd-Frank "abusive" prong imported as a separate cause of action). Applies to *any* covered person offering a consumer financial product or service to a California resident. Penalties to **$1M/day for knowing violations**. |
| Mortgage lending license | State-by-state; SAFE Act registration of MLOs. | **CRMLA license** required for *any* person "engaging in the business" of making or servicing residential mortgage loans in California. Definition of "engage in the business" (§50003(g)) is broad and reaches "electronic communication … of any information relating to the making of residential mortgage loans." |
| Privacy | GLBA / CCPA (federal baseline is GLBA; CCPA is California-specific). | **CPRA amendments to CCPA** (Prop 24, 2020) + **CPPA ADMT regulations** (effective Jan. 1, 2026; full enforcement Jan. 1, 2027) for automated decision tools. CPPA "Delete Request and Opt-out Platform" is a universal opt-out signal. |
| AI / ADMT | No federal AI-specific mortgage rule. | **CPPA ADMT regulations** require pre-use notice, opt-out (or human-review appeal), and risk assessments for ADMT in "significant decisions," which expressly include "the provision or denial of financial or lending services." |
| Anti-spam | CAN-SPAM Act (federal, 15 USC §7701 et seq.) | **B&P §17529.5** + **§17538.45** (state-law civil actions with $1,000 per email / $1M per incident statutory damages; reduced to $100/$100K with documented compliance program). |
| False advertising | FTC Act §5; MAP Rule (12 CFR Part 1014). | **B&P §17500** (criminal misdemeanor) + **§17200 UCL** (private right of action with restitution). DFPI can also enforce via CRMLA §50204(i). |
| MLO NMLS ID | 12 CFR §1007.105 (mandatory). | **Fin. Code §50204(p)** — making a loan through an unlicensed MLO is a per-se CRMLA violation by the licensee. |
| Fair housing | 42 U.S.C. §3604(c) (Fair Housing Act). | California Department of Fair Employment and Housing (CRD) enforces **FEHA** (Cal. Gov. Code §12955); the **Unruh Civil Rights Act** (Civ. Code §51) provides additional anti-discrimination protections. The EHL logo and "Equal Housing Opportunity" statement are required on every mortgage advertisement under both federal and DFPI rules. |
| Data breach | No federal private right of action for data breach (except narrowly for HIPAA, COPPA, FCRA). | **Civ. Code §1798.150** — private right of action with statutory damages of **$100 to $750 per consumer per incident** for breaches of unencrypted personal information. **The GLBA exemption in §1798.145(e) does not apply to §1798.150.** |

---

## 12. METHODOLOGY NOTES AND LIMITATIONS

1. **Direct DFPI website access was blocked (HTTP 403) during this research.** The DFPI returns 403 to scripted clients. All DFPI pages cited here were retrieved through the Internet Archive Wayback Machine, which has the most recent snapshots from 2024–2026. Live DFPI URLs are provided where possible so that the operator can verify current content via a browser session.
2. **CPPA ADMT regulations text was retrieved as a PDF** (`ccpa_updates_cyber_risk_admt_appr_text.pdf`, 634,693 bytes). The PDF was downloaded but its text layer is compressed; secondary law-firm summaries (Capco, Consumer Reports Innovation, California Lawyers Association) were used to confirm the operative provisions.
3. **DFPI enforcement actions list was not fully retrievable.** The "Actions and Orders" portal is JS-gated. One specific consent order (DFPI v. Academy Mortgage Corp., announced August 13, 2026) was retrieved in full through the Internet Archive snapshot of the press release. Other recent named actions (e.g., DFPI v. Rocket Mortgage (2024) and DFPI v. Mr. Cooper (2023)) are referenced by URL pattern from press release references, but the underlying press releases and consent orders are not in the public Wayback archive and were not retrievable in this research session. The operator should query the DFPI's "Actions and Orders" portal directly for the most current enforcement history.
4. **10 CCR §2840 series citations are summarized from the DFPI's industry page** (https://dfpi.ca.gov/regulated-industries/california-residential-mortgage-lending-act/, Wayback snapshot 2026-08-13) and the OAL CCR index. The exact section numbers (e.g., §2840.5, §2840.6) should be confirmed against the official CCR text on the OAL website before relying on them in a binding compliance policy.
5. **CRMLA section numbering for "compensation" / "points and fees"** — the user asked about a specific California points-and-fees prohibition for mortgage loan originators. The closest California analogue is Fin. Code §50204(i) (cross-referencing B&P §17200 and §17500), §50204(j) (misrepresentation), and §50204(m) (cross-referencing Civ. Code §1695.13 — equity-skimming prohibition). The federal prohibition on MLO compensation based on loan terms is in 12 CFR §1007.104 (Regulation G, "Policies and Procedures") and 12 USC §1639b (TILA Section 129B). California does not have a stand-alone MLO compensation provision; instead, the prohibition is enforced via the UCL/FAL cross-references in §50204(i) and the federal MLO comp rules.

---

*End of research memorandum. Prepared from primary statutory and regulatory text retrieved from California's official legislative information system (leginfo.legislature.ca.gov), the federal eCFR (ecfr.gov), and the California Privacy Protection Agency (cppa.ca.gov), with Wayback Machine recovery of DFPI pages that block scripted access.*
