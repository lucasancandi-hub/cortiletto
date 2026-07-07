"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AmbientGlow from "@/components/ui/AmbientGlow";
import SectionDivider from "@/components/ui/SectionDivider";

const reviews = [
  { name: "[Nome cliente]", source: "Google", rating: 5 },
  { name: "[Nome cliente]", source: "TripAdvisor", rating: 5 },
  { name: "[Nome cliente]", source: "Google", rating: 4 },
  { name: "[Nome cliente]", source: "Google", rating: 5 },
  { name: "[Nome cliente]", source: "TripAdvisor", rating: 5 },
];

function Star({ filled, delay }: { filled: boolean; delay: number }) {
  return (
    <motion.svg
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "backOut", delay }}
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.3"
      className={filled ? "text-gold" : "text-smoke/40"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12 3 2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 3Z"
      />
    </motion.svg>
  );
}

export default function Recensioni() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="recensioni" className="relative scroll-mt-24 overflow-hidden bg-ink-soft py-24 sm:py-32">
      <SectionDivider />
      <AmbientGlow />
      <Container className="relative flex flex-col gap-10">
        <SectionHeading
          eyebrow="Recensioni"
          title="Quello che dicono di noi"
          description="Una selezione di recensioni dai nostri clienti. Trascina per scorrere."
        />

        <div ref={constraintsRef} className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.08}
            className="flex cursor-grab gap-6 active:cursor-grabbing"
          >
            {reviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex w-[300px] shrink-0 flex-col gap-4 rounded-2xl border border-line bg-panel/40 p-6 transition-colors duration-300 hover:border-gold/50 sm:w-[340px]"
              >
                <span className="font-display text-4xl leading-none text-gold/70">&ldquo;</span>

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} filled={starIndex < review.rating} delay={starIndex * 0.06} />
                  ))}
                </div>

                <p className="text-sm italic leading-relaxed text-smoke">
                  Recensione reale da inserire qui: sostituisci questo testo con la recensione autentica
                  del cliente.
                </p>

                <div className="mt-auto flex items-center justify-between pt-2 text-xs">
                  <span className="font-medium uppercase tracking-[0.15em] text-cream">{review.name}</span>
                  <span className="uppercase tracking-[0.15em] text-smoke">{review.source}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
