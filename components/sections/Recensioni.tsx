"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AmbientGlow from "@/components/ui/AmbientGlow";
import SectionDivider from "@/components/ui/SectionDivider";

const reviews = [
  {
    name: "Mark Flour",
    source: "Google",
    rating: 5,
    quote:
      "Posticino molto carino e tranquillo anche all'aperto, diversi tavolini all'ombra. Personale gentile, professionale e veloce, bagni puliti, posteggi nelle vicinanze. Lo consiglio vivamente.",
  },
  {
    name: "Annamaria Teruggi",
    source: "Google",
    rating: 5,
    quote:
      "Ambiente caratteristico, originale e gradevole. Molto belli i tavolini all'aperto, ottimi i cocktail. Le ragazze gentili e cordiali.",
  },
  {
    name: "Osvaldo Fuselli",
    source: "Google",
    rating: 5,
    quote: "Tutto bello, personale cortese. C'è solo una pecca: sono juventini!",
  },
  {
    name: "Maria Grazia Abrami",
    source: "Google",
    rating: 5,
    quote: "Sempre un bel locale, titolare sempre gentile e cordiale.",
  },
  {
    name: "Carmen Farina",
    source: "Google",
    rating: 4,
    quote:
      "Ci siamo state a colazione… Consigliato per il prezzo e la possibilità del latte senza lattosio.",
  },
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
  return (
    <section id="recensioni" className="relative scroll-mt-24 overflow-hidden bg-ink-soft py-24 sm:py-32">
      <SectionDivider />
      <AmbientGlow />
      <Container className="relative flex flex-col gap-10">
        <SectionHeading
          eyebrow="Recensioni"
          title="Quello che dicono di noi"
          description="Una selezione di recensioni dai nostri clienti. Scorri lateralmente per vederle tutte."
        />

        <div
          className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          role="list"
          aria-label="Recensioni dei clienti"
        >
          {reviews.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              role="listitem"
              className="flex w-[280px] shrink-0 snap-start flex-col gap-4 rounded-2xl border border-line bg-panel/40 p-6 transition-colors duration-300 hover:border-gold/50 sm:w-[340px]"
            >
              <span className="font-display text-4xl leading-none text-gold/70">&ldquo;</span>

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} filled={starIndex < review.rating} delay={starIndex * 0.06} />
                ))}
              </div>

              <p className="text-sm italic leading-relaxed text-smoke">{review.quote}</p>

              <div className="mt-auto flex items-center justify-between pt-2 text-xs">
                <span className="font-medium uppercase tracking-[0.15em] text-cream">{review.name}</span>
                <span className="uppercase tracking-[0.15em] text-smoke">{review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
