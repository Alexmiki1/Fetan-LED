import type { StatItem } from "@/types";

export const HERO_STATS = {
  sales: { value: "50+", label: "Installations" },
  rentals: { value: "500+", label: "Events Delivered" },
} as const;

export const STATS_BAR: StatItem[] = [
  { value: "60 m²", label: "Largest Installation" },
  { value: "P1.25", label: "Smallest Pixel Pitch" },
  { value: "5000", label: "LED Modules in Stock" },
  { value: "24H", label: "Maintenance Response" },
];
