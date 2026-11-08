import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from "lucide-react";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blogData";
import { companyName } from "@/lib/data";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function ContentBlock({ block }) {
  if (block.type === "p") {
    return (
      <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed font-normal">
        {block.text}
      </p>
    );
  }
  if (block.type === "h2") {
    return (
      <h2 className="text-xl sm:text-2xl font-black text-[#083761] tracking-tight pt-4">
        {block.text}
      </h2>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 className="text-lg font-bold text-[#083761] tracking-tight pt-2">
        {block.text}
      </h3>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="list-disc pl-5 space-y-2 text-[15px] sm:text-base text-slate-600">
        {block.items.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "callout") {
    return (
      <div className="my-2 rounded-2xl border border-[#278393]/25 bg-[#278393]/8 px-5 py-4">
        <p className="text-sm sm:text-[15px] font-medium text-[#083761] leading-relaxed">
          {block.text}
        </p>
      </div>
    );
  }
  return null;
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.category, post.slug, 3);

  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* Hero band */}
      <section className="bg-white border-b border-slate-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 space-y-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#278393] hover:text-[#083761] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
            <span className="text-[#278393] bg-[#278393]/10 px-2.5 py-1 rounded-lg">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={13} />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar size={13} />
              {post.publishedLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#083761] tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-11 h-11 rounded-full bg-[#083761] text-white flex items-center justify-center font-bold text-sm shrink-0">
              {post.authorInitials}
            </div>
            <div>
              <p className="text-sm font-bold text-[#083761]">{post.author}</p>
              <p className="text-xs text-slate-500 font-medium">
                {post.authorRole || "Finspark Accounting"}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="relative w-full aspect-[21/9] min-h-[200px] rounded-2xl overflow-hidden bg-slate-900">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-5">
        <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-[#278393] pl-4">
          {post.excerpt}
        </p>

        {post.content?.map((block, idx) => (
          <ContentBlock key={idx} block={block} />
        ))}

        <p className="text-xs text-slate-400 pt-6 leading-relaxed">
          This article is for general information only and does not constitute
          personal tax or legal advice. Rules and thresholds change — confirm
          current HMRC guidance or speak to {companyName} about your situation.
        </p>
      </article>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl bg-[#083761] px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Want this applied to your numbers?
            </h2>
            <p className="text-sm text-slate-300 font-medium">
              Book a consultation with the Finspark team — plain English, fixed
              fees, direct adviser access.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#278393] hover:bg-white hover:text-[#083761] text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all shrink-0"
          >
            Book a consultation
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-slate-200/80 bg-white py-14 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-8">
            <h2 className="text-2xl font-black text-[#083761] tracking-tight">
              Related articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blogs/${r.slug}`}
                  className="group bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-[#278393]/40 hover:shadow-md transition-all space-y-3"
                >
                  <span className="text-[11px] font-bold text-[#278393]">
                    {r.category}
                  </span>
                  <h3 className="text-base font-bold text-[#083761] group-hover:text-[#278393] leading-snug line-clamp-2">
                    {r.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500">
                    Read more <ArrowUpRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
