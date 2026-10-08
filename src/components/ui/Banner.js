"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  Check,
  Star,
  CalendarCheck,
  Phone,
} from "lucide-react";
import AnimatedBtn from "./AnimatedBtn";

// Motion Animation Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.15,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export default function Banner({
  badge,
  subBadge,
  heading,
  subHeading,
  para,
  buttons = [],
  pills = [],
  imageSrc,
  imageAlt = "Service Banner",
  showSubHeading = true,
  showButtons = true,
  showPills = true,
}) {
  const hasImage = Boolean(imageSrc);

  return (
    <section className="relative w-full py-12 lg:py-10 px-4 sm:px-6 lg:px-12 bg-slate-50/50 overflow-hidden">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT COLUMN: Main Content */}
        <div
          className={`space-y-6 ${
            hasImage
              ? "lg:col-span-7"
              : "lg:col-span-12 max-w-4xl mx-auto text-left"
          }`}
        >
          {/* Badges Row */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-3"
          >
            {badge && (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#278393]/15 text-[#278393] border border-[#278393]/25 text-xs font-bold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" />
                {badge}
              </span>
            )}
            {subBadge && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <Clock className="w-3.5 h-3.5 text-[#278393]" />
                {subBadge}
              </span>
            )}
          </motion.div>

          {/* Main Title */}
          <motion.h1
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#083761] tracking-tight leading-none"
          >
            {heading}
          </motion.h1>

          {/* Subheading (Conditional) */}
          {showSubHeading && subHeading && (
            <motion.h2
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl font-bold text-[#278393] leading-snug"
            >
              {subHeading}
            </motion.h2>
          )}

          {/* Paragraph */}
          {para && (
            <motion.p
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl"
            >
              {para}
            </motion.p>
          )}

          {/* Animated CTA Buttons (Conditional) */}
          {showButtons && buttons.length > 0 && (
            <motion.div
              custom={4}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="pt-2 flex flex-wrap items-center gap-3"
            >
              {buttons.map((btn, idx) => {
                if (btn.show === false) return null;
                const isPrimary = btn.variant !== "secondary";

                return (
                  <AnimatedBtn
                    key={idx}
                    href={btn.href || "#"}
                    hoverText={btn.hoverText || btn.text}
                    icon={btn.icon || (isPrimary ? CalendarCheck : Phone)}
                    bgColor={
                      btn.bgColor ||
                      (isPrimary
                        ? "bg-[#278393]"
                        : "bg-white border border-slate-200")
                    }
                    hoverBgColor={
                      btn.hoverBgColor ||
                      (isPrimary ? "hover:bg-[#1f6875]" : "hover:bg-slate-100")
                    }
                    textColor={
                      btn.textColor ||
                      (isPrimary ? "text-white" : "text-[#083761]")
                    }
                    hoverTextColor={
                      btn.hoverTextColor ||
                      (isPrimary ? "hover:text-white" : "hover:text-[#278393]")
                    }
                  >
                    {btn.text}
                  </AnimatedBtn>
                );
              })}
            </motion.div>
          )}

          {/* Feature Pills Grid (Conditional) */}
          {showPills && pills.length > 0 && (
            <motion.div
              custom={5}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-3"
            >
              {pills.map((pill, idx) => {
                const title = typeof pill === "string" ? pill : pill.title;
                const sub = typeof pill === "object" ? pill.sub : null;

                return (
                  <div
                    key={idx}
                    className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xs hover:shadow-sm transition-all"
                  >
                    <div className="bg-[#278393]/10 text-[#278393] p-2 rounded-xl shrink-0">
                      <Check size={16} strokeWidth={2.5} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-bold text-[#083761] truncate">
                        {title}
                      </p>
                      {sub && (
                        <p className="text-[11px] text-slate-500 font-medium leading-tight">
                          {sub}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* RIGHT COLUMN: Image with Glass Badges */}
        {hasImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
              />

              {/* Top-Right Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-slate-100 p-3 rounded-2xl shadow-lg flex items-center gap-2.5 max-w-[200px]">
                <div className="w-8 h-8 rounded-full bg-[#083761] text-white flex items-center justify-center shrink-0">
                  <Star size={16} className="fill-current text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#083761] leading-tight">
                    100% HMRC Ready
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Audit-compliant records
                  </p>
                </div>
              </div>

              {/* Bottom Glass Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-white/40 p-3.5 rounded-2xl shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#278393] text-white flex items-center justify-center shrink-0">
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#083761]">
                      Real-Time Clarity
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Books reconciled weekly & monthly
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-[#278393]/10 text-[#278393] text-[10px] font-bold uppercase">
                  Live Feed
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
