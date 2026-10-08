import Hero from "@/components/home/Hero";
import Image from "next/image";
import {
  User,
  Mail,
  Building2,
  Phone,
  MessageSquare,
  ArrowRightCircle,
  Calculator,
  Check,
  Lock,
  CheckCircleIcon,
  MapPin,
  Send,
  Users,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import AnimatedBtn from "@/components/ui/AnimatedBtn";
import FAQ from "@/components/home/FAQ";
import ServiceCard from "@/components/services/ServiceCard";
import AmbientBackground from "@/components/ui/AmbientBackground";
import {
  companyEmail,
  companyInfo,
  companyName,
  contactsNo,
  servicesData,
  stats,
  steps,
} from "@/lib/data";
import ContactForm from "@/components/ui/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-4  gap-4 py-8">
        <div className="text-center">
          <h6 className="text-[#278393] text-2xl  lg:text-3xl font-bold ">
            10+ Years
          </h6>
          <p className="text-xs lg:text-sm font-semibold  text-gray-600">
            Established Practice
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-[#278393] text-2xl  lg:text-3xl font-bold ">
            350+
          </h6>
          <p className="text-xs lg:text-sm font-semibold  text-gray-600">
            Local Business Clients
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-[#278393] text-2xl  lg:text-3xl font-bold ">
            100%
          </h6>
          <p className="text-xs lg:text-sm font-semibold  text-gray-600">
            On-Time HMRC Submissions
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-[#278393] text-2xl  lg:text-3xl font-bold ">
            &lt; 4 Hours
          </h6>
          <p className="text-xs lg:text-sm font-semibold  text-gray-600">
            Avg Response Turnaround
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50/60 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <AmbientBackground
          variant="light"
          theme="minimal"
          glowPosition="center"
        />
        <div className="text-sm text-center py-4 z-10">
          <h6 className="text-[#278393] font-bold">WHAT WE DO</h6>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#083761] my-3 tracking-tight">
            Comprehensive Accountancy Solutions
          </h1>
          <p className="text-gray-500">
            Whether you're a sole trader, thriving SME, or contractor, our
            proactive team provides exact <br /> figures and tailored support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN: HEADING & STEPS ================= */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#278393] uppercase block mb-3">
                THE PAL DIFFERENCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#083761] leading-[1.18] tracking-tight">
                No chasing. No jargon. <br className="hidden sm:inline" />
                Just straightforward answers.
              </h2>
              <p className="mt-4 text-slate-600 text-base leading-relaxed max-w-xl font-normal">
                Most business owners tell us their previous accountant felt
                distant, speaking in confusing acronyms and sending unexpected
                invoices. At {companyInfo.legalName}, we redefine that
                experience.
              </p>
            </div>

            {/* Numbered Step List */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 transition-all hover:bg-slate-50"
                >
                  {/* Number Badge */}
                  <div className="w-10 h-10 rounded-xl bg-[#278393]/15 text-[#278393] font-extrabold flex items-center justify-center shrink-0 text-base">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#083761] text-base leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: PARTNERSHIP CARD ================= */}
          <div className="lg:col-span-6">
            <div className="bg-[#278393]/5 border border-[#278393]/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#083761] tracking-tight">
                What our client partnership looks like:
              </h3>

              {/* 2x2 Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-slate-100 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#278393] block mb-2 tracking-tight">
                        {stat.value}
                      </span>
                      <h4 className="font-bold text-[#083761] text-base leading-tight mb-1">
                        {stat.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote Callout */}
              <div className="bg-white rounded-xl p-4 sm:p-5 border-l-4 border-[#278393] shadow-xs">
                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                  "Switching accountants takes under 7 days with zero disruption
                  to your payroll or tax schedule."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialCard />
      <section className="w-full bg-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT COLUMN: IMAGE WITH BACKDROP & BADGE ================= */}
          <div className="lg:col-span-6 mb-8 lg:mb-0">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Soft Light-Blue Background Frame */}
              <div className="absolute -inset-3 bg-[#278393]/15 rounded-[32px] -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[14/11] shadow-sm">
                <Image
                  src="/images/businesssupport.jpg"
                  alt="Callum & The Dedicated Surrey Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Overlapping Floating Bottom Badge */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] bg-white rounded-2xl px-6 py-4 shadow-xl border border-slate-100 text-center z-10">
                <span className="text-xs font-semibold text-slate-500 block mb-0.5">
                  Callum & The Dedicated Surrey Team
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#083761] leading-tight">
                  Collaborative Advisory That Puts You First
                </h4>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CONTENT & BADGES ================= */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            {/* Section Header */}
            <div>
              <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#278393] uppercase block mb-3">
                THE PEOPLE BEHIND YOUR NUMBERS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#083761] leading-[1.18] tracking-tight">
                A friendly face whenever you need advice
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-600 text-base leading-relaxed font-normal">
              <p>
                Accounting isn't just about spreadsheets and balancing
                books—it's about understanding the real people, families, and
                hard work behind each enterprise.
              </p>
              <p>
                Our team in Tongham and Farnborough takes time to listen to your
                unique commercial objectives. Whether it's planning your first
                dividend withdrawal, hiring your first employee, or scaling into
                new premises, we’re right beside you.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Pill 1 */}
              <div className="flex items-center gap-2.5 bg-white px-5 py-3 rounded-2xl border border-slate-200/80 shadow-xs">
                <Check
                  size={18}
                  className="text-[#278393] shrink-0"
                  strokeWidth={2.5}
                />
                <span className="text-xs sm:text-sm font-bold text-[#083761]">
                  Walk-in friendly office
                </span>
              </div>

              {/* Pill 2 */}
              <div className="flex items-center gap-2.5 bg-white px-5 py-3 rounded-2xl border border-slate-200/80 shadow-xs">
                <Check
                  size={18}
                  className="text-[#278393] shrink-0"
                  strokeWidth={2.5}
                />
                <span className="text-xs sm:text-sm font-bold text-[#083761]">
                  Always happy to explain details
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
    </div>
  );
}
