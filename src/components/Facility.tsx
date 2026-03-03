import { Ruler, Building, FlaskConical, BatteryFull, Wind, Sun, Wrench, LayoutGrid } from "lucide-react";

const specs = [
  { Icon: Ruler, label: "Lot Area", value: "5,443 sqm" },
  { Icon: Building, label: "Floor Area", value: "4,500 sqm" },
  { Icon: FlaskConical, label: "Refrigeration", value: "Ammonia System" },
  { Icon: BatteryFull, label: "Backup Power", value: "2× 500KVA Generators" },
  { Icon: Wind, label: "Cooling", value: "Inverter System" },
  { Icon: Sun, label: "Energy", value: "Solar Panel Ready" },
  { Icon: Wrench, label: "Equipment", value: "European-Supplied" },
  { Icon: LayoutGrid, label: "Racking", value: "Double Deep, 7 High" },
];

export default function Facility() {
  return (
    <section id="facility" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-frost-blue rounded-[2rem] overflow-hidden shadow-xl border border-primary/5">
          <div className="flex flex-col lg:flex-row">
            {/* Photo */}
            <div className="lg:w-1/2 h-[350px] lg:h-auto overflow-hidden">
              <img
                src="/images/facility/astana-aerial.png"
                alt="Astana Cold Chain facility"
                className="w-full h-full object-cover min-h-[350px]"
              />
            </div>

            {/* Specs */}
            <div className="lg:w-1/2 p-10 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Our Facility
              </p>
              <h2 className="text-4xl font-black mb-10">
                Facility Specifications
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-1">
                    <spec.Icon className="w-5 h-5 text-primary mb-1" strokeWidth={1.75} />
                    <span className="font-bold text-slate-gray uppercase text-xs tracking-widest">
                      {spec.label}
                    </span>
                    <span className="text-lg font-bold text-dark-navy">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <p className="text-slate-gray text-sm leading-relaxed italic mb-6">
                  Strategically located along the West Service Road in
                  Muntinlupa, with direct access to SLEX, Skyway, and main
                  Metro Manila thoroughfares.
                </p>
                <a
                  href="/facility"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-colors text-sm"
                >
                  View Full Facility Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
