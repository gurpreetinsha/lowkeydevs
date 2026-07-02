import { MetadataRoute } from "next";
import { getAllTools } from "@/tools/registry";
import { categories } from "@/config/categories";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://lowkeydevs.com";
  
  // 1. Core pages
  const coreRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // 2. Category routes
  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 3. Tool pages
  const toolRoutes = getAllTools().map((tool) => ({
    url: `${baseUrl}/${tool.category}/${tool.slug}`,
    lastModified: new Date(tool.publishDate || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...coreRoutes, ...categoryRoutes, ...toolRoutes];
}
