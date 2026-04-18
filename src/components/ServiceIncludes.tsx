import { Check, X } from "lucide-react";
import FadeIn from "./FadeIn";

const includes = [
  "Visita de una partner certificada para recoger testimonios y documentos",
  "Firma de acuerdo de confidencialidad (NDA)",
  "Edición profesional del manuscrito",
  "Diseño y dirección de arte del libro",
  "Restauración de fotografías con IA a calidad 4K",
  "Asesoría en la elección de la edición impresa",
];

const excludes = [
  "La impresión final del libro (se cotiza aparte según materiales y tiraje elegida por el cliente)",
];

const ServiceIncludes = () => {
  return (
    <section id="servicios" className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4 font-sans">
              El Servicio
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4">
              Qué incluye su <span className="italic text-gradient-gold">obra</span>
            </h2>
            <div className="separator-gold w-16 mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="border border-primary/20 p-8 md:p-10 rounded-sm bg-card/40 h-full">
              <p className="text-xs tracking-[0.2em] uppercase text-primary mb-6 font-sans">
                Incluido
              </p>
              <ul className="space-y-4">
                {includes.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <Check className="w-4 h-4 text-primary mt-1 shrink-0" strokeWidth={2} />
                    <span className="text-sm md:text-base text-foreground/90 font-sans leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border border-border p-8 md:p-10 rounded-sm bg-secondary/20 h-full">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6 font-sans">
                No incluido
              </p>
              <ul className="space-y-4">
                {excludes.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <X className="w-4 h-4 text-muted-foreground mt-1 shrink-0" strokeWidth={2} />
                    <span className="text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground/80 font-sans mt-8 italic leading-relaxed">
                Le asesoramos personalmente en la elección de papeles, encuadernación y tiraje
                de su edición impresa.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ServiceIncludes;
