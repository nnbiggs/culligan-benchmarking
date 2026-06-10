import { draft, footer } from "../data/benchmarkData";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-culligan-deep pt-8 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-xl border border-culligan-amber/40 bg-culligan-amber/10 px-5 py-5 sm:px-6">
          <p className="text-xs font-extrabold tracking-widest text-culligan-amber uppercase mb-2">Draft Footnote</p>
          <p className="text-xs sm:text-sm text-culligan-light/90 leading-relaxed">{draft.footnote}</p>
        </div>

        <hr className="border-white/20 mb-8" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 mb-8 text-center lg:text-left">
          <Logo />
          <p className="text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.15em] text-white/60 uppercase max-w-xs lg:max-w-none">
            {footer.confidentiality}
          </p>
          <p className="text-[10px] sm:text-xs text-white/60 max-w-sm lg:max-w-xs lg:text-right leading-relaxed">
            {footer.attribution}
          </p>
        </div>

        <p className="text-center text-xs text-white/40">{footer.copyright}</p>
        {footer.disclaimer && (
          <p className="text-center text-xs text-white/30 mt-2">{footer.disclaimer}</p>
        )}
      </div>
    </footer>
  );
}
