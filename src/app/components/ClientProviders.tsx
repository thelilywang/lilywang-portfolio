'use client';

import { LocaleProvider } from '@/context/LocaleContext';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      {children}
    </LocaleProvider>
  );
}
