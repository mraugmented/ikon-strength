"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value}{suffix}
        </motion.span>
      ) : (
        <span className="opacity-0">0</span>
      )}
    </span>
  );
}

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Years Combined Experience",
  },
  {
    value: 1,
    suffix: "",
    label: "Hybrid Gym in the South Bay",
    prefix: "#",
  },
  {
    value: 5,
    suffix: "",
    label: "Training Disciplines",
  },
];

export default function Stats() {
  return (
    <section className="py-28 md:py-36 px-6 bg-[#111111] relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-blue-500 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              By the Numbers
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95]">
              South Bay&apos;s Home
              <br />
              of Weightlifting
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="text-center">
                <p className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[#a1a1aa] text-lg font-medium uppercase tracking-wider mt-4">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
