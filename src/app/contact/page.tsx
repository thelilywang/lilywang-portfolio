import styles from './contact.module.css';
import { personalInfo, contactNote, scheduleNote } from '@/data/resumeData';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>聯絡方式</h1>
      
      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <div className={styles.contactSection}>
            <h2>基本資訊</h2>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📧</div>
              <div>
                <div className={styles.contactLabel}>電子郵件</div>
                <div className={styles.contactValue}>{personalInfo.email}</div>
              </div>
            </div>
            
            {/* 電話欄位已被註解，若需要恢復請移除註解
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📱</div>
              <div>
                <div className={styles.contactLabel}>電話</div>
                <div className={styles.contactValue}>{personalInfo.phone}</div>
              </div>
            </div>
            */}
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📍</div>
              <div>
                <div className={styles.contactLabel}>地點</div>
                <div className={styles.contactValue}>{personalInfo.location}</div>
              </div>
            </div>
          </div>
          
          <div className={styles.contactSection}>
            <h2>社交媒體</h2>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🔗</div>
              <div>
                <div className={styles.contactLabel}>LinkedIn</div>
                <div className={styles.contactValue}>
                  <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    {personalInfo.socialLinks.linkedin.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>💻</div>
              <div>
                <div className={styles.contactLabel}>GitHub</div>
                <div className={styles.contactValue}>
                  <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    {personalInfo.socialLinks.github.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🔤</div>
              <div>
                <div className={styles.contactLabel}>Medium</div>
                <div className={styles.contactValue}>
                  <a href={personalInfo.socialLinks.medium} target="_blank" rel="noopener noreferrer">
                    {personalInfo.socialLinks.medium.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.contactForm}>
          <h2>傳送訊息</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">姓名</label>
              <input type="text" id="name" placeholder="請輸入您的姓名" />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">電子郵件</label>
              <input type="email" id="email" placeholder="請輸入您的電子郵件" />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject">主旨</label>
              <input type="text" id="subject" placeholder="請輸入主旨" />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">訊息內容</label>
              <textarea id="message" rows={6} placeholder="請輸入您的訊息"></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              發送訊息
            </button>
          </form>
          <div className={styles.formNote}>
            * {contactNote}
          </div>
        </div>
      </div>
      
      <div className={styles.schedule}>
        <h2>預約會面</h2>
        <p>{scheduleNote}</p>
      </div>
    </div>
  );
}
