export type ProjectCategory = "all" | "indoor" | "outdoor" | "stage";

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  subtitle: string;
  size?: string;
  featured?: boolean;
  span?: "large" | "medium" | "small";
   image?: string;
}

export interface SpecField {
  label: string;
  value: string;
}

export interface SpecProduct {
  id: string;
  name: string;
  tagline: string;
  specs: SpecField[];
}

export interface QuoteStep {
  step: string;
  title: string;
  description: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}
