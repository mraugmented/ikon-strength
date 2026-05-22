"use client";

import FadeIn from "./FadeIn";

const programs = [
  {
    name: "Olympic Lifting",
    description:
      "Improve snatches and clean & jerks. Personalized programming 2-6 days/week. 24/7 access for advanced athletes.",
    number: "01",
  },
  {
    name: "Powerlifting",
    description:
      "Improve squat, bench, deadlift. Personalized programming and coaching to build raw strength.",
    number: "02",
  },
  {
    name: "SWEAT",
    description:
      "Fast-paced HIIT. Cardio, bodyweight, and weightlifting in 1-hour classes. Coached by Head SWEAT Coach Reno Nascimento.",
    number: "03",
  },
  {
    name: "Personal Training",
    description:
      "Paired with one of our expert trainers. Customized to your goals, your schedule, your life.",
    number: "04",
  },
  {
    name: "Nutrition Coaching",
    description:
      "Dial in your nutrition. Weight loss or competition prep. We've got you covered.",
    number: "05",
  },
];

export default function Programs() {
  return (
    <section className="py-28 md:py-36 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-blue-500 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-20">
            Programs
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {programs.map((program, i) => (
            <FadeIn key={program.number} delay={i * 0.1}>
              <div className="group border-t border-white/10 py-10 md:py-14 hover:border-blue-500/50 transition-colors duration-500">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="text-blue-500/50 font-mono text-sm">
                      {program.number}
                    </span>
                  </div>

                  {/* Program name */}
                  <div className="md:col-span-5">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight group-hover:text-blue-500 transition-colors duration-300">
                      {program.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-6">
                    <p className="text-[#a1a1aa] text-lg leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
