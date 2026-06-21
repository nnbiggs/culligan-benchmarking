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
    <div className="overflow-x-auto rounded-xl ring-1 ring-culligan-off-white">
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
