import { motion } from "framer-motion";
import { useInView } from "../hooks/useAnimations";

export default function SectionWrapper({ children, className = "", id }) {
  const [ref, inView] = useInView({ threshold: 0.05, rootMargin: "0px 0px -5% 0px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 1, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 24 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
