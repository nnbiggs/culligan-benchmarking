import { maPlaybook } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";
import { TableScroll, MobileCards } from "./ResponsiveTable";

export default function MaPlaybook() {
  const { title, subtitle, intro, phases, note, erpFramework } = maPlaybook;

  return (
    <SectionWrapper className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-culligan-deep tracking-tight">{title}</h2>
          <p className="mt-3 text-culligan-muted max-w-3xl">{subtitle}</p>
          <p className="mt-4 text-culligan-body leading-relaxed max-w-4xl">{intro}</p>
        </div>

        <div className="space-y-4">
          {phases.map((p, i) => (
            <div key={p.phase} className="rounded-xl bg-culligan-off-white shadow-md px-6 py-5 border-l-4 border-l-culligan-accent">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                <h3 className="font-headline font-bold text-culligan-deep">{p.phase}</h3>
                <span className="text-xs font-semibold text-culligan-accent uppercase tracking-wide">{p.owner}</span>
              </div>
              <p className="text-sm text-culligan-muted leading-relaxed">{p.actions}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-culligan-muted italic">{note}</p>

        <div className="mt-12">
          <h3 className="font-headline text-xl font-bold text-culligan-deep mb-2">{erpFramework.title}</h3>
          <p className="text-sm text-culligan-muted mb-6">{erpFramework.subtitle}</p>
          <MobileCards
            rows={erpFramework.rows}
            renderCard={(row) => (
              <>
                <p className="font-headline font-bold text-culligan-deep text-sm mb-3">{row.scenario}</p>
                <p className="text-xs font-semibold text-culligan-accent uppercase tracking-wide mb-1">Decision</p>
                <p className="text-sm font-semibold text-culligan-accent mb-3">{row.decision}</p>
                <p className="text-xs font-semibold text-culligan-deep uppercase tracking-wide mb-1">Rationale</p>
                <p className="text-sm text-culligan-muted leading-relaxed">{row.rationale}</p>
              </>
            )}
          />

          <TableScroll className="hidden md:block rounded-xl shadow-md">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-culligan-light">
                  {erpFramework.columns.map((col) => (
                    <th key={col} className="font-headline px-4 py-4 text-left font-semibold text-culligan-deep first:rounded-tl-xl last:rounded-tr-xl">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {erpFramework.rows.map((row, i) => (
                  <tr key={row.scenario} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}>
                    <td className="px-4 py-4 font-medium text-culligan-deep">{row.scenario}</td>
                    <td className="px-4 py-4 text-culligan-accent font-semibold">{row.decision}</td>
                    <td className="px-4 py-4 text-culligan-muted">{row.rationale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroll>
        </div>
      </div>
    </SectionWrapper>
  );
}
