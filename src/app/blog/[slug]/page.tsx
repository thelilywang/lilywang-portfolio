import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogData } from '@/data/blogData';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) return {};
  const title = `${post.title} | Lily Wang`;
  return {
    title,
    description: post.description,
    openGraph: {
      title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogPostClient post={post} />;
}
