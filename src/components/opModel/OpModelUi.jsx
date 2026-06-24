export function PartLabel({ children }) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">{children}</p>
  );
}

export function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`font-headline text-2xl sm:text-3xl font-extrabold text-culligan-deep tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

export function SubTitle({ children, className = "" }) {
  return (
    <h3 className={`font-headline text-lg sm:text-xl font-bold text-culligan-deep leading-snug ${className}`}>
      {children}
    </h3>
  );
}

export function LeadText({ children, className = "" }) {
  return (
    <p className={`text-sm sm:text-base text-culligan-body leading-relaxed ${className}`}>{children}</p>
  );
}

export function Panel({ children, className = "" }) {
  return (
    <div className={`rounded-2xl bg-white p-6 sm:p-8 shadow-md ring-1 ring-black/5 ${className}`}>{children}</div>
  );
}

export function DataTable({ columns, rows, compact = false }) {
  return (
    <>
      <div className="space-y-3 md:hidden">
        {rows.map((row, i) => (
          <div key={i} className="rounded-xl bg-white p-4 ring-1 ring-culligan-off-white shadow-sm">
            {columns.map((col, colIndex) => (
              <div key={col.key} className={colIndex > 0 ? "mt-3 pt-3 border-t border-culligan-off-white" : ""}>
                <p className="text-[10px] font-bold uppercase tracking-wide text-culligan-accent mb-1">{col.label}</p>
                <p className={`text-culligan-body leading-relaxed ${compact ? "text-xs" : "text-sm"}`}>{row[col.key]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto rounded-xl ring-1 ring-culligan-off-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-culligan-deep text-white">
              {columns.map((col) => (
                <th key={col.key} className={`px-4 py-3 font-semibold ${compact ? "text-xs" : ""}`}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/50"}>
                {columns.map((col) => (
                  <td key={col.key} className={`px-4 py-3 text-culligan-body align-top ${compact ? "text-xs" : ""}`}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function KpiStrip({ items, dark = false }) {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 ${dark ? "" : ""}`}>
      {items.map((item) => (
        <div
          key={item.label}
          className={`rounded-xl px-4 py-4 text-center ${
            dark ? "bg-white/10 ring-1 ring-white/15" : "bg-culligan-off-white ring-1 ring-culligan-off-white"
          }`}
        >
          <p className={`font-headline text-xl sm:text-2xl font-extrabold ${dark ? "text-white" : "text-culligan-deep"}`}>
            {item.value}
          </p>
          <p className={`text-xs mt-1 leading-snug ${dark ? "text-culligan-light/80" : "text-culligan-muted"}`}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function CalloutBox({ title, children, variant = "sky" }) {
  const styles = {
    sky: "from-sky-100 via-sky-50 to-white ring-sky-200",
    amber: "from-amber-50 to-orange-50 ring-amber-200",
    deep: "from-culligan-deep to-[#1a4a7a] ring-culligan-deep/20 text-white",
  };
  const isDeep = variant === "deep";
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${styles[variant]} p-5 sm:p-6 ring-1 shadow-sm`}>
      {title && (
        <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${isDeep ? "text-culligan-accent" : "text-culligan-accent"}`}>
          {title}
        </p>
      )}
      <div className={`text-sm sm:text-base leading-relaxed ${isDeep ? "text-culligan-light" : "text-culligan-body"}`}>
        {children}
      </div>
    </div>
  );
}

const observationColumns = [
  { key: "area", label: "Area" },
  { key: "observation", label: "Observation" },
  { key: "impact", label: "Impact on Culligan IT costs" },
];

export function KeyObservationsTable({ title, rows, variant }) {
  const headerBg = variant === "good" ? "bg-emerald-700" : "bg-rose-700";

  return (
    <div className="rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm">
      <div className={`${headerBg} px-4 py-3 sm:px-5`}>
        <p className="font-headline text-sm sm:text-base font-bold text-white">{title}</p>
      </div>

      <div className="space-y-4 p-4 md:hidden">
        {rows.map((row) => (
          <div key={row.area} className="rounded-xl bg-white p-4 ring-1 ring-culligan-off-white shadow-sm">
            <p className="font-semibold text-culligan-deep text-sm mb-3">{row.area}</p>
            <p className="text-xs font-semibold text-culligan-accent uppercase tracking-wide mb-1">Observation</p>
            <p className="text-sm text-culligan-body leading-relaxed mb-3">{row.observation}</p>
            <p className="text-xs font-semibold text-culligan-deep uppercase tracking-wide mb-1">Impact on Culligan IT costs</p>
            <p className="text-sm text-culligan-body leading-relaxed">{row.impact}</p>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-culligan-deep text-white">
              {observationColumns.map((col) => (
                <th key={col.key} className="px-4 py-3 text-xs font-semibold align-top">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/50"}>
                {observationColumns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-culligan-body align-top text-xs sm:text-sm leading-relaxed">
                    {col.key === "area" ? (
                      <span className="font-semibold text-culligan-deep">{row[col.key]}</span>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
