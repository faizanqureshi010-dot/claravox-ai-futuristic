import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/technology",
    "/about",
    "/revenue-cycle-management",
    "/resources",
    "/who-we-serve",
    "/why-claravox",
    "/compliance-and-security",
    "/get-your-free-audit",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
    "/accessibility-statement",
    "/medical-billing",
    "/medical-coding",
    "/credentialing",
    "/eligibility-verification",
    "/prior-authorization",
    "/payment-posting",
    "/denial-management",
    "/accounts-receivable",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/get-your-free-audit" ? 0.9 : 0.7,
  }));
}
