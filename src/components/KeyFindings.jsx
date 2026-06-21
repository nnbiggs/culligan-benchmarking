import { keyFindings } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";
import StatusBadge from "./StatusBadge";
import Breadcrumb, { hypothesisBreadcrumb } from "./Breadcrumb";
import { TableScroll, MobileCards } from "./ResponsiveTable";

export default function KeyFindings() {
  const { title, subtitle, hypothesisLegend, findingsTable, source } = keyFindings;

  return (
    <SectionWrapper id="findings" className="bg-culligan-off-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-culligan-deep tracking-tight">{title}</h2>
          <p className="mt-3 text-sm sm:text-base text-culligan-muted max-w-3xl">{subtitle}</p>
        </div>

        <div className="mb-12">
          <h3 className="font-headline text-lg sm:text-xl font-bold text-culligan-deep mb-2">{hypothesisLegend.title}</h3>
          <p className="text-sm text-culligan-muted mb-6 max-w-4xl">{hypothesisLegend.intro}</p>

          <MobileCards
            rows={hypothesisLegend.rows}
            renderCard={(row) => (
              <>
                <Breadcrumb items={hypothesisBreadcrumb(row.code, row.name)} className="mb-3" />
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-headline font-extrabold text-culligan-accent">{row.code}</span>
                  <span className="font-semibold text-culligan-deep">{row.name}</span>
                </div>
                <p className="text-xs font-semibold text-culligan-accent uppercase tracking-wide mb-2">{row.definition}</p>
                <p className="text-sm text-culligan-muted">{row.measured}</p>
              </>
            )}
          />

          <TableScroll className="hidden md:block rounded-xl shadow-md">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-culligan-deep text-white">
                  {hypothesisLegend.columns.map((col) => (
                    <th key={col} className="font-headline px-4 py-3 text-left font-semibold first:rounded-tl-xl last:rounded-tr-xl">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hypothesisLegend.rows.map((row, i) => (
                  <tr key={row.code} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}>
                    <td className="px-4 py-3 align-top">
                      <Breadcrumb items={hypothesisBreadcrumb(row.code, row.name)} className="mb-2" />
                      <span className="font-extrabold text-culligan-accent whitespace-nowrap">{row.code}</span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-culligan-deep whitespace-nowrap align-top">{row.name}</td>
                    <td className="px-4 py-3 text-culligan-body align-top">{row.definition}</td>
                    <td className="px-4 py-3 text-culligan-muted align-top">{row.measured}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroll>
          <p className="mt-4 text-xs text-culligan-muted italic">{hypothesisLegend.footnote}</p>
        </div>

        <div>
          <h3 className="font-headline text-lg sm:text-xl font-bold text-culligan-deep mb-2">{findingsTable.title}</h3>
          <p className="text-sm text-culligan-muted mb-6 max-w-4xl">{findingsTable.intro}</p>

          <MobileCards
            rows={findingsTable.rows}
            getSectionId={(row) => row.sectionId}
            renderCard={(row) => (
              <>
                {row.code && (
                  <Breadcrumb items={hypothesisBreadcrumb(row.code, row.name)} className="mb-3" />
                )}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-headline font-bold text-culligan-deep text-sm">{row.area}</span>
                  <StatusBadge label={row.status} type={row.statusType} />
                </div>
                <p className="text-xs font-semibold text-culligan-accent uppercase tracking-wide mb-2">The Numbers</p>
                <p className="text-sm text-culligan-body whitespace-pre-line mb-4">{row.numbers}</p>
                <p className="text-xs font-semibold text-culligan-deep uppercase tracking-wide mb-2">What This Means</p>
                <p className="text-sm text-culligan-muted leading-relaxed">{row.meaning}</p>
              </>
            )}
          />

          <TableScroll className="hidden md:block rounded-xl shadow-md">
            <table className="w-full min-w-[900px] text-sm">
              <thead>
                <tr className="bg-culligan-deep text-white">
                  {findingsTable.columns.map((col) => (
                    <th key={col} className="font-headline px-4 py-3 text-left font-semibold first:rounded-tl-xl last:rounded-tr-xl">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {findingsTable.rows.map((row, i) => (
                  <tr
                    key={row.area}
                    id={row.sectionId}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}${row.sectionId ? " scroll-mt-28 sm:scroll-mt-32" : ""}`}
                  >
                    <td className="px-4 py-4 align-top">
                      {row.code && (
                        <Breadcrumb
                          items={hypothesisBreadcrumb(row.code, row.name)}
                          className="mb-2"
                        />
                      )}
                      <p className="font-semibold text-culligan-deep">{row.area}</p>
                      <div className="mt-2">
                        <StatusBadge label={row.status} type={row.statusType} />
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top text-culligan-body whitespace-pre-line font-medium">{row.numbers}</td>
                    <td className="px-4 py-4 align-top text-culligan-muted leading-relaxed">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroll>
        </div>

        <p className="mt-6 text-xs text-culligan-muted italic">{source}</p>
      </div>
    </SectionWrapper>
  );
}
