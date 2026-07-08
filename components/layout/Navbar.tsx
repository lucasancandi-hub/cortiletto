"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logomark from "@/components/ui/Logomark";
import { siteConfig, whatsappReservationHref } from "@/lib/site-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || menuOpen ? "bg-ink/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between sm:h-24">
        <a
          href="#home"
          className="flex items-center gap-2.5 font-display text-lg uppercase tracking-[0.2em] text-cream sm:text-xl"
        >
          <Logomark className="h-6 w-6 text-gold" />
          {siteConfig.name}
        </a>

        <nav aria-label="Principale" className="hidden items-center gap-10 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-smoke transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={whatsappReservationHref}
            target="_blank"
            rel="noopener noreferrer" variant="ghost" className="px-6 py-2.5 text-xs">
            Prenota un tavolo
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={menuOpen}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            className="h-px w-6 bg-cream"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="h-px w-6 bg-cream"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            className="h-px w-6 bg-cream"
          />
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-x-0 top-full flex flex-col gap-8 border-b border-line bg-ink px-6 py-10 lg:hidden"
          >
            <nav aria-label="Menu mobile" className="flex flex-col gap-6">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-2xl text-cream transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button href={whatsappReservationHref}
            target="_blank"
            rel="noopener noreferrer" variant="primary" onClick={() => setMenuOpen(false)}>
              Prenota un tavolo
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
