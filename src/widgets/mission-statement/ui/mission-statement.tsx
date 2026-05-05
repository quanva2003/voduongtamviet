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
          className="mx-auto max-w-[768px]"
        >
          {eyebrow && (
            <motion.div variants={fadeInUp}>
              <SectionEyebrow
                numeral={eyebrow.numeral}
                label={eyebrow.label}
                className="mb-6"
              />
            </motion.div>
          )}

          <motion.h2
            variants={fadeInUp}
            className="font-display text-[length:var(--text-display-md)] text-left text-text-primary"
          >
            {title}
          </motion.h2>

          <div className="mt-8">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="mb-4 text-left text-[length:var(--text-body-lg)] leading-[1.7] text-text-secondary"
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
