import { executiveSummary } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";
import StatusBadge from "./StatusBadge";

function StrengthCard({ item }) {
  return (
    <div className="rounded-xl bg-white shadow-md p-5 sm:p-6 border-t-4 border-t-culligan-green h-full">
      <div className="flex items-start gap-3 mb-3">
        <span className="font-headline text-lg font-extrabold text-culligan-green shrink-0">{item.id}</span>
        <h3 className="font-headline text-base sm:text-lg font-bold text-culligan-deep leading-snug">{item.title}</h3>
      </div>
      <p className="text-sm text-culligan-muted leading-relaxed mb-4">{item.description}</p>
      <p className="text-xs text-culligan-body font-medium bg-culligan-off-white rounded-lg px-3 py-2 leading-relaxed">{item.highlight}</p>
    </div>
  );
}

function OpportunityCard({ item }) {
  return (
    <div className="rounded-xl bg-white shadow-md p-5 sm:p-6 border-l-4 border-l-culligan-accent h-full flex flex-col">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3">
          <span className="font-headline text-lg font-extrabold text-culligan-accent shrink-0">{item.id}</span>
          <h3 className="font-headline text-base sm:text-lg font-bold text-culligan-deep leading-snug">{item.title}</h3>
        </div>
      </div>
      <p className="text-sm text-culligan-muted leading-relaxed flex-1">{item.description}</p>
      <p className="text-xs text-culligan-body font-medium mt-4 mb-3">{item.metrics}</p>
      <StatusBadge label={item.priority} type={item.priorityType} />
    </div>
  );
}

export default function ExecutiveSummary() {
  const { eyebrow, headline, situation, strengths, opportunities, conclusion } = executiveSummary;

  return (
    <SectionWrapper className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">{eyebrow}</p>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-culligan-deep tracking-tight">{headline}</h2>
        </div>

        <div className="rounded-r-xl border-l-4 border-culligan-deep bg-culligan-off-white px-5 py-5 sm:px-8 sm:py-6 mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-deep uppercase mb-3">{situation.label}</p>
          <p className="text-sm sm:text-base text-culligan-body leading-relaxed">{situation.text}</p>
        </div>

        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-green uppercase mb-1">{strengths.label}</p>
          <p className="text-sm text-culligan-muted mb-6">— {strengths.sublabel}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {strengths.items.map((item) => (
              <StrengthCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-1">{opportunities.label}</p>
          <p className="text-sm text-culligan-muted mb-6">— {opportunities.sublabel}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {opportunities.items.map((item) => (
              <OpportunityCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-culligan-deep px-5 py-6 sm:px-8 sm:py-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-2">{conclusion.label}</p>
          <h3 className="font-headline text-xl sm:text-2xl font-bold text-white mb-4">{conclusion.title}</h3>
          <p className="text-sm sm:text-base text-culligan-light leading-relaxed">{conclusion.text}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
