import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import TiltCard from "@/components/ui/TiltCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import AmbientGlow from "@/components/ui/AmbientGlow";
import SectionDivider from "@/components/ui/SectionDivider";

const piatti = [
  {
    name: "Tagliere Il Cortiletto",
    tag: "Da condividere",
    description: "Salumi piemontesi, due formaggi (uno stagionato, uno fresco), confettura di fichi e grissini.",
    image:
      "Tagliere in ardesia con selezione di salumi piemontesi arrotolati, due formaggi, confettura di fichi e grissini, vista dall'alto a 45 gradi",
  },
  {
    name: "Panino del Cortile",
    tag: "Il più ordinato",
    description: "Manzo, cipolla caramellata e formaggio filante, servito con patatine artigianali.",
    image:
      "Panino gourmet tagliato a metà che mostra gli strati (manzo, cipolla caramellata, formaggio filante), su tagliere di legno con patatine artigianali",
  },
  {
    name: "Tagliere Veg",
    tag: "Vegetariano",
    description: "Verdure grigliate, hummus della casa, pane carasau e olive taggiasche.",
    image:
      "Tagliere vegetariano con verdure grigliate, hummus, pane carasau e olive, colori vivaci, luce naturale da finestra",
  },
  {
    name: "Piatto del giorno",
    tag: "Chiedi al banco",
    description: "Cambia ogni giorno in base alla spesa: chiedi al banco cosa esce dalla cucina.",
    image:
      "Piatto dello chef del giorno impiattato in stile bistrot, vapore leggero visibile, sfondo cucina sfocato",
  },
];

export default function Food() {
  return (
    <section id="food" className="relative scroll-mt-24 overflow-hidden bg-ink py-24 sm:py-32">
      <SectionDivider />
      <AmbientGlow />
      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Food"
          title="Da accompagnare al drink, non da sostituirlo"
          description="Una cucina piccola e ben fatta: prodotti piemontesi, porzioni pensate per il tagliere e per condividere."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {piatti.map((piatto, index) => (
            <RevealOnScroll key={piatto.name} delay={index * 0.1}>
              <TiltCard className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-panel/40 p-4 transition-colors duration-300 hover:border-gold/50 sm:flex-row">
                  <PlaceholderImage label={piatto.image} aspect="1/1" className="w-full shrink-0 sm:w-40" />
                  <div className="flex flex-col gap-1.5 py-1">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                      {piatto.tag}
                    </span>
                    <h3 className="font-display text-xl text-cream">{piatto.name}</h3>
                    <p className="text-sm leading-relaxed text-smoke">{piatto.description}</p>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
