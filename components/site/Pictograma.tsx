/** Pictogramas lineales en naranja para las cifras. Se dibujan una vez al entrar en pantalla. */
const TRAZOS: Record<string, React.ReactNode> = {
  red: (<><circle cx="9" cy="12" r="4" /><circle cx="31" cy="9" r="4" /><circle cx="20" cy="31" r="4" /><path d="M13 13l14-3M11 15l7 13M29 13l-7 15" /></>),
  brote: (<><path d="M20 35V17" /><path d="M20 22c-7 0-11-4-11-11 7 0 11 4 11 11z" /><path d="M20 18c0-6 3-10 10-10 0 6-3 10-10 10z" /><path d="M10 35h20" /></>),
  alza: (<><path d="M5 31l9-9 7 6 13-15" /><path d="M26 13h8v8" /><path d="M5 36h30" /></>),
  barras: (<><path d="M8 34V22M16 34V15M24 34V19M32 34V8" /><path d="M5 34h30" /></>),
};

export function Pictograma({ nombre }: { nombre: string }) {
  return (
    <span className="pict" aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {TRAZOS[nombre]}
      </svg>
    </span>
  );
}
