"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AmbientBackground from "../ui/AmbientBackground";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Decorator */}
      <AmbientBackground
        variant="light"
        theme="finance"
        glowPosition="top-left"
      />

      {/* Main Content (Layered above ambient background) */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* ================= HEADER ================= */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#278393] uppercase block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#083761] leading-tight tracking-tight">
            Trusted By Local Business Leaders
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Here is what local directors and sole traders say about Finspark
            Accounting and Business Services Limited.
          </p>
        </div>

        {/* ================= CAROUSEL WRAPPER ================= */}
        <div
          className="relative px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Overflow viewport */}
          <div className="overflow-hidden py-4 -my-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {TESTIMONIALS.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3"
                >
                  <div className="h-full bg-white/85 backdrop-blur-md hover:bg-white border border-slate-200/80 hover:border-[#278393]/40 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-2xl hover:shadow-[#278393]/10 transition-all duration-300 hover:-translate-y-1.5 group">
                    {/* Upper Section */}
                    <div>
                      {/* Star Rating */}
                      <div className="flex gap-1 text-amber-400 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="currentColor"
                            stroke="none"
                          />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="text-slate-700 text-sm sm:text-[15px] italic leading-relaxed mb-8 font-normal group-hover:text-slate-900 transition-colors">
                        {item.quote}
                      </p>
                    </div>

                    {/* Lower Section */}
                    <div>
                      <div className="w-full h-[1px] bg-slate-200/60 mb-6" />

                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-full ${item.avatarBg} text-white font-bold flex items-center justify-center shrink-0 text-sm tracking-wide shadow-xs`}
                        >
                          {item.initials}
                        </div>

                        <div className="min-w-0">
                          <h4 className="font-bold text-[#083761] text-base leading-tight truncate">
                            {item.name}
                          </h4>
                          <p className="text-slate-500 text-xs truncate mt-0.5">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CONTROLS & PAGINATION ================= */}
          <div className="flex items-center justify-between mt-8 pt-2">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {[...Array(maxIndex + 1)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-8 bg-[#278393]"
                      : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-[#278393] hover:text-white hover:border-[#278393] transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={20} strokeWidth={2.2} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-[#278393] hover:text-white hover:border-[#278393] transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <ChevronRight size={20} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
