'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const t = useTranslations('nav');
  const { resumeData, toggleLocale, locale } = useLocaleContext();
  const { personalInfo } = resumeData;
  const pathname = usePathname();

  const [hidden, setHidden] = useState(false);
  const hiddenRef = useRef(false);
  const lastScrollY = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isPastTop = useRef(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sentinel = document.getElementById('scroll-sentinel');
    const io = new IntersectionObserver(([entry]) => {
      isPastTop.current = !entry.isIntersecting;
      if (entry.isIntersecting) setHidden(false);
    });
    if (sentinel) io.observe(sentinel);

    const updateNavOffset = (isHidden: boolean) => {
      const h = navRef.current?.offsetHeight ?? 0;
      const root = document.documentElement;
      root.style.setProperty('--navbar-height', `${h}px`);
      root.style.setProperty('--navbar-offset', isHidden ? '0px' : `${h}px`);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (!isPastTop.current) return;
        const y = window.scrollY;
        const nextHidden = y > lastScrollY.current;
        hiddenRef.current = nextHidden;
        setHidden(nextHidden);
        updateNavOffset(nextHidden);
        lastScrollY.current = y;
      });
    };

    // set initial offset after layout
    updateNavOffset(false);

    // re-measure when navbar height changes (font load, RWD reflow, etc.)
    const ro = new ResizeObserver(() => updateNavOffset(hiddenRef.current));
    if (navRef.current) ro.observe(navRef.current);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const navLink = (href: string, label: string) => {
    const isActive =
      pathname === href || (href !== '/' && pathname.startsWith(href + '/'));
    return (
      <Link href={href} className={`${styles.link} ${isActive ? styles.linkActive : ''}`}>
        {label}
      </Link>
    );
  };

  return (
    <nav ref={navRef} className={`${styles.navbar} ${hidden ? styles.navbarHidden : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {personalInfo.name}
        </Link>

        <div className={styles.links}>
          {navLink('/', t('home'))}
          {navLink('/about', t('about'))}
          {navLink('/projects', t('projects'))}
          {navLink('/blog', t('blog'))}
          {navLink('/contact', t('contact'))}
        </div>

        <div className={styles.controls}>
          <button
            onClick={toggleLocale}
            className={styles.controlButton}
            aria-label={locale === 'zh-TW' ? '切換語言' : 'Switch language'}
          >
            {locale === 'zh-TW' ? 'EN' : '中文'}
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
