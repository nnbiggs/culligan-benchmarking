import { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { ebitdaImpact, statusBadgeStyles } from "../data/benchmarkData";
import { useInView } from "../hooks/useAnimations";
import SectionWrapper from "./SectionWrapper";
import { TableScroll, MobileCards } from "./ResponsiveTable";

function SavingsChart() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const { chartData } = ebitdaImpact;
  const [chartLayout, setChartLayout] = useState({ yAxisWidth: 120, height: 320 });

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setChartLayout({ yAxisWidth: 68, height: 300 });
      } else if (width < 640) {
        setChartLayout({ yAxisWidth: 88, height: 300 });
      } else {
        setChartLayout({ yAxisWidth: 120, height: 320 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div ref={ref} className="w-full mt-8 sm:mt-10" style={{ height: chartLayout.height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} layout="vertical" margin={{ top: 8, right: 8, left: 4, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#D6E8F5" horizontal={false} />
          <XAxis type="number" domain={[0, 12]} tickFormatter={(v) => `$${v}M`} tick={{ fill: "#5A6A7E", fontSize: 10 }} />
          <YAxis
            type="category"
            dataKey="name"
            width={chartLayout.yAxisWidth}
            tick={{ fill: "#1A1A2E", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip formatter={(value) => [`$${value}M`, ""]} contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
          <Legend wrapperStyle={{ paddingTop: 12, fontSize: 12 }} formatter={(v) => (v === "low" ? "Low" : "High")} />
          <Bar dataKey="low" fill="#022656" radius={[0, 4, 4, 0]} barSize={12} isAnimationActive={inView} animationDuration={1200} />
          <Bar dataKey="high" fill="#1B7F9E" radius={[0, 4, 4, 0]} barSize={12} isAnimationActive={inView} animationDuration={1200} animationBegin={200} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function EbitdaImpact() {
  const { title, subtitle, intro, columns, rows, note, callout } = ebitdaImpact;

  return (
    <SectionWrapper id="value" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-culligan-deep tracking-tight">{title}</h2>
          <p className="mt-3 text-sm sm:text-base text-culligan-muted max-w-3xl">{subtitle}</p>
          <p className="mt-4 text-sm sm:text-base text-culligan-body leading-relaxed max-w-4xl">{intro}</p>
        </div>

        <MobileCards
          rows={rows}
          renderCard={(row) => (
            <>
              <p className="font-headline font-bold text-culligan-deep text-sm mb-3">{row.lever}</p>
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm mb-3">
                <div><span className="text-culligan-muted block">Annual</span><span className="font-medium">{row.annual}</span></div>
                <div><span className="text-culligan-muted block">EBITDA</span><span className="font-medium">{row.ebitda}</span></div>
                <div><span className="text-culligan-muted block">EV @ 10×</span><span className="font-medium">{row.ev10}</span></div>
                <div><span className="text-culligan-muted block">EV @ 12×</span><span className="font-medium text-culligan-accent">{row.ev12}</span></div>
              </div>
              {row.confidence !== "—" && (
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusBadgeStyles[row.confidenceType]}`}>{row.confidence}</span>
              )}
            </>
          )}
        />

        <TableScroll className="hidden md:block rounded-xl shadow-md">
          <table className="w-full min-w-[900px] text-sm">
            <thead>
              <tr className="bg-culligan-deep text-white">
                {columns.map((col) => (
                  <th key={col} className="font-headline px-4 py-4 text-left font-semibold first:rounded-tl-xl last:rounded-tr-xl">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.lever} className={`${row.isTotal ? "!bg-culligan-light font-semibold" : i % 2 === 0 ? "bg-white" : "bg-culligan-off-white"}`}>
                  <td className="px-4 py-4 text-culligan-deep">{row.lever}</td>
                  <td className="px-4 py-4 text-culligan-muted">{row.annual}</td>
                  <td className="px-4 py-4 text-culligan-muted">{row.ebitda}</td>
                  <td className="px-4 py-4 text-culligan-body font-medium">{row.ev10}</td>
                  <td className="px-4 py-4 text-culligan-accent font-medium">{row.ev12}</td>
                  <td className="px-4 py-4">
                    {row.confidence !== "—" && (
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusBadgeStyles[row.confidenceType]}`}>{row.confidence}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>

        <p className="mt-4 text-xs text-culligan-muted italic leading-relaxed">{note}</p>
        <SavingsChart />

        <div className="mt-8 sm:mt-10 rounded-xl bg-culligan-deep px-5 py-6 sm:px-10 sm:py-8 text-center shadow-md">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">{callout.label}</p>
          <p className="text-sm sm:text-base text-culligan-light leading-relaxed max-w-4xl mx-auto">{callout.text}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
