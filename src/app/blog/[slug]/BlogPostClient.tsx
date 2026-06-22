'use client';

import Link from 'next/link';
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
          {section.content}
        </Typography>
      );
    case 'list':
      return (
        <Box key={index} component="ul" sx={{ pl: 3, mb: 1.5 }}>
          {section.items?.map((item, i) => (
            <Typography key={i} component="li" level="body-md" sx={{ mb: 0.5, lineHeight: 1.8 }}>
              {item}
            </Typography>
          ))}
        </Box>
      );
    case 'code':
      return (
        <Sheet
          key={index}
          variant="soft"
          color="neutral"
          sx={{ p: 2, mb: 1.5, borderRadius: 'sm', fontFamily: 'monospace', fontSize: '0.875rem', whiteSpace: 'pre-wrap', overflowX: 'auto' }}
        >
          {section.content}
        </Sheet>
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
        <Typography level="body-sm" sx={{ color: 'neutral.500' }}>
          {post.date}
        </Typography>
        <Typography level="body-sm" sx={{ color: 'neutral.400' }}>·</Typography>
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
