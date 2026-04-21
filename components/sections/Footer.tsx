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
                <div className="text-white/30 text-[9px] tracking-[0.2em] uppercase mt-0.5">
                  Powered by Redesign Lab
                </div>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Invertimos en los negocios que el planeta necesita hoy.
            </p>
          </div>

          {/* Call details */}
          <div>
            <h4 className="text-white/35 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
              Investment Call 2026
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "S/ 300,000 meta total",
                "10% fijo anual",
                "12 meses · Pago bullet",
                "Deuda — sin dilución",
                "Ticket mín. S/ 10,000",
              ].map((item) => (
                <li key={item} className="text-white/45 flex gap-2 items-start">
                  <span className="text-fi-primary mt-0.5 shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/35 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href={CTA.email}
                className="flex items-center gap-3 text-white/45 hover:text-white transition-colors text-sm"
              >
                <Mail size={13} className="text-fi-primary shrink-0" />
                {CTA.contactEmail}
              </a>
              <a
                href={CTA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/45 hover:text-white transition-colors text-sm"
              >
                <Phone size={13} className="text-fi-primary shrink-0" />
                {CTA.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-white/20 text-xs">
              © 2026 Fondo de Impacto — Redesign Lab.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/20 hover:text-white/50 text-xs transition-colors">
                Términos y condiciones
              </a>
              <span className="text-white/10">·</span>
              <a href="#" className="text-white/20 hover:text-white/50 text-xs transition-colors">
                Política de privacidad
              </a>
            </div>
          </div>
          <p className="text-white/12 text-xs text-left md:text-right max-w-sm">
            Material confidencial para inversionistas calificados. No constituye oferta pública de valores.
          </p>
        </div>
      </div>
    </footer>
  );
}
