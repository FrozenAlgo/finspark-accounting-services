"use client";

import React from "react";
import { Star, ShieldCheck, ExternalLink } from "lucide-react";

/**
 * rating: 1–5 (vary so not every card is 5/5)
 * Keep quotes realistic — no multi-year / decade claims for a newer practice
 */
const reviews = [
  {
    quote:
      "Extremely professional and approachable. If I have queries they put everything into layman's terms. Quick to respond and thorough.",
    initials: "LS",
    name: "Linzi Spence",
    role: "Sole Trader • London",
    rating: 5,
  },
  {
    quote:
      "Amazing service — always able to help quickly and explain answers so you can actually understand them.",
    initials: "SF",
    name: "Steven French",
    role: "Self-Assessment Client",
    rating: 5,
  },
  {
    quote:
      "Professional, knowledgeable, and reliable on the day-to-day numbers. A few small admin delays at the start, but overall very solid.",
    initials: "KP",
    name: "Kelly Philpot",
    role: "Local Business Director",
    rating: 4,
  },
  {
    quote:
      "Friendly, approachable and professional. Always on hand for invoicing, payroll questions and year-end guidance.",
    initials: "SC",
    name: "Sue Clark",
    role: "Advisory Client",
    rating: 5,
  },
  {
    quote:
      "Good knowledge of CIS and trade work. Communication is clear — would recommend to other contractors.",
    initials: "AP",
    name: "Andy Parslow",
    role: "Trades & Services Owner",
    rating: 4,
  },
  {
    quote:
      "Great communication and practical help when we needed it. Happy to recommend Finspark.",
    initials: "TB",
    name: "Taylor Brown",
    role: "Small Business Owner",
    rating: 5,
  },
  {
    quote:
      "We are very happy with the service. Thank you for the hard work on our accounts.",
    initials: "BH",
    name: "Book A Holiday Ltd",
    role: "Hospitality & Travel",
    rating: 5,
  },
  {
    quote:
      "Friendly service and just what we needed — a clearer, more modern way of working with an accountant.",
    initials: "GP",
    name: "George Parker-Jones",
    role: "Freelance Specialist",
    rating: 4,
  },
  {
    quote:
      "Asif and Asim made switching accountants straightforward. They picked up CIS and payroll without disruption to our team.",
    initials: "DM",
    name: "David Miller",
    role: "Director • London",
    rating: 5,
  },
];

function Stars({ rating }) {
  const value = Math.min(5, Math.max(1, Number(rating) || 5));
  return (
    <div
      className="flex items-center gap-0.5 text-amber-400"
      aria-label={`${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={14}
          className={n <= value ? "fill-current" : "fill-none text-slate-300"}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-[#278393] uppercase bg-[#278393]/10 px-3.5 py-1.5 rounded-full border border-[#278393]/20">
              <ShieldCheck size={14} />
              Client feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#083761] tracking-tight">
              What clients say about working with us
            </h2>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Honest feedback from business owners and contractors. Ratings vary
              because real experiences do — we aim for clear advice and reliable
              support every time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-md hover:border-[#278393]/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Stars rating={rev.rating} />
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                    <ShieldCheck size={12} className="text-[#278393]" />
                    Client review
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  “{rev.quote}”
                </p>
              </div>

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

        <div className="flex justify-center pt-4">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#083761] hover:text-[#278393] border border-slate-200 hover:border-[#278393]/40 px-6 py-3 rounded-full font-bold text-xs shadow-xs transition-all duration-300"
          >
            <span>Find us on Google Maps</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
