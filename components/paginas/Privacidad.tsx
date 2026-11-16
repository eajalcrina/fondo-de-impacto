import { SITE } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

export const META = {
  es: { title: "Política de privacidad", description: "Cómo Fondo de Impacto trata los datos personales que recibe a través de este sitio." },
  en: { title: "Privacy policy", description: "How Fondo de Impacto handles the personal data it receives through this site." },
};

/** Política de privacidad. */
export function Privacidad({ lang }: { lang: Lang }) {
  if (lang === "en") {
    return (
    <section className="sec first">
      <div className="wrap">
        <div className="legal-doc">
          <span className="eyebrow">Legal</span>
          <h1 className="d2">Privacy policy</h1>
          <p>Effective as of October 23, 2026. This is a translation; the Spanish version prevails.</p>

          <h2>Who is responsible for your data</h2>
          <p>Redesign Ventures SAC, which operates Fondo de Impacto, based in Lima, Peru. For any question about your data, write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>

          <h2>What data we collect</h2>
          <p>Only what you give us in the site’s forms:</p>
          <ul>
            <li>Name, email and mobile number.</li>
            <li>Name of your company or organization, country and sector.</li>
            <li>Information about the capital you are looking for, approximate sales and what you tell us in your messages.</li>
          </ul>
          <p>We do not ask for sensitive data. We also record the page you write from, the site that brought you and the browser you use, to understand which channels work.</p>

          <h2>What we use it for</h2>
          <ul>
            <li>Sending you the report or confirmation you requested.</li>
            <li>Answering your inquiry, assessing your Bootcamp application or helping you complete your Investment Passport.</li>
            <li>Contacting you about financing opportunities related to your request.</li>
          </ul>
          <p>We do not sell your data. We only share your company’s information with funds or investors if you expressly authorize it.</p>

          <h2>Who we work with to process it</h2>
          <p>We use providers that process data on our behalf: Vercel (site hosting), Brevo (email delivery and contact list) and Google (spreadsheet storage and site measurement). Some of these services may store information outside your country, with adequate security measures.</p>

          <h2 id="cookies">Cookies and measurement</h2>
          <p>We use Google Tag Manager and Google Analytics to measure visits and the use of buttons and forms. We only store measurement cookies if you accept them in the notice shown when you arrive; if you choose “Only necessary”, measurement works without cookies and anonymously. We do not use advertising cookies. You can change your choice by clearing the site data in your browser.</p>

          <h2>How long we keep it</h2>
          <p>While we have a relationship with you and up to three years after your last contact, unless you ask us to delete it sooner.</p>

          <h2>Your rights</h2>
          <p>You can access, correct or delete your data, object to its use and withdraw your consent at any time. Write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we will reply within the legal deadlines.</p>

          <h2>Legal framework</h2>
          <p>We process your data under Peru’s Personal Data Protection Law (Law No. 29733) and its regulations, and under Colombia’s Law 1581 of 2012 and its supplementary rules.</p>

          <h2>Changes to this policy</h2>
          <p>If we update this policy, we will publish the new version on this page with its effective date.</p>
        </div>
      </div>
    </section>
    );
  }
  return (
    <section className="sec first">
      <div className="wrap">
        <div className="legal-doc">
          <span className="eyebrow">Legal</span>
          <h1 className="d2">Política de privacidad</h1>
          <p>Vigente desde el 23 de octubre de 2026.</p>

          <h2>Quién es responsable de tus datos</h2>
          <p>Redesign Ventures SAC, que opera Fondo de Impacto, con domicilio en Lima, Perú. Para cualquier consulta sobre tus datos escríbenos a <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>

          <h2>Qué datos recogemos</h2>
          <p>Solo los que nos das en los formularios del sitio:</p>
          <ul>
            <li>Nombre, correo y celular.</li>
            <li>Nombre de tu empresa u organización, país y rubro.</li>
            <li>Información sobre el capital que buscas, ventas aproximadas y lo que nos cuentes en tus mensajes.</li>
          </ul>
          <p>No pedimos datos sensibles. Además, registramos la página desde la que nos escribes, el sitio que te trajo y el navegador que usas, para entender qué canales funcionan.</p>

          <h2>Para qué los usamos</h2>
          <ul>
            <li>Enviarte el reporte o la confirmación que solicitaste.</li>
            <li>Responder tu consulta, evaluar tu postulación al Bootcamp o ayudarte a completar tu Pasaporte de Inversión.</li>
            <li>Contactarte sobre oportunidades de financiamiento relacionadas con tu solicitud.</li>
          </ul>
          <p>No vendemos tus datos. Solo compartimos la información de tu empresa con fondos o inversionistas si tú lo autorizas de forma expresa.</p>

          <h2>Con quién trabajamos para tratarlos</h2>
          <p>Usamos proveedores que tratan los datos por encargo nuestro: Vercel (alojamiento del sitio), Brevo (envío de correos y lista de contactos) y Google (almacenamiento en hojas de cálculo y medición del sitio). Algunos de estos servicios pueden almacenar información fuera de tu país, con medidas de seguridad adecuadas.</p>

          <h2 id="cookies">Cookies y medición</h2>
          <p>Usamos Google Tag Manager y Google Analytics para medir visitas y el uso de botones y formularios. Solo guardamos cookies de medición si las aceptas en el aviso que aparece al entrar; si eliges «Solo necesarias», la medición funciona sin cookies y de forma anónima. No usamos cookies publicitarias. Puedes cambiar tu elección borrando los datos del sitio en tu navegador.</p>

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
