export type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;
  status: 'concept' | 'published';
  summary: string;
};

export const projects: Project[] = [];
