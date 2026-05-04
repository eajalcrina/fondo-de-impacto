import { CTA, TEAM, STATS_TRACK_RECORD, INVESTOR_PROFILES, PROJECTS, STEPS } from "@/lib/constants";

const SITE_URL = "https://www.fondodeimpacto.pe";

/** Organization — Redesign Lab as the parent entity */
const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Redesign Lab",
  url: "https://redesignlab.org",
  description:
    "Redesign Lab diseña, financia y escala negocios sostenibles basados en la biodiversidad peruana. Más de 5 años de experiencia con +10 empresas en portafolio y +$26MM de facturación.",
  foundingDate: "2019",
  areaServed: {
    "@type": "Country",
    name: "Peru",
  },
  founder: TEAM.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    sameAs: member.linkedin || undefined,
  })),
  knowsAbout: [
    "Bioeconomía",
    "Inversión de impacto",
    "Biodiversidad peruana",
    "Clean beauty",
    "Suplementos naturales",
    "Comercio justo",
    "Negocios sostenibles en Perú",
  ],
};

/** WebPage — the landing page itself */
const webPageSchema = {
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Fondo de Impacto — Investment Call 2026",
  description:
    "Instrumento de inversión de deuda sin dilución para la bioeconomía peruana. 10% de retorno fijo anual, plazo de 12 meses, desde S/ 10,000. Respaldado por contrato notarial con garantía personal.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "es",
  dateModified: new Date().toISOString().split("T")[0],
};

/** WebSite */
const webSiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Fondo de Impacto",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "es",
};

/** InvestmentFund-like offering described as a FinancialProduct */
const investmentOfferingSchema = {
  "@type": "FinancialProduct",
  "@id": `${SITE_URL}/#investment-call-2026`,
  name: "Fondo de Impacto — Investment Call 2026 · I",
  description:
    "Instrumento de deuda sin dilución que conecta capital ángel con marcas sostenibles de la biodiversidad peruana. Capital objetivo: S/ 300,000. Retorno: 10% fijo anual. Plazo: 12 meses con pago bullet. Ticket mínimo: S/ 10,000. Respaldado por contrato notarial con garantía personal de los fundadores.",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Country",
    name: "Peru",
  },
  category: "Impact Investment",
  offers: INVESTOR_PROFILES.map((profile) => ({
    "@type": "Offer",
    name: profile.tier,
    description: profile.description,
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "PEN",
      description: profile.range,
    },
  })),
};

/** FAQPage — crucial for GEO (AI engines cite FAQ structured data) */
const faqSchema = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es Fondo de Impacto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fondo de Impacto es un instrumento de inversión de deuda sin dilución que conecta capital ángel con marcas sostenibles basadas en la biodiversidad peruana. Está impulsado por Redesign Lab, que tiene más de 5 años de experiencia escalando negocios sostenibles en Perú.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el retorno de la inversión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El retorno es del 10% fijo anual, con un pago bullet en el mes 12. El capital total más el retorno se devuelve al final del plazo. Por ejemplo, una inversión de S/ 30,000 devuelve S/ 33,000 al mes 12.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el monto mínimo de inversión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El ticket mínimo es de S/ 10,000 (perfil Angel Supporter). El perfil Angel Lead va desde S/ 30,000 hasta S/ 100,000 e incluye beneficios estratégicos adicionales como acceso prioritario a futuras rondas y reuniones estratégicas semestrales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se protege mi inversión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La inversión está respaldada por un contrato notarial con garantía personal de los fundadores. No hay dilución de capital. Los inversionistas reciben reportes mensuales de caja, ventas e indicadores, y reuniones ejecutivas trimestrales.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué proyectos se invierte el capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `El capital del Investment Call 2026 se distribuye en dos marcas con operaciones activas: ${PROJECTS.map((p) => `${p.name} (${p.category} — ${p.tagline})`).join(" y ")}. Ambas tienen mercado validado y operaciones en curso.`,
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el proceso para invertir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `El proceso tiene ${STEPS.length} pasos: ${STEPS.map((s) => `${s.number}. ${s.title}: ${s.description}`).join(" ")}`,
      },
    },
    {
      "@type": "Question",
      name: "¿Quiénes son los fundadores de Redesign Lab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: TEAM.map(
          (m) =>
            `${m.name}, ${m.role}. ${m.highlights.join(". ")}.`,
        ).join(" "),
      },
    },
    {
      "@type": "Question",
      name: "¿Qué track record tiene Redesign Lab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Redesign Lab tiene ${STATS_TRACK_RECORD.map((s) => `${s.value} ${s.label}`).join(", ")}. Cuenta con alianzas con instituciones como IDB, GIZ, Unión Europea, WWF, Green Climate Fund, MIT, Singularity University, NESsT e ImpactAlpha.`,
      },
    },
  ],
};

/** Complete JSON-LD graph */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    webSiteSchema,
    webPageSchema,
    organizationSchema,
    investmentOfferingSchema,
    faqSchema,
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
    />
  );
}
