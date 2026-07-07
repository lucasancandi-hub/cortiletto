"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

type MaskRevealProps = {
  children: ReactNode;
  className?: string;
  axis?: "x" | "y";
  origin?: string;
  panelClassName?: string;
  delay?: number;
};

export default function MaskReveal({
  children,
  className = "",
  axis = "x",
  origin = "right center",
  panelClassName = "bg-ink",
  delay = 0,
}: MaskRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scaleProp = axis === "x" ? "scaleX" : "scaleY";

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set(panelRef.current, { [scaleProp]: 0 });
        gsap.set(contentRef.current, { scale: 1 });
        return;
      }

      gsap.set(panelRef.current, { [scaleProp]: 1, transformOrigin: origin });
      gsap.set(contentRef.current, { scale: 1.15 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: rootRef.current, start: "top 82%" },
        delay,
      });

      tl.to(panelRef.current, { [scaleProp]: 0, duration: 1.1, ease: "power4.inOut" }).to(
        contentRef.current,
        { scale: 1, duration: 1.5, ease: "power3.out" },
        "-=1"
      );
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className={`relative overflow-hidden ${className}`}>
      <div ref={contentRef} className="h-full w-full">
        {children}
      </div>
      <div ref={panelRef} className={`absolute inset-0 ${panelClassName}`} />
    </div>
  );
}
