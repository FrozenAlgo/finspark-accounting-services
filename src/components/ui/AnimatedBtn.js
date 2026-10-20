import React from "react";

export default function AnimatedBtn({
  children,
  hoverText = "Click here",
  href = "#",
  icon: Icon, // Destructures the Lucide component passed down as a prop
  bgColor = "bg-[#278393]",
  hoverBgColor = "hover:bg-[#083761]",
  textColor = "text-white",
  hoverTextColor = "hover:text-white",
  className = "",
  typeSubmit = false,
  onClick,
}) {
  const commonClasses = `group inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-medium transition-all duration-500 ease-in-out cursor-pointer ${bgColor} ${hoverBgColor} ${textColor} ${hoverTextColor} ${className}`;

  // Inner content (text flip grid animation + icon)
  const content = (
    <>
      {/* Grid Stack: Shared space for smooth text flip */}
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

      {/* Render the Lucide icon dynamically if provided */}
      {Icon && (
        <Icon className="h-4 w-4 shrink-0 transition-transform duration-500 ease-in-out group-hover:translate-x-0.5" />
      )}
    </>
  );

  // Render button element if typeSubmit is true
  if (typeSubmit) {
    return (
      <button type="submit" onClick={onClick} className={commonClasses}>
        {content}
      </button>
    );
  }

  // Render anchor element for links
  return (
    <a href={href} onClick={onClick} className={commonClasses}>
      {content}
    </a>
  );
}
