import BlogListing from "@/components/blogs/BlogListing";
import { posts } from "@/lib/blogData";

export const metadata = {
  title: "Blog",
  description:
    "UK tax, Making Tax Digital, CIS, VAT and small-business guidance from Finspark Accounting. Plain-English articles by FCCA advisers Asif Chaudhry and Asim Malik.",
};

export default function BlogPage() {
  // Pass serialisable post data only (no functions/components)
  const listingPosts = posts.map(
    ({
      slug,
      title,
      excerpt,
      category,
      badge,
      readTime,
      author,
      authorRole,
      authorInitials,
      publishedDate,
      publishedLabel,
      image,
      featured,
    }) => ({
      slug,
      title,
      excerpt,
      category,
      badge,
      readTime,
      author,
      authorRole,
      authorInitials,
      publishedDate,
      publishedLabel,
      image,
      featured,
    }),
  );

  return <BlogListing posts={listingPosts} />;
}
