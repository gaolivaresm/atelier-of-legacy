import { Cpu, PenTool, BookOpen } from "lucide-react";
import FadeIn from "./FadeIn";

const capsules = [
  {
    icon: Cpu,
    title: "Tecnología de Rescate",
    subtitle: "Inteligencia Artificial",
    description:
      "Restauramos lo que el tiempo desvaneció. Utilizamos inteligencia artificial de vanguardia para llevar fotografías antiguas y documentos históricos a una nitidez 4K, preservando la esencia original.",
  },
  {
    icon: PenTool,
    title: "Curaduría de Autor",
    subtitle: "15 Años de Trayectoria",
    description:
      "Dirección de Arte con 15 años de trayectoria. No diseñamos folletos; creamos objetos de culto que reflejan la dignidad de su historia personal.",
  },
  {
    icon: BookOpen,
    title: "Materialidad Noble",
    subtitle: "Hechos para Perdurar",
    description:
      "Papeles de algodón libres de ácido, linos italianos y encuadernación artesanal. Libros diseñados para durar más de 100 años en su biblioteca familiar.",
  },
];

const ValueProps = () => {
  return (
    <section id="atelier" className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4 font-sans">
              La Diferencia del Atelier
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4">
              Tres Pilares de <span className="italic text-gradient-gold">Excelencia</span>
            </h2>
            <div className="separator-gold w-16 mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {capsules.map((cap, i) => (
            <FadeIn key={cap.title} delay={0.2 * i}>
              <div className="text-center p-8 rounded-sm border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group">
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-primary/30 rounded-sm group-hover:bg-primary/10 transition-colors duration-500">
                  <cap.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-2 font-sans">
                  {cap.subtitle}
                </p>
                <h3 className="font-serif text-xl mb-4">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
