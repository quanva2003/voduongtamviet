import { forwardRef } from "react";
import { Link as RouterLink, type LinkProps as RouterLinkProps } from "react-router-dom";

import { cn } from "@/shared/lib/cn";

export type LinkProps = RouterLinkProps;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => (
    <RouterLink
      ref={ref}
      className={cn(
        "relative text-text-primary underline-offset-4",
        /* Underline grows from left on hover via pseudo-element */
        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:content-['']",
        "after:transition-[width] after:duration-300",
        "hover:after:w-full",
        className,
      )}
      {...props}
    >
      {children}
    </RouterLink>
  ),
);
Link.displayName = "Link";
