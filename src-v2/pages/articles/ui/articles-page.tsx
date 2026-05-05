import { useState } from "react";
import { useTranslation } from "react-i18next";

import { articles, articleCategories } from "@/entities/article";
import {
  ArticleFilter,
  FilterEmptyState,
  filterArticles,
  useArticleFilter,
} from "@/features/article-filter";
import { SeoMeta } from "@/features/seo-meta";
import type { Locale } from "@/shared/i18n";
import { Container } from "@/shared/ui";
import { ArticlesGrid } from "@/widgets/articles-grid";
import { CtaSection } from "@/widgets/cta-section";
import { HeroZen } from "@/widgets/hero-zen";

import { ARTICLES_SEO_KEYS } from "../model/seo";

export function Component() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useArticleFilter();

  const localeArticles = articles[locale] ?? articles.vi;
  const filtered = filterArticles(localeArticles, filter);

  const getCategoryLabel = (category: string) => {
    const cat = articleCategories.find((c) => c.id === category);
    if (!cat) return category;
    if (locale === "en") return cat.labelEN;
    if (locale === "ja") return cat.labelJA;
    return cat.labelVI;
  };

  function handleFilterChange(next: Parameters<typeof setFilter>[0]) {
    setFilter(next);
    setPage(1);
  }

  return (
    <>
      <SeoMeta
        title={t(ARTICLES_SEO_KEYS.title)}
        description={t(ARTICLES_SEO_KEYS.description)}
        canonicalPath={ARTICLES_SEO_KEYS.canonicalPath}
        ogImage={ARTICLES_SEO_KEYS.ogImage}
      />
      <HeroZen
        eyebrow={{ numeral: "二", label: "BÀI VIẾT" }}
        headline={t("articles.hero.headline")}
      />

      <div className="bg-washi">
        <Container size="xl">
          <ArticleFilter filter={filter} onChange={handleFilterChange} />
        </Container>

        {filtered.length === 0 ? (
          <Container size="xl" className="pb-24">
            <FilterEmptyState onReset={() => handleFilterChange({ category: "all", search: "" })} />
          </Container>
        ) : (
          <ArticlesGrid
            articles={filtered}
            page={page}
            perPage={6}
            onPageChange={setPage}
            getCategoryLabel={getCategoryLabel}
          />
        )}
      </div>

      <CtaSection
        headline={t("articles.cta.headline")}
        paragraph={t("articles.cta.paragraph")}
        cta={{ label: t("articles.cta.cta"), href: "/registration" }}
        variant="cinematic"
        kanjiWatermark="文"
      />
    </>
  );
}
