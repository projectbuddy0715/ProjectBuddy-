
export type Page = 'home' | 'gallery' | 'project-ideas' | 'about' | 'pricing' | 'faq' | 'contact';

export interface Project {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  initials: string;
  color: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface ProjectSuggestion {
    title: string;
    description: string;
}