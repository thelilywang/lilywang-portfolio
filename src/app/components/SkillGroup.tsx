import type { Skill } from '@/types/resume';
import styles from '../skills/skills.module.css';

interface SkillGroupProps {
  heading: string;
  skills: Skill[];
}

export default function SkillGroup({ heading, skills }: SkillGroupProps) {
  return (
    <div className={styles.skillsSection}>
      <h2>{heading}</h2>
      <div className={styles.skillGrid}>
        {skills.map((skill, index) => (
          <div className={styles.skillItem} key={index}>
            <div className={styles.skillName}>{skill.name}</div>
            <div className={styles.skillBar}>
              <div className={styles.skillFill} style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
