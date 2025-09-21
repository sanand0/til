# Core Concepts

[ChatGPT](https://chatgpt.com/c/6875cfba-e7e0-800c-b61f-400b21a12546)

[Scott Adams coined "The Rule of Twelve"](https://web.archive.org/web/20090322195653/http://dilbert.com/blog/entry/rule_of_twelve/).

> ... seemingly impenetrable topics are less intimidating if you know there are only a dozen concepts to learn.
> And often the details of a subject are unimportant if you know the big concepts.

This is true for many subjects. But avoid overconfidence. Expert pattern libraries are huge (~100K). Execution discipline matters.

- Core Concepts of [Technology evaluation](https://chatgpt.com/c/68cf6c83-e8ac-832e-a87b-7c13bfc5d091)
  - **Optimize for change, not the demo.** Most cost and risk arrive _after_ adoption (maintenance, evolution, integration). Favor tools that make change cheap: clear upgrade paths, good docs, stable internals.
  - **Assume abstractions will leak.** Nice APIs hide complexity—until they don’t. Evaluate timeouts, back-pressure, failure modes, and “escape hatches,” not just the happy path. (Also note the IETF’s rethink of Postel’s robustness principle—being too “liberal” can harm ecosystems.)
  - **Hyrum’s Law beats SemVer.** Users depend on _any_ observable behavior. Version numbers help, but real safety comes from explicit compatibility promises, deprecation policies, and tests guarding behaviors. Check these before you trust a major/minor bump.
  - **Fit the org: socio-technical first.** Systems mirror team structures (Conway). Misaligned communication lines create defects (socio-technical incongruence). Keep cognitive load within team capacity; prefer tools that simplify mental models.
  - **Ecosystems compound value (and risk).** Network effects mean big communities, plugins, and docs often beat raw features. But compatibility choices shape lock-in vs. openness—probe standards support and portability.
  - **Prefer “boring” on critical paths; use maturity, not hype.** Put novelty at the edges. On the core, choose tech with long, dull track records. Assess maturity explicitly (e.g., TRL); don’t cargo-cult hype cycles.
  - **Plan your exit on day one (data gravity is real).** Data is hard to move; egress and inter-region transfer fees bite later. Check export formats, egress costs, and migration tooling up front; have a documented exit strategy.
  - **Bias to operability: kill toil.** Favor tools that reduce repetitive, manual ops (toil) via good automation surfaces (CLI/API), sane defaults, and low run-care. If it raises toil, it will tax innovation.
  - **Verify supply-chain & license posture, not just features.** Look for provenance/hardening (SLSA), secure development practices (NIST SSDF), and project health metrics (CHAOSS, OpenSSF Scorecard). Confirm license reality (e.g., SSPL is _not_ OSI-approved).
  - **Beware averages: optimize tails and guard against gamed metrics.** Real users feel 95th/99th-percentile latency and variability; read tail behavior and P-percentiles, not just means. And treat vendor benchmarks skeptically (Goodhart’s law; microbench pitfalls).
- Core Concepts of [Sleep](https://chatgpt.com/c/68cd59b3-005c-832d-806c-54003d272764)
  - Adults should sleep for 7+ hours. Too long / too long isn't as good.
  - Dark, cool rooms offer better sleep.
  - Sleeping & waking up at consistent times is a strong predictor of long-term health—sometimes stronger than raw duration.
  - NREM (especially slow-wave sleep) supports memory consolidation; REM helps integrate/emphasize emotional memories.
  - Caffeine and alcohol disrupt sleep.
- Core Concepts of [Encrypted Computation](https://chatgpt.com/c/68c63cb7-2e68-8323-8816-ea5f03e5e880)
  - **Computation is possible on ciphertexts** – you can add/multiply encrypted numbers without decrypting, and results decrypt correctly.
  - **Noise enables security but limits depth** – homomorphic schemes add noise that protects privacy but caps how many operations you can do before refresh.
  - **Bootstrapping makes “infinite” computation possible** – a slow but clever way to reset noise so you can keep computing forever.
  - **Partial homomorphism is often enough** – many real tasks only need addition _or_ multiplication, not full generality.
  - **Efficiency depends on algebra choice** – lattice, ring, or boolean encodings change speed/capabilities dramatically.
  - **Communication > computation in MPC** – secure multi-party protocols are bottlenecked more by network roundtrips than raw CPU.
  - **Trusted hardware ≠ silver bullet** – enclaves (SGX, SEV) protect data but side-channels and supply-chain risks remain.
  - **Exact correctness is traded for approximate math** – encrypted ML often relies on approximate arithmetic or quantization, counter-intuitive in “exact crypto.”
  - **Security can come from redundancy** – secret sharing splits data among parties so no one sees the whole, yet reconstruction is exact.
  - **Faster isn’t always weaker** – some of the most efficient schemes (like CKKS for approximate real numbers) are still provably secure under lattice assumptions.
- Core Concepts of [Computational Learning Theory](https://chatgpt.com/c/68c63cb7-2e68-8323-8816-ea5f03e5e880)
  1. **Simple models can generalize better than complex ones** — Occam’s razor + VC dimension: fewer parameters often mean more reliable learning.
  2. **More data beats better algorithms (up to a point)** — sample complexity often dominates computational tricks.
  3. **Weak learners can be boosted into strong ones** — AdaBoost shows that barely-better-than-random classifiers can combine into near-perfect ones.
  4. **Overfitting is sometimes useful** — in boosting, driving training error to zero can still yield good generalization.
  5. **Learning ≠ compression, but they are deeply linked** — Minimum Description Length shows compressibility and learnability align.
  6. **Hardness comes from representation, not data** — some concepts are provably unlearnable efficiently even if infinite labeled data exists (e.g., parity with noise).
  7. **Mistake-driven learning converges fast** — algorithms like Perceptron can guarantee convergence in bounded mistakes regardless of input size.
  8. **Noise can be fatal** — a small amount of adversarial noise can make some classes (e.g., DNFs) intractable to learn.
  9. **Margins matter more than accuracy** — large-margin classifiers (SVMs) generalize better even if training error is unchanged.
  10. **PAC-learnability ≠ practical learnability** — a concept might be learnable in theory with polynomial resources but hopeless in real data sizes.
- [Coding Theory](https://chatgpt.com/c/68c63cb7-2e68-8323-8816-ea5f03e5e880)
  1. **Redundancy helps** — Extra bits give the code “wiggle room” to catch mistakes, and clever design (like parity checks) keeps the added overhead small compared to the reliability gained.
  2. **Random codes work** — Random constructions spread information evenly, making it surprisingly hard for errors to concentrate, which theory shows can match or beat hand-crafted designs.
  3. **Error location > error correction** — If you know which positions are wrong (erasures), fixing them is algebraically much simpler than guessing both _where_ and _what_.
  4. **Longer blocks help** — With more symbols in a block, statistical averages smooth out, so the code can withstand more errors while still fitting within capacity bounds.
  5. **Decoding > design** — A code is only as useful as the algorithm that can decode it in practice; fast decoders like Viterbi or belief propagation made certain codes revolutionary.
  6. **Perfect codes exist but rare** — A few codes pack error spheres so tightly that they achieve theoretical limits, but geometry proves such “perfect fits” are exceptional cases.
  7. **Capacity is safe** — Shannon’s theorem guarantees that codes can approach the channel limit with vanishing error if block length grows, so pushing limits doesn’t mean fragility.
  8. **Non-linear sometimes wins** — While linear algebra simplifies design, special non-linear codes achieve distances or covering properties impossible for linear ones.
  9. **Detection is cheaper than correction** — Spotting that “something’s wrong” only needs a parity check, while correction requires enough redundancy to pinpoint and repair errors.
  10. **It’s geometry** — Error correction boils down to fitting non-overlapping “balls” in high-dimensional space; this geometric view explains limits and guides constructions.
- Core Concepts of Prioritization
  - Start with why. Align to purpose
  - De-bottleneck.
  - Pareto rule. Pick vital few tasks delivering most of the value
  - Impact × Effort matrix. Plot initiatives; attack quick wins, park drags.
- Core Concepts of Food safety at home: [US FDA / CDC](https://www.fda.gov/food/consumers/food-safety-education)
  - Clean
  - Separate
  - Cook
  - Chill
- Core Concepts of Everyday cooking: [Samin Nosrat’s framework](<https://en.wikipedia.org/wiki/Salt_Fat_Acid_Heat_(book)>)
  - Salt
  - Fat
  - Acid
  - Heat
- Core Concepts of Photography basics:
  - Exposure triangle (aperture, shutter speed, ISO)
- Core Concepts of CPR (lay rescuer): [American Heart Association](https://cpr.heart.org)
  - Compressions
  - Airway
  - Breathing
  - AED
- Core Concepts of First-aid primary survey: [Red Cross / St John](https://www.betterhealth.vic.gov.au/health/conditions-and-treatments/first-aid-basics-and-drsabcd)
  - Danger
  - Response
  - Send for help
  - Airway
  - Breathing
  - CPR
  - Defibrillation
- Core Concepts of Defensive driving: [National Safety Council](https://www.nsc.org/safety-training/defensive-driving)
  - Scan ahead
  - Safe gap
  - Speed control
  - Hazard anticipation
  - Seat-belt discipline
- Core Concepts of Strength training: [NSCA Essentials / ACSM](https://www.nsca.com/contentassets/ae95c28e2bdf43c7b69636eacd3e4c72/ptq3.2-3-principle-based_program_design.pdf)
  - Progressive overload
  - Specificity
  - Recovery
  - Variation
- Core Concepts of Project management: [PMI PMBOK®](https://www.pmi.org/pmbok-guide-standards/foundational/pmbok)
  - Initiate
  - Plan
  - Execute
  - Monitor/Control
  - Close
- Core Concepts of Scrum/Agile teamwork: [The Scrum Guide](https://scrumguides.org)
  - Transparency
  - Inspection
  - Adaptation
  - Sprint cycle
- Core Concepts of Negotiation: [Harvard Program on Negotiation](https://www.pon.harvard.edu)
  - BATNA
  - ZOPA
  - Interests-not-positions
  - Anchoring
- Core Concepts of Public speaking: [Toastmasters Competent Communication manual](https://oldtowntoastmasters.org/wp-content/uploads/2021/04/Toastmasters-CC-Manual.pdf)
  - Speech purpose
  - Organization
  - Vocal variety
  - Body language
  - Persuasion
- Core Concepts of Cyber hygiene: [NIST Cybersecurity Basics](https://www.nist.gov/itl/smallbusinesscyber/cybersecurity-basics)
  - Strong unique passwords
  - Multi-factor authentication
  - Patch/update habit
  - Regular backups
  - Phishing skepticism
- Core Concepts of Home gardening: [US Master Gardener “Earth-Kind” principles](https://ccmgatx.org/resources/articles/article-repository/2021/may/right-plant-right-place/)
  - Right plant, right place
  - Soil preparation
  - Water management
  - Mulching
  - Integrated pest management (IPM)
- Core Concepts of Wilderness survival: [US Army Survival manual FM 21-76](https://dn790002.ca.archive.org/0/items/Fm21-76SurvivalManual/FM21-76_SurvivalManual.pdf)
  1. Shelter
  2. Water
  3. Fire
  4. Food
  5. Signaling for rescue
- Core Concepts of Personal productivity: [David Allen’s GTD](https://www.float.com/resources/getting-things-done-method)
  - Capture
  - Clarify
  - Organize
  - Reflect
  - Engage
- Core Concepts of Emotional intelligence: [Daniel Goleman’s EQ framework](https://www.verywellmind.com/components-of-emotional-intelligence-2795438)
  - Self-awareness
  - Self-regulation
  - Motivation
  - Empathy
  - Social skill
- Core Concepts of Design thinking: [Stanford d.school / IDEO](https://makeiterate.com/the-stanford-design-thinking-process/)
  - Empathize
  - Define
  - Ideate
  - Prototype
  - Test
- Core Concepts of Personal finance: [US Financial Literacy & Education Commission](https://www.mymoney.gov/mymoneyfive)
  - Earn
  - Spend
  - Save & invest
  - Borrow
  - Protect
- Core Concepts of Persuasion:
  - [Cialdini](https://worldofwork.io/2019/07/cialdinis-6-principles-of-persuasion):
    - **Reciprocity** – Give value first so people feel socially obliged to return the favour.
    - **Scarcity** – Emphasise limited supply or time to heighten desire and urgency.
    - **Authority** – Display credible expertise or endorsement to trigger compliance reflexes.
    - **Commitment / Consistency** – Secure a small voluntary pledge so people keep acting in line with it.
    - **Social proof** – Show peers already behaving this way to leverage herd instincts.
    - **Liking** – Build rapport and similarity because we say “yes” more to people we like.
  - [Aristotle](https://www.lsu.edu/hss/english/files/university_writing_files/item35402.pdf):
    - **Ethos** – Project trustworthy character so the audience believes you.
    - **Pathos** – Arouse emotion to make the message feel personally important.
    - **Logos** – Use clear logic and evidence to satisfy rational scrutiny.
  - [Monroe's Motivated Sequence](https://www.gvsu.edu/speechlab/monroes-motivated-sequence-46.htm)
    - **Attention** – Grab focus instantly with a vivid hook.
    - **Need** – Prove a pressing problem that demands action.
    - **Satisfaction** – Show how your solution meets that need.
    - **Visualization** – Paint the future benefit (or risk) to make outcomes tangible.
    - **Action** – Specify the exact next step you want the audience to take now.
- Core Concepts of Meditation:
  - **Intention** – Begin with a clear purpose for practising (e.g., calm, insight, compassion).
  - **Attention** – Hold steady, non-reactive focus on a chosen object like breath or body.
  - **Attitude** – Maintain a kind, curious, non-judging stance toward whatever arises.
  - **Attention regulation** – Train concentration so the mind wanders less and returns faster.
  - **Body awareness** – Refine sensitivity to internal sensations and posture.
  - **Emotion regulation** – Observe feelings without suppression or over-identification, letting them pass.
  - **Perspective on self** – See thoughts and self-images as transient events, not fixed identity.
- Core Concepts of Software Validation (testing): [FDA](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-principles-software-validation) [Public Health](https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf) [PIC/S](https://picscheme.org/)
  - **Lifecycle validation** – Plan → specify → build/configure → verify/qualify → release → operate/maintain → retire; evidence at every step.
  - **Risk‑based approach** – Focus validation effort where failure impacts product quality, patient safety, or data integrity most.
  - **Documented evidence & traceability** – Link user requirements → functional/spec docs → test cases/results; auditors must see the chain.
  - **Data integrity (ALCOA+)** – Data must be Attributable, Legible, Contemporaneous, Original, Accurate—plus Complete, Consistent, Enduring, Available.
  - **Change control & configuration management** – Every change is assessed for risk, approved, tested, and documented before release.
  - **Supplier / service provider qualification** – Assess vendors (SaaS, cloud, integrators) and maintain quality agreements; you retain regulatory responsibility.
  - **Qualification phases (IQ/OQ/PQ)** – Prove correct installation, operation against specs, and performance in the real process.
  - **Validation Master Plan (VMP) & system-level plans/reports** – Define scope, approach, roles, deliverables; close with a report justifying the release decision.
  - **Security, access control, audit trails, e‑signatures** – Ensure only authorised actions, full traceability, and Part 11/Annex 11 compliant records.
  - **Periodic review & continuous monitoring** – Re-evaluate systems, data integrity, and risk; ensure backups, disaster recovery, and business continuity work.
  - **Deviation/CAPA management** – Record incidents, investigate root causes, implement corrective and preventive actions.
  - **Training & SOPs** – People running and maintaining the system need role-appropriate training and controlled procedures.
