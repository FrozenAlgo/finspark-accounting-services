"use client";

import Link from "next/link";
import {
  Calendar,
  Home,
  User,
  ArrowDownToLine,
  CheckCircle2,
} from "lucide-react";

/**
 * Alternating road timeline:
 * - Desktop: horizontal winding SVG road, odd steps above, even steps below
 * - Mobile: vertical centre road, content cleanly aligned
 *
 * Content is Finspark-owned (not a copy of another firm's graphic).
 * Thresholds/dates kept general so they stay safe if HMRC changes detail.
 */
const phases = [
  {
    id: 1,
    period: "Now",
    title: "MTD for VAT",
    text: "Digital records and compatible software for VAT-registered businesses, with quarterly submissions as HMRC requires.",
    icon: Calendar,
  },
  {
    id: 2,
    period: "Coming phases",
    title: "MTD for Income Tax",
    text: "Sole traders and landlords are being brought into digital quarterly reporting by income level over the next few tax years.",
    icon: Home,
  },
  {
    id: 3,
    period: "Your books",
    title: "Get digital-ready",
    text: "Clean cloud bookkeeping helps with VAT today and makes Income Tax digital reporting far less stressful when you are in scope.",
    icon: User,
  },
  {
    id: 4,
    period: "With Finspark",
    title: "Check your position",
    text: "We review whether you are in scope, set up practical software and records, and keep filings on track — in plain English.",
    icon: ArrowDownToLine,
  },
];

export default function MTDRoadmap({ showCta = true }) {
  return (
    <section className="relative w-full bg-[#083761] py-10 md:py-14 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Subtle radial glow for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(39,131,147,0.16),transparent_65%)]"
      />

      <div className="relative max-w-6xl mx-auto space-y-8 md:space-y-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#278393]/20 border border-[#278393]/40 text-[11px] font-extrabold tracking-widest text-[#7dd3e0] uppercase">
            Making Tax Digital
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            MTD roadmap
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
            Track your Making Tax Digital journey — from VAT obligations today
            through Income Tax digital reporting — and stay ready with Finspark.
          </p>
        </div>

        {/* ================= DESKTOP: winding road + alternating up/down ================= */}
        <div className="hidden md:block relative">
          {/* Winding SVG Asphalt Road across the center */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 z-0"
          >
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
            >
              {/* Road outer shadow */}
              <path
                d="M -20 60 C 80 60, 100 34, 165 34 C 245 34, 295 86, 395 86 C 495 86, 545 34, 635 34 C 725 34, 775 86, 865 86 C 955 86, 1005 34, 1085 34 C 1140 34, 1170 60, 1220 60"
                fill="none"
                stroke="#041e36"
                strokeWidth="26"
                strokeLinecap="round"
                transform="translate(0, 3)"
              />
              {/* Road edge border */}
              <path
                d="M -20 60 C 80 60, 100 34, 165 34 C 245 34, 295 86, 395 86 C 495 86, 545 34, 635 34 C 725 34, 775 86, 865 86 C 955 86, 1005 34, 1085 34 C 1140 34, 1170 60, 1220 60"
                fill="none"
                stroke="#94a3b8"
                strokeOpacity="0.65"
                strokeWidth="23"
                strokeLinecap="round"
              />
              {/* Road tarmac */}
              <path
                d="M -20 60 C 80 60, 100 34, 165 34 C 245 34, 295 86, 395 86 C 495 86, 545 34, 635 34 C 725 34, 775 86, 865 86 C 955 86, 1005 34, 1085 34 C 1140 34, 1170 60, 1220 60"
                fill="none"
                stroke="#334155"
                strokeWidth="20"
                strokeLinecap="round"
              />
              {/* Dashed center white line */}
              <path
                d="M -20 60 C 80 60, 100 34, 165 34 C 245 34, 295 86, 395 86 C 495 86, 545 34, 635 34 C 725 34, 775 86, 865 86 C 955 86, 1005 34, 1085 34 C 1140 34, 1170 60, 1220 60"
                fill="none"
                stroke="#ffffff"
                strokeOpacity="0.65"
                strokeWidth="2"
                strokeDasharray="9 9"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-4 gap-4">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              const above = idx % 2 === 0; // 1 & 3 up, 2 & 4 down

              return (
                <div
                  key={phase.id}
                  className="relative flex flex-col items-center min-h-[345px] group"
                >
                  {/* TOP SLOT (Steps 1 & 3) */}
                  <div
                    className={`w-full flex-1 flex flex-col justify-end items-center pb-3 ${
                      !above ? "invisible pointer-events-none" : ""
                    }`}
                  >
                    {above && (
                      <>
                        <PhaseCard phase={phase} />
                        <div className="w-px h-3.5 bg-gradient-to-b from-white/25 to-[#278393]" />
                      </>
                    )}
                  </div>

                  {/* ROAD NODE (Refined Teal & White Pin) */}
                  <div
                    className={`relative z-10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                      above ? "-translate-y-3" : "translate-y-3"
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full p-1 bg-[#278393] shadow-lg shadow-slate-950/45 flex items-center justify-center">
                      {/* Pointer triangle pointing toward card */}
                      <span
                        aria-hidden="true"
                        className={`absolute w-3 h-3 rotate-45 bg-[#278393] ${
                          above ? "-top-1" : "-bottom-1"
                        }`}
                      />
                      {/* Inner crisp white circle with dark navy icon */}
                      <div className="relative z-10 w-full h-full rounded-full bg-white flex items-center justify-center text-[#083761]">
                        <Icon size={21} strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Step number pill */}
                    <span className="absolute -right-1.5 -top-1 w-5 h-5 rounded-full bg-[#083761] border border-white/80 text-white text-[10px] font-extrabold flex items-center justify-center shadow">
                      {phase.id}
                    </span>
                  </div>

                  {/* BOTTOM SLOT (Steps 2 & 4) */}
                  <div
                    className={`w-full flex-1 flex flex-col justify-start items-center pt-3 ${
                      above ? "invisible pointer-events-none" : ""
                    }`}
                  >
                    {!above && (
                      <>
                        <div className="w-px h-3.5 bg-gradient-to-t from-white/25 to-[#278393]" />
                        <PhaseCard phase={phase} />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE: vertical asphalt road ================= */}
        <div className="md:hidden relative pl-1">
          {/* Vertical asphalt track */}
          <div
            aria-hidden="true"
            className="absolute left-[27px] top-4 bottom-4 w-3.5 rounded-full bg-slate-700 border border-slate-400/50 shadow-inner"
          >
            <div className="absolute inset-y-2 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-white/65" />
          </div>

          <ul className="space-y-4">
            {phases.map((phase) => {
              const Icon = phase.icon;

              return (
                <li
                  key={phase.id}
                  className="relative flex items-start gap-3.5"
                >
                  {/* Pin Node */}
                  <div className="relative z-10 shrink-0 mt-1">
                    <div className="w-13 h-13 rounded-full p-1 bg-[#278393] shadow-md flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#083761]">
                        <Icon size={20} strokeWidth={2.2} />
                      </div>
                    </div>
                    <span className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-[#083761] border border-white/80 text-white text-[10px] font-extrabold flex items-center justify-center">
                      {phase.id}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 min-w-0">
                    <PhaseCard phase={phase} mobile />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Subtle slate/teal footer divider */}
        <div className="border-t border-white/10 pt-6 space-y-4">
          <p className="text-xs text-slate-300/85 text-center max-w-2xl mx-auto leading-relaxed">
            HMRC phases and income thresholds can change. This is general
            guidance only — confirm your position with us or on GOV.UK.
          </p>

          {showCta && (
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#278393] hover:bg-[#1f6875] text-white text-sm font-bold px-5 py-2.5 shadow-md shadow-slate-950/25 transition-all"
              >
                Speak to the team
              </Link>
              <Link
                href="/services/making-tax-digital"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white text-sm font-bold px-5 py-2.5 hover:bg-white/10 transition-all"
              >
                MTD service details
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function PhaseCard({ phase, mobile = false }) {
  return (
    <div
      className={`w-full bg-white/[0.06] backdrop-blur-md border border-white/15 hover:border-[#278393]/70 rounded-2xl p-4 space-y-1.5 shadow-lg shadow-slate-950/20 transition-all duration-300 group-hover:-translate-y-0.5 ${
        mobile ? "" : "max-w-[255px] mx-auto"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <CheckCircle2 size={13} className="text-[#7dd3e0] shrink-0" />
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7dd3e0]">
          {phase.period}
        </span>
      </div>
      <h3 className="text-base font-extrabold text-white leading-snug">
        {phase.title}
      </h3>
      <p className="text-xs text-slate-200/90 leading-relaxed">{phase.text}</p>
    </div>
  );
}
