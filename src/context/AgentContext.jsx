import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { runAgent } from "../agent/runAgent";
import { suggestedPrompts } from "../agent/planner";

const AgentContext = createContext(null);

export function AgentProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content:
        "I'm your Culligan IT Cost Savings assistant. Ask me anything about the report in plain language — I'll explain the findings simply and can take you to the right page.\n\nTry a suggested question below, or type your own.",
      mode: "system",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const context = useMemo(
    () => ({
      page: location.pathname,
      pathname: location.pathname,
    }),
    [location.pathname]
  );

  const sendMessage = useCallback(
    async (text) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      const userMsg = { id: `u-${Date.now()}`, role: "user", content: trimmed };
      setMessages((prev) => [...prev, userMsg]);
      setLoading(true);

      try {
        const history = messages
          .filter((m) => m.role === "user" || m.role === "assistant")
          .slice(-8)
          .map((m) => ({ role: m.role, content: m.content }));

        const result = await runAgent({
          message: trimmed,
          history,
          context,
          navigate,
        });

        setMessages((prev) => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            role: "assistant",
            content: result.content,
            mode: result.mode,
            toolRuns: result.toolRuns,
          },
        ]);
      } catch (err) {
        setMessages((prev) => [
          ...prev,
          {
            id: `e-${Date.now()}`,
            role: "assistant",
            content: `Sorry, something went wrong on my end. Please try asking again in simpler words — for example, "What are the top 3 CIO priorities?" or "How much does EMEA spend on IT?"`,
            mode: "error",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [loading, messages, context, navigate]
  );

  const value = useMemo(
    () => ({
      open,
      setOpen,
      messages,
      loading,
      sendMessage,
      suggestedPrompts,
      context,
    }),
    [open, messages, loading, sendMessage, context]
  );

  return <AgentContext.Provider value={value}>{children}</AgentContext.Provider>;
}

export function useAgent() {
  const ctx = useContext(AgentContext);
  if (!ctx) throw new Error("useAgent must be used within AgentProvider");
  return ctx;
}
