import Hero from "@/components/sections/Hero";
import ChiSiamo from "@/components/sections/ChiSiamo";
import Cocktail from "@/components/sections/Cocktail";
import Birre from "@/components/sections/Birre";
import Aperitivi from "@/components/sections/Aperitivi";
import Food from "@/components/sections/Food";
import Eventi from "@/components/sections/Eventi";
import Gallery from "@/components/sections/Gallery";
import Recensioni from "@/components/sections/Recensioni";
import Contatti from "@/components/sections/Contatti";

export default function Home() {
  return (
    <>
      <Hero />
      <ChiSiamo />
      <Cocktail />
      <Birre />
      <Aperitivi />
      <Food />
      <Eventi />
      <Gallery />
      <Recensioni />
      <Contatti />
    </>
  );
}
