export const SITE = {
  url: "https://fondodeimpacto.pe",
  email: "fondodeimpacto@redesignlab.org",
  calInversionistas: "https://calendar.app.google/geMQwggAn3R4nqHt8",
  calEmpresas: "https://calendar.app.google/Fetdonx9fkLQ6vUx8",
  cohorte: {
    nombre: "Cohorte noviembre 2026",
    inicio: "Lunes 2 de noviembre de 2026",
    cupos: 15,
  },
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
    bio: "Más de 15 años llevando la sostenibilidad a la rentabilidad, en marcas globales y en grupos corporativos de la región. Lidera la estrategia del fondo y la relación con fondos de impacto, agencias de cooperación e inversionistas.",
    logros: [
      "Ex jefe corporativo en Alicorp–Vitapro y TASA–Grupo Breca",
      "Ex coordinador de la Unión Europea en Perú, economía circular",
      "Coautor de Bio Business Playbook",
    ],
    formacion: "MBA ESAN · Maestría en Biocomercio PUCP",
  },
  {
    nombre: "Lorenzo Ortiz",
    cargo: "COO y cofundador",
    foco: "Operación del fondo, Bootcamp y plataforma",
    foto: "/img/lorenzo.jpg",
    linkedin: "https://www.linkedin.com/in/lorenzoortiz/",
    bio: "Más de 12 años dirigiendo operaciones, estrategia y finanzas en grandes grupos industriales. Lidera la operación del fondo, el Bootcamp y la plataforma del Pasaporte de Inversión y el Deal Room.",
    logros: [
      "Ex Head of Operations en TASA y ex gerente de planta en Exandal",
      "Singularity University LATAM Fellow",
      "Coautor de Bio Business Playbook",
    ],
    formacion: "MIT Business Analytics · Ing. Industrial UNT",
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
