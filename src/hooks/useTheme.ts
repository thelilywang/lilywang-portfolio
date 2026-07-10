'use client';

import { useCallback, useEffect, useState } from 'react';

type Mode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'portfolio-color-mode';
const ATTR = 'data-joy-color-scheme';

function getSystemMode(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyMode(mode: Mode) {
  const resolved = mode === 'system' ? getSystemMode() : mode;
  document.documentElement.setAttribute(ATTR, resolved);
}

export function useTheme() {
  const [mode, setModeState] = useState<Mode>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Mode | null;
    setModeState(stored ?? 'system');
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyMode(mode);

    if (mode !== 'system') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyMode('system');
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [mode, mounted]);

  const setMode = useCallback((next: Mode) => {
    localStorage.setItem(STORAGE_KEY, next);
    setModeState(next);
  }, []);

  const resolved = mounted ? (mode === 'system' ? getSystemMode() : mode) : undefined;

  return { mode, resolved, setMode, mounted };
}
