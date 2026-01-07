import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPostBySlug, getAllBlogSlugs, blogPostExists } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  if (!blogPostExists(slug)) {
    notFound();
  }

  const { data, content } = getBlogPostBySlug(slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back to Blog Link */}
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Metadata badge */}
          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-white/60">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              {data.date}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              {data.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              {data.title}
            </span>
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
              {data.author.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div>
              <p className="text-white font-medium">{data.author}</p>
              <p className="text-white/50 text-sm">Moby Labs Team</p>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <article className="relative z-10 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-10 shadow-2xl">
            <div className="prose prose-lg prose-invert max-w-none
              prose-headings:font-bold prose-headings:text-white prose-headings:mt-8 prose-headings:mb-4
              prose-h1:text-3xl prose-h1:bg-gradient-to-r prose-h1:from-cyan-300 prose-h1:to-blue-300 prose-h1:bg-clip-text prose-h1:text-transparent
              prose-h2:text-2xl prose-h2:text-cyan-300 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
              prose-h3:text-xl prose-h3:text-blue-300
              prose-p:text-white/80 prose-p:leading-relaxed prose-p:my-4
              prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300 prose-a:font-medium prose-a:transition-colors
              prose-strong:text-white prose-strong:font-bold
              prose-em:text-cyan-200/90 prose-em:not-italic prose-em:font-medium
              prose-code:text-cyan-300 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-slate-900/80 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:shadow-lg
              prose-blockquote:border-l-4 prose-blockquote:border-cyan-400 prose-blockquote:bg-cyan-500/10 prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-white/80
              prose-ul:text-white/80 prose-ul:my-4
              prose-ol:text-white/80 prose-ol:my-4
              prose-li:my-1 prose-li:marker:text-cyan-400
              prose-hr:border-white/10 prose-hr:my-8
              prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-white/10
              prose-table:border prose-table:border-white/10 prose-table:rounded-lg prose-table:overflow-hidden
              prose-th:bg-white/10 prose-th:text-white prose-th:font-bold prose-th:p-3
              prose-td:p-3 prose-td:border-t prose-td:border-white/10 prose-td:text-white/70
            ">
              <MDXRemote source={content} />
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="mt-8 flex justify-between items-center">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl text-white font-medium rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Posts
            </Link>

            <Link
              href="/signup"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              Join Waitlist
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
