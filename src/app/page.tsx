'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useTranslations } from 'next-intl';
import { useLocaleContext } from "@/context/LocaleContext";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import SectionHeading from "@/app/components/SectionHeading";
import { emphasizeMetrics } from "@/lib/emphasizeMetrics";

const TAG_CLASS_MAP: Record<string, string> = {
  core: 'tagCore',
  data: 'tagData',
  impact: 'tagImpact',
  scale: 'tagScale',
  differentiator: 'tagDiff',
};

export default function Home() {
  const t = useTranslations('home');
  const { resumeData } = useLocaleContext();
  const { personalInfo, highlightsData, sideProjectsData } = resumeData;
  const fadeRef = useScrollFadeIn(0.12);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <p className={styles.title}>{personalInfo.title}</p>
            <p className={styles.intro}>{personalInfo.intro}</p>
            <div className={styles.ctas}>
              <Link href="/projects" className={styles.primary}>{t('cta_portfolio')}</Link>
              <Link href="/contact" className={styles.secondary}>{t('cta_contact')}</Link>
            </div>
          </div>
          <div className={styles.heroPhotoWrap}>
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
        </div>

        <div
          className={`${styles.highlights} ${styles.fadeInUp}`}
          ref={fadeRef}
        >
          <SectionHeading
            kicker={t('highlights_label')}
            title={t('highlights_heading')}
            className={styles.highlightsHeader}
          />
          <div className={styles.highlightsBento}>
            <div className={styles.highlightsTopRow}>
              {highlightsData.slice(0, 2).map((highlight, index) => {
                const isAI = highlight.tagKey === 'ai';
                const tagClass = highlight.tagKey ? TAG_CLASS_MAP[highlight.tagKey] : undefined;
                return (
                  <div
                    className={`${styles.highlightCard} ${styles.highlightCardLarge} ${styles.fadeInUp}${isAI ? ` ${styles.highlightCardAI}` : ''}`}
                    style={{ transitionDelay: `${Math.min(index * 0.1, 0.4)}s` }}
                    ref={fadeRef}
                    key={index}
                  >
                    <span className={`${styles.highlightTag}${isAI ? ` ${styles.highlightTagAI}` : tagClass ? ` ${styles[tagClass]}` : ''}`}>{highlight.tag}</span>
                    <h3 className={isAI ? styles.highlightTitleAI : ''}>{highlight.title}</h3>
                    <p>{emphasizeMetrics(highlight.description, styles.metric)}</p>
                    {highlight.detail && <p className={styles.highlightDetail}>{highlight.detail}</p>}
                  </div>
                );
              })}
            </div>
            <div className={styles.highlightsBottomRow}>
              {highlightsData.slice(2).map((highlight, index) => {
                const isDiff = highlight.tagKey === 'differentiator';
                const tagClass = highlight.tagKey ? TAG_CLASS_MAP[highlight.tagKey] : undefined;
                return (
                  <div
                    className={`${styles.highlightCard} ${styles.highlightCardSmall} ${styles.fadeInUp}${isDiff ? ` ${styles.highlightCardDiff}` : ''}`}
                    style={{ transitionDelay: `${Math.min((index + 2) * 0.1, 0.4)}s` }}
                    ref={fadeRef}
                    key={index}
                  >
                    <span className={`${styles.highlightTag}${tagClass ? ` ${styles[tagClass]}` : ''}`}>{highlight.tag}</span>
                    <h3>{highlight.title}</h3>
                    <p>{emphasizeMetrics(highlight.description, styles.metric)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`${styles.sideProjects} ${styles.fadeInUp}`} ref={fadeRef}>
          <SectionHeading
            kicker={t('side_projects_label')}
            title={t('side_projects_heading')}
            className={styles.sideProjectsHeader}
          />
          <div className={styles.sideProjectsGrid}>
            {sideProjectsData.filter(p => p.href).map((project, index) => (
              <div className={`${styles.sideProjectCard} ${styles.fadeInUp}`} ref={fadeRef} key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.tech && (
                  <div className={styles.sideProjectTech}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.sideProjectChip}>{tech}</span>
                    ))}
                  </div>
                )}
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.sideProjectLink}>
                    {t('side_projects_view')} →
                  </a>
                )}
              </div>
            ))}
            <Link href="/projects#side-projects" className={`${styles.sideProjectCard} ${styles.sideProjectMore} ${styles.fadeInUp}`} ref={fadeRef}>
              <span className={styles.sideProjectMoreIcon} aria-hidden="true">→</span>
              <span className={styles.sideProjectMoreLabel}>{t('side_projects_more')}</span>
              <span className={styles.sideProjectMoreSub}>{t('side_projects_more_sub')}</span>
            </Link>
          </div>
        </div>

        <div
          className={`${styles.quoteSection} ${styles.fadeInUp}`}
          ref={fadeRef}
        >
          <span className={styles.quoteMarks} aria-hidden="true">&ldquo;</span>
          <div className={styles.quoteBody}>
            <p className={styles.quoteText}>
              {t.rich('quote', {
                highlight: (chunks) => <span className={styles.quoteHighlight}>{chunks}</span>,
              })}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
