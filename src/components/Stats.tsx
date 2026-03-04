"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref };
}

const stats = [
  { value: 6189, suffix: "+", label: "Pallet Positions" },
  { value: 12, suffix: "", label: "Cold Chambers" },
  { value: 22, suffix: "°C", label: "Capability", prefix: "-" },
  { value: 12, suffix: "", label: "Loading Docks" },
  { value: 24, suffix: "/7", label: "Operations" },
];

function StatItem({
  value,
  suffix,
  label,
  prefix,
}: {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col gap-1 text-center">
      <span className="text-4xl font-black text-white">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-xs font-bold uppercase tracking-wider text-white/70">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
