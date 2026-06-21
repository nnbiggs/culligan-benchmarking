import { useState } from "react";
import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import CapabilityModelVisual from "../components/CapabilityModelVisual";
import CapabilityModelIntro from "../components/CapabilityModelIntro";
import SectionWrapper from "../components/SectionWrapper";
import BuCostCard from "../components/BuCostCard";
import RegionalInsightsPanel from "../components/RegionalInsightsPanel";
import {
  ExecutiveSummarySection,
  CurrentStateSection,
  OperatingModelSection,
  BenchmarkSection,
  SavingsSection,
  RoadmapSection,
} from "../components/opModel/OpModelSections";
import { operatingRegions } from "../data/taxonomyData";
import { taxonomyNavLinks } from "../data/siteNav";
import { opModelCover, opModelCapability } from "../data/opModelData";
import { buCostSource, buCostFootnote } from "../data/buCostData";
import { PageScrollAssist } from "../components/PageNavigation";

function TaxonomyHero() {
  return (
    <header id="taxonomy-overview" className="scroll-anchor bg-culligan-deep pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">
            {opModelCover.eyebrow}
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {opModelCover.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-culligan-light">{opModelCover.subtitle}</p>
          <p className="mt-2 text-xs text-culligan-light/70">{opModelCover.meta}</p>
        </div>

        <div className="mt-8 max-w-4xl mx-auto rounded-xl bg-white/10 border border-white/15 px-5 py-5 sm:px-8">
          <p className="text-sm sm:text-base text-culligan-light leading-relaxed text-center">{opModelCover.hook}</p>
        </div>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {opModelCover.kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-5 border-t-4 border-t-culligan-accent text-center"
            >
              <div className="font-headline text-xl sm:text-2xl font-extrabold text-white">{kpi.value}</div>
              <div className="mt-2 text-xs sm:text-sm text-culligan-light">{kpi.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-culligan-light/60">{opModelCover.source} · Confidential · PwC</p>
      </div>
    </header>
  );
}

function RegionsSection() {
  const [activeRegionId, setActiveRegionId] = useState(operatingRegions[0].id);
  const activeRegion = operatingRegions.find((r) => r.id === activeRegionId) ?? operatingRegions[0];

  return (
    <SectionWrapper id="taxonomy-regions" className="bg-culligan-off-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-culligan-deep tracking-tight">
          Operating regions · vendor spend detail
        </h2>
        <p className="mt-3 text-sm text-culligan-muted max-w-3xl">
          June 2026 spend cube costs by business unit — IT spend, operational analysis, and vendor cost structure.
        </p>
        <p className="mt-2 text-xs text-culligan-muted/80">{buCostSource} · {buCostFootnote}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {operatingRegions.map((region) => (
            <button
              key={region.id}
              type="button"
              onClick={() => setActiveRegionId(region.id)}
              className={`rounded-xl px-4 py-3 text-left transition-all ${
                activeRegionId === region.id
                  ? "bg-culligan-deep text-white shadow-md ring-2 ring-culligan-accent"
                  : "bg-white text-culligan-deep hover:bg-white/80 ring-1 ring-culligan-off-white"
              }`}
            >
              <span className="block text-sm font-bold">{region.name}</span>
              <span className={`block text-xs mt-0.5 ${activeRegionId === region.id ? "text-culligan-light" : "text-culligan-muted"}`}>
                {region.vendorSpend} · IT {region.itSpend}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-culligan-off-white bg-white shadow-md overflow-hidden">
          <div className="bg-culligan-deep px-5 sm:px-8 py-5 sm:py-6">
            <h3 className="font-headline text-2xl font-bold text-white">{activeRegion.name}</h3>
            <p className="mt-1 text-sm text-culligan-light">
              {activeRegion.vendorSpend} vendor spend · IT {activeRegion.itSpend} ({activeRegion.itPercent})
            </p>
          </div>
          <RegionalInsightsPanel region={activeRegion} />
          <div className="px-5 sm:px-8 py-6 sm:py-8 bg-culligan-off-white/40">
            <div className="grid gap-4 sm:grid-cols-2">
              {activeRegion.businessUnits.map((bu) => (
                <BuCostCard key={bu} taxonomyName={bu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function CapabilitiesSection() {
  return (
    <SectionWrapper id="taxonomy-capabilities" className="bg-gradient-to-b from-culligan-off-white to-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-4">
            {opModelCapability.partLabel}
          </p>
          <p className="font-headline text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-culligan-deep leading-snug tracking-tight">
            {opModelCapability.hero}
          </p>
        </div>

        <CapabilityModelIntro />

        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-culligan-off-white">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3 text-center">
            Explore the model
          </p>
          <CapabilityModelVisual />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default function TaxonomyPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="pt-[var(--fixed-header)]">
        <TaxonomyHero />
        <ExecutiveSummarySection />
        <CapabilitiesSection />
        <CurrentStateSection />
        <OperatingModelSection />
        <BenchmarkSection />
        <SavingsSection />
        <RoadmapSection />
        <RegionsSection />
      </main>
      <PageScrollAssist links={taxonomyNavLinks} ariaLabel="Operating model page navigation" />
      <Footer />
    </div>
  );
}
