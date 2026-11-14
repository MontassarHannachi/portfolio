import type { MetadataRoute } from "next";

const siteUrl = "https://montassar-portfolio-alpha.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
