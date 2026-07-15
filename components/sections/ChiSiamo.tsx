import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import MaskReveal from "@/components/ui/MaskReveal";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import AmbientGlow from "@/components/ui/AmbientGlow";
import SectionDivider from "@/components/ui/SectionDivider";

const features = [
  {
    title: "Il bancone",
    description: "Il cuore del locale: legno vissuto, luci basse e chi lo presidia ogni sera.",
  },
  {
    title: "Il cortile",
    description: "Lo spazio all'aperto che dà il nome al locale, vissuto da aprile a ottobre.",
  },
  {
    title: "La selezione",
    description: "Cocktail, birre artigianali e vini scelti con la cura di un ristorante.",
  },
];

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="relative scroll-mt-24 overflow-hidden bg-ink py-24 sm:py-32">
      <SectionDivider />
      <AmbientGlow />
      <Container className="relative flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex flex-1 flex-col gap-10">
          <SectionHeading
            eyebrow="La nostra storia"
            title="Un cortile trasformato in rifugio serale"
            description={
              <>
                Il Cortiletto nasce da un&apos;idea semplice: restituire al centro di Varallo un
                luogo dove il tempo rallenta. Dietro una porta discreta di Corso Roma, il cortile
                si apre su un bancone in legno, luci basse e una selezione di drink pensata per
                accompagnare la serata, dall&apos;aperitivo a notte inoltrata. Non c&apos;è fretta
                di ordinare, non c&apos;è un tavolo assegnato per forza: c&apos;è un bancone che
                accoglie chi arriva da solo e un cortile che si anima quando il gruppo si allarga.
              </>
            }
          />

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {features.map((feature, index) => (
              <RevealOnScroll
                as="li"
                key={feature.title}
                delay={index * 0.1}
                className="flex flex-col gap-2 border-t border-line pt-4"
              >
                <span className="font-display text-xl text-cream">{feature.title}</span>
                <span className="text-sm leading-relaxed text-smoke">{feature.description}</span>
              </RevealOnScroll>
            ))}
          </ul>
        </div>

        <div className="relative w-full flex-1">
          <MaskReveal axis="x" origin="right center" panelClassName="bg-ink-soft" className="w-full rounded-2xl">
            <PlaceholderImage
              label="Il cortile del Cortiletto al blue hour, con i tavolini all'aperto animati e il bancone illuminato"
              src="/foto/chi-siamo.jpg"
              objectPosition="center"
              aspect="4/5"
              className="h-full w-full rounded-none border-0"
            />
          </MaskReveal>

          <div className="absolute -bottom-6 -left-6 hidden max-w-[15rem] rounded-2xl border border-line bg-ink/80 p-5 shadow-2xl backdrop-blur-xl sm:block">
            <p className="font-display text-lg italic leading-snug text-cream">
              &ldquo;Il cortile che non ti aspetti, nel cuore di Varallo.&rdquo;
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
