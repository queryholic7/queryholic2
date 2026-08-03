import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/ui/navbar";
import { INDUSTRIES_DATA } from "@/lib/industries-data";
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
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return INDUSTRIES_DATA.map((industry) => ({
    slug: industry.slug,
  }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((i) => i.slug === slug);
  if (!industry) return {};

  return generatePageMetadata({
    title: `${industry.title} — ${SITE_CONFIG.name}`,
    description: industry.metaDescription,
    keywords: industry.keywords,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((i) => i.slug === slug);
  if (!industry) notFound();

  const breadcrumb = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Industries", url: `${SITE_CONFIG.url}/industries` },
    { name: industry.title, url: `${SITE_CONFIG.url}/industries/${industry.slug}` },
  ];

  const relatedServices = SERVICES_DATA.filter((s) =>
    industry.relatedServiceSlugs.includes(s.slug)
  );

  return (
    <div className="page-shell bg-background transition-colors duration-300">
      <Navbar />

      {/* Breadcrumb */}
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

      {/* Hero */}
      <section className="relative w-full py-20 md:py-28 bg-white dark:bg-[#030303]">
        <div className="max-w-5xl mx-auto px-4">
          <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Industries
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6">
            {industry.headline}
          </h1>
          <p className="max-w-3xl text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10">
            {industry.description}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background hover:opacity-90 transition-all shadow-lg">
            Discuss Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Solutions */}
      <section className="w-full py-16 md:py-24 bg-slate-50/80 dark:bg-[#0a0a0a] border-t border-slate-200/60 dark:border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
            Solutions We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.solutions.map((solution, i) => (
              <div key={i} className="flex flex-col p-6 rounded-2xl bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{solution.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {industry.faqs.length > 0 && (
        <section className="w-full py-16 md:py-24 bg-white dark:bg-[#030303]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {industry.faqs.map((faq, i) => (
                <details key={i} className="group rounded-2xl bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 p-6">
                  <summary className="cursor-pointer text-lg font-medium text-neutral-900 dark:text-white list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-neutral-400 group-open:rotate-45 transition-transform text-2xl">+</span>
                  </summary>
                  <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="w-full py-16 md:py-20 bg-slate-50/80 dark:bg-[#0a0a0a] border-t border-slate-200/60 dark:border-neutral-800/50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group p-6 rounded-2xl bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500/30 transition-all">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{service.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">{service.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="w-full py-20 md:py-28 bg-white dark:bg-[#030303]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            Ready to Build Your {industry.title.replace(" Software Development", "").replace(" Website Development", "").replace(" E-Commerce Development", "")} Solution?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Get a free consultation and personalized quote within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background hover:opacity-90 transition-all">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script {...jsonLdScriptProps(generateWebPageSchema({ title: industry.title, description: industry.metaDescription, url: `${SITE_CONFIG.url}/industries/${industry.slug}`, breadcrumb }))} />
      <script {...jsonLdScriptProps(generateServiceSchema({ name: industry.title, description: industry.metaDescription, url: `${SITE_CONFIG.url}/industries/${industry.slug}`, category: industry.title }))} />
      <script {...jsonLdScriptProps(generateFAQSchema(industry.faqs))} />
      <script {...jsonLdScriptProps(generateBreadcrumbSchema(breadcrumb))} />
    </div>
  );
}
