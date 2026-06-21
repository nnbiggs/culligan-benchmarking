import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useAnimations";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToBottom() {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
}

export function StickySectionNav({ links, ariaLabel = "Page sections" }) {
  const activeId = useActiveSection(links.map((l) => l.id));

  return (
    <nav
      aria-label={ariaLabel}
      className="sticky top-[calc(2.25rem+3.5rem)] sm:top-[calc(2.25rem+4rem)] z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 py-2.5 overflow-x-auto scrollbar-thin [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span className="shrink-0 text-[11px] font-bold uppercase tracking-widest text-culligan-muted pr-1 hidden sm:inline">
            Jump to
          </span>
          {links.map((link) => {
            const active = activeId === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`shrink-0 rounded-full px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                  active
                    ? "bg-culligan-deep text-white shadow-sm"
                    : "bg-slate-100 text-culligan-deep hover:bg-slate-200"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export function PageScrollAssist({ links, ariaLabel = "Page navigation" }) {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  if (!visible) return null;

  const jump = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2" aria-label={ariaLabel}>
      {menuOpen && (
        <div className="w-[min(18rem,calc(100vw-2rem))] rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden mb-1">
          <div className="px-4 py-3 bg-culligan-deep">
            <p className="text-xs font-bold uppercase tracking-widest text-culligan-accent">Sections</p>
          </div>
          <ul className="max-h-[min(20rem,50vh)] overflow-y-auto py-1">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => jump(link.id)}
                  className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeId === link.id
                      ? "bg-culligan-light text-culligan-deep"
                      : "text-culligan-body hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex items-center gap-1.5 rounded-2xl bg-culligan-deep p-1.5 shadow-xl ring-1 ring-white/10">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors"
          aria-label="Scroll to top"
          title="Top"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className={`flex h-11 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold transition-colors ${
            menuOpen ? "bg-white text-culligan-deep" : "text-white hover:bg-white/10"
          }`}
          aria-label="Jump to section"
          aria-expanded={menuOpen}
          title="Sections"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="hidden sm:inline">Sections</span>
        </button>
        <button
          type="button"
          onClick={scrollToBottom}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors"
          aria-label="Scroll to bottom"
          title="Bottom"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export { scrollToSection };
