"use client";

import styles from './contact.module.css';
import { personalInfo, contactNote, scheduleNote } from '@/data/resumeData';

export default function Contact() {
  // 處理表單提交
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 獲取表單數據
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    // 創建郵件內容
    const mailtoSubject = encodeURIComponent(`Lily Portfolio Contact: ${subject}`);
    const mailtoBody = encodeURIComponent(
      `姓名: ${name}\n` +
      `電子郵件: ${email}\n\n` +
      `訊息內容:\n${message}`
    );
    
    // 創建mailto鏈接並開啟郵件客戶端
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

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
                <div className={styles.contactValue}>
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                </div>
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
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">姓名</label>
              <input type="text" id="name" name="name" placeholder="請輸入您的姓名" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">電子郵件</label>
              <input type="email" id="email" name="email" placeholder="請輸入您的電子郵件" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject">主旨</label>
              <input type="text" id="subject" name="subject" placeholder="請輸入主旨" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">訊息內容</label>
              <textarea id="message" name="message" rows={6} placeholder="請輸入您的訊息" required></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              發送訊息
            </button>
          </form>
          <div className={styles.formNote}>
            * 點擊發送後將開啟您的郵件客戶端
          </div>
        </div>
      </div>
      
      <div className={styles.schedule}>
        <h2>✨</h2>
        <p dangerouslySetInnerHTML={{ __html: scheduleNote }}></p>
      </div>
    </div>
  );
}
