const certifications = [
  {
    code: "NMIS AAA",
    name: "National Meat Inspection Service",
    detail: "AAA Cold Storage Warehouse Rating",
  },
  {
    code: "HACCP",
    name: "Hazard Analysis & Critical Control Point",
    detail: "Certified for Food Safety Systems",
  },
  {
    code: "BPI",
    name: "Bureau of Plant Industry",
    detail: "Licensed for Fruits & Vegetables Storage",
  },
  {
    code: "BFAR",
    name: "Bureau of Fisheries & Aquatic Resources",
    detail: "Licensed for Fish & Aquatic Products",
  },
  {
    code: "SEC",
    name: "Securities & Exchange Commission",
    detail: "Registered Corporation",
  },
  {
    code: "RBI",
    name: "Restaurant Brands International",
    detail: "Accredited Facility",
  },
];

export default function Certifications() {
  return (
    <section className="py-16 bg-white border-y border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-gray mb-10">
          Certified &amp; Registered
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.code}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-frost-blue border border-ice-blue hover:bg-primary hover:border-primary transition-all duration-300 cursor-default"
            >
              <span className="text-xl font-black tracking-tight text-dark-navy group-hover:text-white transition-colors">
                {cert.code}
              </span>

              {/* Tooltip on hover */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20">
                <div className="bg-dark-navy text-white text-xs rounded-xl px-4 py-3 shadow-xl max-w-[220px] text-center">
                  <p className="font-bold">{cert.name}</p>
                  <p className="text-white/70 mt-1">{cert.detail}</p>
                </div>
                <div className="w-3 h-3 bg-dark-navy rotate-45 absolute -top-1.5 left-1/2 -translate-x-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}