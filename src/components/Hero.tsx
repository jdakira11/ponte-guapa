import Image from "next/image";
import { siteConfig } from "@/config/site";
import { hero } from "@/content/copy";
import { images } from "@/content/images";
import { CalendarIcon, ClockIcon, PinIcon } from "./icons";

/** Portada editorial: texto a la izquierda y foto a sangre en la mitad derecha (arriba y a todo el ancho en móvil). */
export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden lg:min-h-[calc(100svh-4.5rem)]">
      <figure className="relative aspect-[5/4] w-full sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[46%]">
        <Image
          src={images.veronica}
          alt={`${siteConfig.stylist.name}, estilista de ${siteConfig.name}`}
          fill
          className="object-cover object-[50%_28%]"
          sizes="(min-width: 1024px) 46vw, 100vw"
          priority
        />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-deep/75 to-transparent" />
        <figcaption className="absolute bottom-5 left-5 text-paper md:bottom-8 md:left-8">
          <span className="font-title block text-xl md:text-2xl">{siteConfig.stylist.name}</span>
          <span className="mt-1 block text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper/85">{siteConfig.stylist.role}</span>
        </figcaption>
      </figure>

      <div className="container-x relative flex items-center lg:min-h-[calc(100svh-4.5rem)]">
        <div className="w-full py-12 text-center md:py-20 lg:w-[50%] lg:pr-14 lg:text-left">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="display-lg mt-6 text-ink">
            {hero.titleStart} <em className="text-accent not-italic">{hero.titleEm}</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-ink-soft lg:mx-0">{hero.lead}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <CalendarIcon className="size-4" />
              Agendar mi hora
            </a>
            <a href="#servicios" className="btn btn-ghost text-ink hover:text-card">
              Ver servicios
            </a>
          </div>
          <ul className="mt-10 flex flex-col items-center gap-3 border-t border-line pt-7 text-[0.95rem] text-ink-soft sm:flex-row sm:justify-center sm:gap-8 lg:justify-start">
            <li className="flex items-center gap-2.5">
              <PinIcon className="size-[18px] text-accent" />
              {siteConfig.contact.city}, Santiago
            </li>
            <li className="flex items-center gap-2.5">
              <ClockIcon className="size-[18px] text-accent" />
              {siteConfig.hours}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
