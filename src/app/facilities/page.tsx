import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Snowflake,
  Thermometer,
  Zap,
  Package,
  Truck,
  Shield,
  Check,
  Ruler,
  Building,
  LayoutGrid,
  Sun,
  Wind,
  BatteryFull,
  BatteryCharging,
  AlertTriangle,
  Wrench,
  Camera,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Explore Astana Cold Chain's world-class cold storage facility in Muntinlupa City — 12 cold chambers, 6,809 pallet positions, 0 to -22°C capability, European-grade ammonia refrigeration, and 2× 500KVA backup power.",
  openGraph: {
    title: "Our Facilities — Astana Cold Chain Inc.",
    description:
      "6,809+ pallet positions, 12 cold chambers, -22°C capability, European ammonia refrigeration, and 2x 500KVA backup power in Muntinlupa City.",
    images: [{ url: "/images/astana-aerial.jpg", width: 1200, height: 630, alt: "Astana Cold Chain facility aerial view" }],
  },
};

// ── Quick-spec overview ───────────────────────────────────────────────────
type Spec = { Icon: LucideIcon; label: string; value: string };
const fullSpecs: Spec[] = [
  { Icon: Ruler, label: "Lot Area", value: "5,443 sqm" },
  { Icon: Building, label: "Floor Area", value: "4,500 sqm" },
  { Icon: Snowflake, label: "Temperature Range", value: "0°C to -22°C" },
  { Icon: Thermometer, label: "Chiller Temp", value: "0°C to +5°C" },
  { Icon: Package, label: "Pallet Positions", value: "6,809+" },
  { Icon: LayoutGrid, label: "Racking System", value: "Double Deep, 7 High" },
  { Icon: Truck, label: "Loading Docks", value: "12 Covered Docks" },
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

// ── Cold chamber type overviews ───────────────────────────────────────────
const chambers = [
  {
    Icon: Snowflake,
    title: "Freezer Rooms",
    count: "12 Rooms",
    temp: "0°C to -22°C",
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

// ── Room-by-room table data ───────────────────────────────────────────────
const rooms = [
  { room: 1, type: "Freezer" as const, pp: 416 },
  { room: 2, type: "Freezer" as const, pp: 416 },
  { room: 3, type: "Freezer" as const, pp: 416 },
  { room: 4, type: "Freezer" as const, pp: 416 },
  { room: 5, type: "Freezer" as const, pp: 416 },
  { room: 6, type: "Freezer" as const, pp: 409 },
  { room: 7, type: "Freezer" as const, pp: 956 },
  { room: 8, type: "Freezer" as const, pp: 596 },
  { room: 9, type: "Freezer" as const, pp: 626 },
  { room: 10, type: "Freezer" as const, pp: 656 },
  { room: 11, type: "Freezer" as const, pp: 656 },
  { room: 12, type: "Freezer" as const, pp: 656 },
  { room: 13, type: "Dry" as const, pp: 174 },
];

const roomStyle = {
  Freezer: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    Icon: Snowflake,
    label: "Freezer",
    temp: "0°C to -22°C",
  },
  Chiller: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Icon: Thermometer,
    label: "Chiller",
    temp: "0°C to +5°C",
  },
  BlastFreezer: {
    badge: "bg-orange-50 text-primary border-orange-200",
    Icon: Zap,
    label: "Blast Freezer",
    temp: "Rapid pull-down",
  },
  Dry: {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    Icon: Package,
    label: "Dry",
    temp: "Ambient",
  },
};

// ── Refrigeration & Power cards ───────────────────────────────────────────
type PowerCard = { Icon: LucideIcon; title: string; items: string[] };
const powerCards: PowerCard[] = [
  {
    Icon: Wrench,
    title: "Machine Room",
    items: [
      "Industrial-grade ammonia refrigeration",
      "European-sourced compressors & components",
      "Inverter-driven compressors for energy efficiency",
      "Redundant cooling circuits per chamber",
      "Centralized temperature monitoring & logging",
    ],
  },
  {
    Icon: BatteryFull,
    title: "Generator Set",
    items: [
      "2× 500KVA diesel generator backup",
      "Automatic transfer switch (ATS)",
      "Solar panel infrastructure ready",
      "Uninterruptible power supply for critical systems",
      "Real-time power consumption monitoring",
    ],
  },
  {
    Icon: AlertTriangle,
    title: "Ammonia Leak Detection & Temp Monitoring",
    items: [
      "Automatic ammonia leak detection system",
      "Centralized temperature logging",
      "Alarm system for temperature deviations",
      "Remote monitoring capability",
    ],
  },
  {
    Icon: BatteryCharging,
    title: "Battery Charging / MHE Equipment",
    items: [
      "Dedicated battery charging area",
      "Reach truck and forklift support",
      "Solar panel infrastructure provision",
      "Powered by MERALCO grid connection",
    ],
  },
];

// ── Office areas ──────────────────────────────────────────────────────────
const officeAreas = [
  {
    floor: "Ground Floor",
    area: "108 sqm",
    rooms: ["Waiting Lounge", "Security Office", "Pantry"],
  },
  {
    floor: "2nd Floor Mezzanine",
    area: "234 sqm",
    rooms: [
      "Conference Room",
      "Convertible for pharmaceutical storage",
      "Value-added services: kitting & bundling",
    ],
  },
  {
    floor: "3rd Floor",
    area: "234 sqm",
    rooms: [
      "Conference Room",
      "Convertible for pharmaceutical storage",
      "Value-added services: kitting & bundling",
    ],
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero (aerial background) ──────────────────────────────── */}
        <section className="relative min-h-[55vh] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/facility/astana-aerial.png')",
            }}
          />
          <div className="absolute inset-0 bg-dark-navy/65" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-center gap-2 text-white/50 text-xs font-semibold uppercase tracking-widest mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">Facilities</span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Our Facilities
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Built for Precision.
              <br />
              <span className="text-primary">Designed for Scale.</span>
            </h1>

            <div className="flex flex-wrap gap-3">
              {[
                "6,809+ Pallet Positions",
                "12 Cold Chambers",
                "0 to -22°C Range",
                "12 Loading Docks",
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

        {/* ── Facility Specifications (quick overview grid) ─────────── */}
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

        {/* ── Cold Storage Chambers ─────────────────────────────────── */}
        <section className="py-24 bg-ice-blue">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Storage Environments
              </p>
              <h2 className="text-4xl font-black">Cold Storage Chambers</h2>
              <p className="text-slate-gray mt-4 max-w-xl mx-auto">
                12 total chambers across three temperature zones, each
                engineered for specific product categories and compliance
                requirements.
              </p>
            </div>

            {/* Type overview cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
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

            {/* Room-by-room breakdown */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-black text-dark-navy mb-6">
                  Cold Chamber Configuration
                </h3>
                <p className="text-slate-gray mb-6">
                  12 rooms totalling 6,809 pallet positions — double deep
                  racking, 7 pallets high.
                </p>
                <div className="overflow-hidden rounded-3xl border border-white">
                  <table className="w-full text-sm bg-white">
                    <thead>
                      <tr className="bg-ice-blue">
                        <th className="text-left px-5 py-3 font-bold text-dark-navy text-xs uppercase tracking-widest">
                          Room
                        </th>
                        <th className="text-left px-5 py-3 font-bold text-dark-navy text-xs uppercase tracking-widest">
                          Type
                        </th>
                        <th className="text-left px-5 py-3 font-bold text-dark-navy text-xs uppercase tracking-widest hidden sm:table-cell">
                          Temperature
                        </th>
                        <th className="text-right px-5 py-3 font-bold text-dark-navy text-xs uppercase tracking-widest">
                          Pallet Pos.
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ice-blue">
                      {rooms.map((r) => {
                        const s = roomStyle[r.type];
                        return (
                          <tr
                            key={r.room}
                            className="hover:bg-frost-blue transition-colors"
                          >
                            <td className="px-5 py-3 font-bold text-dark-navy">
                              Room {r.room}
                            </td>
                            <td className="px-5 py-3">
                              <span
                                className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border ${s.badge}`}
                              >
                                <s.Icon className="w-3 h-3" strokeWidth={2} />
                                {s.label}
                              </span>
                            </td>
                            <td className="px-5 py-3 text-slate-gray hidden sm:table-cell">
                              {s.temp}
                            </td>
                            <td className="px-5 py-3 text-right font-black text-dark-navy">
                              {r.pp.toLocaleString()}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr className="bg-dark-navy">
                        <td
                          colSpan={3}
                          className="px-5 py-3 font-black text-white text-sm hidden sm:table-cell"
                        >
                          Total — 12 rooms
                        </td>
                        <td
                          colSpan={3}
                          className="px-5 py-3 font-black text-white text-sm sm:hidden"
                        >
                          Total (12 rooms)
                        </td>
                        <td className="px-5 py-3 text-right font-black text-primary hidden sm:table-cell">
                          6,809
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Additional area specs + floor plan placeholder */}
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-dark-navy">
                  Loading &amp; Support Areas
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Anteroom", value: "0°C to +5°C" },
                    { label: "Loading Bay", value: "335 sqm" },
                    { label: "Covered Docks", value: "12" },
                    { label: "Parking Area", value: "830 sqm" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="p-5 rounded-2xl bg-white border border-white/80"
                    >
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-gray mb-1">
                        {label}
                      </p>
                      <p className="text-base font-black text-dark-navy">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden border border-white/80">
                  <img
                    src="/images/facility/rackingconfiguration.png"
                    alt="Facility Floor Plan - Racking Configuration"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Refrigeration & Power ─────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Infrastructure
              </p>
              <h2 className="text-4xl font-black">Refrigeration &amp; Power</h2>
              <p className="text-slate-gray mt-4 max-w-xl mx-auto">
                Powered by MERALCO with ammonia refrigeration and full backup
                generation — designed for 24/7 uninterrupted cold chain
                operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {powerCards.map((card) => (
                <div
                  key={card.title}
                  className="p-7 rounded-3xl bg-frost-blue border border-ice-blue hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all"
                >
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <card.Icon
                      className="w-5 h-5 text-primary"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-base font-black text-dark-navy mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-slate-gray"
                      >
                        <Check
                          className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  src: "/images/facility/machineroom.jpg",
                  alt: "Machine Room",
                },
                {
                  src: "/images/facility/generatorset500kva.jpg",
                  alt: "Generator Set",
                },
                {
                  src: "/images/facility/ammonialeakdetection.jpg",
                  alt: "Ammonia Detection System",
                },
                {
                  src: "/images/facility/batterycharging.jpg",
                  alt: "Battery Charging Area",
                },
              ].map((img) => (
                <div
                  key={img.src}
                  className="aspect-video rounded-2xl overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Office & Support Facilities ───────────────────────────── */}
        <section className="py-24 bg-ice-blue">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Support Spaces
              </p>
              <h2 className="text-4xl font-black">
                Office &amp; Support Facilities
              </h2>
              <p className="text-slate-gray mt-4 max-w-xl mx-auto">
                5,443 sqm lot area, 4,500 sqm floor area — including
                purpose-built offices and convertible pharmaceutical/VAS spaces.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-5">
                {officeAreas.map((area) => (
                  <div
                    key={area.floor}
                    className="p-7 rounded-3xl bg-white/80 border border-white"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Building
                            className="w-4 h-4 text-primary"
                            strokeWidth={1.75}
                          />
                        </div>
                        <h3 className="font-black text-dark-navy">
                          {area.floor}
                        </h3>
                      </div>
                      <span className="text-xs font-bold text-slate-gray bg-ice-blue px-3 py-1 rounded-full border border-ice-blue">
                        {area.area}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {area.rooms.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-sm text-slate-gray"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-dark-navy text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">
                      Lot Area
                    </p>
                    <p className="text-xl font-black">5,443 sqm</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-primary text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                      Floor Area
                    </p>
                    <p className="text-xl font-black">4,500 sqm</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/images/facility/waitinglounge.png"
                    alt="Office Interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="/images/facility/secondfloorbare.png"
                      alt="Conference Room"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="/images/facility/aerial2.jpg"
                      alt="Facility Exterior"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Security & Monitoring ─────────────────────────────────── */}
        <section className="py-24 bg-deep-navy">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Protection
              </p>
              <h2 className="text-4xl font-black text-white">
                Security &amp; Monitoring
              </h2>
              <p className="text-white/60 mt-4 max-w-xl mx-auto">
                24/7 on-site security and CCTV coverage with six-month file
                retention ensures your inventory is always protected.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Camera
                      className="w-6 h-6 text-primary"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-xl font-black text-white">
                    CCTV &amp; WMS
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Full-coverage CCTV across all zones",
                    "6-month video file retention",
                    "Remote access monitoring",
                    "Controlled entry per cold room",
                    "3MWorks WMS — RF picking & barcode scanning",
                    "FIFO/FEFO inventory management",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <Check
                        className="w-4 h-4 text-primary shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Shield
                      className="w-6 h-6 text-primary"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-xl font-black text-white">
                    On-Site Security
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "24/7 security personnel on duty",
                    "Secure perimeter and access controls",
                    "Incident response protocols",
                    "Visitor and contractor log management",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <Check
                        className="w-4 h-4 text-primary shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  src: "/images/facility/machineroom2.jpg",
                  alt: "Monitoring Station",
                },
                {
                  src: "/images/facility/cctv2.png",
                  alt: "CCTV Coverage",
                },
                {
                  src: "/images/facility/groundsecurityoffice.png",
                  alt: "Security Office",
                },
                {
                  src: "/images/facility/cctv1.png",
                  alt: "Gate & Perimeter",
                },
              ].map((img) => (
                <div
                  key={img.src}
                  className="aspect-video rounded-2xl overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Photo Gallery ─────────────────────────────────────────── */}
        <section className="py-24 bg-frost-blue">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Gallery
              </p>
              <h2 className="text-4xl font-black">Inside Our Facility</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  src: "/images/facility/facility1.jpg",
                  alt: "Cold Storage Interior",
                },
                { src: "/images/facility/loading.jpg", alt: "Loading Docks" },
                { src: "/images/facility/aerial2.jpg", alt: "Aerial View" },
                {
                  src: "/images/facility/astana-aerial.png",
                  alt: "Facility Complex",
                },
                {
                  src: "/images/facility/waitinglounge.png",
                  alt: "Waiting Lounge",
                },
                {
                  src: "/images/facility/waitinglounge2.png",
                  alt: "Waiting Area",
                },
                {
                  src: "/images/facility/secondfloorbare.png",
                  alt: "Second Floor Mezzanine",
                },
                {
                  src: "/images/facility/groundsecurityoffice.png",
                  alt: "Security Office",
                },
                {
                  src: "/images/facility/machineroom.jpg",
                  alt: "Machine Room",
                },
                {
                  src: "/images/facility/machineroom2.jpg",
                  alt: "Refrigeration Equipment",
                },
                {
                  src: "/images/facility/machineroom3.jpg",
                  alt: "Ammonia System",
                },
                {
                  src: "/images/facility/ammonialeakdetection.jpg",
                  alt: "Leak Detection System",
                },
                {
                  src: "/images/facility/ammonialeakdetection2.jpg",
                  alt: "Temperature Monitoring",
                },
                {
                  src: "/images/facility/batterycharging.jpg",
                  alt: "Battery Charging Area",
                },
                {
                  src: "/images/facility/batterycharging2.jpg",
                  alt: "MHE Equipment Station",
                },
                {
                  src: "/images/facility/generatorset500kva.jpg",
                  alt: "500KVA Generator Set",
                },
                {
                  src: "/images/facility/generatorset2500kva.jpg",
                  alt: "Backup Power System",
                },
                {
                  src: "/images/facility/rackingconfiguration.png",
                  alt: "Floor Plan Configuration",
                },
                {
                  src: "/images/facility/cctv1.png",
                  alt: "CCTV1",
                },
                {
                  src: "/images/facility/cctv2.png",
                  alt: "CCTV2",
                },
              ].map((img) => (
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
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
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
