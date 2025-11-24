import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Routes configuration
const routes = [
  {
    path: "/",
    changefreq: "weekly",
    priority: "1.0",
    comment: "Trang chủ",
  },
  {
    path: "/about",
    changefreq: "monthly",
    priority: "0.8",
    comment: "Trang giới thiệu",
  },
  {
    path: "/registration",
    changefreq: "monthly",
    priority: "0.9",
    comment: "Trang đăng ký",
  },
];

const siteUrl = "https://voduongtamviet.vercel.app";
const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (route) => `  
  <!-- ${route.comment} -->
  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
  
</urlset>
`;

// Write to public/sitemap.xml
const publicDir = join(__dirname, "..", "public");
const sitemapPath = join(publicDir, "sitemap.xml");

writeFileSync(sitemapPath, sitemap, "utf-8");
console.log(`✅ Sitemap đã được tạo tại: ${sitemapPath}`);
console.log(`📅 Ngày cập nhật: ${currentDate}`);
