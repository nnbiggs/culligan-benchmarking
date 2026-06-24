/* Client-side agent for culligan-cost-savings.html — expects global appData */

const AGENT_DISCLAIMER =
  "Note: All figures are draft estimates for internal review only. Do not use for board or external reporting without CIO sign-off.";

function stripMd(text) {
  if (!text) return "";
  return String(text)
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function firstSentence(text, max = 280) {
  const clean = stripMd(text);
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const dot = cut.lastIndexOf(".");
  return dot > 80 ? cut.slice(0, dot + 1) : cut.trim() + "…";
}

function explainHypothesis(code) {
  const names = {
    H1: "AI and automation",
    H2: "spans, layers, and IT organisation structure",
    H3: "infrastructure and cloud",
    H4: "applications, ERP, and platforms",
    H5: "IT support and the operating model",
    H6: "vendor management and software licensing",
  };
  return names[code] || "this area of IT spending";
}

function matchDestination(query) {
  const q = query.toLowerCase().trim();
  if (!q) return null;
  let best = null;
  let bestScore = 0;
  for (const dest of appData.agentDestinations) {
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

function navigateTo(dest) {
  if (!dest) return false;
  const page = dest.page === "taxonomy" ? "taxonomy" : "benchmark";
  if (typeof setPage === "function") setPage(page);
  setTimeout(() => {
    if (typeof scrollToId === "function") scrollToId(dest.id);
  }, page !== currentPage ? 350 : 50);
  return true;
}

function searchKnowledge(query, limit = 4) {
  const q = query.toLowerCase();
  const words = q.split(/\s+/).filter((w) => w.length > 2);
  const scored = appData.searchSnippets
    .map((s) => {
      const hay = (s.title + " " + s.content).toLowerCase();
      let score = 0;
      for (const w of words) {
        if (hay.includes(w)) score += w.length;
      }
      if (hay.includes(q)) score += q.length * 2;
      return { ...s, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit);
}

function planAgentSteps(message) {
  const m = message.toLowerCase().trim();
  const steps = [];
  const NAV_RE = /\b(go to|show me|take me|navigate|open|jump to|scroll to)\b/i;
  const CIO_RE = /\b(cio priorit|top 3|three things|do nothing|most important)\b/i;
  const LEADERSHIP_RE = /\b(leadership|cio structure|regional cio|it director|design option)\b/i;
  const SAVINGS_RE = /\b(savings|save|how much|ebitda|enterprise value|money come from)\b/i;
  const ROADMAP_RE = /\b(roadmap|phase|wave|implementation plan)\b/i;
  const LIST_RE = /\b(what sections|what pages|where can i|list sections|what can you)\b/i;
  const VENDOR_RE = /\b(vendor|software|licen|sam|h6)\b/i;
  const FUTURE_RE = /\b(future state|consolidat|target model)\b/i;
  const HYPOTHESIS_RE = /\bh\s*([1-6])\b/i;
  const REGION_RE = /\b(americas|emea|apac)\b/i;

  if (LIST_RE.test(m)) {
    steps.push({ tool: "list_sections", args: {} });
    return steps;
  }

  if (CIO_RE.test(m)) {
    steps.push({ tool: "get_cio_priorities", args: {} });
    if (NAV_RE.test(m)) steps.push({ tool: "navigate", args: { section: "CIO priorities" } });
    return steps;
  }

  if (LEADERSHIP_RE.test(m)) {
    steps.push({ tool: "get_leadership_options", args: { recommended_only: /\brecommend/i.test(m) } });
    if (NAV_RE.test(m) || /\boption|design\b/i.test(m)) {
      steps.push({ tool: "navigate", args: { section: "IT Accountability" } });
    }
    return steps;
  }

  if (FUTURE_RE.test(m)) {
    steps.push({ tool: "get_future_state", args: {} });
    if (NAV_RE.test(m)) steps.push({ tool: "navigate", args: { section: "Future state" } });
    return steps;
  }

  if (SAVINGS_RE.test(m) && !HYPOTHESIS_RE.test(m)) {
    steps.push({ tool: "get_savings_summary", args: {} });
    if (NAV_RE.test(m)) steps.push({ tool: "navigate", args: { section: "Savings & EBITDA" } });
    return steps;
  }

  if (ROADMAP_RE.test(m)) {
    steps.push({ tool: "get_roadmap", args: {} });
    if (NAV_RE.test(m)) steps.push({ tool: "navigate", args: { section: "Roadmap" } });
    return steps;
  }

  if (VENDOR_RE.test(m) && !HYPOTHESIS_RE.test(m)) {
    steps.push({ tool: "get_hypothesis", args: { code: "H6" } });
    return steps;
  }

  const hypMatch = m.match(HYPOTHESIS_RE);
  if (hypMatch) {
    steps.push({ tool: "get_hypothesis", args: { code: "H" + hypMatch[1] } });
    if (NAV_RE.test(m)) steps.push({ tool: "navigate", args: { section: "H" + hypMatch[1] } });
    return steps;
  }

  const regionMatch = m.match(REGION_RE);
  if (regionMatch && /\b(spend|it|cost|region|vendor)\b/i.test(m)) {
    const region = { americas: "Americas", emea: "EMEA", apac: "APAC" }[regionMatch[1]];
    steps.push({ tool: "get_region_spend", args: { region } });
    if (NAV_RE.test(m)) steps.push({ tool: "navigate", args: { section: "Regional spend" } });
    return steps;
  }

  if (NAV_RE.test(m)) {
    const dest = matchDestination(m);
    if (dest) {
      steps.push({ tool: "navigate", args: { section: dest.label } });
      return steps;
    }
  }

  if (/\b(operating model|24 bu|fragment)\b/i.test(m)) {
    steps.push({ tool: "get_operating_model_summary", args: {} });
    return steps;
  }

  if (/\b(maturity|score)\b/i.test(m)) {
    steps.push({ tool: "get_maturity", args: {} });
    return steps;
  }

  steps.push({ tool: "search", args: { query: message } });
  return steps;
}

function executeTool(name, args) {
  const d = appData;

  switch (name) {
    case "navigate": {
      const dest = matchDestination(args.section || "") || d.agentDestinations.find((x) => x.id === args.section);
      if (!dest) {
        return {
          ok: false,
          error: 'I could not find that section. Try "CIO priorities", "roadmap", "future state", or "regional spend".',
        };
      }
      navigateTo(dest);
      return { ok: true, action: "navigate", destination: dest };
    }

    case "search": {
      const results = searchKnowledge(args.query || "", 4);
      return { ok: true, action: "search", query: args.query, results };
    }

    case "get_hypothesis": {
      const code = (args.code || "").toUpperCase().replace(/^H?/, "H");
      const normalized = code.startsWith("H") ? code : "H" + code;
      const legend = d.keyFindings.hypothesisLegend.rows.find((r) => r.code === normalized);
      const finding = d.keyFindings.findingsTable.rows.find((r) => r.code === normalized);
      if (!legend) return { ok: false, error: "Unknown hypothesis — try H1 through H6." };
      return { ok: true, action: "get_hypothesis", code: normalized, legend, finding };
    }

    case "get_region_spend": {
      const regionName = args.region;
      const region = d.operatingRegions.find((r) => r.name === regionName);
      if (!region) return { ok: false, error: "Region must be Americas, EMEA, or APAC." };
      return { ok: true, action: "get_region_spend", region: regionName, data: region };
    }

    case "get_cio_priorities":
      return { ok: true, action: "get_cio_priorities", data: d.cioPriority };

    case "get_leadership_options":
      return {
        ok: true,
        action: "get_leadership_options",
        data: d.opModel.itLeadershipStructure,
      };

    case "get_savings_summary":
      return { ok: true, action: "get_savings_summary", data: d.ebitdaImpact };

    case "get_roadmap":
      return { ok: true, action: "get_roadmap", data: d.roadmap };

    case "get_future_state":
      return { ok: true, action: "get_future_state", data: d.opModel.operatingModel };

    case "get_operating_model_summary":
      return { ok: true, action: "get_operating_model_summary", data: d.opModel };

    case "get_maturity":
      return { ok: true, action: "get_maturity", data: d.maturityModel };

    case "list_sections":
      return { ok: true, action: "list_sections", sections: d.navLinks.concat(d.taxonomyNavLinks) };

    default:
      return { ok: false, error: "Something went wrong. Please try rephrasing your question." };
  }
}

function formatToolResult(result) {
  if (!result.ok) {
    return result.error.includes("not find")
      ? result.error
      : "Sorry — " + stripMd(result.error);
  }

  switch (result.action) {
    case "navigate":
      return `I've scrolled to **${result.destination.label}** — you should see it on screen now.`;

    case "search": {
      if (!result.results.length) {
        return 'I searched the report but did not find a close match.\n\nTry asking about:\n• Top CIO priorities\n• How much Culligan could save\n• EMEA IT spend\n• Or say "take me to the roadmap"';
      }
      const top = result.results[0];
      const extra =
        result.results.length > 1
          ? "\n\nRelated topics: " + result.results.slice(1, 3).map((r) => r.title).join(", ") + "."
          : "";
      return firstSentence(top.content, 520) + extra;
    }

    case "get_hypothesis": {
      const topic = explainHypothesis(result.code);
      const lines = [
        `**${result.code}** looks at ${topic}.`,
        stripMd(result.legend.definition),
        `What we measured: ${stripMd(result.legend.measured)}`,
      ];
      if (result.finding) {
        lines.push(
          `The report flags this as **${result.finding.status}**.`,
          `The numbers: ${stripMd(result.finding.numbers).replace(/\n/g, " · ")}`,
          `What that means in plain terms: ${stripMd(result.finding.meaning)}`
        );
      }
      return lines.join("\n\n");
    }

    case "get_region_spend": {
      const r = result.data;
      return (
        `In **${result.region}**, IT spend is about **${r.itSpend}** (${r.itPercent} of regional vendor spend).\n\n` +
        `${stripMd(r.costExplanation)}\n\n` +
        `Business units in this region include ${r.businessUnits.slice(0, 4).join(", ")}${r.businessUnits.length > 4 ? ", and others" : ""}.`
      );
    }

    case "get_cio_priorities": {
      const p = result.data;
      return [
        "If you can only do three things, start here:",
        ...p.priorities.map(
          (item, i) =>
            `**${i + 1}. ${item.title}**\n` +
            `When: ${stripMd(item.horizon)} · Savings: ${item.savings}\n` +
            `Who leads it: ${item.owner}\n` +
            firstSentence(item.description || item.whyItMatters || "", 200)
        ),
        firstSentence(p.intro, 240),
      ].join("\n\n");
    }

    case "get_leadership_options": {
      const ld = result.data;
      const rec = ld.recommendedOption;
      const highlights = (ld.accountabilityMatrix?.rows ?? [])
        .slice(0, 4)
        .map((r) => "• " + r.function + ": Option 3 → " + r.option3 + ". " + r.whyItMatters);
      return [
        firstSentence(ld.lead, 280),
        "**Recommended: Option " + rec.number + " — " + rec.title + "** (" + rec.tagline + "). " + stripMd(rec.summary),
        highlights.length ? "Key accountability shifts:\n" + highlights.join("\n") : "",
        ld.structuralPrinciple
          ? typeof ld.structuralPrinciple === "string"
            ? stripMd(ld.structuralPrinciple)
            : stripMd(ld.structuralPrinciple.title) + " " + stripMd(ld.structuralPrinciple.body)
          : "",
      ]
        .filter(Boolean)
        .join("\n\n");
    }

    case "get_savings_summary": {
      const e = result.data;
      return (
        `The report puts confirmed annual savings at **$16–31M**, worth roughly **$160–370M** in enterprise value at typical PE multiples (10–12× EBITDA).\n\n` +
        `The operating model case sizes **$20–44M** at Year 3 run rate.\n\n` +
        `${stripMd(e.callout.text)}`
      );
    }

    case "get_roadmap": {
      return result.data.phases
        .map((ph) => `**${ph.phase}** (${ph.horizon}) — ${ph.savings}\n${ph.actions.slice(0, 3).map((a) => "• " + a).join("\n")}`)
        .join("\n\n");
    }

    case "get_future_state": {
      const om = result.data;
      return (
        `${stripMd(om.futureLead)}\n\n` +
        `Key shifts include:\n` +
        om.comparison
          .slice(0, 4)
          .map((c) => `• **${c.dimension}:** ${stripMd(c.future)}`)
          .join("\n")
      );
    }

    case "get_operating_model_summary": {
      const om = result.data;
      return `${stripMd(om.cover.hook)}\n\n${stripMd(om.executiveSummary.rows[0]?.finding || "")}`;
    }

    case "get_maturity":
      return stripMd(result.data.callout.text);

    case "list_sections":
      return (
        "You can explore these sections — ask me to **take you to** any of them:\n\n" +
        "**Executive Summary:** " +
        result.sections
          .filter((s) => s.id.startsWith("taxonomy") === false)
          .map((s) => s.label)
          .join(", ") +
        "\n\n**Operating Model:** " +
        result.sections
          .filter((s) => s.id.startsWith("taxonomy"))
          .map((s) => s.label)
          .join(", ")
      );

    default:
      return "I found something but could not summarise it clearly. Try asking in simpler words.";
  }
}

function synthesizeReply(toolRuns) {
  const navigated = toolRuns.some((t) => t.result?.action === "navigate");
  const parts = toolRuns.map((t) => formatToolResult(t.result)).filter(Boolean);

  if (!parts.length) {
    return 'I could not find a clear answer. Try "What are the top 3 CIO priorities?" or "How much does EMEA spend on IT?"';
  }

  if (parts.length === 1) {
    let reply = parts[0];
    if (navigated && !reply.toLowerCase().includes("scrolled")) {
      reply += "\n\nI've moved the page to the right section for you.";
    }
    return reply;
  }

  const intro = navigated
    ? "Here is what I found — and I have scrolled to the relevant section:"
    : "Here is what I found in the report:";

  return [intro, ...parts].join("\n\n");
}

function runLocalAgent(message) {
  const steps = planAgentSteps(message);
  const toolRuns = steps.slice(0, 4).map((step) => ({
    tool: step.tool,
    args: step.args,
    result: executeTool(step.tool, step.args),
  }));
  return synthesizeReply(toolRuns) + "\n\n" + AGENT_DISCLAIMER;
}

/* ——— UI ——— */

let agentMessages = [];

function renderAgentMarkdown(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts
    .map((part) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return "<strong>" + esc(part.slice(2, -2)) + "</strong>";
      }
      return nl(part);
    })
    .join("");
}

function updateResetButton() {
  const btn = document.getElementById("agentReset");
  if (btn) btn.disabled = agentMessages.length <= 1;
}

function renderAgentMessages() {
  const body = document.getElementById("agentBody");
  if (!body) return;

  let html = agentMessages
    .map((msg) => {
      const cls = msg.role === "user" ? "agent-msg user" : "agent-msg bot";
      const inner = msg.role === "user" ? esc(msg.text) : renderAgentMarkdown(msg.text);
      return '<div class="' + cls + '">' + inner + "</div>";
    })
    .join("");

  body.innerHTML = html;
  body.scrollTop = body.scrollHeight;
  updateResetButton();
}

function renderAgentWelcome() {
  agentMessages = [{ role: "assistant", text: appData.agentWelcome }];
  renderAgentMessages();
}

function resetAgent() {
  renderAgentWelcome();
  const input = document.getElementById("agentInput");
  if (input) input.value = "";
  const panel = document.getElementById("agentPanel");
  if (panel) panel.classList.add("open");
}

function setAgentLoading(on) {
  const sendBtn = document.getElementById("agentSend");
  const input = document.getElementById("agentInput");
  const body = document.getElementById("agentBody");
  if (sendBtn) {
    sendBtn.disabled = on;
    sendBtn.textContent = on ? "…" : "Send";
  }
  if (input) input.disabled = on;
  const existing = document.getElementById("agentTyping");
  if (on && body && !existing) {
    body.insertAdjacentHTML(
      "beforeend",
      '<div class="agent-msg bot agent-typing" id="agentTyping"><span class="agent-typing-label">Looking that up…</span><span class="agent-dots"><span></span><span></span><span></span></span></div>'
    );
    body.scrollTop = body.scrollHeight;
  } else if (!on && existing) {
    existing.remove();
  }
}

function sendAgent(q) {
  q = (q || "").trim();
  if (!q) return;

  agentMessages.push({ role: "user", text: q });
  renderAgentMessages();
  setAgentLoading(true);

  const input = document.getElementById("agentInput");
  if (input) input.value = "";

  setTimeout(() => {
    const reply = runLocalAgent(q);
    agentMessages.push({ role: "assistant", text: reply });
    setAgentLoading(false);
    renderAgentMessages();
  }, 450);
}

function initAgent() {
  renderAgentWelcome();

  document.getElementById("agentFab").onclick = () => {
    document.getElementById("agentPanel").classList.toggle("open");
    setTimeout(() => document.getElementById("agentInput")?.focus(), 100);
  };

  document.getElementById("agentClose").onclick = () => {
    document.getElementById("agentPanel").classList.remove("open");
  };

  document.getElementById("agentReset").onclick = resetAgent;

  document.getElementById("agentSend").onclick = () => sendAgent(document.getElementById("agentInput").value);

  document.getElementById("agentInput").onkeydown = (e) => {
    if (e.key === "Enter") sendAgent(document.getElementById("agentInput").value);
  };

  document.querySelectorAll(".agent-chip").forEach((btn) => {
    btn.onclick = () => sendAgent(btn.dataset.q);
  });

  updateResetButton();
}
