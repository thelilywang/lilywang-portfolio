'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import styles from './Navbar.module.css';

export default function ThemeToggle() {
  const { resolved, setMode, mounted } = useTheme();

  return (
    <button
      onClick={() => setMode(resolved === 'dark' ? 'light' : 'dark')}
      className={styles.iconButton}
      aria-label="Toggle dark mode"
    >
      {mounted && resolved === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
