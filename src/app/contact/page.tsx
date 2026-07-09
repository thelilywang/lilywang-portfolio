'use client';

import styles from './contact.module.css';
import PageHeader from '@/app/components/PageHeader';
import ContactItem from '@/app/components/ContactItem';
import ContactForm from '@/app/components/ContactForm';
import { useTranslations } from 'next-intl';
import { useLocaleContext } from '@/context/LocaleContext';

export default function Contact() {
  const t = useTranslations('contact');
  const { resumeData } = useLocaleContext();
  const { personalInfo } = resumeData;

  return (
    <div className={styles.container}>
      <PageHeader title={t('page_title')} />

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <div className={styles.contactSection}>
            <h2 className={styles.contactSectionHeading}>{t('basic_info_heading')}</h2>
            <ContactItem
              icon="📧"
              label={t('email_label')}
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
            <ContactItem
              icon="📍"
              label={t('location_label')}
              value={personalInfo.location}
            />
          </div>

          <div className={styles.contactSection}>
            <h2 className={styles.contactSectionHeading}>{t('social_heading')}</h2>
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
    </div>
  );
}
