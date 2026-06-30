'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Project } from '@/types/resume';
import styles from '../projects/projects.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations('projects');
  const brandName = project.title.split(/[\s–—-]/)[0];
  const expandId = `expand-${project.title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div
      className={styles.projectCard}
      onClick={() => setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-controls={expandId}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.projectImageContainer}>
        <div className={styles.projectImagePlaceholder}>
          <span className={styles.projectBrand}>{brandName}</span>
        </div>
      </div>
      <div className={styles.projectContent}>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <div className={styles.projectRole}>{project.role}</div>
        <p className={`${styles.projectDescription} ${isExpanded ? '' : styles.clamped}`}>
          {project.description}
        </p>
        <div
          id={expandId}
          className={`${styles.expandable} ${isExpanded ? styles.expandableOpen : ''}`}
        >
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
        <div className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ''}`}>
          <span className={styles.chevronLabel}>
            {isExpanded ? t('card_collapse') : t('card_expand')}
          </span>
          <ChevronDown size={18} />
        </div>
      </div>
    </div>
  );
}
