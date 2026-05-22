export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="text-2xl font-black uppercase tracking-tight">
              IKON
            </p>
            <p className="text-sm text-[#a1a1aa] mt-1">
              Strength & Performance
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <p className="text-sm text-[#a1a1aa] uppercase tracking-wider mb-3">
              Contact
            </p>
            <p className="text-sm">901 Van Ness Ave, Torrance, CA 90501</p>
            <p className="text-sm">
              <a
                href="tel:+13108720056"
                className="hover:text-blue-500 transition-colors"
              >
                (310) 872-0056
              </a>
            </p>
            <p className="text-sm">
              <a
                href="mailto:james.song25@gmail.com"
                className="hover:text-blue-500 transition-colors"
              >
                james.song25@gmail.com
              </a>
            </p>
          </div>

          {/* Hours */}
          <div className="space-y-2">
            <p className="text-sm text-[#a1a1aa] uppercase tracking-wider mb-3">
              Hours
            </p>
            <p className="text-sm">Mon - Fri: 6:00 AM - 8:00 PM</p>
            <p className="text-sm">Sat: 8:00 AM - 12:00 PM</p>
            <p className="text-sm">Sun: Closed</p>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8">
          <p className="text-sm text-[#a1a1aa] text-center">
            &copy; 2026 IKON Strength & Performance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
