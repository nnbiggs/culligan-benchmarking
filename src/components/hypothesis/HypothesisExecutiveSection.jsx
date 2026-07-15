import SectionWrapper from "../SectionWrapper";
import { PartLabel, SectionTitle, LeadText, Panel } from "../opModel/OpModelUi";

const KPI_ACCENT = {
  orange: "text-culligan-amber",
  default: "text-culligan-deep",
  red: "text-culligan-red",
  sky: "text-culligan-accent",
};

export function ExecutiveKpiCard({ label, value, accent = "default" }) {
  return (
    <div className="rounded-xl bg-[#f4f0e8] px-4 py-5 sm:py-6 text-center ring-1 ring-black/5 border border-white/60">
      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-culligan-muted leading-snug">{label}</p>
      <p className={`font-headline text-2xl sm:text-3xl font-extrabold mt-2 ${KPI_ACCENT[accent] ?? KPI_ACCENT.default}`}>
        {value}
      </p>
    </div>
  );
}

export function DimensionDetailTable({ rows }) {
  return (
    <>
      <div className="space-y-4 md:hidden">
        {rows.map((row) => {
          const body = row.detail ?? row.finding;
          return (
            <Panel key={row.dimension} className="border-t-4 border-t-culligan-deep">
              <p className="text-xs font-bold uppercase tracking-wide text-culligan-accent mb-2">{row.dimension}</p>
              <LeadText>{body}</LeadText>
              {row.highlight && (
                <p className="mt-3 text-sm font-semibold text-culligan-amber leading-relaxed">{row.highlight}</p>
              )}
              {row.emphasis && (
                <p className="mt-3 text-sm font-semibold text-culligan-red leading-relaxed">{row.emphasis}</p>
              )}
            </Panel>
          );
        })}
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
            {rows.map((row, i) => {
              const body = row.detail ?? row.finding;
              return (
                <tr key={row.dimension} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/50"}>
                  <td className="px-4 py-4 font-semibold text-culligan-deep align-top text-xs sm:text-sm">{row.dimension}</td>
                  <td className="px-4 py-4 text-culligan-body align-top text-xs sm:text-sm leading-relaxed">
                    {body}
                    {row.highlight && <p className="mt-3 font-semibold text-culligan-amber">{row.highlight}</p>}
                    {row.emphasis && <p className="mt-3 font-semibold text-culligan-red">{row.emphasis}</p>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

/**
 * @param {object} props
 * @param {string} props.id - Section anchor id
 * @param {{ partLabel?: string, title: string, sectionTitle?: string, rows: object[], kpis?: object[] }} props.data
 */
export default function HypothesisExecutiveSection({ id, data }) {
  const partLabel = data.partLabel ?? "01 · Executive summary";

  return (
    <SectionWrapper id={id} className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PartLabel>{partLabel}</PartLabel>
        <SectionTitle>{data.title}</SectionTitle>
        {data.sectionTitle && <p className="mt-4 text-lg font-headline font-bold text-culligan-deep">{data.sectionTitle}</p>}

        {data.kpis?.length > 0 && (
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {data.kpis.map((kpi) => (
              <ExecutiveKpiCard key={kpi.label} {...kpi} />
            ))}
          </div>
        )}

        <div className={data.kpis?.length ? "mt-10" : "mt-8"}>
          <DimensionDetailTable rows={data.rows} />
        </div>
      </div>
    </SectionWrapper>
  );
}
