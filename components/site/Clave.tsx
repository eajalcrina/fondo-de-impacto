/** Título con una palabra clave en color: [antes, clave, después]. */
export function Clave({ partes }: { partes: string[] }) {
  return <>{partes[0]}<span className="kw">{partes[1]}</span>{partes[2]}</>;
}
