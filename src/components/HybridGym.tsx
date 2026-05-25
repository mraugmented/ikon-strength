"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const coaches = [
  { src: "/images/coach-1.png", alt: "IKON Coach" },
  { src: "/images/coach-2.png", alt: "IKON Coach" },
  { src: "/images/coach-3.png", alt: "IKON Coach" },
  { src: "/images/coach-4.png", alt: "IKON Coach" },
];

export default function HybridGym() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <FadeIn>
            <div>
              <p className="text-blue-500 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                The Concept
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-8">
                What is a
                <br />
                <span className="text-blue-500">Hybrid</span> Gym?
              </h2>
              <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed mb-6">
                As a hybrid gym, we brought the best coaches from different
                disciplines under one roof. Olympic lifting, powerlifting, HIIT,
                personal training, and nutrition coaching — all in one space.
              </p>
              <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed">
                No matter your goal, we have the coach and the program to get
                you there. This isn&apos;t a globo gym. This is where serious
                athletes train alongside everyday people who want real results.
              </p>
            </div>
          </FadeIn>

          {/* Facility image */}
          <FadeIn delay={0.2} direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/hybrid-gym.jpg"
                alt="IKON Strength & Performance — hybrid gym facility with athletes training across multiple disciplines"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
