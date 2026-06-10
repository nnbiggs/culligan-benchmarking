import { useCountUp } from "../hooks/useAnimations";
import { brand, kpis } from "../data/benchmarkData";
import Logo from "./Logo";

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
  return (
    <header id="overview" className="bg-culligan-deep pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 lg:hidden">
          <Logo />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-culligan-accent uppercase mb-3 sm:mb-4">
            {brand.reportLabel}
          </p>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-tight">
            {brand.heroTitle}
          </h1>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-culligan-light px-2">{brand.heroSubtitle}</p>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.id} kpi={kpi} />
          ))}
        </div>

        <p className="mt-8 sm:mt-10 text-center text-[10px] sm:text-xs text-culligan-light/60 max-w-3xl mx-auto px-2 leading-relaxed">
          {brand.heroAttribution}
        </p>
      </div>
    </header>
  );
}
