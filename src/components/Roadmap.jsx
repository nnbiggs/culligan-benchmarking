import { motion } from "framer-motion";
import { roadmap } from "../data/benchmarkData";
import { useInView } from "../hooks/useAnimations";
import SectionWrapper from "./SectionWrapper";

function PhaseCard({ phase, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="rounded-xl border border-white/20 bg-white/10 p-6 sm:p-8 hover:bg-white/15 transition-colors"
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
        <h3 className="font-headline text-xl font-bold text-white">{phase.phase}</h3>
        <span className="text-sm text-culligan-light">{phase.horizon}</span>
      </div>
      <p className="font-headline text-2xl font-extrabold text-culligan-accent mb-6">{phase.savings}</p>
      <ul className="space-y-3">
        {phase.actions.map((action) => (
          <li key={action} className="flex gap-3 text-sm text-white/85 leading-relaxed">
            <span className="text-culligan-accent shrink-0 mt-0.5">•</span>
            <span>{action}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Roadmap() {
  const { title, subtitle, phases, note } = roadmap;
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper id="roadmap" className="bg-culligan-deep py-16 sm:py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-culligan-light max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.phase} phase={phase} index={index} inView={inView} />
          ))}
        </div>

        <p className="mt-8 text-xs text-culligan-light/70 text-center italic max-w-4xl mx-auto">{note}</p>
      </div>
    </SectionWrapper>
  );
}
