import data from "./infrastructureCloudData.json";
import { datedCover } from "./siteMeta";

export const infrastructureCloudCover = datedCover(data.cover);
export const infrastructureCloudExecutive = data.executiveSummary;
export const infrastructureCloudBenchmarks = data.benchmarks;
export const infrastructureCloudPlays = data.plays;
export const infrastructureCloudMaPipeline = data.maIntegrationPipeline;
export const infrastructureCloudRegionalSpend = data.regionalSpend;
export const infrastructureCloudRoadmap = data.roadmap;
export const infrastructureCloudBottomLine = data.bottomLine;

export const infrastructureCloudNavLinks = [
  { id: "ic-overview", label: "Overview" },
  { id: "ic-executive", label: "Executive summary" },
  { id: "ic-benchmarks", label: "Benchmarking" },
  { id: "ic-plays", label: "Five plays" },
  { id: "ic-ma-pipeline", label: "M&A pipeline" },
  { id: "ic-regional", label: "Regional spend" },
  { id: "ic-roadmap", label: "Roadmap" },
];
