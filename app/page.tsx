import Hero from "@/components/sections/Hero";
import Contatti from "@/components/sections/Contatti";
import ChiSiamo from "@/components/sections/ChiSiamo";
import Cocktail from "@/components/sections/Cocktail";
import Birre from "@/components/sections/Birre";
import Aperitivi from "@/components/sections/Aperitivi";
import Food from "@/components/sections/Food";
import Gallery from "@/components/sections/Gallery";
import Recensioni from "@/components/sections/Recensioni";

export default function Home() {
  return (
    <>
      <Hero />
      <Contatti />
      <ChiSiamo />
      <Cocktail />
      <Birre />
      <Aperitivi />
      <Food />
      <Gallery />
      <Recensioni />
    </>
  );
}
