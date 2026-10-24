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
  ["*", "No estoy seguro"],
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
  ["4", "USD 500 mil a 2 millones"],
  ["5", "Más de USD 2 millones"],
];

export const PUBLICOS: [string, string][] = [
  ["cooperativa", "Asociación o cooperativa"],
  ["consultor", "Consultor o asesor"],
  ["agencia_fondo", "Agencia de cooperación o fondo"],
];

export function etiqueta(lista: [string, string][], valor: string): string {
  return lista.find(([v]) => v === valor)?.[1] ?? valor;
}
