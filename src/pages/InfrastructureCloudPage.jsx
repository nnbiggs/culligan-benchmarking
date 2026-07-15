import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import HypothesisPageHero from "../components/hypothesis/HypothesisPageHero";
import { infrastructureCloudCover } from "../data/infrastructureCloudData";
import {
  InfraExecutiveSection,
  InfraBenchmarkSection,
  InfraPlaysSection,
  InfraMaPipelineSection,
  InfraRegionalSection,
  InfraRoadmapSection,
} from "../components/infrastructureCloud/InfrastructureCloudSections";

export default function InfrastructureCloudPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="pt-[var(--fixed-header)]">
        <HypothesisPageHero id="ic-overview" cover={infrastructureCloudCover} />
        <InfraExecutiveSection />
        <InfraBenchmarkSection />
        <InfraPlaysSection />
        <InfraMaPipelineSection />
        <InfraRegionalSection />
        <InfraRoadmapSection />
      </main>
      <Footer />
    </div>
  );
}
