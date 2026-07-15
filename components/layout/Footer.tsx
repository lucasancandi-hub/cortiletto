import Container from "@/components/ui/Container";
import { siteConfig, whatsappReservationHref } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();
  const half = Math.ceil(siteConfig.footerNav.length / 2);
  const navColumns = [siteConfig.footerNav.slice(0, half), siteConfig.footerNav.slice(half)];

  return (
    <footer className="border-t border-line bg-ink-soft">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-5">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <span className="font-display text-2xl uppercase tracking-[0.2em] text-cream">
            {siteConfig.name}
          </span>
          <p className="text-sm leading-relaxed text-smoke">{siteConfig.tagline}</p>
          <div className="flex gap-4 pt-2">
            {siteConfig.socials
              .filter((social) => social.href.startsWith("http"))
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} (si apre in una nuova scheda)`}
                  className="text-xs font-medium uppercase tracking-[0.2em] text-smoke transition-colors hover:text-gold"
                >
                  {social.label}
                </a>
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contatti</span>
          <address className="not-italic text-sm leading-relaxed text-smoke">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.cap} {siteConfig.address.city} ({siteConfig.address.province})
          </address>
          <a href={`tel:${siteConfig.phoneHref}`} className="text-sm text-smoke transition-colors hover:text-gold">
            {siteConfig.phone}
          </a>
          <a
            href={whatsappReservationHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-smoke transition-colors hover:text-gold"
          >
            WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Orari</span>
          <ul className="flex flex-col gap-1.5 text-sm text-smoke">
            {siteConfig.hours.map((slot) => (
              <li key={slot.day} className="flex justify-between gap-6">
                <span>{slot.day}</span>
                <span className="text-cream">{slot.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {navColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-3">
            {columnIndex === 0 && (
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Naviga</span>
            )}
            <ul className="flex flex-col gap-1.5 text-sm">
              {column.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-smoke transition-colors hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-xs text-smoke/70 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {siteConfig.fullName}. Tutti i diritti riservati.
          </span>
          <span>P.IVA {siteConfig.vat}</span>
          <span>{siteConfig.address.full}</span>
        </Container>
      </div>
    </footer>
  );
}
