import { Download } from "lucide-react";
import FadeIn from "./FadeIn";

const LeadMagnet = () => {
  return (
    <section className="py-28 md:py-36">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <div className="border border-primary/20 p-10 md:p-16 rounded-sm bg-gradient-to-br from-card to-secondary/30 text-center">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4 font-sans">
              Guía Exclusiva
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-medium mb-4">
              Cómo comenzar a construir su{" "}
              <span className="italic text-gradient-gold">legado familiar</span> hoy
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-sans mb-10 max-w-lg mx-auto">
              Descargue nuestra guía exclusiva sobre cómo organizar sus archivos históricos
              y las 10 preguntas esenciales para entrevistar a sus padres.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
            >
              <input
                type="text"
                placeholder="Su nombre"
                className="flex-1 bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-sans"
              />
              <input
                type="email"
                placeholder="Su email"
                className="flex-1 bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-sans"
              />
            </form>

            <button
              type="button"
              className="inline-flex items-center gap-2 bg-primary hover:bg-gold-light text-primary-foreground font-sans text-sm tracking-widest uppercase px-8 py-3 transition-all duration-300 hover:shadow-[0_0_30px_hsl(37,40%,60%,0.3)]"
            >
              <Download className="w-4 h-4" />
              Descargar Guía de Legado
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LeadMagnet;
