import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * CURL FIT GYM SEO configuration, from docs/Gym-research.md SEO.title_candidate
 * and SEO.description_candidate (INFERRED from source-reported business data;
 * no superlatives or ranking claims). The research's secondary localities and
 * "best gym" search phrases are search-context terms only and are not used.
 *
 * canonical is a placeholder domain pending the client's real production URL:
 * the research found NO website for this business (WEBSITE_NOT_FOUND).
 */
export const seo: SEOConfiguration = {
  title: "Curl Fit Gym | Fitness Training in Banjara Hills, Hyderabad",
  description:
    "Explore strength training, cardio, personal training and group fitness at Curl Fit Gym in Banjara Hills, Hyderabad. Confirm current services and hours with the gym.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};
