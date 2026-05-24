import Image from "next/image";

const images = [
  { src: "/images/facility-1.jpg", alt: "IKON gym facility" },
  { src: "/images/facility-2.jpg", alt: "IKON training area" },
  { src: "/images/coach-1.png", alt: "IKON coach" },
  { src: "/images/event-1.jpg", alt: "IKON competition event" },
  { src: "/images/facility-3.jpg", alt: "IKON equipment" },
  { src: "/images/coach-2.png", alt: "IKON coach" },
  { src: "/images/event-2.jpg", alt: "IKON event" },
  { src: "/images/coach-3.png", alt: "IKON coach" },
  { src: "/images/lifter.png", alt: "Athlete lifting at IKON" },
  { src: "/images/coach-4.png", alt: "IKON coach" },
];

export default function Gallery() {
  return (
    <section className="py-16 bg-[#0a0a0a] overflow-hidden">
      <div className="px-6 mb-8">
        <p className="text-blue-500 font-semibold text-sm tracking-[0.2em] uppercase text-center">
          Inside the Gym
        </p>
      </div>

      <div className="group relative">
        <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="relative h-[300px] min-w-[400px] flex-shrink-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-2xl"
                sizes="400px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
