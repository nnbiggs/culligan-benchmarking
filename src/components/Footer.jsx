import { footer } from "../data/benchmarkData";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-culligan-deep pt-8 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <hr className="border-white/20 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <Logo />
          <p className="text-xs tracking-[0.15em] text-white/60 uppercase text-center">
            {footer.confidentiality}
          </p>
          <p className="text-xs text-white/60 text-center md:text-right">
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
