"use client";

import { useMemo } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const ORBS = [
  { w: 500, h: 500, top: "8vh",   left: "-8%",  delay: 0,  dur: 20, rate: 0.10, color: "rgba(201,150,58,0.07)" },
  { w: 380, h: 380, top: "55vh",  left: "65%",  delay: 5,  dur: 26, rate: 0.18, color: "rgba(201,150,58,0.05)" },
  { w: 620, h: 620, top: "-5vh",  left: "35%",  delay: 2,  dur: 30, rate: 0.07, color: "rgba(140,80,20,0.06)" },
  { w: 300, h: 300, top: "130vh", left: "-3%",  delay: 7,  dur: 22, rate: 0.22, color: "rgba(201,150,58,0.08)" },
  { w: 450, h: 450, top: "85vh",  left: "72%",  delay: 10, dur: 28, rate: 0.14, color: "rgba(180,110,30,0.05)" },
  { w: 280, h: 280, top: "200vh", left: "20%",  delay: 3,  dur: 18, rate: 0.12, color: "rgba(201,150,58,0.06)" },
];

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 350}vh`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 0.5,
  delay: `${Math.random() * 8}s`,
  duration: `${Math.random() * 5 + 4}s`,
}));

export default function FloatingOrbs() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  const orb0Y = useTransform(scrollY, [0, 5000], [0, -5000 * ORBS[0].rate]);
  const orb1Y = useTransform(scrollY, [0, 5000], [0, -5000 * ORBS[1].rate]);
  const orb2Y = useTransform(scrollY, [0, 5000], [0, -5000 * ORBS[2].rate]);
  const orb3Y = useTransform(scrollY, [0, 5000], [0, -5000 * ORBS[3].rate]);
  const orb4Y = useTransform(scrollY, [0, 5000], [0, -5000 * ORBS[4].rate]);
  const orb5Y = useTransform(scrollY, [0, 5000], [0, -5000 * ORBS[5].rate]);
  const orbYs = [orb0Y, orb1Y, orb2Y, orb3Y, orb4Y, orb5Y];

  const particles = useMemo(() => PARTICLES, []);

  if (reduced) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.w,
            height: orb.h,
            top: orb.top,
            left: orb.left,
            background: orb.color,
            y: orbYs[i],
            animation: `orb-drift ${orb.dur}s ease-in-out ${orb.delay}s infinite`,
          }}
        />
      ))}

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#C9963A]"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `twinkle ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
