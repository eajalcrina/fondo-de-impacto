"""Genera lib/fuentes.json: base anonimizada de fuentes de capital de impacto.

Lee ../Base Inversionistas/base_inversionistas.csv y calendario_convocatorias.csv.
No exporta nombres ni contactos: solo atributos para conteos.
Uso: python3 scripts/build_fuentes.py
"""
import csv
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
BASE = ROOT.parent / "Base Inversionistas"

PAIS = {
    "Perú": "PE", "Colombia": "CO", "Ecuador": "EC", "Bolivia": "BO",
    "Brasil": "BR", "Brasil (Amazonía Legal)": "BR", "México": "MX", "Chile": "CL",
    "Guatemala": "CA", "Honduras": "CA", "Costa Rica": "CA", "Nicaragua": "CA",
    "El Salvador": "CA", "Panamá": "CA", "Belice": "CA", "Centroamérica": "CA",
}


def num(x):
    try:
        return float(x)
    except (TypeError, ValueError):
        return None


def split(x):
    return [v.strip() for v in (x or "").split("|") if v.strip()]


def main():
    rows = list(csv.DictReader(open(BASE / "base_inversionistas.csv", encoding="utf-8-sig")))
    cal = list(csv.DictReader(open(BASE / "calendario_convocatorias.csv", encoding="utf-8-sig")))
    activas = {c["entidad"].strip().lower() for c in cal if c["estado"] in ("abierta", "permanente", "cierra_pronto")}

    out = []
    for r in rows:
        inst = set(split(r["instrumentos"]))
        t = []
        if r["reembolsable"] in ("no_reembolsable", "mixto"):
            t.append("nr")
        if "deuda" in inst or "garantías" in inst:
            t.append("de")
        if inst & {"equity", "cuasi_equity", "revenue_based"}:
            t.append("eq")
        if "blended" in inst or r["reembolsable"] == "mixto" or r["blended_finance"].lower().startswith("s"):
            t.append("bl")
        activa = r["nombre_corto"].strip().lower() in activas or "ventanilla_permanente" in r["proceso_aplicacion"].lower()
        out.append({
            "t": t,
            "p": sorted({PAIS[x] for x in split(r["paises_inversion"]) if x in PAIS}),
            "r": 1 if r["alcance"] in ("regional_latam", "global_con_latam") else 0,
            "s": split(r["sectores_foco"]),
            "mn": num(r["ticket_min_usd"]),
            "mx": num(r["ticket_max_usd"]),
            "a": 1 if activa else 0,
            "e": 1 if r["prioridad_beneficiario"] in ("primario", "primario_y_secundario") else 0,
        })

    dest = ROOT / "lib" / "fuentes.json"
    dest.write_text(json.dumps(out, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"{len(out)} fuentes → {dest.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
