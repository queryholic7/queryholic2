import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { INDUSTRIES_DATA } from "@/lib/industries-data";
import { generatePageMetadata } from "@/lib/metadata";
import { generateWebPageSchema, generateBreadcrumbSchema, jsonLdScriptProps } from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/seo.config";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Industries We Serve — Software Solutions by Industry",
  description:
    "Queryholic builds industry-specific software solutions for healthcare, education, logistics, real estate, restaurants, fitness, finance, manufacturing, and more. Custom technology for every vertical.",
  keywords: [
    "Industry Software Solutions", "Healthcare Software", "Education Software",
    "Logistics Software", "Real Estate Software", "Restaurant Software",
    "Manufacturing ERP", "FinTech Software", "Hotel Booking Software",
  ],
  path: "/industries",
});

export default function IndustriesPage() {
  const breadcrumb = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Industries", url: `${SITE_CONFIG.url}/industries` },
  ];

  return (
    <div className="page-shell bg-background transition-colors duration-300">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full py-28 md:py-36 bg-white dark:bg-[#030303]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-600 dark:text-indigo-400 uppercase mb-6">
            Industries We Serve
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6">
            Technology Solutions for{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 dark:from-indigo-300 dark:via-purple-300 dark:to-sky-300 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            We understand that every industry has unique challenges. That&apos;s why we build custom software solutions tailored to your specific vertical and business needs.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="w-full py-16 md:py-24 bg-slate-50/80 dark:bg-[#0a0a0a] border-t border-slate-200/60 dark:border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex flex-col p-6 md:p-8 rounded-3xl bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {industry.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 flex-1 line-clamp-3">
                  {industry.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 md:py-28 bg-white dark:bg-[#030303]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            We build custom solutions for any industry. Tell us about your unique requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background hover:opacity-90 transition-all"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script {...jsonLdScriptProps(generateWebPageSchema({ title: "Industries We Serve", description: "Industry-specific software solutions.", url: `${SITE_CONFIG.url}/industries`, breadcrumb }))} />
      <script {...jsonLdScriptProps(generateBreadcrumbSchema(breadcrumb))} />
    </div>
  );
}
