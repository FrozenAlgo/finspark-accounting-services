"use client";

import React from "react";
import { Star, ShieldCheck, ExternalLink } from "lucide-react";

const reviews = [
  {
    quote:
      "Extremely professional and approachable. If I have queries they put everything into layman's terms. Quick to respond and thorough.",
    initials: "LS",
    name: "Linzi Spence",
    role: "Sole Trader • London",
  },
  {
    quote:
      "Amazing service always able to help quickly & give you the answers so you can understand.",
    initials: "SF",
    name: "Steven French",
    role: "Self-Assessment Client",
  },
  {
    quote:
      "Absolutely outstanding accountants! Highly professional, extremely knowledgeable, and consistently deliver accurate results with exceptional service.",
    initials: "KP",
    name: "Kelly Philpot",
    role: "Local Business Director",
  },
  {
    quote:
      "With Finspark for a number of years now. Friendly, approachable yet utterly professional. Always on hand for invoicing, payroll, and year-end guidance.",
    initials: "SC",
    name: "Sue Clark",
    role: "Advisory Client (Multi-Year)",
  },
  {
    quote:
      "Top service from Finspark, great knowledge and highly recommended across London and the UK.",
    initials: "AP",
    name: "Andy Parslow",
    role: "Trades & Services Owner",
  },
  {
    quote:
      "Fantastic service, great communication - I would highly recommend to anyone seeking accounting help!",
    initials: "TB",
    name: "Taylor Brown",
    role: "Small Business Owner",
  },
  {
    quote:
      "We are very happy with Finspark's wonderful service. Thank you for all your hard work guys.",
    initials: "BH",
    name: "Book A Holiday Ltd",
    role: "Hospitality & Travel",
  },
  {
    quote:
      "Friendly service and just what was needed. A breath of fresh air in accountancy!",
    initials: "GP",
    name: "George Parker-Jones",
    role: "Freelance Specialist",
  },
  {
    quote:
      "Asif and Asim made the entire switch completely painless. They took over everything from our previous firm within 48 hours without any downtime.",
    initials: "DM",
    name: "David Miller",
    role: "Director • London",
  },
];

export default function ReviewsSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-[#278393] uppercase bg-[#278393]/10 px-3.5 py-1.5 rounded-full border border-[#278393]/20">
              UNFILTERED PUBLIC FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#083761] tracking-tight">
              Verified Client Reviews
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-2xl shadow-2xs">
            <span className="text-xs font-black text-[#083761]">GOOGLE</span>
            <span className="text-xs text-slate-500 font-medium">
              Synced directly with Google My Business
            </span>
          </div>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-md hover:border-[#278393]/40 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    <ShieldCheck size={12} className="text-[#278393]" />
                    Google Verified
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  “{rev.quote}”
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-[#083761] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {rev.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#083761] truncate">
                    {rev.name}
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium truncate">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-4">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#083761] hover:text-[#278393] border border-slate-200 hover:border-[#278393]/40 px-6 py-3 rounded-full font-bold text-xs shadow-xs transition-all duration-300"
          >
            <span>Read all verified reviews on Google Maps</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
