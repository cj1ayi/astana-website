import FadeInOnScroll from "@/components/FadeInOnScroll";
import {
  Snowflake,
  Thermometer,
  Zap,
  Package,
  Truck,
  Shield,
  Check,
  ShelvingUnit,
  type LucideIcon,
} from "lucide-react";

type Service = {
  Icon?: LucideIcon;
  emoji?: string;
  title: string;
  desc: string;
  features: string[];
};

const services: Service[] = [
  {
    Icon: Snowflake,
    title: "Cold Storage",
    desc: "Optimized frozen storage environments maintained at consistent sub-zero temperatures for maximum product integrity.",
    features: [
      "Temp range: -18°C to -22°C",
      "12 freezer rooms, double deep racking",
    ],
  },
  {
    Icon: Thermometer,
    title: "Chiller Storage",
    desc: "Precision temperature control for dairy, produce, and pharmaceutical-grade requirements.",
    features: [
      "Temp range: 0°C to +5°C",
      "Anteroom maintained at controlled temps",
    ],
  },
  {
    Icon: Zap,
    title: "Blast Freezing",
    desc: "Rapid core-temperature reduction to lock in freshness and ensure food safety compliance.",
    features: ["2-3 ton capacity", "High-velocity airflow system"],
  },
  {
    Icon: Package,
    title: "WMS Tracking",
    desc: "Real-time inventory management with cloud-based reporting and full batch traceability.",
    features: ["FIFO/FEFO management", "RF picking & barcode scanning"],
  },
  {
    Icon: Truck,
    title: "Loading & Logistics",
    desc: "12 covered loading docks with plug-ins to prevent temperature loss during inbound and outbound operations.",
    features: ["335 sqm loading bay", "830 sqm parking area"],
  },
  {
    Icon: Shield,
    title: "24/7 Security & Monitoring",
    desc: "Full redundancy systems with round-the-clock security, CCTV, and centralized temperature logging.",
    features: ["CCTV with 6-month retention", "2× 500KVA generator backup"],
  },
  {
    Icon: ShelvingUnit,
    title: "Dry Storage",
    desc: "Ambient temperature warehousing for non-perishable goods, packaging materials, and dry ingredients with full inventory management.",
    features: [
      "Ambient temperature controlled",
      "Integrated with WMS tracking",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-ice-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl font-black mb-6">
            Comprehensive Cold & Dry Storage Solutions
          </h2>
          <p className="text-slate-gray">
            Tailored solutions for food manufacturers, distributors, and
            retailers across Metro Manila and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const { Icon } = service;
            return (
              <FadeInOnScroll key={service.title} delay={i * 50}>
                <div className="group bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    {Icon ? (
                      <Icon
                        className="w-6 h-6 text-primary"
                        strokeWidth={1.75}
                      />
                    ) : (
                      <span className="text-2xl leading-none">
                        {service.emoji}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-gray leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm font-semibold text-dark-navy"
                      >
                        <Check
                          className="w-4 h-4 text-primary shrink-0"
                          strokeWidth={2.5}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
