import { useTranslation } from "react-i18next";

import { cn } from "@/shared/lib/cn";

import type { BookingStep } from "../model/types";

interface BookingProgressProps {
  step: BookingStep;
}

const STEP_KEYS = [
  "booking.steps.selectClass",
  "booking.steps.selectDate",
  "booking.steps.contactInfo",
  "booking.steps.review",
] as const;

export function BookingProgress({ step }: BookingProgressProps) {
  const { t } = useTranslation();
  return (
    <nav aria-label={t("booking.progress.label")} className="py-6">
      <ol className="flex items-center justify-center gap-0">
        {STEP_KEYS.map((key, i) => {
          const num = (i + 1) as BookingStep;
          const active = num === step;
          const done = num < step;
          return (
            <li key={key} className="flex items-center">
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-[length:var(--text-body-sm)] font-medium transition-colors",
                  active && "bg-shu-seal text-washi",
                  done && "bg-text-muted text-washi",
                  !active && !done && "bg-border text-text-muted",
                )}
                aria-current={active ? "step" : undefined}
              >
                {num}
              </span>
              <span
                className={cn(
                  "ml-2 hidden text-[length:var(--text-body-sm)] sm:inline",
                  active ? "text-text-primary" : "text-text-muted",
                )}
              >
                {t(key)}
              </span>
              {num < 4 && (
                <span
                  className={cn("mx-3 h-px w-8 sm:w-12", done ? "bg-text-muted" : "bg-border")}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
