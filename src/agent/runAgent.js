import { planAgentSteps } from "./planner";
import { executeTool, formatToolResult } from "./tools";
import { draft } from "../data/benchmarkData";

const MAX_STEPS = 4;

async function callRemoteAgent(message, history, context) {
  const res = await fetch("/api/agent/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history, context }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? `Agent API error (${res.status})`);
  }

  return res.json();
}

/**
 * Run the agent loop: plan → execute tools → synthesise response.
 */
export async function runAgent({ message, history = [], context = {}, navigate }) {
  const toolRuns = [];

  // Try remote LLM agent first
  try {
    const remote = await callRemoteAgent(message, history, context);
    if (remote.steps?.length) {
      for (const step of remote.steps.slice(0, MAX_STEPS)) {
        const result = await executeTool(step.tool, step.args ?? {}, { navigate, page: context.page });
        toolRuns.push({ tool: step.tool, args: step.args, result });
      }
    }
    return {
      content: remote.content ?? toolRuns.map((t) => formatToolResult(t.result)).join("\n\n"),
      toolRuns,
      mode: "llm",
    };
  } catch {
    // Fall through to local agent
  }

  const steps = planAgentSteps(message, context);

  for (const step of steps.slice(0, MAX_STEPS)) {
    const result = await executeTool(step.tool, step.args, { navigate, page: context.page });
    toolRuns.push({ tool: step.tool, args: step.args, result });
  }

  const sections = toolRuns.map((t) => formatToolResult(t.result)).filter(Boolean);
  const navigated = toolRuns.some((t) => t.result.action === "navigate");

  let content = sections.join("\n\n");

  if (!content || content === "No matching content found in the report.") {
    content =
      "I couldn't find a precise match. Try asking about a hypothesis (H1–H6), a region's IT spend, CIO priorities, the savings case, or say **take me to** a section like Future state or Roadmap.";
  }

  if (navigated) {
    content = `${content}\n\n_Scrolled to the relevant section._`;
  }

  return {
    content: `${content}\n\n---\n_${draft.banner}_`,
    toolRuns,
    mode: "local",
  };
}
