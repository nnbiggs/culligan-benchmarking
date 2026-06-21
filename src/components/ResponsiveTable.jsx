export function TableScroll({ children, className = "" }) {
  return (
    <div className={`relative -mx-4 sm:mx-0 ${className}`}>
      <div className="overflow-x-auto px-4 sm:px-0 pb-2 sm:pb-0">
        <div className="inline-block min-w-full align-middle">{children}</div>
      </div>
    </div>
  );
}

export function MobileCards({ rows, renderCard, getSectionId }) {
  return (
    <div className="space-y-4 md:hidden">
      {rows.map((row, i) => {
        const sectionId = getSectionId?.(row) ?? row.sectionId;

        return (
          <div
            key={sectionId ?? row.id ?? i}
            id={sectionId}
            className={`rounded-xl bg-white shadow-md p-5 border border-culligan-off-white${sectionId ? " scroll-anchor" : ""}`}
          >
            {renderCard(row, i)}
          </div>
        );
      })}
    </div>
  );
}
