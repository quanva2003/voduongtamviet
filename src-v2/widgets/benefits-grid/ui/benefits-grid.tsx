import { motion } from "framer-motion";

import { ValueCard } from "@/entities/value";
import type { Value } from "@/entities/value";
import { staggerChildren } from "@/shared/lib/motion";
import { Container, SectionEyebrow } from "@/shared/ui";

interface BenefitsGridProps {
  values: Value[];
  eyebrow?: { numeral: string; label: string };
  title?: string;
}

export function BenefitsGrid({ values, eyebrow, title }: BenefitsGridProps) {
  return (
    <section className="bg-washi py-[var(--space-24)]">
      <Container size="lg">
        {eyebrow && (
          <SectionEyebrow numeral={eyebrow.numeral} label={eyebrow.label} className="mb-3" />
        )}
        {title && (
          <h2 className="mb-12 font-display text-[length:var(--text-h2)] text-text-primary">
            {title}
          </h2>
        )}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {values.map((value) => (
            <ValueCard key={value.id} value={value} animate />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
