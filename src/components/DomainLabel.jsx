import { useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

export default function DomainLabel({ name, meta, className = "" }) {
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0 });
  const [expanded, setExpanded] = useState(false);
  const labelRef = useRef(null);
  const canInteract = Boolean(meta?.covers);

  const showTooltip = useCallback(() => {
    if (!canInteract || !labelRef.current) return;
    const rect = labelRef.current.getBoundingClientRect();
    const x = Math.min(rect.left + rect.width / 2, window.innerWidth - 200);
    const y = rect.top;
    setTooltip({ show: true, x, y });
  }, [canInteract]);

  const hideTooltip = useCallback(() => setTooltip((t) => ({ ...t, show: false })), []);

  const handleClick = () => {
    if (!canInteract) return;
    setExpanded((v) => !v);
    hideTooltip();
  };

  return (
    <>
      <div ref={labelRef} className={className}>
        <button
          type="button"
          disabled={!canInteract}
          onClick={handleClick}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
          onFocus={showTooltip}
          onBlur={hideTooltip}
          className={`font-headline text-center font-bold leading-snug ${
            canInteract
              ? "cursor-pointer underline decoration-white/40 decoration-dotted underline-offset-4 hover:decoration-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
              : ""
          }`}
          aria-expanded={canInteract ? expanded : undefined}
          aria-label={canInteract ? `${name} — view domain description` : name}
        >
          {name}
        </button>
        {expanded && meta && (
          <div className="mt-2 rounded-lg bg-white/95 px-3 py-2.5 text-left shadow-lg ring-1 ring-black/10 lg:hidden">
            <p className="text-[11px] leading-relaxed text-culligan-body">{meta.covers}</p>
          </div>
        )}
      </div>

      {tooltip.show &&
        meta &&
        createPortal(
          <div
            className="pointer-events-none fixed z-[200] hidden lg:block max-w-xs -translate-x-1/2 -translate-y-full px-1"
            style={{ left: tooltip.x, top: tooltip.y - 8 }}
            role="tooltip"
          >
            <div className="rounded-xl bg-culligan-deep px-4 py-3 text-left shadow-2xl ring-1 ring-white/10">
              <p className="font-headline text-xs font-bold text-culligan-accent mb-1.5">{name}</p>
              <p className="text-[11px] leading-relaxed text-culligan-light">{meta.covers}</p>
            </div>
            <div className="mx-auto h-2 w-2 rotate-45 bg-culligan-deep translate-y-[-4px]" />
          </div>,
          document.body
        )}
    </>
  );
}
