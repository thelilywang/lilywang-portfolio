'use client';

import styles from './about.module.css';
import PageHeader from '@/app/components/PageHeader';
import SkillGroup from '@/app/components/SkillGroup';
import { GraduationCap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';

const CERT_KEYWORD_RE = /(Google Analytics|Data Analysis|Machine Learning|Generative AI|Agentic AI|Product Management|Infrastructure|Prompt|Python|Agent|LLM|ML|AI)/g;

function highlightCertName(name: string, className: string, highlights?: string[]) {
  const re = highlights
    ? new RegExp(`(${highlights.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
    : CERT_KEYWORD_RE;
  const parts = name.split(re);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <span key={i} className={className}>{part}</span>
      : part
  );
}

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
        <SkillGroup heading={t('ai_skills_heading')} skills={skillsData.aiSkills} badgeLabels={badgeLabels} />
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
          <div className={styles.languageList}>
            {skillsData.languages.map((lang, index) => (
              <div className={styles.languageItem} key={index}>
                <div className={styles.languageBody}>
                  <span className={styles.languageName}>{lang.name}</span>
                  <span className={styles.languageLevel}>{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className={styles.section}>
        <h2>{t('education_heading_standalone')}</h2>
        {aboutData.education.map((edu, index) => (
          <div className={styles.educationItem} key={index}>
            <div className={styles.educationMeta}>
              <GraduationCap size={22} strokeWidth={2} />
            </div>
            <div className={styles.educationBody}>
              <div className={styles.degree}>{edu.degree}</div>
              <div className={styles.school}>{edu.school}</div>
              {edu.period && <div className={styles.period}>{edu.period}</div>}
            </div>
          </div>
        ))}

        <p className={styles.certHeading}>{t('certifications_heading')}</p>
        <ul className={styles.certifications}>
          {aboutData.certifications.map((cert, index) => (
            <li key={index}>
              <span className={styles.certOrgBadge}>{cert.org}</span>
              <span className={styles.certName}>{highlightCertName(cert.name, styles.certHighlight, cert.highlights)}</span>
              {cert.year && <span className={styles.certYear}>{cert.year}</span>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
