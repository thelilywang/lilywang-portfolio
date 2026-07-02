'use client';

import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
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
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--joy-palette-primary-500, #0b6bcb)', textDecoration: 'underline' }}
      >
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
        <Typography key={index} level="h3" sx={{ mt: 3, mb: 1, fontSize: '1.15rem', fontWeight: 700 }}>
          {section.content}
        </Typography>
      );
    case 'paragraph':
      return (
        <Typography key={index} level="body-md" sx={{ mb: 1.5, lineHeight: 1.8 }}>
          {renderTextWithLinks(section.content)}
        </Typography>
      );
    case 'list':
      return (
        <Box key={index} component="ul" sx={{ pl: 3, mb: 1.5 }}>
          {section.items?.map((item, i) => (
            <Typography key={i} component="li" level="body-md" sx={{ mb: 0.5, lineHeight: 1.8 }}>
              {renderTextWithLinks(item)}
            </Typography>
          ))}
        </Box>
      );
    case 'code':
      return (
        <Box key={index} sx={{ mb: 1.5 }}>
          {section.language && (
            <Box
              sx={{
                display: 'inline-block',
                px: 1,
                py: 0.25,
                fontSize: '0.7rem',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'text.tertiary',
                bgcolor: 'background.level2',
                borderRadius: 'sm sm 0 0',
              }}
            >
              {section.language}
            </Box>
          )}
          <Sheet
            variant="soft"
            color="neutral"
            sx={{
              p: 2,
              borderRadius: section.language ? '0 sm sm sm' : 'sm',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
              whiteSpace: 'pre-wrap',
              overflowX: 'auto',
            }}
          >
            {section.content}
          </Sheet>
        </Box>
      );
    case 'image':
      return (
        <Box
          key={index}
          sx={{
            mb: 1.5,
            p: 2,
            borderRadius: 'sm',
            bgcolor: '#ffffff',
          }}
        >
          <Box sx={{ position: 'relative', width: '100%' }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${section.content}`}
              alt={section.alt ?? ''}
              width={1400}
              height={1000}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </Box>
        </Box>
      );
    case 'table':
      return (
        <Box key={index} sx={{ mb: 1.5, overflowX: 'auto' }}>
          <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            {section.headers && (
              <Box component="thead">
                <Box component="tr">
                  {section.headers.map((header, i) => (
                    <Box
                      key={i}
                      component="th"
                      sx={{ textAlign: 'left', p: 1, borderBottom: '2px solid', borderColor: 'divider', fontWeight: 700 }}
                    >
                      {header}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
            <Box component="tbody">
              {section.rows?.map((row, rowIndex) => (
                <Box component="tr" key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <Box
                      key={cellIndex}
                      component="td"
                      sx={{ p: 1, borderBottom: '1px solid', borderColor: 'divider', verticalAlign: 'top' }}
                    >
                      {cell}
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
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
      <Box sx={{ mb: 2 }}>
        <Button component={Link} href="/blog" variant="plain" size="sm" sx={{ pl: 0 }}>
          {t('back_to_list')}
        </Button>
      </Box>

      <Typography level="h1" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 700, mb: 1, lineHeight: 1.3 }}>
        {post.title}
      </Typography>

      <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
        <Typography level="body-sm" sx={{ color: 'text.tertiary' }}>
          {post.date}
        </Typography>
        <Typography level="body-sm" sx={{ color: 'text.tertiary' }}>·</Typography>
        {post.tags.map((tag) => (
          <Chip key={tag} size="sm" variant="soft" color="primary">
            {tag}
          </Chip>
        ))}
      </Stack>

      <Divider sx={{ mb: 3 }} />

      <Box>
        {post.content.map((section, index) => renderSection(section, index))}
      </Box>

      <Box sx={{ mt: 4, mb: 3 }}>
        <Button
          component="a"
          href={post.mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          size="sm"
        >
          {t('read_on_medium')}
        </Button>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Button component={Link} href="/blog" variant="soft" size="sm">
          {t('back_to_list')}
        </Button>
        {nextPost ? (
          <Button component={Link} href={`/blog/${nextPost.slug}`} variant="solid" size="sm">
            {t('next_post_prefix')}{nextPost.title.length > 30 ? nextPost.title.slice(0, 30) + '…' : nextPost.title} →
          </Button>
        ) : (
          <Button component={Link} href="/blog" variant="solid" size="sm">
            {t('back_to_list_end')}
          </Button>
        )}
      </Box>
    </div>
  );
}
