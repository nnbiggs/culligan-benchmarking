import { navLinks, keyFindings } from "./benchmarkData";
import { taxonomyNavLinks } from "./taxonomyData";
import { vendorRationalizationNavLinks } from "./vendorRationalizationData";
import { infrastructureCloudNavLinks } from "./infrastructureCloudData";

export const executiveSummaryLinks = navLinks;
export { taxonomyNavLinks, vendorRationalizationNavLinks, infrastructureCloudNavLinks };

/** Deck-aligned hypothesis routes (H1–H5 framework from July 2026 analysis decks). */
export const hypothesisLinks = keyFindings.hypothesisLegend.rows.map((row) => {
  const id = `hypothesis-${row.code.toLowerCase()}`;
  const label = `${row.code} — ${row.name}`;

  if (row.code === "H4") {
    return { id, label, to: "/taxonomy" };
  }
  if (row.code === "H5") {
    return { id, label, to: "/vendor-rationalization" };
  }
  if (row.code === "H2") {
    return { id, label, to: "/infrastructure-cloud" };
  }

  return { id, label, hash: id };
});

export const operatingModelLink = {
  label: "Operating model (H4)",
  path: "/taxonomy",
};

export const vendorRationalizationLink = {
  label: "Vendor rationalization (H5)",
  path: "/vendor-rationalization",
};

export const infrastructureCloudLink = {
  label: "Infrastructure & cloud (H2)",
  path: "/infrastructure-cloud",
};
