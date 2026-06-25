import { ChevronDown } from 'lucide-react';
import type { Project } from '@/types/resume';
import styles from '../projects/projects.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const brandName = project.title.split(/[\s–—-]/)[0];

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImageContainer}>
        <div className={styles.projectImagePlaceholder}>
          <span className={styles.projectBrand}>{brandName}</span>
        </div>
      </div>
      <div className={styles.projectContent}>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <div className={styles.projectRole}>{project.role}</div>
        <p className={`${styles.projectDescription} ${styles.clamped}`}>
          {project.description}
        </p>
        <div className={styles.expandable}>
          <div className={styles.projectTech}>
            {project.tech.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
          <div className={styles.projectResults}>
            {project.results.map((result, i) => (
              <div className={styles.resultItem} key={i}>
                <div className={styles.resultValue}>{result.value}</div>
                <div className={styles.resultLabel}>{result.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.chevron}>
          <ChevronDown size={18} />
        </div>
      </div>
    </div>
  );
}
