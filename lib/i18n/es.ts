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
    paises: ["Perú", "Colombia"],
  },
  nav: {
    principal: "Principal",
    menu: "Menú",
    empresas: "Empresas",
    inversionistas: "Inversionistas",
    portafolio: "Portafolio",
    nosotros: "Nosotros",
    fondo: "Fondo",
    agendar: "Agendar reunión",
    abrir: "Abrir menú",
    cerrar: "Cerrar menú",
    idioma: "Idioma",
    enPronto: "Versión en inglés en preparación",
    soluciones: [
      { href: "/bootcamp", t: "Bootcamp de Levantamiento de Capital", d: "Ocho semanas para salir a levantar capital" },
      { href: "/pasaporte", t: "Pasaporte de Inversión", d: "Un perfil para llegar a más de 50 fondos" },
      { href: "/empresas", t: "Financiamiento directo", d: "Para empresas con historial de repago" },
    ],
  },
  inicio: {
    meta: "Preparamos a empresas de impacto de América Latina para levantar capital y las presentamos a más de 50 fondos con el Bootcamp y el Pasaporte de Inversión.",
    heroe: {
      rotulo: "Capital de impacto en Perú y Colombia",
      titulo: "Capital para las empresas de impacto de América Latina",
      bajada: "Si tu empresa ya demostró tracción, te preparamos para levantar capital y te presentamos a los fondos que pueden financiarte.",
      cta: "Ver fondos para mi empresa",
      inversionista: "Soy inversionista",
      foto: "Río amazónico al atardecer con una canoa",
      bajar: "Ir al contenido",
    },
    empresas: {
      titulo: "Para empresas",
      bootcamp: { t: "Bootcamp de Levantamiento de Capital", href: "/bootcamp", foto: "/img/h17.jpg", alt: "Equipos de empresas trabajando en un taller" },
      cohorte: { rotulo: "Próxima cohorte", titulo: "¿Tu empresa está lista para levantar capital?", cta: "Postular al Bootcamp" },
      bloques: [
        { t: "Pasaporte de Inversión", href: "/pasaporte", foto: "/img/rl/mapa.jpg", alt: "Mano marcando un mapa del territorio" },
        { t: "Financiamiento directo", href: "/empresas", foto: "/img/rl/entrega-cosecha.jpg", alt: "Entrega de cosecha en el campo" },
        { t: "Buscador de fondos", href: "/pasaporte#buscador", foto: "/img/rl/cacao-manos.jpg", alt: "Mazorca de cacao abierta en manos de un productor" },
      ],
    },
    capital: {
      titulo: "¿Cuánto capital necesitas?",
      texto: "Elige un rango para descubrir las fuentes de capital de impacto adecuadas para tu empresa.",
    },
    cifras: {
      titulo: "Resultados desde 2021",
      items: [
        { icono: "red", mas: true, valor: "50", texto: "fondos de impacto en nuestra red" },
        { icono: "brote", mas: true, valor: "10", texto: "empresas en nuestro portafolio" },
        { icono: "alza", mas: false, valor: "USD\u00a02.7\u00a0MM", texto: "levantados para empresas acompañadas" },
        { icono: "barras", mas: false, valor: "USD\u00a026\u00a0MM", texto: "facturación del portafolio en 2025" },
      ],
    },
    inversionistas: {
      titulo: "Para inversionistas",
      bloque: { t: "Inversión paciente", href: "/inversionistas", foto: "/img/rl/cacao-arbol.jpg", alt: "Mazorca de cacao en un sistema agroforestal" },
      cita: "A muchas empresas rentables les falta un perfil que un comité pueda aprobar. Las preparamos, las acompañamos e invertimos en ellas.",
      firma: "Fondo de Impacto",
      cta: "Conocer la tesis",
    },
    portafolio: {
      titulo: "Portafolio",
      cta: "Ver el portafolio",
    },
    organizaciones: { titulo: "Organizaciones con las que hemos trabajado" },
  },
  portafolio: {
    meta: "Portafolio de Fondo de Impacto, con empresas como Cotton Nation, Endemics, Rare by, GreenProd y Ecovive. Facturó USD 26 MM en 2025, 28% más que en 2024.",
    heroe: {
      rotulo: "Portafolio",
      titulo: ["Empresas de impacto que ya ", "crecen", " con nuestro capital"],
      bajada: "Invertimos en empresas de la biodiversidad de América Latina que preparamos y acompañamos desde adentro.",
      cta: "Conocer la tesis",
      foto: "Copa de un árbol amazónico vista desde abajo",
    },
    tesis: {
      rotulo: "Tesis",
      titulo: "Resultados del portafolio",
      texto: "Invertimos en empresas con ventas, una cadena de valor en la biodiversidad y un equipo que conocemos desde la preparación.",
    },
    cifras: [
      { icono: "barras", mas: false, valor: "USD\u00a026\u00a0MM", texto: "facturación del portafolio en 2025" },
      { icono: "alza", mas: false, valor: "28%", texto: "crecimiento de la facturación frente a 2024" },
      { icono: "brote", mas: true, valor: "10", texto: "empresas en nuestro portafolio" },
    ],
    empresas: { rotulo: "Inversiones", titulo: "Algunas de las empresas más relevantes de nuestro portafolio" },
    cierre: { titulo: "¿Quieres ver el portafolio en detalle?", texto: "Compartimos métricas, estados financieros y la ronda activa en una conversación privada, bajo acuerdo de confidencialidad.", cta: "Agendar reunión" },
  },
  comun: {
    masDe: "más de",
    aliados: { cooperacion: "Cooperación internacional", academia: "Academia", redes: "Fondos y redes de impacto", publico: "Sector público" },
    rangos: {
      fuentes: (n: number) => (n === 1 ? "fuente" : "fuentes"),
      ir: "Ver fuentes",
      montos: [
        ["Hasta USD", "50K", ""],
        ["USD", "50K", "a 150K"],
        ["USD", "150K", "a 300K"],
        ["USD", "300K", "a 500K"],
        ["USD", "500K", "a 2\u00a0MM"],
        ["Más de USD", "2\u00a0MM", ""],
      ],
    },
  },
  pie: {
    empresas: "Empresas",
    fondo: "Fondo",
    contacto: "Contacto",
    bootcamp: "Bootcamp",
    pasaporte: "Pasaporte de Inversión",
    financiamiento: "Financiamiento directo",
    privacidad: "Política de privacidad",
    arriba: "Volver arriba",
    contactoCorto: "Contacto",
    derechos: (anio: number) => `© ${anio} Redesign Ventures SAC.`,
    legalOferta: "Este sitio es informativo y no constituye una oferta pública de valores ni una invitación a captar fondos del público.",
    legalPrivado: "Las oportunidades de inversión se presentan solo en conversaciones privadas, bajo acuerdo de confidencialidad.",
  },
};

export type Textos = typeof es;
