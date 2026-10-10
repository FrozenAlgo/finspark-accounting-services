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

export default function FeatureCard({ feature }) {
  const IconComponent =
    typeof feature.icon === "string" ? ICON_MAP[feature.icon] : feature.icon;
  return (
    <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-[#278393]/40 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-[#278393]/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer">
      {/* Upper Content */}
      <div>
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-xl bg-[#278393]/10 text-[#278393] flex items-center justify-center group-hover:bg-[#278393] group-hover:text-white transition-colors duration-300 shrink-0">
          <IconComponent size={22} strokeWidth={2.2} />
        </div>

        {/* Title & Description */}
        <div className="pt-5 pb-5 border-b border-slate-100">
          <h4 className="text-xl font-bold text-[#083761] mb-2 group-hover:text-[#278393] transition-colors leading-snug">
            {feature.title}
          </h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            {feature.description}
          </p>
        </div>
        <span className="text-sm bg-[#278393]/10 p-2 rounded-full text-[#278393] ">
          <span className="me-1">●</span>
          {feature.tag}
        </span>
      </div>

      {/* Bullet Points List */}
    </div>
  );
}
