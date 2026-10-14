import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * CURL FIT GYM — the 9 programs in docs/Gym-research.md (PROGRAMS.*). Every
 * entry is PUBLICLY_REPORTED (Justdial / FITPASS / LyfSkills); owner
 * verification of current availability is required before final-client
 * production. Descriptions stay at what the listings state: no schedule,
 * trainer, price, outcome or health claim is added.
 *
 * Women's Weight Loss Programs carries a CONFLICTING_SOURCES flag in the
 * research (women-only vs. a program inside a mixed-gender gym). The copy
 * therefore says only that the program is listed and does not imply women-only
 * sessions or a restricted area.
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training` are
 * cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`, see
 * components/sections/trainingLoadout.ts). Do not rename them. Here
 * `conditioning` is carried by "Body Tone and Conditioning".
 *
 * Images occupy their final filenames (docs/MASTER-GYM-ASSET-CONTRACT.md).
 * Strength, cardio, kickboxing and conditioning use branch photographs from
 * the gallery set; the other five are TEMPORARY PLACEHOLDERS — the operator
 * replaces those files in place with owner-approved photography, no code
 * change.
 */
const ASSET = "/assets/programs/curl-fit-gym-banjara-hills-program";

export const services: Service[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    description:
      "Gym workouts and strength training on resistance and free-weight equipment.",
    icon: "strength",
    image: `${ASSET}-strength-training.jpg`,
    verified: true,
    ctaLabel: "Ask about strength training",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description:
      "One-on-one training with a coach. Ask the team about packages and trainer availability.",
    icon: "coaching",
    image: `${ASSET}-personal-training.jpg`,
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "Body Tone and Conditioning",
    description: "Conditioning and resistance-training work for general body tone.",
    icon: "equipment",
    image: `${ASSET}-body-tone-conditioning.jpg`,
    verified: true,
    ctaLabel: "Ask about conditioning",
    ctaHref: undefined,
  },
  {
    id: "cardio-training",
    name: "Cardiovascular Training",
    description:
      "A cardio zone with treadmills, elliptical cross-trainers and stationary cycles.",
    icon: "cardio",
    image: `${ASSET}-cardio-training.jpg`,
    verified: true,
    ctaLabel: "Ask about cardio training",
    ctaHref: undefined,
  },
  {
    id: "zumba",
    name: "Zumba",
    description: "Zumba dance-fitness classes. Ask the team for the current schedule.",
    icon: "cardio",
    image: `${ASSET}-zumba.jpg`,
    verified: true,
    ctaLabel: "Ask about Zumba",
    ctaHref: undefined,
  },
  {
    id: "aerobics",
    name: "Aerobics",
    description: "Group cardio classes. Ask the team for the current timetable.",
    icon: "cardio",
    image: `${ASSET}-aerobics.jpg`,
    verified: true,
    ctaLabel: "Ask about aerobics",
    ctaHref: undefined,
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    description: "Kickboxing classes. Ask the team about format and schedule.",
    icon: "equipment",
    image: `${ASSET}-kickboxing.jpg`,
    verified: true,
    ctaLabel: "Ask about kickboxing",
    ctaHref: undefined,
  },
  {
    id: "womens-weight-loss",
    name: "Women's Weight Loss Programs",
    description:
      "Weight-loss programs listed for women. Ask the team how sessions are run.",
    icon: "floor",
    image: `${ASSET}-womens-weight-loss.jpg`,
    verified: true,
    ctaLabel: "Ask about weight-loss programs",
    ctaHref: undefined,
  },
  {
    id: "nutrition-guidance",
    name: "Diet Advice and Nutrition Guidance",
    description:
      "Diet advice and nutrition guidance. Ask the team about scope and availability.",
    icon: "coaching",
    image: `${ASSET}-nutrition-guidance.jpg`,
    verified: true,
    ctaLabel: "Ask about nutrition guidance",
    ctaHref: undefined,
  },
];
