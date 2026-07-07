export const siteConfig = {
  name: "Il Cortiletto",
  fullName: "Il Cortiletto Pub Cafè",
  tagline: "Pub cafè nel cuore di Varallo",
  description:
    "Il Cortiletto Pub Cafè: aperitivi, cocktail d'autore e serate senza fretta a Corso Roma 49, Varallo (VC).",
  // Dominio di produzione attuale (Vercel). Aggiornare se in futuro si usa un dominio personalizzato.
  url: "https://cortiletto.vercel.app",
  address: {
    street: "Corso Roma 49",
    cap: "13019",
    city: "Varallo",
    province: "VC",
    full: "Corso Roma 49, 13019 Varallo (VC)",
    mapsQuery: "Corso Roma 49, 13019 Varallo VC",
  },
  // TODO: sostituire con i recapiti reali del locale prima della pubblicazione.
  phone: "+39 0163 00 00 00",
  phoneHref: "+390163000000",
  email: "info@ilcortilettovarallo.it",
  hours: [
    { day: "Lunedì – Giovedì", time: "17:00 – 00:00" },
    { day: "Venerdì – Sabato", time: "17:00 – 02:00" },
    { day: "Domenica", time: "17:00 – 00:00" },
  ],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/ilcortilettocafe/" },
    { label: "Facebook", href: "https://www.facebook.com/IlCortilettoCafe/?locale=it_IT" },
  ],
  nav: [
    { label: "Home", href: "#home" },
    { label: "Chi Siamo", href: "#chi-siamo" },
    { label: "Menu", href: "#cocktail" },
    { label: "Eventi", href: "#eventi" },
    { label: "Gallery", href: "#gallery" },
    { label: "Recensioni", href: "#recensioni" },
    { label: "Contatti", href: "#contatti" },
  ],
  footerNav: [
    { label: "Home", href: "#home" },
    { label: "Chi Siamo", href: "#chi-siamo" },
    { label: "Cocktail", href: "#cocktail" },
    { label: "Birre", href: "#birre" },
    { label: "Aperitivi", href: "#aperitivi" },
    { label: "Food", href: "#food" },
    { label: "Eventi", href: "#eventi" },
    { label: "Gallery", href: "#gallery" },
    { label: "Recensioni", href: "#recensioni" },
    { label: "Contatti", href: "#contatti" },
  ],
} as const;
