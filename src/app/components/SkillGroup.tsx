import type { Skill } from '@/types/resume';
import styles from './SkillGroup.module.css';

interface BadgeLabels {
  expert: string;
  proficient: string;
  familiar: string;
}

const DEFAULT_LABELS: BadgeLabels = {
  expert: '精通',
  proficient: '熟練',
  familiar: '熟悉',
};

interface SkillGroupProps {
  heading: string;
  skills: Skill[];
  badgeLabels?: BadgeLabels;
}

function getBadgeClass(level: number): string {
  if (level >= 90) return styles.expert;
  if (level >= 80) return styles.proficient;
  return styles.familiar;
}

function getBadgeLabel(level: number, labels: BadgeLabels): string {
  if (level >= 90) return labels.expert;
  if (level >= 80) return labels.proficient;
  return labels.familiar;
}

export default function SkillGroup({ heading, skills, badgeLabels = DEFAULT_LABELS }: SkillGroupProps) {
  return (
    <div className={styles.skillsSection}>
      <h3>{heading}</h3>
      <div className={styles.skillGrid}>
        {skills.map((skill, index) => (
          <div className={styles.skillItem} key={index}>
            <span className={`${styles.badge} ${getBadgeClass(skill.level)}`}>
              {getBadgeLabel(skill.level, badgeLabels)}
            </span>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
