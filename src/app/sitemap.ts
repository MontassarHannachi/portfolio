import type { MetadataRoute } from "next";

const siteUrl = "https://montassar-portfolio-alpha.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/fr`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          fr: `${siteUrl}/fr`,
          en: `${siteUrl}/en`,
        },
      },
    },
    {
      url: `${siteUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${siteUrl}/fr`,
          en: `${siteUrl}/en`,
        },
      },
    },
  ];
}
