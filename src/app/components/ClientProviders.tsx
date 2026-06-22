'use client';

import { LocaleProvider } from '@/context/LocaleContext';
import JoyProvider from './JoyProvider';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <JoyProvider>
        {children}
      </JoyProvider>
    </LocaleProvider>
  );
}
