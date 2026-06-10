import { executiveSummary } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";

export default function ExecutiveSummary() {
  const { eyebrow, headline, paragraphs, callout } = executiveSummary;

  return (
    <SectionWrapper className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">
              {eyebrow}
            </p>
            <h2
              className="font-headline text-3xl sm:text-4xl font-extrabold text-culligan-deep tracking-tight">
              {headline}
            </h2>
          </div>
          <div className="space-y-5 text-culligan-body leading-relaxed">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-base text-culligan-muted">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-r-xl border-l-4 border-culligan-accent bg-culligan-callout px-6 py-6 sm:px-8 sm:py-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">
            {callout.label}
          </p>
          <p className="text-base sm:text-lg text-culligan-body leading-relaxed">
            {callout.text}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
