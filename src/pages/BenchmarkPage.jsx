import Nav from "../components/Nav";
import Hero from "../components/Hero";
import CioPriority from "../components/CioPriority";
import ExecutiveSummary from "../components/ExecutiveSummary";
import BusinessContext from "../components/BusinessContext";
import KeyFindings from "../components/KeyFindings";
import EbitdaImpact from "../components/EbitdaImpact";
import CostOfInaction from "../components/CostOfInaction";
import StrategicInsights from "../components/StrategicInsights";
import MaPlaybook from "../components/MaPlaybook";
import MaturityModel from "../components/MaturityModel";
import PriorityMatrix from "../components/PriorityMatrix";
import Roadmap from "../components/Roadmap";
import BenchmarkTable from "../components/BenchmarkTable";
import Footer from "../components/Footer";

export default function BenchmarkPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-[var(--fixed-header)]">
        <Hero />
        <ExecutiveSummary />
        <CioPriority />
        <BusinessContext />
        <KeyFindings />
        <EbitdaImpact />
        <CostOfInaction />
        <StrategicInsights />
        <MaPlaybook />
        <MaturityModel />
        <PriorityMatrix />
        <Roadmap />
        <BenchmarkTable />
      </main>
      <Footer />
    </div>
  );
}
