"use client";
import { useEffect, useRef } from "react";

/** Anillos punteados del isotipo. Se animan solo cuando están en pantalla y sin reduced-motion. */
function draw(cv: HTMLCanvasElement, t: number) {
  const ctx = cv.getContext("2d");
  if (!ctx) return;
  const w = cv.width, h = cv.height, cx = w / 2, cy = h / 2, R = (Math.min(w, h) / 2) * 0.97, rings = 12, maxDots = 132;
  ctx.clearRect(0, 0, w, h);
  for (let i = 1; i <= rings; i++) {
    const r = (R * i) / rings, n = Math.max(8, Math.round((maxDots * i) / rings)), size = Math.max(1, (w / 300) * (0.5 + 0.5 * (i / rings)));
    const dir = i % 2 ? 1 : -1, sp = 0.00004 * (1 + (rings - i) * 0.08);
    ctx.globalAlpha = (0.16 + 0.5 * (1 - i / rings)) * (0.85 + 0.15 * Math.sin(t * 0.0012 + i));
    ctx.fillStyle = i === 7 ? "#994215" : "#7ca07f";
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2 + i * 0.33 + dir * t * sp;
      ctx.beginPath();
      ctx.arc(cx + r * Math.cos(a), cy + r * Math.sin(a), size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}

export function Ring({ size = 1280, className = "ring" }: { size?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    draw(cv, 0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = false, raf = 0, last = 0;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) raf = requestAnimationFrame(loop);
    });
    function loop(t: number) {
      if (!visible) return;
      if (t - last > 33) { last = t; draw(cv as HTMLCanvasElement, t); }
      raf = requestAnimationFrame(loop);
    }
    io.observe(cv);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  return <canvas ref={ref} className={className} width={size} height={size} aria-hidden="true" />;
}
