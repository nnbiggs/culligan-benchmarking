import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAgent } from "../context/AgentContext";

function MarkdownLite({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|_[^_]+_)/g);
  return (
    <span className="whitespace-pre-wrap leading-relaxed">
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-culligan-deep">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("_") && part.endsWith("_")) {
          return (
            <em key={i} className="text-culligan-muted text-xs not-italic">
              {part.slice(1, -1)}
            </em>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

function ToolBadge({ toolRuns }) {
  if (!toolRuns?.length) return null;
  const labels = toolRuns.map((t) => t.tool.replace(/_/g, " "));
  return (
    <div className="mt-2 flex flex-wrap gap-1">
      {labels.map((label) => (
        <span
          key={label}
          className="rounded-full bg-culligan-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-culligan-accent"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

export default function AgentAssistant() {
  const { open, setOpen, messages, loading, sendMessage, suggestedPrompts } = useAgent();
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.elements.message;
    sendMessage(input.value);
    input.value = "";
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 left-4 sm:left-6 z-50 flex items-center gap-2 rounded-2xl bg-culligan-deep px-4 py-3 text-white shadow-2xl ring-1 ring-white/10 hover:bg-[#033875] transition-colors"
        aria-label={open ? "Close AI agent" : "Open AI agent"}
        aria-expanded={open}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-culligan-accent/30">
          <svg className="h-4 w-4 text-culligan-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
          </svg>
        </span>
        <span className="hidden sm:inline text-sm font-semibold">Ask the report</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 left-4 right-4 sm:left-6 sm:right-auto z-50 flex w-auto sm:w-[min(420px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10"
            style={{ maxHeight: "min(70vh, 640px)" }}
            role="dialog"
            aria-label="IT Benchmarking AI agent"
          >
            <header className="flex items-center justify-between gap-3 bg-culligan-deep px-4 py-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-culligan-accent">Agentic assistant</p>
                <p className="text-sm font-semibold text-white">Culligan IT Benchmarking</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-white/80 hover:bg-white/10"
                aria-label="Close"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-culligan-off-white/40">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-sm ${
                      msg.role === "user"
                        ? "bg-culligan-deep text-white"
                        : "bg-white text-culligan-body ring-1 ring-black/5"
                    }`}
                  >
                    <MarkdownLite text={msg.content} />
                    {msg.toolRuns && <ToolBadge toolRuns={msg.toolRuns} />}
                    {msg.mode === "llm" && (
                      <p className="mt-1 text-[10px] text-culligan-muted">Powered by LLM + tools</p>
                    )}
                    {msg.mode === "local" && (
                      <p className="mt-1 text-[10px] text-culligan-muted">Local agent · tools + search</p>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-black/5">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-2 w-2 rounded-full bg-culligan-accent animate-pulse"
                          style={{ animationDelay: `${i * 150}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5 border-t border-culligan-off-white bg-white">
                {suggestedPrompts.map((prompt) => (
                  <button
                    key={prompt.label}
                    type="button"
                    onClick={() => sendMessage(prompt.message)}
                    className="rounded-full bg-culligan-off-white px-3 py-1.5 text-xs font-medium text-culligan-deep hover:bg-culligan-light transition-colors"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={onSubmit} className="border-t border-culligan-off-white bg-white p-3">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  name="message"
                  type="text"
                  placeholder="Ask about H1–H6, spend, savings, or say go to…"
                  disabled={loading}
                  className="flex-1 rounded-xl border border-culligan-off-white bg-culligan-off-white/50 px-3 py-2.5 text-sm text-culligan-body placeholder:text-culligan-muted focus:outline-none focus:ring-2 focus:ring-culligan-accent/40"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="shrink-0 rounded-xl bg-culligan-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#166b85] disabled:opacity-50 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
