"use client";

import Image from "next/image";
import React, { useState } from "react";
import AmbientBackground from "../ui/AmbientBackground";
import { companyName, FAQ_DATA } from "@/lib/data";

export default function FAQ() {
  // Set default open item (1 matches the design)
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <AmbientBackground
        variant="light"
        theme="trust"
        glowPosition="top-right"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ================= LEFT COLUMN: ACCORDION LIST ================= */}
        <div className="lg:col-span-7 space-y-6">
          {/* Section Header */}
          <div>
            <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#278393] uppercase block mb-3">
              WHY CHOOSE {companyName}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#083761] leading-[1.18] tracking-tight">
              Why Choose {companyName} ?
            </h2>
          </div>

          {/* Accordion Items */}
          <div className="space-y-3.5 pt-2">
            {FAQ_DATA.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => toggleFAQ(item.id)}
                  className={`group cursor-pointer rounded-2xl border transition-all duration-300 ease-out ${
                    isOpen
                      ? "bg-white border-[#278393]/40 shadow-lg shadow-[#278393]/5 ring-1 ring-[#278393]/20"
                      : "bg-slate-50/70 border-slate-100 hover:border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="p-5 sm:p-6">
                    {/* Question Header & Arrow */}
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors duration-200 ${
                          isOpen
                            ? "text-[#083761]"
                            : "text-slate-800 group-hover:text-[#083761]"
                        }`}
                      >
                        {item.question}
                      </h3>

                      {/* Rotating Chevron Icon */}
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#278393]/15 text-[#278393] rotate-180"
                            : "bg-white text-slate-400 border border-slate-200 group-hover:border-slate-300 group-hover:text-slate-600"
                        }`}
                      >
                        <svg
                          className="w-4 h-4 stroke-[2.5]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Smooth Expandable Answer Body */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pt-3"
                          : "grid-rows-[0fr] opacity-0 pt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pr-4">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: FEATURE IMAGE ================= */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg lg:max-w-none">
            {/* Theme Background Frame */}
            <div className="absolute -inset-3 bg-[#278393]/10 rounded-[32px] -z-10" />

            {/* Main Image Wrapper */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="/images/Faq.jpg"
                alt="Why Choose Finspark Accountancy Team"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
