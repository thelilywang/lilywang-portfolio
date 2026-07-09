'use client';

import Link from 'next/link';
import { blogData } from '@/data/blogData';
import PageHeader from '@/app/components/PageHeader';
import styles from './blog.module.css';
import { useTranslations } from 'next-intl';

export default function Blog() {
  const t = useTranslations('blog');

  return (
    <div className={styles.container}>
      <PageHeader title={t('page_title')} />

      <div className={styles.list}>
        {blogData.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.cardLink}>
            <article className={styles.card}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <div className={styles.cardDate}>{post.date}</div>
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
