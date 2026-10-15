import ReviewsSection from "@/components/testimonials/ReviewsSection";
import TestimonialsCard from "@/components/testimonials/TestimonialCard";
import TrustAuditCard from "@/components/testimonials/TrustAuditCard";
import Banner from "@/components/ui/Banner";
import TargetAudience from "@/components/ui/TargetAudience";
import { companyEmail, companyName, contactsNo } from "@/lib/data";
import { Mail, Phone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const buttons = [
  {
    show: true,
    text: "Book a Free Consultation",
    href: "/contact",
    variant: "primary",
  },
  {
    show: true,
    text: "Leave a Google Review",
    href: "#",
    variant: "secondary",
  },
];

const pills = [
  { title: "100%", sub: "5-Star Feedback Score" },
  { title: "< 4h", sub: "Guaranteed Response Time" },
  { title: "15+ Yrs", sub: "London & UK Presence" },
];
const caseStudies = [
  {
    badge: "Limited Company • Digital Agency",
    title: "Velaris Marketing",
    subtitle: "Creative Agency Founder • London",
    image: "/images/review1.webp", // Replace with your image asset
    quote:
      "“Honest, transparent advice from day one. Asif, Asim, and the team helped navigate corporation tax and proactive growth advisory without confusion.”",
    description:
      "When scaling from 3 to 14 consultants, cash flow visibility and dividend restructuring became mission-critical. Finspark delivered automated cloud reporting, eliminated end-of-year tax surprises, and enabled seamless monthly payroll.",
    metaLeftLabel: "Key Benefit",
    metaLeftValue: "Zero Year-End Surprises",
    metaRightLabel: "Services Handled",
    metaRightValue: "Corp Tax, VAT & Payroll",
  },
  {
    badge: "10+ Year Client Relationship",
    title: "Mark Willard",
    subtitle: "Director, Commercial Construction & Maintenance",
    image: "/images/review2.webp", // Replace with your image asset
    quote:
      "“My company has used Finspark for over a decade. Always competent, immediate responses, and seamless CIS/payroll management. The ideal partner for small businesses.”",
    description:
      "Construction Industry Scheme (CIS) deductions and subcontractor filings require total accuracy. With Finspark handling monthly CIS reconciliations and strict HMRC compliance deadlines, Mark has maintained flawless regulatory standing.",
    metaLeftLabel: "Client Tenure",
    metaLeftValue: "10 Continuous Years",
    metaRightLabel: "Compliance Focus",
    metaRightValue: "CIS Scheme & Year-End",
  },
];
const targetedAudience = [
  {
    id: 1,
    title: "Zero Jargon Guarantee",
    description:
      "We translate HMRC taxlegislation, statutory filings, and CIS regulations into plain, straightforward English you can make decisions on.",
    tag: "Clear explanations",
    icon: "MessageSquare",
  },
  {
    id: 2,
    title: "Responsive Turnaround (<4h)",
    description:
      "No waiting weeks for an answer. Urgent tax queries and payroll clarifications are handled within hours during business days.",
    tag: "Guaranteed speed",
    icon: "Clock",
  },
  {
    id: 3,
    title: "Transparent Fixed Fees",
    description:
      "Say goodbye to surprise invoices for simple emails. Our monthly packages provide total clarity and unencumbered communication.",
    tag: "No hidden costs",
    icon: "ScrollText",
  },
  {
    id: 4,
    title: "Proactive Guidance",
    description:
      "We do not just look backward at what you earned; we review quarterly reports to extract maximum legal tax allowances and cash-flow health.",
    tag: "Forward planning",
    icon: "TrendingUp",
  },
];
export default function TestimonialsPage() {
  return (
    <main className="">
      <Banner
        badge="100% VERIFIED FEEDBACK • 5.0 GOOGLE RATING"
        heading="Trusted by Over 350+ Local Directors, Sole Traders & Growing Businesses"
        subHeading=""
        showSubHeading={false}
        para="Read authentic feedback from business owners across London and beyond who rely on Asif Chaudhry, Asim Malik, and our dedicated team for responsive, jargon-free accounting, stress-free payroll, and compliant year-end submissions."
        buttons={buttons}
        pills={pills}
        showPills={true}
        rightComponent={<TrustAuditCard />}
      />

      <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-extrabold tracking-widest text-[#278393] uppercase bg-[#278393]/10 px-3.5 py-1.5 rounded-full border border-[#278393]/20">
                IN-DEPTH CASE STUDIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#083761] tracking-tight">
                Client Spotlights: Partnership That Delivers
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md">
              Discover how business founders transition from accounting
              headaches to strategic financial confidence with Finspark.
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-100 flex flex-col justify-between space-y-6 hover:border-[#278393]/40 transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Image Banner Box */}
                  <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top-Left Pills */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-md text-[#083761] text-[11px] font-bold px-3 py-1 rounded-full border border-white/40 shadow-sm">
                        {item.badge}
                      </span>
                    </div>

                    {/* Bottom Image Overlay Info */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                      <div>
                        <h3 className="text-lg font-black leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-slate-300 font-medium">
                          {item.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base font-bold text-[#083761] italic leading-relaxed">
                    {item.quote}
                  </p>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Key Benefit Box */}
                <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {item.metaLeftLabel}
                    </span>
                    <span className="font-extrabold text-[#083761]">
                      {item.metaLeftValue}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {item.metaRightLabel}
                    </span>
                    <span className="font-extrabold text-[#278393]">
                      {item.metaRightValue}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      <TargetAudience
        badge="OUR PHILOSOPHY"
        heading={`The ${companyName} Standard`}
        subHeading="We rebuilt our accountancy model around the real-world frustrations business owners face every day."
        items={targetedAudience}
      />

      <section className="w-full bg-white pt-16 pb-0 overflow-hidden">
        <div className="w-full bg-[#083761] text-white mt-16 py-12 px-4 sm:px-6 lg:px-12 mb-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-extrabold tracking-wider text-[#278393] uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
                NEED IMMEDIATE ACCOUNTING ADVICE?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Prefer to talk right now?
              </h3>
              <p className=" text-xs sm:text-sm text-slate-300 font-medium max-w-xl">
                Call Asif, Asim and the team directly on
                <Link
                  className="text-white font-bold mx-1"
                  href={contactsNo[0].href}
                >
                  {contactsNo[0].number}
                </Link>
                or
                <Link
                  className="text-white font-bold ms-1"
                  href={contactsNo[1].href}
                >
                  {contactsNo[1].number}
                </Link>
                . Our London team is ready to assist.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={contactsNo[0].href}
                className="inline-flex items-center gap-2.5 bg-white text-[#083761] hover:bg-slate-100 px-6 py-3.5 rounded-2xl font-bold text-sm shadow-lg transition-all"
              >
                <Phone size={18} className="text-[#278393]" />
                <span>Call {contactsNo[0].number}</span>
              </a>

              <a
                href={companyEmail.href}
                className="inline-flex items-center gap-2.5 bg-[#278393] hover:bg-[#1f6875] text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-lg transition-all"
              >
                <Mail size={18} />
                <span>Email Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
