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
  lead: "Botox Capilar, Alisados, Hidratación capilar y Cubre Canas con productos profesionales y atención personalizada, solo con hora agendada.",
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
    id: "hidratacion",
    name: "Hidratación capilar",
    text: "Nutrición profunda que devuelve humedad, suavidad y brillo a tu cabello, dejándolo sano y fácil de peinar.",
    image: "hidratacion",
  },
  {
    id: "canas",
    name: "Cubre Canas",
    text: "Cobertura pareja con color duradero y de aspecto natural, cuidando la salud de tu cabello.",
    image: "canas",
  },
];

export const steps = [
  { title: "Elige tu tratamiento", text: "Botox Capilar, Alisado, Hidratación capilar o Cubre Canas." },
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
