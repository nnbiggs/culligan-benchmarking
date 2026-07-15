import { Routes, Route } from "react-router-dom";
import BenchmarkPage from "./pages/BenchmarkPage";
import TaxonomyPage from "./pages/TaxonomyPage";
import VendorRationalizationPage from "./pages/VendorRationalizationPage";
import InfrastructureCloudPage from "./pages/InfrastructureCloudPage";
import { AgentProvider } from "./context/AgentContext";
import AgentAssistant from "./components/AgentAssistant";

export default function App() {
  return (
    <AgentProvider>
      <Routes>
        <Route path="/" element={<BenchmarkPage />} />
        <Route path="/taxonomy" element={<TaxonomyPage />} />
        <Route path="/vendor-rationalization" element={<VendorRationalizationPage />} />
        <Route path="/infrastructure-cloud" element={<InfrastructureCloudPage />} />
      </Routes>
      <AgentAssistant />
    </AgentProvider>
  );
}
