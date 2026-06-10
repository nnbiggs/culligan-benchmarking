import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { strategicInsights } from "../data/benchmarkData";
import SectionWrapper from "./SectionWrapper";

function InsightCard({ item, isOpen, onToggle }) {
  const { title, borderColor, sections } = item;
  const { sectionLabels } = strategicInsights;

  return (
    <div
      className="rounded-xl bg-white shadow-md overflow-hidden"
      style={{ borderLeft: `4px solid ${borderColor}` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-culligan-off-white/50 transition-colors"
        aria-expanded={isOpen}
      >
        <h3
          className="font-headline text-lg font-bold text-culligan-deep pr-4">
          {item.id}. {title}
        </h3>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-culligan-muted shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-5 border-t border-culligan-off-white">
              {[
                { key: "observation", label: sectionLabels.observation, color: borderColor },
                { key: "businessImplication", label: sectionLabels.businessImplication, color: borderColor },
                { key: "requiredAction", label: sectionLabels.requiredAction, color: borderColor },
              ].map(({ key, label, color }) => (
                <div key={key}>
                  <p
                    className="text-xs font-semibold tracking-[0.15em] uppercase mb-2"
                    style={{ color }}
                  >
                    {label}
                  </p>
                  <p className="text-sm text-culligan-muted leading-relaxed">
                    {sections[key]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function StrategicInsights() {
  const { title, subtitle, items } = strategicInsights;
  const [openId, setOpenId] = useState(1);

  return (
    <SectionWrapper id="insights" className="bg-culligan-off-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2
            className="font-headline text-3xl sm:text-4xl font-extrabold text-culligan-deep tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-culligan-muted max-w-3xl">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <InsightCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
