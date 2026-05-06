import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

// Dùng inline style thay vì Tailwind arbitrary value để tránh Tailwind v4
// không resolve var() trong max-w-[var(--container-xl)] đúng cách
const sizeMap: Record<ContainerSize, string> = {
  sm: "var(--container-sm)",
  md: "var(--container-md)",
  lg: "var(--container-lg)",
  xl: "var(--container-xl)",
  "2xl": "var(--container-2xl)",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "md", className, children, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("w-full px-4 sm:px-6", className)}
      style={{
        maxWidth: sizeMap[size],
        marginLeft: "auto",
        marginRight: "auto",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  ),
);
Container.displayName = "Container";