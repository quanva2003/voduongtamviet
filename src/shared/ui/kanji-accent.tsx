import { cn } from "@/shared/lib/cn";

type KanjiSize = "sm" | "md" | "lg" | "xl";
type KanjiPosition = "inline" | "watermark";
type KanjiColor = "default" | "gold" | "shu" | "inherit";

export interface KanjiAccentProps {
  char: string;
  size?: KanjiSize;
  position?: KanjiPosition;
  color?: KanjiColor;
  className?: string;
}

const sizeClasses: Record<KanjiSize, string> = {
  sm: "text-[length:var(--text-kanji-sm)]",
  md: "text-[length:var(--text-kanji-md)]",
  lg: "text-[length:var(--text-kanji-xl)]",
  xl: "text-[192px]",
};

const colorClasses: Record<KanjiColor, string> = {
  default: "text-text-muted",
  gold: "text-gold",
  shu: "text-shu-seal",
  inherit: "text-inherit",
};

export function KanjiAccent({
  char,
  size = "md",
  position = "inline",
  color = "default",
  className,
}: KanjiAccentProps) {
  const shared = cn(
    "font-kanji font-normal leading-none",
    sizeClasses[size],
    colorClasses[color],
    className,
  );

  if (position === "watermark") {
    return (
      <span
        aria-hidden="true"
        className={cn("pointer-events-none absolute opacity-[0.08] select-none", shared)}
      >
        {char}
      </span>
    );
  }

  return <span className={shared}>{char}</span>;
}
