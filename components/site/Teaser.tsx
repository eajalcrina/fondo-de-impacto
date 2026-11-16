/** Maqueta del teaser confidencial que ven los fondos: una página anónima con los indicadores de un comité. */
export function Teaser() {
  return (
    <figure className="teaser num" aria-label="Ejemplo ilustrativo de teaser confidencial">
      <div className="teaser-cabeza">
        <div className="teaser-id">
          <span className="teaser-rotulo">Teaser confidencial</span>
          <b className="teaser-codigo">FI-0142</b>
        </div>
        <div className="teaser-empresa">
          <h3>Empresa peruana de alimentos de origen amazónico</h3>
          <ul className="teaser-chips"><li>Crecimiento</li><li>Deuda</li><li className="clave">Busca USD 250K a 400K</li></ul>
        </div>
      </div>
      <dl className="teaser-kpi">
        <div><dt>Ventas últimos 12 meses</dt><dd>USD 1.1 MM</dd></div>
        <div><dt>Crecimiento anual</dt><dd>38%</dd></div>
        <div><dt>Margen bruto</dt><dd>42%</dd></div>
        <div><dt>Historial con fondos</dt><dd>2 créditos repagados</dd></div>
        <div><dt>Productores en su cadena</dt><dd>180</dd></div>
        <div><dt>ODS principales</dt><dd>1, 8 y 15</dd></div>
      </dl>
      <figcaption className="teaser-pie">
        <span className="teaser-nivel">Investment readiness <i><u /><u /><u /><u /><u className="o" /></i> <b>Alto</b></span>
        <span>Ejemplo ilustrativo. Los fondos ven tu nombre solo si lo apruebas.</span>
      </figcaption>
    </figure>
  );
}
