/**
 * Generate static OG images for each page using sharp.
 * Run: tsx scripts/generate-og-images.ts
 *
 * Produces 1200×630 PNG files in public/images/og/
 */

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { resolve, join } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const OUT_DIR = join(ROOT, "public", "images", "og");

const PAGES = [
  { name: "default",      label: "Vo Duong Tam Viet",           sub: "Karate - Vo thuat truyen thong" },
  { name: "home",         label: "Vo Duong Tam Viet",           sub: "Karate - Vo thuat truyen thong" },
  { name: "about",        label: "Gioi Thieu",                  sub: "Lich su va triet ly vo duong" },
  { name: "registration", label: "Dang Ky Hoc",                 sub: "Bat dau hanh trinh vo thuat cua ban" },
  { name: "articles",     label: "Tin Tuc va Bai Viet",         sub: "Kien thuc vo thuat va tin tuc vo duong" },
  { name: "booking",      label: "Dat Lich Hoc",                sub: "Chon lop va xac nhan lich hoc" },
  { name: "schedule",     label: "Thoi Khoa Bieu",              sub: "Lich hoc cac lop karate" },
  { name: "belt-promotion", label: "Thi Len Dai",               sub: "Ky thi dai karate" },
] as const;

const W = 1200;
const H = 630;

function makeOgSvg(label: string, sub: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#0a0a0a"/>
  <!-- Enso circle watermark -->
  <circle cx="${W / 2}" cy="${H / 2}" r="240" fill="none" stroke="#c9a96e" stroke-width="3" opacity="0.18"/>
  <!-- Brand band -->
  <rect x="0" y="${H - 100}" width="${W}" height="100" fill="#1a1a1a"/>
  <!-- Title -->
  <text x="${W / 2}" y="${H / 2 - 30}"
        font-family="Georgia, serif" font-size="64" font-weight="700"
        fill="#f5f0e8" text-anchor="middle" dominant-baseline="middle">${label}</text>
  <!-- Sub -->
  <text x="${W / 2}" y="${H / 2 + 50}"
        font-family="Georgia, serif" font-size="26"
        fill="#c9a96e" text-anchor="middle" dominant-baseline="middle">${sub}</text>
  <!-- Domain -->
  <text x="${W / 2}" y="${H - 50}"
        font-family="Georgia, serif" font-size="22"
        fill="#888" text-anchor="middle" dominant-baseline="middle">tamviet.vn</text>
</svg>`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  for (const page of PAGES) {
    const svg = makeOgSvg(page.label, page.sub);
    const outPath = join(OUT_DIR, `${page.name}.png`);
    await sharp(Buffer.from(svg)).png().toFile(outPath);
    console.log(`  ✓ ${page.name}.png`);
  }

  console.log("generate-og-images: done.");
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
