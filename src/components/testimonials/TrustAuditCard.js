"use client";

import React from "react";
import { ShieldCheck, Lock } from "lucide-react";

/**
 * Service-standards card (not a live Google score).
 * Bars use internal targets — honest framing for a practice without public review APIs yet.
 */
export default function TrustAuditCard() {
  const metrics = [
    {
      label: "Plain-English explanations",
      hint: "Advice without unnecessary jargon",
      value: 96,
    },
    {
      label: "Response on business days",
      hint: "Target: within 24 hours",
      value: 94,
    },
    {
      label: "Filing process reliability",
      hint: "Organised records & deadline tracking",
      value: 97,
    },
    {
      label: "Fee clarity",
      hint: "Agreed scope before work starts",
      value: 98,
    },
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
              Service standards
            </h4>
            <p className="text-[11px] text-slate-400 font-medium">
              How we aim to work with every client
            </p>
          </div>
        </div>
        <span className="text-[10px] font-extrabold bg-[#278393]/10 text-[#278393] border border-[#278393]/20 px-3 py-1 rounded-full uppercase tracking-wider">
          Finspark
        </span>
      </div>

      {/* Intro — no fake star score */}
      <div className="space-y-1">
        <p className="text-sm font-bold text-[#083761]">
          Built around clarity, access and deadlines
        </p>
        <p className="text-xs text-slate-500 font-medium leading-relaxed">
          These bars reflect our internal service targets — not a live Google or
          third-party score. Real client comments are on the testimonials page.
        </p>
      </div>

      {/* Progress bars */}
      <div className="space-y-4 pt-1">
        {metrics.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex justify-between items-start gap-3 text-xs font-bold">
              <div className="min-w-0">
                <span className="text-slate-700 block">{item.label}</span>
                <span className="text-[10px] font-medium text-slate-400">
                  {item.hint}
                </span>
              </div>
              <span className="text-[#083761] shrink-0 tabular-nums">
                {item.value}%
              </span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#083761] rounded-full transition-all"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer tag */}
      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-medium bg-slate-50 p-3.5 rounded-2xl">
        <div className="flex items-center gap-2 text-[#083761] font-bold">
          <Lock size={14} className="text-[#278393]" />
          <span>Named adviser support</span>
        </div>
        <span className="text-[#278393] font-extrabold">
          24h reply · business days
        </span>
      </div>
    </div>
  );
}
