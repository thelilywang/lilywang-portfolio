export interface SocialLinks {
  linkedin: string;
  github: string;
  medium: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  intro: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
  socialLinks: SocialLinks;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Certification {
  name: string;
  org: string;
  year: string;
  highlights?: string[];
}

export interface Interest {
  name: string;
  icon: string;
}

export interface AboutData {
  bio: string[];
  education: Education[];
  certifications: Certification[];
  interests: Interest[];
}

export interface ExperienceItem {
  period: string;
  company: string;
  position: string;
  description: string;
  achievements: string[];
  tags?: string[];
}

export interface ProjectResult {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  role: string;
  description: string;
  image: string;
  imagePlaceholder: string;
  tech: string[];
  results: ProjectResult[];
}

export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface Language {
  name: string;
  level: string;
}

export interface SkillsData {
  productSkills: Skill[];
  methodologies: Skill[];
  aiSkills: Skill[];
  technicalSkills: Skill[];
  softSkills: string[];
  languages: Language[];
}

export interface Highlight {
  title: string;
  description: string;
}

export interface SideProject {
  title: string;
  description: string;
  href: string;
}

export type Locale = 'zh-TW' | 'en';

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'code' | 'list';
  content: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  mediumUrl: string;
  tags: string[];
  content: BlogSection[];
}
