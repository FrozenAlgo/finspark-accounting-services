"use client";

import React from "react";
import {
  Calculator,
  Building2,
  Users,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";
import { useRouter } from "next/navigation";

const ICON_MAP = {
  Calculator,
  Building2,
  Users,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  FileSpreadsheet,
};

export default function ServiceCard({ service }) {
  const Icon = ICON_MAP[service.icon || service.iconName] || Calculator;
  const router = useRouter();
  return (
    <div
      className="bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-[#278393]/40 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-[#278393]/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
      onClick={() => service.href && router.push(service.href)}
    >
      {/* Upper Content */}
      <div>
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-xl bg-[#278393]/10 text-[#278393] flex items-center justify-center group-hover:bg-[#278393] group-hover:text-white transition-colors duration-300 shrink-0">
          <Icon size={22} strokeWidth={2.2} />
        </div>

        {/* Title & Description */}
        <div className="pt-5 pb-4 border-b border-slate-100">
          <h4 className="text-xl font-bold text-[#083761] mb-2 group-hover:text-[#278393] transition-colors leading-snug">
            {service.title}
          </h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            {service.description}
          </p>
        </div>
      </div>

      {/* Bullet Points List */}
      <ul className="space-y-2.5 pt-4 text-slate-600 text-xs sm:text-sm">
        {service.points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#278393] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
            <span className="leading-relaxed font-medium text-slate-700">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
