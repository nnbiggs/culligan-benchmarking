import { businessContext } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";

export default function BusinessContext() {
  const { title, subtitle, sections, callout } = businessContext;

  return (
    <SectionWrapper className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-culligan-deep tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-culligan-muted max-w-3xl">{subtitle}</p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.label}>
              <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-4">
                {section.label}
              </p>
              <div className="space-y-4">
                {section.paragraphs.map((para, i) => (
                  <p key={i} className="text-culligan-muted leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-r-xl border-l-4 border-culligan-red bg-red-50 px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-red uppercase mb-3">
            {callout.label}
          </p>
          <p className="text-sm text-culligan-body leading-relaxed">{callout.text}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
