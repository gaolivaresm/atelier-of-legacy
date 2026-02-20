import { Anchor, Globe } from "lucide-react";
import FadeIn from "./FadeIn";

const niches = [
  {
    icon: Anchor,
    title: "Bitácoras Navales",
    description:
      "Un homenaje especial a quienes sirvieron al país. Rescatamos la mística de la vida en el mar y el rigor de la carrera naval.",
    gradient: "from-[hsl(210,30%,12%)] to-[hsl(220,25%,16%)]",
  },
  {
    icon: Globe,
    title: "Memorias de Inmigración",
    description:
      "El relato épico de quienes cruzaron fronteras para construir un futuro en Chile, desde Valparaíso hasta el interior.",
    gradient: "from-[hsl(25,15%,12%)] to-[hsl(30,12%,16%)]",
  },
];

const Niches = () => {
  return (
    <section id="servicios" className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4 font-sans">
              Especialidades
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4">
              Legados <span className="italic text-gradient-gold">Singulares</span>
            </h2>
            <div className="separator-gold w-16 mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {niches.map((niche, i) => (
            <FadeIn key={niche.title} delay={0.2 * i}>
              <div
                className={`bg-gradient-to-br ${niche.gradient} border border-border/50 p-10 md:p-12 rounded-sm hover:border-primary/30 transition-all duration-500 group`}
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center border border-primary/30 rounded-sm group-hover:bg-primary/10 transition-colors duration-500">
                  <niche.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl mb-4">{niche.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {niche.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Niches;
