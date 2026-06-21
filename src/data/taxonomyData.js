import { regionCostData, corporateCostData } from "./buCostData";

export const taxonomyBrand = {
  title: "IT Operating Model",
  subtitle: "Capability Model, Current State Analysis & IT Cost Savings Case",
  source: "Spend Cube + March 2026 P&L · June 2026",
};

export const taxonomyKpis = [
  { value: "$69M", label: "IT & Digital Spend" },
  { value: "~$170M", label: "Est. total IT cost" },
  { value: "$20–44M", label: "Savings opportunity" },
  { value: "24", label: "Business units" },
  { value: "59", label: "Legal entities" },
];

export const taxonomyNavLinks = [
  { id: "taxonomy-overview", label: "Overview" },
  { id: "taxonomy-executive", label: "Executive summary" },
  { id: "taxonomy-capabilities", label: "Capability model" },
  { id: "taxonomy-current-state", label: "Current state" },
  { id: "taxonomy-future-state", label: "Future state" },
  { id: "taxonomy-leadership", label: "IT leadership" },
  { id: "taxonomy-benchmark", label: "Benchmark" },
  { id: "taxonomy-savings", label: "Savings case" },
  { id: "taxonomy-roadmap", label: "Roadmap" },
  { id: "taxonomy-regions", label: "BU spend detail" },
];

export const hypothesisTags = {
  H1: { label: "H1 AI", className: "bg-purple-100 text-purple-900" },
  H2: { label: "H2 Infra", className: "bg-emerald-100 text-emerald-900" },
  H3: { label: "H3 Apps", className: "bg-sky-100 text-sky-900" },
  H4: { label: "H4 Op model", className: "bg-amber-100 text-amber-900" },
  H5: { label: "H5 Vendor", className: "bg-orange-100 text-orange-900" },
};

export const operatingRegions = [
  {
    id: "americas",
    name: "Americas",
    spend: "$901M spend",
    vendorSpend: regionCostData.Americas.vendorSpend,
    itSpend: regionCostData.Americas.itSpend,
    itPercent: regionCostData.Americas.itPercent,
    costExplanation: regionCostData.Americas.explanation,
    monthlyRevenue: "$149M/mo rev",
    monthlyEbitda: "$42M/mo EBITDA",
    margin: "28% margin",
    businessUnits: [
      "Culligan Quench",
      "Flagship",
      "Franchise & dealers",
      "OEM channel",
      "NA Consumer Products",
      "Latin America",
    ],
  },
  {
    id: "emea",
    name: "EMEA",
    spend: "$598M spend",
    vendorSpend: regionCostData.EMEA.vendorSpend,
    itSpend: regionCostData.EMEA.itSpend,
    itPercent: regionCostData.EMEA.itPercent,
    costExplanation: regionCostData.EMEA.explanation,
    monthlyRevenue: "$141M/mo rev",
    monthlyEbitda: "$42M/mo EBITDA",
    margin: "30% margin",
    businessUnits: [
      "France & Switzerland",
      "Iberia",
      "Germany",
      "Poland & Baltics",
      "Nordics",
      "UK CDW",
    ],
  },
  {
    id: "apac",
    name: "APAC",
    spend: "$235M spend",
    vendorSpend: regionCostData.APAC.vendorSpend,
    itSpend: regionCostData.APAC.itSpend,
    itPercent: regionCostData.APAC.itPercent,
    costExplanation: regionCostData.APAC.explanation,
    monthlyRevenue: "$29M/mo rev",
    monthlyEbitda: "$8M/mo EBITDA",
    margin: "28% margin",
    businessUnits: [
      "ZIP Water ANZ",
      "ZIP UK",
      "Harvey",
      "Culligan AUS",
      "Complete Home Filtration",
    ],
  },
];

export const capabilityDomains = [
  {
    name: "Customer & market",
    regions: [
      {
        region: "Americas",
        hypotheses: ["H3", "H5"],
        capabilities: [
          "Brand management",
          "Customer acquisition",
          "Account management",
          "Contract & pricing management",
          "Customer retention",
        ],
      },
      {
        region: "EMEA",
        hypotheses: ["H3", "H5"],
        capabilities: [
          "Brand management",
          "Customer acquisition",
          "Account management",
          "Contract & pricing management",
          "Customer retention",
        ],
      },
      {
        region: "APAC",
        hypotheses: ["H3", "H5"],
        capabilities: [
          "Brand management",
          "Retail channel management",
          "Direct-to-consumer sales",
          "Subscription management",
          "Customer loyalty & retention",
        ],
      },
    ],
  },
  {
    name: "Product & service",
    regions: [
      {
        region: "Americas",
        hypotheses: ["H1", "H3"],
        capabilities: [
          "Water treatment innovation",
          "Product portfolio management",
          "Installation & commissioning",
          "Planned maintenance",
          "Break-fix & repair",
        ],
      },
      {
        region: "EMEA",
        hypotheses: ["H1", "H3"],
        capabilities: [
          "Water treatment innovation",
          "Product portfolio management",
          "Installation & commissioning",
          "Planned maintenance",
          "Connected device management",
        ],
      },
      {
        region: "APAC",
        hypotheses: ["H1", "H3"],
        capabilities: [
          "Product research & development",
          "Product portfolio management",
          "Manufacturing",
          "Installation & commissioning",
          "Subscription fulfilment",
        ],
      },
    ],
  },
  {
    name: "Operations & supply chain",
    regions: [
      {
        region: "Americas",
        hypotheses: ["H1", "H4"],
        capabilities: [
          "Route planning & optimisation",
          "Fleet operations",
          "Supplier management",
          "Inventory management",
          "Quality assurance",
        ],
      },
      {
        region: "EMEA",
        hypotheses: ["H1", "H4"],
        capabilities: [
          "Route planning & optimisation",
          "Fleet operations",
          "Supplier management",
          "Inventory management",
          "Regulatory compliance",
        ],
      },
      {
        region: "APAC",
        hypotheses: ["H1", "H4"],
        capabilities: [
          "Manufacturing operations",
          "Supplier management",
          "Inventory management",
          "Outbound logistics",
          "Quality assurance",
        ],
      },
    ],
  },
  {
    name: "Technology & innovation",
    regions: [
      {
        region: "Americas",
        hypotheses: ["H2", "H3", "H4"],
        capabilities: [
          "Financial management & reporting",
          "Customer relationship management",
          "Work order & scheduling management",
          "Remote asset monitoring",
          "Business intelligence & reporting",
          "IT service & support management",
        ],
      },
      {
        region: "EMEA",
        hypotheses: ["H2", "H3", "H4"],
        capabilities: [
          "Financial management & reporting",
          "Customer relationship management",
          "Work order & scheduling management",
          "Connected dispenser management",
          "Business intelligence & reporting",
          "IT service & support management",
        ],
      },
      {
        region: "APAC",
        hypotheses: ["H2", "H3", "H4"],
        capabilities: [
          "Financial management & reporting",
          "Customer relationship management",
          "Connected product management",
          "Digital commerce management",
          "Business intelligence & reporting",
          "IT service & support management",
        ],
      },
    ],
  },
  {
    name: "Finance & risk",
    regions: [
      {
        region: "Americas",
        hypotheses: ["H3", "H5"],
        capabilities: [
          "Financial planning & analysis",
          "Revenue management",
          "Accounts payable & receivable",
          "Asset management",
        ],
      },
      {
        region: "EMEA",
        hypotheses: ["H3", "H5"],
        capabilities: [
          "Financial planning & analysis",
          "Multi-currency management",
          "Accounts payable & receivable",
          "Regulatory & tax compliance",
        ],
      },
      {
        region: "APAC",
        hypotheses: ["H3", "H5"],
        capabilities: [
          "Financial planning & analysis",
          "Treasury management",
          "Accounts payable & receivable",
          "Regulatory & tax compliance",
        ],
      },
    ],
  },
  {
    name: "People & org",
    regions: [
      {
        region: "Americas",
        hypotheses: ["H1", "H4"],
        capabilities: [
          "Workforce planning",
          "Talent acquisition",
          "Technician training & certification",
          "Performance management",
        ],
      },
      {
        region: "EMEA",
        hypotheses: ["H1", "H4"],
        capabilities: [
          "Workforce planning",
          "Talent acquisition",
          "Technician training & certification",
          "Employee relations & compliance",
        ],
      },
      {
        region: "APAC",
        hypotheses: ["H1", "H4"],
        capabilities: [
          "Workforce planning",
          "Engineering talent management",
          "Learning & development",
          "Safety management",
        ],
      },
    ],
  },
  {
    name: "Corporate affairs",
    regions: [
      {
        region: "Americas",
        hypotheses: ["H5"],
        capabilities: [
          "Dealer network management",
          "Regulatory compliance management",
          "Brand licensing management",
          "Legal & contract management",
        ],
      },
      {
        region: "EMEA",
        hypotheses: ["H5"],
        capabilities: [
          "Dealer network management",
          "Regulatory compliance management",
          "Sustainability reporting",
          "Legal & contract management",
        ],
      },
      {
        region: "APAC",
        hypotheses: ["H5"],
        capabilities: [
          "Regulatory compliance management",
          "Sustainability & ESG management",
          "Intellectual property management",
        ],
      },
    ],
  },
];

export const itSavingsObservations = {
  title: "IT savings observations · H1–H5",
  items: [
    {
      id: 1,
      title: "CRM (Customer & market)",
      text: "19 BUs running separate CRM instances. Consolidation to Salesforce enterprise agreement targets 35–50% licence saving.",
      hypotheses: ["H3", "H5"],
    },
    {
      id: 2,
      title: "FSM (Product & service)",
      text: "14 route service BUs each on a separate field service tool. Group FSM platform targets 30–45% licence and support saving.",
      hypotheses: ["H3"],
    },
    {
      id: 3,
      title: "Route AI (Operations)",
      text: "No BU uses AI-driven route optimisation today. Predictive routing across 14 route BUs could reduce cost-per-service-call by 15–25%.",
      hypotheses: ["H1"],
    },
    {
      id: 4,
      title: "ERP (Technology)",
      text: "10 BUs on separate ERP instances (SAP, Navision, local). IFS global template targets 35–55% ERP TCO reduction over 2–3 years.",
      hypotheses: ["H3"],
    },
    {
      id: 5,
      title: "Service desk (Technology)",
      text: "15+ separate BU-level service desks. Shared L1/L2 model targets 15–30% IT support cost reduction.",
      hypotheses: ["H4"],
    },
    {
      id: 6,
      title: "Cloud (Technology)",
      text: "15 BUs with separate cloud tenancies. Group FinOps + consolidated org targets 25–40% infrastructure saving.",
      hypotheses: ["H2"],
    },
    {
      id: 7,
      title: "Vendor & SaaS (all domains)",
      text: "19 BUs buying software independently. M365, telecom, and SaaS rationalisation is the fastest wave-1 lever: 10–25% saving.",
      hypotheses: ["H5"],
    },
  ],
};

export const corporateSharedServices = {
  title: "Corporate & shared services",
  spend: corporateCostData.totalSpend,
  itSpend: corporateCostData.itSpend,
  itPercent: corporateCostData.itPercent,
  costOverview: corporateCostData.overview,
  itExplanation: corporateCostData.itExplanation,
  costBreakdown: corporateCostData.costBreakdown,
  description:
    "Centre of excellence · serves Americas, EMEA & APAC. These capabilities are owned once at group level and delivered to all three operating regions — not duplicated across regions.",
  pillars: [
    "IT & Technology",
    "Finance & Risk",
    "Strategy & M&A",
    "Legal & IP",
    "People & Org",
    "Franchise development",
    "Sustainability & ESG",
    "Procurement CoE",
  ],
  domains: [
    {
      name: "Customer & market",
      capabilities: ["Market intelligence", "Brand governance", "Pricing strategy"],
    },
    {
      name: "Product & service",
      capabilities: ["R&D governance", "Product standards & compliance"],
    },
    {
      name: "Operations & supply chain",
      capabilities: [
        "Strategic sourcing",
        "Category management",
        "Supplier relationship management",
        "Quality standards governance",
      ],
    },
    {
      name: "Technology & innovation",
      capabilities: [
        "Enterprise application governance",
        "Group platform management",
        "IoT & connected asset management",
        "Infrastructure & cloud management",
        "Information security management",
        "Data & analytics governance",
        "IT service management governance",
      ],
    },
    {
      name: "Finance & risk",
      capabilities: [
        "Group financial consolidation",
        "Treasury & cash management",
        "Risk management",
        "Internal audit & control",
        "Tax management",
      ],
    },
    {
      name: "People & org",
      capabilities: [
        "Total rewards management",
        "HR information management",
        "Leadership development",
        "Diversity, equity & inclusion",
        "Organisational design",
      ],
    },
    {
      name: "Corporate affairs",
      capabilities: [
        "Corporate strategy management",
        "Mergers & acquisitions",
        "Franchise network governance",
        "Intellectual property management",
        "Sustainability & ESG management",
      ],
    },
  ],
  relationNote:
    "Corporate governs the capability; regions execute it. For example, Corporate owns Enterprise application governance — each region runs their applications within that group standard.",
};

export const h5DeepDive = {
  title: "H5 — IT Support & Operating Model",
  subtitle: "Hypothesis area deep-dive",
  kpis: ["$13.0M support", "19% of IT", "126K tickets/yr", "ABOVE MEDIAN"],
  hypothesis:
    "Is IT delivered efficiently across regions, or are there redundant teams?",
  measured:
    "End-user support cost · regional operating model · shared services maturity · offshore mix",
  keyFindings: [
    "Status: ABOVE MEDIAN",
    "$13.0M end-user support = 19% of IT spend",
    "EMEA: 144 support staff",
    "NA: 86 · LATAM: 39 · APAC: 12",
    "~126,000 IT support tickets per year",
    "~$22 cost per ticket (HDI/MetricNet 2026 median)",
    "Maturity: 2 / 5 — Developing",
    "4 regional models, no shared services",
    "Target: 4 — Unified ITSM, shared services, AI deflection",
  ],
  meaning:
    "IT support is delivered by four completely separate regional teams. When Culligan acquires a new company, it adds IT support staff in proportion to users rather than absorbing them into an existing pool. Support costs grow at the same rate as acquisitions — roughly 50 new companies a year.",
  savings: {
    annual: "$2.0–3.9M",
    ebitda: "$2.0–3.9M annually",
    ev10: "$20–39M",
    ev12: "$24–47M",
    confidence: "MEDIUM",
    levers: [
      "Moveworks/ServiceNow AI deflection (30–45% L1): ~$1.1–1.3M",
      "Global shared-services operating model (Phase 2 org reform)",
    ],
  },
  insight: {
    observation:
      "End-user support is $13.0M — 19% of IT — through four independent regional organizations (EMEA 144 / NA 86 / LATAM 39 / APAC 12 FTEs). ~126K annual tickets handled largely manually. HDI/MetricNet 2026: median cost per ticket is $22.",
    businessImplication:
      "Every acquisition adds support FTEs in proportion to users. At 50 acquisitions per year, support cost compounds continuously. At $22/ticket × 126K tickets = $2.8M addressable annual support cost on the current base alone.",
    requiredAction:
      "Design global shared-services operating model as part of Phase 2 org reform. Scale Moveworks/ServiceNow Now Assist to 30–45% L1 deflection — ~$1.1–1.3M recoverable. Unify ITSM on single platform. Target: $2.0–3.9M savings.",
  },
  taxonomyAlignment:
    "Technology domain: IT service & support management appears in all three operating regions. Corporate shared services owns IT service management governance. Spend Cube observation: 15+ separate BU-level service desks — shared L1/L2 model targets 15–30% IT support cost reduction.",
};
