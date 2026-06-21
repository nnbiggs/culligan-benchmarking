import { maturityModel } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";
import { TableScroll, MobileCards } from "./ResponsiveTable";

export default function MaturityModel() {
  const { title, subtitle, intro, columns, rows, callout } = maturityModel;

  return (
    <SectionWrapper className="bg-culligan-off-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-culligan-deep tracking-tight">{title}</h2>
          <p className="mt-3 text-sm sm:text-base text-culligan-muted max-w-3xl">{subtitle}</p>
          <p className="mt-4 text-sm sm:text-base text-culligan-body leading-relaxed max-w-4xl">{intro}</p>
        </div>

        <MobileCards
          rows={rows}
          renderCard={(row) => (
            <>
              <p className="font-headline font-bold text-culligan-deep text-sm mb-3">{row.domain}</p>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="rounded-full bg-culligan-deep px-3 py-1 text-xs font-bold text-white">{row.score}</span>
                <span className="text-xs font-semibold text-culligan-muted">{row.level}</span>
                <span className="text-xs font-semibold text-culligan-amber">Gap: {row.gap}</span>
              </div>
              <p className="text-xs font-semibold text-culligan-accent uppercase tracking-wide mb-1">Current state</p>
              <p className="text-sm text-culligan-muted mb-3">{row.current}</p>
              <p className="text-xs font-semibold text-culligan-deep uppercase tracking-wide mb-1">Target</p>
              <p className="text-sm text-culligan-body">{row.target}</p>
            </>
          )}
        />

        <TableScroll className="hidden md:block rounded-xl shadow-md">
          <table className="w-full min-w-[960px] text-sm">
            <thead>
              <tr className="bg-culligan-deep text-white">
                {columns.map((col) => (
                  <th key={col} className="font-headline px-4 py-3 text-left font-semibold first:rounded-tl-xl last:rounded-tr-xl">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.domain} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}>
                  <td className="px-4 py-4 font-semibold text-culligan-deep">{row.domain}</td>
                  <td className="px-4 py-4 text-culligan-body font-bold">{row.score}</td>
                  <td className="px-4 py-4 text-culligan-muted">{row.level}</td>
                  <td className="px-4 py-4 text-culligan-muted">{row.current}</td>
                  <td className="px-4 py-4 text-culligan-body">{row.target}</td>
                  <td className="px-4 py-4 text-culligan-amber font-semibold">{row.gap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>

        <div className="mt-10 rounded-r-xl border-l-4 border-culligan-accent bg-culligan-callout px-5 py-5 sm:px-8 sm:py-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">{callout.label}</p>
          <p className="text-sm text-culligan-body leading-relaxed">{callout.text}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
