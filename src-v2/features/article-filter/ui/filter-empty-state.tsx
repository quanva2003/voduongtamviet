import { useTranslation } from "react-i18next";

import { Button } from "@/shared/ui";

interface FilterEmptyStateProps {
  onReset: () => void;
}

export function FilterEmptyState({ onReset }: FilterEmptyStateProps) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <p className="font-display text-[length:var(--text-h3)] text-text-muted">
        {t("articles.filter.emptyTitle")}
      </p>
      <p className="text-[length:var(--text-body)] text-text-muted">
        {t("articles.filter.emptyBody")}
      </p>
      <Button variant="secondary" onClick={onReset}>
        {t("articles.filter.reset")}
      </Button>
    </div>
  );
}
