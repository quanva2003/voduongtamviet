import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-[var(--container-sm)]",
  md: "max-w-[var(--container-md)]",
  lg: "max-w-[var(--container-lg)]",
  xl: "max-w-[var(--container-xl)]",
  "2xl": "max-w-[var(--container-2xl)]",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "md", className, children, ...props }, ref) => (
    <div ref={ref} className={cn("mx-auto w-full px-4", sizeClasses[size], className)} {...props}>
      {children}
    </div>
  ),
);
Container.displayName = "Container";
