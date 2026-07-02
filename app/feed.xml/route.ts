import { NextResponse } from "next/server";
import { getAllTools } from "@/tools/registry";

export async function GET() {
  const baseUrl = "https://lowkeydevs.com";
  const toolsList = getAllTools();

  let rssItemsXml = "";
  toolsList.forEach((tool) => {
    const publishDate = new Date(tool.publishDate || Date.now()).toUTCString();
    rssItemsXml += `
      <item>
        <title><![CDATA[${tool.title}]]></title>
        <link>${baseUrl}/${tool.category}/${tool.slug}</link>
        <guid isPermaLink="true">${baseUrl}/${tool.category}/${tool.slug}</guid>
        <pubDate>${publishDate}</pubDate>
        <description><![CDATA[${tool.description}]]></description>
        <category><![CDATA[${tool.category}]]></category>
      </item>
    `;
  });

  const rssFeedXml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>LowkeyDevs - High-Performance Utility Calculators</title>
        <link>${baseUrl}</link>
        <description>Instant online calculators for mathematics, finance, health, coding, and text conversions.</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${rssItemsXml}
      </channel>
    </rss>
  `.trim();

  return new Response(rssFeedXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=600",
    },
  });
}
