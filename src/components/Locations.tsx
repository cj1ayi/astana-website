import Image from "next/image";
import { MapPin } from "lucide-react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function Locations() {
  return (
    <section className="py-24 bg-frost-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            Where We Are
          </p>
          <h2 className="text-4xl font-black mb-4">Our Locations</h2>
          <p className="text-slate-gray">
            Strategically located across the Philippines to serve your cold
            chain needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* ── Main Facility ── */}
          <FadeInOnScroll delay={0}>
            <div className="bg-white rounded-3xl border border-primary/20 p-8 hover:shadow-xl transition-all duration-300 flex flex-col gap-6 h-full">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-black text-dark-navy leading-snug">
                  Astana Cold Chain Inc.
                </h3>
                <span className="shrink-0 text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Main Facility
                </span>
              </div>

              <div className="flex items-start gap-2 text-sm text-slate-gray">
                <MapPin
                  className="w-4 h-4 text-primary shrink-0 mt-0.5"
                  strokeWidth={1.75}
                />
                <span>
                  Km. 23, West Service Road, Brgy. Cupang, Muntinlupa City
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Pallet Positions", value: "6,809" },
                  { label: "Cold Chambers", value: "12" },
                  { label: "Min Temperature", value: "-22°C" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-frost-blue rounded-2xl p-3 text-center"
                  >
                    <p className="text-base font-black text-dark-navy">
                      {s.value}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-gray leading-tight mt-0.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-auto">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-bold text-slate-gray uppercase tracking-widest">
                  Operational
                </span>
              </div>
            </div>
          </FadeInOnScroll>

          {/* ── Affiliate — Valenzuela ── */}
          <FadeInOnScroll delay={100}>
            <div className="bg-white rounded-3xl border border-ice-blue p-8 hover:shadow-xl transition-all duration-300 flex flex-col gap-6 h-full">
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Affiliate cold storage facility"
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="shrink-0 text-xs font-bold px-3 py-1 rounded-full bg-ice-blue text-dark-navy">
                  Affiliate
                </span>
              </div>

              <div className="flex items-start gap-2 text-sm text-slate-gray">
                <MapPin
                  className="w-4 h-4 text-primary shrink-0 mt-0.5"
                  strokeWidth={1.75}
                />
                <span>Valenzuela City, Metro Manila</span>
              </div>

              <p className="text-sm text-slate-gray">
                For further details, send us an email and we&apos;ll be glad to
                assist you.
              </p>

              <a
                href="mailto:raqueltan@astanacoldchain.com"
                className="mt-auto text-xs font-bold text-primary uppercase tracking-widest hover:underline"
              >
                phoebevitales@astastanacoldchain.com
              </a>
            </div>
          </FadeInOnScroll>

          {/* ── Affiliate — Pandacan ── */}
          <FadeInOnScroll delay={200}>
            <div className="bg-white rounded-3xl border border-ice-blue p-8 hover:shadow-xl transition-all duration-300 flex flex-col gap-6 h-full">
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Affiliate cold storage facility"
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="shrink-0 text-xs font-bold px-3 py-1 rounded-full bg-ice-blue text-dark-navy">
                  Affiliate
                </span>
              </div>

              <div className="flex items-start gap-2 text-sm text-slate-gray">
                <MapPin
                  className="w-4 h-4 text-primary shrink-0 mt-0.5"
                  strokeWidth={1.75}
                />
                <span>Pandacan, Manila</span>
              </div>

              <p className="text-sm text-slate-gray">
                For further details, send us an email and we&apos;ll be glad to
                assist you.
              </p>

              <a
                href="mailto:raqueltan@astanacoldchain.com"
                className="mt-auto text-xs font-bold text-primary uppercase tracking-widest hover:underline"
              >
                phoebevitales@astastanacoldchain.com
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
