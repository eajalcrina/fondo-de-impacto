import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

/** Sitio en español. */
export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer lang="es" />
    </>
  );
}
