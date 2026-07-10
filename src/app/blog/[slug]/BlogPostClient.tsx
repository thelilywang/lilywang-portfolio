'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost, BlogSection } from '@/types/resume';
import { blogData } from '@/data/blogData';
import styles from './slug.module.css';
import { useTranslations } from 'next-intl';

const MARKDOWN_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderTextWithLinks(text: string) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  MARKDOWN_LINK_RE.lastIndex = 0;
  while ((match = MARKDOWN_LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a key={key++} href={match[2]} target="_blank" rel="noopener noreferrer">
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case 'heading':
      return (
        <h2 key={index} className={styles.heading}>
          {section.content}
        </h2>
      );
    case 'paragraph':
      return (
        <p key={index} className={styles.paragraph}>
          {renderTextWithLinks(section.content)}
        </p>
      );
    case 'list':
      return (
        <ul key={index} className={styles.list}>
          {section.items?.map((item, i) => (
            <li key={i}>{renderTextWithLinks(item)}</li>
          ))}
        </ul>
      );
    case 'code':
      return (
        <div key={index} className={styles.codeBlock}>
          {section.language && (
            <div className={styles.codeLanguage}>{section.language}</div>
          )}
          <pre className={`${styles.codeContent} ${section.language ? styles.codeContentWithLanguage : ''}`}>
            {section.content}
          </pre>
        </div>
      );
    case 'image':
      return (
        <div key={index} className={styles.imageBlock}>
          <div className={styles.imageWrapper}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${section.content}`}
              alt={section.alt ?? ''}
              width={1400}
              height={1000}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
        </div>
      );
    case 'table':
      return (
        <div key={index} className={styles.tableWrapper}>
          <table className={styles.table}>
            {section.headers && (
              <thead>
                <tr>
                  {section.headers.map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {section.rows?.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const t = useTranslations('blog');
  const currentIndex = blogData.findIndex((p) => p.slug === post.slug);
  const nextPost = blogData[currentIndex + 1] ?? null;

  return (
    <div className={styles.container}>
      <Link href="/blog" className={styles.backLink}>
        {t('back_to_list')}
      </Link>

      <h1 className={styles.title}>{post.title}</h1>

      <div className={styles.meta}>
        <span className={styles.metaDate}>{post.date}</span>
        <span className={styles.metaDivider}>·</span>
        {post.tags.map((tag) => (
          <span key={tag} className={styles.chip}>{tag}</span>
        ))}
      </div>

      <hr className={styles.divider} />

      <div className={styles.body}>
        {post.content.map((section, index) => renderSection(section, index))}
      </div>

      <div className={styles.mediumLinkWrap}>
        <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer" className={styles.mediumLink}>
          {t('read_on_medium')}
        </a>
      </div>

      <hr className={styles.divider} />

      <div className={styles.postNav}>
        <Link href="/blog" className={`${styles.navButton} ${styles.navButtonSoft}`}>
          {t('back_to_list')}
        </Link>
        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className={`${styles.navButton} ${styles.navButtonSolid}`}>
            {t('next_post_prefix')}{nextPost.title.length > 30 ? nextPost.title.slice(0, 30) + '…' : nextPost.title} →
          </Link>
        ) : (
          <Link href="/blog" className={`${styles.navButton} ${styles.navButtonSolid}`}>
            {t('back_to_list_end')}
          </Link>
        )}
      </div>
    </div>
  );
}
