"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { blogCategories } from "@/lib/blogData";

export default function BlogListing({ posts }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const featuredPost = posts.find((p) => p.featured) || posts[0] || null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (p.featured) return false;
      const catOk =
        activeCategory === "All Articles" || p.category === activeCategory;
      if (!catOk) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
      );
    });
  }, [posts, query, activeCategory]);

  const totalVisible =
    (featuredPost &&
    (activeCategory === "All Articles" ||
      featuredPost.category === activeCategory) &&
    (!query.trim() ||
      featuredPost.title.toLowerCase().includes(query.toLowerCase()) ||
      featuredPost.excerpt.toLowerCase().includes(query.toLowerCase()))
      ? 1
      : 0) + filtered.length;

  const showFeatured =
    featuredPost &&
    (activeCategory === "All Articles" ||
      featuredPost.category === activeCategory) &&
    (!query.trim() ||
      featuredPost.title.toLowerCase().includes(query.toLowerCase()) ||
      featuredPost.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      featuredPost.category.toLowerCase().includes(query.toLowerCase()));

  return (
    <main className="min-h-screen bg-slate-50/50 py-12 lg:py-16 px-4 sm:px-6 lg:px-12 space-y-16">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#278393]/15 text-[#278393] border border-[#278393]/25 text-xs font-bold tracking-wider uppercase">
            <ShieldCheck size={14} />
            Practical Financial Insights & Regulatory Updates
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#083761] tracking-tight leading-tight">
            Clear Tax Guidance, Plain English Business Insights
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Expert UK accounting articles, Making Tax Digital (MTD) updates, CIS
            compliance advice, and actionable tax strategy written by Asif
            Chaudhry, Asim Malik, and our advisory team across London & the UK.
          </p>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:max-w-2xl">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tax deadlines, MTD rules, allowable expenses, or CIS advice..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-[#083761] placeholder:text-slate-400 focus:outline-none focus:border-[#278393] transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 shrink-0 self-end md:self-center">
            <SlidersHorizontal size={14} className="text-[#278393]" />
            <span>
              Showing {totalVisible} publication{totalVisible === 1 ? "" : "s"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-[#083761] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-[#278393]/50 hover:text-[#278393]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {showFeatured && featuredPost && (
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-xl shadow-slate-100 grid grid-cols-1 lg:grid-cols-12 items-stretch group hover:border-[#278393]/40 transition-all duration-300">
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[420px] bg-slate-900">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {featuredPost.badge && (
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-[#083761] text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-white/40 shadow-sm">
                    ★ {featuredPost.badge}
                  </span>
                </div>
              )}
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                  <span className="text-[#278393]">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={13} />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#083761] tracking-tight leading-snug">
                  {featuredPost.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#083761] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {featuredPost.authorInitials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#083761]">
                      {featuredPost.author}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {featuredPost.publishedLabel}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/blogs/${featuredPost.slug}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#083761] hover:bg-[#278393] text-white px-5 py-3 rounded-xl text-xs font-bold shadow-sm transition-all"
                >
                  <span>Read Article</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#083761] tracking-tight">
              Recent Tax Insights & Regulatory Notes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Written for business owners, contractors and landlords across
              London & the UK.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#278393] bg-[#278393]/10 px-3.5 py-1.5 rounded-full self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#278393] animate-pulse" />
            Practical HMRC-focused updates
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-slate-500 py-12 text-center">
            No articles match your search. Try another keyword or category.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <div
                key={post.slug}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl hover:border-[#278393]/40 transition-all duration-300 group"
              >
                <div className="space-y-5">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-md text-[#083761] text-[10px] font-bold px-3 py-1 rounded-full border border-white/40 shadow-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-lg font-black text-[#083761] group-hover:text-[#278393] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#083761] text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                      {post.authorInitials}
                    </div>
                    <span className="text-xs font-bold text-[#083761]">
                      {post.author}
                    </span>
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#278393] text-[#083761] group-hover:text-white flex items-center justify-center transition-all duration-300"
                    aria-label={`Read ${post.title}`}
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
