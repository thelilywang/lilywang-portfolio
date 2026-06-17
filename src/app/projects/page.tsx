import styles from './projects.module.css';
import { projectsData } from '@/data/resumeData';
import PageHeader from '@/app/components/PageHeader';
import ProjectCard from '@/app/components/ProjectCard';

export default function Projects() {
  return (
    <div className={styles.container}>
      <PageHeader title="專案作品" />

      <div className={styles.projectGrid}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
