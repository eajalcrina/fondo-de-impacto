/** Teaser de ejemplo (ilustrativo) que ven los fondos. */
export function Teaser() {
  return (
    <div className="card num" aria-label="Ejemplo de teaser">
      <div className="top"><span>Teaser confidencial</span><b>FI-0142</b></div>
      <h3 className="h4" style={{ fontSize: 18 }}>Empresa peruana de alimentos de origen amazónico</h3>
      <div className="chips"><span className="chip">Crecimiento</span><span className="chip">Deuda</span><span className="chip t">Busca USD 250–400K</span></div>
      <div className="kv">
        <div><span>Ventas últimos 12 meses</span><b>USD 1,1M</b></div>
        <div><span>Crecimiento anual</span><b>38%</b></div>
        <div><span>Margen bruto</span><b>42%</b></div>
        <div><span>Historial con fondos</span><b>2 créditos repagados</b></div>
        <div><span>Productores en su cadena</span><b>180</b></div>
        <div><span>ODS principales</span><b>1, 8 y 15</b></div>
      </div>
      <div className="meter"><span>Investment readiness</span><i><u /><u /><u /><u /><u className="o" /></i><b style={{ color: "var(--bosque)" }}>Alto</b></div>
      <span className="xs">Ejemplo ilustrativo. Así ven los fondos tu empresa, sin tu nombre hasta que tú lo apruebes.</span>
    </div>
  );
}
