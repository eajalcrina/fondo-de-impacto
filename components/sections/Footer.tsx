import { Linkedin, Mail, Phone } from "lucide-react";
import { CTA } from "@/lib/constants";

const navLinks = [
  { label: "Qué es FI",       href: "#que-es" },
  { label: "Track Record",    href: "#track-record" },
  { label: "Call 2026",       href: "#call-2026" },
  { label: "Proyectos",       href: "#proyectos" },
  { label: "Cómo participar", href: "#como-participar" },
];

export function Footer() {
  return (
    <footer className="bg-fi-ink py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Wordmark */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display text-[16px] font-[500] text-white leading-none">
                Fondo de Impacto
              </span>
              <span className="text-white/40 text-[16px] leading-none">·</span>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 leading-none">
                Redesign Lab
              </span>
            </div>
            <p className="font-sans text-[13px] text-white/40 leading-relaxed max-w-[240px]">
              Invertimos en los negocios que el planeta necesita hoy.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <p className="eyebrow text-white/30 mb-6">Navegación</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-[12px] font-semibold uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-white/30 mb-6">Contacto</p>
            <div className="space-y-4">
              <a
                href={CTA.email}
                className="flex items-center gap-3 font-sans text-[14px] text-white/70 hover:text-white transition-colors duration-200"
              >
                <Mail size={14} className="text-fi-primary shrink-0" />
                {CTA.contactEmail}
              </a>
              <a
                href={CTA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-[14px] text-white/70 hover:text-white transition-colors duration-200"
              >
                <Phone size={14} className="text-fi-primary shrink-0" />
                {CTA.phone}
              </a>
              <a
                href="https://www.linkedin.com/company/redesignlab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-[14px] text-white/70 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={14} className="text-fi-primary shrink-0" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        <p className="font-sans text-[11px] text-white/30">
          © 2026 Fondo de Impacto · Powered by Redesign Lab
        </p>
      </div>
    </footer>
  );
}
