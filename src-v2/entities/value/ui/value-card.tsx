import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/motion";
import { Card, KanjiAccent } from "@/shared/ui";

import type { Value } from "../model/types";

interface ValueCardProps {
  value: Value;
  animate?: boolean;
}

export function ValueCard({ value, animate = true }: ValueCardProps) {
  const content = (
    <Card variant="paper" padding="lg" className="flex h-full flex-col items-center text-center">
      <KanjiAccent char={value.kanji} size="lg" color="shu" className="mb-4" />
      <h3 className="font-display text-[length:var(--text-h3)] text-text-primary">{value.title}</h3>
      <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
        {value.description}
      </p>
    </Card>
  );

  if (!animate) return content;

  return (
    <motion.div variants={fadeInUp} className="h-full">
      {content}
    </motion.div>
  );
}
