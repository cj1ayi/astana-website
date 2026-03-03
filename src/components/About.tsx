import { Building2, Star, Wrench } from "lucide-react";

export default function About() {
  const highlights = [
    {
      Icon: Building2,
      title: "Founded 2018",
      desc: "Pioneering multi-temperature storage in Muntinlupa for over 7 years.",
    },
    {
      Icon: Star,
      title: "AAA Rated Facility",
      desc: "Highest NMIS classification ensuring top-tier hygiene and safety standards.",
    },
    {
      Icon: Wrench,
      title: "European Equipment",
      desc: "Ammonia refrigeration systems with European-supplied components after robust testing.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              The First of Its Kind{" "}
              <br />
              <span className="text-primary">in Muntinlupa</span>
            </h2>
            <p className="text-lg text-slate-gray mb-10 leading-relaxed">
              Astana Cold Chain Inc. is a property developer specializing in
              cold storage facilities. We built the first multi-temperature cold
              storage and blast freezing facility in Muntinlupa City in 2018.
              Astana has deployed advanced cold storage &ldquo;design and
              build&rdquo; technology whilst ensuring compliance with all
              safety, health, and environmental practices required by our
              clients and by law.
            </p>

            <div className="grid gap-5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 p-5 rounded-2xl bg-frost-blue border border-ice-blue"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-gray text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-3xl overflow-hidden">
                <img
                  src="/images/facility/facility1.jpg"
                  alt="Facility interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 rounded-3xl overflow-hidden">
                <img
                  src="/images/facility/loading.jpg"
                  alt="Loading docks"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="h-48 rounded-3xl overflow-hidden">
                <img
                  src="/images/facility/aerial2.jpg"
                  alt="Aerial view"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-3xl overflow-hidden">
                <img
                  src="/images/facility/astana-aerial.png"
                  alt="Facility aerial view"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
