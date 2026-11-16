# Reglas de diseño de fondodeimpacto.pe

Estado: **en curso** (16-11-2026). Camino visual: por elegir entre A, B y C. Referencia: redesignlab.org (tipografía de la cuarta capa del rediseño, commit b1493d1).

Público: empresas de impacto de América Latina que ya demostraron tracción y buscan capital; en segundo lugar, fondos e inversionistas. Tono: fondo de impacto de primer nivel, de América Latina para el mundo. Sobrio, preciso y con datos.

## 1. Color
Paleta propia de Fondo de Impacto. Se permiten variantes de verde y de terracota; ningún color fuera de esa familia sin preguntar.
- Bosque `#132617`: color oscuro de marca, un solo tono, con texto blanco encima. Sin degradados.
- Terracota `#994215`: botón principal y palabra clave sobre fondo claro (6,6:1 sobre blanco).
- Terracota claro `#c7a28c`: palabra clave y acentos sobre bosque.
- Salvia `#7ca07f`: líneas, puntos y marcas de diagrama.
- Salvia claro `#f1f5f1` y arena `#f4f2ed`: bloques alternos.
- Texto secundario `#556259` (6,4:1 sobre blanco). El gris `#8a958c` no se usa para texto: no pasa el contraste.
- El logo PNG mide `#131e16`; el CSS manda con `#132617` (diferencia mínima, sin efecto visible).

## 2. Tipografía (congelada el 16-11-2026)
- Titulares (H1, H2, títulos de tarjeta), cifras grandes y citas: Newsreader 400, sin cursiva, `opsz` 72, cifras *lining*.
- Texto, subtítulos, rótulos, menú y botones: Schibsted Grotesk 400 (texto), 500 (rótulos y números), 600 (subtítulos y nombres de tarjeta), 700 (logo). Cifras tabulares.
- Sin monoespaciada. Escala de redesignlab.org: `.h-display` 44 a 84 px, `.h-hero` 40 a 62, `.h-section` 30 a 42, `.h-card` 26 a 34, `.h-sub` 20 a 24, `.lead` 17 a 19, `.body` 15 a 16, `.small` 13 a 14, `.label` 13 a 14, `.stat-lg` hasta 52 px.
- Signo «+» de las cifras en la sans, al 72%, subido 0,12em.
- `text-wrap: balance` en títulos y `pretty` en párrafos. Espacio duro entre cifra y unidad.
- Se pueden cambiar tipografías secundarias si el camino lo pide; Newsreader queda fija.

## 3. Retícula y ritmo
- Ancho máximo 1280 px de contenido, márgenes de 20 px en celular y 80 px en escritorio, 12 columnas, ritmo en múltiplos de 8.

## 4. Componentes
- Rótulos sin mayúsculas sostenidas: mayúscula solo inicial, Schibsted 500, con número en terracota cuando la sección es numerada.
- Palabra clave: solo color (terracota sobre claro, terracota claro sobre bosque), 1 a 3 palabras, solo donde haga falta.
- Selector de idioma ES / EN en el encabezado desde el diseño, aunque el inglés llegue después.

## 5. Imágenes y diagramas
- Fotos propias de Redesign Lab y de la Amazonía (licencia Unsplash). Cada foto acompaña su tema.
- Pendiente: permisos de imagen de las personas en las fotos.

## 6. Nombres y estilo
- Fondo de Impacto, Redesign Lab, Bootcamp de Levantamiento de Capital, Pasaporte de Inversión, Financiamiento directo, empresas de impacto. Firma «by Redesign Lab».
- Menú: Empresas (Bootcamp, Pasaporte de Inversión, Financiamiento directo), Inversionistas, Nosotros y el botón «Agendar reunión».
- Cifras: millones como «USD 1.5 MM» (punto decimal, espacio duro); miles en la prosa como «USD 300 mil»; precios exactos con coma de miles («USD 1,800»); rangos compactos como «50K a 150K», sin raya. Porcentajes sin espacio («28%»).
- Títulos sin punto final, también en metadatos e imágenes para compartir.
- Tuteo siempre.

## 7. Decisiones del dueño
- Congeladas en la fase 0 (16-11-2026):
  - Tipografía Newsreader + Schibsted Grotesk.
  - Paleta de Fondo de Impacto como base, con variantes de verde y terracota.
  - Firma «by Redesign Lab»; el logo puede recrearse manteniendo su forma.
  - Nombres oficiales y menú actuales confirmados.
  - Formato de cifras unificado (sección 6); cualquier otra inconsistencia se unifica.
  - Textos: se define la mejor forma de contarlos; títulos sin punto final.
  - Idiomas: español primero. El inglés se crea cuando la versión en español sea definitiva; el diseño prevé el selector desde ahora.
  - Forma y movimiento: libres, definidos por el camino visual. El sitio debe verse distinto al actual, con animaciones.
  - Celular de revisión: iPhone 15 (393 px); el barrido cubre 360, 390 y 393 px.
  - SEO, GEO e imágenes para compartir optimizadas en todas las páginas.
  - Lorenzo Ortiz revisa y dice «publícalo» en esta sesión. Producción se despliega desde `main` con GitHub Actions.
- 16-11-2026: se exploran tres caminos visuales en Claude Design (https://claude.ai/artifact/KuKr26i7QbA6XDYDBLNg1X).

## 8. Plantillas para contenido en serie
- Ninguna por ahora.

## 9. Estructura del código
- Archivo de tokens: por crear en la fase 3. Hoy los tokens viven en `app/(site)/site.css`.
- Textos por idioma: por crear en la fase 3 (`lib/i18n/es.ts`).
- Línea base al empezar (16-11-2026): 14 `!important` y 35 colores escritos a mano. Solo puede bajar.
- Contenido que no se toca y se excluye de los barridos: `app/call-2026`, `components/call`, `public-mockups`, `lib/fuentes.json`, `docs`.

## 10. Estado del rediseño
- Ciclo con el dueño: preparación, fase 2 (caminos visuales).
- Cerrado: fase 0 (cuestionario) y fase 1 (diagnóstico).
- Diagnóstico del sitio actual: 31 títulos y etiquetas con punto final, rangos con raya, rótulos en mayúsculas, gris de 2,6:1, radios de 2 a 14 px mezclados, carrusel y contadores, 7 anchos fijos fuera de `@media`.
- Esperando decisión del dueño: camino visual.
