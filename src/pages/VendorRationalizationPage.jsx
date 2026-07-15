import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import HypothesisPageHero from "../components/hypothesis/HypothesisPageHero";
import { vendorRationalizationCover } from "../data/vendorRationalizationData";
import {
  VendorExecutiveSection,
  VendorMethodologySection,
  VendorCurrentStateSection,
  VendorFutureStateSection,
  VendorRoadmapSection,
  VendorFinancialSection,
} from "../components/vendorRationalization/VendorRationalizationSections";

export default function VendorRationalizationPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="pt-[var(--fixed-header)]">
        <HypothesisPageHero id="vr-overview" cover={vendorRationalizationCover} />
        <VendorExecutiveSection />
        <VendorMethodologySection />
        <VendorCurrentStateSection />
        <VendorFutureStateSection />
        <VendorRoadmapSection />
        <VendorFinancialSection />
      </main>
      <Footer />
    </div>
  );
}
