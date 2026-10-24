import Link from "next/link";
import "./(site)/site.css";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Ring } from "@/components/site/Ring";

export const metadata = { title: "Página no encontrada | Fondo de Impacto", robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero dk imm" style={{ background: "var(--grad)" }}>
          <Ring size={1280} />
          <div className="wrap">
            <div className="hero-in">
              <span className="eyebrow">Error 404</span>
              <h1 className="d1" style={{ fontSize: "clamp(36px,5vw,64px)" }}>Esta página no existe o cambió de lugar.</h1>
              <p className="lead">Puede que el enlace esté desactualizado. Desde aquí puedes seguir explorando.</p>
              <div className="cta-row">
                <Link className="btn btn-p" href="/">Ir al inicio</Link>
                <Link className="lnk q" href="/pasaporte#buscador">Ver fondos disponibles</Link>
                <Link className="lnk q" href="/bootcamp">Bootcamp</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
