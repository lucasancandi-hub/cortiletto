"use client";

import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsap";

type LenisRef = { current: Lenis | null };

const LenisContext = createContext<LenisRef>({ current: null });

export function useLenis() {
  return useContext(LenisContext);
}

const NAVBAR_OFFSET = -88;

export default function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduced = prefersReducedMotion();

    const instance = new Lenis({
      anchors: { offset: NAVBAR_OFFSET },
      wheelMultiplier: 1,
      lerp: reduced ? 1 : 0.1,
      duration: reduced ? 0 : undefined,
    });

    lenisRef.current = instance;
    instance.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      instance.raf(time * 1000);
    }

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
}
