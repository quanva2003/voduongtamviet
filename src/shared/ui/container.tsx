import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

// Dùng inline style thay vì Tailwind arbitrary value để tránh Tailwind v4
// không resolve var() trong max-w-[var(--container-xl)] đúng cách
const sizeMap: Record<ContainerSize, string> = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1400px",
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