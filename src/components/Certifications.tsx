import FadeInOnScroll from "@/components/FadeInOnScroll";

const certifications = [
  {
    code: "NMIS AAA",
    img: "/images/certs/NMIS.webp",
    name: "National Meat Inspection Service",
    detail: "AAA Cold Storage Warehouse Rating",
  },
  {
    code: "HACCP",
    img: "/images/certs/HACCP.webp",
    name: "Hazard Analysis & Critical Control Point",
    detail: "Certified for Food Safety Systems",
  },
  {
    code: "BPI",
    img: "/images/certs/BPI.webp",
    name: "Bureau of Plant Industry",
    detail: "Licensed for Fruits & Vegetables Storage",
  },
  {
    code: "BFAR",
    img: "/images/certs/BFAR.webp",
    name: "Bureau of Fisheries & Aquatic Resources",
    detail: "Licensed for Fish & Aquatic Products",
  },
  {
    code: "SEC",
    img: "/images/certs/SEC.png",
    name: "Securities & Exchange Commission",
    detail: "Registered Corporation",
  },
  {
    code: "RBI",
    img: "/images/certs/RBI.png",
    name: "Restaurant Brands International",
    detail: "Accredited Facility",
  },
  {
    code: "GMP",
    img: "/images/certs/GMP.webp",
    name: "Good Manufacturing Practice",
    detail: "Certified for Quality Standards",
  },
  {
    code: "GOP",
    img: "/images/certs/GOP.webp",
    name: "Good Operating Practice",
    detail: "Certified for Operational Excellence",
  },
];

export default function Certifications() {
  return (
    <section className="py-16 bg-white border-y border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-base md:text-lg font-bold uppercase tracking-[0.3em] text-slate-gray mb-10">
          Certified &amp; Registered
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {certifications.map((cert, i) => (
            <FadeInOnScroll key={cert.code} delay={i * 50}>
              <div className="group relative flex items-center gap-3 p-4 rounded-2xl bg-frost-blue border border-ice-blue hover:bg-primary hover:border-primary transition-all duration-300 cursor-default">
                <img
                  src={cert.img}
                  alt={cert.code}
                  className="w-9 h-9 object-contain shrink-0"
                />
                <span className="text-sm font-black tracking-tight text-dark-navy group-hover:text-white transition-colors leading-tight">
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
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
