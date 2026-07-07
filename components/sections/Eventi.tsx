import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import AmbientGlow from "@/components/ui/AmbientGlow";
import SectionDivider from "@/components/ui/SectionDivider";

const eventi = [
  {
    day: "Giovedì",
    title: "Vinile & Vermouth",
    description: "Selezione musicale da una collezione privata di vinili, con un aperitivo a tema.",
    image: "Giradischi vintage in funzione con disco in vinile, calice di vermouth accanto, luce calda da lampada da tavolo",
  },
  {
    day: "Venerdì",
    title: "Live Session",
    description: "Musica dal vivo nell'angolo del locale: ogni settimana un artista diverso.",
    image:
      "Musicista con chitarra acustica su un piccolo palco in un angolo del locale, pubblico sfocato in primo piano, luci soffuse blu e ambra",
  },
  {
    day: "Sabato",
    title: "Cortiletto DJ Set",
    description: "Dalle 22:30, dj set nel cortile fino a chiusura.",
    image: "DJ dietro alla consolle nel cortile di sera, luci colorate e persone che ballano sfocate sullo sfondo",
  },
  {
    day: "Ultima domenica del mese",
    title: "Degustazione Guidata",
    description: "Percorso guidato tra birre artigianali o distillati selezionati, posti limitati su prenotazione.",
    image:
      "Tavolo per degustazione guidata con quattro bicchieri di birre diverse numerati, taccuino per appunti e matita, luce diurna",
  },
];

export default function Eventi() {
  return (
    <section id="eventi" className="relative scroll-mt-24 overflow-hidden bg-ink-soft py-24 sm:py-32">
      <SectionDivider />
      <AmbientGlow />
      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Eventi"
          title="Ogni giorno della settimana ha il suo motivo"
          description="Un calendario fisso di appuntamenti che scandisce la settimana del Cortiletto."
        />

        <div className="relative flex flex-col gap-12 border-l border-line pl-8 sm:pl-12">
          {eventi.map((evento, index) => (
            <RevealOnScroll
              key={evento.title}
              delay={index * 0.12}
              className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8"
            >
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-gold sm:-left-[calc(3rem+5px)]" />

              <PlaceholderImage label={evento.image} aspect="4/3" className="w-full sm:w-64 sm:shrink-0" />

              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                  {evento.day}
                </span>
                <h3 className="font-display text-2xl text-cream">{evento.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-smoke">{evento.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
