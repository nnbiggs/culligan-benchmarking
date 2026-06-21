import { opModelCapability } from "./opModelData";

const scopeRegions = opModelCapability.scopeRegions;
const regionBus = (name) =>
  scopeRegions.find((r) => r.name === name)?.businessUnits.map((bu) => bu.name) ?? [];

export const CHANGE_STATUS = {
  unchanged: {
    label: "Unchanged",
    badge: "bg-slate-200 text-slate-900",
    dot: "bg-slate-400",
  },
  extended: {
    label: "Expanded",
    badge: "bg-sky-200 text-sky-950",
    dot: "bg-sky-500",
  },
  consolidates: {
    label: "Consolidates",
    badge: "bg-violet-200 text-violet-950",
    dot: "bg-violet-500",
  },
  new: {
    label: "New",
    badge: "bg-emerald-200 text-emerald-950",
    dot: "bg-emerald-500",
  },
};

export const executiveHeadline = {
  lead: "The business structure stays. IT delivery consolidates onto shared group platforms — governed centrally, configured locally.",
  stats: [
    { value: "24", label: "Business units unchanged" },
    { value: "6", label: "Platform consolidations" },
    { value: "$22–44M", label: "Year 3 run-rate saving" },
    { value: "1.5–2%", label: "Target IT / revenue" },
  ],
};

export const changeOverview = {
  unchanged: [
    { label: "Operating structure", detail: "3 regions · 24 business units" },
    { label: "Business capabilities", detail: "Same route service, CRM, finance model" },
    { label: "Salesforce EA", detail: "$7.2M — already at corporate" },
    { label: "Cyber SOC", detail: "$1.7M — continues as group service" },
  ],
  consolidates: [
    { label: "ERP", from: "10 instances", to: "1 IFS template" },
    { label: "CRM", from: "19 instances", to: "1 Salesforce EA" },
    { label: "Service desk", from: "15+ desks", to: "1 ServiceNow" },
    { label: "FSM", from: "14 tools", to: "1 platform" },
    { label: "Cloud", from: "15 tenancies", to: "1 org + FinOps" },
    { label: "IT FTE", from: "50–100 local", to: "20–30 shared" },
  ],
  enables: [
    { label: "Group CIO mandate", detail: "Authority extended to all BUs", changeStatus: "extended" },
    { label: "Architecture board", detail: "Standards and exceptions", changeStatus: "new" },
    { label: "IT chargeback", detail: "Transparent BU allocation", changeStatus: "new" },
    { label: "CISO authority", detail: "Unified patching across BUs", changeStatus: "extended" },
  ],
};

export const comparisonLayers = [
  {
    id: "governance",
    title: "Governance",
    subtitle: "Who decides — and who can enforce standards across BUs",
    items: [
      {
        label: "Group CIO",
        today: "Limited to corporate enterprise agreements",
        target: "Extended mandate over all 24 BUs",
        changeStatus: "extended",
      },
      {
        label: "Architecture board",
        today: "Does not exist",
        target: "New group body — standards and exceptions",
        changeStatus: "new",
      },
      {
        label: "Group ITSM",
        today: "15+ separate service desks",
        target: "1 ServiceNow group L1/L2 desk",
        changeStatus: "consolidates",
      },
      {
        label: "IT chargeback",
        today: "No group visibility or BU allocation",
        target: "Transparent chargeback model",
        changeStatus: "new",
      },
      {
        label: "Group security",
        today: "SOC only — no CISO authority over BUs",
        target: "CISO authority · unified patching",
        changeStatus: "extended",
      },
    ],
  },
  {
    id: "platforms",
    title: "Technology platforms",
    subtitle: "What runs the business — from local duplication to group shared services",
    items: [
      {
        label: "ERP",
        today: "10 instances — SAP, Navision, local",
        target: "1 group IFS template · BU configuration",
        changeStatus: "consolidates",
      },
      {
        label: "CRM",
        today: "19 separate instances · $7.2M EA unused",
        target: "1 Salesforce EA · all BUs migrated",
        changeStatus: "consolidates",
      },
      {
        label: "ITSM / service desk",
        today: "No standard · $45–80 per ticket",
        target: "ServiceNow · $12–20 per ticket",
        changeStatus: "consolidates",
      },
      {
        label: "Field service (FSM)",
        today: "14 separate field tools",
        target: "1 group FSM platform",
        changeStatus: "consolidates",
      },
      {
        label: "Cloud",
        today: "15 tenancies · no FinOps",
        target: "Consolidated org · group FinOps",
        changeStatus: "consolidates",
      },
      {
        label: "HRIS",
        today: "Local systems per BU",
        target: "Workday group HRIS",
        changeStatus: "consolidates",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate band",
    subtitle: "Group agreements and mandate spanning all operating regions",
    items: [
      {
        label: "Salesforce EA",
        today: "$7.2M — BUs not on platform",
        target: "$7.2M — full BU adoption",
        changeStatus: "extended",
      },
      {
        label: "Cyber SOC",
        today: "$1.7M group security operations",
        target: "$1.7M — unchanged group service",
        changeStatus: "unchanged",
      },
      {
        label: "Cloud / FinOps",
        today: "Partial group coverage",
        target: "Consolidated cloud org · volume pricing",
        changeStatus: "extended",
      },
      {
        label: "Group CIO authority",
        today: "Not extended to BUs",
        target: "Cross-BU technology decisions",
        changeStatus: "extended",
      },
      {
        label: "Architecture standards",
        today: "None enforced",
        target: "Enforced via architecture board",
        changeStatus: "new",
      },
      {
        label: "BU IT oversight",
        today: "No group chargeback",
        target: "Transparent IT cost allocation",
        changeStatus: "new",
      },
    ],
  },
];

export const regions = [
  {
    name: "Americas",
    itToday: "$14M",
    itTarget: "$8M",
    buCount: regionBus("Americas").length,
    businessUnits: regionBus("Americas"),
  },
  {
    name: "EMEA",
    itToday: "$19M",
    itTarget: "$11M",
    buCount: regionBus("EMEA").length,
    businessUnits: regionBus("EMEA"),
  },
  {
    name: "APAC",
    itToday: "$8M",
    itTarget: "$5M",
    buCount: regionBus("APAC").length,
    businessUnits: regionBus("APAC"),
  },
];

export const savingsLevers = [
  { code: "H3 ERP", amount: "$3.8–6.0M", note: "10 → 1 instance" },
  { code: "H3 CRM", amount: "$2.5–4.2M", note: "19 → 1 Salesforce" },
  { code: "H4 Desk", amount: "$2.4–4.7M", note: "15 → 1 ITSM" },
  { code: "H4 FTE", amount: "$6–10M", note: "Shared IT roles" },
  { code: "H2 Cloud", amount: "$1.8–2.8M", note: "FinOps consolidation" },
  { code: "H5 Vendors", amount: "$4–10M", note: "Group agreements" },
];

export const REGION_ACCENTS = {
  Americas: "border-l-[#022656]",
  EMEA: "border-l-emerald-700",
  APAC: "border-l-amber-600",
};

/** Layered stack data for side-by-side operating model visuals */
export const currentOpModelVisual = {
  kpis: [
    { value: "$69M", label: "IT & Digital Spend" },
    { value: "19 / 19", label: "BUs buy IT alone" },
    { value: "No mandate", label: "CIO · no arch board" },
  ],
  governance: {
    label: "Governance",
    status: "Fragmented — no cross-BU authority",
    items: [
      "Group CIO · corporate agreements only",
      "No architecture board",
      "15+ separate service desks",
      "No IT chargeback model",
      "SOC only · no CISO over BUs",
    ],
  },
  platforms: {
    label: "Technology · local per BU",
    items: [
      { name: "ERP", detail: "10 instances" },
      { name: "CRM", detail: "19 instances" },
      { name: "ITSM", detail: "15+ desks" },
      { name: "FSM", detail: "14 tools" },
      { name: "Cloud", detail: "15 tenancies" },
      { name: "HRIS", detail: "Local per BU" },
    ],
  },
  corporate: {
    label: "Corporate",
    status: "Agreements only · no BU mandate",
    items: ["Salesforce EA $7.2M", "Cyber SOC $1.7M", "Cloud · partial", "No CIO mandate", "No standards", "No BU oversight"],
  },
  footer: {
    label: "Fragmentation today",
    items: ["10 ERP · 0 consolidated", "19 CRM · no leverage", "15+ desks · $45–80/ticket", "No group ITSM standard"],
  },
};

export const targetOpModelVisual = {
  kpis: [
    { value: "1 ITSM", label: "ServiceNow desk" },
    { value: "Group CIO", label: "Single authority" },
    { value: "1.5–2%", label: "IT / revenue target" },
  ],
  governance: {
    label: "Group IT governance",
    status: "Mandate across all 24 BUs",
    items: [
      "Group CIO · extended mandate",
      "IT Architecture Board",
      "ServiceNow · group L1/L2",
      "IT chargeback model",
      "CISO · unified patching",
    ],
  },
  platforms: {
    label: "Shared group platforms",
    items: [
      { name: "IFS ERP", detail: "1 template" },
      { name: "Salesforce", detail: "1 EA · 19 BUs" },
      { name: "ServiceNow", detail: "Group desk" },
      { name: "Group FSM", detail: "14 → 1" },
      { name: "Group cloud", detail: "FinOps" },
      { name: "Workday", detail: "Group HRIS" },
    ],
  },
  corporate: {
    label: "Corporate mandate",
    status: "Group authority over all BU IT",
    items: ["Salesforce EA · full adoption", "Cyber SOC · unchanged", "Cloud FinOps", "CIO authority", "Arch standards", "BU chargeback"],
  },
  footer: {
    label: "Year 3 savings levers",
    items: ["H3 ERP $3.8–6M", "H3 CRM $2.5–4M", "H4 Desk $2.4–4.7M", "H4 FTE $6–10M"],
  },
};

export const REGION_VISUAL_THEMES = {
  Americas: { header: "bg-[#022656]", body: "bg-[#eef4fa]", text: "text-[#022656]" },
  EMEA: { header: "bg-emerald-800", body: "bg-emerald-50", text: "text-emerald-900" },
  APAC: { header: "bg-amber-700", body: "bg-amber-50", text: "text-amber-900" },
};
