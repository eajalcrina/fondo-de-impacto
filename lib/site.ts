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
  bio: string;
  logros: string[];
  formacion: string;
};

export const EQUIPO: Persona[] = [
  {
    nombre: "Eddie Ajalcriña",
    cargo: "CEO y cofundador",
    foco: "Estrategia, alianzas y relación con fondos",
    foto: "/img/eddie.jpg",
    linkedin: "https://www.linkedin.com/in/eddieajalcrina/",
    bio: "Lleva más de quince años demostrando que sostenibilidad y rentabilidad son la misma apuesta: como ejecutivo corporativo en ingredientes marinos y nutrición acuícola, como cofundador de empresas y como director independiente. Trabaja en las dos puntas de la cadena de valor, con productores de la Amazonía y con marcas, compradores e inversionistas globales. En Fondo de Impacto lidera la estrategia y la relación con fondos de impacto, agencias de cooperación e inversionistas.",
    logros: [
      "Participó en la estructuración de un green loan de USD 80M (Bank of America y Banco Mundial) en su etapa corporativa",
      "Coordinó el Programa Negocios Sostenibles y el Equipo Europa – Transición Circular de la Delegación de la Unión Europea en el Perú",
      "Ha articulado cadenas de valor amazónicas con marcas globales como Patagonia, Lacoste, Lululemon y Hugo Boss",
    ],
    formacion: "MBA (ESAN) · Maestría en Biocomercio y Desarrollo Sostenible (PUCP)",
  },
  {
    nombre: "Lorenzo Ortiz",
    cargo: "COO y cofundador",
    foco: "Operación del fondo, Bootcamp y plataforma",
    foto: "/img/lorenzo.jpg",
    linkedin: "https://www.linkedin.com/in/lorenzoortiz/",
    bio: "Llegó al ecosistema de impacto desde las operaciones de los grupos Breca y Gloria, donde pasó más de doce años en gerencia de operaciones y en proyectos de inversión e innovación. Sabe que la diferencia entre una buena idea y una empresa que funciona es operativa. En Fondo de Impacto dirige la operación del fondo, el Bootcamp y la plataforma del Pasaporte de Inversión.",
    logros: [
      "Integra el directorio del Grupo Cotton Nation y ha sido miembro independiente de directorios de otras empresas",
      "LATAM Fellow de Singularity University",
      "Coautor del Bio Business Playbook y del Playbook Circular LatAm",
    ],
    formacion: "Ingeniero industrial · Posgrados en Finanzas y Business Analytics (Universidad del Pacífico, INCAE y MIT)",
  },
  {
    nombre: "Eduardo Mariños",
    cargo: "Director de Inversiones y Riesgo",
    foco: "Due diligence, comité de inversión y cartera",
    foto: "/img/eduardo.jpg",
    linkedin: "https://www.linkedin.com/in/eduardo-mari%C3%B1os-2aa467a6/",
    bio: "Más de 8 años en finanzas corporativas, crédito e inversión de impacto en América Latina. Originó y estructuró inversiones de deuda en empresas de impacto de Perú y Colombia para un fondo de impacto internacional, y gestionó carteras de crédito en banca corporativa y comercial.",
    logros: [
      "Más de 100 empresas evaluadas para inversión",
      "Cerca de USD 100MM en operaciones de crédito aprobadas",
      "Estructuró un financiamiento garantizado a cinco años para una cadena de valor agrícola con más de 3.000 productores",
    ],
    formacion: "Economista, Universidad del Pacífico · MBA, EUDE Business School",
  },
];
