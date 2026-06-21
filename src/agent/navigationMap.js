import { navLinks } from "../data/benchmarkData";
import { taxonomyNavLinks } from "../data/taxonomyData";

/** Canonical destinations the agent can navigate to */
export const agentDestinations = [
  ...navLinks.map((link) => ({
    id: link.id,
    label: link.label,
    page: "/",
    aliases: [link.label.toLowerCase(), link.id],
  })),
  ...taxonomyNavLinks.map((link) => ({
    id: link.id,
    label: link.label,
    page: "/taxonomy",
    aliases: [link.label.toLowerCase(), link.id.replace("taxonomy-", "").replace(/-/g, " ")],
  })),
  {
    id: "hypothesis-h1",
    label: "H1 AI & Automation",
    page: "/",
    aliases: ["h1", "ai", "automation", "moveworks"],
  },
  {
    id: "hypothesis-h2",
    label: "H2 Spans & Layers",
    page: "/",
    aliases: ["h2", "spans", "layers", "headcount"],
  },
  {
    id: "hypothesis-h3",
    label: "H3 Infrastructure & Cloud",
    page: "/",
    aliases: ["h3", "infrastructure", "cloud"],
  },
  {
    id: "hypothesis-h4",
    label: "H4 Application & Platform",
    page: "/",
    aliases: ["h4", "application", "platform", "erp", "crm"],
  },
  {
    id: "hypothesis-h5",
    label: "H5 IT Support & Operating Model",
    page: "/taxonomy",
    aliases: ["h5", "operating model", "service desk", "itsm"],
  },
  {
    id: "hypothesis-h6",
    label: "H6 Vendor & Licensing",
    page: "/",
    aliases: ["h6", "vendor", "licensing", "sam", "software"],
  },
];

export function matchDestination(query) {
  const q = query.toLowerCase().trim();
  if (!q) return null;

  let best = null;
  let bestScore = 0;

  for (const dest of agentDestinations) {
    for (const alias of dest.aliases) {
      if (q.includes(alias) || alias.includes(q)) {
        const score = alias.length;
        if (score > bestScore) {
          bestScore = score;
          best = dest;
        }
      }
    }
    if (q.includes(dest.label.toLowerCase())) {
      const score = dest.label.length + 10;
      if (score > bestScore) {
        bestScore = score;
        best = dest;
      }
    }
  }

  return best;
}
