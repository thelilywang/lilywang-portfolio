import type { Locale } from '@/types/resume';

export async function getResumeData(locale: Locale = 'zh-TW') {
  switch (locale) {
    case 'en':
      return import('./locales/en');
    case 'zh-TW':
    default:
      return import('./locales/zh-TW');
  }
}
