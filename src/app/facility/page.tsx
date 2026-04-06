import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Thermometer,
  BatteryFull,
  Wind,
  Sun,
  Wrench,
  LayoutGrid,
  Ruler,
  Building,
  Truck,
  Shield,
  Package,
  Zap,
  Snowflake,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Facility | Astana Cold Chain Inc.",
  description:
    "Explore Astana Cold Chain's world-class cold storage facility in Muntinlupa City. 6,809+ pallet positions, 13 cold chambers, -22°C capability, European-grade ammonia refrigeration system.",
};

const fullSpecs = [
  { Icon: Ruler, label: "Lot Area", value: "5,443 sqm" },
  { Icon: Building, label: "Floor Area", value: "4,500 sqm" },
  { Icon: Snowflake, label: "Min Temperature", value: "-22°C" },
  { Icon: Thermometer, label: "Chiller Temp", value: "0°C to +5°C" },
  { Icon: Package, label: "Pallet Positions", value: "6,809+" },
  { Icon: LayoutGrid, label: "Racking System", value: "Double Deep, 7 High" },
  { Icon: Truck, label: "Loading Docks", value: "11 Covered Docks" },
  { Icon: Building, label: "Loading Bay", value: "335 sqm" },
  { Icon: Wrench, label: "Refrigeration", value: "Ammonia System" },
  { Icon: Wrench, label: "Equipment Origin", value: "European-Supplied" },
  { Icon: BatteryFull, label: "Backup Power", value: "2× 500KVA Generators" },
  { Icon: Wind, label: "Cooling", value: "Inverter System" },
  { Icon: Sun, label: "Energy", value: "Solar Panel Ready" },
  { Icon: Shield, label: "CCTV Retention", value: "6-Month Storage" },
  { Icon: Package, label: "WMS", value: "3MWorks System" },
  { Icon: Building, label: "Parking Area", value: "830 sqm" },
];

const chambers = [
  {
    Icon: Snowflake,
    title: "Freezer Rooms",
    count: "12 Rooms",
    temp: "-18°C to -22°C",
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-500 bg-blue-100",
    features: [
      "Double-deep racking, 7 high",
      "Optimized airflow for uniform freezing",
      "Suitable for meat, seafood, dairy, and frozen goods",
      "Ammonia-based refrigeration system",
    ],
  },
  {
    Icon: Thermometer,
    title: "Chiller Room",
    count: "1 Anteroom",
    temp: "0°C to +5°C",
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-600 bg-green-100",
    features: [
      "Controlled anteroom environment",
      "Ideal for fresh produce, dairy, and pharma",
      "Prevents temperature shock during transfer",
      "Precision inverter-controlled cooling",
    ],
  },
  {
    Icon: Zap,
    title: "Blast Freezer",
    count: "1 Room",
    temp: "Rapid Pull-Down",
    color: "bg-orange-50 border-orange-100",
    iconColor: "text-primary bg-primary/10",
    features: [
      "2–3 ton capacity per cycle",
      "High-velocity airflow system",
      "Rapid core-temperature reduction",
      "HACCP-compliant food safety process",
    ],
  },
];

const techSections = [
  {
    title: "Refrigeration System",
    Icon: Snowflake,
    items: [
      "Industrial-grade ammonia refrigeration",
      "European-sourced components",
      "Inverter-driven compressors for energy efficiency",
      "Redundant cooling circuits per chamber",
      "Centralized temperature monitoring & logging",
    ],
  },
  {
    title: "Power & Energy",
    Icon: BatteryFull,
    items: [
      "2× 500KVA diesel generator backup",
      "Automatic transfer switch (ATS)",
      "Solar panel infrastructure ready",
      "Uninterruptible power supply for critical systems",
      "Real-time power consumption monitoring",
    ],
  },
  {
    title: "Security & Monitoring",
    Icon: Shield,
    items: [
      "24/7 on-site security personnel",
      "CCTV with 6-month video retention",
      "Controlled access per cold room",
      "3MWorks WMS — RF picking & barcode scanning",
      "FIFO/FEFO inventory management",
    ],
  },
];

const galleryImages = [
  { src: "/images/facility/facility1.jpg", alt: "Facility interior" },
  { src: "/images/facility/loading.jpg", alt: "Loading docks" },
  { src: "/images/facility/aerial2.jpg", alt: "Aerial view" },
  { src: "/images/facility/astana-aerial.png", alt: "Facility exterior" },
];

// Placeholder slots for future photos
const placeholderSlots = 4;

export default function FacilityPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[55vh] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/facility/astana-aerial.png')",
            }}
          />
          <div className="absolute inset-0 bg-dark-navy/65" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/50 text-xs font-semibold uppercase tracking-widest mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">Facility</span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Our Facility
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Built for Precision.
              <br />
              <span className="text-primary">Designed for Scale.</span>
            </h1>

            {/* Quick stat pills */}
            <div className="flex flex-wrap gap-3">
              {[
                "6,809+ Pallet Positions",
                "13 Cold Chambers",
                "-22°C Capability",
                "11 Loading Docks",
              ].map((stat) => (
                <span
                  key={stat}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* ── Full Specifications ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Technical Details
              </p>
              <h2 className="text-4xl font-black">Facility Specifications</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fullSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="p-6 rounded-2xl bg-frost-blue border border-ice-blue hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <spec.Icon
                    className="w-5 h-5 text-primary mb-3"
                    strokeWidth={1.75}
                  />
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-gray mb-1">
                    {spec.label}
                  </p>
                  <p className="text-lg font-black text-dark-navy">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cold Chambers ── */}
        <section className="py-24 bg-ice-blue">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Storage Environments
              </p>
              <h2 className="text-4xl font-black">Cold Storage Chambers</h2>
              <p className="text-slate-gray mt-4 max-w-xl mx-auto">
                13 total chambers across three temperature zones, each
                engineered for specific product categories and compliance
                requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {chambers.map((chamber) => (
                <div
                  key={chamber.title}
                  className={`rounded-3xl border p-8 ${chamber.color}`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${chamber.iconColor}`}
                  >
                    <chamber.Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-black text-dark-navy">
                      {chamber.title}
                    </h3>
                    <span className="text-xs font-bold bg-white/70 px-3 py-1 rounded-full text-slate-gray">
                      {chamber.count}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-primary mb-6">
                    {chamber.temp}
                  </p>
                  <ul className="space-y-2.5">
                    {chamber.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-slate-gray"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technology & Infrastructure ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Infrastructure
              </p>
              <h2 className="text-4xl font-black">
                Technology &amp; Equipment
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {techSections.map((section) => (
                <div
                  key={section.title}
                  className="p-8 rounded-3xl bg-frost-blue border border-ice-blue"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <section.Icon
                      className="w-6 h-6 text-primary"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-xl font-black text-dark-navy mb-5">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-slate-gray"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Photo Gallery ── */}
        <section className="py-24 bg-frost-blue">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Gallery
              </p>
              <h2 className="text-4xl font-black">Inside Our Facility</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img) => (
                <div
                  key={img.src}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}

              {/* Placeholder slots for future photos */}
              {Array.from({ length: placeholderSlots }).map((_, i) => (
                <div
                  key={`placeholder-${i}`}
                  className="aspect-square rounded-2xl bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center"
                >
                  <p className="text-xs text-slate-400 font-semibold text-center px-4">
                    Photo coming soon
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-deep-navy">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-10 leading-relaxed">
              Our team is ready to discuss your cold storage requirements and
              create a solution that works for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30"
              >
                Inquire Now
              </Link>
              <Link
                href="/#services"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
