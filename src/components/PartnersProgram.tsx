import { Handshake, GraduationCap, Percent, Upload } from "lucide-react";
import FadeIn from "./FadeIn";

const benefits = [
  {
    icon: Percent,
    title: "5% por referencia",
    description:
      "Reciba una comisión del 5% por cada cliente que confíe su legado al atelier por su recomendación.",
  },
  {
    icon: Handshake,
    title: "+5% por entrevista",
    description:
      "Comisión adicional del 5% si usted realiza personalmente la entrevista de una hora con el cliente.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación incluida",
    description:
      "Acceso a nuestra capacitación en línea y a la guía exclusiva de entrevista patrimonial.",
  },
  {
    icon: Upload,
    title: "Modalidad flexible",
    description:
      "Suba el contenido recopilado en línea o entréguelo en mano. Usted elige cómo colaborar.",
  },
];

const PartnersProgram = () => {
  return (
    <section id="partners" className="py-28 md:py-36 bg-secondary/30">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4 font-sans">
              Colaboración Profesional
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6">
              Programa de{" "}
              <span className="italic text-gradient-gold">Partners</span>
            </h2>
            <p className="font-display text-base md:text-lg text-muted-foreground leading-relaxed">
              Convierta sus contactos en legados. Un programa discreto para corredores
              de propiedades y profesionales con acceso a familias que merecen preservar
              su historia.
            </p>
            <div className="separator-gold w-16 mx-auto mt-8" />
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={0.1 * i}>
              <div className="border border-primary/20 p-6 md:p-8 rounded-sm bg-card/40 h-full hover:border-primary/40 transition-colors duration-500">
                <b.icon className="w-6 h-6 text-primary mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-lg mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {b.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center">
            <a
              href="mailto:hola@taett.cl?subject=Postulación%20como%20Partner"
              className="inline-block border border-primary/60 hover:bg-primary hover:text-primary-foreground text-primary font-sans text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300"
            >
              Postular como Partner
            </a>
            <p className="text-muted-foreground text-xs mt-4 tracking-wide font-sans">
              Evaluamos cada postulación de forma personal y confidencial.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default PartnersProgram;
