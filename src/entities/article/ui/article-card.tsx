import { Badge, Card, Link, Picture } from "@/shared/ui";

import type { Article } from "../model/types";

import { ArticleMetaRow } from "./article-meta-row";

interface ArticleCardProps {
  article: Article;
  categoryLabel?: string;
}

export function ArticleCard({ article, categoryLabel }: ArticleCardProps) {
  return (
    <Card variant="zen" padding="sm" className="overflow-hidden">
      <div className="relative mb-4 overflow-hidden rounded-[var(--radius-md)]">
        <Picture src={article.image} alt={article.title} aspectRatio="16/9" />
        {categoryLabel && (
          <div className="absolute top-3 left-3">
            <Badge color="danger" pill>
              {categoryLabel}
            </Badge>
          </div>
        )}
      </div>
      <div className="px-1 pb-2">
        <h3 className="line-clamp-2 font-display text-[length:var(--text-h3)] text-text-primary">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[length:var(--text-body-sm)] text-text-secondary">
          {article.excerpt}
        </p>
        <ArticleMetaRow article={article} className="mt-3" />
        <Link
          to={`/articles/${article.slug}`}
          className="mt-3 inline-block text-[length:var(--text-body-sm)] text-shu-seal"
        >
          Đọc tiếp →
        </Link>
      </div>
    </Card>
  );
}
