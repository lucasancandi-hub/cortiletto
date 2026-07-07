"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import MaskReveal from "@/components/ui/MaskReveal";
import SectionDivider from "@/components/ui/SectionDivider";

const photos = [
  {
    label: "Vista panoramica del cortile interno allestito per la sera, luci a filamento tese tra i muri, tavoli quasi tutti occupati",
    aspect: "16/9",
    span: "sm:col-span-2",
    axis: "x" as const,
    origin: "left center",
  },
  {
    label: "Primo piano delle mani del bartender mentre guarnisce un cocktail con un twist di agrume",
    aspect: "1/1",
    span: "",
    axis: "y" as const,
    origin: "center top",
  },
  {
    label: "Gruppo di clienti che ridono a un tavolo, inquadratura laterale, atmosfera conviviale e luci calde",
    aspect: "4/5",
    span: "sm:row-span-2",
    axis: "x" as const,
    origin: "right center",
  },
  {
    label: "Dettaglio del bancone con fila di bottiglie di distillati retroilluminate e insegna al neon del logo sullo sfondo",
    aspect: "1/1",
    span: "",
    axis: "y" as const,
    origin: "center bottom",
  },
  {
    label: "Ingresso del Cortiletto di sera, insegna accesa, porta socchiusa, persone che entrano",
    aspect: "4/5",
    span: "sm:row-span-2",
    axis: "x" as const,
    origin: "left center",
  },
  {
    label: "Staff al completo dietro al bancone in posa informale, sorridenti, con la divisa del locale",
    aspect: "1/1",
    span: "",
    axis: "y" as const,
    origin: "center top",
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative scroll-mt-24 overflow-hidden bg-ink py-24 sm:py-32">
      <SectionDivider />
      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Gallery"
          title="Ogni sera una scena diversa"
          description="Dal tramonto in cortile alle luci calde del bancone: momenti che raccontano lo spirito del Cortiletto."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:auto-rows-[14rem]">
          {photos.map((photo, index) => (
            <button
              key={photo.label}
              type="button"
              onClick={() => setOpenIndex(index)}
              className={`group cursor-zoom-in text-left ${photo.span}`}
              aria-label="Ingrandisci foto"
            >
              <MaskReveal
                axis={photo.axis}
                origin={photo.origin}
                panelClassName="bg-ink-soft"
                className="h-full w-full rounded-2xl"
                delay={(index % 3) * 0.1}
              >
                <PlaceholderImage
                  label={photo.label}
                  aspect={photo.aspect}
                  className="h-full w-full rounded-2xl border-0 transition-transform duration-500 group-hover:scale-105"
                />
              </MaskReveal>
            </button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <PlaceholderImage label={photos[openIndex].label} aspect="4/3" className="w-full" />
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Chiudi"
                className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink text-cream transition-colors hover:border-gold hover:text-gold"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
