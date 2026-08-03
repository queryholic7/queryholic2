// =============================================================================
// Queryholic — Programmatic Metadata Generator
// =============================================================================
// Generates Next.js Metadata objects for any page from a simple config.
// Eliminates manual metadata editing — every page gets full SEO automatically.
// =============================================================================

import type { Metadata } from "next";
import { SITE_CONFIG } from "./seo.config";

// -----------------------------------------------------------------------------
// Page SEO Config type
// -----------------------------------------------------------------------------

export interface PageSEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  path: string; // e.g. "/about" or "/services/website-development"
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

// -----------------------------------------------------------------------------
// Generate full Metadata object from PageSEOConfig
// -----------------------------------------------------------------------------

export function generatePageMetadata(config: PageSEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    path,
    ogImage,
    ogType = "website",
    noIndex = false,
    publishedTime,
    modifiedTime,
  } = config;

  const canonicalUrl = `${SITE_CONFIG.url}${path}`;
  const image = ogImage || SITE_CONFIG.ogImage;

  return {
    title,
    description,
    keywords: keywords || SITE_CONFIG.defaultKeywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-IN": canonicalUrl,
        "en-US": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: ogType,
      images: [
        {
          url: image,
          width: SITE_CONFIG.ogImageWidth,
          height: SITE_CONFIG.ogImageHeight,
          alt: `${title} - ${SITE_CONFIG.name}`,
        },
      ],
      ...(publishedTime && ogType === "article" && { publishedTime }),
      ...(modifiedTime && ogType === "article" && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [image],
      creator: "@queryholic",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large" as const,
          "max-snippet": -1,
          "max-video-preview": -1,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

// -----------------------------------------------------------------------------
// Generate breadcrumb items from URL path
// -----------------------------------------------------------------------------

export function generateBreadcrumbFromPath(
  path: string,
  customLabels?: Record<string, string>
): { name: string; url: string }[] {
  const segments = path.split("/").filter(Boolean);
  const items: { name: string; url: string }[] = [
    { name: "Home", url: SITE_CONFIG.url },
  ];

  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label =
      customLabels?.[segment] ||
      segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    items.push({ name: label, url: `${SITE_CONFIG.url}${currentPath}` });
  }

  return items;
}
