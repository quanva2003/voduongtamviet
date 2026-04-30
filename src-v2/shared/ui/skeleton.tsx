import { type HTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";
import { useReducedMotion } from "@/shared/lib/use-reduced-motion";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ width, height, className, style, ...props }: SkeletonProps) {
  const reduced = useReducedMotion();

  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("rounded-[var(--radius-md)] bg-border", !reduced && "animate-pulse", className)}
      style={{ width, height, ...style }}
      {...props}
    />
  );
}
