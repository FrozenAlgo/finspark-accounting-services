"use client";

import React from "react";

import { ICON_SETS } from "@/lib/data";

// Preset icon sets for different section themes

export default function AmbientBackground({
  variant = "light", // "light" | "dark"
  theme = "finance", // "finance" | "trust" | "minimal"
  glowPosition = "top-left", // "top-left" | "top-right" | "center"
}) {
  const isDark = variant === "dark";
  const Icons = ICON_SETS[theme] || ICON_SETS.finance;

  // Glow position logic
  const getGlowStyles = () => {
    switch (glowPosition) {
      case "top-right":
        return {
          orb1: "top-[-10%] right-[-5%] bg-[#278393]/25",
          orb2: "bottom-[-10%] left-[-5%] bg-[#083761]/15",
        };
      case "center":
        return {
          orb1: "top-[20%] left-[30%] bg-[#278393]/20",
          orb2: "bottom-[20%] right-[30%] bg-[#083761]/15",
        };
      case "top-left":
      default:
        return {
          orb1: "top-[-10%] left-[-5%] bg-[#278393]/25",
          orb2: "bottom-[-10%] right-[-5%] bg-[#083761]/15",
        };
    }
  };

  const glows = getGlowStyles();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Dynamic Glow Orbs */}
      <div
        className={`absolute w-96 h-96 rounded-full blur-3xl animate-pulse ${glows.orb1}`}
        style={{ animationDuration: "7s" }}
      />
      <div
        className={`absolute w-[30rem] h-[30rem] rounded-full blur-3xl animate-pulse ${glows.orb2}`}
        style={{ animationDuration: "10s" }}
      />

      {/* 2. Grid Pattern */}
      <svg
        className={`absolute inset-0 h-full w-full ${
          isDark ? "text-white/10" : "text-[#083761]/10"
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${theme}`}
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${theme})`} />
      </svg>

      {/* 3. Floating Icons (Rendered only if icons exist in theme) */}
      {Icons.length > 0 && (
        <div className="absolute inset-0 opacity-25">
          {Icons[0] && (
            <div
              className="absolute top-10 left-[5%] text-[#278393] animate-bounce"
              style={{ animationDuration: "6s" }}
            >
              {React.createElement(Icons[0], { size: 44, strokeWidth: 1.8 })}
            </div>
          )}
          {Icons[1] && (
            <div
              className="absolute top-12 right-[6%] text-[#083761] animate-pulse"
              style={{ animationDuration: "4s" }}
            >
              {React.createElement(Icons[1], { size: 48, strokeWidth: 1.8 })}
            </div>
          )}
          {Icons[2] && (
            <div
              className="absolute top-1/2 left-[2%] -translate-y-1/2 text-[#083761] animate-bounce"
              style={{ animationDuration: "8s" }}
            >
              {React.createElement(Icons[2], { size: 48, strokeWidth: 1.8 })}
            </div>
          )}
          {Icons[3] && (
            <div
              className="absolute top-1/2 right-[3%] -translate-y-1/2 text-[#278393] animate-pulse"
              style={{ animationDuration: "5s" }}
            >
              {React.createElement(Icons[3], { size: 52, strokeWidth: 1.8 })}
            </div>
          )}
          {Icons[4] && (
            <div
              className="absolute bottom-12 left-[8%] text-[#083761] animate-pulse"
              style={{ animationDuration: "6s" }}
            >
              {React.createElement(Icons[4], { size: 40, strokeWidth: 1.8 })}
            </div>
          )}
          {Icons[5] && (
            <div
              className="absolute bottom-10 right-[10%] text-[#278393] animate-bounce"
              style={{ animationDuration: "7s" }}
            >
              {React.createElement(Icons[5], { size: 44, strokeWidth: 1.8 })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
