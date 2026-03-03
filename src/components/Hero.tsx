export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/astana-aerial.jpg')",
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-dark-navy/60" />

      {/* Content — centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6">
            Climate Controlled.
            <br />
            <span className="text-primary">Quality Assured.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed mb-10">
             We handle the cold storage with reliability and excellence,
              so you can concentrate on expansion,
              profit, and long-term success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30"
            >
              Inquire Now
            </a>
            <a
              href="/facility"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/30 hover:bg-white/20 transition-colors"
            >
              View Our Facility
            </a>
          </div>

          {/* Quick stats inline */}
          <div className="flex flex-wrap gap-8 justify-center text-white">
            <div>
              <span className="text-3xl font-black">6,189+</span>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mt-1">
                Pallet Positions
              </p>
            </div>
            <div className="w-px bg-white/20 hidden sm:block" />
            <div>
              <span className="text-3xl font-black">-22°C</span>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mt-1">
                Min Temperature
              </p>
            </div>
            <div className="w-px bg-white/20 hidden sm:block" />
            <div>
              <span className="text-3xl font-black">24/7</span>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mt-1">
                Operations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
