import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aaarchangel.com",
      lastModified: new Date(),
    },
    {
      url: "https://aaarchangel.com/en",
      lastModified: new Date(),
    },
    {
      url: "https://aaarchangel.com/fr",
      lastModified: new Date(),
    },
    {
      url: "https://aaarchangel.com/es",
      lastModified: new Date(),
    },
    {
      url: "https://aaarchangel.com/bg",
      lastModified: new Date(),
    },
  ];
}