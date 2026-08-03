// =============================================================================
// Queryholic — JSON-LD Structured Data Generators
// =============================================================================
// Generates Schema.org JSON-LD structured data for all page types.
// Used by layout.tsx and individual pages to inject schema into <head>.
// =============================================================================

import { SITE_CONFIG } from "./seo.config";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string[];
  category?: string;
}

// -----------------------------------------------------------------------------
// Organization Schema
// -----------------------------------------------------------------------------

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: SITE_CONFIG.logo,
      width: 512,
      height: 512,
    },
    image: SITE_CONFIG.ogImage,
    description: SITE_CONFIG.defaultDescription,
    foundingDate: String(SITE_CONFIG.foundingYear),
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.streetAddress,
      addressLocality: SITE_CONFIG.address.addressLocality,
      addressRegion: SITE_CONFIG.address.addressRegion,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.addressCountry,
    },
    sameAs: Object.values(SITE_CONFIG.social).filter((v) => v && !v.includes("#")),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      contactType: "customer service",
      email: SITE_CONFIG.email,
      areaServed: ["IN", "US", "GB", "AE", "SG"],
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
    knowsAbout: SITE_CONFIG.serviceCategories,
  };
}

// -----------------------------------------------------------------------------
// WebSite Schema (enables sitelinks search box in Google)
// -----------------------------------------------------------------------------

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.defaultDescription,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: SITE_CONFIG.locale,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// -----------------------------------------------------------------------------
// LocalBusiness Schema
// -----------------------------------------------------------------------------

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    image: SITE_CONFIG.ogImage,
    description: SITE_CONFIG.defaultDescription,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    priceRange: SITE_CONFIG.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.streetAddress,
      addressLocality: SITE_CONFIG.address.addressLocality,
      addressRegion: SITE_CONFIG.address.addressRegion,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    openingHoursSpecification: SITE_CONFIG.businessHours.map((hours) => {
      const [days, time] = hours.split(" ");
      const [open, close] = time.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days.split(",").map((d) => {
          const dayMap: Record<string, string> = {
            Mo: "Monday", Tu: "Tuesday", We: "Wednesday",
            Th: "Thursday", Fr: "Friday", Sa: "Saturday", Su: "Sunday",
          };
          // Handle ranges like Mo-Fr
          if (d.includes("-")) {
            const [start, end] = d.split("-");
            const allDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
            const startIdx = allDays.indexOf(start);
            const endIdx = allDays.indexOf(end);
            return allDays.slice(startIdx, endIdx + 1).map((day) => dayMap[day]);
          }
          return dayMap[d];
        }).flat(),
        opens: open,
        closes: close,
      };
    }),
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
    serviceType: SITE_CONFIG.serviceCategories,
    sameAs: Object.values(SITE_CONFIG.social).filter((v) => v && !v.includes("#")),
  };
}

// -----------------------------------------------------------------------------
// WebPage Schema
// -----------------------------------------------------------------------------

export function generateWebPageSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  breadcrumb,
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumb?: BreadcrumbItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    name: title,
    description,
    url,
    isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
    about: { "@id": `${SITE_CONFIG.url}/#organization` },
    inLanguage: SITE_CONFIG.locale,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(breadcrumb && {
      breadcrumb: generateBreadcrumbSchema(breadcrumb),
    }),
  };
}

// -----------------------------------------------------------------------------
// Breadcrumb Schema
// -----------------------------------------------------------------------------

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// -----------------------------------------------------------------------------
// FAQ Schema
// -----------------------------------------------------------------------------

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// -----------------------------------------------------------------------------
// Service Schema
// -----------------------------------------------------------------------------

export function generateServiceSchema(service: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: service.provider || SITE_CONFIG.name,
    },
    areaServed: (service.areaServed || ["India", "United States", "United Kingdom", "UAE", "Singapore"]).map(
      (area) => ({ "@type": "Country", name: area })
    ),
    ...(service.category && { serviceType: service.category }),
  };
}

// -----------------------------------------------------------------------------
// Article Schema (for future blog/content)
// -----------------------------------------------------------------------------

export function generateArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: image || SITE_CONFIG.ogImage,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName || SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: SITE_CONFIG.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

// -----------------------------------------------------------------------------
// Helper: Render JSON-LD as script tag content
// -----------------------------------------------------------------------------

export function jsonLdScriptProps(schema: Record<string, unknown> | Record<string, unknown>[]) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(schema, null, 0),
    },
  };
}
