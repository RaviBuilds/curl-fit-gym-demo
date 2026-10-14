import type { AboutConfiguration, BusinessHours } from "./types";

/**
 * Section 01 — facility / training-floor story content.
 *
 * Customizable per gym (labels, image, attributes, headline). The narrative
 * paragraph is deliberately NOT duplicated here: Section 01 renders
 * `business.description`, so the facility description has exactly one source
 * of truth.
 *
 * Source-First rules that apply to this file:
 * - A zone or attribute with `verified: false` does not render. Leave it in
 *   the file as documentation of what was checked and found absent.
 * - Never add a claim, statistic, equipment count, award or superlative here
 *   to make the section look fuller. The composition carries the density.
 *
 * CURL FIT GYM — populated from docs/Gym-research.md (ABOUT.zones,
 * ABOUT.attributes). Everything below is PUBLICLY_REPORTED (Justdial / FITPASS
 * / LyfSkills) and needs owner verification before final-client production.
 * The research supplies NO station counts, floor plan, dimensions or equipment
 * inventory beyond the types of cardio machine listed, so no metric is
 * authored.
 *
 * Not rendered (checked, not documented): the functional-training zone
 * ("no clearly confirmed dedicated functional zone at Banjara Hills") and the
 * clean/well-maintained attribute (INFERRED from review themes, with one
 * contrary FITPASS comment), both kept below with `verified: false`. Parking,
 * accessibility and payment methods are NOT_FOUND and are not listed.
 */
export const aboutConfiguration: AboutConfiguration = {
  index: "01",
  eyebrow: "About the gym",
  headlineLines: ["The floor behind", "the brand."],
  accentLastLine: true,
  image: {
    src: "/assets/about/curl-fit-gym-banjara-hills-about-gym-interior.jpg",
    alt: "Reception area and glass entrance to the training floor at Curl Fit Gym in Banjara Hills, Hyderabad",
  },
  imageLabel: "Training floor",
  frameLabel: "Facility",
  zonesLabel: "Training environment",
  attributesLabel: "Floor & support",
  scheduleLabel: "Opening schedule",
  zones: [
    {
      id: "strength",
      label: "Strength training",
      detail: "Strength area with free weights and resistance equipment.",
      icon: "strength",
      verified: true,
    },
    {
      id: "cardio",
      label: "Cardio zone",
      detail: "Cardio zone with treadmills, elliptical cross-trainers and stationary cycles.",
      icon: "cardio",
      verified: true,
    },
    {
      id: "group-training",
      label: "Group training",
      detail: "Zumba, aerobics and kickboxing are listed group offerings.",
      icon: "floor",
      verified: true,
    },
    {
      id: "recovery",
      label: "Steam room",
      detail: "A steam room is reported at the branch.",
      icon: "floor",
      verified: true,
    },
    // No clearly confirmed dedicated functional zone at the Banjara Hills
    // branch in the research — kept as the record of what was checked.
    {
      id: "functional",
      label: "Functional training",
      detail: "Dedicated functional training area.",
      icon: "equipment",
      verified: false,
    },
  ],
  attributes: [
    { id: "changing-rooms", label: "Changing areas and restrooms", verified: true },
    // INFERRED from review themes (and one FITPASS comment asking for better
    // cleanliness), not a documented facility fact — never rendered.
    { id: "clean", label: "Clean, well-maintained gym", verified: false },
  ],
  showSchedule: true,
};

/** One grouped opening window, e.g. `Mon–Fri / 05:00 AM – 11:00 PM`. */
export interface ScheduleWindow {
  label: string;
  value: string;
}

/**
 * Beyond this many distinct windows the readout stops being a compact
 * technical module and starts being a timetable, so Section 01 renders
 * nothing and the full hours stay with the location section instead.
 */
const MAX_SCHEDULE_GROUPS = 3;

function shortDay(day: string): string {
  return day.trim().slice(0, 3);
}

/**
 * Collapse a week of opening hours into consecutive day ranges that share the
 * same open/close window. Derived, never authored: the caller passes
 * `business.hours`, so Section 01 can only ever show hours that already exist
 * in lib/business.ts (and therefore in the LocalBusiness structured data) —
 * it cannot invent a schedule. Hours are taken as an explicit argument rather
 * than imported here so this module stays pure and directly testable.
 */
export function scheduleWindows(hours: BusinessHours[]): ScheduleWindow[] {
  if (hours.length === 0) return [];

  const groups: { days: string[]; open: string; close: string }[] = [];

  for (const entry of hours) {
    if (!entry.day || !entry.open || !entry.close) return [];
    const current = groups[groups.length - 1];
    if (current && current.open === entry.open && current.close === entry.close) {
      current.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], open: entry.open, close: entry.close });
    }
  }

  if (groups.length > MAX_SCHEDULE_GROUPS) return [];

  return groups.map((group) => ({
    label:
      group.days.length === 1
        ? shortDay(group.days[0])
        : `${shortDay(group.days[0])}\u2013${shortDay(group.days[group.days.length - 1])}`,
    value: `${group.open} \u2013 ${group.close}`,
  }));
}
