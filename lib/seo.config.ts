// =============================================================================
// Queryholic — Central SEO Configuration
// =============================================================================
// Single source of truth for all SEO, structured data, and metadata values.
// Every page and schema generator imports from here.
// =============================================================================

export const SITE_CONFIG = {
  name: "Queryholic",
  legalName: "Queryholic",
  tagline: "Engineering The Future",
  url: "https://queryholic.in",
  locale: "en_IN",
  language: "en",
  charset: "utf-8",
  foundingYear: 2024,

  // Default meta
  defaultTitle: "Queryholic | Best Software Development Company in Chennai, India",
  defaultDescription:
    "Queryholic is a leading software development company in Chennai, India. We build websites, web applications, mobile apps, AI solutions, embedded systems, IoT platforms, and smart energy technologies for startups and enterprises.",
  defaultKeywords: [
    "Software Development Company",
    "Website Development Company Chennai",
    "Web Application Development India",
    "AI Development Company",
    "Mobile App Development",
    "Custom Software Development",
    "IoT Solutions",
    "Embedded Systems",
    "Software Company India",
    "Best Software Company Chennai",
    "Queryholic",
  ] as string[],

  // OG / Social
  ogImage:
    "https://res.cloudinary.com/drqsvwrjt/image/upload/v1769694504/queryholic_profile-removebg-preview_azlcg4.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,

  // Icons
  favicon:
    "https://res.cloudinary.com/drqsvwrjt/image/upload/v1770208225/queryholic_pro_txcp6w.jpg",

  // Logos
  logo: "https://res.cloudinary.com/drqsvwrjt/image/upload/v1779368735/logo_1_yipt5y.png",
  logoDark:
    "https://res.cloudinary.com/drqsvwrjt/image/upload/v1769607730/logo1_xi72sv.png",

  // Contact
  email: "queryholic@gmail.com",
  phone: "+91-XXXXXXXXXX", // Update with real phone
  whatsapp: "+91-XXXXXXXXXX", // Update with real WhatsApp

  // Social Media
  social: {
    twitter: "https://twitter.com/queryholic",
    linkedin: "https://linkedin.com/company/queryholic",
    instagram: "https://instagram.com/queryholic",
    github: "https://github.com/queryholic",
  },

  // Location / LocalBusiness
  address: {
    streetAddress: "Chennai", // Update with full address
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600001", // Update with real postal code
    addressCountry: "IN",
  },
  geo: {
    latitude: 13.0827,
    longitude: 80.2707,
  },
  businessHours: [
    "Mo-Fr 09:00-18:00",
    "Sa 10:00-14:00",
  ] as string[],
  priceRange: "$$",

  // Services (used for schema)
  serviceCategories: [
    "Website Development",
    "Web Application Development",
    "Mobile App Development",
    "Custom Software Development",
    "AI & Automation",
    "Embedded Systems",
    "IoT Solutions",
    "UI/UX Design",
    "Cloud & AWS",
    "EV & Smart Energy",
  ] as string[],
};

// =============================================================================
// Verification tags (add your real IDs when available)
// =============================================================================
export const VERIFICATION = {
  google: "", // Google Search Console verification code
  bing: "", // Bing Webmaster Tools verification code
  yandex: "", // Yandex verification code
  yahoo: "", // Yahoo verification code
};

// =============================================================================
// Analytics IDs (empty = disabled, add IDs to activate)
// =============================================================================
export const ANALYTICS = {
  gtmId: "", // Google Tag Manager: GTM-XXXXXXX
  gaId: "", // Google Analytics 4: G-XXXXXXXXXX
  clarityId: "", // Microsoft Clarity
  metaPixelId: "", // Meta (Facebook) Pixel
  linkedinPartnerId: "", // LinkedIn Insight Tag
};

// =============================================================================
// External domains for preconnect/dns-prefetch
// =============================================================================
export const PRECONNECT_DOMAINS: string[] = [
  "https://res.cloudinary.com",
  "https://images.unsplash.com",
  "https://fonts.googleapis.com",
  "https://fonts.gstatic.com",
];
