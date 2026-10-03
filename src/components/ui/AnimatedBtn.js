import React from "react";

export default function AnimatedBtn({
  children,
  hoverText = "Click here",
  href = "#",
  icon: Icon, // Destructures the Lucide component passed down as a prop
  bgColor = "bg-[#278391]",
  hoverBgColor = "hover:bg-amber-900",
  textColor = "text-[#083761]",
  hoverTextColor = "hover:text-white",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-medium transition-all duration-500 ease-in-out ${bgColor} ${hoverBgColor} ${textColor} ${hoverTextColor} ${className}`}
    >
      {/* 
        The Grid Stack: Keeps both text tracks sharing the exact same space 
        so the button centers perfectly regardless of text lengths.
      */}
      <span className="grid overflow-hidden [grid-template-areas:'stack'] text-center">
        {/* Default Text State */}
        <span className="transition-transform duration-500 ease-in-out [grid-area:stack] group-hover:-translate-y-[150%]">
          {children}
        </span>

        {/* Hover Text State */}
        <span className="transition-transform duration-500 ease-in-out translate-y-[150%] [grid-area:stack] group-hover:translate-y-0">
          {hoverText}
        </span>
      </span>

      {/* Render the Lucide icon dynamically if one is provided */}
      {Icon && (
        <Icon className="h-4 w-4 shrink-0 transition-transform duration-500 ease-in-out group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
