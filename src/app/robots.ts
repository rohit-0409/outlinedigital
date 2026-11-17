import type { MetadataRoute } from "next";
import { agency } from "@/config/agency";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = agency.websiteUrl.endsWith("/") ? agency.websiteUrl : agency.websiteUrl + "/";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("sitemap.xml", siteUrl).toString(),
    host: new URL(agency.websiteUrl).host,
  };
}
