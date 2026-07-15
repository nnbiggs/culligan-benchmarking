import { engagementMonthYear, withEngagementDate } from "./siteMeta";

export const brand = {
  companyName: "Culligan",
  heroTitle: "Transforming IT for Growth",
  heroSubtitle: "Strategic Roadmap, EBITDA Impact & CIO Action Plan",
  heroMeta: `${engagementMonthYear} · Confidential`,
  heroAttribution:
    "PwC IT Benchmarking · Gartner · Zylo 2026 SaaS Index · Forrester TEI · HDI/MetricNet · Independent 2026 Industry Data",
};

export const executiveSummaryCover = {
  eyebrow: "Culligan International · Confidential · PwC Engagement",
  title: "IT Enterprise Cost Findings: From Mis-Spend to Measurable Value",
  subtitle: "Operating model, infrastructure, applications, vendor & licensing — savings quantification and CIO action plan",
  meta: `Hypotheses H1–H5 · ${engagementMonthYear} · PwC Confidential · Subject to CIO validation`,
  hook:
    "Culligan's IT estate is the unmanaged residue of 20+ acquisitions — 19 trading BUs buying independently with no group mandate below Corporate. Visible invoice spend is $87.2M, but estimated true IT cost is ~$170M (~5% of revenue vs. a 2.5–3.5% peer norm). The programme delivers $29–43M gross annual run-rate savings at Year 3 — but only if H4 governance (Group CIO mandate, architecture board, chargeback) comes first.",
  source: `Source: Culligan Spend Cube ${engagementMonthYear} · TBM Spend Baseline (7.10) · H2/H4/H5 analysis decks (${engagementMonthYear})`,
};

export const draft = {
  label: "PRELIMINARY",
  banner:
    "Preliminary — For internal review only. All figures are directional and subject to CIO validation.",
  footnote:
    "Data footnote: All metrics and savings ranges are directional and preliminary. Visible spend ($87.2M) captures vendor invoices only; IT headcount (~$80–130M est.) requires TBM baseline validation. H1 (Operations & AI) is not yet sized and is excluded from the near-term $29–43M programme case. Do not use for board reporting without Group CIO sign-off.",
};

export const kpis = [
  {
    id: "visible",
    value: 87.2,
    prefix: "$",
    suffix: "M",
    decimals: 1,
    label: "Visible IT Spend",
    sublabel: "Vendor invoices · Spend Cube",
    animate: true,
  },
  {
    id: "true-cost",
    display: "~$170M",
    label: "Est. True IT Cost",
    sublabel: "~5.0% of revenue · headcount included",
    animate: false,
  },
  {
    id: "savings",
    display: "$29–43M",
    label: "Programme Savings (Yr 3)",
    sublabel: "Gross run-rate · incl. outsourcing",
    animate: false,
  },
  {
    id: "net",
    display: "$19–32M",
    label: "Net After Run Costs",
    sublabel: "Payback 15–22 months · $15–25M invest",
    animate: false,
  },
];

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "priority", label: "CIO priorities" },
  { id: "findings", label: "Key findings" },
  { id: "value", label: "Savings & EBITDA" },
  { id: "insights", label: "Strategic insights" },
  { id: "roadmap", label: "Roadmap" },
  { id: "reference", label: "Benchmark data" },
];

export const cioPriority = {
  title: "If You Do Nothing Else, Do These Three Things",
  eyebrow: "CIO PRIORITY PAGE",
  intro:
    "This analysis covers 12 sections and 21 roadmap actions. The page below is the forced-rank filter: the three actions that unlock the most value, have the fewest dependencies, and must start before anything else. Everything else in this report is context and sequencing for these three moves.",
  priorities: [
    {
      step: "01",
      title: "Launch the SAM Program",
      description:
        "A Software Asset Management (SAM) program is the discipline of knowing exactly what software Culligan owns, who is using it, and whether the company is getting value for money across every contract.\n\nRight now, no single team knows what software is installed across 40+ acquired companies, how many seats are paid for versus actually used, or whether the same tool has been bought ten times under different contracts. A SAM program fixes this by creating a single inventory of all software contracts, identifying unused licences (industry average: 51% go unused), consolidating duplicate tools, and renegotiating vendor agreements using Culligan's full scale as leverage — instead of negotiating as 40 separate companies. This is not an IT project. It is a procurement and governance exercise that pays back faster than almost any other IT initiative available.",
      horizon: "Start this week",
      savings: "$4.2–10.4M yr-1",
      owner: "CIO + CPO (Procurement)",
      milestones: [
        { period: "30 DAYS", text: "Appoint SAM program lead. Pull complete vendor and licence list from all covered BUs. Identify top 10 contracts by spend." },
        { period: "60 DAYS", text: "Complete licence utilisation audit. Flag unused seats, duplicate tools, and contracts up for renewal in the next 12 months." },
        { period: "90 DAYS", text: "Present consolidated vendor list and renegotiation targets to CFO. Launch first round of EA renegotiations with top 5 vendors." },
      ],
    },
    {
      step: "02",
      title: "Scale the AI Service Desk — 40,000 Tickets Off the Queue, Starting Now",
      whyItMatters:
        "Culligan already paid for the answer to this problem. Moveworks — an AI tool that automatically resolves routine IT support requests without a human — is deployed but operating at near-zero effectiveness. The company handles ~126,000 IT support tickets per year manually, at an industry median cost of $22 per ticket. That is $2.8M in annual support-handling cost that is almost entirely addressable. Scaling Moveworks to 30–45% ticket containment (a conservative target — mature deployments achieve 45–65%) eliminates the need for a human to handle 38,000–57,000 routine requests per year. This does not require buying new technology, hiring new staff, or any structural change. It requires switching on, configuring, and training a tool that is already in the building. At 50 acquisitions per year, the ticket volume only grows — acting now locks in the efficiency before the problem compounds.",
      note:
        "Moveworks was acquired by ServiceNow in December 2025. If Culligan runs ServiceNow as its ITSM platform, this is a native capability. If not, evaluate whether to continue with Moveworks standalone or migrate to ServiceNow Now Assist as part of the broader ITSM consolidation.",
      horizon: "0–6 Months",
      savings: "$1.1–1.3M year-one · $4.7–7.9M fully scaled",
      owner: "CIO + IT Operations Lead",
      milestones: [
        { period: "30 DAYS", text: "Audit current Moveworks deployment — what is configured, what ticket categories are in scope, and what the current deflection rate is. Identify the top 10 ticket types by volume." },
        { period: "60 DAYS", text: "Expand Moveworks coverage to the top 10 ticket categories. Set deflection rate target of 30% by day 90. Brief IT support team leads on the change." },
        { period: "90 DAYS", text: "Hit 30% deflection target. Measure cost per ticket before and after. Present ROI to CIO. Set 45% target for month 6." },
      ],
    },
    {
      step: "03",
      title: "Standardise Developer Tools — $1–2M in Productivity Sitting Unused Across the Engineering Team",
      whyItMatters:
        "Culligan's software engineers and developers are working without AI-assisted coding tools — despite these tools being widely available, inexpensive, and proven to increase developer output by 20–35% (GitHub Copilot internal studies; Cursor usage data). Every developer working without a copilot is writing boilerplate code, looking up syntax, and manually searching documentation that an AI tool resolves in seconds. At Culligan's scale, standardising GitHub Copilot or Cursor across the developer population costs approximately $200–400 per developer per year and returns that investment within the first month of use. This is one of the highest ROI, lowest risk, fastest-to-implement IT investments available — requiring no infrastructure change, no procurement approval beyond a standard software licence, and no change management beyond a brief onboarding session. It also sets the cultural foundation for broader AI adoption across the organisation.",
      horizon: "0–3 Months",
      savings: "$1.0–2.0M annually",
      owner: "CIO + Engineering Leads",
      milestones: [
        { period: "30 DAYS", text: "Count the current developer and engineering population across all covered BUs. Survey current tool usage — is anyone already using copilots individually? Select the standard tool (GitHub Copilot or Cursor) based on existing GitHub/IDE infrastructure." },
        { period: "60 DAYS", text: "Purchase licences for 100% of the developer population. Run a mandatory 2-hour onboarding session per team. Set a 30-day usage target." },
        { period: "90 DAYS", text: "Measure adoption rate and developer output metrics (PRs merged, time to close tickets, code review cycle time). Calculate ROI. Expand mandate to all engineering-adjacent roles (data analysts, QA, DevOps)." },
      ],
    },
  ],
  businessResults: {
    title: "Business Results",
    subtitle:
      "If all three actions are executed in the next 90 days, what does success look like — in numbers?",
    columns: ["Action", "Investment Required", "Year-1 Return", "3-Year Return", "Payback Period", "Confidence Level"],
    rows: [
      {
        action: "Action 1 — SAM Program",
        investment: "$150–300K (SAM tooling + program lead)",
        year1: "$4.2–10.4M",
        year3: "$12–31M",
        payback: "2–4 weeks",
        confidence: "HIGH — based on 44+ confirmed contracts, industry-average 51% licence waste rate",
      },
      {
        action: "Action 2 — AI Service Desk",
        investment: "$0 additional (Moveworks already deployed)",
        year1: "$1.1–1.3M (30–45% deflection × $22/ticket × 126K tickets)",
        year3: "$3.3–4.9M (growing with ticket volume from M&A)",
        payback: "Immediate — no new spend required",
        confidence: "HIGH — tool is deployed, benchmarks are published, target deflection rate is conservative",
      },
      {
        action: "Action 3 — Developer Copilots",
        investment: "$200–400/developer/year (licence cost only)",
        year1: "$1.0–2.0M (20–35% productivity uplift on developer labour)",
        year3: "$3.0–6.0M",
        payback: "3–4 weeks",
        confidence: "MEDIUM-HIGH — GitHub Copilot and Cursor have published productivity benchmarks; actual return depends on developer population size",
      },
      {
        action: "COMBINED TOTAL",
        investment: "~$500K–750K total",
        year1: "$6.3–13.7M",
        year3: "$18.3–41.9M",
        payback: "Under 30 days on the combined portfolio",
        confidence: "HIGH",
        isTotal: true,
      },
    ],
    closing:
      "These three actions share a critical characteristic: none of them require structural reorganisation, ERP migration, or long procurement cycles. They are executable within the current IT organisation as it exists today — fragmented, acquisition-heavy, and under-governed. That is precisely why they come first. They generate the credibility, the cash, and the organisational proof-of-concept that makes every subsequent transformation initiative easier to fund and faster to execute.",
  },
};

export const executiveSummary = {
  eyebrow: "EXECUTIVE SUMMARY",
  headline: "For the Board, CEO, CFO & CIO — one enterprise, 19 separate IT operations",
  situation: {
    label: "THE SITUATION",
    text: "Culligan International is a $3.4B global water services platform assembled through 20+ acquisitions. One business model runs across three regions — but IT runs 19 separate ways. Every trading BU buys software ($34.8M), MSP services (19 contracts, $16.6M), and licenses independently. The Group CIO mandate stops at Corporate enterprise agreements. The board sees $87.2M in invoices; estimated true IT cost is ~$170M because ~$80–130M in headcount sits off the spend cube. Culligan is not an IT overspender at the invoice line — it is an IT mis-spender at the operating-model level. Recovery is $29–43M p.a. at Year 3 (net ~$19–32M), but H4 governance must come first or H2, H3, and H5 cannot execute at group level.",
  },
  strengths: {
    label: "STRENGTHS",
    sublabel: "Foundations to build on — not reasons to delay",
    items: [
      {
        id: "S1",
        title: "Group Platform Commitments Already in Place",
        description:
          "Culligan has already made the architectural decisions that typically delay consolidation. A $7.2M Salesforce enterprise agreement covers 86% of CRM spend. An IFS ERP group template is chosen for roll-out. Central EAs for Microsoft ($5.67M), Salesforce ($7.55M), and SAP ($0.78M) exist at group rates — $14.0M in negotiated agreements. The obstacle is utilization and mandate, not platform selection.",
        highlight: "$14.0M central EAs · IFS template chosen · Salesforce EA active at 86% of CRM spend",
      },
      {
        id: "S2",
        title: "Invoice Spend Is In-Band — the Gap Is Fragmentation, Not Scale",
        tone: "neutral",
        description:
          "Visible IT invoices ($87.2M) are ~2.6% of revenue — not alarming in isolation. Vendor services at 0.8% of revenue sit inside the Gartner peer band. The structural problem is how that spend is bought: 1,674 vendors, 40 entities purchasing independently, ~83% auto-renewing without group visibility. True IT cost (~5.0% of revenue) exceeds the 2.5–3.5% peer norm by ~$35–60M — a fragmentation premium, not a service-level premium.",
        highlight: "$87.2M visible · ~$170M true cost · ~$35–60M structural premium vs peers",
      },
      {
        id: "S3",
        title: "Acquisition Capability — High Value if IT Integration Keeps Pace",
        description:
          "Culligan's M&A engine is a competitive advantage. Recent Americas integration work shows progress — CommandLink standardisation at $230/month, identity consolidation on active deals. The H2 v11 review found the active pipeline is thin (19 users, 2 sites), but every deal without a group playbook still adds contracts, tenancies, and renewal cycles. Standardising Day-1 integration unlocks speed and stops re-fragmentation.",
        highlight: "CommandLink standard in AMER · Per-deal integration SLA · Ultrapure/WaterFlex anomaly flagged",
      },
    ],
  },
  opportunities: {
    label: "OPPORTUNITIES",
    sublabel: "Five hypotheses — sequenced by dependency (H4 first)",
    items: [
      {
        id: "O4",
        title: "H4 — IT Operating Model: The Governance Layer That Unlocks Everything",
        description:
          "19 trading BUs run independent IT operations — 15+ service desks at $45–80/ticket vs $12–20 best-in-class, zero MSP volume leverage, no architecture board, no chargeback. H4 delivers ~$2.4M directly (service desk $1.3M, demand mgmt $0.6M, headcount $0.3–0.5M) and enables ~$12–18M across H2/H3/H5. Targeted outsourcing adds $5–8M as a separate option.",
        metrics: "H4 direct: ~$2.4M · Net: $1.0–1.6M · Enables: ~$12–18M · Wave 1: $4–7M",
      },
      {
        id: "O5",
        title: "H5 — Vendor & Licensing: 1,674 Vendors, Zero Group Leverage",
        description:
          "1,674 vendors serve a $87.2M IT & Digital estate. $72.7M is addressable — $27.56M in third-party services (314 vendors) and $45.16M in licensing (564 vendors). ~25–30% of SaaS seats unused. Wave 1 license quick wins ($1.0–1.9M) are self-funding; Waves 2–3 require the H4 mandate to enforce champion/challenger panels and platform standardisation.",
        metrics: "Yr-3 gross: $6.5–8.5M · Net: $3.1–4.5M · Wave 1: $1.0–1.9M · 83% addressable",
      },
      {
        id: "O3",
        title: "H3 — Application Rationalisation: Paying Twice for ERP and CRM",
        description:
          "10 ERP instances ($10.9M) and 19 CRM systems ($8.3M) run in parallel despite group platforms. Culligan pays $7.55M for Salesforce and $0.85M for standalone CRMs simultaneously. IFS template is ready — migration sequencing, not platform choice, is the blocker. Forrester TEI: ERP consolidation 100%+ ROI, 16-month payback.",
        metrics: "Saving: $6.3–8.5M · ERP 10→1 (IFS) · CRM 19→1 (Salesforce) · FSM 14→1",
      },
      {
        id: "O2",
        title: "H2 — Infrastructure & Cloud: Lean Lines, Ungoverned Estate",
        description:
          "Infrastructure towers total $13.0M (15% of IT). Cloud Services run-rate is $2.04M (TBM) with ~0% RI coverage and ~30% untagged spend. 137 AMER FortiGates on critical CVE firmware. Five plays deliver $1.7–3.5M net — FinOps quick wins ($0.4–0.8M Yr 1) self-fund; acquisition infrastructure cleanup is the root-cause lever. Plays 3–4 are H4-mandate gated.",
        metrics: "Net saving: $1.7–3.5M · Yr-1 FinOps: $0.4–0.8M · 5 sequenced plays · 137 FortiGates",
      },
      {
        id: "O1",
        title: "H1 — Operations & AI: Later Phase, Not in Near-Term Case",
        description:
          "Route optimisation and AI-driven field service efficiency remain real opportunities — Virtual Agent deflection is 1.1% vs a 15–20% target. H1 is flagged for a later phase and excluded from the $24–35M core programme figure ($29–43M including outsourcing). Service desk automation and MSP commercial restructure (H2/H4) are the near-term levers.",
        metrics: "Not yet sized · Excluded from $29–43M near-term case · Virtual Agent: 1.1% deflection",
      },
    ],
  },
  conclusion: {
    label: "EXECUTIVE CONCLUSION",
    title: "This is a governance decision — not a procurement exercise.",
    text: "Three foundations confirm Culligan can consolidate when mandate exists. H4 delivers ~$2.4M directly and enables the wider programme across H2, H3 and H5 — each sized in its own hypothesis deck. The single highest-leverage action: extend the Group CIO mandate and stand up the architecture board. Without it, the 1,674-vendor estate regrows at every renewal.",
  },
};

export const businessContext = {
  title: "Culligan Business Context",
  subtitle: "Why IT matters more here than at most companies — the M&A machine that makes IT transformation a strategic imperative",
  sections: [
    {
      label: "THE M&A MACHINE",
      paragraphs: [
        "Culligan has executed over 300 acquisitions since 2016 — growing from a $400M business to a $3.4B global platform. The strategy is explicit: programmatic M&A at roughly 50 bolt-on deals per year, targeting small companies ($2–4M revenue) primarily in water treatment across Europe, Asia, and the Americas. CEO Scott Clawson has described this as Culligan's 'M&A machine — nailed.'",
        "The IT implication is severe. Every acquisition without a group IT integration standard adds another ERP variant, software contract, and MSP relationship to an already fragmented base. The current estate — 90 ERP tools, 19 CRM systems, 1,674 vendors — is the direct output of acquisition-led growth with no group mandate. ~83% of IT spend auto-renews annually; every cycle without a framework re-locks another year of fragmentation premium.",
      ],
    },
    {
      label: "PE OWNERSHIP CONTEXT",
      paragraphs: [
        "Culligan is majority-owned by BDT & MSD Partners (since 2021), with Advent International holding a minority stake. The PE ownership structure creates a specific lens: every dollar of EBITDA improvement is worth 10–12× in enterprise value at exit. A $29–43M IT savings programme (net ~$19–32M) represents $190–430M in enterprise value — one of the most capital-efficient value creation levers available to the ownership group.",
      ],
    },
  ],
  callout: {
    label: "THE COMPOUNDING PROBLEM",
    text: "At ~83% auto-renewal on IT contracts, Culligan's IT fragmentation compounds every year without intervention — 3–7% on renewing contracts plus cloud sprawl at ~9%/quarter. PwC estimates $60–110M in avoidable overspend over 3 years if no action is taken (H4 view). The $29–43M programme saving is recovery of structural cost already being incurred — not a projection.",
  },
};

export const keyFindings = {
  title: "Key Findings vs. Peer Benchmark",
  subtitle: "What each hypothesis area measured, what the numbers show, and what it means for Culligan",
  hypothesisLegend: {
    title: "Hypothesis Legend — What Each Area Means",
    intro:
      `The benchmarking is structured around five hypotheses from the ${engagementMonthYear} analysis decks (H2 v11, H4 updated, H5 v7) — specific questions about where Culligan's IT spending and operating model fall below peer efficiency.`,
    columns: ["Code", "Hypothesis Name", "High Level Description", "What Was Measured"],
    rows: [
      { code: "H1", name: "Operations & AI", definition: "How effectively is Culligan using AI and automation in field operations and route service?", measured: "Route optimisation, AI scheduling — not yet sized; excluded from near-term savings case." },
      { code: "H2", name: "Infrastructure & Cloud", definition: "Is Culligan spending efficiently on infrastructure, cloud, and network — and is it governed?", measured: "Cloud FinOps, RI coverage, MSP contracts, acquisition infrastructure debt, network/circuits. Dedicated page: /infrastructure-cloud." },
      { code: "H3", name: "Application Rationalisation", definition: "Is Culligan maintaining too many ERP, CRM, and FSM systems?", measured: "ERP 10→1 (IFS), CRM 19→1 (Salesforce), FSM 14→1 group platform." },
      { code: "H4", name: "IT Operating Model", definition: "Is IT delivered efficiently across regions with proper governance?", measured: "Service desk cost, MSP leverage, management ratio, shared services maturity. Dedicated page: /taxonomy." },
      { code: "H5", name: "Vendor & Licensing", definition: "Is Culligan getting value from vendor contracts and software licences?", measured: "Vendor services ($27.56M) and licensing ($45.16M) rationalization. Dedicated page: /vendor-rationalization." },
    ],
    footnote:
      `H1–H5 framework from PwC IT Benchmarking ${engagementMonthYear} decks. Programme total: $29–43M p.a. at Year 3 gross (~$19–32M net). $24–35M excludes outsourcing; $29–43M includes it. Peer set: mid-market industrials/distribution, $1–5B revenue.`,
  },
  findingsTable: {
    title: "Key Findings — Quantitative Results & Business Meaning",
    intro:
      "Each hypothesis area with specific numbers from the benchmarking data and a plain-language explanation of what those numbers mean for Culligan's business.",
    columns: ["Hypothesis Area", "The Numbers", "What This Means for Culligan — In Plain Terms"],
    rows: [
      {
        code: "H5",
        name: "Vendor & Licensing",
        sectionId: "hypothesis-h5",
        area: "H5 — Vendor & Licensing",
        status: "RED FLAG",
        statusType: "red",
        numbers: "$87.2M total IT spend · $72.7M addressable\nVendor track: $27.56M (314 vendors)\nLicensing track: $45.16M (564 vendors)\n40 entities buying independently\nYear-3 saving: $6.5–8.5M",
        meaning:
          "Culligan sits in-band on vendor services as % of revenue (0.8%) but buys through 1,674 vendors with zero group leverage. ~25–30% of SaaS seats unused (Gartner/Zylo est.). Central EAs ($14.0M) partially underutilized while BUs buy standalone equivalents.",
      },
      {
        code: "H4",
        name: "IT Operating Model",
        sectionId: "hypothesis-h4",
        area: "H4 — IT Operating Model",
        status: "RED FLAG",
        statusType: "red",
        numbers: "$87.2M visible spend · $22.9M labor (est. · 281 FTEs)\n19 MSP contracts ($16.6M) · 15+ service desks\nService desk: $45–80/ticket vs $12–20 (MetricNet)\nH4 direct saving: ~$2.4M · Enables ~$12–18M (H2/H3/H5)",
        meaning:
          "Nearly half of true IT cost was invisible to the board until the TBM baseline. Fragmented service delivery and zero MSP leverage are structural — not cyclical. H4 governance unlocks H2, H3, and H5.",
      },
      {
        code: "H3",
        name: "Application Rationalisation",
        sectionId: "hypothesis-h3",
        area: "H3 — Application Rationalisation",
        status: "ABOVE MEDIAN",
        statusType: "amber",
        numbers: "10 ERP instances ($10.9M) · 19 CRM ($8.3M)\nIFS template built but not deployed\nCRM: $7.55M Salesforce EA + $0.85M parallel spend\nSaving: $6.3–8.5M (Gartner 35–55% TCO)",
        meaning:
          "Culligan pays for group platforms and standalone equivalents simultaneously. Forrester TEI: ERP consolidation 100%+ ROI, 16-month payback.",
      },
      {
        code: "H2",
        name: "Infrastructure & Cloud",
        sectionId: "hypothesis-h2",
        area: "H2 — Infrastructure & Cloud",
        status: "UNDER-GOVERNED",
        statusType: "amber",
        numbers: "Infra towers: $13.0M (15% of IT)\nCloud Services pool: $2.04M (TBM)\n~0% RI coverage · ~30% untagged cloud\n137 FortiGates on critical CVE firmware\nNet saving: $1.7–3.5M (5 plays)",
        meaning:
          "Lean spend lines mask governance failure. Acquisition infrastructure debt not yet fully quantified. FinOps is self-funding within 12 months.",
      },
      {
        code: "H1",
        name: "Operations & AI",
        sectionId: "hypothesis-h1",
        area: "H1 — Operations & AI",
        status: "NOT YET SIZED",
        statusType: "green",
        numbers: "0 of 14 route BUs use AI scheduling\nVirtual Agent deflection 1.1% vs 15–20% target\nExcluded from near-term $29–43M programme case",
        meaning:
          `AI opportunities exist in route service and service desk but H1 is flagged for a later phase per the ${engagementMonthYear} decks.`,
      },
      {
        area: "Overall IT Spend",
        status: "FRAGMENTATION PREMIUM",
        statusType: "amber",
        numbers: "Visible IT invoices: $87.2M (~2.6% of revenue)\nEst. true IT cost: ~$170M (~5.0% of revenue)\nGartner peer: 2.5–3.5% ($95–114M)\nStructural premium: ~$35–60M p.a.",
        meaning:
          "Invoice spend understates true cost. The gap vs peers is structural fragmentation — not higher service levels.",
      },
    ],
  },
  source:
    `Source: Culligan_H2_Infrastructure_Cloud_v11 · Culligan_H4 IT support and operating model efficiency · Culligan_H5_Vendor_Licensing_Rationalization_v7 (${engagementMonthYear}); Gartner IT Key Metrics 2025; Zylo/Flexera; MetricNet 2025; TBM Spend Baseline.`,
};

export const statusBadgeStyles = {
  red: "bg-red-100 text-culligan-red",
  amber: "bg-amber-100 text-culligan-amber",
  green: "bg-emerald-100 text-culligan-green",
};

export const ebitdaImpact = {
  title: "EBITDA & Enterprise Value Impact",
  subtitle: "Translating IT savings into the language of PE ownership",
  intro:
    "The benchmarking analysis identifies $16–31M in annual savings. This section translates those savings into EBITDA improvement and enterprise value impact — the metrics that matter to Culligan's ownership and any future transaction process. PE exit multiples for water services and industrial services companies are currently 10–12× EBITDA.",
  columns: ["Savings Lever", "Annual Saving", "EBITDA Lift", "EV @ 10×", "EV @ 12×", "Confidence"],
  rows: [
    { lever: "H6 — Vendor & Licensing", annual: "$4.2–10.4M", ebitda: "$4.2–10.4M", ev10: "$42–104M", ev12: "$50–125M", confidence: "HIGH", confidenceType: "green" },
    { lever: "H1 — AI & Automation", annual: "$4.7–7.9M", ebitda: "$4.7–7.9M", ev10: "$47–79M", ev12: "$56–95M", confidence: "HIGH", confidenceType: "green" },
    { lever: "H4 — Application / ERP", annual: "$3.8–7.5M", ebitda: "$3.8–7.5M", ev10: "$38–75M", ev12: "$46–90M", confidence: "MEDIUM", confidenceType: "amber" },
    { lever: "H5 — IT Support", annual: "$2.0–3.9M", ebitda: "$2.0–3.9M", ev10: "$20–39M", ev12: "$24–47M", confidence: "MEDIUM", confidenceType: "amber" },
    { lever: "H3 — Infrastructure", annual: "$0.8–1.7M", ebitda: "$0.8–1.7M", ev10: "$8–17M", ev12: "$10–20M", confidence: "MEDIUM", confidenceType: "amber" },
    { lever: "H2 — Spans & Layers", annual: "Survey-led", ebitda: "$3–8M (est.)", ev10: "$30–80M", ev12: "$36–96M", confidence: "SURVEY", confidenceType: "amber" },
    { lever: "SaaS Waste (additional)", annual: "$8–18M", ebitda: "$8–18M", ev10: "$80–180M", ev12: "$96–216M", confidence: "TO VALIDATE", confidenceType: "red" },
    { lever: "TOTAL CONFIRMED + UPSIDE", annual: "$29–43M/yr", ebitda: "$19–32M net", ev10: "$190–320M", ev12: "$228–384M", confidence: "—", confidenceType: "green", isTotal: true },
  ],
  note: "EBITDA impact assumes full dollar-for-dollar flow-through of IT savings (no incremental investment required beyond implementation costs). EV impact calculated at 10× and 12× EBITDA multiples. PE exit multiples sourced from Capstone Partners M&A Valuations Index 2025 (average 9.8× in 2025; PE-led deals averaging 12.8× median per CLFI analysis). SaaS waste recovery requires formal SAM assessment to confirm.",
  callout: {
    label: "THE EV FRAMING FOR OWNERSHIP",
    text: "The $16–31M confirmed savings range represents $160–370M in enterprise value at current multiples — before the SaaS waste upside is validated. Put differently: the IT transformation program, if executed successfully, is worth more to Culligan's equity value than the average acquisition in the current bolt-on pipeline. This is the single most important reframe for any board or ownership conversation about IT investment.",
  },
  chartData: [
    { name: "H6 · Vendor & Licensing", low: 4.2, high: 10.4 },
    { name: "H1 · AI & Automation", low: 4.7, high: 7.9 },
    { name: "H4 · Application / ERP", low: 3.8, high: 7.5 },
    { name: "H5 · IT Support", low: 2.0, high: 3.9 },
    { name: "H3 · Infrastructure", low: 0.8, high: 1.7 },
  ],
};

export const costOfInaction = {
  title: "Cost of Inaction",
  subtitle: "What it costs Culligan every year to not act on these recommendations",
  intro:
    "Most IT analyses present the upside of action. This section presents the cost of inaction — what Culligan pays every year the current state persists. These are quantifiable costs embedded in the current operating model that compound with every passing quarter and every new acquisition.",
  columns: ["Inaction Item", "Annual Cost", "3-Year Cost", "Basis"],
  rows: [
    { item: "Each new acquisition without IT playbook", annual: "~$1.2–3.5M", threeYear: "~$3.6–10.5M", basis: "EY: IT integration = 5–15% of deal value; ~$100–600K per deal at 10–50 deals/yr" },
    { item: "Every year of 25+ ERP fragmentation", annual: "~$2–4M", threeYear: "~$6–12M", basis: "Manual reconciliation labor; unified ERP reduces finance close costs 20–30%" },
    { item: "IT org at 19.9% management (vs. 12%)", annual: "~$3–6M", threeYear: "~$9–18M", basis: "Excess management layers produce software 3× median and app sprawl; 15–20 excess FTEs" },
    { item: "Software at 3× median — each additional year", annual: "~$15–20M", threeYear: "~$45–60M", basis: "Paying $34.8M vs. ~$12M peer-equivalent; new BUs add contracts with no governance" },
    { item: "No shared-services IT support model", annual: "~$1–2M", threeYear: "~$3–6M", basis: "Each acquired BU adds proportional support FTEs; linear vs. sub-linear scaling" },
    { item: "TOTAL ANNUAL COST OF INACTION", annual: "~$22–35M/yr", threeYear: "~$66–105M", basis: "Conservative floor — excludes M&A deal value erosion and regulatory exposure", isTotal: true },
  ],
  note: "Annual cost estimates are directional and based on industry benchmarks applied to Culligan's specific profile.",
  callout: {
    label: "THE INACTION MATH",
    text: "The conservative annual cost of inaction — $22–35M/year — is larger than the confirmed annual savings opportunity of $16–31M. Every year of delay costs more than the transformation saves in year one. The question is not whether Culligan can afford to invest in IT transformation. It is whether it can afford not to.",
  },
};

export const strategicInsights = {
  title: "Strategic Insights & Required Actions",
  subtitle: "Six insights — each with observation, business implication, and mandatory action",
  items: [
    {
      id: 1,
      title: "Software & Licensing: 3× Median Is a Governance Failure, Not a Spending Problem",
      borderColor: "#C0392B",
      sections: {
        observation: "Software spend is $34.8M — 1.05% of revenue vs. 0.36% peer median (~3×), representing 50% of all IT spend. 44 vendor contracts identified so far, none centrally governed. Industry data (Zylo 2026): 51% of enterprise SaaS licenses go unused. Applied to Culligan's $34.8M base, $8–18M may be directly recoverable through governance alone.",
        businessImplication: "The 3× median is the mathematical output of 300 acquisitions with no vendor governance. Every new acquisition adds contracts. Half of Culligan's IT budget is funding vendor margin on software nobody centrally manages. At 50 acquisitions per year, this gets worse every quarter without intervention.",
        requiredAction: "Launch a SAM + vendor rationalization program immediately. Step 1: full license audit across all 44+ contracts. Step 2: consolidate overlapping tools. Step 3: renegotiate top-10 vendor EAs using group-wide volume leverage. Target $4.2–10.4M year-one savings. Establish a Vendor Governance Council chaired by the CIO.",
      },
    },
    {
      id: 2,
      title: "Org Structure: The Root Cause That Makes Every Other Problem Unfixable",
      borderColor: "#C0392B",
      sections: {
        observation: "56 of 281 IT FTEs (19.9%) hold management roles — 81% above the lean ~11% norm. 85 FTEs/$1B vs. 70.5 median. Each regional M&A wave added leadership layers never consolidated. The H2 dollar value is unquantified pending the IT labor survey.",
        businessImplication: "Too many managers — each empowered to make local tool, vendor, and ERP choices — is the structural cause of the 3× software median, the 25+ ERP estate, and the four duplicated support models. Fix the vendors without fixing the org and the same incentives recreate the fragmentation within 3–5 years.",
        requiredAction: "Commission the IT labor survey within 30 days. Design a global IT operating model with unified Architecture Governance reporting to the CIO. Target management ratio of 12–13%. Implement global vendor and technology approval gates.",
      },
    },
    {
      id: 3,
      title: "ERP Fragmentation: 25 Systems Is an M&A Integration Tax on Every Future Deal",
      borderColor: "#E67E22",
      sections: {
        observation: "Application tower is $25.1M — 36% of IT, 0.76% revenue vs. 0.65% median. 25+ ERPs across 40 BUs (SAP, IFS, Sage, NetSuite, D365, TOTVS). Forrester TEI: ERP consolidation delivers 106% ROI over 3 years for manufacturing, with 17-month payback.",
        businessImplication: "25+ ERPs means consolidated P&L, supply chain optimization, and customer reporting are structurally impossible. Each new acquisition adds another system. Culligan's ownership cannot get a clean view of the business — the opposite of a scalable M&A machine.",
        requiredAction: "Begin ERP consolidation business case immediately. 90-day actions: application portfolio inventory, evaluate platform options, define first-migration BU cluster (North America recommended). Set architectural freeze: no new ERP variants without Architecture Council exception.",
      },
    },
    {
      id: 4,
      title: "M&A IT Integration: No Playbook at 50 Deals/Year Is a Material Value Leak",
      borderColor: "#E67E22",
      sections: {
        observation: "Culligan executes ~50 bolt-on acquisitions per year with no standardized IT integration playbook. Industry research consistently shows IT integration costs run 5–15% of deal value; up to 60% of M&A synergy initiatives are IT-related but delayed by fragmentation; 70–75% of M&A deals underperform, with IT complexity a leading cause.",
        businessImplication: "At $2–4M revenue per acquisition, IT integration costs of 5–15% imply $100–600K per deal — at 50 deals/year, $5–30M in annual integration overhead producing the ERP variants and software contracts that cost $34.8M to maintain. Every acquisition without standards is a future cost that must eventually be rationalized.",
        requiredAction: "Build a standardized 5-phase M&A IT integration playbook within 90 days. Apply to all future acquisitions immediately. Include: IT due diligence checklist, Day-1 readiness, 90-day integration tasks, ERP classification framework, and vendor contract absorption process.",
      },
    },
    {
      id: 5,
      title: "IT Support Operating Model: Linear Scaling Is a Growth Tax",
      borderColor: "#E67E22",
      sections: {
        observation: "End-user support is $13.0M — 19% of IT — through four independent regional organizations (EMEA 144 / NA 86 / LATAM 39 / APAC 12 FTEs). ~126K annual tickets handled largely manually. HDI/MetricNet 2026: median cost per ticket is $22.",
        businessImplication: "Every acquisition adds support FTEs in proportion to users. At 50 acquisitions per year, support cost compounds continuously. At $22/ticket × 126K tickets = $2.8M addressable annual support cost on the current base alone.",
        requiredAction: "Design global shared-services operating model as part of Phase 2 org reform. Scale Moveworks/ServiceNow Now Assist to 30–45% L1 deflection — ~$1.1–1.3M recoverable. Unify ITSM on single platform. Target: $2.0–3.9M savings.",
      },
    },
    {
      id: 6,
      title: "Infrastructure Is a Discipline to Export, Not an Area to Fix",
      borderColor: "#1E7A46",
      sections: {
        observation: "Network at 0.12% of revenue — below 0.17% peer median. Total infrastructure $5.6M — lean and efficient. Mature Moveworks/ServiceNow deployments achieve 45–65% containment — Culligan's 30–45% year-one target is conservative.",
        businessImplication: "Infrastructure discipline proves the organization can run lean when governance is applied. The same rigor needs to be applied to software and application management. The $4.7–7.9M H1 range may have further upside at mature containment rates.",
        requiredAction: "Protect infrastructure investment discipline — do not reopen this cost base. Scale Moveworks/ServiceNow Now Assist to production. Standardize developer copilots. Pilot AIOps. Use infrastructure governance as the template for vendor and application estates.",
      },
    },
  ],
  sectionLabels: {
    observation: "OBSERVATION",
    businessImplication: "BUSINESS IMPLICATION",
    requiredAction: "REQUIRED ACTION",
  },
};

export const maPlaybook = {
  title: "M&A IT Integration Playbook",
  subtitle: "The missing capability that breaks the compounding fragmentation cycle",
  intro:
    "Culligan's M&A machine executes ~50 acquisitions per year. Each acquisition without a standardized IT integration approach adds ERP variants, software contracts, and support FTEs to an already fragmented base.",
  phases: [
    { phase: "Pre-Close (–90 to 0 days)", owner: "CIO + M&A Team", actions: "IT due diligence checklist. Identify ERP type, software contracts, headcount, security posture. Classify: integrate (<20% rev), federate (>30% rev), or stand-alone." },
    { phase: "Day 1 Readiness (0–30 days)", owner: "Regional CTO", actions: "Ensure email, VPN, network connectivity. Onboard to Culligan SSO. Deploy standard security tooling. Capture full vendor contract list from target." },
    { phase: "90-Day Integration (30–90 days)", owner: "CIO + Regional CTO", actions: "Add target to Culligan SAM program. Map target software to standard stack — identify duplicates. Complete IT headcount census. Assign to regional support model." },
    { phase: "Full Integration (90–365 days)", owner: "CIO", actions: "Migrate target to Culligan ITSM (ServiceNow). Consolidate or retire target ERP per platform decision. Onboard to Culligan vendor EA agreements." },
    { phase: "Governance (Ongoing)", owner: "Architecture Council", actions: "No new ERP or enterprise software without Council sign-off. All vendor contracts through group procurement. Annual license audit includes acquired entities." },
  ],
  note: "Playbook framework based on industry best practice for PE-backed portfolio companies with high-frequency M&A activity. Classification logic reflects standard post-acquisition ERP decision frameworks used across comparable roll-up platforms.",
  erpFramework: {
    title: "ERP Classification Decision Framework",
    subtitle: "Not every acquisition requires full ERP integration",
    columns: ["Scenario", "Decision", "Rationale"],
    rows: [
      { scenario: "Small bolt-on (<20% of BU revenue), identical model", decision: "Integrate to Culligan standard ERP", rationale: "Immature processes; adopting Culligan SOPs is part of the value add. Rip and replace is fastest path." },
      { scenario: "Mid-size deal (20–30% of BU revenue), similar model", decision: "Phased integration (18–24 months)", rationale: "Retain target ERP during transition; migrate to Culligan template with dedicated integration resources." },
      { scenario: "Significant deal (>30% of BU revenue) or different model", decision: "Federate with iPaaS data layer", rationale: "Keep target ERP; use MuleSoft/Boomi to federate financial reporting without process disruption." },
      { scenario: "Specialty technology or unique 'secret sauce'", decision: "Stand-alone indefinitely", rationale: "Standardization would destroy acquired value. Protect operational independence; connect reporting only." },
    ],
  },
};

export const maturityModel = {
  title: "IT Maturity Model",
  subtitle: "Where Culligan sits today — and where it needs to be",
  intro:
    "Culligan's current state across seven domains on a 1–5 scale (1 = Reactive, 5 = Optimized). Target reflects the state needed to support M&A strategy without compounding cost.",
  columns: ["Domain", "Score", "Level", "Current State", "Target State", "Gap"],
  rows: [
    { domain: "Vendor & License Governance", score: "1 / 5", level: "Reactive", current: "44+ contracts, no central governance, 3× peer median", target: "4 — Proactive: Group-wide SAM, vendor council, EA governance", gap: "3 levels" },
    { domain: "Organizational Structure", score: "2 / 5", level: "Developing", current: "19.9% mgmt ratio, 4 regional silos, no global operating model", target: "4 — Proactive: 12–13% mgmt, global shared services", gap: "2 levels" },
    { domain: "Application / ERP Rationalization", score: "1 / 5", level: "Reactive", current: "25+ ERPs, no consolidation plan, no platform template", target: "3 — Defined: Roadmap committed, Year-1 migrations begun", gap: "2 levels" },
    { domain: "IT Support & Operating Model", score: "2 / 5", level: "Developing", current: "4 regional models, no shared services, manual tickets", target: "4 — Proactive: Unified ITSM, shared services, AI deflection", gap: "2 levels" },
    { domain: "Infrastructure & Cloud", score: "3 / 5", level: "Defined", current: "Lean, at/below benchmark, FinOps absent", target: "4 — Proactive: FinOps, cloud governance, resilience", gap: "1 level" },
    { domain: "AI & Automation", score: "2 / 5", level: "Developing", current: "Moveworks early-stage, copilots not standardized", target: "4 — Proactive: AI deflection 40%+, copilots standardized", gap: "2 levels" },
    { domain: "M&A IT Integration Capability", score: "2 / 5", level: "Developing", current: "No standardized playbook; BU-by-BU approach", target: "4 — Proactive: Repeatable playbook, <90-day Day-1 readiness", gap: "2 levels" },
  ],
  callout: {
    label: "MATURITY READING",
    text: "Culligan scores 1–2 across six of seven domains — including the two most critical (Vendor Governance and M&A IT Integration). No domain scores above 3. The target is reaching 3–4 across the board — the threshold at which IT stops being a growth constraint and starts being a growth enabler.",
  },
};

export const priorityMatrix = {
  title: "Initiative Priority Matrix",
  subtitle: "Speed-to-value vs. effort — where to focus first",
  intro:
    "The top-left quadrant — high value, low effort — is the mandatory starting point. The top-right contains structural transformation work sequenced after quick wins establish credibility and governance.",
  quadrants: [
    {
      label: "DO NOW",
      sublabel: "High Value, Low Effort",
      color: "#1E7A46",
      items: [
        "H6 — SAM + Vendor Rationalization ($4.2–10.4M, 0–12 mo)",
        "IT Labor Survey — commissions in 30 days, sizes H2",
        "Close BU data gaps — Italy first (30–60 days)",
        "AI-driven SAM tooling — accelerates H6 savings",
      ],
    },
    {
      label: "PLAN & SEQUENCE",
      sublabel: "High Value, High Effort",
      color: "#022656",
      items: [
        "H2 — Org delayering + global operating model (6–18 mo)",
        "H4 — ERP consolidation business case + Year-1 migration",
        "H5 — Global shared-services model for IT support",
        "M&A IT integration playbook build (3–6 mo)",
        "Architecture Governance Council (post-delayering)",
      ],
    },
    {
      label: "QUICK WINS",
      sublabel: "Moderate Value, Low Effort",
      color: "#1B7F9E",
      items: [
        "H3 — FinOps program (cloud waste recovery)",
        "Developer copilots (GitHub/Cursor) — 3–6 mo",
        "Moveworks/ServiceNow Now Assist scale-up",
        "ITSM toolchain unification across regions",
      ],
    },
    {
      label: "DEPRIORITIZE",
      sublabel: "Lower Value, High Effort",
      color: "#5A6A7E",
      items: [
        "Deep infrastructure re-architecture (already lean)",
        "Full OT/ICS tech refresh",
        "Legacy data center exits (sequence after ERP decisions)",
      ],
    },
  ],
};

export const roadmap = {
  title: "3-Phase Transformation Roadmap",
  subtitle: "Prioritized 0–36 month action plan — sequenced by dependency, not arbitrary timing",
  intro:
    "Phase 1 generates quick wins that fund Phase 2. Phase 2 removes structural obstacles that make Phase 3 achievable. The M&A IT playbook must be built in Phase 2 and applied from Phase 1 onward to all new acquisitions.",
  phases: [
    {
      phase: "PHASE 1: Quick Wins",
      horizon: "0–12 Months",
      savings: "$4.2–10.4M/yr",
      actions: [
        "Launch SAM + vendor rationalization program across all 44+ contracts",
        "Appoint SAM program lead; establish vendor governance council",
        "Commission IT labor survey (60 days) to size H2 delayering",
        "Close BU coverage gap: Italy (9 entities), Canada, CWC, China, EMEA OEM",
        "Validate TBM tower mapping in CIO office workshops",
        "Deploy AI-driven SAM tooling to accelerate license waste recovery",
      ],
    },
    {
      phase: "PHASE 2: Structural Reform",
      horizon: "6–24 Months",
      savings: "$6.7–11.8M/yr",
      actions: [
        "Execute org delayering — reduce management ratio from 19.9% to ~12–13%",
        "Build and launch global IT shared-services model for end-user support",
        "Scale Moveworks/ServiceNow Now Assist to 30–45% L1 ticket deflection",
        "Standardize developer copilots (GitHub Copilot/Cursor) across dev population",
        "Implement FinOps program to recover 28–35% cloud waste",
        "Build and deploy M&A IT integration playbook (5-phase)",
        "Unify ITSM toolchain across all 4 regions onto single platform",
        "Define and enforce offshore delivery strategy — target 25–35% mix",
      ],
    },
    {
      phase: "PHASE 3: Transformation Anchor",
      horizon: "12–36 Months",
      savings: "$3.8–7.5M/yr",
      actions: [
        "Complete application portfolio inventory and ERP consolidation business case",
        "Select common ERP platform; define phased migration by BU cluster",
        "Begin Year-1 ERP migrations (North America recommended as first cluster)",
        "Retire duplicate and low-value applications — target 20–30% app rationalization",
        "Implement Architecture Governance Council — enforce global standards post-delayering",
        "Deploy AIOps for incident reduction and back-office automation",
        "Set and govern IT investment mix target: 65% Run / 20% Grow / 15% Transform",
      ],
    },
  ],
  note: "Phase 1 and Phase 2 can run concurrently where independent. Phase 3 ERP work must not begin until Phase 2 org governance and Architecture Council are operational.",
};

export const benchmarkTable = {
  title: "Benchmark Reference Summary",
  subtitle: "Full metrics — Culligan vs. peer medians and 2026 industry norms",
  columns: ["Metric", "Culligan", "Peer Median / Norm", "vs. Benchmark"],
  rows: [
    { metric: "Visible IT invoice spend", culligan: "$87.2M (~2.6% rev)", peer: "2.5–3.5% true cost (Gartner)", comparison: "🟡 Understates — headcount excluded" },
    { metric: "Est. true IT cost / revenue", culligan: "~5.0% (~$170M)", peer: "2.5–3.5%", comparison: "🔴 ~$35–60M premium" },
    { metric: "H5 vendor services / revenue", culligan: "0.65% ($21.9M)", peer: "0.4–0.5%", comparison: "🟡 In-band but fragmented" },
    { metric: "Cloud RI coverage", culligan: "~0%", peer: ">50% stable workloads", comparison: "🔴 RED FLAG" },
    { metric: "Service desk cost / ticket", culligan: "$45–80", peer: "$12–20 (MetricNet)", comparison: "🔴 RED FLAG" },
    { metric: "MSP contracts (group leverage)", culligan: "$16.6M / 19 contracts", peer: "10–15% cheaper consolidated", comparison: "🔴 RED FLAG" },
    { metric: "SaaS seat utilization", culligan: "~70–75% (est.)", peer: ">90% (Zylo/Flexera)", comparison: "🟡 25–30% unused est." },
    { metric: "H2 infra net saving (Yr 3)", culligan: "$1.7–3.5M opportunity", peer: "FinOps + acquisition cleanup", comparison: "🟡 Under-governed" },
    { metric: "Programme total (H1–H5 + outsourcing)", culligan: "$29–43M p.a.", peer: "—", comparison: "Year 3 run-rate (H4 deck)" },
  ],
    caption:
    `Sources: PwC IT Benchmarking Analysis decks (${engagementMonthYear}); Gartner IT Key Metrics 2025; Zylo/Flexera SAM benchmarks; MetricNet 2025; Info-Tech 2024. Directional; subject to CIO validation.`,
};

export const footer = {
  confidentiality: "CONFIDENTIAL — FOR INTERNAL EXECUTIVE USE ONLY",
  attribution:
    `Based on PwC IT Benchmarking Analysis (${engagementMonthYear}) enhanced with Gartner, Zylo, Forrester, HDI/MetricNet, and independent 2026 industry research`,
  copyright: "© 2026 Culligan International Co. All rights reserved.",
  disclaimer:
    "Not for external distribution.",
};
