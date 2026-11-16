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
  bio: string;
  logros: string[];
  formacion: string;
};

/** Nodo Person para el schema. Eddie lleva el @id de eddieajalcrina.com para que buscadores e IAs lo traten como una sola entidad. */
export function personaSchema(p: Persona) {
  if (!p.web) return { "@type": "Person", name: p.nombre, jobTitle: p.cargo, sameAs: [p.linkedin] };
  return {
    "@type": "Person",
    "@id": `${p.web}/#person`,
    name: p.nombre,
    url: p.web,
    image: `${p.web}/eddie-ajalcrina.jpg`,
    jobTitle: p.cargo,
    sameAs: [p.web, p.linkedin, "https://eddieajalcrina.substack.com/", "https://biobusinessschool.org/autores/eddie-ajalcrina"],
  };
}

export const EQUIPO: Persona[] = [
  {
    nombre: "Eddie Ajalcriña",
    cargo: "CEO y cofundador",
    foco: "Estrategia, alianzas y relación con fondos",
    foto: "/img/eddie.jpg",
    linkedin: "https://www.linkedin.com/in/eddieajalcrina/",
    web: "https://eddieajalcrina.com",
    bio: "Lleva más de quince años como ejecutivo corporativo en ingredientes marinos y nutrición acuícola, cofundador de empresas y director independiente. Trabaja en las dos puntas de la cadena de valor, con productores de la Amazonía y con marcas, compradores e inversionistas globales.",
    logros: [
      "Participó en la estructuración de un green loan de USD 80 MM (Bank of America y Banco Mundial) en su etapa corporativa",
      "Coordinó el Programa Negocios Sostenibles y el Equipo Europa, Transición Circular de la Delegación de la Unión Europea en el Perú",
      "Ha articulado cadenas de valor amazónicas con marcas globales como Patagonia, Lacoste, Lululemon y Hugo Boss",
    ],
    formacion: "MBA (ESAN) y Maestría en Biocomercio y Desarrollo Sostenible (PUCP)",
  },
  {
    nombre: "Lorenzo Ortiz",
    cargo: "COO y cofundador",
    foco: "Operación del fondo, Bootcamp y plataforma",
    foto: "/img/lorenzo.jpg",
    linkedin: "https://www.linkedin.com/in/lorenzoortiz/",
    bio: "Pasó más de doce años en los grupos Breca y Gloria, en gerencia de operaciones y en proyectos de inversión e innovación.",
    logros: [
      "Integra el directorio del Grupo Cotton Nation y ha sido miembro independiente de directorios de otras empresas",
      "LATAM Fellow de Singularity University",
      "Coautor del Bio Business Playbook y del Playbook Circular LatAm",
    ],
    formacion: "Ingeniero industrial con posgrados en Finanzas y Business Analytics (Universidad del Pacífico, INCAE y MIT)",
  },
  {
    nombre: "Eduardo Mariños",
    cargo: "Director de Inversiones y Riesgo",
    foco: "Due diligence, comité de inversión y cartera",
    foto: "/img/eduardo.jpg",
    linkedin: "https://www.linkedin.com/in/eduardo-mari%C3%B1os-2aa467a6/",
    bio: "Más de ocho años en finanzas corporativas, crédito e inversión de impacto en América Latina. Originó y estructuró inversiones de deuda en empresas de impacto de Perú y Colombia para un fondo de impacto internacional, y gestionó carteras de crédito en banca corporativa y comercial.",
    logros: [
      "Más de 100 empresas evaluadas para inversión",
      "Cerca de USD 100 MM en operaciones de crédito aprobadas",
      "Estructuró un financiamiento garantizado a cinco años para una cadena de valor agrícola con más de 3.000 productores",
    ],
    formacion: "Economista (Universidad del Pacífico) y MBA (EUDE Business School)",
  },
];

/** Empresas del portafolio de Fondo de Impacto (confirmadas por el dueño el 16-11-2026; fuente: redesignlab.org/ventures). */
export const PORTAFOLIO = [
  { nombre: "Cotton Nation", que: "Algodón regenerativo amazónico" },
  { nombre: "Endemics", que: "Cosmética natural" },
  { nombre: "Rare by", que: "Suplementos de la biodiversidad" },
  { nombre: "GreenProd", que: "Bioinsumos de residuos de pesca artesanal" },
  { nombre: "Ecovive", que: "Alimentos saludables de la biodiversidad" },
];
