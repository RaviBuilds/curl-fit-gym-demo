import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us reasons. Mandatory section — always present.
 *
 * CONTENT RULE: this file states REASONS — how the services connect and what
 * sits behind them. It does not repeat opening hours or the full program list;
 * Section 01 (lib/about.ts) owns the facility and hours, Section 02
 * (lib/services.ts) owns individual programs.
 *
 * CURL FIT GYM — from docs/Gym-research.md (WHY_CHOOSE_US.*). These are
 * research-supported anchors, not approved advertising claims; the operator
 * should approve them before final-client production.
 *   - The Fitclub Academy listing: PUBLICLY_REPORTED, from TFA's own partner
 *     page ([S7]). The wording says "listed" and does not extend to any
 *     trainer's qualifications.
 *   - Steam room: PUBLICLY_REPORTED (LyfSkills [S5]); current access rules are
 *     unconfirmed.
 *   - Multiple formats: PUBLICLY_REPORTED service listings.
 *
 * Not used: "positive review themes" (INFERRED, with one contrary FITPASS
 * comment) and the women's weight-loss anchor (CONFLICTING_SOURCES on the
 * program's access policy).
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "A Fitclub Academy centre",
    description:
      "The Fitclub Academy lists this gym as its Hyderabad Training Centre.",
  },
  {
    title: "Train, then recover",
    description:
      "A steam room is reported alongside the strength and cardio floor.",
  },
  {
    title: "Several formats, one gym",
    description:
      "Strength, cardio, personal training and group classes in one facility.",
  },
];

/**
 * Section 03 composition data — "The Roof".
 *
 * A single accent-colour poster: the eyebrow, one headline, and the reasons
 * above as equal columns. The headline is built only from the reasons above
 * (training, recovery, one gym); it is never a superlative. A clone edits this
 * object and the array, never the composition.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  eyebrow: "Why choose us",
  headline: "Training and recovery. Under one roof.",
};
