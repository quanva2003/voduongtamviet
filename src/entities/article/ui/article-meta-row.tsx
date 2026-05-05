import type { Article } from "../model/types";

interface ArticleMetaRowProps {
  article: Article;
  className?: string;
}

export function ArticleMetaRow({ article, className }: ArticleMetaRowProps) {
  const formatted = new Date(article.date).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <p
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[length:var(--text-body-sm)] text-text-muted ${className ?? ""}`}
    >
      <span>{article.author}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={article.date}>{formatted}</time>
      <span aria-hidden="true">·</span>
      <span>{article.readTime}</span>
    </p>
  );
}
