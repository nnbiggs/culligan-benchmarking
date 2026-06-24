import { opModelLeadership } from "../../data/opModelData";

function AccountabilityCell({ value, highlight }) {
  return (
    <td
      className={`px-3 py-3 text-xs sm:text-sm text-culligan-body align-top whitespace-nowrap ${
        highlight ? "bg-amber-50 font-semibold text-culligan-deep" : ""
      }`}
    >
      {value}
    </td>
  );
}

function DecisionCriteriaTable() {
  const { decisionCriteria } = opModelLeadership;
  if (!decisionCriteria) return null;

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-headline text-lg sm:text-xl font-bold text-culligan-deep">{decisionCriteria.title}</h3>
        <p className="mt-2 text-sm text-culligan-muted leading-relaxed max-w-4xl">{decisionCriteria.lead}</p>
      </div>
      <div className="overflow-x-auto rounded-2xl ring-1 ring-black/5 shadow-md">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="bg-culligan-deep text-white">
              {decisionCriteria.columns.map((col) => (
                <th key={col} className="px-4 py-3 text-xs sm:text-sm font-bold align-top">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {decisionCriteria.rows.map((row, i) => (
              <tr key={row.criterion} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/60"}>
                <td className="px-4 py-3 text-xs sm:text-sm font-semibold text-culligan-deep align-top whitespace-nowrap">
                  {row.criterion}
                </td>
                <td className="px-4 py-3 text-xs sm:text-sm text-culligan-body align-top leading-relaxed">
                  {row.groupCio}
                </td>
                <td className="px-4 py-3 text-xs sm:text-sm text-culligan-body align-top leading-relaxed">
                  {row.bu}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LeadershipAccountabilityTable() {
  const { accountabilityMatrix, functionalAllocation } = opModelLeadership;
  const { columns, rows } = accountabilityMatrix;

  return (
    <div className="space-y-4">
      {functionalAllocation && (
        <div>
          <h3 className="font-headline text-lg sm:text-xl font-bold text-culligan-deep">
            {functionalAllocation.title}
          </h3>
          <p className="mt-2 text-sm text-culligan-muted leading-relaxed max-w-4xl">{functionalAllocation.lead}</p>
        </div>
      )}
      <div className="overflow-x-auto rounded-2xl ring-1 ring-black/5 shadow-md">
        <table className="w-full min-w-[880px] border-collapse text-left">
          <thead>
            <tr className="bg-culligan-deep text-white">
              <th className="px-4 py-3 text-xs sm:text-sm font-bold min-w-[200px]">IT function</th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-3 py-3 text-center min-w-[120px] ${
                    col.recommended ? "bg-amber-600 text-white" : ""
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold">
                    {col.recommended && <span aria-hidden="true">★ </span>}
                    {col.label}
                  </div>
                  <div
                    className={`text-[10px] font-medium mt-0.5 ${
                      col.recommended ? "text-amber-100" : "text-culligan-light/80"
                    }`}
                  >
                    {col.sublabel}
                  </div>
                </th>
              ))}
              <th className="px-4 py-3 text-xs sm:text-sm font-bold min-w-[220px]">Why it matters</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.function} className={i % 2 === 0 ? "bg-white" : "bg-culligan-off-white/60"}>
                <td className="px-4 py-3 text-xs sm:text-sm font-semibold text-culligan-deep align-top leading-snug">
                  {row.function}
                </td>
                {columns.map((col) => (
                  <AccountabilityCell key={col.key} value={row[col.key]} highlight={col.recommended} />
                ))}
                <td className="px-4 py-3 text-xs sm:text-sm text-culligan-muted align-top leading-relaxed">
                  {row.whyItMatters}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ItLeadershipVisual() {
  const { structuralPrinciple } = opModelLeadership;

  return (
    <div className="space-y-10">
      <DecisionCriteriaTable />
      <LeadershipAccountabilityTable />

      <div className="rounded-2xl overflow-hidden ring-2 ring-culligan-accent shadow-md">
        <div className="bg-culligan-deep px-5 py-4 sm:px-6 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-culligan-accent/20 ring-1 ring-culligan-accent/40">
            <svg
              className="h-5 w-5 text-culligan-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 className="font-headline text-base sm:text-lg font-bold text-white">{structuralPrinciple.title}</h3>
        </div>
        <div className="bg-amber-50 px-5 py-5 sm:px-6">
          <p className="text-sm text-culligan-body leading-relaxed">{structuralPrinciple.body}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Service desk", "ITSM platform", "ERP template", "Cloud org", "Enterprise agreements"].map((item) => (
              <span
                key={item}
                className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-culligan-deep ring-1 ring-amber-200"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs font-semibold text-amber-900">
            Single group budget · Regional leaders consume platforms, not operate regional stacks
          </p>
        </div>
      </div>
    </div>
  );
}
