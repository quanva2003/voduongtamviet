import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  canonical?: string;
  keywords?: string;
  ogType?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const SITE_URL = "https://voduongtamviet.vercel.app";

/**
 * Normalizes image URL to ensure it's an absolute URL
 */
const normalizeImageUrl = (image: string | undefined): string => {
  if (!image) {
    return `${SITE_URL}/logo.svg`;
  }
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  return `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
};

/**
 * Determines image MIME type from URL extension
 */
const getImageType = (url: string): string => {
  if (url.endsWith(".svg")) return "image/svg+xml";
  if (url.endsWith(".jpg") || url.endsWith(".jpeg")) return "image/jpeg";
  if (url.endsWith(".png")) return "image/png";
  if (url.endsWith(".webp")) return "image/webp";
  if (url.endsWith(".gif")) return "image/gif";
  return "image/png"; // default
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  imageWidth = 1200,
  imageHeight = 800,
  canonical,
  keywords,
  ogType = "website",
  noindex = false,
  nofollow = false,
}) => {
  const location = useLocation();
  const currentUrl = canonical || `${SITE_URL}${location.pathname}`;
  const ogImage = normalizeImageUrl(image);
  const imageType = getImageType(ogImage);

  // Use useLayoutEffect to set meta tags synchronously before paint
  // This helps crawlers that don't execute JavaScript
  useLayoutEffect(() => {
    // Update title immediately
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      attribute: string = "name"
    ) => {
      if (!content) return; // Skip empty content

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

    // Open Graph tags - Required for Facebook, Zalo, etc.
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", ogImage, "property"); // Required - must be explicit
    updateMetaTag("og:image:url", ogImage, "property"); // Explicit URL for compatibility
    updateMetaTag("og:image:secure_url", ogImage, "property"); // HTTPS version (required for secure sites)
    updateMetaTag("og:image:type", imageType, "property");
    updateMetaTag("og:image:width", imageWidth.toString(), "property");
    updateMetaTag("og:image:height", imageHeight.toString(), "property");
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
  }, [
    title,
    description,
    image,
    imageWidth,
    imageHeight,
    canonical,
    keywords,
    ogType,
    noindex,
    nofollow,
    currentUrl,
    ogImage,
    imageType,
    location.pathname,
  ]);

  // Also use useEffect as fallback for browsers that don't support useLayoutEffect
  useEffect(() => {
    // Double-check that meta tags are set (for compatibility)
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (!ogImageTag || ogImageTag.getAttribute("content") !== ogImage) {
      // Re-run if meta tag is missing or incorrect
      const updateMetaTag = (
        name: string,
        content: string,
        attribute: string = "name"
      ) => {
        if (!content) return;
        let element = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!element) {
          element = document.createElement("meta");
          element.setAttribute(attribute, name);
          document.head.appendChild(element);
        }
        element.setAttribute("content", content);
      };
      updateMetaTag("og:image", ogImage, "property");
      updateMetaTag("og:image:secure_url", ogImage, "property");
    }
  }, [ogImage]);

  return null;
};

export default SEO;
