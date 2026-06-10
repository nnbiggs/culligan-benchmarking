import { benchmarkTable } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";
import { TableScroll, MobileCards } from "./ResponsiveTable";

export default function BenchmarkTable() {
  const { title, subtitle, columns, rows, caption } = benchmarkTable;

  return (
    <SectionWrapper id="reference" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-culligan-deep tracking-tight">{title}</h2>
        {subtitle && <p className="mt-3 text-sm sm:text-base text-culligan-muted mb-8 sm:mb-10">{subtitle}</p>}

        <MobileCards
          rows={rows}
          renderCard={(row) => (
            <>
              <p className="font-semibold text-culligan-deep text-sm mb-2">{row.metric}</p>
              <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                <div><span className="text-xs text-culligan-muted block">Culligan</span><span className="font-medium">{row.culligan}</span></div>
                <div><span className="text-xs text-culligan-muted block">Peer</span><span>{row.peer}</span></div>
              </div>
              <p className="text-sm">{row.comparison}</p>
            </>
          )}
        />

        <TableScroll className="hidden md:block rounded-xl shadow-md">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-culligan-deep text-white">
                {columns.map((col) => (
                  <th key={col} className="font-headline px-4 py-4 text-left font-semibold first:rounded-tl-xl last:rounded-tr-xl">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}>
                  <td className="px-4 py-4 font-medium text-culligan-deep">{row.metric}</td>
                  <td className="px-4 py-4 text-culligan-body font-semibold">{row.culligan}</td>
                  <td className="px-4 py-4 text-culligan-muted">{row.peer}</td>
                  <td className="px-4 py-4 text-culligan-body whitespace-nowrap">{row.comparison}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>

        <p className="mt-4 text-xs text-culligan-muted italic leading-relaxed">{caption}</p>
      </div>
    </SectionWrapper>
  );
}
