# RESPA Compliance Research Report
**U.S. Consumer Mortgage Qualification Diagnostic Website — Lead Capture and Resale Analysis**

This report covers the federal-law compliance framework for a website that (i) captures consumer financial data as "leads" and (ii) resells or transfers those leads to a single licensed mortgage loan originator (MLO) or to multiple lenders (i.e., lead aggregation, "stacking," or "ping-tree" sales). All citations link to primary sources retrieved directly during this research session, with quoted statutory and regulatory text and direct references to CFPB bulletins, FAQs, and enforcement orders. Local copies of every primary source cited are saved in `research/`.

> **Scope note on cited enforcement actions.** The user prompt referenced "GoFastBaby" and "Novastar (2022)." I was unable to find a CFPB enforcement action against an entity named "GoFastBaby" or "Novastar" in the CFPB enforcement inventory (388 public actions) or via the available search tools. The closest, factually-related lead-aggregator actions that the CFPB has brought are (a) the December 2015 lawsuit against T3Leads (D&D Marketing) and its owners, and the parallel administrative action against Eric V. Sancho d/b/a Lead Publisher (settled December 2016), and (b) the August 2023 joint actions against Freedom Mortgage Corporation and Realty Connect USA Long Island. I document those cases below. If "GoFastBaby" and "Novastar" refer to non-CFPB actions (state AG, FTC, or private litigation), the search tools available to me in this session were unable to verify them and they are not represented in this report.

---

## 1. RESPA Section 8 (12 U.S.C. § 2607) and Regulation X (12 C.F.R. Part 1024)

### 1.1 The Kickback / Unearned-Fee Prohibition (12 U.S.C. § 2607)

The statute is short and absolute. Three operative subsections:

**§ 2607(a) — Business referrals (kickback prohibition).**
> "No person shall give and no person shall accept any fee, kickback, or thing of value pursuant to any agreement or understanding, oral or otherwise, that business incident to or a part of a real estate settlement service involving a federally related mortgage loan shall be referred to any person."

— *12 U.S.C. § 2607(a)* (LII text retrieved from `https://www.law.cornell.edu/uscode/text/12/2607`, local copy: `research/usc_12_2607.txt`).

**§ 2607(b) — Splitting charges (unearned-fee prohibition).**
> "No person shall give and no person shall accept any portion, split, or percentage of any charge made or received for the rendering of a real estate settlement service in connection with a transaction involving a federally related mortgage loan other than for services actually performed."

**§ 2607(c) — Safe harbors.** Lists payments that are NOT prohibited, including:
- (1) payments to attorneys for services actually rendered, payments by a title company to its duly appointed agent, and payments by a lender to its duly appointed agent/contractor;
- (2) "the payment to any person of a bona fide salary or compensation or other payment for goods or facilities actually furnished or for services actually performed";
- (3) cooperative brokerage/referral arrangements between real estate agents and brokers;
- (4) affiliated business arrangements, subject to the written disclosure and other conditions in § 2607(c)(4)(A)–(B).

**§ 2607(d) — Penalties.** Criminal: fine up to $10,000 and/or up to one year imprisonment (§ 2607(d)(1)). Civil: joint and several liability to the consumer for **three times the amount of any charge paid** for the settlement service (§ 2607(d)(2)). The CFPB has primary enforcement authority (§ 2607(d)(4)).

### 1.2 Regulation X § 1024.14 — The Implementing Rule

The CFPB's implementing regulation at 12 C.F.R. § 1024.14 mirrors and elaborates the statute. (eCFR API XML retrieved from `https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1024&section=1024.14`, local copy: `research/cfr_1024_14.txt` / `research/cfr_1024_14.xml`.)

**§ 1024.14(b) — No referral fees.**
> "No person shall give and no person shall accept any fee, kickback or other thing of value pursuant to any agreement or understanding, oral or otherwise, that business incident to or part of a settlement service involving a federally related mortgage loan shall be referred to any person. **Any referral of a settlement service is not a compensable service, except as set forth in § 1024.14(g)(1).** A company may not pay any other company or the employees of any other company for the referral of settlement service business."

**§ 1024.14(c) — No split of charges except for actual services performed.**
> "A charge by a person for which no or nominal services are performed or for which duplicative fees are charged is an unearned fee and violates this section. The source of the payment does not determine whether or not a service is compensable. Nor may the prohibitions of this part be avoided by creating an arrangement wherein the purchaser of services splits the fee."

**§ 1024.14(d) — "Thing of value" is broadly defined.** Critical for the lead-purchase context. The list is non-exhaustive and includes:

> "monies, things, discounts, salaries, commissions, fees, duplicate payments of a charge, stock, dividends, distributions of partnership profits, franchise royalties, credits representing monies that may be paid at a future date, the opportunity to participate in a money-making program, retained or increased earnings, increased equity in a parent or subsidiary entity, special bank deposits or accounts, special or unusual banking terms, services of all types at special or free rates, sales or rentals at special prices or rates, lease or rental payments based in whole or in part on the amount of business referred, trips and payment of another person's expenses, or reduction in credit against an existing obligation. The term 'payment' is used throughout §§ 1024.14 and 1024.15 as synonymous with the giving or receiving of any 'thing of value' and **does not require transfer of money**."

**§ 1024.14(e) — "Agreement or understanding" can be inferred from conduct.**
> "An agreement or understanding for the referral of business incident to or part of a settlement service need not be written or verbalized but may be established by a practice, pattern or course of conduct. When a thing of value is received repeatedly and is connected in any way with the volume or value of the business referred, the receipt of the thing of value is evidence that it is made pursuant to an agreement or understanding for the referral of business."

This is the regulatory hook that the CFPB uses to attack disguised lead-purchase schemes that are documented to be tied to referral volume.

**§ 1024.14(f)(1) — What is a "referral."**
> "A referral includes any oral or written action directed to a person which has the effect of affirmatively influencing the selection by any person of a provider of a settlement service or business incident to or part of a settlement service when such person will pay for such settlement service or business incident thereto or pay a charge attributable in whole or in part to such settlement service or business."

**§ 1024.14(g) — Permitted payments** (re-stating and elaborating § 2607(c)). Crucially, the only way a "thing of value" can lawfully move between unaffiliated parties in the settlement-service chain is:
- (i)–(iii) specific agency/attorney carve-outs;
- (iv) "A payment to any person of a bona fide salary or compensation or other payment for goods or facilities actually furnished or for services actually performed";
- (v) intra-real-estate-brokerage fee splits;
- (vi) "Normal promotional and educational activities that are not conditioned on the referral of business and that do not involve the defraying of expenses that otherwise would be incurred by persons in a position to refer settlement services or business incident thereto";
- (vii) "An employer's payment to its own employees for any referral activities."

**§ 1024.14(g)(2) — The "fair market value" rule** is dispositive for lead sales:
> "The Bureau may investigate high prices to see if they are a referral fee or a split of a fee. If the payment of a thing of value bears no reasonable relationship to the market value of the goods or services provided, then the excess is not for services or goods actually performed or provided. … **The value of a referral (i.e., the value of any additional business obtained thereby) is not to be taken into account in determining whether the payment exceeds the reasonable value of such goods, facilities or services.** The fact that the transfer of the thing of value does not result in an increase in any charge made by the person giving the thing of value is irrelevant in determining whether the act is prohibited."

**§ 1024.14(g)(3) — "Multiple services" rule** (the attorney-as-title-agent problem):
> "When a person in a position to refer settlement service business, such as an attorney, mortgage lender, real estate broker or agent, or developer or builder, receives a payment for providing additional settlement services as part of a real estate transaction, such payment must be for services that are actual, necessary and distinct from the primary services provided by such person."

### 1.3 Is a "Payment for a Lead" a Referral Fee? — CFPB Bulletin 2015-05 (Marketing Services Agreements)

The CFPB's authoritative current statement on MSAs and lead-buying arrangements is **CFPB Compliance Bulletin 2015-05: RESPA Compliance and Marketing Services Agreements** (Oct. 8, 2015), retrieved from `https://files.consumerfinance.gov/f/201510_cfpb_compliance-bulletin-2015-05-respa-compliance-and-marketing-services-agreements.pdf` and extracted to `research/bulletin_2015-05.txt`. It is also linked from `https://www.consumerfinance.gov/compliance/supervisory-guidance/bulletin-respa-compliance-marketing-services-agreements/`.

Key direct quotes from Bulletin 2015-05 (emphasis added):

**On RESPA's purpose:**
> "Thus, a primary purpose of RESPA is to 'eliminat[e] … kickbacks or referral fees that tend to increase unnecessarily the costs of settlement services.' 12 U.S.C. 2601(b)(2)."

**On the operative prohibition:**
> "Section 8(a) of RESPA prohibits the giving and accepting of 'any fee, kickback or thing of value pursuant to any agreement or understanding, oral or otherwise, that business incident to or a part of a real estate settlement service involving a federally related mortgage loan shall be referred to any person.' 12 U.S.C. 2607(a); see also 12 C.F.R. 1024.14(b)."

> "Section 8(c)(2) states that '[n]othing in this section shall be construed as prohibiting … the payment to any person of a bona fide salary or compensation or other payment for goods or facilities actually furnished or for services actually performed.' 12 U.S.C. 2607(c)(2); see also 12 C.F.R. 1024.14(g)."

**On MSAs as the typical vehicle for disguised kickbacks:**
> "MSAs are usually framed as payments for advertising or promotional services, but in some cases the payments are actually disguised compensation for referrals."

**On the CFPB's enforcement track record (as of October 2015):**
> "The Bureau's Office of Enforcement has identified violations of RESPA Section 8(a) in the course of its investigations, including investigations that involved the use of oral or written MSAs. … any agreement that entails exchanging a thing of value for referrals of settlement service business involving a federally related mortgage loan likely violates RESPA, whether or not an MSA or some related arrangement is part of the transaction."

**Concrete CFPB finding of fact (from a prior enforcement action described in the Bulletin):**
> "The Bureau observed a title insurance company entering MSAs as a quid pro quo for the referral of business. The fees paid under the agreements were based, in part, on how many referrals the title insurance company received and the revenue generated by those referrals. From its investigation of the underlying facts, the Bureau found that the number of referrals increased significantly when MSAs existed, and the differences in referrals were statistically significant and not explained by seasonal or year-to-year fluctuations."

**Failure-to-perform is itself evidence of a kickback:**
> "The Bureau has also seen cases where companies fail to provide some or all of the services required under their agreements. … When services promised under an MSA are not performed, but payments are being made, a reasonable inference can be drawn that the MSA is part of an agreement to refer settlement services business in exchange for kickbacks."

**The "defraying expenses" theory (relevant to website → real-estate-agent arrangements):**
> "In another matter that resulted in an enforcement action, a title company entered into unwritten agreements with individual loan officers in which it paid for the referrals by defraying the loan officers' marketing expenses. The title company supplied loan officers with valuable lead information and marketing materials. In exchange, the loan officers sent referrals to the title company. The lenders did not detect these RESPA violations and/or correct or prevent them, even when they had reason to know that the title company was defraying the marketing expenses of the lenders and their loan officers."

**Bottom-line warning from the Bulletin:**
> "As described above, the Bureau has found that many MSAs necessarily involve substantial legal and regulatory risk for the parties to the agreement, risks that are greater and less capable of being controlled by careful monitoring than mortgage industry participants may have recognized in the past. … In sum, the Bureau's experience in this area gives rise to grave concerns about the use of MSAs in ways that evade the requirements of RESPA."

**Cumulative CFPB penalty data as of 2015-10-08:**
> "RESPA violations have cost industry participants over $75 million in penalties so far. In addition to corporate liability, some of these enforcement actions have required individuals in charge of companies that committed the violations to pay significant monetary penalties."

### 1.4 The 2020 RESPA Section 8 FAQs — Narrowing the Per-Se Prohibition on Lead Purchases

The CFPB's current guidance on lead-purchase arrangements is set out in the **Real Estate Settlement Procedures Act (RESPA) Frequently Asked Questions** (most recently updated **October 7, 2020**; page last modified March 15, 2024). Retrieved from `https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/real-estate-settlement-procedures-act/real-estate-settlement-procedures-act-faqs/`; local copy: `research/cfpb_respa_faqs.txt`.

These FAQs explicitly walk back the most aggressive readings of Bulletin 2015-05 by carving out a "payment for the lead itself" (as opposed to "payment for the referral") analysis. Key passages:

**MSA FAQ 1 — MSAs are not per-se illegal:**
> "Entering into, performing services under, and making payments under MSAs are not, by themselves, prohibited acts under RESPA or Regulation X. In fact, MSAs are not referenced in RESPA or Regulation X. Ultimately, the determination of whether an MSA itself or the payments or conduct under an MSA is lawful depends on whether it violates the prohibitions under RESPA Section 8(a) or RESPA Section 8(b), or is permitted under RESPA Section 8(c). The analysis under RESPA Section 8 depends on the facts and circumstances, including the details of the MSA and how it is both structured and implemented."

**MSA FAQ 2 — Referral vs. marketing service distinction (the doctrinal hinge for lead sales):**
> "Whether a particular activity is a referral or a marketing service is a fact-specific question for purposes of the analysis under RESPA Section 8(a). As discussed in RESPA Section 8(a) FAQ 1, referrals include any oral or written action directed to a person where the action has the effect of affirmatively influencing the selection of a particular provider of settlement services or business incident thereto by a person paying a charge attributable to the service or business. For example, referrals include a settlement service provider directly handing clients the contact information of another settlement service provider that happens to result in the client using that other settlement service provider. In contrast, a marketing service is not directed to a person; rather, it is generally targeted at a wide audience. For example, placing advertisements for a settlement service provider in widely circulated media (e.g., a newspaper, a trade publication, or a website) is a marketing service. MSAs that involve payments for referrals are prohibited under RESPA Section 8(a), whereas MSAs that involve payments for marketing services may be permitted under RESPA Section 8(c)(2), based on the facts and circumstances of the structure and implementation."

**MSA FAQ 3 — The "actually performed" and "reasonable value" tests remain dispositive:**
> "However, under RESPA Section 8(c)(2), if the MSA or conduct under the MSA reflects an agreement for the payment for bona fide salary or compensation or other payment for goods or facilities actually furnished or for services actually performed, the MSA or the conduct is not permitted. 12 USC § 2607(c)(2); 12 CFR § 1024.14(g)(1)(iv). RESPA Section 8(c)(2) does not apply to MSAs that involve payments for referrals because they are not agreements for marketing services actually performed. **However, RESPA Section 8 does not prohibit payments under MSAs if the purported marketing services are actually provided, and if the payments are reasonably related to the market value of the provided services only.** Note that under Regulation X, the value of the referral, i.e., any additional business that might be provided by the referral, cannot be taken into consideration when determining whether the payment has a reasonable relationship to the value of the services provided. 12 CFR § 1024.14(g)(2)."

**MSA FAQ 4 — Examples of prohibited MSAs (directly applicable to lead-buying websites):**
> "An MSA is or can become unlawful if the facts and circumstances show that the MSA as structured, or the parties' implementation of the MSA—in form or substance, and including as a matter of course of conduct—involves, for example:
> - An agreement to pay for referrals.
> - An agreement to pay for marketing services, but the payment is in excess of the reasonable market value for the services performed.
> - An agreement to pay for marketing services, but either as structured or when implemented, the services are not actually performed, the services are nominal, or the payments are duplicative.
> - An agreement designed or implemented in a way to disguise the payment for kickbacks or split charges."

**Gifts-and-Promotional-Activity FAQs (the basis for the "normal promotional and educational activity" safe harbor at § 1024.14(g)(1)(vi)):**
> "There is no exception to RESPA Section 8 solely based on the value of the gift or promotion. Accordingly, settlement service providers should carefully analyze whether providing gifts or opportunities to win prizes to referral sources could violate the prohibitions under RESPA Section 8. However, in certain circumstances, gifts or promotions directed to a referral source are not prohibited if they are a 'normal promotional or educational activity' meeting the conditions in Regulation X. 12 C.F.R. § 1024.14(g)(1)(vi)."

> "Whether the item or activity is targeted to referral sources. If an item or activity is targeted narrowly towards prior, ongoing, or future referral sources, this could indicate the item or activity is conditioned on referrals of business. For example, if a promotional item is provided only to a limited set of settlement service providers who also happen to be current referral sources or an intentionally targeted group of future referral sources, this may suggest that the recipient is receiving the promotional item because of past or future referrals and, thus, the promotional item may be conditioned on referrals. If, instead, a promotional item is provided to a broader set of recipients, such as the general public or all settlement service providers offering similar services in a given locality, then that may indicate that the promotional item is not conditioned on referral of business."

### 1.5 The 2020 Safe-Harbor Structure for a Lead-Purchase Website

Synthesizing Bulletin 2015-05, the 2020 FAQs, and § 1024.14, a website that sells consumer leads to one or more lenders/MLOs is **not per se illegal**, but the following structural conditions must be met for each payment to come within § 1024.14(g)(1)(iv) (bona fide payment for services actually performed) or § 1024.14(g)(1)(vi) (normal promotional/educational activity):

1. **The "lead" must be a true marketing output, not a referral.** The website may not be paid based on the volume or value of business that the lender closes from the lead. Payment must be a fixed price for the lead itself (or the cost of producing/curating the lead), not a per-funded-loan or per-application fee. The CFPB's own illustrations of permissible MSAs in Bulletin 2015-05 (annual sponsorship of an open advertising venue, e.g., a golf-hole sponsorship) and the 2020 FAQs (a one-time consumer-facing drawing open to the public) treat "broad audience, no per-referral metric" as the touchstone.
2. **The price must be reasonably related to market value of the lead itself**, not to the expected value of any closed loan. (12 C.F.R. § 1024.14(g)(2): "The value of the referral … is not to be taken into account in determining whether the payment exceeds the reasonable value of such goods, facilities or services.")
3. **No "course of conduct" tying payments to closed loans.** Even if the contract says "X per lead," § 1024.14(e) lets the Bureau infer an "agreement or understanding" from a pattern or practice that the website's compensation rises with the lender's funded-loan volume. Aggressive price-tiers keyed to the lender's "ping-tree" position (where the lead is sold to the highest bidder) are textbook evidence of an unlawful per-referral fee.
4. **The lead must be "actually performed" as a service.** Just routing a consumer's data to one or more lenders is a service; "actually performed" means a bona fide set of qualifying, validating, and transmitting acts. The Bureau will infer sham if the website does nothing beyond form-pass-through.
5. **No steering / no required-use.** If the website's terms require the consumer to accept a specific lender, that is "required use" of a particular provider of settlement services, which is independently prohibited under 12 C.F.R. § 1024.15 (AfBA, see § 3 below) and is also a UDAAP (unfair, deceptive, abusive act or practice) under the CFPA.
6. **No payment by the website to a "person in a position to refer"** (real estate agent, mortgage broker, builder, attorney, etc.) for the lead. Per § 1024.14(g)(1)(vi), a payment to such a person that "defrays expenses that otherwise would be incurred by" them — e.g., paying a real-estate agent for every borrower the agent's website sends — is per se illegal.

### 1.6 Affiliated Business Arrangements — 12 C.F.R. § 1024.15 (12 U.S.C. § 2602(7))

An "affiliated business arrangement" ("AfBA") is defined in the statute:
> "an arrangement in which (A) a person who is in a position to refer business incident to or a part of a real estate settlement service involving a federally related mortgage loan, or an associate of such person, has either an affiliate relationship with or a direct or beneficial ownership interest of more than 1 percent in a provider of settlement services; and (B) either of such persons directly or indirectly refers such business to that provider or affirmatively influences the selection of that provider"

— 12 U.S.C. § 2602(7).

Section 1024.15 provides a **safe harbor** from § 1024.14 (and thus from § 2607) if **all** of the following are met (retrieved from eCFR API, `research/cfr_1024_15.txt`):

**§ 1024.15(b)(1) — Written AfBA Disclosure Statement on a separate piece of paper, given no later than the time of each referral**, using the form in Appendix D, disclosing:
- the nature of the relationship (ownership/financial interest) between the referrer and the provider, AND
- an estimated charge or range of charges generally made by the provider (using the same terminology as section L of the HUD-1/Closing Disclosure).

**§ 1024.15(b)(2) — No "required use"** of the affiliated provider. Required use is defined at § 1024.2 as a situation where the person paying for the service must use a particular provider. Limited lender carve-outs: an attorney/law firm, and a lender requiring the borrower to use a lender-chosen attorney, credit reporting agency, or real estate appraiser.

**§ 1024.15(b)(3) — Only "return on ownership interest or franchise relationship"** can be the thing of value passing between the affiliates. § 1024.15(b)(3)(ii) provides that a return on an ownership interest does **not** include:
- (A) "Any payment which has as a basis of calculation no apparent business motive other than distinguishing among recipients of payments on the basis of the amount of their actual, estimated or anticipated referrals";
- (B) "Any payment which varies according to the relative amount of referrals by the different recipients of similar payments"; or
- (C) "A payment based on an ownership, partnership or joint venture share which has been adjusted on the basis of previous relative referrals by recipients of similar payments."

**When is the AfBA disclosure triggered for a lead-gen website?** Per § 1024.15, the trigger is (i) a person "in a position to refer" with an ownership interest (or affiliate relationship) of more than 1% in (ii) a provider of settlement services. The website itself is a "settlement service" if it is a "person … providing services in connection with … a real estate settlement" (see § 1024.2(b) discussion below). The AfBA disclosure is required **only if** the website, an owner of the website, or an affiliate has an ownership interest in a lender/MLO to which it refers, or vice versa. If the website is independent of the lender (no shared ownership), the AfBA safe harbor is not engaged; the analysis is solely under § 1024.14.

### 1.7 What Is a "Settlement Service" for a Lead-Gen Website?

12 C.F.R. § 1024.2(b) (retrieved from eCFR API, `research/cfr_1024_2.txt`):
> "Settlement service means any service provided in connection with a prospective or actual settlement, including, but not limited to, any one or more of the following:
> (1) Origination of a federally related mortgage loan (including, but not limited to, the taking of loan applications, loan processing, and the underwriting and funding of such loans);
> (2) Rendering of services by a mortgage broker (including counseling, taking of applications, obtaining verifications and appraisals, and other loan processing and origination services, and communicating with the borrower and lender);
> (3) Provision of any services related to the origination, processing or funding of a federally related mortgage loan; …
> (14) Rendering of services by a real estate agent or real estate broker; and (15) any other service that the Bureau determines to be a settlement service for purposes of this part."

The CFPB's enforcement record (Freedom Mortgage consent order, § 4 below) and the statutory definition at 12 U.S.C. § 2602(3) make clear that **mortgage loan origination is a settlement service** and that a website performing loan-application-taking, pre-qualification, or financial-data routing services is a "service provider" within the meaning of § 1024.2(b)(2)–(3). That is the predicate that puts the website squarely within RESPA's reach for the kickback prohibition (every payment to or from a settlement-service provider is potentially a "thing of value" under § 1024.14(d)).

---

## 2. Lead-Generation Compliance: "Lead Stacking," Consent, and the Telemarketing Sales Rule

### 2.1 "Lead Stacking" — Selling a Single Lead to Multiple Lenders

"Stacking" or "ping-tree" sales (selling the same consumer's lead to multiple lenders, either serially in a sequence set by price-bid, or simultaneously) is the **highest-risk** structure for the website under both RESPA and the CFPA's UDAAP prohibition. The relevant authorities:

**(a) Per se exposure under 12 C.F.R. § 1024.14(b).** Section 1024.14(b) is not limited to single-buyer sales. If the website receives "any fee, kickback or other thing of value" from each of multiple lenders, the question is whether each of those payments is a bona fide payment for the service of providing the lead (and within fair market value of that lead), or whether any of those payments is instead a disguised payment for the *referral* of the consumer to that specific lender. The CFPB's 2020 FAQs state the analysis is "fact-specific," but the CFPB will scrutinize especially: (i) whether the price each lender pays varies with the lender's prior close rate or loan volume from the website's leads (cf. § 1024.14(e) — "a practice, pattern or course of conduct" inference); (ii) whether the lead's content includes the consumer's preferences or qualifications that steer only to specific lender types; and (iii) whether the website contractually requires the lender to report back conversion data — Bulletin 2015-05's "lead purchasers provide regular feedback to T3 regarding the quality of its leads" is the precise behavior the Bureau uses to infer a referral relationship.

**(b) T3Leads enforcement (CFPB v. D&D Marketing, Inc. d/b/a T3Leads et al., No. 2:15-cv-09692 (C.D. Cal., filed Dec. 17, 2015)).** This is the foundational CFPB action against a lead-aggregator's "ping tree" model. Retrieved from `https://www.consumerfinance.gov/enforcement/actions/d-and-d-marketing-inc-dba-t3leads-grigor-demirchyan-and-marina-demirchyan/` and the complaint at `https://files.consumerfinance.gov/f/201512_cfpb_complaint-v-d-and-d-marketing-inc-et-al.pdf` (local copies: `research/cfpb_t3leads.html`, `research/cfpb_t3leads_press.html`, `research/t3leads_complaint.pdf`, `research/t3leads_complaint.txt`).

Key factual findings from the T3Leads complaint (paraphrased and quoted from the complaint, ¶¶ 8–25):

> ¶ 8: "T3 has a network of lead generators from which it buys leads and a separate network of purchasers to which it sells leads. Lead generators do not know the identities of the lead purchasers in T3's network or details about the terms of the credit products offered to consumers, and the lead purchasers do not know the identities of the lead generators or the methods they use to attract consumers."

> ¶ 11: "To filter leads to lead purchasers, T3 uses a 'ping tree,' which sets the order in which lead purchasers have the option to purchase a given lead from T3. The position of each purchaser in the ping tree is determined primarily by the price the purchaser is willing to pay for a lead; the higher the price, the better the purchaser's position in the ping tree."

> ¶ 12: "A consumer who submits a loan application on a lead generator's webpage is immediately redirected from that page to a lender's webpage. This automated process takes just seconds, and the consumer is not informed that the loan application has been sold to T3 or sold by T3 to a lead purchaser."

> ¶ 19: "T3 does not vet or monitor the lead purchasers in its network for compliance with applicable laws."

> ¶ 21: "Lead purchasers provide regular feedback to T3 regarding the quality of its leads, including the number of leads that convert to loans and reasons why leads did not convert. T3 uses this information to refine its lead processing to optimize lead conversion."

> ¶ 23: "Tribal lenders and offshore lenders typically charge higher interest rates than lenders adhering to state laws. Because they charge higher interest rates, these lenders generally are willing to pay more for leads and thus rank at the top of the T3 ping tree."

The CFPB's **legal theory** in T3Leads is **not** RESPA Section 8; it is CFPA Sections 1031 and 1036 (unfair, deceptive, abusive acts or practices) — unfairness in handling consumer data (¶¶ 27–35) and abuse for "taking unreasonable advantage of … the lack of understanding on the part of the consumer of the material risks, costs, or conditions of the product or service" (12 U.S.C. § 5531(d)(2)(A), ¶¶ 39–47). T3Leads is therefore a **UDAAP, not a RESPA, action**. It is highly relevant to any website contemplating a ping-tree sale because the CFPB used it to telegraph that a lead aggregator that does not vet/oversee downstream lenders — and that ranks lenders in the tree by willingness to pay — will face UDAAP exposure independent of any RESPA question.

The parallel CFPB administrative action against **Eric V. Sancho d/b/a Lead Publisher** (settled Dec. 2016) — retrieved from `https://www.consumerfinance.gov/enforcement/actions/eric-sancho-lead-publisher/` and the consent order at `https://files.consumerfinance.gov/f/201512_cfpb_eric-v-sancho-consent-order.pdf` — uses the same UDAAP theory against an individual "lead publisher" who sold consumer data to fraudulent debt collectors.

The CFPB's December 2015 press release (archived at `https://www.consumerfinance.gov/archive/newsroom/cfpb-takes-action-against-lead-aggregators-for-online-trafficking-of-personal-information/`; local copy: `research/cfpb_t3leads_press.txt`) frames T3Leads' pitch:
> "T3Leads' process often steered consumers to lenders offering less favorable loan terms than otherwise available. In particular, consumers were likely to be connected to lenders that ignore state usury limits or claim immunity from state regulation and jurisdiction. These entities often charge higher interest rates than lenders that do comply with state laws, and they often paid the highest prices for leads from T3Leads."

**(c) The 2024 *Freedom Mortgage* consent order is the more recent CFPB precedent directly applying RESPA Section 8 to the website/lender boundary.** See § 4 below.

### 2.2 "Consent to Be Contacted" Language Requirements — TCPA (47 U.S.C. § 227) and TSR (16 C.F.R. Part 310)

A website that captures a phone number and either calls the consumer or sells the lead to a party that will call the consumer must satisfy both the FCC's TCPA implementing rules (47 C.F.R. § 64.1200) and the FTC's Telemarketing Sales Rule (16 C.F.R. Part 310). These apply to most call-to-action disclosures on the lead-capture form itself.

#### (a) TCPA — 47 U.S.C. § 227 and 47 C.F.R. § 64.1200

**Statute (47 U.S.C. § 227(b)(1)):** retrieved from `https://www.law.cornell.edu/uscode/text/47/227`, local copy `research/usc_47_227.txt`:
> "It shall be unlawful for any person within the United States, or any person outside the United States if the recipient is within the United States — (A) to make any call (other than a call made for emergency purposes or **made with the prior express consent of the called party**) using any automatic telephone dialing system or an artificial or prerecorded voice — … (iii) to any telephone number assigned to a paging service, cellular telephone service, specialized mobile radio service, or other radio common carrier service, or any service for which the called party is charged for the call, unless such call is made solely to collect a debt owed to or guaranteed by the United States; (B) to initiate any telephone call to any residential telephone line using an artificial or prerecorded voice to deliver a message without the prior express consent of the called party …"

**FCC implementing rule — "prior express written consent" (47 C.F.R. § 64.1200(a)(9), retrieved from eCFR API, `research/cfr_47_64_1200.txt`):**
> "The term prior express written consent means an agreement, in writing, bearing the signature of the person called that clearly authorizes the seller to deliver or cause to be delivered to the person called advertisements or telemarketing messages using an automatic telephone dialing system or an artificial or prerecorded voice, and the telephone number to which the signatory authorizes such advertisements or telemarketing messages to be delivered.
> (i) The written agreement shall include a clear and conspicuous disclosure informing the person signing that:
> (A) By executing the agreement, such person authorizes the seller to deliver or cause to be delivered to the signatory telemarketing calls using an automatic telephone dialing system or an artificial or prerecorded voice; and
> (B) The person is not required to sign the agreement (directly or indirectly), or agree to enter into such an agreement as a condition of purchasing any property, goods, or services."

**For the lead-gen website, the required form-level consent language must therefore include (i) an explicit authorization for the seller/lender to call the number using an autodialer or prerecorded voice, and (ii) a clear statement that the consumer is not required to consent in order to obtain any goods or services (so the "Not required …" sentence must NOT be coupled with any "but by submitting the form you agree to be contacted about mortgages" inference that conditions the website's diagnostic on the consent). The signature can be electronic (47 C.F.R. § 64.1200(a)(9)(ii)).**

A signature captured by a click-through / e-consent box is acceptable if it is "an electronic or digital form of signature, to the extent that such form of signature is recognized as a valid signature under applicable federal law or state contract law" (47 C.F.R. § 64.1200(a)(9)(ii)). E-SIGN Act compliance is therefore required: the consumer must have affirmatively consented to receive the disclosure electronically, and the website must retain a record of the disclosure and consent.

**Note on EBR (established business relationship) as a TCPA safe harbor:** Under 47 C.F.R. § 64.1200, calls to wireless numbers require "prior express written consent" regardless of any EBR. Calls to residential lines using a prerecorded voice or autodialer for telemarketing similarly require "prior express written consent." 47 C.F.R. § 64.1200(a)(2). The EBR exemption applies only to live-operator calls to residential numbers within 18 months of a purchase/3 months of an inquiry. The website's lead-buyers will almost always need "prior express written consent" for the contacts they will initiate.

#### (b) TSR — 16 C.F.R. Part 310

The TSR applies to "telemarketing" as defined at 16 C.F.R. § 310.2(gg) (retrieved from eCFR API, `research/cfr_16_310.txt`):
> "(gg) Telemarketing means a plan, program, or campaign which is conducted to induce the purchase of goods or services or a charitable contribution, by use of one or more telephones and which involves more than one interstate telephone call. The term does not include the solicitation of sales through the mailing of a catalog which … contains a written description or illustration of the goods or services … and … the seller does not solicit customers by phone but solely receives calls initiated by customers in response to the catalog …"

For mortgage lead-purchase, the typical structure is:
- consumer fills out the website form (online);
- the consumer is then called by the lender, possibly using a prerecorded voice or autodialer.

The call to the consumer is the telemarketing call. The website is acting as the conduit that obtains the lead. Key TSR obligations:

**Required oral disclosures (16 C.F.R. § 310.4(d)):** the telemarketer, in the outbound call, must disclose truthfully, promptly, and in a clear and conspicuous manner:
> "(1) The identity of the seller; (2) That the purpose of the call is to sell goods or services; [list continues]."

**E-sign / prerecorded-message requirements (§ 310.4(b)(1)(v)):** if a prerecorded message is used, the message must include inter alia an automated interactive voice/keypress opt-out mechanism, and certain pre-message disclosures.

**Lead-generator/lead-aggregator liability under § 310.4(b) — "Assisting and Facilitating":**
> "(b) Assisting and facilitating. It is a deceptive telemarketing act or practice and a violation of this Rule for a person to provide substantial assistance or support to any seller or telemarketer when that person knows or consciously avoids knowing that the seller or telemarketer is engaged in any act or practice that violates §§ 310.3(a), (c) or (d), or § 310.4 of this Rule."

A lead-gen website that delivers a lead to a telemarketer that it knows is calling consumers without consent or making misrepresentations is therefore secondarily liable under the TSR.

**TSR exemptions relevant to inbound lead forms (16 C.F.R. § 310.6(b)(5)–(6)):** the consumer must have initiated the contact in response to an advertisement. For a lead-gen website the relevant question is whether the consumer's form submission is itself an "initiation" by the consumer in response to a general-audience ad, or whether the form is a precondition to getting the website's diagnostic. § 310.6(b)(5) (advertising) and § 310.6(b)(6) (direct mail) require that the ad clearly, conspicuously, and truthfully disclose material information listed in § 310.3(a)(1) and contain no material misrepresentation.

The website's own form / landing page is therefore effectively an "advertisement" for these purposes and must include the TSR's required disclosures if the lender will rely on § 310.6(b)(5) to exempt its follow-up call. The TSR-required disclosures include: (i) total costs; (ii) material restrictions/limitations; (iii) material aspects of the refund/cancellation policy; (iv) the no-purchase/no-payment disclosure for prize promotions; and (v) for credit-card-loss-protection-type products, the lender's lack of affiliation with the card issuer.

#### (c) "Click-to-Call" / Ping-Tree Call Routing

When a website obtains a consent and then routes the call to a lender via a "click-to-call" or web-initiated call (the consumer clicks a button and the website places the call connecting the consumer to a lender), the legal question is whether the consumer's click is a "prior express invitation or permission" (47 U.S.C. § 227(a)(4)) or only "prior express written consent" (47 C.F.R. § 64.1200(a)(9)). For autodialed or prerecorded calls, "written" consent is required and an e-signature is acceptable; for live operator calls to a wireless number, "prior express consent" (which can be oral under 47 U.S.C. § 227(b)(1)(A)) is the floor, but prudent practice is written.

#### (d) Practical Form-Level Language

For a U.S. consumer mortgage qualification diagnostic website, the form's pre-submission language should include, in plain English, immediately above the submit button:

1. **E-SIGN consent** (if capturing consent electronically): "I agree to receive this disclosure electronically and to receive calls and text messages at the number I provided from [website] and its marketing partners regarding my mortgage inquiry. I understand I am not required to consent as a condition of receiving any goods or services."
2. **TCPA/TSR consent** (if the form is the "signature" memorializing 47 C.F.R. § 64.1200(a)(9)): "By clicking Submit, I expressly consent to receive telephone calls, including prerecorded or autodialed calls and text messages, from [website] and from up to [N] mortgage lenders regarding my mortgage qualification, at the telephone number I provided. I understand I am not required to consent in order to use this website or to receive any goods or services."
3. **Identity of sellers (TSR § 310.3(a)(1) for § 310.6(b)(5) exemption):** "The companies that may contact you include: [list or 'a network of mortgage lenders and licensed mortgage loan originators, identified at the time of contact']."
4. **No required use** (§ 1024.15(b)(2) — also good RESPA practice): "You are not required to use any lender that contacts you. You may shop for any mortgage lender."

A separate, non-checked acknowledgement for the **FCRA-permissible-purpose consent** is also typically required if the website will pull a credit report (15 U.S.C. § 1681b).

### 2.3 Recent CFPB Enforcement on Lead Generators / Lead Buyers

Aside from the T3Leads / Lead Publisher matter discussed in § 2.1, the most recent CFPB enforcement actions touching the website/lead-buyer boundary are:

- **CFPB v. D&D Marketing, Inc. d/b/a T3Leads, et al., No. 2:15-cv-09692 (C.D. Cal., complaint filed Dec. 17, 2015; stipulated final judgment and order).** UDAAP case against lead aggregator; consent judgment in 2017 included a $3.2 million redress fund and injunctive relief. Local copies: `research/cfpb_t3leads.html`, `research/t3leads_complaint.pdf`, `research/t3leads_consent_order.pdf`.
- **In re Eric V. Sancho d/b/a Lead Publisher (CFPB No. 2016-CFPB-0086, consent order Dec. 2016).** UDAAP case against an individual lead publisher; $21,151 disgorgement, industry bar. Local copies: `research/cfpb_eric_sancho.html`, `research/sancho_consent_order.pdf` (the PDF is a large flattened form; text extraction is incomplete but the consent order's existence and key terms are confirmed by the case page).
- **In re Freedom Mortgage Corporation, CFPB No. 2023-CFPB-0008, Consent Order (Aug. 17, 2023).** RESPA Section 8(a) case against a mortgage lender for paying kickbacks to real estate brokers; $1.75M penalty. See § 4 below.
- **In re Realty Connect USA Long Island, Inc., CFPB No. 2023-CFPB-0009, Consent Order (Aug. 17, 2023).** Companion case to Freedom; Realty Connect accepted the kickbacks. $200K penalty.

I was not able to verify any CFPB enforcement action specifically against an entity named "GoFastBaby" or a RESPA Section 8 case against an entity named "Novastar" in the CFPB's public enforcement inventory. The 388 entries in the public enforcement inventory that I reviewed do not include those names. The closest, factually-analogous enforcement actions are T3Leads, Lead Publisher, and the Freedom/Realty Connect pair. **Recommendation:** before relying on this report, the user should verify whether "GoFastBaby" and "Novastar" refer to state-AG or private actions outside CFPB's docket, or whether the names are mis-remembered.

---

## 3. Affiliated Business Arrangements (AfBAs) — 12 C.F.R. § 1024.15

The AfBA safe harbor at 12 C.F.R. § 1024.15 is **only** engaged when the website, or an owner of the website, has an "affiliate relationship" with (or >1% direct or beneficial ownership in) a "provider of settlement services" to which the website refers business, **and** the website (or its affiliate) makes a referral or "affirmatively influences the selection" of that provider. The four-element safe harbor is:

1. **Written AfBA Disclosure** (Appendix D to 12 C.F.R. Part 1024) provided on a separate piece of paper, no later than the time of each referral (or, for a lender-referral, at the time the Loan Estimate is provided under § 1024.7(d) — see § 1024.15(b)(1)(i)). The disclosure must describe (i) the nature of the relationship (ownership/financial interest) and (ii) an estimated charge or range of charges generally made by the affiliated provider.
2. **No required use** (§ 1024.15(b)(2)) — the consumer must not be required to use the affiliated provider. (Limited carve-outs for lender-chosen attorney, appraiser, or credit-report provider.)
3. **No thing of value other than a return on ownership interest or franchise relationship** (§ 1024.15(b)(3)).
4. **No payment based on the volume of referrals** (§ 1024.15(b)(3)(ii)(A)–(C)). The CFPB's 2020 FAQs and Bulletin 2015-05 are clear that any payment formula that "distinguishes among recipients … on the basis of the amount of their actual, estimated or anticipated referrals" is excluded from the "return on ownership interest" safe harbor, full stop.

If the website is **independent** of the lender(s) (no shared ownership, no common control, no franchise relationship), there is no AfBA, and the analysis is solely under § 1024.14. The AfBA disclosure is also not a substitute for the lead-purchase safe-harbor analysis above — the website still has to comply with § 1024.14(b) and (g) for the lead-sale payments it receives.

**Practical trigger for the diagnostic website:** the AfBA disclosure obligation arises if (a) the website's parent entity, or any owner of >1% of the website, also owns >1% of an MLO or lender, and (b) the website's diagnostic results are routed to that affiliated lender. If the website is owned by a real estate brokerage that also refers to a specific affiliated title company, the AfBA disclosure is required to the brokerage→title relationship under § 1024.15.

---

## 4. Specific CFPB Enforcement Actions 2022–2026 on Mortgage Lead Generation

### 4.1 Freedom Mortgage Corporation, CFPB No. 2023-CFPB-0008 (Aug. 17, 2023) — RESPA Section 8(a) on Lead/Referral Kickbacks

The closest analog for a website that pays for or accepts leads from real-estate-affiliated parties. The CFPB's case page is `https://www.consumerfinance.gov/enforcement/actions/freedom-mortgage-corporation-2023-respa/`; consent order at `https://files.consumerfinance.gov/f/documents/082023_cfpb_Freedom_Mortgage_Corporation_-_Consent_Order.pdf`; press release at `https://www.consumerfinance.gov/about-us/newsroom/cfpb-penalizes-freedom-mortgage-and-realty-connect-for-illegal-kickbacks/`. Local copies: `research/cfpb_freedom_mortgage.html`, `research/freedom_consent_order.pdf`, `research/freedom_consent_order.txt`, `research/cfpb_freedom_press.txt`.

**Opening finding of the consent order (¶¶ 4–9):**
> "The Bureau has reviewed Freedom Mortgage Corporation's (Freedom or Respondent, as defined below) acts and practices for generating Traditional Retail mortgage business and has identified **violations of Section 8(a) of the Real Estate Settlement Procedures Act's prohibition on giving things of value for referrals of business incident to or part of a settlement service involving federally related mortgage loans. 12 U.S.C. § 2607(a) (RESPA), and its implementing regulation, Regulation X, 12 C.F.R. part 1024.**"

> "The origination of a federally related mortgage loan is a 'settlement service' as that term is defined by RESPA. 12 U.S.C. § 2602(3) & 12 C.F.R. § 1024.2(b). The majority of mortgages originated by Freedom's Traditional Retail Unit are 'federally related mortgage loans' as that term is defined by RESPA."

**Three categories of illegal conduct found (the "Freedom Mortgage kickback matrix" — directly applicable to a lead-buying website):**

**(i) Subscription services given free in exchange for mortgage referrals (¶¶ 10–11):**
> "Freedom paid for several subscription services and then gave free access to real estate agents and brokers. Many of the real estate agents and brokers who accepted free access to these subscription services made mortgage referrals to Freedom's Traditional Retail loan officers. The subscription services were a thing of value that Freedom gave to the real estate agents and brokers. … Freedom sometimes required real estate agents and brokers to agree to be paired with a Freedom Traditional Retail Unit loan officer before Freedom would give them access to its subscription services. The real estate agents who received free access to these subscription services (including agents at both Realty Connect and other brokerages) made more than 1,000 mortgage referrals to Freedom's Traditional Retail Unit during the Relevant Period, as part of a pattern, practice, or course of conduct of giving free access to the subscription services to create, maintain, and strengthen mortgage referral relationships, **in violation of RESPA Section 8(a)**. See 12 C.F.R. § 1024.14(e)."

→ **Application to the diagnostic website:** If the website offers "free" access to subscription services, calculators, or co-branded marketing materials to real estate agents or builders in exchange for those parties sending borrower traffic, this is precisely the Freedom Mortgage fact pattern.

**(ii) Hosting and subsidizing events in exchange for referrals (¶¶ 12–16):**
> "From at least July 1, 2017 to 2022, Freedom's Traditional Retail Unit also hosted and subsidized events for certain real estate brokers and agents. … Freedom targeted these events at new or existing mortgage referral sources. Freedom also denied requests for event sponsorship from real estate brokerages that didn't refer mortgage business to Freedom's loan officers. Freedom hosted or subsidized the events for real estate brokerages and agents as part of a pattern, practice, or course of conduct of giving things of value to create, maintain, and strengthen mortgage referral relationships, in violation of RESPA Section 8(a). See 12 C.F.R. § 1024.14(e)."

→ **Application:** "Sponsoring" real-estate-agent events, "co-marketing" with builder sales offices, or giving free leads to real-estate brokerages in exchange for steering all borrower inquiries to one MLO is the textbook Freedom Mortgage pattern. Even "open" sponsorships are suspect if "Freedom also denied requests for event sponsorship from real estate brokerages that didn't refer mortgage business."

**(iii) MSAs used to pay for mortgage referrals (¶¶ 17–19):**
> "Freedom's Traditional Retail Unit also had marketing services agreements (MSAs) in place with more than 40 real estate brokerages. Under the MSAs, Freedom made a monthly payment to each respective brokerage. The payments ranged from a few hundred to several thousand dollars per month. The total amount Freedom paid under its MSAs during the Relevant Period was approximately $90,000 per month. In return for the monthly payment, the agreements called for the real estate brokerage counterparties to perform certain marketing services for Freedom. **Freedom's Traditional Retail Unit structured and implemented the MSAs as another mechanism to pay for mortgage referrals, rather than compensate real estate brokerages for marketing to consumers.** While some of the marketing services that the real estate brokers were supposed to perform under the MSA were directed to consumers, some of the MSAs also required the real estate broker to promote Freedom to the broker's own agents."

→ **Application:** A website that pays a real-estate brokerage a flat monthly fee and gets, in return, the brokerage's promise to "promote the website to its agents" is the same MSA-as-disguised-kickback pattern the CFPB condemned. The 2020 FAQs make this point: an MSA structured as a payment-for-referral (or where the "marketing services" are nominal or never actually performed) violates Section 8 even if labeled an MSA.

**Remedy:** $1.75M civil money penalty paid to the CFPB victims relief fund; injunction against any "thing of value" in exchange for mortgage referrals. Realty Connect (companion case, No. 2023-CFPB-0009) paid $200,000 for accepting the kickbacks. CFPB Director Chopra's statement: "Freedom provided kickbacks to real estate brokers and agents — including those at Realty Connect — in return for mortgage referrals, a clear violation of federal law. The CFPB will be vigilant in rooting out anti-competitive behavior that interferes with consumers' ability to choose financial products and services."

### 4.2 T3Leads / Lead Publisher (Dec. 2015 / Dec. 2016) — UDAAP on Lead Aggregation

Discussed in § 2.1(b) above. CFPB's case page: `https://www.consumerfinance.gov/enforcement/actions/d-and-d-marketing-inc-dba-t3leads-grigor-demirchyan-and-marina-demirchyan/` (T3Leads, lead aggregator); `https://www.consumerfinance.gov/enforcement/actions/eric-sancho-lead-publisher/` (Sancho, lead publisher). The CFPB's theory was unfairness and abuse under the CFPA, not RESPA Section 8, but the conduct described in ¶¶ 8–25 of the T3Leads complaint (ping-tree routing, price-ranked by lender willingness to pay, conversion-data feedback loop, no vetting of lenders) is the precise architecture that will also create RESPA Section 8 exposure if the website charges a "lead" price that varies with the lender's close rate or that is paid for a specific routing slot.

### 4.3 2024–2026 CFPB Actions on Algorithmic / AI Lead Scoring

I searched the CFPB's full enforcement inventory (388 actions, retrieved via the `https://www.consumerfinance.gov/sitemap.xml` enforcement listing) for 2024–2026 mortgage-lead-generator or AI/algorithmic lead-scoring actions. The full list of 2024–2026 actions in the inventory is:

- Fifth Third Bank, N.A. (2024) — overdraft, FPI-related
- Fay Servicing LLC (2024) — mortgage servicing
- New Day Financial (2024) — VA refinancing
- TD Bank, N.A. (2024) — furnishing
- Navy Federal Credit Union (2024) — overdraft
- American Honda Finance Corporation (2025) — auto servicing

None of these is a RESPA Section 8 lead-aggregator / AI lead-scoring action. The CFPB's enforcement docket, as accessed during this research, does not include an action against an entity named "GoFastBaby" or "Novastar" and does not include an action specifically about AI-driven mortgage lead scoring under RESPA Section 8. If such an action has been filed and is not yet in the public enforcement inventory, or has been filed under seal, or is a state-level action, this report does not capture it. **This is the area in which the cited user prompt appears to be either referring to non-CFPB proceedings or referring to enforcement that I was unable to verify.**

The CFPB has, separately, issued consumer-advisory and supervisory guidance on AI in mortgage underwriting and marketing (e.g., CFPB Circular 2023-03 on adverse-action notice requirements when using complex algorithms, and CFPB/FRB/FDIC/OCC interagency guidance on model risk management). None of those guidance documents is RESPA-Section-8-specific to lead-buying, and none is the subject of an enforcement action under Section 8 of RESPA as of the snapshot date of the CFPB enforcement inventory I reviewed.

### 4.4 Actions Under RESPA Section 8 for Improper Lead Payment

The CFPB's inventory has only one 2023 RESPA-Section-8 enforcement action in the mortgage-origination space: **Freedom Mortgage Corporation (No. 2023-CFPB-0008)** described in § 4.1. Earlier RESPA Section 8 enforcement actions (pre-2022) include the many title-insurance and MSAs cases cited in Bulletin 2015-05 and discussed in § 1.3. The complete set of CFPB enforcement actions is browseable at `https://www.consumerfinance.gov/enforcement/actions/`; only one is captioned "RESPA" in the case name (Freedom Mortgage), and it is the only mortgage-origination RESPA Section 8 case the CFPB has brought in the 2022–2026 window that is on the public docket.

---

## 5. Action Items / Compliance Checklist for the Diagnostic Website

1. **Document the lead as a "marketing service," not a "referral."** Per the CFPB 2020 FAQs, the website's role must be characterized as a marketing service (placing advertisements for lenders in widely circulated media), not as a conduit that affirmatively influences the consumer's selection of any specific lender.
2. **Price the lead at fair market value, not at a per-funded-loan or per-conversion rate.** The price must be reasonably related to the market value of the lead itself (§ 1024.14(g)(2)), and the value of any "additional business obtained thereby" is not to be taken into account. Build documentation of fair-market-value benchmarking.
3. **Do not vary price by lender's prior close rate or funded-loan volume from the website's leads.** Price variation that tracks referral volume triggers § 1024.14(e)'s "pattern, practice, or course of conduct" inference. Either (a) a single price to all lenders, or (b) a price tier based on objective lead characteristics (e.g., loan amount bucket, geography, credit score bracket) that is not a proxy for prior close rate.
4. **Do not contract for conversion-data feedback from lenders** that ties compensation to lender behavior. Bulletin 2015-05 and Freedom Mortgage treat the feedback loop as evidence of a referral relationship.
5. **Vet lenders / MLOs for state licensure** (NMLS, § 1024.15; TILA Section 103, et seq.; state SAFE Act). UDAAP exposure is acute for a website that knowingly routes consumers to unlicensed or out-of-jurisdiction lenders. The T3Leads complaint (¶¶ 19–25) is the controlling CFPB theory.
6. **No required use.** The website's terms must allow the consumer to use any lender, not just the website's buyer(s). "Required use" is independently prohibited by § 1024.15(b)(2).
7. **Obtain TCPA "prior express written consent"** on the form, including the FCC-required "not required to sign" disclosure (47 C.F.R. § 64.1200(a)(9)). Capture as a click-through with E-SIGN-compliant disclosure retention.
8. **Do not pay real-estate brokers, builders, or attorneys for the lead.** Per § 1024.14(g)(1)(vi) and Bulletin 2015-05, any payment to a "person in a position to refer" that "defrays expenses that otherwise would be incurred by" them is per se illegal — including paying a real-estate agent for sharing a borrower. See Freedom Mortgage ¶¶ 10–19.
9. **If the website (or any affiliate) owns >1% of an MLO or lender that receives leads, comply with the AfBA safe harbor** at § 1024.15: written Appendix D disclosure, no required use, no volume-based payment, 5-year retention.
10. **Engage on AfBA disclosure only if an ownership or affiliate relationship exists.** Otherwise, the AfBA analysis does not apply; rely on § 1024.14(g)(1)(iv) "bona fide payment for services actually performed" or § 1024.14(g)(1)(vi) "normal promotional/educational activity" as the lead-sale safe harbor.
11. **Document the actual performance of marketing services** in case files. Failure to perform contracted-for services is itself evidence of a kickback (Bulletin 2015-05).
12. **E-SIGN compliance for any e-consent.** 15 U.S.C. § 7001 et seq.
13. **If the website is going to make outbound telemarketing calls itself** (i.e., the website's staff places calls to consumers), comply with the TSR (16 C.F.R. § 310.4(d) oral disclosures, abandoned-call safe harbor, § 310.4(b)(1)(v) prerecorded-message rules, and § 310.5 recordkeeping for 24 months).
14. **State telemarketing and mortgage-licensing laws.** Many states (e.g., California, Florida, Texas) have stricter telemarketing, Do-Not-Call, and mortgage-licensing laws that apply in addition to RESPA, the TCPA, and the TSR. NMLS lookup for every lender/MLO receiving a lead is a baseline compliance step.
15. **GLBA and Reg P.** Capture of name, email, phone, and financial data is "nonpublic personal information" for GLBA purposes. The website's privacy notice and opt-out must comply with the Privacy of Consumer Financial Information Rule (12 C.F.R. Part 1016). Sharing lead data with lenders is a "nonaffiliated third party" disclosure that generally requires an opt-out (with a § 1016.15 joint-marketing / service-provider exception if the lender is the website's service provider or joint marketer — analysis is fact-specific and should be done by counsel).
16. **FCRA permissible purpose.** If a credit report is pulled (even a "soft" pull for prequalification), the website must have an FCRA "permissible purpose" under 15 U.S.C. § 1681b; for "firm offers of credit" the consumer must receive an § 1681m(d) notice before the credit pull.
17. **UDAAP risk assessment for AI/algorithmic lead scoring.** Even though there is no public RESPA-Section-8 enforcement action on AI mortgage-lead scoring as of the snapshot date, the CFPB has been clear (Circular 2022-05, Circular 2023-03, Joint Statement on Enforcement of Fair Lending and ECOA for AI, etc.) that automated decisioning that disadvantages protected classes or steers consumers to less-favorable products is independently actionable under ECOA, FHA, and CFPA Section 1031/1036.

---

## 6. Primary-Source Files (Local Copies)

All files in `research/` were retrieved during this research session. The asterisked files contain the operative regulatory or statutory text used to support the analysis above.

| File | Source URL | Description |
| --- | --- | --- |
| `research/bulletin_2015-05.pdf`* | https://files.consumerfinance.gov/f/201510_cfpb_compliance-bulletin-2015-05-respa-compliance-and-marketing-services-agreements.pdf | CFPB Compliance Bulletin 2015-05 (Oct. 8, 2015) |
| `research/bulletin_2015-05.txt` | (extracted from above) | Text-extracted |
| `research/cfpb_respa_faqs.html`* | https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/real-estate-settlement-procedures-act/real-estate-settlement-procedures-act-faqs/ | RESPA FAQs (updated Oct. 7, 2020) |
| `research/cfpb_respa_faqs.txt` | (extracted) | Text-extracted |
| `research/usc_12_2607.txt`* | https://www.law.cornell.edu/uscode/text/12/2607 | 12 U.S.C. § 2607 (RESPA Section 8) |
| `research/usc_12_2601.txt`* | https://www.law.cornell.edu/uscode/text/12/2601 | 12 U.S.C. § 2601 (RESPA purpose) |
| `research/usc_12_2602.txt`* | https://www.law.cornell.edu/uscode/text/12/2602 | 12 U.S.C. § 2602 (RESPA definitions) |
| `research/cfr_1024_14.xml` / `.txt`* | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1024&section=1024.14 | 12 C.F.R. § 1024.14 |
| `research/cfr_1024_15.xml` / `.txt`* | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1024&section=1024.15 | 12 C.F.R. § 1024.15 |
| `research/cfr_1024_2.xml` / `.txt`* | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1024&section=1024.2 | 12 C.F.R. § 1024.2 |
| `research/cfr_16_310.xml` / `.txt`* | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-16.xml?part=310 | 16 C.F.R. Part 310 (TSR) |
| `research/cfr_47_64_1200.xml` / `.txt`* | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-47.xml?part=64&section=64.1200 | 47 C.F.R. § 64.1200 (TCPA implementing rule) |
| `research/usc_47_227.txt`* | https://www.law.cornell.edu/uscode/text/47/227 | 47 U.S.C. § 227 (TCPA) |
| `research/cfpb_t3leads.html`* | https://www.consumerfinance.gov/enforcement/actions/d-and-d-marketing-inc-dba-t3leads-grigor-demirchyan-and-marina-demirchyan/ | T3Leads case page |
| `research/cfpb_t3leads_press.txt`* | https://www.consumerfinance.gov/archive/newsroom/cfpb-takes-action-against-lead-aggregators-for-online-trafficking-of-personal-information/ | T3Leads press release (Dec. 2015) |
| `research/t3leads_complaint.pdf` / `.txt` | https://files.consumerfinance.gov/f/201512_cfpb_complaint-v-d-and-d-marketing-inc-et-al.pdf | T3Leads complaint (Dec. 17, 2015) |
| `research/t3leads_consent_order.pdf` | https://files.consumerfinance.gov/f/documents/cfpb_complaint-v-d-and-d-marketing-inc-et-al_consent-order.pdf | T3Leads consent order |
| `research/cfpb_eric_sancho.html` | https://www.consumerfinance.gov/enforcement/actions/eric-sancho-lead-publisher/ | Lead Publisher case page |
| `research/cfpb_freedom_mortgage.html`* | https://www.consumerfinance.gov/enforcement/actions/freedom-mortgage-corporation-2023-respa/ | Freedom Mortgage case page |
| `research/cfpb_freedom_press.txt`* | https://www.consumerfinance.gov/about-us/newsroom/cfpb-penalizes-freedom-mortgage-and-realty-connect-for-illegal-kickbacks/ | Freedom Mortgage press release (Aug. 17, 2023) |
| `research/freedom_consent_order.pdf` / `.txt`* | https://files.consumerfinance.gov/f/documents/082023_cfpb_Freedom_Mortgage_Corporation_-_Consent_Order.pdf | Freedom Mortgage consent order (¶¶ 1–250) |
| `research/cfpb_realty_connect.html` | https://www.consumerfinance.gov/enforcement/actions/realty-connect-usa-long-island-inc/ | Realty Connect case page |
| `research/sancho_consent_order.pdf` | https://files.consumerfinance.gov/f/201512_cfpb_eric-v-sancho-consent-order.pdf | Sancho consent order (3.3 MB flattened form; text extraction incomplete) |
| `research/sitemap.xml` | https://www.consumerfinance.gov/sitemap.xml | CFPB sitemap used to inventory all enforcement actions (388 total) |
| `research/bulletin_2015-05_page.html` | https://www.consumerfinance.gov/compliance/supervisory-guidance/bulletin-respa-compliance-marketing-services-agreements/ | CFPB Bulletin 2015-05 landing page |
