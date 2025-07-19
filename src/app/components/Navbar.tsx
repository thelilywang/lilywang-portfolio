import Link from 'next/link';
import styles from './Navbar.module.css';
import { personalInfo } from '@/data/resumeData';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {personalInfo.name}
        </Link>
        
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            首頁
          </Link>
          <Link href="/about" className={styles.link}>
            關於我
          </Link>
          <Link href="/experience" className={styles.link}>
            工作經驗
          </Link>
          <Link href="/projects" className={styles.link}>
            專案作品
          </Link>
          <Link href="/skills" className={styles.link}>
            專業技能
          </Link>
          <Link href="/contact" className={styles.link}>
            聯絡方式
          </Link>
        </div>
      </div>
    </nav>
  );
}
