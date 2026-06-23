'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useTranslations } from 'next-intl';
import { useLocaleContext } from "@/context/LocaleContext";

export default function Home() {
  const t = useTranslations('home');
  const { resumeData } = useLocaleContext();
  const { personalInfo, highlightsData, sideProjectsData } = resumeData;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <h2 className={styles.title}>{personalInfo.title}</h2>
            <p className={styles.intro}>{personalInfo.intro}</p>
            <div className={styles.ctas}>
              <Link href="/contact" className={styles.primary}>{t('cta_contact')}</Link>
              <Link href="/projects" className={styles.secondary}>{t('cta_portfolio')}</Link>
            </div>
          </div>
          <div className={styles.heroPhoto}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/ProfilePic.jpg`}
              alt={personalInfo.name}
              fill
              className={styles.heroPhotoImg}
              priority
            />
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

        <div className={styles.sideProjects}>
          <h2>{t('side_projects_heading')}</h2>
          <div className={styles.sideProjectsGrid}>
            {sideProjectsData.map((project, index) => (
              <div className={styles.sideProjectCard} key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.sideProjectLink}>
                    View →
                  </a>
                )}
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
