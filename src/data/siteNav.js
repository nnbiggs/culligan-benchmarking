import { navLinks, keyFindings } from "./benchmarkData";
import { taxonomyNavLinks } from "./taxonomyData";
import { vendorRationalizationNavLinks } from "./vendorRationalizationData";

export const executiveSummaryLinks = navLinks;
export { taxonomyNavLinks, vendorRationalizationNavLinks };

/** H5 routes to the business capability taxonomy page; other hypotheses scroll to Key Findings on the home page. */
export const hypothesisLinks = keyFindings.hypothesisLegend.rows.map((row) => {
  const id = `hypothesis-${row.code.toLowerCase()}`;
  const label = `${row.code} — ${row.name}`;

  if (row.code === "H5") {
    return {
      id,
      label,
      to: "/vendor-rationalization",
    };
  }

  return {
    id,
    label,
    hash: id,
  };
});

export const operatingModelLink = {
  label: "Operating model",
  path: "/taxonomy",
};

export const vendorRationalizationLink = {
  label: "Vendor rationalization",
  path: "/vendor-rationalization",
};
