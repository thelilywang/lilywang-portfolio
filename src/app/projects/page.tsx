'use client';

import styles from './projects.module.css';
import PageHeader from '@/app/components/PageHeader';
import ProjectCard from '@/app/components/ProjectCard';
import AnchorNav from '@/app/components/AnchorNav';
import SectionHeading from '@/app/components/SectionHeading';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

export default function Projects() {
  const t = useTranslations('projects');
  const { resumeData } = useLocaleContext();
  const { projectsData, sideProjectsData } = resumeData;
  const fadeRef = useScrollFadeIn<HTMLElement>(0.1);

  return (
    <>
      {sideProjectsData.length > 0 && (
        <AnchorNav
          links={[
            { href: '#main-projects', label: t('anchor_main') },
            { href: '#side-projects', label: t('anchor_side') },
          ]}
          maxWidth={1000}
        />
      )}
      <div className={styles.container}>
      <PageHeader title={t('page_title')} />

      <section id="main-projects">
        <SectionHeading as="h2" title={t('main_projects_heading')} />
        <div className={styles.projectGrid}>
          {projectsData.map((project, index) => (
            <div className={styles.fadeInUp} ref={fadeRef} key={index}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </section>

      {sideProjectsData.length > 0 && (
        <section id="side-projects" className={styles.sideSection}>
          <SectionHeading as="h2" title={t('side_projects_heading')} />
          <div className={styles.sideGrid}>
            {sideProjectsData.map((project, index) => (
              <div className={`${styles.sideCard} ${!project.href ? styles.sideCardEmpty : ''} ${styles.fadeInUp}`} ref={fadeRef} key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.tech && project.tech.length > 0 && (
                  <div className={styles.sideTech}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.techChip}>{tech}</span>
                    ))}
                  </div>
                )}
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.sideLink}>
                    {t('side_projects_view')} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
      </div>
    </>
  );
}
