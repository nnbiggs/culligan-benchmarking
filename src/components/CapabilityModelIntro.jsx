import { opModelCapability } from "../data/opModelData";
import CapabilityScopeDiagram from "./CapabilityScopeDiagram";
import { SubTitle, LeadText, Panel, CalloutBox } from "./opModel/OpModelUi";

export default function CapabilityModelIntro() {
  const cm = opModelCapability;

  return (
    <div className="space-y-10 sm:space-y-12">
      <CapabilityScopeDiagram />

      <Panel>
        <SubTitle>A business built through acquisition — not design</SubTitle>
        <LeadText className="mt-4">{cm.section1a}</LeadText>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {cm.archetypes.map((a) => (
            <div key={a.name} className="rounded-xl border border-culligan-off-white bg-gradient-to-b from-culligan-off-white/60 to-white p-5 border-t-4 border-t-culligan-accent">
              <p className="font-headline text-sm font-bold text-culligan-deep">{a.name}</p>
              <p className="mt-2 text-xs font-semibold text-culligan-accent">{a.bus}</p>
              <p className="mt-3 text-sm text-culligan-body leading-relaxed">{a.model}</p>
            </div>
          ))}
        </div>
      </Panel>

      <CalloutBox title={cm.calloutTitle}>
        <p>{cm.callout}</p>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {cm.calloutStats.map((s) => (
            <div key={s.label} className="rounded-xl bg-white/80 px-3 py-3 text-center ring-1 ring-sky-200/60">
              <p className="font-headline text-2xl font-extrabold text-culligan-accent">{s.value}</p>
              <p className="text-[11px] text-culligan-muted mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </CalloutBox>

      <CalloutBox title={cm.coreInsightTitle} variant="deep">
        {cm.coreInsight}
      </CalloutBox>
    </div>
  );
}
