'use client';

import { useEffect } from 'react';
import { LocaleProvider } from '@/context/LocaleContext';
import { initAnalytics } from '@/lib/firebase';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <LocaleProvider>
      {children}
    </LocaleProvider>
  );
}
