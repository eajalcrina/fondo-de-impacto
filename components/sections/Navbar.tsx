"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Qué es FI",   href: "#que-es" },
  { label: "Track Record", href: "#track-record" },
  { label: "Call 2026",    href: "#call-2026" },
  { label: "Proyectos",    href: "#proyectos" },
  { label: "Cómo participar", href: "#como-participar" },
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
        scrolled
          ? "bg-fi-dark/95 backdrop-blur-md shadow-lg"
          : "bg-fi-dark",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Circle logo mark */}
          <div className="w-9 h-9 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-fi-primary transition-colors duration-300">
            <div className="w-2 h-2 rounded-full bg-fi-primary" />
          </div>
          <div className="leading-none">
            <div className="text-white font-bold text-sm tracking-wider uppercase">
              Fondo de
            </div>
            <div className="text-white font-bold text-sm tracking-wider uppercase">
              Impacto
            </div>
            <div className="text-white/40 text-[9px] tracking-[0.2em] uppercase font-light">
              Powered by Redesign Lab
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-white text-xs font-medium tracking-wider uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
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

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-fi-dark border-t border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-white/70 hover:text-white text-sm font-medium tracking-wider uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              href={CTA.calendar}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="w-full justify-center"
            >
              Invertir ahora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
