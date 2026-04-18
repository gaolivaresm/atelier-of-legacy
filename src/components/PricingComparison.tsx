import FadeIn from "./FadeIn";
import { Check, Minus } from "lucide-react";

const market = [
  "Tiempos de entrega: 12 a 18 meses",
  "Procesos rígidos y poco personalizados",
  "Precio de referencia del segmento",
  "Coordinación a cargo del cliente",
];

const atelier = [
  "Tiempos de entrega: 3 a 5 meses",
  "Partner dedicada y trato cercano",
  "30% más accesible que el mercado",
  "Acompañamiento integral, llave en mano",
];

const PricingComparison = () => {
  return (
    <section id="inversion" className="py-28 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="separator-gold w-20 mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-4">
              Inversión y <span className="text-gradient-gold italic">Valor</span>
            </h2>
            <p className="font-display text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Una propuesta patrimonial pensada para hacer del legado una experiencia
              accesible, sin renunciar al detalle artesanal.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeIn direction="right">
            <div className="h-full border border-border bg-card/40 p-10">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
                Mercado tradicional
              </p>
              <ul className="space-y-4">
                {market.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/70">
                    <Minus
                      size={18}
                      className="text-muted-foreground mt-1 shrink-0"
                    />
                    <span className="font-display text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div className="h-full border border-primary/60 bg-gradient-to-br from-primary/10 via-card to-card p-10 shadow-[0_0_40px_hsl(37,40%,60%,0.12)]">
              <p className="text-xs tracking-widest uppercase text-primary mb-6">
                Atelier de Legado
              </p>
              <ul className="space-y-4">
                {atelier.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <Check size={18} className="text-primary mt-1 shrink-0" />
                    <span className="font-display text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto mb-6">
              <div>
                <p className="font-serif text-5xl md:text-7xl text-gradient-gold font-medium">
                  70%
                </p>
                <p className="font-sans text-xs md:text-sm tracking-widest uppercase text-muted-foreground mt-2">
                  Más rápido
                </p>
              </div>
              <div>
                <p className="font-serif text-5xl md:text-7xl text-gradient-gold font-medium">
                  30%
                </p>
                <p className="font-sans text-xs md:text-sm tracking-widest uppercase text-muted-foreground mt-2">
                  Más accesible
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/80 max-w-xl mx-auto italic">
              Cifras estimadas en base a estudios de mercado del segmento de libros de
              autor en Chile.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default PricingComparison;
