function parseAmountM(value) {
  if (!value) return 0;
  const cleaned = value.replace(/[$,<]/g, "").trim();
  const match = cleaned.match(/([\d.]+)\s*M?/);
  return match ? parseFloat(match[1]) : 0;
}

function textToBullets(text) {
  if (!text) return [];
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20);
}

export default function RegionalInsightsPanel({ region }) {
  const totalM = parseAmountM(region.vendorSpend);
  const itM = parseAmountM(region.itSpend);
  const itShare = totalM > 0 ? Math.min((itM / totalM) * 100, 100) : 0;
  const bullets = textToBullets(region.costExplanation);
  const lead = bullets[0];

  return (
    <div className="grid gap-4 lg:grid-cols-2 border-b border-culligan-off-white bg-white px-5 sm:px-8 py-6">
      <section className="rounded-xl overflow-hidden ring-1 ring-violet-200/80 bg-gradient-to-br from-violet-700 to-violet-900 shadow-sm">
        <div className="px-4 py-3.5 border-b border-white/10">
          <p className="text-sm font-bold text-white">Regional IT spend</p>
          <p className="text-xs text-violet-200/90 mt-0.5">
            {region.itSpend} · {region.itPercent} of {region.vendorSpend} vendor spend
          </p>
        </div>
        <div className="px-4 py-4">
          <div className="flex items-end justify-between gap-4 mb-4">
            <p className="text-3xl font-headline font-extrabold text-white">{region.itSpend}</p>
            <p className="text-sm text-violet-200">
              Non-IT vendor <span className="font-bold text-white">${(totalM - itM).toFixed(1)}M</span>
            </p>
          </div>
          <div className="flex h-4 rounded-full overflow-hidden bg-white/10 ring-1 ring-white/10">
            <div className="bg-culligan-accent" style={{ width: `${itShare}%` }} />
            <div className="bg-white/20" style={{ width: `${100 - itShare}%` }} />
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-violet-300">
            <span>IT {Math.round(itShare)}%</span>
            <span>Other vendor {Math.round(100 - itShare)}%</span>
          </div>
          <p className="mt-4 text-xs text-violet-200/80">
            Across {regionCostBuCount(region)} business units in the spend cube · IT Spend only
          </p>
        </div>
      </section>

      <section className="rounded-xl overflow-hidden ring-1 ring-amber-200/60 bg-white shadow-sm">
        <div className="px-4 py-3.5 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
          <p className="text-sm font-bold text-culligan-deep">Regional analysis</p>
          <p className="text-xs text-culligan-muted mt-0.5">IT operating model and benchmarking signals</p>
        </div>
        <div className="px-4 py-4">
          {lead && (
            <p className="text-sm font-semibold text-culligan-deep leading-relaxed border-l-4 border-amber-400 pl-3">
              {lead}
            </p>
          )}
          {bullets.length > 1 && (
            <ul className="mt-3 space-y-2">
              {bullets.slice(1).map((line) => (
                <li key={line} className="flex gap-2 text-sm text-culligan-body leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          )}
          {!lead && region.costExplanation && (
            <p className="text-sm text-culligan-body leading-relaxed">{region.costExplanation}</p>
          )}
        </div>
      </section>
    </div>
  );
}

function regionCostBuCount(region) {
  const counts = { americas: 5, emea: 6, apac: 3 };
  return counts[region.id] ?? "—";
}
