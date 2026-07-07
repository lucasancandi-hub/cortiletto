import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import GlassCard from "@/components/ui/GlassCard";
import SectionDivider from "@/components/ui/SectionDivider";

const spina = [
  { name: "Chiara del Cortile", style: "Blonde Ale", abv: "5.2%", note: "Beva facile, note di miele e crosta di pane." },
  { name: "Ambrata di Bosco", style: "Amber Ale", abv: "6%", note: "Caramello e frutta secca, corpo pieno." },
  { name: "IPA di Quartiere", style: "American IPA", abv: "6.8%", note: "Luppolatura decisa, agrumi e resina." },
];

const bottiglia = [
  { name: "Scura del Cortile", style: "Stout", abv: "7%", note: "Caffè tostato e cioccolato fondente." },
  { name: "Weiss dei Monti", style: "Weizen", abv: "5%", note: "Banana e chiodi di garofano, torbida e leggera." },
  { name: "Sidro Rosso", style: "Sidro di mele", abv: "4.5%", note: "Secco, frizzante, per chi non beve birra." },
];

export default function Birre() {
  return (
    <section id="birre" className="relative scroll-mt-24 overflow-hidden bg-ink py-24 sm:py-32">
      <SectionDivider />
      <div className="absolute inset-0 opacity-30">
        <PlaceholderImage
          label="Fila di quattro bicchieri di birre artigianali diverse (chiara, ambrata, rossa, scura) allineati su un asse di legno grezzo, vista dall'alto"
          fill
          className="h-full w-full rounded-none border-0"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Birre"
          title="Una spillatura curata, una carta che cambia"
          description="Birre artigianali alla spina e in bottiglia, selezionate da piccoli birrifici e ruotate stagionalmente."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Alla spina</span>
            <div className="flex flex-col gap-4">
              {spina.map((beer, index) => (
                <GlassCard key={beer.name} delay={index * 0.1} className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-lg text-cream">{beer.name}</h3>
                      <span className="text-xs uppercase tracking-[0.15em] text-smoke">{beer.style}</span>
                    </div>
                    <span className="shrink-0 rounded-full border border-gold/40 px-2.5 py-1 text-xs font-semibold text-gold">
                      {beer.abv}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-smoke">{beer.note}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">In bottiglia</span>
            <div className="flex flex-col gap-4">
              {bottiglia.map((beer, index) => (
                <GlassCard key={beer.name} delay={index * 0.1} className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-lg text-cream">{beer.name}</h3>
                      <span className="text-xs uppercase tracking-[0.15em] text-smoke">{beer.style}</span>
                    </div>
                    <span className="shrink-0 rounded-full border border-gold/40 px-2.5 py-1 text-xs font-semibold text-gold">
                      {beer.abv}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-smoke">{beer.note}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
