import { useCountUp } from "../hooks/useAnimations";
import { executiveSummaryCover, kpis } from "../data/benchmarkData";

function KpiCard({ kpi }) {
  const animatedValue = useCountUp(kpi.value ?? 0, 1500, kpi.animate);

  const displayValue = kpi.animate
    ? `${kpi.prefix ?? ""}${animatedValue.toFixed(kpi.decimals ?? 0)}${kpi.suffix ?? ""}`
    : kpi.display;

  return (
    <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-5 sm:px-5 sm:py-6 border-t-4 border-t-culligan-accent">
      <div className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight break-words">
        {displayValue}
      </div>
      <div className="mt-2 text-xs sm:text-sm font-medium text-culligan-light">{kpi.label}</div>
      {kpi.sublabel && (
        <div className="mt-1 text-[11px] sm:text-xs text-culligan-light/80 leading-snug">{kpi.sublabel}</div>
      )}
    </div>
  );
}

export default function Hero() {
  const cover = executiveSummaryCover;

  return (
    <header id="overview" className="scroll-anchor bg-culligan-deep pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">
            {cover.eyebrow}
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {cover.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-culligan-light leading-snug px-2">
            {cover.subtitle}
          </p>
          <p className="mt-2 text-xs text-culligan-light/70">{cover.meta}</p>
        </div>

        <div className="mt-8 max-w-4xl mx-auto rounded-xl bg-white/10 border border-white/15 px-5 py-5 sm:px-8">
          <p className="text-sm sm:text-base text-culligan-light leading-relaxed text-center">{cover.hook}</p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.id} kpi={kpi} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-culligan-light/60">{cover.source}</p>
      </div>
    </header>
  );
}
