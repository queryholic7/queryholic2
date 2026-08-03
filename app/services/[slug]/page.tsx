import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/ui/navbar";
import { SERVICES_DATA } from "@/lib/services-data";
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateWebPageSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  jsonLdScriptProps,
} from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/seo.config";
import { ArrowRight, CheckCircle2, ArrowLeft, Search, Sparkles } from "lucide-react";

// =============================================================================
// Static params for all service slugs
// =============================================================================

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

// =============================================================================
// Dynamic metadata per service
// =============================================================================

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return {};

  return generatePageMetadata({
    title: `${service.title} Services — ${SITE_CONFIG.name}`,
    description: service.metaDescription,
    keywords: service.keywords,
    path: `/services/${service.slug}`,
  });
}

// =============================================================================
// Service Detail Page
// =============================================================================

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) notFound();

  const breadcrumb = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Services", url: `${SITE_CONFIG.url}/services` },
    { name: service.title, url: `${SITE_CONFIG.url}/services/${service.slug}` },
  ];

  const relatedServices = SERVICES_DATA.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  return (
    <div className="page-shell bg-background transition-colors duration-300">
      <Navbar />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="w-full bg-white dark:bg-[#030303] border-b border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400" itemScope itemType="https://schema.org/BreadcrumbList">
            {breadcrumb.map((item, i) => (
              <li key={item.url} className="flex items-center gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                {i > 0 && <span>/</span>}
                {i < breadcrumb.length - 1 ? (
                  <Link href={item.url.replace(SITE_CONFIG.url, "") || "/"} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" itemProp="item">
                    <span itemProp="name">{item.name}</span>
                  </Link>
                ) : (
                  <span className="text-neutral-900 dark:text-white font-medium" itemProp="name">{item.name}</span>
                )}
                <meta itemProp="position" content={String(i + 1)} />
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-white dark:bg-[#030303]">
        <div className="max-w-5xl mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Premier Engineering Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6">
            {service.headline}
          </h1>
          <p className="max-w-3xl text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10">
            {service.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background hover:opacity-90 transition-all shadow-lg"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#faqs"
              className="inline-flex items-center gap-2 rounded-full px-6 py-4 text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              Pricing & FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 bg-slate-50/80 dark:bg-[#0a0a0a] border-t border-slate-200/60 dark:border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col p-6 rounded-2xl bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800"
              >
                <CheckCircle2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-16 md:py-20 bg-white dark:bg-[#030303]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-8">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Search Capabilities & Coverage (GEO/SEO Indexing Cluster) */}
      {service.keywords.length > 0 && (
        <section className="w-full py-14 md:py-18 bg-neutral-50/50 dark:bg-[#080808] border-t border-neutral-200/50 dark:border-neutral-800/50">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <Search className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white text-center">
                Search Topics & Solutions Covered
              </h2>
            </div>
            <p className="text-center text-xs md:text-sm text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
              Explore specialized capabilities, hiring models, tech stacks, and industry solutions available under {service.title}.
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
              {service.keywords.map((kw, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#141414] border border-neutral-200/80 dark:border-neutral-800/80 text-xs text-neutral-700 dark:text-neutral-300 hover:border-indigo-500/50 transition-colors"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faqs.length > 0 && (
        <section id="faqs" className="w-full py-16 md:py-24 bg-slate-50/80 dark:bg-[#0a0a0a] border-t border-slate-200/60 dark:border-neutral-800/50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 p-6"
                >
                  <summary className="cursor-pointer text-lg font-medium text-neutral-900 dark:text-white list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-neutral-400 group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="w-full py-16 md:py-20 bg-white dark:bg-[#030303]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group p-6 rounded-2xl bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/30 transition-all"
                >
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
                    {related.metaDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-[#0a0a0a] dark:to-[#030303] border-t border-slate-200/60 dark:border-neutral-800/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Tell us about your {service.title.toLowerCase()} requirements and receive a personalized quote within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background hover:opacity-90 transition-all"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script {...jsonLdScriptProps(generateWebPageSchema({ title: `${service.title} Services`, description: service.metaDescription, url: `${SITE_CONFIG.url}/services/${service.slug}`, breadcrumb }))} />
      <script {...jsonLdScriptProps(generateServiceSchema({ name: `${service.title} Services`, description: service.metaDescription, url: `${SITE_CONFIG.url}/services/${service.slug}`, category: service.title }))} />
      <script {...jsonLdScriptProps(generateFAQSchema(service.faqs))} />
      <script {...jsonLdScriptProps(generateBreadcrumbSchema(breadcrumb))} />
    </div>
  );
}
