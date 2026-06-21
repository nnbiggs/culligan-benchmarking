import { opModelComparison } from "../../data/opModelData";
import {
  executiveHeadline,
  changeOverview,
  comparisonLayers,
  regions,
  savingsLevers,
  CHANGE_STATUS,
  REGION_ACCENTS,
} from "../../data/opModelDiagramData";
import OpModelStackVisual from "./OpModelStackVisual";

function StatusBadge({ status }) {
  const config = CHANGE_STATUS[status];
  if (!config) return null;

  return (
    <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${config.badge}`}>
      {config.label}
    </span>
  );
}

function ComparisonRow({ item }) {
  return (
    <div className="rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-slate-50 border-b border-slate-200">
        <h4 className="font-headline text-base sm:text-lg font-bold text-culligan-deep">{item.label}</h4>
        <StatusBadge status={item.changeStatus} />
      </div>
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        <div className="px-5 py-4 sm:py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Today</p>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">{item.today}</p>
        </div>
        <div className="px-5 py-4 sm:py-5 bg-emerald-50/60">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Target</p>
          <p className="text-sm sm:text-base text-emerald-950 leading-relaxed font-medium">{item.target}</p>
        </div>
      </div>
    </div>
  );
}

function ComparisonLayer({ layer }) {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="font-headline text-xl sm:text-2xl font-extrabold text-culligan-deep">{layer.title}</h3>
        <p className="mt-1 text-sm sm:text-base text-culligan-muted leading-relaxed">{layer.subtitle}</p>
      </div>
      <div className="space-y-3">
        {layer.items.map((item) => (
          <ComparisonRow key={item.label} item={item} />
        ))}
      </div>
    </section>
  );
}

function ExecutiveHeadline() {
  const d = executiveHeadline;

  return (
    <section className="rounded-3xl overflow-hidden bg-culligan-deep shadow-xl">
      <div className="px-6 py-8 sm:px-10 sm:py-10">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-culligan-accent mb-3">
          IT operating model · current vs target
        </p>
        <p className="text-lg sm:text-xl text-white font-medium leading-relaxed max-w-4xl">{d.lead}</p>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {d.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/10 ring-1 ring-white/15 px-4 py-4 text-center">
              <p className="font-headline text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-2 text-xs sm:text-sm text-culligan-light leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChangeSummary() {
  const d = changeOverview;

  return (
    <section className="grid gap-4 lg:grid-cols-3">
      <div className="rounded-2xl bg-white p-5 sm:p-6 ring-1 ring-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-3 w-3 rounded-full bg-slate-400" />
          <h3 className="font-headline text-lg font-bold text-culligan-deep">Stays the same</h3>
        </div>
        <ul className="space-y-3">
          {d.unchanged.map((item) => (
            <li key={item.label} className="border-l-4 border-slate-300 pl-4">
              <p className="text-sm font-bold text-culligan-deep">{item.label}</p>
              <p className="text-sm text-culligan-muted mt-0.5 leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-white p-5 sm:p-6 ring-1 ring-violet-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-3 w-3 rounded-full bg-violet-500" />
          <h3 className="font-headline text-lg font-bold text-culligan-deep">Physically consolidates</h3>
        </div>
        <ul className="space-y-3">
          {d.consolidates.map((item) => (
            <li key={item.label} className="rounded-xl bg-violet-50 px-4 py-3 ring-1 ring-violet-100">
              <p className="text-sm font-bold text-culligan-deep mb-1">{item.label}</p>
              <p className="text-sm leading-relaxed">
                <span className="text-slate-600">{item.from}</span>
                <span className="mx-2 text-slate-400">→</span>
                <span className="font-semibold text-violet-900">{item.to}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-white p-5 sm:p-6 ring-1 ring-emerald-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
          <h3 className="font-headline text-lg font-bold text-culligan-deep">New or expanded</h3>
        </div>
        <ul className="space-y-3">
          {d.enables.map((item) => (
            <li key={item.label} className="rounded-xl bg-emerald-50 px-4 py-3 ring-1 ring-emerald-100">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <p className="text-sm font-bold text-culligan-deep">{item.label}</p>
                <StatusBadge status={item.changeStatus} />
              </div>
              <p className="text-sm text-emerald-900 leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RegionsSection() {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="font-headline text-xl sm:text-2xl font-extrabold text-culligan-deep">Operating regions</h3>
        <p className="mt-1 text-sm sm:text-base text-culligan-muted leading-relaxed">
          Same 3 regions and 24 business units — only IT delivery and cost profile change.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {regions.map((region) => (
          <div
            key={region.name}
            className={`rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden border-l-4 ${REGION_ACCENTS[region.name]}`}
          >
            <div className="px-5 py-4 border-b border-slate-100">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-headline text-lg font-bold text-culligan-deep">{region.name}</h4>
                <StatusBadge status="unchanged" />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 px-3 py-2">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">IT today</p>
                  <p className="text-lg font-extrabold text-slate-800 mt-0.5">{region.itToday}</p>
                </div>
                <div className="rounded-xl bg-emerald-50 px-3 py-2">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-700">IT target</p>
                  <p className="text-lg font-extrabold text-emerald-900 mt-0.5">{region.itTarget}</p>
                </div>
              </div>
            </div>
            <div className="px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">
                {region.buCount} business units — unchanged
              </p>
              <div className="flex flex-wrap gap-1.5">
                {region.businessUnits.slice(0, 8).map((bu) => (
                  <span
                    key={bu}
                    className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-800"
                  >
                    {bu}
                  </span>
                ))}
                {region.businessUnits.length > 8 && (
                  <span className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
                    +{region.businessUnits.length - 8} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SavingsSection() {
  return (
    <section className="rounded-3xl bg-emerald-950 px-6 py-8 sm:px-10 sm:py-10 text-white">
      <h3 className="font-headline text-xl sm:text-2xl font-extrabold">Year 3 savings levers</h3>
      <p className="mt-2 text-sm sm:text-base text-emerald-100 leading-relaxed max-w-3xl">
        Structural consolidation unlocks $22–44M annual run-rate saving — mapped to the five PwC hypotheses.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {savingsLevers.map((lever) => (
          <div key={lever.code} className="rounded-2xl bg-white/10 ring-1 ring-white/15 px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-200">{lever.code}</p>
            <p className="font-headline text-2xl font-extrabold mt-1">{lever.amount}</p>
            <p className="text-sm text-emerald-100 mt-1">{lever.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function KeyShifts({ title, rows }) {
  if (!rows?.length) return null;

  return (
    <section className="rounded-2xl bg-slate-50 p-5 sm:p-6 ring-1 ring-slate-200">
      <h3 className="font-headline text-lg font-bold text-culligan-deep mb-4">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {rows.map((row) => (
          <div key={row.dimension} className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
            <p className="text-sm font-bold text-culligan-deep mb-3">{row.dimension}</p>
            <p className="text-sm text-slate-700 leading-relaxed mb-2">
              <span className="font-bold text-slate-500">Today · </span>
              {row.current}
            </p>
            <p className="text-sm text-emerald-900 leading-relaxed">
              <span className="font-bold text-emerald-700">Target · </span>
              {row.future}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function OperatingModelVisual() {
  const d = opModelComparison;

  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 px-5 py-5 sm:px-6 ring-1 ring-slate-200">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Current state</p>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed">{d.currentLead}</p>
        </div>
        <div className="rounded-2xl bg-emerald-50 px-5 py-5 sm:px-6 ring-1 ring-emerald-200">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Target state</p>
          <p className="text-sm sm:text-base text-emerald-950 leading-relaxed">{d.futureLead}</p>
        </div>
      </div>

      <ExecutiveHeadline />

      <OpModelStackVisual
        currentTitle={d.currentTitle}
        currentCaption={d.currentCaption}
        targetTitle={d.futureTitle}
        targetCaption={d.futureCaption}
      />

      <ChangeSummary />

      <div className="rounded-3xl bg-slate-50 p-5 sm:p-8 lg:p-10 ring-1 ring-slate-200 space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-culligan-accent mb-2">Detailed comparison</p>
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-culligan-deep">
              Layer by layer · today vs target
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 ring-1 ring-slate-200">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              Today
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 ring-1 ring-emerald-200 text-emerald-900 font-medium">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Target
            </span>
          </div>
        </div>

        {comparisonLayers.map((layer) => (
          <ComparisonLayer key={layer.id} layer={layer} />
        ))}

        <RegionsSection />
      </div>

      <SavingsSection />
      <KeyShifts title={d.comparisonTitle} rows={d.comparison} />
    </div>
  );
}
