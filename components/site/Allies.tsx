import Image from "next/image";
import { es } from "@/lib/i18n/es";

const g = es.comun.aliados;

/** [nombre, archivo en /public/aliados, ancho, alto] */
type Logo = [string, string, number, number];

const GRUPOS: { titulo: string; logos: Logo[] }[] = [
  {
    titulo: g.cooperacion,
    logos: [
      ["BID", "bid.svg", 100, 38],
      ["GIZ", "giz.svg", 207, 170],
      ["Unión Europea", "union-europea.svg", 161, 48],
      ["WWF", "wwf.png", 84, 125],
      ["Conservation International", "conservation-international.png", 500, 160],
      ["Green Climate Fund", "green-climate-fund.svg", 102, 40],
    ],
  },
  {
    titulo: g.academia,
    logos: [
      ["MIT", "mit.svg", 354, 200],
      ["Singularity University", "singularity-university.svg", 134, 32],
      ["IMD", "imd.png", 376, 138],
      ["Tecnológico de Monterrey", "tec-de-monterrey.svg", 96, 25],
      ["University of the Arts London", "ual.svg", 94, 42],
      ["Wyss Academy for Nature", "wyss-academy.svg", 103, 103],
    ],
  },
  {
    titulo: g.redes,
    logos: [
      ["NESsT", "nesst.png", 292, 160],
      ["ImpactAlpha", "impactalpha.svg", 318, 39],
      ["elea", "elea.svg", 62, 22],
      ["Beneficial Returns", "beneficial-returns.png", 350, 106],
      ["Amazonia Impact Ventures (AIV)", "aiv.png", 720, 135],
      ["C Minds, impulsor de NaturaTech LAC", "c-minds.svg", 165, 48],
    ],
  },
  {
    titulo: g.publico,
    logos: [
      ["Ministerio de la Producción del Perú", "produce.png", 697, 134],
      ["Ministerio del Ambiente del Perú", "minam.png", 268, 56],
      ["PromPerú", "promperu.png", 372, 160],
      ["ProInnóvate", "proinnovate.png", 541, 160],
      ["Sociedad Nacional de Industrias", "sni.png", 238, 160],
      ["Instituto Nacional de Calidad (INACAL)", "inacal.png", 256, 85],
    ],
  },
];

/** Instituciones con las que ha trabajado Redesign Lab, agrupadas, todos a la misma altura y en escala de grises hasta pasar el cursor. */
export function Allies() {
  return (
    <div className="cols-4 allies">
      {GRUPOS.map((grupo) => (
        <div key={grupo.titulo}>
          <h3>{grupo.titulo}</h3>
          <ul>
            {grupo.logos.map(([nombre, archivo, w, h]) => (
              <li key={archivo} title={nombre}>
                <Image src={`/aliados/${archivo}`} alt={nombre} width={w} height={h} unoptimized loading="lazy" style={{ height: w / h < 1.6 ? "var(--logo-alto-cuadrado)" : "var(--logo-alto)" }} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
