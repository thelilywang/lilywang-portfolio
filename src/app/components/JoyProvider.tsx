'use client';

import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  fontFamily: {
    display: "'Fraunces', serif",
    body: "'Plus Jakarta Sans', 'Noto Sans TC', var(--joy-fontFamily-fallback)",
  },
});

export default function JoyProvider({ children }: { children: React.ReactNode }) {
  return (
    <CssVarsProvider theme={theme} defaultMode="system" modeStorageKey="portfolio-color-mode">
      {children}
    </CssVarsProvider>
  );
}
