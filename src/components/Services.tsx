import Image from "next/image";
import { siteConfig } from "@/config/site";
import { services } from "@/content/copy";
import { images } from "@/content/images";
import { ArrowRight } from "./icons";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section aria-labelledby="servicios-titulo" id="servicios" className="bg-paper-2 py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          id="servicios-titulo"
          eyebrow="Servicios"
          title="Tratamientos capilares"
          intro="Productos profesionales y atención personalizada en cada sesión. Estos son algunos resultados."
        />
        <ul className="mx-auto mt-14 grid max-w-6xl gap-x-10 gap-y-14 md:mt-20 md:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.id} data-reveal style={{ "--reveal-delay": `${(i % 2) * 120}ms` } as React.CSSProperties}>
              <article>
                <Image
                  src={images[s.image]}
                  alt={`${s.name}: antes y después`}
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  sizes="(min-width: 768px) 560px, 100vw"
                />
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-title text-xl text-accent">0{i + 1}</span>
                  <h3 className="font-title text-3xl text-ink">{s.name}</h3>
                </div>
                <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{s.text}</p>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border-b border-accent/50 pb-1 text-sm font-medium tracking-wide text-accent transition-colors hover:border-ink hover:text-ink"
                >
                  Agendar {s.name.toLowerCase()}
                  <ArrowRight className="size-4" />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
