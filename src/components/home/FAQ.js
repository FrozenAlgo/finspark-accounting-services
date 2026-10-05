"use client";

import Image from "next/image";
import React, { useState } from "react";

const FAQ_DATA = [
  {
    id: 1,
    question: "Fast, reliable communication",
    answer:
      "When you contact us, you'll get a prompt response and clear answers. No chasing, no being passed around, just straightforward support when you need it.",
  },
  {
    id: 2,
    question: "One dedicated team that knows your business",
    answer:
      "You'll work directly with experienced accountants who understand your specific industry, goals, and day-to-day operations inside and out.",
  },
  {
    id: 3,
    question: "Clear advice, without the jargon",
    answer:
      "We speak plain English. No complicated accounting terminology or hidden complexities—just simple, actionable insights to grow your business.",
  },
  {
    id: 4,
    question: "Built around small businesses",
    answer:
      "Our accounting and advisory services are tailored specifically for sole traders, SMEs, and ambitious entrepreneurs looking for flexible support.",
  },
  {
    id: 5,
    question: "Local, personal, and accountable",
    answer:
      "Based nearby, we offer both virtual convenience and face-to-face meetings, ensuring you always have a trusted partner in your corner.",
  },
];

export default function FAQ() {
  // Set default open item (1 matches the screenshot)
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    // Click open item again to close it, or click new one to open
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ================= LEFT COLUMN: ACCORDION LIST ================= */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1E36] tracking-tight mb-8">
            Why Choose Penney's?
          </h2>

          <div className="space-y-3.5">
            {FAQ_DATA.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => toggleFAQ(item.id)}
                  className={`group cursor-pointer rounded-2xl border transition-all duration-300 ease-out hover:scale-[1.01] active:scale-[0.99] ${
                    isOpen
                      ? "bg-white border-slate-300 shadow-lg shadow-slate-100 ring-1 ring-slate-200"
                      : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div className="p-5 sm:p-6">
                    {/* Question Header & Arrow */}
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors duration-200 ${
                          isOpen
                            ? "text-[#0B1E36]"
                            : "text-slate-800 group-hover:text-[#0B1E36]"
                        }`}
                      >
                        {item.question}
                      </h3>

                      {/* Rotating Chevron Icon */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-slate-100 text-slate-900 rotate-180"
                            : "bg-transparent text-slate-500 group-hover:bg-slate-50"
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
          <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <Image
              src="/images/Faq.jpg"
              width={100}
              height={100}
              alt="Why Choose Penney's Accountancy Team"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
