import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/seo.config";
import { SERVICES_DATA } from "@/lib/services-data";
import { INDUSTRIES_DATA } from "@/lib/industries-data";

export async function GET() {
  const buildDate = new Date().toUTCString();

  const serviceItems = SERVICES_DATA.map((service) => `
    <item>
      <title><![CDATA[${service.title} Services — ${SITE_CONFIG.name}]]></title>
      <link>${SITE_CONFIG.url}/services/${service.slug}</link>
      <guid isPermaLink="true">${SITE_CONFIG.url}/services/${service.slug}</guid>
      <description><![CDATA[${service.metaDescription}]]></description>
      <pubDate>${buildDate}</pubDate>
      <category><![CDATA[Software Services]]></category>
    </item>
  `).join("");

  const industryItems = INDUSTRIES_DATA.map((industry) => `
    <item>
      <title><![CDATA[${industry.title} — ${SITE_CONFIG.name}]]></title>
      <link>${SITE_CONFIG.url}/industries/${industry.slug}</link>
      <guid isPermaLink="true">${SITE_CONFIG.url}/industries/${industry.slug}</guid>
      <description><![CDATA[${industry.metaDescription}]]></description>
      <pubDate>${buildDate}</pubDate>
      <category><![CDATA[Industry Solutions]]></category>
    </item>
  `).join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}]]></title>
    <link>${SITE_CONFIG.url}</link>
    <description><![CDATA[${SITE_CONFIG.defaultDescription}]]></description>
    <language>en-in</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_CONFIG.url}/rss.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title><![CDATA[${SITE_CONFIG.name} — Best Software Development Company in Chennai, India]]></title>
      <link>${SITE_CONFIG.url}</link>
      <guid isPermaLink="true">${SITE_CONFIG.url}</guid>
      <description><![CDATA[${SITE_CONFIG.defaultDescription}]]></description>
      <pubDate>${buildDate}</pubDate>
    </item>

    <item>
      <title><![CDATA[About ${SITE_CONFIG.name} — Engineering The Future]]></title>
      <link>${SITE_CONFIG.url}/about</link>
      <guid isPermaLink="true">${SITE_CONFIG.url}/about</guid>
      <description><![CDATA[Learn about Queryholic, our story, beliefs, and full-stack software and hardware engineering capabilities.]]></description>
      <pubDate>${buildDate}</pubDate>
    </item>

    <item>
      <title><![CDATA[Contact ${SITE_CONFIG.name} — Request a Quote]]></title>
      <link>${SITE_CONFIG.url}/contact</link>
      <guid isPermaLink="true">${SITE_CONFIG.url}/contact</guid>
      <description><![CDATA[Contact our software and AI engineering team to get a free estimate and discovery session.]]></description>
      <pubDate>${buildDate}</pubDate>
    </item>

    ${serviceItems}
    ${industryItems}
  </channel>
</rss>`;

  return new NextResponse(rssXml.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
