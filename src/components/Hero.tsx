"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-gradient-to-b from-black/80 to-transparent">
        <Image
          src="/images/logo.png"
          alt="IKON Strength & Performance"
          width={120}
          height={32}
          className="h-8 w-auto"
          priority
        />
        <a
          href="#contact"
          className="text-xs font-bold tracking-widest uppercase text-white/80 hover:text-white transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Background image */}
      <Image
        src="/images/lifter.png"
        alt="Athlete performing a clean lift at IKON Strength & Performance"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h1 className="text-[clamp(4rem,15vw,12rem)] font-black leading-[0.85] tracking-tighter uppercase">
            IKON
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          <p className="text-[clamp(1rem,3vw,2rem)] font-semibold tracking-[0.3em] uppercase text-white/90 mt-2">
            Strength & Performance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="w-24 h-[2px] bg-blue-500 mx-auto mt-8 mb-6" />
          <p className="text-lg md:text-xl text-white/70 font-medium tracking-wide uppercase">
            #1 Hybrid Gym in Torrance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <a
            href="#contact"
            className="inline-block mt-10 px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
