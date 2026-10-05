import Hero from "@/components/home/Hero";
import Image from "next/image";
import {
  User,
  Mail,
  Building2,
  Phone,
  MessageSquare,
  ArrowRightCircle,
  Calendar,
} from "lucide-react";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import AnimatedBtn from "@/components/ui/AnimatedBtn";
import FAQ from "@/components/home/FAQ";
export const services = [
  {
    category: "Bookkeeping & Accounting",
    items: [
      "Bookkeeping",
      "Payroll & CIS",
      "Self Assessment",
      "VAT Accounting",
      "Company Accounts",
      "Outsourced Finance Director",
    ],
  },
  {
    category: "Business Support",
    items: [
      "Cash Flow Forecast",
      "Budget Setting & Report",
      "Management Accounts",
      "Credit Control",
      "Advisory Services",
      "Company Secretarial",
      "Outsourced Finance Department",
    ],
  },
];
export default function Home() {
  return (
    <div>
      <Hero />
      <TestimonialCard />
      <section className="md:flex gap-10 items-center px-12 py-8  ">
        <div className="lg:basis-1/4 md:w-1/3 text-center">
          <Image
            src="/images/businesssupport.jpg"
            alt=""
            width={300}
            height={600}
            className="rounded-2xl mx-auto"
          />
        </div>
        <div className="lg:basis-3/4 md:w-2/3 flex flex-col  gap-5">
          <h2 className="text-4xl font-semibold ">Supporting Your Business</h2>
          <div>
            <p>
              At Penney’s Accountancy, we know how frustrating it is to chase
              your accountant. That’s why responsiveness sits at the heart of
              everything we do. When you get in touch, you’ll receive clear
              answers and fast support — not silence.
            </p>
            <p className="py-3">
              We help small businesses, sole traders, and limited companies with
              bookkeeping, VAT, payroll, CIS, and year-end accounts, always
              taking the time to understand your business and stay ahead of
              deadlines.
            </p>
            <p>
              Based in Farnborough, we support businesses across Hampshire and
              Surrey with a personal, proactive service you can rely on.
            </p>
            <p className="py-3 font-bold">
              No chasing. No jargon. Just responsive accountancy support.
            </p>
          </div>
          <div>
            <AnimatedBtn
              hoverText="Book An Appointment"
              icon={ArrowRightCircle}
              bgColor="bg-[#278392]"
              hoverBgColor="hover:bg-[#083761]"
              textColor="text-white"
              hoverTextColor="hover:text-gray-100"
            >
              Book An Appointment
            </AnimatedBtn>
          </div>
        </div>
      </section>
      <section>
        <div className=" my-4 bg-linear-to-r from-[#072d52]/80 to-[#288594]/80 mx-8 p-8 shadow-lg rounded-2xl  ">
          <h1 className="text-3xl text-white font-bold text-center mb-8">
            {services[0].category}
          </h1>
          <div className="grid grid-cols-3 gap-10 mb-8">
            {services[0].items.map((item) => (
              <div className="bg-white p-10 rounded-xl" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="my-4 bg-linear-to-r from-[#072d52]/80 to-[#288594]/80 mx-8 p-8 shadow-lg rounded-2xl  ">
          <h1 className="text-3xl text-white font-bold text-center mb-8">
            {services[1].category}
          </h1>
          <div className="grid grid-cols-3 gap-10 mb-8">
            {services[1].items.map((item) => (
              <div className="bg-white p-10 rounded-xl" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="">
        <FAQ />
      </section>
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative overflow-hidden bg-[#0062ab] text-white rounded-2xl px-6 py-10 sm:px-10 sm:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          {/* Subtle Watermark Pill Pattern on Left */}
          <div className="absolute -left-12 -top-16 w-80 h-80 opacity-15 pointer-events-none select-none">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="20"
                y="10"
                width="70"
                height="150"
                rx="35"
                fill="white"
                transform="rotate(-35 20 10)"
              />
              <rect
                x="75"
                y="30"
                width="70"
                height="150"
                rx="35"
                fill="white"
                transform="rotate(-35 75 30)"
              />
              <rect
                x="130"
                y="50"
                width="70"
                height="150"
                rx="35"
                fill="white"
                transform="rotate(-35 130 50)"
              />
            </svg>
          </div>

          {/* Left Content */}
          <div className="relative z-10 max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Get Support When You Need It
            </h2>
            <p className="text-xs sm:text-sm text-blue-50/90 font-medium leading-relaxed">
              Book your consultation and take the first step toward making
              running your business easier.
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <AnimatedBtn
              hoverText="Book An Appointment"
              icon={Calendar}
              bgColor="bg-[#278392]"
              hoverBgColor="hover:bg-[#083761]"
              textColor="text-white"
              hoverTextColor="hover:text-gray-100"
            >
              Book An Appointment
            </AnimatedBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
