import type { Article } from "@/entities/article";

export interface FilterState {
  category: string;
  search: string;
}

export function filterArticles(articles: Article[], filter: FilterState): Article[] {
  const search = filter.search.trim().toLowerCase();
  return articles.filter((a) => {
    if (filter.category && filter.category !== "all" && a.category !== filter.category)
      return false;
    if (search) {
      const haystack = `${a.title} ${a.excerpt} ${a.tags.join(" ")}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    return true;
  });
}
