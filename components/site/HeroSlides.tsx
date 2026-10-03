"use client";
import { useEffect, useState } from "react";

export type Slide = { src: string; cap: string };

/** Fotos del hero con fundido, zoom lento, contador y barra de progreso (si hay más de una). */
export function HeroSlides({ slides, interval = 6000 }: { slides: Slide[]; interval?: number }) {
  const [k, setK] = useState(0);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setRun(true);
    const id = setInterval(() => setK((x) => (x + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);
  return (
    <>
      <div className="slides" aria-hidden="true">
        {slides.map((s, i) => (
          <div key={s.src} className={`slide${i === k ? " on" : ""}`} style={{ backgroundImage: `url(${s.src})` }} />
        ))}
        <div className="veil" />
      </div>
      {slides.length > 1 && (
        <div className="sprog" aria-hidden="true">
          <div className="row">
            <span>{`0${k + 1} / 0${slides.length}`}</span>
            <span>{slides[k].cap}</span>
          </div>
          <span className="bar"><i key={k} className={run ? "run" : ""} /></span>
        </div>
      )}
    </>
  );
}
