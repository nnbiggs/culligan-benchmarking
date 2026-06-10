import { statusBadgeStyles } from "../data/benchmarkData";

export default function StatusBadge({ label, type }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${statusBadgeStyles[type]}`}
    >
      {label}
    </span>
  );
}
