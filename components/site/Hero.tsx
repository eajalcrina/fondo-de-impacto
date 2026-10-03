import { HeroSlides, type Slide } from "./HeroSlides";
import { Ring } from "./Ring";

export function Hero({ slides, split = false, children }: { slides: Slide[]; split?: boolean; children: React.ReactNode }) {
  return (
    <section className="hero dk imm">
      <HeroSlides slides={slides} />
      <Ring size={1280} />
      <div className={split ? "wrap hero-2" : "wrap"}>{split ? children : <div className="hero-in">{children}</div>}</div>
    </section>
  );
}
