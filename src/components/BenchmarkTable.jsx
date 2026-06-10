import { benchmarkTable } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";

export default function BenchmarkTable() {
  const { title, subtitle, columns, rows, caption } = benchmarkTable;

  return (
    <SectionWrapper className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-culligan-deep tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="mt-3 text-culligan-muted mb-10">{subtitle}</p>}

        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="w-full min-w-[800px] text-sm">
            <thead>
              <tr className="bg-culligan-deep text-white">
                {columns.map((col) => (
                  <th
                    key={col}
                    className="font-headline px-4 py-4 text-left font-semibold first:rounded-tl-xl last:rounded-tr-xl"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.metric}
                  className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}
                >
                  <td className="px-4 py-4 font-medium text-culligan-deep">{row.metric}</td>
                  <td className="px-4 py-4 text-culligan-body font-semibold">{row.culligan}</td>
                  <td className="px-4 py-4 text-culligan-muted">{row.peer}</td>
                  <td className="px-4 py-4 text-culligan-muted">{row.top}</td>
                  <td className="px-4 py-4 text-culligan-body whitespace-nowrap">{row.comparison}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-culligan-muted italic">{caption}</p>
      </div>
    </SectionWrapper>
  );
}
