import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import ParallaxLayer from "@/components/ui/ParallaxLayer";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";
import { siteConfig } from "@/lib/site-data";

export default function Contatti() {
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.address.mapsQuery
  )}&output=embed`;

  return (
    <section id="contatti" className="relative scroll-mt-24 overflow-hidden bg-ink py-24 sm:py-32">
      <SectionDivider />
      <ParallaxLayer speed={0.15} className="pointer-events-none absolute inset-x-0 -top-24 h-[130%] opacity-25">
        <PlaceholderImage
          label="Scorcio serale di Corso Roma con l'insegna del Cortiletto visibile in lontananza, luci della via, effetto lungo esposizione"
          fill
          className="h-full w-full rounded-none border-0"
        />
      </ParallaxLayer>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink" />

      <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <GlassCard className="flex flex-col gap-10 p-8 sm:p-10">
          <SectionHeading
            eyebrow="Dove siamo"
            title={siteConfig.address.full}
            description="Vi aspettiamo a Corso Roma 49, nel cuore di Varallo. Prenotate un tavolo o passate a trovarci per l'aperitivo."
          />

          <div className="flex flex-col gap-6 border-t border-line pt-8">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Orari</span>
              <ul className="flex flex-col gap-1 text-sm text-smoke">
                {siteConfig.hours.map((slot) => (
                  <li key={slot.day} className="flex justify-between gap-6 sm:max-w-xs">
                    <span>{slot.day}</span>
                    <span className="text-cream">{slot.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contatti</span>
              <a href={`tel:${siteConfig.phoneHref}`} className="text-sm text-smoke transition-colors hover:text-gold">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-smoke transition-colors hover:text-gold">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={`tel:${siteConfig.phoneHref}`} variant="primary">
              Chiama ora
            </Button>
            <Button href={`mailto:${siteConfig.email}`} variant="ghost">
              Scrivici
            </Button>
          </div>
        </GlassCard>

        <RevealOnScroll
          y={32}
          className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line shadow-[0_8px_40px_-16px_rgba(0,0,0,0.7)] sm:aspect-[16/10]"
        >
          <iframe
            src={mapsSrc}
            title={`Mappa: ${siteConfig.address.full}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
