"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion, SplitText, useGSAP } from "@/lib/gsap";
import { onAppReady } from "@/lib/app-ready";
import Button from "@/components/ui/Button";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      let cancelled = false;
      let split: SplitText | null = null;
      let stopListening = () => {};

      if (prefersReducedMotion()) {
        gsap.set(
          [titleRef.current, "[data-hero-sub]", "[data-hero-cta]", "[data-hero-scrollhint]"],
          { opacity: 1, y: 0, autoAlpha: 1 }
        );
        return () => {};
      }

      gsap.set(titleRef.current, { autoAlpha: 0 });
      gsap.set("[data-hero-sub]", { opacity: 0, y: 20 });
      gsap.set("[data-hero-cta]", { opacity: 0, y: 16 });
      gsap.set("[data-hero-scrollhint]", { opacity: 0 });

      const setup = async () => {
        await document.fonts.ready;
        if (cancelled || !titleRef.current) return;

        split = new SplitText(titleRef.current, { type: "chars", tag: "span" });
        gsap.set(titleRef.current, { autoAlpha: 1 });
        gsap.set(split.chars, { yPercent: 120, opacity: 0 });

        const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

        tl.to(split.chars, { yPercent: 0, opacity: 1, duration: 1, stagger: 0.02 })
          .to("[data-hero-sub]", { opacity: 1, y: 0, duration: 0.8 }, "-=0.55")
          .to("[data-hero-cta]", { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.45")
          .to("[data-hero-scrollhint]", { opacity: 1, duration: 0.6 }, "-=0.2");

        stopListening = onAppReady(() => tl.play());
      };

      setup();

      gsap.to(bgRef.current, {
        yPercent: 16,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        cancelled = true;
        stopListening();
        split?.revert();
      };
    },
    { scope: rootRef }
  );

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink"
    >
      <div ref={bgRef} className="absolute inset-0">
        <PlaceholderImage
          label="Facciata del Cortiletto al blue hour: insegna al neon accesa, tavolini del dehors illuminati da lampadine a filamento, porta d'ingresso aperta con luce calda che fuoriesce"
          fill
          className="scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-24 sm:px-8 sm:pb-32 lg:px-12">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          {"Corso Roma 49 · Varallo (VC)"}
        </span>

        <h1
          ref={titleRef}
          className="max-w-4xl overflow-hidden font-display text-6xl leading-[0.95] text-cream sm:text-7xl lg:text-8xl"
        >
          Il Cortiletto
        </h1>

        <p data-hero-sub className="max-w-xl text-balance text-base leading-relaxed text-smoke sm:text-lg">
          Un angolo caldo tra aperitivi, cocktail d&apos;autore e serate senza fretta, nel
          cuore di Varallo.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <span data-hero-cta>
            <Button href="#chi-siamo" variant="primary">
              Scopri il locale
            </Button>
          </span>
          <span data-hero-cta>
            <Button href="#dove-siamo" variant="ghost">
              Dove siamo
            </Button>
          </span>
        </div>
      </div>

      <div
        data-hero-scrollhint
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-smoke"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scorri</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
