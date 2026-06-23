/** Strip markdown-style emphasis for plain display */
function stripMarkdown(text) {
  if (!text) return "";
  return String(text)
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .trim();
}

function firstSentence(text, max = 220) {
  const clean = stripMarkdown(text).replace(/\s+/g, " ");
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastPeriod = cut.lastIndexOf(".");
  return lastPeriod > 80 ? cut.slice(0, lastPeriod + 1) : `${cut.trim()}…`;
}

function explainHypothesisCode(code) {
  const names = {
    H1: "AI and automation",
    H2: "spans, layers, and IT organisation structure",
    H3: "infrastructure and cloud",
    H4: "applications, ERP, and platforms",
    H5: "IT support and the operating model",
    H6: "vendor management and software licensing",
  };
  return names[code] ?? "this area of IT spending";
}

export function formatToolResultPlain(result) {
  if (!result.ok) {
    return result.error?.includes("not found")
      ? `I couldn't find that in the report. Try asking about a region (Americas, EMEA, or APAC), a hypothesis like H4, or say "take me to savings" or "CIO priorities".`
      : `Sorry — ${stripMarkdown(result.error)}`;
  }

  switch (result.action) {
    case "navigate":
      return `I've taken you to the "${result.destination.label}" section. You should see it on screen now.`;

    case "search": {
      if (result.results.length === 0) {
        return "I searched the report but didn't find a close match. Try rephrasing — for example, ask about savings, a specific region, or say \"take me to the roadmap\".";
      }
      const top = result.results[0];
      const extra =
        result.results.length > 1
          ? ` I also found related material on ${result.results
              .slice(1, 3)
              .map((r) => `"${r.title}"`)
              .join(" and ")}.`
          : "";
      return `Here's what the report says about that:\n\n${firstSentence(top.excerpt, 500)}${extra}`;
    }

    case "get_hypothesis": {
      const topic = explainHypothesisCode(result.code);
      const lines = [
        `${result.code} looks at ${topic}.`,
        stripMarkdown(result.legend.definition),
        `In practice, this means checking: ${stripMarkdown(result.legend.measured)}`,
      ];
      if (result.finding) {
        lines.push(
          `The report rates this area as "${result.finding.status}".`,
          `The numbers: ${stripMarkdown(result.finding.numbers).replace(/\n/g, " ")}`,
          `In plain terms: ${stripMarkdown(result.finding.meaning)}`
        );
      }
      return lines.filter(Boolean).join("\n\n");
    }

    case "get_bu_spend": {
      const d = result.data;
      const itSpend = d.itSpend ?? d.totalIt ?? "not available";
      const share = d.itPercent ? `, which is about ${d.itPercent} of that unit's vendor spend` : "";
      const region = d.region ? ` This business unit sits in ${d.region}.` : "";
      return `For ${result.bu}, IT spending is about ${itSpend}${share}.${region}`;
    }

    case "get_region_spend": {
      const n = result.narrative;
      const buList =
        n?.businessUnits?.length > 0
          ? ` The region includes units such as ${n.businessUnits.slice(0, 4).join(", ")}${n.businessUnits.length > 4 ? ", and others" : ""}.`
          : "";
      return (
        `In ${result.region}, IT spending is about ${result.cube.itSpend} across ${result.cube.buCount} business units — roughly ${result.cube.itPercent} of regional vendor spend.` +
        ` ${stripMarkdown(result.cube.explanation)}` +
        buList
      );
    }

    case "get_cio_priorities":
      return [
        "If you can only focus on three things, the report says to start here:",
        ...result.priorities.map(
          (p, i) =>
            `${i + 1}. ${p.title} — ${stripMarkdown(p.horizon)}. Expected savings: ${p.savings}. Led by ${p.owner}.`
        ),
        firstSentence(result.intro, 280),
      ].join("\n\n");

    case "get_leadership_options": {
      const rec = result.recommendedOption;
      const highlights = (result.matrix?.rows ?? [])
        .slice(0, 4)
        .map((r) => `• ${r.function}: Option 3 assigns this to **${r.option3}**. ${stripMarkdown(r.whyItMatters)}`);
      return [
        firstSentence(result.lead, 280),
        `**Recommended: Option ${rec.number} — ${rec.title}** (${rec.tagline}). ${stripMarkdown(rec.summary)}`,
        highlights.length ? "Key accountability shifts:\n" + highlights.join("\n") : "",
        `${result.principle.title}: ${stripMarkdown(result.principle.body)}`,
      ]
        .filter(Boolean)
        .join("\n\n");
    }

    case "list_sections": {
      const labels = result.sections.map((s) => s.label).join(", ");
      return `You can jump to these parts of the site: ${labels}. Ask me to "take you to" any of them by name.`;
    }

    case "get_capability":
      return `${result.name} means: ${stripMarkdown(result.description)}`;

    default:
      return "I found some information, but couldn't summarise it clearly. Please try asking in a different way.";
  }
}

export function synthesizeAgentReply({ message, toolRuns, sections }) {
  const navigated = toolRuns.some((t) => t.result?.action === "navigate");
  const parts = sections.filter(Boolean);

  if (parts.length === 0) {
    return (
      "I couldn't find a clear answer in the report. Try asking about savings, a region's IT spend, the top CIO priorities, or say \"take me to\" a section like Future state or Roadmap."
    );
  }

  if (parts.length === 1) {
    let reply = parts[0];
    if (navigated && !reply.toLowerCase().includes("taken you")) {
      reply = `${reply}\n\nI've scrolled the page to the right section for you.`;
    }
    return reply;
  }

  const intro = navigated
    ? "Here's what I found — and I've taken you to the relevant section on the page:"
    : "Here's what I found in the report:";

  return [intro, ...parts].join("\n\n");
}

export const PLAIN_ENGLISH_DISCLAIMER =
  "Note: All figures on this site are draft estimates for internal review only. They have not been fully validated and should not be used for board or external reporting without CIO sign-off.";
