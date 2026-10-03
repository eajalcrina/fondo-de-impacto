import React from "react";
import { Mail, Phone } from "lucide-react";
import { CTA } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-fi-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-3 gap-12 mb-10">

          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-fi-primary" />
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-wider uppercase leading-none">
                  Fondo de Impacto
                </div>
                <div className="text-white/30 text-[9px] tracking-[0.2em] uppercase">
                  Powered by Redesign Lab
                </div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Invertimos en los negocios que el planeta necesita hoy.
            </p>
          </div>

          {/* Call details */}
          <div>
            <h4 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
              Investment Call 2026
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "S/ 300,000 meta total",
                "10% fijo anual",
                "12 meses · Pago bullet",
                "Deuda — Sin dilución",
                "Ticket mín. S/ 10,000",
              ].map((item) => (
                <li key={item} className="text-white/50 flex gap-2">
                  <span className="text-fi-primary">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href={CTA.email}
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm"
              >
                <Mail size={14} className="text-fi-primary" />
                {CTA.contactEmail}
              </a>
              <a
                href={CTA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm"
              >
                <Phone size={14} className="text-fi-primary" />
                {CTA.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2026 Fondo de Impacto — Redesign Lab. Todos los derechos reservados.
          </p>
          <p className="text-white/15 text-xs text-center md:text-right max-w-md">
            Este material es confidencial y está dirigido exclusivamente a
            inversionistas calificados. No constituye oferta pública de valores.
          </p>
        </div>
      </div>
    </footer>
  );
}
