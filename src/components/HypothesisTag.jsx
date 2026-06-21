import { hypothesisTags } from "../data/taxonomyData";

const modernStyles = {
  H1: "bg-purple-500/15 text-purple-800 ring-1 ring-purple-300/50",
  H2: "bg-emerald-500/15 text-emerald-800 ring-1 ring-emerald-300/50",
  H3: "bg-sky-500/15 text-sky-800 ring-1 ring-sky-300/50",
  H4: "bg-amber-500/15 text-amber-900 ring-1 ring-amber-300/50",
  H5: "bg-orange-500/15 text-orange-900 ring-1 ring-orange-300/50",
};

export default function HypothesisTag({ code, variant = "default" }) {
  const tag = hypothesisTags[code];
  if (!tag) return null;

  if (variant === "modern") {
    return (
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide backdrop-blur-sm ${modernStyles[code] ?? tag.className}`}
      >
        {tag.label}
      </span>
    );
  }

  return (
    <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold tracking-wide ${tag.className}`}>
      {tag.label}
    </span>
  );
}
