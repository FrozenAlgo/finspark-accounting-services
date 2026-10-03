import { Calendar, MailPlus, Phone } from "lucide-react";
import Image from "next/image";
import AetherFlowHero from "../home/Hero";
import AnimatedBtn from "../ui/AnimatedBtn";

export default function Header() {
  return (
    <header className="site-header">
      <div className="top-bar bg-[#083761] text-white p-2 w-full text-sm font-semibold">
        <div className="contact-info flex justify-end gap-5 px-10">
          <a
            href="tel:+44 7587 486885"
            className="flex gap-1 items-center px-4 py-1 border border-white rounded-full"
          >
            <Phone size={14} />
            +44 7587 486885
          </a>
          <a
            href="mailto:info@finspark.co.uk"
            className="flex gap-1 items-center px-4 py-1 border border-white rounded-full"
          >
            <MailPlus size={14} />
            info@finspark.co.uk
          </a>
        </div>
      </div>

      <nav className="main-nav flex justify-between px-10 items-center">
        <div className="logo">
          <Image src="/logo.png" width={180} height={180} alt="" />
        </div>
        <ul className="navigations flex items-center gap-5 text-[#083761] text-[17px]">
          <li className="group relative py-1 px-2 hover:text-[#083761ad] font-semibold cursor-pointer transition-all duration-200  ">
            Home
            <span className="absolute bottom-0 left-2 right-2 h-[2px] scale-x-0 bg-[#083761] transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100" />
          </li>
          <li className="group relative py-1 px-2 hover:text-[#08376186] cursor-pointer transition-all duration-200  ">
            About Us
            <span className="absolute bottom-0 left-2 right-2 h-[2px] scale-x-0 bg-[#083761] transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100" />
          </li>
          <li className="group relative py-1 px-2 hover:text-[#08376186] cursor-pointer transition-all duration-200  ">
            Services
            <span className="absolute bottom-0 left-2 right-2 h-[2px] scale-x-0 bg-[#083761] transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100" />
          </li>

          <li className="group relative py-1 px-2 hover:text-[#08376186] cursor-pointer transition-all duration-200  ">
            Testimonials
            <span className="absolute bottom-0 left-2 right-2 h-[2px] scale-x-0 bg-[#083761] transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100" />
          </li>
          <li className="group relative py-1 px-2 hover:text-[#08376186] cursor-pointer transition-all duration-200  ">
            Contact
            <span className="absolute bottom-0 left-2 right-2 h-[2px] scale-x-0 bg-[#083761] transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100" />
          </li>
        </ul>
        <div className="book-btn">
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
      </nav>
    </header>
  );
}
