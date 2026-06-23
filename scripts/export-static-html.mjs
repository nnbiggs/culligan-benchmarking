/**
 * Generates culligan-cost-savings.html — self-contained static export of the React app.
 * Run: node scripts/export-static-html.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import * as benchmark from "../src/data/benchmarkData.js";
import opModel from "../src/data/opModelData.json" with { type: "json" };
import buCost from "../src/data/buCostData.json" with { type: "json" };

const regionCostData = buCost.regionCosts;

const taxonomyNavLinks = [
  { id: "taxonomy-overview", label: "Overview" },
  { id: "taxonomy-executive", label: "Executive summary" },
  { id: "taxonomy-capabilities", label: "Capability model" },
  { id: "taxonomy-current-state", label: "Current state" },
  { id: "taxonomy-future-state", label: "Future state" },
  { id: "taxonomy-leadership", label: "IT leadership" },
  { id: "taxonomy-benchmark", label: "Benchmarks" },
  { id: "taxonomy-savings", label: "Savings case" },
  { id: "taxonomy-roadmap", label: "Roadmap" },
  { id: "taxonomy-regions", label: "Regional spend" },
];

const operatingRegions = [
  {
    id: "americas",
    name: "Americas",
    vendorSpend: regionCostData.Americas.vendorSpend,
    itSpend: regionCostData.Americas.itSpend,
    itPercent: regionCostData.Americas.itPercent,
    costExplanation: regionCostData.Americas.explanation,
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
    vendorSpend: regionCostData.EMEA.vendorSpend,
    itSpend: regionCostData.EMEA.itSpend,
    itPercent: regionCostData.EMEA.itPercent,
    costExplanation: regionCostData.EMEA.explanation,
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
    vendorSpend: regionCostData.APAC.vendorSpend,
    itSpend: regionCostData.APAC.itSpend,
    itPercent: regionCostData.APAC.itPercent,
    costExplanation: regionCostData.APAC.explanation,
    businessUnits: ["ZIP ANZ", "ZIP UK", "Culligan AUS", "China", "Southeast Asia"],
  },
];

const agentDestinations = [
  ...benchmark.navLinks.map((link) => ({
    id: link.id,
    label: link.label,
    page: "benchmark",
    aliases: [link.label.toLowerCase(), link.id, link.id.replace(/-/g, " ")],
  })),
  ...taxonomyNavLinks.map((link) => ({
    id: link.id,
    label: link.label,
    page: "taxonomy",
    aliases: [link.label.toLowerCase(), link.id, link.id.replace("taxonomy-", "").replace(/-/g, " ")],
  })),
  { id: "findings", label: "Key findings", page: "benchmark", aliases: ["findings", "hypothesis", "h1", "h2", "h3", "h4", "h5", "h6"] },
  { id: "priority", label: "CIO priorities", page: "benchmark", aliases: ["cio", "priorities", "top 3"] },
  { id: "taxonomy-leadership", label: "IT leadership", page: "taxonomy", aliases: ["leadership", "cio structure", "design options"] },
  { id: "taxonomy-savings", label: "Savings case", page: "taxonomy", aliases: ["savings case", "savings levers"] },
  { id: "taxonomy-regions", label: "Regional spend", page: "taxonomy", aliases: ["regions", "regional spend", "americas", "emea", "apac"] },
];

const searchSnippets = [
  { title: "Savings opportunity", content: `${benchmark.executiveSummaryCover.hook} ${benchmark.ebitdaImpact.callout.text}` },
  { title: "CIO priorities", content: benchmark.cioPriority.priorities.map((p) => `${p.title} ${p.savings} ${p.description}`).join(" ") },
  { title: "Vendor and software", content: benchmark.keyFindings.findingsTable.rows.find((r) => r.code === "H6")?.meaning ?? "" },
  { title: "Operating model fragmentation", content: opModel.cover.hook + " " + (opModel.executiveSummary.rows[0]?.finding ?? "") },
  { title: "Future state", content: opModel.operatingModel.futureLead + " " + opModel.operatingModel.comparison.map((c) => c.future).join(" ") },
  { title: "Roadmap", content: benchmark.roadmap.phases.map((p) => p.phase + " " + p.actions.join(" ")).join(" ") },
  { title: "IT leadership", content: opModel.itLeadershipStructure.lead + " " + opModel.itLeadershipStructure.recommendedOption.summary },
  { title: "Cost of inaction", content: benchmark.costOfInaction.callout.text },
  { title: "Maturity model", content: benchmark.maturityModel.callout.text },
  ...benchmark.strategicInsights.items.map((i) => ({ title: i.title, content: Object.values(i.sections).join(" ") })),
  ...benchmark.keyFindings.findingsTable.rows.map((r) => ({ title: r.area, content: r.numbers + " " + r.meaning })),
];

const appData = {
  brand: benchmark.brand,
  draft: benchmark.draft,
  executiveSummaryCover: benchmark.executiveSummaryCover,
  kpis: benchmark.kpis,
  navLinks: benchmark.navLinks,
  cioPriority: benchmark.cioPriority,
  executiveSummary: benchmark.executiveSummary,
  businessContext: benchmark.businessContext,
  keyFindings: benchmark.keyFindings,
  ebitdaImpact: benchmark.ebitdaImpact,
  costOfInaction: benchmark.costOfInaction,
  strategicInsights: benchmark.strategicInsights,
  maPlaybook: benchmark.maPlaybook,
  maturityModel: benchmark.maturityModel,
  priorityMatrix: benchmark.priorityMatrix,
  roadmap: benchmark.roadmap,
  benchmarkTable: benchmark.benchmarkTable,
  footer: benchmark.footer,
  opModel,
  taxonomyNavLinks,
  operatingRegions: operatingRegions.map((r) => ({
    id: r.id,
    name: r.name,
    vendorSpend: r.vendorSpend,
    itSpend: r.itSpend,
    itPercent: r.itPercent,
    costExplanation: r.costExplanation,
    businessUnits: r.businessUnits,
  })),
  agentDestinations,
  searchSnippets,
  agentWelcome:
    "Hi — I'm here to explain this report in plain English.\n\nYou can ask about savings, CIO priorities, regional IT spend, or say things like \"take me to the roadmap\" and I'll scroll you there.\n\nPick a suggested question below, or type your own.",
  suggestedPrompts: [
    { label: "Top 3 CIO priorities", message: "In simple terms, what are the three most important things the CIO should do first?" },
    { label: "Vendor spend findings", message: "Explain the vendor and software licensing findings in plain English" },
    { label: "Savings opportunity", message: "How much could Culligan save, and where does the money come from?" },
    { label: "EMEA IT spend", message: "How much does EMEA spend on IT, and what does that mean?" },
    { label: "IT leadership", message: "What is the recommended IT leadership structure, explained simply?" },
    { label: "Future state", message: "Take me to the future state section and summarise it simply" },
  ],
};

const dataJson = JSON.stringify(appData);
const agentClientJs = readFileSync(new URL("./static-agent-client.js", import.meta.url), "utf8");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Culligan IT Cost Savings | PwC</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--deep:#022656;--accent:#1b7f9e;--light:#d6e8f5;--off:#f4f6f8;--body:#1a1a2e;--muted:#5a6a7e;--red:#c0392b;--amber:#e67e22;--green:#1e7a46;--callout:#eaf4fb;--site-title-h:3.25rem;--nav-bar-h:3.75rem;--subnav-h:2.25rem;--header-h:calc(var(--site-title-h) + var(--nav-bar-h) + var(--subnav-h));--font:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;--head:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
@media(max-width:1023px){:root{--site-title-h:3rem;--subnav-h:0px;--header-h:calc(var(--site-title-h) + var(--nav-bar-h))}}
html{scroll-behavior:smooth}
body{font-family:var(--font);color:var(--body);background:var(--off);line-height:1.55;padding-top:var(--header-h)}
.wrap{max-width:80rem;margin:0 auto;padding:0 1rem 3rem}
.site-header{position:fixed;top:0;left:0;right:0;z-index:100;background:var(--deep);box-shadow:0 2px 12px rgba(0,0,0,.15)}
.title-bar{border-bottom:1px solid rgba(255,255,255,.1);background:#011a3d;padding:.5rem 1rem}
.title-bar h1{font-family:var(--head);font-size:clamp(.85rem,2vw,1.05rem);font-weight:800;color:#fff;line-height:1.2}
.title-bar p{font-size:.68rem;color:rgba(214,232,245,.8);margin-top:.15rem}
.nav-row{display:flex;align-items:center;justify-content:space-between;padding:.65rem 1rem;gap:.5rem;flex-wrap:wrap}
.logo{font-family:var(--head);font-weight:800;font-size:1.1rem;color:#fff;display:flex;align-items:center;gap:.4rem}
.logo-drop{width:1.1rem;height:1.1rem;background:var(--accent);border-radius:50% 50% 50% 0;transform:rotate(-45deg)}
.page-tabs{display:flex;gap:.35rem}
.page-tabs button,.subnav button{border:none;cursor:pointer;font:inherit}
.page-tab{padding:.45rem .85rem;border-radius:.5rem;font-size:.78rem;font-weight:600;color:rgba(255,255,255,.75);background:transparent}
.page-tab.active,.page-tab:hover{background:rgba(255,255,255,.12);color:#fff}
.subnav{border-top:1px solid rgba(255,255,255,.1);padding:.4rem 1rem;display:flex;flex-wrap:wrap;justify-content:center;gap:.35rem;min-height:var(--subnav-h)}
.subnav button{padding:.35rem .65rem;border-radius:999px;font-size:.72rem;font-weight:600;color:rgba(255,255,255,.75);background:transparent}
.subnav button:hover,.subnav button.active{background:rgba(255,255,255,.15);color:var(--accent)}
.hero{background:var(--deep);color:#fff;padding:2.5rem 0 2rem;margin:0 -1rem 2rem}
.hero-inner{max-width:48rem;margin:0 auto;text-align:center;padding:0 1rem}
.eyebrow{font-size:.65rem;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:.75rem;font-weight:600}
.hero h2{font-family:var(--head);font-size:clamp(1.5rem,4vw,2.5rem);font-weight:800;line-height:1.15}
.hero .sub{margin-top:.75rem;font-size:clamp(.9rem,2vw,1.1rem);color:var(--light)}
.hero .meta{margin-top:.35rem;font-size:.75rem;color:rgba(214,232,245,.7)}
.hook-box{max-width:48rem;margin:1.5rem auto 0;padding:1rem 1.25rem;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:.75rem;font-size:.9rem;color:var(--light);text-align:center;line-height:1.6}
.kpi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:.75rem;margin-top:1.5rem;padding:0 1rem;max-width:56rem;margin-left:auto;margin-right:auto}
.kpi{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-top:3px solid var(--accent);border-radius:.6rem;padding:1rem;text-align:center}
.kpi .v{font-family:var(--head);font-size:1.5rem;font-weight:800}
.kpi .l{font-size:.72rem;color:var(--light);margin-top:.25rem}
.kpi .s{font-size:.65rem;color:rgba(214,232,245,.65);margin-top:.15rem}
.section{background:#fff;border-radius:.75rem;padding:1.25rem 1.5rem;margin-bottom:1.5rem;box-shadow:0 1px 4px rgba(0,0,0,.06);scroll-margin-top:calc(var(--header-h) + .5rem)}
.section h3{font-family:var(--head);font-size:1.25rem;font-weight:800;color:var(--deep);margin-bottom:.35rem}
.section h4{font-family:var(--head);font-size:.95rem;font-weight:700;color:var(--deep);margin:.75rem 0 .35rem}
.section .lead,.section .sub{color:var(--muted);font-size:.9rem;margin-bottom:1rem;max-width:52rem;line-height:1.6}
.grid-2{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem}
.grid-3{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem}
.grid-4{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.75rem}
.card{border:1px solid var(--off);border-radius:.65rem;padding:1rem;border-top:3px solid var(--accent);background:#fff}
.card.rec{border:2px solid var(--green);border-top:3px solid var(--green)}
.card h4{font-family:var(--head);font-size:.95rem;font-weight:700;color:var(--deep);margin-bottom:.35rem}
.card .tag{font-size:.68rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.05em}
.card p,.card li{font-size:.82rem;color:var(--muted);margin-top:.5rem;line-height:1.5}
.card ul{margin-left:1.1rem;margin-top:.35rem}
.badge{display:inline-block;padding:.15rem .55rem;border-radius:999px;font-size:.68rem;font-weight:700;white-space:nowrap}
.badge.red{background:#fdecea;color:var(--red)}
.badge.amber{background:#fef3e6;color:var(--amber)}
.badge.green{background:#e8f5ee;color:var(--green)}
table{width:100%;border-collapse:collapse;font-size:.82rem}
th{background:var(--deep);color:#fff;padding:.65rem .5rem;text-align:left;font-weight:600;white-space:nowrap}
th.sortable{cursor:pointer}
th.sortable:hover{background:#033875}
td{padding:.6rem .5rem;border-bottom:1px solid var(--off);vertical-align:top}
tr:nth-child(even) td{background:var(--off)}
tr.total td{font-weight:700;background:var(--callout)!important}
.chart-wrap{height:300px;position:relative;margin-top:1rem}
.chart-wrap canvas{width:100%!important;height:100%!important}
.roadmap-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}
.roadmap{background:var(--deep);color:#fff;border-radius:.75rem;padding:1.25rem}
.roadmap .ph{font-size:.65rem;font-weight:700;color:var(--accent);letter-spacing:.08em;text-transform:uppercase}
.roadmap h4{font-size:1rem;margin:.35rem 0 .75rem}
.roadmap ul{margin-left:1rem;font-size:.8rem;color:var(--light)}
.roadmap li{margin-bottom:.35rem}
.roadmap .save{margin-top:.75rem;padding-top:.75rem;border-top:1px solid rgba(255,255,255,.15);font-size:.82rem;font-weight:600;color:var(--accent)}
.callout{border-left:4px solid var(--accent);background:var(--callout);padding:1rem 1.25rem;border-radius:0 .5rem .5rem 0;margin-top:1rem;font-size:.88rem;line-height:1.55}
.callout .lbl{font-size:.65rem;font-weight:700;color:var(--accent);letter-spacing:.08em;text-transform:uppercase;margin-bottom:.35rem}
.insight{border-left:4px solid var(--red);padding:1rem;border:1px solid var(--off);border-radius:.5rem;margin-bottom:1rem}
.insight .lbl{font-size:.65rem;font-weight:700;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;margin-top:.65rem}
.insight .lbl:first-child{margin-top:0}
.matrix-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}
@media(max-width:640px){.matrix-grid{grid-template-columns:1fr}}
.quadrant{border-radius:.65rem;padding:1rem;color:#fff;font-size:.82rem}
.quadrant .ql{font-weight:800;font-size:.9rem}
.quadrant .qs{opacity:.85;font-size:.72rem;margin-bottom:.5rem}
.quadrant ul{margin-left:1rem;line-height:1.45}
.quadrant li{margin-bottom:.25rem}
.region-tabs{display:flex;flex-wrap:wrap;gap:.5rem;margin:1rem 0}
.region-tab{padding:.65rem 1rem;border-radius:.65rem;border:1px solid var(--off);background:#fff;cursor:pointer;text-align:left;font:inherit}
.region-tab.active{background:var(--deep);color:#fff;border-color:var(--accent);box-shadow:0 2px 8px rgba(0,0,0,.12)}
.region-tab .rn{font-weight:700;font-size:.85rem;display:block}
.region-tab .rs{font-size:.72rem;opacity:.8;margin-top:.15rem;display:block}
.region-panel{border:1px solid var(--off);border-radius:.75rem;overflow:hidden;background:#fff}
.region-head{background:var(--deep);color:#fff;padding:1rem 1.25rem}
.bu-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.75rem;padding:1rem;background:var(--off)}
.bu-card{background:#fff;border-radius:.5rem;padding:.75rem;border:1px solid var(--off);font-size:.8rem}
.bu-card strong{color:var(--deep);display:block;margin-bottom:.25rem}
.svg-diagram{width:100%;max-width:640px;margin:1rem auto;display:block}
.footer{text-align:center;padding:2rem 1rem;font-size:.75rem;color:var(--muted);line-height:1.6}
.page{display:none}
.page.active{display:block}
.agent-fab{position:fixed;bottom:1.25rem;left:1.25rem;z-index:90;background:var(--deep);color:#fff;border:none;border-radius:1rem;padding:.75rem 1rem;font-weight:600;font-size:.82rem;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,.2);display:flex;align-items:center;gap:.5rem}
.agent-fab:hover{background:#033875}
.agent-panel{position:fixed;bottom:4.5rem;left:1.25rem;width:min(26rem,calc(100vw - 2rem));max-height:min(32rem,72vh);background:#fff;border-radius:1rem;box-shadow:0 8px 32px rgba(0,0,0,.2);z-index:91;display:none;flex-direction:column;overflow:hidden;border:1px solid rgba(0,0,0,.08)}
.agent-panel.open{display:flex}
.agent-head{display:flex;align-items:center;justify-content:space-between;gap:.5rem;background:var(--deep);color:#fff;padding:.65rem .85rem}
.agent-head-text{min-width:0}
.agent-head-kicker{font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--accent)}
.agent-head-title{font-size:.85rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.agent-head-actions{display:flex;gap:.25rem;flex-shrink:0}
.agent-head-actions button{border:none;background:transparent;color:rgba(255,255,255,.9);font:inherit;font-size:.72rem;font-weight:600;padding:.35rem .55rem;border-radius:.4rem;cursor:pointer}
.agent-head-actions button:hover{background:rgba(255,255,255,.12)}
.agent-head-actions button:disabled{opacity:.4;cursor:not-allowed}
.agent-body{padding:.85rem;overflow-y:auto;flex:1;font-size:.84rem;background:rgba(244,246,248,.45)}
.agent-msg{margin-bottom:.65rem;padding:.6rem .75rem;border-radius:1rem;line-height:1.5;max-width:92%}
.agent-msg.bot{background:#fff;border:1px solid var(--off);color:var(--body);margin-right:auto;border-bottom-left-radius:.25rem}
.agent-msg.bot strong{color:var(--deep);font-weight:700}
.agent-msg.user{background:var(--deep);color:#fff;margin-left:auto;border-bottom-right-radius:.25rem}
.agent-typing{display:flex;align-items:center;gap:.5rem;color:var(--muted);font-size:.78rem}
.agent-dots{display:inline-flex;gap:.2rem}
.agent-dots span{width:.35rem;height:.35rem;border-radius:50%;background:var(--accent);animation:agentPulse 1s ease-in-out infinite}
.agent-dots span:nth-child(2){animation-delay:.15s}
.agent-dots span:nth-child(3){animation-delay:.3s}
@keyframes agentPulse{0%,100%{opacity:.35;transform:scale(.85)}50%{opacity:1;transform:scale(1)}}
.agent-chips-wrap{border-top:1px solid var(--off);background:#fff;padding:.55rem .75rem .65rem}
.agent-chips-label{font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:.4rem}
.agent-chips{display:flex;flex-wrap:wrap;gap:.35rem;max-height:4.5rem;overflow-y:auto}
.agent-chip{font-size:.68rem;padding:.35rem .6rem;border-radius:999px;border:1px solid var(--off);background:var(--off);cursor:pointer;color:var(--deep);font-weight:600}
.agent-chip:hover{border-color:var(--accent);color:var(--accent);background:#fff}
.agent-input{display:flex;border-top:1px solid var(--off);background:#fff}
.agent-input input{flex:1;border:none;padding:.7rem .75rem;font:inherit;font-size:.84rem;background:transparent}
.agent-input input:focus{outline:none}
.agent-input input:disabled{opacity:.6}
.agent-input button{border:none;background:var(--accent);color:#fff;padding:0 1.1rem;font-weight:700;cursor:pointer;font-size:.82rem}
.agent-input button:hover{background:#166b85}
.agent-input button:disabled{opacity:.55;cursor:not-allowed}
@media print{.agent-fab,.agent-panel{display:none!important}body{padding-top:0}.site-header{position:static}}
</style>
</head>
<body>
<header class="site-header">
  <div class="title-bar wrap" style="max-width:100%;padding:.5rem 1rem">
    <h1 id="siteTitle"></h1>
    <p id="siteMeta"></p>
  </div>
  <div class="nav-row wrap" style="max-width:100%">
    <div class="logo"><span class="logo-drop"></span> Culligan</div>
    <div class="page-tabs">
      <button type="button" class="page-tab active" data-page="benchmark">Executive Summary</button>
      <button type="button" class="page-tab" data-page="taxonomy">Operating Model</button>
    </div>
  </div>
  <nav class="subnav wrap" id="subnav" style="max-width:100%"></nav>
</header>
<main class="wrap">
  <div id="page-benchmark" class="page active"></div>
  <div id="page-taxonomy" class="page"></div>
</main>
<footer class="footer" id="siteFooter"></footer>
<button type="button" class="agent-fab" id="agentFab" aria-label="Open report assistant">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5"/></svg>
  Ask the report
</button>
<div class="agent-panel" id="agentPanel" role="dialog" aria-label="Report assistant">
  <div class="agent-head">
    <div class="agent-head-text">
      <div class="agent-head-kicker">Ask the report</div>
      <div class="agent-head-title">Culligan IT Cost Savings</div>
    </div>
    <div class="agent-head-actions">
      <button type="button" id="agentReset" title="Start a new conversation">Reset</button>
      <button type="button" id="agentClose" aria-label="Close">✕</button>
    </div>
  </div>
  <div class="agent-body" id="agentBody"></div>
  <div class="agent-chips-wrap">
    <div class="agent-chips-label">Suggested questions</div>
    <div class="agent-chips">
      <button type="button" class="agent-chip" data-q="In simple terms, what are the three most important things the CIO should do first?">Top 3 CIO priorities</button>
      <button type="button" class="agent-chip" data-q="Explain the vendor and software licensing findings in plain English">Vendor spend</button>
      <button type="button" class="agent-chip" data-q="How much could Culligan save, and where does the money come from?">Savings opportunity</button>
      <button type="button" class="agent-chip" data-q="How much does EMEA spend on IT, and what does that mean?">EMEA IT spend</button>
      <button type="button" class="agent-chip" data-q="What is the recommended IT leadership structure, explained simply?">IT leadership</button>
      <button type="button" class="agent-chip" data-q="Take me to the future state section and summarise it simply">Future state</button>
    </div>
  </div>
  <div class="agent-input">
    <input type="text" id="agentInput" placeholder="Ask in plain English…" autocomplete="off"/>
    <button type="button" id="agentSend">Send</button>
  </div>
</div>
<script>
const appData = ${dataJson};
let currentPage = "benchmark";
let sortCol = "code", sortAsc = true;
let activeRegionId = appData.operatingRegions[0]?.id || "americas";
let taxonomyRendered = false;

function esc(s){if(s==null)return"";return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
function nl(s){return esc(s).replace(/\\n/g,"<br/>")}
function badge(type,text){const c=type==="red"||type==="green"?type:"amber";return '<span class="badge '+c+'">'+esc(text)+'</span>'}
function kpiVal(k){if(k.display)return k.display;if(k.prefix)return k.prefix+(k.value??"")+(k.suffix||"");return String(k.value??"")}

function renderBenchmark(){
  const d=appData,c=d.executiveSummaryCover;
  document.getElementById("page-benchmark").innerHTML=\`
  <section class="hero scroll-anchor" id="overview">
    <div class="hero-inner">
      <p class="eyebrow">\${esc(c.eyebrow)}</p>
      <h2>\${esc(c.title)}</h2>
      <p class="sub">\${esc(c.subtitle)}</p>
      <p class="meta">\${esc(c.meta)}</p>
      <div class="hook-box">\${esc(c.hook)}</div>
    </div>
    <div class="kpi-grid">\${d.kpis.map(k=>'<div class="kpi"><div class="v">'+esc(kpiVal(k))+'</div><div class="l">'+esc(k.label)+'</div><div class="s">'+esc(k.sublabel||"")+'</div></div>').join("")}</div>
    <p style="text-align:center;font-size:.7rem;color:rgba(214,232,245,.55);margin-top:1rem;padding:0 1rem">\${esc(c.source)}</p>
  </section>

  <section class="section scroll-anchor" id="exec-summary">
    <p class="eyebrow" style="color:var(--accent)">\${esc(d.executiveSummary.eyebrow)}</p>
    <h3>\${esc(d.executiveSummary.headline)}</h3>
    <div class="callout"><div class="lbl">\${esc(d.executiveSummary.situation.label)}</div>\${esc(d.executiveSummary.situation.text)}</div>
    <h4>\${esc(d.executiveSummary.strengths.label)} — \${esc(d.executiveSummary.strengths.sublabel)}</h4>
    <div class="grid-3">\${d.executiveSummary.strengths.items.map(s=>'<article class="card green"><h4>'+esc(s.title)+'</h4><p>'+esc(s.description)+'</p><p style="font-weight:600;color:var(--green);font-size:.78rem">'+esc(s.highlight)+'</p></article>').join("")}</div>
    <h4 style="margin-top:1.25rem">\${esc(d.executiveSummary.opportunities.label)} — \${esc(d.executiveSummary.opportunities.sublabel)}</h4>
    <div class="grid-2">\${d.executiveSummary.opportunities.items.map(o=>'<article class="card"><h4>'+esc(o.title)+'</h4><p>'+esc(o.description)+'</p><p style="font-weight:600;color:var(--accent);font-size:.78rem">'+esc(o.metrics)+'</p></article>').join("")}</div>
    <div class="callout" style="margin-top:1.25rem"><div class="lbl">\${esc(d.executiveSummary.conclusion.label)}</div><strong>\${esc(d.executiveSummary.conclusion.title)}</strong><br/>\${esc(d.executiveSummary.conclusion.text)}</div>
  </section>

  <section class="section scroll-anchor" id="priority">
    <p class="eyebrow" style="color:var(--accent)">\${esc(d.cioPriority.eyebrow)}</p>
    <h3>\${esc(d.cioPriority.title)}</h3>
    <p class="lead">\${esc(d.cioPriority.intro)}</p>
    <div class="grid-3">\${d.cioPriority.priorities.map(p=>'<article class="card"><p class="tag">Priority '+esc(p.step)+'</p><h4>'+esc(p.title)+'</h4><p><strong>'+esc(p.horizon)+'</strong> · '+esc(p.savings)+'<br/>Owner: '+esc(p.owner)+'</p><p>'+nl(p.description||p.whyItMatters||"")+'</p></article>').join("")}</div>
    <h4 style="margin-top:1.25rem">\${esc(d.cioPriority.businessResults.title)}</h4>
    <p class="sub">\${esc(d.cioPriority.businessResults.subtitle)}</p>
    <div style="overflow-x:auto"><table><thead><tr>\${d.cioPriority.businessResults.columns.map(c=>'<th>'+esc(c)+'</th>').join("")}</tr></thead><tbody>
    \${d.cioPriority.businessResults.rows.map(r=>'<tr'+(r.isTotal?' class="total"':'')+'><td>'+esc(r.action)+'</td><td>'+esc(r.investment)+'</td><td>'+esc(r.year1)+'</td><td>'+esc(r.year3)+'</td><td>'+esc(r.payback)+'</td><td>'+esc(r.confidence)+'</td></tr>').join("")}
    </tbody></table></div>
    <div class="callout">\${esc(d.cioPriority.businessResults.closing)}</div>
  </section>

  <section class="section scroll-anchor" id="context">
    <h3>\${esc(d.businessContext.title)}</h3>
    <p class="lead">\${esc(d.businessContext.subtitle)}</p>
    \${d.businessContext.sections.map(s=>'<h4>'+esc(s.label)+'</h4>'+s.paragraphs.map(p=>'<p class="sub">'+esc(p)+'</p>').join("")).join("")}
    <div class="callout"><div class="lbl">\${esc(d.businessContext.callout.label)}</div>\${esc(d.businessContext.callout.text)}</div>
  </section>

  <section class="section scroll-anchor" id="findings">
    <h3>\${esc(d.keyFindings.title)}</h3>
    <p class="lead">\${esc(d.keyFindings.subtitle)}</p>
    <h4>\${esc(d.keyFindings.hypothesisLegend.title)}</h4>
    <p class="sub">\${esc(d.keyFindings.hypothesisLegend.intro)}</p>
    <div style="overflow-x:auto;margin-bottom:1rem"><table><thead><tr>\${d.keyFindings.hypothesisLegend.columns.map(c=>'<th>'+esc(c)+'</th>').join("")}</tr></thead><tbody>
    \${d.keyFindings.hypothesisLegend.rows.map(r=>'<tr><td><strong>'+esc(r.code)+'</strong></td><td>'+esc(r.name)+'</td><td>'+esc(r.definition)+'</td><td>'+esc(r.measured)+'</td></tr>').join("")}
    </tbody></table></div>
    <h4>\${esc(d.keyFindings.findingsTable.title)}</h4>
    <div style="overflow-x:auto"><table id="findingsTable"><thead><tr>
      <th class="sortable" data-col="code">Code</th><th class="sortable" data-col="area">Area</th><th class="sortable" data-col="status">Status</th>
      <th>Numbers</th><th>What this means</th>
    </tr></thead><tbody id="findingsBody"></tbody></table></div>
    <p class="sub" style="margin-top:.75rem;font-size:.75rem">\${esc(d.keyFindings.hypothesisLegend.footnote)}</p>
  </section>

  <section class="section scroll-anchor" id="value">
    <h3>\${esc(d.ebitdaImpact.title)}</h3>
    <p class="sub">\${esc(d.ebitdaImpact.subtitle)}</p>
    <p class="lead">\${esc(d.ebitdaImpact.intro)}</p>
    <div style="overflow-x:auto"><table><thead><tr>\${d.ebitdaImpact.columns.map(c=>'<th>'+esc(c)+'</th>').join("")}</tr></thead><tbody>
    \${d.ebitdaImpact.rows.map(r=>'<tr'+(r.isTotal?' class="total"':'')+'><td>'+esc(r.lever)+'</td><td>'+esc(r.annual)+'</td><td>'+esc(r.ebitda)+'</td><td>'+esc(r.ev10)+'</td><td>'+esc(r.ev12)+'</td><td>'+badge(r.confidenceType||"amber",r.confidence)+'</td></tr>').join("")}
    </tbody></table></div>
    <div class="chart-wrap"><canvas id="savingsChart"></canvas></div>
    <div class="callout"><div class="lbl">\${esc(d.ebitdaImpact.callout.label)}</div>\${esc(d.ebitdaImpact.callout.text)}</div>
    <p class="sub" style="font-size:.75rem;margin-top:.75rem">\${esc(d.ebitdaImpact.note)}</p>
  </section>

  <section class="section scroll-anchor" id="inaction">
    <h3>\${esc(d.costOfInaction.title)}</h3>
    <p class="sub">\${esc(d.costOfInaction.subtitle)}</p>
    <p class="lead">\${esc(d.costOfInaction.intro)}</p>
    <div style="overflow-x:auto"><table><thead><tr>\${d.costOfInaction.columns.map(c=>'<th>'+esc(c)+'</th>').join("")}</tr></thead><tbody>
    \${d.costOfInaction.rows.map(r=>'<tr'+(r.isTotal?' class="total"':'')+'><td>'+esc(r.item)+'</td><td>'+esc(r.annual)+'</td><td>'+esc(r.threeYear)+'</td><td>'+esc(r.basis)+'</td></tr>').join("")}
    </tbody></table></div>
    <div class="callout"><div class="lbl">\${esc(d.costOfInaction.callout.label)}</div>\${esc(d.costOfInaction.callout.text)}</div>
  </section>

  <section class="section scroll-anchor" id="insights">
    <h3>\${esc(d.strategicInsights.title)}</h3>
    <p class="sub">\${esc(d.strategicInsights.subtitle)}</p>
    \${d.strategicInsights.items.map(i=>'<article class="insight" style="border-left-color:'+esc(i.borderColor)+'"><h4>'+esc(i.title)+'</h4><div class="lbl">'+esc(d.strategicInsights.sectionLabels.observation)+'</div><p>'+esc(i.sections.observation)+'</p><div class="lbl">'+esc(d.strategicInsights.sectionLabels.businessImplication)+'</div><p>'+esc(i.sections.businessImplication)+'</p><div class="lbl">'+esc(d.strategicInsights.sectionLabels.requiredAction)+'</div><p>'+esc(i.sections.requiredAction)+'</p></article>').join("")}
  </section>

  <section class="section scroll-anchor" id="ma-playbook">
    <h3>\${esc(d.maPlaybook.title)}</h3>
    <p class="sub">\${esc(d.maPlaybook.subtitle)}</p>
    <p class="lead">\${esc(d.maPlaybook.intro)}</p>
    <div class="grid-2">\${d.maPlaybook.phases.map(p=>'<article class="card"><p class="tag">'+esc(p.phase)+'</p><p><strong>Owner:</strong> '+esc(p.owner)+'</p><p>'+esc(p.actions)+'</p></article>').join("")}</div>
    <h4 style="margin-top:1.25rem">\${esc(d.maPlaybook.erpFramework.title)}</h4>
    <div style="overflow-x:auto"><table><thead><tr>\${d.maPlaybook.erpFramework.columns.map(c=>'<th>'+esc(c)+'</th>').join("")}</tr></thead><tbody>
    \${d.maPlaybook.erpFramework.rows.map(r=>'<tr><td>'+esc(r.scenario)+'</td><td>'+esc(r.decision)+'</td><td>'+esc(r.rationale)+'</td></tr>').join("")}
    </tbody></table></div>
  </section>

  <section class="section scroll-anchor" id="maturity">
    <h3>\${esc(d.maturityModel.title)}</h3>
    <p class="sub">\${esc(d.maturityModel.subtitle)}</p>
    <p class="lead">\${esc(d.maturityModel.intro)}</p>
    <div style="overflow-x:auto"><table><thead><tr>\${d.maturityModel.columns.map(c=>'<th>'+esc(c)+'</th>').join("")}</tr></thead><tbody>
    \${d.maturityModel.rows.map(r=>'<tr><td>'+esc(r.domain)+'</td><td>'+esc(r.score)+'</td><td>'+esc(r.level)+'</td><td>'+esc(r.current)+'</td><td>'+esc(r.target)+'</td><td>'+esc(r.gap)+'</td></tr>').join("")}
    </tbody></table></div>
    <div class="callout"><div class="lbl">\${esc(d.maturityModel.callout.label)}</div>\${esc(d.maturityModel.callout.text)}</div>
  </section>

  <section class="section scroll-anchor" id="matrix">
    <h3>\${esc(d.priorityMatrix.title)}</h3>
    <p class="sub">\${esc(d.priorityMatrix.subtitle)}</p>
    <p class="lead">\${esc(d.priorityMatrix.intro)}</p>
    <div class="matrix-grid">\${d.priorityMatrix.quadrants.map(q=>'<div class="quadrant" style="background:'+esc(q.color)+'"><div class="ql">'+esc(q.label)+'</div><div class="qs">'+esc(q.sublabel)+'</div><ul>'+q.items.map(i=>'<li>'+esc(i)+'</li>').join("")+'</ul></div>').join("")}</div>
  </section>

  <section class="section scroll-anchor" id="roadmap">
    <h3>\${esc(d.roadmap.title)}</h3>
    <p class="sub">\${esc(d.roadmap.subtitle)}</p>
    <p class="lead">\${esc(d.roadmap.intro)}</p>
    <div class="roadmap-grid">\${d.roadmap.phases.map(p=>'<article class="roadmap"><p class="ph">'+esc(p.phase)+'</p><h4>'+esc(p.horizon)+'</h4><ul>'+p.actions.map(a=>'<li>'+esc(a)+'</li>').join("")+'</ul><p class="save">'+esc(p.savings)+'</p></article>').join("")}</div>
    <p class="sub" style="margin-top:.75rem;font-size:.75rem">\${esc(d.roadmap.note)}</p>
  </section>

  <section class="section scroll-anchor" id="reference">
    <h3>\${esc(d.benchmarkTable.title)}</h3>
    <p class="sub">\${esc(d.benchmarkTable.subtitle)}</p>
    <div style="overflow-x:auto"><table><thead><tr>\${d.benchmarkTable.columns.map(c=>'<th>'+esc(c)+'</th>').join("")}</tr></thead><tbody>
    \${d.benchmarkTable.rows.map(r=>'<tr><td>'+esc(r.metric)+'</td><td>'+esc(r.culligan)+'</td><td>'+esc(r.peer)+'</td><td>'+esc(r.comparison)+'</td></tr>').join("")}
    </tbody></table></div>
    <p class="sub" style="margin-top:.75rem;font-size:.75rem">\${esc(d.benchmarkTable.caption)}</p>
  </section>
  <p style="font-size:.72rem;color:var(--muted);text-align:center;margin-top:1rem">\${esc(d.draft.footnote)}</p>\`;
  renderFindingsTable();
  bindSort();
  requestAnimationFrame(drawChart);
}

function renderFindingsTable(){
  const rows=[...appData.keyFindings.findingsTable.rows].sort((a,b)=>{
    let av=a[sortCol]??a.area,bv=b[sortCol]??b.area;
    if(av<bv)return sortAsc?-1:1;if(av>bv)return sortAsc?1:-1;return 0;
  });
  const el=document.getElementById("findingsBody");
  if(!el)return;
  el.innerHTML=rows.map(r=>'<tr><td><strong>'+esc(r.code)+'</strong></td><td>'+esc(r.area)+'</td><td>'+badge(r.statusType,r.status)+'</td><td>'+nl(r.numbers)+'</td><td>'+esc(r.meaning)+'</td></tr>').join("");
}

function bindSort(){
  document.querySelectorAll("#findingsTable th[data-col]").forEach(th=>{
    th.onclick=()=>{const c=th.dataset.col;if(sortCol===c)sortAsc=!sortAsc;else{sortCol=c;sortAsc=true;}renderFindingsTable();};
  });
}

function drawChart(){
  const canvas=document.getElementById("savingsChart");
  if(!canvas)return;
  const ctx=canvas.getContext("2d");
  const dpr=window.devicePixelRatio||1;
  const rect=canvas.parentElement.getBoundingClientRect();
  canvas.width=rect.width*dpr;canvas.height=rect.height*dpr;
  ctx.setTransform(dpr,0,0,dpr,0,0);
  const W=rect.width,H=rect.height,data=appData.ebitdaImpact.chartData;
  const maxVal=Math.max(...data.map(x=>x.high))*1.12;
  const padL=100,padR=24,padT=16,padB=28;
  const gap=(H-padT-padB)/data.length,barH=gap*0.5;
  ctx.clearRect(0,0,W,H);
  data.forEach((d,i)=>{
    const y=padT+i*gap+(gap-barH)/2;
    const xLow=padL+(d.low/maxVal)*(W-padL-padR);
    const xHigh=padL+(d.high/maxVal)*(W-padL-padR);
    ctx.fillStyle="#022656";ctx.fillRect(padL,y,xLow-padL,barH);
    ctx.fillStyle="#1b7f9e";ctx.fillRect(xLow,y,xHigh-xLow,barH);
    ctx.fillStyle="#1a1a2e";ctx.font="11px system-ui,sans-serif";ctx.textAlign="right";
    ctx.fillText(d.name,padL-8,y+barH/2+4);
    ctx.textAlign="left";ctx.fillStyle="#5a6a7e";
    ctx.fillText("$"+d.low+"–"+d.high+"M",xHigh+6,y+barH/2+4);
  });
  ctx.fillStyle="#5a6a7e";ctx.font="10px system-ui";ctx.textAlign="center";
  ctx.fillText("Estimated annual savings ($M) — navy = low, teal = high range",W/2,H-6);
}

function opModelSvg(type){
  if(type==="current"){
    let boxes="";for(let i=0;i<6;i++){const x=20+(i%3)*200,y=40+Math.floor(i/3)*90;boxes+='<rect x="'+x+'" y="'+y+'" width="170" height="60" rx="6" fill="#1b7f9e" opacity=".85"/><text x="'+(x+85)+'" y="'+(y+35)+'" text-anchor="middle" fill="#fff" font-size="11">BU IT '+((i%6)+1)+'</text>';}
    return '<svg class="svg-diagram" viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="220" fill="#f4f6f8" rx="8"/><text x="320" y="24" text-anchor="middle" fill="#022656" font-weight="700" font-size="13">24 independent IT operations — no group governance</text>'+boxes+'</svg>';
  }
  return '<svg class="svg-diagram" viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg"><rect width="640" height="200" fill="#f4f6f8" rx="8"/><rect x="220" y="20" width="200" height="44" rx="8" fill="#022656"/><text x="320" y="48" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">Group CIO + Architecture Board</text><rect x="40" y="100" width="160" height="70" rx="6" fill="#1b7f9e"/><text x="120" y="132" text-anchor="middle" fill="#fff" font-size="11">Shared ServiceNow</text><rect x="240" y="100" width="160" height="70" rx="6" fill="#1b7f9e"/><text x="320" y="132" text-anchor="middle" fill="#fff" font-size="11">Group IFS ERP</text><rect x="440" y="100" width="160" height="70" rx="6" fill="#1b7f9e"/><text x="520" y="132" text-anchor="middle" fill="#fff" font-size="11">Salesforce EA</text><line x1="320" y1="64" x2="120" y2="100" stroke="#022656" stroke-width="2"/><line x1="320" y1="64" x2="320" y2="100" stroke="#022656" stroke-width="2"/><line x1="320" y1="64" x2="520" y2="100" stroke="#022656" stroke-width="2"/></svg>';
}

function renderTaxonomy(){
  const om=appData.opModel,ld=om.itLeadershipStructure;
  document.getElementById("page-taxonomy").innerHTML=\`
  <section class="hero scroll-anchor" id="taxonomy-overview">
    <div class="hero-inner">
      <p class="eyebrow">\${esc(om.cover.eyebrow)}</p>
      <h2>\${esc(om.cover.title)}</h2>
      <p class="sub">\${esc(om.cover.subtitle)}</p>
      <p class="meta">\${esc(om.cover.meta)}</p>
      <div class="hook-box">\${esc(om.cover.hook)}</div>
    </div>
    <div class="kpi-grid">\${om.cover.kpis.map(k=>'<div class="kpi"><div class="v">'+esc(k.value)+'</div><div class="l">'+esc(k.label)+'</div></div>').join("")}</div>
    <p style="text-align:center;font-size:.7rem;color:rgba(214,232,245,.55);margin-top:1rem">\${esc(om.cover.source)} · Confidential · PwC</p>
  </section>

  <section class="section scroll-anchor" id="taxonomy-executive">
    <h3>\${esc(om.executiveSummary.title)}</h3>
    <p class="lead">\${esc(om.executiveSummary.sectionTitle)}</p>
    \${om.executiveSummary.rows.map(r=>'<div class="callout" style="margin-bottom:.65rem"><strong>'+esc(r.dimension)+'</strong><br/><span style="color:var(--muted)">'+esc(r.finding)+'</span></div>').join("")}
  </section>

  <section class="section scroll-anchor" id="taxonomy-capabilities">
    <p class="eyebrow" style="color:var(--accent)">\${esc(om.capabilityModel.partLabel)}</p>
    <h3>\${esc(om.capabilityModel.hero)}</h3>
    <p class="lead">\${esc(om.capabilityModel.section1)}</p>
    <div class="grid-3">\${om.capabilityModel.archetypes.map(a=>'<article class="card"><h4>'+esc(a.name)+'</h4><p><strong>BUs:</strong> '+esc(a.bus)+'</p><p>'+esc(a.model)+'</p></article>').join("")}</div>
    <div class="callout"><div class="lbl">\${esc(om.capabilityModel.calloutTitle)}</div>\${esc(om.capabilityModel.callout)}</div>
    <div class="grid-4" style="margin-top:1rem">\${om.capabilityModel.calloutStats.map(s=>'<div class="kpi" style="background:var(--callout);border-color:var(--accent);color:var(--deep)"><div class="v" style="color:var(--deep)">'+esc(s.value)+'</div><div class="l" style="color:var(--muted)">'+esc(s.label)+'</div></div>').join("")}</div>
  </section>

  <section class="section scroll-anchor" id="taxonomy-current-state">
    <p class="eyebrow" style="color:var(--accent)">\${esc(om.currentState.partLabel||"Current state")}</p>
    <h3>\${esc(om.currentState.title||"Current state analysis")}</h3>
    <p class="lead">\${esc(om.currentState.lead||"")}</p>
    <h4>\${esc(om.currentState.doingWellTitle||"Strengths")}</h4>
    <div class="grid-2">\${(om.currentState.doingWell||[]).slice(0,3).map(s=>'<article class="card green"><h4>'+esc(s.area)+'</h4><p>'+esc(s.observation)+'</p><p style="font-size:.78rem;color:var(--green)">'+esc(s.impact)+'</p></article>').join("")}</div>
    <h4 style="margin-top:1rem">\${esc(om.currentState.mustActTitle||"Must act")}</h4>
    <div class="grid-2">\${(om.currentState.mustAct||[]).slice(0,3).map(s=>'<article class="card"><h4>'+esc(s.area)+'</h4><p>'+esc(s.observation)+'</p><p style="font-size:.78rem">'+esc(s.impact)+'</p></article>').join("")}</div>
  </section>

  <section class="section scroll-anchor" id="taxonomy-future-state">
    <p class="eyebrow" style="color:var(--accent)">\${esc(om.operatingModel.partLabel)}</p>
    <h3>\${esc(om.operatingModel.currentTitle)}</h3>
    <p class="lead">\${esc(om.operatingModel.currentLead)}</p>
    \${opModelSvg("current")}
    <p class="sub" style="text-align:center;font-size:.75rem">\${esc(om.operatingModel.currentCaption)}</p>
    <h4 style="margin-top:1.5rem">\${esc(om.operatingModel.futureTitle)}</h4>
    <p class="lead">\${esc(om.operatingModel.futureLead)}</p>
    \${opModelSvg("future")}
    <p class="sub" style="text-align:center;font-size:.75rem">\${esc(om.operatingModel.futureCaption)}</p>
    <h4 style="margin-top:1.25rem">\${esc(om.operatingModel.comparisonTitle)}</h4>
    <div style="overflow-x:auto"><table><thead><tr><th>Dimension</th><th>Current</th><th>Future</th></tr></thead><tbody>
    \${om.operatingModel.comparison.map(c=>'<tr><td><strong>'+esc(c.dimension)+'</strong></td><td>'+esc(c.current)+'</td><td>'+esc(c.future)+'</td></tr>').join("")}
    </tbody></table></div>
  </section>

  <section class="section scroll-anchor" id="taxonomy-leadership">
    <h3>\${esc(ld.title)}</h3>
    <p class="lead">\${esc(ld.lead)}</p>
    <div style="overflow-x:auto;margin-top:1rem;border-radius:.75rem;box-shadow:0 1px 4px rgba(0,0,0,.08);border:1px solid var(--off)">
      <table style="min-width:880px">
        <thead><tr>
          <th>IT function</th>
          \${ld.accountabilityMatrix.columns.map(c=>'<th style="text-align:center'+(c.recommended?';background:#d97706':'')+'">'+(c.recommended?'★ ':'')+esc(c.label)+'<br/><span style="font-size:.65rem;font-weight:500;opacity:.85">'+esc(c.sublabel)+'</span></th>').join("")}
          <th>Why it matters</th>
        </tr></thead>
        <tbody>
          \${ld.accountabilityMatrix.rows.map((r,i)=>'<tr><td><strong>'+esc(r.function)+'</strong></td>'+ld.accountabilityMatrix.columns.map(c=>'<td style="text-align:center'+(c.recommended?';background:#fffbeb;font-weight:600':'')+'">'+esc(r[c.key])+'</td>').join("")+'<td style="color:var(--muted);font-size:.8rem">'+esc(r.whyItMatters)+'</td></tr>').join("")}
        </tbody>
      </table>
    </div>
    \${ld.structuralPrinciple?'<div class="callout" style="margin-top:1.25rem"><div class="lbl">'+esc(ld.structuralPrinciple.title)+'</div>'+esc(ld.structuralPrinciple.body)+'</div>':""}
  </section>

  <section class="section scroll-anchor" id="taxonomy-benchmark">
    <p class="eyebrow" style="color:var(--accent)">\${esc(om.benchmarking.partLabel)}</p>
    <h3>\${esc(om.benchmarking.title)}</h3>
    <p class="lead">\${esc(om.benchmarking.lead)}</p>
    <div class="grid-4">\${om.benchmarking.itSpendBenchmark.map(b=>'<div class="card"><div class="v" style="font-size:1.25rem;font-weight:800;color:var(--deep)">'+esc(b.value)+'</div><p>'+esc(b.label)+'</p></div>').join("")}</div>
    <h4 style="margin-top:1.25rem">\${esc(om.benchmarking.serviceDeskTitle)}</h4>
    <div style="overflow-x:auto"><table><thead><tr><th>Model</th><th>Cost/ticket</th><th>Relevance</th></tr></thead><tbody>
    \${om.benchmarking.serviceDesk.map(r=>'<tr><td>'+esc(r.model)+'</td><td><strong>'+esc(r.cost)+'</strong></td><td>'+esc(r.relevance)+'</td></tr>').join("")}
    </tbody></table></div>
  </section>

  <section class="section scroll-anchor" id="taxonomy-savings">
    <p class="eyebrow" style="color:var(--accent)">\${esc(om.savings.partLabel)}</p>
    <h3>\${esc(om.savings.h4Title)}</h3>
    \${(om.savings.h4Lead||[]).map(p=>'<p class="sub">'+esc(p)+'</p>').join("")}
    <div class="callout">\${esc(om.savings.h4Sizing)}</div>
    <h4 style="margin-top:1rem">\${esc(om.savings.leversTitle)}</h4>
    <div style="overflow-x:auto"><table><thead><tr><th>Hyp.</th><th>Lever</th><th>Capability</th><th>Current</th><th>Est. saving</th></tr></thead><tbody>
    \${om.savings.levers.map(r=>'<tr><td>'+esc(r.hyp)+'</td><td>'+esc(r.lever)+'</td><td>'+esc(r.capability)+'</td><td>'+esc(r.current)+'</td><td><strong style="color:var(--accent)">'+esc(r.saving)+'</strong></td></tr>').join("")}
    </tbody></table></div>
    <div class="callout" style="margin-top:1rem">\${esc(om.savings.cumulative)}</div>
  </section>

  <section class="section scroll-anchor" id="taxonomy-roadmap">
    <h3>Implementation Roadmap</h3>
    <p class="lead">\${esc(om.executiveSummary.rows.find(r=>r.dimension==="Roadmap")?.finding||"Three-wave programme aligned to governance, platform consolidation, and run-rate savings.")}</p>
    <div class="roadmap-grid">\${appData.roadmap.phases.map(p=>'<article class="roadmap"><p class="ph">'+esc(p.phase)+'</p><h4>'+esc(p.horizon)+'</h4><ul>'+p.actions.slice(0,4).map(a=>'<li>'+esc(a)+'</li>').join("")+'</ul><p class="save">'+esc(p.savings)+'</p></article>').join("")}</div>
  </section>

  <section class="section scroll-anchor" id="taxonomy-regions">
    <h3>Operating regions · vendor spend detail</h3>
    <p class="lead">June 2026 spend cube costs by business unit — IT spend and vendor cost structure.</p>
    <div class="region-tabs" id="regionTabs"></div>
    <div class="region-panel" id="regionPanel"></div>
  </section>\`;
  renderRegions();
  taxonomyRendered=true;
}

function renderRegions(){
  const tabs=document.getElementById("regionTabs"),panel=document.getElementById("regionPanel");
  if(!tabs||!panel)return;
  tabs.innerHTML=appData.operatingRegions.map(r=>'<button type="button" class="region-tab'+(r.id===activeRegionId?" active":"")+'" data-id="'+esc(r.id)+'"><span class="rn">'+esc(r.name)+'</span><span class="rs">'+esc(r.vendorSpend)+' · IT '+esc(r.itSpend)+'</span></button>').join("");
  const region=appData.operatingRegions.find(r=>r.id===activeRegionId)||appData.operatingRegions[0];
  panel.innerHTML='<div class="region-head"><h4 style="color:#fff;font-size:1.1rem">'+esc(region.name)+'</h4><p style="color:var(--light);font-size:.85rem;margin-top:.25rem">'+esc(region.vendorSpend)+' vendor spend · IT '+esc(region.itSpend)+' ('+esc(region.itPercent)+')</p></div><div style="padding:1rem"><p class="sub">'+esc(region.costExplanation)+'</p><div class="bu-grid">'+region.businessUnits.map(bu=>'<div class="bu-card"><strong>'+esc(bu)+'</strong><span style="color:var(--muted)">Spend cube detail available in full application.</span></div>').join("")+'</div></div>';
  tabs.querySelectorAll(".region-tab").forEach(btn=>{btn.onclick=()=>{activeRegionId=btn.dataset.id;renderRegions();};});
}

function renderSubnav(){
  const links=currentPage==="benchmark"?appData.navLinks:appData.taxonomyNavLinks;
  document.getElementById("subnav").innerHTML=links.map(l=>'<button type="button" onclick="scrollToId(\\''+l.id+'\\')">'+esc(l.label)+'</button>').join("");
}

function scrollToId(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth",block:"start"});}

function setPage(page){
  currentPage=page;
  document.querySelectorAll(".page-tab").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  document.getElementById("page-benchmark").classList.toggle("active",page==="benchmark");
  document.getElementById("page-taxonomy").classList.toggle("active",page==="taxonomy");
  if(page==="taxonomy"&&!taxonomyRendered)renderTaxonomy();
  renderSubnav();
  window.scrollTo({top:0});
}

${agentClientJs}

document.querySelectorAll(".page-tab").forEach(b=>b.onclick=()=>setPage(b.dataset.page));
document.getElementById("siteTitle").textContent=appData.brand.heroTitle;
document.getElementById("siteMeta").textContent=appData.brand.heroMeta;
document.getElementById("siteFooter").innerHTML=esc(appData.footer.confidentiality)+" · "+esc(appData.footer.attribution)+"<br/>"+esc(appData.footer.copyright)+" "+esc(appData.footer.disclaimer)+"<br/>"+esc(appData.draft.footnote);
renderBenchmark();
renderSubnav();
initAgent();
window.addEventListener("resize",()=>{if(document.getElementById("savingsChart"))drawChart();});
</script>
</body>
</html>`;

writeFileSync("culligan-cost-savings.html", html);
console.log("Wrote culligan-cost-savings.html (" + Math.round(html.length / 1024) + " KB)");
