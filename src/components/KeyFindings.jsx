import { keyFindings } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";
import StatusBadge from "./StatusBadge";

export default function KeyFindings() {
  const { title, subtitle, columns, rows, source } = keyFindings;

  return (
    <SectionWrapper id="findings" className="bg-culligan-off-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2
            className="font-headline text-3xl sm:text-4xl font-extrabold text-culligan-deep tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-culligan-muted max-w-3xl">{subtitle}</p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-culligan-deep text-white">
                {columns.map((col) => (
                  <th
                    key={col}
                    className="font-headline px-4 py-4 text-left font-semibold first:rounded-tl-xl last:rounded-tr-xl">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.area}
                  className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}
                >
                  <td className="px-4 py-4 font-semibold text-culligan-deep whitespace-nowrap">
                    {row.area}
                  </td>
                  <td className="px-4 py-4 text-culligan-muted">{row.finding}</td>
                  <td className="px-4 py-4">
                    <StatusBadge label={row.status} type={row.statusType} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-culligan-muted italic">{source}</p>
      </div>
    </SectionWrapper>
  );
}
