'use client';

import Link from 'next/link';
import { blogData } from '@/data/blogData';
import PageHeader from '@/app/components/PageHeader';
import styles from './blog.module.css';
import { useTranslations } from 'next-intl';
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

export default function Blog() {
  const t = useTranslations('blog');
  const fadeRef = useScrollFadeIn<HTMLAnchorElement>(0.12);

  return (
    <div className={styles.container}>
      <PageHeader title={t('page_title')} />

      <div className={styles.list}>
        {blogData.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`${styles.cardLink} ${styles.fadeInUp}`}
            style={{ transitionDelay: `${Math.min(index * 0.1, 0.4)}s` }}
            ref={fadeRef}
          >
            <article className={styles.card}>
              <span className={styles.cardIndex} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className={styles.cardDate}>{post.date}</div>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDescription}>{post.description}</p>
              <div className={styles.cardTags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.chip}>{tag}</span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
