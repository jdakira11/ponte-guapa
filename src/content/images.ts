import logo from "@/assets/images/logo.webp";
import logoMark from "@/assets/images/logo-mark.webp";
import veronica from "@/assets/images/veronica.webp";
import alisado from "@/assets/images/servicio-alisado.webp";
import botox from "@/assets/images/servicio-botox.webp";
import canas from "@/assets/images/servicio-canas.webp";
import rizos from "@/assets/images/servicio-rizos.webp";

/** Todas las imágenes son material propio del cliente (tomadas de su web anterior). */
export const images = { logo, logoMark, veronica, alisado, botox, canas, rizos };

export type ImageKey = keyof typeof images;
