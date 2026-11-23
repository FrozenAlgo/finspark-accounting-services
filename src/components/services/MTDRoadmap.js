import Link from "next/link";
import { Calendar, Home, User, ArrowDown } from "lucide-react";

const phases = [
  {
    label: "In force",
    title: "MTD for VAT",
    text: "Digital records and compatible software for VAT-registered businesses — quarterly submissions as required by HMRC.",
    icon: Calendar,
  },
  {
    label: "Phased rollout",
    title: "MTD for Income Tax (ITSA)",
    text: "Sole traders and landlords are being brought into digital quarterly reporting by income level over the coming years.",
    icon: Home,
  },
  {
    label: "Your action",
    title: "Get records ready",
    text: "Clean digital bookkeeping now makes VAT easier today and ITSA far less stressful when your threshold applies.",
    icon: User,
  },
  {
    label: "Next step",
    title: "Check if you are in scope",
    text: "Thresholds and dates can change. We review your situation and map a practical path — in plain English.",
    icon: ArrowDown,
  },
];

export default function MTDRoadmap({ showCta = true }) {
  return (
    <section className="w-full bg-[#083761] py-14 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-extrabold tracking-widest text-[#278393] uppercase">
            Making Tax Digital
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Your MTD roadmap
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
            Track where Making Tax Digital applies to you — VAT today, Income
            Tax digital reporting over time. We help you stay ready without the
            jargon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <div
                key={idx}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 hover:border-[#278393]/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7dd3e0]">
                    {phase.label}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#278393]/30 text-[#7dd3e0] flex items-center justify-center">
                    <Icon size={18} />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {phase.text}
                </p>
                {idx < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/20" />
                )}
              </div>
            );
          })}
        </div>

        <p className="text-[11px] text-slate-400 max-w-3xl leading-relaxed">
          Income thresholds and dates are set by HMRC and may change. This
          overview is general information only — confirm your position with us
          or on GOV.UK.
        </p>

        {showCta && (
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#278393] hover:bg-[#1f6875] text-white text-sm font-bold px-5 py-3 transition-colors"
            >
              Speak to the team
            </Link>
            <Link
              href="/services/making-tax-digital"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 text-white text-sm font-bold px-5 py-3 hover:bg-white/10 transition-colors"
            >
              MTD service details
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
