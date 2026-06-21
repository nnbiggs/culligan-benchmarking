function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Breadcrumb({ items, className = "" }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] sm:text-xs">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.id ?? index} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-culligan-muted/50 select-none" aria-hidden="true">/</span>
              )}
              {isLast ? (
                <span className="font-semibold text-culligan-accent">{item.label}</span>
              ) : (
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-culligan-muted hover:text-culligan-deep transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function hypothesisBreadcrumb(code, name) {
  return [
    { id: "findings", label: "Key Findings" },
    { id: `hypothesis-${code.toLowerCase()}`, label: `${code} — ${name}` },
  ];
}
