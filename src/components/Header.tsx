import Image from "next/image";
import { siteConfig } from "@/config/site";
import { nav } from "@/content/copy";
import { images } from "@/content/images";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label={`${siteConfig.name}, ir al inicio`}>
          <Image src={images.logoMark} alt="" className="size-11" sizes="44px" />
          <span className="font-title text-2xl leading-none text-ink">{siteConfig.shortName}</span>
        </a>
        <nav aria-label="Principal" className="flex items-center gap-9">
          <ul className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[0.95rem] text-ink-soft transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary min-h-10 px-5 py-2.5 text-[0.72rem]">
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}
