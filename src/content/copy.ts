import type { ImageKey } from "./images";

export const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como-agendar", label: "Cómo agendar" },
  { href: "#ubicacion", label: "Ubicación" },
];

export const hero = {
  eyebrow: "Estética capilar · Ñuñoa",
  titleStart: "Cabello sano y hermoso,",
  titleEm: "en manos expertas",
  lead: "Botox Capilar, Alisados, Hidratación de rizos y Cubre Canas con productos profesionales y atención personalizada, solo con hora agendada.",
};

export const services: { id: string; name: string; text: string; image: ImageKey }[] = [
  {
    id: "botox",
    name: "Botox Capilar",
    text: "Reconstruye la fibra capilar, elimina el frizz y devuelve brillo y suavidad al cabello dañado.",
    image: "botox",
  },
  {
    id: "alisado",
    name: "Alisados",
    text: "Reducen el volumen y dejan tu cabello liso, manejable y con movimiento natural.",
    image: "alisado",
  },
  {
    id: "rizos",
    name: "Hidratación de rizos",
    text: "Nutrición profunda para definir, hidratar y realzar la forma natural de tus rizos y ondas.",
    image: "rizos",
  },
  {
    id: "canas",
    name: "Cubre Canas",
    text: "Cobertura pareja con color duradero y de aspecto natural, cuidando la salud de tu cabello.",
    image: "canas",
  },
];

export const steps = [
  { title: "Elige tu tratamiento", text: "Botox Capilar, Alisado, Hidratación de rizos o Cubre Canas." },
  { title: "Agenda tu hora", text: "Escoge el día y la hora que más te acomoden en el calendario online." },
  { title: "Recibe la dirección", text: "Te enviamos por WhatsApp la dirección exacta en Ñuñoa para tu cita." },
];

export const location = {
  eyebrow: "Ubicación",
  title: "Te esperamos en Ñuñoa",
  text: "Atendemos solo con hora agendada. Una vez que reservas, te escribimos por WhatsApp con la dirección exacta y los detalles de tu cita.",
};

export const closing = {
  title: "¿Lista para",
  titleEm: "ponerte guapa?",
  text: "Reserva tu hora en un par de minutos.",
};
