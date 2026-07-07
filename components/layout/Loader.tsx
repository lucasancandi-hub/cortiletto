"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion, SplitText, useGSAP } from "@/lib/gsap";
import { markAppReady } from "@/lib/app-ready";
import Logomark from "@/components/ui/Logomark";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, []);

  useGSAP(
    () => {
      let cancelled = false;
      let split: SplitText | null = null;
      let finished = false;

      // Fail-safe: whatever happens (a font that never loads, an animation
      // that throws on some mobile browser, GSAP not registering a plugin),
      // the loader MUST reveal the site. Without this it can stay stuck
      // forever, hiding the whole page behind the "Il Cortiletto" splash.
      const finish = () => {
        if (finished) return;
        finished = true;
        window.clearTimeout(safety);
        markAppReady();
        setVisible(false);
      };

      // Hard cap: if the intro animation hasn't finished in time, force it.
      const safety = window.setTimeout(finish, 5000);

      if (prefersReducedMotion()) {
        const tl = gsap.timeline({ onComplete: finish });
        tl.to(rootRef.current, { autoAlpha: 0, duration: 0.35, ease: "power1.out" });
        return () => {
          cancelled = true;
          window.clearTimeout(safety);
        };
      }

      gsap.set(titleRef.current, { autoAlpha: 0 });
      gsap.set(logoRef.current, { autoAlpha: 0, scale: 0.8 });

      const play = async () => {
        try {
          await document.fonts.ready;
          if (cancelled || !titleRef.current) return;

          split = new SplitText(titleRef.current, { type: "chars" });
          gsap.set(titleRef.current, { autoAlpha: 1 });
          gsap.set(split.chars, { yPercent: 110, opacity: 0 });
          gsap.set("[data-loader-line]", { scaleX: 0 });

          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: finish,
          });

          tl.to(logoRef.current, { autoAlpha: 1, scale: 1, duration: 0.6 })
            .to(split.chars, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.035 }, "-=0.3")
            .to("[data-loader-line]", { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, "-=0.3")
            .to("[data-loader-line]", { scaleX: 0, duration: 0.4, ease: "power2.in" }, "+=0.15")
            .to(
              rootRef.current,
              { yPercent: -100, duration: 0.8, ease: "power3.inOut" },
              "+=0.05"
            );
        } catch {
          // Any failure in the intro → skip straight to the site.
          finish();
        }
      };

      play();

      return () => {
        cancelled = true;
        window.clearTimeout(safety);
        split?.revert();
      };
    },
    { scope: rootRef }
  );

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-ink"
      aria-hidden="true"
    >
      <Logomark ref={logoRef} animate className="h-9 w-9 text-gold" />
      <span
        ref={titleRef}
        className="overflow-hidden font-display text-2xl uppercase tracking-[0.35em] text-cream sm:text-3xl"
      >
        Il Cortiletto
      </span>
      <span
        data-loader-line
        className="h-px w-24 origin-left bg-gold"
      />
    </div>
  );
}
