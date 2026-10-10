"use client";

import React from "react";
import {
  // Navigation & General UI
  Home,
  ChevronRight,
  User,
  Users,
  Clock,
  Check,
  Star,
  ShieldCheck,
  Phone,
  CalendarCheck,
  CheckCircle2,

  // Financial & Accounting Specific
  TrendingUp,
  PieChart,
  BarChart3,
  Calculator,
  Coins,
  Building,
  Building2,
  Wrench,
  Receipt,
  Landmark,
  Folder,
  RefreshCw,
  FileText,
  FileSpreadsheet,
  FileCheck,
  Calendar,
} from "lucide-react";

const ICON_MAP = {
  // Navigation & General UI
  Home,
  ChevronRight,
  User,
  Users,
  Clock,
  Check,
  Star,
  ShieldCheck,
  Phone,
  CalendarCheck,
  CheckCircle2,

  // Financial & Accounting Specific
  TrendingUp,
  PieChart,
  BarChart3,
  Calculator,
  Coins,
  Building,
  Building2,
  Wrench,
  Receipt,
  Landmark,
  Folder,
  RefreshCw,
  FileText,
  FileSpreadsheet,
  FileCheck,
  Calendar,
};

export default function TargetAudience({ badge, heading, subHeading, items }) {
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
            const Icon =
              typeof item.icon === "string" ? ICON_MAP[item.icon] : item.icon;

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
