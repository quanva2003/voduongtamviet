import { writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = "https://tamviet.vn";

const ROUTES = [
  { path: "/",                    changefreq: "weekly",  priority: "1.0" },
  { path: "/about",               changefreq: "monthly", priority: "0.8" },
  { path: "/registration",        changefreq: "monthly", priority: "0.9" },
  { path: "/articles",            changefreq: "daily",   priority: "0.8" },
  { path: "/schedule",            changefreq: "weekly",  priority: "0.7" },
  { path: "/booking",             changefreq: "weekly",  priority: "0.8" },
  { path: "/belt-promotion/iii-2025", changefreq: "monthly", priority: "0.7" },
];

const LOCALES = ["", "/en", "/ja"];

const currentDate = new Date().toISOString().split("T")[0];

function buildUrl(locale, path) {
  const base = locale === "" ? SITE_URL : `${SITE_URL}${locale}`;
  return `${base}${path === "/" ? "" : path}`;
}

const urlEntries = ROUTES.flatMap((route) =>
  LOCALES.map((locale) => {
    const loc = buildUrl(locale, route.path);
    const hreflang = [
      `      <xhtml:link rel="alternate" hreflang="vi" href="${buildUrl("", route.path)}"/>`,
      `      <xhtml:link rel="alternate" hreflang="en" href="${buildUrl("/en", route.path)}"/>`,
      `      <xhtml:link rel="alternate" hreflang="ja" href="${buildUrl("/ja", route.path)}"/>`,
      `      <xhtml:link rel="alternate" hreflang="x-default" href="${buildUrl("", route.path)}"/>`,
    ].join("\n");

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
${hreflang}
  </url>`;
  }),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries.join("\n")}
</urlset>
`;

const publicDir = join(__dirname, "..", "public");
mkdirSync(publicDir, { recursive: true });
const sitemapPath = join(publicDir, "sitemap.xml");
writeFileSync(sitemapPath, sitemap, "utf-8");

console.log(`Sitemap generated: ${sitemapPath} (${currentDate})`);
