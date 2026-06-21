import Nav from "../components/Nav";
import DraftBanner from "../components/DraftBanner";
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
import { StickySectionNav, PageScrollAssist } from "../components/PageNavigation";
import { executiveSummaryLinks } from "../data/siteNav";

export default function BenchmarkPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <DraftBanner />
      <main className="pt-9 sm:pt-10">
        <StickySectionNav links={executiveSummaryLinks} ariaLabel="Executive summary sections" />
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
      <PageScrollAssist links={executiveSummaryLinks} ariaLabel="Executive summary page navigation" />
      <Footer />
    </div>
  );
}
