import { formatWhatsapp, siteConfig, whatsappLink } from "@/config/site";
import { location } from "@/content/copy";
import { ClockIcon, InstagramIcon, PinIcon, WhatsAppIcon } from "./icons";
import { SectionHeader } from "./SectionHeader";

const wa = siteConfig.contact.whatsapp;

export function Location() {
  const details = [
    { icon: PinIcon, label: "Dónde", value: `${siteConfig.contact.city}, Santiago`, note: "Dirección exacta por WhatsApp al agendar" },
    { icon: ClockIcon, label: "Horario", value: "Todos los días", note: "9:00 a 20:00 hrs" },
  ];

  return (
    <section aria-labelledby="ubicacion-titulo" id="ubicacion" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeader id="ubicacion-titulo" eyebrow={location.eyebrow} title={location.title} intro={location.text} />

        <dl className="mx-auto mt-14 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2" data-reveal>
          {details.map(({ icon: Icon, label, value, note }) => (
            <div key={label} className="flex flex-col items-center bg-card px-6 py-9 text-center">
              <Icon className="size-6 text-accent" />
              <dt className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-ink-mute">{label}</dt>
              <dd className="font-title mt-2 text-[1.7rem] leading-tight text-ink">{value}</dd>
              <dd className="mt-1 text-sm text-ink-soft">{note}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row" data-reveal>
          {wa && (
            <a href={whatsappLink(wa, "Hola, tengo una consulta sobre Ponte Guapa")} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-ink hover:text-card">
              <WhatsAppIcon className="size-4" />
              {formatWhatsapp(wa)}
            </a>
          )}
          {siteConfig.social.instagram && (
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-ink hover:text-card">
              <InstagramIcon className="size-4" />
              {siteConfig.instagramHandle}
            </a>
          )}
        </div>
        <p className="mt-4 text-center text-sm text-ink-mute">Consultas por WhatsApp o Instagram · Reservas solo en el calendario online</p>
      </div>
    </section>
  );
}
