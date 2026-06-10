import { costOfInaction } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";
import { TableScroll, MobileCards } from "./ResponsiveTable";

export default function CostOfInaction() {
  const { title, subtitle, intro, columns, rows, note, callout } = costOfInaction;

  return (
    <SectionWrapper className="bg-culligan-off-white py-12 sm:py-16 lg:py-20">
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
              <p className="font-semibold text-culligan-deep text-sm mb-3">{row.item}</p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div><span className="text-xs text-culligan-muted block">Annual</span><span className="text-culligan-red font-medium">{row.annual}</span></div>
                <div><span className="text-xs text-culligan-muted block">3-Year</span><span className="text-culligan-red font-medium">{row.threeYear}</span></div>
              </div>
              <p className="text-xs text-culligan-muted leading-relaxed">{row.basis}</p>
            </>
          )}
        />

        <TableScroll className="hidden md:block rounded-xl shadow-md">
          <table className="w-full min-w-[800px] text-sm">
            <thead>
              <tr className="bg-culligan-deep text-white">
                {columns.map((col) => (
                  <th key={col} className="font-headline px-4 py-4 text-left font-semibold first:rounded-tl-xl last:rounded-tr-xl">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.item} className={`${row.isTotal ? "!bg-red-50 font-semibold" : i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}`}>
                  <td className="px-4 py-4 font-medium text-culligan-deep">{row.item}</td>
                  <td className="px-4 py-4 text-culligan-red font-medium whitespace-nowrap">{row.annual}</td>
                  <td className="px-4 py-4 text-culligan-red whitespace-nowrap">{row.threeYear}</td>
                  <td className="px-4 py-4 text-culligan-muted">{row.basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>

        <p className="mt-4 text-xs text-culligan-muted italic leading-relaxed">{note}</p>

        <div className="mt-8 sm:mt-10 rounded-r-xl border-l-4 border-culligan-red bg-red-50 px-5 py-5 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-red uppercase mb-3">{callout.label}</p>
          <p className="text-sm text-culligan-body leading-relaxed">{callout.text}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
