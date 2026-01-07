import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative">
      {/* Background effects matching hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-6 md:pt-40">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              The MoByLOG
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light">
            Some cool stuff we found our about whales while making Moby Labs
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-16 md:py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-white/60">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/10 hover:border-cyan-400/50 hover:-translate-y-2 hover:scale-[1.02] flex flex-col"
                >
                  {/* Card Content */}
                  <div className="p-8 flex-grow">
                    {/* Metadata */}
                    <div className="flex items-center gap-3 mb-4 text-sm text-white/50">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-white/60 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/50">
                        By {post.author}
                      </span>
                      <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:h-2 transition-all duration-300" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
