import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { getCapabilityDescription } from "../data/capabilityDescriptions";

export default function CapabilityItem({
  name,
  theme,
  domain,
  region,
  className = "",
}) {
  const description = getCapabilityDescription(name, domain, region);
  const [expanded, setExpanded] = useState(false);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0 });
  const itemRef = useRef(null);
  const canInteract = Boolean(description);

  const showTooltip = useCallback(() => {
    if (!description || !itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = Math.min(rect.left + rect.width / 2, window.innerWidth - 180);
    const y = rect.top;
    setTooltip({ show: true, x, y });
  }, [description]);

  const hideTooltip = useCallback(() => setTooltip((t) => ({ ...t, show: false })), []);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  const handleClick = () => {
    if (!canInteract) return;
    setExpanded((v) => !v);
    hideTooltip();
  };

  return (
    <>
      <div ref={itemRef} className={`w-full ${className}`}>
        <button
          type="button"
          disabled={!canInteract}
          onClick={handleClick}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
          onFocus={showTooltip}
          onBlur={hideTooltip}
          className={`w-full rounded-lg border px-2 py-1.5 text-center text-[11px] sm:text-xs font-medium leading-snug transition-all duration-200 ${theme.chip} ${
            canInteract
              ? "cursor-pointer hover:shadow-md hover:ring-2 hover:ring-culligan-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-culligan-accent"
              : "cursor-default"
          } ${expanded ? "ring-2 ring-culligan-accent/50 shadow-md" : ""}`}
          aria-expanded={canInteract ? expanded : undefined}
          aria-label={canInteract ? `${name} — view description` : name}
        >
          <span className="inline-flex items-center justify-center gap-1">
            {name}
            {canInteract && (
              <svg
                className="h-3 w-3 shrink-0 opacity-40"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </button>
        {expanded && description && (
          <p
            className="mt-2 rounded-lg border border-culligan-accent/25 bg-white px-3 py-2.5 text-left text-[10px] sm:text-[11px] leading-relaxed text-culligan-body shadow-sm lg:hidden"
          >
            {description}
          </p>
        )}
      </div>

      {tooltip.show &&
        description &&
        createPortal(
          <div
            className="pointer-events-none fixed z-[200] hidden lg:block max-w-sm -translate-x-1/2 -translate-y-full px-1"
            style={{ left: tooltip.x, top: tooltip.y - 8 }}
            role="tooltip"
          >
            <div className="rounded-xl bg-culligan-deep px-4 py-3 text-left shadow-2xl ring-1 ring-white/10">
              <p className="font-headline text-xs font-bold text-culligan-accent mb-1.5">{name}</p>
              <p className="text-[11px] leading-relaxed text-culligan-light">{description}</p>
            </div>
            <div className="mx-auto h-2 w-2 rotate-45 bg-culligan-deep translate-y-[-4px]" />
          </div>,
          document.body
        )}
    </>
  );
}
