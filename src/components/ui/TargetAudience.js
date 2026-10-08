"use client";

import React from "react";
import { User, Building2, Wrench, Clock } from "lucide-react";

const DEFAULT_AUDIENCE = [
  {
    id: "sole-traders",
    title: "Sole Traders",
    description:
      "If you're running your business on your own, bookkeeping can quickly become time-consuming. We provide clarity, handle HMRC filings, and explain your cash flow in plain English.",
    tag: "Clarity & Compliance",
    icon: User,
  },
  {
    id: "limited-companies",
    title: "Limited Companies",
    description:
      "Essential foundation for corporate tax, VAT returns, payroll, and directors' loans. Consistent bookkeeping that keeps management accounts in flawless shape.",
    tag: "Structured Reporting",
    icon: Building2,
  },
  {
    id: "trades-services",
    title: "Trades & Services",
    description:
      "Handling frequent payments, supplier invoices, material costs, and CIS deductions. Clean records so you never face end-of-quarter or supplier panics.",
    tag: "High Transaction Flow",
    icon: Wrench,
  },
  {
    id: "growing-businesses",
    title: "Growing Businesses",
    description:
      "Business owners wanting to reclaim evenings and weekends. Eliminate financial admin stress with a responsive team that proactively spots discrepancies.",
    tag: "Time Reclaimed",
    icon: Clock,
  },
];

export default function TargetAudience({
  badge = "Tailored Accounting Support",
  heading = "Who our bookkeeping services are for",
  subHeading = "Whether you're starting out or running a multi-team company, we adapt to the cadence of your daily operations.",
  items = DEFAULT_AUDIENCE,
}) {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-12 bg-slate-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {badge && (
            <div className="inline-block">
              <span className="text-xs font-extrabold tracking-widest text-[#278393] uppercase bg-[#278393]/10 px-3.5 py-1.5 rounded-full border border-[#278393]/20">
                {badge}
              </span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#083761] tracking-tight leading-tight">
            {heading}
          </h2>

          {subHeading && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              {subHeading}
            </p>
          )}
        </div>

        {/* 4-Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon || User;

            return (
              <div
                key={item.id || item.title}
                className="bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-[#278393]/50 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-xl hover:shadow-[#278393]/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#278393]/10 text-[#278393] flex items-center justify-center group-hover:bg-[#278393] group-hover:text-white transition-colors duration-300 shrink-0">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#083761] group-hover:text-[#278393] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Tag Badge */}
                <div className="pt-6">
                  <span className="inline-block text-xs font-semibold text-slate-600 bg-slate-100 group-hover:bg-[#278393]/10 group-hover:text-[#278393] rounded-lg px-3 py-1.5 transition-colors duration-300">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
