# Reglas de diseño de fondodeimpacto.pe

Estado: **en curso** (16-11-2026). Camino visual: B3 (B2 con el encabezado y los botones de B1). Referencia: redesignlab.org (tipografía de la cuarta capa del rediseño, commit b1493d1).

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
- Ciclo con el dueño: 1 (camino y piloto). Fase en curso: 3, piloto en código.
- Cerrado: fases 0, 1 y 2. Camino B3 con recorte anillo, verde bosque profundo con textura y naranja.
- Piloto: sistema nuevo aplicado a todo el sitio; portada y Portafolio rediseñadas; encabezado, pie, logos y 404 nuevos.
- Pendiente (fase 4): rediseñar Empresas, Bootcamp, Pasaporte, Inversionistas, Nosotros y Privacidad con el sistema; pasar sus textos a `lib/i18n/es.ts` con la pasada de voz; imágenes para compartir por página; fila desalineada en /empresas.
- Revisión del asesor sobre el piloto: 27 hallazgos; corregidos los de orden de la portada, textos redundantes, cifras, logos, diagrama de la ruta, anillos, selector de idioma en celular y estilos en línea.
- Línea base de capturas: carpeta de trabajo de la sesión (16-11-2026), 9 rutas en escritorio y celular.
- Ronda de pedidos sobre el piloto (16-11-2026) aplicada: marca de esquina, cierres en naranja, ruta del capital, cohorte destacada, auditoría de voz del asesor.
- Última publicación: 16-11-2026, commit 8a49b70 (piloto). En vivo tras 60 s; marcador «Preparamos, conectamos e»; Portafolio, cohorte y pie sin nota comprobados; imágenes para compartir con 200 en producción.
- Esperando decisión del dueño: comentarios sobre el piloto en vivo; datos por empresa del portafolio (país, año, instrumento); fuente de «+120 comunidades»; recrear el logo con la firma «by Redesign Lab».
