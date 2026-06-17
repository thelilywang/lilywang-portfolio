import styles from './contact.module.css';
import { personalInfo } from '@/data/resumeData';
import PageHeader from '@/app/components/PageHeader';
import ContactItem from '@/app/components/ContactItem';
import ContactForm from '@/app/components/ContactForm';

export default function Contact() {
  return (
    <div className={styles.container}>
      <PageHeader title="聯絡方式" />

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <div className={styles.contactSection}>
            <h2>基本資訊</h2>
            <ContactItem
              icon="📧"
              label="電子郵件"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
            <ContactItem
              icon="📍"
              label="地點"
              value={personalInfo.location}
            />
          </div>

          <div className={styles.contactSection}>
            <h2>社交媒體</h2>
            <ContactItem
              icon="🔗"
              label="LinkedIn"
              value={personalInfo.socialLinks.linkedin.replace('https://', '')}
              href={personalInfo.socialLinks.linkedin}
              hrefTarget="_blank"
            />
            <ContactItem
              icon="💻"
              label="GitHub"
              value={personalInfo.socialLinks.github.replace('https://', '')}
              href={personalInfo.socialLinks.github}
              hrefTarget="_blank"
            />
            <ContactItem
              icon="🔤"
              label="Medium"
              value={personalInfo.socialLinks.medium.replace('https://', '')}
              href={personalInfo.socialLinks.medium}
              hrefTarget="_blank"
            />
          </div>
        </div>

        <ContactForm recipientEmail={personalInfo.email} />
      </div>

      <div className={styles.schedule}>
        <h2>✨</h2>
        <p>
          Whatever is worth doing is worth doing well. 任何值得做的事就值得把它做好！
          {'\n'}歡迎通過以上聯絡方式與我聯繫：{' '}
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        </p>
      </div>
    </div>
  );
}
