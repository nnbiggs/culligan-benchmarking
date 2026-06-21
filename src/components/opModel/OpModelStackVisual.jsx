import { useState } from "react";
import {
  currentOpModelVisual,
  targetOpModelVisual,
  regions,
  REGION_VISUAL_THEMES,
} from "../../data/opModelDiagramData";

function VisualKpiStrip({ items, variant }) {
  const isTarget = variant === "target";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {items.map((kpi) => (
        <div
          key={kpi.label}
          className={`rounded-xl px-3 py-3 text-center ring-1 ${
            isTarget
              ? "bg-emerald-50 text-emerald-950 ring-emerald-200"
              : "bg-slate-100 text-slate-900 ring-slate-200"
          }`}
        >
          <p className="font-headline text-base font-extrabold leading-tight">{kpi.value}</p>
          <p className="mt-1 text-[11px] font-medium leading-snug">{kpi.label}</p>
        </div>
      ))}
    </div>
  );
}

function VisualLayer({ label, status, children, variant }) {
  const isTarget = variant === "target";

  return (
    <div className="rounded-xl overflow-hidden ring-1 ring-slate-200">
      <div
        className={`px-4 py-3 ${
          isTarget ? "bg-[#022656] text-white" : "bg-slate-700 text-white"
        }`}
      >
        <p className="text-xs font-bold uppercase tracking-widest opacity-90">{label}</p>
        {status && <p className="text-sm font-medium mt-0.5 leading-snug">{status}</p>}
      </div>
      <div className={`p-3 ${isTarget ? "bg-sky-50/80" : "bg-slate-50"}`}>{children}</div>
    </div>
  );
}

function VisualPlatformGrid({ items, variant }) {
  const isTarget = variant === "target";

  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map((item) => (
        <div
          key={item.name}
          className={`rounded-lg px-3 py-2.5 ring-1 ${
            isTarget ? "bg-white ring-sky-200" : "bg-white ring-slate-200"
          }`}
        >
          <p className="text-sm font-bold text-culligan-deep">{item.name}</p>
          <p className={`text-xs font-medium mt-0.5 ${isTarget ? "text-emerald-800" : "text-slate-600"}`}>
            {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

function VisualRegionStack({ variant }) {
  const isTarget = variant === "target";

  return (
    <div className="space-y-2">
      {regions.map((region) => {
        const theme = REGION_VISUAL_THEMES[region.name];
        return (
          <div key={region.name} className="rounded-lg overflow-hidden ring-1 ring-black/10">
            <div className={`${theme.header} px-3 py-2 flex items-center justify-between gap-2`}>
              <p className="text-sm font-bold text-white">{region.name}</p>
              <p className="text-xs font-semibold text-white/90">
                {isTarget ? (
                  <>
                    {region.itToday} → <span className="font-bold">{region.itTarget}</span>
                  </>
                ) : (
                  <>{region.itToday} IT</>
                )}
              </p>
            </div>
            <div className={`${theme.body} px-3 py-2`}>
              <p className={`text-[11px] font-bold uppercase mb-1.5 ${theme.text}`}>
                {region.buCount} BUs · {isTarget ? "unchanged structure" : "each owns local IT"}
              </p>
              <div className="flex flex-wrap gap-1">
                {region.businessUnits.slice(0, 5).map((bu) => (
                  <span
                    key={bu}
                    className="rounded bg-white/90 px-1.5 py-0.5 text-[10px] font-semibold text-slate-800 ring-1 ring-black/5"
                  >
                    {bu}
                  </span>
                ))}
                {region.businessUnits.length > 5 && (
                  <span className="text-[10px] font-semibold text-slate-500 px-1">
                    +{region.businessUnits.length - 5}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function VisualList({ items, variant }) {
  const isTarget = variant === "target";

  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-lg px-3 py-2 text-sm font-medium ring-1 ${
            isTarget
              ? "bg-emerald-50 text-emerald-950 ring-emerald-200"
              : "bg-white text-slate-800 ring-slate-200"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function OpModelStackDiagram({ data, variant, title, caption }) {
  const isTarget = variant === "target";

  return (
    <article
      className={`flex flex-col rounded-2xl overflow-hidden shadow-lg ring-2 ${
        isTarget ? "ring-emerald-200 border-t-4 border-emerald-500" : "ring-slate-200 border-t-4 border-slate-500"
      }`}
    >
      <header className={`px-5 py-4 ${isTarget ? "bg-emerald-900" : "bg-slate-800"}`}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
          {isTarget ? "Target state" : "Current state"}
        </p>
        <h3 className="font-headline text-lg sm:text-xl font-extrabold text-white mt-1">{title}</h3>
      </header>

      <div className="flex-1 bg-white p-4 space-y-3">
        <VisualKpiStrip items={data.kpis} variant={variant} />

        <VisualLayer label={data.governance.label} status={data.governance.status} variant={variant}>
          <VisualList items={data.governance.items} variant={variant} />
        </VisualLayer>

        <VisualLayer label={data.platforms.label} variant={variant}>
          <VisualPlatformGrid items={data.platforms.items} variant={variant} />
        </VisualLayer>

        <VisualLayer
          label="Operating regions · 24 BUs"
          status={isTarget ? "Same regions & BUs — shared platform delivery" : "Fragmented local IT per BU"}
          variant={variant}
        >
          <VisualRegionStack variant={variant} />
        </VisualLayer>

        <VisualLayer label={data.corporate.label} status={data.corporate.status} variant={variant}>
          <div className="grid grid-cols-2 gap-1.5">
            {data.corporate.items.map((item) => (
              <span
                key={item}
                className={`rounded-lg px-2.5 py-2 text-xs font-semibold text-center ring-1 ${
                  isTarget
                    ? "bg-white text-emerald-900 ring-emerald-200"
                    : item.startsWith("No")
                      ? "bg-rose-50 text-rose-900 ring-rose-200"
                      : "bg-amber-50 text-amber-950 ring-amber-200"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </VisualLayer>

        <div
          className={`rounded-xl px-4 py-3 ring-1 ${
            isTarget ? "bg-emerald-950 text-white ring-emerald-800" : "bg-slate-800 text-white ring-slate-700"
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">{data.footer.label}</p>
          <div className="grid grid-cols-2 gap-1.5">
            {data.footer.items.map((item) => (
              <p key={item} className="text-xs font-medium text-white/95 leading-snug">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <footer className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-600 bg-slate-50 border-t border-slate-200">
        {caption}
      </footer>
    </article>
  );
}

export default function OpModelStackVisual({ currentTitle, currentCaption, targetTitle, targetCaption }) {
  const [active, setActive] = useState("current");

  const panels = {
    current: (
      <OpModelStackDiagram
        data={currentOpModelVisual}
        variant="current"
        title={currentTitle}
        caption={currentCaption}
      />
    ),
    target: (
      <OpModelStackDiagram
        data={targetOpModelVisual}
        variant="target"
        title={targetTitle}
        caption={targetCaption}
      />
    ),
  };

  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-culligan-accent mb-2">
          Operating model visual
        </p>
        <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-culligan-deep">
          Current vs target · side by side
        </h2>
        <p className="mt-2 text-sm sm:text-base text-culligan-muted leading-relaxed max-w-3xl">
          Layered view of how IT is organised today versus the group-led target model — same regions and BUs,
          consolidated platforms and governance.
        </p>
      </div>

      <div className="lg:hidden">
        <div className="flex rounded-xl bg-slate-100 p-1 ring-1 ring-slate-200">
          {[
            { id: "current", label: "Current state" },
            { id: "target", label: "Target state" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                active === tab.id ? "bg-white text-culligan-deep shadow-sm" : "text-slate-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-4">{panels[active]}</div>
      </div>

      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start">
        {panels.current}
        {panels.target}
      </div>
    </section>
  );
}
