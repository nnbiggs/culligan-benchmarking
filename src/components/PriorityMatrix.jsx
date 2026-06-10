import { priorityMatrix } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";

export default function PriorityMatrix() {
  const { title, subtitle, intro, quadrants } = priorityMatrix;

  return (
    <SectionWrapper className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-culligan-deep tracking-tight">{title}</h2>
          <p className="mt-3 text-culligan-muted max-w-3xl">{subtitle}</p>
          <p className="mt-4 text-culligan-body leading-relaxed max-w-4xl">{intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quadrants.map((q) => (
            <div
              key={q.label}
              className="rounded-xl bg-white shadow-md overflow-hidden"
              style={{ borderTop: `4px solid ${q.color}` }}
            >
              <div className="px-6 py-4 bg-culligan-off-white/60">
                <h3 className="font-headline font-bold text-culligan-deep">{q.label}</h3>
                <p className="text-xs text-culligan-muted mt-1">{q.sublabel}</p>
              </div>
              <ul className="px-6 py-5 space-y-3">
                {q.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-culligan-muted leading-relaxed">
                    <span className="text-culligan-accent shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
