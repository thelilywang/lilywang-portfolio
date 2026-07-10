import type { MetadataRoute } from 'next';
import { blogData } from '@/data/blogData';

export const dynamic = 'force-static';

const BASE_URL = 'https://thelilywang.github.io/lilywang-portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/projects', '/contact', '/blog'].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogData.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...blogRoutes];
}
