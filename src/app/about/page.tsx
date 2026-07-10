'use client';

import styles from './about.module.css';
import PageHeader from '@/app/components/PageHeader';
import SkillGroup from '@/app/components/SkillGroup';
import AnchorNav from '@/app/components/AnchorNav';
import SectionHeading from '@/app/components/SectionHeading';
import { GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';
import { emphasizeMetrics } from '@/lib/emphasizeMetrics';
import { useState } from 'react';

const CERTS_COLLAPSED_COUNT = 6;

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
  const timelineFadeRef = useScrollFadeIn<HTMLDivElement>(0.08);
  const fadeRef = useScrollFadeIn<HTMLElement>(0.1);
  const [showAllCerts, setShowAllCerts] = useState(false);

  const badgeLabels = {
    expert: t('skill_expert'),
    proficient: t('skill_proficient'),
    familiar: t('skill_familiar'),
  };

  return (
    <>
      <AnchorNav links={[
        { href: '#intro', label: t('anchor_intro') },
        { href: '#experience', label: t('anchor_experience') },
        { href: '#skills', label: t('anchor_skills') },
        { href: '#credentials', label: t('anchor_credentials') },
      ]} />
      <div className={styles.container}>
      <PageHeader title={t('page_title')} />

      <section id="intro" className={styles.section}>
        <SectionHeading kicker={t('anchor_intro')} title={t('bio_heading')} />
        {aboutData.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <div className={`${styles.interests} ${styles.fadeInUp}`} ref={fadeRef}>
          {aboutData.interests.map((interest, index) => (
            <div className={styles.interestItem} key={index}>
              <div className={styles.interestIcon}><span aria-hidden="true">{interest.icon}</span></div>
              <div className={styles.interestName}>{interest.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className={styles.section}>
        <SectionHeading kicker={t('anchor_experience')} title={t('experience_heading')} />
        <div className={styles.timeline}>
          {experienceData.map((exp, index) => (
            <div className={styles.timelineItem} key={index} ref={timelineFadeRef}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelinePeriod}>{exp.period}</div>
                <h3 className={styles.company}>{exp.company}</h3>
                <p className={styles.position}>{exp.position}</p>
                <p className={styles.description}>{exp.description}</p>
                {exp.achievements.length > 0 && (
                  <ul className={styles.achievements}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{emphasizeMetrics(achievement, styles.metric)}</li>
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
        <SectionHeading kicker={t('anchor_skills')} title={t('skills_heading')} />
        <SkillGroup heading={t('product_skills_heading')} skills={skillsData.productSkills} badgeLabels={badgeLabels} />
        <SkillGroup heading={t('methodologies_heading')} skills={skillsData.methodologies} badgeLabels={badgeLabels} />
        <SkillGroup heading={t('ai_skills_heading')} skills={skillsData.aiSkills} badgeLabels={badgeLabels} />
        <SkillGroup heading={t('technical_skills_heading')} skills={skillsData.technicalSkills} badgeLabels={badgeLabels} />

        <div className={styles.section}>
          <h3 className={styles.sectionHeadingNested}>{t('soft_skills_heading')}</h3>
          <div className={`${styles.tagCloud} ${styles.fadeInUp}`} ref={fadeRef}>
            {skillsData.softSkills.map((skill, index) => (
              <span className={styles.tag} key={index}>{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionHeadingNested}>{t('languages_heading')}</h3>
          <div className={`${styles.languageList} ${styles.fadeInUp}`} ref={fadeRef}>
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
        <SectionHeading kicker={t('anchor_credentials')} title={t('education_heading_standalone')} />
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

        <h3 className={styles.certHeading}>{t('certifications_heading')}</h3>
        <ul className={`${styles.certifications} ${styles.fadeInUp}`} ref={fadeRef}>
          {(showAllCerts ? aboutData.certifications : aboutData.certifications.slice(0, CERTS_COLLAPSED_COUNT)).map((cert, index) => (
            <li key={index}>
              <span className={styles.certOrgBadge}>{cert.org}</span>
              <span className={styles.certName}>{highlightCertName(cert.name, styles.certHighlight, cert.highlights)}</span>
              {cert.year && <span className={styles.certYear}>{cert.year}</span>}
            </li>
          ))}
        </ul>
        {aboutData.certifications.length > CERTS_COLLAPSED_COUNT && (
          <button
            type="button"
            className={styles.certToggle}
            aria-expanded={showAllCerts}
            onClick={() => setShowAllCerts(prev => !prev)}
          >
            {showAllCerts ? (
              <>
                {t('show_less_certs')}
                <ChevronUp size={16} strokeWidth={2} />
              </>
            ) : (
              <>
                {t('show_all_certs', { count: aboutData.certifications.length })}
                <ChevronDown size={16} strokeWidth={2} />
              </>
            )}
          </button>
        )}
      </section>
      </div>
    </>
  );
}
