"use client";

import { useState, FormEvent } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goals: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://is-boring.com/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site_id: "ikon-strength",
          ...formData,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", goals: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 md:py-36 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Info */}
          <FadeIn>
            <div>
              <p className="text-blue-500 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Get Started
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-8">
                Ready to
                <br />
                Train?
              </h2>
              <p className="text-[#a1a1aa] text-lg leading-relaxed mb-12">
                Whether you&apos;re a competitive athlete or just getting
                started, we have a program for you. Reach out and let&apos;s
                talk about your goals.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-[#a1a1aa] uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+13108720056"
                    className="text-xl font-semibold hover:text-blue-500 transition-colors"
                  >
                    (310) 872-0056
                  </a>
                </div>
                <div>
                  <p className="text-sm text-[#a1a1aa] uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:james.song25@gmail.com"
                    className="text-xl font-semibold hover:text-blue-500 transition-colors"
                  >
                    james.song25@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-[#a1a1aa] uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <p className="text-xl font-semibold">
                    901 Van Ness Ave
                    <br />
                    Torrance, CA 90501
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-[#a1a1aa] uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-[#a1a1aa] uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-[#a1a1aa] uppercase tracking-wider mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="(310) 555-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="goals"
                  className="block text-sm text-[#a1a1aa] uppercase tracking-wider mb-2"
                >
                  What are your goals?
                </label>
                <textarea
                  id="goals"
                  rows={4}
                  value={formData.goals}
                  onChange={(e) =>
                    setFormData({ ...formData, goals: e.target.value })
                  }
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white font-bold text-sm tracking-widest uppercase rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Message Sent!"
                    : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
              {status === "sent" && (
                <p className="text-green-400 text-sm text-center">
                  We&apos;ll be in touch soon. Welcome to IKON.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
