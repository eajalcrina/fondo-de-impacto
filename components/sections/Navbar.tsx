"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-fi-dark/95 backdrop-blur-md" : "bg-transparent",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <div className="flex items-center gap-2.5">
          <a href="#" className="font-display text-[16px] font-[600] text-white leading-none hover:opacity-80 transition-opacity duration-200">
            Fondo de Impacto
          </a>
          <span className="text-white/30 text-[14px] leading-none select-none">·</span>
          <RedesignLabLogo color="white" size="sm" className="opacity-50 hover:opacity-80" />
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

        {/* Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile full-height overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="lg:hidden fixed inset-0 bg-fi-dark z-40 flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className="absolute top-5 right-6 text-white p-2"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={22} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-[28px] font-[400] text-white hover:text-fi-sage transition-colors duration-200"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
