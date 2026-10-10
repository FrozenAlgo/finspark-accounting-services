import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, companyName, contactsNo } from "@/lib/data";
import { Check } from "lucide-react";
import Banner from "@/components/ui/Banner";
import FeatureCard from "@/components/services/FeatureCard";
import TargetAudience from "@/components/ui/TargetAudience";
import TestimonialsCard from "@/components/testimonials/TestimonialCard";
import FAQ from "@/components/home/FAQ";

// Tells Next.js which pages to generate from your data
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug || service.id,
  }));
}

// SEO title + description for each service
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => (s.slug || s.id) === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | ${companyName}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  const service = servicesData.find((s) => (s.slug || s.id) === slug);

  // If slug doesn't match any service → 404
  if (!service) {
    notFound();
  }
  const buttons = [
    {
      show: true,
      text: "Book an Appointment",
      hoverText: "Book an Appointment Now",
      href: "/contact", // URL link passed here
      icon: "CalendarCheck",
      variant: "primary",
    },
    {
      show: true,
      text: `Call ${contactsNo[0].number}`,
      hoverText: "Speak with an Expert",
      href: `${contactsNo[0].href}`, // Telephone link
      icon: "Phone",
      variant: "secondary",
    },
  ];
  const pills = [
    { title: "Xero & QuickBooks", sub: "Gold Accredited Partners" },
    { title: "Zero Jargon", sub: "Clear English explanations" },
    { title: "Fixed Monthly Fees", sub: "Transparent, no surprises" },
  ];
  return (
    <main className="min-h-screen">
      {/* Top banner */}
      <section>
        <Banner
          badge={service.banner.badge}
          subBadge={service.banner.subBadge}
          heading={service.title}
          subHeading={service.banner.subHeading}
          para={service.description}
          buttons={buttons}
          pills={pills}
          imageSrc="/images/Faq.jpg"
          showSubHeading={true}
          showButtons={true}
          showPills={true}
        />
      </section>
      <section className="bg-[#083761] text-white py-6 px-6">
        <div className=" mx-auto">
          <Link
            href="/services"
            className="text-sm text-slate-300 hover:text-white  inline-block"
          >
            ← All Services
          </Link>
        </div>
      </section>
      <section className="my-6 " id="services">
        <div className="max-w-4xl px-8">
          <span className="text-navy font-bold text-sm py-2">
            {service.featuresSection.tag}
          </span>
          <h1 className="text-4xl font-bold py-2 ">
            {service.featuresSection.heading}
          </h1>
          <div className="text-gray-600 text-sm ">
            <p className="pt-2">{service.featuresSection.intro}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-6">
          {service.featuresSection.items.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </section>

      <TargetAudience
        badge={service.audienceSection.tag}
        heading={service.audienceSection.heading}
        subHeading={service.audienceSection.subHeading}
        items={service.audienceSection.items}
      />

      <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN: HEADING & STEPS ================= */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#278393] uppercase block mb-3">
                {service.workflowSection.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#083761] leading-[1.18] tracking-tight">
                {service.workflowSection.heading}
              </h2>
              <p className="mt-4 text-slate-600 text-base leading-relaxed max-w-xl font-normal">
                {service.workflowSection.subHeading}
              </p>
            </div>

            {/* Numbered Step List */}
            <div className="space-y-4">
              {service.workflowSection.steps.map((step) => (
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
                {service.workflowSection.platforms.map((stat, idx) => (
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

      <section>
        <TestimonialsCard />
      </section>

      <section>
        <FAQ />
      </section>
      {/* Content */}
    </main>
  );
}
