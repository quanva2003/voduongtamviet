import { Container, SectionEyebrow } from "@/shared/ui";

import type { CourseInfoItem } from "../model/data";

interface CourseInfoProps {
  items: CourseInfoItem[];
  eyebrow?: { numeral: string; label: string };
  title?: string;
}

export function CourseInfo({ items, eyebrow, title }: CourseInfoProps) {
  return (
    <section className="bg-washi py-[var(--space-24)]">
      <Container size="lg">
        {eyebrow && (
          <SectionEyebrow numeral={eyebrow.numeral} label={eyebrow.label} className="mb-3" />
        )}
        {title && (
          <h2 className="mb-10 font-display text-[length:var(--text-h2)] text-text-primary">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-[var(--radius-lg)] border border-border bg-sumi-paper p-6"
            >
              <p className="text-[length:var(--text-eyebrow)] tracking-[0.15em] text-text-muted uppercase">
                {item.title}
              </p>
              <p className="mt-2 font-display text-[length:var(--text-h3)] text-shu-seal">
                {item.value}
              </p>
              <p className="mt-3 text-[length:var(--text-body-sm)] leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
