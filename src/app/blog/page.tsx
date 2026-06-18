'use client';

import Link from 'next/link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import { blogData } from '@/data/blogData';
import PageHeader from '@/app/components/PageHeader';
import styles from './blog.module.css';

export default function Blog() {
  return (
    <div className={styles.container}>
      <PageHeader title="文章分享" />

      <Stack spacing={3}>
        {blogData.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card
              variant="outlined"
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 'md',
                },
              }}
            >
              <CardContent>
                <Typography level="h3" sx={{ mb: 1, fontSize: '1.2rem' }}>
                  {post.title}
                </Typography>

                <Typography level="body-sm" sx={{ color: 'neutral.500', mb: 1.5 }}>
                  {post.date}
                </Typography>

                <Typography level="body-md" sx={{ mb: 2, color: 'neutral.700' }}>
                  {post.description}
                </Typography>

                <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                  {post.tags.map((tag) => (
                    <Chip key={tag} size="sm" variant="soft" color="primary">
                      {tag}
                    </Chip>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Stack>
    </div>
  );
}
