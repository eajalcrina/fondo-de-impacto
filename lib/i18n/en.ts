import type { Textos } from "./es";

/**
 * Visible site texts in English, with the same keys as es.ts. Links point to the English routes.
 * Voice rules: docs/reglas-diseno.md and the voz-sin-ia skill (sentence case, no dashes, no AI phrasing).
 */
export const en: Textos = {
  marca: {
    nombre: "Fondo de Impacto",
    firma: "by Redesign Lab",
    alt: "Fondo de Impacto, by Redesign Lab",
    sede: "From Lima, Peru, and Bogotá, Colombia",
    paises: ["Peru", "Colombia"],
  },
  nav: {
    principal: "Main",
    menu: "Menu",
    empresas: "Companies",
    inversionistas: "Investors",
    portafolio: "Portfolio",
    nosotros: "About us",
    fondo: "Fund",
    agendar: "Book a meeting",
    abrir: "Open menu",
    cerrar: "Close menu",
    idioma: "Language",
    enPronto: "",
    soluciones: [
      { href: "/en/bootcamp", t: "Capital Raising Bootcamp", d: "Eight weeks to get ready to raise capital" },
      { href: "/en/passport", t: "Investment Passport", d: "One profile to reach more than 50 funds" },
      { href: "/en/companies", t: "Direct financing", d: "For companies with a repayment track record" },
    ],
  },
  inicio: {
    meta: "We prepare impact companies in Latin America to raise capital and introduce them to more than 50 funds through the Bootcamp and the Investment Passport.",
    heroe: {
      rotulo: "Impact capital in Peru and Colombia",
      titulo: "Capital for Latin America’s impact companies",
      bajada: "If your company already has traction, we prepare you to raise capital and introduce you to the funds that can finance you.",
      cta: "See funds for my company",
      inversionista: "I’m an investor",
      foto: "Amazon river at sunset with a canoe",
      bajar: "Skip to content",
    },
    empresas: {
      titulo: "For companies",
      bootcamp: { t: "Capital Raising Bootcamp", href: "/en/bootcamp", foto: "/img/h17.jpg", alt: "Company teams working in a workshop" },
      cohorte: { rotulo: "Next cohort", titulo: "Is your company ready to raise capital?", cta: "Apply to the Bootcamp" },
      bloques: [
        { t: "Investment Passport", href: "/en/passport", foto: "/img/rl/mapa.jpg", alt: "Hand marking a map of the territory" },
        { t: "Direct financing", href: "/en/companies", foto: "/img/rl/entrega-cosecha.jpg", alt: "Harvest delivery in the field" },
        { t: "Fund finder", href: "/en/passport#buscador", foto: "/img/rl/cacao-manos.jpg", alt: "Open cacao pod in a producer’s hands" },
      ],
    },
    capital: {
      titulo: "How much capital do you need?",
      texto: "Choose a range to find the impact capital sources that fit your company.",
    },
    cifras: {
      titulo: "Results since 2021",
      items: [
        { icono: "red", mas: true, valor: "50", texto: "impact funds in our network" },
        { icono: "brote", mas: true, valor: "10", texto: "companies in our portfolio" },
        { icono: "alza", mas: false, valor: "USD 2.7 M", texto: "raised for the companies we support" },
        { icono: "barras", mas: false, valor: "USD 26 M", texto: "portfolio revenue in 2025" },
      ],
    },
    inversionistas: {
      titulo: "For investors",
      bloque: { t: "Patient capital", href: "/en/investors", foto: "/img/rl/cacao-arbol.jpg", alt: "Cacao pod in an agroforestry system" },
      cita: "Many profitable companies lack a profile an investment committee can approve. We prepare them, support them and invest in them.",
      firma: "Fondo de Impacto",
      cta: "See the thesis",
    },
    portafolio: {
      titulo: "Portfolio",
      cta: "See the portfolio",
    },
    organizaciones: { titulo: "Organizations we have worked with" },
  },
  portafolio: {
    meta: "Fondo de Impacto’s portfolio, with companies such as Cotton Nation, Endemics, Rare by, GreenProd and Ecovive. Revenue of USD 26 M in 2025, 28% more than in 2024.",
    heroe: {
      rotulo: "Portfolio",
      titulo: ["Impact companies already ", "growing", " with our capital"],
      bajada: "We invest in Latin American biodiversity companies that we prepare and support from the inside.",
      cta: "See the thesis",
      foto: "Amazon tree canopy seen from below",
    },
    tesis: {
      rotulo: "Thesis",
      titulo: "Portfolio results",
      texto: "We look for sales, a biodiversity value chain and a team we have known since the preparation stage.",
    },
    cifras: [
      { icono: "barras", mas: false, valor: "USD 26 M", texto: "portfolio revenue in 2025" },
      { icono: "alza", mas: false, valor: "28%", texto: "revenue growth over 2024" },
      { icono: "brote", mas: true, valor: "10", texto: "companies in our portfolio" },
    ],
    empresas: { rotulo: "Investments", titulo: "Selected portfolio companies" },
    cierre: { titulo: "Want to see the portfolio in detail?", texto: "We share metrics, financial statements and the active round in a private conversation, under a confidentiality agreement.", cta: "Book a meeting" },
  },
  comun: {
    masDe: "more than",
    aliados: { cooperacion: "International cooperation", academia: "Academia", redes: "Impact funds and networks", publico: "Public sector" },
    rangos: {
      fuentes: (n: number) => (n === 1 ? "source" : "sources"),
      ir: "See sources",
      montos: [
        ["Up to USD", "50K", ""],
        ["USD", "50K", "to 150K"],
        ["USD", "150K", "to 300K"],
        ["USD", "300K", "to 500K"],
        ["USD", "500K", "to 2 M"],
        ["More than USD", "2 M", ""],
      ],
    },
  },
  pie: {
    empresas: "Companies",
    fondo: "Fund",
    contacto: "Contact",
    bootcamp: "Bootcamp",
    pasaporte: "Investment Passport",
    financiamiento: "Direct financing",
    privacidad: "Privacy policy",
    arriba: "Back to top",
    contactoCorto: "Contact",
    derechos: (anio: number) => `© ${anio} Redesign Ventures SAC.`,
    legalOferta: "This website is for information only and is not a public offering of securities or an invitation to raise funds from the public.",
    legalPrivado: "Investment opportunities are presented only in private conversations, under a confidentiality agreement.",
  },
};
