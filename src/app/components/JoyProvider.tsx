'use client';

import { CssVarsProvider } from '@mui/joy/styles';

export default function JoyProvider({ children }: { children: React.ReactNode }) {
  return <CssVarsProvider>{children}</CssVarsProvider>;
}
