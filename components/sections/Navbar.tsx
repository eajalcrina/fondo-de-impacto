"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Qué es FI",      href: "#que-es" },
  { label: "Track Record",   href: "#track-record" },
  { label: "Call 2026",      href: "#call-2026" },
  { label: "Proyectos",      href: "#proyectos" },
  { label: "Cómo participar", href: "#como-participar" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-fi-dark/96 backdrop-blur-md shadow-dark-glow"
          : "bg-fi-dark",
      ].join(" ")}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border-2 border-white/25 flex items-center justify-center group-hover:border-fi-primary transition-colors duration-300">
            <div className="w-2 h-2 rounded-full bg-fi-primary" />
          </div>
          <div className="leading-none">
            <div className="text-white font-bold text-sm tracking-wider uppercase">
              Fondo de
            </div>
            <div className="text-white font-bold text-sm tracking-wider uppercase">
              Impacto
            </div>
            <div className="text-white/35 text-[9px] tracking-[0.2em] uppercase font-light">
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
              className={[
                "relative text-xs font-medium tracking-wider uppercase transition-colors duration-200 pb-0.5 group",
                active === link.href ? "text-white" : "text-white/50 hover:text-white/90",
              ].join(" ")}
            >
              {link.label}
              <span
                className={[
                  "absolute bottom-0 left-0 h-[1.5px] bg-fi-primary transition-all duration-300 rounded-full",
                  active === link.href ? "w-full" : "w-0 group-hover:w-full",
                ].join(" ")}
              />
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
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fi-primary"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="block transition-transform duration-200">
            {open ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </nav>

      {/* Mobile menu — animated */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-all duration-300 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="bg-fi-dark border-t border-white/8 px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={[
                "flex items-center gap-3 py-3 text-sm font-medium tracking-wider uppercase transition-colors border-b border-white/5",
                active === link.href ? "text-white" : "text-white/60 hover:text-white",
              ].join(" ")}
            >
              {active === link.href && (
                <span className="w-1.5 h-1.5 rounded-full bg-fi-primary shrink-0" />
              )}
              {link.label}
            </a>
          ))}
          <div className="pt-4">
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
      </div>
    </header>
  );
}
