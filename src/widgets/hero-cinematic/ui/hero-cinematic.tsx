import { motion } from "framer-motion";

import { cinematicReveal, fadeInUp, staggerChildren } from "@/shared/lib/motion";
import { Button, Container, KanjiAccent, Link, Picture, SectionEyebrow } from "@/shared/ui";

export interface HeroCinematicProps {
  eyebrow?: { numeral: string; label: string };
  headline: string;
  headlineItalic?: string;
  subline?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  kanjiWatermark?: string;
  backgroundImage?: string;
}

export function HeroCinematic({
  eyebrow,
  headline,
  headlineItalic,
  subline,
  ctaPrimary,
  ctaSecondary,
  kanjiWatermark,
  backgroundImage,
}: HeroCinematicProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-sumi-ink text-washi">
      {/* Background image */}
      {backgroundImage && (
        <Picture
          src={backgroundImage}
          alt=""
          aspectRatio="16/9"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full opacity-30"
          imgClassName="object-cover"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sumi-ink/60 via-transparent to-sumi-ink/80" />

      {/* Kanji watermark */}
      {kanjiWatermark && (
        <KanjiAccent
          char={kanjiWatermark}
          size="xl"
          position="watermark"
          color="inherit"
          className="right-8 bottom-8"
        />
      )}

      <Container size="lg" className="relative z-10 py-24">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {eyebrow && (
            <motion.div variants={fadeInUp}>
              <SectionEyebrow numeral={eyebrow.numeral} label={eyebrow.label} className="mb-6" />
            </motion.div>
          )}

          <motion.h1
            variants={cinematicReveal}
            className="font-display text-[length:var(--text-display-lg)] leading-tight"
          >
            {headline}
            {headlineItalic && (
              <>
                {" "}
                <em className="text-gold italic">{headlineItalic}</em>
              </>
            )}
          </motion.h1>

          {subline && (
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-[length:var(--text-body-lg)] text-washi/80"
            >
              {subline}
            </motion.p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
              {ctaPrimary && (
                <Link to={ctaPrimary.href}>
                  <Button size="lg" variant="primary" arrow>
                    {ctaPrimary.label}
                  </Button>
                </Link>
              )}
              {ctaSecondary && (
                <Link to={ctaSecondary.href}>
                  <Button size="lg" variant="secondary">
                    {ctaSecondary.label}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
