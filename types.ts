
export interface Project {
  title: string;
  tech: string[];
  description: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
