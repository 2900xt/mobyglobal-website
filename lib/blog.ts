import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: string;
  content: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: string;
}

/**
 * Get all blog post slugs from the content/blog directory
 */
export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''));
}

/**
 * Get metadata for all blog posts, sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogPostMetadata[] {
  const slugs = getAllBlogSlugs();

  const posts = slugs.map(slug => {
    const { data } = getBlogPostBySlug(slug);
    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      author: data.author,
      date: data.date,
      readingTime: data.readingTime,
    };
  });

  // Sort by date, newest first
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get a single blog post by slug, including full content
 */
export function getBlogPostBySlug(slug: string): {
  data: BlogPost;
  content: string;
} {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    data: {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      author: data.author || 'Anonymous',
      date: data.date || new Date().toISOString(),
      readingTime: data.readingTime || '5 min read',
      content,
    },
    content,
  };
}

/**
 * Check if a blog post exists
 */
export function blogPostExists(slug: string): boolean {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  return fs.existsSync(filePath);
}
