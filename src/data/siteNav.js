import { navLinks, keyFindings } from "./benchmarkData";
import { taxonomyNavLinks } from "./taxonomyData";

export const executiveSummaryLinks = navLinks;
export { taxonomyNavLinks };

/** H5 routes to the business capability taxonomy page; other hypotheses scroll to Key Findings on the home page. */
export const hypothesisLinks = keyFindings.hypothesisLegend.rows.map((row) => {
  const id = `hypothesis-${row.code.toLowerCase()}`;
  const label = `${row.code} — ${row.name}`;

  if (row.code === "H5") {
    return {
      id,
      label,
      to: "/taxonomy",
    };
  }

  return {
    id,
    label,
    hash: id,
  };
});

export const operatingModelLink = {
  label: "IT Support & Operating Model",
  path: "/taxonomy",
};
