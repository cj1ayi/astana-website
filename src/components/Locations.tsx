import { MapPin } from "lucide-react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const locations = [
  {
    name: "Astana Cold Chain Inc.",
    badge: "Main Facility",
    badgeStyle: "bg-primary/10 text-primary",
    address: "Km. 23, West Service Road, Brgy. Cupang, Muntinlupa City",
    stats: [
      { label: "Pallet Positions", value: "6,189" },
      { label: "Cold Chambers", value: "12" },
      { label: "Min Temperature", value: "-22°C" },
    ],
    status: { label: "Operational", dot: "bg-green-500" },
    cardStyle: "border-primary/20",
    // TODO: Add link to /facilities or a map embed
  },
  {
    name: "Northern Coldfront Corp (NCC)",
    badge: "Branch",
    badgeStyle: "bg-ice-blue text-dark-navy",
    // TODO: Update address when confirmed
    address: "Location TBA",
    stats: null,
    // TODO: Update status when operational
    status: null,
    cardStyle: "border-ice-blue",
  },
  {
    name: "Francis Cold Chain (FCC)",
    badge: "Branch",
    badgeStyle: "bg-ice-blue text-dark-navy",
    // TODO: Update address when confirmed
    address: "Location TBA",
    stats: null,
    // TODO: Update status when operational
    status: null,
    cardStyle: "border-ice-blue",
  },
];

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
          {locations.map((loc, i) => (
            <FadeInOnScroll key={loc.name} delay={i * 100}>
              <div
                className={`bg-white rounded-3xl border p-8 hover:shadow-xl transition-all duration-300 flex flex-col gap-6 ${loc.cardStyle}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-black text-dark-navy leading-snug">
                    {loc.name}
                  </h3>
                  <span
                    className={`shrink-0 text-xs font-bold px-3 py-1 rounded-full ${loc.badgeStyle}`}
                  >
                    {loc.badge}
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 text-sm text-slate-gray">
                  <MapPin
                    className="w-4 h-4 text-primary shrink-0 mt-0.5"
                    strokeWidth={1.75}
                  />
                  <span
                    className={loc.address === "Location TBA" ? "italic" : ""}
                  >
                    {loc.address}
                  </span>
                </div>

                {/* Stats or placeholder */}
                {loc.stats ? (
                  <div className="grid grid-cols-3 gap-3">
                    {loc.stats.map((s) => (
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
                ) : (
                  <p className="text-sm text-slate-gray italic">
                    Details coming soon
                  </p>
                )}

                {/* Status */}
                {loc.status ? (
                  <div className="flex items-center gap-2 mt-auto">
                    <span
                      className={`w-2 h-2 rounded-full ${loc.status.dot}`}
                    />
                    <span className="text-xs font-bold text-slate-gray uppercase tracking-widest">
                      {loc.status.label}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                    {/* TODO: Update status label when confirmed */}
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
