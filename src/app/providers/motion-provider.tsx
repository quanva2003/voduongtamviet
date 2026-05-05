import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

import { useReducedMotion } from "@/shared/lib";

interface Props {
  children: ReactNode;
}

export function MotionProvider({ children }: Props) {
  const reduced = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion={reduced ? "always" : "never"}>{children}</MotionConfig>
    </LazyMotion>
  );
}
