import type { SpecProduct } from "@/types";

export const SPEC_PRODUCTS: SpecProduct[] = [
  {
    id: "p15",
    name: "P1.5",
    tagline: "Ultra-fine pitch for close-viewing environments",
    specs: [
      { label: "Pixel Pitch", value: "1.5 mm" },
      { label: "Resolution", value: "3840 × 2160" },
      { label: "Brightness", value: "800 nits" },
      { label: "Refresh Rate", value: "7680 Hz" },
      { label: "Cabinet Size", value: "600 × 337.5 mm" },
      { label: "Weight", value: "8.5 kg / panel" },
    ],
  },
  {
    id: "p25",
    name: "P2.5",
    tagline: "Versatile indoor solution for retail and corporate",
    specs: [
      { label: "Pixel Pitch", value: "2.5 mm" },
      { label: "Resolution", value: "2560 × 1440" },
      { label: "Brightness", value: "1200 nits" },
      { label: "Refresh Rate", value: "3840 Hz" },
      { label: "Cabinet Size", value: "500 × 500 mm" },
      { label: "Weight", value: "7.2 kg / panel" },
    ],
  },
  {
    id: "p391",
    name: "P3.91",
    tagline: "High-impact outdoor and stage rental standard",
    specs: [
      { label: "Pixel Pitch", value: "3.91 mm" },
      { label: "Resolution", value: "1920 × 1080" },
      { label: "Brightness", value: "5500 nits" },
      { label: "Refresh Rate", value: "3840 Hz" },
      { label: "Cabinet Size", value: "500 × 500 mm" },
      { label: "Weight", value: "9.8 kg / panel" },
    ],
  },
];
