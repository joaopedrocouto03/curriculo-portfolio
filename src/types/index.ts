export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  curriculoUrl?: string;
}

export interface AcademicExperience {
  id: string;
  course: string;
  institution: string;
  period: string;
  status: "Concluído" | "Em andamento" | "Trancado";
  description: string;
  skills: string[];
  certificateUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  hours?: number;
}

export interface ProfessionalExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  activities: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  deployUrl?: string;
  featured?: boolean;
  image?: string;
}

export interface TechModuleInfo {
  name: string;
  category: "Framework & Core" | "Linguagem" | "Estilização" | "Animação & UI" | "Ferramentas & Qualidade" | "APIs & Deploy";
  version: string;
  description: string;
  purpose: string;
  iconName: string;
  officialDocs: string;
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  phone?: string;
  githubUsername: string;
  socials: SocialLinks;
  avatarUrl: string;
  academic: AcademicExperience[];
  certifications: Certification[];
  professional: ProfessionalExperience[];
  projects: Project[];
  skillsByCategory: {
    category: string;
    items: string[];
  }[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
}

export interface DailyQuote {
  quote: string;
  author: string;
  category?: string;
}
