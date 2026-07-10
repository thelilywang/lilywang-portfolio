import type { ReactNode } from 'react';
import styles from '../contact/contact.module.css';

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  hrefTarget?: '_blank' | '_self';
}

export default function ContactItem({ icon, label, value, href, hrefTarget = '_self' }: ContactItemProps) {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contactIcon}>{icon}</div>
      <div>
        <div className={styles.contactLabel}>{label}</div>
        <div className={styles.contactValue}>
          {href ? (
            <a href={href} target={hrefTarget} rel={hrefTarget === '_blank' ? 'noopener noreferrer' : undefined}>
              {value}
            </a>
          ) : (
            <span>{value}</span>
          )}
        </div>
      </div>
    </div>
  );
}
