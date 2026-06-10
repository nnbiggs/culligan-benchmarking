import { motion } from "framer-motion";
import { useInView } from "../hooks/useAnimations";

export default function SectionWrapper({ children, className = "", id }) {
  const [ref, inView] = useInView({ threshold: 0.08 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
