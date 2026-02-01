
export enum ProjectCategory {
  CREATIVE = 'Creative & Media',
  DESIGN = 'Design',
  TECH = 'Tech & Dev',
  CLOUD = 'Cloud & Infrastructure',
  GROWTH = 'Growth'
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
  published: boolean;
  createdAt: string;
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
  role: 'admin' | 'visitor';
}
