import { siteConfig } from "@/config/site";
import { steps } from "@/content/copy";
import { CalendarIcon } from "./icons";
import { SectionHeader } from "./SectionHeader";

export function Steps() {
  return (
    <section aria-labelledby="agendar-titulo" id="como-agendar" className="on-dark bg-deep py-20 text-paper md:py-28">
      <div className="container-x">
        <SectionHeader id="agendar-titulo" eyebrow="Cómo agendar" title="Reservar es muy simple" className="[&_h2]:text-paper" />
        <ol className="mx-auto mt-14 grid max-w-5xl gap-10 md:mt-20 md:grid-cols-3 md:gap-0">
          {steps.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              className="text-center md:border-l md:border-paper/15 md:px-10 md:first:border-l-0"
            >
              <span className="font-title text-6xl font-light leading-none text-metal">{i + 1}</span>
              <h3 className="font-title mt-5 text-[1.75rem] text-paper">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs font-light leading-relaxed text-paper/80">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 text-center" data-reveal>
          <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light">
            <CalendarIcon className="size-4" />
            Abrir calendario
          </a>
        </div>
      </div>
    </section>
  );
}
