import { motion } from "framer-motion";

import type { Instructor } from "@/entities/instructor";
import { cinematicReveal, fadeInUp, staggerChildren } from "@/shared/lib/motion";
import { Button, Container, Link, Picture, SectionEyebrow } from "@/shared/ui";

interface InstructorProfileProps {
  instructor: Instructor;
}

export function InstructorProfile({ instructor }: InstructorProfileProps) {
  return (
    <article className="bg-washi py-[var(--space-24)]">
      <Container size="xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr]">
          {/* Photo */}
          <motion.div
            variants={cinematicReveal}
            initial="hidden"
            animate="visible"
            className="overflow-hidden rounded-[var(--radius-lg)]"
          >
            <Picture
              src={instructor.photo}
              alt={instructor.name}
              aspectRatio="3/4"
              fetchPriority="high"
              loading="eager"
              className="w-full"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp}>
              <SectionEyebrow numeral="一" label="HUẤN LUYỆN VIÊN" className="mb-3" />
              <p className="text-[length:var(--text-eyebrow)] tracking-[0.15em] text-text-muted uppercase">
                {instructor.title}
              </p>
              <h1 className="mt-2 font-display text-[length:var(--text-display-md)] text-text-primary">
                {instructor.name}
              </h1>
              <p className="mt-1 text-[length:var(--text-body-sm)] text-gold">
                {instructor.beltRank} · {instructor.yearsTeaching}+ năm kinh nghiệm
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6">
              {instructor.bio.split("\n").map((para, i) => (
                <p
                  key={i}
                  className="mb-3 text-[length:var(--text-body)] leading-relaxed text-text-secondary"
                >
                  {para}
                </p>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6">
              <p className="mb-3 font-display text-[length:var(--text-h3)] text-text-primary">
                Thành tích
              </p>
              <ul className="flex flex-col gap-2">
                {instructor.achievements.map((ach, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[length:var(--text-body-sm)] text-text-secondary"
                  >
                    <span className="mt-1 text-shu-seal" aria-hidden="true">
                      ▪
                    </span>
                    {ach}
                  </li>
                ))}
              </ul>
            </motion.div>

            {instructor.contact && (
              <motion.div variants={fadeInUp} className="mt-8">
                <Link to="/booking">
                  <Button size="lg" arrow>
                    Đặt lịch tập với {instructor.name.split(" ").at(-1)}
                  </Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </article>
  );
}
