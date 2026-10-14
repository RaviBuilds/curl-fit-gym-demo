import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * CURL FIT GYM — 12 branch photographs under
 * public/assets/gallery/curl-fit-gym-banjara-hills-gallery-<subject>.jpg.
 * Alt text describes only what is visible in each frame. Several frames carry
 * a directory-site watermark, so the operator should replace them in place
 * with owner-supplied photography; filenames and this file then stay
 * unchanged. Re-check each alt against the frame when a file is replaced.
 *
 * ORDER is editorial: functional floor, strength machines, lower body, studio,
 * then cardio.
 *
 * No claim, count, award or superlative is encoded here.
 */
const GALLERY = "/assets/gallery/curl-fit-gym-banjara-hills-gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}-functional-turf-lane.jpg`,
    alt: "Functional training lane with a turf strip, battle ropes and a rig at Curl Fit Gym, Banjara Hills",
  },
  {
    src: `${GALLERY}-plate-loaded-row-machine.jpg`,
    alt: "Plate-loaded row machine on the strength floor at Curl Fit Gym, Banjara Hills",
  },
  {
    src: `${GALLERY}-plate-loaded-shoulder-press.jpg`,
    alt: "Plate-loaded shoulder press machine beside a wall graphic at Curl Fit Gym, Banjara Hills",
  },
  {
    src: `${GALLERY}-leg-press-machine.jpg`,
    alt: "Plate-loaded leg press machine on the training floor at Curl Fit Gym, Banjara Hills",
  },
  {
    src: `${GALLERY}-angled-leg-press-machine.jpg`,
    alt: "Angled plate-loaded leg press with a padded seat at Curl Fit Gym, Banjara Hills",
  },
  {
    src: `${GALLERY}-machine-station-window-side.jpg`,
    alt: "Weight machine station beside the windows at Curl Fit Gym, Banjara Hills",
  },
  {
    src: `${GALLERY}-seated-machine-turf-edge.jpg`,
    alt: "Seated plate-loaded machine next to a turf area at Curl Fit Gym, Banjara Hills",
  },
  {
    src: `${GALLERY}-functional-rig-ladder.jpg`,
    alt: "Functional rig with a wall ladder and rebounder at Curl Fit Gym, Banjara Hills",
  },
  {
    src: `${GALLERY}-functional-rig-equipment.jpg`,
    alt: "Functional rig with medicine balls, a rebounder and monkey bars at Curl Fit Gym, Banjara Hills",
  },
  {
    src: `${GALLERY}-functional-turf-low-angle.jpg`,
    alt: "Low-angle view of the turf lane and functional rig at Curl Fit Gym, Banjara Hills",
  },
  {
    src: `${GALLERY}-punching-bag-studio.jpg`,
    alt: "Studio space with hanging punching bags and exercise balls at Curl Fit Gym, Banjara Hills",
  },
  {
    src: `${GALLERY}-cardio-area.jpg`,
    alt: "Cardio area with an elliptical cross-trainer and two stationary cycles at Curl Fit Gym, Banjara Hills",
  },
];
