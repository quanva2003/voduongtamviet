import { motion } from "framer-motion";

import { cinematicReveal, staggerChildren } from "@/shared/lib/motion";
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
  backgroundImageAlt?: string;
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
  backgroundImageAlt,
}: HeroCinematicProps) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-sumi-ink text-washi">
      {/* Background: photo when available, diagonal texture fallback otherwise */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <Picture
            src={backgroundImage}
            alt={backgroundImageAlt ?? ""}
            aspectRatio="16/9"
            loading="eager"
            fetchPriority="high"
            className="h-full w-full"
            imgClassName="object-cover object-center"
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, color-mix(in srgb, var(--color-gold) 4%, transparent) 10px, color-mix(in srgb, var(--color-gold) 4%, transparent) 20px)",
          }}
        />
      )}

      {/* Gradient overlay: dark at bottom (text), lightens toward top */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-sumi-ink/95 via-sumi-ink/50 to-sumi-ink/25" />

      {/* Kanji watermark */}
      {kanjiWatermark && (
        <KanjiAccent
          char={kanjiWatermark}
          size="xl"
          position="watermark"
          color="inherit"
          className="right-8 bottom-8 z-10"
        />
      )}

      <Container size="lg" className="relative z-10 w-full pb-16 pt-32 lg:pt-40">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {eyebrow && (
            <motion.div variants={cinematicReveal}>
              <SectionEyebrow numeral={eyebrow.numeral} label={eyebrow.label} className="mb-6" />
            </motion.div>
          )}

          <motion.h1
            variants={cinematicReveal}
            className="font-display text-[length:var(--text-display-lg)] leading-[1.1]"
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
              variants={cinematicReveal}
              className="mt-6 text-[length:var(--text-body-lg)] text-washi/80"
            >
              {subline}
            </motion.p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <motion.div variants={cinematicReveal} className="mt-10 flex flex-wrap gap-4">
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
