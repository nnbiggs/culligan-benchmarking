import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { runAgent } from "../agent/runAgent";
import { suggestedPrompts } from "../agent/planner";

const AgentContext = createContext(null);

const WELCOME_MESSAGE = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi — I'm here to explain this report in plain English.\n\nYou can ask about savings, CIO priorities, regional IT spend, or say things like \"take me to the roadmap\" and I'll scroll you there.\n\nPick a suggested question below, or type your own.",
  mode: "system",
};

export function AgentProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
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

  const resetConversation = useCallback(() => {
    setMessages([{ ...WELCOME_MESSAGE, id: `welcome-${Date.now()}` }]);
  }, []);

  const value = useMemo(
    () => ({
      open,
      setOpen,
      messages,
      loading,
      sendMessage,
      resetConversation,
      suggestedPrompts,
      context,
    }),
    [open, messages, loading, sendMessage, resetConversation, context]
  );

  return <AgentContext.Provider value={value}>{children}</AgentContext.Provider>;
}

export function useAgent() {
  const ctx = useContext(AgentContext);
  if (!ctx) throw new Error("useAgent must be used within AgentProvider");
  return ctx;
}
