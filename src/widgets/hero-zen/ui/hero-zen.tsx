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
    <section
      className="relative flex min-h-[50vh] items-center overflow-hidden bg-sumi-ink py-20 pt-32 text-washi"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(201,169,97,0.02) 40px, rgba(201,169,97,0.02) 41px)",
      }}
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(26,24,21,0.3))" }}
      />
      <Container size="md" className="relative z-10">
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
            className="font-display text-[length:var(--text-display-md)] text-washi"
          >
            {headline}
          </motion.h1>

          {subline && (
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-lg text-[length:var(--text-body-lg)] text-washi/70"
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
