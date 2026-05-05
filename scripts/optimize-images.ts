/**
 * Image optimization pipeline — run via `npm run optimize:images`
 *
 * Reads source images from src/shared/assets/
 * Outputs AVIF + WebP + JPEG at 5 breakpoint sizes to public/images/optimized/
 *
 * Requires: sharp (already in devDependencies)
 */

import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, parse, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const INPUT_DIR = join(ROOT, "src", "shared", "assets");
const OUTPUT_DIR = join(ROOT, "public", "images", "optimized");

const WIDTHS = [320, 640, 960, 1280, 1920] as const;
const FORMATS = ["avif", "webp", "jpg"] as const;
const SUPPORTED_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

type Format = (typeof FORMATS)[number];

const FORMAT_OPTIONS: Record<Format, sharp.OutputOptions> = {
  avif: { quality: 60 },
  webp: { quality: 75 },
  jpg:  { quality: 80, progressive: true },
};

async function processImage(inputPath: string, name: string): Promise<void> {
  const image = sharp(inputPath);
  const meta = await image.metadata();
  const sourceWidth = meta.width ?? 1920;

  for (const width of WIDTHS) {
    if (width > sourceWidth * 1.1) continue; // skip upscaling beyond 10%

    for (const format of FORMATS) {
      const outFile = join(OUTPUT_DIR, `${name}-${width}.${format}`);

      const resized = image.clone().resize(width, undefined, {
        withoutEnlargement: true,
        fit: "inside",
      });

      if (format === "avif") {
        await resized.avif(FORMAT_OPTIONS.avif as sharp.AvifOptions).toFile(outFile);
      } else if (format === "webp") {
        await resized.webp(FORMAT_OPTIONS.webp as sharp.WebpOptions).toFile(outFile);
      } else {
        await resized.jpeg(FORMAT_OPTIONS.jpg as sharp.JpegOptions).toFile(outFile);
      }
    }
  }

  console.log(`  ✓ ${name} → ${WIDTHS.length} sizes × ${FORMATS.length} formats`);
}

async function main(): Promise<void> {
  if (!existsSync(INPUT_DIR)) {
    console.log("optimize-images: no assets dir, skipping.");
    return;
  }

  const entries = await readdir(INPUT_DIR, { withFileTypes: true });
  const images = entries.filter(
    (e) => e.isFile() && SUPPORTED_EXTS.has(parse(e.name).ext.toLowerCase()),
  );

  if (images.length === 0) {
    console.log("optimize-images: no source images found, skipping.");
    return;
  }

  await mkdir(OUTPUT_DIR, { recursive: true });

  console.log(`optimize-images: processing ${images.length} image(s)...`);
  await Promise.all(
    images.map((entry) =>
      processImage(join(INPUT_DIR, entry.name), parse(entry.name).name),
    ),
  );

  console.log("optimize-images: done.");
}

main().catch((err: unknown) => {
  console.error("optimize-images failed:", err);
  process.exit(1);
});
