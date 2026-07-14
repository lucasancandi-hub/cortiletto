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
    src: "/foto/gallery-1.jpg",
    label: "Il bancone e la caratteristica veranda in legno e vetro del Cortiletto di sera",
    aspect: "16/9",
    span: "sm:col-span-2",
    axis: "x" as const,
    origin: "left center",
  },
  {
    src: "/foto/gallery-3.jpg",
    label: "La sala interna del Cortiletto con travi in legno, panche e tavoli",
    aspect: "4/5",
    span: "sm:row-span-2",
    axis: "y" as const,
    origin: "center top",
  },
  {
    src: "/foto/gallery-2.jpg",
    label: "Interno rustico del locale con le tipiche panche in legno e lo schermo",
    aspect: "1/1",
    span: "",
    axis: "y" as const,
    origin: "center bottom",
  },
  {
    src: "/foto/gallery-4.jpg",
    label: "Il dehors del Cortiletto animato in una serata estiva",
    aspect: "1/1",
    span: "",
    axis: "x" as const,
    origin: "right center",
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
                  src={photo.src}
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos[openIndex].src}
                alt={photos[openIndex].label}
                className="max-h-[80vh] w-full rounded-2xl border border-line bg-ink object-contain"
              />
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
