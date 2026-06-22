'use client';

import Link from "next/link";
import styles from "./page.module.css";
import { useTranslations } from 'next-intl';
import { useLocaleContext } from "@/context/LocaleContext";

export default function Home() {
  const t = useTranslations('home');
  const { resumeData } = useLocaleContext();
  const { personalInfo, highlightsData } = resumeData;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.profileImage}>
            <div className={styles.imagePlaceholder}>
              <span>{t('photo_alt')}</span>
            </div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <h2 className={styles.title}>{personalInfo.title}</h2>
            <p className={styles.intro}>{personalInfo.intro}</p>
            <div className={styles.ctas}>
              <Link href="/contact" className={styles.primary}>{t('cta_contact')}</Link>
              <Link href="/projects" className={styles.secondary}>{t('cta_portfolio')}</Link>
            </div>
          </div>
        </div>

        <div className={styles.highlights}>
          <h2>{t('highlights_heading')}</h2>
          <div className={styles.highlightsGrid}>
            {highlightsData.map((highlight, index) => (
              <div className={styles.highlightCard} key={index}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.navigation}>
          <Link href="/about">{t('footer_about')}</Link>
          <Link href="/experience">{t('footer_experience')}</Link>
          <Link href="/projects">{t('footer_projects')}</Link>
          <Link href="/skills">{t('footer_skills')}</Link>
          <Link href="/contact">{t('footer_contact')}</Link>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} {personalInfo.name} • {personalInfo.title}
        </div>
      </footer>
    </div>
  );
}
