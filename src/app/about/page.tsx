import styles from './about.module.css';
import { aboutData, personalInfo } from '@/data/resumeData';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>關於我</h1>
      
      <section className={styles.section}>
        <h2>個人簡介</h2>
        {aboutData.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className={styles.section}>
        <h2>教育背景</h2>
        {aboutData.education.map((edu, index) => (
          <div className={styles.educationItem} key={index}>
            <div className={styles.degree}>{edu.degree}</div>
            <div className={styles.school}>{edu.school}</div>
            <div className={styles.period}>{edu.period}</div>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>證照與認證</h2>
        <ul className={styles.certifications}>
          {aboutData.certifications.map((cert, index) => (
            <li key={index}>
              <span className={styles.certName}>{cert.name}</span>
              <span className={styles.certOrg}>{cert.org}</span>
              <span className={styles.certYear}>{cert.year}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>個人興趣</h2>
        <div className={styles.interests}>
          {aboutData.interests.map((interest, index) => (
            <div className={styles.interestItem} key={index}>
              <div className={styles.interestIcon}>{interest.icon}</div>
              <div className={styles.interestName}>{interest.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
