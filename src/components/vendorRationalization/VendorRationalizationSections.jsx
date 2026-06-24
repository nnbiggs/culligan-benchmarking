import { Link } from "react-router-dom";
import HypothesisTag from "../HypothesisTag";
import SectionWrapper from "../SectionWrapper";
import { TableScroll, MobileCards } from "../ResponsiveTable";
import {
  PartLabel,
  SectionTitle,
  SubTitle,
  LeadText,
  Panel,
  DataTable,
  KpiStrip,
  CalloutBox,
  KeyObservationsTable,
} from "../opModel/OpModelUi";
import {
  vendorRationalizationExecutive,
  vendorRationalizationMethodology,
  vendorRationalizationBenchmarks,
  vendorRationalizationCurrentState,
  vendorRationalizationFutureState,
  vendorRationalizationRoadmap,
  vendorRationalizationFinancial,
  vendorRationalizationBottomLine,
} from "../../data/vendorRationalizationData";
import VendorCurrentStateVisual from "./VendorCurrentStateVisual";

function RelatedLinks({ links, className = "" }) {
  if (!links?.length) return null;
  return (
    <div className={`flex flex-wrap gap-2 mt-6 ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wide text-culligan-muted self-center mr-1">Related:</span>
      {links.map((link) => (
        <Link
          key={`${link.to}${link.hash ?? ""}-${link.label}`}
          to={link.hash ? { pathname: link.to, hash: `#${link.hash}` } : link.to}
          className="inline-flex items-center rounded-full bg-culligan-callout px-3 py-1.5 text-xs font-semibold text-culligan-deep ring-1 ring-culligan-accent/20 hover:bg-culligan-accent/10 hover:ring-culligan-accent/40 transition-colors"
        >
          {link.label}
          <span className="ml-1 text-culligan-accent" aria-hidden="true">→</span>
        </Link>
      ))}
    </div>
  );
}

function ExecutiveKpiCard({ label, value, accent = "default" }) {
  const valueColors = {
    orange: "text-culligan-amber",
    default: "text-culligan-deep",
    red: "text-culligan-red",
    sky: "text-culligan-accent",
  };

  return (
    <div className="rounded-xl bg-[#f4f0e8] px-4 py-5 sm:py-6 text-center ring-1 ring-black/5 border border-white/60">
      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-culligan-muted leading-snug">{label}</p>
      <p className={`font-headline text-2xl sm:text-3xl font-extrabold mt-2 ${valueColors[accent] ?? valueColors.default}`}>
        {value}
      </p>
    </div>
  );
}

function DimensionDetailTable({ rows }) {
  return (
    <>
      <div className="space-y-4 md:hidden">
        {rows.map((row) => (
          <Panel key={row.dimension} className="border-t-4 border-t-culligan-deep">
            <p className="text-xs font-bold uppercase tracking-wide text-culligan-accent mb-2">{row.dimension}</p>
            <LeadText>{row.detail}</LeadText>
            {row.highlight && (
              <p className="mt-3 text-sm font-semibold text-culligan-amber leading-relaxed">{row.highlight}</p>
            )}
            {row.emphasis && (
              <p className="mt-3 text-sm font-semibold text-culligan-red leading-relaxed">{row.emphasis}</p>
            )}
          </Panel>
        ))}
      </div>

      <div className="hidden md:block rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-culligan-deep text-white">
              <th className="px-4 py-3 text-xs font-semibold w-[28%] align-top">Dimension</th>
              <th className="px-4 py-3 text-xs font-semibold align-top">Detail</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.dimension} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/50"}>
                <td className="px-4 py-4 font-semibold text-culligan-deep align-top text-xs sm:text-sm">{row.dimension}</td>
                <td className="px-4 py-4 text-culligan-body align-top text-xs sm:text-sm leading-relaxed">
                  {row.detail}
                  {row.highlight && (
                    <p className="mt-3 font-semibold text-culligan-amber">{row.highlight}</p>
                  )}
                  {row.emphasis && (
                    <p className="mt-3 font-semibold text-culligan-red">{row.emphasis}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function VendorExecutiveSection() {
  const d = vendorRationalizationExecutive;
  return (
    <SectionWrapper id="vr-executive" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>
        <SectionTitle>{d.title}</SectionTitle>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {d.kpis.map((kpi) => (
            <ExecutiveKpiCard key={kpi.label} {...kpi} />
          ))}
        </div>

        <div className="mt-10">
          <DimensionDetailTable rows={d.rows} />
        </div>
      </div>
    </SectionWrapper>
  );
}

export function VendorMethodologySection() {
  const d = vendorRationalizationMethodology;
  const b = vendorRationalizationBenchmarks;

  return (
    <SectionWrapper id="vr-methodology" className="bg-culligan-off-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>
        <SectionTitle>{d.title}</SectionTitle>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {d.steps.map((step) => (
            <div key={step.step} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 border-t-4 border-t-culligan-accent">
              <p className="text-xs font-bold uppercase tracking-wide text-culligan-accent">Step {step.step}</p>
              <p className="mt-2 font-headline text-base font-bold text-culligan-deep">{step.title}</p>
              <LeadText className="mt-2">{step.detail}</LeadText>
              <p className="mt-3 text-sm font-semibold text-culligan-accent">{step.metric}</p>
            </div>
          ))}
        </div>
        <LeadText className="mt-6 max-w-4xl italic text-culligan-muted">{d.principles}</LeadText>

        <div className="mt-12">
          <SubTitle>{d.validation.title}</SubTitle>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {d.validation.items.map((item) => (
              <Panel key={item.phase}>
                <p className="text-xs font-bold uppercase tracking-wide text-culligan-accent">{item.phase}</p>
                <LeadText className="mt-2">{item.detail}</LeadText>
              </Panel>
            ))}
          </div>
          <div className="mt-6">
            <CalloutBox title="Key finding" variant="sky">
              {d.validation.finding}
            </CalloutBox>
          </div>
        </div>

        <div className="mt-12">
          <SubTitle>{b.title}</SubTitle>
          <LeadText className="mt-3 max-w-4xl">{b.note}</LeadText>

          <div className="mt-6">
          <MobileCards
            rows={b.levers}
            renderCard={(row) => (
              <>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="rounded-full bg-culligan-deep text-white text-[10px] font-bold px-2 py-0.5">#{row.priority}</span>
                  <HypothesisTag code={row.hypothesis.includes("H3") ? "H3" : "H5"} />
                  <span className="text-xs text-culligan-muted">{row.wave}</span>
                </div>
                <p className="font-semibold text-culligan-deep text-sm">{row.lever}</p>
                <p className="text-sm text-culligan-body mt-2">{row.context}</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div><span className="text-culligan-muted">Addressable</span><p className="font-semibold">{row.addressable}</p></div>
                  <div><span className="text-culligan-muted">Saving</span><p className="font-semibold text-culligan-accent">{row.saving}</p></div>
                </div>
              </>
            )}
          />
          </div>

          <TableScroll className="hidden md:block mt-6 rounded-xl ring-1 ring-culligan-off-white">
            <table className="w-full text-left text-sm min-w-[900px]">
              <thead>
                <tr className="bg-culligan-deep text-white">
                  <th className="px-3 py-3">#</th>
                  <th className="px-3 py-3">Lever</th>
                  <th className="px-3 py-3">Hyp.</th>
                  <th className="px-3 py-3">Wave</th>
                  <th className="px-3 py-3">Addressable</th>
                  <th className="px-3 py-3">Benchmark</th>
                  <th className="px-3 py-3">Est. saving</th>
                </tr>
              </thead>
              <tbody>
                {b.levers.map((row, i) => (
                  <tr key={row.lever} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/50"}>
                    <td className="px-3 py-3 font-bold text-culligan-accent">{row.priority}</td>
                    <td className="px-3 py-3">
                      <p className="font-medium text-culligan-deep">{row.lever}</p>
                      <p className="text-xs text-culligan-muted mt-1">{row.context}</p>
                    </td>
                    <td className="px-3 py-3">
                      {row.hypothesis.split(" / ").map((h) => (
                        <span key={h} className="mr-1"><HypothesisTag code={h.trim()} /></span>
                      ))}
                    </td>
                    <td className="px-3 py-3 text-culligan-body">{row.wave}</td>
                    <td className="px-3 py-3 text-culligan-body">{row.addressable}</td>
                    <td className="px-3 py-3 text-culligan-body">{row.benchmark}</td>
                    <td className="px-3 py-3 font-semibold text-culligan-accent">{row.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroll>
        </div>
        <RelatedLinks links={d.relatedLinks} />
      </div>
    </SectionWrapper>
  );
}

export function VendorCurrentStateSection() {
  const d = vendorRationalizationCurrentState;

  return (
    <SectionWrapper id="vr-current-state" className="bg-culligan-off-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>
        <SectionTitle>{d.title}</SectionTitle>

        <div className="mt-10">
          <VendorCurrentStateVisual data={d} />
        </div>

        <div className="mt-10 space-y-10">
          <div>
            <SubTitle>{d.keyObservationsTitle}</SubTitle>
            <div className="mt-6 space-y-6">
              <KeyObservationsTable title={d.doingWellTitle} rows={d.doingWell} variant="good" />
              <KeyObservationsTable title={d.overpayingTitle} rows={d.overpaying} variant="act" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function VendorFutureStateSection() {
  const d = vendorRationalizationFutureState;

  return (
    <SectionWrapper id="vr-future-state" className="bg-culligan-off-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>
        <SectionTitle>{d.title}</SectionTitle>
        <LeadText className="mt-4 max-w-4xl">{d.lead}</LeadText>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {d.opportunities.map((opp) => (
            <a
              key={opp.id}
              href={`#${opp.anchor}`}
              className="group rounded-2xl bg-white p-5 ring-1 ring-black/5 border-t-4 border-t-culligan-accent hover:shadow-md hover:ring-culligan-accent/30 transition-all"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wide text-culligan-muted">{opp.wave}</span>
                <HypothesisTag code={opp.hypothesis.includes("H3") ? "H3" : "H5"} />
              </div>
              <p className="font-headline font-bold text-culligan-deep group-hover:text-culligan-accent transition-colors">{opp.title}</p>
              <p className="text-sm text-culligan-body mt-2">{opp.summary}</p>
              <div className="mt-4 flex items-end justify-between gap-2 border-t border-culligan-off-white pt-3">
                <div>
                  <p className="text-[10px] uppercase text-culligan-muted">Current</p>
                  <p className="text-sm font-semibold text-culligan-deep">{opp.current}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase text-culligan-muted">Saving</p>
                  <p className="text-sm font-extrabold text-culligan-accent">{opp.saving}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          {d.deepDives.map((dd) => (
            <div key={dd.id} id={dd.id} className="scroll-anchor">
            <Panel className="border-t-4 border-t-culligan-deep">
              <SubTitle>{dd.title}</SubTitle>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl bg-rose-50/60 p-5 ring-1 ring-rose-100">
                  <p className="text-xs font-bold uppercase tracking-wide text-rose-800 mb-3">Today — fragmented</p>
                  {dd.today.vendors && (
                    <p className="text-sm text-culligan-body mb-3">{dd.today.vendors} vendors · {dd.today.spend}</p>
                  )}
                  {dd.today.topVendors?.map((v) => (
                    <p key={v} className="text-sm text-culligan-body">· {v}</p>
                  ))}
                  {dd.today.categories?.map((c) => (
                    <p key={c} className="text-sm text-culligan-body">· {c}</p>
                  ))}
                </div>
                <div className="rounded-xl bg-emerald-50/60 p-5 ring-1 ring-emerald-100">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-800 mb-3">Target — consolidated</p>
                  <LeadText>{dd.target}</LeadText>
                  <p className="mt-4 text-sm font-extrabold text-emerald-900">Est. annual saving: {dd.saving}</p>
                </div>
              </div>
            </Panel>
            </div>
          ))}
        </div>
        <RelatedLinks links={d.relatedLinks} />
      </div>
    </SectionWrapper>
  );
}

export function VendorRoadmapSection() {
  const d = vendorRationalizationRoadmap;
  const bl = vendorRationalizationBottomLine;

  return (
    <>
      <SectionWrapper id="vr-roadmap" className="bg-culligan-deep py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PartLabel>{d.partLabel}</PartLabel>
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{d.title}</h2>
          <p className="mt-4 text-sm sm:text-base text-culligan-light leading-relaxed max-w-4xl">{d.lead}</p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {d.waves.map((wave) => (
              <div key={wave.wave} className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-5 sm:p-6 border-t-4 border-t-culligan-accent">
                <p className="text-xs font-bold uppercase tracking-wide text-culligan-accent">{wave.wave}</p>
                <p className="mt-1 text-sm font-bold text-white">{wave.horizon}</p>
                <p className="mt-4 text-sm text-culligan-light leading-relaxed">{wave.actions}</p>
                <div className="mt-4 pt-3 border-t border-white/10 space-y-1">
                  <p className="text-sm font-semibold text-culligan-accent">{wave.netYear}</p>
                  <p className="text-xs text-culligan-light/70">Investment: {wave.investment}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="font-headline text-lg font-bold text-white">{d.funding.title}</h3>
            <p className="mt-3 text-sm text-culligan-light leading-relaxed">{d.funding.mechanism}</p>
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {Object.entries(d.funding.totals).map(([key, val]) => (
                <div key={key} className="rounded-xl bg-white/10 px-4 py-3 text-center">
                  <p className="text-[10px] uppercase tracking-wide text-culligan-accent">{key.replace(/([A-Z])/g, " $1")}</p>
                  <p className="font-headline text-lg font-extrabold text-white mt-1">{val}</p>
                </div>
              ))}
            </div>
          </div>
          <RelatedLinks links={d.relatedLinks} className="[&_a]:bg-white/10 [&_a]:text-culligan-light [&_a]:ring-white/20" />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white py-10 sm:py-12 border-t border-culligan-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-headline text-xl sm:text-2xl font-extrabold text-culligan-deep">{bl.title}</h3>
          <p className="mt-3 text-sm text-culligan-muted">{bl.stats.join(" · ")}</p>
          <p className="mt-4 font-headline text-2xl sm:text-3xl font-extrabold text-culligan-accent">{bl.saving}</p>
          <p className="mt-4 text-sm text-culligan-body max-w-2xl mx-auto">{bl.nextStep}</p>
        </div>
      </SectionWrapper>
    </>
  );
}

export function VendorFinancialSection() {
  const d = vendorRationalizationFinancial;

  return (
    <SectionWrapper id="vr-financial" className="bg-culligan-off-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>
        <SectionTitle>{d.title}</SectionTitle>
        <div className="mt-8">
          <DataTable
            columns={[
              { key: "lever", label: "Lever / move" },
              { key: "wave", label: "Wave" },
              { key: "confidence", label: "Confidence" },
              { key: "y1", label: "Year 1 gross" },
              { key: "y2", label: "Year 2 gross" },
              { key: "y3", label: "Year 3 run-rate" },
              { key: "transition", label: "Transition" },
              { key: "net3yr", label: "Net 3-yr" },
            ]}
            rows={[...d.rows, { lever: "TOTAL (base case)", ...d.total, wave: "", confidence: "" }]}
            compact
          />
        </div>
        <div className="mt-6">
          <CalloutBox title="Base case" variant="sky">
            {d.footnote}
          </CalloutBox>
        </div>
      </div>
    </SectionWrapper>
  );
}
