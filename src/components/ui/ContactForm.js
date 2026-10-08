import { companyEmail, companyName, contactsNo } from "@/lib/data";
import {
  Building2,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import AnimatedBtn from "./AnimatedBtn";

export default function ContactForm() {
  return (
    <div className="max-w-7xl mx-auto rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-white grid grid-cols-1 lg:grid-cols-12 relative">
      {/* ================= LEFT COLUMN: CONTACT INFO (DARK NAVY) ================= */}
      <div className="lg:col-span-5 bg-[#083761] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
        {/* Subtle Background Glow Accent */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#278393]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-8 relative z-10">
          {/* Header Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#278393] text-xs font-bold tracking-widest uppercase backdrop-blur-md border border-white/10">
            GET IN TOUCH
          </span>

          {/* Heading & Description */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Let’s Talk About Your Business Numbers
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Contact our office today for a relaxed, confidential discussion
              over a cup of coffee or a telephone consultation.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="space-y-6 pt-2">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#278393] border border-white/10">
                <MapPin size={20} strokeWidth={2.2} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">
                  Office Location:
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  7 Haven Lane, Ealing, London Borough of Ealing, Greater
                  London, W5 2HZ, England, United Kingdom
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#278393] border border-white/10">
                <Phone size={20} strokeWidth={2.2} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">
                  Phone Support:
                </h4>
                <a
                  href={contactsNo[0].href}
                  className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {contactsNo[0].number}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#278393] border border-white/10">
                <Mail size={20} strokeWidth={2.2} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">
                  Email Address:
                </h4>
                <a
                  href={companyEmail.href}
                  className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {companyEmail.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-8 mt-8 border-t border-white/10 relative z-10">
          <p className="text-xs text-slate-400 font-normal">{companyName}.</p>
        </div>
      </div>

      {/* ================= RIGHT COLUMN: FORM WITH FLOATING LABELS ================= */}
      <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between relative bg-white">
        <div>
          {/* Form Header */}
          <div className="border-b border-slate-200 pb-4 mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-[#083761] tracking-tight">
              Send An Enquiry
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
              Please enter your contact details below and our team will get back
              to you within 24 hours.
            </p>
          </div>

          {/* Form Body */}
          <form id="contact-form" className="space-y-6">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Your Name */}
              <div className="relative pt-4">
                <input
                  type="text"
                  id="client-name"
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-800 placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300"
                />
                <label
                  htmlFor="client-name"
                  className="absolute left-0 -top-1 text-xs sm:text-sm text-slate-600 transition-all duration-300 
                                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                                peer-focus:-top-1 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#278393] font-medium cursor-text"
                >
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <User className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
              </div>

              {/* Your Email */}
              <div className="relative pt-4">
                <input
                  type="email"
                  id="client-email"
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-800 placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300"
                />
                <label
                  htmlFor="client-email"
                  className="absolute left-0 -top-1 text-xs sm:text-sm text-slate-600 transition-all duration-300 
                                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                                peer-focus:-top-1 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#278393] font-medium cursor-text"
                >
                  Your Email <span className="text-rose-500">*</span>
                </label>
                <Mail className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
              </div>
            </div>

            {/* Row 2: Business Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              {/* Business Name */}
              <div className="relative pt-4">
                <input
                  type="text"
                  id="client-business"
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-800 placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300"
                />
                <label
                  htmlFor="client-business"
                  className="absolute left-0 -top-1 text-xs sm:text-sm text-slate-600 transition-all duration-300 
                                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                                peer-focus:-top-1 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#278393] font-medium cursor-text"
                >
                  Your Business Name <span className="text-rose-500">*</span>
                </label>
                <Building2 className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
              </div>

              {/* Your Phone */}
              <div className="relative pt-4">
                <input
                  type="tel"
                  id="client-phone"
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-800 placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300"
                />
                <label
                  htmlFor="client-phone"
                  className="absolute left-0 -top-1 text-xs sm:text-sm text-slate-600 transition-all duration-300 
                                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                                peer-focus:-top-1 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#278393] font-medium cursor-text"
                >
                  Your Phone <span className="text-rose-500">*</span>
                </label>
                <Phone className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
              </div>
            </div>

            {/* Row 3: How Can We Help (Textarea) */}
            <div className="relative pt-4">
              <textarea
                id="client-message"
                rows={3}
                placeholder=" "
                required
                className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-800 placeholder-transparent focus:border-[#278393] focus:outline-none transition-colors duration-300 resize-none"
              ></textarea>
              <label
                htmlFor="client-message"
                className="absolute left-0 -top-1 text-xs sm:text-sm text-slate-600 transition-all duration-300 
                              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                              peer-focus:-top-1 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#278393] font-medium cursor-text"
              >
                How can we help? <span className="text-rose-500">*</span>
              </label>
              <MessageSquare className="absolute right-0 bottom-3 w-5 h-5 text-slate-400 peer-focus:text-[#278393] pointer-events-none transition-colors duration-300" />
            </div>

            {/* Animated Button */}
            <div className="pt-4">
              <AnimatedBtn
                hoverText="Send Now"
                icon={Send}
                bgColor="bg-[#278393]"
                hoverBgColor="hover:bg-[#083761]"
                textColor="text-white"
                hoverTextColor="hover:text-gray-100"
              >
                Send Consultation Request
              </AnimatedBtn>
            </div>
          </form>
        </div>

        {/* Privacy Note */}
        <div className="flex items-center gap-2 pt-6 mt-6 border-t border-slate-100 text-xs text-slate-400">
          <Lock size={14} className="text-[#278393] shrink-0" />
          <span>
            We strictly respect your privacy. No spam or aggressive sales
            tactics.
          </span>
        </div>
      </div>
    </div>
  );
}
