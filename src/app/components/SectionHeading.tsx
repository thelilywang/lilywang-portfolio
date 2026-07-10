import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  as?: 'h2' | 'h3';
  id?: string;
  className?: string;
}

export default function SectionHeading({ kicker, title, as = 'h2', id, className }: SectionHeadingProps) {
  const Tag = as;
  return (
    <div className={`${styles.wrap}${className ? ` ${className}` : ''}`}>
      {kicker && <span className={styles.kicker}>{kicker}</span>}
      <Tag id={id} className={styles.title}>{title}</Tag>
    </div>
  );
}
