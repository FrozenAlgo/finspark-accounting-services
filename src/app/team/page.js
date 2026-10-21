import TestimonialsCard from "@/components/testimonials/TestimonialCard";
import Banner from "@/components/ui/Banner";
import { companyEmail, companyName, contactsNo, teamData } from "@/lib/data";
import {
  ArrowDown,
  Clock,
  Mail,
  MessageSquare,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Star,
  UserCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Our Team",
  description:
    "Contact Finspark Accounting in London. WhatsApp +44 7884 003546, phone +44 7587 486885, or email info@finsparkaccounting.co.uk.",
};
const buttons = [
  {
    show: true,
    text: "View Specialist Profile",
    hoverText: "View Specialist Profile",
    href: "#specialistProfile", // URL link passed here
    icon: "ArrowDown",
    variant: "primary",
  },
  {
    show: true,
    text: "Read Our Reviews",
    hoverText: "Read Reviews By Our Clients",
    href: "#reviews", // Telephone link
    icon: "MessageSquareText",
    variant: "secondary",
  },
];
const bannerImageStuff = {
  icon: "Headset",
  text: "Direct Phone & Email",
  subText: "Speak directly to your appointed specialist",
};
const pills = [
  { title: "FCCA Partners", sub: "Senior-led advice" },
  { title: "Direct Access", sub: "Speak to your adviser" },
  { title: "Fast Response", sub: "Within 4 business hours" },
];
const promises = [
  {
    icon: UserCheck,
    title: "Direct Line to Named Adviser",
    desc: "You won't be bounced through receptionist switchboards or generic ticket queues. You receive direct email and phone contact straight to Asif, Asim, and your allocated accountant.",
    tag: "No Call Center Queues",
  },
  {
    icon: Clock,
    title: "Fast Response Commitment",
    desc: "Tax deadlines and invoice queries can't wait days. All client enquiries submitted during standard office hours receive a concrete reply or phone consultation within few business hours.",
    tag: "Fast Reliable Action",
  },
  {
    icon: MessageSquare,
    title: "Zero Jargon Plain-English Policy",
    desc: "We translate confusing tax codes, MTD rules, and balance sheets into plain, actionable advice so you make clear, confident financial decisions without hesitation.",
    tag: "Total Clarity Guaranteed",
  },
];
export default function Team() {
  return (
    <main className="min-h-screen ">
      <Banner
        badge="People Behind Your Numbers "
        subBadge="Fast Advisory Response"
        heading="Meet the Dedicated Advisors"
        subHeading="Speak directly with our expert team for clear, prompt guidance."
        para="Whether you have an urgent HMRC deadline, need assistance with your bookkeeping, or want to discuss corporate tax planning, we are here to help."
        buttons={buttons}
        imageSrc="/images/team.webp"
        showSubHeading={true}
        showButtons={true}
        // pills={pills}
        // showPills={true}
        bannerImageStuff={bannerImageStuff}
        bannerImageStuffPassed={true}
      />

      <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-slate-50/50">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-[#278393] uppercase bg-[#278393]/10 px-3.5 py-1.5 rounded-full border border-[#278393]/20">
                <Users size={14} />
                ACCOUNTING LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#083761] tracking-tight">
                The Specialists Directing Your Financial Health
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Every client at {companyName} is directly paired with senior
                FCCA qualified partners who understand your business, goals, and
                day-to-day operations.
              </p>
            </div>

            <div className="shrink-0">
              <span className="text-xs font-bold text-[#083761] bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-2xs">
                2 Senior Practice Partners
              </span>
            </div>
          </div>

          {/* 2-Member Centered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamData.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-slate-100 flex flex-col justify-between hover:border-[#278393]/40 transition-all duration-300 group"
              >
                <div className="space-y-5">
                  {/* Image Container with Floating Badge */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                    <Image
                      src={member.image}
                      alt={member.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-[#083761] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                      {member.badge}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="text-xl font-extrabold text-[#083761]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#278393] mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  {/* Tags / Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-extrabold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Contact Footer */}
                <div className="pt-5 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-slate-500">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#278393] transition-colors truncate max-w-[200px]"
                  >
                    <Mail size={14} className="text-[#278393] shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>

                  <div className="flex items-center gap-3">
                    <a
                      href={member.phoneHref}
                      className="inline-flex items-center gap-1.5 text-[#083761] font-bold hover:underline"
                    >
                      <Phone size={14} className="text-[#278393]" />
                      <span>{member.phone}</span>
                    </a>
                    <span className="text-[#278393] font-bold bg-[#278393]/10 px-2 py-0.5 rounded-md text-[10px]">
                      {member.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-white space-y-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Main Card Wrapper */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm space-y-10">
            {/* Top Header */}
            <div className="space-y-3 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-[#278393] uppercase bg-[#278393]/10 px-3.5 py-1.5 rounded-full border border-[#278393]/20">
                <ShieldCheck size={14} />
                OUR PROFESSIONAL STANDARD
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#083761] tracking-tight">
                The {companyName} Client Care Promise
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Accountancy shouldn't feel stressful or obscure. We hold our
                practice to three unequivocal service commitments for every UK
                business we represent.
              </p>
            </div>

            {/* 3 Promises Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {promises.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/80 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-2xs hover:shadow-md hover:border-[#278393]/40 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="w-11 h-11 rounded-xl bg-[#278393]/10 text-[#278393] flex items-center justify-center shrink-0">
                        <Icon size={22} strokeWidth={2.2} />
                      </div>
                      <h3 className="text-base font-extrabold text-[#083761] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-[#278393] flex items-center gap-1">
                        ✓ {item.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Rating Banner */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[11px] font-extrabold tracking-wider text-slate-400 uppercase">
                Verified Google Business Reviews
              </span>
              <h3 className="text-2xl font-black text-[#083761] tracking-tight">
                Loved by Local Directors & Sole Traders
              </h3>
              <p className="text-xs text-slate-600 font-medium max-w-xl">
                Real feedback from entrepreneurs who rely on Asif, Asim, and our
                team for their year-end accounts, payroll, and bookkeeping.
              </p>
            </div>

            {/* Star Rating Box */}
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl flex items-center gap-4 shrink-0">
              <div className="text-center border-r border-slate-200 pr-4">
                <div className="flex items-center gap-0.5 text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <p className="text-lg font-black text-[#083761]">5.0 / 5.0</p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#083761]">100% 5-Star</p>
                <p className="text-xs text-slate-500 font-medium">
                  Verified Client Feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <TestimonialsCard />
      </section>

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
                Reach out Asif, Asim and the team directly on
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
                <span>Whatsapp : {contactsNo[0].number}</span>
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
