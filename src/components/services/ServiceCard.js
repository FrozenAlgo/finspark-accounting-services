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
  const isFeatured =
    service.highlight === true ||
    service.slug === "making-tax-digital" ||
    service.id === "making-tax-digital";

  return (
    <div
      className={`relative bg-white/80 backdrop-blur-md border rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-[#278393]/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer ${
        isFeatured
          ? "border-[#278393]/50 ring-1 ring-[#278393]/25"
          : "border-slate-200/80 hover:border-[#278393]/40"
      }`}
      onClick={() => service.href && router.push(service.href)}
    >
      {isFeatured && (
        <span className="absolute top-3 right-3 z-10 text-[10px] font-extrabold uppercase tracking-wider bg-[#278393] text-white px-2.5 py-1 rounded-full shadow-sm">
          Featured
        </span>
      )}

      {/* Upper Content */}
      <div>
        {/* Icon Container */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0 ${
            isFeatured
              ? "bg-[#278393] text-white"
              : "bg-[#278393]/10 text-[#278393] group-hover:bg-[#278393] group-hover:text-white"
          }`}
        >
          <Icon size={22} strokeWidth={2.2} />
        </div>

        {/* Title & Description */}
        <div className="pt-5 pb-4 border-b border-slate-100">
          <h3 className="text-xl font-bold text-[#083761] mb-2 group-hover:text-[#278393] transition-colors leading-snug pr-16">
            {service.title}
          </h3>
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
