import { motion } from "framer-motion";

import { InstructorCard } from "@/entities/instructor";
import type { Instructor } from "@/entities/instructor";
import { staggerChildren, fadeInUp } from "@/shared/lib/motion";
import { Container, Link, SectionEyebrow } from "@/shared/ui";

interface InstructorsListProps {
  instructors: Instructor[];
  variant?: "preview" | "full";
  eyebrow?: { numeral: string; label: string };
  title?: string;
  viewAllHref?: string;
}

export function InstructorsList({
  instructors,
  variant = "full",
  eyebrow,
  title,
  viewAllHref,
}: InstructorsListProps) {
  const displayed = variant === "preview" ? instructors.slice(0, 4) : instructors;

  return (
    <section className="bg-washi py-[var(--space-24)]">
      <Container size="xl">
        {eyebrow && (
          <SectionEyebrow numeral={eyebrow.numeral} label={eyebrow.label} className="mb-3" />
        )}
        {title && (
          <h2 className="mb-12 font-display text-[length:var(--text-h2)] text-text-primary">
            {title}
          </h2>
        )}

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start"
        >
          {displayed.map((instructor) => (
            <motion.div key={instructor.id} variants={fadeInUp}>
              <InstructorCard instructor={instructor} />
            </motion.div>
          ))}
        </motion.div>

        {variant === "preview" && viewAllHref && (
          <div className="mt-10 text-center">
            <Link to={viewAllHref} className="text-[length:var(--text-body)] text-shu-seal">
              Xem tất cả huấn luyện viên →
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
