import { Metadata } from "next";

import { BLOG_POSTS } from "@/lib/constants/blog-posts";
import { COMPANY_NAME } from "@/lib/constants/navigation";
import { BlogClient } from "./blog-client";

export const metadata: Metadata = {
  title: `Blog | ${COMPANY_NAME}`,
  description: "Expert insights and guides about LED screen technology, installation, and best practices in Ethiopia.",
  openGraph: {
    title: `Blog | ${COMPANY_NAME}`,
    description: "Expert insights and guides about LED screen technology, installation, and best practices in Ethiopia.",
  },
};

export default function BlogPage() {
  return <BlogClient posts={BLOG_POSTS} />;
}
