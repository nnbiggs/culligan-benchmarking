import data from "./vendorRationalizationData.json";
import { datedCover } from "./siteMeta";

export const vendorRationalizationCover = datedCover(data.cover);
export const vendorRationalizationExecutive = data.executiveSummary;
export const vendorRationalizationMethodology = data.methodology;
export const vendorRationalizationBenchmarks = data.benchmarks;
export const vendorRationalizationCurrentState = data.currentState;
export const vendorRationalizationFutureState = data.futureState;
export const vendorRationalizationRoadmap = data.roadmap;
export const vendorRationalizationFinancial = data.financialModel;
export const vendorRationalizationBottomLine = data.bottomLine;

export const vendorRationalizationNavLinks = [
  { id: "vr-overview", label: "Overview" },
  { id: "vr-executive", label: "Executive summary" },
  { id: "vr-methodology", label: "Methodology" },
  { id: "vr-current-state", label: "Current state" },
  { id: "vr-future-state", label: "Future state" },
  { id: "vr-roadmap", label: "Roadmap" },
  { id: "vr-financial", label: "Financial model" },
];
