import { type ReactNode, type HTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

import { KanjiAccent } from "./kanji-accent";

export interface CinematicBlockProps extends HTMLAttributes<HTMLElement> {
  kanjiWatermark?: string;
  children: ReactNode;
}

export function CinematicBlock({
  kanjiWatermark,
  children,
  className,
  ...props
}: CinematicBlockProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-sumi-ink text-washi",
        "py-[var(--space-32)]",
        className,
      )}
      {...props}
    >
      {kanjiWatermark && (
        <KanjiAccent
          char={kanjiWatermark}
          size="xl"
          position="watermark"
          color="inherit"
          className="right-8 bottom-4"
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
