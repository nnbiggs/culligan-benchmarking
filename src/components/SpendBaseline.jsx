import { spendBaseline } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";
import StatusBadge from "./StatusBadge";

export default function SpendBaseline() {
  const { title, subtitle, intro, columns, rows, note, callout } = spendBaseline;

  return (
    <SectionWrapper id="baseline" className="bg-culligan-off-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-culligan-deep tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-culligan-muted max-w-3xl">{subtitle}</p>
          <p className="mt-4 text-culligan-body leading-relaxed max-w-4xl">{intro}</p>
        </div>

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
              {rows.map((row, i) => (
                <tr key={row.tower} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}>
                  <td className="px-4 py-4 font-semibold text-culligan-deep whitespace-nowrap">{row.tower}</td>
                  <td className="px-4 py-4 text-culligan-body font-medium">{row.spend}</td>
                  <td className="px-4 py-4 text-culligan-muted">{row.pct}</td>
                  <td className="px-4 py-4 text-culligan-muted">{row.benchmark}</td>
                  <td className="px-4 py-4">
                    <StatusBadge label={row.status} type={row.statusType} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-culligan-muted italic">{note}</p>

        <div className="mt-8 rounded-r-xl border-l-4 border-culligan-accent bg-culligan-callout px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">
            {callout.label}
          </p>
          <p className="text-sm text-culligan-body leading-relaxed">{callout.text}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
