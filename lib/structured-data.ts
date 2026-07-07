import { siteConfig } from "./site-data";

const DAYS_IT = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
const DAYS_SCHEMA = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function expandDays(label: string): string[] {
  const parts = label.split(/–|-/).map((part) => part.trim());
  if (parts.length === 1) {
    const index = DAYS_IT.indexOf(parts[0]);
    return index === -1 ? [] : [DAYS_SCHEMA[index]];
  }
  const startIndex = DAYS_IT.indexOf(parts[0]);
  const endIndex = DAYS_IT.indexOf(parts[1]);
  if (startIndex === -1 || endIndex === -1) return [];
  const days: string[] = [];
  for (let i = startIndex; i <= endIndex; i += 1) days.push(DAYS_SCHEMA[i]);
  return days;
}

function buildOpeningHours() {
  return siteConfig.hours.flatMap((slot) => {
    const dayOfWeek = expandDays(slot.day);
    const [opens, closes] = slot.time.split(/–|-/).map((part) => part.trim());
    if (dayOfWeek.length === 0 || !opens || !closes) return [];
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek,
        opens,
        closes,
      },
    ];
  });
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: siteConfig.fullName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.cap,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      addressCountry: "IT",
    },
    openingHoursSpecification: buildOpeningHours(),
    sameAs: siteConfig.socials.map((social) => social.href).filter((href) => href.startsWith("http")),
  };
}
