import { motion } from "framer-motion";

import { ArticleMetaRow } from "@/entities/article";
import type { Article } from "@/entities/article";
import { fadeInUp, staggerChildren } from "@/shared/lib/motion";
import { Badge, Container, Picture } from "@/shared/ui";

interface ArticleContentProps {
  article: Article;
  categoryLabel?: string;
}

export function ArticleContent({ article, categoryLabel }: ArticleContentProps) {
  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <article className="bg-washi pb-[var(--space-24)]">
      {/* Hero image */}
      <div className="relative overflow-hidden">
        <Picture
          src={article.image}
          alt={article.title}
          aspectRatio="16/9"
          loading="eager"
          fetchPriority="high"
          className="max-h-[560px] w-full"
          imgClassName="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-washi/60" />
      </div>

      <Container size="md" className="pt-12">
        <motion.div variants={staggerChildren} initial="hidden" animate="visible">
          {/* Eyebrow / category */}
          {categoryLabel && (
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge color="danger" pill>
                {categoryLabel}
              </Badge>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-[length:var(--text-display-md)] text-text-primary"
          >
            {article.title}
          </motion.h1>

          {/* Meta */}
          <motion.div variants={fadeInUp} className="mt-4">
            <ArticleMetaRow article={article} />
          </motion.div>

          {/* Divider */}
          <motion.hr variants={fadeInUp} className="my-8 border-border" />

          {/* Content */}
          <motion.div variants={fadeInUp} className="prose-zen">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="mb-6 text-[length:var(--text-body-lg)] leading-relaxed text-text-primary"
              >
                {para}
              </p>
            ))}
          </motion.div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} color="neutral">
                  #{tag}
                </Badge>
              ))}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </article>
  );
}
