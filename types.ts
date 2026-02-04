export enum ProjectCategory {
  TECH = "Technology & Development",
  MEDIA = "Creative & Media",
  DESIGN = "Design Systems",
  CLOUD = "Cloud & Automations",
  GROWTH = "Marketing & Analytics",
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  technologies: string[];
  imageUrl: string;
  videoUrl?: string; // Added: Optional for YouTube/Instagram links
  published: boolean;
  createdAt: string; // Added: For system tracking
  updatedAt?: string; // Added: For modification tracking
}

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface User {
  id: string;
  email: string;
  role: "admin" | "visitor";
}
