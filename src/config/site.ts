/**
 * Datos del negocio — fuente única de verdad.
 * `null` se muestra como «Pendiente de confirmar». No inventes datos de un negocio real.
 */
export type SocialNetwork = "instagram" | "facebook" | "tiktok" | "linkedin" | "youtube";

export const siteConfig = {
  name: "Ponte Guapa Estética",
  shortName: "Ponte Guapa",
  tagline: "Estética capilar en Ñuñoa",
  description:
    "Botox Capilar, Alisados, Hidratación capilar y Cubre Canas en Ñuñoa. Agenda tu hora online y recibe la dirección exacta por WhatsApp.",
  locale: "es-CL",
  currency: "CLP",
  url: "https://ponte-guapa.netlify.app", // se sobrescribe con NEXT_PUBLIC_SITE_URL al publicar
  isFictional: false,
  stylist: { name: "Verónica Aguilar", role: "Estilista" },
  /** Agenda de Google Calendar: único canal para reservar. */
  bookingUrl: "https://calendar.app.google/t8JLL51G64FRKpMr9",
  contact: {
    // La dirección exacta NO se publica: se envía por WhatsApp a quien agenda.
    address: null as string | null,
    city: "Ñuñoa",
    region: "Región Metropolitana",
    country: "Chile",
    phone: null as string | null,
    whatsapp: "56930873468" as string | null,
    email: null as string | null,
    mapEmbedUrl: null as string | null,
  },
  hours: "Todos los días, 9:00 a 20:00 hrs",
  social: {
    instagram: "https://www.instagram.com/ponteguapa.va",
  } as Partial<Record<SocialNetwork, string>>,
  instagramHandle: "@ponteguapa.va",
  /** Muestra etiquetas de «contenido provisional» mientras falte material real. */
  showContentNotices: false,
};

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url).replace(/\/$/, "");
}

/** "56912345678" → "+56 9 1234 5678" (Chile); otros países: "+<dígitos>". */
export function formatWhatsapp(digits: string): string {
  const cl = digits.match(/^56(9)(\d{4})(\d{4})$/);
  return cl ? `+56 ${cl[1]} ${cl[2]} ${cl[3]}` : `+${digits}`;
}

export function whatsappLink(digits: string, message?: string): string {
  return `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}
