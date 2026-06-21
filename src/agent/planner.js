import { matchDestination } from "./navigationMap";

const HYPOTHESIS_RE = /\bh\s*([1-6])\b/i;
const REGION_RE = /\b(americas|emea|apac)\b/i;
const NAV_RE = /\b(go to|show me|take me|navigate|open|jump to|scroll to)\b/i;
const CIO_RE = /\b(cio priorit|top 3|three things|do nothing else)\b/i;
const LEADERSHIP_RE = /\b(leadership|cio structure|regional cio|it director)\b/i;
const SAVINGS_RE = /\b(savings case|savings opportunity|year 3|h3|h4|h5)\b/i;
const ROADMAP_RE = /\b(roadmap|wave 1|wave 2|implementation)\b/i;
const LIST_RE = /\b(what sections|what pages|where can i|list sections)\b/i;
const BU_RE = /\b(quench|flagship|germany|iberia|nordics|harvey|zip|poland|uk)\b/i;

/**
 * Local intent planner — selects tools without an LLM.
 * Returns an ordered list of { tool, args } steps.
 */
export function planAgentSteps(message, context = {}) {
  const m = message.toLowerCase().trim();
  const steps = [];

  if (LIST_RE.test(m)) {
    steps.push({
      tool: "list_sections",
      args: { page: context.page?.includes("taxonomy") ? "taxonomy" : "benchmark" },
    });
    return steps;
  }

  if (CIO_RE.test(m)) {
    steps.push({ tool: "get_cio_priorities", args: {} });
    if (NAV_RE.test(m)) steps.push({ tool: "navigate", args: { section: "priority" } });
    return steps;
  }

  if (LEADERSHIP_RE.test(m)) {
    const recommended = /\brecommend/i.test(m);
    steps.push({
      tool: "get_leadership_options",
      args: { recommended_only: recommended },
    });
    if (NAV_RE.test(m) || /\b(option|design)\b/i.test(m)) {
      steps.push({ tool: "navigate", args: { section: "it leadership" } });
    }
    return steps;
  }

  if (SAVINGS_RE.test(m) && !HYPOTHESIS_RE.test(m)) {
    steps.push({ tool: "search", args: { query: "savings case levers" } });
    if (NAV_RE.test(m)) steps.push({ tool: "navigate", args: { section: "savings" } });
    return steps;
  }

  if (ROADMAP_RE.test(m)) {
    steps.push({ tool: "search", args: { query: "implementation roadmap waves" } });
    if (NAV_RE.test(m)) steps.push({ tool: "navigate", args: { section: "roadmap" } });
    return steps;
  }

  const hypMatch = m.match(HYPOTHESIS_RE);
  if (hypMatch) {
    const code = `H${hypMatch[1]}`;
    steps.push({ tool: "get_hypothesis", args: { code } });
    if (NAV_RE.test(m)) steps.push({ tool: "navigate", args: { section: code.toLowerCase() } });
    return steps;
  }

  const regionMatch = m.match(REGION_RE);
  if (regionMatch && /\b(spend|it|cost|region)\b/i.test(m)) {
    const key = regionMatch[1].toLowerCase();
    const region = { americas: "Americas", emea: "EMEA", apac: "APAC" }[key];
    steps.push({ tool: "get_region_spend", args: { region } });
    if (NAV_RE.test(m)) steps.push({ tool: "navigate", args: { section: "regions" } });
    return steps;
  }

  const buMatch = m.match(BU_RE);
  if (buMatch && /\b(spend|it|cost|bu)\b/i.test(m)) {
    steps.push({ tool: "get_bu_spend", args: { bu: buMatch[1] } });
    return steps;
  }

  if (NAV_RE.test(m)) {
    const dest = matchDestination(m);
    if (dest) {
      steps.push({ tool: "navigate", args: { section: dest.label } });
      return steps;
    }
  }

  // Capability lookup
  if (/\bcapability\b/i.test(m)) {
    const capName = m.replace(/.*capability\s+/i, "").trim();
    if (capName.length > 3) {
      steps.push({ tool: "get_capability", args: { name: capName } });
      return steps;
    }
  }

  // Default: knowledge search
  steps.push({ tool: "search", args: { query: message } });
  return steps;
}

export const suggestedPrompts = [
  { label: "Top 3 CIO priorities", message: "What are the top 3 CIO priorities?" },
  { label: "H6 vendor findings", message: "Show me H6 vendor and licensing findings" },
  { label: "Savings case", message: "Take me to the savings case and summarise the levers" },
  { label: "EMEA IT spend", message: "How much does EMEA spend on IT?" },
  { label: "Leadership options", message: "Explain the recommended IT leadership structure" },
  { label: "Future state", message: "Navigate to the future state operating model" },
];
