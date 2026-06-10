import { motion } from "framer-motion";
import { cioPriority } from "../data/benchmarkData";
import { useInView } from "../hooks/useAnimations";
import SectionWrapper from "./SectionWrapper";

function PriorityCard({ priority, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl bg-white shadow-md overflow-hidden border-t-4 border-t-culligan-accent"
    >
      <div className="px-6 py-6 sm:px-8 border-b border-culligan-off-white">
        <div className="font-headline text-5xl font-extrabold text-culligan-accent leading-none mb-4">
          {priority.step}
        </div>
        <h3 className="font-headline text-xl font-bold text-culligan-deep mb-3">{priority.title}</h3>
        <p className="text-sm text-culligan-muted leading-relaxed">{priority.description}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs">
          <div>
            <span className="font-semibold tracking-wider text-culligan-accent uppercase">Horizon</span>
            <p className="text-culligan-body mt-0.5">{priority.horizon}</p>
          </div>
          <div>
            <span className="font-semibold tracking-wider text-culligan-accent uppercase">Savings</span>
            <p className="text-culligan-body mt-0.5 font-medium">{priority.savings}</p>
          </div>
          <div>
            <span className="font-semibold tracking-wider text-culligan-accent uppercase">Owner</span>
            <p className="text-culligan-body mt-0.5">{priority.owner}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-culligan-off-white bg-culligan-off-white/50">
        {priority.milestones.map((m) => (
          <div key={m.period} className="px-5 py-4">
            <p className="text-xs font-bold tracking-wider text-culligan-accent mb-2">{m.period}</p>
            <p className="text-xs text-culligan-muted leading-relaxed">{m.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function CioPriority() {
  const { eyebrow, title, intro, priorities } = cioPriority;
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <SectionWrapper id="priority" className="bg-culligan-off-white py-12 sm:py-16 lg:py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-culligan-accent uppercase mb-3">
            ★ {eyebrow}
          </p>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-culligan-deep tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-culligan-muted leading-relaxed max-w-4xl">{intro}</p>
        </div>
        <div className="space-y-6">
          {priorities.map((p, i) => (
            <PriorityCard key={p.step} priority={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
