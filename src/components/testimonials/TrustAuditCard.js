"use client";

import React from "react";
import { ShieldCheck, Lock } from "lucide-react";

/**
 * Service-standards card — bars without fake Google scores or odd percentages.
 * level: 1–5 controls bar fill only (visual priority, not a public rating).
 */
export default function TrustAuditCard() {
  const metrics = [
    {
      label: "Plain-English explanations",
      hint: "Advice without unnecessary jargon",
      level: 5,
    },
    {
      label: "Response on business days",
      hint: "Within 24 hours target",
      level: 5,
    },
    {
      label: "Filing process reliability",
      hint: "Records organised · deadlines tracked",
      level: 5,
    },
    {
      label: "Fee clarity",
      hint: "Scope agreed before work starts",
      level: 5,
    },
  ];

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
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

      <div className="space-y-1">
        <p className="text-sm font-bold text-[#083761]">
          Clarity, access and deadlines
        </p>
        <p className="text-xs text-slate-500 font-medium leading-relaxed">
          Our working standards for communication, filings and fees — not a
          third-party review score.
        </p>
      </div>

      <div className="space-y-4 pt-1">
        {metrics.map((item, idx) => {
          const width = `${(item.level / 5) * 100}%`;
          return (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between items-start gap-3 text-xs">
                <div className="min-w-0">
                  <span className="text-slate-700 font-bold block">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400">
                    {item.hint}
                  </span>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wide text-[#278393] shrink-0">
                  Priority
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#083761] rounded-full"
                  style={{ width }}
                />
              </div>
            </div>
          );
        })}
      </div>

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
