"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CONSENT_KEY as KEY } from "@/lib/consent";
import { captureUtm } from "@/lib/analytics";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const VALID_GTM = !!GTM_ID && /^GTM-[A-Z0-9]+$/.test(GTM_ID);

function gtag(...args: unknown[]) {
  const w = window as unknown as { dataLayer: unknown[] };
  w.dataLayer = w.dataLayer || [];
  // GTM espera el objeto `arguments`, no un array.
  // eslint-disable-next-line prefer-rest-params
  w.dataLayer.push(arguments);
  void args;
}

/** GTM + GA4 con Consent Mode v2 y aviso de medición (mismo modelo que Circular Club). */
export function Analytics() {
  const [ask, setAsk] = useState(false);

  useEffect(() => {
    captureUtm();
    if (!VALID_GTM) return;
    let stored: string | null = null;
    try { stored = localStorage.getItem(KEY); } catch {}
    if (!stored) setAsk(true);
  }, []);

  function choose(value: "granted" | "denied") {
    try { localStorage.setItem(KEY, value); } catch {}
    gtag("consent", "update", { analytics_storage: value });
    setAsk(false);
  }

  if (!VALID_GTM) return null;

  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      {ask && (
        <div className="ck" role="region" aria-label="Preferencias de medición">
          <p>
            Usamos cookies de medición para entender cómo se usa el sitio y mejorarlo. No usamos cookies publicitarias.{" "}
            <Link href="/privacidad#cookies">Más información</Link>
          </p>
          <div className="ck-a">
            <button type="button" className="btn btn-p btn-sm" onClick={() => choose("granted")}>Aceptar</button>
            <button type="button" className="btn btn-g btn-sm" onClick={() => choose("denied")}>Solo necesarias</button>
          </div>
        </div>
      )}
    </>
  );
}
