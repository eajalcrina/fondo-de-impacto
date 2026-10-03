import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo Fondo de Impacto trata los datos personales que recibe a través de este sitio.",
};

export default function PrivacidadPage() {
  return (
    <section className="sec first">
      <div className="wrap">
        <div className="legal-doc">
          <span className="eyebrow">Legal</span>
          <h1 className="d2">Política de privacidad</h1>
          <p>Vigente desde el 3 de octubre de 2026.</p>

          <h2>Quién es responsable de tus datos</h2>
          <p>Redesign Ventures SAC, que opera Fondo de Impacto, con domicilio en Lima, Perú. Para cualquier consulta sobre tus datos escríbenos a <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>

          <h2>Qué datos recogemos</h2>
          <p>Solo los que nos das en los formularios del sitio:</p>
          <ul>
            <li>Nombre, correo y celular.</li>
            <li>Nombre de tu empresa u organización, país y rubro.</li>
            <li>Información sobre el capital que buscas, ventas aproximadas y lo que nos cuentes en tus mensajes.</li>
          </ul>
          <p>No pedimos datos sensibles. Este sitio no usa cookies de seguimiento ni de publicidad.</p>

          <h2>Para qué los usamos</h2>
          <ul>
            <li>Enviarte el reporte o la confirmación que solicitaste.</li>
            <li>Responder tu consulta, evaluar tu postulación al Bootcamp o ayudarte a completar tu Pasaporte de Inversión.</li>
            <li>Contactarte sobre oportunidades de financiamiento relacionadas con tu solicitud.</li>
          </ul>
          <p>No vendemos tus datos. Solo compartimos la información de tu empresa con fondos o inversionistas si tú lo autorizas de forma expresa.</p>

          <h2>Con quién trabajamos para tratarlos</h2>
          <p>Usamos proveedores que tratan los datos por encargo nuestro: Vercel (alojamiento del sitio), Brevo (envío de correos) y Google (almacenamiento en hojas de cálculo). Algunos de estos servicios pueden almacenar información fuera de tu país, con medidas de seguridad adecuadas.</p>

          <h2>Cuánto tiempo los conservamos</h2>
          <p>Mientras mantengamos una relación contigo y hasta tres años después de tu último contacto, salvo que nos pidas eliminarlos antes.</p>

          <h2>Tus derechos</h2>
          <p>Puedes acceder a tus datos, rectificarlos, cancelarlos u oponerte a su uso, y retirar tu consentimiento en cualquier momento. Escríbenos a <a href={`mailto:${SITE.email}`}>{SITE.email}</a> y te responderemos dentro de los plazos de ley.</p>

          <h2>Marco legal</h2>
          <p>Tratamos tus datos de acuerdo con la Ley N.° 29733, Ley de Protección de Datos Personales del Perú, y su reglamento, y con la Ley 1581 de 2012 de Colombia y sus normas complementarias.</p>

          <h2>Cambios a esta política</h2>
          <p>Si actualizamos esta política, publicaremos la nueva versión en esta página con su fecha de vigencia.</p>
        </div>
      </div>
    </section>
  );
}
