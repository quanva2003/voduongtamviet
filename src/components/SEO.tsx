import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  keywords?: string;
  ogType?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  canonical,
  keywords,
  ogType = "website",
  noindex = false,
  nofollow = false,
}) => {
  const location = useLocation();
  const siteUrl = "https://voduongtamviet.vercel.app"; // Thay đổi URL này theo domain thực tế
  const currentUrl = canonical || `${siteUrl}${location.pathname}`;
  const ogImage = image || `${siteUrl}/logo.svg`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      attribute: string = "name"
    ) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Robots meta
    const robotsContent = [
      noindex ? "noindex" : "index",
      nofollow ? "nofollow" : "follow",
    ].join(", ");
    updateMetaTag("robots", robotsContent);

    // Open Graph tags
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", ogImage, "property");
    updateMetaTag("og:url", currentUrl, "property");
    updateMetaTag("og:type", ogType, "property");
    updateMetaTag("og:site_name", "Võ Đường Tâm Việt", "property");
    updateMetaTag("og:locale", "vi_VN", "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Canonical link
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // Cleanup function
    return () => {
      // Không cần cleanup vì sẽ được update khi component re-render
    };
  }, [
    title,
    description,
    image,
    canonical,
    keywords,
    ogType,
    noindex,
    nofollow,
    currentUrl,
    ogImage,
    location.pathname,
  ]);

  return null;
};

export default SEO;
