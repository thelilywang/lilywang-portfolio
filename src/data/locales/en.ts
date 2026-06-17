import type {
  PersonalInfo,
  AboutData,
  ExperienceItem,
  Project,
  SkillsData,
  Highlight,
} from '@/types/resume';

// English locale — to be filled in when multi-language support is implemented

export const personalInfo: PersonalInfo = {
  name: 'Lily Wang',
  title: 'Software Product Manager',
  intro: '',
  email: 'yuting.lily.wang@gmail.com',
  phone: '',
  location: 'Taipei, Taiwan',
  photo: '/profile-photo.jpg',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/lily-yuting-wang',
    github: 'https://github.com/thelilywang',
    medium: 'https://1zhi-lily.medium.com',
  },
};

export const aboutData: AboutData = {
  bio: [],
  education: [],
  certifications: [],
  interests: [],
};

export const experienceData: ExperienceItem[] = [];

export const projectsData: Project[] = [];

export const skillsData: SkillsData = {
  productSkills: [],
  methodologies: [],
  technicalSkills: [],
  softSkills: [],
  languages: [],
};

export const highlightsData: Highlight[] = [];

export const contactNote = 'This is a demo form.';
