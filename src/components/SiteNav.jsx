import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useActiveSection } from "../hooks/useAnimations";
import Logo from "./Logo";
import SiteTitleBar from "./SiteTitleBar";
import {
  executiveSummaryLinks,
  operatingModelLink,
  taxonomyNavLinks,
} from "../data/siteNav";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const pageLinks = [
  { path: "/", label: "Executive Summary" },
  { path: operatingModelLink.path, label: "Operating model" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const isHome = location.pathname === "/";
  const isOperatingModel = location.pathname === operatingModelLink.path;
  const sectionLinks = isHome ? executiveSummaryLinks : isOperatingModel ? taxonomyNavLinks : [];
  const activeSection = useActiveSection(sectionLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;
    requestAnimationFrame(() => scrollToSection(hash));
  }, [location.hash, location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleLogoClick = () => {
    setMenuOpen(false);
    if (isHome) {
      scrollToSection("overview");
    } else {
      navigate({ pathname: "/", hash: "overview" });
    }
  };

  const handleSectionClick = (id) => {
    setMenuOpen(false);
    if (isHome || isOperatingModel) {
      scrollToSection(id);
    }
  };

  const pageLinkClass = (path) => {
    const active = location.pathname === path;
    return `rounded-lg px-3 py-2 text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap ${
      active ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
    }`;
  };

  const sectionLinkClass = (id) => {
    const active = activeSection === id;
    return `text-xs font-medium py-1.5 px-2.5 whitespace-nowrap rounded-full transition-colors ${
      active
        ? "bg-white/15 text-culligan-accent underline underline-offset-4"
        : "text-white/70 hover:text-white hover:bg-white/10"
    }`;
  };

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      <SiteTitleBar />
      <nav className={`bg-culligan-deep transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={handleLogoClick}
            className="shrink-0 cursor-pointer"
            aria-label="Go to report overview"
          >
            <Logo />
          </button>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {pageLinks.map((link) => (
              <Link key={link.path} to={link.path} className={pageLinkClass(link.path)}>
                {link.label}
              </Link>
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

        {sectionLinks.length > 0 && (
          <div className="hidden lg:block border-t border-white/10 bg-culligan-deep/95 px-4 py-2 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              {sectionLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleSectionClick(link.id)}
                    className={sectionLinkClass(link.id)}
                  >
                    {link.label}
                  </button>
                ))}
            </div>
          </div>
        )}
      </nav>

      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 top-[var(--fixed-header)] bg-culligan-deep border-t border-white/20 overflow-y-auto">
          <div className="flex flex-col px-4 py-2">
            <p className="px-2 py-2 text-[10px] font-bold uppercase tracking-widest text-white/50">Reports</p>
            {pageLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-4 text-base font-semibold min-h-[44px] border-b border-white/10 ${
                  location.pathname === link.path ? "text-culligan-accent" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {sectionLinks.length > 0 && (
              <>
                <p className="px-2 py-3 text-[10px] font-bold uppercase tracking-widest text-white/50">
                  {isHome ? "On this page" : "Sections"}
                </p>
                {sectionLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleSectionClick(link.id)}
                    className={`text-left w-full py-3 px-4 text-sm font-medium min-h-[44px] border-b border-white/10 ${
                      activeSection === link.id ? "text-culligan-accent" : "text-white/80"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
