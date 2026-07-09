export const siteConfig = {
  name: "Il Cortiletto",
  fullName: "Il Cortiletto Pub Cafè",
  tagline: "Pub cafè nel cuore di Varallo",
  description:
    "Il Cortiletto Pub Cafè: aperitivi, cocktail d'autore e serate senza fretta a Corso Roma 49, Varallo (VC).",
  // Dominio ufficiale di produzione.
  url: "https://ilcortilettocafe.com",
  address: {
    street: "Corso Roma 49",
    cap: "13019",
    city: "Varallo",
    province: "VC",
    full: "Corso Roma 49, 13019 Varallo (VC)",
    mapsQuery: "Corso Roma 49, 13019 Varallo VC",
  },
  phone: "+39 331 211 7317",
  phoneHref: "+393312117317",
  // Numero WhatsApp in formato internazionale senza "+" (per i link wa.me).
  whatsapp: "393312117317",
  // TODO: email reale non ancora disponibile — al momento i contatti passano
  // da telefono e WhatsApp, quindi questo indirizzo non viene mostrato nel sito.
  email: "info@ilcortilettovarallo.it",
  hours: [
    { day: "Lunedì", time: "07:00 – 00:30" },
    { day: "Martedì", time: "06:30 – 00:00" },
    { day: "Mercoledì", time: "07:00 – 00:00" },
    { day: "Giovedì", time: "07:00 – 00:00" },
    { day: "Venerdì", time: "07:00 – 02:00" },
    { day: "Sabato", time: "07:30 – 02:00" },
    { day: "Domenica", time: "08:00 – 00:00" },
  ],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/ilcortilettocafe/" },
    { label: "Facebook", href: "https://www.facebook.com/IlCortilettoCafe/?locale=it_IT" },
  ],
  nav: [
    { label: "Home", href: "#home" },
    { label: "Chi Siamo", href: "#chi-siamo" },
    { label: "Menu", href: "#cocktail" },
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
    { label: "Gallery", href: "#gallery" },
    { label: "Recensioni", href: "#recensioni" },
    { label: "Contatti", href: "#contatti" },
  ],
} as const;

/**
 * Link WhatsApp con messaggio di prenotazione già compilato: aprendolo si avvia
 * una chat verso il numero del locale con data/orario/persone/nome da completare.
 */
export const whatsappReservationHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Ciao! Vorrei prenotare un tavolo al Cortiletto Pub Cafè.\n\nData:\nOrario:\nPersone:\nNome:"
)}`;
