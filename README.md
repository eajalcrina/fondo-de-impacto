# fondodeimpacto.pe

Sitio de Fondo de Impacto (Next.js 14, App Router). Desplegado en Vercel desde este repositorio.

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Home |
| `/empresas`, `/bootcamp`, `/pasaporte` | Soluciones para empresas (buscador de fondos en `/pasaporte#buscador`) |
| `/inversionistas`, `/nosotros`, `/privacidad` | Fondo, equipo y política de privacidad |
| `/call-2026` | Landing del Investment Call 2026. **Oculta**: noindex, fuera del sitemap y de la navegación |
| `/api/lead` | Recibe los formularios (buscador, bootcamp, consulta, pasaporte) |

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # pruebas de matching y leads (Vitest)
npm run build
```

## Formularios: Brevo + Google Sheets

Mismo patrón que redesignlab.org y Thousandfold (`lib/lead-notify.ts`): cada envío manda un correo al equipo por Brevo y agrega una fila en Google Sheets. El buscador, la postulación al Bootcamp y el pasaporte además envían un correo al usuario.

1. Crea una hoja de Google con cuatro pestañas: `Buscador`, `Bootcamp`, `Consultas` y `Pasaporte`.
2. Compártela con permiso de edición con el correo de la cuenta de servicio de Google (la misma de Redesign Lab sirve).
3. En Vercel → Settings → Environment Variables, configura las variables de `.env.example`:
   - `BREVO_API_KEY`, `EMAIL_FROM` (remitente verificado en Brevo) y `EMAIL_NOTIFY` (quién recibe los avisos).
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY` (en una línea, con `\n`) y `GOOGLE_SHEET_ID` (el ID en la URL de la hoja).
4. Vuelve a desplegar.

Sin variables, `/api/lead` responde 502 y el sitio avisa al usuario que escriba a fondodeimpacto@redesignlab.org.

Configuración actual (oct. 2026):

- Hoja de leads: `15xtqA5MejcKfHdUM3TyhO-4Q60dv9s-0WqBlMhOBKrI` («Fondo de Impacto · Leads web»).
- Brevo (cuenta Redesign Lab): remitente verificado «Fondo de Impacto <fondodeimpacto@redesignlab.org>», lista «FI - Leads web» (ID 9) y atributo de contacto `FDI_ORIGEN`.
- Pendientes, a cargo del equipo: la API key propia de Brevo (`BREVO_API_KEY`) y la cuenta de servicio de Google con su llave (`GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`), que se cargan en Vercel como variables sensibles.

## Medición: GTM + GA4

Mismo modelo que Circular Club: Google Tag Manager con Consent Mode v2 (`lib/consent.ts`, `components/site/Analytics.tsx`). La medición solo se activa si el visitante acepta el aviso.

- Contenedor GTM `GTM-5VNH9HT5` (cuenta «Redesign Lab»), variable `NEXT_PUBLIC_GTM_ID`.
- Propiedad GA4 «Fondo de Impacto · fondodeimpacto.pe» (cuenta «Eddie Ajalcriña - Redesign Lab»), ID de medición `G-EEQLR6X1WB`, zona horaria de Lima.
- Etiquetas: la etiqueta de Google carga en todas las páginas, y además hay tres eventos de GA4 con activadores de evento personalizado: `generate_lead` (con `form`), `cta_calendar` (con `location` y `calendario`) y `finder_report` (con `rubro`, `pais`, `tipo` y `rango`).
- La configuración del contenedor está en `../Marca/GTM/gtm-fondodeimpacto.json` y se importa con Administrador → Importar contenedor → Combinar.
- Cuando GA4 reciba los primeros `generate_lead` y `cta_calendar`, márcalos como eventos clave (Administrador → Eventos → estrella).

## Base de fuentes de capital

`lib/fuentes.json` es una versión anonimizada (sin nombres) de `../Base Inversionistas/`. Para actualizarla:

```bash
python3 scripts/build_fuentes.py
```
