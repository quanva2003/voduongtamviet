import type { Variants, Transition } from "framer-motion";

export const easings = {
  zen: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  cinematic: [0.16, 1, 0.3, 1] as [number, number, number, number],
  reveal: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number],
};

export const durations = {
  instant: 0.15,
  fast: 0.3,
  base: 0.5,
  slow: 0.8,
  cinematic: 1.2,
};

const zenTransition: Transition = { duration: durations.slow, ease: easings.zen };
const cinematicTransition: Transition = { duration: durations.cinematic, ease: easings.cinematic };

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: zenTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: zenTransition },
};

export const cinematicReveal: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: cinematicTransition },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: zenTransition },
};
