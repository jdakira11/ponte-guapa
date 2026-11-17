import Image from "next/image";
import { siteConfig, whatsappLink } from "@/config/site";
import { closing, nav } from "@/content/copy";
import { images } from "@/content/images";
import { CalendarIcon, InstagramIcon, WhatsAppIcon } from "./icons";

export function Closing() {
  return (
    <section aria-labelledby="cierre-titulo" className="bg-paper-2 py-20 text-center md:py-24">
      <div className="container-x" data-reveal>
        <Image src={images.logo} alt="" className="mx-auto w-44" sizes="176px" />
        <h2 id="cierre-titulo" className="display-md mt-4 text-ink">
          {closing.title} <em className="text-accent">{closing.titleEm}</em>
        </h2>
        <p className="mt-4 text-lg font-light text-ink-soft">{closing.text}</p>
        <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
          <CalendarIcon className="size-4" />
          Agendar mi hora
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const wa = siteConfig.contact.whatsapp;
  return (
    <footer className="bg-deep py-12 text-paper/80">
      <div className="container-x flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-title text-2xl text-paper">{siteConfig.name}</p>
          <p className="mt-1 text-sm">{siteConfig.tagline} · Solo con hora agendada</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-paper">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          {siteConfig.social.instagram && (
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-11 place-items-center rounded-full border border-paper/25 transition-colors hover:bg-paper/10">
              <InstagramIcon />
            </a>
          )}
          {wa && (
            <a href={whatsappLink(wa)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid size-11 place-items-center rounded-full border border-paper/25 transition-colors hover:bg-paper/10">
              <WhatsAppIcon />
            </a>
          )}
        </div>
      </div>
      <p className="container-x mt-10 border-t border-paper/15 pt-6 text-center text-xs text-paper/60">
        © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.contact.city}, {siteConfig.contact.region}.
      </p>
    </footer>
  );
}

export function WhatsAppFloat() {
  const wa = siteConfig.contact.whatsapp;
  if (!wa) return null;
  return (
    <a
      href={whatsappLink(wa, "Hola, tengo una consulta sobre Ponte Guapa")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-[#1f7a4d] text-white shadow-lg transition-transform hover:scale-105 md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
