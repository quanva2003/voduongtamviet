import { motion } from "framer-motion";

import { fadeInUp, staggerChildren } from "@/shared/lib/motion";
import { Button, Container, Link, SectionEyebrow } from "@/shared/ui";

export interface HeroZenProps {
  eyebrow: { numeral: string; label: string };
  headline: string;
  subline?: string;
  ctaPrimary?: { label: string; href: string };
}

export function HeroZen({ eyebrow, headline, subline, ctaPrimary }: HeroZenProps) {
  return (
    <section className="flex min-h-[40vh] items-center bg-sumi-paper py-20">
      <Container size="md">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={fadeInUp}>
            <SectionEyebrow
              numeral={eyebrow.numeral}
              label={eyebrow.label}
              className="mb-6 justify-center"
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-[length:var(--text-display-md)] text-text-primary"
          >
            {headline}
          </motion.h1>

          {subline && (
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-lg text-[length:var(--text-body-lg)] text-text-secondary"
            >
              {subline}
            </motion.p>
          )}

          {ctaPrimary && (
            <motion.div variants={fadeInUp} className="mt-10">
              <Link to={ctaPrimary.href}>
                <Button size="lg" arrow>
                  {ctaPrimary.label}
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
