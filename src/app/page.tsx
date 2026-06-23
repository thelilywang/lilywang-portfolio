'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import { useTranslations } from 'next-intl';
import { useLocaleContext } from "@/context/LocaleContext";

export default function Home() {
  const t = useTranslations('home');
  const { resumeData } = useLocaleContext();
  const { personalInfo, highlightsData } = resumeData;
  const fadeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const els = fadeRefs.current.filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <h2 className={styles.title}>{personalInfo.title}</h2>
            <p className={styles.intro}>{personalInfo.intro}</p>
            <div className={styles.ctas}>
              <Link href="/projects" className={styles.primary}>{t('cta_portfolio')}</Link>
              {/* TODO: replace href with actual resume file path e.g. /resume.pdf once uploaded to public/ */}
              <a href="#" download className={styles.secondary}>{t('cta_download')}</a>
            </div>
          </div>
          <div className={styles.heroPhoto}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ProfilePic.jpg`}
              alt={personalInfo.name}
              fill
              className={styles.heroPhotoImg}
              priority
            />
          </div>
        </div>

        <div
          className={`${styles.highlights} ${styles.fadeInUp}`}
          ref={el => { fadeRefs.current[0] = el; }}
        >
          <h2>{t('highlights_heading')}</h2>
          <div className={styles.highlightsGrid}>
            {highlightsData.map((highlight, index) => (
              <div
                className={`${styles.highlightCard} ${styles.fadeInUp}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                ref={el => { fadeRefs.current[1 + index] = el; }}
                key={index}
              >
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${styles.quoteSection} ${styles.fadeInUp}`}
          ref={el => { fadeRefs.current[10] = el; }}
        >
          <div className={styles.quoteBody}>
            <p className={styles.quoteText}>
              <span className={styles.quoteMarks} aria-hidden="true">&ldquo;</span>
              {t.rich('quote', {
                highlight: (chunks) => <span className={styles.quoteHighlight}>{chunks}</span>,
              })}
              <span className={styles.quoteMarks} aria-hidden="true">&rdquo;</span>
              <span className={styles.quoteDecorTail} aria-hidden="true">✨</span>
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.navigation}>
          <Link href="/about">{t('footer_about')}</Link>
          <Link href="/projects">{t('footer_projects')}</Link>
          <Link href="/blog">{t('footer_blog')}</Link>
          <Link href="/contact">{t('footer_contact')}</Link>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} {personalInfo.name} • Built with Next.js + Joy UI
        </div>
      </footer>
    </div>
  );
}
