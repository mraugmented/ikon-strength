import FadeIn from "./FadeIn";

const schedule = [
  { day: "Monday", hours: "6:00 AM — 8:00 PM" },
  { day: "Tuesday", hours: "6:00 AM — 8:00 PM" },
  { day: "Wednesday", hours: "6:00 AM — 8:00 PM" },
  { day: "Thursday", hours: "6:00 AM — 8:00 PM" },
  { day: "Friday", hours: "6:00 AM — 8:00 PM" },
  { day: "Saturday", hours: "8:00 AM — 12:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function Hours() {
  return (
    <section className="py-28 md:py-36 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-blue-500 font-semibold text-sm tracking-[0.2em] uppercase mb-12 text-center">
            Schedule
          </p>
        </FadeIn>

        <div className="bg-[#111111] rounded-2xl border border-white/5 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Facility Hours */}
            <FadeIn>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6">
                  Facility Hours
                </h3>
                <div className="space-y-3">
                  {schedule.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between items-center"
                    >
                      <span className="text-blue-500 font-semibold text-sm tracking-wide uppercase">
                        {item.day}
                      </span>
                      <span className="text-[#a1a1aa] text-sm">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[#a1a1aa]/70 text-sm mt-6 leading-relaxed">
                  Coaching available during all open hours. Personalized
                  programming included with membership.
                </p>
              </div>
            </FadeIn>

            {/* Right — Classes */}
            <FadeIn delay={0.15}>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6">
                  Classes
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wide mb-2">
                      Weightlifting
                    </h4>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">
                      Open class format for Olympic lifting &amp; powerlifting.
                      All levels welcome with coach guidance on every platform.
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-white/5" />
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wide mb-2">
                      SWEAT
                    </h4>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">
                      Hour-long HIIT classes with certified coaches. High
                      intensity, full body, every session programmed for results.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
