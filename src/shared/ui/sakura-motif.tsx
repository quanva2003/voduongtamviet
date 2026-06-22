import { type SVGAttributes } from "react";

import { cn } from "@/shared/lib/cn";

export interface SakuraMotifProps extends Omit<SVGAttributes<SVGSVGElement>, "color"> {
  size?: number;
  color?: string;
}

const PETAL_PATH =
  "M50 5 C58 20 70 22 75 35 C62 32 55 40 50 50 C45 40 38 32 25 35 C30 22 42 20 50 5Z";

/** Decorative 5-petal sakura mark sourced from the brand logo — use as a divider/watermark only, never as a text color. */
export function SakuraMotif({
  size = 56,
  color = "var(--color-sakura)",
  className,
  ...props
}: SakuraMotifProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={cn("block", className)}
      {...props}
    >
      <g fill={color}>
        {[0, 72, 144, 216, 288].map((deg) => (
          <path key={deg} d={PETAL_PATH} transform={deg ? `rotate(${deg} 50 50)` : undefined} />
        ))}
      </g>
    </svg>
  );
}
