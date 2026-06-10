import { assumptions, limitations, statusBadgeStyles } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";

function ImpactBadge({ label, type }) {
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${statusBadgeStyles[type]}`}>
      {label}
    </span>
  );
}

export default function ReferenceSection() {
  const { title: assumptionsTitle, subtitle: assumptionsSubtitle, rows: assumptionRows } = assumptions;
  const { title: limitationsTitle, subtitle: limitationsSubtitle, columns, rows: limitationRows } = limitations;

  return (
    <SectionWrapper id="reference" className="bg-culligan-off-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-culligan-deep tracking-tight">
            {assumptionsTitle}
          </h2>
          <p className="mt-3 text-culligan-muted mb-8">{assumptionsSubtitle}</p>
          <div className="space-y-4">
            {assumptionRows.map((row) => (
              <div key={row.category} className="rounded-xl bg-white shadow-md px-6 py-5">
                <p className="text-xs font-semibold tracking-[0.15em] text-culligan-accent uppercase mb-2">
                  {row.category}
                </p>
                <p className="text-sm text-culligan-muted leading-relaxed">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-culligan-deep tracking-tight">
            {limitationsTitle}
          </h2>
          <p className="mt-3 text-culligan-muted mb-8">{limitationsSubtitle}</p>
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-culligan-deep text-white">
                  {columns.map((col) => (
                    <th key={col} className="font-headline px-4 py-4 text-left font-semibold first:rounded-tl-xl last:rounded-tr-xl">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {limitationRows.map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}>
                    <td className="px-4 py-4 font-semibold text-culligan-deep">{row.item}</td>
                    <td className="px-4 py-4">
                      <ImpactBadge label={row.impact} type={row.impactType} />
                    </td>
                    <td className="px-4 py-4 text-culligan-muted">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
