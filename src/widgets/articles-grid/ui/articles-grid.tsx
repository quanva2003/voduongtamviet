import { motion } from "framer-motion";

import { ArticleCard } from "@/entities/article";
import type { Article } from "@/entities/article";
import { staggerChildren, fadeInUp } from "@/shared/lib/motion";
import { Button, Container, SectionEyebrow } from "@/shared/ui";

interface ArticlesGridProps {
  articles: Article[];
  page?: number;
  perPage?: number;
  onPageChange?: (page: number) => void;
  eyebrow?: { numeral: string; label: string };
  title?: string;
  getCategoryLabel?: (category: string) => string;
}

export function ArticlesGrid({
  articles,
  page = 1,
  perPage = 6,
  onPageChange,
  eyebrow,
  title,
  getCategoryLabel,
}: ArticlesGridProps) {
  const totalPages = Math.ceil(articles.length / perPage);
  const displayed = articles.slice((page - 1) * perPage, page * perPage);

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

        {displayed.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-center text-text-muted">
            <p className="text-[length:var(--text-body-lg)]">Chưa có bài viết phù hợp</p>
            {onPageChange && (
              <Button variant="secondary" onClick={() => onPageChange(1)}>
                Xem tất cả bài viết
              </Button>
            )}
          </div>
        ) : (
          <>
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {displayed.map((article) => (
                <motion.div key={article.id} variants={fadeInUp}>
                  <ArticleCard
                    article={article}
                    categoryLabel={getCategoryLabel?.(article.category)}
                  />
                </motion.div>
              ))}
            </motion.div>

            {totalPages > 1 && onPageChange && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={page <= 1}
                  onClick={() => onPageChange(page - 1)}
                >
                  ← Trước
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Button
                    key={p}
                    variant={p === page ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => onPageChange(p)}
                  >
                    {p}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={page >= totalPages}
                  onClick={() => onPageChange(page + 1)}
                >
                  Sau →
                </Button>
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
}
