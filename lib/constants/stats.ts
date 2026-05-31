import type { StatItem } from "@/types";

export const HERO_STATS = {
  sales: { value: "200+", label: "Installations" },
  rentals: { value: "500+", label: "Events Delivered" },
} as const;

export const STATS_BAR: StatItem[] = [
  { value: "60 m²", label: "Largest Installation" },
  { value: "P1.5", label: "Smallest Pixel Pitch" },
  { value: "5000", label: "LED Modules in Stock" },
  { value: "72H", label: "Maintenance Response" },
];
