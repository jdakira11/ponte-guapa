import Image from "next/image";
import { siteConfig } from "@/config/site";
import { hero } from "@/content/copy";
import { images } from "@/content/images";
import { CalendarIcon, ClockIcon, PinIcon } from "./icons";

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-[radial-gradient(ellipse_at_85%_0%,#efe2d6,transparent_60%)]">
      <div className="container-x grid items-center gap-14 py-14 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="display-lg mt-6 text-ink">
            {hero.titleStart} <em className="text-accent">{hero.titleEm}</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-ink-soft lg:mx-0">{hero.lead}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <CalendarIcon className="size-4" />
              Agendar mi hora
            </a>
            <a href="#servicios" className="btn btn-ghost text-ink">
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

        <figure className="mx-auto w-full max-w-[22rem] lg:max-w-[26rem]">
          <div className="relative">
            <div aria-hidden className="arch absolute inset-0 translate-x-4 -translate-y-4 border border-accent/40" />
            <Image
              src={images.veronica}
              alt={`${siteConfig.stylist.name}, estilista de ${siteConfig.name}`}
              className="arch relative aspect-[4/5] w-full object-cover object-[50%_30%] shadow-[0_30px_60px_-20px_rgba(77,63,53,0.35)]"
              sizes="(min-width: 1024px) 26rem, 22rem"
              priority
            />
          </div>
          <figcaption className="mt-6 text-center">
            <span className="font-title text-2xl text-ink">{siteConfig.stylist.name}</span>
            <span className="mt-1 block text-xs font-medium uppercase tracking-[0.22em] text-accent">{siteConfig.stylist.role}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
