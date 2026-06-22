'use client';

import styles from './skills.module.css';
import PageHeader from '@/app/components/PageHeader';
import SkillGroup from '@/app/components/SkillGroup';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';

export default function Skills() {
  const t = useTranslations('skills');
  const { resumeData } = useLocaleContext();
  const { skillsData } = resumeData;

  return (
    <div className={styles.container}>
      <PageHeader title={t('page_title')} />

      <SkillGroup heading={t('product_skills_heading')} skills={skillsData.productSkills} />
      <SkillGroup heading={t('methodologies_heading')} skills={skillsData.methodologies} />
      <SkillGroup heading={t('technical_skills_heading')} skills={skillsData.technicalSkills} />

      <div className={styles.skillsSection}>
        <h2>{t('soft_skills_heading')}</h2>
        <div className={styles.tagCloud}>
          {skillsData.softSkills.map((skill, index) => (
            <span className={styles.tag} key={index}>{skill}</span>
          ))}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2>{t('languages_heading')}</h2>
        <div className={styles.languageGrid}>
          {skillsData.languages.map((lang, index) => (
            <div className={styles.languageItem} key={index}>
              <div className={styles.languageName}>{lang.name}</div>
              <div className={styles.languageLevel}>{lang.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
