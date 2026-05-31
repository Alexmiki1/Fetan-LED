import type { QuoteStep } from "@/types";

export const QUOTE_STEPS: QuoteStep[] = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Share your vision and requirements. Our team assesses your space and objectives.",
  },
  {
    step: "02",
    title: "Proposal",
    description:
      "Receive a detailed proposal with specs, timeline, and transparent pricing.",
  },
  {
    step: "03",
    title: "Installation",
    description:
      "Expert installation and calibration by certified technicians.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "Ongoing maintenance and 72-hour response for peace of mind.",
  },
];

export const PROJECT_TYPES = [
  "Corporate Lobby",
  "Retail Store",
  "Outdoor Billboard",
  "Concert / Festival",
  "Conference / Event",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000+",
] as const;

export const SERVICE_OPTIONS = [
  "Installation",
  "Maintenance",
  "Custom Design",
  "Content Management",
  "Rental Setup",
  "Technical Support",
] as const;
