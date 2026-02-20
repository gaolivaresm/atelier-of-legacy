import { Quote } from "lucide-react";
import FadeIn from "./FadeIn";

const SocialProof = () => {
  return (
    <section className="py-28 md:py-36 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <div className="text-center">
            <Quote className="w-10 h-10 text-primary/40 mx-auto mb-8" strokeWidth={1} />

            <blockquote className="font-display text-xl md:text-3xl italic leading-relaxed text-foreground/90 mb-8">
              "No sabía que mis fotos de cadete podían verse así. Este libro es ahora el
              regalo más preciado de mis nietos."
            </blockquote>

            <div className="separator-gold w-12 mx-auto mb-6" />

            <p className="font-serif text-lg text-primary">
              Almirante (R) Juan E. Valdivia
            </p>
            <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-2 font-sans">
              Región de Valparaíso
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-20 text-center">
            <div className="inline-block border border-primary/30 px-8 py-5 rounded-sm bg-card/30">
              <p className="font-display text-lg md:text-xl italic text-foreground/80">
                "Debido al nivel de detalle artesanal, solo aceptamos{" "}
                <span className="text-primary font-medium not-italic">6 proyectos de legado</span>{" "}
                al año."
              </p>
            </div>
            <p className="text-muted-foreground text-xs mt-4 tracking-wide font-sans">
              Servicio exclusivo · Región de Valparaíso · Plan, Recreo y Reñaca
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SocialProof;
