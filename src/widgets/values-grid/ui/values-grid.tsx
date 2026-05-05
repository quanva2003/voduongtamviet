import { motion } from "framer-motion";

import type { Value } from "@/entities/value";
import { staggerChildren, fadeInUp } from "@/shared/lib/motion";
import { Container, KanjiAccent, SectionEyebrow } from "@/shared/ui";

interface ValuesGridProps {
  values: Value[];
  eyebrow?: { numeral: string; label: string };
  title?: string;
}

export function ValuesGrid({ values, eyebrow, title }: ValuesGridProps) {
  return (
    <section className="relative overflow-hidden bg-sumi-ink py-[var(--space-24)] text-washi">
      <KanjiAccent
        char="道"
        size="xl"
        position="watermark"
        color="inherit"
        className="right-8 bottom-4"
      />

      <Container size="lg" className="relative z-10">
        {eyebrow && (
          <SectionEyebrow numeral={eyebrow.numeral} label={eyebrow.label} className="mb-3" />
        )}
        {title && <h2 className="mb-12 font-display text-[length:var(--text-h2)]">{title}</h2>}

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {values.map((value) => (
            <motion.div key={value.id} variants={fadeInUp} className="text-center">
              <KanjiAccent char={value.kanji} size="lg" color="shu" className="mb-4 block" />
              <h3 className="font-display text-[length:var(--text-h3)]">{value.title}</h3>
              <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-washi/70">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
