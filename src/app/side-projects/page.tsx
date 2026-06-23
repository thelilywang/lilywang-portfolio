'use client';

import styles from './side-projects.module.css';
import PageHeader from '@/app/components/PageHeader';
import { useLocaleContext } from '@/context/LocaleContext';

export default function SideProjects() {
  const { resumeData } = useLocaleContext();
  const { sideProjectsData } = resumeData;

  return (
    <div className={styles.container}>
      <PageHeader title="Side Projects" />

      <div className={styles.grid}>
        {sideProjectsData.map((project, index) => (
          <div className={styles.card} key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.href && (
              <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
