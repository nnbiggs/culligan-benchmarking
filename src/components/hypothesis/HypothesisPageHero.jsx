/** Shared dark hero for H2 / H4 / H5 hypothesis pages. */
export default function HypothesisPageHero({ id, cover }) {
  return (
    <header id={id} className="scroll-anchor bg-culligan-deep pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">
            {cover.eyebrow}
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {cover.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-culligan-light leading-snug">{cover.subtitle}</p>
          <p className="mt-2 text-xs text-culligan-light/70">{cover.meta}</p>
        </div>

        <div className="mt-8 max-w-4xl mx-auto rounded-xl bg-white/10 border border-white/15 px-5 py-5 sm:px-8">
          <p className="text-sm sm:text-base text-culligan-light leading-relaxed text-center">{cover.hook}</p>
        </div>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {cover.kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-5 border-t-4 border-t-culligan-accent text-center"
            >
              <div className="font-headline text-xl sm:text-2xl font-extrabold text-white">{kpi.value}</div>
              <div className="mt-2 text-xs sm:text-sm text-culligan-light">{kpi.label}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-culligan-light/60">{cover.source} · Confidential · PwC</p>
      </div>
    </header>
  );
}
