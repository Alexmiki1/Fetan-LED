import { MetadataRoute } from "next";
import { SPEC_PRODUCTS } from "@/lib/constants/specs";
import { PROJECTS } from "@/lib/constants/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fetanled.com";

  // Base static routes
  const staticRoutes = ["", "/contact", "/services", "/about"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Spec sheets dynamic routes
  const specRoutes = SPEC_PRODUCTS.map((prod) => ({
    url: `${baseUrl}/specs/${prod.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Project details dynamic routes
  const projectRoutes = PROJECTS.map((proj) => ({
    url: `${baseUrl}/projects/${proj.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...specRoutes, ...projectRoutes];
}
