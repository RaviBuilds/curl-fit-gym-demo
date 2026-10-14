import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * CURL FIT GYM — rating (4.8) and reviewCount (105) are PUBLICLY_REPORTED
 * (Google Business Profile screenshot cited in docs/Gym-research.md REVIEWS).
 * The research gives no date for that reading (`rating_read_on` NOT_FOUND), so
 * re-read the live Google figures with the operator before launch.
 *
 * `reviews` IS EMPTY ON PURPOSE. The research lists three reviewers (ABIR
 * MANDAL on Justdial; Aditya Joshi and Maxxx on FITPASS) with 5-star ratings
 * but supplies NO review wording (`wording: null`) and instructs not to
 * fabricate or paraphrase a testimonial from a name and a rating. They are also
 * not Google reviews. components/sections/Reviews.tsx returns nothing when
 * there are no reviews, so the section is gracefully omitted instead of being
 * filled with invented text. Add real, permissioned review text here to
 * switch it on — no component change needed.
 *
 * `tagline` restates the research's recurring review themes (helpful trainers,
 * equipment condition, cleanliness) without quoting anyone or naming a trainer.
 * The research also notes one FITPASS comment asking for better cleanliness,
 * so the line is kept to "members mention" wording rather than a guarantee.
 *
 * REVIEWS.google_profile_url is NOT_FOUND — no direct Google Business Profile
 * URL exists. Never invent one and never substitute a Justdial URL for the
 * Google review CTA. googleBusinessProfileUrl uses a Google Maps
 * search-by-name-and-address query (the same safe fallback as lib/business.ts
 * mapUrl). No Place ID or profile slug is invented.
 */
export const googleReviews: GoogleReviews = {
  rating: 4.8,
  reviewCount: 105,
  tagline:
    "Members mention helpful trainers, well-kept equipment and clean training areas.",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Curl+Fit+Gym+5th+Floor+8-2+No+4+413%2FB+Road+Saritha+Apartment+Banjara+Hills+Hyderabad+500034",
  // Fill these two once the owner supplies the Google "write a review" link
  // (Google Business Profile -> Get more reviews -> share link). The footer
  // trust card then adds a "Write a review" link and, if reviewQrSrc points at
  // a QR image of that link, the scan-to-review QR. Left unset = not rendered.
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [],
};
