import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import ParallaxLayer from "@/components/ui/ParallaxLayer";
import TiltCard from "@/components/ui/TiltCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";

const cocktails = [
  {
    name: "Cortiletto Sour",
    tag: "Signature",
    description: "Bourbon, liquore al fico, albume montato e tre gocce di angostura.",
    image:
      "Cortiletto Sour in coppa da cocktail, schiuma d'uovo con tre gocce di angostura disegnate a goccia, sfondo bokeh delle luci del cortile",
  },
  {
    name: "Sesia Spritz",
    tag: "Twist locale",
    description: "Vermouth, tonica al pompelmo rosa e un rametto di rosmarino fresco.",
    image:
      "Sesia Spritz in calice da vino ampio, fetta di pompelmo rosa e rametto di rosmarino, ghiaccio in cubi grandi, luce diurna soffusa",
  },
  {
    name: "Affumicato di Bosco",
    tag: "Signature",
    description: "Mezcal, sciroppo ai frutti di bosco e un'affumicatura servita al tavolo.",
    image:
      "Cocktail Affumicato di Bosco servito con campana di vetro fumé ancora piena di fumo, frutti di bosco freschi sul bordo del bicchiere",
  },
  {
    name: "Ultimo dell'Anno",
    tag: "Analcolico",
    description: "Infuso di zenzero e agrumi, tonica premium e scorza d'arancia disidratata.",
    image:
      "Mocktail analcolico in bicchiere basso, colore ambrato, garnish di scorza d'arancia disidratata, sfondo scuro e drammatico",
  },
];

export default function Cocktail() {
  return (
    <section id="cocktail" className="relative scroll-mt-24 overflow-hidden bg-ink-soft py-24 sm:py-32">
      <SectionDivider />
      <ParallaxLayer speed={0.15} className="pointer-events-none absolute inset-x-0 -top-32 h-[140%] opacity-40">
        <PlaceholderImage
          label="Bartender a mezzo busto durante la fase di shakerare un cocktail, movimento congelato, schizzi di condensa visibili sullo shaker"
          fill
          className="h-full w-full rounded-none border-0"
        />
      </ParallaxLayer>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-soft via-ink-soft/95 to-ink-soft" />

      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Cocktail"
          title="Miscelazione d'autore, senza compromessi"
          description="Ricette originali e grandi classici rivisitati, preparati al bancone con ingredienti scelti e tecnica precisa."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cocktails.map((cocktail, index) => (
            <RevealOnScroll key={cocktail.name} delay={index * 0.1}>
              <TiltCard className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-panel/40 p-4 transition-colors duration-300 hover:border-gold/50">
                  <div className="overflow-hidden rounded-xl">
                    <PlaceholderImage label={cocktail.image} aspect="3/4" className="rounded-xl border-0" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                      {cocktail.tag}
                    </span>
                    <h3 className="font-display text-xl text-cream">{cocktail.name}</h3>
                    <p className="text-sm leading-relaxed text-smoke">{cocktail.description}</p>
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
