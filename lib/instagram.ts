/**
 * Instagram configuration — official embed mode.
 *
 * PURE FRONTEND TEMPLATE: no Instagram API, no OAuth, no Meta tokens.
 * This is the default manual embed mode using public Instagram Reel URLs
 * and the official Instagram embed script.
 *
 * FUTURE CLIENT WORKFLOW:
 * - Clone template
 * - Edit this file only
 * - Replace profileUrl, handle, and Reel URLs with client's content
 * - Website updated
 *
 * No component modification required for standard customization.
 */

export interface InstagramReel {
  /** Stable identifier for React keys */
  id: string;
  /** Full Instagram Reel URL for official embed */
  url: string;
  /** Content type - future-proofed for potential post support */
  type: "reel";
}

export interface InstagramConfiguration {
  /**
   * Full Instagram profile URL. OPTIONAL: when a gym's official profile has
   * not been verified, leave it unset — the profile CTA and footer link are
   * then omitted rather than pointing at an invented or wrong account.
   */
  profileUrl?: string;
  /** Display handle with @ prefix. Optional for the same reason. */
  handle?: string;
  /** Reel embeds - render all supplied items, no artificial limit */
  items: InstagramReel[];
}

/**
 * CURL FIT GYM Instagram configuration.
 *
 * docs/Gym-research.md INSTAGRAM.profile_url and INSTAGRAM.handle are both
 * `null` / NOT_FOUND: no verified Banjara Hills branch account was
 * established (sister-branch Facebook content is not branch proof), so
 * `profileUrl` and `handle` are deliberately left unset. The section heading
 * falls back to the gym name, and the "View More on Instagram" CTA and the
 * footer Instagram link are not rendered. Each embedded Reel still carries
 * Instagram's own creator name and "View profile" link.
 * OWNER QUESTION: confirm the official Instagram profile URL and handle.
 *
 * INSTAGRAM.items supplies 3 Reel URLs, each `status: VERIFIED_OFFICIAL`
 * (source "Official Instagram"), wired below exactly as supplied:
 *   1. Strength training session inside the gym
 *   2. Gym interior and equipment walkthrough
 *   3. Gym interior and equipment walkthrough
 */
export const instagramConfig: InstagramConfiguration = {
  profileUrl: undefined,
  handle: undefined,
  items: [
    {
      id: "reel-01",
      type: "reel",
      url: "https://www.instagram.com/reel/DeLvC4YDPPI/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-02",
      type: "reel",
      url: "https://www.instagram.com/reel/DeJJOHyj0MV/?utm_source=ig_web_copy_link&rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
    {
      id: "reel-03",
      type: "reel",
      url: "https://www.instagram.com/reel/DUTZpX9jTFP/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    },
  ],
};
