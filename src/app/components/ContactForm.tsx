"use client";

import styles from '../contact/contact.module.css';

interface ContactFormProps {
  recipientEmail: string;
}

export default function ContactForm({ recipientEmail }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const mailtoSubject = encodeURIComponent(`Lily Portfolio Contact: ${subject}`);
    const mailtoBody = encodeURIComponent(
      `姓名: ${name}\n電子郵件: ${email}\n\n訊息內容:\n${message}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
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
  );
}
