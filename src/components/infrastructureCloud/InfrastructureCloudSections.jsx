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
  CalloutBox,
} from "../opModel/OpModelUi";
import {
  infrastructureCloudCover,
  infrastructureCloudExecutive,
  infrastructureCloudBenchmarks,
  infrastructureCloudPlays,
  infrastructureCloudMaPipeline,
  infrastructureCloudRegionalSpend,
  infrastructureCloudRoadmap,
  infrastructureCloudBottomLine,
} from "../../data/infrastructureCloudData";
import HypothesisExecutiveSection from "../hypothesis/HypothesisExecutiveSection";
import HypothesisRoadmapSection from "../hypothesis/HypothesisRoadmapSection";

export function InfraExecutiveSection() {
  return (
    <HypothesisExecutiveSection
      id="ic-executive"
      data={{
        ...infrastructureCloudExecutive,
        kpis: infrastructureCloudCover.kpis,
      }}
    />
  );
}

export function InfraBenchmarkSection() {
  const d = infrastructureCloudBenchmarks;
  return (
    <SectionWrapper id="ic-benchmarks" className="bg-culligan-off-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>
        <SectionTitle>{d.title}</SectionTitle>
        <CalloutBox title="Health warning" variant="amber" className="mt-6">
          {d.healthWarning}
        </CalloutBox>
        <div className="mt-8">
          <DataTable
            columns={[
              { key: "metric", label: "Metric" },
              { key: "culligan", label: "Culligan" },
              { key: "peer", label: "Peer / benchmark" },
              { key: "implication", label: "Gap implication" },
            ]}
            rows={d.spendMetrics}
          />
        </div>
        <p className="mt-4 text-xs text-culligan-muted">{d.sources}</p>

        {d.impactRisks?.length > 0 && (
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {d.impactRisks.map((risk) => (
              <Panel key={risk.title} className="border-t-4 border-t-culligan-red">
                <p className="text-xs font-bold uppercase tracking-wide text-culligan-red mb-2">{risk.title}</p>
                <LeadText>{risk.finding}</LeadText>
                <p className="mt-3 text-sm font-semibold text-culligan-deep">{risk.action}</p>
              </Panel>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

export function InfraPlaysSection() {
  const d = infrastructureCloudPlays;
  return (
    <SectionWrapper id="ic-plays" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>
        <SectionTitle>{d.title}</SectionTitle>
        <LeadText className="mt-4 max-w-4xl">{d.lead}</LeadText>

        <MobileCards
          rows={d.items}
          renderCard={(row) => (
            <>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="rounded-full bg-culligan-deep text-white text-[10px] font-bold px-2 py-0.5">
                  Play {row.play}
                </span>
                <HypothesisTag code="H2" />
                <span className="text-xs text-culligan-muted">{row.horizon}</span>
              </div>
              <p className="font-semibold text-culligan-deep text-sm">{row.name}</p>
              <p className="text-sm text-culligan-body mt-2">{row.focus}</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-culligan-muted">Net saving</span>
                  <p className="font-semibold text-culligan-accent">{row.net}</p>
                </div>
                <div>
                  <span className="text-culligan-muted">Confidence</span>
                  <p className="font-semibold">{row.confidence}</p>
                </div>
              </div>
            </>
          )}
        />

        <TableScroll className="hidden md:block mt-8 rounded-xl ring-1 ring-culligan-off-white">
          <table className="w-full text-left text-sm min-w-[900px]">
            <thead>
              <tr className="bg-culligan-deep text-white">
                <th className="px-3 py-3">Play</th>
                <th className="px-3 py-3">Name</th>
                <th className="px-3 py-3">Gross</th>
                <th className="px-3 py-3">Net / yr</th>
                <th className="px-3 py-3">Horizon</th>
                <th className="px-3 py-3">Confidence</th>
                <th className="px-3 py-3">Focus</th>
              </tr>
            </thead>
            <tbody>
              {d.items.map((row, i) => (
                <tr key={row.play} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/50"}>
                  <td className="px-3 py-3 font-bold text-culligan-accent">{row.play}</td>
                  <td className="px-3 py-3 font-medium text-culligan-deep">{row.name}</td>
                  <td className="px-3 py-3 text-culligan-body">{row.gross}</td>
                  <td className="px-3 py-3 font-semibold text-culligan-accent">{row.net}</td>
                  <td className="px-3 py-3 text-culligan-body">{row.horizon}</td>
                  <td className="px-3 py-3 text-culligan-body">{row.confidence}</td>
                  <td className="px-3 py-3 text-culligan-body text-xs">{row.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>

        <div className="mt-8 rounded-2xl bg-culligan-deep px-6 py-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-culligan-accent mb-2">Total opportunity</p>
          <p className="text-sm text-culligan-light">
            {d.total.gross} gross · {d.total.net} net · {d.total.horizon}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function InfraMaPipelineSection() {
  const d = infrastructureCloudMaPipeline;
  return (
    <SectionWrapper id="ic-ma-pipeline" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>
        <SectionTitle>{d.title}</SectionTitle>
        <LeadText className="mt-4 max-w-4xl">{d.lead}</LeadText>

        <TableScroll className="mt-8 rounded-xl ring-1 ring-black/5">
          <table className="w-full text-left text-sm min-w-[900px]">
            <thead>
              <tr className="bg-culligan-deep text-white">
                <th className="px-3 py-3">Entity / deal</th>
                <th className="px-3 py-3">Close</th>
                <th className="px-3 py-3">Users</th>
                <th className="px-3 py-3">Sites</th>
                <th className="px-3 py-3">Outstanding items</th>
                <th className="px-3 py-3">Est. cost</th>
                <th className="px-3 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {d.rows.map((row, i) => (
                <tr key={row.entity} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/50"}>
                  <td className="px-3 py-3 font-medium text-culligan-deep">{row.entity}</td>
                  <td className="px-3 py-3">{row.close}</td>
                  <td className="px-3 py-3">{row.users}</td>
                  <td className="px-3 py-3">{row.sites}</td>
                  <td className="px-3 py-3 text-xs">{row.items}</td>
                  <td className="px-3 py-3">{row.cost}</td>
                  <td className="px-3 py-3 font-semibold text-culligan-accent">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>

        <ul className="mt-8 space-y-3 text-sm text-culligan-body list-disc pl-5 max-w-4xl">
          {d.implications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-culligan-muted">{d.source}</p>
      </div>
    </SectionWrapper>
  );
}

export function InfraRegionalSection() {
  const d = infrastructureCloudRegionalSpend;
  return (
    <SectionWrapper id="ic-regional" className="bg-culligan-off-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{d.partLabel}</PartLabel>
        <SectionTitle>{d.title}</SectionTitle>
        <LeadText className="mt-4 max-w-4xl">{d.lead}</LeadText>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {d.regions.map((r) => (
            <Panel key={r.region} className="border-t-4 border-t-culligan-accent text-center sm:text-left">
              <p className="font-headline text-lg font-bold text-culligan-deep">{r.region}</p>
              <p className="mt-2 font-headline text-2xl font-extrabold text-culligan-accent">{r.spend}</p>
              <p className="text-sm text-culligan-muted">{r.share} of infra towers</p>
              <p className="mt-3 text-sm text-culligan-body">{r.note}</p>
            </Panel>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function InfraRoadmapSection() {
  return (
    <HypothesisRoadmapSection
      id="ic-roadmap"
      data={{ ...infrastructureCloudRoadmap, bottomLine: infrastructureCloudBottomLine }}
    />
  );
}
