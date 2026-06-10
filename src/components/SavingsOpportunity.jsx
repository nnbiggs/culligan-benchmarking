import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { savingsOpportunity } from "../data/benchmarkData";
import { useInView } from "../hooks/useAnimations";
import SectionWrapper from "./SectionWrapper";
import StatusBadge from "./StatusBadge";

function SavingsChart() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const { chartData } = savingsOpportunity;

  return (
    <div ref={ref} className="w-full h-[360px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 8, right: 24, left: 8, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#D6E8F5" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 12]}
            tickFormatter={(v) => `$${v}M`}
            tick={{ fill: "#5A6A7E", fontSize: 12 }}
            axisLine={{ stroke: "#D6E8F5" }}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={180}
            tick={{ fill: "#1A1A2E", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => [`$${value}M`, ""]}
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
          <Legend
            wrapperStyle={{ paddingTop: 16 }}
            formatter={(value) =>
              value === "low" ? "Low Estimate" : "High Estimate"
            }
          />
          <Bar
            dataKey="low"
            fill="#022656"
            radius={[0, 4, 4, 0]}
            barSize={14}
            isAnimationActive={inView}
            animationDuration={1200}
          />
          <Bar
            dataKey="high"
            fill="#1B7F9E"
            radius={[0, 4, 4, 0]}
            barSize={14}
            isAnimationActive={inView}
            animationDuration={1200}
            animationBegin={200}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function SavingsOpportunity() {
  const { title, subtitle, totalCallout, enhancedCallout, tableColumns, tableRows, note } = savingsOpportunity;

  return (
    <SectionWrapper id="savings" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2
            className="font-headline text-3xl sm:text-4xl font-extrabold text-culligan-deep tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-culligan-muted max-w-3xl">{subtitle}</p>
        </div>

        <SavingsChart />

        <div className="mt-10 rounded-xl bg-culligan-deep px-6 py-8 sm:px-10 sm:py-10 text-center shadow-md">
          <div
            className="font-headline text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {totalCallout.amount}
          </div>
          <p className="mt-2 text-culligan-light">{totalCallout.subtext}</p>
        </div>

        <div className="mt-10 rounded-r-xl border-l-4 border-culligan-accent bg-culligan-callout px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">
            {enhancedCallout.label}
          </p>
          <p className="text-sm sm:text-base text-culligan-body leading-relaxed">{enhancedCallout.text}</p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-xl shadow-md">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-culligan-light">
                {tableColumns.map((col) => (
                  <th
                    key={col}
                    className="font-headline px-4 py-4 text-left font-semibold text-culligan-deep first:rounded-tl-xl last:rounded-tr-xl">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr
                  key={row.area}
                  className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}
                >
                  <td className="px-4 py-4 font-semibold text-culligan-deep whitespace-nowrap">
                    {row.area}
                  </td>
                  <td className="px-4 py-4 text-culligan-muted">{row.range}</td>
                  <td className="px-4 py-4 text-culligan-muted">{row.horizon}</td>
                  <td className="px-4 py-4">
                    <StatusBadge label={row.priority} type={row.priorityType} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-culligan-muted italic">{note}</p>
      </div>
    </SectionWrapper>
  );
}
