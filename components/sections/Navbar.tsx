"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { RedesignLabLogo } from "@/components/ui/RedesignLabLogo";

const navLinks = [
  { label: "Qué es FI",        href: "#que-es" },
  { label: "Track Record",     href: "#track-record" },
  { label: "Call 2026",        href: "#call-2026" },
  { label: "Proyectos",        href: "#proyectos" },
  { label: "Cómo participar",  href: "#como-participar" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : previous;
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled && !open ? "bg-fi-dark/95 backdrop-blur-md" : "bg-transparent",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Wordmark */}
        <div className="flex items-center gap-2.5 min-w-0">
          <a href="#" className="font-display text-[15px] sm:text-[16px] font-[600] text-white leading-none hover:opacity-80 transition-opacity duration-200 whitespace-nowrap">
            Fondo de Impacto
          </a>
          <span className="hidden sm:inline text-white/30 text-[14px] leading-none select-none">·</span>
          <RedesignLabLogo color="white" size="sm" className="hidden sm:inline-flex opacity-50 hover:opacity-80" />
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-sans text-[12px] font-semibold uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-editorial" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            href={CTA.calendar}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
          >
            Invertir ahora
          </Button>
        </div>

        {/* Hamburger — kept above the mobile overlay so it stays interactive */}
        <button
          className="lg:hidden text-white p-2 relative z-[70]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile full-height overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            className="lg:hidden fixed inset-0 z-[60] flex flex-col"
            style={{ backgroundColor: "#0c1c1f" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top bar — matches navbar height so the close X visually replaces the hamburger */}
            <div className="h-20 px-6 flex items-center justify-between shrink-0">
              <span className="font-display text-[15px] font-[600] text-white leading-none whitespace-nowrap">
                Fondo de Impacto
              </span>
              {/* Empty spacer — the real close button is the hamburger above (z-70) */}
              <span className="w-[22px] h-[22px]" aria-hidden />
            </div>

            <div className="h-px bg-white/10 mx-6 shrink-0" />

            {/* Links — left-aligned editorial rows with hairlines */}
            <nav className="flex-1 overflow-y-auto px-6 pt-2 pb-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-5 border-b border-white/10 active:opacity-60"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-display text-[24px] font-[500] text-white leading-none">
                    {link.label}
                  </span>
                  <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-white/30 group-hover:text-fi-primary transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* CTA + footer */}
            <motion.div
              className="px-6 pb-10 pt-2 shrink-0"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                href={CTA.calendar}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={<Calendar size={16} />}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Agendar entrevista 1:1
              </Button>
              <div className="flex items-center gap-2 mt-6 justify-center">
                <span className="font-sans text-[10px] text-white/40 uppercase tracking-[0.2em]">
                  Powered by
                </span>
                <RedesignLabLogo color="white" size="sm" className="opacity-60" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
