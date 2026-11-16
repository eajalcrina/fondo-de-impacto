# Reglas de diseño de fondodeimpacto.pe

Estado: **en curso** (16-11-2026). Camino visual: rediseño completo inspirado en fosterandpartners.com (reemplaza a B3 y al motivo diagonal), con la paleta de Fondo de Impacto. Informe de la referencia en la carpeta de trabajo de la sesión. Referencia: redesignlab.org (tipografía de la cuarta capa del rediseño, commit b1493d1).

Público: empresas de impacto de América Latina que ya demostraron tracción y buscan capital; en segundo lugar, fondos e inversionistas. Tono: fondo de impacto de primer nivel, de América Latina para el mundo. Sobrio, preciso y con datos.

## 1. Color
Paleta propia de Fondo de Impacto. Tokens en `app/(site)/estilos/tokens.css`; ningún color fuera de ellos.
- Lienzo petróleo `#0d1c19` y superficie `#18302b`: fondo oscuro (portada, pie, tarjetas oscuras). `--lienzo-superficie` solo para piezas sobre lienzo.
- Naranja `#c94e10` (hover `#a8410d`): acento, botón principal y cierre de cada página. Naranja claro `#f07a3e` sobre oscuro.
- Bosque `#123524`: texto y títulos sobre claro. Arena `#f4f2ed`: secciones `.tint` alternadas con blanco, nunca dos del mismo fondo seguidas.
- Texto secundario `#556259`. El gris `#8a958c` no se usa para texto.
- Logos de organizaciones en gris; al pasar el cursor recuperan su color original (MIT rojo y gris, Tec azul, Singularity degradado; los monocromos de origen quedan en negro).

## 2. Tipografía (congelada el 16-11-2026)
- Solo Open Sans 300, 400, 500 y 600, como la referencia.
- `.d1` 32 a 52 px, `.d2` 25 a 33 px (todo h2 de sección), `.d3` 21 px, `.h4` títulos de tarjeta, cuerpo 16/300, `.lead` 19/300, rótulo 16/500.
- Sin punto final en títulos. Espacio duro entre cifra y unidad.

## 3. Retícula y ritmo
- Márgenes de 24, 40 y 56 px; separación entre piezas de 24 px; encabezado fijo de 64 y 75 px.
- Orden de fondos: cabecera con foto, luego blanco y arena alternados, cierre `.final` naranja y pie petróleo.

## 4. Componentes
- Botones en píldora (radio 25). Principal naranja; el botón blanco se pinta naranja al pasar el cursor o al tocarlo. En cabecera y cierre: botón principal más enlace `.lnk`.
- Tarjetas con radio 5, sin barra superior de color. Chips, etiquetas y filtros en píldora.
- Cabeceras interiores con foto a sangre, velo petróleo y texto abajo a la izquierda; bajada de una oración.
- Pines del pie como aguja: círculo y palito.
- Tarjetas paralelas alineadas con `subgrid` (`.filas-5`).
- Sin estilos en línea salvo anchos dinámicos de barras.

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
- 16-11-2026: el dueño prefiere el camino B (Territorio). Pide dos derivados (B1 y B2) con referencia de beneficialreturns.com: una sola foto fija en el héroe con el texto a la derecha, tarjetas con foto y velo de color, cifras con pictogramas en color y fila de organizaciones con las que hemos trabajado.
- 16-11-2026: el terracota se acerca al naranja de esa referencia sin copiarlo. Propuesta: `#c0541c` (color primario histórico de Fondo de Impacto, 4,6:1 con blanco) para relleno y texto sobre claro, y `#e8875a` sobre bosque. Salvia profundo `#4a6b4e` como tercer color de panel.
- 16-11-2026: fotos sueltas nunca cuadradas, con un tratamiento propio (esquina cortada en B1, forma de hoja en B2). La foto de la comunidad se recorta para enfocar a las personas, sin la franja de tierra.
- 16-11-2026: se suma la página Portafolio, con datos de redesignlab.org (Cotton Nation, Endemics, Rare by, GreenProd, Ecovive; USD 26 MM de facturación del portafolio en 2025, 28% más que en 2024). Entra al menú como «Portafolio».
- 16-11-2026: rótulo del héroe de portada: «Capital de impacto en Perú y Colombia», como en la web anterior.
- 16-11-2026: logos de organizaciones a la misma altura (34 px; 50 px los cuadrados) y en un solo tono (escala de grises), con la disposición de la web anterior: cuatro columnas por grupo. Se quitaron los fondos blancos de PRODUCE y WWF.
- 16-11-2026: se mantiene el cinturón de fotos bajo el héroe de la web anterior (pedido del dueño; se detiene con movimiento reducido).
- 16-11-2026: en los flujos, diagramas propios con la paleta. Ningún texto redundante.
- 16-11-2026: los arcos punteados se quedan solo en las fotos (recorte anillo) y en las tarjetas del portafolio.
- 16-11-2026: ninguna autoexplicación ni sobreexplicación en todo el sitio («Es gratis y toma dos minutos», «Sin costo y sin compromiso» fuera).
- 16-11-2026: la sección previa al pie nunca comparte color con el pie. Los cierres de página van en naranja; la 404 va en arena.
- 16-11-2026: el pie solo lleva el aviso legal de oferta pública; sin la nota de cifras con asterisco. Las cifras de la portada van sin nota debajo.
- 16-11-2026: la ruta del capital se muestra como tres etapas numeradas sobre una línea, con dos destinos marcados con cuadrados (bosque y naranja).
- 16-11-2026: la próxima cohorte se destaca en una etiqueta bosque dentro del cierre.
- 16-11-2026 (segunda ronda): **motivo diagonal único de 6° en sentido «/»** (10,5 px de caída por cada 100 px; tokens `--corte` y `--corte-tan`). Va en el borde inferior de las fotos, la unión del héroe, el borde derecho de botones y barras, y los separadores del portafolio. Nunca en bandas a todo el ancho ni en contenedores de texto; sin radios, arcos ni chaflanes de 45°. Reemplaza al recorte anillo, a los arcos punteados y al cuadrado de esquina.
- 16-11-2026: héroe con doble diagonal (banda translúcida, filete naranja claro y panel). Excepción a «sin degradados»: solo el panel del héroe lleva facetas de corte duro en salvia al 10 y 18% para no verse plano.
- 16-11-2026: «¿Cuánto capital necesitas?» como escalera de barras proporcionales, sin tarjetas ni rótulo «Buscador de fondos».
- 16-11-2026: portafolio de la portada como franja tipográfica con separadores diagonales; «Resultados desde 2021» en banda bosque con cifras blancas y descripciones de una línea.
- 16-11-2026: próxima cohorte como línea de fecha editorial (rótulo y fecha en Newsreader) con filete blanco, sobre el título del cierre.
- 16-11-2026: encabezado fijo. Pie con pines de Perú y Colombia y el aviso legal en dos líneas.
- 16-11-2026 (tercera ronda, **reemplaza las decisiones visuales anteriores**): el dueño no quedó conforme con B3 y pide un rediseño completo inspirado en fosterandpartners.com: minimalista, fácil de navegar, textos limpios y fotos con texto encima.
  - Tipografía: una sola familia, **Open Sans** (300 para leer, 500 en títulos, 600 en enlaces destacados). Sin mayúsculas ni tracking decorativo. Cuatro tamaños de trabajo: 33, 21, 16 y 14 px (52 px solo en el héroe). Reemplaza a Newsreader y Schibsted Grotesk.
  - Color: paleta de Fondo de Impacto. Portada en bosque `#123524` con bloques de superficie `#1e4a34`; páginas internas claras; naranja solo para la acción principal y acentos.
  - Retícula fluida de 12 columnas, márgenes de 24 px (celular) y 56 px (escritorio), separación de 24 px.
  - Encabezado fijo que se oculta al bajar y vuelve al subir; logo, idioma, «Agendar reunión» y menú a pantalla completa (foto a la izquierda, enlaces grandes a la derecha).
  - Portada: foto a pantalla completa, secciones con un título y bloques de foto con el texto abajo sobre un velo, bloques de cita en superficie lisa. Zoom de 5% en las fotos al pasar el cursor.
  - Botones en píldora (radio 25 px) y botones redondos de 40 px con flecha. Tarjetas de listado: foto 3:2 y bloque arena con título y dato.
  - Pie mínimo con línea punteada: logo, pines de Perú y Colombia, volver arriba; enlaces y aviso legal.
  - Se retiran el motivo diagonal, los arcos, el cuadrado de esquina, el cinturón de fotos y el diagrama de la ruta del capital.
  - Fotos de redesignlab.org (ventures y héroes) para el portafolio y los bloques, en `public/img/rl/`.
- 16-11-2026: el lienzo de la portada, el encabezado y el pie pasan a **verde petróleo profundo `#0d1c19`** (17,5:1 con blanco), con superficie `#18302b`, más editorial y en la línea del gris casi negro de la referencia. El bosque `#123524` queda para texto y acentos en páginas claras.
- 16-11-2026: «¿Cuánto capital necesitas?» vuelve a tarjetas: monto grande, tope naranja, fuentes en naranja claro y flecha naranja; la tarjeta se llena de naranja al pasar el cursor.
- 16-11-2026: pasada de narrativa y voz sin IA sobre todos los textos, en la fase 3, cuando los textos pasen al archivo por idioma.
- 16-11-2026: `vercel.json` apaga las vistas previas automáticas de las ramas `claude/*`.
- 16-11-2026: el dueño pide ver la combinación que recomienda el asesor (B2 con el encabezado sólido y los dos botones de B1) como lámina B3, con la foto del río en el héroe.
- 16-11-2026: el acento se acerca más al naranja de la referencia. Naranja `#c94e10` (4,6:1 con blanco) para botón, bloques de color, banda de cierre, pictogramas y palabra clave sobre claro; naranja claro `#f07a3e` (5,7:1 sobre bosque) para la palabra clave sobre bosque. `#994215` queda para texto pequeño sobre claro. Reemplaza a la propuesta `#c0541c`.
- 16-11-2026: el dueño confirma que Cotton Nation, Endemics, Rare by, GreenProd y Ecovive también son inversiones de Fondo de Impacto. Se muestran todos los logos de organizaciones. Las fotos actuales se pueden usar: no hay problema de permisos.
- 16-11-2026: el encabezado se mantiene verde (no negro). Aprobado: bosque profundo `#123524` en lugar de `#132617` para encabezado y superficies oscuras (blanco 13,5:1; naranja claro 4,8:1).
- 16-11-2026 (reemplazada el mismo día): el dueño rechazó la textura de anillos de puntos en héroe, tarjetas, cierres y pie. Las superficies de color llevan como marca editorial un cuadrado sólido de 16 px (20 px en escritorio) en la esquina superior izquierda: naranja claro sobre bosque y salvia, bosque sobre naranja.
- 16-11-2026: se comparan cuatro recortes de foto (hoja, anillo, pendiente y ventana). Recomendado: anillo, que sale del isotipo. Elegido por el dueño: anillo, cuidando que el arco no corte caras.

## 8. Plantillas para contenido en serie
- Ninguna por ahora.

## 9. Estructura del código
- Archivo de tokens: `app/(site)/estilos/tokens.css`. Capas: `tokens, fundamento, componentes, paginas, utilidades` (el nombre `base` lo reserva Tailwind).
- Estilos por componente en `app/(site)/estilos/*.css`; `app/(site)/site.css` solo los importa.
- Textos por idioma: `lib/i18n/es.ts` (encabezado, pie, portada y portafolio; el resto de páginas pasa en la fase 4).
- Línea base al empezar (16-11-2026): 14 `!important` y 35 colores escritos a mano. Tras la fase 3: 0 `!important`; colores a mano solo en los correos (`lib/leads.ts`, `lib/lead-notify.ts`), con los valores de los tokens.
- Contenido que no se toca y se excluye de los barridos: `app/call-2026`, `components/call`, `public-mockups`, `lib/fuentes.json`, `docs`.

## 10. Estado del rediseño
- Sistema inspirado en fosterandpartners.com aplicado a todas las páginas (16-11-2026): portada, Portafolio, Empresas, Bootcamp, Pasaporte, Inversionistas, Nosotros, Privacidad y 404.
- Revisión de coherencia del asesor Fable: 12 hallazgos aplicados (velo de cabecera, cifras, fichas, rastros verdes en formularios, jerarquía de h2, ritmo de fondos, voz y nombres).
- Pendiente: pasar los textos de las páginas internas a `lib/i18n/es.ts` antes de la versión en inglés; imágenes para compartir por página.
- Esperando decisión del dueño: fuente de «ronda activa» y de «25 y 40% anual»; datos por empresa del portafolio; color del encabezado interior (blanco o petróleo).
