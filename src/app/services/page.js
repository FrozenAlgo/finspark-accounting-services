"use client";
import FAQ from "@/components/home/FAQ";
import ServiceCard from "@/components/services/ServiceCard";
import TestimonialsCard from "@/components/testimonials/TestimonialCard";
import Banner from "@/components/ui/Banner";
import ContactForm from "@/components/ui/ContactForm";
import TargetAudience from "@/components/ui/TargetAudience";
import { companyName, contactsNo, servicesData } from "@/lib/data";
import { CalendarCheck, Phone } from "lucide-react";
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
    text: `Call ${contactsNo[0].number}`,
    hoverText: "Speak with an Expert",
    href: `${contactsNo[0].href}`, // Telephone link
    icon: Phone,
    variant: "secondary",
  },
];
const pills = [
  { title: "Xero & QuickBooks", sub: "Gold Accredited Partners" },
  { title: "Zero Jargon", sub: "Clear English explanations" },
  { title: "Fixed Monthly Fees", sub: "Transparent, no surprises" },
];
export default function ServicesPage() {
  return (
    <main className="">
      <Banner
        badge="Core Accountancy Service"
        subBadge="Weekly & Monthly Support"
        heading="Our Services"
        subHeading="Accurate bookkeeping, handled properly — and on time."
        para="At Finspark Accounting, we keep your bookkeeping organized, up to date for reporting, and HMRC ready, with a responsive team on hand whenever you need support."
        buttons={buttons}
        pills={pills}
        imageSrc="/images/Faq.jpg"
        showSubHeading={true}
        showButtons={true}
        showPills={true}
      />
      <section className="my-6">
        <div className="max-w-4xl px-8">
          <span className="text-navy font-bold text-sm py-2">
            STRESS-FREE COMPLIANCE
          </span>
          <h1 className="text-4xl font-bold py-2 ">
            Professional bookkeeping that keeps your business on track
          </h1>
          <div className="text-gray-600 text-sm ">
            <p className="pt-2">
              Keeping your bookkeeping up to date is essential for understanding
              your finances, meeting HMRC requirements, and avoiding unnecessary
              stress. At {companyName}, we provide reliable bookkeeping services
              that give you clarity, confidence, and control over your numbers.
            </p>
            <p className="pb-2">
              We don't just record transactions and disappear. Our team is
              proactive, responsive, and easy to contact, so if you have a
              question or something doesn't look right, you can get it sorted
              quickly.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
      <section>
        <TestimonialsCard />
      </section>
      <TargetAudience />
      <section>
        <FAQ />
      </section>
      <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
    </main>
  );
}
