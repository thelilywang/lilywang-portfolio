'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './not-found.module.css';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className={`${styles.container} ${styles.center}`}>
      <span className={styles.kicker}>{t('kicker')}</span>
      <h1 className={styles.number}>{t('title')}</h1>
      <p className={styles.description}>{t('description')}</p>
      <Link href="/" className={styles.backLink}>{t('backHome')}</Link>
    </div>
  );
}
