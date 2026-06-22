import { keyFindings, cioPriority } from "../data/benchmarkData";
import { operatingRegions } from "../data/taxonomyData";
import { opModelLeadership } from "../data/opModelData";
import {
  getBuCostForTaxonomyBu,
  regionCostData,
  taxonomyBuMap,
} from "../data/buCostData";
import { getCapabilityDescription } from "../data/capabilityDescriptions";
import { agentDestinations, matchDestination } from "./navigationMap";
import { searchKnowledge } from "./knowledgeIndex";
import { formatToolResultPlain } from "./plainEnglish";

export const toolDefinitions = [
  {
    name: "navigate",
    description: "Navigate the user to a page section or hypothesis area",
    parameters: { section: "string — section label or id", page: "optional — / or /taxonomy" },
  },
  {
    name: "search",
    description: "Search the report knowledge base for relevant content",
    parameters: { query: "string" },
  },
  {
    name: "get_hypothesis",
    description: "Get full details for a benchmarking hypothesis H1–H6",
    parameters: { code: "H1–H6" },
  },
  {
    name: "get_bu_spend",
    description: "Get IT spend details for a business unit",
    parameters: { bu: "business unit name" },
  },
  {
    name: "get_region_spend",
    description: "Get regional IT spend summary",
    parameters: { region: "Americas | EMEA | APAC" },
  },
  {
    name: "get_cio_priorities",
    description: "Get the top 3 CIO priority actions",
    parameters: {},
  },
  {
    name: "get_leadership_options",
    description: "Get IT leadership structure design options",
    parameters: { recommended_only: "boolean optional" },
  },
  {
    name: "list_sections",
    description: "List all navigable sections on the site",
    parameters: { page: "optional — current, benchmark, or taxonomy" },
  },
  {
    name: "get_capability",
    description: "Get capability description by name",
    parameters: { name: "capability name", domain: "optional", region: "optional" },
  },
];

function findBuName(query) {
  const q = query.toLowerCase();
  const taxonomyNames = Object.keys(taxonomyBuMap);
  const exact = taxonomyNames.find((name) => name.toLowerCase() === q);
  if (exact) return exact;

  return (
    taxonomyNames.find((name) => q.includes(name.toLowerCase()) || name.toLowerCase().includes(q)) ??
    null
  );
}

export async function executeTool(name, args, { navigate, page }) {
  switch (name) {
    case "navigate": {
      const dest =
        matchDestination(args.section ?? "") ??
        agentDestinations.find((d) => d.id === args.section || d.label === args.section);
      if (!dest) {
        return { ok: false, error: `Could not find section "${args.section}". Use list_sections to see options.` };
      }
      if (navigate) {
        if (page !== dest.page) navigate(dest.page);
        setTimeout(() => {
          const el = document.getElementById(dest.id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, page !== dest.page ? 400 : 0);
      }
      return {
        ok: true,
        action: "navigate",
        destination: dest,
        message: `Navigated to ${dest.label}`,
      };
    }

    case "search": {
      const results = searchKnowledge(args.query ?? "", 5);
      return {
        ok: true,
        action: "search",
        query: args.query,
        results: results.map((r) => ({
          title: r.title,
          excerpt: r.content.slice(0, 400) + (r.content.length > 400 ? "…" : ""),
          source: r.source,
          id: r.id,
        })),
      };
    }

    case "get_hypothesis": {
      const code = (args.code ?? "").toUpperCase().replace(/^H/, "H");
      const normalized = code.startsWith("H") ? code : `H${code}`;
      const legend = keyFindings.hypothesisLegend.rows.find((r) => r.code === normalized);
      const finding = keyFindings.findingsTable.rows.find((r) => r.code === normalized);
      if (!legend) return { ok: false, error: `Unknown hypothesis ${args.code}` };
      return {
        ok: true,
        action: "get_hypothesis",
        code: normalized,
        legend,
        finding: finding ?? null,
        sectionId: finding?.sectionId ?? `hypothesis-${normalized.toLowerCase()}`,
      };
    }

    case "get_bu_spend": {
      const buName = findBuName(args.bu ?? "");
      if (!buName) {
        return {
          ok: false,
          error: `BU "${args.bu}" not found. Known BUs include: ${Object.keys(taxonomyBuMap).slice(0, 8).join(", ")}…`,
        };
      }
      const data = getBuCostForTaxonomyBu(buName);
      if (!data) return { ok: false, error: `No spend data for ${buName}` };
      return { ok: true, action: "get_bu_spend", bu: buName, data };
    }

    case "get_region_spend": {
      const raw = (args.region ?? "").toLowerCase();
      const regionName = { americas: "Americas", emea: "EMEA", apac: "APAC" }[raw];
      if (!regionName) return { ok: false, error: "Region must be Americas, EMEA, or APAC" };
      const cube = regionCostData[regionName];
      const narrative = operatingRegions.find((r) => r.name === regionName);
      return {
        ok: true,
        action: "get_region_spend",
        region: regionName,
        cube,
        narrative: narrative
          ? {
              vendorSpend: narrative.vendorSpend,
              itSpend: narrative.itSpend,
              itPercent: narrative.itPercent,
              businessUnits: narrative.businessUnits,
            }
          : null,
      };
    }

    case "get_cio_priorities": {
      return {
        ok: true,
        action: "get_cio_priorities",
        intro: cioPriority.intro,
        priorities: cioPriority.priorities.map((p) => ({
          step: p.step,
          title: p.title,
          horizon: p.horizon,
          savings: p.savings,
          owner: p.owner,
        })),
      };
    }

    case "get_leadership_options": {
      const options = args.recommended_only
        ? opModelLeadership.options.filter((o) => o.recommended)
        : opModelLeadership.options;
      return {
        ok: true,
        action: "get_leadership_options",
        lead: opModelLeadership.lead,
        principle: opModelLeadership.structuralPrinciple,
        options,
      };
    }

    case "list_sections": {
      const filter = (args.page ?? "all").toLowerCase();
      const list =
        filter === "taxonomy" || filter === "/taxonomy"
          ? agentDestinations.filter((d) => d.page === "/taxonomy")
          : filter === "benchmark" || filter === "/" || filter === "current"
            ? agentDestinations.filter((d) => d.page === "/")
            : agentDestinations;
      return {
        ok: true,
        action: "list_sections",
        sections: list.map((d) => ({ id: d.id, label: d.label, page: d.page })),
      };
    }

    case "get_capability": {
      const desc = getCapabilityDescription(args.name, args.domain, args.region);
      if (!desc) return { ok: false, error: `No description found for capability "${args.name}"` };
      return { ok: true, action: "get_capability", name: args.name, description: desc };
    }

    default:
      return { ok: false, error: `Unknown tool: ${name}` };
  }
}

export function formatToolResult(result) {
  return formatToolResultPlain(result);
}
