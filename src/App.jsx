import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ExecutiveSummary from "./components/ExecutiveSummary";
import SpendBaseline from "./components/SpendBaseline";
import KeyFindings from "./components/KeyFindings";
import IndustryContext from "./components/IndustryContext";
import GapAnalysis from "./components/GapAnalysis";
import SavingsOpportunity from "./components/SavingsOpportunity";
import StrategicInsights from "./components/StrategicInsights";
import AiDeepDive from "./components/AiDeepDive";
import InvestmentMix from "./components/InvestmentMix";
import Roadmap from "./components/Roadmap";
import BenchmarkTable from "./components/BenchmarkTable";
import ReferenceSection from "./components/ReferenceSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <ExecutiveSummary />
        <SpendBaseline />
        <KeyFindings />
        <IndustryContext />
        <GapAnalysis />
        <SavingsOpportunity />
        <StrategicInsights />
        <AiDeepDive />
        <InvestmentMix />
        <Roadmap />
        <BenchmarkTable />
        <ReferenceSection />
      </main>
      <Footer />
    </div>
  );
}
