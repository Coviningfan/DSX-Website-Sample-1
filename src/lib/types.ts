export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  excerpt: string;
  heroImage: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  tags: string[];
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}
