import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/* Returns true when the user prefers reduced motion.
   Combines framer-motion's hook with a media-query fallback for non-framer
   contexts (e.g., plain CSS animation guards). */
export function useReducedMotion(): boolean {
  const framerPrefers = useFramerReducedMotion();

  if (framerPrefers !== null) return framerPrefers;

  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
