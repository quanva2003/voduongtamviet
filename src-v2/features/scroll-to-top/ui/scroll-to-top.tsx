import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useReducedMotion } from "@/shared/lib/use-reduced-motion";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: 8 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" })}
          aria-label="Lên đầu trang"
          className="fixed right-6 bottom-6 z-40 flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-sumi-ink text-washi shadow-lg transition-colors hover:bg-shu-seal"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
