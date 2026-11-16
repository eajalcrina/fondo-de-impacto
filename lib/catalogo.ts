/** Opciones de los formularios y sus etiquetas legibles. */
export const RUBROS: [string, string][] = [
  ["agricultura", "Agricultura"],
  ["alimentos_bebidas", "Alimentos y bebidas"],
  ["agroforestal", "Agroforestal"],
  ["bioeconomia|bionegocios", "Bioeconomía y bionegocios"],
  ["economia_circular", "Economía circular"],
  ["turismo", "Turismo"],
  ["biotech|biomateriales", "Biotecnología y biomateriales"],
  ["agritech|bioinsumos", "Agritech y bioinsumos"],
  // Sin etiqueta propia en la base de fuentes: el buscador los trata como «Otro rubro».
  ["*artesania", "Artesanía y textiles"],
  ["*cosmetica", "Cosmética e ingredientes naturales"],
  ["*pesca", "Pesca y acuicultura"],
  ["*energia", "Energía y agua"],
  ["*", "Otro rubro de impacto"],
];

export const PAISES: [string, string][] = [
  ["PE", "Perú"],
  ["CO", "Colombia"],
  ["EC", "Ecuador"],
  ["BO", "Bolivia"],
  ["BR", "Brasil"],
  ["MX", "México"],
  ["CL", "Chile"],
  ["CA", "Centroamérica"],
  ["OT", "Otro país de América Latina"],
];

export const TIPOS_OPC: [string, string][] = [
  ["*", "Aún no lo sé"],
  ["nr", "No reembolsable"],
  ["de", "Deuda"],
  ["eq", "Equity"],
  ["bl", "Blended o mixto"],
];

export const RANGOS_OPC: [string, string][] = [
  ["0", "Hasta USD 50 mil"],
  ["1", "USD 50 mil a 150 mil"],
  ["2", "USD 150 mil a 300 mil"],
  ["3", "USD 300 mil a 500 mil"],
  ["4", "USD 500 mil a 2 MM"],
  ["5", "Más de USD 2 MM"],
];

export const PUBLICOS: [string, string][] = [
  ["cooperativa", "Asociación o cooperativa"],
  ["consultor", "Consultor o asesor"],
  ["agencia_fondo", "Agencia de cooperación o fondo"],
];

export function etiqueta(lista: [string, string][], valor: string): string {
  return lista.find(([v]) => v === valor)?.[1] ?? valor;
}

/* English labels, same values */
const RUBROS_EN: [string, string][] = [
  ["agricultura", "Agriculture"],
  ["alimentos_bebidas", "Food and beverages"],
  ["agroforestal", "Agroforestry"],
  ["bioeconomia|bionegocios", "Bioeconomy and biobusiness"],
  ["economia_circular", "Circular economy"],
  ["turismo", "Tourism"],
  ["biotech|biomateriales", "Biotech and biomaterials"],
  ["agritech|bioinsumos", "Agritech and bio-inputs"],
  ["*artesania", "Crafts and textiles"],
  ["*cosmetica", "Cosmetics and natural ingredients"],
  ["*pesca", "Fishing and aquaculture"],
  ["*energia", "Energy and water"],
  ["*", "Other impact sector"],
];
const PAISES_EN: [string, string][] = [
  ["PE", "Peru"], ["CO", "Colombia"], ["EC", "Ecuador"], ["BO", "Bolivia"], ["BR", "Brazil"], ["MX", "Mexico"], ["CL", "Chile"], ["CA", "Central America"], ["OT", "Other Latin American country"],
];
const TIPOS_OPC_EN: [string, string][] = [["*", "Not sure"], ["nr", "Grants"], ["de", "Debt"], ["eq", "Equity"], ["bl", "Blended"]];
const RANGOS_OPC_EN: [string, string][] = [
  ["0", "Up to USD 50K"], ["1", "USD 50K to 150K"], ["2", "USD 150K to 300K"], ["3", "USD 300K to 500K"], ["4", "USD 500K to 2 M"], ["5", "More than USD 2 M"],
];
const PUBLICOS_EN: [string, string][] = [["cooperativa", "Association or cooperative"], ["consultor", "Consultant or advisor"], ["agencia_fondo", "Cooperation agency or fund"]];
/** Labels of the capital types used in the finder and the map. */
export const TIPOS_LABEL: Record<"es" | "en", Record<string, string>> = {
  es: { nr: "No reembolsable", de: "Deuda y garantías", eq: "Equity", bl: "Blended o mixto" },
  en: { nr: "Grants", de: "Debt and guarantees", eq: "Equity", bl: "Blended" },
};

/** Listas de opciones en el idioma pedido. */
export function catalogo(lang: "es" | "en") {
  return lang === "en"
    ? { RUBROS: RUBROS_EN, PAISES: PAISES_EN, TIPOS_OPC: TIPOS_OPC_EN, RANGOS_OPC: RANGOS_OPC_EN, PUBLICOS: PUBLICOS_EN }
    : { RUBROS, PAISES, TIPOS_OPC, RANGOS_OPC, PUBLICOS };
}
