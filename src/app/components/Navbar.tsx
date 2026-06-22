'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';

export default function Navbar() {
  const t = useTranslations('nav');
  const { resumeData, toggleLocale, locale } = useLocaleContext();
  const { personalInfo } = resumeData;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {personalInfo.name}
        </Link>

        <div className={styles.links}>
          <Link href="/" className={styles.link}>{t('home')}</Link>
          <Link href="/about" className={styles.link}>{t('about')}</Link>
          <Link href="/experience" className={styles.link}>{t('experience')}</Link>
          <Link href="/projects" className={styles.link}>{t('projects')}</Link>
          <Link href="/blog" className={styles.link}>{t('blog')}</Link>
          <Link href="/skills" className={styles.link}>{t('skills')}</Link>
          <Link href="/contact" className={styles.link}>{t('contact')}</Link>
          <button
            onClick={toggleLocale}
            className={styles.langButton}
            aria-label={locale === 'zh-TW' ? '切換語言' : 'Switch language'}
          >
            {locale === 'zh-TW' ? 'EN' : '中文'}
          </button>
        </div>
      </div>
    </nav>
  );
}
