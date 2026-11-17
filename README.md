# Ponte Guapa Estética · Web

**Vista previa para el cliente:** https://jdakira11.github.io/ponte-guapa/
**Web en producción (actual, versión anterior):** https://ponte-guapa.netlify.app — se reemplazará por esta versión cuando se apruebe.

> Sitio estático de una página. Las reservas se hacen en Google Calendar; no hay formularios ni backend.

## Brief
- Negocio: estética capilar de Verónica Aguilar en Ñuñoa, Santiago (real).
- Objetivo: que la clienta agende hora en el calendario online.
- Cambio respecto a la web anterior: **ya no es servicio a domicilio**. Se atiende con hora agendada en Ñuñoa.
  La dirección exacta **no se publica**: se envía por WhatsApp a quien agenda.
- Agenda: https://calendar.app.google/t8JLL51G64FRKpMr9
- Contacto: WhatsApp +56 9 3087 3468 · Instagram @ponteguapa.va
- Idioma / moneda: es-CL / CLP

## Dirección de arte
- Paleta (del logo): crema `#fbf7f2` / `#f3eae1`, café topo `#6f5b4a`, oscuro `#4d3f35`, beige `#dcc6b1`.
- Tipografías (2): Parkinsans (títulos, sin cursiva: los realces van en color) + Jost (texto, cercana a la letra del logo).
- Motivo gráfico: arco (curva de la «P» del logo) en la foto de portada.
- Tono: cercano, cuidado, simple. Pocas secciones, mucho aire.
- Fotos: material propio del cliente (web anterior).

## Desarrollo
```bash
npm install
npm run dev              # http://localhost:3000
npm run deploy:pages     # publica la vista previa en GitHub Pages
```
- Datos del negocio (agenda, WhatsApp, horario…): `src/config/site.ts`
- Textos y servicios: `src/content/copy.ts`
- Imágenes: `src/assets/images/` (registro en `src/content/images.ts`)

### Publicar en Netlify (cuando se apruebe)
`netlify.toml` ya define la compilación (`npm run build`) y la carpeta publicada (`out/`, en la raíz del dominio).
- Opción A: en Netlify, conectar el sitio *ponte-guapa* a este repositorio (Site configuration → Build & deploy → Link repository). Cada `git push` a `main` publica.
- Opción B (manual): `npm run build` y arrastrar la carpeta `out/` a Deploys en Netlify.

## Pendiente del cliente
- [ ] Confirmar horario (la web anterior decía «Todos los días, 9:00 a 20:00 hrs»).
- [ ] ¿Precios o duración de cada tratamiento? (hoy no se muestran).

## Historial de entregas
| Fecha | Cambios |
|---|---|
| 2026-11-17 | Primera versión: rediseño elegante, atención con hora en Ñuñoa (sin domicilio), dirección por WhatsApp |
| 2026-11-17 | Títulos con Nata Sans (Google Fonts) |
| 2026-11-17 | Títulos con Parkinsans (Google Fonts), en lugar de Nata Sans |
| 2026-11-17 | Texto blanco al pasar el mouse en los botones con borde (Ver servicios, WhatsApp, Instagram) |
