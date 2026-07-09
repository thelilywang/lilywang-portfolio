"use client";

import styles from '../contact/contact.module.css';
import { useTranslations } from 'next-intl';

interface ContactFormProps {
  recipientEmail: string;
}

export default function ContactForm({ recipientEmail }: ContactFormProps) {
  const t = useTranslations('contactForm');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const mailtoSubject = encodeURIComponent(`Lily Portfolio Contact: ${subject}`);
    const mailtoBody = encodeURIComponent(
      `${t('mailto_name_label')}: ${name}\n${t('mailto_email_label')}: ${email}\n\n${t('mailto_message_label')}:\n${message}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.contactFormHeading}>{t('heading')}</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">{t('name_label')}</label>
          <input type="text" id="name" name="name" placeholder={t('name_placeholder')} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">{t('email_label')}</label>
          <input type="email" id="email" name="email" placeholder={t('email_placeholder')} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">{t('subject_label')}</label>
          <input type="text" id="subject" name="subject" placeholder={t('subject_placeholder')} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">{t('message_label')}</label>
          <textarea id="message" name="message" rows={6} placeholder={t('message_placeholder')} required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          {t('submit_button')}
        </button>
      </form>
      <div className={styles.formNote}>
        {t('form_note')}
      </div>
    </div>
  );
}
