"use client";

import { useReducedMotion } from "framer-motion";

export default function AuroraWaves() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <style>{`
        @keyframes aurora-shift-1 {
          0%   { transform: translateX(-10%) skewX(-3deg) scaleY(1);   opacity: 0.55; }
          30%  { transform: translateX(6%)  skewX(2deg)  scaleY(1.08); opacity: 0.75; }
          60%  { transform: translateX(-4%) skewX(-1deg) scaleY(0.95); opacity: 0.60; }
          100% { transform: translateX(-10%) skewX(-3deg) scaleY(1);   opacity: 0.55; }
        }
        @keyframes aurora-shift-2 {
          0%   { transform: translateX(8%)  skewX(2deg)  scaleY(1);    opacity: 0.45; }
          40%  { transform: translateX(-6%) skewX(-3deg) scaleY(1.1);  opacity: 0.65; }
          70%  { transform: translateX(3%)  skewX(1deg)  scaleY(0.92); opacity: 0.50; }
          100% { transform: translateX(8%)  skewX(2deg)  scaleY(1);    opacity: 0.45; }
        }
        @keyframes aurora-shift-3 {
          0%   { transform: translateX(-5%) skewX(1deg)  scaleY(1);    opacity: 0.35; }
          35%  { transform: translateX(8%)  skewX(-2deg) scaleY(1.06); opacity: 0.55; }
          65%  { transform: translateX(-3%) skewX(2deg)  scaleY(0.98); opacity: 0.40; }
          100% { transform: translateX(-5%) skewX(1deg)  scaleY(1);    opacity: 0.35; }
        }
        @keyframes aurora-pulse {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.6; }
        }
      `}</style>

      {/* Wave 1 — deep amber, lower band */}
      <div
        className="absolute blur-[80px] rounded-[60%]"
        style={{
          width: "140%",
          height: "35%",
          bottom: "10%",
          left: "-20%",
          background: "linear-gradient(90deg, transparent 0%, rgba(160,70,10,0.7) 25%, rgba(201,130,30,0.85) 50%, rgba(170,80,15,0.7) 75%, transparent 100%)",
          animation: "aurora-shift-1 18s ease-in-out infinite",
          transformOrigin: "center center",
        }}
      />

      {/* Wave 2 — mid amber/gold, mid band */}
      <div
        className="absolute blur-[100px] rounded-[50%]"
        style={{
          width: "150%",
          height: "30%",
          bottom: "28%",
          left: "-25%",
          background: "linear-gradient(90deg, transparent 0%, rgba(120,50,5,0.5) 20%, rgba(201,150,58,0.7) 45%, rgba(180,100,20,0.65) 70%, transparent 100%)",
          animation: "aurora-shift-2 24s ease-in-out infinite",
          animationDelay: "-6s",
          transformOrigin: "center center",
        }}
      />

      {/* Wave 3 — burgundy/rust, upper band */}
      <div
        className="absolute blur-[120px] rounded-[60%]"
        style={{
          width: "130%",
          height: "28%",
          bottom: "46%",
          left: "-15%",
          background: "linear-gradient(90deg, transparent 0%, rgba(100,30,10,0.4) 20%, rgba(150,60,20,0.55) 50%, rgba(110,35,12,0.45) 75%, transparent 100%)",
          animation: "aurora-shift-3 30s ease-in-out infinite",
          animationDelay: "-12s",
          transformOrigin: "center center",
        }}
      />

      {/* Wave 4 — faint gold top shimmer */}
      <div
        className="absolute blur-[140px] rounded-[50%]"
        style={{
          width: "120%",
          height: "20%",
          top: "5%",
          left: "-10%",
          background: "linear-gradient(90deg, transparent 0%, rgba(201,150,58,0.25) 40%, rgba(220,170,70,0.3) 60%, transparent 100%)",
          animation: "aurora-pulse 20s ease-in-out infinite",
          animationDelay: "-8s",
        }}
      />

      {/* Deep vignette to keep text readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_0%,#080808_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#080808] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />
    </div>
  );
}
