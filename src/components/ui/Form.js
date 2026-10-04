import {
  Building2,
  CheckCircle,
  Mail,
  Phone,
  Send,
  SendIcon,
  User,
  MessageSquare,
} from "lucide-react";
import AnimatedBtn from "./AnimatedBtn";
export default function Form() {
  return (
    <div className="z-10 p-6 text-white bg-white/10 rounded-xl shadow-sm border border-slate-100/30 ">
      <div className="border-b border-b-gray-500 mb-8">
        <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 font-bold">
          Send An Enquiry
        </h2>
        <p className="py-2">
          Please enter your contact details below and our team will get back to
          you within 24 hours.
        </p>
      </div>
      <form id="contact-form" className="space-y-6">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Your Name */}
          <div className="relative pt-4">
            <input
              type="text"
              id="name"
              placeholder=" "
              required
              className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-200 placeholder-transparent focus:border-emerald-400 focus:outline-none transition-colors duration-300"
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-1 text-sm text-gray-100 transition-all duration-300 
                         peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                         peer-focus:-top-1 peer-focus:text-sm peer-focus:text-emerald-400 font-medium cursor-text"
            >
              Your Name <span className="text-red-500">*</span>
            </label>
            <User className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-emerald-400 pointer-events-none transition-colors duration-300" />
          </div>

          {/* Your Email */}
          <div className="relative pt-4">
            <input
              type="email"
              id="email"
              placeholder=" "
              required
              className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-200 placeholder-transparent focus:border-emerald-400 focus:outline-none transition-colors duration-300"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-1 text-sm text-gray-100 transition-all duration-300 
                         peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                         peer-focus:-top-1 peer-focus:text-sm peer-focus:text-emerald-400 font-medium cursor-text"
            >
              Your Email <span className="text-red-500">*</span>
            </label>
            <Mail className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-emerald-400 pointer-events-none transition-colors duration-300" />
          </div>
        </div>

        {/* Row 2: Business Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          {/* Business Name */}
          <div className="relative pt-4">
            <input
              type="text"
              id="business"
              placeholder=" "
              required
              className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-200 placeholder-transparent focus:border-emerald-400 focus:outline-none transition-colors duration-300"
            />
            <label
              htmlFor="business"
              className="absolute left-0 -top-1 text-sm text-gray-100 transition-all duration-300 
                         peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                         peer-focus:-top-1 peer-focus:text-sm peer-focus:text-emerald-400 font-medium cursor-text"
            >
              Your Business Name <span className="text-red-500">*</span>
            </label>
            <Building2 className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-emerald-400 pointer-events-none transition-colors duration-300" />
          </div>

          {/* Your Phone */}
          <div className="relative pt-4">
            <input
              type="tel"
              id="phone"
              placeholder=" "
              required
              className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-200 placeholder-transparent focus:border-emerald-400 focus:outline-none transition-colors duration-300"
            />
            <label
              htmlFor="phone"
              className="absolute left-0 -top-1 text-sm text-gray-100 transition-all duration-300 
                         peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                         peer-focus:-top-1 peer-focus:text-sm peer-focus:text-emerald-400 font-medium cursor-text"
            >
              Your Phone <span className="text-red-500">*</span>
            </label>
            <Phone className="absolute right-0 bottom-2 w-5 h-5 text-slate-400 peer-focus:text-emerald-400 pointer-events-none transition-colors duration-300" />
          </div>
        </div>

        {/* Row 3: How Can We Help (Textarea) */}
        <div className="relative pt-4">
          <textarea
            id="message"
            rows={3}
            placeholder=" "
            required
            className="peer w-full bg-transparent border-b-2 border-slate-300 py-2 pr-10 text-slate-200 placeholder-transparent focus:border-emerald-400 focus:outline-none transition-colors duration-300 resize-none"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 -top-1 text-sm text-gray-100 transition-all duration-300 
                       peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 
                       peer-focus:-top-1 peer-focus:text-sm peer-focus:text-emerald-400 font-medium cursor-text"
          >
            How can we help? <span className="text-red-500">*</span>
          </label>
          <MessageSquare className="absolute right-0 bottom-3 w-5 h-5 text-slate-400 peer-focus:text-emerald-400 pointer-events-none transition-colors duration-300" />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <AnimatedBtn
            hoverText="Send Now"
            icon={Send}
            bgColor="bg-[#278392]"
            hoverBgColor="hover:bg-[#083761]"
            textColor="text-white"
            hoverTextColor="hover:text-gray-100"
          >
            Send
          </AnimatedBtn>
        </div>
      </form>
    </div>
  );
}
