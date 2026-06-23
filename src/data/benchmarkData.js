export const brand = {
  companyName: "Culligan",
  heroTitle: "Transforming IT for Growth",
  heroSubtitle: "Strategic Roadmap, EBITDA Impact & CIO Action Plan",
  heroMeta: "June 2026 · Confidential",
  heroAttribution:
    "PwC IT Benchmarking · Gartner · Zylo 2026 SaaS Index · Forrester TEI · HDI/MetricNet · Independent 2026 Industry Data",
};

export const executiveSummaryCover = {
  eyebrow: "Culligan International · Confidential · PwC Engagement",
  title: "IT Cost Savings Benchmark",
  subtitle: "Hypothesis Analysis, Savings Quantification, EBITDA Impact & CIO Action Plan",
  meta: "Hypotheses H1–H6 · June 2026 · PwC Confidential",
  hook:
    "Culligan is not an IT overspender — it is an IT mis-spender. Vendor spend sits within benchmark, but ~3× peer software costs, 25+ fragmented ERP systems, and ungoverned BU purchasing leave $16–31M in confirmed annual savings on the table. This report quantifies the opportunity and sequences the CIO actions to capture it.",
  source: "Source: Culligan Spend Cube June 2026 · March 2026 P&L · 20 of 40 BUs in scope",
};

export const draft = {
  label: "DRAFT",
  banner:
    "Draft — For internal review only. All figures are directional and unvalidated.",
  footnote:
    "Data footnote: All metrics, savings ranges, and enterprise value estimates on this site are directional and unvalidated. Analysis reflects 20 of 40 in-scope business units; TBM tower mapping, IT labor survey results, and remaining BU coverage are pending confirmation. Do not use for board reporting, external distribution, or investment decisions without CIO validation and sign-off.",
};

export const kpis = [
  {
    id: "spend",
    value: 69.2,
    prefix: "$",
    suffix: "M",
    decimals: 1,
    label: "IT & Digital Spend",
    sublabel: "2.10% of revenue — below median",
    animate: true,
  },
  {
    id: "software",
    display: "~3×",
    label: "Software vs. Peer Median",
    sublabel: "$34.8M — 50% of all IT spend",
    animate: false,
  },
  {
    id: "savings",
    display: "$16–31M",
    label: "Savings Potential",
    sublabel: "Confirmed floor — scales with BUs",
    animate: false,
  },
  {
    id: "ev",
    display: "$160–310M",
    label: "EBITDA / EV Impact",
    sublabel: "At 10–12× PE exit multiple",
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
  headline: "For the Board, CEO, CFO & CIO — strengths to protect, opportunities to capture",
  situation: {
    label: "THE SITUATION",
    text: "Culligan International is a $3.4B PE-backed water services platform that has executed 300+ acquisitions since 2016, running roughly 50 bolt-on deals per year. That growth engine has delivered exceptional revenue scale — but it has also created a predictable IT problem: spend concentrated in ungoverned software contracts, 25+ fragmented ERP systems, and an organisational structure that gives every regional manager the authority to buy their own tools. Culligan is not an IT overspender. It is an IT mis-spender. The $16–31M savings opportunity does not require cutting investment — it requires redirecting it toward governance, structure, and consolidation.",
  },
  strengths: {
    label: "STRENGTHS",
    sublabel: "What Culligan Is Already Doing Well",
    items: [
      {
        id: "S1",
        title: "Infrastructure Efficiency — The Benchmark Others Aspire To",
        description:
          "Culligan runs its core technology infrastructure leaner than any company in its peer group — and this discipline is proof that governance, when applied, works. Network and compute spend sits at 0.12% of revenue against a peer median of 0.17%. Total infrastructure costs $5.6M — below benchmark across every metric. The same rigour that keeps infrastructure lean needs to be applied to software, applications, and vendor management.",
        highlight: "0.12% of revenue vs. 0.17% median · $5.6M total · Below benchmark on all infrastructure metrics",
      },
      {
        id: "S2",
        title: "Headline IT Spend — Within Benchmark Range",
        tone: "neutral",
        description:
          "At 2.10% of revenue, Culligan's overall IT spend sits within the acceptable benchmark range — neither a red flag nor a competitive advantage. The headline is not the problem; where the money goes is. The $69.2M total is within range of the 2.44% peer median — not low enough to signal under-investment, and not high enough to be a concern. Total IT spend is appropriate; the issue is allocation — heavily concentrated in ungoverned software contracts rather than structural platforms, governance, and consolidation.",
        highlight: "2.10% of revenue · Peer median: 2.44% · Within benchmark range",
      },
      {
        id: "S3",
        title: "M&A Execution Capability — The Engine That Makes IT Reform Urgent and Valuable",
        description:
          "Culligan's ability to execute 50 acquisitions per year is a genuine competitive advantage — and it is precisely this capability that makes IT transformation a strategic priority. The M&A machine has grown Culligan from $400M to $3.4B in under a decade. A standardised integration playbook and consolidated ERP platform transform the M&A machine from a fragmentation engine into a genuine value-creation flywheel.",
        highlight: "300+ acquisitions since 2016 · ~50 bolt-on deals/year · $400M to $3.4B revenue growth",
      },
    ],
  },
  opportunities: {
    label: "OPPORTUNITIES",
    sublabel: "Where Culligan Must Act, In Priority Order",
    items: [
      {
        id: "O1",
        title: "The Software Sprawl — Half the IT Budget Is Unmanaged",
        description:
          "Software costs $34.8M — 1.05% of revenue versus a peer median of 0.36%. That is 3× the benchmark and 50% of the entire IT budget, sitting in 44+ vendor contracts that no central team owns. Industry data shows 51% of enterprise SaaS licences go unused. Applied to Culligan's base, $8–18M may be directly recoverable through a SAM programme before any renegotiation begins.",
        metrics: "$4.2–10.4M confirmed · Up to $18M additional (SaaS waste) · 0–12 months",
      },
      {
        id: "O2",
        title: "The Management Structure — The Root Cause Behind Every Other Problem",
        description:
          "19.9% of IT staff are managers — 81% above the lean industry norm of ~11%. Each manager has the authority to select tools, sign contracts, and retain their own ERP system. Delayering and implementing a global IT operating model with centralised architecture governance is the single change that makes every other saving permanent.",
        metrics: "Survey-led (IT labour survey required) · Est. $3–8M annually · 6–18 months",
      },
      {
        id: "O4",
        title: "The ERP Estate — 25 Systems That Make One Company Impossible to Run",
        description:
          "25+ ERP systems across 40 business units means every consolidated report requires manual reconciliation from 25 different sources. At 50 acquisitions per year with no ERP governance, the estate grows by 5–10 new systems annually. Forrester TEI shows ERP consolidation delivers 106% ROI over three years with 17-month payback.",
        metrics: "$3.8–7.5M annually · 12–36 months · Payback within 17 months (Forrester)",
      },
      {
        id: "O5",
        title: "The Support Model — A Growth Tax That Compounds With Every Deal",
        description:
          "$13.0M is spent across four independent regional IT support teams. Every new acquisition adds support headcount in proportion to users. ~126,000 annual tickets are handled largely manually despite Moveworks (now ServiceNow) already being deployed. Scaling AI deflection to 30–45% would eliminate 38,000–57,000 manual tickets per year.",
        metrics: "$2.0–3.9M annually · 12–24 months · AI deflection quick win in 6 months",
      },
      {
        id: "O6",
        title: "The AI & Automation Upside — Tools Already Paid For, Barely Switched On",
        description:
          "Culligan is not under-investing in AI — it is under-deploying it. Moveworks operates at near-zero deflection against a mature benchmark of 45–65%. Developer copilots are not standardised despite a $1.0–2.0M productivity opportunity. The AI opportunity is $5.7–10.9M across four levers — mostly deployment, not procurement.",
        metrics: "$5.7–10.9M across four AI levers · 0–18 months · Largely deployment, not procurement",
      },
    ],
  },
  conclusion: {
    label: "EXECUTIVE CONCLUSION",
    title: "Culligan is not an IT overspender — it is an IT mis-spender.",
    text: "Three strengths confirm Culligan can run IT lean and scale fast when governance is applied. Six prioritised opportunities show exactly where to redirect investment. The $16–31M confirmed savings — worth $160–370M in enterprise value at current PE exit multiples — is not a cost reduction exercise. It is the structural reform that transforms IT from a fragmentation engine into the platform that powers Culligan's next 300 acquisitions.",
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
        "The IT implication is severe. Every acquisition without a standardized IT integration playbook adds another ERP variant, another software contract, and another regional support FTE to an already fragmented base. The current 25+ ERP estate is not a historical artifact — it is the direct, predictable output of 300 acquisitions with no IT governance enforcement. At 50 deals per year, the estate grows by 5–10 new systems annually without intervention.",
      ],
    },
    {
      label: "PE OWNERSHIP CONTEXT",
      paragraphs: [
        "Culligan is majority-owned by BDT & MSD Partners (since 2021), with Advent International holding a minority stake. The PE ownership structure creates a specific lens through which IT investment decisions should be evaluated: every dollar of EBITDA improvement is worth 10–12× in enterprise value at exit. A $31M IT savings program is a $310–370M EV event. The IT transformation is not a cost center project — it is one of the most capital-efficient value creation levers available to the ownership group.",
      ],
    },
  ],
  callout: {
    label: "THE COMPOUNDING PROBLEM",
    text: "At 50 acquisitions per year, each adding ~1 ERP and ~3–5 ungoverned software contracts, Culligan's IT fragmentation is not a static problem to be solved — it is an accelerating one. The cost of the current ERP estate ($25.1M, 25+ systems) will roughly double within 5 years if no playbook is implemented. The $16–31M savings opportunity is not just a recovery — it is also the prevention of $20–40M in future unnecessary cost.",
  },
};

export const keyFindings = {
  title: "Key Findings vs. Peer Benchmark",
  subtitle: "What each hypothesis area measured, what the numbers show, and what it means for Culligan",
  hypothesisLegend: {
    title: "Hypothesis Legend — What Each Area Means",
    intro:
      "The benchmarking is structured around six hypotheses — specific questions about where Culligan's IT spending might be above or below comparable companies.",
    columns: ["Code", "Hypothesis Name", "High Level Description", "What Was Measured"],
    rows: [
      { code: "H1", name: "AI & Automation", definition: "How effectively is Culligan using AI and automation to handle IT work?", measured: "Service desk automation, developer productivity tools, AIOps, and ticket deflection rates." },
      { code: "H2", name: "Spans & Layers", definition: "Is the IT organisation structured efficiently, or are there too many management layers?", measured: "Management ratio, span of control, FTE headcount per $1B revenue vs. peers." },
      { code: "H3", name: "Infrastructure & Cloud", definition: "Is Culligan spending the right amount on core technology infrastructure?", measured: "Network, compute, data centre, and cloud costs as % of revenue vs. peers." },
      { code: "H4", name: "Application & Platform", definition: "Is Culligan spending too much maintaining too many applications and ERP systems?", measured: "Number of ERP/CRM systems, application spend as % of revenue, rationalisation opportunity." },
      { code: "H5", name: "IT Support & Operating Model", definition: "Is IT delivered efficiently across regions, or are there redundant teams?", measured: "End-user support cost, regional operating model, shared services maturity, offshore mix." },
      { code: "H6", name: "Vendor & Licensing", definition: "Is Culligan getting value from software contracts, or paying for unused licences?", measured: "Software spend as % of revenue, contract governance, licence utilisation, vendor consolidation." },
    ],
    footnote:
      "H1–H6 are the six structured analysis areas from the PwC IT Benchmarking framework. Peer group: Pentair, A. O. Smith, Veralto, Zurn Elkay, and Primo Brands.",
  },
  findingsTable: {
    title: "Key Findings — Quantitative Results & Business Meaning",
    intro:
      "Each hypothesis area with specific numbers from the benchmarking data and a plain-language explanation of what those numbers mean for Culligan's business.",
    columns: ["Hypothesis Area", "The Numbers", "What This Means for Culligan — In Plain Terms"],
    rows: [
      {
        code: "H6",
        name: "Vendor & Licensing",
        sectionId: "hypothesis-h6",
        area: "H6 — Vendor & Licensing",
        status: "RED FLAG",
        statusType: "red",
        numbers: "$34.8M software spend = 1.05% of revenue\nPeer median: 0.36% of revenue\nCulligan is 3× above benchmark\n44+ vendor contracts identified\nSoftware = 50% of total IT budget",
        meaning:
          "Culligan is spending nearly three times what comparable companies spend on software. Half the entire IT budget goes to vendor contracts that nobody centrally manages. The company is almost certainly paying for licences nobody uses, multiple tools that do the same job in different regions, and prices that could be dramatically lower if negotiated as one company.",
      },
      {
        code: "H2",
        name: "Spans & Layers",
        sectionId: "hypothesis-h2",
        area: "H2 — Spans & Layers",
        status: "RED FLAG",
        statusType: "red",
        numbers: "56 of 281 IT staff are managers = 19.9%\nIndustry lean norm: ~11%\nCulligan is 81% above norm\n85 IT staff per $1B revenue\nPeer median: 70.5 per $1B (+21%)",
        meaning:
          "Nearly 1 in 5 IT employees is a manager — almost double the industry norm. Each manager has the authority to buy their own software tools and keep their own ERP system. The management structure is the direct cause of the software and ERP fragmentation visible in every other finding.",
      },
      {
        code: "H4",
        name: "Application & Platform",
        sectionId: "hypothesis-h4",
        area: "H4 — Application & Platform",
        status: "ABOVE MEDIAN",
        statusType: "amber",
        numbers: "$25.1M application spend = 0.76% of revenue\nPeer median: 0.65% of revenue\n25+ ERP systems across 40 business units\nSAP, IFS, Sage, NetSuite, D365, TOTVS — all active\nLargest single cost tower: 36% of IT spend",
        meaning:
          "Culligan has 25+ different financial systems, each acquired through M&A and never consolidated. Every company-wide P&L requires manual gathering from 25 different systems. Leadership cannot get a reliable, real-time view of the business. Every new acquisition makes this worse.",
      },
      {
        code: "H5",
        name: "IT Support & Op Model",
        sectionId: "hypothesis-h5",
        area: "H5 — IT Support & Op Model",
        status: "ABOVE MEDIAN",
        statusType: "amber",
        numbers: "$13.0M end-user support = 19% of IT\nEMEA: 144 support staff · NA: 86 · LATAM: 39 · APAC: 12\n~126,000 IT support tickets per year",
        meaning:
          "IT support is delivered by four completely separate regional teams. When Culligan acquires a new company, it adds IT support staff in proportion to users rather than absorbing them into an existing pool. Support costs grow at the same rate as acquisitions — roughly 50 new companies a year.",
      },
      {
        code: "H3",
        name: "Infrastructure & Cloud",
        sectionId: "hypothesis-h3",
        area: "H3 — Infrastructure & Cloud",
        status: "STRENGTH",
        statusType: "green",
        numbers: "Network spend: 0.12% of revenue\nPeer median: 0.17% of revenue\nTotal infrastructure: $5.6M\nBelow benchmark across all metrics\nFinOps programme: not yet implemented",
        meaning:
          "Infrastructure is the one area where Culligan is genuinely doing better than peers — spending less and running lean. This should be protected. The only gap is cloud spending is not actively optimised (FinOps), which typically recovers 28–35% of cloud costs in year one.",
      },
      {
        code: "H1",
        name: "AI & Automation",
        sectionId: "hypothesis-h1",
        area: "H1 — AI & Automation",
        status: "UNDER-DEPLOYED",
        statusType: "green",
        numbers: "~126,000 IT support tickets per year\nEstimated cost per ticket: ~$22\nAI deflection rate today: ~0%\nMature deployments achieve: 45–65%\nMoveworks deployed — early stage only",
        meaning:
          "Culligan already has Moveworks (now ServiceNow) to handle routine IT requests — but it has barely been switched on. At 126,000 tickets and $22 per ticket, deploying AI properly could automatically handle 40–50% of requests, saving $1–1.5M annually without buying new technology.",
      },
      {
        area: "Overall IT Spend",
        status: "BELOW MEDIAN",
        statusType: "green",
        numbers: "Total IT & Digital spend: $69.2M\nCulligan as % of revenue: 2.10%\nPeer median: 2.44% of revenue\nCovers 20 of 40 business units\nEstimated full baseline: $110–130M",
        meaning:
          "At a headline level, Culligan spends less on IT than comparable companies. However this headline is misleading: the opportunity exists because Culligan mis-spends within that total. Too much goes to ungoverned software and too little to structural investments that would make the whole estate more efficient.",
      },
    ],
  },
  source:
    "Source: PwC IT Cost Benchmarking Analysis — Hypothesis Tracker, Benchmarks Working Set, IT Headcount data. Peer set: Pentair ($4.1B), A.O. Smith ($3.8B), Veralto ($5.2B), Zurn Elkay ($1.6B), Primo Brands ($6.5B).",
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
    { lever: "TOTAL CONFIRMED + UPSIDE", annual: "$24–49M/yr", ebitda: "$24–49M", ev10: "$240–490M", ev12: "$288–588M", confidence: "—", confidenceType: "green", isTotal: true },
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
    { metric: "IT & Digital Spend % Revenue", culligan: "2.10%", peer: "2.44%", comparison: "✅ Below" },
    { metric: "Software % Revenue", culligan: "1.05%", peer: "0.36%", comparison: "🔴 ~3× RED FLAG" },
    { metric: "Application Tower % Revenue", culligan: "0.76%", peer: "0.65%", comparison: "🟡 Above" },
    { metric: "Network % Revenue", culligan: "0.12%", peer: "0.17%", comparison: "✅ Below" },
    { metric: "IT Services % Revenue", culligan: "0.48%", peer: "0.56%", comparison: "✅ In Range" },
    { metric: "Management % of IT Org", culligan: "19.9%", peer: "~11%", comparison: "🔴 +81% RED FLAG" },
    { metric: "IT FTEs per $1B Revenue", culligan: "85", peer: "70.5", comparison: "🟡 +21%" },
    { metric: "AI Ticket Deflection", culligan: "~0%", peer: "45–65% (mature)", comparison: "🔴 Far Below" },
    { metric: "SaaS License Utilization", culligan: "Unknown", peer: "54% avg", comparison: "🟡 Unassessed" },
    { metric: "Offshore Delivery Mix", culligan: "Below norm", peer: "25–35%", comparison: "🟡 Gap Exists" },
    { metric: "M&A IT Integration Playbook", culligan: "None", peer: "Standardized", comparison: "🔴 Missing" },
  ],
  caption:
    "Sources: PwC IT Cost Benchmarking Analysis; Gartner IT Spending 2026; Zylo 2026 SaaS Index; Capstone Partners M&A Valuations Index 2025. Directional; 20 of 40 BUs covered.",
};

export const footer = {
  confidentiality: "CONFIDENTIAL — FOR INTERNAL EXECUTIVE USE ONLY",
  attribution:
    "Based on PwC IT Benchmarking Analysis (June 2026) enhanced with Gartner, Zylo, Forrester, HDI/MetricNet, and independent 2026 industry research",
  copyright: "© 2026 Culligan International Co. All rights reserved.",
  disclaimer:
    "Not for external distribution.",
};
