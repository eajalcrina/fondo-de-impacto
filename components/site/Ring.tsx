/**
 * Anillos de puntos del isotipo, usados como textura sobre el bosque profundo.
 * Estáticos: el verde nunca va liso en superficies grandes (docs/reglas-diseno.md).
 */
export function Anillos({ donde = "abajo" }: { donde?: "abajo" | "arriba" | "centro" }) {
  return (
    <svg className={`anillos d-${donde}`} viewBox="0 0 560 560" aria-hidden="true" focusable="false">
      <circle cx="280" cy="280" r="250" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeDasharray="0 34" />
      <circle cx="280" cy="280" r="170" fill="none" stroke="var(--salvia)" strokeWidth="9" strokeLinecap="round" strokeDasharray="0 24" />
      <circle cx="280" cy="280" r="92" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeDasharray="0 15" />
    </svg>
  );
}

/** Compatibilidad con las páginas que aún usan el nombre anterior. */
export function Ring({ size = 900 }: { size?: number }) {
  return <Anillos donde={size >= 1300 ? "centro" : "abajo"} />;
}
