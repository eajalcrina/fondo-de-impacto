export const SITE = {
  url: "https://fondodeimpacto.pe",
  email: "fondodeimpacto@redesignlab.org",
  calInversionistas: "https://calendar.app.google/geMQwggAn3R4nqHt8",
  calEmpresas: "https://calendar.app.google/Fetdonx9fkLQ6vUx8",
  cohorte: {
    nombre: "Cohorte febrero 2027",
    mes: "febrero",
    inicio: "Lunes 1 de febrero de 2027",
    corto: "Lun 1 feb 2027",
    cupos: 15,
    precio: "USD 1,800",
    precioAnticipado: "USD 1,450",
    fechaAnticipado: "15 de diciembre de 2026",
  },
  /** La misma cohorte en inglés. */
  cohorteEn: {
    nombre: "February 2027 cohort",
    mes: "February",
    inicio: "Monday, February 1, 2027",
    corto: "Mon, Feb 1, 2027",
    fechaAnticipado: "December 15, 2026",
  },
  /** Plazo de respuesta que prometen los formularios. */
  respuesta: "en menos de 24 horas",
};

export type Persona = {
  nombre: string;
  cargo: string;
  foco: string;
  foto: string;
  linkedin: string;
  /** Web personal; con ella el schema usa el mismo @id que el resto de sus webs. */
  web?: string;
  /** Foto y perfiles que publica su web, para que buscadores e IAs lo traten como una sola entidad. */
  imagenWeb?: string;
  perfiles?: string[];
  bio: string;
  logros: string[];
  formacion: string;
  /** Versión en inglés de los textos visibles. */
  en: { cargo: string; foco: string; bio: string; logros: string[]; formacion: string };
};

/** Nodo Person para el schema. Eddie lleva el @id de eddieajalcrina.com para que buscadores e IAs lo traten como una sola entidad. */
export function personaSchema(p: Persona) {
  if (!p.web) return { "@type": "Person", name: p.nombre, jobTitle: p.cargo, sameAs: [p.linkedin] };
  return {
    "@type": "Person",
    "@id": `${p.web}/#person`,
    name: p.nombre,
    url: p.web,
    ...(p.imagenWeb ? { image: p.imagenWeb } : {}),
    jobTitle: p.cargo,
    sameAs: [p.web, p.linkedin, ...(p.perfiles ?? [])],
  };
}

export const EQUIPO: Persona[] = [
  {
    nombre: "Eddie Ajalcriña",
    cargo: "CEO y co-fundador",
    foco: "Estrategia, alianzas y relación con fondos",
    foto: "/img/equipo/eddie.jpg",
    linkedin: "https://www.linkedin.com/in/eddieajalcrina/",
    web: "https://eddieajalcrina.com",
    imagenWeb: "https://eddieajalcrina.com/eddie-ajalcrina.jpg",
    perfiles: ["https://eddieajalcrina.substack.com/", "https://biobusinessschool.org/autores/eddie-ajalcrina"],
    bio: "Lleva más de quince años como ejecutivo corporativo en ingredientes marinos y nutrición acuícola, co-fundador de empresas y director independiente. Trabaja en las dos puntas de la cadena de valor, con productores de la Amazonía y con marcas, compradores e inversionistas globales.",
    logros: [
      "Participó en la estructuración de un green loan de USD 80 MM (Bank of America y Banco Mundial) en su etapa corporativa",
      "Coordinó el Programa Negocios Sostenibles y el Equipo Europa, Transición Circular de la Delegación de la Unión Europea en el Perú",
      "Ha articulado cadenas de valor amazónicas con marcas globales como Patagonia, Lacoste, Lululemon y Hugo Boss",
    ],
    formacion: "MBA (ESAN) y Maestría en Biocomercio y Desarrollo Sostenible (PUCP)",
    en: {
      cargo: "CEO and co-founder",
      foco: "Strategy, partnerships and fund relations",
      bio: "He has spent more than fifteen years as a corporate executive in marine ingredients and aquaculture nutrition, and is a company co-founder and independent director. He works at both ends of the value chain, with producers in the Amazon and with global brands, buyers and investors.",
      logros: [
        "Took part in structuring a USD 80 M green loan (Bank of America and World Bank) during his corporate career",
        "Coordinated the Sustainable Business Program and Team Europe, Circular Transition, at the Delegation of the European Union in Peru",
        "Has connected Amazon value chains with global brands such as Patagonia, Lacoste, Lululemon and Hugo Boss",
      ],
      formacion: "MBA (ESAN) and Master’s in Biotrade and Sustainable Development (PUCP)",
    },
  },
  {
    nombre: "Lorenzo Ortiz",
    cargo: "COO y co-fundador",
    foco: "Operación del fondo, Bootcamp y plataforma",
    foto: "/img/equipo/lorenzo.jpg",
    linkedin: "https://www.linkedin.com/in/lorenzoortiz/",
    web: "https://lorenzoortiz.co",
    bio: "Más de 13 años en operaciones industriales, proyectos de inversión y bionegocios, con una trayectoria en los grupos Breca y Gloria y como COO de Cotton Nation y Neofibers. Hoy es Technical Lead de Impact Investing de Swisscontact en Colombia y ha acompañado a más de 100 organizaciones en su preparación para la inversión.",
    logros: [
      "Ha evaluado USD 85 MM de CAPEX industrial en proyectos de 7 países",
      "Integra el directorio del Grupo Cotton Nation y el Consejo CEIBA",
      "Miembro del Fiber & Materials Global Committee de la Regenerative Organic Alliance y LATAM Fellow de Singularity University",
      "Coautor del Bio Business Playbook y del Playbook Circular LatAm",
    ],
    formacion: "Ingeniero industrial con posgrados en Finanzas y Business Analytics (Universidad del Pacífico, INCAE y MIT)",
    en: {
      cargo: "COO and co-founder",
      foco: "Fund operations, Bootcamp and platform",
      bio: "He has more than 13 years of experience in industrial operations, investment projects and biobusiness, at the Breca and Gloria groups and as COO of Cotton Nation and Neofibers. He is currently Technical Lead for Impact Investing at Swisscontact in Colombia and has supported more than 100 organizations on investment readiness.",
      logros: [
        "Has assessed USD 85 M of industrial CAPEX in projects across 7 countries",
        "Board member of Grupo Cotton Nation and member of the CEIBA Council",
        "Member of the Fiber & Materials Global Committee of the Regenerative Organic Alliance and LATAM Fellow at Singularity University",
        "Co-author of the Bio Business Playbook and the Playbook Circular LatAm",
      ],
      formacion: "Industrial engineer with graduate studies in Finance and Business Analytics (Universidad del Pacífico, INCAE and MIT)",
    },
  },
  {
    nombre: "Eduardo Mariños",
    cargo: "Director de Inversiones y Riesgo",
    foco: "Due diligence, comité de inversión y cartera",
    foto: "/img/equipo/eduardo.jpg",
    linkedin: "https://www.linkedin.com/in/eduardo-mari%C3%B1os-2aa467a6/",
    bio: "Más de ocho años en finanzas corporativas, crédito e inversión de impacto en América Latina. Originó y estructuró inversiones de deuda en empresas de impacto de Perú y Colombia para un fondo de impacto internacional, y gestionó carteras de crédito en banca corporativa y comercial.",
    logros: [
      "Más de 100 empresas evaluadas para inversión",
      "Cerca de USD 100 MM en operaciones de crédito aprobadas",
      "Estructuró un financiamiento garantizado a cinco años para una cadena de valor agrícola con más de 3,000 productores",
    ],
    formacion: "Economista (Universidad del Pacífico) y MBA (EUDE Business School)",
    en: {
      cargo: "Director of Investments and Risk",
      foco: "Due diligence, investment committee and portfolio",
      bio: "More than eight years in corporate finance, credit and impact investing in Latin America. He originated and structured debt investments in impact companies in Peru and Colombia for an international impact fund, and managed credit portfolios in corporate and commercial banking.",
      logros: [
        "More than 100 companies assessed for investment",
        "Close to USD 100 M in approved loans",
        "Structured a five-year guaranteed financing for an agricultural value chain with more than 3,000 producers",
      ],
      formacion: "Economist (Universidad del Pacífico) and MBA (EUDE Business School)",
    },
  },
];

/** Empresas del portafolio de Fondo de Impacto (confirmadas por el dueño el 16-11-2026; fuente: redesignlab.org/ventures). */
export const PORTAFOLIO = [
  { nombre: "Cotton Nation", foto: "/img/rl/cotton-nation.jpg", que: "Algodón regenerativo amazónico", queEn: "Regenerative Amazon cotton" },
  { nombre: "Endemics", foto: "/img/rl/endemics.jpg", que: "Cosmética natural", queEn: "Natural cosmetics" },
  { nombre: "Rare by", foto: "/img/rl/rare-by.jpg", que: "Suplementos de la biodiversidad", queEn: "Biodiversity-based supplements" },
  { nombre: "GreenProd", foto: "/img/rl/greenprod.jpg", que: "Bioinsumos de residuos de pesca artesanal", queEn: "Bio-inputs from artisanal fishing waste" },
  { nombre: "Ecovive", foto: "/img/rl/ecovive.jpg", que: "Alimentos saludables de la biodiversidad", queEn: "Healthy foods from biodiversity" },
];
