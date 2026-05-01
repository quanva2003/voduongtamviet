import { execSync } from "child_process";
import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = "https://tamviet.vn";
const LOCALES = ["vi", "en", "ja"] as const;
const LOCALE_PREFIXES: Record<string, string> = { vi: "", en: "/en", ja: "/ja" };

type RouteConfig = {
  path: string;
  changefreq: string;
  priority: string;
};

const routes: RouteConfig[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
];

function getLastmod(): string {
  try {
    return execSync("git log -1 --format=%cI HEAD", { encoding: "utf-8" }).trim().split("T")[0]!;
  } catch {
    return new Date().toISOString().split("T")[0]!;
  }
}

function buildUrl(locale: string, path: string): string {
  const prefix = LOCALE_PREFIXES[locale] ?? "";
  return `${SITE_URL}${prefix}${path === "/" ? "" : path}`;
}

function buildSitemap(urls: Array<{ loc: string; lastmod: string; changefreq: string; priority: string }>) {
  const entries = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>`;
}

const lastmod = getLastmod();
const publicDir = join(__dirname, "..", "public");

// Per-locale sitemaps
for (const locale of LOCALES) {
  const urls = routes.map((r) => ({
    loc: buildUrl(locale, r.path),
    lastmod,
    changefreq: r.changefreq,
    priority: r.priority,
  }));

  writeFileSync(join(publicDir, `sitemap-${locale}.xml`), buildSitemap(urls), "utf-8");
  console.log(`✅ sitemap-${locale}.xml generated`);
}

// Combined sitemap (all locales × all routes)
const allUrls = LOCALES.flatMap((locale) =>
  routes.map((r) => ({
    loc: buildUrl(locale, r.path),
    lastmod,
    changefreq: r.changefreq,
    priority: locale === "vi" ? r.priority : String(Math.max(parseFloat(r.priority) - 0.1, 0.1)),
  })),
);

writeFileSync(join(publicDir, "sitemap.xml"), buildSitemap(allUrls), "utf-8");
console.log(`✅ sitemap.xml generated — ${allUrls.length} URLs (${LOCALES.length} locales × ${routes.length} pages)`);
console.log(`📅 lastmod: ${lastmod}`);
