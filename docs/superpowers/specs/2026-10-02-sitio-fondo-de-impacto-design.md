# Sitio Fondo de Impacto · Fase 1 · Diseño

Fecha: 2 de octubre de 2026
Fuente visual: prototipo v13 (`../Prototipo/prototipo-fdi.html`, dirección C "Inmersiva") y artifact https://claude.ai/artifact/DyZFHBQMsvFHgDJCJ1P5Xc

## Objetivo

Reemplazar la landing actual del Investment Call en fondodeimpacto.pe por el sitio de la plataforma: empresas (Bootcamp, Pasaporte de Inversión, financiamiento directo), inversionistas y equipo. La landing del Call no se elimina: pasa a `/call-2026`, oculta.

## Alcance

**Fase 1 (este diseño)**
- Páginas: `/`, `/empresas`, `/bootcamp`, `/pasaporte`, `/inversionistas`, `/nosotros`, `/privacidad`, `/call-2026` (oculta).
- Buscador de fondos con reporte preliminar en pantalla y por correo.
- Formularios: buscador, postulación al Bootcamp, consultas por público (cooperativas, consultores, agencias y fondos) e interés en el Pasaporte.
- Captura de leads con el mismo patrón de redesignlab.org y Thousandfold: correo al equipo por Brevo y fila en Google Sheets.
- Política de privacidad estándar (Ley 29733 Perú y Ley 1581 Colombia).

**Fuera de alcance (Fase 2)**
- Pasaporte de Inversión completo (seis bloques, carga de archivos), teaser automático y FI Deal Room. Se diseña cuando llegue el formato del teaser.
- Ajustes de copy y legales de `/call-2026`: no es pública, no es urgente.

## Arquitectura

- Next.js 14 (App Router) sobre el repositorio existente `eajalcrina/fondo-de-impacto`, desplegado en Vercel. Rama `rediseno-2026`; el usuario sube la rama y Vercel genera la vista previa.
- Estilos: el CSS del prototipo pasa a `app/(site)/site.css` con las mismas clases y tokens (bosque, degradado, salvia claro, cobre, botones de 6 px). Tailwind se queda solo para la landing heredada del Call.
- Tipografía: Montserrat 300–700 con `next/font/google`.
- Grupos de rutas:
  - `app/(site)/…` con su layout (navegación, footer, CSS del sitio).
  - `app/call-2026/…` con el layout heredado (Tailwind) y `robots: noindex, nofollow`.
- Componentes de servidor por defecto; componentes de cliente solo donde hay interacción: navegación móvil y menú, slideshow del hero, anillos animados, revelado de texto y secciones, contadores, rangos, buscador, mapa de capital y formularios.

## Contenido y datos

- `lib/site.ts`: enlaces y textos compartidos.
  - Calendario de inversionistas: https://calendar.app.google/geMQwggAn3R4nqHt8. Se usa en Inversionistas, en "Solicitar acceso al portafolio" y en la consulta de agencias y fondos.
  - Calendario de empresas: https://calendar.app.google/Fetdonx9fkLQ6vUx8. Se usa en "Agendar reunión" y en el resto de llamados para empresas.
  - Correo: fondodeimpacto@redesignlab.org. Sin teléfono ni WhatsApp.
  - Equipo:
    - Eddie Ajalcriña, CEO y cofundador: https://www.linkedin.com/in/eddieajalcrina/
    - Lorenzo Ortiz, COO y cofundador: https://www.linkedin.com/in/lorenzoortiz/
    - Eduardo Mariños, Director de Inversiones y Riesgo: https://www.linkedin.com/in/eduardo-mari%C3%B1os-2aa467a6/
  - Fondo de Impacto no tiene LinkedIn propio; no se muestra.
  - Cohorte del Bootcamp: inicio el lunes 2 de noviembre de 2026, 15 cupos, sin precio publicado.
- `lib/fuentes.json`: base anonimizada de 178 fuentes de capital (tipo, países, sectores, ticket, llamada activa, foco en empresas). La genera `scripts/build_fuentes.py` desde `../Base Inversionistas/`. No incluye nombres.
- `lib/matching.ts`: lógica compartida de rangos, filtros y conteos. La usan el buscador, el mapa y los rangos del Home.
- Imágenes en `public/img` (fotos de Redesign Lab, Amazonía de Unsplash, Eduardo retocado) y logos en `public/brand` (extraídos del manual de marca 2025).

## Formularios y API

`POST /api/lead` con `{ form, data }`. Formularios válidos:

| form | Origen | Pestaña de Sheets | Correo al usuario |
|---|---|---|---|
| `buscador` | /pasaporte#buscador | Buscador | Sí: reporte preliminar con conteos y los dos CTA |
| `bootcamp` | /bootcamp#postular | Bootcamp | Confirmación de recepción |
| `consulta` | /bootcamp#otro-perfil (campo `publico`) | Consultas | No |
| `pasaporte` | Botón "Completar mi pasaporte" | Pasaporte | Confirmación: el equipo lo contacta para completarlo |

Funcionamiento:
- `lib/lead-notify.ts` replica el de redesignlab.org.
  - Correo al equipo por Brevo y fila en Google Sheets con una cuenta de servicio, en paralelo. La falla de un canal no bloquea al otro.
  - Responde error solo si fallan ambos.
  - El correo al usuario sale por Brevo y su falla no afecta la respuesta.
- Validación en servidor: campos obligatorios por formulario, formato de correo, consentimiento marcado y un campo trampa contra bots (honeypot).
- Variables de entorno: `BREVO_API_KEY`, `EMAIL_FROM`, `EMAIL_NOTIFY`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`.
- El reporte del buscador se calcula en el cliente para mostrarlo al instante y se recalcula en el servidor para el correo, con la misma `lib/matching.ts`.

## Comportamiento visual (dirección C)

- Hero del Home: slideshow de cinco fotos que cambia cada 6 s, con zoom lento, velo verde, contador y barra de progreso. En las demás páginas, una foto con zoom lento.
- Anillos del isotipo animados en canvas, solo cuando están visibles en pantalla.
- Cinturón de fotos bajo el hero del Home.
- Títulos que suben palabra por palabra.
- Secciones que entran al hacer scroll (solo las que están bajo el pliegue).
- Contadores en las cifras.
- Mosaico en duotono verde con parallax.
- Rangos que se rellenan con flecha en círculo.
- Todo respeta `prefers-reduced-motion`: sin animación, el contenido se muestra en su estado final.

## SEO y privacidad

- Metadatos y Open Graph por página.
- `sitemap.xml` y `robots.txt` excluyen `/call-2026`.
- Sin scripts de seguimiento.
- `/privacidad` define:
  - Responsable: Redesign Ventures SAC, Lima.
  - Datos que se recogen y finalidades.
  - Proveedores: Brevo, Google y Vercel.
  - Plazo de conservación.
  - Derechos ARCO y canal: fondodeimpacto@redesignlab.org.
  - Que no hay transferencia ni venta de datos sin consentimiento.
  - Que la web no usa cookies de seguimiento.

## Contenido por confirmar (se publica con marcador)

- Definición de los USD 80MM (nota del footer).
- Fecha de cierre de postulaciones al Bootcamp.
- Permisos de imagen de las personas en las fotos y licencia del fondo de la foto de Eduardo.
- Fuente del rango de tasas de 25 a 40% (tesis de Inversionistas).

## Verificación

- `npm run build` y `npm run lint` sin errores.
- Revisión en el navegador de cada página, en escritorio y móvil.
- Prueba del buscador y de cada formulario contra `/api/lead`. Sin credenciales, el endpoint responde 502 y la interfaz muestra el error. Con credenciales de prueba, se verifican el correo y la fila en Sheets.
- `/call-2026` responde con `noindex` y no aparece en el sitemap ni en la navegación.
