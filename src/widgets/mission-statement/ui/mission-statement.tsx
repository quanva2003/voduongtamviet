import { motion } from "framer-motion";

import { fadeInUp, staggerChildren } from "@/shared/lib/motion";
import { Container, SectionEyebrow } from "@/shared/ui";

interface MissionStatementProps {
  title: string;
  paragraphs: string[];
  eyebrow?: { numeral: string; label: string };
}

export function MissionStatement({ title, paragraphs, eyebrow }: MissionStatementProps) {
  return (
    <section className="bg-washi py-[var(--space-24)]">
      <Container size="md">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          {eyebrow && (
            <motion.div variants={fadeInUp}>
              <SectionEyebrow
                numeral={eyebrow.numeral}
                label={eyebrow.label}
                className="mb-6 justify-center"
              />
            </motion.div>
          )}

          <motion.h2
            variants={fadeInUp}
            className="font-display text-[length:var(--text-display-md)] text-text-primary"
          >
            {title}
          </motion.h2>

          <div className="mx-auto mt-8 max-w-[768px]">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="mb-4 text-[length:var(--text-body-lg)] leading-relaxed text-text-secondary"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
