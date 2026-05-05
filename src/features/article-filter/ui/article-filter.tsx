import { useTranslation } from "react-i18next";

import { articleCategories } from "@/entities/article";
import type { Locale } from "@/shared/i18n";
import { cn } from "@/shared/lib/cn";
import { Input } from "@/shared/ui";

import type { FilterState } from "../model/filter-articles";

interface ArticleFilterProps {
  filter: FilterState;
  onChange: (next: Partial<FilterState>) => void;
}

export function ArticleFilter({ filter, onChange }: ArticleFilterProps) {
  const { i18n, t } = useTranslation();
  const locale = i18n.language as Locale;

  const getCategoryLabel = (cat: (typeof articleCategories)[number]) => {
    if (locale === "en") return cat.labelEN;
    if (locale === "ja") return cat.labelJA;
    return cat.labelVI;
  };

  return (
    <div className="flex flex-col gap-4 bg-sumi-paper px-4 py-6 sm:px-0">
      {/* Category chips */}
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label={t("articles.filter.categories")}
      >
        {articleCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange({ category: cat.id })}
            aria-pressed={filter.category === cat.id}
            className={cn(
              "rounded-[var(--radius-md)] border px-3 py-1 text-[length:var(--text-body-sm)] transition-colors",
              filter.category === cat.id
                ? "border-shu-seal bg-shu-seal text-washi"
                : "border-border text-text-secondary hover:border-text-muted hover:text-text-primary",
            )}
          >
            {getCategoryLabel(cat)}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="max-w-sm">
        <Input
          type="search"
          placeholder={t("articles.filter.searchPlaceholder")}
          value={filter.search}
          onChange={(e) => onChange({ search: e.target.value })}
          aria-label={t("articles.filter.searchLabel")}
        />
      </div>
    </div>
  );
}
