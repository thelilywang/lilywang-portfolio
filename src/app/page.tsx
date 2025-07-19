import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { personalInfo, highlightsData } from "@/data/resumeData";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.profileImage}>
            <div className={styles.imagePlaceholder}>
              {/* 稍後可替換為您的照片 */}
              <span>個人照片</span>
            </div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <h2 className={styles.title}>{personalInfo.title}</h2>
            <p className={styles.intro}>{personalInfo.intro}</p>
            <div className={styles.ctas}>
              <Link href="/contact" className={styles.primary}>聯絡我</Link>
              <Link href="/projects" className={styles.secondary}>查看作品集</Link>
            </div>
          </div>
        </div>

        <div className={styles.highlights}>
          <h2>專業亮點</h2>
          <div className={styles.highlightsGrid}>
            {highlightsData.map((highlight, index) => (
              <div className={styles.highlightCard} key={index}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.navigation}>
          <Link href="/about">關於我</Link>
          <Link href="/experience">工作經驗</Link>
          <Link href="/projects">專案作品</Link>
          <Link href="/skills">專業技能</Link>
          <Link href="/contact">聯絡方式</Link>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} {personalInfo.name} • {personalInfo.title}
        </div>
      </footer>
    </div>
  );
}
