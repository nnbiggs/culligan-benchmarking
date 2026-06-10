import { motion } from "framer-motion";
import { cioPriority } from "../data/benchmarkData";
import { useInView } from "../hooks/useAnimations";
import SectionWrapper from "./SectionWrapper";
import { TableScroll, MobileCards } from "./ResponsiveTable";

function PriorityCard({ priority, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl bg-white shadow-md overflow-hidden border-t-4 border-t-culligan-accent"
    >
      <div className="px-5 py-6 sm:px-8 border-b border-culligan-off-white">
        <div className="font-headline text-4xl sm:text-5xl font-extrabold text-culligan-accent leading-none mb-4">
          {priority.step}
        </div>
        <h3 className="font-headline text-lg sm:text-xl font-bold text-culligan-deep mb-4 leading-snug">
          {priority.title}
        </h3>

        {priority.whyItMatters ? (
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-culligan-accent uppercase mb-2">
              Why it matters
            </p>
            <p className="text-sm text-culligan-muted leading-relaxed">{priority.whyItMatters}</p>
          </div>
        ) : (
          <p className="text-sm text-culligan-muted leading-relaxed whitespace-pre-line">{priority.description}</p>
        )}

        {priority.note && (
          <div className="mt-4 rounded-lg bg-culligan-callout border-l-4 border-culligan-accent px-4 py-3">
            <p className="text-xs font-semibold text-culligan-accent uppercase tracking-wide mb-1">Note</p>
            <p className="text-xs text-culligan-body leading-relaxed">{priority.note}</p>
          </div>
        )}

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <span className="font-semibold tracking-wider text-culligan-accent uppercase">Horizon</span>
            <p className="text-culligan-body mt-0.5">{priority.horizon}</p>
          </div>
          <div>
            <span className="font-semibold tracking-wider text-culligan-accent uppercase">Savings</span>
            <p className="text-culligan-body mt-0.5 font-medium">{priority.savings}</p>
          </div>
          <div>
            <span className="font-semibold tracking-wider text-culligan-accent uppercase">Owner</span>
            <p className="text-culligan-body mt-0.5">{priority.owner}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-culligan-off-white bg-culligan-off-white/50">
        {priority.milestones.map((m) => (
          <div key={m.period} className="px-5 py-4">
            <p className="text-xs font-bold tracking-wider text-culligan-accent mb-2">{m.period}</p>
            <p className="text-xs text-culligan-muted leading-relaxed">{m.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function BusinessResultsTable() {
  const { businessResults } = cioPriority;
  const { title, subtitle, columns, rows, closing } = businessResults;

  return (
    <div className="mt-14 sm:mt-16">
      <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">
        {title}
      </p>
      <h3 className="font-headline text-xl sm:text-2xl font-extrabold text-culligan-deep tracking-tight mb-2">
        What Success Looks Like in 90 Days
      </h3>
      <p className="text-sm text-culligan-muted mb-8 max-w-3xl">{subtitle}</p>

      <MobileCards
        rows={rows}
        renderCard={(row) => (
          <>
            <p className={`font-headline font-bold text-sm mb-3 ${row.isTotal ? "text-culligan-deep" : "text-culligan-deep"}`}>
              {row.action}
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div><span className="text-culligan-muted block">Investment</span>{row.investment}</div>
              <div><span className="text-culligan-muted block">Year-1 Return</span><span className="font-medium">{row.year1}</span></div>
              <div><span className="text-culligan-muted block">3-Year Return</span>{row.year3}</div>
              <div><span className="text-culligan-muted block">Payback</span><span className="font-bold text-culligan-green">{row.payback}</span></div>
              <div><span className="text-culligan-muted block">Confidence</span>{row.confidence}</div>
            </div>
          </>
        )}
      />

      <TableScroll className="hidden md:block rounded-xl shadow-md">
        <table className="w-full min-w-[960px] text-sm">
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
              <tr
                key={row.action}
                className={
                  row.isTotal
                    ? "bg-culligan-deep text-white font-semibold"
                    : i % 2 === 0
                      ? "bg-white"
                      : "bg-culligan-off-white"
                }
              >
                <td className={`px-4 py-4 font-semibold ${row.isTotal ? "text-white" : "text-culligan-deep"}`}>
                  {row.action}
                </td>
                <td className={`px-4 py-4 ${row.isTotal ? "text-culligan-light" : "text-culligan-muted"}`}>
                  {row.investment}
                </td>
                <td className={`px-4 py-4 font-medium ${row.isTotal ? "text-white" : "text-culligan-body"}`}>
                  {row.year1}
                </td>
                <td className={`px-4 py-4 ${row.isTotal ? "text-culligan-light" : "text-culligan-muted"}`}>
                  {row.year3}
                </td>
                <td className={`px-4 py-4 font-bold ${row.isTotal ? "text-culligan-accent" : "text-culligan-green"}`}>
                  {row.payback}
                </td>
                <td className={`px-4 py-4 text-xs ${row.isTotal ? "text-culligan-light" : "text-culligan-muted"}`}>
                  {row.confidence}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableScroll>

      <p className="mt-8 text-sm text-culligan-body leading-relaxed max-w-4xl">{closing}</p>
    </div>
  );
}

export default function CioPriority() {
  const { eyebrow, title, intro, priorities } = cioPriority;
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper id="priority" className="bg-culligan-off-white py-12 sm:py-16 lg:py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">
            ★ {eyebrow}
          </p>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-culligan-deep tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-culligan-muted leading-relaxed max-w-4xl">{intro}</p>
        </div>

        <div className="space-y-6">
          {priorities.map((p, i) => (
            <PriorityCard key={p.step} priority={p} index={i} inView={inView} />
          ))}
        </div>

        <BusinessResultsTable />
      </div>
    </SectionWrapper>
  );
}
