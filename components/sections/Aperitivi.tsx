import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import BlurReveal from "@/components/ui/BlurReveal";
import AmbientGlow from "@/components/ui/AmbientGlow";
import SectionDivider from "@/components/ui/SectionDivider";

const formule = [
  {
    title: "Al banco",
    description: "Un calice, gli stuzzichini della casa e due chiacchiere col barman. Ideale se sei di passaggio.",
  },
  {
    title: "Al tavolo",
    description: "Tagliere condiviso e servizio al tavolo, in cortile o dentro, a seconda della stagione.",
  },
  {
    title: "Di gruppo",
    description: "Formula riservata per gruppi da 6 persone in su, da prenotare con un giorno d'anticipo.",
  },
];

export default function Aperitivi() {
  return (
    <section id="aperitivi" className="relative scroll-mt-24 overflow-hidden bg-ink-soft py-24 sm:py-32">
      <SectionDivider />
      <AmbientGlow />
      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Aperitivo"
          title="Il rito dell'aperitivo, alle tue condizioni"
          description="Dalle 18:00 alle 21:00, ogni giorno: un momento su cui non transigiamo, qualunque sia la formula che scegli."
        />

        <BlurReveal>
          <PlaceholderImage
            label="Tavolo da aperitivo visto dall'alto con tagliere condiviso, tre calici di spritz colorati diversi, tovagliolo di lino e posate"
            aspect="21/9"
            className="w-full"
          />
        </BlurReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {formule.map((formula, index) => (
            <BlurReveal key={formula.title} delay={index * 0.15}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-line p-6">
                <span className="font-display text-2xl text-cream">{formula.title}</span>
                <p className="text-sm leading-relaxed text-smoke">{formula.description}</p>
              </div>
            </BlurReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
