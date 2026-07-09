'use client';

import styles from './projects.module.css';
import PageHeader from '@/app/components/PageHeader';
import ProjectCard from '@/app/components/ProjectCard';
import AnchorNav from '@/app/components/AnchorNav';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';

export default function Projects() {
  const t = useTranslations('projects');
  const { resumeData } = useLocaleContext();
  const { projectsData, sideProjectsData } = resumeData;

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

      <div id="main-projects" className={styles.projectGrid}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {sideProjectsData.length > 0 && (
        <section id="side-projects" className={styles.sideSection}>
          <h2 className={styles.sideSectionHeading}>{t('side_projects_heading')}</h2>
          <div className={styles.sideGrid}>
            {sideProjectsData.map((project, index) => (
              <div className={styles.sideCard} key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.sideLink}>
                    View Project →
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
