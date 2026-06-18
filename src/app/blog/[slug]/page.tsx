import { notFound } from 'next/navigation';
import { blogData } from '@/data/blogData';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogPostClient post={post} />;
}
