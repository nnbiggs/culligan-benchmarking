import {
  opModelExecutiveSummary,
  opModelCurrentState,
  opModelComparison,
  opModelBenchmark,
  opModelSavings,
  opModelLeadership,
  opModelRoadmap,
} from "../../data/opModelData";
import HypothesisTag from "../HypothesisTag";
import SectionWrapper from "../SectionWrapper";
import {
  PartLabel,
  SectionTitle,
  SubTitle,
  LeadText,
  Panel,
  DataTable,
  KpiStrip,
  CalloutBox,
} from "./OpModelUi";
import OperatingModelVisual from "./OperatingModelVisual";
import ItLeadershipVisual from "./ItLeadershipVisual";

const observationColumns = [
  { key: "area", label: "Area" },
  { key: "observation", label: "Observation" },
  { key: "impact", label: "Impact on Culligan IT costs" },
];

function KeyObservationsTable({ title, rows, variant }) {
  const headerBg = variant === "good" ? "bg-emerald-700" : "bg-rose-700";

  return (
    <div className="rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm">
      <div className={`${headerBg} px-4 py-3 sm:px-5`}>
        <p className="font-headline text-sm sm:text-base font-bold text-white">{title}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-culligan-deep text-white">
              {observationColumns.map((col) => (
                <th key={col.key} className="px-4 py-3 text-xs font-semibold align-top">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/50"}>
                {observationColumns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-culligan-body align-top text-xs sm:text-sm leading-relaxed">
                    {col.key === "area" ? (
                      <span className="font-semibold text-culligan-deep">{row[col.key]}</span>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ExecutiveSummarySection() {
  const { title, sectionTitle, rows } = opModelExecutiveSummary;

  return (
    <SectionWrapper id="taxonomy-executive" className="bg-white py-12 sm:py-16 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>{title}</SectionTitle>
        <SubTitle className="mt-6">{sectionTitle}</SubTitle>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {rows.map((row) => (
            <Panel key={row.dimension} className="border-t-4 border-t-culligan-accent">
              <p className="text-xs font-bold uppercase tracking-wide text-culligan-accent mb-2">{row.dimension}</p>
              <LeadText>{row.finding}</LeadText>
            </Panel>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function CurrentStateSection() {
  const d = opModelCurrentState;

  return (
    <SectionWrapper id="taxonomy-current-state" className="bg-culligan-off-white py-12 sm:py-16 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>
        <SectionTitle>{d.title}</SectionTitle>
        <LeadText className="mt-4 max-w-4xl">{d.lead}</LeadText>

        <div className="mt-10 space-y-10">
          <div>
            <SubTitle>{d.keyObservationsTitle}</SubTitle>
            <div className="mt-6 space-y-6">
              <KeyObservationsTable title={d.doingWellTitle} rows={d.doingWell} variant="good" />
              <KeyObservationsTable title={d.mustActTitle} rows={d.mustAct} variant="act" />
            </div>
          </div>

          <div>
            <SubTitle>{d.fragmentationTitle}</SubTitle>
            <div className="mt-4">
              <DataTable
                columns={[
                  { key: "capability", label: "IT capability" },
                  { key: "bus", label: "# BUs separate" },
                  { key: "spend", label: "IT & Digital Spend" },
                  { key: "observation", label: "Key observation" },
                ]}
                rows={d.fragmentation}
              />
            </div>
          </div>

          <div>
            <SubTitle>{d.headcountTitle}</SubTitle>
            <LeadText className="mt-4">{d.headcountLead}</LeadText>
            <div className="mt-4">
              <CalloutBox title="The fragmentation multiplier" variant="amber">
                {d.headcountCallout.replace("The fragmentation multiplier ", "")}
              </CalloutBox>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function OperatingModelSection() {
  const d = opModelComparison;
  const leadership = opModelLeadership;

  return (
    <>
      <SectionWrapper id="taxonomy-future-state" className="bg-white py-12 sm:py-16 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PartLabel>{d.partLabel}</PartLabel>
          <SectionTitle className="mb-8">Current vs future state</SectionTitle>
          <OperatingModelVisual />
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="taxonomy-leadership"
        className="bg-white py-12 sm:py-16 scroll-mt-28 border-t border-culligan-off-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">
            {leadership.partLabel}
          </p>
          <SubTitle>{leadership.title}</SubTitle>
          <LeadText className="mt-4 max-w-4xl">{leadership.lead}</LeadText>
          <div className="mt-10">
            <ItLeadershipVisual />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

export function BenchmarkSection() {
  const d = opModelBenchmark;

  return (
    <SectionWrapper id="taxonomy-benchmark" className="bg-culligan-off-white py-12 sm:py-16 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>
        <SectionTitle>{d.title}</SectionTitle>
        <LeadText className="mt-4">{d.lead}</LeadText>

        <div className="mt-10 space-y-10">
          <div>
            <SubTitle>{d.itSpendTitle}</SubTitle>
            <div className="mt-4">
              <KpiStrip items={d.itSpendBenchmark} />
            </div>
            <LeadText className="mt-4">{d.itSpendNote}</LeadText>
          </div>

          <div>
            <SubTitle>{d.serviceDeskTitle}</SubTitle>
            <div className="mt-4">
              <DataTable
                columns={[
                  { key: "model", label: "Model" },
                  { key: "cost", label: "Cost per ticket" },
                  { key: "relevance", label: "Relevance to Culligan" },
                ]}
                rows={d.serviceDesk}
                compact
              />
            </div>
          </div>

          <div>
            <SubTitle>{d.industryTitle}</SubTitle>
            <div className="mt-4 space-y-3">
              {d.industryEvidence.map((item) => {
                const split = item.match(/^([^—]+)—\s*(.+)/) || item.match(/^([A-Za-z0-9 .&'()]+)\s+(.+)/);
                const title = split ? split[1].trim() : item.slice(0, 60);
                const body = split ? split[2].trim() : item;
                return (
                  <Panel key={item.slice(0, 40)}>
                    <p className="text-sm font-bold text-culligan-deep mb-2">{title}</p>
                    <LeadText>{body}</LeadText>
                  </Panel>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function SavingsSection() {
  const d = opModelSavings;

  return (
    <SectionWrapper id="taxonomy-savings" className="bg-white py-12 sm:py-16 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>

        {d.totalAddressable && (
          <div className="mb-8 rounded-2xl bg-culligan-deep px-6 py-5 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-culligan-accent mb-2">Total addressable saving</p>
            <p className="text-sm text-culligan-light leading-relaxed">{d.totalAddressable}</p>
          </div>
        )}

        <Panel className="border-t-4 border-t-culligan-accent mb-10">
          <SubTitle>{d.h4Title}</SubTitle>
          {d.h4Lead.map((p) => (
            <LeadText key={p.slice(0, 40)} className="mt-4">{p}</LeadText>
          ))}
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <CalloutBox title="Sizing basis" variant="sky">{d.h4Sizing.replace("Sizing basis ", "")}</CalloutBox>
            <CalloutBox title="Critical dependency" variant="amber">{d.h4Dependency.replace("Critical dependency ", "")}</CalloutBox>
          </div>
        </Panel>

        <SubTitle>{d.leversTitle}</SubTitle>
        <div className="mt-4 overflow-x-auto rounded-xl ring-1 ring-culligan-off-white">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-culligan-deep text-white">
                <th className="px-3 py-3">Hyp.</th>
                <th className="px-3 py-3">Lever</th>
                <th className="px-3 py-3">Capability</th>
                <th className="px-3 py-3">Current state</th>
                <th className="px-3 py-3">Saving</th>
              </tr>
            </thead>
            <tbody>
              {d.levers.map((row, i) => (
                <tr key={row.hyp} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/50"}>
                  <td className="px-3 py-3"><HypothesisTag code={row.hyp} /></td>
                  <td className="px-3 py-3 font-medium text-culligan-deep">{row.lever}</td>
                  <td className="px-3 py-3 text-culligan-body">{row.capability}</td>
                  <td className="px-3 py-3 text-culligan-body">{row.current}</td>
                  <td className="px-3 py-3 font-semibold text-culligan-accent">{row.saving}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-2xl bg-culligan-deep px-6 py-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-culligan-accent mb-2">Year 3 run rate</p>
          <p className="text-sm text-culligan-light leading-relaxed">{d.cumulative}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function RoadmapSection() {
  const d = opModelRoadmap;

  return (
    <SectionWrapper id="taxonomy-roadmap" className="bg-culligan-deep py-12 sm:py-16 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>
        <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{d.title}</h2>
        <p className="mt-4 text-sm sm:text-base text-culligan-light leading-relaxed max-w-4xl">{d.lead}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {d.waves.map((wave, i) => (
            <div key={wave.wave} className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-culligan-accent">{wave.wave}</p>
              <p className="mt-1 text-sm font-bold text-white">{wave.horizon}</p>
              <p className="mt-4 text-sm text-culligan-light leading-relaxed">{wave.actions}</p>
              <p className="mt-4 text-sm font-semibold text-culligan-accent border-t border-white/10 pt-3">{wave.saving}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-headline text-lg font-bold text-white">{d.governanceTitle}</h3>
          <p className="mt-3 text-sm text-culligan-light leading-relaxed">{d.governanceLead}</p>
          <div className="mt-6 rounded-xl overflow-hidden ring-1 ring-white/10 bg-white">
            <DataTable
              columns={[
                { key: "investment", label: "Investment" },
                { key: "does", label: "What it does" },
                { key: "without", label: "Without it" },
              ]}
              rows={d.governance}
              compact
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
