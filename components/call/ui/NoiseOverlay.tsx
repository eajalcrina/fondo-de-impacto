/**
 * Reusable noise texture overlay for depth on solid backgrounds.
 * Uses SVG feTurbulence — no external images, zero layout cost.
 * Always render inside a `relative overflow-hidden` parent.
 */
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

interface NoiseOverlayProps {
  /** Tailwind opacity class — default: "opacity-[0.035]" */
  opacity?: string;
}

export function NoiseOverlay({ opacity = "opacity-[0.035]" }: NoiseOverlayProps) {
  return (
    <div
      className={`absolute inset-0 ${opacity} mix-blend-overlay pointer-events-none`}
      style={{ backgroundImage: NOISE_SVG }}
      aria-hidden
    />
  );
}
