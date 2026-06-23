'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const t = useTranslations('nav');
  const { resumeData, toggleLocale, locale } = useLocaleContext();
  const { personalInfo } = resumeData;
  const pathname = usePathname();

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`${styles.link} ${pathname === href ? styles.linkActive : ''}`}
    >
      {label}
    </Link>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {personalInfo.name}
        </Link>

        <div className={styles.links}>
          {navLink('/', t('home'))}
          {navLink('/about', t('about'))}
          {navLink('/experience', t('experience'))}
          {navLink('/projects', t('projects'))}
          {navLink('/side-projects', t('side_projects'))}
          {navLink('/blog', t('blog'))}
          {navLink('/skills', t('skills'))}
          {navLink('/contact', t('contact'))}
          <button
            onClick={toggleLocale}
            className={styles.langButton}
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
