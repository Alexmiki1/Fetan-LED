import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

import { BLOG_POSTS, getBlogPostBySlug, getRelatedPosts } from "@/lib/constants/blog-posts";
import { COMPANY_NAME, COMPANY_SITE_NAME } from "@/lib/constants/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | ${COMPANY_NAME}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  const relatedPosts = getRelatedPosts(params.slug, 3);

  if (!post) {
    notFound();
  }

  // Convert markdown-like content to HTML
  const contentHtml = post.content
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mt-8 mb-4">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mt-6 mb-3">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mt-4 mb-2">$1</h3>')
    .replace(/\*\*(.*)\*\*/gim, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\n\n/gim, '</p><p class="text-white/80 leading-relaxed mb-4">')
    .replace(/^- (.*$)/gim, '<li class="text-white/80 ml-4 mb-2">$1</li>')
    .replace(/(\d+)\. (.*$)/gim, '<li class="text-white/80 ml-4 mb-2">$2</li>');

  return (
    <div className="min-h-screen bg-[#040e1a]">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: "https://fetanled.com/logo-v2.png",
            author: {
              "@type": "Organization",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: COMPANY_SITE_NAME,
              logo: {
                "@type": "ImageObject",
                url: "https://fetanled.com/logo-v2.png",
              },
            },
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://fetanled.com/blog/${post.slug}`,
            },
          }),
        }}
      />

      {/* Header */}
      <article className="border-b border-white/10 bg-gradient-to-b from-brand-blue/10 to-transparent py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-brand-blue hover:text-brand-blue/80 transition-colors mb-6"
            >
              ← Back to Blog
            </Link>

            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-blue">
                {post.category}
              </span>
              <span className="text-xs text-white/40">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-xs text-white/40">
                {post.readTime} min read
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-white/60 sm:text-xl">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-brand-blue/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-brand-blue">FL</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{post.author}</p>
                  <p className="text-xs text-white/40">LED Screen Experts</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </article>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <div
                className="text-white/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: `<p class="text-white/80 leading-relaxed mb-4">${contentHtml}</p>` }}
              />
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-lg border border-brand-blue/30 bg-brand-blue/10 p-8 text-center">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white mb-4">
                Need LED Screen Solutions in Ethiopia?
              </h3>
              <p className="text-white/60 mb-6">
                Contact Fetan LED for expert consultation, quality products, and professional installation services.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-brand-blue/30 bg-brand-blue px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-brand-blue/90"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-white/10 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white mb-8">
                Related Articles
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-brand-blue/40 hover:bg-white/[0.06]"
                  >
                    <Link href={`/blog/${relatedPost.slug}`} className="flex h-full flex-col">
                      <div className="flex flex-1 flex-col p-6">
                        <div className="mb-4 flex items-center gap-3">
                          <span className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-blue">
                            {relatedPost.category}
                          </span>
                        </div>
                        <h3 className="mb-3 font-display text-lg font-bold uppercase tracking-wide text-white group-hover:text-brand-blue transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-white/60">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between border-t border-white/10 pt-4">
                          <span className="text-xs text-white/40">
                            {relatedPost.readTime} min read
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
