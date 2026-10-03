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

## Base de fuentes de capital

`lib/fuentes.json` es una versión anonimizada (sin nombres) de `../Base Inversionistas/`. Para actualizarla:

```bash
python3 scripts/build_fuentes.py
```
