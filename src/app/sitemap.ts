import type { MetadataRoute } from "next";
import { agency } from "@/config/agency";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: agency.websiteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
