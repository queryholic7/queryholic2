import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/ui/footer";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { MobileBottomNav } from "@/components/ui/mobile-bottom-nav";
import { SITE_CONFIG, VERIFICATION, PRECONNECT_DOMAINS } from "@/lib/seo.config";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
  generateSiteNavigationSchema,
  jsonLdScriptProps,
} from "@/lib/schema";
import { Analytics } from "@/components/analytics";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// =============================================================================
// Root Metadata — Template-based with comprehensive SEO
// =============================================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    template: `%s | ${SITE_CONFIG.name}`,
    default: SITE_CONFIG.defaultTitle,
  },
  description: SITE_CONFIG.defaultDescription,
  keywords: SITE_CONFIG.defaultKeywords,

  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  generator: "Next.js",

  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Canonical & hreflang
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      "en-IN": SITE_CONFIG.url,
      "en-US": SITE_CONFIG.url,
      "x-default": SITE_CONFIG.url,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: SITE_CONFIG.ogImageWidth,
        height: SITE_CONFIG.ogImageHeight,
        alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
      },
    ],
  },

  // Twitter / X Cards
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    images: [SITE_CONFIG.ogImage],
    creator: "@queryholic",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: SITE_CONFIG.favicon,
    shortcut: SITE_CONFIG.favicon,
    apple: SITE_CONFIG.favicon,
  },

  // Manifest
  manifest: "/manifest.webmanifest",

  // Verification
  verification: {
    ...(VERIFICATION.google && { google: VERIFICATION.google }),
    ...(VERIFICATION.yandex && { yandex: VERIFICATION.yandex }),
    ...(VERIFICATION.yahoo && { yahoo: VERIFICATION.yahoo }),
    other: {
      ...(VERIFICATION.bing && { "msvalidate.01": VERIFICATION.bing }),
    },
  },

  // Category for classification
  category: "technology",

  // Additional meta for AI/GEO optimization
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
    // AI & GEO optimization hints
    "ai-content-declaration": "human-created",
    "content-language": "en",
  },
};

// =============================================================================
// Viewport Configuration
// =============================================================================

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030303" },
  ],
  colorScheme: "dark light",
};

// =============================================================================
// Root Layout
// =============================================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", ibmPlexSans.variable)}
    >
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="HsiTEuJal4BI2hN7qgRxi60Dm4hdIjRwQ7GoB1G-2nI"
        />

        {/* Preconnect to critical third-party origins */}
        {PRECONNECT_DOMAINS.map((domain) => (
          <link key={domain} rel="preconnect" href={domain} crossOrigin="anonymous" />
        ))}
        {PRECONNECT_DOMAINS.map((domain) => (
          <link key={`dns-${domain}`} rel="dns-prefetch" href={domain} />
        ))}

        {/* RSS Feed auto-discovery */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${SITE_CONFIG.name} RSS Feed`}
          href="/rss.xml"
        />

        {/* JSON-LD Structured Data — Global schemas & Sitelinks */}
        <script {...jsonLdScriptProps(generateOrganizationSchema())} />
        <script {...jsonLdScriptProps(generateWebSiteSchema())} />
        <script {...jsonLdScriptProps(generateLocalBusinessSchema())} />
        <script {...jsonLdScriptProps(generateSiteNavigationSchema())} />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <main className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsappButton />
        <MobileBottomNav />
        <Analytics />
      </body>
    </html>
  );
}
