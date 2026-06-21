import { opModelCapability } from "../data/opModelData";

const REGION_THEMES = {
  Americas: { accent: "from-culligan-deep to-[#1a4a7a]", listBg: "bg-sky-50" },
  EMEA: { accent: "from-emerald-700 to-emerald-900", listBg: "bg-emerald-50" },
  APAC: { accent: "from-amber-600 to-amber-800", listBg: "bg-amber-50" },
};

function RegionColumn({ region }) {
  const theme = REGION_THEMES[region.name] ?? REGION_THEMES.Americas;

  return (
    <div className="flex flex-col rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm">
      <div className={`bg-gradient-to-br ${theme.accent} px-4 py-3 text-center`}>
        <p className="font-headline text-sm font-bold text-white">{region.name}</p>
        <p className="text-[11px] text-white/85 mt-0.5">{region.profile}</p>
      </div>
      <ul className={`${theme.listBg} divide-y divide-black/5 max-h-[300px] overflow-y-auto flex-1`}>
        {region.businessUnits.map((bu) => (
          <li key={bu.name} className="flex items-center justify-between gap-2 px-3 py-2 text-xs sm:text-sm">
            <span className="text-culligan-body min-w-0">{bu.name}</span>
            <span className="shrink-0 font-semibold text-culligan-deep">{bu.spend}</span>
          </li>
        ))}
      </ul>
      <div className="bg-culligan-deep px-3 py-2 text-center">
        <p className="text-[11px] font-semibold text-culligan-light">{region.footer}</p>
      </div>
    </div>
  );
}

export default function CapabilityScopeDiagram() {
  const { intro, scopeRegions, corporateBand } = opModelCapability;

  return (
    <section className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-culligan-deep/10">
      <div className="bg-culligan-deep px-5 py-6 sm:px-8 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,12rem)] lg:gap-10 items-start">
          <div className="space-y-4">
            <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">{intro.lead}</p>
            <p className="text-sm sm:text-base text-culligan-light/90 leading-relaxed">{intro.scope}</p>
            <p className="text-sm sm:text-base text-culligan-light/80 leading-relaxed border-l-4 border-culligan-accent pl-4">
              {intro.framework}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">
            {[
              { value: "59", label: "Legal entities" },
              { value: "24", label: "Business units" },
              { value: "3", label: "Regions" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-white/10 px-3 py-3 text-center ring-1 ring-white/15">
                <p className="font-headline text-2xl font-extrabold text-white">{s.value}</p>
                <p className="text-[10px] text-culligan-light/80 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 lg:p-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {scopeRegions.map((region) => (
            <RegionColumn key={region.name} region={region} />
          ))}
        </div>

        <div className="mt-4 rounded-xl border-2 border-dashed border-culligan-accent/40 bg-gradient-to-r from-culligan-deep/5 to-culligan-accent/5 px-4 py-4 sm:px-6 sm:py-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-culligan-muted mb-2">Corporate & shared services</p>
          <p className="text-xs sm:text-sm font-semibold text-culligan-deep leading-relaxed">
            {corporateBand.replace(/^CORPORATE & SHARED SERVICES[^·]*·\s*/i, "")}
          </p>
        </div>
      </div>
    </section>
  );
}
