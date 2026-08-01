import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "Omgilibot",
          "anthropic-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://fetanled.com/sitemap.xml",
  };
}
