import type { MetadataRoute } from "next";
import { salon } from "@/lib/salon";
import { stylists } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/booking", "/privacy-policy", "/terms-conditions"].map((path) => ({
    url: `${salon.url}${path}`,
    lastModified: new Date(),
  }));

  const stylistRoutes = stylists.map((stylist) => ({
    url: `${salon.url}/stylists/${stylist.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...stylistRoutes];
}
