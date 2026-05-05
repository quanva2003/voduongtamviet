import { motion } from "framer-motion";

import { fadeInUp, staggerChildren } from "@/shared/lib/motion";
import { Container, SectionEyebrow } from "@/shared/ui";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface JourneyTimelineProps {
  items: TimelineItem[];
  eyebrow?: { numeral: string; label: string };
  title?: string;
}

export function JourneyTimeline({ items, eyebrow, title }: JourneyTimelineProps) {
  return (
    <section className="bg-sumi-paper py-[var(--space-24)]">
      <Container size="md">
        {eyebrow && (
          <SectionEyebrow numeral={eyebrow.numeral} label={eyebrow.label} className="mb-3" />
        )}
        {title && (
          <h2 className="mb-16 font-display text-[length:var(--text-h2)] text-text-primary">
            {title}
          </h2>
        )}

        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative flex flex-col gap-0"
          aria-label="Hành trình phát triển"
        >
          {/* Connecting line */}
          <div
            className="absolute top-0 bottom-0 left-[52px] w-px bg-shu-seal/30"
            aria-hidden="true"
          />

          {items.map((item, index) => (
            <motion.li key={index} variants={fadeInUp} className="relative flex gap-8 pb-12">
              {/* Year bubble */}
              <div className="relative z-10 flex-shrink-0">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-shu-seal bg-sumi-paper">
                  <span className="font-display text-[length:var(--text-body-sm)] font-bold text-shu-seal">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="font-display text-[length:var(--text-h3)] text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
