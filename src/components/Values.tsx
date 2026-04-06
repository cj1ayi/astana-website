import {
  ShieldCheck,
  Scale,
  Target,
  Heart,
  Leaf,
  Users,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

type Value = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const values: Value[] = [
  {
    Icon: ShieldCheck,
    title: "Safety First",
    desc: "Protecting employees, products, and customers by maintaining strict safety standards in cold environments.",
  },
  {
    Icon: Scale,
    title: "Integrity in Operations",
    desc: "Upholding honesty and transparency in inventory management, customer commitments, and regulatory compliance.",
  },
  {
    Icon: Target,
    title: "Efficiency & Accuracy",
    desc: "Streamlining processes to ensure precise handling of temperature-sensitive goods.",
  },
  {
    Icon: Heart,
    title: "Customer Commitment",
    desc: "Prioritizing client needs by safeguarding product quality and ensuring reliable service.",
  },
  {
    Icon: Leaf,
    title: "Sustainability & Responsibility",
    desc: "Reducing energy consumption, minimizing waste, and adopting eco-friendly practices in refrigeration and warehousing.",
  },
  {
    Icon: Users,
    title: "Teamwork & Respect",
    desc: "Building a supportive workplace where collaboration and mutual respect drive success.",
  },
  {
    Icon: TrendingUp,
    title: "Continuous Improvement",
    desc: "Embracing innovation and training to enhance warehouse operations and adapt to evolving industry demands.",
  },
];

export default function Values() {
  return (
    <section id="values" className="py-24 bg-ice-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
            What We Stand For
          </p>
          <h2 className="text-4xl font-black mb-6">Our Corporate Values</h2>
          <p className="text-slate-gray">
            The principles that guide every aspect of our cold chain operations
            and define who we are as a company.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <FadeInOnScroll key={value.title} delay={i * 50}>
              <div className="group bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.Icon
                    className="w-6 h-6 text-primary"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-gray leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
