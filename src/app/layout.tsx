import type { Metadata, Viewport } from "next";
import { Jost, Parkinsans } from "next/font/google";
import { RevealObserver } from "@/components/RevealObserver";
import { getSiteUrl, siteConfig } from "@/config/site";
import "./globals.css";

// Títulos: Parkinsans (fuente variable 300–800, sin cursiva). Texto: Jost, cercana a la letra del logo.
const title = Parkinsans({ variable: "--font-title-face", subsets: ["latin"] });
const body = Jost({ variable: "--font-body-face", subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: `${siteConfig.name} · Botox Capilar, Alisados, Hidratación y Cubre Canas en Ñuñoa`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
    description: siteConfig.description,
    locale: "es_CL",
    type: "website",
    images: [{ url: "og.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
};

export const viewport: Viewport = { themeColor: "#fbf7f2" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CL" className={`${title.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
