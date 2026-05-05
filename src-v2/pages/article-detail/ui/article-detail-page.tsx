import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { articles, articleCategories } from "@/entities/article";
import { articleJsonLd, SeoMeta } from "@/features/seo-meta";
import type { Locale } from "@/shared/i18n";
import { ArticleContent } from "@/widgets/article-content";
import { ArticlesGrid } from "@/widgets/articles-grid";
import { CtaSection } from "@/widgets/cta-section";

export function Component() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;

  const localeArticles = articles[locale] ?? articles.vi;
  const article = localeArticles.find((a) => a.slug === slug);

  if (!article) {
    throw new Response("Not Found", { status: 404 });
  }

  const getCategoryLabel = (category: string) => {
    const cat = articleCategories.find((c) => c.id === category);
    if (!cat) return category;
    if (locale === "en") return cat.labelEN;
    if (locale === "ja") return cat.labelJA;
    return cat.labelVI;
  };

  const related = localeArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <SeoMeta
        title={article.title}
        description={article.excerpt}
        canonicalPath={`/articles/${article.slug}`}
        ogImage={`${article.image}.jpg`}
        jsonLd={articleJsonLd({
          title: article.title,
          description: article.excerpt,
          datePublished: article.date,
          author: article.author,
          image: `${article.image}.jpg`,
          url: `https://tamviet.vn/articles/${article.slug}`,
        })}
      />

      <ArticleContent article={article} categoryLabel={getCategoryLabel(article.category)} />

      {related.length > 0 && (
        <ArticlesGrid
          articles={related}
          eyebrow={{ numeral: "関", label: t("articleDetail.related") }}
          getCategoryLabel={getCategoryLabel}
        />
      )}

      <CtaSection
        headline={t("articleDetail.cta.headline")}
        paragraph={t("articleDetail.cta.paragraph")}
        cta={{ label: t("articleDetail.cta.cta"), href: "/registration" }}
        variant="cinematic"
        kanjiWatermark="知"
      />
    </>
  );
}
