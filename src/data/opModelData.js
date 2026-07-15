import data from "./opModelData.json";
import { datedCover } from "./siteMeta";

export const opModelCover = datedCover(data.cover);
export const opModelExecutiveSummary = data.executiveSummary;
export const opModelCapability = data.capabilityModel;
export const opModelCurrentState = data.currentState;
export const opModelComparison = data.operatingModel;
export const opModelBenchmark = data.benchmarking;
export const opModelSavings = data.savings;
export const opModelLeadership = data.itLeadershipStructure;
export const opModelRoadmap = data.roadmap;
