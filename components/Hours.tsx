"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Clock } from "lucide-react";

const ease = "easeOut" as const;

const hours = [
  { day: "Monday",    time: "7 AM – 2 AM" },
  { day: "Tuesday",   time: "7 AM – 2 AM" },
  { day: "Wednesday", time: "7 AM – 2 AM" },
  { day: "Thursday",  time: "7 AM – 2 AM" },
  { day: "Friday",    time: "7 AM – 2 AM" },
  { day: "Saturday",  time: "7 AM – 2 AM" },
  { day: "Sunday",    time: "7 AM – 2 AM" },
];

function getTodayName() {
  return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()];
}

export default function Hours() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const today = getTodayName();

  return (
    <section id="hours" ref={ref} className="py-28 px-6 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">We&rsquo;re Open</p>
          <div className="gold-divider mb-6" />
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-[#F5F0E8]">
            Hours of <em className="italic text-[#C9963A]">Operation</em>
          </h2>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="bg-[#111111] border border-[#1e1e1e]"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 px-6 py-5 border-b border-[#1e1e1e]">
              <Clock size={16} className="text-[#C9963A]" style={{ filter: "drop-shadow(0 0 6px rgba(201,150,58,0.6))" }} />
              <span className="text-white font-bold text-xs tracking-[0.2em] uppercase">Weekly Schedule</span>
              <span className="ml-auto text-xs bg-green-950/60 text-green-400 border border-green-900/60 px-2.5 py-1">
                Open Today
              </span>
            </div>

            {/* Hours rows */}
            {hours.map((h) => {
              const isToday = h.day === today;
              return (
                <div
                  key={h.day}
                  className={`flex justify-between items-center px-6 py-4 border-b border-[#141414] last:border-b-0 ${
                    isToday ? "bg-[#C9963A]/5" : ""
                  }`}
                >
                  <span className={`text-sm ${isToday ? "text-[#F5F0E8] font-semibold" : "text-white font-bold"}`}>
                    {h.day}
                    {isToday && (
                      <span className="ml-2 text-[0.6rem] tracking-widest text-[#C9963A] uppercase">Today</span>
                    )}
                  </span>
                  <span
                    className={`text-sm ${isToday ? "text-[#C9963A] font-semibold" : "text-white font-bold"}`}
                    style={isToday ? { textShadow: "0 0 10px rgba(201,150,58,0.4)" } : {}}
                  >
                    {h.time}
                  </span>
                </div>
              );
            })}
          </motion.div>

          <motion.p
            initial={reduced ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="text-center text-white font-bold text-xs mt-6 tracking-widest"
          >
            Hours may vary on holidays · Always call ahead to confirm
          </motion.p>
        </div>
      </div>
    </section>
  );
}
