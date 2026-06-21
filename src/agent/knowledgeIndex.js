import { brand, draft, kpis, cioPriority, keyFindings, navLinks } from "../data/benchmarkData";
import { taxonomyBrand, taxonomyKpis, operatingRegions } from "../data/taxonomyData";
import {
  opModelExecutiveSummary,
  opModelCurrentState,
  opModelComparison,
  opModelSavings,
  opModelLeadership,
  opModelRoadmap,
} from "../data/opModelData";
import { regionCostData, taxonomyBuMap, buCostSource } from "../data/buCostData";

function chunk({ id, title, content, tags = [], source }) {
  return { id, title, content: String(content).trim(), tags, source };
}

/** Searchable knowledge base built from all site data */
export const knowledgeChunks = [
  chunk({
    id: "draft-disclaimer",
    title: "Data disclaimer",
    content: `${draft.banner}\n${draft.footnote}`,
    tags: ["disclaimer", "draft", "confidential"],
    source: "benchmarkData",
  }),
  chunk({
    id: "brand-overview",
    title: "Report overview",
    content: `${brand.heroTitle}. ${brand.heroSubtitle}. KPIs: ${kpis.map((k) => `${k.label}: ${k.display ?? `${k.prefix ?? ""}${k.value}${k.suffix ?? ""}`}`).join("; ")}`,
    tags: ["overview", "kpi"],
    source: "benchmarkData",
  }),
  chunk({
    id: "cio-priorities",
    title: "CIO top 3 priorities",
    content: cioPriority.priorities
      .map((p) => `${p.step} ${p.title} — ${p.horizon}. Savings: ${p.savings}. Owner: ${p.owner}. ${p.description ?? p.whyItMatters ?? ""}`)
      .join("\n\n"),
    tags: ["cio", "priority", "sam", "moveworks", "copilot"],
    source: "benchmarkData",
  }),
  ...keyFindings.hypothesisLegend.rows.map((row) =>
    chunk({
      id: `hypothesis-${row.code.toLowerCase()}-legend`,
      title: `${row.code} — ${row.name}`,
      content: `${row.definition}\nMeasured: ${row.measured}`,
      tags: ["hypothesis", row.code.toLowerCase(), row.name.toLowerCase()],
      source: "benchmarkData",
    })
  ),
  ...keyFindings.findingsTable.rows.map((row) =>
    chunk({
      id: `hypothesis-${row.code.toLowerCase()}-finding`,
      title: `${row.area} — ${row.status}`,
      content: `Numbers:\n${row.numbers}\n\nMeaning:\n${row.meaning}`,
      tags: ["hypothesis", row.code.toLowerCase(), row.status.toLowerCase(), row.name.toLowerCase()],
      source: "benchmarkData",
    })
  ),
  chunk({
    id: "taxonomy-overview",
    title: "IT Operating Model overview",
    content: `${taxonomyBrand.title}. ${taxonomyBrand.subtitle}. KPIs: ${taxonomyKpis.map((k) => `${k.label}: ${k.value}`).join("; ")}`,
    tags: ["operating model", "taxonomy"],
    source: "taxonomyData",
  }),
  ...operatingRegions.map((region) =>
    chunk({
      id: `region-${region.id}`,
      title: `${region.name} operating region`,
      content: `${region.vendorSpend} vendor spend · IT ${region.itSpend} (${region.itPercent}). ${region.explanation ?? ""} BUs: ${region.businessUnits.join(", ")}`,
      tags: ["region", region.name.toLowerCase(), "spend"],
      source: "taxonomyData",
    })
  ),
  ...Object.entries(regionCostData).map(([name, data]) =>
    chunk({
      id: `region-cost-${name.toLowerCase()}`,
      title: `${name} IT spend (spend cube)`,
      content: `${name}: ${data.itSpend} IT across ${data.buCount} BUs (${data.itPercent} of vendor spend). ${data.explanation}`,
      tags: ["region", name.toLowerCase(), "spend cube"],
      source: "buCostData",
    })
  ),
  chunk({
    id: "op-model-executive",
    title: "Operating model executive summary",
    content: opModelExecutiveSummary.rows.map((r) => `${r.dimension}: ${r.finding}`).join("\n"),
    tags: ["operating model", "executive summary"],
    source: "opModelData",
  }),
  chunk({
    id: "op-model-current",
    title: "Current state analysis",
    content: `${opModelCurrentState.lead}\n\nDoing well:\n${opModelCurrentState.doingWell.map((r) => `${r.area}: ${r.observation}`).join("\n")}\n\nMust act:\n${opModelCurrentState.mustAct.map((r) => `${r.area}: ${r.observation}`).join("\n")}`,
    tags: ["current state", "fragmentation"],
    source: "opModelData",
  }),
  chunk({
    id: "op-model-future",
    title: "Future state operating model",
    content: `${opModelComparison.futureLead}\n\nKey shifts:\n${opModelComparison.comparison.map((r) => `${r.dimension}: ${r.current} → ${r.future}`).join("\n")}`,
    tags: ["future state", "target", "consolidation"],
    source: "opModelData",
  }),
  chunk({
    id: "op-model-savings",
    title: "Savings case",
    content: `${opModelSavings.h4Lead.join(" ")}\n\nLevers:\n${opModelSavings.levers.map((l) => `${l.hyp} ${l.lever}: ${l.current} → ${l.saving}`).join("\n")}\n\n${opModelSavings.cumulative}`,
    tags: ["savings", "h3", "h4", "h5"],
    source: "opModelData",
  }),
  ...opModelLeadership.options.map((opt) =>
    chunk({
      id: `leadership-${opt.id}`,
      title: `IT leadership option ${opt.number}: ${opt.title}`,
      content: `${opt.recommended ? "RECOMMENDED. " : ""}${opt.structure}\n\nStrengths: ${opt.strengths.join("; ")}\n\nRisks: ${opt.risks.join("; ")}`,
      tags: ["leadership", "cio", opt.recommended ? "recommended" : "option"],
      source: "opModelData",
    })
  ),
  chunk({
    id: "leadership-principle",
    title: "IT leadership structural principle",
    content: `${opModelLeadership.structuralPrinciple.title}: ${opModelLeadership.structuralPrinciple.body}`,
    tags: ["leadership", "governance", "shared services"],
    source: "opModelData",
  }),
  chunk({
    id: "roadmap-waves",
    title: "Implementation roadmap",
    content: opModelRoadmap.waves
      .map((w) => `${w.wave} (${w.horizon}): ${w.actions}. Saving: ${w.saving}`)
      .join("\n\n"),
    tags: ["roadmap", "wave 1", "wave 2", "wave 3"],
    source: "opModelData",
  }),
  chunk({
    id: "bu-spend-source",
    title: "BU spend data source",
    content: `${buCostSource}. Mapped taxonomy BUs: ${Object.keys(taxonomyBuMap).filter((k) => taxonomyBuMap[k]).join(", ")}`,
    tags: ["bu", "spend cube"],
    source: "buCostData",
  }),
  chunk({
    id: "nav-benchmark",
    title: "Benchmark page sections",
    content: navLinks.map((l) => l.label).join(", "),
    tags: ["navigation"],
    source: "benchmarkData",
  }),
];

export function searchKnowledge(query, limit = 5) {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 2);

  if (terms.length === 0) return knowledgeChunks.slice(0, limit);

  const scored = knowledgeChunks
    .map((chunk) => {
      const haystack = `${chunk.title} ${chunk.content} ${chunk.tags.join(" ")}`.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (haystack.includes(term)) score += 2;
        if (chunk.tags.some((tag) => tag.includes(term))) score += 3;
        if (chunk.title.toLowerCase().includes(term)) score += 4;
      }
      return { chunk, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((item) => item.chunk);
}

export function getKnowledgeById(id) {
  return knowledgeChunks.find((c) => c.id === id) ?? null;
}
