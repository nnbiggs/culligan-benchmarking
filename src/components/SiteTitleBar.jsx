import { brand } from "../data/benchmarkData";

export default function SiteTitleBar() {
  return (
    <div className="border-b border-white/10 bg-[#011a3d] px-4 py-2 sm:py-2.5">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-headline text-sm sm:text-base lg:text-lg font-extrabold text-white tracking-tight leading-tight">
          {brand.heroTitle}
        </h1>
        <p className="text-[10px] sm:text-xs text-culligan-light/80 tracking-wide mt-0.5">
          {brand.heroMeta}
        </p>
      </div>
    </div>
  );
}
