import { gapAnalysis, statusBadgeStyles } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";

function PriorityBadge({ label, type }) {
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${statusBadgeStyles[type]}`}>
      {label}
    </span>
  );
}

export default function GapAnalysis() {
  const { title, subtitle, columns, rows, callout } = gapAnalysis;

  return (
    <SectionWrapper className="bg-culligan-off-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-culligan-deep tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-culligan-muted max-w-3xl">{subtitle}</p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="w-full min-w-[800px] text-sm">
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
              {rows.map((row, i) => (
                <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}>
                  <td className="px-4 py-4 font-semibold text-culligan-deep whitespace-nowrap">{row.area}</td>
                  <td className="px-4 py-4">
                    <span className={`text-xs font-bold tracking-wide ${row.status === "ABSENT" ? "text-culligan-red" : "text-culligan-amber"}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-culligan-muted">{row.detail}</td>
                  <td className="px-4 py-4">
                    <PriorityBadge label={row.priority} type={row.priorityType} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-r-xl border-l-4 border-culligan-red bg-red-50 px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-red uppercase mb-3">
            {callout.label}
          </p>
          <p className="text-sm text-culligan-body leading-relaxed">{callout.text}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
