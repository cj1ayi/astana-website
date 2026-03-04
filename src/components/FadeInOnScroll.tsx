"use client";

import { useRef, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeInOnScroll({
  children,
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        done
          ? { opacity: 1 } // no transform = no stacking context
          : {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: visible
                ? `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`
                : "none",
            }
      }
      onTransitionEnd={() => setDone(true)}
    >
      {children}
    </div>
  );
}
