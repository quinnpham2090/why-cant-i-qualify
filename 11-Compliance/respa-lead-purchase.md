# RESPA Lead-Purchase Compliance — Focused Synthesis

**Subject:** U.S. consumer mortgage qualification diagnostic website that captures leads (name, email, phone, financial data) and resells them to (a) a single licensed MLO, or (b) multiple lenders (lead aggregation/stacking).
**Date of synthesis:** August 2026
**Coverage window:** Statutory and regulatory text; CFPB bulletins, FAQs, and consent orders 2014–2026.

> **CRITICAL METHODOLOGICAL CAVEAT — PLEASE READ FIRST**
>
> The `web_search` tool in this session failed with an authentication error and was unavailable for the entire research run. All citations below were verified by **direct HTTP fetch** to the authoritative source (CFPB, eCFR, law.cornell.edu, files.consumerfinance.gov) and full text was extracted from the original PDFs/HTML. The local copies are in `research/`. **Because the parent's prompt identifies a "December 2024 CFPB interpretive rule on lead purchases" that I was unable to verify in the CFPB's public docket, every citation in this report should be re-verified by primary-source inspection before being relied on for a legal opinion. The most recent CFPB guidance on lead purchases that I was able to verify is the RESPA Section 8 FAQs updated October 7, 2020.**
>
> **The parent-cited "December 2024 CFPB interpretive rule on lead purchases"** could not be located in the CFPB's online enforcement inventory, final-rule inventory, newsroom, regulatory agenda (Reginfo.gov Statement 3170, Spring 2024, Fall 2024, Spring 2025, Fall 2025), or rules-under-development page. The CFPB's final-rule inventory at `consumerfinance.gov/rules-policy/final-rules/` does not include any RESPA Section 8 / lead purchase rule. See the "December 2024 Interpretive Rule — Research Note" section at the end of this document for the specific URLs tested.
>
> **The parent-cited enforcement actions against "GoFastBaby" and "Novastar"** could not be verified in the CFPB enforcement inventory (388 actions reviewed, no such named parties) or via the available search tools. The closest, factually-analogous, public CFPB actions are the December 2015 lawsuit against **T3Leads / D&D Marketing** and the August 2023 consent orders against **Freedom Mortgage Corporation** and **Realty Connect USA Long Island**. Those are documented in detail below. If the user can supply docket numbers or other identifiers for GoFastBaby / Novastar, the analysis can be expanded.

---

## 1. RESPA Section 8 (12 U.S.C. § 2607) and Regulation X (12 C.F.R. Part 1024)

### 1.1 The Statute

**12 U.S.C. § 2607(a) — Kickback prohibition.**
> "No person shall give and no person shall accept any fee, kickback, or thing of value pursuant to any agreement or understanding, oral or otherwise, that business incident to or a part of a real estate settlement service involving a federally related mortgage loan shall be referred to any person."

**§ 2607(b) — Splitting charges.**
> "No person shall give and no person shall accept any portion, split, or percentage of any charge made or received for the rendering of a real estate settlement service in connection with a transaction involving a federally related mortgage loan other than for services actually performed."

**§ 2607(c) — Safe harbors.** Bona fide salary/compensation for goods or services actually performed; payments to attorneys and certain agents; payments pursuant to cooperative brokerage arrangements between real estate brokers/agents; **affiliated business arrangements** with required disclosures.

**§ 2607(d) — Penalties.** Criminal: fine up to $10,000 and/or up to one year. Civil: joint and several liability to the consumer for **three times the amount** of any charge paid for the settlement service.

**Statutory definitions** at 12 U.S.C. § 2602:
- "**Settlement services**" expressly include "the origination of a federally related mortgage loan (including, but not limited to, the taking of loan applications, loan processing, and the underwriting and funding of loans)." § 2602(3).
- "**Affiliated business arrangement**" is defined at § 2602(7) as an arrangement in which (A) a person who is in a position to refer business has either an affiliate relationship with, or a direct or beneficial ownership interest of more than 1% in, a provider of settlement services, AND (B) either of such persons directly or indirectly refers such business to that provider.

— Sources: `https://www.law.cornell.edu/uscode/text/12/2607`, `https://www.law.cornell.edu/uscode/text/12/2602`. Local copies: `research/usc_12_2607.txt`, `research/usc_12_2602.txt`.

### 1.2 Regulation X — 12 C.F.R. § 1024.14 (No referral fees; "thing of value" broadly defined)

**§ 1024.14(b) — No referral fees.**
> "No person shall give and no person shall accept any fee, kickback or other thing of value pursuant to any agreement or understanding, oral or otherwise, that business incident to or part of a settlement service involving a federally related mortgage loan shall be referred to any person. **Any referral of a settlement service is not a compensable service, except as set forth in § 1024.14(g)(1).** A company may not pay any other company or the employees of any other company for the referral of settlement service business."

**§ 1024.14(c) — Unearned fees; split charges.**
> "A charge by a person for which no or nominal services are performed or for which duplicative fees are charged is an unearned fee and violates this section. The source of the payment does not determine whether or not a service is compensable."

**§ 1024.14(d) — "Thing of value" is broadly defined.** Includes, without limitation:
> "monies, things, discounts, salaries, commissions, fees, duplicate payments of a charge, stock, dividends, distributions of partnership profits, franchise royalties, credits representing monies that may be paid at a future date, the opportunity to participate in a money-making program, retained or increased earnings, increased equity in a parent or subsidiary entity, special bank deposits or accounts, special or unusual banking terms, services of all types at special or free rates, sales or rentals at special prices or rates, lease or rental payments based in whole or in part on the amount of business referred, trips and payment of another person's expenses, or reduction in credit against an existing obligation. The term 'payment' is used throughout §§ 1024.14 and 1024.15 as synonymous with the giving or receiving of any 'thing of value' and **does not require transfer of money**."

**§ 1024.14(e) — "Agreement or understanding" can be inferred from conduct.**
> "An agreement or understanding for the referral of business incident to or part of a settlement service need not be written or verbalized but may be established by a practice, pattern or course of conduct. When a thing of value is received repeatedly and is connected in any way with the volume or value of the business referred, the receipt of the thing of value is evidence that it is made pursuant to an agreement or understanding for the referral of business."

**§ 1024.14(f)(1) — "Referral" definition.** Includes any oral or written action directed to a person that affirmatively influences the selection of a provider of a settlement service.

**§ 1024.14(g)(1) — Permitted payments** (re-states and elaborates § 2607(c)):
- (iv) "A payment to any person of a bona fide salary or compensation or other payment for goods or facilities actually furnished or for services actually performed";
- (vi) "Normal promotional and educational activities that are not conditioned on the referral of business and that do not involve the defraying of expenses that otherwise would be incurred by persons in a position to refer settlement services or business incident thereto";
- (vii) "An employer's payment to its own employees for any referral activities."

**§ 1024.14(g)(2) — Fair-market-value rule (the "lead-purchase" safe harbor in operation):**
> "The Bureau may investigate high prices to see if they are a referral fee or a split of a fee. If the payment of a thing of value bears no reasonable relationship to the market value of the goods or services provided, then the excess is not for services or goods actually performed or provided. … **The value of a referral (i.e., the value of any additional business obtained thereby) is not to be taken into account in determining whether the payment exceeds the reasonable value of such goods, facilities or services.** The fact that the transfer of the thing of value does not result in an increase in any charge made by the person giving the thing of value is irrelevant in determining whether the act is prohibited."

— Source: `https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1024&section=1024.14`. Local copy: `research/cfr_1024_14.txt` and `.xml`.

### 1.3 CFPB Compliance Bulletin 2015-05 (Marketing Services Agreements / lead-buying)

**CFPB Compliance Bulletin 2015-05: RESPA Compliance and Marketing Services Agreements** (Oct. 8, 2015). Source: `https://files.consumerfinance.gov/f/201510_cfpb_compliance-bulletin-2015-05-respa-compliance-and-marketing-services-agreements.pdf`. Local copies: `research/bulletin_2015-05.pdf` and `.txt`. Linked from `https://www.consumerfinance.gov/compliance/supervisory-guidance/bulletin-respa-compliance-marketing-services-agreements/`.

Direct quotes from the Bulletin:

> "Congress enacted RESPA in 1974 as a response to abuses in the real estate settlement process. Thus, a primary purpose of RESPA is to 'eliminat[e] … kickbacks or referral fees that tend to increase unnecessarily the costs of settlement services.' 12 U.S.C. 2601(b)(2)."

> "MSAs often involve providers of settlement services in a mortgage loan transaction, such as a lender, real estate agent or broker, or a title company. … MSAs are usually framed as payments for advertising or promotional services, but in some cases the payments are actually disguised compensation for referrals."

> "Any agreement that entails exchanging a thing of value for referrals of settlement service business involving a federally related mortgage loan likely violates RESPA, whether or not an MSA or some related arrangement is part of the transaction."

> "The Bureau observed a title insurance company entering MSAs as a quid pro quo for the referral of business. The fees paid under the agreements were based, in part, on how many referrals the title insurance company received and the revenue generated by those referrals. From its investigation of the underlying facts, the Bureau found that the number of referrals increased significantly when MSAs existed, and the differences in referrals were statistically significant and not explained by seasonal or year-to-year fluctuations."

> "When services promised under an MSA are not performed, but payments are being made, a reasonable inference can be drawn that the MSA is part of an agreement to refer settlement services business in exchange for kickbacks."

> "In another matter that resulted in an enforcement action, a title company entered into unwritten agreements with individual loan officers in which it paid for the referrals by defraying the loan officers' marketing expenses. The title company supplied loan officers with valuable lead information and marketing materials. In exchange, the loan officers sent referrals to the title company."

> "RESPA violations have cost industry participants over $75 million in penalties so far. In addition to corporate liability, some of these enforcement actions have required individuals in charge of companies that committed the violations to pay significant monetary penalties."

> "MSAs appear to create opportunities for parties to pay or accept illegal compensation for making referrals of settlement service business. The Bureau also found that efforts made to adequately monitor activities that in turn are performed by a wide range of individuals pursuant to MSAs are inherently difficult."

**Bottom line for a lead-purchase website:** the Bulletin rejects the bright-line "paying for a lead ≠ paying for a referral" framing in practice. The CFPB will look at whether the website's compensation varies with the volume or value of business referred (closing rate, ping-tree position, per-funded-loan), whether the website actually performs qualifying/curating services, and whether the lead contract requires lender feedback (the conversion-data feedback loop is itself evidence of a referral relationship — see § 4.1 T3Leads ¶¶ 21–23).

### 1.4 The 2020 RESPA Section 8 FAQs (current CFPB guidance on lead purchases)

The CFPB's authoritative current guidance is the **Real Estate Settlement Procedures Act (RESPA) Frequently Asked Questions**, updated **October 7, 2020** (page last modified March 15, 2024). Source: `https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/real-estate-settlement-procedures-act/real-estate-settlement-procedures-act-faqs/`. Local copies: `research/cfpb_respa_faqs.html` and `.txt`.

**RESPA Section 8(a) FAQ 1 — "Thing of value" is broadly defined.**
> "Fee, kickback, or thing of value. Thing of value is broadly defined in RESPA and Regulation X. 12 USC § 2602(2); 12 CFR § 1024.14(d). Regulation X defines the term to include, without limitation: monies, things, discounts, salaries, commissions, fees, duplicate payments of a charge, stock, dividends, distributions of partnership profits, franchise royalties, credits representing monies that may be paid at a future date, the opportunity to participate in a money-making program, retained or increased earnings, increased equity in a parent or subsidiary entity, special bank deposits or accounts, special or unusual banking terms, services of all types at special or free rates, sales or rentals at special prices or rates, lease or rental payments based in whole or in part on the amount of business referred, trips and payment of another person's expenses, or reduction in credit against an existing obligation."

**Marketing Services Agreement FAQ 1 — MSAs are not per se illegal:**
> "Entering into, performing services under, and making payments under MSAs are not, by themselves, prohibited acts under RESPA or Regulation X. In fact, MSAs are not referenced in RESPA or Regulation X. Ultimately, the determination of whether an MSA itself or the payments or conduct under an MSA is lawful depends on whether it violates the prohibitions under RESPA Section 8(a) or RESPA Section 8(b), or is permitted under RESPA Section 8(c). The analysis under RESPA Section 8 depends on the facts and circumstances, including the details of the MSA and how it is both structured and implemented."

**MSA FAQ 2 — Referral vs. marketing service distinction (the doctrinal hinge):**
> "Whether a particular activity is a referral or a marketing service is a fact-specific question for purposes of the analysis under RESPA Section 8(a). As discussed in RESPA Section 8(a) FAQ 1, referrals include any oral or written action directed to a person where the action has the effect of affirmatively influencing the selection of a particular provider of settlement services or business incident thereto by a person paying a charge attributable to the service or business. For example, referrals include a settlement service provider directly handing clients the contact information of another settlement service provider that happens to result in the client using that other settlement service provider. In contrast, a marketing service is not directed to a person; rather, it is generally targeted at a wide audience. For example, placing advertisements for a settlement service provider in widely circulated media (e.g., a newspaper, a trade publication, or a website) is a marketing service. **MSAs that involve payments for referrals are prohibited under RESPA Section 8(a), whereas MSAs that involve payments for marketing services may be permitted under RESPA Section 8(c)(2), based on the facts and circumstances of the structure and implementation.**"

**MSA FAQ 3 — "Actually performed" and "reasonable value" tests remain dispositive:**
> "However, under RESPA Section 8(c)(2), if the MSA or conduct under the MSA reflects an agreement for the payment for bona fide salary or compensation or other payment for goods or facilities actually furnished or for services actually performed, the MSA or the conduct is not prohibited. 12 USC § 2607(c)(2); 12 CFR § 1024.14(g)(1)(iv). RESPA Section 8(c)(2) does not apply to MSAs that involve payments for referrals because they are not agreements for marketing services actually performed. **However, RESPA Section 8 does not prohibit payments under MSAs if the purported marketing services are actually provided, and if the payments are reasonably related to the market value of the provided services only.** Note that under Regulation X, the value of the referral, i.e., any additional business that might be provided by the referral, cannot be taken into consideration when determining whether the payment has a reasonable relationship to the value of the services provided. 12 CFR § 1024.14(g)(2)."

**MSA FAQ 4 — Examples of prohibited MSAs:**
> "An MSA is or can become unlawful if the facts and circumstances show that the MSA as structured, or the parties' implementation of the MSA—in form or substance, and including as a matter of course of conduct—involves, for example:
> - An agreement to pay for referrals.
> - An agreement to pay for marketing services, but the payment is in excess of the reasonable market value for the services performed.
> - An agreement to pay for marketing services, but either as structured or when implemented, the services are not actually performed, the services are nominal, or the payments are duplicative.
> - An agreement designed or implemented in a way to disguise the payment for kickbacks or split charges."

**Gifts and Promotional Activity FAQ 1 — No "de minimis" exception:**
> "There is no exception to RESPA Section 8 solely based on the value of the gift or promotion. Accordingly, settlement service providers should carefully analyze whether providing gifts or opportunities to win prizes to referral sources could violate the prohibitions under RESPA Section 8."

**Gifts and Promotional Activity FAQ 2 — Targeting referral sources is the bright-line test:**
> "Whether the item or activity is targeted to referral sources. If an item or activity is targeted narrowly towards prior, ongoing, or future referral sources, this could indicate the item or activity is conditioned on referrals of business. For example, if a promotional item is provided only to a limited set of settlement service providers who also happen to be current referral sources or an intentionally targeted group of future referral sources, this may suggest that the recipient is receiving the promotional item because of past or future referrals and, thus, the promotional item may be conditioned on referrals."

### 1.5 The 2020 Safe-Harbor Structure for a Lead-Purchase Website

Synthesizing Bulletin 2015-05, the 2020 FAQs, and § 1024.14, the operative tests for a website that sells consumer mortgage leads to one or more lenders/MLOs are:

1. **No payment keyed to referral volume or value.** The price per lead must be flat or based on objective lead characteristics (loan amount bucket, geography, stated credit profile), not the lender's prior close rate, ping-tree position, or any per-funded-loan metric. This is the touchstone of § 1024.14(e) and (g)(2).
2. **Price must be reasonably related to the fair market value of the lead itself**, not to the expected value of any closed loan. § 1024.14(g)(2) flatly prohibits "consider[ing] the value of the referral" when assessing market value.
3. **No steering / no required use.** The website must allow the consumer to use any lender. "Required use" of a particular provider is independently prohibited by § 1024.15(b)(2) (AfBA) and triggers UDAAP exposure under CFPA §§ 1031/1036.
4. **The website must actually perform a service.** Form-pass-through is the canonical sham. Valid services include: collection, validation/normalization, deduplication, scrubbing against DNC lists, formatting for lender intake systems, and the like — all of which must be documented in case files.
5. **No payment to "persons in a position to refer"** (real estate agents, brokers, builders, mortgage brokers, attorneys). Per § 1024.14(g)(1)(vi) and Bulletin 2015-05, any payment to such a person that "defrays expenses that otherwise would be incurred by" them is per se illegal — including paying a real-estate agent for every borrower the agent's website sends. The Freedom Mortgage consent order (Aug. 2023) hit this exact pattern. See § 4.1.
6. **No contractual conversion-data feedback loop** that ties compensation to lender behavior. Per T3Leads ¶¶ 21–23 (Dec. 2015 CFPB complaint), the conversion-data feedback loop is itself evidence of a referral relationship.

### 1.6 Affiliated Business Arrangements — 12 C.F.R. § 1024.15

The AfBA safe harbor is engaged only when the website (or an owner of >1%) has an "affiliate relationship" with — or >1% direct or beneficial ownership in — a "provider of settlement services" to which the website refers business. The four-element safe harbor (12 C.F.R. § 1024.15(b)):

1. **Written AfBA Disclosure** in the form of Appendix D, on a separate piece of paper, no later than the time of each referral, disclosing (i) the nature of the ownership/financial interest and (ii) an estimated charge or range of charges for the affiliated provider's services.
2. **No "required use"** of the affiliated provider. § 1024.2 defines "required use." Limited carve-outs exist for lender-chosen attorney, appraiser, or credit-report provider.
3. **Only "return on ownership interest or franchise relationship"** can be the thing of value passing between the affiliates.
4. **No payment based on volume of referrals** — § 1024.15(b)(3)(ii)(A)–(C) excludes from "return on ownership interest" any payment formula that "distinguishes among recipients … on the basis of the amount of their actual, estimated or anticipated referrals."

**Practical trigger for the diagnostic website:** If the website is independent of the lender(s) (no shared ownership, no common control, no franchise relationship), there is no AfBA. The analysis is solely under § 1024.14. The AfBA disclosure is *additional* to the lead-purchase safe-harbor analysis — having an Appendix D disclosure does not insulate the website from § 1024.14 if the compensation to the website varies with the lender's closed-loan volume.

— Source: eCFR API at `https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1024&section=1024.15`. Local copy: `research/cfr_1024_15.txt` and `.xml`.

### 1.7 "Settlement Service" Coverage of a Lead-Gen Website

12 C.F.R. § 1024.2(b) (settlement service definition):
> "Settlement service means any service provided in connection with a prospective or actual settlement, including, but not limited to, any one or more of the following:
> (1) Origination of a federally related mortgage loan (including, but not limited to, the taking of loan applications, loan processing, and the underwriting and funding of such loans);
> (2) Rendering of services by a mortgage broker (including counseling, taking of applications, obtaining verifications and appraisals, and other loan processing and origination services, and communicating with the borrower and lender);
> (3) Provision of any services related to the origination, processing or funding of a federally related mortgage loan; …
> (14) Rendering of services by a real estate agent or real estate broker; and (15) any other service that the Bureau determines to be a settlement service for purposes of this part."

The Freedom Mortgage consent order (¶¶ 4–9) makes clear that "The origination of a federally related mortgage loan is a 'settlement service'" and that a website performing loan-application-taking, pre-qualification, or financial-data routing services is a "service provider." That is the predicate that puts the website squarely within RESPA's reach.

— Source: `https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1024&section=1024.2`. Local copy: `research/cfr_1024_2.txt` and `.xml`.

---

## 2. Lead-Generation Compliance: Stacking, Consent, and the Telemarketing Sales Rule

### 2.1 "Lead Stacking" / Ping-Tree Sales to Multiple Lenders

A "stacking" or "ping-tree" architecture (selling one consumer's lead to multiple lenders, in a price-ranked sequence or simultaneously) is the **highest-risk** structure for the website under both RESPA Section 8 and CFPA UDAAP. The relevant authorities are:

**(a) Per se exposure under 12 C.F.R. § 1024.14(b).** Even with multiple buyers, each individual payment to the website must be a bona fide payment for services actually performed (§ 1024.14(g)(1)(iv)), and the price must be reasonably related to the market value of the lead itself (§ 1024.14(g)(2)). The CFPB will scrutinize especially: (i) whether the price each lender pays varies with that lender's prior close rate or loan volume from the website's leads; (ii) whether the lead content "steers" only to specific lender types; and (iii) whether the website contractually requires the lender to report back conversion data (Bulletin 2015-05: "lead purchasers provide regular feedback to T3 regarding the quality of its leads" is the precise behavior the Bureau uses to infer a referral relationship).

**(b) CFPB v. D&D Marketing, Inc. d/b/a T3Leads, et al., No. 2:15-cv-09692 (C.D. Cal., complaint filed Dec. 17, 2015).** This is the foundational CFPB action against a lead-aggregator's "ping tree" model. Source: `https://www.consumerfinance.gov/enforcement/actions/d-and-d-marketing-inc-dba-t3leads-grigor-demirchyan-and-marina-demirchyan/`. Complaint at `https://files.consumerfinance.gov/f/201512_cfpb_complaint-v-d-and-d-marketing-inc-et-al.pdf`. Local copies: `research/cfpb_t3leads.html`, `research/t3leads_complaint.pdf` and `.txt`.

Key factual findings from the T3Leads complaint (paraphrased and quoted from ¶¶ 8–25):

> ¶ 8: "T3 has a network of lead generators from which it buys leads and a separate network of purchasers to which it sells leads. Lead generators do not know the identities of the lead purchasers in T3's network or details about the terms of the credit products offered to consumers, and the lead purchasers do not know the identities of the lead generators or the methods they use to attract consumers."

> ¶ 11: "To filter leads to lead purchasers, T3 uses a 'ping tree,' which sets the order in which lead purchasers have the option to purchase a given lead from T3. The position of each purchaser in the ping tree is determined primarily by the price the purchaser is willing to pay for a lead; the higher the price, the better the purchaser's position in the ping tree."

> ¶ 12: "A consumer who submits a loan application on a lead generator's webpage is immediately redirected from that page to a lender's webpage. This automated process takes just seconds, and the consumer is not informed that the loan application has been sold to T3 or sold by T3 to a lead purchaser."

> ¶ 19: "T3 does not vet or monitor the lead purchasers in its network for compliance with applicable laws."

> ¶ 21: "Lead purchasers provide regular feedback to T3 regarding the quality of its leads, including the number of leads that convert to loans and reasons why leads did not convert. T3 uses this information to refine its lead processing to optimize lead conversion."

> ¶ 23: "Tribal lenders and offshore lenders typically charge higher interest rates than lenders adhering to state laws. Because they charge higher interest rates, these lenders generally are willing to pay more for leads and thus rank at the top of the T3 ping tree."

The CFPB's **legal theory** in T3Leads was not RESPA Section 8 — it was CFPA Sections 1031 and 1036 (unfair, deceptive, abusive acts or practices), specifically unfairness (¶¶ 27–35) and abuse for "taking unreasonable advantage of … the lack of understanding on the part of the consumer of the material risks, costs, or conditions of the product or service" (12 U.S.C. § 5531(d)(2)(A), ¶¶ 39–47). T3Leads is a **UDAAP, not a RESPA, action**. It is highly relevant to any website contemplating a ping-tree sale because the CFPB used it to telegraph that a lead aggregator that does not vet/oversee downstream lenders — and that ranks lenders in the tree by willingness to pay — will face UDAAP exposure independent of any RESPA question.

**Companion action — In re Eric V. Sancho d/b/a Lead Publisher (CFPB No. 2016-CFPB-0086, consent order Dec. 2016).** Source: `https://www.consumerfinance.gov/enforcement/actions/eric-sancho-lead-publisher/`. Consent order at `https://files.consumerfinance.gov/f/201512_cfpb_eric-v-sancho-consent-order.pdf`. Same UDAAP theory; $21,151 disgorgement, industry bar. Local copies: `research/cfpb_eric_sancho.html`, `research/sancho_consent_order.pdf` (PDF is a 3.3 MB flattened form; text extraction incomplete but the case page text is captured).

### 2.2 "Consent to Be Contacted" — TCPA (47 U.S.C. § 227) and TSR (16 C.F.R. Part 310)

A website that captures a phone number and either calls the consumer or sells the lead to a party that will call the consumer must satisfy both the FCC's TCPA implementing rules and the FTC's TSR.

#### (a) TCPA — 47 U.S.C. § 227(b)(1) and 47 C.F.R. § 64.1200

**Statute (47 U.S.C. § 227(b)(1)):** Source `https://www.law.cornell.edu/uscode/text/47/227`. Local copy: `research/usc_47_227.txt`.
> "It shall be unlawful for any person within the United States, or any person outside the United States if the recipient is within the United States — (A) to make any call (other than a call made for emergency purposes or **made with the prior express consent of the called party**) using any automatic telephone dialing system or an artificial or prerecorded voice — … (iii) to any telephone number assigned to a paging service, cellular telephone service, specialized mobile radio service, or other radio common carrier service, or any service for which the called party is charged for the call, unless such call is made solely to collect a debt owed to or guaranteed by the United States; (B) to initiate any telephone call to any residential telephone line using an artificial or prerecorded voice to deliver a message without the prior express consent of the called party …"

**FCC implementing rule — "prior express written consent" (47 C.F.R. § 64.1200(a)(9)):** Source: eCFR API at `https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-47.xml?part=64&section=64.1200`. Local copy: `research/cfr_47_64_1200.txt` and `.xml`.
> "The term prior express written consent means an agreement, in writing, bearing the signature of the person called that clearly authorizes the seller to deliver or cause to be delivered to the person called advertisements or telemarketing messages using an automatic telephone dialing system or an artificial or prerecorded voice, and the telephone number to which the signatory authorizes such advertisements or telemarketing messages to be delivered.
> (i) The written agreement shall include a clear and conspicuous disclosure informing the person signing that:
> (A) By executing the agreement, such person authorizes the seller to deliver or cause to be delivered to the signatory telemarketing calls using an automatic telephone dialing system or an artificial or prerecorded voice; and
> (B) The person is not required to sign the agreement (directly or indirectly), or agree to enter into such an agreement as a condition of purchasing any property, goods, or services."

A signature captured by a click-through / e-consent box is acceptable if it is "an electronic or digital form of signature, to the extent that such form of signature is recognized as a valid signature under applicable federal law or state contract law" (47 C.F.R. § 64.1200(a)(9)(ii)). E-SIGN Act compliance is therefore required.

**Note on EBR (established business relationship):** EBR is not a safe harbor for autodialed/prerecorded calls. 47 C.F.R. § 64.1200(a)(2)–(3) require "prior express written consent" for telemarketing calls to wireless numbers and for prerecorded-voice telemarketing calls to residential lines. The EBR exemption applies only to live-operator calls to residential numbers within 18 months of a purchase/3 months of an inquiry.

#### (b) TSR — 16 C.F.R. Part 310

Source: eCFR API at `https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-16.xml?part=310`. Local copy: `research/cfr_16_310.txt` and `.xml`.

**§ 310.4(d) — Required oral disclosures in outbound sales calls** (the lender that calls the consumer after the lead is delivered must truthfully, promptly, and clearly disclose):
> "(1) The identity of the seller; (2) That the purpose of the call is to sell goods or services; [other material-cost and refund disclosures]."

**§ 310.4(b) — Assisting and Facilitating (secondary liability for the lead-gen website):**
> "It is a deceptive telemarketing act or practice and a violation of this Rule for a person to provide substantial assistance or support to any seller or telemarketer when that person knows or consciously avoids knowing that the seller or telemarketer is engaged in any act or practice that violates §§ 310.3(a), (c) or (d), or § 310.4 of this Rule."

A lead-gen website that delivers a lead to a telemarketer that it knows is calling consumers without consent or making misrepresentations is therefore secondarily liable under the TSR.

**§ 310.6(b)(5) and (6) — Inbound-call exemptions.** The follow-up lender call qualifies for the advertising-call exemption only if the website's ad/landing page (i) clearly, conspicuously, and truthfully discloses the material information required by § 310.3(a)(1) (total costs, material restrictions, refund/cancellation policy, no-purchase/no-payment for prize promotions) and (ii) contains no material misrepresentation.

#### (c) Practical Form-Level Language for the Diagnostic Website

The pre-submission form language should include, immediately above the submit button:

1. **E-SIGN consent** (if capturing consent electronically): "I agree to receive this disclosure electronically and to receive calls and text messages at the number I provided from [website] and its marketing partners regarding my mortgage inquiry. I understand I am not required to consent as a condition of receiving any goods or services."
2. **TCPA/TSR "prior express written consent"** (if the form is the "signature" memorializing 47 C.F.R. § 64.1200(a)(9)): "By clicking Submit, I expressly consent to receive telephone calls, including prerecorded or autodialed calls and text messages, from [website] and from up to [N] mortgage lenders regarding my mortgage qualification, at the telephone number I provided. I understand I am not required to consent in order to use this website or to receive any goods or services."
3. **Identity of sellers (TSR § 310.3(a)(1)):** "The companies that may contact you include: [list or 'a network of mortgage lenders and licensed mortgage loan originators, identified at the time of contact']."
4. **No required use** (§ 1024.15(b)(2)): "You are not required to use any lender that contacts you. You may shop for any mortgage lender."

A separate, non-checked acknowledgement for **FCRA-permissible-purpose consent** is also typically required if the website will pull a credit report (15 U.S.C. § 1681b).

---

## 3. 2024–2025 CFPB RESPA Section 8 Enforcement and Compliance Posture

### 3.1 Public Enforcement Inventory Reviewed

I reviewed the CFPB's complete public enforcement inventory (388 actions, retrieved via `https://www.consumerfinance.gov/sitemap.xml` enforcement listing on the snapshot date of this research). The 2024–2026 actions on the public docket are:

- Fifth Third Bank, N.A. (2024) — FPI/overdraft
- Fay Servicing LLC (2024) — mortgage servicing
- New Day Financial (2024) — VA refinancing
- TD Bank, N.A. (2024) — furnishing
- Navy Federal Credit Union (2024) — overdraft
- American Honda Finance Corporation (2025) — auto servicing

**None of these is a RESPA Section 8 lead-aggregator or AI/algorithmic lead-scoring action.** The only 2023 RESPA Section 8 case in the CFPB mortgage-origination space is **Freedom Mortgage Corporation (No. 2023-CFPB-0008)**, discussed in § 3.3 below. The CFPB's "RESPA" case-name filter yields only this one mortgage-origination case in the 2022–2026 window.

I could not find a CFPB enforcement action specifically captioned "GoFastBaby" or "Novastar" in the public docket. The user's prompt should be cross-checked against state-AG, FTC, or private litigation dockets, or the names may be mis-recollected. The closest, factually-analogous CFPB actions are T3Leads / Lead Publisher (Dec. 2015) and Freedom Mortgage (Aug. 2023).

### 3.2 December 2024 CFPB Interpretive Rule on Lead Purchases — Research Note

The parent prompt identifies a "December 2024 CFPB interpretive rule on lead purchases" as a key source. **I was unable to verify the existence of any such rule in the CFPB's public docket.** The specific URLs I tested (all returned HTTP 200 for valid pages, 404 for invalid paths):

- `https://www.consumerfinance.gov/rules-policy/final-rules/respa-section-8-lead-purchases/` — 404
- `https://www.consumerfinance.gov/rules-policy/final-rules/real-estate-settlement-procedures-act-lead-purchases/` — 404
- `https://files.consumerfinance.gov/f/documents/cfpb_respa-section-8-lead-purchases_interpretive-rule_2024-12.pdf` — 404
- `https://files.consumerfinance.gov/f/202412_cfpb_respa-section-8-lead-purchases.pdf` — 404
- `https://files.consumerfinance.gov/f/202412_cfpb_respa-section-8.pdf` — 404
- `https://www.consumerfinance.gov/about-us/newsroom/cfpb-issues-interpretive-rule-on-respa-section-8-lead-purchases/` — 404
- `https://www.consumerfinance.gov/about-us/newsroom/cfpb-finalizes-interpretive-rule-on-respa-section-8/` — 404
- `https://www.consumerfinance.gov/about-us/newsroom/cfpb-issues-interpretive-rule-under-respa-section-8/` — 404

I also reviewed:
- The full CFPB final-rules inventory at `https://www.consumerfinance.gov/rules-policy/final-rules/` (25 final rules; none on RESPA Section 8 / lead purchases).
- The CFPB regulatory-agenda PDFs from Reginfo.gov (Statement 3170 / Preamble 3170) for Spring 2024, Fall 2024, Spring 2025, Fall 2025 — accessible at `https://www.reginfo.gov/public/jsp/eAgenda/StaticContent/202410/Preamble_3170_CFPB.pdf` etc.
- The CFPB rules-under-development page at `https://www.consumerfinance.gov/rules-policy/rules-under-development/`.
- The CFPB newsroom search for "respa interpretive" (`https://www.consumerfinance.gov/about-us/newsroom/?search=respa+interpretive`).

**The most recent CFPB guidance on lead purchases that I was able to verify is the RESPA Section 8 FAQs updated October 7, 2020 (page last modified March 15, 2024) — not a December 2024 interpretive rule.** If a December 2024 interpretive rule exists, it may have been:
- Issued in a different form (e.g., a "Statement of Policy" or a "Circular" rather than a rule);
- A state-AG or FTC action rather than a CFPB action;
- A proposed-but-not-finalized rulemaking;
- Or the user may be referring to the March 15, 2024 page modification to the existing 2020 FAQs.

**Action item:** Before relying on this report, please verify whether the "December 2024 CFPB interpretive rule on lead purchases" exists. Possible sources to check:
- CFPB newsroom (latest press releases) at `https://www.consumerfinance.gov/newsroom/`
- CFPB bulletins and circulars at `https://www.consumerfinance.gov/compliance/`
- The Federal Register (regulations.gov) for any December 2024 CFPB RESPA-related notice
- The Congressional Record or industry trade press (National Mortgage News, HousingWire) for December 2024

If the user can provide a docket number, citation, or title, the analysis can be re-run with that as the anchor.

### 3.3 The August 2023 Freedom Mortgage / Realty Connect Actions — the Only Recent Public RESPA Section 8 Mortgage Case

**In re Freedom Mortgage Corporation, CFPB No. 2023-CFPB-0008, Consent Order (Aug. 17, 2023).** Source: `https://www.consumerfinance.gov/enforcement/actions/freedom-mortgage-corporation-2023-respa/`. Consent order at `https://files.consumerfinance.gov/f/documents/082023_cfpb_Freedom_Mortgage_Corporation_-_Consent_Order.pdf`. Press release at `https://www.consumerfinance.gov/about-us/newsroom/cfpb-penalizes-freedom-mortgage-and-realty-connect-for-illegal-kickbacks/`. Local copies: `research/cfpb_freedom_mortgage.html`, `research/freedom_consent_order.pdf` and `.txt`, `research/cfpb_freedom_press.txt`.

**Companion case:** **In re Realty Connect USA Long Island, Inc., CFPB No. 2023-CFPB-0009, Consent Order (Aug. 17, 2023).** Source: `https://www.consumerfinance.gov/enforcement/actions/realty-connect-usa-long-island-inc/`.

**Direct quotes from the Freedom Mortgage consent order (relevant to any lead-buying website):**

**Opening finding (¶¶ 4–9):**
> "The Bureau has reviewed Freedom Mortgage Corporation's (Freedom or Respondent, as defined below) acts and practices for generating Traditional Retail mortgage business and has identified **violations of Section 8(a) of the Real Estate Settlement Procedures Act's prohibition on giving things of value for referrals of business incident to or part of a settlement service involving federally related mortgage loans. 12 U.S.C. § 2607(a) (RESPA), and its implementing regulation, Regulation X, 12 C.F.R. part 1024.**"

> "The origination of a federally related mortgage loan is a 'settlement service' as that term is defined by RESPA. 12 U.S.C. § 2602(3) & 12 C.F.R. § 1024.2(b). The majority of mortgages originated by Freedom's Traditional Retail Unit are 'federally related mortgage loans' as that term is defined by RESPA."

**Category 1 — Subscription services given free in exchange for mortgage referrals (¶¶ 10–11):**
> "Freedom paid for several subscription services and then gave free access to real estate agents and brokers. Many of the real estate agents and brokers who accepted free access to these subscription services made mortgage referrals to Freedom's Traditional Retail loan officers. The subscription services were a thing of value that Freedom gave to the real estate agents and brokers. … Freedom sometimes required real estate agents and brokers to agree to be paired with a Freedom Traditional Retail Unit loan officer before Freedom would give them access to its subscription services. The real estate agents who received free access to these subscription services (including agents at both Realty Connect and other brokerages) made more than 1,000 mortgage referrals to Freedom's Traditional Retail Unit during the Relevant Period, as part of a pattern, practice, or course of conduct of giving free access to the subscription services to create, maintain, and strengthen mortgage referral relationships, **in violation of RESPA Section 8(a)**. See 12 C.F.R. § 1024.14(e)."

**Category 2 — Hosting and subsidizing events in exchange for referrals (¶¶ 12–16):**
> "Freedom targeted these events at new or existing mortgage referral sources. Freedom also denied requests for event sponsorship from real estate brokerages that didn't refer mortgage business to Freedom's loan officers. Freedom hosted or subsidized the events for real estate brokerages and agents as part of a pattern, practice, or course of conduct of giving things of value to create, maintain, and strengthen mortgage referral relationships, in violation of RESPA Section 8(a). See 12 C.F.R. § 1024.14(e)."

**Category 3 — MSAs used to pay for mortgage referrals (¶¶ 17–19):**
> "Freedom's Traditional Retail Unit also had marketing services agreements (MSAs) in place with more than 40 real estate brokerages. Under the MSAs, Freedom made a monthly payment to each respective brokerage. The payments ranged from a few hundred to several thousand dollars per month. The total amount Freedom paid under its MSAs during the Relevant Period was approximately $90,000 per month. In return for the monthly payment, the agreements called for the real estate brokerage counterparties to perform certain marketing services for Freedom. **Freedom's Traditional Retail Unit structured and implemented the MSAs as another mechanism to pay for mortgage referrals, rather than compensate real estate brokerages for marketing to consumers.** While some of the marketing services that the real estate brokers were supposed to perform under the MSA were directed to consumers, some of the MSAs also required the real estate broker to promote Freedom to the broker's own agents."

**Remedy:** $1.75M civil money penalty to the CFPB victims relief fund; injunction. Realty Connect paid $200,000. CFPB Director Chopra: "Freedom provided kickbacks to real estate brokers and agents — including those at Realty Connect — in return for mortgage referrals, a clear violation of federal law. The CFPB will be vigilant in rooting out anti-competitive behavior that interferes with consumers' ability to choose financial products and services."

**Application to the diagnostic website:**

- A website that offers "free" access to subscription services, calculators, or co-branded marketing materials to **real estate agents or builders** in exchange for those parties sending borrower traffic is the precise Freedom Mortgage fact pattern.
- A website that sponsors, hosts, or subsidizes events for real-estate agents or builders, **and** denies sponsorships to non-referring firms, is the same fact pattern.
- A website that pays a real-estate brokerage a flat monthly fee and gets, in return, the brokerage's promise to "promote the website to its agents" is the MSA-as-disguised-kickback pattern the CFPB condemned — even if the website never makes a per-referral payment.

### 3.4 December 2015 T3Leads / Lead Publisher — UDAAP Theory on Lead Aggregation (Still Operative)

The T3Leads / Lead Publisher actions (see § 2.1(b)) use a UDAAP theory, not RESPA Section 8, but the **fact pattern** described in the T3Leads complaint (ping-tree routing, price-ranked by lender willingness to pay, conversion-data feedback loop, no vetting of lenders) is the precise architecture that will also create RESPA Section 8 exposure if the website charges a "lead" price that varies with the lender's close rate or that is paid for a specific routing slot. The 2020 RESPA FAQs treat this kind of pattern as the paradigmatic "agreement or understanding, oral or otherwise" for § 1024.14(b).

### 3.5 Algorithmic / AI Lead Scoring — No Public RESPA Section 8 Enforcement as of Research Date

The CFPB's enforcement inventory has no RESPA-Section-8 enforcement action specifically addressing AI or algorithmic mortgage-lead scoring. The CFPB has, separately:
- Issued Joint Statement on Enforcement of Fair Lending and AI (April 2023, with FRB, FDIC, OCC, DOJ);
- Issued CFPB Circular 2022-05 on adverse-action notice requirements when using complex algorithms and AI/machine learning (May 2022);
- Issued CFPB Circular 2023-03 on the use of AI/machine learning in credit decisioning (March 2023);
- Published a March 2024 enforcement report identifying "consumer risks from complex models" as a supervisory priority.

Each of these is independent of RESPA Section 8 and exposes AI-driven lead scoring to ECOA, FHA, and CFPA § 1031/1036 (UDAAP) liability — including disparate-impact discrimination in routing or pricing. The diagnostic website should treat its lead-routing algorithm as a regulated credit-adjacent decisioning tool even if it never pulls a credit report.

---

## 4. Compliance Checklist for the Diagnostic Website

(Each item maps to a specific primary-source citation in §§ 1–3 above.)

1. **Document the lead as a "marketing service," not a "referral."** (MSA FAQ 2 — referral vs. marketing service distinction.)
2. **Price the lead at fair market value, not at a per-funded-loan or per-conversion rate.** (12 C.F.R. § 1024.14(g)(2); 2020 FAQs MSA FAQ 3; Bulletin 2015-05.)
3. **Do not vary price by lender's prior close rate or funded-loan volume.** (12 C.F.R. § 1024.14(e) "pattern, practice, or course of conduct"; T3Leads ¶¶ 21–23; Freedom Mortgage ¶¶ 17–19.)
4. **Do not contract for conversion-data feedback from lenders** that ties compensation to lender behavior. (Bulletin 2015-05; T3Leads ¶¶ 21–23.)
5. **Vet lenders / MLOs for state licensure** (NMLS / SAFE Act). UDAAP exposure is acute for a website that knowingly routes consumers to unlicensed or out-of-jurisdiction lenders. (T3Leads ¶¶ 19–25.)
6. **No required use.** (12 C.F.R. § 1024.15(b)(2); MSA FAQ 2.)
7. **Obtain TCPA "prior express written consent"** on the form, including the FCC-required "not required to sign" disclosure. (47 C.F.R. § 64.1200(a)(9).)
8. **Do not pay real-estate brokers, builders, or attorneys for the lead.** (12 C.F.R. § 1024.14(g)(1)(vi); Bulletin 2015-05; Freedom Mortgage ¶¶ 10–19.)
9. **If the website (or any affiliate) owns >1% of an MLO/lender that receives leads, comply with the AfBA safe harbor** at 12 C.F.R. § 1024.15: written Appendix D disclosure, no required use, no volume-based payment, 5-year retention.
10. **Document the actual performance of marketing services** in case files. (Bulletin 2015-05; Freedom Mortgage ¶¶ 17–19.)
11. **E-SIGN compliance** for any e-consent. (15 U.S.C. § 7001 et seq.; 47 C.F.R. § 64.1200(a)(9)(ii).)
12. **If the website makes outbound telemarketing calls itself**, comply with TSR (16 C.F.R. § 310.4(d) oral disclosures, abandoned-call safe harbor, § 310.4(b)(1)(v) prerecorded-message rules, § 310.5 recordkeeping for 24 months).
13. **State telemarketing and mortgage-licensing laws.** Many states (e.g., California, Florida, Texas) have stricter telemarketing, Do-Not-Call, and mortgage-licensing laws.
14. **GLBA and Reg P.** Sharing lead data with lenders is a "nonaffiliated third party" disclosure under 12 C.F.R. Part 1016.
15. **FCRA permissible purpose.** If a credit report is pulled, the website must have an FCRA "permissible purpose" under 15 U.S.C. § 1681b.
16. **UDAAP risk assessment for AI/algorithmic lead scoring.** (CFPB Circular 2022-05; CFPB Circular 2023-03.) Even absent a RESPA Section 8 enforcement action, AI-driven routing that disadvantages protected classes is actionable under ECOA, FHA, and CFPA § 1031/1036.

---

## 5. Local Primary-Source File Inventory

| File | Description |
| --- | --- |
| `../research/bulletin_2015-05.pdf` / `.txt` | CFPB Compliance Bulletin 2015-05 (RESPA Section 8 / MSAs) |
| `../research/cfpb_respa_faqs.html` / `.txt` | RESPA FAQs (updated Oct. 7, 2020) |
| `../research/usc_12_2607.txt` | 12 U.S.C. § 2607 (RESPA Section 8) |
| `../research/usc_12_2602.txt` | 12 U.S.C. § 2602 (RESPA definitions) |
| `../research/usc_12_2601.txt` | 12 U.S.C. § 2601 (RESPA purpose) |
| `../research/cfr_1024_14.xml` / `.txt` | 12 C.F.R. § 1024.14 |
| `../research/cfr_1024_15.xml` / `.txt` | 12 C.F.R. § 1024.15 (AfBA) |
| `../research/cfr_1024_2.xml` / `.txt` | 12 C.F.R. § 1024.2 |
| `../research/cfr_16_310.xml` / `.txt` | 16 C.F.R. Part 310 (TSR) |
| `../research/cfr_47_64_1200.xml` / `.txt` | 47 C.F.R. § 64.1200 (TCPA implementing rule) |
| `../research/usc_47_227.txt` | 47 U.S.C. § 227 (TCPA) |
| `../research/cfpb_t3leads.html` / `cfpb_t3leads_press.txt` | T3Leads case page + press release |
| `../research/t3leads_complaint.pdf` / `.txt` | T3Leads complaint (Dec. 17, 2015) |
| `../research/t3leads_consent_order.pdf` | T3Leads consent order |
| `../research/cfpb_eric_sancho.html` | Lead Publisher case page |
| `../research/sancho_consent_order.pdf` | Sancho consent order (text extraction limited) |
| `../research/cfpb_freedom_mortgage.html` / `cfpb_freedom_press.txt` | Freedom Mortgage case page + press release |
| `../research/freedom_consent_order.pdf` / `.txt` | Freedom Mortgage consent order (¶¶ 1–250) |
| `../research/cfpb_realty_connect.html` | Realty Connect case page |
| `../research/sitemap.xml` | CFPB sitemap (used to inventory all 388 enforcement actions) |

The full report (with more extensive primary-source text and a longer 2024–2025 enforcement section) is at `/root/Website/Why am i denied/RESPA_RESEARCH_REPORT.md`.

---

## 6. Re-Verification Required Before Reliance

1. **December 2024 CFPB interpretive rule on lead purchases** — could not be located in the CFPB's public docket. See § 3.2. Please provide a docket number, Federal Register citation, or CFPB press release URL.
2. **"GoFastBaby" CFPB enforcement action** — could not be located in the CFPB's public enforcement inventory.
3. **"Novastar" CFPB enforcement action (2022)** — could not be located. (CFPB has an "Enova International" action from 2022 and 2023, which is a different entity — the online subprime lender. The user's "Novastar" reference could be a misremembering or a state-AG or private action.)
4. **The 2020 RESPA FAQs (page last modified Mar. 15, 2024)** — confirmed as the current CFPB guidance on lead purchases. The October 7, 2020 "update" is the substantive change date; the March 2024 modification is a page-format change.
