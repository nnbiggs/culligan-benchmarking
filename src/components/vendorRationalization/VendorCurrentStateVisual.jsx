import { useState } from "react";
import { Link } from "react-router-dom";
import { SubTitle, LeadText, Panel } from "../opModel/OpModelUi";

const REGION_ACCENTS = {
  EMEA: "border-l-culligan-accent",
  Corporate: "border-l-culligan-deep",
  Americas: "border-l-culligan-amber",
  APAC: "border-l-culligan-green",
};

const HEATMAP_STYLES = {
  High: "bg-rose-100 text-rose-900 ring-rose-200",
  Med: "bg-amber-100 text-amber-900 ring-amber-200",
  Low: "bg-slate-100 text-slate-600 ring-slate-200",
  "—": "bg-slate-50 text-slate-400 ring-slate-100",
};

function SpendBar({ label, spend, spendM, max, barClass, sublabel }) {
  const pct = Math.round((spendM / max) * 100);
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-1.5">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-culligan-deep truncate">{label}</p>
          {sublabel && <p className="text-[10px] text-culligan-muted uppercase tracking-wide">{sublabel}</p>}
        </div>
        <div className="text-right shrink-0">
          <p className="font-headline text-base font-extrabold text-culligan-deep">{spend}</p>
          <p className="text-[10px] text-culligan-muted">{pct}% of estate</p>
        </div>
      </div>
      <div className="h-3 rounded-full bg-culligan-off-white ring-1 ring-black/5 overflow-hidden">
        <div className={`h-full rounded-full ${barClass} transition-all duration-500`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function RegionDonut({ regions, totalSpendM }) {
  const colors = ["#1b7f9e", "#022656", "#e67e22", "#1e7a46"];
  let cumulative = 0;
  const segments = regions.map((r, i) => {
    const pct = (r.spendM / totalSpendM) * 100;
    const start = cumulative;
    cumulative += pct;
    return { ...r, pct, start, color: colors[i % colors.length] };
  });

  const gradient = segments
    .map((s) => `${s.color} ${s.start}% ${s.start + s.pct}%`)
    .join(", ");

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div
        className="relative h-36 w-36 sm:h-40 sm:w-40 shrink-0 rounded-full ring-4 ring-white shadow-md"
        style={{ background: `conic-gradient(${gradient})` }}
        role="img"
        aria-label="IT spend share by region"
      >
        <div className="absolute inset-[22%] rounded-full bg-white flex flex-col items-center justify-center text-center px-2">
          <p className="text-[10px] font-bold uppercase tracking-wide text-culligan-muted">Total</p>
          <p className="font-headline text-lg font-extrabold text-culligan-deep">${totalSpendM}M</p>
        </div>
      </div>
      <ul className="flex-1 w-full space-y-2">
        {segments.map((s) => (
          <li key={s.region} className="flex items-center justify-between gap-2 text-sm">
            <span className="flex items-center gap-2 min-w-0">
              <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
              <span className="font-medium text-culligan-deep truncate">{s.region}</span>
            </span>
            <span className="text-culligan-muted shrink-0">{s.spend} · {Math.round(s.pct)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CapabilityHeatmap({ heatmap }) {
  return (
    <div className="overflow-x-auto rounded-xl ring-1 ring-culligan-off-white">
      <table className="w-full text-left text-xs min-w-[520px]">
        <thead>
          <tr className="bg-culligan-deep text-white">
            <th className="px-3 py-3 font-semibold">Capability</th>
            {heatmap.regions.map((r) => (
              <th key={r} className="px-3 py-3 font-semibold text-center">{r}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {heatmap.rows.map((row, i) => (
            <tr key={row.capability} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/50"}>
              <td className="px-3 py-3 font-medium text-culligan-deep">{row.capability}</td>
              {row.cells.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-center">
                  <span className={`inline-flex min-w-[3.5rem] justify-center rounded-full px-2 py-1 text-[10px] font-bold uppercase ring-1 ${HEATMAP_STYLES[cell] ?? HEATMAP_STYLES["—"]}`}>
                    {cell === "—" ? "—" : cell}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="px-3 py-2 text-[10px] text-culligan-muted bg-culligan-off-white/50 border-t border-culligan-off-white">
        High · Medium · Low = consolidation priority by region × capability
      </p>
    </div>
  );
}

function VendorChip({ name }) {
  return (
    <span className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 text-xs text-culligan-body ring-1 ring-culligan-off-white">
      {name}
    </span>
  );
}

function FocusUnitDetail({ detail }) {
  return (
    <div className="mt-4 pt-4 border-t border-culligan-off-white space-y-5">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-xl bg-culligan-off-white px-3 py-3 text-center">
          <p className="text-[10px] font-bold uppercase text-culligan-muted">Total vendors</p>
          <p className="font-headline text-xl font-extrabold text-culligan-deep mt-1">{detail.vendors}</p>
        </div>
        <div className="rounded-xl bg-culligan-callout px-3 py-3 text-center">
          <p className="text-[10px] font-bold uppercase text-culligan-muted">Overlap vendors</p>
          <p className="font-headline text-xl font-extrabold text-culligan-accent mt-1">{detail.overlapVendors}</p>
        </div>
        <div className="rounded-xl bg-rose-50 px-3 py-3 text-center col-span-2 sm:col-span-2">
          <p className="text-[10px] font-bold uppercase text-rose-800">Overlap spend · {detail.focus}</p>
          <p className="font-headline text-xl font-extrabold text-rose-900 mt-1">{detail.overlapSpend}</p>
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-culligan-deep mb-2">
          Vendors delivering the same capability
        </p>
        <div className="flex flex-wrap gap-2">
          {detail.vendors_list.map((v) => (
            <VendorChip key={v} name={v} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-culligan-muted mb-2">Other overlapping areas</p>
        <ul className="space-y-1.5">
          {detail.otherAreas.map((a) => (
            <li key={a} className="flex items-start gap-2 text-sm text-culligan-body">
              <span className="text-culligan-amber mt-0.5">▸</span>
              {a}
            </li>
          ))}
        </ul>
      </div>

      <Link
        to={{ pathname: "/taxonomy", hash: "#taxonomy-regions" }}
        className="inline-flex text-xs font-semibold text-culligan-accent hover:underline"
      >
        View full regional spend detail →
      </Link>
    </div>
  );
}

function FocusUnitCard({ unit, expanded, onToggle }) {
  const isAnchor = unit.role === "anchor";
  const accent = REGION_ACCENTS[unit.region] ?? "border-l-culligan-accent";

  if (!unit.expandable) {
    return (
      <div className={`rounded-2xl bg-gradient-to-br from-culligan-deep to-[#1a4a7a] p-5 sm:p-6 text-white ring-1 ring-culligan-deep/20 border-l-4 ${accent}`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-culligan-accent">Group anchor</p>
            <p className="font-headline text-xl font-bold mt-1">{unit.name}</p>
          </div>
          <p className="font-headline text-2xl font-extrabold text-white">{unit.spend}</p>
        </div>
        <LeadText className="mt-3 text-culligan-light">{unit.note}</LeadText>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl bg-white ring-1 ring-black/5 shadow-sm border-l-4 ${accent} overflow-hidden`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 hover:bg-culligan-off-white/40 transition-colors"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wide text-culligan-accent">{unit.region}</p>
            <p className="font-headline text-lg font-bold text-culligan-deep mt-0.5">{unit.name}</p>
            <p className="text-xs text-culligan-muted mt-1">
              {unit.detail.vendors} vendors · {unit.detail.capabilitiesWithOverlap} capabilities with 3+ overlaps
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="font-headline text-xl font-extrabold text-culligan-deep">{unit.spend}</p>
            <p className="text-[10px] font-semibold text-culligan-accent mt-1">
              {expanded ? "Hide detail" : "View vendor detail"}
            </p>
          </div>
        </div>
        {!expanded && (
          <div className="mt-3 rounded-lg bg-culligan-callout px-3 py-2 flex items-center justify-between gap-2">
            <span className="text-xs text-culligan-deep">
              <span className="font-bold">{unit.detail.overlapVendors}</span> vendors · {unit.detail.focus}
            </span>
            <span className="text-sm font-extrabold text-culligan-accent">{unit.detail.overlapSpend}</span>
          </div>
        )}
        <span
          className={`mt-3 flex items-center justify-center text-culligan-accent transition-transform ${expanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {expanded && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
          <FocusUnitDetail detail={unit.detail} />
        </div>
      )}
    </div>
  );
}

export default function VendorCurrentStateVisual({ data }) {
  const [expandedId, setExpandedId] = useState(null);
  const maxRegion = Math.max(...data.byRegion.map((r) => r.spendM));
  const maxCapability = Math.max(...data.byCapability.map((c) => c.spendM));

  const toggleUnit = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <Panel className="border-t-4 border-t-culligan-accent">
          <SubTitle>Spend by region</SubTitle>
          <p className="text-xs text-culligan-muted mt-1 mb-6">$69.2M IT & Digital spend · L2 capability rollup</p>
          <RegionDonut regions={data.byRegion} totalSpendM={data.totalSpendM} />
          <div className="mt-8 space-y-4">
            {data.byRegion.map((r) => (
              <SpendBar
                key={r.region}
                label={r.region}
                spend={r.spend}
                spendM={r.spendM}
                max={maxRegion}
                barClass={r.color}
              />
            ))}
          </div>
        </Panel>

        <Panel className="border-t-4 border-t-culligan-deep">
          <SubTitle>Spend by capability</SubTitle>
          <p className="text-xs text-culligan-muted mt-1 mb-6">Technology & innovation absorbs ERP, CRM, IT services, BI</p>
          <div className="space-y-4">
            {data.byCapability.map((c) => (
              <SpendBar
                key={c.capability}
                label={c.capability}
                spend={c.spend}
                spendM={c.spendM}
                max={maxCapability}
                barClass={
                  c.priority === "High"
                    ? "bg-rose-500"
                    : c.priority === "Med"
                      ? "bg-amber-400"
                      : "bg-slate-300"
                }
                sublabel={`${c.priority} consolidation priority`}
              />
            ))}
          </div>
        </Panel>
      </div>

      {data.capabilityHeatmap && (
        <div>
          <SubTitle>Region × capability — consolidation heatmap</SubTitle>
          <p className="text-sm text-culligan-muted mt-2 mb-4 max-w-3xl">
            Where duplication concentrates across the four spending blocs. Technology & innovation is high priority everywhere.
          </p>
          <CapabilityHeatmap heatmap={data.capabilityHeatmap} />
        </div>
      )}

      <div>
        <SubTitle>Focus business units</SubTitle>
        <LeadText className="mt-2 max-w-3xl">{data.focusUnitsLead}</LeadText>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {data.focusUnits.map((unit) => (
            <FocusUnitCard
              key={unit.id}
              unit={unit}
              expanded={expandedId === unit.id}
              onToggle={() => toggleUnit(unit.id)}
            />
          ))}
        </div>

        {data.otherUnitsByRegion?.length > 0 && (
          <div className="mt-8 rounded-xl bg-culligan-off-white p-5 ring-1 ring-culligan-off-white">
            <p className="text-xs font-bold uppercase tracking-wide text-culligan-muted mb-4">Other business units in scope</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {data.otherUnitsByRegion.map((group) => (
                <div key={group.region}>
                  <p className="text-sm font-bold text-culligan-deep mb-2">{group.region}</p>
                  <ul className="space-y-1">
                    {group.units.map((u) => (
                      <li key={u} className="text-xs text-culligan-body">· {u}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
