'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useTranslations } from 'next-intl';
import { useLocaleContext } from "@/context/LocaleContext";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import SectionHeading from "@/app/components/SectionHeading";

export default function Home() {
  const t = useTranslations('home');
  const { resumeData } = useLocaleContext();
  const { personalInfo, highlightsData } = resumeData;
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
              <a href="https://drive.google.com/uc?export=download&id=1tAVqQN55mZnHIf2LO5sdRodr-9_4yTGk" target="_blank" rel="noopener noreferrer" className={styles.secondary}>{t('cta_download')}</a>
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
          ref={fadeRef}
        >
          <SectionHeading
            kicker={t('highlights_label')}
            title={t('highlights_heading')}
            className={styles.highlightsHeader}
          />
          <div className={styles.highlightsBento}>
            <div className={styles.highlightsTopRow}>
              {highlightsData.slice(0, 2).map((highlight, index) => (
                <div
                  className={`${styles.highlightCard} ${styles.highlightCardLarge} ${styles.fadeInUp}${highlight.tag === 'AI' ? ` ${styles.highlightCardAI}` : ''}`}
                  style={{ transitionDelay: `${Math.min(index * 0.1, 0.4)}s` }}
                  ref={fadeRef}
                  key={index}
                >
                  <span className={`${styles.highlightTag}${highlight.tag === 'AI' ? ` ${styles.highlightTagAI}` : ''}`}>{highlight.tag}</span>
                  <h3 className={highlight.tag === 'AI' ? styles.highlightTitleAI : ''}>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                  {highlight.detail && <p className={styles.highlightDetail}>{highlight.detail}</p>}
                </div>
              ))}
            </div>
            <div className={styles.highlightsBottomRow}>
              {highlightsData.slice(2).map((highlight, index) => (
                <div
                  className={`${styles.highlightCard} ${styles.highlightCardSmall} ${styles.fadeInUp}${highlight.tag === 'DIFFERENTIATOR' || highlight.tag === '差異化優勢' ? ` ${styles.highlightCardDiff}` : ''}`}
                  style={{ transitionDelay: `${Math.min((index + 2) * 0.1, 0.4)}s` }}
                  ref={fadeRef}
                  key={index}
                >
                  <span className={styles.highlightTag}>{highlight.tag}</span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${styles.quoteSection} ${styles.fadeInUp}`}
          ref={fadeRef}
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
    </div>
  );
}
