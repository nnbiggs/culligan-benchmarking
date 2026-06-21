import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CapabilityItem from "./CapabilityItem";
import DomainLabel from "./DomainLabel";
import { capabilityDomains, corporateSharedServices, operatingRegions } from "../data/taxonomyData";
import { opModelCapability } from "../data/opModelData";
import { buCostSource, buCostFootnote } from "../data/buCostData";

const domainMeta = Object.fromEntries(
  opModelCapability.domains.map((d) => [d.domain, { covers: d.covers }])
);

const GRID_COLS = "grid grid-cols-4 gap-3";

const domainThemes = {
  "Customer & market": {
    row: "bg-sky-50",
    label: "bg-gradient-to-br from-sky-500 to-sky-700",
    chip: "bg-white text-sky-900 border border-sky-200/70",
  },
  "Product & service": {
    row: "bg-emerald-50",
    label: "bg-gradient-to-br from-emerald-500 to-emerald-700",
    chip: "bg-white text-emerald-900 border border-emerald-200/70",
  },
  "Operations & supply chain": {
    row: "bg-amber-50",
    label: "bg-gradient-to-br from-amber-500 to-amber-600",
    chip: "bg-white text-amber-900 border border-amber-200/70",
  },
  "Technology & innovation": {
    row: "bg-violet-50",
    label: "bg-gradient-to-br from-violet-500 to-violet-700",
    chip: "bg-white text-violet-900 border border-violet-200/70",
  },
  "Finance & risk": {
    row: "bg-rose-50",
    label: "bg-gradient-to-br from-rose-400 to-rose-600",
    chip: "bg-white text-rose-900 border border-rose-200/70",
  },
  "People & org": {
    row: "bg-lime-50",
    label: "bg-gradient-to-br from-lime-500 to-lime-700",
    chip: "bg-white text-lime-900 border border-lime-200/70",
  },
  "Corporate affairs": {
    row: "bg-stone-100",
    label: "bg-gradient-to-br from-stone-500 to-stone-700",
    chip: "bg-white text-stone-800 border border-stone-200/70",
  },
};

const defaultTheme = {
  row: "bg-white",
  label: "bg-gradient-to-br from-culligan-deep to-culligan-accent",
  chip: "bg-white text-culligan-body border border-culligan-off-white",
};

const ROW_MIN_H = "min-h-[148px]";

function CapabilityList({ capabilities, theme, domain, region }) {
  return (
    <div className="grid grid-cols-1 gap-1.5 w-full">
      {capabilities.map((cap) => (
        <CapabilityItem key={cap} name={cap} theme={theme} domain={domain} region={region} />
      ))}
    </div>
  );
}

function RegionHeader({ region, className = "" }) {
  return (
    <div
      className={`flex h-full min-h-[96px] flex-col items-center justify-center rounded-xl bg-culligan-deep px-3 py-3 text-center shadow-md shadow-culligan-deep/15 ${className}`}
    >
      <p className="font-headline text-sm font-bold text-white">{region.name}</p>
      <p className="mt-1 text-[11px] font-semibold text-culligan-accent">{region.vendorSpend} vendor</p>
      <p className="mt-0.5 text-[10px] text-culligan-light/90">
        IT {region.itSpend} · {region.itPercent}
      </p>
      <p className="mt-1 text-[10px] text-culligan-light/70">{region.spend} P&L</p>
      {region.costExplanation && (
        <p className="mt-2 text-[9px] leading-snug text-culligan-light/80 line-clamp-3" title={region.costExplanation}>
          {region.costExplanation}
        </p>
      )}
    </div>
  );
}

function DomainCell({ col, theme, domainName }) {
  return (
    <div className={`flex h-full flex-col items-center justify-center p-3 ${ROW_MIN_H}`}>
      <CapabilityList
        capabilities={col.capabilities}
        theme={theme}
        domain={domainName}
        region={col.region}
      />
    </div>
  );
}

const governanceChipTheme = {
  chip: "bg-white text-culligan-body border border-culligan-off-white",
};

function GovernanceLayer() {
  const { title, spend, itSpend, itPercent, costOverview, itExplanation, pillars, domains } = corporateSharedServices;

  return (
    <div className="mt-3 rounded-xl overflow-hidden ring-1 ring-culligan-deep/20 shadow-lg">
      <div className="bg-gradient-to-r from-culligan-deep via-[#1a4a7a] to-culligan-accent px-4 sm:px-6 py-5 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-culligan-light/70">Governance layer</p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <p className="font-headline text-base sm:text-lg font-bold text-white">{title}</p>
          <span className="text-sm font-semibold text-culligan-accent">{spend} vendor</span>
          <span className="text-sm font-semibold text-white/90">IT {itSpend} · {itPercent}</span>
        </div>
        {costOverview && (
          <p className="mt-3 text-xs text-culligan-light leading-relaxed max-w-3xl mx-auto">{costOverview}</p>
        )}
        {itExplanation && (
          <p className="mt-2 text-[11px] text-culligan-light/90 leading-relaxed max-w-3xl mx-auto">{itExplanation}</p>
        )}
        <p className="mt-2 text-xs text-culligan-light">Centre of excellence · serves Americas, EMEA & APAC</p>
        <p className="mt-1 text-xs text-culligan-light/80">Owns capability standards — regions execute</p>
      </div>

      <div className="bg-[#0f2845] px-4 py-4">
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-culligan-light/60 mb-3">
          Corporate functions
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="rounded-lg bg-culligan-deep/80 px-3 py-2 text-center text-[11px] sm:text-xs font-semibold text-white ring-1 ring-white/10"
            >
              {pillar}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-culligan-off-white px-3 sm:px-4 py-4">
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-culligan-muted mb-4">
          Capabilities by domain
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 sm:gap-3">
          {domains.map((domain) => (
            <div
              key={domain.name}
              className="rounded-lg bg-white px-2 py-3 ring-1 ring-black/5 shadow-sm"
            >
              <div className="font-headline text-[10px] sm:text-[11px] font-bold text-culligan-deep text-center leading-tight mb-2 min-h-[2.5rem] flex items-center justify-center">
                <DomainLabel
                  name={domain.name}
                  meta={domainMeta[domain.name]}
                  className="text-culligan-deep text-[10px] sm:text-[11px] [&_button]:text-culligan-deep [&_button]:decoration-culligan-accent/50"
                />
              </div>
              <div className="space-y-1">
                {domain.capabilities.map((cap) => (
                  <CapabilityItem
                    key={cap}
                    name={cap}
                    theme={governanceChipTheme}
                    domain={domain.name}
                    region="corporate"
                    className="[&_button]:text-[10px] [&_button]:sm:text-[11px] [&_button]:py-1"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MatrixView() {
  return (
    <div className="hidden lg:block rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5">
      <div className={`${GRID_COLS} mb-3`}>
        <div className="flex min-h-[76px] items-center justify-center rounded-xl bg-culligan-off-white px-3">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-culligan-muted">Capability domain</p>
        </div>
        {operatingRegions.map((region) => (
          <RegionHeader key={region.id} region={region} />
        ))}
      </div>

      <div className="space-y-3">
        {capabilityDomains.map((domain, index) => {
          const theme = domainThemes[domain.name] ?? defaultTheme;
          return (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className={`${GRID_COLS} rounded-xl overflow-hidden ring-1 ring-black/5 ${theme.row}`}
            >
              <div className={`flex ${ROW_MIN_H} items-center justify-center p-3 ${theme.label}`}>
                <DomainLabel
                  name={domain.name}
                  meta={domainMeta[domain.name]}
                  className="text-xs text-white px-2"
                />
              </div>
              {domain.regions.map((col) => (
                <div key={col.region} className="border-l border-white/60">
                  <DomainCell col={col} theme={theme} domainName={domain.name} />
                </div>
              ))}
            </motion.div>
          );
        })}
      </div>

      <GovernanceLayer />
    </div>
  );
}

function MobileRegionTabs() {
  const [activeId, setActiveId] = useState(operatingRegions[0].id);
  const activeRegion = operatingRegions.find((r) => r.id === activeId) ?? operatingRegions[0];

  return (
    <div className="lg:hidden">
      <div className="grid grid-cols-3 gap-2">
        {operatingRegions.map((region) => (
          <button
            key={region.id}
            type="button"
            onClick={() => setActiveId(region.id)}
            className={`rounded-xl px-2 py-3 text-center text-sm font-semibold transition-all duration-200 ${
              activeId === region.id
                ? "bg-culligan-deep text-white shadow-md"
                : "bg-white text-culligan-muted ring-1 ring-culligan-off-white"
            }`}
          >
            {region.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mt-4"
        >
          <RegionHeader region={activeRegion} className="mb-4 min-h-[72px]" />
          <div className="space-y-3">
            {capabilityDomains.map((domain) => {
              const theme = domainThemes[domain.name] ?? defaultTheme;
              const col = domain.regions.find((r) => r.region === activeRegion.name);
              if (!col) return null;
              return (
                <div
                  key={domain.name}
                  className={`rounded-xl overflow-hidden ring-1 ring-black/5 ${theme.row}`}
                >
                  <div className={`flex min-h-[48px] items-center justify-center px-4 py-3 ${theme.label}`}>
                    <DomainLabel
                      name={domain.name}
                      meta={domainMeta[domain.name]}
                      className="text-sm text-white"
                    />
                  </div>
                  <DomainCell col={col} theme={theme} domainName={domain.name} />
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
      <GovernanceLayer />
    </div>
  );
}

export default function CapabilityModelVisual() {
  return (
    <div className="relative mx-auto max-w-6xl">
      <p className="mb-2 text-center text-xs text-culligan-muted">
        Hover a domain or capability for its description (desktop) · tap to expand on mobile
      </p>
      <p className="mb-6 text-center text-[11px] text-culligan-muted/80">
        {buCostSource} · {buCostFootnote}
      </p>
      <MatrixView />
      <MobileRegionTabs />
    </div>
  );
}
