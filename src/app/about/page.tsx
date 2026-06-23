'use client';

import styles from './about.module.css';
import PageHeader from '@/app/components/PageHeader';
import SkillGroup from '@/app/components/SkillGroup';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';

export default function About() {
  const t = useTranslations('about');
  const { resumeData } = useLocaleContext();
  const { aboutData, experienceData, skillsData } = resumeData;

  const badgeLabels = {
    expert: t('skill_expert'),
    proficient: t('skill_proficient'),
    familiar: t('skill_familiar'),
  };

  return (
    <div className={styles.container}>
      <PageHeader title={t('page_title')} />

      <nav className={styles.anchorNav}>
        <a href="#intro" className={styles.anchorLink}>{t('anchor_intro')}</a>
        <a href="#experience" className={styles.anchorLink}>{t('anchor_experience')}</a>
        <a href="#skills" className={styles.anchorLink}>{t('anchor_skills')}</a>
        <a href="#credentials" className={styles.anchorLink}>{t('anchor_credentials')}</a>
      </nav>

      <section id="intro" className={styles.section}>
        <h2>{t('bio_heading')}</h2>
        {aboutData.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <div className={styles.interests}>
          {aboutData.interests.map((interest, index) => (
            <div className={styles.interestItem} key={index}>
              <div className={styles.interestIcon}>{interest.icon}</div>
              <div className={styles.interestName}>{interest.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className={styles.section}>
        <h2>{t('experience_heading')}</h2>
        <div className={styles.timeline}>
          {experienceData.map((exp, index) => (
            <div className={styles.timelineItem} key={index}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelinePeriod}>{exp.period}</div>
                <h2 className={styles.company}>{exp.company}</h2>
                <h3 className={styles.position}>{exp.position}</h3>
                <p className={styles.description}>{exp.description}</p>
                {exp.achievements.length > 0 && (
                  <ul className={styles.achievements}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
                {exp.tags && exp.tags.length > 0 && (
                  <div className={styles.techTags}>
                    {exp.tags.map((tag, i) => (
                      <span className={styles.techTag} key={i}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <h2>{t('skills_heading')}</h2>
        <SkillGroup heading={t('product_skills_heading')} skills={skillsData.productSkills} badgeLabels={badgeLabels} />
        <SkillGroup heading={t('methodologies_heading')} skills={skillsData.methodologies} badgeLabels={badgeLabels} />
        <SkillGroup heading={t('technical_skills_heading')} skills={skillsData.technicalSkills} badgeLabels={badgeLabels} />

        <div className={styles.section}>
          <h2>{t('soft_skills_heading')}</h2>
          <div className={styles.tagCloud}>
            {skillsData.softSkills.map((skill, index) => (
              <span className={styles.tag} key={index}>{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
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
      </section>

      <section id="credentials" className={styles.section}>
        <h2>{t('education_heading_standalone')}</h2>
        {aboutData.education.map((edu, index) => (
          <div className={styles.educationItem} key={index}>
            <div className={styles.degree}>{edu.degree}</div>
            <div className={styles.school}>{edu.school}</div>
            <div className={styles.period}>{edu.period}</div>
          </div>
        ))}

        <h2 className={styles.certHeading}>{t('certifications_heading')}</h2>
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
    </div>
  );
}
