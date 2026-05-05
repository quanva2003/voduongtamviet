import { cn } from "@/shared/lib/cn";

import type { Belt } from "../model/types";

interface BeltBadgeProps {
  belt: Belt;
  size?: "sm" | "md";
  className?: string;
}

export function BeltBadge({ belt, size = "sm", className }: BeltBadgeProps) {
  const label = belt.dan ? `${belt.dan}. Dan` : `${belt.kyu}. Kyu`;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-[var(--radius-sm)]",
        size === "sm"
          ? "px-2 py-1 text-[length:var(--text-body-sm)]"
          : "px-3 py-1.5 text-[length:var(--text-body)]",
        className,
      )}
      title={belt.name}
    >
      <span
        className={cn(
          "inline-block rounded-[var(--radius-sm)] border border-border",
          size === "sm" ? "h-3 w-6" : "h-4 w-8",
        )}
        style={{ backgroundColor: belt.colorHex }}
        aria-hidden="true"
      />
      <span className="text-text-primary">{belt.name}</span>
      <span className="text-text-muted">{label}</span>
    </span>
  );
}
