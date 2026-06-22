import { planAgentSteps } from "./planner";
import { executeTool } from "./tools";
import { formatToolResultPlain, synthesizeAgentReply, PLAIN_ENGLISH_DISCLAIMER } from "./plainEnglish";

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
      content: remote.content
        ? `${remote.content.trim()}\n\n${PLAIN_ENGLISH_DISCLAIMER}`
        : synthesizeAgentReply({
            message,
            toolRuns,
            sections: toolRuns.map((t) => formatToolResultPlain(t.result)),
          }),
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

  const sections = toolRuns.map((t) => formatToolResultPlain(t.result));
  const content = `${synthesizeAgentReply({ message, toolRuns, sections })}\n\n${PLAIN_ENGLISH_DISCLAIMER}`;

  return {
    content,
    toolRuns,
    mode: "local",
  };
}
