import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { SERVICES_DATA } from "@/lib/services-data";
import { INDUSTRIES_DATA } from "@/lib/industries-data";
import { generatePageMetadata } from "@/lib/metadata";
import { generateWebPageSchema, generateBreadcrumbSchema, jsonLdScriptProps } from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/seo.config";
import { Globe, Layers, Building2, MapPin, ArrowUpRight, Search } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "HTML Sitemap — All Pages, Services & 1000+ Solutions Directory",
  description:
    "Complete directory of all pages, custom software development services, 1,000+ specialized technology solutions, and industry-specific architectures offered by Queryholic.",
  keywords: [
    "Queryholic Sitemap",
    "Website Directory",
    "Software Services Directory",
    "All Queryholic Pages",
    "Software Development Chennai Directory",
  ],
  path: "/sitemap-html",
});

export default function SitemapHtmlPage() {
  const breadcrumb = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "HTML Sitemap", url: `${SITE_CONFIG.url}/sitemap-html` },
  ];

  return (
    <div className="page-shell bg-background transition-colors duration-300">
      <Navbar />

      {/* Header */}
      <section className="relative w-full py-28 md:py-36 bg-white dark:bg-[#030303] border-b border-neutral-200/60 dark:border-neutral-800/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-600 dark:text-indigo-400 uppercase mb-6">
            Directory & Navigation
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6">
            Website{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 dark:from-indigo-300 dark:via-purple-300 dark:to-sky-300 bg-clip-text text-transparent">
              Sitemap
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Explore our comprehensive directory of web, software, AI, mobile, cloud, and embedded technology solutions.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 md:py-24 bg-slate-50/80 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          {/* Main Pages */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                Main Pages
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { title: "Home", href: "/", desc: "Homepage & engineering overview" },
                { title: "About Us", href: "/about", desc: "Our story, vision & capabilities" },
                { title: "Contact Us", href: "/contact", desc: "Get in touch & request quotes" },
                { title: "All Services Hub", href: "/services", desc: "Overview of software services" },
                { title: "All Industries Hub", href: "/industries", desc: "Industry verticals & solutions" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group p-5 rounded-2xl bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-[11px] text-indigo-500/80 font-mono mt-4">
                    {item.href}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Software Services */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                Software & Technology Services ({SERVICES_DATA.length})
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {SERVICES_DATA.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group p-5 rounded-2xl bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2">
                      {service.metaDescription}
                    </p>
                  </div>
                  <span className="text-[11px] text-indigo-500/80 font-mono mt-4">
                    /services/{service.slug}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Industry Solutions */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                Industry Verticals ({INDUSTRIES_DATA.length})
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {INDUSTRIES_DATA.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group p-5 rounded-2xl bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm">
                        {ind.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2">
                      {ind.metaDescription}
                    </p>
                  </div>
                  <span className="text-[11px] text-indigo-500/80 font-mono mt-4">
                    /industries/{ind.slug}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* 1,000 Solutions & Keyword Directory Matrix */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                1,000+ Solutions & Specialized Topics Directory
              </h2>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl">
              Direct index of our engineering capabilities, frameworks, hiring models, and industry solutions indexed for search engines and AI assistants.
            </p>

            <div className="space-y-8">
              {SERVICES_DATA.filter((s) => s.keywords.length > 0).map((service) => (
                <div
                  key={service.slug}
                  className="p-6 rounded-2xl bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="font-bold text-base md:text-lg text-neutral-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-2"
                    >
                      {service.title} ({service.keywords.length} Topics)
                      <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                    </Link>
                    <span className="text-xs text-neutral-400 font-mono">
                      /services/{service.slug}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((kw, i) => (
                      <Link
                        key={i}
                        href={`/services/${service.slug}`}
                        className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200/60 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-500/40 transition-colors"
                      >
                        {kw}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Local / Region Coverage */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-sky-500/10 border border-indigo-500/20">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                Global Delivery, Rooted in Chennai, India
              </h2>
            </div>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
              Queryholic proudly provides top-rated custom website development, software engineering, AI solutions, mobile apps, and IoT platforms to businesses across Chennai, Bengaluru, Hyderabad, Mumbai, Delhi-NCR, the United States, UK, UAE, and Singapore.
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        {...jsonLdScriptProps(
          generateWebPageSchema({
            title: "HTML Sitemap — All Pages & 1000+ Solutions Directory",
            description:
              "Complete directory of all pages, custom software development services, and industry-specific technology solutions offered by Queryholic.",
            url: `${SITE_CONFIG.url}/sitemap-html`,
            breadcrumb,
          })
        )}
      />
      <script {...jsonLdScriptProps(generateBreadcrumbSchema(breadcrumb))} />
    </div>
  );
}
