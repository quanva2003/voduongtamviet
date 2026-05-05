import { cn } from "@/shared/lib/cn";

export interface PictureProps {
  /** Base image path without extension, e.g. "/images/hero" */
  src: string;
  alt: string;
  aspectRatio?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  className?: string;
  imgClassName?: string;
}

export function Picture({
  src,
  alt,
  aspectRatio,
  sizes = "100vw",
  loading = "lazy",
  fetchPriority = "auto",
  className,
  imgClassName,
}: PictureProps) {
  /* Strip any extension so callers can pass either "hero" or "hero.jpg" */
  const base = src.replace(/\.[^.]+$/, "");

  return (
    <picture className={cn("block", className)} style={aspectRatio ? { aspectRatio } : undefined}>
      <source type="image/avif" srcSet={`${base}.avif`} sizes={sizes} />
      <source type="image/webp" srcSet={`${base}.webp`} sizes={sizes} />
      <img
        src={`${base}.jpg`}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        className={cn("h-full w-full object-cover", imgClassName)}
        style={aspectRatio ? { aspectRatio } : undefined}
      />
    </picture>
  );
}
