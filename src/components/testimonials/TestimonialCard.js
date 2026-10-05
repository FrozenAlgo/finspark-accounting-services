"use client";

import React, { useState, useEffect } from "react";

const REVIEWS = [
  {
    id: 1,
    name: "Velaris Marketing",
    role: "Web Designer",
    timeAgo: "6 months ago",
    avatarText: "V",
    avatarBg: "bg-emerald-800",
    theme: "pink",
    text: "As a small business, I wanted a local, reliable accountant and was recommended to Penney's Accountancy. From the first consultation, their attention to detail gave us total confidence.",
  },
  {
    id: 2,
    name: "Sue Clark",
    role: "Business Owner",
    timeAgo: "6 months ago",
    avatarText: "S",
    avatarBg: "bg-stone-700",
    theme: "amber",
    text: "We have been with Penney's for a number of years now and without fail they provide a friendly and approachable yet utterly professional service.",
  },
  {
    id: 3,
    name: "Andy Parslow",
    role: "Product Manager",
    timeAgo: "8 months ago",
    avatarText: "A",
    avatarBg: "bg-amber-800",
    theme: "cyan",
    text: "Top service from Penneys, great knowledge and highly recommended! They handled our accounting transition with ease.",
  },
  {
    id: 4,
    name: "Taylor Brown",
    role: "Marketing Lead",
    timeAgo: "9 months ago",
    avatarText: "T",
    avatarBg: "bg-sky-600",
    theme: "pink",
    text: "Fantastic service, Great communication - I would highly recommend! Very responsive team and great advice throughout.",
  },
];

const THEMES = {
  pink: {
    starColor: "text-rose-500 fill-rose-500",
    quoteBg: "bg-rose-100 text-rose-500",
    bottomPaperBg: "bg-[#fbe3e8]", // Soft pink bottom card
    avatarBg: "bg-rose-500",
  },
  amber: {
    starColor: "text-amber-500 fill-amber-500",
    quoteBg: "bg-amber-100 text-amber-500",
    bottomPaperBg: "bg-[#f5ebd7]", // Soft warm amber bottom card
    avatarBg: "bg-amber-500",
  },
  cyan: {
    starColor: "text-sky-500 fill-sky-500",
    quoteBg: "bg-sky-100 text-sky-500",
    bottomPaperBg: "bg-[#dbf0f8]", // Soft cyan bottom card
    avatarBg: "bg-sky-500",
  },
};

export default function TestimonialCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const prevSlide = () => {
    triggerTransition(() => {
      setStartIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
    });
  };

  const nextSlide = () => {
    triggerTransition(() => {
      setStartIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
    });
  };

  // Smooth fade-in wrapper trigger
  const triggerTransition = (updateState) => {
    setIsFading(true);
    setTimeout(() => {
      updateState();
      setIsFading(false);
    }, 250);
  };

  // Auto-play interval (4 Seconds) with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [startIndex, isPaused]);

  // Compute visible 3 cards dynamically
  const visibleReviews = [
    REVIEWS[startIndex],
    REVIEWS[(startIndex + 1) % REVIEWS.length],
    REVIEWS[(startIndex + 2) % REVIEWS.length],
  ];

  return (
    <section className="w-full bg-[#fdf8f8] py-14 px-4 md:px-8 border-y border-rose-100/60 overflow-hidden">
      <div className=" mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* ================= LEFT SIDE: GOOGLE SUMMARY ================= */}
        <div className="w-full lg:w-1/5  flex flex-col items-center justify-center text-center shrink-0 mb-6 lg:mb-0">
          <h3 className="text-xl font-black tracking-widest text-slate-900 uppercase">
            EXCELLENT
          </h3>

          {/* 5 Big Gold Stars */}
          <div className="flex items-center gap-1 my-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-7 h-7 fill-amber-400 text-amber-400 drop-shadow-xs"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <p className="text-sm font-semibold text-slate-600">
            Based on{" "}
            <span className="font-bold underline text-slate-800">
              17 reviews
            </span>
          </p>

          {/* Official Google Brand Logo */}
          <div className="flex items-center gap-0.5 font-bold text-2xl tracking-tight mt-2 drop-shadow-xs">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>
        </div>

        {/* ================= RIGHT SIDE: STACKED CAROUSEL ================= */}
        <div
          className="relative w-full lg:w-4/5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous review"
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-slate-800 text-white shadow-lg flex items-center justify-center hover:bg-slate-900 transition-all active:scale-90 hover:scale-105"
          >
            <svg
              className="w-5 h-5 stroke-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next review"
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white text-slate-800 border border-slate-200 shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all active:scale-90 hover:scale-105"
          >
            <svg
              className="w-5 h-5 stroke-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards Grid Container */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-16 pt-2 pb-14 px-2 transition-opacity duration-300 ${
              isFading
                ? "opacity-40 translate-x-1"
                : "opacity-100 translate-x-0"
            }`}
          >
            {visibleReviews.map((review, idx) => {
              const theme = THEMES[review.theme] || THEMES.pink;

              return (
                <div
                  key={`${review.id}-${idx}`}
                  className="relative group cursor-pointer"
                >
                  {/* 1. BOTTOM PAPER LAYER WITH CLEARLY VISIBLE STARS */}
                  <div
                    className={`absolute -inset-x-1 top-6 -bottom-11 rounded-2xl transform rotate-[-6deg] shadow-md flex items-end justify-center pb-2.5 px-4 transition-all duration-300 group-hover:rotate-[-8deg] group-hover:-bottom-12 ${theme.bottomPaperBg}`}
                  >
                    {/* Stars Row */}
                    <div className="flex items-center gap-1 z-10">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${theme.starColor}`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* 2. SECOND PAPER LAYER */}
                  <div className="absolute inset-0 rounded-2xl bg-slate-200/90 transform rotate-[4deg] translate-y-2.5 shadow-xs transition-transform duration-300 group-hover:rotate-[6deg]" />

                  {/* 3. FIRST PAPER LAYER */}
                  <div className="absolute inset-0 rounded-2xl bg-slate-100 transform rotate-[-2deg] shadow-xs" />

                  {/* 4. MAIN TOP WHITE CARD */}
                  <div className="relative z-20 bg-white rounded-2xl p-5 shadow-xl border border-slate-100/90 flex flex-col justify-between min-h-[240px] transition-all duration-300 group-hover:-translate-y-1.5">
                    {/* Quotation Mark Accent */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-serif text-xl font-black transition-transform duration-300 group-hover:scale-110 ${theme.quoteBg}`}
                      >
                        ”
                      </div>
                    </div>

                    <div>
                      {/* Avatar + Info Header */}
                      <div className="flex items-center gap-3 mb-3 pr-8">
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm shadow-sm shrink-0 ${review.avatarBg}`}
                        >
                          {review.avatarText}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-slate-800 text-sm leading-snug tracking-tight">
                            {review.name}
                          </h4>
                          <p className="text-xs font-semibold text-slate-400">
                            {review.role}
                          </p>
                        </div>
                      </div>

                      {/* Line Accent with Decorative Dot */}
                      <div className="relative flex items-center my-2.5">
                        <div className="w-full border-t border-slate-200/90" />
                        <div className="w-2 h-2 rounded-full bg-slate-300 absolute right-6" />
                      </div>

                      {/* Review Text */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal italic line-clamp-4">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-slate-400">
                        {review.timeAgo}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
                        Read more
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
