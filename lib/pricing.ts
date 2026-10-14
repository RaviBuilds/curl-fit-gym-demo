import type { PricingConfiguration } from "./types";

/**
 * Master pricing/membership data — the single source of truth for Section 06.
 *
 * PURE FRONTEND: there is no CMS, database, API or backend pricing source.
 * Everything the pricing register renders is authored here; the component in
 * components/sections/Membership.tsx consumes this verbatim and never hardcodes
 * a price, name, duration, label or CTA. To re-price the site for a real gym,
 * edit ONLY this file.
 *
 * Do not add discounts, savings, "best value" / "most popular" tags, urgency,
 * scarcity or guarantees — none of those exist in this contract by design.
 *
 * PRICE STATUS
 *   "exact"   -> render the numeric `price`, INR-formatted.
 *   "contact" -> render `contactLabel` ("Consult management") instead of an
 *                amount; `price` may be omitted.
 *   "hidden"  -> the entry does not render publicly at all.
 * Change a single plan's `priceStatus` to move it between these states without
 * touching the component.
 */
/**
 * CURL FIT GYM pricing/membership data — Section 06.
 *
 * TEMPLATE DEMO PRICING PRESERVED (prospect-demo Cases B/C/E):
 *
 * docs/Gym-research.md PRICING: `publishes_pricing_publicly: false`. Every
 * plan (daily, weekly, monthly, quarterly, half-year, annual, special
 * training) and the joining fee are NOT_FOUND, and the research's only
 * price-related material is a Justdial reply ("share your number or call us,
 * will update you about package") plus a contextual local market range that
 * it explicitly says must NOT be used as Curl Fit pricing.
 *
 * No exact researched price exists for any plan, so every plan KEEPS THE
 * EXISTING TEMPLATE DEMO PRICE. These amounts are demonstration values only —
 * none is a verified Curl Fit Gym price, and the owner must supply real rates
 * before final-client production. The FAQ states that the gym has not
 * published official fees.
 *
 * No "Consult management" state is used; all plans stay `priceStatus:
 * "exact"` so the pricing cards remain visible. The festival offer engine
 * (lib/festival-offers.ts) references the `half-year` and `annual` plan IDs
 * below — do not rename those IDs. No second pricing or offer calculation
 * exists; the engine derives every discounted amount from these prices.
 */export const pricing: PricingConfiguration = {
  enabled: true,
  currency: "INR",
  locale: "en-IN",
  eyebrow: "Membership / Pricing",
  index: "06",
  headlineLines: ["Train on", "your terms."],
  accentLastLine: true,
  deck: "Flexible day passes and memberships for every commitment level. Reach out on WhatsApp or by phone and the team will get you started.",
  contactLabel: "Consult management",
  specialLabel: "Special training",
  plans: [
    {
      id: "daily",
      name: "Daily Pass",
      duration: "1 Day",
      term: "One day",
      price: 300,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "weekly",
      name: "Weekly Pass",
      duration: "1 Week",
      term: "One week",
      price: 1000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "monthly",
      name: "1 Month",
      duration: "1 Month",
      term: "Per month",
      price: 2500,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "quarterly",
      name: "3 Months",
      duration: "3 Months",
      term: "Billed once",
      price: 6000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "half-year",
      name: "6 Months",
      duration: "6 Months",
      term: "Billed once",
      price: 10000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "annual",
      name: "1 Year",
      duration: "12 Months",
      term: "Billed once",
      price: 18000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
  ],
  special: {
    id: "special-training",
    name: "Personal Coaching",
    duration: "1 Month",
    term: "Per month",
    price: 8000,
    priceStatus: "exact",
    description:
      "One-on-one personal training and dedicated trainer guidance, programmed around your goals.",
    ctaLabel: "Enquire",
  },
};
