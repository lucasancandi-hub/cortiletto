import Hero from "@/components/sections/Hero";
import Contatti from "@/components/sections/Contatti";
import ChiSiamo from "@/components/sections/ChiSiamo";
import Gallery from "@/components/sections/Gallery";
import Recensioni from "@/components/sections/Recensioni";

// NB: le sezioni Cocktail, Birre, Aperitivi e Food sono temporaneamente disattivate
// perché mostrano foto di drink/piatti non ancora disponibili. I componenti restano
// in components/sections/ e si riattivano appena arrivano quelle foto.

export default function Home() {
  return (
    <>
      <Hero />
      <Contatti />
      <ChiSiamo />
      <Gallery />
      <Recensioni />
    </>
  );
}
