import { cn } from "@/shared/lib/cn";

const OPTIMIZED_WIDTHS = [320, 640, 960, 1280, 1920] as const;

export interface PictureProps {
  /** Base path without extension, e.g. "/images/hero".
   *  If the file lives under /images/optimized/, pass `optimized: true`
   *  and the component builds a full srcset automatically. */
  src: string;
  alt: string;
  /** Use pre-generated multi-size optimized images from /images/optimized/ */
  optimized?: boolean;
  aspectRatio?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  /** Explicit width — prevents CLS when aspect ratio is known */
  width?: number;
  /** Explicit height — prevents CLS when aspect ratio is known */
  height?: number;
  className?: string;
  imgClassName?: string;
}

function buildSrcSet(base: string, ext: string): string {
  return OPTIMIZED_WIDTHS.map((w) => `${base}-${w}.${ext} ${w}w`).join(", ");
}

export function Picture({
  src,
  alt,
  optimized = false,
  aspectRatio,
  sizes = "100vw",
  loading = "lazy",
  fetchPriority = "auto",
  width,
  height,
  className,
  imgClassName,
}: PictureProps) {
  const base = src.replace(/\.[^.]+$/, "");

  const style = aspectRatio ? { aspectRatio } : undefined;

  if (optimized) {
    return (
      <picture className={cn("block", className)} style={style}>
        <source
          type="image/avif"
          srcSet={buildSrcSet(base, "avif")}
          sizes={sizes}
        />
        <source
          type="image/webp"
          srcSet={buildSrcSet(base, "webp")}
          sizes={sizes}
        />
        <img
          src={`${base}-960.jpg`}
          srcSet={buildSrcSet(base, "jpg")}
          sizes={sizes}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          width={width}
          height={height}
          className={cn("h-full w-full object-cover", imgClassName)}
          style={style}
        />
      </picture>
    );
  }

  return (
    <picture className={cn("block", className)} style={style}>
      <source type="image/avif" srcSet={`${base}.avif`} sizes={sizes} />
      <source type="image/webp" srcSet={`${base}.webp`} sizes={sizes} />
      <img
        src={`${base}.jpg`}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
        className={cn("h-full w-full object-cover", imgClassName)}
        style={style}
      />
    </picture>
  );
}
