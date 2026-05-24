import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Shop() {
  return (
    <section className="py-28 md:py-36 px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="relative bg-[#111111] rounded-2xl border border-white/5 p-12 md:p-16 text-center overflow-hidden">
            {/* Background logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <Image
                src="/images/logo.png"
                alt=""
                width={500}
                height={500}
                className="object-contain"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10">
              <p className="text-blue-500 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                IKON Gear
              </p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-4">
                Rep the brand.
              </h2>
              <p className="text-[#a1a1aa] text-lg mb-10 max-w-md mx-auto">
                Shop our collection of IKON tees and apparel.
              </p>
              <a
                href="https://www.ikonstrength.com/products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                Shop Now
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
