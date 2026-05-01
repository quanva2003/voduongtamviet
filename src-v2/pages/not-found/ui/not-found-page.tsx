import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { SeoMeta } from "@/features/seo-meta";
import { Button, Container, EnsoCircle } from "@/shared/ui";

import { NOT_FOUND_SEO_KEYS } from "../model/seo";

export function Component() {
  const { t } = useTranslation();

  return (
    <>
      <SeoMeta title={t(NOT_FOUND_SEO_KEYS.title)} noindex />
      <Container
        size="sm"
        className="flex min-h-screen flex-col items-center justify-center gap-8 py-24 text-center"
      >
        <EnsoCircle size={120} stroke={1} variant="brushed" color="var(--color-shu-seal)" />
        <h1 className="font-display text-[length:var(--text-display-md)] text-text-primary">404</h1>
        <p className="text-[length:var(--text-body-lg)] text-text-secondary">
          {t("notFound.subline")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button variant="primary" size="lg" arrow>
              {t("notFound.goHome")}
            </Button>
          </Link>
          <Link to="/registration">
            <Button variant="secondary" size="lg">
              {t("notFound.contact")}
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
}
