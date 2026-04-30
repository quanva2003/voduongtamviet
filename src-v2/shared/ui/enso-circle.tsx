import { type SVGAttributes } from "react";

import { cn } from "@/shared/lib/cn";

type EnsoVariant = "closed" | "brushed";

export interface EnsoCircleProps extends Omit<SVGAttributes<SVGSVGElement>, "stroke"> {
  size?: number;
  /** Stroke width in px */
  stroke?: number;
  variant?: EnsoVariant;
  color?: string;
}

export function EnsoCircle({
  size = 64,
  stroke = 1.5,
  variant = "closed",
  color = "currentColor",
  className,
  ...props
}: EnsoCircleProps) {
  const r = (size - stroke * 2) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;

  /* brushed: ~88% of circumference visible, 12% gap — traditional enso opening */
  const dashArray =
    variant === "brushed"
      ? `${(circumference * 0.88).toFixed(2)} ${(circumference * 0.12).toFixed(2)}`
      : undefined;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-hidden="true"
      className={cn("block", className)}
      {...props}
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap={variant === "brushed" ? "round" : "butt"}
        strokeDasharray={dashArray}
        /* rotate so gap sits at ~7 o'clock, natural brush-lift position */
        transform={variant === "brushed" ? `rotate(120 ${cx} ${cy})` : undefined}
      />
    </svg>
  );
}
