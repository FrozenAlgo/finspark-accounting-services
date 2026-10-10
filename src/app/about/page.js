"use client";

import FAQ from "@/components/home/FAQ";
import Banner from "@/components/ui/Banner";
import ContactForm from "@/components/ui/ContactForm";
import TargetAudience from "@/components/ui/TargetAudience";
import { companyName, contactsNo } from "@/lib/data";
import {
  Award,
  Building2,
  Calculator,
  CalendarCheck,
  CheckCircle2,
  Clock,
  CloudCheck,
  FileCheck,
  MessageSquare,
  Phone,
  ScrollText,
  ShieldCheck,
  TrendingUp,
  User,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";
const buttons = [
  {
    show: true,
    text: "Book an Appointment",
    hoverText: "Book an Appointment Now",
    href: "/contact", // URL link passed here
    icon: CalendarCheck,
    variant: "primary",
  },
  {
    show: true,
    text: "Meet Our Team",
    hoverText: "Meet The Expert Team",
    href: "/team", // URL link passed here
    icon: Users,
    variant: "secondary",
  },
];

const pills = [
  { title: "FCCA Qualified Partners", sub: "Senior-led oversight" },
  { title: "Fixed Monthly Fees", sub: "Transparent pricing upfront" },
  { title: "Local Presence", sub: "Tongham & Farnborough offices" },
];

const targetedAudience = [
  {
    id: 1,
    title: "Zero Jargon Guarantee",
    description:
      "We translate HMRC taxlegislation, statutory filings, and CIS regulations into plain, straightforward English you can make decisions on.",
    tag: "Clear explanations",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Responsive Turnaround (<4h)",
    description:
      "No waiting weeks for an answer. Urgent tax queries and payroll clarifications are handled within hours during business days.",
    tag: "Guaranteed speed",
    icon: Clock,
  },
  {
    id: 3,
    title: "Transparent Fixed Fees",
    description:
      "Say goodbye to surprise invoices for simple emails. Our monthly packages provide total clarity and unencumbered communication.",
    tag: "No hidden costs",
    icon: ScrollText,
  },
  {
    id: 4,
    title: "Proactive Guidance",
    description:
      "We do not just look backward at what you earned; we review quarterly reports to extract maximum legal tax allowances and cash-flow health.",
    tag: "Forward planning",
    icon: TrendingUp,
  },
];
const accreditations = [
  {
    icon: Award,
    title: "FCCA Qualified",
    subtitle: "Fellow Chartered Practice",
  },
  {
    icon: ShieldCheck,
    title: "HMRC Registered",
    subtitle: "Official Agent Services",
  },
  {
    icon: CloudCheck,
    title: "MTD Compliant",
    subtitle: "Making Tax Digital Ready",
  },
  {
    icon: TrendingUp,
    title: "Xero Gold",
    subtitle: "Certified Advisor Partner",
  },
  {
    icon: Calculator,
    title: "QuickBooks",
    subtitle: "Certified ProAdvisor",
  },
  {
    icon: FileCheck,
    title: "AAT Qualified",
    subtitle: "Professional Practice",
  },
];
export default function AboutPage() {
  return (
    <main className="">
      <Banner
        badge="Best Advisors In Haven Lane"
        subBadge={companyName}
        heading="Trusted Accounting Built on Personal Relationships & Local Heritage"
        subHeading=""
        para="At Finspark Accounting, we keep your bookkeeping organized, up to date for reporting, and HMRC ready, with a responsive team on hand whenever you need support."
        buttons={buttons}
        pills={pills}
        imageSrc="/images/Faq.jpg"
        showSubHeading={true}
        showButtons={true}
        showPills={true}
      />

      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN: Image with Floating Address Card */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/Faq.jpg"
                alt="Finspark Accounting Team"
                fill
                className="object-cover"
              />

              {/* Floating Local Roots Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl shadow-xl flex items-start gap-3.5 max-w-sm">
                <div className="w-10 h-10 rounded-xl bg-[#278393]/10 text-[#278393] flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#278393] uppercase">
                    Registered Office
                  </span>
                  <p className="text-sm font-bold text-[#083761] leading-snug">
                    7 Haven Lane, London
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Serving businesses across London & the UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Heritage Content & Metrics */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-extrabold tracking-widest text-[#278393] uppercase bg-[#278393]/10 px-3.5 py-1.5 rounded-full border border-[#278393]/20">
                Our Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#083761] tracking-tight leading-tight">
                From Independent Roots to Trusted Financial Advisory
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Finspark Accounting was founded with a singular mission: to
                relieve ambitious business owners from financial anxiety and
                regulatory friction. What began as a dedicated bookkeeping
                practice has grown into a trusted firm offering expert advisory,
                tax strategy, and rigorous compliance management.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Unlike anonymous national agencies or automated apps that treat
                you like a ticket number, we champion personal rapport. Led by
                experienced FCCA partners, we take the time to understand your
                industry, cash flow metrics, and long-term goals.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50/80 border border-slate-200/80 p-4 rounded-2xl">
                <p className="text-2xl sm:text-3xl font-black text-[#083761]">
                  100%
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1">
                  HMRC & MTD Compliant
                </p>
              </div>
              <div className="bg-slate-50/80 border border-slate-200/80 p-4 rounded-2xl">
                <p className="text-2xl sm:text-3xl font-black text-[#278393]">
                  1:1
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1">
                  Dedicated Partner Care
                </p>
              </div>
              <div className="bg-slate-50/80 border border-slate-200/80 p-4 rounded-2xl">
                <p className="text-2xl sm:text-3xl font-black text-[#083761]">
                  0
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1">
                  Surprise Bills or Jargon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-12 bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT COLUMN: Narrative & Bullet Points */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-extrabold tracking-widest text-[#278393] uppercase bg-[#278393]/10 px-3.5 py-1.5 rounded-full border border-[#278393]/20">
              Expert Leadership
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#083761] tracking-tight leading-tight">
              The Finspark Standard: FCCA Expertise, Personal Attention
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Finspark Accounting and Business Services Limited operates under
              senior FCCA leadership. This ensures every client receives the
              dual advantage of high-level strategic advisory combined with the
              responsive, friendly contact of a dedicated local accountant.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-slate-50 border border-slate-200/60 p-4 rounded-2xl">
                <div className="bg-[#278393]/10 text-[#278393] p-2 rounded-xl shrink-0 mt-0.5">
                  <Users size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#083761]">
                    Direct Access
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Direct phone numbers and immediate answers to queries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 border border-slate-200/60 p-4 rounded-2xl">
                <div className="bg-[#278393]/10 text-[#278393] p-2 rounded-xl shrink-0 mt-0.5">
                  <ShieldCheck size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#083761]">
                    Secure Cloud
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Bank-grade data security with Xero & QuickBooks integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Highlight Badge Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-sm relative overflow-hidden group hover:border-[#278393]/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#278393]/10 text-[#278393] flex items-center justify-center mx-auto group-hover:bg-[#278393] group-hover:text-white transition-colors duration-300">
                <CheckCircle2 size={28} strokeWidth={2.2} />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#083761]">
                  Certified Excellence
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Guaranteed regulatory compliance, proactive tax planning, and
                  continuous monitoring for every client ledger.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <span className="text-[11px] font-bold text-[#278393] uppercase tracking-wider">
                  Led by Asif Chaudhry & Asim Malik (FCCA)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TargetAudience
        badge="OUR PHILOSOPHY"
        heading={`The ${companyName} Standard`}
        subHeading="We rebuilt our accountancy model around the real-world frustrations business owners face every day."
        items={targetedAudience}
      />

      <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-slate-50/60 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-widest text-[#278393] uppercase bg-[#278393]/10 px-3.5 py-1.5 rounded-full border border-[#278393]/20">
              REGULATORY STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#083761] tracking-tight">
              Accreditations & Technical Partners
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Adhering to strict professional governance across UK financial
              bodies and leading cloud ecosystems.
            </p>
          </div>

          {/* Accreditations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {accreditations.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 p-5 rounded-2xl flex flex-col items-center text-center shadow-2xs hover:shadow-md hover:border-[#278393]/40 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#278393]/10 text-[#278393] flex items-center justify-center mb-3 group-hover:bg-[#083761] group-hover:text-white transition-colors duration-300 shrink-0">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  <h3 className="text-sm font-extrabold text-[#083761] leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <FAQ />
      </section>

      <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
    </main>
  );
}
