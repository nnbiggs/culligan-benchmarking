import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import { PartLabel } from "../opModel/OpModelUi";

function RelatedLinks({ links, className = "" }) {
  if (!links?.length) return null;
  return (
    <div className={`flex flex-wrap gap-2 mt-6 ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wide text-culligan-muted self-center mr-1">Related:</span>
      {links.map((link) => (
        <Link
          key={`${link.to}${link.hash ?? ""}-${link.label}`}
          to={link.hash ? { pathname: link.to, hash: `#${link.hash}` } : link.to}
          className="inline-flex items-center rounded-full bg-culligan-callout px-3 py-1.5 text-xs font-semibold text-culligan-deep ring-1 ring-culligan-accent/20 hover:bg-culligan-accent/10 hover:ring-culligan-accent/40 transition-colors"
        >
          {link.label}
          <span className="ml-1 text-culligan-accent" aria-hidden="true">→</span>
        </Link>
      ))}
    </div>
  );
}

/**
 * Dark roadmap band — shared across H2 / H4 / H5 hypothesis pages.
 */
export default function HypothesisRoadmapSection({
  id,
  data,
  relatedLinkClassName = "[&_a]:bg-white/10 [&_a]:text-culligan-light [&_a]:ring-white/20",
}) {
  const { partLabel, title, lead, waves, funding, governance, relatedLinks, bottomLine } = data;

  return (
    <>
      <SectionWrapper id={id} className="bg-culligan-deep py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {partLabel && <PartLabel>{partLabel}</PartLabel>}
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{title}</h2>
          {lead && <p className="mt-4 text-sm sm:text-base text-culligan-light leading-relaxed max-w-4xl">{lead}</p>}

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {waves.map((wave, i) => (
              <div
                key={wave.wave ?? wave.phase}
                className={`rounded-2xl bg-white/10 ring-1 ring-white/15 p-5 sm:p-6 ${i === 0 ? "border-t-4 border-t-culligan-accent" : ""}`}
              >
                <p className="text-xs font-bold uppercase tracking-wide text-culligan-accent">{wave.wave ?? wave.phase}</p>
                <p className="mt-1 text-sm font-bold text-white">{wave.horizon ?? wave.saving}</p>
                {Array.isArray(wave.actions) ? (
                  <ul className="mt-4 space-y-2 text-sm text-culligan-light leading-relaxed list-disc pl-5">
                    {wave.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm text-culligan-light leading-relaxed">{wave.actions}</p>
                )}
                <div className="mt-4 pt-3 border-t border-white/10 space-y-1">
                  {wave.netYear && <p className="text-sm font-semibold text-culligan-accent">{wave.netYear}</p>}
                  {wave.saving && !wave.horizon && (
                    <p className="text-sm font-semibold text-culligan-accent">{wave.saving}</p>
                  )}
                  {wave.investment && <p className="text-xs text-culligan-light/70">Investment: {wave.investment}</p>}
                </div>
              </div>
            ))}
          </div>

          {funding && (
            <div className="mt-10 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="font-headline text-lg font-bold text-white">{funding.title}</h3>
              <p className="mt-3 text-sm text-culligan-light leading-relaxed">{funding.mechanism}</p>
              <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {Object.entries(funding.totals).map(([key, val]) => (
                  <div key={key} className="rounded-xl bg-white/10 px-4 py-3 text-center">
                    <p className="text-[10px] uppercase tracking-wide text-culligan-accent">
                      {key.replace(/([A-Z])/g, " $1")}
                    </p>
                    <p className="font-headline text-lg font-extrabold text-white mt-1">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {governance && (
            <div className="mt-10">
              <h3 className="font-headline text-lg font-bold text-white">{governance.title}</h3>
              <p className="mt-3 text-sm text-culligan-light leading-relaxed">{governance.lead}</p>
              <div className="mt-6 rounded-xl overflow-hidden ring-1 ring-white/10 bg-white">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-culligan-deep text-white">
                      {governance.columns.map((col) => (
                        <th key={col.key} className="px-4 py-3 text-xs font-semibold">{col.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {governance.rows.map((row, i) => (
                      <tr key={row.investment} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/50"}>
                        {governance.columns.map((col) => (
                          <td key={col.key} className="px-4 py-3 text-culligan-body align-top text-xs">
                            {row[col.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <RelatedLinks links={relatedLinks} className={relatedLinkClassName} />
        </div>
      </SectionWrapper>

      {bottomLine && (
        <SectionWrapper className="bg-white py-10 sm:py-12 border-t border-culligan-off-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-headline text-xl sm:text-2xl font-extrabold text-culligan-deep">{bottomLine.title}</h3>
            {bottomLine.stats && <p className="mt-3 text-sm text-culligan-muted">{bottomLine.stats.join(" · ")}</p>}
            <p className="mt-4 font-headline text-2xl sm:text-3xl font-extrabold text-culligan-accent">{bottomLine.saving}</p>
            <p className="mt-4 text-sm text-culligan-body max-w-2xl mx-auto">{bottomLine.nextStep}</p>
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
