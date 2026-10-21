"use client";

import React from "react";
import { ShieldCheck, Star, Lock } from "lucide-react";

export default function TrustAuditCard() {
  const metrics = [
    { label: "Clarity & Plain English Advice", value: "100%" },
    { label: "Responsiveness & Support Speed", value: "100%" },
    { label: "Accurate Tax & HMRC Compliance", value: "100%" },
    { label: "Unexplained / Hidden Invoices", value: "0 recorded" },
  ];

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#278393]/10 text-[#278393] flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#083761]">
              Google Verified
            </h4>
            <p className="text-[11px] text-slate-400 font-medium">
              Live audit snapshot via Trustindex
            </p>
          </div>
        </div>
        <span className="text-[10px] font-extrabold bg-emerald-50 text-emerald-600 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
          Active Practice
        </span>
      </div>

      {/* Main Score & Stars */}
      <div className="space-y-1">
        <div className="flex items-baseline gap-3">
          <span className="text-4xl sm:text-5xl font-black text-[#083761]">
            5.0
          </span>
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-current" />
            ))}
          </div>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          Overall satisfaction rating based on public reviews
        </p>
      </div>

      {/* Progress / Metric Bars */}
      <div className="space-y-4 pt-2">
        {metrics.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700">{item.label}</span>
              <span className="text-[#083761]">{item.value}</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#083761] rounded-full"
                style={{
                  width: item.value.includes("%") ? item.value : "100%",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Audit Tag */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium bg-slate-50 p-3.5 rounded-2xl">
        <div className="flex items-center gap-2 text-[#083761] font-bold">
          <Lock size={14} className="text-[#278393]" />
          <span>Independent Client Audit</span>
        </div>
        <span className="text-[#278393] font-extrabold">
          Client-Focused Support
        </span>
      </div>
    </div>
  );
}
