import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Fondo de Impacto — Investment Call 2026. Invierte en la bioeconomía peruana. 10% fijo anual.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c1c1f",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top — badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#9ab8bb",
              border: "1px solid rgba(154,184,187,0.3)",
              padding: "8px 16px",
              borderRadius: "2px",
            }}
          >
            Investment Call 2026
          </div>
        </div>

        {/* Center — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Invierte en el futuro
            <br />
            de la bioeconomía
            <br />
            peruana.
          </div>
          <div
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#c0541c",
            }}
          />
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.5,
              maxWidth: "640px",
            }}
          >
            10% fijo anual · 12 meses · Desde S/ 10,000 · Sin dilución
          </div>
        </div>

        {/* Bottom — branding */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.01em",
              }}
            >
              Fondo de Impacto
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              by Redesign Lab
            </div>
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            fondodeimpacto.pe
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
