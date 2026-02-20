import FadeIn from "./FadeIn";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Libro artesanal de legado familiar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-20">
        <FadeIn delay={0.2}>
          <div className="separator-gold w-24 mx-auto mb-8" />
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight mb-6">
            Su Historia.{" "}
            <span className="text-gradient-gold italic">Elevada a Obra de Arte.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="font-display text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Transformamos memorias familiares y trayectorias de vida en libros de autor
            de edición limitada. Un patrimonio inmortal para las próximas generaciones.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <a
            href="#contacto"
            className="inline-block bg-primary hover:bg-gold-light text-primary-foreground font-sans text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:shadow-[0_0_30px_hsl(37,40%,60%,0.3)]"
          >
            Solicitar una Valoración de Legado
          </a>
          <p className="text-muted-foreground text-xs mt-4 tracking-wide">
            Reciba sin costo su valoración de legado
          </p>
        </FadeIn>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
