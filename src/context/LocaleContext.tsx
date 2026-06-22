'use client';

import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import type { Locale } from '@/types/resume';
import * as zhTW from '@/data/locales/zh-TW';
import * as en from '@/data/locales/en';
import zhTWMessages from '../../messages/zh-TW.json';
import enMessages from '../../messages/en.json';

const STORAGE_KEY = 'portfolio-locale';
const DEFAULT_LOCALE: Locale = 'zh-TW';

type ResumeData = typeof zhTW | typeof en;

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  resumeData: ResumeData;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE;
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    return stored === 'en' || stored === 'zh-TW' ? stored : DEFAULT_LOCALE;
  });

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const toggleLocale = () => setLocale(locale === 'zh-TW' ? 'en' : 'zh-TW');

  const resumeData: ResumeData = useMemo(
    () => (locale === 'zh-TW' ? zhTW : en),
    [locale]
  );

  const messages = locale === 'zh-TW' ? zhTWMessages : enMessages;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale, resumeData }}>
      <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Taipei">
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocaleContext must be used inside LocaleProvider');
  return ctx;
}
