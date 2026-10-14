import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * CURL FIT GYM — from docs/Gym-research.md (FAQ.*). Only entries the research
 * answers are used. Parking, payment methods and wheelchair accessibility have
 * `answer: null` / NOT_FOUND and are deliberately NOT created. The pricing
 * answer reflects the research's PRICING section (exact fees not publicly
 * disclosed; the gym's public reply is to call for package details). No
 * cancellation / freeze / joining-fee / trial / guest / refund FAQ is added
 * because the research supports none of them.
 *
 * The hours answer states Monday–Saturday only; Sunday is a documented
 * CONFLICTING_SOURCES item and is not published (see lib/business.ts).
 *
 * Every answer is PUBLICLY_REPORTED, so wording is "listed / reported" and the
 * owner should verify before final-client production.
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "Where is Curl Fit Gym located?",
    answer:
      "5th Floor, 8-2, No:4, 413/B Road, near Saritha Apartment, Banjara Hills, Hyderabad, Telangana 500034.",
  },
  {
    id: "02",
    question: "What are the opening hours?",
    answer:
      "Public listings show 6:00 AM to 10:00 PM, Monday to Saturday. Call or message the team to confirm Sunday timings.",
  },
  {
    id: "03",
    question: "What training services are listed?",
    answer:
      "Gym workouts and strength training, cardio training, personal training, body tone and conditioning, Zumba, aerobics, kickboxing, women's weight-loss programs and diet advice. Ask the team about current availability and class schedules.",
  },
  {
    id: "04",
    question: "Does the gym have a steam room?",
    answer:
      "A steam room is reported at the Banjara Hills branch. Confirm current availability with the team.",
  },
  {
    id: "05",
    question: "Is personal training available?",
    answer:
      "Personal training is listed. Ask the team about trainer availability, session lengths and packages.",
  },
  {
    id: "06",
    question: "Are diet or nutrition consultations available?",
    answer:
      "Diet advice and nutrition guidance are listed. Ask the team about the scope and availability.",
  },
  {
    id: "07",
    question: "What are the current membership prices?",
    answer:
      "Confirm current plans and rates with the team on WhatsApp or by phone. The gym has not published official membership fees.",
  },
];
