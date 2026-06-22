'use client';

import styles from './experience.module.css';
import PageHeader from '@/app/components/PageHeader';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';

export default function Experience() {
  const t = useTranslations('experience');
  const { resumeData } = useLocaleContext();
  const { experienceData } = resumeData;

  return (
    <div className={styles.container}>
      <PageHeader title={t('page_title')} />

      <div className={styles.timeline}>
        {experienceData.map((exp, index) => (
          <div className={styles.timelineItem} key={index}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelinePeriod}>{exp.period}</div>
              <h2 className={styles.company}>{exp.company}</h2>
              <h3 className={styles.position}>{exp.position}</h3>
              <p className={styles.description}>{exp.description}</p>
              <ul className={styles.achievements}>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
