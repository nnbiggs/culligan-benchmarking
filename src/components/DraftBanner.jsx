import { draft } from "../data/benchmarkData";

export default function DraftBanner() {
  return (
    <div
      className="fixed top-[52px] sm:top-[60px] left-0 right-0 z-40 bg-culligan-amber text-white text-center px-4 py-2 shadow-md"
      role="status"
      aria-live="polite"
    >
      <p className="text-[10px] sm:text-xs font-semibold tracking-wide leading-snug">
        <span className="inline-block mr-2 px-2 py-0.5 rounded bg-white/20 font-extrabold">
          {draft.label}
        </span>
        {draft.banner}
      </p>
    </div>
  );
}
