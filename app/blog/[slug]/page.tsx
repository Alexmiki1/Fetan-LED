import { Metadata } from "next";
import { notFound } from "next/navigation";

import { BLOG_POSTS, getBlogPostBySlug, getRelatedPosts } from "@/lib/constants/blog-posts";
import { COMPANY_NAME, COMPANY_SITE_NAME } from "@/lib/constants/navigation";
import { BlogPostClient } from "./blog-post-client";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  const relatedPosts = getRelatedPosts(slug, 3);

  if (!post) {
    notFound();
  }

  return (
    <BlogPostClient
      post={post}
      relatedPosts={relatedPosts}
      companyName={COMPANY_NAME}
      companySiteName={COMPANY_SITE_NAME}
    />
  );
}
