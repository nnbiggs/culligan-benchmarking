import { useState, useEffect } from "react";
import { navLinks } from "../data/benchmarkData";
import { useActiveSection } from "../hooks/useAnimations";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-9 left-0 right-0 z-50 bg-culligan-deep transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 sm:px-6 lg:px-8">
        <button onClick={() => handleNavClick("overview")} className="cursor-pointer shrink-0" aria-label="Scroll to top">
          <Logo />
        </button>

        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-xs xl:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeId === link.id
                  ? "text-culligan-accent underline underline-offset-4"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="lg:hidden text-white p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-culligan-deep border-t border-white/20 overflow-y-auto">
          <div className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-4 px-2 text-base font-medium transition-colors cursor-pointer min-h-[48px] border-b border-white/10 last:border-0 ${
                  activeId === link.id
                    ? "text-culligan-accent"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
