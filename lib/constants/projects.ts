import type { Project } from "@/types";

export const PROJECT_CATEGORIES = [
  { id: "all" as const, label: "All" },
  { id: "indoor" as const, label: "Indoor" },
  { id: "outdoor" as const, label: "Outdoor" },
  { id: "stage" as const, label: "Stage" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "P2.5 Indoor LED Wall",
    subtitle: "Corporate headquarters — immersive lobby experience",
    category: "indoor",
    size: "60 SQM",
    featured: true,
    span: "large",
    image: "/images/projects/indoor-wall.jpg",
  },
  {
    id: "2",
    title: "Retail Display",
    subtitle: "Flagship store — dynamic product showcase",
    category: "indoor",
    span: "small",
    image: "/images/projects/retail-display.jpg",
  },
  {
    id: "3",
    title: "Festival Stage",
    subtitle: "Outdoor concert — 4K resolution main screen",
    category: "stage",
    span: "medium",
    image: "/images/projects/festival-stage.jpg",
  },
  {
    id: "4",
    title: "Conference Center",
    subtitle: "Multi-panel setup with live streaming integration",
    category: "indoor",
    span: "small",
    image: "/images/projects/conference.jpg",
  },
  {
    id: "5",
    title: "Billboard Network",
    subtitle: "High-brightness outdoor advertising displays",
    category: "outdoor",
    span: "medium",
    image: "/images/projects/billboard.jpg",
  },
  {
    id: "6",
    title: "Arena Tour",
    subtitle: "Modular rental rig for international tour",
    category: "stage",
    span: "small",
    image: "/images/projects/arena-tour.jpg",
  },
];
