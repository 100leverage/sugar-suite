"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

const BOKEH = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: Math.random() * 120 + 20,
  top: `${Math.random() * 120 - 10}vh`,
  left: `${Math.random() * 110 - 5}%`,
  opacity: Math.random() * 0.18 + 0.04,
  duration: `${Math.random() * 14 + 10}s`,
  delay: `${Math.random() * 10}s`,
  driftX: Math.round((Math.random() - 0.5) * 60),
  driftY: Math.round((Math.random() - 0.5) * 40),
  color: i % 5 === 0
    ? "rgba(180,80,30,VAR)"
    : i % 4 === 0
    ? "rgba(220,160,60,VAR)"
    : "rgba(201,150,58,VAR)",
}));

export default function BokehLights() {
  const reduced = useReducedMotion();
  const lights = useMemo(() => BOKEH, []);

  if (reduced) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <style>{`
        @keyframes bokeh-float {
          0%   { transform: translate(0px, 0px) scale(1);    opacity: var(--op-low); }
          30%  { opacity: var(--op-high); }
          60%  { transform: translate(var(--dx), var(--dy)) scale(1.08); opacity: var(--op-high); }
          100% { transform: translate(0px, 0px) scale(1);    opacity: var(--op-low); }
        }
      `}</style>

      {lights.map((b) => {
        const color = b.color.replace("VAR", String(b.opacity));
        const colorHigh = b.color.replace("VAR", String(Math.min(b.opacity * 2.2, 0.38)));
        return (
          <div
            key={b.id}
            className="absolute rounded-full"
            style={{
              width: b.size,
              height: b.size,
              top: b.top,
              left: b.left,
              background: color,
              filter: `blur(${b.size * 0.42}px)`,
              "--op-low": b.opacity,
              "--op-high": Math.min(b.opacity * 2.2, 0.38),
              "--dx": `${b.driftX}px`,
              "--dy": `${b.driftY}px`,
              animation: `bokeh-float ${b.duration} ease-in-out ${b.delay} infinite`,
            } as React.CSSProperties}
          />
        );
      })}

      {/* Subtle vignette to ground the effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#080808_100%)]" />
    </div>
  );
}
