import Image from 'next/image';
import styles from './projects.module.css';
import { projectsData } from '@/data/resumeData';
import _ from 'lodash';

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>專案作品</h1>
      
      <div className={styles.projectGrid}>
        {_.map(projectsData, (project, index) => (
          <div className={styles.projectCard} key={index}>
            <div className={styles.projectImageContainer}>
              <div className={styles.projectImagePlaceholder}>
                {project.imagePlaceholder}
              </div>
            </div>
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <div className={styles.projectRole}>{project.role}</div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTech}>
                {_.map(project.tech, (tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className={styles.projectResults}>
                {_.map(project.results, (result, i) => (
                  <div className={styles.resultItem} key={i}>
                    <div className={styles.resultValue}>{result.value}</div>
                    <div className={styles.resultLabel}>{result.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
