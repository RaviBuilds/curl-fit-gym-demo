import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * CURL FIT GYM (Banjara Hills, Hyderabad) — populated from
 * docs/Gym-research.md. Every contact, address and hours field below is
 * PUBLICLY_REPORTED (IDBF / Justdial / Google Business Profile as cited by the
 * research); owner verification is required before final-client production.
 *
 * SCOPE: this is the Banjara Hills branch only. Vignan Nagar and Bangalore
 * details in the research are not imported.
 *
 * HOURS — Monday–Saturday 06:00 AM – 10:00 PM is consistent across Google
 * Business Profile and Justdial. SUNDAY IS A DOCUMENTED SOURCE CONFLICT
 * (Google: closed; Justdial: 07:00–14:00; LyfSkills: 07:00–12:00; FITPASS:
 * 00:00–23:30, flagged as a likely platform default). The research says not to
 * publish Sunday hours until management confirms them, so no Sunday entry is
 * written. Location, About and the LocalBusiness structured data all derive
 * from this array, so omitting the day omits it everywhere.
 *
 * TAGLINE: the research found no official tagline (NOT_FOUND). The required
 * field carries the factual business category instead of an invented slogan.
 *
 * EMAIL / WEBSITE: not found. `email` is omitted.
 *
 * mapUrl: the research supplies no direct Google Maps / Place URL, latitude or
 * longitude. This is the standard Google Maps search-by-name-and-address URL
 * built from the researched address text. No Place ID or coordinates have been
 * invented.
 */
export const business: Business = {
  name: "Curl Fit Gym",
  tagline: "Gym & Fitness Centre in Banjara Hills",
  description:
    "Curl Fit Gym is a gym and fitness centre in Banjara Hills, Hyderabad, with strength and cardio training, personal training, group fitness including Zumba, aerobics and kickboxing, and a steam room.",
  phone: "+917799000815",
  whatsapp: {
    number: "+917799000815",
    message: "Hi, I'd like to know more about membership and training at Curl Fit Gym, Banjara Hills.",
  },
  email: undefined,
  address: {
    addressLine: "5th Floor, 8-2, No:4, 413/B Road",
    locality: "Banjara Hills",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500034",
    landmark: "Near Saritha Apartment",
  },
  hours: [
    { day: "Monday", open: "06:00 AM", close: "10:00 PM" },
    { day: "Tuesday", open: "06:00 AM", close: "10:00 PM" },
    { day: "Wednesday", open: "06:00 AM", close: "10:00 PM" },
    { day: "Thursday", open: "06:00 AM", close: "10:00 PM" },
    { day: "Friday", open: "06:00 AM", close: "10:00 PM" },
    { day: "Saturday", open: "06:00 AM", close: "10:00 PM" },
    // Sunday intentionally omitted — conflicting sources (see note above).
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Curl+Fit+Gym+5th+Floor+8-2+No+4+413%2FB+Road+Saritha+Apartment+Banjara+Hills+Hyderabad+500034",
  // Prompt A — PRIMARY brand colour "Electric Cyan" #00CEFD. The authentic hex
  // is entered here exactly once and is never altered; app/globals.css derives
  // every variant (hover, active, soft, border, UI fill) from it, and
  // lib/color.ts picks the text colour used on a primary fill.
  accentColor: "#00CEFD",
  // Prompt A — SECONDARY brand colour #F4C400 (manual secondary supplied in
  // Prompt A; the payload's name/RGB/HSL fields were left to Prompt B). Derived
  // variants and the light-surface ink are computed in app/globals.css.
  secondaryColor: "#F4C400",
};
