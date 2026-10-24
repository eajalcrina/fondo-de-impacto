import Image from "next/image";

/** [nombre, archivo en /public/aliados, ancho, alto, ajuste óptico opcional] */
type Logo = [string, string, number, number, number?];

const GRUPOS: { titulo: string; logos: Logo[] }[] = [
  {
    titulo: "Cooperación internacional",
    logos: [
      ["BID", "bid.svg", 100, 38],
      ["GIZ", "giz.svg", 207, 170, 0.9],
      ["Unión Europea", "union-europea.svg", 161, 48],
      ["WWF", "wwf.png", 142, 160],
      ["Conservation International", "conservation-international.png", 500, 160, 1.25],
      ["Green Climate Fund", "green-climate-fund.svg", 102, 40, 1.1],
    ],
  },
  {
    titulo: "Academia",
    logos: [
      ["MIT", "mit.svg", 354, 200, 0.85],
      ["Singularity University", "singularity-university.svg", 134, 32],
      ["IMD", "imd.png", 376, 138, 0.75],
      ["Tecnológico de Monterrey", "tec-de-monterrey.svg", 96, 25, 1.1],
      ["University of the Arts London", "ual.svg", 94, 42, 0.75],
      ["Wyss Academy for Nature", "wyss-academy.svg", 103, 103, 1.1],
    ],
  },
  {
    titulo: "Ecosistema de impacto",
    logos: [
      ["NESsT", "nesst.png", 292, 160],
      ["ImpactAlpha", "impactalpha.svg", 318, 39, 1.1],
      ["elea", "elea.svg", 62, 22, 0.75],
      ["Beneficial Returns", "beneficial-returns.png", 350, 106, 1.3],
      ["Amazonia Impact Ventures (AIV)", "aiv.png", 720, 135],
      ["C Minds, impulsor de NaturaTech LAC", "c-minds.svg", 165, 48],
    ],
  },
  {
    titulo: "Sector público",
    logos: [
      ["Ministerio de la Producción del Perú", "produce.png", 720, 152, 1.1],
      ["Ministerio del Ambiente del Perú", "minam.png", 268, 56, 1.1],
      ["PromPerú", "promperu.png", 372, 160],
      ["ProInnóvate", "proinnovate.png", 541, 160],
      ["Sociedad Nacional de Industrias", "sni.png", 238, 160, 1.15],
      ["Instituto Nacional de Calidad (INACAL)", "inacal.png", 256, 85, 1.2],
    ],
  },
];

/** Alto en px que iguala el peso visual: los logos anchos bajan, los compactos suben. */
function alto(w: number, h: number, k = 1) {
  return Math.round(Math.min(54, Math.max(18, Math.sqrt(2400 / (w / h)) * k)));
}

/** Instituciones con las que ha trabajado Redesign Lab, agrupadas, en escala de grises hasta pasar el cursor. */
export function Allies() {
  return (
    <div className="cols-4 allies">
      {GRUPOS.map((g) => (
        <div key={g.titulo}>
          <h5>{g.titulo}</h5>
          <ul>
            {g.logos.map(([nombre, archivo, w, h, k]) => (
              <li key={archivo} title={nombre}>
                <Image src={`/aliados/${archivo}`} alt={nombre} width={w} height={h} unoptimized loading="lazy" style={{ height: alto(w, h, k) }} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
