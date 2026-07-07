"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

type ParallaxLayerProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export default function ParallaxLayer({ children, speed = 0.2, className = "" }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();
      gsap.to(ref.current, {
        yPercent: reduced ? speed * 30 : speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
