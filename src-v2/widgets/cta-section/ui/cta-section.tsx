import { motion } from "framer-motion";

import { fadeInUp, staggerChildren } from "@/shared/lib/motion";
import { Button, Container, EnsoCircle, KanjiAccent, Link } from "@/shared/ui";

type CtaVariant = "zen" | "cinematic";

interface CtaSectionProps {
  headline: string;
  paragraph: string;
  cta: { label: string; href: string };
  variant?: CtaVariant;
  kanjiWatermark?: string;
}

const variantClasses: Record<CtaVariant, string> = {
  zen: "bg-sumi-paper text-text-primary",
  cinematic: "bg-sumi-ink text-washi",
};

export function CtaSection({
  headline,
  paragraph,
  cta,
  variant = "cinematic",
  kanjiWatermark,
}: CtaSectionProps) {
  return (
    <section className={`relative overflow-hidden py-[var(--space-24)] ${variantClasses[variant]}`}>
      {kanjiWatermark && (
        <KanjiAccent
          char={kanjiWatermark}
          size="xl"
          position="watermark"
          color="inherit"
          className="right-8 bottom-4 opacity-[0.06]"
        />
      )}

      <Container size="md">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeInUp}>
            <EnsoCircle
              size={80}
              stroke={1.5}
              variant="brushed"
              color={variant === "cinematic" ? "var(--color-gold)" : "var(--color-shu-seal)"}
              className="mb-8"
            />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display text-[length:var(--text-display-md)]"
          >
            {headline}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className={`mt-6 max-w-lg text-[length:var(--text-body-lg)] ${
              variant === "cinematic" ? "text-washi/80" : "text-text-secondary"
            }`}
          >
            {paragraph}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10">
            <Link to={cta.href}>
              <Button size="lg" variant={variant === "cinematic" ? "primary" : "primary"} arrow>
                {cta.label}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
