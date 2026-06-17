// Re-exports from the zh-TW locale.
// All existing imports (import { ... } from '@/data/resumeData') continue to work unchanged.
// To add content in a new language, create src/data/locales/<locale>.ts
// and use getResumeData(locale) from src/data/getResumeData.ts.
export {
  personalInfo,
  aboutData,
  experienceData,
  projectsData,
  skillsData,
  highlightsData,
  contactNote,
} from './locales/zh-TW';
