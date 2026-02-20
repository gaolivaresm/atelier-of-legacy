import { Coffee, Search, Award } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  {
    num: "01",
    icon: Coffee,
    title: "El Café del Legado",
    description:
      "Nos reunimos en la calidez de su hogar o club para conocer los hitos que definen su trayectoria.",
  },
  {
    num: "02",
    icon: Search,
    title: "Edición y Rescate",
    description:
      "Nos encargamos del levantamiento de información, transcripción de entrevistas y restauración de su archivo visual.",
  },
  {
    num: "03",
    icon: Award,
    title: "La Obra Maestra",
    description:
      "Entrega de una edición limitada y numerada, lista para ser el tesoro de su familia.",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-28 md:py-36 bg-secondary/30">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4 font-sans">
              Proceso
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4">
              Servicio <span className="italic text-gradient-gold">"Guante Blanco"</span>
            </h2>
            <div className="separator-gold w-16 mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={0.2 * i}>
              <div className="flex gap-6 md:gap-10 mb-16 last:mb-0 items-start group">
                {/* Number + line */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 border border-primary/40 rounded-sm flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
                    <span className="font-serif text-2xl text-primary">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-16 bg-gradient-to-b from-primary/40 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-3">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl md:text-2xl">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-sans max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
