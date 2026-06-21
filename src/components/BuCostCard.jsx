import { useState } from "react";
import { getBuCostForTaxonomyBu } from "../data/buCostData";

function parseAmountM(value) {
  if (!value) return 0;
  const cleaned = value.replace(/[$,<]/g, "").trim();
  const match = cleaned.match(/([\d.]+)\s*M?/);
  return match ? parseFloat(match[1]) : 0;
}

/** Extract labelled IT cost line items from explanation text, e.g. "ERP ($2.3M)". */
function parseItComponents(text) {
  if (!text) return [];
  const items = [];
  const regex = /([A-Za-z][A-Za-z0-9/&\s\-–]+?)\s*\(\$([\d.]+)M\)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const label = match[1]
      .trim()
      .replace(/^including\s+/i, "")
      .replace(/^IT (?:spend )?of \$[\d.]+M:\s*/i, "")
      .replace(/^software\s*$/i, "Software");
    if (label.length > 1 && label.length < 55) {
      items.push({ label, amount: `$${match[2]}M`, value: parseFloat(match[2]) });
    }
  }
  return items;
}

function narrativeToBullets(text) {
  if (!text) return [];
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 25);
}

const BAR_COLORS = [
  "bg-culligan-deep",
  "bg-culligan-accent",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-violet-500",
  "bg-rose-400",
  "bg-stone-400",
];

function MetricBadge({ label, value, sub, accent = false }) {
  return (
    <div
      className={`rounded-lg px-3 py-2.5 text-center ${
        accent ? "bg-culligan-accent/10 ring-1 ring-culligan-accent/25" : "bg-culligan-off-white"
      }`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-culligan-muted">{label}</p>
      <p className={`mt-0.5 text-base font-bold ${accent ? "text-culligan-accent" : "text-culligan-deep"}`}>
        {value}
      </p>
      {sub && <p className="text-[10px] text-culligan-muted mt-0.5">{sub}</p>}
    </div>
  );
}

function SectionLabel({ icon, title, subtitle, variant = "dark" }) {
  const isDark = variant === "dark";
  return (
    <div className="flex items-start gap-2.5">
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm ${
          isDark ? "bg-white/15" : "bg-amber-100"
        }`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <div>
        <p className={`text-sm font-bold ${isDark ? "text-white" : "text-culligan-deep"}`}>{title}</p>
        {subtitle && (
          <p className={`text-xs mt-0.5 ${isDark ? "text-white/75" : "text-culligan-muted"}`}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function ItSpendPanel({ cost }) {
  const totalM = parseAmountM(cost.totalSpend);
  const itM = parseAmountM(cost.itSpend);
  const itShare = totalM > 0 ? Math.min((itM / totalM) * 100, 100) : 0;
  const components = parseItComponents(cost.itExplanation);
  const maxComponent = Math.max(...components.map((c) => c.value), 1);
  const bullets = narrativeToBullets(cost.itExplanation);

  return (
    <section className="rounded-xl overflow-hidden ring-1 ring-violet-200/80 bg-gradient-to-br from-violet-700 to-violet-900 shadow-sm">
      <div className="px-4 py-3.5 sm:px-5 border-b border-white/10">
        <SectionLabel
          icon="💻"
          title="IT spend"
          subtitle={cost.itLine?.replace(/\s+/g, " ").trim()}
        />
      </div>

      <div className="px-4 py-4 sm:px-5 bg-violet-950/40">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
          <div>
            <p className="text-3xl font-headline font-extrabold text-white tracking-tight">{cost.itSpend}</p>
            <p className="text-sm text-violet-200 mt-1">
              {cost.itPercent} of {cost.totalSpend} vendor spend
            </p>
          </div>
          <div className="text-right text-xs text-violet-200/90">
            <p>Non-IT vendor</p>
            <p className="text-lg font-bold text-white/90">
              ${(totalM - itM).toFixed(1)}M
            </p>
          </div>
        </div>

        <div className="mb-1 flex justify-between text-[10px] font-semibold uppercase tracking-wide text-violet-300">
          <span>IT spend</span>
          <span>Other vendor spend</span>
        </div>
        <div className="flex h-3 rounded-full overflow-hidden bg-white/10 ring-1 ring-white/10">
          <div
            className="bg-culligan-accent transition-all"
            style={{ width: `${itShare}%` }}
            title={`IT ${cost.itSpend}`}
          />
          <div
            className="bg-white/20 transition-all"
            style={{ width: `${100 - itShare}%` }}
            title={`Non-IT $${(totalM - itM).toFixed(1)}M`}
          />
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-violet-300/80">
          <span>{cost.itSpend} ({Math.round(itShare)}%)</span>
          <span>${(totalM - itM).toFixed(1)}M ({Math.round(100 - itShare)}%)</span>
        </div>

        {components.length > 0 && (
          <div className="mt-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-violet-300 mb-3">
              IT cost breakdown
            </p>
            <ul className="space-y-2.5">
              {components.map((item) => {
                const width = Math.max((item.value / maxComponent) * 100, 8);
                return (
                  <li key={item.label} className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <span className="text-sm text-violet-100 leading-snug">{item.label}</span>
                      <span className="shrink-0 text-sm font-bold text-white">{item.amount}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-culligan-accent/90" style={{ width: `${width}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {bullets.length > 0 && components.length === 0 && (
          <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
            {bullets.map((line) => (
              <li key={line} className="flex gap-2 text-sm text-violet-100/90 leading-relaxed">
                <span className="text-culligan-accent shrink-0 mt-0.5">▸</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}

        {components.length === 0 && bullets.length === 0 && cost.itExplanation && (
          <p className="mt-3 text-sm text-violet-100/90 leading-relaxed">{cost.itExplanation}</p>
        )}
      </div>
    </section>
  );
}

function AnalysisPanel({ narrative }) {
  const bullets = narrativeToBullets(narrative);
  const lead = bullets[0] ?? narrative;

  return (
    <section className="rounded-xl overflow-hidden ring-1 ring-amber-200/60 bg-white shadow-sm">
      <div className="px-4 py-3.5 sm:px-5 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
        <SectionLabel
          icon="📊"
          title="Operational analysis"
          subtitle="Cost structure drivers and benchmarking context"
          variant="light"
        />
      </div>
      <div className="px-4 py-4 sm:px-5">
        {lead && (
          <p className="text-sm sm:text-base font-semibold text-culligan-deep leading-relaxed border-l-4 border-amber-400 pl-3">
            {lead}
          </p>
        )}
        {bullets.length > 1 && (
          <ul className="mt-4 space-y-3">
            {bullets.slice(1).map((line) => (
              <li key={line} className="flex gap-3 text-sm text-culligan-body leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function CostBreakdownBars({ rows }) {
  const categories = rows.filter((row) => row.category !== "TOTAL");
  const maxAmount = Math.max(...categories.map((row) => parseAmountM(row.amount)), 1);

  return (
    <ul className="space-y-3">
      {categories.map((row, index) => {
        const width = Math.max((parseAmountM(row.amount) / maxAmount) * 100, 4);
        return (
          <li key={row.category}>
            <div className="flex items-baseline justify-between gap-3 mb-1">
              <span className="text-sm text-culligan-body leading-snug min-w-0">{row.category}</span>
              <span className="shrink-0 text-sm font-semibold text-culligan-deep">
                {row.amount}
                <span className="text-culligan-muted font-normal ml-1.5">{row.percent}</span>
              </span>
            </div>
            <div className="h-2 rounded-full bg-culligan-off-white overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${BAR_COLORS[index % BAR_COLORS.length]}`}
                style={{ width: `${width}%` }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-culligan-accent transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function BuCostCard({ taxonomyName }) {
  const [showCostStructure, setShowCostStructure] = useState(false);
  const cost = getBuCostForTaxonomyBu(taxonomyName);

  if (!cost) {
    return (
      <div className="rounded-xl border border-dashed border-culligan-off-white bg-white p-5">
        <p className="text-base font-semibold text-culligan-deep">{taxonomyName}</p>
        <p className="mt-2 text-sm text-culligan-muted">Not included in the June 2026 vendor spend cube.</p>
      </div>
    );
  }

  const hasIt = cost.itLine || cost.itExplanation;
  const hasAnalysis = cost.operationalNarrative;
  const hasCostBreakdown = cost.costBreakdown?.length > 0;

  return (
    <article className="rounded-xl border border-culligan-off-white bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 sm:p-5 border-b border-culligan-off-white">
        <div className="min-w-0">
          <h4 className="text-base sm:text-lg font-headline font-bold text-culligan-deep">{taxonomyName}</h4>
          {cost.name !== taxonomyName && (
            <span className="mt-1 inline-block rounded-full bg-culligan-off-white px-2.5 py-0.5 text-xs font-medium text-culligan-muted">
              Spend cube: {cost.name}
            </span>
          )}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          <MetricBadge label="Vendor spend" value={cost.totalSpend} />
          <MetricBadge label="IT spend" value={cost.itSpend} accent />
          <MetricBadge label="IT share" value={cost.itPercent} sub="of vendor spend" />
        </div>

        {cost.overview && (
          <div className="mt-4 rounded-lg bg-sky-50 border border-sky-100 px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-wide text-sky-700 mb-1.5">Summary</p>
            <p className="text-sm text-sky-950/90 leading-relaxed">{cost.overview}</p>
          </div>
        )}
      </div>

      {(hasIt || hasAnalysis) && (
        <div className="p-4 sm:p-5 space-y-4 bg-culligan-off-white/40 flex-1">
          {hasIt && <ItSpendPanel cost={cost} />}
          {hasAnalysis && <AnalysisPanel narrative={cost.operationalNarrative} />}
        </div>
      )}

      {hasCostBreakdown && (
        <div className="border-t border-culligan-off-white bg-white px-4 sm:px-5 py-4">
          <button
            type="button"
            onClick={() => setShowCostStructure((open) => !open)}
            aria-expanded={showCostStructure}
            className="flex w-full items-center justify-between gap-3 rounded-lg border border-culligan-off-white bg-culligan-off-white/50 px-4 py-3 text-left transition-colors hover:bg-culligan-off-white focus:outline-none focus-visible:ring-2 focus-visible:ring-culligan-accent"
          >
            <span className="text-sm font-semibold text-culligan-deep">
              {showCostStructure ? "Hide full vendor cost structure" : "View full vendor cost structure"}
            </span>
            <ChevronIcon open={showCostStructure} />
          </button>
          {showCostStructure && (
            <div className="mt-4 rounded-xl border border-culligan-off-white bg-white p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-culligan-muted mb-4">
                All vendor spend categories
              </p>
              <CostBreakdownBars rows={cost.costBreakdown} />
            </div>
          )}
        </div>
      )}
    </article>
  );
}
