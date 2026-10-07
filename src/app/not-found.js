"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import AmbientBackground from "@/components/ui/AmbientBackground";

export default function NotFound() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorator */}
      <AmbientBackground
        variant="light"
        theme="minimal"
        glowPosition="center"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-lg mx-auto text-center space-y-6">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#278393]/10 border border-[#278393]/20">
          <span className="w-2 h-2 rounded-full bg-[#278393] animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-[#278393] uppercase">
            404 Error
          </span>
        </div>

        {/* 404 Heading */}
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-[#083761] tracking-tight leading-none select-none">
          4<span className="text-[#278393]">0</span>4
        </h1>

        {/* Text Content */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#083761] tracking-tight">
            Page Not Found
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            The page you are looking for doesn't exist, was moved, or is
            temporarily unavailable.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#083761] text-white text-sm font-bold shadow-md hover:bg-[#278393] transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <Home size={18} strokeWidth={2.2} />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
