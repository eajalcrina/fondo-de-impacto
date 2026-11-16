"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Bloques que entran una sola vez al llegar a la pantalla. */
const REVEAL = ".seccion-titulo,.bloque,.cita,.cifra-item,.escalon,.ficha,.allies > div,.head,.rule,.pc,.mt,.feature,.band,.steps > li,.flow > li,.tiles,.stats,.faq > div";

/**
 * Movimiento del sitio: entradas bajo el pliegue, títulos que suben y pictogramas que se dibujan.
 * Sin contadores ni parallax. Sin JavaScript o con movimiento reducido, todo queda visible.
 */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("motion");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      },
      { threshold: 0.15 },
    );
    const fold = window.innerHeight * 0.9;
    document.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => {
      if (el.getBoundingClientRect().top > fold) el.classList.add("rv");
      io.observe(el);
    });
    document.querySelectorAll<HTMLElement>(".tr").forEach((h) => {
      if (h.closest(".hero, .cabecera")) setTimeout(() => h.classList.add("in"), 80);
      else io.observe(h);
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
