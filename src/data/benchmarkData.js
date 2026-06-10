export const brand = {
  companyName: "Culligan",
  reportLabel: "IT BENCHMARKING ANALYSIS",
  heroTitle: "Transforming IT for Growth",
  heroSubtitle:
    "Executive Insights, Gap Analysis & Strategic Roadmap · June 2026 · Enhanced Edition · Confidential",
  heroAttribution:
    "Based on PwC IT Benchmarking Analysis · Enhanced with Gartner, Zylo, Forrester, HDI/MetricNet 2026 Industry Data",
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
    sublabel: "$34.8M = 50% of IT budget",
    animate: false,
  },
  {
    id: "savings",
    display: "$16–31M",
    label: "Annual Savings Potential",
    sublabel: "22–45% reduction to benchmark",
    animate: false,
  },
  {
    id: "management",
    value: 19.9,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "Management Ratio",
    sublabel: "+81% above lean ~11% norm",
    animate: true,
  },
];

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "baseline", label: "Baseline" },
  { id: "findings", label: "Findings" },
  { id: "savings", label: "Savings" },
  { id: "insights", label: "Insights" },
  { id: "roadmap", label: "Roadmap" },
  { id: "reference", label: "Reference" },
];

export const executiveSummary = {
  eyebrow: "EXECUTIVE SUMMARY",
  headline: "The strategic picture — what it means and what Culligan must do",
  paragraphs: [
    "Culligan International's IT & Digital spend of $69.2M (2.10% of revenue) is lean relative to its water-sector peers — a finding that is simultaneously reassuring and misleading. The headline efficiency masks two confirmed structural problems and at least three significant analytical blind spots that, together, make the current $16–31M savings estimate a conservative floor.",
    "The two confirmed problems are software and licensing running at nearly 3× the peer median, and an IT organization so top-heavy that it systematically generates the fragmentation it cannot govern away. These are not independent issues — the org structure is the root cause of the software sprawl, and fixing the software without fixing the org will not produce durable savings. The three blind spots — cybersecurity posture, Run/Grow/Transform investment mix, and offshore delivery opportunity — each represent material financial exposure or untapped savings that this report now surfaces.",
    "The strategic imperative is sequencing. The vendor rationalization program is the year-one quick win that funds the transformation and tests Culligan's ability to enforce global standards. Organizational delayering removes the structural cause of fragmentation and makes all other savings permanent. ERP consolidation is the multi-year anchor that determines whether Culligan can operate and report as one company. A newly identified fourth priority — quantifying and right-sizing the cybersecurity investment — must be initiated in parallel, as it is both a risk exposure and a potential spending gap.",
  ],
  callout: {
    label: "BOTTOM LINE FOR LEADERSHIP",
    text: "Culligan is not a broad IT overspender — but it is structurally mis-spending. The $16–31M savings opportunity is a confirmed floor, not a ceiling. Enhanced 2026 industry data suggests SaaS waste alone could add $8–18M to the recoverable pool, and AI automation economics have strengthened materially since the original analysis. Fix the vendors. Flatten the org. Consolidate the ERPs. Quantify the security exposure. Done in sequence, these four moves transform IT from a cost that scales with complexity into a platform for Culligan's next stage of growth.",
  },
};

export const spendBaseline = {
  title: "IT Spend Baseline & Tower Analysis",
  subtitle: "Where the $69.2M sits — preliminary TBM allocation across 20 of 40 in-scope BUs",
  intro:
    "Two structural facts dominate the picture: software is the single largest cost category at $34.8M (50% of total), and spend is highly concentrated — Corporate alone accounts for $21M and the top five BUs represent ~$46.5M (67% of the base).",
  columns: ["TBM Tower", "Spend ($M)", "% of IT", "vs. Peer Benchmark", "Status"],
  rows: [
    { tower: "Application / Platform", spend: "$25.1M", pct: "36%", benchmark: "0.76% vs 0.65% median", status: "ABOVE MEDIAN", statusType: "amber" },
    { tower: "Software (within towers)", spend: "$34.8M", pct: "50%", benchmark: "1.05% vs 0.36% median", status: "3× MEDIAN", statusType: "red" },
    { tower: "IT Services / Delivery", spend: "$15.7M", pct: "23%", benchmark: "0.48% vs 0.56% median", status: "IN RANGE", statusType: "green" },
    { tower: "End User Support", spend: "$13.0M", pct: "19%", benchmark: "Not directly benchmarked", status: "FRAGMENTED", statusType: "amber" },
    { tower: "Cloud & Infrastructure", spend: "$7.0M", pct: "10%", benchmark: "Below peer median", status: "AT/BELOW", statusType: "green" },
    { tower: "Network", spend: "$4.0M", pct: "6%", benchmark: "0.12% vs 0.17% median", status: "BELOW", statusType: "green" },
    { tower: "Compute", spend: "$1.6M", pct: "2%", benchmark: "Below peer median", status: "LEAN", statusType: "green" },
  ],
  note: "Software ($34.8M) is a cross-cutting category spanning multiple TBM towers. Tower mapping is preliminary pending validation workshops. Source: PwC Hypothesis Tracker, Categorized Spend Breakdown pt2.",
  callout: {
    label: "BU COVERAGE & SPEND CONCENTRATION",
    text: "The top-5 BU concentration (67% of spend) has an important governance implication: a limited number of targeted levers can reach most of the cost base. Corporate ($21M alone) represents a natural starting point for vendor rationalization. Italy (9 entities including Blupura, Gasmarine, Steiel, Think Water) remains the most material gap. Proportional extrapolation suggests a fully-covered IT spend of approximately $110–130M across 40 BUs.",
  },
};

export const keyFindings = {
  title: "Key Findings vs. Peer Benchmark",
  subtitle:
    "Six hypothesis areas — results, root causes, and implications across 20 business units",
  columns: ["Hypothesis Area", "Key Finding", "vs. Benchmark"],
  rows: [
    {
      area: "Vendor & Licensing (H6)",
      finding:
        "Software $34.8M = 1.05% rev vs. 0.36% peer median (~3×). 50% of all IT spend in 44+ ungoverned contracts. Ghost users and over-tiering likely material.",
      status: "RED FLAG",
      statusType: "red",
    },
    {
      area: "Spans & Layers (H2)",
      finding:
        "19.9% of 281 IT FTEs are managers — 81% above lean ~11% norm. 85 FTEs/$1B vs. 70.5 median (+21%). M&A added regional leadership layers never consolidated.",
      status: "RED FLAG",
      statusType: "red",
    },
    {
      area: "Application / Platform (H4)",
      finding:
        "25+ ERPs across 40 BUs. $25.1M = 0.76% rev vs. 0.65% median. Largest TBM tower at 36% of IT. No common platform template.",
      status: "ABOVE MEDIAN",
      statusType: "amber",
    },
    {
      area: "IT Support & Op Model (H5)",
      finding:
        "$13.0M across 4 independent regional models (EMEA 144 / NA 86 / LATAM 39 / APAC 12 FTEs). No shared-services layer. Cost scales linearly with acquisitions.",
      status: "ABOVE MEDIAN / FRAGMENTED",
      statusType: "amber",
    },
    {
      area: "Infrastructure & Cloud (H3)",
      finding:
        "Network 0.12% rev vs. 0.17% peer median. Total infra $5.6M — lean and efficient. Absence of FinOps means some cloud waste likely.",
      status: "AT/BELOW MEDIAN",
      statusType: "green",
    },
    {
      area: "AI & Automation (H1)",
      finding:
        "~126K tickets/year handled largely manually. Moveworks deployed but early-stage (now ServiceNow). Spend in range — capacity constraint, not overspend.",
      status: "IN RANGE / UNDER-DEPLOYED",
      statusType: "green",
    },
    {
      area: "Overall IT Spend",
      finding:
        "$69.2M = 2.10% rev vs. 2.44% peer median. Not a broad overspender — savings are surgical and concentrated.",
      status: "BELOW MEDIAN",
      statusType: "green",
    },
  ],
  source:
    "Source: PwC IT Cost Benchmarking Analysis. Peer set: Pentair, A. O. Smith, Veralto, Zurn Elkay, Primo Brands.",
};

export const industryContext = {
  title: "Industry Context & External Benchmarks",
  subtitle:
    "2026 market data from Gartner, Zylo, Forrester, HDI/MetricNet enriching the PwC analysis",
  columns: ["Metric", "Industry Benchmark", "Culligan Implication", "Source"],
  rows: [
    { metric: "Global IT spend growth (2026)", benchmark: "13.5% YoY — $6.31T total", implication: "Below-average growth profile; prioritize reallocation over growth", source: "Gartner, April 2026" },
    { metric: "SaaS license waste rate", benchmark: "51% of licenses unused; 25–30% underutilized", implication: "$34.8M software base implies $8–18M recoverable waste at industry average", source: "Zylo 2026 SaaS Index" },
    { metric: "AI ticket deflection (mature)", benchmark: "45–65% containment at 12-month maturity", implication: "Culligan at near 0% with 126K tickets — 30–45% target is conservative", source: "servicedeskagents.com, April 2026" },
    { metric: "ERP consolidation ROI", benchmark: "Average 52% ROI; 106% over 3 years (manufacturing)", implication: "25+ ERP estate makes Culligan a strong consolidation candidate", source: "ERP Research 2026; Forrester TEI" },
    { metric: "ERP consolidation savings", benchmark: "15–30% process efficiency; up to 20% org rationalization", implication: "On $25.1M application tower, 15–20% = $3.8–5.0M steady-state", source: "Liberty Advisor Group 2025" },
    { metric: "Cybersecurity % of IT budget", benchmark: "8–12% enterprise norm; 15–20% manufacturing", implication: "Culligan's cybersecurity investment is unquantified — critical gap", source: "Gartner/Elisity 2026" },
    { metric: "Cost per IT support ticket", benchmark: "HDI/MetricNet: $6–$40+; NA median ~$22", implication: "126K tickets × $22 = $2.8M addressable; 40% deflection recovers ~$1.1M", source: "HDI/MetricNet 2026" },
    { metric: "Offshore delivery mix (peers)", benchmark: "25–35% offshore mix for $3–5B revenue companies", implication: "Culligan's offshore mix below peer norm — $1–3M arbitrage unquantified", source: "Industry norm / PwC" },
  ],
  callout: {
    label: "KEY IMPLICATION FROM INDUSTRY CONTEXT",
    text: "The industry data materially strengthens two savings hypotheses. On software: with 51% of enterprise SaaS licenses unused industry-wide and Culligan's $34.8M base entirely ungoverned, the recoverable pool may be $8–18M higher than the PwC H6 range alone. On AI: mature Moveworks deployments achieve 45–65% ticket containment — Culligan's 30–45% target is conservative, not aggressive.",
  },
};

export const gapAnalysis = {
  title: "Gap Analysis",
  subtitle: "What is absent or partially covered in the current benchmarking data",
  columns: ["Gap Area", "Status", "Detail & Why It Matters", "Priority"],
  rows: [
    { area: "Cybersecurity Posture", status: "ABSENT", detail: "No cybersecurity spend breakdown. With Gartner projecting $240B global security spend in 2026 and manufacturing seeing highest budget growth (90–95% increasing), Culligan's security investment vs. 8–12% IT norm is unknown.", priority: "HIGH", priorityType: "red" },
    { area: "FinOps / Cloud Governance", status: "PARTIAL", detail: "Infrastructure is lean but FinOps maturity unassessed. Industry benchmark: 28–35% of cloud spend recoverable through FinOps in year one.", priority: "MEDIUM", priorityType: "amber" },
    { area: "IT Run vs. Grow vs. Transform", status: "ABSENT", detail: "$69.2M baseline does not segment Run/Grow/Transform. Industry norm: 65% Run / 20% Grow / 15% Transform. Culligan likely skewed heavily to Run given ERP fragmentation.", priority: "HIGH", priorityType: "red" },
    { area: "Offshore / Nearshore Delivery Mix", status: "PARTIAL", detail: "Limited offshore mix noted but no percentage or cost-per-FTE comparison. Peers achieve 25–35% offshore mix — $1–3M labor arbitrage unquantified.", priority: "MEDIUM", priorityType: "amber" },
    { area: "IT Vendor Concentration Risk", status: "ABSENT", detail: "44 contracts identified but no top-10 vendor concentration analysis, dependency risk, or renewal calendar.", priority: "MEDIUM", priorityType: "amber" },
    { area: "Digital / Innovation Investment", status: "ABSENT", detail: "No data on IT spend allocated to digital transformation or innovation. Peers invest 15–25% of IT budgets in growth/transform initiatives.", priority: "MEDIUM", priorityType: "amber" },
    { area: "IT Service Catalog Maturity", status: "ABSENT", detail: "No ITSM process maturity or service catalog assessment. Regional fragmentation makes standardization a prerequisite for shared-services.", priority: "LOW", priorityType: "green" },
    { area: "Peer Revenue Growth Correlation", status: "ABSENT", detail: "Benchmarking compares spend levels but not investment trajectory. Context for Culligan's M&A-driven growth strategy.", priority: "LOW", priorityType: "green" },
  ],
  callout: {
    label: "MOST CRITICAL GAP — CYBERSECURITY",
    text: "The complete absence of cybersecurity spend data is the single most important gap to close. With Gartner projecting $240B in global security spending in 2026 (up 12.5%) and manufacturing companies seeing the highest budget growth of any sector, Culligan's security investment could be either a hidden exposure or a significant undisclosed spend pocket — either scenario has material implications for the $69.2M baseline and risk posture across 100+ countries.",
  },
};

export const statusBadgeStyles = {
  red: "bg-red-100 text-culligan-red",
  amber: "bg-amber-100 text-culligan-amber",
  green: "bg-emerald-100 text-culligan-green",
};

export const savingsOpportunity = {
  title: "Savings Opportunity — Enhanced View",
  subtitle:
    "Revised ranges incorporating 2026 industry data and newly identified gaps. Figures represent a floor.",
  chartData: [
    { name: "H6 · Vendor & Licensing", low: 4.2, high: 10.4 },
    { name: "H1 · AI & Automation", low: 4.7, high: 7.9 },
    { name: "H4 · Application / ERP", low: 3.8, high: 7.5 },
    { name: "H5 · IT Support", low: 2.0, high: 3.9 },
    { name: "H3 · Infrastructure", low: 0.8, high: 1.7 },
  ],
  totalCallout: {
    amount: "$16–31M / year",
    subtext: "Confirmed floor from six PwC hypothesis areas",
  },
  enhancedCallout: {
    label: "REVISED BOTTOM-LINE SAVINGS RANGE",
    text: "Confirmed savings from the six PwC hypothesis areas: $16–31M/year. Additional identified opportunity from SaaS waste recovery: $8–18M (to validate). Combined potential: $24–49M in annual savings — equal to 35–71% of the current IT cost base. When the remaining 20 BUs are included, the proportional savings scale accordingly.",
  },
  tableColumns: ["Area", "Savings Range", "Time Horizon", "Priority"],
  tableRows: [
    { area: "H6 · Vendor & Licensing", range: "$4.2M – $10.4M (+ ~$8–18M SaaS waste to validate)", horizon: "0–12 months", priority: "1 — IMMEDIATE", priorityType: "red" },
    { area: "H1 · AI & Automation", range: "$4.7M – $7.9M", horizon: "6–18 months", priority: "2 — NEAR-TERM", priorityType: "amber" },
    { area: "H4 · Application / ERP", range: "$3.8M – $7.5M", horizon: "12–36 months", priority: "3 — MEDIUM-TERM", priorityType: "amber" },
    { area: "H5 · IT Support & Op Model", range: "$2.0M – $3.9M", horizon: "12–24 months", priority: "4 — MEDIUM-TERM", priorityType: "amber" },
    { area: "H3 · Infrastructure & Cloud", range: "$0.8M – $1.7M", horizon: "12–24 months", priority: "5 — OPPORTUNISTIC", priorityType: "green" },
    { area: "H2 · Spans & Layers", range: "Survey-led (TBD)", horizon: "6–18 months", priority: "2 — NEAR-TERM", priorityType: "red" },
    { area: "NEW · Cybersecurity Gap", range: "Investment Required", horizon: "Immediate", priority: "CRITICAL — ASSESS", priorityType: "red" },
  ],
  note: "H6 additional row reflects potential SaaS waste recovery (51% unused licenses applied to $34.8M base) — requires formal SAM assessment. Cybersecurity flagged as 'Investment Required' because current spend level is unknown.",
};

export const strategicInsights = {
  title: "Strategic Insights & Required Actions",
  subtitle: "Seven insights — each with observation, implication, and mandatory action",
  items: [
    {
      id: 1,
      title: "Software & Licensing: The Quick Win That Funds and Proves the Transformation",
      borderColor: "#C0392B",
      sections: {
        observation:
          "Software spend is $34.8M — 1.05% of revenue vs. 0.36% peer median (~3×), representing 50% of all IT spend. 44 vendor contracts identified; none centrally governed. 2026 industry data: 51% of enterprise SaaS licenses are unused industry-wide. Applied to Culligan's base, this implies $8–18M may be directly recoverable through governance alone — on top of the H6 savings range.",
        businessImplication:
          "Half of Culligan's IT cost base sits in contracts no single team owns globally. The absence of vendor governance is not a procurement failure — it is a governance failure that compounds with every acquisition. Each new BU adds contracts. The 3× median is the mathematical outcome of that organizational design.",
        requiredAction:
          "Launch a SAM + vendor rationalization program immediately. Step 1: full license audit across 44+ contracts — ghost users, over-tiered licenses, duplicate tools. Step 2: consolidate overlapping applications. Step 3: renegotiate top-10 vendor EAs using group-wide volume leverage. Target: $4.2M–$10.4M in 12 months. Upside from SaaS waste recovery (up to $18M additional) makes this the highest-ROI action in the portfolio.",
      },
    },
    {
      id: 2,
      title: "Organizational Structure: The Root Cause That Unlocks All Other Savings",
      borderColor: "#C0392B",
      sections: {
        observation:
          "56 of 281 IT FTEs (19.9%) hold management roles — 81% above the lean ~11% industry norm. Headcount at 85 FTEs/$1B vs. 70.5 median. Regional M&A added leadership layers in EMEA, NA, LATAM, and APAC that were never consolidated. The H2 dollar value is unquantified pending the IT labor survey.",
        businessImplication:
          "Too many managers — each empowered to make local tool, vendor, and ERP choices — is the structural cause of software fragmentation (H6), application sprawl (H4), and support model duplication (H5). The org is not a symptom; it is the disease. Every savings program that does not address org structure risks recreating fragmentation within 3–5 years after M&A resumes.",
        requiredAction:
          "Commission the IT labor survey within 60 days to quantify delayering with compensation data. In parallel: design a global IT operating model with unified architecture governance reporting to the CIO. Target management ratio of 12–13% (from 19.9%). Implement global vendor and technology approval gates. This is the precondition for all other savings becoming permanent.",
      },
    },
    {
      id: 3,
      title: "ERP Fragmentation: 25 Versions of the Truth That Make One Company Impossible",
      borderColor: "#E67E22",
      sections: {
        observation:
          "Application tower is $25.1M — 36% of IT, 0.76% revenue vs. 0.65% median. 25+ ERPs across 40 BUs: SAP, IFS, Sage, NetSuite, D365, TOTVS. 2026 industry data: ERP consolidation delivers 52% ROI, 15–30% process efficiency gains, and up to 20% org rationalization savings. Forrester TEI found $5.8M in legacy system elimination with 17-month payback.",
        businessImplication:
          "25+ ERPs means 25 sets of financial data requiring manual reconciliation. Consolidated P&L, supply chain optimization, and customer reporting are structurally impossible. Every future acquisition inherits this complexity — making Culligan's growth-by-acquisition model increasingly expensive. Leadership cannot run the company as one entity.",
        requiredAction:
          "Begin ERP consolidation business case immediately. 90-day actions: (1) formal application portfolio inventory, (2) evaluate platform options (consolidation vs. federated data model), (3) define first-migration BU cluster (North America recommended). Year-one goal is architectural commitment and governance enforcement to stop the estate from growing.",
      },
    },
    {
      id: 4,
      title: "IT Support Operating Model: A Growth Tax That Compounds with Every Acquisition",
      borderColor: "#E67E22",
      sections: {
        observation:
          "End-user support is $13.0M — second-largest tower at 19% of IT. Four independent regional orgs: EMEA (144 FTEs), NA (86), LATAM (39), APAC (12). ~126K annual tickets handled largely manually. HDI/MetricNet 2026: North American enterprise median cost per ticket is $22.",
        businessImplication:
          "At $22 × 126K tickets = ~$2.8M addressable support cost annually — all at risk of growing linearly as Culligan acquires. Without shared-services, every acquisition adds FTEs in proportion to users. Four regional models represent IT's version of the ERP problem: local replication instead of global leverage.",
        requiredAction:
          "Design global shared-services operating model for end-user support as part of H2 work. Scale Moveworks (now within ServiceNow) to target 30–45% L1 deflection — $1.1M–$1.3M recoverable at $22/ticket. Evaluate offshore delivery mix. Unify ITSM toolchain. Target: $2.0M–$3.9M recurring savings plus elimination of linear scaling.",
      },
    },
    {
      id: 5,
      title: "Cybersecurity: A Material Blind Spot in the Current Analysis",
      borderColor: "#C0392B",
      sections: {
        observation:
          "No cybersecurity spend data in the benchmarking. Gartner projects $240B global security spending in 2026 (up 12.5%). Enterprise norm is 8–12% of IT budget, rising to 15–20% for manufacturing (OT/ICS exposure). Applied to $69.2M base: expected range is $5.5M–$13.8M. On fully-covered ~$120M base: $9.6M–$24M.",
        businessImplication:
          "Culligan operates in 100+ countries with OT/ICS security requirements across water treatment infrastructure. Either security spend is buried in other categories (making the baseline incomplete) or Culligan is materially under-invested at a time when AI-enabled attacks increased 72% in 2025.",
        requiredAction:
          "Immediately commission a cybersecurity spend audit to (1) locate all security-related spend within the $69.2M baseline, (2) benchmark against 8–12% IT norm and 15–20% manufacturing norm, and (3) identify OT/ICS coverage gaps. Complete before the trusted baseline is finalized. Do not approve the IT investment roadmap without understanding security posture.",
      },
    },
    {
      id: 6,
      title: "Infrastructure & AI: A Proven Discipline That Can Be Exported to the Rest of IT",
      borderColor: "#1E7A46",
      sections: {
        observation:
          "Network at 0.12% of revenue is below 0.17% peer median. Total infrastructure is $5.6M — lean and efficient. Moveworks deployed but early-stage, now acquired by ServiceNow (December 2025). AI deflection benchmarks show 45–65% containment in mature deployments — Culligan's 30–45% year-one target is achievable and conservative.",
        businessImplication:
          "Infrastructure discipline proves the organization can run lean when governance is applied. The AI automation opportunity is material — 126K tickets at $22/ticket implies $2.8M addressable cost. Moveworks' integration into ServiceNow creates a path to broader workflow automation beyond the service desk.",
        requiredAction:
          "Protect infrastructure investment discipline — do not re-open this cost base. Scale Moveworks/ServiceNow Now Assist to 30–45% L1 containment. Standardize developer copilots (GitHub Copilot or Cursor) for $1.0–$2.0M productivity savings. Pilot AIOps. Use AI governance as a template for vendor and application management rigor.",
      },
    },
    {
      id: 7,
      title: "IT Investment Mix: Over-Indexed to Run, Under-Indexed to Transform",
      borderColor: "#1E7A46",
      sections: {
        observation:
          "The benchmarking does not segment IT spend into Run/Grow/Transform. Based on org profile, ERP fragmentation, and four independent support models, Culligan's estimated Run spend is 75–80% — significantly above the 60–65% peer norm for companies of this scale.",
        businessImplication:
          "When 75–80% of IT budget sustains fragmented legacy systems, only 20–25% is available for growth and transformation investments enabling M&A strategy and digital customer experience. The ERP estate, manual support, and ungoverned software are all 'Run tax' — consuming capacity that should build Culligan's next competitive capability.",
        requiredAction:
          "As part of the trusted baseline exercise, categorize $69.2M into Run/Grow/Transform. Set target mix: 65% Run / 20% Grow / 15% Transform. Require every IT investment decision to improve the mix. Use H6 savings to fund the shift — dollars freed from ungoverned software should be re-invested in transformation capability, not returned to overhead.",
      },
    },
  ],
  sectionLabels: {
    observation: "OBSERVATION",
    businessImplication: "BUSINESS IMPLICATION",
    requiredAction: "REQUIRED ACTION",
  },
};

export const aiDeepDive = {
  title: "AI & Automation Opportunity — Deep Dive",
  subtitle: "Expanded savings sizing using 2026 industry benchmarks",
  intro:
    "The original H1 analysis sized AI savings at $4.7M–$7.9M. This section re-examines that range using 2026 data on AI service desk performance, developer productivity, and AIOps — and identifies a fourth lever (AI-driven license management) not in the original analysis.",
  columns: ["AI Lever", "Derivation Basis", "Low", "High", "Horizon", "Readiness"],
  rows: [
    { lever: "AI Service Desk (Moveworks scale-up)", basis: "30–45% × L1 support; 126K tickets × $22/ticket", low: "$2.4M", high: "$4.0M", horizon: "6–12 months", readiness: "Moveworks deployed — scale now" },
    { lever: "Developer Copilots (GitHub / Cursor)", basis: "10–35% × developer labor ($9.7M delivery tower)", low: "$1.0M", high: "$2.0M", horizon: "3–6 months", readiness: "Quick to deploy — high confidence" },
    { lever: "AIOps + Intelligent Doc Processing", basis: "Operations & back-office labor automation", low: "$1.3M", high: "$1.9M", horizon: "12–18 months", readiness: "Requires process standardization" },
    { lever: "AI-Driven License Management", basis: "51% SaaS unused; AI SAM recovers 15–25% faster", low: "$1.0M", high: "$3.0M", horizon: "0–6 months", readiness: "High confidence — direct to savings" },
    { lever: "TOTAL AI Opportunity", basis: "Across all four levers (additive)", low: "$5.7M", high: "$10.9M", horizon: "0–18 months", readiness: "Staged deployment", isTotal: true },
  ],
  callout: {
    label: "SERVICENOW ACQUISITION OF MOVEWORKS",
    text: "ServiceNow acquired Moveworks in December 2025 for $2.85 billion. If Culligan runs ServiceNow as its primary ITSM platform, Moveworks' agentic capabilities integrate into Now Assist — a clear path to scaled deployment. The 126K annual ticket volume at $22 median cost-per-ticket is the opportunity. A 40% deflection rate by month 12 recovers approximately $1.1M annually — before ticket volume growth from the 20 outstanding BUs.",
  },
};

export const investmentMix = {
  title: "IT Investment Mix: Run / Grow / Transform",
  subtitle: "Structural diagnosis of how Culligan allocates IT spend",
  intro:
    "Run covers keeping systems operational; Grow covers new business capabilities; Transform covers structural change. Benchmarking this split reveals whether IT is sustainably investing in the future or trapped sustaining the past.",
  columns: ["Category", "Culligan (Est.)", "Peer Norm", "Gap", "Implication"],
  rows: [
    { category: "Run (Keep lights on)", culligan: "Est. ~75–80%", peer: "~60–65%", gap: "10–15pp above norm", implication: "IT is primarily sustaining fragmented legacy — not enabling growth" },
    { category: "Grow (Enable business growth)", culligan: "Est. ~15–18%", peer: "~20–25%", gap: "Below norm", implication: "Underfunding growth capabilities; acquisition integration competes with BAU" },
    { category: "Transform (Drive change)", culligan: "Est. ~5–7%", peer: "~12–15%", gap: "Significantly below", implication: "Transformation investment insufficient to close ERP and org gaps" },
  ],
  note: "Culligan estimates are directional, derived from benchmarking profile. Formal Run/Grow/Transform categorization should be conducted as part of trusted baseline work.",
  callout: {
    label: "STRATEGIC IMPLICATION",
    text: "An IT organization spending 75–80% on Run is structurally incapable of transformation. Every dollar consumed by 25+ ERPs, four regional service desks, and ungoverned software is a dollar not available for digital capability or M&A integration. The $16–31M savings program is the mechanism to shift from a Run-heavy portfolio to one that funds its strategic agenda. Target by Year 3: 65% Run / 20% Grow / 15% Transform.",
  },
};

export const roadmap = {
  title: "3-Phase Transformation Roadmap",
  subtitle: "Prioritized actions across 0–36 months — sequenced by dependency and speed-to-value",
  phases: [
    {
      phase: "PHASE 1: Quick Wins",
      horizon: "0–12 Months",
      savings: "$4.2–10.4M/yr",
      actions: [
        "Launch SAM program — audit all 44+ software contracts, eliminate ghost users",
        "Right-tier licenses; consolidate overlapping tools across BUs",
        "Renegotiate top-10 vendor EAs using consolidated volume leverage",
        "Close BU data gap — land Italy (9 entities), Canada, CWC, China, EMEA OEM",
        "Commission IT labor survey to size H2 (Spans & Layers) opportunity",
        "Validate TBM tower mapping in CIO office workshops",
        "Quantify cybersecurity spend vs. 8–12% IT budget norm",
      ],
    },
    {
      phase: "PHASE 2: Structural Reform",
      horizon: "6–24 Months",
      savings: "$6.7–11.8M/yr",
      actions: [
        "Execute org delayering — reduce management ratio from 19.9% toward 12–13%",
        "Design and stand up global IT shared-services model for end-user support",
        "Scale Moveworks to full production; target 30–45% L1 ticket deflection",
        "Standardize developer copilots (GitHub Copilot / Cursor) across dev population",
        "Implement FinOps program to recover 28–35% cloud waste",
        "Rationalize end-user support to a single unified ITSM toolchain",
        "Define offshore delivery strategy; increase mix toward 25–35% peer norm",
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
        "Retire duplicate and low-value applications; target 20–30% app rationalization",
        "Implement architecture governance function to enforce global standards post-delayering",
        "Deploy AIOps to reduce infrastructure incidents and back-office labor costs",
        "Establish IT investment split target: 60% Run / 25% Grow / 15% Transform",
      ],
    },
  ],
  note: "Phase 1 and Phase 2 can run concurrently for independent workstreams. Phase 3 ERP work must not begin until Phase 2 org governance is in place. Cybersecurity assessment runs in parallel with all phases.",
};

export const assumptions = {
  title: "Key Assumptions",
  subtitle: "Underpinning assumptions for all findings and savings estimates",
  rows: [
    { category: "Peer Group", detail: "Pentair ($4.1B), A. O. Smith ($3.8B), Veralto ($5.2B), Zurn Elkay ($1.6B), Primo Brands ($6.5B) — water technology companies within 0.5–2× Culligan's revenue." },
    { category: "Data Currency", detail: "Benchmarking data reflects FY2025/2026. Industry context from Zylo 2026 SaaS Index, Gartner, Forrester TEI, servicedeskagents.com (verified April–June 2026)." },
    { category: "Spend Coverage", detail: "20 of 40 in-scope BUs, $69.2M IT & Digital spend. Five clusters outstanding: Italy (9 entities), Canada, CWC, China, EMEA OEM. Full baseline may be $110–130M." },
    { category: "Revenue Denominator", detail: "~$3.3–$3.4B revenue estimate requiring confirmation. A $200M swing moves spend ratios by ~6 basis points." },
    { category: "TBM Tower Mapping", detail: "Tower allocations preliminary pending validation. Software ($34.8M) is a cross-cutting overlay, not a separate tower." },
    { category: "Run/Grow/Transform", detail: "Split for Culligan is estimated based on org profile and M&A history — directional, not measured. Formal categorization recommended." },
    { category: "AI Deflection", detail: "Uses 'full AI resolution' definition (72-hour no-human-escalation). 126K tickets × $22 × 30–45% deflection rate. Source: HDI/MetricNet 2026." },
  ],
};

export const limitations = {
  title: "Dependencies & Limitations",
  subtitle: "Factors affecting validity, completeness, or applicability of findings",
  columns: ["Dependency / Limitation", "Impact", "Detail & Mitigation"],
  rows: [
    { item: "Incomplete BU Coverage", impact: "HIGH", detail: "Italy (9 entities) is most material gap. Baseline may be understated 40–80%. All savings ranges are floors.", impactType: "red" },
    { item: "Cybersecurity Data Absent", impact: "HIGH", detail: "No security spend data available. Culligan's security posture unknown — potential investment gap or hidden spend not captured in $69.2M.", impactType: "red" },
    { item: "TBM Mapping Unvalidated", impact: "MEDIUM", detail: "Tower-level allocations preliminary. Cross-tower comparisons may shift after CIO validation workshops.", impactType: "amber" },
    { item: "ERP Count Estimated", impact: "MEDIUM", detail: "'25+ ERP' based on SME input, not formal inventory. Actual count and consolidation savings may vary.", impactType: "amber" },
    { item: "M&A Pipeline", impact: "MEDIUM", detail: "Snapshot does not reflect potential acquisitions. Each new acquisition adds complexity — reinforcing urgency of structural reform.", impactType: "amber" },
    { item: "Moveworks Acquisition Impact", impact: "MEDIUM", detail: "ServiceNow acquired Moveworks December 2025. Long-term AI service desk strategy may need re-evaluation if ITSM is not ServiceNow.", impactType: "amber" },
    { item: "IT Labor Survey Pending", impact: "MEDIUM", detail: "H2 savings unquantified pending labor survey. 19.9% management rate confirmed; dollar value requires compensation data.", impactType: "amber" },
    { item: "Offshore Mix Unquantified", impact: "MEDIUM", detail: "Potential $1–3M labor arbitrage is directional based on peer norms, not Culligan-specific analysis.", impactType: "amber" },
    { item: "SaaS Waste Estimate", impact: "LOW-MEDIUM", detail: "$8–18M estimate applies industry averages to $34.8M base. Actual waste requires formal SAM assessment.", impactType: "green" },
  ],
};

export const benchmarkTable = {
  title: "Benchmark Reference Summary",
  subtitle: "Full metrics table — Culligan vs. peer quartiles and 2026 industry norms",
  columns: ["Metric", "Culligan", "Peer Median", "Top Quartile", "vs. Benchmark"],
  rows: [
    { metric: "IT & Digital Spend % Revenue", culligan: "2.10%", peer: "2.44%", top: "—", comparison: "✅ Below" },
    { metric: "Software % Revenue", culligan: "1.05%", peer: "0.36%", top: "—", comparison: "🔴 ~3×" },
    { metric: "Application Tower % Revenue", culligan: "0.76%", peer: "0.65%", top: "—", comparison: "🟡 Above" },
    { metric: "Network % Revenue", culligan: "0.12%", peer: "0.17%", top: "—", comparison: "✅ Below" },
    { metric: "IT Services % Revenue", culligan: "0.48%", peer: "0.56%", top: "0.86%", comparison: "✅ In Range" },
    { metric: "Management % of IT Org", culligan: "19.9%", peer: "~11%", top: "—", comparison: "🔴 +81%" },
    { metric: "IT FTEs per $1B Revenue", culligan: "85", peer: "70.5", top: "—", comparison: "🟡 +21%" },
    { metric: "Annual IT Support Tickets", culligan: "~126K", peer: "—", top: "—", comparison: "🟡 Capacity Risk" },
    { metric: "AI Ticket Deflection Rate", culligan: "~0% (early stage)", peer: "45–65% (mature)", top: "—", comparison: "🔴 Far Below" },
    { metric: "SaaS License Utilization", culligan: "Unknown", peer: "~54% avg", top: "90%+ (best)", comparison: "🟡 Unassessed" },
    { metric: "Cybersecurity % of IT Budget", culligan: "Unknown", peer: "10–12%", top: "15–20% (mfg)", comparison: "🔴 Unquantified" },
    { metric: "Offshore Delivery Mix", culligan: "Below norm", peer: "25–35%", top: "—", comparison: "🟡 Gap Exists" },
  ],
  caption:
    "Sources: PwC IT Cost Benchmarking Analysis; Gartner IT Spending 2026; Zylo 2026 SaaS Index; HDI/MetricNet 2026. Directional; 20 of 40 BUs covered.",
};

export const footer = {
  confidentiality: "CONFIDENTIAL — FOR INTERNAL EXECUTIVE USE ONLY",
  attribution:
    "Based on PwC IT Benchmarking Analysis (June 2026) enhanced with Gartner, Zylo, Forrester, HDI/MetricNet, and independent 2026 industry research",
  copyright: "© 2026 Culligan International Co. All rights reserved.",
  disclaimer:
    "All findings are directional; 20 of 40 in-scope BUs reflected. Not for external distribution.",
};
