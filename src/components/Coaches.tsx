"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const coaches = [
  {
    src: "/images/coach-1.png",
    name: "Coach",
    title: "Olympic Lifting",
  },
  {
    src: "/images/coach-2.png",
    name: "Coach",
    title: "Powerlifting",
  },
  {
    src: "/images/coach-3.png",
    name: "Coach",
    title: "SWEAT / HIIT",
  },
  {
    src: "/images/coach-4.png",
    name: "Coach",
    title: "Personal Training",
  },
];

export default function Coaches() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-blue-500 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            The Team
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-16">
            Our Coaches
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {coaches.map((coach, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <motion.div
                className="relative aspect-[3/4] overflow-hidden rounded-2xl group cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={coach.src}
                  alt={`${coach.name} — ${coach.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Default gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Name/title reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-bold text-lg uppercase tracking-wide">
                    {coach.name}
                  </p>
                  <p className="text-blue-300 text-sm font-medium tracking-wider uppercase mt-1">
                    {coach.title}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
