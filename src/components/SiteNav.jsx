import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useActiveSection } from "../hooks/useAnimations";
import Logo from "./Logo";
import {
  executiveSummaryLinks,
  hypothesisLinks,
  operatingModelLink,
  taxonomyNavLinks,
} from "../data/siteNav";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const isHome = location.pathname === "/";
  const isOperatingModel = location.pathname === operatingModelLink.path;
  const activeSection = useActiveSection(
    isHome ? executiveSummaryLinks.map((l) => l.id) : isOperatingModel ? taxonomyNavLinks.map((l) => l.id) : []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (isHome) {
      setActiveMenu("executive");
    } else if (isOperatingModel) {
      setActiveMenu("hypothesis");
    }
  }, [isHome, isOperatingModel]);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;

    if (isHome && hash.startsWith("hypothesis-")) {
      setActiveMenu("hypothesis");
      requestAnimationFrame(() => scrollToSection(hash));
    } else if (isHome) {
      setActiveMenu("executive");
      requestAnimationFrame(() => scrollToSection(hash));
    } else if (isOperatingModel) {
      requestAnimationFrame(() => scrollToSection(hash));
    }
  }, [location.hash, isHome, isOperatingModel]);

  useEffect(() => {
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const toggleMenu = (key) => {
    setActiveMenu((prev) => (prev === key ? null : key));
  };

  const handleExecutiveSummaryClick = () => {
    setActiveMenu("executive");
    setMenuOpen(false);
    if (isHome) {
      scrollToSection("overview");
    } else {
      navigate({ pathname: "/", hash: "overview" });
    }
  };

  const handleExecClick = (id) => {
    setMenuOpen(false);
    setActiveMenu("executive");
    if (isHome) {
      scrollToSection(id);
    }
  };

  const handleTaxonomySectionClick = (id) => {
    setMenuOpen(false);
    setActiveMenu("hypothesis");
    if (isOperatingModel) {
      scrollToSection(id);
    } else {
      navigate({ pathname: operatingModelLink.path, hash: id });
    }
  };

  const handleHypothesisClick = () => {
    setMenuOpen(false);
    setActiveMenu("hypothesis");
  };

  const execParentActive =
    isHome && (activeMenu === "executive" || activeSection === "overview");
  const hypothesisParentActive = activeMenu === "hypothesis";

  const hypothesisLinkClass = (link, active) =>
    `text-xs font-medium py-1.5 px-2 whitespace-nowrap rounded transition-colors ${
      active
        ? "text-culligan-accent underline underline-offset-4"
        : "text-white/70 hover:text-white"
    }`;

  const HypothesisNavItem = ({ link, className, onNavigate }) => {
    if (link.to) {
      return (
        <Link to={link.to} onClick={onNavigate} className={className}>
          {link.label}
        </Link>
      );
    }
    return (
      <a href={`/#${link.hash ?? link.id}`} onClick={onNavigate} className={className}>
        {link.label}
      </a>
    );
  };

  return (
    <header ref={navRef} className="fixed top-9 left-0 right-0 z-50">
      <nav
        className={`bg-culligan-deep transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={handleExecutiveSummaryClick}
            className="shrink-0 cursor-pointer"
            aria-label="Go to Executive Summary"
          >
            <Logo />
          </button>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              type="button"
              onClick={handleExecutiveSummaryClick}
              className={`rounded-lg px-3 py-2 text-xs xl:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                execParentActive
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              Executive Summary
            </button>
            <button
              type="button"
              onClick={() => toggleMenu("hypothesis")}
              className={`rounded-lg px-3 py-2 text-xs xl:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                hypothesisParentActive
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              Detailed Findings
            </button>
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

        {activeMenu === "executive" && (
          <div className="hidden lg:block border-t border-white/10 bg-culligan-deep/95 px-4 py-2 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {executiveSummaryLinks.map((link) =>
                isHome ? (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleExecClick(link.id)}
                    className={`text-xs font-medium py-1.5 px-2 rounded transition-colors cursor-pointer whitespace-nowrap ${
                      activeSection === link.id
                        ? "text-culligan-accent underline underline-offset-4"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.id}
                    href={`/#${link.id}`}
                    className="text-xs font-medium py-1.5 px-2 text-white/70 hover:text-white whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}

        {activeMenu === "hypothesis" && (
          <div className="hidden lg:block border-t border-white/10 bg-culligan-deep/95 px-4 py-2 sm:px-6 lg:px-8">
            {isOperatingModel ? (
              <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                {taxonomyNavLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleTaxonomySectionClick(link.id)}
                    className={`text-xs font-medium py-1.5 px-2.5 whitespace-nowrap rounded-full transition-colors ${
                      activeSection === link.id
                        ? "bg-white/15 text-culligan-accent underline underline-offset-4"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                {hypothesisLinks.map((link) => (
                  <HypothesisNavItem
                    key={link.id}
                    link={link}
                    onNavigate={handleHypothesisClick}
                    className={hypothesisLinkClass(link, false)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </nav>

      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(2.25rem+60px)] bottom-0 bg-culligan-deep border-t border-white/20 overflow-y-auto">
          <div className="flex flex-col px-4 py-2">
            <button
              type="button"
              onClick={handleExecutiveSummaryClick}
              className="text-left py-3 px-2 text-base font-semibold text-white border-b border-white/10 w-full"
            >
              Executive Summary
            </button>
            {activeMenu === "executive" && (
              <div className="pb-2 border-b border-white/10">
                {executiveSummaryLinks.map((link) =>
                  isHome ? (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleExecClick(link.id)}
                      className={`text-left w-full py-3 px-4 text-sm font-medium min-h-[44px] ${
                        activeSection === link.id ? "text-culligan-accent" : "text-white/80"
                      }`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      key={link.id}
                      href={`/#${link.id}`}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 px-4 text-sm font-medium text-white/80 min-h-[44px]"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            )}

            <button
              type="button"
              onClick={() => setActiveMenu(activeMenu === "hypothesis" ? null : "hypothesis")}
              className="text-left py-3 px-2 text-base font-semibold text-white border-b border-white/10"
            >
              Detailed Findings
            </button>
            {activeMenu === "hypothesis" && (
              <div className="pb-2 border-b border-white/10">
                {isOperatingModel ? (
                  taxonomyNavLinks.map((link) => (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleTaxonomySectionClick(link.id)}
                      className={`block w-full text-left py-3 px-4 text-sm font-medium min-h-[44px] ${
                        activeSection === link.id ? "text-culligan-accent" : "text-white/80"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))
                ) : (
                  hypothesisLinks.map((link) => (
                    <HypothesisNavItem
                      key={link.id}
                      link={link}
                      onNavigate={() => {
                        setMenuOpen(false);
                        handleHypothesisClick();
                      }}
                      className={`block py-3 px-4 text-sm font-medium min-h-[44px] text-white/80`}
                    />
                  ))
                )}
              </div>
            )}

          </div>
        </div>
      )}
    </header>
  );
}
