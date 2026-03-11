import { MetadataRoute } from "next";

const BASE_URL = "https://aaarchangel.com";
const LOCALES = ["en", "fr", "es", "bg"];

const pages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/articles", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/resources", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/shop", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/legal", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of LOCALES) {
      // Build hreflang alternates for every locale
      const alternatesLanguages: Record<string, string> = {};
      for (const alt of LOCALES) {
        alternatesLanguages[alt] = `${BASE_URL}/${alt}${page.path}`;
      }
      // x-default points to the English version
      alternatesLanguages["x-default"] = `${BASE_URL}/en${page.path}`;

      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: alternatesLanguages,
        },
      });
    }
  }

  return entries;
}