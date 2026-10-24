export const CONSENT_KEY = "fdi-consent";

/**
 * Consent Mode v2 (mismo modelo que circularclub.la): la medición arranca "denied"
 * y GA4 solo envía pings anónimos sin cookies hasta que la persona acepta.
 * La publicidad queda siempre desactivada. Se inyecta en <head> antes de cargar GTM.
 */
export const CONSENT_DEFAULT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
var c=null;try{c=localStorage.getItem('${CONSENT_KEY}')}catch(e){}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:c==='granted'?'granted':'denied',wait_for_update:500});`;
