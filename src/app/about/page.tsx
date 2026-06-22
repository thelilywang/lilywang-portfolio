'use client';

import styles from './about.module.css';
import PageHeader from '@/app/components/PageHeader';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';

export default function About() {
  const t = useTranslations('about');
  const { resumeData } = useLocaleContext();
  const { aboutData } = resumeData;

  return (
    <div className={styles.container}>
      <PageHeader title={t('page_title')} />

      <section className={styles.section}>
        <h2>{t('bio_heading')}</h2>
        {aboutData.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className={styles.section}>
        <h2>{t('education_heading')}</h2>
        {aboutData.education.map((edu, index) => (
          <div className={styles.educationItem} key={index}>
            <div className={styles.degree}>{edu.degree}</div>
            <div className={styles.school}>{edu.school}</div>
            <div className={styles.period}>{edu.period}</div>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>{t('certifications_heading')}</h2>
        <ul className={styles.certifications}>
          {aboutData.certifications.map((cert, index) => (
            <li key={index}>
              <span className={styles.certName}>{cert.name}</span>
              <span className={styles.certOrg}>{cert.org}</span>
              <span className={styles.certYear}>{cert.year}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>{t('interests_heading')}</h2>
        <div className={styles.interests}>
          {aboutData.interests.map((interest, index) => (
            <div className={styles.interestItem} key={index}>
              <div className={styles.interestIcon}>{interest.icon}</div>
              <div className={styles.interestName}>{interest.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
