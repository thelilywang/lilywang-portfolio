'use client';

import { useColorScheme } from '@mui/joy/styles';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function ThemeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolved = mode === 'system' ? systemMode : mode;

  return (
    <button
      onClick={() => setMode(resolved === 'dark' ? 'light' : 'dark')}
      className={styles.iconButton}
      aria-label="Toggle dark mode"
    >
      {mounted ? (resolved === 'dark' ? '☀️' : '🌙') : '🌙'}
    </button>
  );
}
