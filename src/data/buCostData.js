import data from "./buCostData.json";
import { withEngagementDate } from "./siteMeta";

export const buCostSource = withEngagementDate(data.source);
export const buCostFootnote = data.footnote;
export const regionCostData = data.regionCosts;
export const corporateCostData = data.corporate;
export const taxonomyBuMap = data.taxonomyBuMap;

export function getBuCostByName(name) {
  if (data.corporate?.name === name) return data.corporate;
  return data.businessUnits.find((bu) => bu.name === name) ?? null;
}

export function getBuCostForTaxonomyBu(taxonomyName) {
  const mapped = data.taxonomyBuMap[taxonomyName];
  if (!mapped) return null;
  return getBuCostByName(mapped);
}
