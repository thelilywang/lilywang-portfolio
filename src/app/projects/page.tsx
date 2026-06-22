'use client';

import styles from './projects.module.css';
import PageHeader from '@/app/components/PageHeader';
import ProjectCard from '@/app/components/ProjectCard';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';

export default function Projects() {
  const t = useTranslations('projects');
  const { resumeData } = useLocaleContext();
  const { projectsData } = resumeData;

  return (
    <div className={styles.container}>
      <PageHeader title={t('page_title')} />

      <div className={styles.projectGrid}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
