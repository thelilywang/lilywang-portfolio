import styles from '../styles/shared.module.css';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return <h1 className={styles.pageTitle}>{title}</h1>;
}
