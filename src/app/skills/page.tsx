import styles from './skills.module.css';
import { skillsData } from '@/data/resumeData';
import PageHeader from '@/app/components/PageHeader';
import SkillGroup from '@/app/components/SkillGroup';

export default function Skills() {
  return (
    <div className={styles.container}>
      <PageHeader title="專業技能" />

      <SkillGroup heading="產品管理技能" skills={skillsData.productSkills} />
      <SkillGroup heading="方法論與流程" skills={skillsData.methodologies} />
      <SkillGroup heading="技術技能" skills={skillsData.technicalSkills} />

      <div className={styles.skillsSection}>
        <h2>軟實力</h2>
        <div className={styles.tagCloud}>
          {skillsData.softSkills.map((skill, index) => (
            <span className={styles.tag} key={index}>{skill}</span>
          ))}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2>語言能力</h2>
        <div className={styles.languageGrid}>
          {skillsData.languages.map((lang, index) => (
            <div className={styles.languageItem} key={index}>
              <div className={styles.languageName}>{lang.name}</div>
              <div className={styles.languageLevel}>{lang.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
