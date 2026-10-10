"use client";

import Banner from "@/components/ui/Banner";
import { contactsNo } from "@/lib/data";
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
export default function AboutPage() {
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
    </main>
  );
}
