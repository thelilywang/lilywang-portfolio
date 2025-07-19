import styles from './skills.module.css';
import { skillsData } from '@/data/resumeData';

export default function Skills() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>專業技能</h1>
      
      <div className={styles.skillsSection}>
        <h2>產品管理技能</h2>
        <div className={styles.skillGrid}>
          {skillsData.productSkills.map((skill, index) => (
            <div className={styles.skillItem} key={index}>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillBar}>
                <div className={styles.skillFill} style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2>方法論與流程</h2>
        <div className={styles.skillGrid}>
          {skillsData.methodologies.map((skill, index) => (
            <div className={styles.skillItem} key={index}>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillBar}>
                <div className={styles.skillFill} style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2>技術技能</h2>
        <div className={styles.skillGrid}>
          {skillsData.technicalSkills.map((skill, index) => (
            <div className={styles.skillItem} key={index}>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillBar}>
                <div className={styles.skillFill} style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2>專業技能</h2>
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
