/**
 * Textos visibles del sitio en español. El inglés tendrá un archivo con las mismas claves (en.ts)
 * cuando la versión en español quede definitiva. Los componentes compartidos leen de aquí.
 * Reglas de voz: docs/reglas-diseno.md y la skill voz-sin-ia.
 */
export const es = {
  marca: {
    nombre: "Fondo de Impacto",
    firma: "by Redesign Lab",
    alt: "Fondo de Impacto, by Redesign Lab",
    sede: "Desde Lima, Perú, y Bogotá, Colombia",
  },
  nav: {
    principal: "Principal",
    empresas: "Empresas",
    inversionistas: "Inversionistas",
    portafolio: "Portafolio",
    nosotros: "Nosotros",
    fondo: "Fondo",
    agendar: "Agendar reunión",
    abrir: "Abrir menú",
    cerrar: "Cerrar menú",
    idioma: "Idioma",
    enPronto: "La versión en inglés llega pronto",
    soluciones: [
      { href: "/bootcamp", t: "Bootcamp de Levantamiento de Capital", d: "Ocho semanas para salir a levantar capital" },
      { href: "/pasaporte", t: "Pasaporte de Inversión", d: "Un perfil para llegar a más de 50 fondos" },
      { href: "/empresas", t: "Financiamiento directo", d: "Para empresas con historial de repago" },
    ],
  },
  inicio: {
    meta: "Preparamos a empresas de impacto de América Latina para levantar capital y las presentamos a más de 50 fondos. Bootcamp, Pasaporte de Inversión y financiamiento directo.",
    heroe: {
      rotulo: "Capital de impacto en Perú y Colombia",
      titulo: ["Capital para las ", "empresas de impacto", " de América Latina"],
      bajada: "Si tu empresa ya demostró tracción, te preparamos para levantar capital y te presentamos a los fondos que pueden financiarte.",
      cta: "Ver fondos para mi empresa",
      inversionista: "Soy inversionista",
      foto: "Río amazónico al atardecer con una canoa",
    },
    trabajo: {
      rotulo: "Cómo trabajamos",
      titulo: ["Tres formas de llegar al ", "capital"],
      tarjetas: [
        { clase: "salvia", rotulo: "Para empresas", titulo: "Bootcamp de Levantamiento de Capital", texto: "Ocho semanas sobre tu propia empresa. Al final, presentas ante fondos aliados.", cta: "Postular al Bootcamp", href: "/bootcamp", foto: "/img/h17.jpg", alt: "Equipos de empresas trabajando en un taller", pos: "50% 50%" },
        { clase: "", rotulo: "Para empresas", titulo: "Pasaporte de Inversión", texto: "Un solo perfil para llegar a más de 50 fondos. Si tu empresa ya tiene historial de repago, puedes pedir Financiamiento directo.", cta: "Ver fondos para mi empresa", href: "/pasaporte", foto: "/img/h16.jpg", alt: "Mano marcando un mapa del territorio", pos: "60% 60%" },
        { clase: "naranja", rotulo: "Para inversionistas", titulo: "Inversión paciente", texto: "Invertimos en empresas que preparamos y acompañamos, con due diligence financiero y ESG y reporte mensual.", cta: "Conocer la tesis", href: "/inversionistas", foto: "/img/h01.jpg", alt: "Mazorca de cacao en un sistema agroforestal", pos: "50% 40%" },
      ],
    },
    cifras: {
      titulo: ["", "Capital", " que ya llegó a las empresas"],
      items: [
        { icono: "red", mas: true, valor: "50", texto: "fondos de impacto en nuestra red" },
        { icono: "brote", mas: true, valor: "10", texto: "empresas invertidas en América Latina" },
        { icono: "alza", mas: false, valor: "USD\u00a02.7\u00a0MM", texto: "levantados para empresas acompañadas: 1.5 en deuda y 1.2 no reembolsables" },
        { icono: "barras", mas: false, valor: "USD\u00a026\u00a0MM", texto: "facturación del portafolio en 2025, 28% más que en 2024" },
      ],
    },
    rangos: {
      rotulo: "Buscador de fondos",
      titulo: "¿Cuánto capital necesitas?",
      texto: "Elige un rango y te mostramos cuántas fuentes de capital de impacto calzan con tu empresa. Es gratis y toma dos minutos.",
    },
    porQue: {
      rotulo: "Por qué existimos",
      titulo: ["A muchas empresas rentables les falta un perfil que un ", "comité", " pueda aprobar"],
      texto: "Conocemos a la empresa por dentro y sabemos lo que exige quien invierte. Por eso preparamos y también invertimos.",
      foto: "Comunidad reunida frente a su centro de acopio",
    },
    proceso: {
      rotulo: "Cómo funciona",
      titulo: "De la preparación a la inversión",
      etapas: [
        { k: "Originación", t: "Empresas acompañadas por Redesign Lab", d: "También recibimos empresas referidas por nuestra red de fondos." },
        { k: "Preparación", t: "Bootcamp de Levantamiento de Capital", d: "Ocho semanas con nuestra metodología propia." },
      ],
      ruta: { k: "Ruta de capital", a: { t: "Red de más de 50 fondos", d: "Fondos con tesis compatible, banca de desarrollo y cooperación." }, b: { t: "Financiamiento de Fondo de Impacto", d: "Capital privado para empresas con historial validado." } },
    },
    portafolio: {
      rotulo: "Portafolio",
      titulo: ["Empresas de la ", "biodiversidad", " que ya venden"],
      cta: "Ver el portafolio",
    },
    equipo: { rotulo: "Equipo", titulo: "Estrategia, operación e inversión en un mismo equipo", cta: "Conocer al equipo" },
    organizaciones: { rotulo: "Trayectoria", titulo: "Organizaciones con las que hemos trabajado" },
    cierre: { rotuloPrefijo: "Próxima cohorte: ", titulo: "¿Tu empresa está lista para levantar capital?", cta: "Postular al Bootcamp" },
  },
  portafolio: {
    meta: "Portafolio de Fondo de Impacto: Cotton Nation, Endemics, Rare by, GreenProd y Ecovive. Facturaron USD 26 MM en 2025, 28% más que en 2024.",
    heroe: {
      rotulo: "Portafolio",
      titulo: ["Empresas de impacto que ya ", "crecen", " con nuestro capital"],
      bajada: "Invertimos en empresas de la biodiversidad de América Latina que preparamos y acompañamos desde adentro.",
      cta: "Conocer la tesis",
      foto: "Mazorca de cacao abierta en manos de un productor",
    },
    cifras: [
      { icono: "barras", mas: false, valor: "USD\u00a026\u00a0MM", texto: "facturación del portafolio en 2025, 28% más que en 2024" },
      { icono: "brote", mas: true, valor: "10", texto: "empresas invertidas en América Latina" },
      { icono: "alza", mas: false, valor: "USD\u00a02.7\u00a0MM", texto: "levantados para empresas acompañadas: 1.5 en deuda y 1.2 no reembolsables" },
      { icono: "red", mas: true, valor: "120", texto: "comunidades con impacto directo" },
    ],
    empresas: { rotulo: "Empresas", titulo: "Del algodón amazónico a los bioinsumos" },
    cierre: { titulo: "¿Quieres ver el portafolio en detalle?", texto: "Compartimos métricas, estados financieros y la ronda activa en una conversación privada, bajo acuerdo de confidencialidad.", cta: "Agendar reunión" },
  },
  pie: {
    empresas: "Empresas",
    fondo: "Fondo",
    contacto: "Contacto",
    bootcamp: "Bootcamp",
    pasaporte: "Pasaporte de Inversión",
    financiamiento: "Financiamiento directo",
    privacidad: "Política de privacidad",
    idiomas: "Español / English",
  },
};

export type Textos = typeof es;
