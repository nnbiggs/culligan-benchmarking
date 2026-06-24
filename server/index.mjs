import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), "../.env.local") });
dotenv.config();

const app = express();
const PORT = process.env.AGENT_PORT ?? 8787;

app.use(cors());
app.use(express.json({ limit: "1mb" }));

const SYSTEM_PROMPT = `You are the Culligan IT Cost Savings assistant — a friendly guide to a confidential PwC IT benchmarking report and operating model website.

Your audience includes executives, finance leaders, and business users who may not have a technical IT background. Write every answer in plain, everyday English.

How to write:
- Use short sentences and simple words. Say "software contracts" not "SAM estate"; say "IT support desk" not "ITSM" unless you explain the term first.
- Lead with the answer, then add supporting detail.
- Explain what numbers mean in business terms (e.g. "this is money left on the table" or "this is higher than peer companies").
- Avoid markdown headers, bullet dumps of raw data, and jargon. Use numbered lists only when comparing a few clear options.
- When citing savings or enterprise value, remind the reader these are draft directional estimates, not audited figures.
- Cite hypothesis codes (H1–H6) only when helpful, and always explain what each code covers in plain language.

You help users understand:
- Six analysis areas H1–H6 (AI, infrastructure, applications, operating model, vendor/licensing, overall spend)
- The top 3 CIO priorities
- Current vs future IT operating model, savings case, leadership options, and roadmap
- Regional and business-unit IT spend

When the user wants to see content on the page, include a navigate tool step.
Use tools to fetch accurate data — never invent numbers.

Available tools: navigate, search, get_hypothesis, get_bu_spend, get_region_spend, get_cio_priorities, get_leadership_options, list_sections, get_capability`;

const TOOLS = [
  { name: "navigate", description: "Navigate user to a report section", input_schema: { type: "object", properties: { section: { type: "string" } }, required: ["section"] } },
  { name: "search", description: "Search report knowledge base", input_schema: { type: "object", properties: { query: { type: "string" } }, required: ["query"] } },
  { name: "get_hypothesis", description: "Get H1-H6 hypothesis details", input_schema: { type: "object", properties: { code: { type: "string" } }, required: ["code"] } },
  { name: "get_bu_spend", description: "Get BU IT spend", input_schema: { type: "object", properties: { bu: { type: "string" } }, required: ["bu"] } },
  { name: "get_region_spend", description: "Get regional IT spend", input_schema: { type: "object", properties: { region: { type: "string" } }, required: ["region"] } },
  { name: "get_cio_priorities", description: "Get top 3 CIO priorities", input_schema: { type: "object", properties: {} } },
  { name: "get_leadership_options", description: "Get IT leadership design options", input_schema: { type: "object", properties: { recommended_only: { type: "boolean" } } } },
  { name: "list_sections", description: "List navigable sections", input_schema: { type: "object", properties: { page: { type: "string" } } } },
];

function planWithHeuristics(message) {
  const m = message.toLowerCase();
  const steps = [];

  const hyp = m.match(/\bh\s*([1-6])\b/);
  if (hyp) steps.push({ tool: "get_hypothesis", args: { code: `H${hyp[1]}` } });

  if (/cio priorit|top 3|three things/i.test(m)) steps.push({ tool: "get_cio_priorities", args: {} });
  if (/leadership|regional cio/i.test(m)) steps.push({ tool: "get_leadership_options", args: { recommended_only: /recommend/i.test(m) } });

  const region = m.match(/\b(americas|emea|apac)\b/);
  if (region && /spend|it|cost/i.test(m)) {
    const map = { americas: "Americas", emea: "EMEA", apac: "APAC" };
    steps.push({ tool: "get_region_spend", args: { region: map[region[1]] } });
  }

  if (/go to|show me|take me|navigate|open/i.test(m)) {
    if (/savings/i.test(m)) steps.push({ tool: "navigate", args: { section: "savings case" } });
    else if (/future/i.test(m)) steps.push({ tool: "navigate", args: { section: "future state" } });
    else if (/roadmap/i.test(m)) steps.push({ tool: "navigate", args: { section: "roadmap" } });
    else if (/leadership/i.test(m)) steps.push({ tool: "navigate", args: { section: "it leadership" } });
    else if (hyp) steps.push({ tool: "navigate", args: { section: `h${hyp[1]}` } });
  }

  if (steps.length === 0) steps.push({ tool: "search", args: { query: message } });
  return steps;
}

const OPENAI_MODEL = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

async function callOpenAI(message, history, context) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history.slice(-6).map((m) => ({ role: m.role, content: m.content })),
    {
      role: "user",
      content: `Current page: ${context?.page ?? "/"}\n\nUser question: ${message}`,
    },
  ];

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      max_tokens: 1024,
      messages,
      tools: TOOLS.map((t) => ({
        type: "function",
        function: {
          name: t.name,
          description: t.description,
          parameters: t.input_schema,
        },
      })),
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI API: ${err}`);
  }

  const data = await res.json();
  const choice = data.choices?.[0]?.message;
  const steps = [];
  let text = choice?.content ?? "";

  for (const toolCall of choice?.tool_calls ?? []) {
    const fn = toolCall.function;
    let args = {};
    try {
      args = JSON.parse(fn.arguments || "{}");
    } catch {
      args = {};
    }
    steps.push({ tool: fn.name, args });
  }

  return { content: text, steps };
}

app.get("/api/agent/health", (_req, res) => {
  res.json({
    ok: true,
    llm: Boolean(process.env.OPENAI_API_KEY),
    model: OPENAI_MODEL,
    provider: "openai",
  });
});

app.post("/api/agent/chat", async (req, res) => {
  try {
    const { message, history = [], context = {} } = req.body ?? {};
    if (!message?.trim()) {
      return res.status(400).json({ error: "message is required" });
    }

    let content = "";
    let steps = [];

    const llm = await callOpenAI(message, history, context);
    if (llm) {
      content = llm.content;
      steps = llm.steps;
    }

    if (steps.length === 0) {
      steps = planWithHeuristics(message);
    }

    if (!content) {
      content =
        "Let me look that up in the report for you. I'll pull the relevant facts and take you to the right section if needed.";
    }

    res.json({ content, steps });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Agent API listening on http://localhost:${PORT}`);
  console.log(`LLM mode: ${process.env.OPENAI_API_KEY ? `enabled (OpenAI ${OPENAI_MODEL})` : "heuristic planner only"}`);
});
