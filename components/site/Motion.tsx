"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL =
  ".head,.rule,.rng,.pc,.mt,.feature,.band,.steps > li,.flow > li,.allies > div,.tiles,.stats,.facts,.ph-fig,.faq > div";

function countUp(el: HTMLElement) {
  if (el.dataset.done) return;
  el.dataset.done = "1";
  const txt = el.textContent ?? "";
  const m = txt.match(/[\d.,]+/);
  if (!m || m.index === undefined) return;
  const raw = m[0];
  const val = parseFloat(raw.replace(/\./g, "").replace(",", "."));
  if (!isFinite(val)) return;
  const dec = raw.includes(",") ? 1 : 0;
  const pre = txt.slice(0, m.index), post = txt.slice(m.index + raw.length);
  let t0 = 0;
  const step = (ts: number) => {
    if (!t0) t0 = ts;
    const p = Math.min(1, (ts - t0) / 1200), v = val * (1 - Math.pow(1 - p, 3));
    el.textContent = pre + (dec ? v.toFixed(1).replace(".", ",") : Math.round(v).toLocaleString("es-PE")) + post;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = txt;
  };
  requestAnimationFrame(step);
}

/**
 * Movimiento del sitio: entrada de secciones bajo el pliegue, títulos que suben,
 * contadores y parallax del mosaico. Sin JavaScript o con reduced-motion, todo queda visible.
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
          const el = e.target as HTMLElement;
          el.classList.add("in");
          el.querySelectorAll<HTMLElement>(".cu").forEach(countUp);
          if (el.classList.contains("cu")) countUp(el);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    const fold = window.innerHeight * 0.9;
    document.querySelectorAll<HTMLElement>(".facts b,.tiles b,.stats b,.rng .cnt strong").forEach((b) => b.classList.add("cu"));
    document.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => {
      if (el.getBoundingClientRect().top > fold) el.classList.add("rv");
      io.observe(el);
    });
    document.querySelectorAll<HTMLElement>(".tr").forEach((h) => {
      if (h.closest(".hero")) setTimeout(() => h.classList.add("in"), 80);
      else io.observe(h);
    });

    const figs = Array.from(document.querySelectorAll<HTMLElement>(".ph-fig.px"));
    const onScroll = () =>
      requestAnimationFrame(() => {
        for (const f of figs) {
          const r = f.getBoundingClientRect();
          if (r.bottom < 0 || r.top > innerHeight) continue;
          const c = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
          f.style.setProperty("--py", `${(c * -28).toFixed(1)}px`);
        }
      });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);
  return null;
}
