import { opModelLeadership } from "../../data/opModelData";

const NODE_VARIANTS = {
  group: "bg-[#022656] text-white ring-[#022656]",
  regional: "bg-sky-700 text-white ring-sky-700",
  director: "bg-slate-600 text-white ring-slate-600",
  cto: "bg-violet-700 text-white ring-violet-700",
  shared: "bg-emerald-700 text-white ring-emerald-700",
  gm: "bg-amber-600 text-white ring-amber-600",
};

function OrgNode({ label, sublabel, variant = "group", className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg px-2 py-2 text-center ring-1 shadow-sm w-full min-h-[52px] ${NODE_VARIANTS[variant]} ${className}`}
    >
      <p className="text-[11px] font-bold leading-tight">{label}</p>
      {sublabel && <p className="text-[9px] font-medium opacity-90 mt-0.5 leading-tight">{sublabel}</p>}
    </div>
  );
}

function RegionalColumn({ nodes }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-w-0 w-full min-h-[116px]">
      {nodes.map((node, i) => (
        <div key={`${node.label}-${i}`} className="flex flex-col items-center w-full">
          {i > 0 && <div className="w-0.5 h-3 bg-slate-300 shrink-0" aria-hidden="true" />}
          <OrgNode label={node.label} sublabel={node.sublabel} variant={node.variant} />
        </div>
      ))}
    </div>
  );
}

function SymmetricOrgDiagram({ groupSublabel, columns, caption, captionClass = "text-culligan-muted" }) {
  return (
    <div className="flex flex-col h-[248px]">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[320px] mx-auto">
        <OrgNode label="Group CIO" sublabel={groupSublabel} variant="group" className="max-w-[200px]" />
        <div className="w-0.5 h-3 bg-slate-300 shrink-0" aria-hidden="true" />
        <OrgNode label="Group shared services" sublabel="Single group budget" variant="shared" className="max-w-[200px]" />
        <div className="w-0.5 h-3 bg-slate-300 shrink-0" aria-hidden="true" />
        <div className="relative w-full px-1">
          <div className="absolute left-[16.67%] right-[16.67%] top-0 h-0.5 bg-slate-300" aria-hidden="true" />
          <div className="flex w-full items-start justify-between gap-2 pt-0">
            {columns.map((nodes, i) => (
              <div key={i} className="flex flex-col items-center flex-1 min-w-0">
                <div className="w-0.5 h-3 bg-slate-300 shrink-0" aria-hidden="true" />
                <RegionalColumn nodes={nodes} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className={`text-[10px] text-center leading-snug px-2 h-8 shrink-0 ${captionClass}`}>{caption}</p>
    </div>
  );
}

const DIAGRAM_CONFIG = {
  "three-cios": {
    groupSublabel: "Group mandate",
    columns: [
      [{ label: "Americas", sublabel: "CIO", variant: "regional" }],
      [{ label: "EMEA", sublabel: "CIO", variant: "regional" }],
      [{ label: "APAC", sublabel: "CIO", variant: "regional" }],
    ],
    caption: "Regional CIOs report to Group CIO · budget at region",
    captionClass: "text-culligan-muted",
  },
  "three-ctos": {
    groupSublabel: "All IT ops",
    columns: [
      [
        { label: "Americas", sublabel: "CTO", variant: "cto" },
        { label: "Regional GM", sublabel: "Reports to", variant: "gm" },
      ],
      [
        { label: "EMEA", sublabel: "CTO", variant: "cto" },
        { label: "Regional GM", sublabel: "Reports to", variant: "gm" },
      ],
      [
        { label: "APAC", sublabel: "CTO", variant: "cto" },
        { label: "Regional GM", sublabel: "Reports to", variant: "gm" },
      ],
    ],
    caption: "CTOs report to regional GMs, not Group CIO",
    captionClass: "text-violet-800",
  },
  "emea-cio": {
    groupSublabel: "Shared services owner",
    columns: [
      [{ label: "Americas", sublabel: "IT Director", variant: "director" }],
      [{ label: "EMEA", sublabel: "CIO", variant: "regional" }],
      [{ label: "APAC", sublabel: "IT Director", variant: "director" }],
    ],
    caption: "Recommended · right-sized to regional scale",
    captionClass: "text-emerald-800 font-semibold",
  },
};

function OptionCard({ option }) {
  const diagram = DIAGRAM_CONFIG[option.diagram];
  const isRecommended = option.recommended;

  if (!diagram) return null;

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-md flex flex-col h-full ${
        isRecommended ? "ring-2 ring-emerald-400 bg-white" : "ring-1 ring-black/5 bg-white"
      }`}
    >
      <div className={`px-4 py-3 sm:px-5 min-h-[88px] ${isRecommended ? "bg-emerald-700" : "bg-culligan-deep"}`}>
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Option {option.number}</p>
            <p className="font-headline text-base sm:text-lg font-bold text-white leading-snug mt-0.5">{option.title}</p>
            <p className="text-xs text-white/85 mt-1">{option.tagline}</p>
          </div>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
              isRecommended ? "bg-white text-emerald-800" : "invisible"
            }`}
          >
            Recommended
          </span>
        </div>
      </div>

      <div
        className={`px-4 py-4 sm:px-5 border-b shrink-0 ${
          isRecommended ? "bg-emerald-50/60" : "bg-slate-50"
        }`}
      >
        <SymmetricOrgDiagram
          groupSublabel={diagram.groupSublabel}
          columns={diagram.columns}
          caption={diagram.caption}
          captionClass={diagram.captionClass}
        />
      </div>

      <div className="px-4 py-4 sm:px-5 flex-1 flex flex-col">
        <p className="text-xs text-culligan-body leading-relaxed">{option.structure}</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 flex-1">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-800 mb-2">What it gets right</p>
            <ul className="space-y-1.5">
              {option.strengths.map((item) => (
                <li key={item} className="flex gap-2 text-xs text-culligan-body leading-relaxed">
                  <span className="text-emerald-600 shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-amber-800 mb-2">Risks & constraints</p>
            <ul className="space-y-1.5">
              {option.risks.map((item) => (
                <li key={item} className="flex gap-2 text-xs text-culligan-body leading-relaxed">
                  <span className="text-amber-600 shrink-0 mt-0.5">!</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ItLeadershipVisual() {
  const { options, structuralPrinciple } = opModelLeadership;

  return (
    <div className="space-y-8">
      <div className="grid gap-5 lg:grid-cols-3 items-stretch">
        {options.map((option) => (
          <OptionCard key={option.id} option={option} />
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden ring-2 ring-culligan-accent shadow-md">
        <div className="bg-culligan-deep px-5 py-4 sm:px-6 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-culligan-accent/20 ring-1 ring-culligan-accent/40">
            <svg className="h-5 w-5 text-culligan-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="font-headline text-base sm:text-lg font-bold text-white">{structuralPrinciple.title}</h3>
        </div>
        <div className="bg-amber-50 px-5 py-5 sm:px-6">
          <p className="text-sm text-culligan-body leading-relaxed">{structuralPrinciple.body}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Service desk", "ITSM platform", "ERP template", "Cloud org", "Enterprise agreements"].map((item) => (
              <span
                key={item}
                className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-culligan-deep ring-1 ring-amber-200"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs font-semibold text-amber-900">
            Single group budget · Regional leaders consume platforms, not operate regional stacks
          </p>
        </div>
      </div>
    </div>
  );
}
