import { Phone, Mic, PenTool, BookOpen } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Contacto inicial",
    description:
      "Nos contacta directamente o a través de una partner certificada. Definimos juntos el alcance de su proyecto de legado.",
  },
  {
    num: "02",
    icon: Mic,
    title: "Entrevista y recolección",
    description:
      "Una partner visita su hogar, firma el acuerdo de confidencialidad y recoge testimonios, fotografías y documentos. Puede entregarlos en mano o subirlos en línea.",
  },
  {
    num: "03",
    icon: PenTool,
    title: "Edición y diseño",
    description:
      "Nuestro equipo de editores y diseñadores trabaja su manuscrito, restaura sus fotografías y compone la obra con dirección de arte de autor.",
  },
  {
    num: "04",
    icon: BookOpen,
    title: "Asesoría de impresión",
    description:
      "Le acompañamos en la elección de papeles, encuadernación y tiraje de su edición impresa, cotizada según los materiales que elija.",
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
            <FadeIn key={step.num} delay={0.15 * i}>
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
