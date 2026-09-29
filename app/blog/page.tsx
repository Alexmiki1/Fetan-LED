import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

import { BLOG_POSTS } from "@/lib/constants/blog-posts";
import { COMPANY_NAME } from "@/lib/constants/navigation";

export const metadata: Metadata = {
  title: `Blog | ${COMPANY_NAME}`,
  description: "Expert insights and guides about LED screen technology, installation, and best practices in Ethiopia.",
  openGraph: {
    title: `Blog | ${COMPANY_NAME}`,
    description: "Expert insights and guides about LED screen technology, installation, and best practices in Ethiopia.",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#040e1a]">
      {/* Header */}
      <section className="relative border-b border-white/10 bg-gradient-to-b from-brand-blue/10 to-transparent py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Knowledge Hub
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
              LED Screen Blog
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/60 sm:text-xl">
              Expert insights, guides, and best practices for LED screen technology in Ethiopia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-brand-blue/40 hover:bg-white/[0.06]"
              >
                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                  <div className="flex flex-1 flex-col p-6">
                    {/* Category and Date */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-blue">
                        {post.category}
                      </span>
                      <span className="text-xs text-white/40">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 font-display text-xl font-bold uppercase tracking-wide text-white group-hover:text-brand-blue transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-white/60">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white/40">{post.author}</span>
                      </div>
                      <span className="text-xs text-white/40">
                        {post.readTime} min read
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider text-white/30"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
